// function hasQueryString(url) {
// 	return url.indexOf('?') > -1
// }

// function hasHashString(url) {
// 	return url.indexOf('#') > -1
// }

// function getQueryString(url) {
// 	if(!hasQueryString(url)) return ''
// 	var start = url.indexOf('?')
// 	if(!hasHashString(url)) {
// 		return url.substring(start)
// 	} else {
// 		var end = url.indexOf('#')
// 		return url.substring(start, end)
// 	}
// }

// function getHashString(url) {
// 	if(!hasHashString(url)) return ''
// 	var start = url.indexOf('#')
// 	return url.substring(start)
// }

// function getParameterByName(name, url) {
// 	// if (!url) {
// 	// 	url = window.location.href;
// 	// }
// 	name = name.replace(/[\[\]]/g, "\\$&");
// 	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
// 		results = regex.exec(url);
// 	if (!results) return null;
// 	if (!results[2]) return '';
// 	return decodeURIComponent(results[2].replace(/\+/g, " "));
// }
// var code = getParameterByName('code')
// var next = getParameterByName('next')
// var nextReg = /^http(s)?:\/\/[0-9a-zA-Z]+\.(xinghuolive|xiaozhibo)\.com\//
// if (next.match(nextReg)) {
// 	window.location.href = next + '?code=' + code
// }
