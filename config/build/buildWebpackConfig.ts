import {BuildOption} from "./types/config";
import webpack from "webpack";
import path from "path";
import buildLoaders from "./buildLoaders";
import buildResolve from "./buildResolve";
import buildPlugins from "./buildPlugins";
import buildDevServer from "./buildDevServer";

const buildWebpackConfig = (options: BuildOption): webpack.Configuration => {
    const {paths, mode, isDev} = options;

    return {
        mode: mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolve(),
        output: {
            filename: "[name].[contenthash].js",
            path: paths.output,
            clean: true,
        },
        plugins:buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}

export default buildWebpackConfig;
