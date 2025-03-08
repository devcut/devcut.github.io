import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import scss from 'rollup-plugin-scss';

let outputFolder = 'public/';
let inputFolder = 'assets/';
let fileName = 'app';
let name = 'devcut';

export default [
    {
        input: inputFolder + 'js/app.js',
        output: {
            file: outputFolder + 'js/' + fileName + '.min.js',
            name: name
        },
        plugins: [
            scss({
                output: outputFolder + 'css/' + fileName + '.min.css',
                outputStyle: 'compressed',
            }),
            resolve(),
            babel({
                exclude: 'node_modules/**'
            }),
            terser()
        ]
    },
    {
        input: inputFolder + 'js/app.js',
        output: {
            file: outputFolder + 'js/' + fileName + '.js',
            format: 'umd',
            name: name
        },
        plugins: [
            resolve(),
            babel({
                exclude: 'node_modules/**'
            }),
            scss({
                output: outputFolder + 'css/' + fileName + '.css',
            }),
        ]
    }
];