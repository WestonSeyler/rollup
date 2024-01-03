
const rollup = require('rollup');
const util = require('util');
async function build() {
    const bundle = await rollup.rollup({
        input: ['../src/index.js'],
    });

    const result=await bundle.generate({
        format: 'es'
    })
    // console.log((util.inspect(bundle)));
    console.log(result,'result');

}

build();