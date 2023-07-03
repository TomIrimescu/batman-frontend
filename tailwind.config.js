module.exports = {
  content: ['./app/**/*.{ts,tsx,js,jsx}'],
  /** @type {import('rippleui').Config} */
  rippleui: {
    removeThemes: ['dark'],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('rippleui'),
    require('@tailwindcss/forms'),
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
  ],
};
