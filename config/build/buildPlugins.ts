import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { type BuildOption } from './types/config'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'

const buildPlugins = ({ paths, isDev }: BuildOption): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),
    isDev && new webpack.HotModuleReplacementPlugin(),
    isDev && new ReactRefreshPlugin()
  ]
}

export default buildPlugins
