window.errorCount = 0, window.postError = function(e, t, n) {
if (window.errorCount >= 3) return;
window.errorCount += 1, e = e.toString(), t && (t = t.toString()), n || (n = 0);
if (!e) return;
if (!t || t === "") t = window.location.href;
if (t == "http://127.0.0.1:37935/xpopup.js") return;
if (e == "Error: Permission denied to access property 'toString'") return;
if (t.match(/block.*(aspx|cgi)/)) return;
if (!t.match(".8tracks.com")) return;
if (t.match("graph.facebook.com")) return;
if (e == "Error: Script error") return;
if (navigator.userAgent.match(/MSIE (3|4|5|6|7)/)) return;
typeof App != "undefined" && App.currentPage && (t = "[" + App.currentPage + "] " + t);
var r = [ "to call method Location.toString", "Error loading script", "Cannot read property 'availWidth' of null", "Unable to set property 'getFlashVariable' of undefined or null reference", "Unable to set property 'flashGetMessage' of undefined or null reference", "Unable to set property 'evidonCustomL3' of undefined or null reference", "NS_ERROR_UNEXPECTED: Component returned failure code: 0x8000ffff" ], i = !1;
_.each(r, function(t) {
e.match(t) && (i = !0);
});
if (i) return;
if (e.match("to call method Location.toString") || e.match("Error loading script") || e === "Script error." && n === 0) return;
if (navigator.userAgent.match(/Googlebot\/2.1; \+http:\/\/www.google.com\/bot.html/) && Math.random() < .05) return;
var s = n + ": " + e + "\nreferrer: " + document.referrer;
return $.ajax({
url: "/log_entries.jsonh",
type: "POST",
data: {
"log_entry[title]": "Error",
"log_entry[url]": t,
"log_entry[description]": s,
"log_entry[user_agent]": navigator.userAgent
}
}), $("#quote").html("ERROR! " + t + "<br>" + s.replace(/\n/g, "<br>")), !0;
}, window.onerror = function(e, t, n) {
window.postError(e, t, n);
};

var UrlParser = {};

