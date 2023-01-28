/* eslint-env node */
module.exports = {
  plugins: {
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};
