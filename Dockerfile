### Stage One ###
ARG BUILDER=oven/bun:1.1.8-alpine
ARG APP_RUNNER=nginx:mainline-alpine3.18-slim

FROM ${BUILDER} AS build
ARG VITE_BASE_URL="/"

WORKDIR /app

COPY package*.json ./
RUN bun install

#RUN --mount=type=bind,source=package.json,target=package.json \
#   --mount=type=bind,source=package-lock.json,target=package-lock.json \
#   --mount=type=cache,target=/root/.bun/install/cache \
#   bun install

COPY . . 
RUN bunx --bun vite build

### Stage Two ###
FROM ${APP_RUNNER}
ARG BUILD_VERSION

COPY --from=build /app/dist /usr/share/nginx/html
COPY entrypoint.sh /app/

ENV ENV=prod
EXPOSE 80

# Metadata
LABEL app.version="${BUILD_VERSION}"

ENTRYPOINT ["/app/entrypoint.sh"]
CMD ["-g", "daemon off;"]

