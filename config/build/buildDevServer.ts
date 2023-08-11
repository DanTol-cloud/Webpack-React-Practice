import {BuildOption} from "./types/config";
import type {Configuration as DevServerConfigurations} from "webpack-dev-server"

const buildDevServer = (options: BuildOption): DevServerConfigurations => {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    }
}

export default buildDevServer;
