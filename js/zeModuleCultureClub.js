/*
	The bummer is that cajon.js isn't quite sure what to do about the
	relative paths inside querystrings's index.js. BUT, we can require
	those two modules directly and all works without a build.
*/
define([
	"underscore",
	"querystring"
], function(_, qs) {
	return {
		hasUnderscore: function(){
			return typeof _ !== "undefined";
		},
		hasQueryString: function(){
			return typeof qs.decode !== "undefined" &&
				   typeof qs.encode !== "undefined";
		}
	};
});