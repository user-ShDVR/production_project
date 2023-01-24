import webpack from 'webpack'
import path from "path";
import { BuildOptions } from "./types/config";
import { builldPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildLoaders } from "./buildLoaders";
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration{
    const {paths, mode, isDev} = options;
    return {
        mode: mode,
        entry: paths.entry,
        module: {
          rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map': undefined,
        devServer: isDev ? buildDevServer(options): undefined,
        output: {
          filename: '[name].[contenthash].js',
          path: paths.build,
          clean: true,
        },
        plugins: builldPlugins(options),
      }
}