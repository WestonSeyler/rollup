
// rollup.config.js
// 以下注释是为了能使用 VSCode 的类型提示
/**
 * @type { import('rollup').RollupOptions }
 */
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
const buildOptions = {
    input: ["src/index.js"],
    output: {
        dir: 'output',
        format: 'cjs'
    },
    plugins: [
        alias({
            entries: [
                // 将把 import xxx from 'module-a' 
                // 转换为 import xxx from './module-a'
                { find: 'module-a', replacement: '../module-a.js' },
            ]
        }),
        replace({
            'process.env.DEBUG': 'false'
        })
    ]
};

export default buildOptions;
