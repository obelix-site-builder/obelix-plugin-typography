const Typography = require("typography");

const sourceHook = (config) => (siteData) => {
  let theme = {};
  if (config.theme) {
    theme = require(config.theme);
  }
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
