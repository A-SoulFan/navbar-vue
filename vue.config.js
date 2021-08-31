const path = require('path');

const targets = {
    react: process.env.ASF_REACT,
    // 默认为 vue
    vue: process.env.ASF_VUE || !process.env.ASF_REACT,
};

const mode = process.env.NODE_ENV === 'production'
    ? 'production'
    : 'development';

/*
 * +-------------+--------------------+------------------+-------------+
 * | Entry Names | React              | Vue              | Both        |
 * +-------------+--------------------+------------------+-------------+
 * | development | main.react.js      | main.vue.js (Default: vue)     |
 * +-------------+--------------------+--------------------------------+
 * | production  | main.ts                                             | 
 * +-------------+-----------------------------------------------------+
 */
let entryName = path.resolve('src', 'entries', 'main');
if (mode === 'development') {
    entryName += targets.vue? '.vue' : '.react';
    entryName += '.js';
} else {
    entryName += '.ts';
}

module.exports = {
    chainWebpack: config => {
        if (targets.react) {
            config.resolve.extensions
                .prepend('.tsx')
                .prepend('.ts')
                .end();

            config.module
                .rule('react')
                .test(/\.(ts|tsx)$/)
                .use('ts')
                    .loader('ts-loader')
                    .end()
                .end();
        }

        config.output
            .filename('main.js')
            .end();

        if (mode === 'production') {
            config.output
                .library('asf-navbar')
                .libraryTarget('umd')
                .end();
        }

        config
            .entry('app')
                .clear()
                .add(entryName)
                .end()
            .end();
    }
}
