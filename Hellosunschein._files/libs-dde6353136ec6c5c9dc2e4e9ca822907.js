(function() {
var e = this, t = e._, n = {}, r = Array.prototype, i = Object.prototype, s = Function.prototype, o = r.push, u = r.slice, a = r.concat, f = i.toString, l = i.hasOwnProperty, c = r.forEach, h = r.map, p = r.reduce, d = r.reduceRight, v = r.filter, m = r.every, g = r.some, y = r.indexOf, b = r.lastIndexOf, w = Array.isArray, E = Object.keys, S = s.bind, x = function(e) {
return e instanceof x ? e : this instanceof x ? (this._wrapped = e, void 0) : new x(e);
};
"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.4.4";
var T = x.each = x.forEach = function(e, t, r) {
if (null != e) if (c && e.forEach === c) e.forEach(t, r); else if (e.length === +e.length) {
for (var i = 0, s = e.length; s > i; i++) if (t.call(r, e[i], i, e) === n) return;
} else for (var o in e) if (x.has(e, o) && t.call(r, e[o], o, e) === n) return;
};
x.map = x.collect = function(e, t, n) {
var r = [];
return null == e ? r : h && e.map === h ? e.map(t, n) : (T(e, function(e, i, s) {
r[r.length] = t.call(n, e, i, s);
}), r);
};
var N = "Reduce of empty array with no initial value";
x.reduce = x.foldl = x.inject = function(e, t, n, r) {
var i = arguments.length > 2;
if (null == e && (e = []), p && e.reduce === p) return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
if (T(e, function(e, s, o) {
i ? n = t.call(r, n, e, s, o) : (n = e, i = !0);
}), !i) throw new TypeError(N);
return n;
}, x.reduceRight = x.foldr = function(e, t, n, r) {
var i = arguments.length > 2;
if (null == e && (e = []), d && e.reduceRight === d) return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
var s = e.length;
if (s !== +s) {
var o = x.keys(e);
s = o.length;
}
if (T(e, function(u, a, f) {
a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i = !0);
}), !i) throw new TypeError(N);
return n;
}, x.find = x.detect = function(e, t, n) {
var r;
return C(e, function(e, i, s) {
return t.call(n, e, i, s) ? (r = e, !0) : void 0;
}), r;
}, x.filter = x.select = function(e, t, n) {
var r = [];
return null == e ? r : v && e.filter === v ? e.filter(t, n) : (T(e, function(e, i, s) {
t.call(n, e, i, s) && (r[r.length] = e);
}), r);
}, x.reject = function(e, t, n) {
return x.filter(e, function(e, r, i) {
return !t.call(n, e, r, i);
}, n);
}, x.every = x.all = function(e, t, r) {
t || (t = x.identity);
var i = !0;
return null == e ? i : m && e.every === m ? e.every(t, r) : (T(e, function(e, s, o) {
return (i = i && t.call(r, e, s, o)) ? void 0 : n;
}), !!i);
};
var C = x.some = x.any = function(e, t, r) {
t || (t = x.identity);
var i = !1;
return null == e ? i : g && e.some === g ? e.some(t, r) : (T(e, function(e, s, o) {
return i || (i = t.call(r, e, s, o)) ? n : void 0;
}), !!i);
};
x.contains = x.include = function(e, t) {
return null == e ? !1 : y && e.indexOf === y ? e.indexOf(t) != -1 : C(e, function(e) {
return e === t;
});
}, x.invoke = function(e, t) {
var n = u.call(arguments, 2), r = x.isFunction(t);
return x.map(e, function(e) {
return (r ? t : e[t]).apply(e, n);
});
}, x.pluck = function(e, t) {
return x.map(e, function(e) {
return e[t];
});
}, x.where = function(e, t, n) {
return x.isEmpty(t) ? n ? null : [] : x[n ? "find" : "filter"](e, function(e) {
for (var n in t) if (t[n] !== e[n]) return !1;
return !0;
});
}, x.findWhere = function(e, t) {
return x.where(e, t, !0);
}, x.max = function(e, t, n) {
if (!t && x.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.max.apply(Math, e);
if (!t && x.isEmpty(e)) return -1 / 0;
var r = {
computed: -1 / 0,
value: -1 / 0
};
return T(e, function(e, i, s) {
var o = t ? t.call(n, e, i, s) : e;
o >= r.computed && (r = {
value: e,
computed: o
});
}), r.value;
}, x.min = function(e, t, n) {
if (!t && x.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.min.apply(Math, e);
if (!t && x.isEmpty(e)) return 1 / 0;
var r = {
computed: 1 / 0,
value: 1 / 0
};
return T(e, function(e, i, s) {
var o = t ? t.call(n, e, i, s) : e;
r.computed > o && (r = {
value: e,
computed: o
});
}), r.value;
}, x.shuffle = function(e) {
var t, n = 0, r = [];
return T(e, function(e) {
t = x.random(n++), r[n - 1] = r[t], r[t] = e;
}), r;
};
var k = function(e) {
return x.isFunction(e) ? e : function(t) {
return t[e];
};
};
x.sortBy = function(e, t, n) {
var r = k(t);
return x.pluck(x.map(e, function(e, t, i) {
return {
value: e,
index: t,
criteria: r.call(n, e, t, i)
};
}).sort(function(e, t) {
var n = e.criteria, r = t.criteria;
if (n !== r) {
if (n > r || n === void 0) return 1;
if (r > n || r === void 0) return -1;
}
return e.index < t.index ? -1 : 1;
}), "value");
};
var L = function(e, t, n, r) {
var i = {}, s = k(t || x.identity);
return T(e, function(t, o) {
var u = s.call(n, t, o, e);
r(i, u, t);
}), i;
};
x.groupBy = function(e, t, n) {
return L(e, t, n, function(e, t, n) {
(x.has(e, t) ? e[t] : e[t] = []).push(n);
});
}, x.countBy = function(e, t, n) {
return L(e, t, n, function(e, t) {
x.has(e, t) || (e[t] = 0), e[t]++;
});
}, x.sortedIndex = function(e, t, n, r) {
n = null == n ? x.identity : k(n);
for (var i = n.call(r, t), s = 0, o = e.length; o > s; ) {
var u = s + o >>> 1;
i > n.call(r, e[u]) ? s = u + 1 : o = u;
}
return s;
}, x.toArray = function(e) {
return e ? x.isArray(e) ? u.call(e) : e.length === +e.length ? x.map(e, x.identity) : x.values(e) : [];
}, x.size = function(e) {
return null == e ? 0 : e.length === +e.length ? e.length : x.keys(e).length;
}, x.first = x.head = x.take = function(e, t, n) {
return null == e ? void 0 : null == t || n ? e[0] : u.call(e, 0, t);
}, x.initial = function(e, t, n) {
return u.call(e, 0, e.length - (null == t || n ? 1 : t));
}, x.last = function(e, t, n) {
return null == e ? void 0 : null == t || n ? e[e.length - 1] : u.call(e, Math.max(e.length - t, 0));
}, x.rest = x.tail = x.drop = function(e, t, n) {
return u.call(e, null == t || n ? 1 : t);
}, x.compact = function(e) {
return x.filter(e, x.identity);
};
var A = function(e, t, n) {
return T(e, function(e) {
x.isArray(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e);
}), n;
};
x.flatten = function(e, t) {
return A(e, t, []);
}, x.without = function(e) {
return x.difference(e, u.call(arguments, 1));
}, x.uniq = x.unique = function(e, t, n, r) {
x.isFunction(t) && (r = n, n = t, t = !1);
var i = n ? x.map(e, n, r) : e, s = [], o = [];
return T(i, function(n, r) {
(t ? r && o[o.length - 1] === n : x.contains(o, n)) || (o.push(n), s.push(e[r]));
}), s;
}, x.union = function() {
return x.uniq(a.apply(r, arguments));
}, x.intersection = function(e) {
var t = u.call(arguments, 1);
return x.filter(x.uniq(e), function(e) {
return x.every(t, function(t) {
return x.indexOf(t, e) >= 0;
});
});
}, x.difference = function(e) {
var t = a.apply(r, u.call(arguments, 1));
return x.filter(e, function(e) {
return !x.contains(t, e);
});
}, x.zip = function() {
for (var e = u.call(arguments), t = x.max(x.pluck(e, "length")), n = Array(t), r = 0; t > r; r++) n[r] = x.pluck(e, "" + r);
return n;
}, x.object = function(e, t) {
if (null == e) return {};
for (var n = {}, r = 0, i = e.length; i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
return n;
}, x.indexOf = function(e, t, n) {
if (null == e) return -1;
var r = 0, i = e.length;
if (n) {
if ("number" != typeof n) return r = x.sortedIndex(e, t), e[r] === t ? r : -1;
r = 0 > n ? Math.max(0, i + n) : n;
}
if (y && e.indexOf === y) return e.indexOf(t, n);
for (; i > r; r++) if (e[r] === t) return r;
return -1;
}, x.lastIndexOf = function(e, t, n) {
if (null == e) return -1;
var r = null != n;
if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
for (var i = r ? n : e.length; i--; ) if (e[i] === t) return i;
return -1;
}, x.range = function(e, t, n) {
1 >= arguments.length && (t = e || 0, e = 0), n = arguments[2] || 1;
for (var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, s = Array(r); r > i; ) s[i++] = e, e += n;
return s;
}, x.bind = function(e, t) {
if (e.bind === S && S) return S.apply(e, u.call(arguments, 1));
var n = u.call(arguments, 2);
return function() {
return e.apply(t, n.concat(u.call(arguments)));
};
}, x.partial = function(e) {
var t = u.call(arguments, 1);
return function() {
return e.apply(this, t.concat(u.call(arguments)));
};
}, x.bindAll = function(e) {
var t = u.call(arguments, 1);
return 0 === t.length && (t = x.functions(e)), T(t, function(t) {
e[t] = x.bind(e[t], e);
}), e;
}, x.memoize = function(e, t) {
var n = {};
return t || (t = x.identity), function() {
var r = t.apply(this, arguments);
return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments);
};
}, x.delay = function(e, t) {
var n = u.call(arguments, 2);
return setTimeout(function() {
return e.apply(null, n);
}, t);
}, x.defer = function(e) {
return x.delay.apply(x, [ e, 1 ].concat(u.call(arguments, 1)));
}, x.throttle = function(e, t) {
var n, r, i, s, o = 0, u = function() {
o = new Date, i = null, s = e.apply(n, r);
};
return function() {
var a = new Date, f = t - (a - o);
return n = this, r = arguments, 0 >= f ? (clearTimeout(i), i = null, o = a, s = e.apply(n, r)) : i || (i = setTimeout(u, f)), s;
};
}, x.debounce = function(e, t, n) {
var r, i;
return function() {
var s = this, o = arguments, u = function() {
r = null, n || (i = e.apply(s, o));
}, a = n && !r;
return clearTimeout(r), r = setTimeout(u, t), a && (i = e.apply(s, o)), i;
};
}, x.once = function(e) {
var t, n = !1;
return function() {
return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t);
};
}, x.wrap = function(e, t) {
return function() {
var n = [ e ];
return o.apply(n, arguments), t.apply(this, n);
};
}, x.compose = function() {
var e = arguments;
return function() {
for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [ e[n].apply(this, t) ];
return t[0];
};
}, x.after = function(e, t) {
return 0 >= e ? t() : function() {
return 1 > --e ? t.apply(this, arguments) : void 0;
};
}, x.keys = E || function(e) {
if (e !== Object(e)) throw new TypeError("Invalid object");
var t = [];
for (var n in e) x.has(e, n) && (t[t.length] = n);
return t;
}, x.values = function(e) {
var t = [];
for (var n in e) x.has(e, n) && t.push(e[n]);
return t;
}, x.pairs = function(e) {
var t = [];
for (var n in e) x.has(e, n) && t.push([ n, e[n] ]);
return t;
}, x.invert = function(e) {
var t = {};
for (var n in e) x.has(e, n) && (t[e[n]] = n);
return t;
}, x.functions = x.methods = function(e) {
var t = [];
for (var n in e) x.isFunction(e[n]) && t.push(n);
return t.sort();
}, x.extend = function(e) {
return T(u.call(arguments, 1), function(t) {
if (t) for (var n in t) e[n] = t[n];
}), e;
}, x.pick = function(e) {
var t = {}, n = a.apply(r, u.call(arguments, 1));
return T(n, function(n) {
n in e && (t[n] = e[n]);
}), t;
}, x.omit = function(e) {
var t = {}, n = a.apply(r, u.call(arguments, 1));
for (var i in e) x.contains(n, i) || (t[i] = e[i]);
return t;
}, x.defaults = function(e) {
return T(u.call(arguments, 1), function(t) {
if (t) for (var n in t) null == e[n] && (e[n] = t[n]);
}), e;
}, x.clone = function(e) {
return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e;
}, x.tap = function(e, t) {
return t(e), e;
};
var O = function(e, t, n, r) {
if (e === t) return 0 !== e || 1 / e == 1 / t;
if (null == e || null == t) return e === t;
e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
var i = f.call(e);
if (i != f.call(t)) return !1;
switch (i) {
case "[object String]":
return e == t + "";
case "[object Number]":
return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
case "[object Date]":
case "[object Boolean]":
return +e == +t;
case "[object RegExp]":
return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase;
}
if ("object" != typeof e || "object" != typeof t) return !1;
for (var s = n.length; s--; ) if (n[s] == e) return r[s] == t;
n.push(e), r.push(t);
var o = 0, u = !0;
if ("[object Array]" == i) {
if (o = e.length, u = o == t.length) for (; o-- && (u = O(e[o], t[o], n, r)); ) ;
} else {
var a = e.constructor, l = t.constructor;
if (a !== l && !(x.isFunction(a) && a instanceof a && x.isFunction(l) && l instanceof l)) return !1;
for (var c in e) if (x.has(e, c) && (o++, !(u = x.has(t, c) && O(e[c], t[c], n, r)))) break;
if (u) {
for (c in t) if (x.has(t, c) && !(o--)) break;
u = !o;
}
}
return n.pop(), r.pop(), u;
};
x.isEqual = function(e, t) {
return O(e, t, [], []);
}, x.isEmpty = function(e) {
if (null == e) return !0;
if (x.isArray(e) || x.isString(e)) return 0 === e.length;
for (var t in e) if (x.has(e, t)) return !1;
return !0;
}, x.isElement = function(e) {
return !!e && 1 === e.nodeType;
}, x.isArray = w || function(e) {
return "[object Array]" == f.call(e);
}, x.isObject = function(e) {
return e === Object(e);
}, T([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(e) {
x["is" + e] = function(t) {
return f.call(t) == "[object " + e + "]";
};
}), x.isArguments(arguments) || (x.isArguments = function(e) {
return !!e && !!x.has(e, "callee");
}), "function" != typeof /./ && (x.isFunction = function(e) {
return "function" == typeof e;
}), x.isFinite = function(e) {
return isFinite(e) && !isNaN(parseFloat(e));
}, x.isNaN = function(e) {
return x.isNumber(e) && e != +e;
}, x.isBoolean = function(e) {
return e === !0 || e === !1 || "[object Boolean]" == f.call(e);
}, x.isNull = function(e) {
return null === e;
}, x.isUndefined = function(e) {
return e === void 0;
}, x.has = function(e, t) {
return l.call(e, t);
}, x.noConflict = function() {
return e._ = t, this;
}, x.identity = function(e) {
return e;
}, x.times = function(e, t, n) {
for (var r = Array(e), i = 0; e > i; i++) r[i] = t.call(n, i);
return r;
}, x.random = function(e, t) {
return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1));
};
var M = {
escape: {
"&": "&amp;",
"<": "&lt;",
">": "&gt;",
'"': "&quot;",
"'": "&#x27;",
"/": "&#x2F;"
}
};
M.unescape = x.invert(M.escape);
var _ = {
escape: RegExp("[" + x.keys(M.escape).join("") + "]", "g"),
unescape: RegExp("(" + x.keys(M.unescape).join("|") + ")", "g")
};
x.each([ "escape", "unescape" ], function(e) {
x[e] = function(t) {
return null == t ? "" : ("" + t).replace(_[e], function(t) {
return M[e][t];
});
};
}), x.result = function(e, t) {
if (null == e) return null;
var n = e[t];
return x.isFunction(n) ? n.call(e) : n;
}, x.mixin = function(e) {
T(x.functions(e), function(t) {
var n = x[t] = e[t];
x.prototype[t] = function() {
var e = [ this._wrapped ];
return o.apply(e, arguments), j.call(this, n.apply(x, e));
};
});
};
var D = 0;
x.uniqueId = function(e) {
var t = ++D + "";
return e ? e + t : t;
}, x.templateSettings = {
evaluate: /<%([\s\S]+?)%>/g,
interpolate: /<%=([\s\S]+?)%>/g,
escape: /<%-([\s\S]+?)%>/g
};
var P = /(.)^/, H = {
"'": "'",
"\\": "\\",
"\r": "r",
"\n": "n",
"  ": "t",
"\u2028": "u2028",
"\u2029": "u2029"
}, B = /\\|'|\r|\n|\t|\u2028|\u2029/g;
x.template = function(e, t, n) {
var r;
n = x.defaults({}, n, x.templateSettings);
var i = RegExp([ (n.escape || P).source, (n.interpolate || P).source, (n.evaluate || P).source ].join("|") + "|$", "g"), s = 0, o = "__p+='";
e.replace(i, function(t, n, r, i, u) {
return o += e.slice(s, u).replace(B, function(e) {
return "\\" + H[e];
}), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (o += "';\n" + i + "\n__p+='"), s = u + t.length, t;
}), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
try {
r = Function(n.variable || "obj", "_", o);
} catch (u) {
throw u.source = o, u;
}
if (t) return r(t, x);
var a = function(e) {
return r.call(this, e, x);
};
return a.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", a;
}, x.chain = function(e) {
return x(e).chain();
};
var j = function(e) {
return this._chain ? x(e).chain() : e;
};
x.mixin(x), T([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(e) {
var t = r[e];
x.prototype[e] = function() {
var n = this._wrapped;
return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], j.call(this, n);
};
}), T([ "concat", "join", "slice" ], function(e) {
var t = r[e];
x.prototype[e] = function() {
return j.call(this, t.apply(this._wrapped, arguments));
};
}), x.extend(x.prototype, {
chain: function() {
return this._chain = !0, this;
},
value: function() {
return this._wrapped;
}
});
}).call(this), function() {
var e = this, t = e.Backbone, n = [], r = n.push, i = n.slice, s = n.splice, o;
typeof exports != "undefined" ? o = exports : o = e.Backbone = {}, o.VERSION = "0.9.10";
var u = e._;
!u && typeof require != "undefined" && (u = require("underscore")), o.$ = e.jQuery || e.Zepto || e.ender, o.noConflict = function() {
return e.Backbone = t, this;
}, o.emulateHTTP = !1, o.emulateJSON = !1;
var a = /\s+/, f = function(e, t, n, r) {
if (!n) return !0;
if (typeof n == "object") for (var i in n) e[t].apply(e, [ i, n[i] ].concat(r)); else {
if (!a.test(n)) return !0;
var s = n.split(a);
for (var o = 0, u = s.length; o < u; o++) e[t].apply(e, [ s[o] ].concat(r));
}
}, l = function(e, t) {
var n, r = -1, i = e.length;
switch (t.length) {
case 0:
while (++r < i) (n = e[r]).callback.call(n.ctx);
return;
case 1:
while (++r < i) (n = e[r]).callback.call(n.ctx, t[0]);
return;
case 2:
while (++r < i) (n = e[r]).callback.call(n.ctx, t[0], t[1]);
return;
case 3:
while (++r < i) (n = e[r]).callback.call(n.ctx, t[0], t[1], t[2]);
return;
default:
while (++r < i) (n = e[r]).callback.apply(n.ctx, t);
}
}, c = o.Events = {
on: function(e, t, n) {
if (!f(this, "on", e, [ t, n ]) || !t) return this;
this._events || (this._events = {});
var r = this._events[e] || (this._events[e] = []);
return r.push({
callback: t,
context: n,
ctx: n || this
}), this;
},
once: function(e, t, n) {
if (!f(this, "once", e, [ t, n ]) || !t) return this;
var r = this, i = u.once(function() {
r.off(e, i), t.apply(this, arguments);
});
return i._callback = t, this.on(e, i, n), this;
},
off: function(e, t, n) {
var r, i, s, o, a, l, c, h;
if (!this._events || !f(this, "off", e, [ t, n ])) return this;
if (!e && !t && !n) return this._events = {}, this;
o = e ? [ e ] : u.keys(this._events);
for (a = 0, l = o.length; a < l; a++) {
e = o[a];
if (r = this._events[e]) {
s = [];
if (t || n) for (c = 0, h = r.length; c < h; c++) i = r[c], (t && t !== i.callback && t !== i.callback._callback || n && n !== i.context) && s.push(i);
this._events[e] = s;
}
}
return this;
},
trigger: function(e) {
if (!this._events) return this;
var t = i.call(arguments, 1);
if (!f(this, "trigger", e, t)) return this;
var n = this._events[e], r = this._events.all;
return n && l(n, t), r && l(r, arguments), this;
},
listenTo: function(e, t, n) {
var r = this._listeners || (this._listeners = {}), i = e._listenerId || (e._listenerId = u.uniqueId("l"));
return r[i] = e, e.on(t, typeof t == "object" ? this : n, this), this;
},
stopListening: function(e, t, n) {
var r = this._listeners;
if (!r) return;
if (e) e.off(t, typeof t == "object" ? this : n, this), !t && !n && delete r[e._listenerId]; else {
typeof t == "object" && (n = this);
for (var i in r) r[i].off(t, n, this);
this._listeners = {};
}
return this;
}
};
c.bind = c.on, c.unbind = c.off, u.extend(o, c);
var h = o.Model = function(e, t) {
var n, r = e || {};
this.cid = u.uniqueId("c"), this.attributes = {}, t && t.collection && (this.collection = t.collection), t && t.parse && (r = this.parse(r, t) || {});
if (n = u.result(this, "defaults")) r = u.defaults({}, r, n);
this.set(r, t), this.changed = {}, this.initialize.apply(this, arguments);
};
u.extend(h.prototype, c, {
changed: null,
idAttribute: "id",
initialize: function() {},
toJSON: function(e) {
return u.clone(this.attributes);
},
sync: function() {
return o.sync.apply(this, arguments);
},
get: function(e) {
return this.attributes[e];
},
escape: function(e) {
return u.escape(this.get(e));
},
has: function(e) {
return this.get(e) != null;
},
set: function(e, t, n) {
var r, i, s, o, a, f, l, c;
if (e == null) return this;
typeof e == "object" ? (i = e, n = t) : (i = {})[e] = t, n || (n = {});
if (!this._validate(i, n)) return !1;
s = n.unset, a = n.silent, o = [], f = this._changing, this._changing = !0, f || (this._previousAttributes = u.clone(this.attributes), this.changed = {}), c = this.attributes, l = this._previousAttributes, this.idAttribute in i && (this.id = i[this.idAttribute]);
for (r in i) t = i[r], u.isEqual(c[r], t) || o.push(r), u.isEqual(l[r], t) ? delete this.changed[r] : this.changed[r] = t, s ? delete c[r] : c[r] = t;
if (!a) {
o.length && (this._pending = !0);
for (var h = 0, p = o.length; h < p; h++) this.trigger("change:" + o[h], this, c[o[h]], n);
}
if (f) return this;
if (!a) while (this._pending) this._pending = !1, this.trigger("change", this, n);
return this._pending = !1, this._changing = !1, this;
},
unset: function(e, t) {
return this.set(e, void 0, u.extend({}, t, {
unset: !0
}));
},
clear: function(e) {
var t = {};
for (var n in this.attributes) t[n] = void 0;
return this.set(t, u.extend({}, e, {
unset: !0
}));
},
hasChanged: function(e) {
return e == null ? !u.isEmpty(this.changed) : u.has(this.changed, e);
},
changedAttributes: function(e) {
if (!e) return this.hasChanged() ? u.clone(this.changed) : !1;
var t, n = !1, r = this._changing ? this._previousAttributes : this.attributes;
for (var i in e) {
if (u.isEqual(r[i], t = e[i])) continue;
(n || (n = {}))[i] = t;
}
return n;
},
previous: function(e) {
return e == null || !this._previousAttributes ? null : this._previousAttributes[e];
},
previousAttributes: function() {
return u.clone(this._previousAttributes);
},
fetch: function(e) {
e = e ? u.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
var t = e.success;
return e.success = function(e, n, r) {
if (!e.set(e.parse(n, r), r)) return !1;
t && t(e, n, r);
}, this.sync("read", this, e);
},
save: function(e, t, n) {
var r, i, s, o, a = this.attributes;
return e == null || typeof e == "object" ? (r = e, n = t) : (r = {})[e] = t, r && (!n || !n.wait) && !this.set(r, n) ? !1 : (n = u.extend({
validate: !0
}, n), this._validate(r, n) ? (r && n.wait && (this.attributes = u.extend({}, a, r)), n.parse === void 0 && (n.parse = !0), i = n.success, n.success = function(e, t, n) {
e.attributes = a;
var s = e.parse(t, n);
n.wait && (s = u.extend(r || {}, s));
if (u.isObject(s) && !e.set(s, n)) return !1;
i && i(e, t, n);
}, s = this.isNew() ? "create" : n.patch ? "patch" : "update", s === "patch" && (n.attrs = r), o = this.sync(s, this, n), r && n.wait && (this.attributes = a), o) : !1);
},
destroy: function(e) {
e = e ? u.clone(e) : {};
var t = this, n = e.success, r = function() {
t.trigger("destroy", t, t.collection, e);
};
e.success = function(e, t, i) {
(i.wait || e.isNew()) && r(), n && n(e, t, i);
};
if (this.isNew()) return e.success(this, null, e), !1;
var i = this.sync("delete", this, e);
return e.wait || r(), i;
},
url: function() {
var e = u.result(this, "urlRoot") || u.result(this.collection, "url") || M();
return this.isNew() ? e : e + (e.charAt(e.length - 1) === "/" ? "" : "/") + encodeURIComponent(this.id);
},
parse: function(e, t) {
return e;
},
clone: function() {
return new this.constructor(this.attributes);
},
isNew: function() {
return this.id == null;
},
isValid: function(e) {
return !this.validate || !this.validate(this.attributes, e);
},
_validate: function(e, t) {
if (!t.validate || !this.validate) return !0;
e = u.extend({}, this.attributes, e);
var n = this.validationError = this.validate(e, t) || null;
return n ? (this.trigger("invalid", this, n, t || {}), !1) : !0;
}
});
var p = o.Collection = function(e, t) {
t || (t = {}), t.model && (this.model = t.model), t.comparator !== void 0 && (this.comparator = t.comparator), this.models = [], this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, u.extend({
silent: !0
}, t));
};
u.extend(p.prototype, c, {
model: h,
initialize: function() {},
toJSON: function(e) {
return this.map(function(t) {
return t.toJSON(e);
});
},
sync: function() {
return o.sync.apply(this, arguments);
},
add: function(e, t) {
e = u.isArray(e) ? e.slice() : [ e ], t || (t = {});
var n, i, o, a, f, l, c, h, p, d;
c = [], h = t.at, p = this.comparator && h == null && t.sort != 0, d = u.isString(this.comparator) ? this.comparator : null;
for (n = 0, i = e.length; n < i; n++) {
if (!(o = this._prepareModel(a = e[n], t))) {
this.trigger("invalid", this, a, t);
continue;
}
if (f = this.get(o)) {
t.merge && (f.set(a === o ? o.attributes : a, t), p && !l && f.hasChanged(d) && (l = !0));
continue;
}
c.push(o), o.on("all", this._onModelEvent, this), this._byId[o.cid] = o, o.id != null && (this._byId[o.id] = o);
}
c.length && (p && (l = !0), this.length += c.length, h != null ? s.apply(this.models, [ h, 0 ].concat(c)) : r.apply(this.models, c)), l && this.sort({
silent: !0
});
if (t.silent) return this;
for (n = 0, i = c.length; n < i; n++) (o = c[n]).trigger("add", o, this, t);
return l && this.trigger("sort", this, t), this;
},
remove: function(e, t) {
e = u.isArray(e) ? e.slice() : [ e ], t || (t = {});
var n, r, i, s;
for (n = 0, r = e.length; n < r; n++) {
s = this.get(e[n]);
if (!s) continue;
delete this._byId[s.id], delete this._byId[s.cid], i = this.indexOf(s), this.models.splice(i, 1), this.length--, t.silent || (t.index = i, s.trigger("remove", s, this, t)), this._removeReference(s);
}
return this;
},
push: function(e, t) {
return e = this._prepareModel(e, t), this.add(e, u.extend({
at: this.length
}, t)), e;
},
pop: function(e) {
var t = this.at(this.length - 1);
return this.remove(t, e), t;
},
unshift: function(e, t) {
return e = this._prepareModel(e, t), this.add(e, u.extend({
at: 0
}, t)), e;
},
shift: function(e) {
var t = this.at(0);
return this.remove(t, e), t;
},
slice: function(e, t) {
return this.models.slice(e, t);
},
get: function(e) {
return e == null ? void 0 : (this._idAttr || (this._idAttr = this.model.prototype.idAttribute), this._byId[e.id || e.cid || e[this._idAttr] || e]);
},
at: function(e) {
return this.models[e];
},
where: function(e) {
return u.isEmpty(e) ? [] : this.filter(function(t) {
for (var n in e) if (e[n] !== t.get(n)) return !1;
return !0;
});
},
sort: function(e) {
if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
return e || (e = {}), u.isString(this.comparator) || this.comparator.length === 1 ? this.models = this.sortBy(this.comparator, this) : this.models.sort(u.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this;
},
pluck: function(e) {
return u.invoke(this.models, "get", e);
},
update: function(e, t) {
t = u.extend({
add: !0,
merge: !0,
remove: !0
}, t), t.parse && (e = this.parse(e, t));
var n, r, i, s, o = [], a = [], f = {};
u.isArray(e) || (e = e ? [ e ] : []);
if (t.add && !t.remove) return this.add(e, t);
for (r = 0, i = e.length; r < i; r++) n = e[r], s = this.get(n), t.remove && s && (f[s.cid] = !0), (t.add && !s || t.merge && s) && o.push(n);
if (t.remove) for (r = 0, i = this.models.length; r < i; r++) n = this.models[r], f[n.cid] || a.push(n);
return a.length && this.remove(a, t), o.length && this.add(o, t), this;
},
reset: function(e, t) {
t || (t = {}), t.parse && (e = this.parse(e, t));
for (var n = 0, r = this.models.length; n < r; n++) this._removeReference(this.models[n]);
return t.previousModels = this.models.slice(), this._reset(), e && this.add(e, u.extend({
silent: !0
}, t)), t.silent || this.trigger("reset", this, t), this;
},
fetch: function(e) {
e = e ? u.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
var t = e.success;
return e.success = function(e, n, r) {
var i = r.update ? "update" : "reset";
e[i](n, r), t && t(e, n, r);
}, this.sync("read", this, e);
},
create: function(e, t) {
t = t ? u.clone(t) : {};
if (!(e = this._prepareModel(e, t))) return !1;
t.wait || this.add(e, t);
var n = this, r = t.success;
return t.success = function(e, t, i) {
i.wait && n.add(e, i), r && r(e, t, i);
}, e.save(null, t), e;
},
parse: function(e, t) {
return e;
},
clone: function() {
return new this.constructor(this.models);
},
_reset: function() {
this.length = 0, this.models.length = 0, this._byId = {};
},
_prepareModel: function(e, t) {
if (e instanceof h) return e.collection || (e.collection = this), e;
t || (t = {}), t.collection = this;
var n = new this.model(e, t);
return n._validate(e, t) ? n : !1;
},
_removeReference: function(e) {
this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this);
},
_onModelEvent: function(e, t, n, r) {
if ((e === "add" || e === "remove") && n !== this) return;
e === "destroy" && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], t.id != null && (this._byId[t.id] = t)), this.trigger.apply(this, arguments);
},
sortedIndex: function(e, t, n) {
t || (t = this.comparator);
var r = u.isFunction(t) ? t : function(e) {
return e.get(t);
};
return u.sortedIndex(this.models, e, r, n);
}
});
var d = [ "forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain" ];
u.each(d, function(e) {
p.prototype[e] = function() {
var t = i.call(arguments);
return t.unshift(this.models), u[e].apply(u, t);
};
});
var v = [ "groupBy", "countBy", "sortBy" ];
u.each(v, function(e) {
p.prototype[e] = function(t, n) {
var r = u.isFunction(t) ? t : function(e) {
return e.get(t);
};
return u[e](this.models, r, n);
};
});
var m = o.Router = function(e) {
e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
}, g = /\((.*?)\)/g, y = /(\(\?)?:\w+/g, b = /\*\w+/g, w = /[\-{}\[\]+?.,\\\^$|#\s]/g;
u.extend(m.prototype, c, {
initialize: function() {},
route: function(e, t, n) {
return u.isRegExp(e) || (e = this._routeToRegExp(e)), n || (n = this[t]), o.history.route(e, u.bind(function(r) {
var i = this._extractParameters(e, r);
n && n.apply(this, i), this.trigger.apply(this, [ "route:" + t ].concat(i)), this.trigger("route", t, i), o.history.trigger("route", this, t, i);
}, this)), this;
},
navigate: function(e, t) {
return o.history.navigate(e, t), this;
},
_bindRoutes: function() {
if (!this.routes) return;
var e, t = u.keys(this.routes);
while ((e = t.pop()) != null) this.route(e, this.routes[e]);
},
_routeToRegExp: function(e) {
return e = e.replace(w, "\\$&").replace(g, "(?:$1)?").replace(y, function(e, t) {
return t ? e : "([^/]+)";
}).replace(b, "(.*?)"), new RegExp("^" + e + "$");
},
_extractParameters: function(e, t) {
return e.exec(t).slice(1);
}
});
var E = o.History = function() {
this.handlers = [], u.bindAll(this, "checkUrl"), typeof window != "undefined" && (this.location = window.location, this.history = window.history);
}, S = /^[#\/]|\s+$/g, x = /^\/+|\/+$/g, T = /msie [\w.]+/, N = /\/$/;
E.started = !1, u.extend(E.prototype, c, {
interval: 50,
getHash: function(e) {
var t = (e || this).location.href.match(/#(.*)$/);
return t ? t[1] : "";
},
getFragment: function(e, t) {
if (e == null) if (this._hasPushState || !this._wantsHashChange || t) {
e = this.location.pathname;
var n = this.root.replace(N, "");
e.indexOf(n) || (e = e.substr(n.length));
} else e = this.getHash();
return e.replace(S, "");
},
start: function(e) {
if (E.started) throw new Error("Backbone.history has already been started");
E.started = !0, this.options = u.extend({}, {
root: "/"
}, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
var t = this.getFragment(), n = document.documentMode, r = T.exec(navigator.userAgent.toLowerCase()) && (!n || n <= 7);
this.root = ("/" + this.root + "/").replace(x, "/"), r && this._wantsHashChange && (this.iframe = o.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(t)), this._hasPushState ? o.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? o.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = t;
var i = this.location, s = i.pathname.replace(/[^\/]$/, "$&/") === this.root;
if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !s) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
this._wantsPushState && this._hasPushState && s && i.hash && (this.fragment = this.getHash().replace(S, ""), this.history.replaceState({}, document.title, this.root + this.fragment + i.search));
if (!this.options.silent) return this.loadUrl();
},
stop: function() {
o.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), E.started = !1;
},
route: function(e, t) {
this.handlers.unshift({
route: e,
callback: t
});
},
checkUrl: function(e) {
var t = this.getFragment();
t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
if (t === this.fragment) return !1;
this.iframe && this.navigate(t), this.loadUrl() || this.loadUrl(this.getHash());
},
loadUrl: function(e) {
var t = this.fragment = this.getFragment(e), n = u.any(this.handlers, function(e) {
if (e.route.test(t)) return e.callback(t), !0;
});
return n;
},
navigate: function(e, t) {
if (!E.started) return !1;
if (!t || t === !0) t = {
trigger: t
};
e = this.getFragment(e || "");
if (this.fragment === e) return;
this.fragment = e;
var n = this.root + e;
if (this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n); else {
if (!this._wantsHashChange) return this.location.assign(n);
this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace));
}
t.trigger && this.loadUrl(e);
},
_updateHash: function(e, t, n) {
if (n) {
var r = e.href.replace(/(javascript:|#).*$/, "");
e.replace(r + "#" + t);
} else e.hash = "#" + t;
}
}), o.history = new E;
var C = o.View = function(e) {
this.cid = u.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents();
}, k = /^(\S+)\s*(.*)$/, L = [ "model", "collection", "el", "id", "attributes", "className", "tagName", "events" ];
u.extend(C.prototype, c, {
tagName: "div",
$: function(e) {
return this.$el.find(e);
},
initialize: function() {},
render: function() {
return this;
},
remove: function() {
return this.$el.remove(), this.stopListening(), this;
},
setElement: function(e, t) {
return this.$el && this.undelegateEvents(), this.$el = e instanceof o.$ ? e : o.$(e), this.el = this.$el[0], t !== !1 && this.delegateEvents(), this;
},
delegateEvents: function(e) {
if (!e && !(e = u.result(this, "events"))) return;
this.undelegateEvents();
for (var t in e) {
var n = e[t];
u.isFunction(n) || (n = this[e[t]]);
if (!n) throw new Error('Method "' + e[t] + '" does not exist');
var r = t.match(k), i = r[1], s = r[2];
n = u.bind(n, this), i += ".delegateEvents" + this.cid, s === "" ? this.$el.on(i, n) : this.$el.on(i, s, n);
}
},
undelegateEvents: function() {
this.$el.off(".delegateEvents" + this.cid);
},
_configure: function(e) {
this.options && (e = u.extend({}, u.result(this, "options"), e)), u.extend(this, u.pick(e, L)), this.options = e;
},
_ensureElement: function() {
if (!this.el) {
var e = u.extend({}, u.result(this, "attributes"));
this.id && (e.id = u.result(this, "id")), this.className && (e["class"] = u.result(this, "className"));
var t = o.$("<" + u.result(this, "tagName") + ">").attr(e);
this.setElement(t, !1);
} else this.setElement(u.result(this, "el"), !1);
}
});
var A = {
create: "POST",
update: "PUT",
patch: "PATCH",
"delete": "DELETE",
read: "GET"
};
o.sync = function(e, t, n) {
var r = A[e];
u.defaults(n || (n = {}), {
emulateHTTP: o.emulateHTTP,
emulateJSON: o.emulateJSON
});
var i = {
type: r,
dataType: "json"
};
n.url || (i.url = u.result(t, "url") || M()), n.data == null && t && (e === "create" || e === "update" || e === "patch") && (i.contentType = "application/json", i.data = JSON.stringify(n.attrs || t.toJSON(n))), n.emulateJSON && (i.contentType = "application/x-www-form-urlencoded", i.data = i.data ? {
model: i.data
} : {});
if (n.emulateHTTP && (r === "PUT" || r === "DELETE" || r === "PATCH")) {
i.type = "POST", n.emulateJSON && (i.data._method = r);
var s = n.beforeSend;
n.beforeSend = function(e) {
e.setRequestHeader("X-HTTP-Method-Override", r);
if (s) return s.apply(this, arguments);
};
}
i.type !== "GET" && !n.emulateJSON && (i.processData = !1);
var a = n.success;
n.success = function(e) {
a && a(t, e, n), t.trigger("sync", t, e, n);
};
var f = n.error;
n.error = function(e) {
f && f(t, e, n), t.trigger("error", t, e, n);
};
var l = n.xhr = o.ajax(u.extend(i, n));
return t.trigger("request", t, l, n), l;
}, o.ajax = function() {
return o.$.ajax.apply(o.$, arguments);
};
var O = function(e, t) {
var n = this, r;
e && u.has(e, "constructor") ? r = e.constructor : r = function() {
return n.apply(this, arguments);
}, u.extend(r, n, t);
var i = function() {
this.constructor = r;
};
return i.prototype = n.prototype, r.prototype = new i, e && u.extend(r.prototype, e), r.__super__ = n.prototype, r;
};
h.extend = p.extend = m.extend = C.extend = E.extend = O;
var M = function() {
throw new Error('A "url" property or function must be specified');
}, _ = function(e, t) {
return !e || !e[t] ? null : u.isFunction(e[t]) ? e[t]() : e[t];
};
o.getValue = _, o.urlError = M, o.methodMap = A;
}.call(this);

var FlashDetect = new function() {
var e = this;
e.installed = !1, e.raw = "", e.major = -1, e.minor = -1, e.revision = -1, e.revisionStr = "";
var t = [ {
name: "ShockwaveFlash.ShockwaveFlash.7",
version: function(e) {
return n(e);
}
}, {
name: "ShockwaveFlash.ShockwaveFlash.6",
version: function(e) {
var t = "6,0,21";
try {
e.AllowScriptAccess = "always", t = n(e);
} catch (r) {}
return t;
}
}, {
name: "ShockwaveFlash.ShockwaveFlash",
version: function(e) {
return n(e);
}
} ], n = function(e) {
var t = -1;
try {
t = e.GetVariable("$version");
} catch (n) {}
return t;
}, r = function(e) {
var t = -1;
try {
t = new ActiveXObject(e);
} catch (n) {
t = {
activeXError: !0
};
}
return t;
}, s = function(e) {
var t = e.split(",");
return {
raw: e,
major: parseInt(t[0].split(" ")[1], 10),
minor: parseInt(t[1], 10),
revision: parseInt(t[2], 10),
revisionStr: t[2]
};
}, o = function(e) {
var t = e.split(/ +/), n = t[2].split(/\./), r = t[3];
return {
raw: e,
major: parseInt(n[0], 10),
minor: parseInt(n[1], 10),
revisionStr: r,
revision: u(r)
};
}, u = function(t) {
return parseInt(t.replace(/[a-zA-Z]/g, ""), 10) || e.revision;
};
e.majorAtLeast = function(t) {
return e.major >= t;
}, e.minorAtLeast = function(t) {
return e.minor >= t;
}, e.revisionAtLeast = function(t) {
return e.revision >= t;
}, e.versionAtLeast = function(t) {
var n = [ e.major, e.minor, e.revision ], r = Math.min(n.length, arguments.length);
for (i = 0; i < r; i++) {
if (n[i] >= arguments[i]) {
if (i + 1 < r && n[i] == arguments[i]) continue;
return !0;
}
return !1;
}
}, e.FlashDetect = function() {
if (navigator.plugins && navigator.plugins.length > 0) {
var n = "application/x-shockwave-flash", i = navigator.mimeTypes;
if (i && i[n] && i[n].enabledPlugin && i[n].enabledPlugin.description) {
var u = i[n].enabledPlugin.description, a = o(u);
e.raw = a.raw, e.major = a.major, e.minor = a.minor, e.revisionStr = a.revisionStr, e.revision = a.revision, e.installed = !0;
}
} else if (navigator.appVersion.indexOf("Mac") == -1 && window.execScript) {
var u = -1;
for (var f = 0; f < t.length && u == -1; f++) {
var l = r(t[f].name);
if (!l.activeXError) {
e.installed = !0, u = t[f].version(l);
if (u != -1) {
var a = s(u);
e.raw = a.raw, e.major = a.major, e.minor = a.minor, e.revision = a.revision, e.revisionStr = a.revisionStr;
}
}
}
}
}();
};

FlashDetect.JS_RELEASE = "1.0.4", function(e, t) {
function n(n, r) {
function i(e) {
return u.preferFlash && Lt && !u.ignoreFlash && u.flash[e] !== t && u.flash[e];
}
function s(e) {
return function(t) {
var n = this._s;
return !n || !n._a ? null : e.call(this, t);
};
}
this.setupOptions = {
url: n || null,
flashVersion: 8,
debugMode: !0,
debugFlash: !1,
useConsole: !0,
consoleOnly: !0,
waitForWindowLoad: !1,
bgColor: "#ffffff",
useHighPerformance: !1,
flashPollingInterval: null,
html5PollingInterval: null,
flashLoadTimeout: 1e3,
wmode: null,
allowScriptAccess: "always",
useFlashBlock: !1,
useHTML5Audio: !0,
html5Test: /^(probably|maybe)$/i,
preferFlash: !1,
noSWFCache: !1,
idPrefix: "sound"
}, this.defaultOptions = {
autoLoad: !1,
autoPlay: !1,
from: null,
loops: 1,
onid3: null,
onload: null,
whileloading: null,
onplay: null,
onpause: null,
onresume: null,
whileplaying: null,
onposition: null,
onstop: null,
onfailure: null,
onfinish: null,
multiShot: !0,
multiShotEvents: !1,
position: null,
pan: 0,
stream: !0,
to: null,
type: null,
usePolicyFile: !1,
volume: 100
}, this.flash9Options = {
isMovieStar: null,
usePeakData: !1,
useWaveformData: !1,
useEQData: !1,
onbufferchange: null,
ondataerror: null
}, this.movieStarOptions = {
bufferTime: 3,
serverURL: null,
onconnect: null,
duration: null
}, this.audioFormats = {
mp3: {
type: [ 'audio/mpeg; codecs="mp3"', "audio/mpeg", "audio/mp3", "audio/MPA", "audio/mpa-robust" ],
required: !0
},
mp4: {
related: [ "aac", "m4a", "m4b" ],
type: [ 'audio/mp4; codecs="mp4a.40.2"', "audio/aac", "audio/x-m4a", "audio/MP4A-LATM", "audio/mpeg4-generic" ],
required: !1
},
ogg: {
type: [ "audio/ogg; codecs=vorbis" ],
required: !1
},
opus: {
type: [ "audio/ogg; codecs=opus", "audio/opus" ],
required: !1
},
wav: {
type: [ 'audio/wav; codecs="1"', "audio/wav", "audio/wave", "audio/x-wav" ],
required: !1
}
}, this.movieID = "sm2-container", this.id = r || "sm2movie", this.debugID = "soundmanager-debug", this.debugURLParam = /([#?&])debug=1/i, this.versionNumber = "V2.97a.20140901", this.altURL = this.movieURL = this.version = null, this.enabled = this.swfLoaded = !1, this.oMC = null, this.sounds = {}, this.soundIDs = [], this.didFlashBlock = this.muted = !1, this.filePattern = null, this.filePatterns = {
flash8: /\.mp3(\?.*)?$/i,
flash9: /\.mp3(\?.*)?$/i
}, this.features = {
buffering: !1,
peakData: !1,
waveformData: !1,
eqData: !1,
movieStar: !1
}, this.sandbox = {}, this.html5 = {
usingFlash: null
}, this.flash = {}, this.ignoreFlash = this.html5Only = !1;
var o, u = this, a = null, f = null, l, c = navigator.userAgent, p = e.location.href.toString(), d = document, v, m, y, b, w = [], E = !1, S = !1, x = !1, T = !1, N = !1, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q, R, U, z, W, X, V, $, J, K, Q, G, Y = null, Z = null, et, tt, nt, rt, it, st, ot = !1, ut = !1, at, ft, lt, ct = 0, ht = null, pt, dt = [], vt, mt = null, gt, yt, bt, wt, Et, St, xt, Tt, Nt = Array.prototype.slice, Ct = !1, kt, Lt, At, Ot, Mt, _t, Dt = 0, Pt = c.match(/(ipad|iphone|ipod)/i), Ht = c.match(/android/i), Bt = c.match(/msie/i), jt = c.match(/webkit/i), Ft = c.match(/safari/i) && !c.match(/chrome/i), It = c.match(/opera/i), qt = c.match(/(mobile|pre\/|xoom)/i) || Pt || Ht, Rt = !p.match(/usehtml5audio/i) && !p.match(/sm2\-ignorebadua/i) && Ft && !c.match(/silk/i) && c.match(/OS X 10_6_([3-7])/i), Ut = d.hasFocus !== t ? d.hasFocus() : null, zt = Ft && (d.hasFocus === t || !d.hasFocus()), Wt = !zt, Xt = /(mp3|mp4|mpa|m4a|m4b)/i, Vt = d.location ? d.location.protocol.match(/http/i) : null, $t = Vt ? "" : "http://", Jt = /^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i, Kt = "mpeg4 aac flv mov mp4 m4v f4v m4a m4b mp4v 3gp 3g2".split(" "), Qt = RegExp("\\.(" + Kt.join("|") + ")(\\?.*)?$", "i");
this.mimePattern = /^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i, this.useAltURL = !Vt;
var Gt;
try {
Gt = Audio !== t && (It && opera !== t && 10 > opera.version() ? new Audio(null) : new Audio).canPlayType !== t;
} catch (Yt) {
Gt = !1;
}
this.hasHTML5 = Gt, this.setup = function(e) {
var n = !u.url;
return e !== t && x && mt && u.ok(), L(e), e && (n && z && e.url !== t && u.beginDelayedInit(), !z && e.url !== t && "complete" === d.readyState && setTimeout(R, 1)), u;
}, this.supported = this.ok = function() {
return mt ? x && !T : u.useHTML5Audio && u.hasHTML5;
}, this.getMovie = function(t) {
return l(t) || d[t] || e[t];
}, this.createSound = function(e, n) {
function r() {
return i = rt(i), u.sounds[i.id] = new o(i), u.soundIDs.push(i.id), u.sounds[i.id];
}
var i, s = null;
if (!x || !u.ok()) return !1;
n !== t && (e = {
id: e,
url: n
}), i = k(e), i.url = pt(i.url), void 0 === i.id && (i.id = u.setupOptions.idPrefix + Dt++);
if (st(i.id, !0)) return u.sounds[i.id];
if (yt(i)) s = r(), s._setup_html5(i); else {
if (u.html5Only || u.html5.usingFlash && i.url && i.url.match(/data\:/i)) return r();
8 < b && null === i.isMovieStar && (i.isMovieStar = !!i.serverURL || !!(i.type && i.type.match(Jt) || i.url && i.url.match(Qt))), i = it(i, void 0), s = r(), 8 === b ? f._createSound(i.id, i.loops || 1, i.usePolicyFile) : (f._createSound(i.id, i.url, i.usePeakData, i.useWaveformData, i.useEQData, i.isMovieStar, i.isMovieStar ? i.bufferTime : !1, i.loops || 1, i.serverURL, i.duration || null, i.autoPlay, !0, i.autoLoad, i.usePolicyFile), i.serverURL || (s.connected = !0, i.onconnect && i.onconnect.apply(s))), !i.serverURL && (i.autoLoad || i.autoPlay) && s.load(i);
}
return !i.serverURL && i.autoPlay && s.play(), s;
}, this.destroySound = function(e, t) {
if (!st(e)) return !1;
var n = u.sounds[e], r;
n._iO = {}, n.stop(), n.unload();
for (r = 0; r < u.soundIDs.length; r++) if (u.soundIDs[r] === e) {
u.soundIDs.splice(r, 1);
break;
}
return t || n.destruct(!0), delete u.sounds[e], !0;
}, this.load = function(e, t) {
return st(e) ? u.sounds[e].load(t) : !1;
}, this.unload = function(e) {
return st(e) ? u.sounds[e].unload() : !1;
}, this.onposition = this.onPosition = function(e, t, n, r) {
return st(e) ? u.sounds[e].onposition(t, n, r) : !1;
}, this.clearOnPosition = function(e, t, n) {
return st(e) ? u.sounds[e].clearOnPosition(t, n) : !1;
}, this.start = this.play = function(e, t) {
var n = null, r = t && !(t instanceof Object);
if (!x || !u.ok()) return !1;
if (st(e, r)) r && (t = {
url: t
}); else {
if (!r) return !1;
r && (t = {
url: t
}), t && t.url && (t.id = e, n = u.createSound(t).play());
}
return null === n && (n = u.sounds[e].play(t)), n;
}, this.setPosition = function(e, t) {
return st(e) ? u.sounds[e].setPosition(t) : !1;
}, this.stop = function(e) {
return st(e) ? u.sounds[e].stop() : !1;
}, this.stopAll = function() {
for (var e in u.sounds) u.sounds.hasOwnProperty(e) && u.sounds[e].stop();
}, this.pause = function(e) {
return st(e) ? u.sounds[e].pause() : !1;
}, this.pauseAll = function() {
var e;
for (e = u.soundIDs.length - 1; 0 <= e; e--) u.sounds[u.soundIDs[e]].pause();
}, this.resume = function(e) {
return st(e) ? u.sounds[e].resume() : !1;
}, this.resumeAll = function() {
var e;
for (e = u.soundIDs.length - 1; 0 <= e; e--) u.sounds[u.soundIDs[e]].resume();
}, this.togglePause = function(e) {
return st(e) ? u.sounds[e].togglePause() : !1;
}, this.setPan = function(e, t) {
return st(e) ? u.sounds[e].setPan(t) : !1;
}, this.setVolume = function(e, t) {
return st(e) ? u.sounds[e].setVolume(t) : !1;
}, this.mute = function(e) {
var t = 0;
e instanceof String && (e = null);
if (e) return st(e) ? u.sounds[e].mute() : !1;
for (t = u.soundIDs.length - 1; 0 <= t; t--) u.sounds[u.soundIDs[t]].mute();
return u.muted = !0;
}, this.muteAll = function() {
u.mute();
}, this.unmute = function(e) {
e instanceof String && (e = null);
if (e) return st(e) ? u.sounds[e].unmute() : !1;
for (e = u.soundIDs.length - 1; 0 <= e; e--) u.sounds[u.soundIDs[e]].unmute();
return u.muted = !1, !0;
}, this.unmuteAll = function() {
u.unmute();
}, this.toggleMute = function(e) {
return st(e) ? u.sounds[e].toggleMute() : !1;
}, this.getMemoryUse = function() {
var e = 0;
return f && 8 !== b && (e = parseInt(f._getMemoryUse(), 10)), e;
}, this.disable = function(n) {
var r;
n === t && (n = !1);
if (T) return !1;
T = !0;
for (r = u.soundIDs.length - 1; 0 <= r; r--) K(u.sounds[u.soundIDs[r]]);
return C(n), Tt.remove(e, "load", _), !0;
}, this.canPlayMIME = function(e) {
var t;
return u.hasHTML5 && (t = bt({
type: e
})), !t && mt && (t = e && u.ok() ? !!(8 < b && e.match(Jt) || e.match(u.mimePattern)) : null), t;
}, this.canPlayURL = function(e) {
var t;
return u.hasHTML5 && (t = bt({
url: e
})), !t && mt && (t = e && u.ok() ? !!e.match(u.filePattern) : null), t;
}, this.canPlayLink = function(e) {
return e.type !== t && e.type && u.canPlayMIME(e.type) ? !0 : u.canPlayURL(e.href);
}, this.getSoundById = function(e, t) {
return e ? u.sounds[e] : null;
}, this.onready = function(t, n) {
if ("function" != typeof t) throw et("needFunction", "onready");
return n || (n = e), O("onready", t, n), M(), !0;
}, this.ontimeout = function(t, n) {
if ("function" != typeof t) throw et("needFunction", "ontimeout");
return n || (n = e), O("ontimeout", t, n), M({
type: "ontimeout"
}), !0;
}, this._wD = this._writeDebug = function(e, t) {
return !0;
}, this._debug = function() {}, this.reboot = function(t, n) {
var r, i, s;
for (r = u.soundIDs.length - 1; 0 <= r; r--) u.sounds[u.soundIDs[r]].destruct();
if (f) try {
Bt && (Z = f.innerHTML), Y = f.parentNode.removeChild(f);
} catch (o) {}
Z = Y = mt = f = null, u.enabled = z = x = ot = ut = E = S = T = Ct = u.swfLoaded = !1, u.soundIDs = [], u.sounds = {}, Dt = 0;
if (t) w = []; else for (r in w) if (w.hasOwnProperty(r)) {
i = 0;
for (s = w[r].length; i < s; i++) w[r][i].fired = !1;
}
return u.html5 = {
usingFlash: null
}, u.flash = {}, u.html5Only = !1, u.ignoreFlash = !1, e.setTimeout(function() {
q(), n || u.beginDelayedInit();
}, 20), u;
}, this.reset = function() {
return u.reboot(!0, !0);
}, this.getMoviePercent = function() {
return f && "PercentLoaded" in f ? f.PercentLoaded() : null;
}, this.beginDelayedInit = function() {
N = !0, R(), setTimeout(function() {
return ut ? !1 : (X(), I(), ut = !0);
}, 20), D();
}, this.destruct = function() {
u.disable(!0);
}, o = function(e) {
var n, r, i = this, s, o, l, c, p, d, v = !1, m = [], g = 0, y, w, E = null, S;
r = n = null, this.sID = this.id = e.id, this.url = e.url, this._iO = this.instanceOptions = this.options = k(e), this.pan = this.options.pan, this.volume = this.options.volume, this.isHTML5 = !1, this._a = null, S = this.url ? !1 : !0, this.id3 = {}, this._debug = function() {}, this.load = function(e) {
var n = null, r;
e !== t ? i._iO = k(e, i.options) : (e = i.options, i._iO = e, E && E !== i.url && (i._iO.url = i.url, i.url = null)), i._iO.url || (i._iO.url = i.url), i._iO.url = pt(i._iO.url), r = i.instanceOptions = i._iO;
if (!r.url && !i.url) return i;
if (r.url === i.url && 0 !== i.readyState && 2 !== i.readyState) return 3 === i.readyState && r.onload && _t(i, function() {
r.onload.apply(i, [ !!i.duration ]);
}), i;
i.loaded = !1, i.readyState = 1, i.playState = 0, i.id3 = {};
if (yt(r)) n = i._setup_html5(r), n._called_load || (i._html5_canplay = !1, i.url !== r.url && (i._a.src = r.url, i.setPosition(0)), i._a.autobuffer = "auto", i._a.preload = "auto", i._a._called_load = !0); else {
if (u.html5Only || i._iO.url && i._iO.url.match(/data\:/i)) return i;
try {
i.isHTML5 = !1, i._iO = it(rt(r)), i._iO.autoPlay && (i._iO.position || i._iO.from) && (i._iO.autoPlay = !1), r = i._iO, 8 === b ? f._load(i.id, r.url, r.stream, r.autoPlay, r.usePolicyFile) : f._load(i.id, r.url, !!r.stream, !!r.autoPlay, r.loops || 1, !!r.autoLoad, r.usePolicyFile);
} catch (s) {
V({
type: "SMSOUND_LOAD_JS_EXCEPTION",
fatal: !0
});
}
}
return i.url = r.url, i;
}, this.unload = function() {
return 0 !== i.readyState && (i.isHTML5 ? (c(), i._a && (i._a.pause(), E = Et(i._a))) : 8 === b ? f._unload(i.id, "about:blank") : f._unload(i.id), s()), i;
}, this.destruct = function(e) {
i.isHTML5 ? (c(), i._a && (i._a.pause(), Et(i._a), Ct || l(), i._a._s = null, i._a = null)) : (i._iO.onfailure = null, f._destroySound(i.id)), e || u.destroySound(i.id, !0);
}, this.start = this.play = function(e, n) {
var r, s, o, a, l;
s = !0, s = null, n = n === t ? !0 : n, e || (e = {}), i.url && (i._iO.url = i.url), i._iO = k(i._iO, i.options), i._iO = k(e, i._iO), i._iO.url = pt(i._iO.url), i.instanceOptions = i._iO;
if (!i.isHTML5 && i._iO.serverURL && !i.connected) return i.getAutoPlay() || i.setAutoPlay(!0), i;
yt(i._iO) && (i._setup_html5(i._iO), p()), 1 === i.playState && !i.paused && (r = i._iO.multiShot, r || (i.isHTML5 && i.setPosition(i._iO.position), s = i));
if (null !== s) return s;
e.url && e.url !== i.url && (!i.readyState && !i.isHTML5 && 8 === b && S ? S = !1 : i.load(i._iO)), i.loaded || (0 === i.readyState ? (!i.isHTML5 && !u.html5Only ? (i._iO.autoPlay = !0, i.load(i._iO)) : i.isHTML5 ? i.load(i._iO) : s = i, i.instanceOptions = i._iO) : 2 === i.readyState && (s = i));
if (null !== s) return s;
!i.isHTML5 && 9 === b && 0 < i.position && i.position === i.duration && (e.position = 0);
if (i.paused && 0 <= i.position && (!i._iO.serverURL || 0 < i.position)) i.resume(); else {
i._iO = k(e, i._iO);
if ((!i.isHTML5 && null !== i._iO.position && 0 < i._iO.position || null !== i._iO.from && 0 < i._iO.from || null !== i._iO.to) && 0 === i.instanceCount && 0 === i.playState && !i._iO.serverURL) {
r = function() {
i._iO = k(e, i._iO), i.play(i._iO);
}, i.isHTML5 && !i._html5_canplay ? (i.load({
_oncanplay: r
}), s = !1) : !i.isHTML5 && !i.loaded && (!i.readyState || 2 !== i.readyState) && (i.load({
onload: r
}), s = !1);
if (null !== s) return s;
i._iO = w();
}
(!i.instanceCount || i._iO.multiShotEvents || i.isHTML5 && i._iO.multiShot && !Ct || !i.isHTML5 && 8 < b && !i.getAutoPlay()) && i.instanceCount++, i._iO.onposition && 0 === i.playState && d(i), i.playState = 1, i.paused = !1, i.position = i._iO.position !== t && !isNaN(i._iO.position) ? i._iO.position : 0, i.isHTML5 || (i._iO = it(rt(i._iO))), i._iO.onplay && n && (i._iO.onplay.apply(i), v = !0), i.setVolume(i._iO.volume, !0), i.setPan(i._iO.pan, !0), i.isHTML5 ? 2 > i.instanceCount ? (p(), s = i._setup_html5(), i.setPosition(i._iO.position), s.play()) : (o = new Audio(i._iO.url), a = function() {
Tt.remove(o, "ended", a), i._onfinish(i), Et(o), o = null;
}, l = function() {
Tt.remove(o, "canplay", l);
try {
o.currentTime = i._iO.position / 1e3;
} catch (e) {}
o.play();
}, Tt.add(o, "ended", a), void 0 !== i._iO.volume && (o.volume = Math.max(0, Math.min(1, i._iO.volume / 100))), i.muted && (o.muted = !0), i._iO.position ? Tt.add(o, "canplay", l) : o.play()) : (s = f._start(i.id, i._iO.loops || 1, 9 === b ? i.position : i.position / 1e3, i._iO.multiShot || !1), 9 === b && !s && i._iO.onplayerror && i._iO.onplayerror.apply(i));
}
return i;
}, this.stop = function(e) {
var t = i._iO;
return 1 === i.playState && (i._onbufferchange(0), i._resetOnPosition(0), i.paused = !1, i.isHTML5 || (i.playState = 0), y(), t.to && i.clearOnPosition(t.to), i.isHTML5 ? i._a && (e = i.position, i.setPosition(0), i.position = e, i._a.pause(), i.playState = 0, i._onTimer(), c()) : (f._stop(i.id, e), t.serverURL && i.unload()), i.instanceCount = 0, i._iO = {}, t.onstop && t.onstop.apply(i)), i;
}, this.setAutoPlay = function(e) {
i._iO.autoPlay = e, i.isHTML5 || (f._setAutoPlay(i.id, e), e && !i.instanceCount && 1 === i.readyState && i.instanceCount++);
}, this.getAutoPlay = function() {
return i._iO.autoPlay;
}, this.setPosition = function(e) {
e === t && (e = 0);
var n = i.isHTML5 ? Math.max(e, 0) : Math.min(i.duration || i._iO.duration, Math.max(e, 0));
i.position = n, e = i.position / 1e3, i._resetOnPosition(i.position), i._iO.position = n;
if (i.isHTML5) {
if (i._a) {
if (i._html5_canplay) {
if (i._a.currentTime !== e) try {
i._a.currentTime = e, (0 === i.playState || i.paused) && i._a.pause();
} catch (r) {}
} else if (e) return i;
i.paused && i._onTimer(!0);
}
} else e = 9 === b ? i.position : e, i.readyState && 2 !== i.readyState && f._setPosition(i.id, e, i.paused || !i.playState, i._iO.multiShot);
return i;
}, this.pause = function(e) {
return i.paused || 0 === i.playState && 1 !== i.readyState ? i : (i.paused = !0, i.isHTML5 ? (i._setup_html5().pause(), c()) : (e || e === t) && f._pause(i.id, i._iO.multiShot), i._iO.onpause && i._iO.onpause.apply(i), i);
}, this.resume = function() {
var e = i._iO;
return i.paused ? (i.paused = !1, i.playState = 1, i.isHTML5 ? (i._setup_html5().play(), p()) : (e.isMovieStar && !e.serverURL && i.setPosition(i.position), f._pause(i.id, e.multiShot)), !v && e.onplay ? (e.onplay.apply(i), v = !0) : e.onresume && e.onresume.apply(i), i) : i;
}, this.togglePause = function() {
return 0 === i.playState ? (i.play({
position: 9 === b && !i.isHTML5 ? i.position : i.position / 1e3
}), i) : (i.paused ? i.resume() : i.pause(), i);
}, this.setPan = function(e, n) {
return e === t && (e = 0), n === t && (n = !1), i.isHTML5 || f._setPan(i.id, e), i._iO.pan = e, n || (i.pan = e, i.options.pan = e), i;
}, this.setVolume = function(e, n) {
return e === t && (e = 100), n === t && (n = !1), i.isHTML5 ? i._a && (u.muted && !i.muted && (i.muted = !0, i._a.muted = !0), i._a.volume = Math.max(0, Math.min(1, e / 100))) : f._setVolume(i.id, u.muted && !i.muted || i.muted ? 0 : e), i._iO.volume = e, n || (i.volume = e, i.options.volume = e), i;
}, this.mute = function() {
return i.muted = !0, i.isHTML5 ? i._a && (i._a.muted = !0) : f._setVolume(i.id, 0), i;
}, this.unmute = function() {
i.muted = !1;
var e = i._iO.volume !== t;
return i.isHTML5 ? i._a && (i._a.muted = !1) : f._setVolume(i.id, e ? i._iO.volume : i.options.volume), i;
}, this.toggleMute = function() {
return i.muted ? i.unmute() : i.mute();
}, this.onposition = this.onPosition = function(e, n, r) {
return m.push({
position: parseInt(e, 10),
method: n,
scope: r !== t ? r : i,
fired: !1
}), i;
}, this.clearOnPosition = function(e, t) {
var n;
e = parseInt(e, 10);
if (isNaN(e)) return !1;
for (n = 0; n < m.length; n++) e === m[n].position && (!t || t === m[n].method) && (m[n].fired && g--, m.splice(n, 1));
}, this._processOnPosition = function() {
var e, t;
e = m.length;
if (!e || !i.playState || g >= e) return !1;
for (e -= 1; 0 <= e; e--) t = m[e], !t.fired && i.position >= t.position && (t.fired = !0, g++, t.method.apply(t.scope, [ t.position ]));
return !0;
}, this._resetOnPosition = function(e) {
var t, n;
t = m.length;
if (!t) return !1;
for (t -= 1; 0 <= t; t--) n = m[t], n.fired && e <= n.position && (n.fired = !1, g--);
return !0;
}, w = function() {
var e = i._iO, t = e.from, n = e.to, r, s;
return s = function() {
i.clearOnPosition(n, s), i.stop();
}, r = function() {
null !== n && !isNaN(n) && i.onPosition(n, s);
}, null !== t && !isNaN(t) && (e.position = t, e.multiShot = !1, r()), e;
}, d = function() {
var e, t = i._iO.onposition;
if (t) for (e in t) t.hasOwnProperty(e) && i.onPosition(parseInt(e, 10), t[e]);
}, y = function() {
var e, t = i._iO.onposition;
if (t) for (e in t) t.hasOwnProperty(e) && i.clearOnPosition(parseInt(e, 10));
}, p = function() {
i.isHTML5 && at(i);
}, c = function() {
i.isHTML5 && ft(i);
}, s = function(e) {
e || (m = [], g = 0), v = !1, i._hasTimer = null, i._a = null, i._html5_canplay = !1, i.bytesLoaded = null, i.bytesTotal = null, i.duration = i._iO && i._iO.duration ? i._iO.duration : null, i.durationEstimate = null, i.buffered = [], i.eqData = [], i.eqData.left = [], i.eqData.right = [], i.failures = 0, i.isBuffering = !1, i.instanceOptions = {}, i.instanceCount = 0, i.loaded = !1, i.metadata = {}, i.readyState = 0, i.muted = !1, i.paused = !1, i.peakData = {
left: 0,
right: 0
}, i.waveformData = {
left: [],
right: []
}, i.playState = 0, i.position = null, i.id3 = {};
}, s(), this._onTimer = function(e) {
var t, s = !1, o = {};
if (i._hasTimer || e) return i._a && (e || (0 < i.playState || 1 === i.readyState) && !i.paused) && (t = i._get_html5_duration(), t !== n && (n = t, i.duration = t, s = !0), i.durationEstimate = i.duration, t = 1e3 * i._a.currentTime || 0, t !== r && (r = t, s = !0), (s || e) && i._whileplaying(t, o, o, o, o)), s;
}, this._get_html5_duration = function() {
var e = i._iO;
return (e = i._a && i._a.duration ? 1e3 * i._a.duration : e && e.duration ? e.duration : null) && !isNaN(e) && Infinity !== e ? e : null;
}, this._apply_loop = function(e, t) {
e.loop = 1 < t ? "loop" : "";
}, this._setup_html5 = function(e) {
e = k(i._iO, e);
var t = Ct ? a : i._a, n = decodeURI(e.url), r;
Ct ? n === decodeURI(kt) && (r = !0) : n === decodeURI(E) && (r = !0);
if (t) {
if (t._s) if (Ct) t._s && t._s.playState && !r && t._s.stop(); else if (!Ct && n === decodeURI(E)) return i._apply_loop(t, e.loops), t;
r || (E && s(!1), t.src = e.url, kt = E = i.url = e.url, t._called_load = !1);
} else e.autoLoad || e.autoPlay ? (i._a = new Audio(e.url), i._a.load()) : i._a = It && 10 > opera.version() ? new Audio(null) : new Audio, t = i._a, t._called_load = !1, Ct && (a = t);
return i.isHTML5 = !0, i._a = t, t._s = i, o(), i._apply_loop(t, e.loops), e.autoLoad || e.autoPlay ? i.load() : (t.autobuffer = !1, t.preload = "auto"), t;
}, o = function() {
if (i._a._added_events) return !1;
var e;
i._a._added_events = !0;
for (e in Mt) Mt.hasOwnProperty(e) && i._a && i._a.addEventListener(e, Mt[e], !1);
return !0;
}, l = function() {
var e;
i._a._added_events = !1;
for (e in Mt) Mt.hasOwnProperty(e) && i._a && i._a.removeEventListener(e, Mt[e], !1);
}, this._onload = function(e) {
var t = !!e || !i.isHTML5 && 8 === b && i.duration;
return i.loaded = t, i.readyState = t ? 3 : 2, i._onbufferchange(0), i._iO.onload && _t(i, function() {
i._iO.onload.apply(i, [ t ]);
}), !0;
}, this._onbufferchange = function(e) {
return 0 === i.playState || e && i.isBuffering || !e && !i.isBuffering ? !1 : (i.isBuffering = 1 === e, i._iO.onbufferchange && i._iO.onbufferchange.apply(i, [ e ]), !0);
}, this._onsuspend = function() {
return i._iO.onsuspend && i._iO.onsuspend.apply(i), !0;
}, this._onfailure = function(e, t, n) {
i.failures++, i._iO.onfailure && 1 === i.failures && i._iO.onfailure(e, t, n);
}, this._onwarning = function(e, t, n) {
i._iO.onwarning && i._iO.onwarning(e, t, n);
}, this._onfinish = function() {
var e = i._iO.onfinish;
i._onbufferchange(0), i._resetOnPosition(0), i.instanceCount && (i.instanceCount--, i.instanceCount || (y(), i.playState = 0, i.paused = !1, i.instanceCount = 0, i.instanceOptions = {}, i._iO = {}, c(), i.isHTML5 && (i.position = 0)), (!i.instanceCount || i._iO.multiShotEvents) && e && _t(i, function() {
e.apply(i);
}));
}, this._whileloading = function(e, t, n, r) {
var s = i._iO;
i.bytesLoaded = e, i.bytesTotal = t, i.duration = Math.floor(n), i.bufferLength = r, i.durationEstimate = !i.isHTML5 && !s.isMovieStar ? s.duration ? i.duration > s.duration ? i.duration : s.duration : parseInt(i.bytesTotal / i.bytesLoaded * i.duration, 10) : i.duration, i.isHTML5 || (i.buffered = [ {
start: 0,
end: i.duration
} ]), (3 !== i.readyState || i.isHTML5) && s.whileloading && s.whileloading.apply(i);
}, this._whileplaying = function(e, n, r, s, o) {
var u = i._iO;
return isNaN(e) || null === e ? !1 : (i.position = Math.max(0, e), i._processOnPosition(), !i.isHTML5 && 8 < b && (u.usePeakData && n !== t && n && (i.peakData = {
left: n.leftPeak,
right: n.rightPeak
}), u.useWaveformData && r !== t && r && (i.waveformData = {
left: r.split(","),
right: s.split(",")
}), u.useEQData && o !== t && o && o.leftEQ && (e = o.leftEQ.split(","), i.eqData = e, i.eqData.left = e, o.rightEQ !== t && o.rightEQ && (i.eqData.right = o.rightEQ.split(",")))), 1 === i.playState && (!i.isHTML5 && 8 === b && !i.position && i.isBuffering && i._onbufferchange(0), u.whileplaying && u.whileplaying.apply(i)), !0);
}, this._oncaptiondata = function(e) {
i.captiondata = e, i._iO.oncaptiondata && i._iO.oncaptiondata.apply(i, [ e ]);
}, this._onmetadata = function(e, t) {
var n = {}, r, s;
r = 0;
for (s = e.length; r < s; r++) n[e[r]] = t[r];
i.metadata = n, console.log("updated metadata", i.metadata), i._iO.onmetadata && i._iO.onmetadata.call(i, i.metadata);
}, this._onid3 = function(e, t) {
var n = [], r, s;
r = 0;
for (s = e.length; r < s; r++) n[e[r]] = t[r];
i.id3 = k(i.id3, n), i._iO.onid3 && i._iO.onid3.apply(i);
}, this._onconnect = function(e) {
e = 1 === e;
if (i.connected = e) i.failures = 0, st(i.id) && (i.getAutoPlay() ? i.play(t, i.getAutoPlay()) : i._iO.autoLoad && i.load()), i._iO.onconnect && i._iO.onconnect.apply(i, [ e ]);
}, this._ondataerror = function(e) {
0 < i.playState && i._iO.ondataerror && i._iO.ondataerror.apply(i);
};
}, W = function() {
return d.body || d.getElementsByTagName("div")[0];
}, l = function(e) {
return d.getElementById(e);
}, k = function(e, n) {
var r = e || {}, i, s;
i = n === t ? u.defaultOptions : n;
for (s in i) i.hasOwnProperty(s) && r[s] === t && (r[s] = "object" != typeof i[s] || null === i[s] ? i[s] : k(r[s], i[s]));
return r;
}, _t = function(t, n) {
!t.isHTML5 && 8 === b ? e.setTimeout(n, 0) : n();
}, A = {
onready: 1,
ontimeout: 1,
defaultOptions: 1,
flash9Options: 1,
movieStarOptions: 1
}, L = function(e, n) {
var r, i = !0, s = n !== t, o = u.setupOptions;
for (r in e) if (e.hasOwnProperty(r)) if ("object" != typeof e[r] || null === e[r] || e[r] instanceof Array || e[r] instanceof RegExp) s && A[n] !== t ? u[n][r] = e[r] : o[r] !== t ? (u.setupOptions[r] = e[r], u[r] = e[r]) : A[r] === t ? i = !1 : u[r] instanceof Function ? u[r].apply(u, e[r] instanceof Array ? e[r] : [ e[r] ]) : u[r] = e[r]; else {
if (A[r] !== t) return L(e[r], r);
i = !1;
}
return i;
}, Tt = function() {
function t(e) {
e = Nt.call(e);
var t = e.length;
return r ? (e[1] = "on" + e[1], 3 < t && e.pop()) : 3 === t && e.push(!1), e;
}
function n(e, t) {
var n = e.shift(), s = [ i[t] ];
r ? n[s](e[0], e[1]) : n[s].apply(n, e);
}
var r = e.attachEvent, i = {
add: r ? "attachEvent" : "addEventListener",
remove: r ? "detachEvent" : "removeEventListener"
};
return {
add: function() {
n(t(arguments), "add");
},
remove: function() {
n(t(arguments), "remove");
}
};
}(), Mt = {
abort: s(function() {}),
canplay: s(function() {
var e = this._s, n;
if (e._html5_canplay) return !0;
e._html5_canplay = !0, e._onbufferchange(0), n = e._iO.position !== t && !isNaN(e._iO.position) ? e._iO.position / 1e3 : null;
if (this.currentTime !== n) try {
this.currentTime = n;
} catch (r) {}
e._iO._oncanplay && e._iO._oncanplay();
}),
canplaythrough: s(function() {
var e = this._s;
e.loaded || (e._onbufferchange(0), e._whileloading(e.bytesLoaded, e.bytesTotal, e._get_html5_duration()), e._onload(!0));
}),
durationchange: s(function() {
var e = this._s, t;
t = e._get_html5_duration(), !isNaN(t) && t !== e.duration && (e.durationEstimate = e.duration = t);
}),
ended: s(function() {
this._s._onfinish();
}),
error: s(function() {
this._s._onload(!1);
}),
loadeddata: s(function() {
var e = this._s;
!e._loaded && !Ft && (e.duration = e._get_html5_duration());
}),
loadedmetadata: s(function() {}),
loadstart: s(function() {
this._s._onbufferchange(1);
}),
play: s(function() {
this._s._onbufferchange(0);
}),
playing: s(function() {
this._s._onbufferchange(0);
}),
progress: s(function(e) {
var t = this._s, n, r, i = 0, i = e.target.buffered;
n = e.loaded || 0;
var s = e.total || 1;
t.buffered = [];
if (i && i.length) {
n = 0;
for (r = i.length; n < r; n++) t.buffered.push({
start: 1e3 * i.start(n),
end: 1e3 * i.end(n)
});
i = 1e3 * (i.end(0) - i.start(0)), n = Math.min(1, i / (1e3 * e.target.duration));
}
isNaN(n) || (t._whileloading(n, s, t._get_html5_duration()), n && s && n === s && Mt.canplaythrough.call(this, e));
}),
ratechange: s(function() {}),
suspend: s(function(e) {
var t = this._s;
Mt.progress.call(this, e), t._onsuspend();
}),
stalled: s(function() {}),
timeupdate: s(function() {
this._s._onTimer();
}),
waiting: s(function() {
this._s._onbufferchange(1);
})
}, yt = function(e) {
return !e || !e.type && !e.url && !e.serverURL ? !1 : e.serverURL || e.type && i(e.type) ? !1 : e.type ? bt({
type: e.type
}) : bt({
url: e.url
}) || u.html5Only || e.url.match(/data\:/i);
}, Et = function(e) {
var t;
return e && (t = Ft ? "about:blank" : u.html5.canPlayType("audio/wav") ? "data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w==" : "about:blank", e.src = t, void 0 !== e._called_unload && (e._called_load = !1)), Ct && (kt = null), t;
}, bt = function(e) {
if (!u.useHTML5Audio || !u.hasHTML5) return !1;
var n = e.url || null;
e = e.type || null;
var r = u.audioFormats, s;
if (e && u.html5[e] !== t) return u.html5[e] && !i(e);
if (!wt) {
wt = [];
for (s in r) r.hasOwnProperty(s) && (wt.push(s), r[s].related && (wt = wt.concat(r[s].related)));
wt = RegExp("\\.(" + wt.join("|") + ")(\\?.*)?$", "i");
}
return s = n ? n.toLowerCase().match(wt) : null, !s || !s.length ? e && (n = e.indexOf(";"), s = (-1 !== n ? e.substr(0, n) : e).substr(6)) : s = s[1], s && u.html5[s] !== t ? n = u.html5[s] && !i(s) : (e = "audio/" + s, n = u.html5.canPlayType({
type: e
}), n = (u.html5[s] = n) && u.html5[e] && !i(e)), n;
}, xt = function() {
function e(e) {
var t, r = t = !1;
if (!n || "function" != typeof n.canPlayType) return t;
if (e instanceof Array) {
a = 0;
for (t = e.length; a < t; a++) if (u.html5[e[a]] || n.canPlayType(e[a]).match(u.html5Test)) r = !0, u.html5[e[a]] = !0, u.flash[e[a]] = !!e[a].match(Xt);
t = r;
} else e = n && "function" == typeof n.canPlayType ? n.canPlayType(e) : !1, t = !!e && !!e.match(u.html5Test);
return t;
}
if (!u.useHTML5Audio || !u.hasHTML5) return mt = u.html5.usingFlash = !0, !1;
var n = Audio !== t ? It && 10 > opera.version() ? new Audio(null) : new Audio : null, r, i, s = {}, o, a;
o = u.audioFormats;
for (r in o) if (o.hasOwnProperty(r) && (i = "audio/" + r, s[r] = e(o[r].type), s[i] = s[r], r.match(Xt) ? (u.flash[r] = !0, u.flash[i] = !0) : (u.flash[r] = !1, u.flash[i] = !1), o[r] && o[r].related)) for (a = o[r].related.length - 1; 0 <= a; a--) s["audio/" + o[r].related[a]] = s[r], u.html5[o[r].related[a]] = s[r], u.flash[o[r].related[a]] = s[r];
return s.canPlayType = n ? e : null, u.html5 = k(u.html5, s), u.html5.usingFlash = gt(), mt = u.html5.usingFlash, !0;
}, F = {}, et = function() {}, rt = function(e) {
return 8 === b && 1 < e.loops && e.stream && (e.stream = !1), e;
}, it = function(e, t) {
return e && !e.usePolicyFile && (e.onid3 || e.usePeakData || e.useWaveformData || e.useEQData) && (e.usePolicyFile = !0), e;
}, v = function() {
return !1;
}, K = function(e) {
for (var t in e) e.hasOwnProperty(t) && "function" == typeof e[t] && (e[t] = v);
}, Q = function(e) {
e === t && (e = !1), (T || e) && u.disable(e);
}, G = function(e) {
var t = null;
if (e) if (e.match(/\.swf(\?.*)?$/i)) {
if (t = e.substr(e.toLowerCase().lastIndexOf(".swf?") + 4)) return e;
} else e.lastIndexOf("/") !== e.length - 1 && (e += "/");
return e = (e && -1 !== e.lastIndexOf("/") ? e.substr(0, e.lastIndexOf("/") + 1) : "./") + u.movieURL, u.noSWFCache && (e += "?ts=" + (new Date).getTime()), e;
}, B = function() {
b = parseInt(u.flashVersion, 10), 8 !== b && 9 !== b && (u.flashVersion = b = 8);
var e = u.debugMode || u.debugFlash ? "_debug.swf" : ".swf";
u.useHTML5Audio && !u.html5Only && u.audioFormats.mp4.required && 9 > b && (u.flashVersion = b = 9), u.version = u.versionNumber + (u.html5Only ? " (HTML5-only mode)" : 9 === b ? " (AS3/Flash 9)" : " (AS2/Flash 8)"), 8 < b ? (u.defaultOptions = k(u.defaultOptions, u.flash9Options), u.features.buffering = !0, u.defaultOptions = k(u.defaultOptions, u.movieStarOptions), u.filePatterns.flash9 = RegExp("\\.(mp3|" + Kt.join("|") + ")(\\?.*)?$", "i"), u.features.movieStar = !0) : u.features.movieStar = !1, u.filePattern = u.filePatterns[8 !== b ? "flash9" : "flash8"], u.movieURL = (8 === b ? "soundmanager2.swf" : "soundmanager2_flash9.swf").replace(".swf", e), u.features.peakData = u.features.waveformData = u.features.eqData = 8 < b;
}, $ = function(e, t) {
if (!f) return !1;
f._setPolling(e, t);
}, J = function() {}, st = this.getSoundById, nt = function() {
var e = [];
return u.debugMode && e.push("sm2_debug"), u.debugFlash && e.push("flash_debug"), u.useHighPerformance && e.push("high_performance"), e.join(" ");
}, tt = function() {
et("fbHandler");
var e = u.getMoviePercent(), t = {
type: "FLASHBLOCK"
};
if (u.html5Only) return !1;
u.ok() ? u.oMC && (u.oMC.className = [ nt(), "movieContainer", "swf_loaded" + (u.didFlashBlock ? " swf_unblocked" : "") ].join(" ")) : (mt && (u.oMC.className = nt() + " movieContainer " + (null === e ? "swf_timedout" : "swf_error")), u.didFlashBlock = !0, M({
type: "ontimeout",
ignoreInit: !0,
error: t
}), V(t));
}, O = function(e, n, r) {
w[e] === t && (w[e] = []), w[e].push({
method: n,
scope: r || null,
fired: !1
});
}, M = function(e) {
e || (e = {
type: u.ok() ? "onready" : "ontimeout"
});
if (!x && e && !e.ignoreInit || "ontimeout" === e.type && (u.ok() || T && !e.ignoreInit)) return !1;
var t = {
success: e && e.ignoreInit ? u.ok() : !T
}, n = e && e.type ? w[e.type] || [] : [], r = [], i, t = [ t ], s = mt && !u.ok();
e.error && (t[0].error = e.error), e = 0;
for (i = n.length; e < i; e++) !0 !== n[e].fired && r.push(n[e]);
if (r.length) {
e = 0;
for (i = r.length; e < i; e++) r[e].scope ? r[e].method.apply(r[e].scope, t) : r[e].method.apply(this, t), s || (r[e].fired = !0);
}
return !0;
}, _ = function() {
e.setTimeout(function() {
u.useFlashBlock && tt(), M(), "function" == typeof u.onload && u.onload.apply(e), u.waitForWindowLoad && Tt.add(e, "load", _);
}, 1);
}, At = function() {
if (Lt !== t) return Lt;
var n = !1, r = navigator, i = r.plugins, s, o = e.ActiveXObject;
if (i && i.length) (r = r.mimeTypes) && r["application/x-shockwave-flash"] && r["application/x-shockwave-flash"].enabledPlugin && r["application/x-shockwave-flash"].enabledPlugin.description && (n = !0); else if (o !== t && !c.match(/MSAppHost/i)) {
try {
s = new o("ShockwaveFlash.ShockwaveFlash");
} catch (u) {
s = null;
}
n = !!s;
}
return Lt = n;
}, gt = function() {
var e, t, n = u.audioFormats;
Pt && c.match(/os (1|2|3_0|3_1)\s/i) ? (u.hasHTML5 = !1, u.html5Only = !0, u.oMC && (u.oMC.style.display = "none")) : u.useHTML5Audio && (!u.html5 || !u.html5.canPlayType) && (u.hasHTML5 = !1);
if (u.useHTML5Audio && u.hasHTML5) for (t in vt = !0, n) n.hasOwnProperty(t) && n[t].required && (u.html5.canPlayType(n[t].type) ? u.preferFlash && (u.flash[t] || u.flash[n[t].type]) && (e = !0) : (vt = !1, e = !0));
return u.ignoreFlash && (e = !1, vt = !0), u.html5Only = u.hasHTML5 && u.useHTML5Audio && !e, !u.html5Only;
}, pt = function(e) {
var t, n, r = 0;
if (e instanceof Array) {
t = 0;
for (n = e.length; t < n; t++) if (e[t] instanceof Object) {
if (u.canPlayMIME(e[t].type)) {
r = t;
break;
}
} else if (u.canPlayURL(e[t])) {
r = t;
break;
}
e[r].url && (e[r] = e[r].url), e = e[r];
}
return e;
}, at = function(e) {
e._hasTimer || (e._hasTimer = !0, !qt && u.html5PollingInterval && (null === ht && 0 === ct && (ht = setInterval(lt, u.html5PollingInterval)), ct++));
}, ft = function(e) {
e._hasTimer && (e._hasTimer = !1, !qt && u.html5PollingInterval && ct--);
}, lt = function() {
var e;
if (null !== ht && !ct) return clearInterval(ht), ht = null, !1;
for (e = u.soundIDs.length - 1; 0 <= e; e--) u.sounds[u.soundIDs[e]].isHTML5 && u.sounds[u.soundIDs[e]]._hasTimer && u.sounds[u.soundIDs[e]]._onTimer();
}, V = function(n) {
n = n !== t ? n : {}, "function" == typeof u.onerror && u.onerror.apply(e, [ {
type: n.type !== t ? n.type : null
} ]), n.fatal !== t && n.fatal && u.disable();
}, Ot = function() {
if (!Rt || !At()) return !1;
var e = u.audioFormats, t, n;
for (n in e) if (e.hasOwnProperty(n) && ("mp3" === n || "mp4" === n)) if (u.html5[n] = !1, e[n] && e[n].related) for (t = e[n].related.length - 1; 0 <= t; t--) u.html5[e[n].related[t]] = !1;
}, this._setSandboxType = function(e) {}, this._externalInterfaceOK = function(e) {
if (u.swfLoaded) return !1;
u.swfLoaded = !0, zt = !1, Rt && Ot(), setTimeout(y, Bt ? 100 : 1);
}, X = function(e, n) {
function r(e, t) {
return '<param name="' + e + '" value="' + t + '" />';
}
if (E && S) return !1;
if (u.html5Only) return B(), u.oMC = l(u.movieID), y(), S = E = !0, !1;
var i = n || u.url, s = u.altURL || i, o = W(), a = nt(), f = null, f = d.getElementsByTagName("html")[0], p, v, m, f = f && f.dir && f.dir.match(/rtl/i);
e = e === t ? u.id : e, B(), u.url = G(Vt ? i : s), n = u.url, u.wmode = !u.wmode && u.useHighPerformance ? "transparent" : u.wmode, null !== u.wmode && (c.match(/msie 8/i) || !Bt && !u.useHighPerformance) && navigator.platform.match(/win32|win64/i) && (dt.push(F.spcWmode), u.wmode = null), o = {
name: e,
id: e,
src: n,
quality: "high",
allowScriptAccess: u.allowScriptAccess,
bgcolor: u.bgColor,
pluginspage: $t + "www.macromedia.com/go/getflashplayer",
title: "JS/Flash audio component (SoundManager 2)",
type: "application/x-shockwave-flash",
wmode: u.wmode,
hasPriority: "true"
}, u.debugFlash && (o.FlashVars = "debug=1"), u.wmode || delete o.wmode;
if (Bt) i = d.createElement("div"), v = [ '<object id="' + e + '" data="' + n + '" type="' + o.type + '" title="' + o.title + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + $t + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">', r("movie", n), r("AllowScriptAccess", u.allowScriptAccess), r("quality", o.quality), u.wmode ? r("wmode", u.wmode) : "", r("bgcolor", u.bgColor), r("hasPriority", "true"), u.debugFlash ? r("FlashVars", o.FlashVars) : "", "</object>" ].join(""); else for (p in i = d.createElement("embed"), o) o.hasOwnProperty(p) && i.setAttribute(p, o[p]);
J(), a = nt();
if (o = W()) if (u.oMC = l(u.movieID) || d.createElement("div"), u.oMC.id) m = u.oMC.className, u.oMC.className = (m ? m + " " : "movieContainer") + (a ? " " + a : ""), u.oMC.appendChild(i), Bt && (p = u.oMC.appendChild(d.createElement("div")), p.className = "sm2-object-box", p.innerHTML = v), S = !0; else {
u.oMC.id = u.movieID, u.oMC.className = "movieContainer " + a, p = a = null, u.useFlashBlock || (u.useHighPerformance ? a = {
position: "fixed",
width: "8px",
height: "8px",
bottom: "0px",
left: "0px",
overflow: "hidden"
} : (a = {
position: "absolute",
width: "6px",
height: "6px",
top: "-9999px",
left: "-9999px"
}, f && (a.left = Math.abs(parseInt(a.left, 10)) + "px"))), jt && (u.oMC.style.zIndex = 1e4);
if (!u.debugFlash) for (m in a) a.hasOwnProperty(m) && (u.oMC.style[m] = a[m]);
try {
Bt || u.oMC.appendChild(i), o.appendChild(u.oMC), Bt && (p = u.oMC.appendChild(d.createElement("div")), p.className = "sm2-object-box", p.innerHTML = v), S = !0;
} catch (g) {
throw Error(et("domError") + " \n" + g.toString());
}
}
return E = !0;
}, I = function() {
return u.html5Only ? (X(), !1) : f || !u.url ? !1 : (f = u.getMovie(u.id), f || (Y ? (Bt ? u.oMC.innerHTML = Z : u.oMC.appendChild(Y), Y = null, E = !0) : X(u.id, u.url), f = u.getMovie(u.id)), "function" == typeof u.oninitmovie && setTimeout(u.oninitmovie, 1), !0);
}, D = function() {
setTimeout(P, 1e3);
}, H = function() {
e.setTimeout(function() {
u.setup({
preferFlash: !1
}).reboot(), u.didFlashBlock = !0, u.beginDelayedInit();
}, 1);
}, P = function() {
var t, n = !1;
if (!u.url || ot) return !1;
ot = !0, Tt.remove(e, "load", D);
if (Lt && zt && !Ut) return !1;
x || (t = u.getMoviePercent(), 0 < t && 100 > t && (n = !0)), setTimeout(function() {
t = u.getMoviePercent();
if (n) return ot = !1, e.setTimeout(D, 1), !1;
!x && Wt && (null === t ? u.useFlashBlock || 0 === u.flashLoadTimeout ? u.useFlashBlock && tt() : !u.useFlashBlock && vt ? H() : M({
type: "ontimeout",
ignoreInit: !0,
error: {
type: "INIT_FLASHBLOCK"
}
}) : 0 !== u.flashLoadTimeout && (!u.useFlashBlock && vt ? H() : Q(!0)));
}, u.flashLoadTimeout);
}, j = function() {
return Ut || !zt ? (Tt.remove(e, "focus", j), !0) : (Ut = Wt = !0, ot = !1, D(), Tt.remove(e, "focus", j), !0);
}, C = function(t) {
if (x) return !1;
if (u.html5Only) return x = !0, _(), !0;
var n = !0, r;
if (!u.useFlashBlock || !u.flashLoadTimeout || u.getMoviePercent()) x = !0;
r = {
type: !Lt && mt ? "NO_FLASH" : "INIT_TIMEOUT"
};
if (T || t) u.useFlashBlock && u.oMC && (u.oMC.className = nt() + " " + (null === u.getMoviePercent() ? "swf_timedout" : "swf_error")), M({
type: "ontimeout",
error: r,
ignoreInit: !0
}), V(r), n = !1;
return T || (u.waitForWindowLoad && !N ? Tt.add(e, "load", _) : _()), n;
}, m = function() {
var e, n = u.setupOptions;
for (e in n) n.hasOwnProperty(e) && (u[e] === t ? u[e] = n[e] : u[e] !== n[e] && (u.setupOptions[e] = u[e]));
}, y = function() {
if (x) return !1;
if (u.html5Only) return x || (Tt.remove(e, "load", u.beginDelayedInit), u.enabled = !0, C()), !0;
I();
try {
f._externalInterfaceTest(!1), $(!0, u.flashPollingInterval || (u.useHighPerformance ? 10 : 50)), u.debugMode || f._disableDebug(), u.enabled = !0, u.html5Only || Tt.add(e, "unload", v);
} catch (t) {
return V({
type: "JS_TO_FLASH_EXCEPTION",
fatal: !0
}), Q(!0), C(), !1;
}
return C(), Tt.remove(e, "load", u.beginDelayedInit), !0;
}, R = function() {
return z ? !1 : (z = !0, m(), J(), !Lt && u.hasHTML5 && u.setup({
useHTML5Audio: !0,
preferFlash: !1
}), xt(), !Lt && mt && (dt.push(F.needFlash), u.setup({
flashLoadTimeout: 1
})), d.removeEventListener && d.removeEventListener("DOMContentLoaded", R, !1), I(), !0);
}, St = function() {
return "complete" === d.readyState && (R(), d.detachEvent("onreadystatechange", St)), !0;
}, U = function() {
N = !0, R(), Tt.remove(e, "load", U);
}, q = function() {
qt && (u.setupOptions.useHTML5Audio = !0, u.setupOptions.preferFlash = !1, Pt || Ht && !c.match(/android\s2\.3/i)) && (Pt && (u.ignoreFlash = !0), Ct = !0);
}, q(), At(), Tt.add(e, "focus", j), Tt.add(e, "load", D), Tt.add(e, "load", U), d.addEventListener ? d.addEventListener("DOMContentLoaded", R, !1) : d.attachEvent ? d.attachEvent("onreadystatechange", St) : V({
type: "NO_DOM2_EVENTS",
fatal: !0
});
}
if (!e || !e.document) throw Error("SoundManager requires a browser with window and document objects.");
var r = null;
if (void 0 === e.SM2_DEFER || !SM2_DEFER) r = new n;
"object" == typeof module && module && "object" == typeof module.exports ? (e.soundManager = r, module.exports.SoundManager = n, module.exports.soundManager = r) : "function" == typeof define && define.amd ? define("SoundManager", [], function() {
return {
SoundManager: n,
soundManager: r
};
}) : (e.SoundManager = n, e.soundManager = r);
}(window);

var preferFlash = navigator.userAgent.indexOf("Safari") > -1 && !(navigator.userAgent.indexOf("Chrome") > -1) || navigator.userAgent.indexOf("Firefox") > -1;

soundManager.setup({
flashVersion: 9,
preferFlash: localStorage && localStorage.getItem("html5") ? !1 : preferFlash,
useHighPerformance: !0,
useConsole: !0,
consoleOnly: !0,
url: "/swf/sm2",
useFlashBlock: !App.isEmbed && !App.isMobileWeb,
useHTML5Audio: !0,
flashLoadTimeout: 2e3,
flashPollingInterval: 200,
flash9Options: {
usePeakData: !0
}
}), function(e, t) {
typeof exports == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : e.Spinner = t();
}(this, function() {
"use strict";
function r(e, t) {
var n = document.createElement(e || "div"), r;
for (r in t) n[r] = t[r];
return n;
}
function i(e) {
for (var t = 1, n = arguments.length; t < n; t++) e.appendChild(arguments[t]);
return e;
}
function o(e, r, i, o) {
var u = [ "opacity", r, ~~(e * 100), i, o ].join("-"), a = .01 + i / o * 100, f = Math.max(1 - (1 - e) / r * (100 - a), e), l = n.substring(0, n.indexOf("Animation")).toLowerCase(), c = l && "-" + l + "-" || "";
return t[u] || (s.insertRule("@" + c + "keyframes " + u + "{" + "0%{opacity:" + f + "}" + a + "%{opacity:" + e + "}" + (a + .01) + "%{opacity:1}" + (a + r) % 100 + "%{opacity:" + e + "}" + "100%{opacity:" + f + "}" + "}", s.cssRules.length), t[u] = 1), u;
}
function u(t, n) {
var r = t.style, i, s;
if (r[n] !== undefined) return n;
n = n.charAt(0).toUpperCase() + n.slice(1);
for (s = 0; s < e.length; s++) {
i = e[s] + n;
if (r[i] !== undefined) return i;
}
}
function a(e, t) {
for (var n in t) e.style[u(e, n) || n] = t[n];
return e;
}
function f(e) {
for (var t = 1; t < arguments.length; t++) {
var n = arguments[t];
for (var r in n) e[r] === undefined && (e[r] = n[r]);
}
return e;
}
function l(e) {
var t = {
x: e.offsetLeft,
y: e.offsetTop
};
while (e = e.offsetParent) t.x += e.offsetLeft, t.y += e.offsetTop;
return t;
}
function h(e) {
if (typeof this == "undefined") return new h(e);
this.opts = f(e || {}, h.defaults, c);
}
function p() {
function e(e, t) {
return r("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', t);
}
s.addRule(".spin-vml", "behavior:url(#default#VML)"), h.prototype.lines = function(t, n) {
function o() {
return a(e("group", {
coordsize: s + " " + s,
coordorigin: -r + " " + -r
}), {
width: s,
height: s
});
}
function c(t, s, u) {
i(f, i(a(o(), {
rotation: 360 / n.lines * t + "deg",
left: ~~s
}), i(a(e("roundrect", {
arcsize: n.corners
}), {
width: r,
height: n.width,
left: n.radius,
top: -n.width >> 1,
filter: u
}), e("fill", {
color: n.color,
opacity: n.opacity
}), e("stroke", {
opacity: 0
}))));
}
var r = n.length + n.width, s = 2 * r, u = -(n.width + n.length) * 2 + "px", f = a(o(), {
position: "absolute",
top: u,
left: u
}), l;
if (n.shadow) for (l = 1; l <= n.lines; l++) c(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
for (l = 1; l <= n.lines; l++) c(l);
return i(t, f);
}, h.prototype.opacity = function(e, t, n, r) {
var i = e.firstChild;
r = r.shadow && r.lines || 0, i && t + r < i.childNodes.length && (i = i.childNodes[t + r], i = i && i.firstChild, i = i && i.firstChild, i && (i.opacity = n));
};
}
var e = [ "webkit", "Moz", "ms", "O" ], t = {}, n, s = function() {
var e = r("style", {
type: "text/css"
});
return i(document.getElementsByTagName("head")[0], e), e.sheet || e.styleSheet;
}(), c = {
lines: 12,
length: 7,
width: 5,
radius: 10,
rotate: 0,
corners: 1,
color: "#000",
direction: 1,
speed: 1,
trail: 100,
opacity: .25,
fps: 20,
zIndex: 2e9,
className: "spinner",
top: "auto",
left: "auto",
position: "relative"
};
h.defaults = {}, f(h.prototype, {
spin: function(e) {
this.stop();
var t = this, i = t.opts, s = t.el = a(r(0, {
className: i.className
}), {
position: i.position,
width: 0,
zIndex: i.zIndex
}), o = i.radius + i.length + i.width, u, f;
e && (e.insertBefore(s, e.firstChild || null), f = l(e), u = l(s), a(s, {
left: (i.left == "auto" ? f.x - u.x + (e.offsetWidth >> 1) : parseInt(i.left, 10) + o) + "px",
top: (i.top == "auto" ? f.y - u.y + (e.offsetHeight >> 1) : parseInt(i.top, 10) + o) + "px"
})), s.setAttribute("role", "progressbar"), t.lines(s, t.opts);
if (!n) {
var c = 0, h = (i.lines - 1) * (1 - i.direction) / 2, p, d = i.fps, v = d / i.speed, m = (1 - i.opacity) / (v * i.trail / 100), g = v / i.lines;
(function y() {
c++;
for (var e = 0; e < i.lines; e++) p = Math.max(1 - (c + (i.lines - e) * g) % v * m, i.opacity), t.opacity(s, e * i.direction + h, p, i);
t.timeout = t.el && setTimeout(y, ~~(1e3 / d));
})();
}
return t;
},
stop: function() {
var e = this.el;
return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = undefined), this;
},
lines: function(e, t) {
function l(e, n) {
return a(r(), {
position: "absolute",
width: t.length + t.width + "px",
height: t.width + "px",
background: e,
boxShadow: n,
transformOrigin: "left",
transform: "rotate(" + ~~(360 / t.lines * s + t.rotate) + "deg) translate(" + t.radius + "px" + ",0)",
borderRadius: (t.corners * t.width >> 1) + "px"
});
}
var s = 0, u = (t.lines - 1) * (1 - t.direction) / 2, f;
for (; s < t.lines; s++) f = a(r(), {
position: "absolute",
top: 1 + ~(t.width / 2) + "px",
transform: t.hwaccel ? "translate3d(0,0,0)" : "",
opacity: t.opacity,
animation: n && o(t.opacity, t.trail, u + s * t.direction, t.lines) + " " + 1 / t.speed + "s linear infinite"
}), t.shadow && i(f, a(l("#000", "0 0 4px #000"), {
top: "2px"
})), i(e, i(f, l(t.color, "0 0 1px rgba(0,0,0,.1)")));
return e;
},
opacity: function(e, t, n) {
t < e.childNodes.length && (e.childNodes[t].style.opacity = n);
}
});
var d = a(r("group"), {
behavior: "url(#default#VML)"
});
return !u(d, "transform") && d.adj ? p() : n = u(d, "animation"), h;
}), function(e) {
function t(t) {
if (e.facebox.settings.inited) return !0;
e.facebox.settings.inited = !0, e(document).trigger("init.facebox"), i();
var n = e.facebox.settings.imageTypes.join("|");
e.facebox.settings.imageTypesRegexp = new RegExp(".(" + n + ")$", "i"), t && e.extend(e.facebox.settings, t), e("body").append(e.facebox.settings.faceboxHtml);
var r = [ new Image, new Image ];
r[0].src = e.facebox.settings.closeImage, r[1].src = e.facebox.settings.loadingImage, e("#facebox").find(".b:first, .bl").each(function() {
r.push(new Image), r.slice(-1).src = e(this).css("background-image").replace(/url\((.+)\)/, "$1");
}), e("#facebox .close").click(e.facebox.close), e("#facebox .close_image").attr("src", e.facebox.settings.closeImage);
}
function n() {
var e, t;
return self.pageYOffset ? (t = self.pageYOffset, e = self.pageXOffset) : document.documentElement && document.documentElement.scrollTop ? (t = document.documentElement.scrollTop, e = document.documentElement.scrollLeft) : document.body && (t = document.body.scrollTop, e = document.body.scrollLeft), new Array(e, t);
}
function r() {
var e;
return self.innerHeight ? e = self.innerHeight : document.documentElement && document.documentElement.clientHeight ? e = document.documentElement.clientHeight : document.body && (e = document.body.clientHeight), e;
}
function i() {
var t = e.facebox.settings;
t.loadingImage = t.loading_image || t.loadingImage, t.closeImage = t.close_image || t.closeImage, t.imageTypes = t.image_types || t.imageTypes, t.faceboxHtml = t.facebox_html || t.faceboxHtml;
}
function s(t, n) {
if (t.match(/#/)) {
var r = window.location.href.split("#")[0], i = t.replace(r, "");
if (i == "#") return;
e.facebox.reveal(e(i).html(), n["class"]);
} else t.match(e.facebox.settings.imageTypesRegexp) ? o(t, n) : u(t, n);
}
function o(t, n) {
var r = new Image;
r.onload = function() {
e.facebox.reveal('<div class="image"><img src="' + r.src + '" /></div>', n["class"]);
}, r.src = t;
}
function u(t, n) {
e.get(t, function(t) {
e.facebox.reveal(t, n["class"]);
});
}
function a() {
return e.facebox.settings.overlay == 0 || e.facebox.settings.opacity === null;
}
function f() {
if (a()) return;
return e("#facebox_overlay").length == 0 && e("body").append('<div id="facebox_overlay" class="facebox_hide"></div>'), e("#facebox_overlay").hide().addClass("facebox_overlayBG").css("opacity", e.facebox.settings.opacity).click(function() {
e(document).trigger("close.facebox");
}).fadeIn(200), !1;
}
function l() {
if (a()) return;
return e("#facebox_overlay").fadeOut(200, function() {
e("#facebox_overlay").removeClass("facebox_overlayBG"), e("#facebox_overlay").addClass("facebox_hide"), e("#facebox_overlay").remove();
}), !1;
}
e.facebox = function(t, n) {
n || (n = {}), this.previousOptions = this.currentOptions || {}, this.currentOptions = n, e.facebox.loading(this.previousOptions), t.ajax ? u(t.ajax, n) : t.image ? o(t.image, n) : t.div ? s(t.div, n) : e.isFunction(t) ? t.call(e) : e.facebox.reveal(t, n);
}, e.extend(e.facebox, {
settings: {
opacity: .2,
overlay: !0,
loadingImage: "/assets/spinner/spinner-large.gif",
closeImage: "/assets/buttons/closelabel.png",
imageTypes: [ "png", "jpg", "jpeg", "gif" ],
faceboxHtml: '    <div id="facebox" style="display:none;">       <div class="popup">         <div class="content">         </div>         <a href="#" class="close icon-link">CLOSE <span class="i-close"></span></a>       </div>     </div>'
},
loading: function(i) {
t();
if (e("#facebox .loading").length == 1) return !0;
f(), i.dontRemove && e("#facebox .content").children().detach(), e("#facebox .content").empty(), e("#facebox .body").children().hide().end().append('<div class="loading"><img src="' + e.facebox.settings.loadingImage + '"/></div>'), e("#facebox").css({
top: n()[1] + r() / 10,
left: e(window).width() / 2 - 205
}).show(), e(document).bind("keydown.facebox", function(t) {
return t.keyCode == 27 && e.facebox.close(), !0;
}), e(document).trigger("loading.facebox");
},
reveal: function(t, n) {
e(document).trigger("beforeReveal.facebox"), n["class"] && e("#facebox .content").addClass(n["class"]), e("#facebox .content").append(t), e("#facebox .loading").remove(), e("#facebox .body").children().fadeIn("normal"), e("#facebox").css("left", e(window).width() / 2 - e("#facebox .popup").width() / 2), e(document).trigger("reveal.facebox").trigger("afterReveal.facebox");
},
close: function() {
return e(document).trigger("close.facebox"), !1;
}
}), e.fn.facebox = function(n) {
function r() {
e.facebox.loading();
var t = this.rel.match(/facebox\[?\.(\w+)\]?/);
return t && (t = t[1]), s(this.href, options), !1;
}
if (e(this).length == 0) return;
return t(n), this.bind("click.facebox", r);
}, e(document).bind("close.facebox", function() {
e(document).unbind("keydown.facebox"), e("#facebox").fadeOut(function() {
e("#facebox .content").removeClass().addClass("content"), e("#facebox .loading").remove(), e(document).trigger("afterClose.facebox");
}), l();
});
}(jQuery);

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
}();

if (!("console" in window) || !("firebug" in console)) {
var names = [ "log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd" ];
window.console = {};
for (var i = 0; i < names.length; ++i) window.console[names[i]] = function(e) {};
}

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
};;