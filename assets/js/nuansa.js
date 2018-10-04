;
(function(window, document, undefined) {
    var aa = aa || {},
        ba = this;
    ba.$b = true;

    function ca(a) {
        return a.call.apply(a.F, arguments)
    }

    function da(a, b) {
        if (!a) throw new Error;
        if (arguments.length > 2) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        } else return function() {
            return a.apply(b, arguments)
        }
    }

    function v() {
        v = Function.prototype.F && Function.prototype.F.toString().indexOf("native code") != -1 ? ca : da;
        return v.apply(null, arguments)
    }
    var ea = aa.hc && Date.now || function() {
        return +new Date
    };

    function y(a) {
        a.call(ba)
    };
    mti = {};
    mti.F = function(a, b) {
        var d = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : [];
        return function() {
            d.push.apply(d, arguments);
            return b.apply(a, d)
        }
    };
    var fa = {};

    function C(a, b) {
        this.oa = a;
        this.Kb = b || a;
        this.p = this.Kb.document;
        this.va = undefined
    }
    y(function() {
        C.prototype.createElement = function(a, b, d) {
            a = this.p.createElement(a);
            if (b)
                for (var c in b)
                    if (b.hasOwnProperty(c)) c == "style" ? this.Wa(a, b[c]) : a.setAttribute(c, b[c]);
            d && a.appendChild(this.p.createTextNode(d));
            return a
        };
        C.prototype.I = function(a, b) {
            a = this.p.getElementsByTagName(a)[0];
            if (!a) a = document.documentElement;
            if (a && a.lastChild) {
                a.insertBefore(b, a.lastChild);
                return true
            }
            return false
        };
        C.prototype.Za = function(a) {
            var b = this;

            function d() {
                b.p.body ? a() : setTimeout(d, 0)
            }
            d()
        };
        C.prototype.Sb = function(a) {
            if (a.parentNode) {
                a.parentNode.removeChild(a);
                return true
            }
            return false
        };
        C.prototype.D = function(a, b) {
            if (typeof SVGElement !== "undefined" && a instanceof SVGElement) return false;
            for (var d = a.className.split(/\s+/), c = 0, e = d.length; c < e; c++)
                if (d[c] == b) return;
            d.push(b);
            a.className = d.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
        };
        C.prototype.U = function(a, b) {
            if (typeof SVGElement !== "undefined" && a instanceof SVGElement) return false;
            for (var d = a.className.split(/\s+/), c = [], e = 0, f = d.length; e < f; e++) d[e] != b && c.push(d[e]);
            a.className = c.join(" ").replace(/\s+/g,
                " ").replace(/^\s+|\s+$/, "")
        };
        C.prototype.Ia = function(a, b) {
            if (typeof SVGElement !== "undefined" && a instanceof SVGElement) return false;
            a = a.className.split(/\s+/);
            for (var d = 0, c = a.length; d < c; d++)
                if (a[d] == b) return true;
            return false
        };
        C.prototype.Wa = function(a, b) {
            if (this.vb()) a.setAttribute("style", b);
            else a.style.cssText = b
        };
        C.prototype.vb = function() {
            if (this.va === undefined) {
                var a = this.p.createElement("p");
                a.innerHTML = '<a style="top:1px;">w</a>';
                this.va = /top/.test(a.getElementsByTagName("a")[0].getAttribute("style"))
            }
            return this.va
        };
        C.prototype.getComputedStyle = function(a) {
            if (typeof a != "undefined")
                if (a != null) {
                    var b = {};
                    if (typeof a.currentStyle != "undefined" && a.currentStyle != null) {
                        b.fontFamily = a.currentStyle.fontFamily;
                        b.fontWeight = a.currentStyle.fontWeight;
                        b.fontStyle = a.currentStyle.fontStyle;
                        return b
                    } else {
                        a = this.p.defaultView.getComputedStyle(a, null);
                        if (typeof a != "undefined" && a != null) {
                            b.fontFamily = a.getPropertyValue("font-family");
                            b.fontWeight = a.getPropertyValue("font-weight");
                            b.fontStyle = a.getPropertyValue("font-style");
                            return b
                        } else return ""
                    }
                } return ""
        };
        C.prototype.q = function(a) {
            if (typeof a != "undefined")
                if (a != null)
                    if (typeof a.currentStyle != "undefined") return a.currentStyle.fontFamily;
                    else return (a = this.p.defaultView.getComputedStyle(a, null)) ? a.getPropertyValue("font-family") : "";
            return ""
        };
        C.prototype.Ga = function(a) {
            if (typeof a != "undefined")
                if (a != null)
                    if (typeof a.currentStyle != "undefined") return a.currentStyle.fontWeight;
                    else if (a = this.p.defaultView.getComputedStyle(a, null)) {
                var b = a.getPropertyValue("font-weight");
                return b.toLowerCase() == "bold" ? 700 :
                    b.toLowerCase() == "normal" ? 400 : a.getPropertyValue("font-weight")
            } else return "";
            return ""
        };
        C.prototype.Fa = function(a) {
            if (typeof a != "undefined")
                if (a != null)
                    if (typeof a.currentStyle != "undefined") return a.currentStyle.fontStyle;
                    else return (a = this.p.defaultView.getComputedStyle(a, null)) ? a.getPropertyValue("font-style") : "";
            return ""
        };
        C.prototype.Ha = function(a) {
            if (typeof a == "undefined" || a == null) return false;
            var b = "";
            if (a != null && a.tagName == "INPUT") b += a.value;
            a = a.childNodes || a;
            for (var d = "img,script,noscript,iframe,object,style,param,embed,link,meta,head,title,br,hr,svg,path".split(","),
                    c = 0; c < a.length; c++)
                if (a[c].nodeType != 8)
                    if (this.indexOf(d, a[c].tagName ? a[c].tagName.toLowerCase() : "") < 0)
                        if (this.qb(a[c].parentNode) != "none") {
                            var e = a[c].nodeType != 1 ? a[c].nodeValue.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, "").replace(/\s+/g, " ") : "";
                            b += e.toLowerCase() + e.toUpperCase()
                        } else b += a[c].nodeType != 1 ? a[c].nodeValue.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, "").replace(/\s+/g, " ") : "";
            return b
        };
        C.prototype.getElementById = function(a) {
            return this.p.getElementById(a)
        };
        C.prototype.u = function(a, b, d, c, e) {
            var f = [],
                k = this.q(a).split(","),
                g = "",
                h = "";
            if (d instanceof Array)
                for (g = 0; g < k.length; g++)
                    if (this.t(k[g]) != b)
                        if (this.t(k[g]).indexOf(b) > -1)
                            for (h = 0; h < d.length; h++) d[h] != "" && f.push(d[h]);
                        else f.push(k[g]);
            else if (d instanceof Array)
                for (h = 0; h < d.length; h++) {
                    if (d[h] != "")
                        if (c)
                            if (e) {
                                var l = this.Fa(a),
                                    i = this.Ga(a),
                                    p = this.t(d[h]) + "_" + l.charAt(0) + i / 100;
                                f.push(p)
                            } else f.push(d[h]);
                    else f.push(d[h])
                } else f.push(d);
            else if (c)
                if (e) {
                    l = this.Fa(a);
                    i = this.Ga(a);
                    e = this.t(this.q(a));
                    p = b + "_" + l.charAt(0) + i / 100;
                    this.t(d);
                    d = p.length;
                    d = p.slice(d - 2, d);
                    g = d.charAt(1) * 100;
                    h = d.charAt(0);
                    b == e && l.charAt(0) == h && i == g && f.push(p)
                } else f.push(d);
            else f.push(d);
            for (l = 0; l < k.length; l++) k[l] != "" && f.push(k[l]);
            f = this.ub(f);
            if (f.length > 1 && f[0] != b) {
                k = "";
                for (g = 0; g < f.length; g++) {
                    k += "'" + f[g] + "'";
                    if (g != f.length - 1) k += ","
                }
                k += "";
                a.style.fontFamily = "" + k;
                a.setAttribute("data-mtiFont", b);
                if (c) {
                    a.style.fontWeight = "";
                    a.style.fontStyle = ""
                }
                return a.style.fontFamily
            } else return null
        };
        C.prototype.zb = function(a, b) {
            for (b = b.parentNode; b != null;) {
                if (b == a) return true;
                b = b.parentNode
            }
            return false
        };
        C.prototype.Ya = function(a, b) {
            b(a);
            for (a = a.firstChild; a;) {
                this.Ya(a, b);
                a = a.nextSibling
            }
        };
        C.prototype.qb = function(a) {
            if (a)
                if (typeof a.currentStyle != "undefined") return a.currentStyle.textTransform;
                else return (a = this.p.defaultView.getComputedStyle(a, null)) ? a.getPropertyValue("text-transform") : ""
        };
        C.prototype.indexOf = function(a, b) {
            if (a.indexOf) return a.indexOf(b);
            else {
                for (var d = 0; d < a.length; d++)
                    if (a[d] == b) return d;
                return -1
            }
        };
        C.prototype.t = function(a) {
            return a.replace(/^\s|\s$/g,
                "").replace(/'|"/g, "").replace(/,\s*/g, "|")
        };
        C.prototype.ub = function(a) {
            for (var b = {}, d = [], c = 0, e = a.length; c < e; ++c)
                if (!b.hasOwnProperty(this.t(a[c]))) {
                    d.push(this.t(a[c]));
                    b[this.t(a[c])] = 1
                } return d
        };
        C.prototype.t = function(a) {
            return a.replace(/^\s|\s$/g, "").replace(/'|"/g, "").replace(/,\s*/g, "|")
        }
    });

    function H(a, b, d) {
        this.Yb = a;
        this.Xb = b;
        this.sc = d
    }
    y(function() {});

    function K(a, b, d, c) {
        this.g = a != null ? a : null;
        this.A = b != null ? b : null;
        this.Ra = d != null ? d : null;
        this.i = c != null ? c : null
    }
    var ga, M;
    y(function() {
        ga = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
        K.prototype.na = function() {
            return this.g !== null
        };
        K.prototype.toString = function() {
            return [this.g, this.A || "", this.Ra || "", this.i || ""].join("")
        };
        M = function(a) {
            a = ga.exec(a);
            var b = null,
                d = null,
                c = null,
                e = null;
            if (a) {
                if (a[1] !== null && a[1]) b = parseInt(a[1], 10);
                if (a[2] !== null && a[2]) d = parseInt(a[2], 10);
                if (a[3] !== null && a[3]) c = parseInt(a[3], 10);
                if (a[4] !== null && a[4]) e = /^[0-9]+$/.test(a[4]) ? parseInt(a[4], 10) : a[4]
            }
            return new K(b, d, c, e)
        }
    });

    function N(a, b, d, c, e, f, k, g, h, l, i) {
        this.w = a;
        this.rc = b;
        this.B = d;
        this.mb = c;
        this.kc = e;
        this.S = f;
        this.Ta = k;
        this.Sa = g;
        this.oc = h;
        this.jc = l;
        this.O = i
    }
    y(function() {
        N.prototype.getName = function() {
            return this.w
        }
    });

    function O(a, b) {
        this.b = a;
        this.v = b
    }
    var ha = new N("Unknown", new K, "Unknown", "Unknown", new K, "Unknown", "Unknown", new K, "Unknown", undefined, new H(false, false, false));
    y(function() {
        O.prototype.parse = function() {
            return this.Cb() ? this.Pb() : this.Fb() ? this.Qb() : this.Gb() ? this.Qa() : this.Hb() ? this.Qa() : this.Bb() ? this.Ob() : ha
        };
        O.prototype.K = function() {
            var a = this.e(this.b, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
            if (a != "") {
                if (/BB\d{2}/.test(a)) a = "BlackBerry";
                return a
            }
            a = this.e(this.b, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1);
            if (a != "") {
                if (a == "Mac_PowerPC") a = "Macintosh";
                return a
            }
            return "Unknown"
        };
        O.prototype.fa = function() {
            var a = this.e(this.b, /(OS X|Windows NT|Android) ([^;)]+)/,
                2);
            if (a) return a;
            if (a = this.e(this.b, /Windows Phone( OS)? ([^;)]+)/, 2)) return a;
            if (a = this.e(this.b, /(iPhone )?OS ([\d_]+)/, 2)) return a;
            if (a = this.e(this.b, /(?:Linux|CrOS) ([^;)]+)/, 1)) {
                a = a.split(/\s/);
                for (var b = 0; b < a.length; b += 1)
                    if (/^[\d\._]+$/.test(a[b])) return a[b]
            }
            if (a = this.e(this.b, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) return a;
            return "Unknown"
        };
        O.prototype.Cb = function() {
            return this.b.indexOf("MSIE") != -1
        };
        O.prototype.Pb = function() {
            var a = this.K(),
                b = this.fa(),
                d = M(b),
                c = this.e(this.b, /MSIE ([\d\w\.]+)/,
                    1),
                e = M(c),
                f = a == "Windows" && e.g >= 6 || a == "Windows Phone" && d.g >= 8;
            return new N("MSIE", e, c, "MSIE", e, c, a, d, b, this.ea(this.v), new H(f, false, false))
        };
        O.prototype.Fb = function() {
            return this.b.indexOf("Opera") != -1
        };
        O.prototype.Gb = function() {
            return /OPR\/[\d.]+/.test(this.b)
        };
        O.prototype.Qb = function() {
            var a = "Unknown",
                b = this.e(this.b, /Presto\/([\d\w\.]+)/, 1),
                d = M(b),
                c = this.fa(),
                e = M(c),
                f = this.ea(this.v);
            if (d.na()) a = "Presto";
            else {
                if (this.b.indexOf("Gecko") != -1) a = "Gecko";
                b = this.e(this.b, /rv:([^\)]+)/, 1);
                d = M(b)
            }
            if (this.b.indexOf("Opera Mini/") !=
                -1) {
                var k = this.e(this.b, /Opera Mini\/([\d\.]+)/, 1),
                    g = M(k);
                return new N("OperaMini", g, k, a, d, b, this.K(), e, c, f, new H(false, false, false))
            }
            if (this.b.indexOf("Version/") != -1) {
                k = this.e(this.b, /Version\/([\d\.]+)/, 1);
                g = M(k);
                if (g.na()) return new N("Opera", g, k, a, d, b, this.K(), e, c, f, new H(g.g >= 10, false, false))
            }
            k = this.e(this.b, /Opera[\/ ]([\d\.]+)/, 1);
            g = M(k);
            if (g.na()) return new N("Opera", g, k, a, d, b, this.K(), e, c, f, new H(g.g >= 10, false, false));
            return new N("Opera", new K, "Unknown", a, d, b, this.K(), e, c, f, new H(false,
                false, false))
        };
        O.prototype.Hb = function() {
            return /AppleWeb(K|k)it/.test(this.b)
        };
        O.prototype.Qa = function() {
            var a = this.K(),
                b = this.fa(),
                d = M(b),
                c = this.e(this.b, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1),
                e = M(c),
                f = "Unknown",
                k = new K,
                g = "Unknown",
                h = false;
            if (/OPR\/[\d.]+/.test(this.b)) f = "Opera";
            else if (this.b.indexOf("Edge") != -1) f = "Edge";
            else if (this.b.indexOf("Chrome") != -1 || this.b.indexOf("CrMo") != -1 || this.b.indexOf("CriOS") != -1) f = "Chrome";
            else if (/Silk\/\d/.test(this.b)) f = "Silk";
            else if (a == "BlackBerry" || a == "Android") f =
                "BuiltinBrowser";
            else if (this.b.indexOf("PhantomJS") != -1) f = "PhantomJS";
            else if (this.b.indexOf("Safari") != -1) f = "Safari";
            else if (this.b.indexOf("AdobeAIR") != -1) f = "AdobeAIR";
            else if (this.b.indexOf("FBAN") != -1) f = "FBWebUI";
            if (f == "BuiltinBrowser") g = "Unknown";
            else if (f == "Silk") g = this.e(this.b, /Silk\/([\d\._]+)/, 1);
            else if (f == "Chrome") g = this.e(this.b, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2);
            else if (this.b.indexOf("Version/") != -1) g = this.e(this.b, /Version\/([\d\.\w]+)/, 1);
            else if (f == "AdobeAIR") g = this.e(this.b, /AdobeAIR\/([\d\.]+)/,
                1);
            else if (f == "Opera") g = this.e(this.b, /OPR\/([\d.]+)/, 1);
            else if (f == "PhantomJS") g = this.e(this.b, /PhantomJS\/([\d.]+)/, 1);
            else if (f == "FBWebUI") g = this.e(this.b, /FBSV\/([\d.]+)/, 1);
            else if (f == "Edge") g = this.e(this.b, /Edge\/([\d.]+)/, 1);
            k = M(g);
            h = f == "AdobeAIR" ? k.g > 2 || k.g == 2 && k.A >= 5 : a == "BlackBerry" ? d.g >= 10 : a == "Android" ? d.g > 2 || d.g == 2 && d.A > 1 : e.g >= 526 || e.g >= 525 && e.A >= 13;
            var l = e.g < 536 || e.g == 536 && e.A < 11,
                i = a == "iPhone" || a == "iPad" || a == "iPod" || a == "Macintosh";
            return new N(f, k, g, "AppleWebKit", e, c, a, d, b, this.ea(this.v),
                new H(h, l, i))
        };
        O.prototype.Bb = function() {
            return this.b.indexOf("Gecko") != -1
        };
        O.prototype.Ob = function() {
            var a = "Unknown",
                b = new K,
                d = "Unknown",
                c = this.fa(),
                e = M(c),
                f = false;
            if (this.b.indexOf("Firefox") != -1) {
                a = "Firefox";
                d = this.e(this.b, /Firefox\/([\d\w\.]+)/, 1);
                b = M(d);
                f = b.g >= 3 && b.A >= 5
            } else if (this.b.indexOf("Mozilla") != -1) a = "Mozilla";
            var k = this.e(this.b, /rv:([^\)]+)/, 1),
                g = M(k);
            f || (f = g.g > 1 || g.g == 1 && g.A > 9 || g.g == 1 && g.A == 9 && g.Ra >= 2 || k.match(/1\.9\.1b[123]/) != null || k.match(/1\.9\.1\.[\d\.]+/) != null);
            return new N(a,
                b, d, "Gecko", g, k, this.K(), e, c, this.ea(this.v), new H(f, false, false))
        };
        O.prototype.e = function(a, b, d) {
            if ((a = a.match(b)) && a[d]) return a[d];
            return ""
        };
        O.prototype.ea = function(a) {
            if (a.documentMode) return a.documentMode
        }
    });

    function ia(a) {
        this.Ib = a || ja
    }
    var ja = "-";
    y(function() {
        ia.prototype.Tb = function(a) {
            return a.replace(/[\W_]+/g, "").toLowerCase()
        };
        ia.prototype.i = function() {
            for (var a = [], b = 0; b < arguments.length; b++) a.push(this.Tb(arguments[b]));
            return a.join(this.Ib)
        }
    });

    function P(a, b, d, c) {
        this.a = a;
        this.n = b;
        this.ja = d;
        this.o = c || ka;
        this.l = new ia("-")
    }
    var ka = "mti";
    y(function() {
        P.prototype.Da = function() {
            this.a.D(this.n, this.l.i(this.o, "loading"));
            this.Q("loading")
        };
        P.prototype.lb = function(a) {
            this.a.D(this.n, this.l.i(this.o, a.getName(), a.r().toString(), "loading"));
            this.Q("fontloading", a)
        };
        P.prototype.jb = function(a) {
            this.a.U(this.n, this.l.i(this.o, a.getName(), a.r().toString(), "loading"));
            this.a.U(this.n, this.l.i(this.o, a.getName(), a.r().toString(), "inactive"));
            this.a.D(this.n, this.l.i(this.o, a.getName(), a.r().toString(), "active"));
            this.Q("fontactive", a)
        };
        P.prototype.kb =
            function(a) {
                this.a.U(this.n, this.l.i(this.o, a.getName(), a.r().toString(), "loading"));
                this.a.Ia(this.n, this.l.i(this.o, a.getName(), a.r().toString(), "active")) || this.a.D(this.n, this.l.i(this.o, a.getName(), a.r().toString(), "inactive"));
                this.Q("fontinactive", a)
            };
        P.prototype.ca = function() {
            this.a.U(this.n, this.l.i(this.o, "loading"));
            this.a.Ia(this.n, this.l.i(this.o, "active")) || this.a.D(this.n, this.l.i(this.o, "inactive"));
            this.Q("inactive")
        };
        P.prototype.ib = function() {
            this.a.U(this.n, this.l.i(this.o, "loading"));
            this.a.U(this.n, this.l.i(this.o, "inactive"));
            this.a.D(this.n, this.l.i(this.o, "active"));
            this.Q("active")
        };
        P.prototype.Q = function(a, b) {
            if (this.ja[a]) b ? this.ja[a](b.getName(), b.r()) : this.ja[a]()
        }
    });

    function la() {
        this.Oa = {}
    }
    y(function() {
        la.prototype.fb = function(a, b) {
            this.Oa[a] = b
        };
        la.prototype.tb = function(a, b) {
            var d = [];
            for (var c in a)
                if (a.hasOwnProperty(c)) {
                    var e = this.Oa[c];
                    e && d.push(e(a[c], b))
                } return d
        }
    });

    function Q(a, b) {
        this.w = a;
        this.V = 4;
        this.N = "n";
        if (a = (b || "n4").match(/^([nio])([1-9])$/i)) {
            this.N = a[1];
            this.V = parseInt(a[2], 10)
        }
    }
    y(function() {
        Q.prototype.getName = function() {
            return this.w
        };
        Q.prototype.rb = function() {
            return this.Ua(this.w)
        };
        Q.prototype.Ua = function(a) {
            var b = [];
            a = a.split(/,\s*/);
            for (var d = 0; d < a.length; d++) {
                var c = a[d].replace(/['"]/g, "");
                c.indexOf(" ") == -1 ? b.push(c) : b.push("'" + c + "'")
            }
            return b.join(",")
        };
        Q.prototype.r = function() {
            return this.N + this.V
        };
        Q.prototype.sb = function() {
            var a = "normal",
                b = this.V + "00";
            if (this.N === "o") a = "oblique";
            else if (this.N === "i") a = "italic";
            return "font-style:" + a + ";font-weight:" + b + ";"
        }
    });

    function S(a, b) {
        this.a = a;
        this.$ = b;
        this.R = this.a.createElement("span", {
            "aria-hidden": "true"
        }, this.$)
    }
    y(function() {
        S.prototype.ua = function(a) {
            this.a.Wa(this.R, this.hb(a))
        };
        S.prototype.ma = function() {
            this.a.I("body", this.R)
        };
        S.prototype.hb = function(a) {
            return "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + a.rb() + ";" + a.sb()
        };
        S.prototype.remove = function() {
            this.a.Sb(this.R)
        }
    });

    function T(a, b, d, c, e, f, k, g) {
        this.za = a;
        this.yb = b;
        this.a = d;
        this.J = c;
        this.$ = g || U;
        this.O = e;
        this.La = {};
        this.wa = f || 5E4;
        this.Na = k || null;
        this.Z = this.Y = null;
        this.Ub()
    }
    var V = {
            gc: "serif",
            fc: "sans-serif",
            cc: "monospace"
        },
        U = "BESb\uc5d0swy";
    y(function() {
        T.prototype.Ub = function() {
            var a = new S(this.a, this.$);
            a.ma();
            for (var b in V)
                if (V.hasOwnProperty(b)) {
                    a.ua(new Q(V[b], this.J.r()));
                    this.La[V[b]] = a.R.offsetWidth
                } a.remove()
        };
        T.prototype.start = function() {
            this.Y = new S(this.a, this.$);
            this.Y.ma();
            this.Z = new S(this.a, this.$);
            this.Z.ma();
            this.Vb = ea();
            this.Y.ua(new Q(this.J.getName() + ",serif", this.J.r()));
            this.Z.ua(new Q(this.J.getName() + ",sans-serif", this.J.r()));
            this.Aa()
        };
        T.prototype.ia = function(a, b) {
            return a === this.La[b]
        };
        T.prototype.Zb = function(a,
            b) {
            for (var d in V)
                if (V.hasOwnProperty(d))
                    if (this.ia(a, V[d]) && this.ia(b, V[d])) return true;
            return false
        };
        T.prototype.wb = function() {
            return ea() - this.Vb >= this.wa
        };
        T.prototype.Ab = function(a, b) {
            return this.ia(a, "serif") && this.ia(b, "sans-serif")
        };
        T.prototype.Ka = function(a, b) {
            return this.O.Xb && this.Zb(a, b)
        };
        T.prototype.Db = function() {
            return this.Na === null || this.Na.hasOwnProperty(this.J.getName())
        };
        T.prototype.Aa = function() {
            var a = this.Y.R.offsetWidth,
                b = this.Z.R.offsetWidth;
            if (this.Ab(a, b) || this.Ka(a, b))
                if (this.wb()) this.Ka(a,
                    b) && this.Db() ? this.ka(this.za) : this.ka(this.yb);
                else this.gb();
            else this.ka(this.za)
        };
        T.prototype.gb = function() {
            setTimeout(v(function() {
                this.Aa()
            }, this), 25)
        };
        T.prototype.ka = function(a) {
            this.Y.remove();
            this.Z.remove();
            a(this.J)
        }
    });

    function X(a, b, d, c) {
        this.a = b;
        this.T = d;
        this.Ba = 0;
        this.Xa = this.Ma = false;
        this.wa = c;
        this.O = a.O
    }
    y(function() {
        X.prototype.ba = function(a, b, d, c) {
            if (a.length === 0 && c) this.T.ca();
            else {
                this.Ba += a.length;
                if (c) this.Ma = c;
                for (c = 0; c < a.length; c++) {
                    var e = a[c],
                        f = b[e.getName()];
                    this.T.lb(e);
                    (new T(v(this.nb, this), v(this.ob, this), this.a, e, this.O, this.wa, d, f)).start()
                }
            }
        };
        X.prototype.nb = function(a) {
            this.T.jb(a);
            this.Xa = true;
            this.Ca()
        };
        X.prototype.ob = function(a) {
            this.T.kb(a);
            this.Ca()
        };
        X.prototype.Ca = function() {
            if (--this.Ba == 0 && this.Ma) this.Xa ? this.T.ib() : this.T.ca()
        }
    });
    mti.ac = function() {
        this.Ua = '"'
    };
    mti.W = function() {
        this.pc = mti.W.bb;
        this.Wb = mti.W.db
    };
    mti.W.bb = ["font-style", "font-weight"];
    mti.W.db = {
        "font-style": [
            ["n", "normal"]
        ],
        "font-weight": [
            ["4", "normal"]
        ]
    };
    mti.W.bc = function(a, b, d) {
        this.lc = a;
        this.qc = b;
        this.Wb = d
    };

    function Y(a, b, d) {
        this.oa = a;
        this.Ea = b;
        this.b = d;
        this.pa = this.qa = 0
    }
    y(function() {
        Y.prototype.eb = function(a, b) {
            this.Ea.fb(a, b)
        };
        Y.prototype.load = function(a) {
            var b = a.context || this.oa;
            this.a = new C(this.oa, b);
            b = new P(this.a, b.document.documentElement, a);
            this.b.O.Yb ? this.Lb(b, a) : b.ca()
        };
        Y.prototype.Eb = function(a, b, d, c) {
            var e = this;
            if (c) a.load(function(f, k, g) {
                e.Nb(b, d, f, k, g)
            });
            else {
                a = --this.qa == 0;
                this.pa--;
                if (a) this.pa == 0 ? b.ca() : b.Da();
                d.ba([], {}, null, a)
            }
        };
        Y.prototype.Nb = function(a, b, d, c, e) {
            var f = --this.qa == 0;
            f && a.Da();
            setTimeout(function() {
                b.ba(d, c || {}, e || null, f)
            }, 0)
        };
        Y.prototype.Lb = function(a, b) {
            var d = this.Ea.tb(b, this.a);
            b = b.timeout;
            this.pa = this.qa = d.length;
            b = new X(this.b, this.a, a, b);
            for (var c = 0, e = d.length; c < e; c++) {
                var f = d[c];
                ma(f, this.b, v(this.Eb, this, f, a, b))
            }
        }
    });
    var na = window.MonoTypeWebFonts = function() {
        var a = (new O(navigator.userAgent, document)).parse();
        return new Y(window, new la, a)
    }();
    window.MonoTypeWebFonts.load = na.load;
    var Z = window.MTIConfig || {
        isAsync: false,
        EnableCustomFOUTHandler: false,
        RemoveMTIClass: false
    };
    mti.C = function(a, b, d) {
        this.ha = a;
        this.a = b;
        this.Rb = d;
        this.M = {};
        this.G = [];
        this.f = [];
        this.xb = "img,script,noscript,iframe,object,style,param,embed,link,meta,head,title,br,hr,svg,path".split(",")
    };
    mti.C.prototype.indexOf = function(a, b) {
        if (typeof a == "undefined") return -1;
        if (a.indexOf) return a.indexOf(b);
        else {
            for (var d = 0; d < a.length; d++)
                if (a[d] == b) return d;
            return -1
        }
    };

    function oa(a, b, d) {
        var c = a.Rb,
            e = a.a.getComputedStyle(b),
            f = e.fontFamily,
            k = "",
            g = e.fontStyle,
            h = 0,
            l = 0,
            i = "";
        f = (f || "").replace(/^\s|\s$/g, "").replace(/'|"/g, "").replace(/,\s*/g, "|");
        if (f != "") {
            var p = f.split("|"),
                r = "";
            for (h = 0; h < p.length; h++) {
                var z = new RegExp("^(" + p[h] + ")$", "ig");
                for (l = 0; l < c.length; l++) {
                    var t = c[l];
                    r = t.fontfamily;
                    var w, m, u = r;
                    if (t.fontWeight != undefined && t.fontStyle != undefined) {
                        w = t.fontWeight;
                        m = t.fontStyle;
                        i = m.charAt(0) + w / 100;
                        k = e.fontWeight == "normal" ? 400 : e.fontWeight == "bold" ? 700 : e.fontWeight
                    } else {
                        var j =
                            "h1,h2,h3,h4,h5,h6,strong,b".split(",");
                        if (b.nodeType == 1) k = a.indexOf(j, b.tagName.toLowerCase()) >= 0 ? 400 : e.fontWeight == "normal" ? 400 : e.fontWeight == "bold" ? 700 : 400
                    }
                    if (w != undefined || m != undefined) u += "_" + i;
                    j = r.replace(/^\s|\s$/g, "");
                    var q = u.replace(/^\s|\s$/g, ""),
                        F = z.test(j),
                        n = z.test(q);
                    if (F || n) {
                        if (w != undefined || m != undefined)
                            if (u == f) a.f.push(new Q(q));
                            else k == w && g == m && a.f.push(new Q(j, i));
                        else {
                            i = g.charAt(0) + k / 100;
                            a.f.push(new Q(j))
                        }
                        a.G.push(b);
                        if (Z.EnableCustomFOUTHandler == true) a.a.D(b, d ? "mti_font_element" +
                            d : "mti_font_element");
                        r = r;
                        u = b.getAttribute("style");
                        u = u != null ? typeof u == "string" ? u : "cssText" in u ? u.cssText : "" : "";
                        r += u && u.indexOf("font-weight") > -1 && u.indexOf("font-style") > -1 ? "_" + g.charAt(0) + k / 100 : i.length > 1 ? "_" + i : "";
                        if ((t.enableSubsetting || Z.EnableDSForAllFonts) && !Z.SubsetContent) {
                            t = "";
                            t = a.z(a.a.Ha(b));
                            if (a.M[r.replace(/^\s|\s$/g, "")]) t += a.z(a.M[r.replace(/^\s|\s$/g, "")]);
                            a.M[r.replace(/^\s|\s$/g, "")] = t
                        }
                    }
                }
            }
        }
    }

    function pa(a, b, d) {
        qa(a, a.ha, d, a);
        b = false;
        for (var c in a.M) {
            b = true;
            if (a.mc) break;
            else a.M[c] = a.z(a.M[c])
        }
        if (b) return a.M;
        return null
    }

    function qa(a, b, d, c) {
        if (b != null && b != "" && b.tagName && b.nodeType == 1) {
            if (c.indexOf(c.xb, b.tagName.toLowerCase()) < 0) d ? oa(c, b, d) : oa(c, b);
            for (b = b.firstChild; b;) {
                qa(c, b, d, c);
                b = b.nextSibling
            }
        }
    }

    function ra(a) {
        var b, d = [],
            c = 0,
            e = 0,
            f = true;
        a.G.sort(function(k, g) {
            if (k === g) {
                f = true;
                return 0
            }
            return 0
        });
        if (f) {
            for (; b = a.G[e++];)
                if (b === a.G[e]) c = d.push(e);
            for (; c--;) a.G.splice(d[c], 1)
        }
        return a.G
    }
    mti.C.prototype.L = function() {
        var a = this.f,
            b = a == null ? 0 : a.length,
            d = {},
            c, e = [];
        for (c = 0; c < b; c += 1) {
            var f = a[c].w + "||" + a[c].V + "||" + a[c].N;
            d[f] = f
        }
        for (c in d) {
            b = d[c].split("||");
            a = b[0];
            (b = b[2] + b[1]) ? e.push(new Q(a, b)): e.push(new Q(a))
        }
        return this.f = e
    };
    mti.C.prototype.u = function(a, b, d) {
        var c = "img,script,noscript,iframe,object,style,param,embed,link,meta,head,title,br,hr,svg,path".split(","),
            e = this.ha,
            f = null;
        do {
            f = e.firstChild;
            if (f == null) {
                e.nodeType == 1 && this.indexOf(c, e.tagName.toLowerCase()) < 0 && oa(this, e);
                f = e.nextSibling
            }
            if (f == null) {
                e = e;
                do {
                    f = e.parentNode;
                    if (f == this.ha) break;
                    f.nodeType == 1 && this.indexOf(c, f.tagName.toLowerCase()) < 0 && this.a.q(f).indexOf(a) > -1 && this.a.u(f, a, b, d);
                    e = f;
                    f = f.nextSibling
                } while (f == null)
            }
            e = f
        } while (e != this.ha);
        return null
    };
    mti.C.prototype.z = function(a) {
        if (a && typeof a == "string") {
            a = a.replace(/\s/g, "").replace(/\n/g, "").replace(/\r/g, "");
            for (var b = "", d = a.length, c = null, e = 0; e < d; e++) {
                c = a.charAt(e);
                if (b.indexOf(c) == -1) b += c
            }
            return b
        }
        return ""
    };
    mti.ya = 4E4;
    mti.d = function(a, b, d, c, e) {
        this.H = a;
        this.b = b;
        this.a = d;
        this.c = c;
        this.pb = {};
        this.k = e;
        this.f = [];
        this.j = false;
        this.Ja = [];
        this.Va = [];
        this.h = [];
        this.la = {};
        this.da = [];
        this.aa = []
    };
    mti.d.ab = "monotype";

    function ma(a, b, d) {
        b = a.c.projectId;
        var c;
        if (b) {
            a.H.mti_element_cache = [];
            sa(a);
            var e = a.b.getName();
            e = e.toLowerCase();
            var f = e == "opera" ? true : false,
                k = a.b.B,
                g = e == "msie" && k <= 8 ? true : false,
                h = function() {
                    if (Z.UseHybrid) {
                        Z.EnableCustomFOUTHandler = true;
                        window.MonoTypeWebFonts.addEvent("active", function() {
                            ta(a, a.ga, c)
                        });
                        window.MonoTypeWebFonts.addEvent("inactive", function() {
                            ta(a, a.ga, c)
                        })
                    }
                    g || a.Pa(a);

                    function s() {
                        o = new mti.C(document.body, a.a, a.c.pfL);
                        A = pa(o);
                        f && ua(a);
                        a.H.mti_element_cache = o.G;
                        c = o.L();
                        va(a, c, A);
                        var E = ra(o);
                        a.k != null && mti.F(a.k, a.k.load, E)();
                        for (var I = 0; I < E.length; I++)
                            for (var L in a.m) a.a.q(E[I]).indexOf(L) > -1 && a.a.u(E[I], L, a.m[L], g, a.j)
                    }
                    var D = a.c.reqSub || Z.EnableDSForAllFonts,
                        o = null,
                        A = null;
                    if (f && D) {
                        wa(a);
                        xa(a, function() {
                            s()
                        })
                    } else if (!f && D) s();
                    else {
                        o = new mti.C(document.body, a.a, a.c.pfL);
                        A = pa(o);
                        va(a, o.L);
                        c = o.L();
                        a.H.mti_element_cache = ra(o);
                        a.k != null && mti.F(a.k, a.k.load, a.H.mti_element_cache)()
                    }
                    d(Z.EnableCustomFOUTHandler)
                };
            if (Z.isAsync === true) Z.onReady = h;
            else {
                setTimeout(function() {
                    document.documentElement.style.visibility =
                        ""
                }, 750);
                if (a.c.reqSub || Z.EnableDSForAllFonts)
                    if (Z.CheckFontWatcher && Z.UseHybrid) {
                        var l = {},
                            i = 0,
                            p = a.c.pfL.length;
                        b = a.c.projectId;
                        e = a.c.ec;
                        k = a.c.fcURL;
                        for (var r = a.c.ck, z = 0; z < a.c.pfL.length; z++) {
                            var t = a.c.pfL[z],
                                w = t.fontfamily,
                                m = t.contentIds,
                                u = t.enableOtf;
                            if (t.enableSubsetting || Z.EnableDSForAllFonts) {
                                getCookieFlag = false;
                                var j = ya(a, m),
                                    q, F;
                                if (t.fontWeight != undefined && t.fontStyle != undefined) {
                                    q = t.fontWeight;
                                    F = t.fontStyle
                                }
                                fontURL = $(a, m, b, false, e, k, "", r, w, q, F, null, j, u);
                                t = j != null && j.toUpperCase() == "EOT" || j.toUpperCase() ==
                                    "MTX";
                                _cssText = '@font-face{\nfont-family:"' + w + '_fw";';
                                _cssText += '\nsrc:url("' + fontURL + '")';
                                m = {
                                    TTF: "truetype",
                                    WOFF: "woff",
                                    SVG: "svg",
                                    MTX: "truetype",
                                    OTF: "opentype",
                                    WOFF2: "woff2"
                                };
                                t || (_cssText += ' format("' + m[j.toUpperCase()] + '")');
                                _cssText += ";}\n";
                                j = document.getElementById("mti_stylesheet_cache" + a.c.projectId);
                                var n;
                                if (j == null) n = a.a.createElement("style", {
                                    type: "text/css",
                                    id: "mti_stylesheet_cache" + a.c.projectId
                                });
                                if (_cssText != "") {
                                    j == null && a.a.I("head", n);
                                    if (n.styleSheet) n.styleSheet.cssText += _cssText;
                                    else n.innerHTML += _cssText
                                }
                                za(a, w + "_fw", function(s, D) {
                                    l[s] = D;
                                    i++;
                                    if (i == p) {
                                        for (D = s = 0; D < a.c.pfL.length; D++)
                                            if (l[a.c.pfL[D].fontfamily + "_fw"] == true) {
                                                a.c.pfL[D].enableSubsetting = false;
                                                s++
                                            } if (s == i) va(a, a.c.pfL);
                                        else {
                                            s = document.getElementById("mti_stylesheet_cache" + a.c.projectId);
                                            s.parentNode.removeChild(s);
                                            Aa(a, h)
                                        }
                                    }
                                })
                            } else p--
                        }
                    } else Aa(a, h);
                else a.Za(function() {
                    var s = new mti.C(document.body, a.a, a.c.pfL);
                    pa(s);
                    c = s.L();
                    va(a, c);
                    a.H.mti_element_cache = ra(s);
                    a.k != null && mti.F(a.k, a.k.load, a.H.mti_element_cache)();
                    d(Z.EnableCustomFOUTHandler)
                });
                if (Z.EnableCustomFOUTHandler == true) document.documentElement.style.visibility = "hidden"
            }!g && a.c.enableOtf && Aa(a, a.Pa.bind(a));
            var x = [];
            if (c) x = c;
            if (a.c.reqSub && (c == null ? 0 : c.length) == 0 || f)
                for (q = 0; q < a.c.pfL.length; q++) x.push(new Q(a.c.pfL[q].fontfamily));
            a.H["__mti_fntLst" + b] = function() {
                for (var s = [], D = {}, o = [], A = 0; A < x.length; A++) {
                    s.push({
                        fontfamily: x[A].w
                    });
                    o.push(x[A]);
                    D[x[A]] = 1
                }
                return s
            }
        } else d(Z.EnableCustomFOUTHandler)
    }

    function Ba(a, b) {
        if (document.getElementsByClassName) return document.getElementsByClassName(b);
        else {
            var d = [];
            a.a.Ya(document.body, function(c) {
                var e;
                e = c.className;
                var f;
                if (e) {
                    e = e.split(" ");
                    for (f = 0; f < e.length; f++)
                        if (e[f] === b) {
                            d.push(c);
                            break
                        }
                }
            });
            return d
        }
    }

    function Ca(a, b) {
        var d = (new O(navigator.userAgent, document)).parse(),
            c = Ba(a, b),
            e = d.getName();
        e = e.toLowerCase();
        d = d.B;
        e = e == "msie" && d < 8 ? true : false;
        for (d = new RegExp(b, "ig"); c.length > 0;) {
            for (var f = 0; f < c.length; f++)
                if (c[f].className.split(" ").length == 1 && !e) c[f].removeAttribute("class");
                else c[f].className = c[f].className.replace(d, " ").replace(/^\s+|\s+$/g, "");
            c = Ba(a, b)
        }
    }

    function wa(a, b) {
        var d = document.createElement("STYLE");
        d.setAttribute("type", "text/css");
        d.id = "monotype_fake_fontface_" + a.c.projectId;
        var c = "";
        a = a.c.pfL;
        if (a != null) {
            c += "@font-face{font-family:opera_testfont;src:url(data:font/opentype;base64,T1RUTwALAIAAAwAwQ0ZGIMA92IQAAAVAAAAAyUZGVE1VeVesAAAGLAAAABxHREVGADAABAAABgwAAAAgT1MvMlBHT5sAAAEgAAAAYGNtYXAATQPNAAAD1AAAAUpoZWFk8QMKmwAAALwAAAA2aGhlYQS/BDgAAAD0AAAAJGhtdHgHKQAAAAAGSAAAAAxtYXhwAANQAAAAARgAAAAGbmFtZR8kCUMAAAGAAAACUnBvc3T/uAAyAAAFIAAAACAAAQAAAAEAQVTDUm9fDzz1AAsD6AAAAADHUuOGAAAAAMdS44YAAADzAz8BdgAAAAgAAgAAAAAAAAABAAABdgDzAAkDQQAAAAADPwABAAAAAAAAAAAAAAAAAAAAAwAAUAAAAwAAAAICmgGQAAUAAAK8AooAAACMArwCigAAAd0AMgD6AAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAEZIRAAAQAAgAC0C7v8GAAABdv8NAAAAAQAAAAAAAAAAACAAIAABAAAAFAD2AAEAAAAAAAAAPAB6AAEAAAAAAAEAAgC9AAEAAAAAAAIABwDQAAEAAAAAAAMAEQD8AAEAAAAAAAQAAwEWAAEAAAAAAAUABQEmAAEAAAAAAAYAAgEyAAEAAAAAAA0AAQE5AAEAAAAAABAAAgFBAAEAAAAAABEABwFUAAMAAQQJAAAAeAAAAAMAAQQJAAEABAC3AAMAAQQJAAIADgDAAAMAAQQJAAMAIgDYAAMAAQQJAAQABgEOAAMAAQQJAAUACgEaAAMAAQQJAAYABAEsAAMAAQQJAA0AAgE1AAMAAQQJABAABAE7AAMAAQQJABEADgFEAEcAZQBuAGUAcgBhAHQAZQBkACAAaQBuACAAMgAwADAAOQAgAGIAeQAgAEYAbwBuAHQATABhAGIAIABTAHQAdQBkAGkAbwAuACAAQwBvAHAAeQByAGkAZwBoAHQAIABpAG4AZgBvACAAcABlAG4AZABpAG4AZwAuAABHZW5lcmF0ZWQgaW4gMjAwOSBieSBGb250TGFiIFN0dWRpby4gQ29weXJpZ2h0IGluZm8gcGVuZGluZy4AAFAASQAAUEkAAFIAZQBnAHUAbABhAHIAAFJlZ3VsYXIAAEYATwBOAFQATABBAEIAOgBPAFQARgBFAFgAUABPAFIAVAAARk9OVExBQjpPVEZFWFBPUlQAAFAASQAgAABQSSAAADEALgAwADAAMAAAMS4wMDAAAFAASQAAUEkAACAAACAAAFAASQAAUEkAAFIAZQBnAHUAbABhAHIAAFJlZ3VsYXIAAAAAAAADAAAAAwAAABwAAQAAAAAARAADAAEAAAAcAAQAKAAAAAYABAABAAIAIAAt//8AAAAgAC3////h/9UAAQAAAAAAAAAAAQYAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAA/7UAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEBAABAQEDUEkAAQIAAQAu+BAA+BsB+BwC+B0D+BgEWQwDi/eH+dP4CgUcAIwPHAAAEBwAkREcAB4cAKsSAAMCAAEAPQA/AEFHZW5lcmF0ZWQgaW4gMjAwOSBieSBGb250TGFiIFN0dWRpby4gQ29weXJpZ2h0IGluZm8gcGVuZGluZy5QSVBJAAAAAAEADgADAQECAxQODvb3h/cXAfeHBPnT9xf90wYO+IgU+WoVHgoDliX/DAmLDAr3Fwr3FwwMHgoG/wwSAAAAAAEAAAAOAAAAGAAAAAAAAgABAAEAAgABAAQAAAACAAAAAAABAAAAAMbULpkAAAAAx1KUiQAAAADHUpSJAfQAAAH0AAADQQAA)}";
            for (var e = 0; e < a.length; e++) c += "@font-face{font-family:'" + a[e].fontfamily + (b ? b : "") + "';src:url(data:font/opentype;base64,T1RUTwALAIAAAwAwQ0ZGIMA92IQAAAVAAAAAyUZGVE1VeVesAAAGLAAAABxHREVGADAABAAABgwAAAAgT1MvMlBHT5sAAAEgAAAAYGNtYXAATQPNAAAD1AAAAUpoZWFk8QMKmwAAALwAAAA2aGhlYQS/BDgAAAD0AAAAJGhtdHgHKQAAAAAGSAAAAAxtYXhwAANQAAAAARgAAAAGbmFtZR8kCUMAAAGAAAACUnBvc3T/uAAyAAAFIAAAACAAAQAAAAEAQVTDUm9fDzz1AAsD6AAAAADHUuOGAAAAAMdS44YAAADzAz8BdgAAAAgAAgAAAAAAAAABAAABdgDzAAkDQQAAAAADPwABAAAAAAAAAAAAAAAAAAAAAwAAUAAAAwAAAAICmgGQAAUAAAK8AooAAACMArwCigAAAd0AMgD6AAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAEZIRAAAQAAgAC0C7v8GAAABdv8NAAAAAQAAAAAAAAAAACAAIAABAAAAFAD2AAEAAAAAAAAAPAB6AAEAAAAAAAEAAgC9AAEAAAAAAAIABwDQAAEAAAAAAAMAEQD8AAEAAAAAAAQAAwEWAAEAAAAAAAUABQEmAAEAAAAAAAYAAgEyAAEAAAAAAA0AAQE5AAEAAAAAABAAAgFBAAEAAAAAABEABwFUAAMAAQQJAAAAeAAAAAMAAQQJAAEABAC3AAMAAQQJAAIADgDAAAMAAQQJAAMAIgDYAAMAAQQJAAQABgEOAAMAAQQJAAUACgEaAAMAAQQJAAYABAEsAAMAAQQJAA0AAgE1AAMAAQQJABAABAE7AAMAAQQJABEADgFEAEcAZQBuAGUAcgBhAHQAZQBkACAAaQBuACAAMgAwADAAOQAgAGIAeQAgAEYAbwBuAHQATABhAGIAIABTAHQAdQBkAGkAbwAuACAAQwBvAHAAeQByAGkAZwBoAHQAIABpAG4AZgBvACAAcABlAG4AZABpAG4AZwAuAABHZW5lcmF0ZWQgaW4gMjAwOSBieSBGb250TGFiIFN0dWRpby4gQ29weXJpZ2h0IGluZm8gcGVuZGluZy4AAFAASQAAUEkAAFIAZQBnAHUAbABhAHIAAFJlZ3VsYXIAAEYATwBOAFQATABBAEIAOgBPAFQARgBFAFgAUABPAFIAVAAARk9OVExBQjpPVEZFWFBPUlQAAFAASQAgAABQSSAAADEALgAwADAAMAAAMS4wMDAAAFAASQAAUEkAACAAACAAAFAASQAAUEkAAFIAZQBnAHUAbABhAHIAAFJlZ3VsYXIAAAAAAAADAAAAAwAAABwAAQAAAAAARAADAAEAAAAcAAQAKAAAAAYABAABAAIAIAAt//8AAAAgAC3////h/9UAAQAAAAAAAAAAAQYAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAA/7UAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEBAABAQEDUEkAAQIAAQAu+BAA+BsB+BwC+B0D+BgEWQwDi/eH+dP4CgUcAIwPHAAAEBwAkREcAB4cAKsSAAMCAAEAPQA/AEFHZW5lcmF0ZWQgaW4gMjAwOSBieSBGb250TGFiIFN0dWRpby4gQ29weXJpZ2h0IGluZm8gcGVuZGluZy5QSVBJAAAAAAEADgADAQECAxQODvb3h/cXAfeHBPnT9xf90wYO+IgU+WoVHgoDliX/DAmLDAr3Fwr3FwwMHgoG/wwSAAAAAAEAAAAOAAAAGAAAAAAAAgABAAEAAgABAAQAAAACAAAAAAABAAAAAMbULpkAAAAAx1KUiQAAAADHUpSJAfQAAAH0AAADQQAA);}"
        }
        d.textContent =
            c;
        b = document.getElementsByTagName("HEAD");
        b.length > 0 && b[0].appendChild(d)
    }

    function ua(a) {
        (a = document.getElementById("monotype_fake_fontface_" + a.c.projectId)) && a.parentNode.removeChild(a)
    }

    function xa(a, b) {
        var d = document.createElement("SPAN");
        d.innerHTML = "MMMWWW";
        d.style.position = "absolute";
        d.style.left = "-32768px";
        d.style.fontFamily = "opera_testfont";
        document.documentElement.appendChild(d);
        var c = 0,
            e = (new Date).getTime();
        c = window.setInterval(function() {
            if (a.a.q(d) === "opera_testfont" || (new Date).getTime() - e > 200) {
                try {
                    document.documentElement.removeChild(d)
                } catch (f) {}
                b();
                window.clearInterval(c)
            }
        }, 60)
    }

    function ya(a, b) {
        var d = a.c.ffArray,
            c = a.b.getName();
        c = c.toLowerCase();
        var e = a.b.B;
        if (c == "firefox") c = "mozilla";
        if (/ipad|ipod|iphone/.test(a.b.Ta.toLowerCase())) c = "msafari";
        if (c.toLowerCase() == "mozilla" && e == "Unknown") {
            e = a.b.S;
            c = "msie"
        }
        if (c == "msafari" && e.toLowerCase() == "unknown") e = a.b.Sa.g + "." + a.b.Sa.A;
        a = d[c];
        d = "";
        for (var f in a)
            if (parseFloat(e) >= parseFloat(f))
                if (b[a[f].toUpperCase()]) d = a[f];
        return d
    }

    function Da(a, b, d, c, e) {
        a = "";
        d = d;
        d += c != undefined && e != undefined ? "_" + e.charAt(0) + c / 100 : "_n4";
        if (b && b[d]) a = b[d];
        return a.length > 0 ? a : null
    }

    function Ea(a, b, d, c, e, f, k, g, h, l, i) {
        var p = b[i.toUpperCase()];
        e = "?";
        if (c) e += f + "&";
        e += "fctypeId=" + a.c.fctypeArray[i] + "&fcId=" + b.TTF + "&origId=" + p;
        e += "&projectId=" + d;
        e += "&content=";
        b = "";
        d = a.b.getName();
        d = d.toLowerCase();
        c = a.b.B;
        if (d.toLowerCase() == "mozilla" && c == "Unknown") d = "msie";
        c = d == "msie" ? true : false;
        d = Fa(a);
        if (l) {
            f = null;
            l = a.z(Da(a, l, k, g, h)).split("").sort().join("");
            k = k;
            if (a.j) k += "_" + h.charAt(0) + g / 100;
            if (l.length > d) return {
                sa: 2
            };
            g = a.z(Ga(a, l, k, false)).split("::");
            a = g[0];
            g = g[1];
            l = a.split("").sort().join("");
            f = "";
            if (a) f = l.replace('"', "").replace("?", "").replace(";", "").replace("#", "").replace("&", "");
            if (f && f.length > 0 || g && g.length > 0) {
                b += (c ? f || "" : encodeURIComponent(f || "")) + U + "Mm";
                if (g != "") b += g
            }
        }
        a = e + b;
        if (a.length > d) {
            e = d - e.length;
            return {
                sa: Math.ceil(a.length / e),
                nc: e
            }
        }
        return {
            sa: 1
        }
    }
    mti.d.prototype.m = {};

    function va(a, b, d, c) {
        var e = "TTF",
            f = a.c.projectId,
            k = a.c.ec,
            g = a.c.fcURL,
            h = a.c.dfcURL;
        if (Z.customDfcURL != undefined) h = Z.customDfcURL;
        var l = a.a.createElement("style", {
                type: "text/css",
                id: "mti_fontface_" + (c ? "Aj_" : "") + a.c.projectId
            }),
            i = "",
            p = false,
            r = {},
            z = {};
        a.m = {};
        var t = {
                TTF: "truetype",
                WOFF: "woff",
                SVG: "svg",
                MTX: "truetype",
                OTF: "opentype",
                WOFF2: "woff2"
            },
            w = a.b.getName();
        w = w.toLowerCase();
        var m = a.b.B;
        if (w.toLowerCase() == "mozilla" && m == "Unknown") {
            m = a.b.S;
            w = "msie"
        }
        var u = w == "msie" && m < 8 ? true : false;
        m = w == "msie" && m <=
            8 ? true : false;
        w = w == "opera" ? true : false;
        var j = null,
            q = null;
        b || (b = []);
        for (var F = 0; F < a.c.pfL.length; F++) {
            var n = a.c.pfL[F],
                x = n.fontfamily,
                s = n.contentIds,
                D = n.enableOtf,
                o = n.enableSubsetting,
                A = null;
            if (n.fontWeight != undefined && n.fontStyle != undefined) {
                j = n.fontWeight;
                q = n.fontStyle;
                A = q.charAt(0) + j / 100;
                a.j = true
            }
            e = ya(a, s);
            var E = false,
                I = "";
            if (b.length > 0 || w || !o) {
                E = w || !o ? true : false;
                for (o = 0; o < b.length; o++) {
                    I = j != undefined || q != undefined ? x + "_" + q.charAt(0) + j / 100 : x + "_n4";
                    if (b[o].w == x && (j ? b[o].V == j / 100 : true) && (q ? b[o].N == q.charAt(0) :
                            true)) {
                        A == null ? a.f.push(new Q(x)) : a.f.push(new Q(x, A));
                        E = true;
                        break
                    } else if (m)
                        if (b[o].w == I) {
                            a.f.push(new Q(I));
                            E = true;
                            break
                        }
                }
                if (w) A == null ? a.f.push(new Q(x)) : a.f.push(new Q(x, A));
                if (E) {
                    A = e != null && e.toUpperCase() == "EOT" || e.toUpperCase() == "MTX";
                    E = Z.EnableDSForAllFonts == true ? true : n.enableSubsetting;
                    o = 1;
                    o = Z.SubsetContent ? 1 : n.enableSubsetting ? Ea(a, s, f, k, h, a.c.ck, x, j, q, d, e).sa : 1;
                    z = false;
                    if (u && o > 1) {
                        o = 1;
                        z = true;
                        E = false
                    }
                    n = "";
                    if (o > 1 || c) {
                        if (d !== null) {
                            p = true;
                            r[I] || (r[I] = []);
                            if (d) var L = d[I];
                            if (L) {
                                z = [];
                                var W = "";
                                var B = W = (c ? x.length > 25 ? x.substring(0, 20) : x : x) + (c ? c : "");
                                B += m && q != undefined && j != undefined ? "_" + q.charAt(0) + j / 100 : q != undefined && j != undefined ? "_" + q.charAt(0) + j / 100 : "_n4";
                                r[I].push(B);
                                d[B] = L;
                                n = o > 1 ? $(a, s, f, false, k, g, h, a.c.ck, W, j, q, d, e, D) : $(a, s, f, E, k, g, h, a.c.ck, W, j, q, d, e, D, c);
                                if (n != "") {
                                    i += '@font-face{\nfont-family:"' + (m && q != undefined && j != undefined ? B : W) + '";';
                                    if (m == false && j != undefined && q != undefined) {
                                        i += "\nfont-style:" + q + ";";
                                        i += "\nfont-weight:" + j + ";"
                                    }
                                    i += '\nsrc:url("' + n + '")';
                                    A || (i += ' format("' + t[e.toUpperCase()] +
                                        '")');
                                    i += ";}\n";
                                    z.push("'" + W + "'");
                                    a.aa[x] = W
                                }
                                a.m[x] = z
                            } else if (m && !E) {
                                if (m && j != undefined && q != undefined) x += "_" + q.charAt(0) + j / 100;
                                n = $(a, s, f, E, k, g, h, a.c.ck, x + (c ? c : ""), j, q, z ? null : d, e, D, c);
                                if (n != "") {
                                    i += '@font-face{\nfont-family:"' + x + (c ? c : "") + '";';
                                    if (m == false && j != undefined && q != undefined) {
                                        i += "\nfont-style:" + q + ";";
                                        i += "\nfont-weight:" + j + ";"
                                    }
                                    i += '\nsrc:url("' + n + '")';
                                    if (!A) {
                                        x = s[e.toUpperCase()];
                                        e = t[e.toUpperCase()];
                                        x || (e = t.TTF);
                                        i += " format('" + e + "')"
                                    }
                                    i += ";}\n"
                                }
                            }
                        }
                    } else {
                        n = $(a, s, f, E, k, g, h, a.c.ck, x + (c ? c : ""), j, q, z ? null :
                            d, e, D, c);
                        if (n != "") {
                            D = "";
                            if (m && j != undefined && q != undefined) {
                                D = "_" + q.charAt(0) + j / 100;
                                a.m[x] = x + D
                            }
                            i += '@font-face{\nfont-family:"' + x + (c ? c : "") + D + '";';
                            if (m == false && j != undefined && q != undefined) {
                                i += "\nfont-style:" + q + ";";
                                i += "\nfont-weight:" + j + ";"
                            }
                            i += '\nsrc:url("' + n + '")';
                            if (!A) {
                                x = s[e.toUpperCase()];
                                e = t[e.toUpperCase()];
                                x || (e = t.TTF);
                                i += " format('" + e + "')"
                            }
                            i += ";}\n"
                        }
                    }
                }
            }
        }
        if (p === true || c) {
            a.a.getElementById("mti_stylesheet_" + (c ? "Aj_" : "") + a.c.projectId);
            c ? sa(a, r, c) : sa(a, r)
        }
        i != "" && a.a.I("head", l);
        if (l.styleSheet) l.styleSheet.cssText =
            i;
        else {
            a = document.createTextNode(i);
            l.appendChild(a)
        }
    }

    function sa(a, b, d) {
        var c = new ia("-"),
            e = a.a.createElement("style", {
                type: "text/css",
                id: "mti_stylesheet_" + (d ? "Aj_" : "") + a.c.projectId
            }),
            f = "",
            k = "";
        k = Z.UseTextIndent == true ? "text-align:left;text-indent:-9999px;font-size:0px" : "visibility:hidden;";
        if (Z.EnableCustomFOUTHandler == true) {
            var g = a.c.pfL;
            f += "." + ka + "-loading .mti_font_element" + (d ? "_Aj" : "") + "{" + k + "}\n";
            for (var h = 0; h < g.length; h++) {
                var l = g[h].fontfamily,
                    i = "4",
                    p = "n";
                if (g[h].fontWeight != undefined && g[h].fontStyle != undefined) {
                    i = g[h].fontWeight / 100;
                    p = g[h].fontStyle.charAt(0)
                }
                if (d) l +=
                    d;
                if (l) f += "." + c.i(ka, l, p + i, "loading") + " .mti_font_element" + (d ? d : "") + "{" + k + "}\n"
            }
        }
        c = (new O(navigator.userAgent, document)).parse().getName();
        c = c.toLowerCase();
        i = a.b.B;
        if (c.toLowerCase() == "mozilla" && i == "Unknown") {
            i = a.b.S;
            c = "msie"
        }
        c = c == "msie" && i <= 8 ? true : false;
        for (h in a.c.selectorFontMap) {
            g = a.c.selectorFontMap[h];
            l = g.familyName;
            p = g.fontStyle;
            i = g.fontWeight;
            l = l;
            if (b && b[l] && b[l].length > 0) l = b[l].join("','");
            if (!d) {
                if (c && p != undefined && i != undefined) l += "_" + p.charAt(0) + i / 100;
                f += h + "{font-family:'" + l + "';";
                if (c ==
                    false && p != undefined && i != undefined) {
                    f += "\n font-style:" + p + ";";
                    f += "\n font-weight:" + i + ";"
                }
                if (a.k != null) {
                    i = g.otf;
                    p = g.vrnt;
                    if (i && i != null && i != "") f += a.k.ic(i, p)
                }
                f += "}\n"
            }
            if (Z.EnableCustomFOUTHandler == true) {
                f += "/*fout specific code:*/\n";
                i = h.split(",");
                for (var r in i) f += "." + ka + "-loading " + i[r] + "{" + k + "}\n"
            }
        }
        f += ".mti_hide_element{" + k + "}";
        f != "" && a.a.I("head", e);
        if (e.styleSheet) e.styleSheet.cssText = f;
        else {
            a = document.createTextNode(f);
            e.appendChild(a)
        }
    }
    mti.d.prototype.z = function(a) {
        if (a && typeof a == "string") {
            a = a.replace(/\s/g, "").replace(/\n/g, "").replace(/\r/g, "");
            for (var b = "", d = a.length, c = null, e = 0; e < d; e++) {
                c = a.charAt(e);
                if (b.indexOf(c) == -1) b += c
            }
            return b
        }
        return ""
    };

    function Ha(a, b, d) {
        if (b.toString().length < d) {
            a = (new Array(1 + d)).join("0");
            return (a + b).slice(-a.length)
        } else return b
    }

    function $(a, b, d, c, e, f, k, g, h, l, i, p, r, z, t, w) {
        var m = b[r.toUpperCase()],
            u = "http://",
            j = "";
        if (Z.UseHybrid) {
            j = h + "_f";
            if (l != undefined && i != undefined) {
                j = i.charAt(0) + l / 100;
                j = (h.length > 25 ? h.substring(0, 20) : h) + "_" + j + "_f"
            }
            if (c == true && Ia(a, j)) c = false
        }
        var q = a.c.fontdataversion,
            F = a.c.env;
        if (window.location.protocol == "https:") u = "https://";
        f = f.replace("http://", "").replace("https://", "");
        k = k.replace("http://", "").replace("https://", "");
        f = u + f + (z ? "ot/" : "");
        k = u + k;
        if (c) {
            j = k + "?";
            if (e) j += g + "&";
            e = a.c.fctypeArray[r];
            j += "fctypeId=" +
                (typeof e === "undefined" ? "3" : e) + "&fcId=" + b.TTF + "&origId=" + m;
            if (q == "v2") {
                j += "&fontdataversion=v2";
                if (F != "undefined" && F != "") j += "&env=" + F
            }
        } else {
            if (e)
                if (m) {
                    if (q == "v2") f += r.toUpperCase() == "EOT" ? "2/" : r.toUpperCase() == "WOFF" ? "3/" : r.toUpperCase() == "SVG" ? "11/" : r.toUpperCase() == "OTF" ? "13/" : r.toUpperCase() == "WOFF2" ? "14/" : "1/";
                    j = f + m + "." + r.toLowerCase() + "?" + g
                } else j = f + "3/" + b.WOFF + ".woff?" + g;
            else j = f + "?fctypeId=" + a.c.fctypeArray[r] + "&fcId=" + m;
            if (t != "")
                if (a.j) h = h + "_" + i.charAt(0) + l / 100;
                else h += "_n4";
            a.a.indexOf(a.da,
                h) < 0 && !w && !z && a.da.push(h)
        }
        j += "&projectId=" + d;
        if (typeof Z.SubsetContent != "undefined" && Z.SubsetContent !== "") {
            j += "&content=" + Z.SubsetContent;
            return j
        }
        a.b.getName().toLowerCase();
        b = null;
        if (p)
            if (c || Z.EnableDSForAllFonts) {
                c = "";
                p = Da(a, p, h, l, i);
                if (p == null) return j = "";
                p = a.z(p).split("").sort().join("");
                h = h;
                if (a.j) h += "_" + i.charAt(0) + l / 100;
                p = Ga(a, p, h, t);
                if (t) {
                    h = a.j ? h.substring(0, h.length - 8) + "_" + i.charAt(0) + l / 100 : h.substring(0, h.length - 5);
                    a.la[h] = p
                }
                l = p;
                i = a.c.specialChar;
                t = i.length.toString().length;
                if (l && typeof l ==
                    "string") {
                    l = l.replace(/\s/g, "").replace(/\n/g, "").replace(/\r/g, "");
                    h = "";
                    p = l.length;
                    c = null;
                    d = "";
                    e = [];
                    for (f = 0; f < p; f++) {
                        c = l.charAt(f);
                        if (mti.d.indexOf(i, escape(c)) > -1) {
                            if (mti.d.indexOf(e, c) == -1) {
                                e.push(c);
                                d += Ha(a, mti.d.indexOf(i, escape(c)), t)
                            }
                        } else if (h.indexOf(c) == -1) h += c
                    }
                    a = h + "::" + d
                } else a = "";
                a = a.split("::");
                normalChar = a[0];
                c = a[1].replace(":", "");
                if (normalChar) b = normalChar.replace('"', "").replace("?", "").replace(";", "").replace("#", "").replace("&", "");
                if (b && b.length > 0 || c && c.length > 0) {
                    j += "&content=" +
                        (b || "");
                    j += U + "Mm";
                    if (c != "") j += c
                } else j = ""
            } if (r != null && r.toUpperCase() == "SVG") j += "#" + m;
        return j
    }
    mti.d.indexOf = function(a, b) {
        if (Array.prototype.indexOf) return a.indexOf(b);
        else {
            var d = a.length >>> 0,
                c = Number(b) || 0;
            c = c < 0 ? Math.ceil(c) : Math.floor(c);
            if (c < 0) c += d;
            for (; c < d; c++)
                if (c in a && a[c] === b) return c;
            return -1
        }
    };

    function Ja(a, b, d) {
        if (window.MutationObserver && !d) return false;
        d = false;
        var c = typeof b == "string" ? document.getElementById(b) : b;
        d = c === null ? false : true;
        if (!d) return false;
        d = true;
        a.f = [];
        var e = a.c.projectId,
            f = a.c.ec,
            k = a.c.fcURL,
            g = a.c.ck,
            h = "",
            l, i;
        d = a.b.B;
        var p = a.b.getName().toLowerCase(),
            r = p == "msie" && d <= 8 ? true : false,
            z = p == "opera" ? true : false;
        p = {
            TTF: "truetype",
            WOFF: "woff",
            SVG: "svg",
            MTX: "truetype",
            OTF: "opentype",
            WOFF2: "woff2"
        };
        d = true;
        if (Z.UseHybrid) {
            d = false;
            [].push(c);
            var t = a.a.getElementById("mti_fontface_" +
                e);
            if (t == null) {
                t = a.a.createElement("style", {
                    type: "text/css",
                    id: "mti_fontface_" + e
                });
                a.a.I("head", t)
            }
            var w = c.getAttribute("data-mtiFont"),
                m = a.a.getComputedStyle(c);
            if (w == null) w = m.fontFamily.replace(/^\s|\s$/g, "").replace(/'|"/g, "");
            for (var u = [], j = 0; j < a.c.pfL.length; j++) u.push(a.c.pfL[j].fontfamily);
            if (c.hasChildNodes && mti.d.indexOf(u, w) < 0) {
                j = c.childNodes;
                for (n = 0; n < j.length; n++)
                    if (j[n].nodeType == 1) {
                        w = a.a.q(j[n]).replace(/^\s|\s$/g, "").replace(/'|"/g, "");
                        if (mti.d.indexOf(u, w) > -1) break
                    }
            }
            var q = m.fontWeight;
            m = m.fontStyle;
            j = m.charAt(0) + q / 100;
            for (var F = w.split(","), n = 0; n < F.length; n++) {
                var x = F[n] + "_f",
                    s, D = false;
                for (j = 0; j < a.c.pfL.length; j++) {
                    s = a.c.pfL[j];
                    var o = s.fontfamily;
                    if (F[n] == o && s.enableSubsetting)
                        if (s.fontWeight != undefined && s.fontStyle != undefined) {
                            l = s.fontWeight;
                            i = s.fontStyle;
                            if (m == s.fontStyle && q == s.fontWeight) {
                                D = true;
                                j = i.charAt(0) + l / 100;
                                x = (o.length > 25 ? o.substring(0, 20) : o) + "_" + j + "_f";
                                a.f.push(new Q(o, j));
                                break
                            }
                        } else {
                            a.f.push(new Q(o));
                            D = true;
                            break
                        }
                }
                if (Ia(a, x) && D)
                    if (r && a.a.indexOf(a.da, w) > -1) {
                        a.a.u(c,
                            o, x, false, false);
                        if (c.hasChildNodes) {
                            j = c.childNodes;
                            for (n = 0; n < j.length; n++)
                                if (j[n].nodeType == 1) {
                                    w = a.a.q(j[n]).replace(/^\s|\s$/g, "").replace(/'|"/g, "");
                                    a.a.indexOf(u, w) > -1 && a.a.u(j[n], o, x, false, false)
                                }
                        }
                    } else {
                        d = false;
                        contentIdArray = s.contentIds;
                        enableOtf = s.enableOtf;
                        fFormat = ya(a, contentIdArray);
                        s = o;
                        if (r) s += i != undefined && l != undefined ? "_" + i.charAt(0) + l / 100 : "_n4";
                        fontURL = $(a, contentIdArray, e, false, f, k, "", g, s, l, i, null, fFormat, enableOtf);
                        if (fontURL != "") {
                            h += '@font-face{\nfont-family:"' + s + '";';
                            if (r == false &&
                                l != undefined && i != undefined) {
                                h += "\nfont-style:" + i + ";";
                                h += "\nfont-weight:" + l + ";"
                            }
                            h += '\nsrc:url("' + fontURL + '")';
                            if (!(fFormat != null && fFormat.toUpperCase() == "EOT" || fFormat.toUpperCase() == "MTX")) {
                                l = contentIdArray[fFormat.toUpperCase()];
                                i = p[fFormat.toUpperCase()];
                                l || (i = p.TTF);
                                h += " format('" + i + "')"
                            }
                            h += ";}\n"
                        }
                        if (t.styleSheet) {
                            t.styleSheet.cssText += h;
                            if (r) {
                                a.a.u(c, o, s, false, false);
                                if (c.hasChildNodes) {
                                    j = c.childNodes;
                                    for (n = 0; n < j.length; n++)
                                        if (j[n].nodeType == 1) {
                                            w = a.a.q(j[n]).replace(/^\s|\s$/g, "").replace(/'|"/g,
                                                "");
                                            a.a.indexOf(u, w) > -1 && a.a.u(j[n], o, s, false, false)
                                        }
                                }
                            }
                        } else t.innerHTML += h;
                        a.la[s] = Ga(a, "", s);
                        if (!r) {
                            c.style.fontFamily = "" + w;
                            c.removeAttribute("data-mtiFont");
                            o = "";
                            if (c.hasChildNodes()) {
                                o = c.childNodes;
                                for (h = 0; h < o.length; h++)
                                    if (o[h].nodeType == 1 && o[h].getAttribute("data-mtiFont")) {
                                        o[h].style.fontFamily = o[h].getAttribute("data-mtiFont");
                                        o[h].removeAttribute("data-mtiFont")
                                    }
                            }
                        }
                        if (a.k != null) {
                            var A = new mtiTextCollector(document.getElementById(b).parentElement, a.a, a.c.pfL);
                            pa(A, {}, E);
                            o = ra(A);
                            mti.F(a.k, a.k.Jb,
                                o)()
                        }
                        break
                    }
                else d = true
            }
        }
        if (d) {
            var E = Ka(a);
            var I = A = null,
                L = [],
                W = c != null ? c.parentElement : document.body;
            (function() {
                A = new mti.C(W, a.a, a.c.pfL);
                I = pa(A, {}, E);
                z && ua(a);
                var B = [];
                if (I != undefined)
                    for (var J in I) {
                        J += E;
                        B.push(new Q(G))
                    }
                a.H.mti_element_cache = A.G;
                va(a, A.L(), I, E, true);
                B = ra(A);
                if (a.k != null) {
                    J = [];
                    J.push(c);
                    mti.F(a.k, a.k.Jb, J)()
                }
                for (J = 0; J < B.length; J++)
                    for (var G in a.m)
                        if (a.a.indexOf(a.a.q(B[J]), G) > -1)
                            if (B[J].getAttribute("id") == b || B[J] == b) a.a.u(B[J], G, a.m[G], r, a.j);
                            else a.a.zb(c, B[J]) && a.a.indexOf(a.a.q(B[J]).replace(/'|"/g,
                                ""), G) > -1 && a.a.u(B[J], G, a.m[G], r, a.j);
                J = a.m[G] == null ? 0 : a.m[G].length;
                if (a.f.length > 0)
                    for (B = 0; B < a.f.length; B++) {
                        G = a.f[B].getName() + E;
                        var R = null;
                        if (a.j) R = a.f[B].r();
                        R = r && R != null ? new Q(G + "_" + R) : R == null ? new Q(G) : new Q(G, R);
                        L.push(R)
                    } else
                        for (B = 0; B < J; B++) {
                            a.j ? L.push(new Q(a.m[G][B], R)) : L.push(new Q(a.m[G][B]));
                            if (a.a.indexOf(a.Va, G) == -1) {
                                a.Va.push(G);
                                a.j ? ffHybrid.push(new Q(a.m[G][B], R)) : ffHybrid.push(new Q(a.m[G][B]))
                            }
                        }
            })();
            Z.RemoveMTIClass == true && setTimeout(function() {
                Ca(a, "mti_font_element" + E)
            }, fa.ya);
            o = {};
            if (Z.UseHybrid)
                if (L.length > 0) {
                    o.fontactive = function() {
                        ta(a, a.ga, L)
                    };
                    o.fontinactive = function() {
                        ta(a, a.ga, L)
                    }
                } Z.EnableCustomFOUTHandler == true && (new X(a.b, a.a, new P(a.a, document.documentElement, o), fa.ya)).ba(L, {}, {}, false)
        }
    }
    mti.d.prototype.load = function(a) {
        a(this.L(), this.pb)
    };
    mti.$a = function(a) {
        this.v = a
    };
    mti.$a.prototype.protocol = function() {
        var a = ["http:", "https:"],
            b = a[0];
        if (this.v && this.v.location && this.v.location.protocol) {
            var d = 0;
            for (d = 0; d < a.length; d++)
                if (this.v.location.protocol == a[d]) return this.v.location.protocol
        }
        return b
    };
    mti.xa = function(a, b) {
        this.a = a;
        this.c = b
    };
    mti.xa.prototype.appendBannerScript = function() {
        var a;
        a = new RegExp(escape("WFS_MTI_SS") + "=([^;]+)");
        if (a.test(document.cookie + ";")) {
            a.exec(document.cookie + ";");
            a = unescape(RegExp.$1)
        } else a = false;
        var b = this.c.bannerHandlerURL;
        if (b) {
            b += "?projectId=" + this.c.projectId;
            if (a !== false) b += "&WFS_MTI_SS=" + a;
            b += "&" + escape((new Date).getTime());
            this.a.I("head", this.a.createElement("Script", {
                type: "text/javascript",
                src: b
            }))
        }
    };
    mti.cb = function(a) {
        this.Mb = a
    };
    MonoTypeWebFonts.eb(mti.d.ab, function(a) {
        var b = (new O(navigator.userAgent, document)).parse(),
            d = new C(window),
            c = null;
        if (a.enableOtf) c = new mti.dc(d, b, a);
        window.MonoTypeWebFonts.BannerHandler = new mti.xa(d, a);
        a = new mti.d(window, b, d, a, c);
        var e = new mti.cb(a);
        window.MonoTypeWebFonts.renderPartial = function(f, k) {
            Ja(e.Mb, f, k)
        };
        return a
    });

    function Fa(a) {
        var b = a.c.bsmcArray,
            d = a.b.getName();
        d = d.toLowerCase();
        if (d == "firefox") d = "mozilla";
        if (/ipad|ipod|iphone/.test(a.b.Ta.toLowerCase())) d = "msafari";
        var c = a.b.B;
        if (d.toLowerCase() == "mozilla" && c == "Unknown") {
            c = a.b.S;
            d = "msie"
        }
        a = b[d];
        b = 15600;
        for (var e in a)
            if (parseFloat(c) >= parseFloat(e)) b = a[e];
        return b
    }

    function Ka() {
        for (var a = "", b = 0; b < 5; b++) a += "abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * 26));
        return a
    }
    mti.d.prototype.L = function() {
        return this.f
    };
    mti.d.P = false;

    function Aa(a, b) {
        if (mti.d.P === true) b();
        else {
            var d = a.a.p;
            if (a.b.getName() == "MSIE") {
                var c = false,
                    e = function() {
                        if (!c) {
                            c = true;
                            b();
                            mti.d.P = true
                        }
                    };
                (function() {
                    try {
                        d.documentElement.doScroll("left");
                        if (d.readyState != "complete") {
                            setTimeout(arguments.callee, 50);
                            return
                        }
                    } catch (f) {
                        setTimeout(arguments.callee, 50);
                        return
                    }
                    e()
                })();
                d.onreadystatechange = function() {
                    if (d.readyState == "complete") {
                        d.onreadystatechange = null;
                        e()
                    }
                }
            } else if (a.b.mb == "AppleWebKit" && a.b.S < 525)(function() {
                if (["loaded", "complete"].indexOf(d.readyState) >
                    -1) {
                    b();
                    mti.d.P = true
                } else setTimeout(arguments.callee, 50)
            })();
            else if (d.addEventListener)
                if (d.readyState == "loading") d.addEventListener("DOMContentLoaded", function() {
                    b();
                    mti.d.P = true
                }, false);
                else window.onload = function() {
                    b();
                    mti.d.P = true
                };
            else window.onload = function() {
                b();
                mti.d.P = true
            }
        }
    }
    mti.d.prototype.Za = function(a) {
        function b() {
            document.body ? a() : setTimeout(b, 0)
        }
        b()
    };
    mti.d.prototype.ga = function(a, b) {
        var d = this;
        if (!(a != null && a.length < 1)) {
            var c = d.c.projectId,
                e = d.c.ec,
                f = d.c.fcURL,
                k = d.c.ck;
            a = "";
            var g, h, l = d.b.B,
                i = d.b.getName();
            i = i.toLowerCase();
            if (i.toLowerCase() == "mozilla" && l == "Unknown") {
                l = d.b.S;
                i = "msie"
            }
            var p = i == "msie" && l <= 8 ? true : false;
            i = false;
            var r = {
                TTF: "truetype",
                WOFF: "woff",
                SVG: "svg",
                MTX: "truetype",
                OTF: "opentype",
                WOFF2: "woff2"
            };
            l = [];
            for (var z = d.f, t = 0, w = 0; w < d.c.pfL.length; w++) {
                for (var m = d.c.pfL[w], u = false, j = m.fontfamily, q = 0; q < z.length; q++)
                    if (z[q].w == j && (m.enableSubsetting ||
                            Z.EnableDSForAllFonts)) {
                        u = j + "_f";
                        u = true;
                        if (d.j) {
                            u = false;
                            if (z[q].V == m.fontWeight / 100 && z[q].N == m.fontStyle.charAt(0)) {
                                u = true;
                                g = m.fontWeight;
                                h = m.fontStyle;
                                fontVariation = h.charAt(0) + g / 100
                            }
                        }
                        t = q;
                        break
                    } else if (p) {
                    var F = m.fontfamily;
                    if (d.j) {
                        g = m.fontWeight;
                        h = m.fontStyle;
                        fontVariation = h.charAt(0) + g / 100;
                        F = F + "_" + fontVariation
                    }
                    if (z[q].w == F && (m.enableSubsetting || Z.EnableDSForAllFonts)) {
                        u = true;
                        t = q;
                        break
                    }
                }
                if (u) {
                    z.splice(t, 1);
                    u = j + "_f";
                    if (m.enableSubsetting || Z.EnableDSForAllFonts) {
                        if (m.fontWeight != undefined && m.fontStyle !=
                            undefined) {
                            g = m.fontWeight;
                            h = m.fontStyle;
                            fontVariation = h.charAt(0) + g / 100;
                            u = (j.length > 25 ? j.substring(0, 20) : j) + "_" + fontVariation + "_f"
                        }
                        l.push(u);
                        contentIdArray = m.contentIds;
                        enableOtf = m.enableOtf;
                        if (!Ia(d, u)) {
                            i = true;
                            if (mti.d.indexOf(d.Ja, u) < 0) {
                                fFormat = ya(d, contentIdArray);
                                fontURL = $(d, contentIdArray, c, false, e, f, "", k, j, g, h, null, fFormat, enableOtf, false, true);
                                if (fontURL != "") {
                                    d.Ja.push(u);
                                    if (p && h != undefined && g != undefined) j += "_" + h.charAt(0) + g / 100;
                                    a += '@font-face{\nfont-family:"' + u + '";';
                                    a += '\nsrc:url("' + fontURL +
                                        '")';
                                    if (!(fFormat != null && fFormat.toUpperCase() == "EOT" || fFormat.toUpperCase() == "MTX")) {
                                        m = contentIdArray[fFormat.toUpperCase()];
                                        j = r[fFormat.toUpperCase()];
                                        m || (j = r.TTF);
                                        a += " format('" + j + "')"
                                    }
                                    a += ";}\n"
                                }
                            }
                        }
                    }
                }
            }
            if (a != "") {
                g = d.a.getElementById("mti_fontface_" + c);
                if (g == null) {
                    g = d.a.createElement("style", {
                        type: "text/css",
                        id: "mti_fontface_" + (b ? "Aj_" : "") + d.c.projectId
                    });
                    a != "" && d.a.I("head", g)
                }
                if (g.styleSheet)
                    if (g.styleSheet.cssText != "") {
                        g = d.a.getElementById("mti_fontface_" + (b ? "hybridAjaxIE_" : "hybridIE_") + d.c.projectId);
                        if (g == null) {
                            g = d.a.createElement("style", {
                                type: "text/css",
                                id: "mti_fontface_" + (b ? "hybridAjaxIE_" : "hybridIE_") + d.c.projectId
                            });
                            a != "" && d.a.I("head", g)
                        }
                        g.styleSheet.cssText = a
                    } else g.styleSheet.cssText = a;
                else g.innerHTML += a;
                if (i) {
                    b = [];
                    for (a = 0; a < l.length; a++) b.push(new Q(l[a]));
                    a = {};
                    a.fontactive = function(n) {
                        n.substr(n.length - 2) == "_f" && !Ia(d, n) && La(d, n)
                    };
                    (new X(this.b, this.a, new P(d.a, document.documentElement, a), 1E3)).ba(b, {}, {}, false)
                }
            }
        }
    };

    function ta(a, b, d) {
        if (document.readyState == "complete") setTimeout(function() {
            b.apply(a, d)
        }, 500);
        else if (document.addEventListener) document.addEventListener("readystatechange", function() {
            document.readyState == "complete" && setTimeout(function() {
                b.apply(a, d)
            }, 500)
        });
        else window.attachEvent && document.attachEvent("onreadystatechange", function() {
            document.readyState == "complete" && setTimeout(function() {
                b.apply(a, d)
            }, 500)
        });
        if (document.addEventListener) document.addEventListener("keydown", function(c) {
            a.ta.apply(a,
                [c])
        });
        else window.attachEvent ? window.attachEvent("onkeydown", function(c) {
            a.ta.apply(a, [c])
        }) : document.addEventListener("keydown", function(c) {
            a.ta.apply(a, [c])
        })
    }
    mti.d.prototype.ta = function(a) {
        if ((a.ctrlKey || a.metaKey) && a.keyCode == 116) {
            a.preventDefault();
            a = document.cookie.split(";");
            for (var b = "", d = 1; d <= a.length; d++) {
                var c = a[d - 1].split("="),
                    e = c[0].substr(c[0].length - 2);
                if (c[1] == "1" && e == "_f") {
                    b += a[d - 1];
                    document.cookie = c[0] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
                }
            }
            document.location.reload(true)
        }
    };

    function za(a, b, d) {
        var c = {};
        c.fontactive = function() {
            d(b, true)
        };
        c.fontinactive = function() {
            d(b, false)
        };
        var e = Z.timeout == null ? 100 : Z.timeout;
        a = new X(a.b, a.a, new P(a.a, document.documentElement, c), e);
        c = [];
        c.push(new Q(b));
        a.ba(c, {}, {}, false)
    }

    function La(a, b) {
        a = new Date;
        a.setDate(a.getDate() + 1);
        document.cookie = b + "=" + ("1; expires=" + a.toUTCString())
    }

    function Ia(a, b) {
        a = document.cookie.split(b + "=");
        b = null;
        if (a.length == 2) b = a.pop().split(";").shift();
        return b == 1 ? true : false
    }

    function Ma(a, b, d) {
        var c = 0,
            e = 0,
            f = false;
        a = Fa(a);
        if (b.length > a || d.length > a) return 0;
        for (c = 0; c < d.length; c++) {
            f = false;
            for (e = 0; e < b.length; e++)
                if (d[c] == b[e]) f = true;
            if (f == false)
                if (e == b.length) return 0
        }
        return 1
    }

    function Ga(a, b, d, c) {
        if (c)
            if (a.j) {
                c = d.substring(d.length - 3, d.length);
                d = d.substring(0, d.length - 8) + c
            } else d = d.substring(0, d.length - 5);
        if (typeof Storage !== "undefined") {
            var e;
            a: {
                try {
                    e = window.localStorage.getItem(d)
                } catch (f) {
                    console && console.log("MTI_webfont_service::localStorage.getItem error::" + f.message);
                    e = false;
                    break a
                }
                e = e == null ? false : e.length > b.length ? Ma(a, e, b) ? e : false : false
            }
            if (e == false && b) {
                d = d;
                e = b;
                try {
                    if (window.localStorage.getItem(d) != null) e += window.localStorage.getItem(d);
                    e = a.z(e).split("").sort().join("");
                    window.localStorage.setItem(d, e)
                } catch (k) {
                    console && console.log("MTI_webfont_service::localStorage.setItem error::" + k.message)
                }
            } else if (e.length > 0) return e
        }
        return b
    }
    mti.d.prototype.Pa = function() {
        var a = this,
            b = "";
        if (window.MutationObserver) {
            var d = new MutationObserver(function(c) {
                c.forEach(function(e) {
                    if (e.type == "characterData") {
                        if (e.target.parentNode != null) {
                            f = e.target.parentNode;
                            if (typeof f.getAttribute("isRender") !== "undefined" && f.getAttribute("isRender") !== "true") {
                                f.setAttribute("isRender", "true");
                                if (e.target.parentNode.id != null && typeof e.target.parentNode.id != undefined)
                                    if (typeof document.getElementById(e.target.parentNode.id) !== "undefined" && document.getElementById(e.target.parentNode.id) !=
                                        null) b = document.getElementById(e.target.parentNode.id).getAttribute("data-mti-otf");
                                typeof b != undefined && b != "mti-otf" && Na(a, e.target.parentNode)
                            } else setTimeout(function() {
                                f.removeAttribute("isRender")
                            }, 0)
                        }
                    } else if (e.type == "attributes" && e.attributeName == "style") {
                        var f = e.target;
                        if (f.innerHTML != U && f.innerHTML != "BESbswy")
                            if (typeof f.getAttribute("isRender") !== "undefined" && f.getAttribute("isRender") !== "true") {
                                f.setAttribute("isRender", "true");
                                if (f.id != null && f.id != "" && typeof f.id != undefined) {
                                    if (typeof document.getElementById(f.id) !==
                                        "undefined" && document.getElementById(f.id) != null) b = document.getElementById(f.id).getAttribute("data-mti-otf")
                                } else if (f != null && f != "" && typeof f != undefined) b = f.getAttribute("data-mti-otf");
                                f = f.id != null ? f.id : f;
                                b != "mti-otf" && f != "" && Na(a, f)
                            } else setTimeout(function() {
                                f.removeAttribute("isRender")
                            }, 0)
                    } else if (e.type == "childList")
                        if (e.addedNodes.length > 0) {
                            f = e.addedNodes[0];
                            if (f.nodeType == 3) f = f.parentNode;
                            if (typeof f !== "undefined" && f != null)
                                if (f.nodeType != 3) {
                                    e = f.tagName;
                                    if (e != "HTML" && e != "HEAD" && e != "TITLE" &&
                                        e != "STYLE" && e != "LINK" && e != "META" && e != "BASE" && e != "IMG" && e != "HR" && e != "BR")
                                        if (f.innerHTML != U && f.innerHTML != "BESbswy")
                                            if (typeof f.className === "string" && f.className.indexOf("firebugLayoutBox") == -1) {
                                                if (f.id != null && f.id != "" && typeof f.id != undefined) {
                                                    if (document.getElementById(f.id) != null) b = document.getElementById(f.id).getAttribute("data-mti-otf")
                                                } else if (f != null && f != "" && typeof f != undefined) b = f.getAttribute("data-mti-otf");
                                                f = typeof f.id !== "undefined" && f.id != null && f.id != "" ? f.id : f;
                                                b != "mti-otf" && f != "" && Na(a,
                                                    f)
                                            }
                                }
                        }
                });
                Oa(a, true)
            });
            document.body && d.observe(document.body, {
                childList: true,
                characterData: true,
                subtree: true,
                attributes: true
            })
        } else {
            d = function(c, e, f, k) {
                c.addEventListener ? c.addEventListener(e, f, k) : c.attachEvent("on" + e, f)
            };
            d(document, "DOMNodeInserted", function(c) {
                c = c.target;
                if (typeof c != undefined && c != null && c.nodeType == 3) c = c.parentElement;
                if (typeof c != undefined && c != null && c.nodeType != 3) {
                    var e = c.tagName;
                    if (e != "HTML" && e != "HEAD" && e != "TITLE" && e != "STYLE" && e != "LINK" && e != "META" && e != "BASE" && e != "IMG" && e != "HR" &&
                        e != "BR")
                        if (c.innerHTML != U && c.innerHTML != "BESbswy") {
                            if (typeof c.id != undefined && c.id != null && c.id != "") {
                                if (typeof document.getElementById(c.id) !== "undefined" && document.getElementById(c.id) != null) b = document.getElementById(c.id).getAttribute("data-mti-otf")
                            } else if (typeof c != undefined && c != null && c != "") b = c.getAttribute("data-mti-otf");
                            if (b != "mti-otf" && c != "") {
                                Na(a, c);
                                Oa(a, false)
                            }
                        }
                }
            }, false);
            d(document, "DOMAttrModified", function(c) {
                if (c.attrName == "style") {
                    var e = c.target;
                    if (e.innerHTML != U && e.innerHTML != "BESbswy")
                        if (typeof e.getAttribute("isRender") !==
                            "undefined" && e.getAttribute("isRender") !== "true") {
                            e.setAttribute("isRender", "true");
                            if (typeof e.id != undefined && e.id != null && e.id != "") {
                                if (typeof document.getElementById(e.id) != undefined && document.getElementById(e.id) != null) b = document.getElementById(e.id).getAttribute("data-mti-otf")
                            } else if (typeof e.getAttribute("data-mti-otf") != undefined && e != null && e != "") b = e.getAttribute("data-mti-otf");
                            if (b != "mti-otf" && e != "") {
                                Na(a, e);
                                Oa(a, false)
                            }
                        } else setTimeout(function() {
                            e.removeAttribute("isRender")
                        }, 0)
                }
            }, false);
            d(document, "DOMCharacterDataModified", function(c) {
                c = c.target;
                if (typeof c != undefined && c != null && c.nodeType == 3) c = c.parentElement;
                if (typeof c != undefined && c != null && c.nodeType != 3) {
                    var e = c.tagName;
                    if (e != "HTML" && e != "HEAD" && e != "TITLE" && e != "STYLE" && e != "LINK" && e != "META" && e != "BASE" && e != "IMG" && e != "HR" && e != "BR")
                        if (c.innerHTML != U && c.innerHTML != "BESbswy") {
                            if (typeof c.id != undefined && c.id != null && c.id != "") {
                                if (document.getElementById(c.id) != null) b = document.getElementById(c.id).getAttribute("data-mti-otf")
                            } else if (typeof c !=
                                undefined && c != null && c != "") b = c.getAttribute("data-mti-otf");
                            if (b != "mti-otf" && c != "") {
                                Na(a, c);
                                Oa(a, false)
                            }
                        }
                }
            }, false)
        }
    };

    function Na(a, b) {
        var d, c, e = "";
        if (typeof b == "string") {
            d = document.getElementById(b);
            if (d != null) c = d.parentNode;
            if (c != null) e = d.getAttribute("id");
            mti.d.indexOf(a.h, b) == -1 && mti.d.indexOf(a.h, e) == -1 && a.h.push(b)
        } else mti.d.indexOf(a.h, b) == -1 && mti.d.indexOf(a.h, b.parentElement) == -1 && a.h.push(b);
        if (Z.EnableCustomFOUTHandler == true) a.a.D(typeof b == "string" ? document.getElementById(b) : b, "mti_hide_element");
        setTimeout(function() {
            Z.EnableCustomFOUTHandler == true && Ca(a, "mti_hide_element")
        }, 75)
    }

    function Pa(a) {
        var b = "";
        if (a.h.length < 1) return false;
        for (var d = 0; d < a.h.length; d++) {
            var c = typeof a.h[d] == "string" ? document.getElementById(a.h[d]) : a.h[d];
            b = a.a.getComputedStyle(c);
            var e = "test",
                f = "normal",
                k = "100";
            if (typeof b != undefined && b != null) {
                e = b.fontFamily;
                f = b.fontStyle;
                k = b.fontWeight == "normal" ? "400" : b.fontWeight
            }
            b = a.a.Ha(c);
            a: {
                f = f;k = k;e = e != null ? e.split(",") : "";
                if (e instanceof Array)
                    for (var g = 0; g < e.length; g++)
                        for (var h = 0; h < a.c.pfL.length; h++) {
                            var l = a.c.pfL[h],
                                i = l.fontfamily,
                                p = l.enableSubsetting,
                                r = l.fontStyle,
                                z = l.fontWeight;
                            l = l.enableOtf;
                            if (i == a.a.t(e[g]) && (p || l))
                                if (a.j) {
                                    if (r == f && z == k) {
                                        f = {
                                            X: true,
                                            s: i,
                                            fontWeight: k,
                                            fontStyle: f
                                        };
                                        break a
                                    }
                                } else {
                                    f = {
                                        X: true,
                                        s: i
                                    };
                                    break a
                                }
                        } else
                            for (g = 0; g < a.c.pfL.length; g++) {
                                l = a.c.pfL[g];
                                i = l.fontfamily;
                                p = l.enableSubsetting;
                                r = l.fontStyle;
                                z = l.fontWeight;
                                l = l.enableOtf;
                                if (p || l)
                                    if (a.j) {
                                        if (r == f && z == k) {
                                            f = {
                                                X: true,
                                                s: i,
                                                fontWeight: k,
                                                fontStyle: f
                                            };
                                            break a
                                        }
                                    } else if (i == a.a.t(e)) {
                                    f = {
                                        X: true,
                                        s: i
                                    };
                                    break a
                                }
                            }
                f = {
                    X: false
                }
            }
            if (f.X)
                if (b != "") {
                    k = a.z(b).split("").sort().join("");
                    b = f.s;
                    e = "";
                    if (a.j) {
                        e =
                            "_" + f.fontStyle.charAt(0) + f.fontWeight / 100;
                        b += e
                    }
                    k = Ga(a, k, f.s + "abcde" + e, true);
                    e = a.la[b];
                    if (a.a.indexOf(a.da, b) == -1)
                        if (Z.UseHybrid)
                            if (k != e) Ja(a, a.h[d], true);
                            else if (Ia(a, b + "_f")) Ja(a, a.h[d], true);
                    else {
                        e = a.a.q(c);
                        e.indexOf(a.aa[f.s]) == -1 && a.a.u(c, f.s, a.aa[f.s], false, false)
                    } else if (k != e) Ja(a, a.h[d], true);
                    else {
                        c = a.h[d];
                        if (typeof a.h[d] == "string") c = document.getElementById(c);
                        e = a.a.q(c);
                        e.indexOf(a.aa[f.s]) == -1 && a.a.u(c, f.s, a.aa[f.s], false, false)
                    }
                }
        }
        a.h = []
    }
    mti.d.prototype.ra = null;

    function Oa(a, b) {
        var d = 50;
        b || (d = 0);
        if (a.c.enableOtf) d = 0;
        a.ra != null && clearTimeout(a.ra);
        a.ra = setTimeout(function() {
            a.h.length > -1 && Pa(a)
        }, d)
    };
})(this, document);
if (window.addEventListener) {
    window.addEventListener('load', function() {
        MonoTypeWebFonts.cleanup();
    }, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', function() {
        MonoTypeWebFonts.cleanup();
    });
}
MonoTypeWebFonts.cleanupExecuted = false;
MonoTypeWebFonts.loadColo = function() {
    if (!document.getElementById('mti_wfs_colophon')) {
        var colophon = document.createElement('DIV');
        colophon.setAttribute('id', 'mti_wfs_colophon');
        colophon.style.position = 'fixed';
        colophon.style.display = 'inline-block';
        colophon.style.bottom = '0px';
        colophon.style.right = '0px';
        document.body.appendChild(colophon);
        var colophonImageUrl = 'https://fast.fonts.net/colophon/fdc-colophon.png';
        if (window.location.protocol.toLowerCase() == 'https:') {
            colophonImageUrl = colophonImageUrl.replace('http:', 'https:');
        } else if (window.location.protocol.toLowerCase() == 'http:') {
            colophonImageUrl = colophonImageUrl.replace('https:', 'http:');
        }
        colophon.innerHTML = "<a target='_blank'  id='mti_wfs_colophon_anchor' href='http://www.fonts.com/BannerScript/PublishersUsedFont/50622a85-3df2-45d0-8302-6ebf6cb4c9de'><img src='" + colophonImageUrl + "' + srcset='" + colophonImageUrl.replace('.png', '@2x.png 2x') + "' alt='View all fonts in this project' height='55px' width='124px' border='0' /></a>";
    }
    if (/i(Pad|Pod|Phone)/.test(navigator.userAgent)) {
        var el = document.getElementById('mti_wfs_colophon');
        if (el) {
            window.onscroll = function() {
                el.style.top = (window.pageYOffset + window.innerHeight - 40) + 'px'
            };
        }
    }
};
MonoTypeWebFonts.cleanup = function() {
    MonoTypeWebFonts.loadColo();
    if (MonoTypeWebFonts.cleanupExecuted === true) {
        return;
    }
    MonoTypeWebFonts.cleanupExecuted = (window['mti_element_cache'].length > 0);
    var className = document.documentElement.className;
    var MTIConfig = window['MTIConfig'] || {
        'RemoveMTIClass': false
    };
    if (MTIConfig['RemoveMTIClass'] == true) {
        function walkTheDOM(node, func) {
            func(node);
            node = node.firstChild;
            while (node) {
                walkTheDOM(node, func);
                node = node.nextSibling;
            }
        }

        function getElementsByClassName(className) {
            if (document.getElementsByClassName) {
                return document.getElementsByClassName(className);
            } else {
                var results = [];
                walkTheDOM(document.body, function(node) {
                    var a, c = node.className,
                        i;
                    if (c) {
                        a = c.split(' ');
                        for (i = 0; i < a.length; i++) {
                            if (a[i] === className) {
                                results.push(node);
                                break;
                            }
                        }
                    }
                });
                return results;
            }
        }
        setTimeout(function() {
            var mti_elements = getElementsByClassName('mti_font_element');
            var u = navigator.userAgent;
            var ua = u.toLowerCase(),
                is = function(t) {
                    return ua.indexOf(t) > -1
                },
                b = (!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)),
                c = false;
            if ((RegExp.$1 == 6) || (RegExp.$1 == 7)) {
                c = true;
            }
            while (mti_elements.length > 0) {
                for (var i = 0; i < mti_elements.length; i++) {
                    var classList = mti_elements[i].className.split(' ');
                    if (classList.length == 1 && !c) {
                        mti_elements[i].removeAttribute('class');
                    } else {
                        mti_elements[i].className = mti_elements[i].className.replace(/mti_font_element/ig, ' ').replace(/^\s+|\s+$/g, '');
                    }
                }
                mti_elements = getElementsByClassName('mti_font_element');
            }
        }, 40000);
    }
    className = className;
    if (!document.getElementById('MonoTypeFontApiFontTracker')) {
        var fontTrackingUrl = "https://fast.fonts.net/t/1.css";
        if (window.location.protocol == 'https:') {
            fontTrackingUrl = fontTrackingUrl.replace(/http:/, 'https:');
        }
        var head = document.getElementsByTagName('HEAD')[0];
        var cssEle = document.createElement('LINK');
        if (cssEle) {
            cssEle.setAttribute('id', 'MonoTypeFontApiFontTracker');
            cssEle.setAttribute('type', 'text/css');
            cssEle.setAttribute('rel', 'stylesheet');
            cssEle.setAttribute('href', fontTrackingUrl + "?apiType=js&projectid=50622a85-3df2-45d0-8302-6ebf6cb4c9de");
            head.appendChild(cssEle);
        }
    }
    window['mti_element_cache'] = [];
};
MonoTypeWebFonts._fontActiveEventList = [];
MonoTypeWebFonts._fontLoadingEventList = [];
MonoTypeWebFonts._activeEventList = [];
MonoTypeWebFonts._inActiveEventList = [];
MonoTypeWebFonts.addEvent = function(eventName, callbackFunction) {
    if (eventName.toLowerCase() == 'fontactive') {
        MonoTypeWebFonts._fontActiveEventList.push(callbackFunction);
    } else if (eventName.toLowerCase() == 'fontloading') {
        MonoTypeWebFonts._fontLoadingEventList.push(callbackFunction);
    } else if (eventName.toLowerCase() == 'inactive') {
        MonoTypeWebFonts._inActiveEventList.push(callbackFunction);
    } else if (eventName.toLowerCase() == 'active') {
        MonoTypeWebFonts._activeEventList.push(callbackFunction);
    }
};
MonoTypeWebFonts.loadFonts = function() {
    MonoTypeWebFonts.load({
        monotype: {
            reqSub: false,
            enableOtf: false,
            otfJsParentUrl: 'https://fast.fonts.net/jsapi/otjs/',
            pfL: [{
                'fontfamily': "HelveticaNeueW01-UltLt",
                contentIds: {
                    EOT: '41774233-b9da-44be-b252-6a7b612fb1c7',
                    WOFF: '4bff1fbb-b4bf-4d95-9c47-efcb14384e36',
                    WOFF2: '9baef9a5-e2af-4838-a3bc-da9d36c0bde8',
                    TTF: '7f1f2a7d-3837-4c93-b373-f03c5da3f9a1',
                    SVG: 'd9f2752a-8d82-4cf1-b82f-109c1105be7f'
                },
                enableSubsetting: false,
                enableOtf: false
            }, {
                'fontfamily': "HelveticaNeueW01-55Roma",
                contentIds: {
                    EOT: 'b7693a83-b861-4aa6-85e0-9ecf676bc4d6',
                    WOFF: 'bcf54343-d033-41ee-bbd7-2b77df3fe7ba',
                    WOFF2: 'b0868b4c-234e-47d3-bc59-41ab9de3c0db',
                    TTF: 'b0ffdcf0-26da-47fd-8485-20e4a40d4b7d',
                    SVG: 'da09f1f1-062a-45af-86e1-2bbdb3dd94f9'
                },
                enableSubsetting: false,
                enableOtf: false
            }, {
                'fontfamily': "HelveticaNeueW01-75Bold",
                contentIds: {
                    EOT: 'c07fef9e-a934-42d7-92ad-69205f2b8a00',
                    WOFF: '14ff6081-326d-4dae-b778-d7afa66166fc',
                    WOFF2: '3b303641-706e-4221-94c4-4fb491f4f8ef',
                    TTF: '8fda1e47-19be-46c7-8d83-8d4fb35572f0',
                    SVG: 'f751c8ae-1057-46d9-8d74-62592e002568'
                },
                enableSubsetting: false,
                enableOtf: false
            }, {
                'fontfamily': "HelveticaNeueW01-85Heav",
                contentIds: {
                    EOT: 'bb37f770-d450-4f24-af2b-3a81bf640315',
                    WOFF: 'a0d9d2cb-f057-4e8d-a957-27853630f58e',
                    WOFF2: '350011f3-eda3-421c-b757-87d55f1e2c04',
                    TTF: '54085041-5049-4b91-939c-49980c66abab',
                    SVG: '7a48747c-74f2-49a8-bb65-1c522d4aa618'
                },
                enableSubsetting: false,
                enableOtf: false
            }],
            selectorFontMap: {},
            ck: 'd44f19a684109620e484157daf90e8180def483b9d19dccc4e3640bffa250b28beaa6b5884da9610ebadfb8b354c7fa61eb327f7d2f56b5f453f99ba5185a31fc2400e9d24e422242cd16121eb95ed13e55c9a243d514a33ec8b1d046a13969ef5c6305141b62e9d82b57cfa0aa5e709eb75c563d56556d63f8e2ba8b0ad1736c260b71bd45700a3375070b32dff5d648054dd67',
            ec: 'true',
            fcURL: 'http://fast.fonts.net/dv2/',
            dfcURL: 'https://api2.fonts.com/FontSubsetter.ashx',
            pURL: 'https://api2.fonts.com/FontSubsetter.ashx',
            fontdataversion: 'v2',
            sO: 'True',
            ffArray: {
                safari: {
                    '3.1': 'ttf',
                    '5.1': 'woff'
                },
                msafari: {
                    '1': 'svg',
                    '4.2': 'ttf',
                    '5.1': 'woff'
                },
                chrome: {
                    '3': 'svg',
                    '4': 'ttf',
                    '5': 'woff',
                    '36': 'woff2'
                },
                opera: {
                    '10': 'ttf',
                    '11.10': 'woff',
                    '26.0': 'woff2'
                },
                msie: {
                    '4': 'eot',
                    '9': 'woff',
                    '10': 'otf'
                },
                mozilla: {
                    '3.5': 'ttf',
                    '3.6': 'woff',
                    '39.0': 'woff2'
                },
                edge: {
                    '12': 'woff'
                }
            },
            bsmcArray: {
                safari: {
                    '3.1': '2000',
                    '5.0': '1650',
                    '5.1': '15600'
                },
                msafari: {
                    '1': '15600'
                },
                chrome: {
                    '3': '15600'
                },
                opera: {
                    '10': '15600'
                },
                msie: {
                    '4': '1000',
                    '9': '3000'
                },
                mozilla: {
                    '3.5': '15600'
                },
                edge: {
                    '12': '15600'
                }
            },
            fctypeArray: {
                'ttf': '1',
                'eot': '2',
                'woff': '3',
                'svg': '11',
                'otf': '13',
                'woff2': '14'
            },
            projectId: '50622a85-3df2-45d0-8302-6ebf6cb4c9de',
            specialChar: ['%u201C', '%u201D', '%u2200', '%u2202', '%u2203', '%u2205', '%u2207', '%u2208', '%u2209', '%u220B', '%u220F', '%u2211', '%u2018', '%u2019', '%B0', '%u2026', '%u2122', '%A9', '%AE', '%u2014', '%u2013', '%A7', '%B1', '%B7', '%u2032', '%u2033', '%u20AC', '%u2248', '%u2260', '%u2264', '%u2265', '%u221A', '%u221D', '%u2220', '%u2225', '%u2227', '%u2228', '%u2229', '%u222A', '%u222B', '%u222E', '%u2234', '%u2235', '%u2236', '%u2237', '%u223D', '%u224C', '%u2261', '%u226E', '%u226F', '%u2299', '%u22A5', '%u0391', '%u0392', '%u0393', '%u0394', '%u0395', '%u0396', '%u0397', '%u0398', '%u0399', '%u039A', '%u039B', '%u039C', '%u039D', '%u039E', '%u039F', '%u03A0', '%u03A1', '%u03A3', '%u03A4', '%u03A5', '%u03A6', '%u03A7', '%u03A8', '%u03A9', '%u221E', '%u2190', '%u2191', '%u2192', '%u2193', '%u2640', '%u2642', '+', '%22', '%5C', '%23', '%26', '%3F', '%B7', '%3B', '%3A'],
            EOD: null
        },
        fontloading: function(fontFamily, fontDescription) {
            for (var i = 0; i < MonoTypeWebFonts._fontLoadingEventList.length; i++) {
                MonoTypeWebFonts._fontLoadingEventList[i].call(MonoTypeWebFonts, fontFamily, fontDescription);
            }
        },
        fontactive: function(fontFamily, fontDescription) {
            for (var i = 0; i < MonoTypeWebFonts._fontActiveEventList.length; i++) {
                MonoTypeWebFonts._fontActiveEventList[i].call(MonoTypeWebFonts, fontFamily, fontDescription);
            }
        },
        inactive: function() {
            MonoTypeWebFonts.cleanup();
            for (var i = 0; i < MonoTypeWebFonts._inActiveEventList.length; i++) {
                MonoTypeWebFonts._inActiveEventList[i].call(MonoTypeWebFonts);
            }
        },
        active: function() {
            MonoTypeWebFonts.cleanup();
            for (var i = 0; i < MonoTypeWebFonts._activeEventList.length; i++) {
                MonoTypeWebFonts._activeEventList[i].call(MonoTypeWebFonts);
            }
        }
    });
};
MonoTypeWebFonts.loadFonts();
MonoTypeWebFonts.RefreshFonts = function() {
    MonoTypeWebFonts.cleanupExecuted = false;
    if (document.getElementById('mti_stylesheet_50622a85-3df2-45d0-8302-6ebf6cb4c9de') != null) {
        var nodeToRemove1 = document.getElementById('mti_stylesheet_50622a85-3df2-45d0-8302-6ebf6cb4c9de');
        var parentNode1 = nodeToRemove1.parentNode;
        parentNode1.removeChild(nodeToRemove1);
    }
    if (document.getElementById('mti_fontface_50622a85-3df2-45d0-8302-6ebf6cb4c9de') != null) {
        var nodeToRemove2 = document.getElementById('mti_fontface_50622a85-3df2-45d0-8302-6ebf6cb4c9de');
        var parentNode2 = nodeToRemove2.parentNode;
        parentNode2.removeChild(nodeToRemove2);
    }
    MonoTypeWebFonts.loadFonts();
};
setTimeout(function() {
    MonoTypeWebFonts.cleanup();
}, 40000);