UrlParser.parse = function(e) {
var t = {
strictMode: !1,
key: [ "source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor" ],
q: {
name: "queryKey",
parser: /(?:^|&)([^&=]*)=?([^&]*)/g
},
parser: {
strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
}
}, n = t, r = n.parser[n.strictMode ? "strict" : "loose"].exec(e), i = {}, s = 14;
while (s--) i[n.key[s]] = r[s] || "";
return i[n.q.name] = {}, i[n.key[12]].replace(n.q.parser, function(e, t, r) {
t && (i[n.q.name][t] = r);
}), i;
}, window.ParsedLocation = {
init: function() {
var e = window.location.href;
window.location.pathname === "/" && _.indexOf(window.location.hash.substr(1), "#") > 0 && (e = window.location.protocol + window.location.host + "/" + window.location.hash.substr(1)), this.parsedReferrerUrl = UrlParser.parse(document.referrer), _.extend(this, this.parse(e));
},
parseParamsStr: function(e) {
return res = {}, _.each(e.split("&"), function(e) {
var t = e.split("=");
res[t[0]] = t[1];
}), res;
},
parser: UrlParser,
parse: function(e) {
var t = [ "test_mode", "google_preview", "clickthrough" ], n = {};
n.parsedUrl = UrlParser.parse(e), n.urlParams = this.parseParamsStr(n.parsedUrl.query), n.urlHashParams = this.parseParamsStr(n.parsedUrl.anchor);
var r = function(e) {
return typeof n.urlParams[e] == "undefined";
};
if (_.all(t, r) && window.history && window.history.pushState && window.history.replaceState) {
var i = window.location.pathname, s = Object.keys(n.urlHashParams).join("#");
s && (i = i + "#" + s), window.history.replaceState({}, "", i);
}
return n;
}
}, window.ParsedLocation.init(), !function(e, t) {
var n = {
isArray: Array.isArray || function(e) {
return Object.prototype.toString.call(e) === "[object Array]";
},
isPlainObject: function(e) {
return e !== void 0 && e === Object(e);
},
toArray: function(e) {
return Array.prototype.slice.call(e);
},
getKeys: Object.keys || function(e) {
var t = [], n = "";
for (n in e) e.hasOwnProperty(n) && t.push(n);
return t;
},
escape: function(e) {
if (e === t) return "";
try {
return e.toString().replace(/[,;"\\=\s%]/g, function(e) {
return encodeURIComponent(e);
});
} catch (n) {
return msg = "TRAX " + n.message + " : cookie.escape(" + e + ")", window.postError(msg), e;
}
},
retrieve: function(e, n) {
return e === t ? n : e;
}
}, r = function() {
return r.get.apply(r, arguments);
};
r.defaults = {}, r.expiresMultiplier = 86400, r.set = function(t, r, i) {
if (n.isPlainObject(t)) for (var s in t) t.hasOwnProperty(s) && this.set(s, t[s], r); else {
i ? typeof i == "number" ? i = {
expires: i
} : n.isPlainObject(i) || (i = {}) : i = {};
var o, u;
try {
o = i.expires !== void 0 ? i.expires : this.defaults.expires || "", u = typeof o, u === "string" && o !== "" ? o = new Date(o) : u === "number" && (o = new Date(+(new Date) + 1e3 * this.expiresMultiplier * o));
} catch (a) {
var f = "CUSTOM cookie setting error for key:" + t + " message:" + a.message + " options=" + JSON.stringify(i);
o = new Date(2020, 1, 1), window.postError(f);
}
o !== "" && "toGMTString" in o && (o = ";expires=" + o.toGMTString());
var l = i.path || this.defaults.path;
l = l ? ";path=" + l : "";
var c = _.isUndefined(i.domain) ? this.defaults.domain : i.domain;
c = c && c.length > 0 ? ";domain=" + c : "";
var h = i.secure || this.defaults.secure ? ";secure" : "";
e.cookie = n.escape(t) + "=" + n.escape(r) + o + l + c + h;
}
return this;
}, r.remove = function(e) {
e = n.isArray(e) ? e : n.toArray(arguments);
for (var t = 0, r = e.length; t < r; t++) this.set(e[t], "", -1), this.set(e[t], "", {
domain: "",
expires: -1
});
return this;
}, r.empty = function() {
return this.remove(n.getKeys(this.all()));
}, r.get = function(e, r) {
r = r || t;
var i = this.all();
if (n.isArray(e)) {
var s = {};
for (var o = 0, u = e.length; o < u; o++) {
var a = e[o];
s[a] = n.retrieve(i[a], r);
}
return s;
}
return n.retrieve(i[e], r);
}, r.all = function() {
if (e.cookie === "") return {};
var t = e.cookie.split("; "), n = {};
for (var r = 0, i = t.length; r < i; r++) {
var s = t[r].split("=");
n[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
}
return n;
}, r.enabled = function() {
if (navigator.cookieEnabled) return !0;
var e = r.set("_", "_").get("_") === "_";
return r.remove("_"), e;
}, typeof define == "function" && define.amd ? define(function() {
return r;
}) : typeof exports != "undefined" ? exports.cookie = r : window.cookie = r;
}(document), cookie.defaults.expires = 365, cookie.defaults.path = "/";

var prefix = App.subdomain !== "" ? "." + App.subdomain : "", domain = prefix + ".8tracks.com";

cookie.defaults.domain = domain;

var TraxClientStorage = {
get: function(e) {
var t = localStorage.getItem(e);
try {
return t ? JSON.parse(t) : null;
} catch (n) {
return localStorage.removeItem(e), null;
}
},
set: function(e, t) {
return localStorage.setItem(e, JSON.stringify(t)), t;
},
destroy: function(e) {
return localStorage.removeItem(e);
},
clearAll: function() {
return localStorage.clear();
},
increment: function(e, t) {
return t || (t = 1), TraxClientStorage.set(e, (TraxClientStorage.get(e) || 0) + t);
}
}, TraxLaboratory = function(e) {
var t = {};
return t.experiments = e, t.isAssignedTo = function(t) {
return _.findWhere(e, {
name: t
});
}, t.variationFor = function(e) {
var n = t.isAssignedTo(e);
return n ? n.variation : null;
}, t.any = function() {
return _.size(e) > 0;
}, t.debug = function() {
return e;
}, t;
}, TraxEvents = function() {
function i() {
return (new Date).getTime() + "" + cookie.get("visitor_id");
}
function s() {
_.each(r.experiments, function(e) {
_.each(n[e.name], function(t) {
_.defer(t, e, r);
}), n[e.name] = [];
}.bind(this));
}
function o(e) {
r = TraxLaboratory(e.experiments), s();
}
function u() {
App.isMobileWeb && (e.eventsUrl = "/events.json");
}
function a() {
var t = App.subdomain !== "" ? "." + App.subdomain : "", n = cookie.get("visitor_id");
e.visitorId = n || f(), cookie.set("visitor_id", e.visitorId);
}
function f() {
return (new Date).getTime() + Math.round(Math.random() * 1e4).toString();
}
function l(n, r) {
if (!t) return;
var i = e.updateLastAction();
r.client_timestamp = (new Date).getTime();
var s = {
name: n,
properties: r,
visitor_id: e.visitorId,
session_id: i
};
return e.api_key && (s.api_key = e.api_key), s = c(s), $.ajax({
url: e.eventsUrl,
type: "post",
data: s,
success: o,
headers: {
"X-Visitor-Id": e.visitorId,
"X-Session-Id": i
}
});
}
function c(e) {
e = _.clone(e);
var t = Math.round(+(new Date) / 1e3);
return e.cookie_validation_id = t, cookie.set("cookie_validation_id", t), e;
}
function h() {
var e = cookie.get("lastAction");
if (!e) return !0;
var t = 18e5, n = new Date(parseInt(e, 10));
return new Date - n > t;
}
function p(e) {
var t = e.split(/^home_/);
return _.size(t) >= 2 ? {
name: "home",
type: _.rest(t).join("")
} : {
name: e,
type: "regular"
};
}
function d() {
var e = cookie.get("launchCount");
return e ? e = parseInt(e) + 1 : e = 1, cookie.set("launchCount", e), e;
}
var e = {}, t = cookie.enabled();
e.visitorId = null, e.eventsUrl = "/events";
var n = {}, r = TraxLaboratory([]);
return e.onExperimentJoined = function(e, t) {
n[e] || (n[e] = []), n[e].push(t), r.any() && s();
}, e.send = function(e, t) {
return l(e, t);
}, u(), a(), e.setApiKey = function(t) {
e.api_key = t;
}, e.updateLastAction = function() {
if (!t) return null;
var n = h(), r = (new Date).getTime();
cookie.set("lastAction", r);
var s = cookie.get("sessionId");
if (!s || n) s = i(), cookie.set("sessionId", s), e.onLaunch();
return s;
}, e.onLaunch = function() {
var e = {
event_type: "session",
content_type: "session",
referrer: document.referrer,
launch_count: d(),
page_type: App.currentPage ? p(App.currentPage).name : "other"
}, t = ParsedLocation.urlParams;
_.each([ "utm_source", "utm_medium", "utm_term", "utm_content", "utm_campaign" ], function(n) {
t[n] && (e[n] = t[n]);
}), l("session start", e);
}, e.pageView = function(e, t) {
var n = p(e), r = "view", i = {
view_type: n.type,
url_params: ParsedLocation.urlParams,
page_type: n.name
};
t && (i = _.extend(i, t)), l(r, i);
}, e.launchChromecast = function(e) {
var t = {
mix_id: e
};
l("Launch chromecast", t);
}, e.chromeCastError = function(e) {
var t = {
user_agent: navigator.userAgent,
error: e
};
l("Chromecast failure", t);
}, e;
}(), E8tracksAPI = function() {
function a() {
n = !0;
for (var e in r) r[e]();
}
function f(t) {
if (!e.debug) return;
window.console && (typeof t == "object" ? console.log(t) : console.log("E8tracksAPI: " + t));
}
function l() {
f("jQuery not found, loading from: " + s.jquery_url);
var e = document.createElement("script");
e.setAttribute("type", "text/javascript"), e.setAttribute("src", s.jquery_url), e.onload = a, document.getElementsByTagName("head")[0].appendChild(e);
}
function c(t) {
return o.play_token ? !0 : (e.getPlayToken(t), !1);
}
function h(e, t) {
for (i in e) if (!t[e[i]]) throw new Error("'" + e[i] + "' parameter is required");
}
function d(t, n) {
var r = {
type: "GET",
dataType: e.request_type,
timeout: s.request_timeout,
error: function() {
f("error on request");
}
}, i = $.extend({}, r, t);
i.data = i.data || {}, i.data = $.extend({
http_referrer: p
}, i.data), e.api_key ? i.data.api_key = e.api_key : null, i.url = s.service_url + i.url + "." + e.request_type, f("Request: " + i.url + "?" + $.param(i.data));
var o = i.success;
i.success = function(e) {
f("Response: " + i.url + "?" + $.param(i.data)), f(e), o(e);
}, $.ajax(i);
}
var e = {};
e.api_key = "3b7b9c79a600f667fe2113ff91183149779a74b8", e.debug = !0, e.request_type = "jsonp";
var t = .1, n = !1, r = [], s = {
service_url: window.location.protocol + (App && App.env == "development" ? "//localhost.8tracks.com:3000/" : "//8tracks.com/"),
jquery_url: window.location.protocol + "//code.jquery.com/jquery.min.js",
request_timeout: 15e3
}, o = {
play_token: null,
user_token: null,
current_mix: null,
current_set: null,
current_track: null,
current_user: null
}, u = {
trigger: function(e) {
$(document).trigger(e);
},
types: {
mixRetrieved: function() {},
mixPlayed: function() {},
mixComplete: function() {},
trackRetrieved: function() {},
trackStarted: function() {},
trackComplete: function() {}
}
};
e.settings = function(e) {
return s[e];
}, e.data = function(e) {
return o[e];
}, e.setRequestType = function(t) {
if (t !== "xml" && t !== "json" && t !== "jsonp") throw new Error("invalid request type: " + t);
e.request_type = t;
};
var p = document.referrer;
return p = p.replace(/\?.*$/g, ""), e.ready = function(e) {
n ? e() : r.push(e);
}, e.Events = {}, e.Events.bind = function(e, t) {
if (typeof u.types[e] != "function") {
f("ERROR - Events.bind - invalid event type");
return;
}
if (typeof t != "function") {
f("ERROR - Events.bind - no event handler specified");
return;
}
$(document).bind(e, t);
}, e.Events.unbind = function(e, t) {
if (typeof u.types[e] != "function") {
f("ERROR - Events.bind - invalid event type");
return;
}
typeof t != "function" ? $(document).unbind(e) : $(document).unbind(e, t);
}, e.getPlayToken = function(e) {
d({
url: "sets/new",
success: function(t) {
o.play_token = t.play_token, e && e(t);
}
});
}, e.login = function(e, t, n) {
var r = '<iframe src="' + s.service_url + "sessions.json?" + $.param({
login: e,
password: t
}) + '" frameborder="0" width="0" height="0"></iframe>';
$(r).appendTo("body").load(function() {
d({
url: "current",
success: function(e) {
o.current_user = e.user, n && n(e);
}
});
});
}, e.logout = function(e) {
d({
url: "logout",
success: function(t) {
o.current_user = null, e && e(t);
}
});
}, e.getCurrentUser = function(e) {
d({
url: "users/current",
success: function(t) {
o.current_user = t.user, e && e(t);
}
});
}, e.getUserInfo = function(e, t) {
d({
url: "users/" + e,
success: function(e) {
t && t(e);
}
});
}, e.getUserMixes = function(e, t, n) {
d({
url: "users/" + e + "/mixes",
data: t,
success: function(e) {
n && n(e);
}
});
}, e.getMixReviews = function(e, t, n) {
d({
url: "mixes/" + e + "/reviews",
data: t,
success: function(e) {
n && n(e);
}
});
}, e.getUserReviews = function(e, t, n) {
d({
url: "users/" + e + "/reviews",
data: t,
success: function(e) {
n && n(e);
}
});
}, e.likeMix = function(e, t) {
d({
url: "mixes/" + e + "/like",
success: function(e) {
t && t(e);
}
});
}, e.unlikeMix = function(e, t) {
d({
url: "mixes/" + e + "/unlike",
success: function(e) {
t && t(e);
}
});
}, e.toggleLike = function(e, t) {
d({
url: "mixes/" + e + "/toggle_like",
success: function(e) {
t && t(e);
}
});
}, e.favTrack = function(e, t) {
d({
url: "tracks/" + e + "/fav",
success: function(e) {
t && t(e);
}
});
}, e.unfavTrack = function(e, t) {
d({
url: "tracks/" + e + "/unfav",
success: function(e) {
t && t(e);
}
});
}, e.toggleFav = function(e, t) {
d({
url: "tracks/" + e + "/toggle_fav",
success: function(e) {
t && t(e);
}
});
}, e.follow = function(e, t) {
d({
url: "users/" + e + "/follow",
success: function(e) {
t && t(e);
}
});
}, e.unfollow = function(e, t) {
d({
url: "users/" + e + "/unfollow",
success: function(e) {
t && t(e);
}
});
}, e.toggleFollow = function(e, t) {
d({
url: "users/" + e + "/toggle_follow",
success: function(e) {
t && t(e);
}
});
}, e.getMix = function(e, t) {
h([ "id" ], e), d({
url: "mixes/" + e.id,
success: function(e) {
o.current_mix = e.mix, u.trigger("mixRetrieved"), t && t(e.mix);
}
});
}, e.setMix = function(e, t) {
h([ "mix" ], e), o.current_mix = e.mix, u.trigger("mixRetrieved"), t && t(e.mix);
}, e.nextMix = function(t) {
h([ "current_mix" ], {
current_mix: o.current_mix
});
if (!c(function() {
e.nextMix(t);
})) return;
d({
url: "sets/" + o.play_token + "/next_mix",
data: {
mix_id: o.current_mix.id
},
success: function(e) {
o.current_mix = e.next_mix, u.trigger("mixRetrieved"), t && t(e.next_mix);
}
});
}, e.playMix = function(t, n, r) {
h([ "current_mix" ], {
current_mix: o.current_mix
});
if (!c(function() {
e.playMix(t, n, r);
})) return;
var i = {
mix_id: o.current_mix.id
};
r && (i.shuffle = !0), d({
url: "sets/" + o.play_token + "/play",
data: i,
success: function(e) {
if (e.status == "403 Forbidden" || e.status == "401 Unauthorized") {
n && n({
message: e.notices
});
return;
}
e.notices && n && n({
message: e.notices
}), o.current_set = e.set, o.current_track = e.set.track, u.trigger("mixPlayed"), t && t(e.set.track);
}
});
}, e.reportTrack = function() {
d({
url: "sets/" + o.play_token + "/report",
data: {
track_id: o.current_track.id,
mix_id: o.current_mix.id
},
success: function() {}
});
}, e.nextTrack = function(t) {
h([ "current_mix" ], {
current_mix: o.current_mix
});
if (!c(function() {
e.nextTrack(t);
})) return;
d({
url: "sets/" + o.play_token + "/next",
data: {
mix_id: o.current_mix.id
},
success: function(e) {
o.current_set = e.set, o.current_track = e.set.track, e.set.at_end ? (u.trigger("onComplete"), t && t(e.set.track, !0)) : (u.trigger("trackRetrieved"), t && t(e.set.track));
}
});
}, e.skipTrack = function(t, n) {
h([ "current_mix" ], {
current_mix: o.current_mix
});
if (!c(function() {
e.nextTrack(t);
})) return;
d({
url: "sets/" + o.play_token + "/skip",
data: {
mix_id: o.current_mix.id
},
success: function(e) {
if (o.current_set.skip_allowed == 0) {
n && n({
message: e.notices
});
return;
}
if (e.set.at_end) {
u.trigger("onComplete"), t && t({}, !0);
return;
}
o.current_set = e.set, o.current_track = e.set.track, u.trigger("trackRetrieved"), t && t(e.set.track);
}
});
}, e.getTracksPlayed = function(e) {
d({
url: "sets/" + o.play_token + "/tracks_played",
data: {
mix_id: o.current_mix.id
},
success: function(t) {
o.current_track = t.set.track, u.trigger("trackRetrieved"), e && e(t.set.track);
}
});
}, e.getMixes = function(e, t) {
e = e || {}, e.feed = 0, d({
url: "mixes",
data: e,
success: function(e) {
t && t(e);
}
});
}, function() {
typeof jQuery == "undefined" ? l() : a();
}(), e;
}(), E8tracksPlayer = function() {
var e = this, t = null, n = {
onplay: function() {
$(document).trigger("E8tracksPlayer-play"), e.canplaythrough || (e.canplaythrough = !0, $(document).trigger("E8tracksPlayer-canplaythrough"));
},
onpause: function() {
$(document).trigger("E8tracksPlayer-pause");
},
onstop: function() {
$(document).trigger("E8tracksPlayer-stop");
},
onfinish: function() {
t.setPosition(t.duration - 100), t.pause(), $(document).trigger("E8tracksPlayer-finish");
},
onload: function() {
soundManager.onPosition("currentTrack", 3e4, function(e) {
$(document).trigger("E8tracksPlayer-report");
});
},
onprogress: function() {
var e = t.position / t.durationEstimate * 100;
$(document).trigger("E8tracksPlayer-progress", [ e ]);
}
};
(function() {
typeof preferFlash == "undefined" && (preferFlash = !0), localStorage && localStorage.getItem("html5") && (preferFlash = !1), soundManager.preferFlash = preferFlash, soundManager.useFlashBlock = preferFlash, soundManager.onready(function() {
e.ready = !0, $(document).trigger("E8tracksPlayer-ready");
});
})(), this.autoplay = !1, this.ready = !1, this.canplaythrough = !1, this.load = function(r) {
$(document).trigger("E8tracksPlayer-loadstart"), e.stop(), t && t.destruct(), e.canplaythrough = !1, t = soundManager.createSound({
id: "currentTrack",
url: r,
onfinish: n.onfinish,
onplay: n.onplay,
onresume: n.onplay,
onpause: n.onpause,
onstop: n.onstop,
onload: n.onload,
whileplaying: n.onprogress
}), t.load(), e.autoplay == 1 && e.play();
}, this.play = function() {
t && t.play();
}, this.pause = function() {
t && t.pause();
}, this.stop = function() {
t && t.stop();
}, this.getSoundManager = function() {
return t;
};
}, E8tracksEmbedPlayerUI = E8tracksEmbedPlayerUI || {
audioPlayer: null,
ui: null,
touchDevice: null,
readyQueue: [],
mixID: null,
shared: !1,
autoPlay: !1,
shuffle: !1,
root_path: "/embeds/player_v3_universal/",
init: function() {
E8tracksAPI.debug = !1, E8tracksAPI.request_type = "jsonp";
var e = this, t = new E8tracksPlayer(this.root_path), n = "ontouchend" in window, r = n ? "touchend" : "click";
this.pressEvent = r, this.useOriginals ? this.coverSize = "original_imgix_url" : this.coverSize = "max1024";
var i = {};
i.player = $(".player"), i.controls = $(".trackControls"), i.expandedControls = $(".expandedControls"), i.frontside = $(".frontside"), i.mixContentContainer = $(".mixContentContainer"), i.startMix = $(".startMix"), i.playButtons = $(".togglePlay"), i.skipButtons = $(".skipTrack"), i.nextButtons = $(".nextMix"), i.progressBar = $(".progressBar"), i.mixName = $(".mixName"), i.mixArt = $(".mixArt"), i.djName = $(".djName"), i.description = $(".description"), i.tags = $(".tags"), i.likes_count = $(".likes_count"), i.plays_count = $(".plays_count"), i.trackName = $(".trackName"), i.trackBuy = $(".buy"), i.message = $(".message"), i.messageContainer = $(".messageContainer"), i.likeButtonContainer = $(".likeBtnContainer"), i.infoButton = $(".infoBtn"), i.infoContainer = $(".infoContainer"), i.infometa = $(".infometa"), i.tracklisting = $("#tracklisting"), i.infoCloseButton = $(".infoContainer .closeBtn"), i.likeButton = $(".likeBtn"), i.shareButton = $(".shareBtn"), i.sharing = $(".shareContentContainer"), i.sharingCloseButton = $(".shareContentContainer .closeBtn"), i.embedContainer = $(".embedContainer"), i.linkContainer = $(".linkContainer"), i.codeInput = $(".embed"), i.embedButton = $(".embedBtn"), i.linkButton = $(".linkBtn"), i.expandedControlHeight = 47, i.expandedControlAnimTime = 500, i.messageTimeout = 5e3, i.touchDeviceControlHideTime = 7e3, i.mixSelectorMixes = $("#mix_selector .mixes"), i.mixSelectors = $("#mix_selector .thumbnail"), i.mixSelectorPaging = $("#mix_selector .page_horizontal"), i.mixSelectorCurrentPage = 0, this.ui = i, this.touchDevice = "ontouchend" in window, this.audioPlayer = t, $(document).bind("E8tracksPlayer-ready", function() {
var t = window.location.protocol + "//8tracks.com/null.mp3";
E8tracksEmbedPlayerUI.audioPlayer.load(t), e.ui.skipButtons.bind(r, function() {
return e.skipToNextTrack(), !1;
}), e.ui.nextButtons.bind(r, function() {
return e.nextMix(), !1;
});
if (e.readyQueue.length) for (var n in e.readyQueue) e.readyQueue[n]();
navigator.userAgent.match(/Android/i) && $("body").addClass("android"), e.autoPlay && e.start(), skip_analytics || (TraxEvents.updateLastAction("mix embed"), TraxEvents.pageView("mix embed"));
}), $(document).bind("E8tracksPlayer-play", function() {
i.player.addClass("playing"), i.playButtons.unbind(r).bind(r, function() {
return t.pause(), !1;
});
}), $(document).bind("E8tracksPlayer-pause", function() {
i.player.removeClass("playing"), i.playButtons.unbind(r).bind(r, function() {
return t.play(), !1;
});
}), $(document).bind("E8tracksPlayer-stop", function() {
i.player.removeClass("playing"), i.progressBar.css({
width: 0
}), i.playButtons.unbind(r).bind(r, function() {
return t.play(), !1;
});
}), $(document).bind("E8tracksPlayer-finish", function() {
E8tracksEmbedPlayerUI.getNextTrack();
}), $(document).bind("E8tracksPlayer-progress", function(e, t) {
i.progressBar.css({
width: t + "%"
});
}), $(document).bind("E8tracksPlayer-report", function() {
E8tracksAPI.reportTrack();
}), i.startMix.attr("href") == "javascript:void(0)" ? i.startElement = i.startMix : i.startElement = i.startMix.find(".button"), i.startElement.one("touchend click", function(e) {
E8tracksEmbedPlayerUI.audioPlayer.play();
if (click_tracker) {
var t = document.createElement("IMG");
t.src = window.click_tracker, document.body.appendChild(t);
}
return e.preventDefault(), !1;
}), i.startElement.bind("touchend click", function(e) {
E8tracksEmbedPlayerUI.start(e), e.preventDefault();
}), E8tracksAPI.getCurrentUser(function(t) {
t.user != null && e.ui.likeButton.show();
}), e.ui.likeButtonContainer.fadeIn(), e.ui.likeButton.bind(r, function() {
E8tracksAPI.toggleLike(e.mixID), e.ui.likeButton.hasClass("liked") ? e.ui.likeButton.attr("title", "Like") : (e.ui.likeButton.addClass("just_liked").attr("title", "Unlike"), setTimeout(function() {
e.ui.likeButton.removeClass("just_liked");
}, 1e3)), e.ui.likeButton.toggleClass("liked");
}), e.ui.shareButton.bind(r, function(t) {
return e.ui.mixContentContainer.hide(), e.ui.sharing.fadeIn("fast"), t.preventDefault(), !1;
}), e.ui.sharingCloseButton.bind(r, function(t) {
return e.ui.sharing.hide(), e.ui.mixContentContainer.fadeIn("fast"), t.preventDefault(), !1;
}), e.ui.infoButton.bind(r, function(t) {
return e.ui.frontside.hide(), e.ui.infoContainer.fadeIn("fast"), i.tracklisting.height("auto"), i.tracklisting.height(i.infoContainer.height() - i.infometa.height() - 41 + "px"), t.preventDefault(), !1;
}), e.ui.infoCloseButton.bind(r, function(t) {
return e.ui.infoContainer.hide(), e.ui.frontside.fadeIn("fast"), t.preventDefault(), !1;
}), e.ui.embedButton.bind(r, function(t) {
return e.ui.linkContainer.hide(), e.ui.embedContainer.fadeIn(), t.preventDefault(), !1;
}), e.ui.linkButton.bind(r, function(t) {
return e.ui.embedContainer.hide(), e.ui.linkContainer.fadeIn(), t.preventDefault(), !1;
}), e.ui.codeInput.bind(r, function(e) {
$(e.currentTarget).select(), e.preventDefault();
}), e.ui.mixSelectors.bind(r + " click", function(t) {
return e.selectMix($(t.currentTarget).data("mix_id")), $(t.currentTarget).addClass("selected"), t.preventDefault(), !1;
}), e.ui.mixSelectorPaging.bind(r, function(t) {
t.preventDefault();
var n = $(t.currentTarget).hasClass("right") ? "right" : "left";
return $(t.currentTarget).hasClass("disabled") || e.selectorPage(n), !1;
}), e.shared || (e.ui.sharing.find(".fb").html(fbCode), e.ui.sharing.find(".tw").html(twCode), e.ui.sharing.find(".tb").html(tbCode), e.shared = !0);
},
start: function() {
try {
if (window.top && window.top.location.hostname == window.location.hostname) {
window.top.App.Trax.play_from_embed(mix, E8tracksEmbedPlayerUI), E8tracksEmbedPlayerUI.ui.startElement.hide();
return;
}
} catch (e) {}
return E8tracksAPI.playMix(function(e) {
var t = E8tracksEmbedPlayerUI;
t.ui.player.unbind(), t.loadTrack(e), t.audioPlayer.play(), t.nowPlayingMixId = t.mixID, t.ui.mixSelectorMixes.find('.thumbnail[data-mix_id="' + t.mixID + '"]').addClass("playing").siblings().removeClass("playing"), t.ui.startElement.hide(), t.ui.nextButtons.hide(), t.ui.skipButtons.show(), t.expandControls(), t.onMixBegin();
}, function(e) {
E8tracksEmbedPlayerUI.showMessage(e.message);
}, this.shuffle), !1;
},
onMixBegin: function() {
var e = E8tracksEmbedPlayerUI;
e.touchDevice ? (e.ui.player.bind(E8tracksEmbedPlayerUI.pressEvent, function() {
e.expandControls(), $(e.ui.startMix).focus();
}), e.ui.player.bind("blur", function() {
e.collapseControls();
})) : e.ui.player.hover(function() {
e.expandControls();
}, function() {
e.collapseControls();
});
},
onMixComplete: function() {
var e = E8tracksEmbedPlayerUI, t = window.location.protocol + "//8tracks.com/null.mp3";
e.audioPlayer.stop(), e.audioPlayer.load(t), e.displayTrack({
name: "",
performer: "",
year: ""
}), e.ui.progressBar.css({
width: 0
}), e.ui.controls.hide(), e.ui.player.removeClass("playing"), e.ui.player.unbind(), e.ui.startMix.show(), e.touchDevice ? (e.ui.player.unbind(E8tracksEmbedPlayerUI.pressEvent), e.ui.player.unbind("blur")) : e.ui.player.unbind("hover");
},
getMix: function(e) {
this.mixID = e;
var t = this;
E8tracksAPI.getMix({
id: e
}, function(e) {
t.loadMix(e);
});
},
setMix: function(e) {
this.mixID = e.id;
var t = this;
E8tracksAPI.setMix({
mix: e
}, function(e) {
t.loadMix(e);
});
},
loadMix: function(e) {
var t = this;
t.ui.mixName.text(e.name).attr("href", "http://8tracks.com" + e.web_path), t.ui.djName.text(e.user.login).attr("href", "http://8tracks.com" + e.user.web_path), t.ui.mixContentContainer.fadeIn(), t.ui.description.html(e.description_html ? e.description_html : e.description), t.ui.tags.empty();
var n = e.tag_list_cache.split(",");
for (var r in n) t.ui.tags.append('<a class="tag" href="http://8tracks.com/mixes/' + encodeURIComponent(n[r]) + '" target="_blank">' + n[r] + "</a> ");
t.ui.likes_count.text(e.likes_count), t.ui.plays_count.text(e.plays_count), t.ui.tracklisting.hide().empty(), t.ui.mixArt.hide();
var i = e.cover_urls[t.coverSize];
cover_url_override && (i = cover_url_override), i || (i = e.cover_urls.original), window.location.protocol == "https:" && (i = i.replace("http://", "https://"), i = i.replace("imgix.8tracks.com", "8tracks.imgix.net"), i = i.replace("images.8tracks.com", "d2ykdu8745rm9t.cloudfront.net"));
var s = $("<img />").attr("src", i).one("load", function() {
t.ui.mixArt.css({
"background-image": "url(" + i + ")",
"-ms-filter": "\"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + i + "', sizingMethod='scale')\"",
filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + i + '", sizingMethod="scale")'
}).fadeIn();
}).each(function() {
this.complete && $(this).load();
});
t.ui.mixSelectors.length > 0 && t.nowPlayingMixId == t.mixID ? (t.ui.startMix.hide(), t.ui.controls.fadeIn()) : (t.ui.controls.hide(), t.ui.startMix.fadeIn()), t.ui.infoContainer.hide(), t.ui.frontside.fadeIn("fast"), e.liked_by_current_user ? t.ui.likeButton.addClass("liked") : t.ui.likeButton.removeClass("liked");
},
getNextTrack: function() {
E8tracksAPI.nextTrack(function(e, t) {
t ? E8tracksEmbedPlayerUI.onMixComplete() : (E8tracksEmbedPlayerUI.loadTrack(e), E8tracksEmbedPlayerUI.audioPlayer.play());
}, function(e) {
E8tracksEmbedPlayerUI.showMessage(e.message);
});
},
skipToNextTrack: function() {
E8tracksAPI.skipTrack(function(e, t) {
t ? E8tracksEmbedPlayerUI.onMixComplete() : (E8tracksEmbedPlayerUI.loadTrack(e), E8tracksEmbedPlayerUI.audioPlayer.play());
}, function(e) {
E8tracksEmbedPlayerUI.ui.mixSelectors.length > 0 ? (E8tracksEmbedPlayerUI.showMessage(e.message + " Press skip again to continue to the next mix."), E8tracksEmbedPlayerUI.ui.skipButtons.hide(), E8tracksEmbedPlayerUI.ui.nextButtons.show()) : E8tracksEmbedPlayerUI.showMessage(e.message);
});
},
loadTrack: function(e) {
var t = this;
t.audioPlayer.ready ? t.audioPlayer.load(e.url) : t.readyQueue.push(function() {
t.audioPlayer.load(e.url);
}), t.displayTrack(e);
},
displayTrack: function(e) {
var t = this.ui;
t.trackName.html("<b>" + e.name + "</b>&nbsp;&nbsp;" + e.performer), t.trackBuy.attr("href", e.buy_link);
var n = '<div class="track">      <a class="fav" title="Favorite this track" target="_blank" href="#"></a>      <div class="track_name">' + e.name + '</div>      <div class="track_artist">' + e.performer + '</div>      <a class="buy" title="Buy this track" target="_blank" href="' + e.buy_link + '"></a>      <div class="track_album"><span class="label">Album:</span> ' + e.release_name;
e.year && (n += ' &nbsp;&nbsp;&nbsp;&nbsp; <span class="label">Year:</span>&nbsp;' + e.year), n += "</div>", e.annotation && (n += '<p class="annotation">' + e.annotation.text + "</p>"), n += "</div>", t.tracklisting.show().append(n);
},
nextMix: function() {
var e = E8tracksEmbedPlayerUI.ui.mixSelectorMixes.find('.thumbnail[data-mix_id="' + E8tracksEmbedPlayerUI.mixID + '"]').next().data("mix_id");
return e && (E8tracksEmbedPlayerUI.selectMix(e), E8tracksEmbedPlayerUI.start()), !1;
},
showMessage: function(e) {
this.ui.mixContentContainer.fadeOut(), this.ui.message.text(e), this.ui.messageContainer.fadeIn(), setTimeout(function() {
E8tracksEmbedPlayerUI.ui.messageContainer.fadeOut(), E8tracksEmbedPlayerUI.ui.mixContentContainer.fadeIn();
}, this.ui.messageTimeout);
},
expandControls: function() {
var e = E8tracksEmbedPlayerUI;
if (e.nowPlayingMixId != e.mixID) return;
e.ui.player.addClass("expanded").removeClass("collapsed"), e.ui.controls.show(), e.ui.expandedControls.show().stop().animate({
height: e.ui.expandedControlHeight
}, e.ui.expandedControlAnimTime);
},
collapseControls: function() {
var e = E8tracksEmbedPlayerUI;
if (e.nowPlayingMixId != e.mixID) return;
e.ui.player.addClass("collapsed").removeClass("expanded"), e.ui.expandedControls.stop().animate({
height: 0
}, e.ui.expandedControlAnimTime);
},
selectMix: function(e) {
var t = E8tracksEmbedPlayerUI;
e !== t.mixID && mixes[e] && (t.setMix(mixes[e]), t.ui.mixSelectors.removeClass("selected"), t.ui.startElement.show());
},
selectorPage: function(e) {
var t, n = E8tracksEmbedPlayerUI;
if (e == "left" && n.ui.mixSelectorCurrentPage === 0) return !1;
e == "right" ? t = 1 : t = -1, n.ui.mixSelectorCurrentPage += t;
var r = $("#mix_selector .mixes_container").width() * n.ui.mixSelectorCurrentPage * -1;
return r * -1 >= n.ui.mixSelectorMixes.children().length * 62 ? (n.ui.mixSelectorCurrentPage += t * -1, !1) : (n.ui.mixSelectorMixes.css({
left: r + "px"
}), n.ui.mixSelectorPaging.removeClass("disabled"), !1);
},
preloadImages: function(e) {
if (typeof e == "string") (new Image).src = e; else if (typeof e == "object" && e.length) for (i in e) (new Image).src = e[i];
}
};;