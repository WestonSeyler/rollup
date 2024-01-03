
// rollup.config.js
// 以下注释是为了能使用 VSCode 的类型提示
/**
 * @type { import('rollup').RollupOptions }
 */
import path from 'path'
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
const buildOptions = {
    input: ["src/index.js"],
    output: {
        // 产物输出目录
        dir: path.resolve(__dirname, 'dist'),
        // 产物格式
        format: "cjs",
        chunkFileNames: 'chunk-[hash].js',
        // 静态资源文件输出文件名
        assetFileNames: 'assets/[name]-[hash][extname]',
        // 产物输出格式，包括`amd`、`cjs`、`es`、`iife`、`umd`、`system`
        format: 'cjs',
        // 是否生成 sourcemap 文件
        sourcemap: true,
        // 如果是打包出 iife/umd 格式，需要对外暴露出一个全局变量，通过 name 配置变量名
        name: 'MyBundle',
        // 全局变量声明
        globals: {
            // 项目中可以直接用`$`代替`jquery`
            jquery: '$'
        }
    },
    plugins: [
        resolve(),
        commonjs()
    ]
};

export default buildOptions;
