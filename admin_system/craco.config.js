/* craco.config.js */
const CracoAntDesignPlugin = require('craco-antd');
console.log(CracoAntDesignPlugin)
const path = require('path')
module.exports = {
    webpack: {
        // 别名
        alias: {
            "@": path.resolve("src"),
        }
    },
    babel: {
        plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }]
        ]
    },
    plugins: [
    {
        plugin: CracoAntDesignPlugin,
        pluginOptions: {
            customizeTheme: {
                '@primary-color': '#1DA57A',
            },
        },
        },
    ],
    // pluginOptions:
    // [
    //     {
    //         plugin: CracoAntDesignPlugin,
    //         options: {
    //             customizeTheme: {
    //                 '@primary-color': '#1DA57A',
    //             },
    //             lessLoaderOptions: {
    //                 lessOptions: {
    //                     javascriptEnabled: true,
    //                 }
    //             },
                
    //         },
    //     }
    // ],
};
