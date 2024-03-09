const { whenProd, getLoader, loaderByName } = require('@craco/craco');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const { isFound, match } = getLoader(
        webpackConfig.module.rules,
        loaderByName('babel-loader')
      );

      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? [...match.loader.include]
          : [match.loader.include];

        match.loader.include = include.concat([/node_modules\/ol/]);
      }

      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        'ol/layer': 'ol/lib/layer',
        'ol/source': 'ol/lib/source',
      };

      return webpackConfig;
    },
  },
};