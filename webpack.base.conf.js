var path = require('path');
var lodash = require('lodash');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var I18nPlugin = require("i18n-webpack-plugin");
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var postcssImport = require('postcss-import');
var postcssCalc = require('postcss-calc');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var languages = {
  'en_US': {},
  'zh_TW': {},
  'zh_CN': {}
};

var altLangNames = {
  'zh_CN': 'zh-Hans-CN',
  'zh_TW': 'zh-Hant-TW',
  'en_US': 'en-US',
};

function generateConfig(lang) {

  var altLangName = altLangNames[lang];

  var node_modules = path.resolve(__dirname, 'node_modules');

  var config = {
    cache: true,
    entry: {
    },
    output: {
      path: './dist',
      // publicPath: "/assets/",
      filename: '[name].js',
      chunkFilename: 'chunk-[id].js'
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
    module: {
      loaders: [
        { test: /\.html$/, loader: 'html' },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['react', 'es2015']
          }
        },
        // required to write "require('./style.css')"
        { test: /\.s?css$/,    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader') },
        // required for bootstrap icons
        { test: /\.woff/,   loader: 'url-loader?limit=7000' },
        { test: /\.ttf/,    loader: 'file-loader' },
        { test: /\.eot/,    loader: 'file-loader' },
        { test: /\.svg/,    loader: 'file-loader' },
        {
          test: /.*\.(gif|png|jpe?g)$/i,
          loaders: [
            'url?limit=1024&hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?{bypassOnDebug: true, progressive:true, optimizationLevel: 7, interlaced: false}'
          ]
        },
      ]
    },
    postcss: function (webpack) {
      return [
        postcssImport({
          path: ['node_modules', './src'],
          addDependencyTo: webpack
        }),
        autoprefixer({"browsers":["last 2 version", "Android 4.0"]}),
        precss,
        postcssCalc,
      ];
    },
    plugins: [
      new webpack.DefinePlugin({
        BUILD_I18N: '"' + lang + '"',
        BUILD_I18N_PATH: '"./' + lang + '.js"',
        BUILD_INTL_PATH: '"intl/locale-data/jsonp/' + altLangName + '.js"',
      }),
      new I18nPlugin(
        languages[lang],
        '__i18nPluginFn'
      ),
      new ExtractTextPlugin('[name].css', {allChunks:true}),
      new webpack.optimize.OccurenceOrderPlugin(true),
      new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor-' + lang, /* filename= */'vendor-'+ lang + '.js'),
      new HtmlWebpackPlugin({
        inject: true,
        template: 'src/index-' + lang + '.html',
        filename: 'index-' + lang + '.html',
        chunks: ['app-' + lang, 'vendor-' + lang, ],
      }),
    ]
  };

  config.entry['app-' + lang] = ['./src/index.jsx', './src/style.scss'];
  config.entry['vendor-' + lang] = [
    'react',
    'react-dom',
    'react-intl',
    'react-router',
    'nuclear-js',
    'debug',
    'classnames',
    'superagent',
    'es6-promise',
  ];

  // switch(lang) {
  //   case 'en_US':
  //   break;
  //   case 'zh_TW':
  //     config.entry['vendor-' + lang].push(path.resolve(node_modules, 'moment/locale/zh-tw.js'));
  //   break;
  //   case 'zh_CN':
  //     config.entry['vendor-' + lang].push(path.resolve(node_modules, 'moment/locale/zh-cn.js'));
  //   break;
  // }

  return config;
}

module.exports = lodash.map(languages, function(obj, lang) {
  return generateConfig(lang);
});
