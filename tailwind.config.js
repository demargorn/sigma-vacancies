/*eslint-env node*/
module.exports = {
   content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './pages/**/*.{html,js}', './components/**/*.{html,js}', './node_modules/@heathmont/moon-core-tw/**/*.{js,ts,jsx,tsx}'],
   presets: [require('@heathmont/moon-core-tw/lib/private/presets/ds-moon-preset')],
   theme: {
      extend: {}
   },
   plugins: []
};
