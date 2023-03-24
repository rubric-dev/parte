module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-parte`
  extends: ["parte"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
