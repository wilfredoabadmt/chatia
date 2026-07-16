module.exports = {
  babel: {
    plugins: [],
    loaderOptions: (babelLoaderOptions) => {
      if (process.env.NODE_ENV === 'production') {
        // Remove react-refresh dos plugins do Babel para evitar erro em build de produção
        if (babelLoaderOptions.plugins) {
          babelLoaderOptions.plugins = babelLoaderOptions.plugins.filter(
            (plugin) => {
              const name = Array.isArray(plugin) ? plugin[0] : plugin;
              if (typeof name === 'string' && name.includes('react-refresh')) return false;
              if (typeof name === 'object' && name && name.key && name.key.includes && name.key.includes('react-refresh')) return false;
              return true;
            }
          );
        }
      }
      return babelLoaderOptions;
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      // Remove ReactRefreshPlugin em produção
      if (process.env.NODE_ENV === 'production') {
        webpackConfig.plugins = (webpackConfig.plugins || []).filter(
          p => p.constructor?.name !== 'ReactRefreshPlugin'
        );
      }
      webpackConfig.plugins = (webpackConfig.plugins || []).filter(p => p.constructor?.name !== "ESLintWebpackPlugin");
      
      // Limit Terser memory usage by disabling parallel execution
      if (webpackConfig.optimization && webpackConfig.optimization.minimizer) {
        const terser = webpackConfig.optimization.minimizer.find(
          m => m.constructor && m.constructor.name === 'TerserPlugin'
        );
        if (terser) {
          terser.options = {
            ...terser.options,
            parallel: false
          };
        }
      }
      webpackConfig.resolve = webpackConfig.resolve || {};
      webpackConfig.resolve.plugins = (webpackConfig.resolve.plugins || []).filter(p => p.constructor?.name !== "ModuleScopePlugin");
      webpackConfig.resolve.fallback = {
        ...(webpackConfig.resolve.fallback || {}),
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        buffer: require.resolve("buffer/"),
        util: require.resolve("util/"),
        assert: require.resolve("assert/"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        os: require.resolve("os-browserify/browser"),
        url: require.resolve("url/"),
        path: require.resolve("path-browserify")
      };
      webpackConfig.module = webpackConfig.module || {};
      webpackConfig.module.rules = webpackConfig.module.rules || [];
      webpackConfig.module.rules.push({ test: /\.m?js$/, resolve: { fullySpecified: false }});

      // Oculta warnings de source map faltante vindos de dependências específicas.
      webpackConfig.ignoreWarnings = [
        ...(webpackConfig.ignoreWarnings || []),
        /Failed to parse source map/i
      ];

      // Remove html2pdf.js do alcance do source-map-loader para evitar warnings.
      webpackConfig.module.rules
        .filter(rule => rule && rule.enforce === "pre" && Array.isArray(rule.use))
        .forEach(rule => {
          if (rule.use.some(loader => typeof loader === "string" ? loader.includes("source-map-loader") : loader?.loader?.includes("source-map-loader"))) {
            const existingExclude = rule.exclude;
            const html2pdfPattern = /html2pdf\.js/;
            if (Array.isArray(existingExclude)) {
              if (!existingExclude.some(pattern => pattern?.toString() === html2pdfPattern.toString())) {
                rule.exclude = [...existingExclude, html2pdfPattern];
              }
            } else if (existingExclude) {
              rule.exclude = [existingExclude, html2pdfPattern];
            } else {
              rule.exclude = [html2pdfPattern];
            }
          }
        });
      return webpackConfig;
    }
  },
  devServer: {
    client: {
      webSocketURL: 'auto://0.0.0.0:0/ws',
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    allowedHosts: 'all',
  },
  typescript: { enableTypeChecking: false }
};
