const path = require("path");
const Typography = require("typography");

const sourceHook = (config) => (siteData) => {
  let theme = {};
  if (config.theme) {
    // First look in site node_modules
    try {
      theme = require(path.resolve(`./node_modules/${config.theme}`));
    } catch (error) {
      theme = require(config.theme);
    }
  }
  theme = theme.default || theme;
  for (const key in config) {
    if (key != "theme" && key != "fileName") {
      theme[key] = config[key];
    }
  }
  const typography = new Typography(theme);
  siteData.routes.push({
    name: config.fileName || "typography.css",
    type: "asset",
    content: typography.toString(),
  });
  return siteData;
};

module.exports = (config) => {
  return {
    hooks: {
      source: sourceHook(config),
    },
  };
};
