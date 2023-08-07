import webpack from "webpack";
import {BuildOption} from "./types/config";

const buildResolve = (options: BuildOption): webpack.ResolveOptions => {

    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [ options.paths.src, 'node_modules' ],
        mainFiles: ['index'],
        alias: {}
    }
}

export default buildResolve;
