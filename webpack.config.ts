import path from 'path'
import webpack from 'webpack'

import buildWebpack from './config/build/buildWebpack'
import { BuildMode, BuildPaths } from './config/build/types/types'

interface envVariables {
  mode?: BuildMode
  port?: number
}

export default (env: envVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
  }

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 4000,
    mode: env.mode ?? 'development',
    paths,
  })

  return config
}
