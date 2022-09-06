/** @type {import('tailwindcss').Config} */
const themeDefine = require('./src/theme/theme-define');
const plugin = require('tailwindcss/plugin');
const {palette} = themeDefine;
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {

    },
  },
  variants: {
    extend: {

    }
  },
  plugins: [
      plugin(function({ addVariant }) {
        addVariant('important', ({ container }) => {
            container.walkRules(rule => {
                rule.selector = `.\\!${rule.selector.slice(1)}`
                rule.walkDecls(decl => {
                    decl.important = true
                })
            })
        })
    })
  ],
}
