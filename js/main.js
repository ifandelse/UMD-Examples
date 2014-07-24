require.config( {
    baseUrl: "/node_modules",

    paths: {
        "edgy": "../js/zeModuleCultureClub"
    },

    packages: [
        {name: "underscore", location: "underscore", main: "underscore"},
        {name: "querystring", location: "querystring", main: "index"}
    ]
} );

define( ["edgy"], function( edgy ) {
    console.log("mod has underscore? " + edgy.hasUnderscore());
    console.log("mod has querystring? " + edgy.hasQueryString());
} );