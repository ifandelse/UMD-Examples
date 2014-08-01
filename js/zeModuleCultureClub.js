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