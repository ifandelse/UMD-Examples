require.config( {
    baseUrl: "/",
    paths: {
        underscore : "node_modules/underscore/underscore",
        encode: "node_modules/querystring/encode",
        decode: "node_modules/querystring/decode",
        edgy : "js/zeModuleCultureClub"
    },

    shim: {
        underscore: {
            deps: [],
            exports: "_"
        }
    }
} );

define( ["edgy"], function( edgy ) {
    console.log("mod has underscore? " + edgy.hasUnderscore());
    console.log("mod has querystring? " + edgy.hasQueryString());
} );