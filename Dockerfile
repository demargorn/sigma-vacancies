### Stage One ###
ARG BUILDER=oven/bun:1.1.8
ARG APP_RUNNER=nginx:mainline-alpine3.18-slim

FROM ${BUILDER} AS build
ARG VITE_BASE_URL="/"

ARG VITE_PROJECT_ID
ENV VITE_PROJECT_ID=${VITE_PROJECT_ID}

ARG VITE_API_USER_URL
ENV VITE_API_USER_URL=${VITE_API_USER_URL}

ARG VITE_API_SKILLS_URL
ENV VITE_API_SKILLS_URL=${VITE_API_SKILLS_URL}

ARG VITE_API_VACANCY_URL
ENV VITE_API_VACANCY_URL=${VITE_API_VACANCY_URL}

ARG VITE_API_VACANCIES_URL
ENV VITE_API_VACANCIES_URL=${VITE_API_VACANCIES_URL}


WORKDIR /app

COPY package*.json ./
RUN bun install

#RUN --mount=type=bind,source=package.json,target=package.json \
#   --mount=type=bind,source=package-lock.json,target=package-lock.json \
#   --mount=type=cache,target=/root/.bun/install/cache \
#   bun install

COPY . . 
RUN bun run build

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

