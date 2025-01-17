/*!
 * jQuery JavaScript Library v1.5.1
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Feb 23 13:55:29 2011 -0500
 */
(function (aY, H) {
    var al = aY.document;
    var a = (function () {
        var bn = function (bI, bJ) {
                return new bn.fn.init(bI, bJ, bl)
            },
            bD = aY.jQuery,
            bp = aY.$,
            bl, bH = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,
            bv = /\S/,
            br = /^\s+/,
            bm = /\s+$/,
            bq = /\d/,
            bj = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
            bw = /^[\],:{}\s]*$/,
            bF = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            by = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            bs = /(?:^|:|,)(?:\s*\[)+/g,
            bh = /(webkit)[ \/]([\w.]+)/,
            bA = /(opera)(?:.*version)?[ \/]([\w.]+)/,
            bz = /(msie) ([\w.]+)/,
            bB = /(mozilla)(?:.*? rv:([\w.]+))?/,
            bG = navigator.userAgent,
            bE, bC = false,
            bk, e = "then done fail isResolved isRejected promise".split(" "),
            bd, bu = Object.prototype.toString,
            bo = Object.prototype.hasOwnProperty,
            bi = Array.prototype.push,
            bt = Array.prototype.slice,
            bx = String.prototype.trim,
            be = Array.prototype.indexOf,
            bg = {};
        bn.fn = bn.prototype = {
            constructor: bn,
            init: function (bI, bM, bL) {
                var bK, bN, bJ, bO;
                if (!bI) {
                    return this
                }
                if (bI.nodeType) {
                    this.context = this[0] = bI;
                    this.length = 1;
                    return this
                }
                if (bI === "body" && !bM && al.body) {
                    this.context = al;
                    this[0] = al.body;
                    this.selector = "body";
                    this.length = 1;
                    return this
                }
                if (typeof bI === "string") {
                    bK = bH.exec(bI);
                    if (bK && (bK[1] || !bM)) {
                        if (bK[1]) {
                            bM = bM instanceof bn ? bM[0] : bM;
                            bO = (bM ? bM.ownerDocument || bM : al);
                            bJ = bj.exec(bI);
                            if (bJ) {
                                if (bn.isPlainObject(bM)) {
                                    bI = [al.createElement(bJ[1])];
                                    bn.fn.attr.call(bI, bM, true)
                                } else {
                                    bI = [bO.createElement(bJ[1])]
                                }
                            } else {
                                bJ = bn.buildFragment([bK[1]], [bO]);
                                bI = (bJ.cacheable ? bn.clone(bJ.fragment) : bJ.fragment).childNodes
                            }
                            return bn.merge(this, bI)
                        } else {
                            bN = al.getElementById(bK[2]);
                            if (bN && bN.parentNode) {
                                if (bN.id !== bK[2]) {
                                    return bL.find(bI)
                                }
                                this.length = 1;
                                this[0] = bN
                            }
                            this.context = al;
                            this.selector = bI;
                            return this
                        }
                    } else {
                        if (!bM || bM.jquery) {
                            return (bM || bL).find(bI)
                        } else {
                            return this.constructor(bM).find(bI)
                        }
                    }
                } else {
                    if (bn.isFunction(bI)) {
                        return bL.ready(bI)
                    }
                }
                if (bI.selector !== H) {
                    this.selector = bI.selector;
                    this.context = bI.context
                }
                return bn.makeArray(bI, this)
            },
            selector: "",
            jquery: "1.5.1",
            length: 0,
            size: function () {
                return this.length
            },
            toArray: function () {
                return bt.call(this, 0)
            },
            get: function (bI) {
                return bI == null ? this.toArray() : (bI < 0 ? this[this.length + bI] : this[bI])
            },
            pushStack: function (bJ, bL, bI) {
                var bK = this.constructor();
                if (bn.isArray(bJ)) {
                    bi.apply(bK, bJ)
                } else {
                    bn.merge(bK, bJ)
                }
                bK.prevObject = this;
                bK.context = this.context;
                if (bL === "find") {
                    bK.selector = this.selector + (this.selector ? " " : "") + bI
                } else {
                    if (bL) {
                        bK.selector = this.selector + "." + bL + "(" + bI + ")"
                    }
                }
                return bK
            },
            each: function (bJ, bI) {
                return bn.each(this, bJ, bI)
            },
            ready: function (bI) {
                bn.bindReady();
                bk.done(bI);
                return this
            },
            eq: function (bI) {
                return bI === -1 ? this.slice(bI) : this.slice(bI, +bI + 1)
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            slice: function () {
                return this.pushStack(bt.apply(this, arguments), "slice", bt.call(arguments).join(","))
            },
            map: function (bI) {
                return this.pushStack(bn.map(this, function (bK, bJ) {
                    return bI.call(bK, bJ, bK)
                }))
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: bi,
            sort: [].sort,
            splice: [].splice
        };
        bn.fn.init.prototype = bn.fn;
        bn.extend = bn.fn.extend = function () {
            var bR, bK, bI, bJ, bO, bP, bN = arguments[0] || {},
                bM = 1,
                bL = arguments.length,
                bQ = false;
            if (typeof bN === "boolean") {
                bQ = bN;
                bN = arguments[1] || {};
                bM = 2
            }
            if (typeof bN !== "object" && !bn.isFunction(bN)) {
                bN = {}
            }
            if (bL === bM) {
                bN = this;
                --bM
            }
            for (; bM < bL; bM++) {
                if ((bR = arguments[bM]) != null) {
                    for (bK in bR) {
                        bI = bN[bK];
                        bJ = bR[bK];
                        if (bN === bJ) {
                            continue
                        }
                        if (bQ && bJ && (bn.isPlainObject(bJ) || (bO = bn.isArray(bJ)))) {
                            if (bO) {
                                bO = false;
                                bP = bI && bn.isArray(bI) ? bI : []
                            } else {
                                bP = bI && bn.isPlainObject(bI) ? bI : {}
                            }
                            bN[bK] = bn.extend(bQ, bP, bJ)
                        } else {
                            if (bJ !== H) {
                                bN[bK] = bJ
                            }
                        }
                    }
                }
            }
            return bN
        };
        bn.extend({
            noConflict: function (bI) {
                aY.$ = bp;
                if (bI) {
                    aY.jQuery = bD
                }
                return bn
            },
            isReady: false,
            readyWait: 1,
            ready: function (bI) {
                if (bI === true) {
                    bn.readyWait--
                }
                if (!bn.readyWait || (bI !== true && !bn.isReady)) {
                    if (!al.body) {
                        return setTimeout(bn.ready, 1)
                    }
                    bn.isReady = true;
                    if (bI !== true && --bn.readyWait > 0) {
                        return
                    }
                    bk.resolveWith(al, [bn]);
                    if (bn.fn.trigger) {
                        bn(al).trigger("ready").unbind("ready")
                    }
                }
            },
            bindReady: function () {
                if (bC) {
                    return
                }
                bC = true;
                if (al.readyState === "complete") {
                    return setTimeout(bn.ready, 1)
                }
                if (al.addEventListener) {
                    al.addEventListener("DOMContentLoaded", bd, false);
                    aY.addEventListener("load", bn.ready, false)
                } else {
                    if (al.attachEvent) {
                        al.attachEvent("onreadystatechange", bd);
                        aY.attachEvent("onload", bn.ready);
                        var bI = false;
                        try {
                            bI = aY.frameElement == null
                        } catch (bJ) {}
                        if (al.documentElement.doScroll && bI) {
                            bf()
                        }
                    }
                }
            },
            isFunction: function (bI) {
                return bn.type(bI) === "function"
            },
            isArray: Array.isArray ||
            function (bI) {
                return bn.type(bI) === "array"
            },
            isWindow: function (bI) {
                return bI && typeof bI === "object" && "setInterval" in bI
            },
            isNaN: function (bI) {
                return bI == null || !bq.test(bI) || isNaN(bI)
            },
            type: function (bI) {
                return bI == null ? String(bI) : bg[bu.call(bI)] || "object"
            },
            isPlainObject: function (bJ) {
                if (!bJ || bn.type(bJ) !== "object" || bJ.nodeType || bn.isWindow(bJ)) {
                    return false
                }
                if (bJ.constructor && !bo.call(bJ, "constructor") && !bo.call(bJ.constructor.prototype, "isPrototypeOf")) {
                    return false
                }
                var bI;
                for (bI in bJ) {}
                return bI === H || bo.call(bJ, bI)
            },
            isEmptyObject: function (bJ) {
                for (var bI in bJ) {
                    return false
                }
                return true
            },
            error: function (bI) {
                throw bI
            },
            parseJSON: function (bI) {
                if (typeof bI !== "string" || !bI) {
                    return null
                }
                bI = bn.trim(bI);
                if (bw.test(bI.replace(bF, "@").replace(by, "]").replace(bs, ""))) {
                    return aY.JSON && aY.JSON.parse ? aY.JSON.parse(bI) : (new Function("return " + bI))()
                } else {
                    bn.error("Invalid JSON: " + bI)
                }
            },
            parseXML: function (bK, bI, bJ) {
                if (aY.DOMParser) {
                    bJ = new DOMParser();
                    bI = bJ.parseFromString(bK, "text/xml")
                } else {
                    bI = new ActiveXObject("Microsoft.XMLDOM");
                    bI.async = "false";
                    bI.loadXML(bK)
                }
                bJ = bI.documentElement;
                if (!bJ || !bJ.nodeName || bJ.nodeName === "parsererror") {
                    bn.error("Invalid XML: " + bK)
                }
                return bI
            },
            noop: function () {},
            globalEval: function (bK) {
                if (bK && bv.test(bK)) {
                    var bJ = al.head || al.getElementsByTagName("head")[0] || al.documentElement,
                        bI = al.createElement("script");
                    if (bn.support.scriptEval()) {
                        bI.appendChild(al.createTextNode(bK))
                    } else {
                        bI.text = bK
                    }
                    bJ.insertBefore(bI, bJ.firstChild);
                    bJ.removeChild(bI)
                }
            },
            nodeName: function (bJ, bI) {
                return bJ.nodeName && bJ.nodeName.toUpperCase() === bI.toUpperCase()
            },
            each: function (bL, bP, bK) {
                var bJ, bM = 0,
                    bN = bL.length,
                    bI = bN === H || bn.isFunction(bL);
                if (bK) {
                    if (bI) {
                        for (bJ in bL) {
                            if (bP.apply(bL[bJ], bK) === false) {
                                break
                            }
                        }
                    } else {
                        for (; bM < bN;) {
                            if (bP.apply(bL[bM++], bK) === false) {
                                break
                            }
                        }
                    }
                } else {
                    if (bI) {
                        for (bJ in bL) {
                            if (bP.call(bL[bJ], bJ, bL[bJ]) === false) {
                                break
                            }
                        }
                    } else {
                        for (var bO = bL[0]; bM < bN && bP.call(bO, bM, bO) !== false; bO = bL[++bM]) {}
                    }
                }
                return bL
            },
            trim: bx ?
            function (bI) {
                return bI == null ? "" : bx.call(bI)
            } : function (bI) {
                return bI == null ? "" : bI.toString().replace(br, "").replace(bm, "")
            },
            makeArray: function (bL, bJ) {
                var bI = bJ || [];
                if (bL != null) {
                    var bK = bn.type(bL);
                    if (bL.length == null || bK === "string" || bK === "function" || bK === "regexp" || bn.isWindow(bL)) {
                        bi.call(bI, bL)
                    } else {
                        bn.merge(bI, bL)
                    }
                }
                return bI
            },
            inArray: function (bK, bL) {
                if (bL.indexOf) {
                    return bL.indexOf(bK)
                }
                for (var bI = 0, bJ = bL.length; bI < bJ; bI++) {
                    if (bL[bI] === bK) {
                        return bI
                    }
                }
                return -1
            },
            merge: function (bM, bK) {
                var bL = bM.length,
                    bJ = 0;
                if (typeof bK.length === "number") {
                    for (var bI = bK.length; bJ < bI; bJ++) {
                        bM[bL++] = bK[bJ]
                    }
                } else {
                    while (bK[bJ] !== H) {
                        bM[bL++] = bK[bJ++]
                    }
                }
                bM.length = bL;
                return bM
            },
            grep: function (bJ, bO, bI) {
                var bK = [],
                    bN;
                bI = !! bI;
                for (var bL = 0, bM = bJ.length; bL < bM; bL++) {
                    bN = !! bO(bJ[bL], bL);
                    if (bI !== bN) {
                        bK.push(bJ[bL])
                    }
                }
                return bK
            },
            map: function (bJ, bO, bI) {
                var bK = [],
                    bN;
                for (var bL = 0, bM = bJ.length; bL < bM; bL++) {
                    bN = bO(bJ[bL], bL, bI);
                    if (bN != null) {
                        bK[bK.length] = bN
                    }
                }
                return bK.concat.apply([], bK)
            },
            guid: 1,
            proxy: function (bK, bJ, bI) {
                if (arguments.length === 2) {
                    if (typeof bJ === "string") {
                        bI = bK;
                        bK = bI[bJ];
                        bJ = H
                    } else {
                        if (bJ && !bn.isFunction(bJ)) {
                            bI = bJ;
                            bJ = H
                        }
                    }
                }
                if (!bJ && bK) {
                    bJ = function () {
                        return bK.apply(bI || this, arguments)
                    }
                }
                if (bK) {
                    bJ.guid = bK.guid = bK.guid || bJ.guid || bn.guid++
                }
                return bJ
            },
            access: function (bI, bQ, bO, bK, bN, bP) {
                var bJ = bI.length;
                if (typeof bQ === "object") {
                    for (var bL in bQ) {
                        bn.access(bI, bL, bQ[bL], bK, bN, bO)
                    }
                    return bI
                }
                if (bO !== H) {
                    bK = !bP && bK && bn.isFunction(bO);
                    for (var bM = 0; bM < bJ; bM++) {
                        bN(bI[bM], bQ, bK ? bO.call(bI[bM], bM, bN(bI[bM], bQ)) : bO, bP)
                    }
                    return bI
                }
                return bJ ? bN(bI[0], bQ) : H
            },
            now: function () {
                return (new Date()).getTime()
            },
            _Deferred: function () {
                var bL = [],
                    bM, bJ, bK, bI = {
                        done: function () {
                            if (!bK) {
                                var bO = arguments,
                                    bP, bS, bR, bQ, bN;
                                if (bM) {
                                    bN = bM;
                                    bM = 0
                                }
                                for (bP = 0, bS = bO.length; bP < bS; bP++) {
                                    bR = bO[bP];
                                    bQ = bn.type(bR);
                                    if (bQ === "array") {
                                        bI.done.apply(bI, bR)
                                    } else {
                                        if (bQ === "function") {
                                            bL.push(bR)
                                        }
                                    }
                                }
                                if (bN) {
                                    bI.resolveWith(bN[0], bN[1])
                                }
                            }
                            return this
                        },
                        resolveWith: function (bO, bN) {
                            if (!bK && !bM && !bJ) {
                                bJ = 1;
                                try {
                                    while (bL[0]) {
                                        bL.shift().apply(bO, bN)
                                    }
                                } catch (bP) {
                                    throw bP
                                } finally {
                                    bM = [bO, bN];
                                    bJ = 0
                                }
                            }
                            return this
                        },
                        resolve: function () {
                            bI.resolveWith(bn.isFunction(this.promise) ? this.promise() : this, arguments);
                            return this
                        },
                        isResolved: function () {
                            return !!(bJ || bM)
                        },
                        cancel: function () {
                            bK = 1;
                            bL = [];
                            return this
                        }
                    };
                return bI
            },
            Deferred: function (bJ) {
                var bI = bn._Deferred(),
                    bL = bn._Deferred(),
                    bK;
                bn.extend(bI, {
                    then: function (bN, bM) {
                        bI.done(bN).fail(bM);
                        return this
                    },
                    fail: bL.done,
                    rejectWith: bL.resolveWith,
                    reject: bL.resolve,
                    isRejected: bL.isResolved,
                    promise: function (bN) {
                        if (bN == null) {
                            if (bK) {
                                return bK
                            }
                            bK = bN = {}
                        }
                        var bM = e.length;
                        while (bM--) {
                            bN[e[bM]] = bI[e[bM]]
                        }
                        return bN
                    }
                });
                bI.done(bL.cancel).fail(bI.cancel);
                delete bI.cancel;
                if (bJ) {
                    bJ.call(bI, bI)
                }
                return bI
            },
            when: function (bJ) {
                var bO = arguments.length,
                    bI = bO <= 1 && bJ && bn.isFunction(bJ.promise) ? bJ : bn.Deferred(),
                    bM = bI.promise();
                if (bO > 1) {
                    var bN = bt.call(arguments, 0),
                        bL = bO,
                        bK = function (bP) {
                            return function (bQ) {
                                bN[bP] = arguments.length > 1 ? bt.call(arguments, 0) : bQ;
                                if (!(--bL)) {
                                    bI.resolveWith(bM, bN)
                                }
                            }
                        };
                    while ((bO--)) {
                        bJ = bN[bO];
                        if (bJ && bn.isFunction(bJ.promise)) {
                            bJ.promise().then(bK(bO), bI.reject)
                        } else {
                            --bL
                        }
                    }
                    if (!bL) {
                        bI.resolveWith(bM, bN)
                    }
                } else {
                    if (bI !== bJ) {
                        bI.resolve(bJ)
                    }
                }
                return bM
            },
            uaMatch: function (bJ) {
                bJ = bJ.toLowerCase();
                var bI = bh.exec(bJ) || bA.exec(bJ) || bz.exec(bJ) || bJ.indexOf("compatible") < 0 && bB.exec(bJ) || [];
                return {
                    browser: bI[1] || "",
                    version: bI[2] || "0"
                }
            },
            sub: function () {
                function bJ(bL, bM) {
                    return new bJ.fn.init(bL, bM)
                }
                bn.extend(true, bJ, this);
                bJ.superclass = this;
                bJ.fn = bJ.prototype = this();
                bJ.fn.constructor = bJ;
                bJ.subclass = this.subclass;
                bJ.fn.init = function bK(bL, bM) {
                    if (bM && bM instanceof bn && !(bM instanceof bJ)) {
                        bM = bJ(bM)
                    }
                    return bn.fn.init.call(this, bL, bM, bI)
                };
                bJ.fn.init.prototype = bJ.fn;
                var bI = bJ(al);
                return bJ
            },
            browser: {}
        });
        bk = bn._Deferred();
        bn.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (bJ, bI) {
            bg["[object " + bI + "]"] = bI.toLowerCase()
        });
        bE = bn.uaMatch(bG);
        if (bE.browser) {
            bn.browser[bE.browser] = true;
            bn.browser.version = bE.version
        }
        if (bn.browser.webkit) {
            bn.browser.safari = true
        }
        if (be) {
            bn.inArray = function (bI, bJ) {
                return be.call(bJ, bI)
            }
        }
        if (bv.test("\xA0")) {
            br = /^[\s\xA0]+/;
            bm = /[\s\xA0]+$/
        }
        bl = bn(al);
        if (al.addEventListener) {
            bd = function () {
                al.removeEventListener("DOMContentLoaded", bd, false);
                bn.ready()
            }
        } else {
            if (al.attachEvent) {
                bd = function () {
                    if (al.readyState === "complete") {
                        al.detachEvent("onreadystatechange", bd);
                        bn.ready()
                    }
                }
            }
        }
        function bf() {
            if (bn.isReady) {
                return
            }
            try {
                al.documentElement.doScroll("left")
            } catch (bI) {
                setTimeout(bf, 1);
                return
            }
            bn.ready()
        }
        return bn
    })();
    (function () {
        a.support = {};
        var bd = al.createElement("div");
        bd.style.display = "none";
        bd.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var bm = bd.getElementsByTagName("*"),
            bk = bd.getElementsByTagName("a")[0],
            bl = al.createElement("select"),
            be = bl.appendChild(al.createElement("option")),
            bj = bd.getElementsByTagName("input")[0];
        if (!bm || !bm.length || !bk) {
            return
        }
        a.support = {
            leadingWhitespace: bd.firstChild.nodeType === 3,
            tbody: !bd.getElementsByTagName("tbody").length,
            htmlSerialize: !! bd.getElementsByTagName("link").length,
            style: /red/.test(bk.getAttribute("style")),
            hrefNormalized: bk.getAttribute("href") === "/a",
            opacity: /^0.55$/.test(bk.style.opacity),
            cssFloat: !! bk.style.cssFloat,
            checkOn: bj.value === "on",
            optSelected: be.selected,
            deleteExpando: true,
            optDisabled: false,
            checkClone: false,
            noCloneEvent: true,
            noCloneChecked: true,
            boxModel: null,
            inlineBlockNeedsLayout: false,
            shrinkWrapBlocks: false,
            reliableHiddenOffsets: true
        };
        bj.checked = true;
        a.support.noCloneChecked = bj.cloneNode(true).checked;
        bl.disabled = true;
        a.support.optDisabled = !be.disabled;
        var bf = null;
        a.support.scriptEval = function () {
            if (bf === null) {
                var bo = al.documentElement,
                    bp = al.createElement("script"),
                    br = "script" + a.now();
                try {
                    bp.appendChild(al.createTextNode("window." + br + "=1;"))
                } catch (bq) {}
                bo.insertBefore(bp, bo.firstChild);
                if (aY[br]) {
                    bf = true;
                    delete aY[br]
                } else {
                    bf = false
                }
                bo.removeChild(bp);
                bo = bp = br = null
            }
            return bf
        };
        try {
            delete bd.test
        } catch (bh) {
            a.support.deleteExpando = false
        }
        if (!bd.addEventListener && bd.attachEvent && bd.fireEvent) {
            bd.attachEvent("onclick", function bn() {
                a.support.noCloneEvent = false;
                bd.detachEvent("onclick", bn)
            });
            bd.cloneNode(true).fireEvent("onclick")
        }
        bd = al.createElement("div");
        bd.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
        var bg = al.createDocumentFragment();
        bg.appendChild(bd.firstChild);
        a.support.checkClone = bg.cloneNode(true).cloneNode(true).lastChild.checked;
        a(function () {
            var bp = al.createElement("div"),
                e = al.getElementsByTagName("body")[0];
            if (!e) {
                return
            }
            bp.style.width = bp.style.paddingLeft = "1px";
            e.appendChild(bp);
            a.boxModel = a.support.boxModel = bp.offsetWidth === 2;
            if ("zoom" in bp.style) {
                bp.style.display = "inline";
                bp.style.zoom = 1;
                a.support.inlineBlockNeedsLayout = bp.offsetWidth === 2;
                bp.style.display = "";
                bp.innerHTML = "<div style='width:4px;'></div>";
                a.support.shrinkWrapBlocks = bp.offsetWidth !== 2
            }
            bp.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
            var bo = bp.getElementsByTagName("td");
            a.support.reliableHiddenOffsets = bo[0].offsetHeight === 0;
            bo[0].style.display = "";
            bo[1].style.display = "none";
            a.support.reliableHiddenOffsets = a.support.reliableHiddenOffsets && bo[0].offsetHeight === 0;
            bp.innerHTML = "";
            e.removeChild(bp).style.display = "none";
            bp = bo = null
        });
        var bi = function (e) {
                var bp = al.createElement("div");
                e = "on" + e;
                if (!bp.attachEvent) {
                    return true
                }
                var bo = (e in bp);
                if (!bo) {
                    bp.setAttribute(e, "return;");
                    bo = typeof bp[e] === "function"
                }
                bp = null;
                return bo
            };
        a.support.submitBubbles = bi("submit");
        a.support.changeBubbles = bi("change");
        bd = bm = bk = null
    })();
    var aE = /^(?:\{.*\}|\[.*\])$/;
    a.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (a.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: true,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: true
        },
        hasData: function (e) {
            e = e.nodeType ? a.cache[e[a.expando]] : e[a.expando];
            return !!e && !P(e)
        },
        data: function (bf, bd, bh, bg) {
            if (!a.acceptData(bf)) {
                return
            }
            var bk = a.expando,
                bj = typeof bd === "string",
                bi, bl = bf.nodeType,
                e = bl ? a.cache : bf,
                be = bl ? bf[a.expando] : bf[a.expando] && a.expando;
            if ((!be || (bg && be && !e[be][bk])) && bj && bh === H) {
                return
            }
            if (!be) {
                if (bl) {
                    bf[a.expando] = be = ++a.uuid
                } else {
                    be = a.expando
                }
            }
            if (!e[be]) {
                e[be] = {};
                if (!bl) {
                    e[be].toJSON = a.noop
                }
            }
            if (typeof bd === "object" || typeof bd === "function") {
                if (bg) {
                    e[be][bk] = a.extend(e[be][bk], bd)
                } else {
                    e[be] = a.extend(e[be], bd)
                }
            }
            bi = e[be];
            if (bg) {
                if (!bi[bk]) {
                    bi[bk] = {}
                }
                bi = bi[bk]
            }
            if (bh !== H) {
                bi[bd] = bh
            }
            if (bd === "events" && !bi[bd]) {
                return bi[bk] && bi[bk].events
            }
            return bj ? bi[bd] : bi
        },
        removeData: function (bg, be, bh) {
            if (!a.acceptData(bg)) {
                return
            }
            var bj = a.expando,
                bk = bg.nodeType,
                bd = bk ? a.cache : bg,
                bf = bk ? bg[a.expando] : a.expando;
            if (!bd[bf]) {
                return
            }
            if (be) {
                var bi = bh ? bd[bf][bj] : bd[bf];
                if (bi) {
                    delete bi[be];
                    if (!P(bi)) {
                        return
                    }
                }
            }
            if (bh) {
                delete bd[bf][bj];
                if (!P(bd[bf])) {
                    return
                }
            }
            var e = bd[bf][bj];
            if (a.support.deleteExpando || bd != aY) {
                delete bd[bf]
            } else {
                bd[bf] = null
            }
            if (e) {
                bd[bf] = {};
                if (!bk) {
                    bd[bf].toJSON = a.noop
                }
                bd[bf][bj] = e
            } else {
                if (bk) {
                    if (a.support.deleteExpando) {
                        delete bg[a.expando]
                    } else {
                        if (bg.removeAttribute) {
                            bg.removeAttribute(a.expando)
                        } else {
                            bg[a.expando] = null
                        }
                    }
                }
            }
        },
        _data: function (bd, e, be) {
            return a.data(bd, e, be, true)
        },
        acceptData: function (bd) {
            if (bd.nodeName) {
                var e = a.noData[bd.nodeName.toLowerCase()];
                if (e) {
                    return !(e === true || bd.getAttribute("classid") !== e)
                }
            }
            return true
        }
    });
    a.fn.extend({
        data: function (bg, bi) {
            var bh = null;
            if (typeof bg === "undefined") {
                if (this.length) {
                    bh = a.data(this[0]);
                    if (this[0].nodeType === 1) {
                        var e = this[0].attributes,
                            be;
                        for (var bf = 0, bd = e.length; bf < bd; bf++) {
                            be = e[bf].name;
                            if (be.indexOf("data-") === 0) {
                                be = be.substr(5);
                                aT(this[0], be, bh[be])
                            }
                        }
                    }
                }
                return bh
            } else {
                if (typeof bg === "object") {
                    return this.each(function () {
                        a.data(this, bg)
                    })
                }
            }
            var bj = bg.split(".");
            bj[1] = bj[1] ? "." + bj[1] : "";
            if (bi === H) {
                bh = this.triggerHandler("getData" + bj[1] + "!", [bj[0]]);
                if (bh === H && this.length) {
                    bh = a.data(this[0], bg);
                    bh = aT(this[0], bg, bh)
                }
                return bh === H && bj[1] ? this.data(bj[0]) : bh
            } else {
                return this.each(function () {
                    var bl = a(this),
                        bk = [bj[0], bi];
                    bl.triggerHandler("setData" + bj[1] + "!", bk);
                    a.data(this, bg, bi);
                    bl.triggerHandler("changeData" + bj[1] + "!", bk)
                })
            }
        },
        removeData: function (e) {
            return this.each(function () {
                a.removeData(this, e)
            })
        }
    });

    function aT(be, bd, bf) {
        if (bf === H && be.nodeType === 1) {
            bf = be.getAttribute("data-" + bd);
            if (typeof bf === "string") {
                try {
                    bf = bf === "true" ? true : bf === "false" ? false : bf === "null" ? null : !a.isNaN(bf) ? parseFloat(bf) : aE.test(bf) ? a.parseJSON(bf) : bf
                } catch (bg) {}
                a.data(be, bd, bf)
            } else {
                bf = H
            }
        }
        return bf
    }
    function P(bd) {
        for (var e in bd) {
            if (e !== "toJSON") {
                return false
            }
        }
        return true
    }
    a.extend({
        queue: function (bd, e, bf) {
            if (!bd) {
                return
            }
            e = (e || "fx") + "queue";
            var be = a._data(bd, e);
            if (!bf) {
                return be || []
            }
            if (!be || a.isArray(bf)) {
                be = a._data(bd, e, a.makeArray(bf))
            } else {
                be.push(bf)
            }
            return be
        },
        dequeue: function (bf, be) {
            be = be || "fx";
            var e = a.queue(bf, be),
                bd = e.shift();
            if (bd === "inprogress") {
                bd = e.shift()
            }
            if (bd) {
                if (be === "fx") {
                    e.unshift("inprogress")
                }
                bd.call(bf, function () {
                    a.dequeue(bf, be)
                })
            }
            if (!e.length) {
                a.removeData(bf, be + "queue", true)
            }
        }
    });
    a.fn.extend({
        queue: function (e, bd) {
            if (typeof e !== "string") {
                bd = e;
                e = "fx"
            }
            if (bd === H) {
                return a.queue(this[0], e)
            }
            return this.each(function (bf) {
                var be = a.queue(this, e, bd);
                if (e === "fx" && be[0] !== "inprogress") {
                    a.dequeue(this, e)
                }
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                a.dequeue(this, e)
            })
        },
        delay: function (bd, e) {
            bd = a.fx ? a.fx.speeds[bd] || bd : bd;
            e = e || "fx";
            return this.queue(e, function () {
                var be = this;
                setTimeout(function () {
                    a.dequeue(be, e)
                }, bd)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }
    });
    var aC = /[\n\t\r]/g,
        a3 = /\s+/,
        aG = /\r/g,
        a2 = /^(?:href|src|style)$/,
        f = /^(?:button|input)$/i,
        C = /^(?:button|input|object|select|textarea)$/i,
        k = /^a(?:rea)?$/i,
        Q = /^(?:radio|checkbox)$/i;
    a.props = {
        "for": "htmlFor",
        "class": "className",
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        colspan: "colSpan",
        tabindex: "tabIndex",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    a.fn.extend({
        attr: function (e, bd) {
            return a.access(this, e, bd, true, a.attr)
        },
        removeAttr: function (e, bd) {
            return this.each(function () {
                a.attr(this, e, "");
                if (this.nodeType === 1) {
                    this.removeAttribute(e)
                }
            })
        },
        addClass: function (bj) {
            if (a.isFunction(bj)) {
                return this.each(function (bm) {
                    var bl = a(this);
                    bl.addClass(bj.call(this, bm, bl.attr("class")))
                })
            }
            if (bj && typeof bj === "string") {
                var e = (bj || "").split(a3);
                for (var bf = 0, be = this.length; bf < be; bf++) {
                    var bd = this[bf];
                    if (bd.nodeType === 1) {
                        if (!bd.className) {
                            bd.className = bj
                        } else {
                            var bg = " " + bd.className + " ",
                                bi = bd.className;
                            for (var bh = 0, bk = e.length; bh < bk; bh++) {
                                if (bg.indexOf(" " + e[bh] + " ") < 0) {
                                    bi += " " + e[bh]
                                }
                            }
                            bd.className = a.trim(bi)
                        }
                    }
                }
            }
            return this
        },
        removeClass: function (bh) {
            if (a.isFunction(bh)) {
                return this.each(function (bl) {
                    var bk = a(this);
                    bk.removeClass(bh.call(this, bl, bk.attr("class")))
                })
            }
            if ((bh && typeof bh === "string") || bh === H) {
                var bi = (bh || "").split(a3);
                for (var be = 0, bd = this.length; be < bd; be++) {
                    var bg = this[be];
                    if (bg.nodeType === 1 && bg.className) {
                        if (bh) {
                            var bf = (" " + bg.className + " ").replace(aC, " ");
                            for (var bj = 0, e = bi.length; bj < e; bj++) {
                                bf = bf.replace(" " + bi[bj] + " ", " ")
                            }
                            bg.className = a.trim(bf)
                        } else {
                            bg.className = ""
                        }
                    }
                }
            }
            return this
        },
        toggleClass: function (bf, bd) {
            var be = typeof bf,
                e = typeof bd === "boolean";
            if (a.isFunction(bf)) {
                return this.each(function (bh) {
                    var bg = a(this);
                    bg.toggleClass(bf.call(this, bh, bg.attr("class"), bd), bd)
                })
            }
            return this.each(function () {
                if (be === "string") {
                    var bi, bh = 0,
                        bg = a(this),
                        bj = bd,
                        bk = bf.split(a3);
                    while ((bi = bk[bh++])) {
                        bj = e ? bj : !bg.hasClass(bi);
                        bg[bj ? "addClass" : "removeClass"](bi)
                    }
                } else {
                    if (be === "undefined" || be === "boolean") {
                        if (this.className) {
                            a._data(this, "__className__", this.className)
                        }
                        this.className = this.className || bf === false ? "" : a._data(this, "__className__") || ""
                    }
                }
            })
        },
        hasClass: function (e) {
            var bf = " " + e + " ";
            for (var be = 0, bd = this.length; be < bd; be++) {
                if ((" " + this[be].className + " ").replace(aC, " ").indexOf(bf) > -1) {
                    return true
                }
            }
            return false
        },
        val: function (bk) {
            if (!arguments.length) {
                var be = this[0];
                if (be) {
                    if (a.nodeName(be, "option")) {
                        var bd = be.attributes.value;
                        return !bd || bd.specified ? be.value : be.text
                    }
                    if (a.nodeName(be, "select")) {
                        var bi = be.selectedIndex,
                            bl = [],
                            bm = be.options,
                            bh = be.type === "select-one";
                        if (bi < 0) {
                            return null
                        }
                        for (var bf = bh ? bi : 0, bj = bh ? bi + 1 : bm.length; bf < bj; bf++) {
                            var bg = bm[bf];
                            if (bg.selected && (a.support.optDisabled ? !bg.disabled : bg.getAttribute("disabled") === null) && (!bg.parentNode.disabled || !a.nodeName(bg.parentNode, "optgroup"))) {
                                bk = a(bg).val();
                                if (bh) {
                                    return bk
                                }
                                bl.push(bk)
                            }
                        }
                        if (bh && !bl.length && bm.length) {
                            return a(bm[bi]).val()
                        }
                        return bl
                    }
                    if (Q.test(be.type) && !a.support.checkOn) {
                        return be.getAttribute("value") === null ? "on" : be.value
                    }
                    return (be.value || "").replace(aG, "")
                }
                return H
            }
            var e = a.isFunction(bk);
            return this.each(function (bp) {
                var bo = a(this),
                    bq = bk;
                if (this.nodeType !== 1) {
                    return
                }
                if (e) {
                    bq = bk.call(this, bp, bo.val())
                }
                if (bq == null) {
                    bq = ""
                } else {
                    if (typeof bq === "number") {
                        bq += ""
                    } else {
                        if (a.isArray(bq)) {
                            bq = a.map(bq, function (br) {
                                return br == null ? "" : br + ""
                            })
                        }
                    }
                }
                if (a.isArray(bq) && Q.test(this.type)) {
                    this.checked = a.inArray(bo.val(), bq) >= 0
                } else {
                    if (a.nodeName(this, "select")) {
                        var bn = a.makeArray(bq);
                        a("option", this).each(function () {
                            this.selected = a.inArray(a(this).val(), bn) >= 0
                        });
                        if (!bn.length) {
                            this.selectedIndex = -1
                        }
                    } else {
                        this.value = bq
                    }
                }
            })
        }
    });
    a.extend({
        attrFn: {
            val: true,
            css: true,
            html: true,
            text: true,
            data: true,
            width: true,
            height: true,
            offset: true
        },
        attr: function (bd, e, bi, bl) {
            if (!bd || bd.nodeType === 3 || bd.nodeType === 8 || bd.nodeType === 2) {
                return H
            }
            if (bl && e in a.attrFn) {
                return a(bd)[e](bi)
            }
            var be = bd.nodeType !== 1 || !a.isXMLDoc(bd),
                bh = bi !== H;
            e = be && a.props[e] || e;
            if (bd.nodeType === 1) {
                var bg = a2.test(e);
                if (e === "selected" && !a.support.optSelected) {
                    var bj = bd.parentNode;
                    if (bj) {
                        bj.selectedIndex;
                        if (bj.parentNode) {
                            bj.parentNode.selectedIndex
                        }
                    }
                }
                if ((e in bd || bd[e] !== H) && be && !bg) {
                    if (bh) {
                        if (e === "type" && f.test(bd.nodeName) && bd.parentNode) {
                            a.error("type property can't be changed")
                        }
                        if (bi === null) {
                            if (bd.nodeType === 1) {
                                bd.removeAttribute(e)
                            }
                        } else {
                            bd[e] = bi
                        }
                    }
                    if (a.nodeName(bd, "form") && bd.getAttributeNode(e)) {
                        return bd.getAttributeNode(e).nodeValue
                    }
                    if (e === "tabIndex") {
                        var bk = bd.getAttributeNode("tabIndex");
                        return bk && bk.specified ? bk.value : C.test(bd.nodeName) || k.test(bd.nodeName) && bd.href ? 0 : H
                    }
                    return bd[e]
                }
                if (!a.support.style && be && e === "style") {
                    if (bh) {
                        bd.style.cssText = "" + bi
                    }
                    return bd.style.cssText
                }
                if (bh) {
                    bd.setAttribute(e, "" + bi)
                }
                if (!bd.attributes[e] && (bd.hasAttribute && !bd.hasAttribute(e))) {
                    return H
                }
                var bf = !a.support.hrefNormalized && be && bg ? bd.getAttribute(e, 2) : bd.getAttribute(e);
                return bf === null ? H : bf
            }
            if (bh) {
                bd[e] = bi
            }
            return bd[e]
        }
    });
    var aP = /\.(.*)$/,
        a0 = /^(?:textarea|input|select)$/i,
        K = /\./g,
        aa = / /g,
        aw = /[^\w\s.|`]/g,
        E = function (e) {
            return e.replace(aw, "\\$&")
        };
    a.event = {
        add: function (bg, bk, br, bi) {
            if (bg.nodeType === 3 || bg.nodeType === 8) {
                return
            }
            try {
                if (a.isWindow(bg) && (bg !== aY && !bg.frameElement)) {
                    bg = aY
                }
            } catch (bl) {}
            if (br === false) {
                br = a5
            } else {
                if (!br) {
                    return
                }
            }
            var be, bp;
            if (br.handler) {
                be = br;
                br = be.handler
            }
            if (!br.guid) {
                br.guid = a.guid++
            }
            var bm = a._data(bg);
            if (!bm) {
                return
            }
            var bq = bm.events,
                bj = bm.handle;
            if (!bq) {
                bm.events = bq = {}
            }
            if (!bj) {
                bm.handle = bj = function () {
                    return typeof a !== "undefined" && !a.event.triggered ? a.event.handle.apply(bj.elem, arguments) : H
                }
            }
            bj.elem = bg;
            bk = bk.split(" ");
            var bo, bh = 0,
                bd;
            while ((bo = bk[bh++])) {
                bp = be ? a.extend({}, be) : {
                    handler: br,
                    data: bi
                };
                if (bo.indexOf(".") > -1) {
                    bd = bo.split(".");
                    bo = bd.shift();
                    bp.namespace = bd.slice(0).sort().join(".")
                } else {
                    bd = [];
                    bp.namespace = ""
                }
                bp.type = bo;
                if (!bp.guid) {
                    bp.guid = br.guid
                }
                var bf = bq[bo],
                    bn = a.event.special[bo] || {};
                if (!bf) {
                    bf = bq[bo] = [];
                    if (!bn.setup || bn.setup.call(bg, bi, bd, bj) === false) {
                        if (bg.addEventListener) {
                            bg.addEventListener(bo, bj, false)
                        } else {
                            if (bg.attachEvent) {
                                bg.attachEvent("on" + bo, bj)
                            }
                        }
                    }
                }
                if (bn.add) {
                    bn.add.call(bg, bp);
                    if (!bp.handler.guid) {
                        bp.handler.guid = br.guid
                    }
                }
                bf.push(bp);
                a.event.global[bo] = true
            }
            bg = null
        },
        global: {},
        remove: function (br, bm, be, bi) {
            if (br.nodeType === 3 || br.nodeType === 8) {
                return
            }
            if (be === false) {
                be = a5
            }
            var bu, bh, bj, bo, bp = 0,
                bf, bk, bn, bg, bl, e, bt, bq = a.hasData(br) && a._data(br),
                bd = bq && bq.events;
            if (!bq || !bd) {
                return
            }
            if (bm && bm.type) {
                be = bm.handler;
                bm = bm.type
            }
            if (!bm || typeof bm === "string" && bm.charAt(0) === ".") {
                bm = bm || "";
                for (bh in bd) {
                    a.event.remove(br, bh + bm)
                }
                return
            }
            bm = bm.split(" ");
            while ((bh = bm[bp++])) {
                bt = bh;
                e = null;
                bf = bh.indexOf(".") < 0;
                bk = [];
                if (!bf) {
                    bk = bh.split(".");
                    bh = bk.shift();
                    bn = new RegExp("(^|\\.)" + a.map(bk.slice(0).sort(), E).join("\\.(?:.*\\.)?") + "(\\.|$)")
                }
                bl = bd[bh];
                if (!bl) {
                    continue
                }
                if (!be) {
                    for (bo = 0; bo < bl.length; bo++) {
                        e = bl[bo];
                        if (bf || bn.test(e.namespace)) {
                            a.event.remove(br, bt, e.handler, bo);
                            bl.splice(bo--, 1)
                        }
                    }
                    continue
                }
                bg = a.event.special[bh] || {};
                for (bo = bi || 0; bo < bl.length; bo++) {
                    e = bl[bo];
                    if (be.guid === e.guid) {
                        if (bf || bn.test(e.namespace)) {
                            if (bi == null) {
                                bl.splice(bo--, 1)
                            }
                            if (bg.remove) {
                                bg.remove.call(br, e)
                            }
                        }
                        if (bi != null) {
                            break
                        }
                    }
                }
                if (bl.length === 0 || bi != null && bl.length === 1) {
                    if (!bg.teardown || bg.teardown.call(br, bk) === false) {
                        a.removeEvent(br, bh, bq.handle)
                    }
                    bu = null;
                    delete bd[bh]
                }
            }
            if (a.isEmptyObject(bd)) {
                var bs = bq.handle;
                if (bs) {
                    bs.elem = null
                }
                delete bq.events;
                delete bq.handle;
                if (a.isEmptyObject(bq)) {
                    a.removeData(br, H, true)
                }
            }
        },
        trigger: function (bd, bi, bf) {
            var bm = bd.type || bd,
                bh = arguments[3];
            if (!bh) {
                bd = typeof bd === "object" ? bd[a.expando] ? bd : a.extend(a.Event(bm), bd) : a.Event(bm);
                if (bm.indexOf("!") >= 0) {
                    bd.type = bm = bm.slice(0, -1);
                    bd.exclusive = true
                }
                if (!bf) {
                    bd.stopPropagation();
                    if (a.event.global[bm]) {
                        a.each(a.cache, function () {
                            var br = a.expando,
                                bq = this[br];
                            if (bq && bq.events && bq.events[bm]) {
                                a.event.trigger(bd, bi, bq.handle.elem)
                            }
                        })
                    }
                }
                if (!bf || bf.nodeType === 3 || bf.nodeType === 8) {
                    return H
                }
                bd.result = H;
                bd.target = bf;
                bi = a.makeArray(bi);
                bi.unshift(bd)
            }
            bd.currentTarget = bf;
            var bj = a._data(bf, "handle");
            if (bj) {
                bj.apply(bf, bi)
            }
            var bo = bf.parentNode || bf.ownerDocument;
            try {
                if (!(bf && bf.nodeName && a.noData[bf.nodeName.toLowerCase()])) {
                    if (bf["on" + bm] && bf["on" + bm].apply(bf, bi) === false) {
                        bd.result = false;
                        bd.preventDefault()
                    }
                }
            } catch (bn) {}
            if (!bd.isPropagationStopped() && bo) {
                a.event.trigger(bd, bi, bo, true)
            } else {
                if (!bd.isDefaultPrevented()) {
                    var be, bk = bd.target,
                        e = bm.replace(aP, ""),
                        bp = a.nodeName(bk, "a") && e === "click",
                        bl = a.event.special[e] || {};
                    if ((!bl._default || bl._default.call(bf, bd) === false) && !bp && !(bk && bk.nodeName && a.noData[bk.nodeName.toLowerCase()])) {
                        try {
                            if (bk[e]) {
                                be = bk["on" + e];
                                if (be) {
                                    bk["on" + e] = null
                                }
                                a.event.triggered = true;
                                bk[e]()
                            }
                        } catch (bg) {}
                        if (be) {
                            bk["on" + e] = be
                        }
                        a.event.triggered = false
                    }
                }
            }
        },
        handle: function (e) {
            var bl, be, bd, bn, bm, bh = [],
                bj = a.makeArray(arguments);
            e = bj[0] = a.event.fix(e || aY.event);
            e.currentTarget = this;
            bl = e.type.indexOf(".") < 0 && !e.exclusive;
            if (!bl) {
                bd = e.type.split(".");
                e.type = bd.shift();
                bh = bd.slice(0).sort();
                bn = new RegExp("(^|\\.)" + bh.join("\\.(?:.*\\.)?") + "(\\.|$)")
            }
            e.namespace = e.namespace || bh.join(".");
            bm = a._data(this, "events");
            be = (bm || {})[e.type];
            if (bm && be) {
                be = be.slice(0);
                for (var bg = 0, bf = be.length; bg < bf; bg++) {
                    var bk = be[bg];
                    if (bl || bn.test(bk.namespace)) {
                        e.handler = bk.handler;
                        e.data = bk.data;
                        e.handleObj = bk;
                        var bi = bk.handler.apply(this, bj);
                        if (bi !== H) {
                            e.result = bi;
                            if (bi === false) {
                                e.preventDefault();
                                e.stopPropagation()
                            }
                        }
                        if (e.isImmediatePropagationStopped()) {
                            break
                        }
                    }
                }
            }
            return e.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (bf) {
            if (bf[a.expando]) {
                return bf
            }
            var bd = bf;
            bf = a.Event(bd);
            for (var be = this.props.length, bh; be;) {
                bh = this.props[--be];
                bf[bh] = bd[bh]
            }
            if (!bf.target) {
                bf.target = bf.srcElement || al
            }
            if (bf.target.nodeType === 3) {
                bf.target = bf.target.parentNode
            }
            if (!bf.relatedTarget && bf.fromElement) {
                bf.relatedTarget = bf.fromElement === bf.target ? bf.toElement : bf.fromElement
            }
            if (bf.pageX == null && bf.clientX != null) {
                var bg = al.documentElement,
                    e = al.body;
                bf.pageX = bf.clientX + (bg && bg.scrollLeft || e && e.scrollLeft || 0) - (bg && bg.clientLeft || e && e.clientLeft || 0);
                bf.pageY = bf.clientY + (bg && bg.scrollTop || e && e.scrollTop || 0) - (bg && bg.clientTop || e && e.clientTop || 0)
            }
            if (bf.which == null && (bf.charCode != null || bf.keyCode != null)) {
                bf.which = bf.charCode != null ? bf.charCode : bf.keyCode
            }
            if (!bf.metaKey && bf.ctrlKey) {
                bf.metaKey = bf.ctrlKey
            }
            if (!bf.which && bf.button !== H) {
                bf.which = (bf.button & 1 ? 1 : (bf.button & 2 ? 3 : (bf.button & 4 ? 2 : 0)))
            }
            return bf
        },
        guid: 100000000,
        proxy: a.proxy,
        special: {
            ready: {
                setup: a.bindReady,
                teardown: a.noop
            },
            live: {
                add: function (e) {
                    a.event.add(this, n(e.origType, e.selector), a.extend({}, e, {
                        handler: af,
                        guid: e.handler.guid
                    }))
                },
                remove: function (e) {
                    a.event.remove(this, n(e.origType, e.selector), e)
                }
            },
            beforeunload: {
                setup: function (be, bd, e) {
                    if (a.isWindow(this)) {
                        this.onbeforeunload = e
                    }
                },
                teardown: function (bd, e) {
                    if (this.onbeforeunload === e) {
                        this.onbeforeunload = null
                    }
                }
            }
        }
    };
    a.removeEvent = al.removeEventListener ?
    function (bd, e, be) {
        if (bd.removeEventListener) {
            bd.removeEventListener(e, be, false)
        }
    } : function (bd, e, be) {
        if (bd.detachEvent) {
            bd.detachEvent("on" + e, be)
        }
    };
    a.Event = function (e) {
        if (!this.preventDefault) {
            return new a.Event(e)
        }
        if (e && e.type) {
            this.originalEvent = e;
            this.type = e.type;
            this.isDefaultPrevented = (e.defaultPrevented || e.returnValue === false || e.getPreventDefault && e.getPreventDefault()) ? h : a5
        } else {
            this.type = e
        }
        this.timeStamp = a.now();
        this[a.expando] = true
    };

    function a5() {
        return false
    }
    function h() {
        return true
    }
    a.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = h;
            var bd = this.originalEvent;
            if (!bd) {
                return
            }
            if (bd.preventDefault) {
                bd.preventDefault()
            } else {
                bd.returnValue = false
            }
        },
        stopPropagation: function () {
            this.isPropagationStopped = h;
            var bd = this.originalEvent;
            if (!bd) {
                return
            }
            if (bd.stopPropagation) {
                bd.stopPropagation()
            }
            bd.cancelBubble = true
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = h;
            this.stopPropagation()
        },
        isDefaultPrevented: a5,
        isPropagationStopped: a5,
        isImmediatePropagationStopped: a5
    };
    var Z = function (be) {
            var bd = be.relatedTarget;
            try {
                if (bd !== al && !bd.parentNode) {
                    return
                }
                while (bd && bd !== this) {
                    bd = bd.parentNode
                }
                if (bd !== this) {
                    be.type = be.data;
                    a.event.handle.apply(this, arguments)
                }
            } catch (bf) {}
        },
        aK = function (e) {
            e.type = e.data;
            a.event.handle.apply(this, arguments)
        };
    a.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (bd, e) {
        a.event.special[bd] = {
            setup: function (be) {
                a.event.add(this, e, be && be.selector ? aK : Z, bd)
            },
            teardown: function (be) {
                a.event.remove(this, e, be && be.selector ? aK : Z)
            }
        }
    });
    if (!a.support.submitBubbles) {
        a.event.special.submit = {
            setup: function (bd, e) {
                if (this.nodeName && this.nodeName.toLowerCase() !== "form") {
                    a.event.add(this, "click.specialSubmit", function (bg) {
                        var bf = bg.target,
                            be = bf.type;
                        if ((be === "submit" || be === "image") && a(bf).closest("form").length) {
                            aN("submit", this, arguments)
                        }
                    });
                    a.event.add(this, "keypress.specialSubmit", function (bg) {
                        var bf = bg.target,
                            be = bf.type;
                        if ((be === "text" || be === "password") && a(bf).closest("form").length && bg.keyCode === 13) {
                            aN("submit", this, arguments)
                        }
                    })
                } else {
                    return false
                }
            },
            teardown: function (e) {
                a.event.remove(this, ".specialSubmit")
            }
        }
    }
    if (!a.support.changeBubbles) {
        var a6, j = function (bd) {
                var e = bd.type,
                    be = bd.value;
                if (e === "radio" || e === "checkbox") {
                    be = bd.checked
                } else {
                    if (e === "select-multiple") {
                        be = bd.selectedIndex > -1 ? a.map(bd.options, function (bf) {
                            return bf.selected
                        }).join("-") : ""
                    } else {
                        if (bd.nodeName.toLowerCase() === "select") {
                            be = bd.selectedIndex
                        }
                    }
                }
                return be
            },
            X = function X(bf) {
                var bd = bf.target,
                    be, bg;
                if (!a0.test(bd.nodeName) || bd.readOnly) {
                    return
                }
                be = a._data(bd, "_change_data");
                bg = j(bd);
                if (bf.type !== "focusout" || bd.type !== "radio") {
                    a._data(bd, "_change_data", bg)
                }
                if (be === H || bg === be) {
                    return
                }
                if (be != null || bg) {
                    bf.type = "change";
                    bf.liveFired = H;
                    a.event.trigger(bf, arguments[1], bd)
                }
            };
        a.event.special.change = {
            filters: {
                focusout: X,
                beforedeactivate: X,
                click: function (bf) {
                    var be = bf.target,
                        bd = be.type;
                    if (bd === "radio" || bd === "checkbox" || be.nodeName.toLowerCase() === "select") {
                        X.call(this, bf)
                    }
                },
                keydown: function (bf) {
                    var be = bf.target,
                        bd = be.type;
                    if ((bf.keyCode === 13 && be.nodeName.toLowerCase() !== "textarea") || (bf.keyCode === 32 && (bd === "checkbox" || bd === "radio")) || bd === "select-multiple") {
                        X.call(this, bf)
                    }
                },
                beforeactivate: function (be) {
                    var bd = be.target;
                    a._data(bd, "_change_data", j(bd))
                }
            },
            setup: function (be, bd) {
                if (this.type === "file") {
                    return false
                }
                for (var e in a6) {
                    a.event.add(this, e + ".specialChange", a6[e])
                }
                return a0.test(this.nodeName)
            },
            teardown: function (e) {
                a.event.remove(this, ".specialChange");
                return a0.test(this.nodeName)
            }
        };
        a6 = a.event.special.change.filters;
        a6.focus = a6.beforeactivate
    }
    function aN(bd, bf, e) {
        var be = a.extend({}, e[0]);
        be.type = bd;
        be.originalEvent = {};
        be.liveFired = H;
        a.event.handle.call(bf, be);
        if (be.isDefaultPrevented()) {
            e[0].preventDefault()
        }
    }
    if (al.addEventListener) {
        a.each({
            focus: "focusin",
            blur: "focusout"
        }, function (be, e) {
            a.event.special[e] = {
                setup: function () {
                    this.addEventListener(be, bd, true)
                },
                teardown: function () {
                    this.removeEventListener(be, bd, true)
                }
            };

            function bd(bf) {
                bf = a.event.fix(bf);
                bf.type = e;
                return a.event.handle.call(this, bf)
            }
        })
    }
    a.each(["bind", "one"], function (bd, e) {
        a.fn[e] = function (bj, bk, bi) {
            if (typeof bj === "object") {
                for (var bg in bj) {
                    this[e](bg, bk, bj[bg], bi)
                }
                return this
            }
            if (a.isFunction(bk) || bk === false) {
                bi = bk;
                bk = H
            }
            var bh = e === "one" ? a.proxy(bi, function (bl) {
                a(this).unbind(bl, bh);
                return bi.apply(this, arguments)
            }) : bi;
            if (bj === "unload" && e !== "one") {
                this.one(bj, bk, bi)
            } else {
                for (var bf = 0, be = this.length; bf < be; bf++) {
                    a.event.add(this[bf], bj, bh, bk)
                }
            }
            return this
        }
    });
    a.fn.extend({
        unbind: function (bg, bf) {
            if (typeof bg === "object" && !bg.preventDefault) {
                for (var be in bg) {
                    this.unbind(be, bg[be])
                }
            } else {
                for (var bd = 0, e = this.length; bd < e; bd++) {
                    a.event.remove(this[bd], bg, bf)
                }
            }
            return this
        },
        delegate: function (e, bd, bf, be) {
            return this.live(bd, bf, be, e)
        },
        undelegate: function (e, bd, be) {
            if (arguments.length === 0) {
                return this.unbind("live")
            } else {
                return this.die(bd, null, be, e)
            }
        },
        trigger: function (e, bd) {
            return this.each(function () {
                a.event.trigger(e, bd, this)
            })
        },
        triggerHandler: function (e, be) {
            if (this[0]) {
                var bd = a.Event(e);
                bd.preventDefault();
                bd.stopPropagation();
                a.event.trigger(bd, be, this[0]);
                return bd.result
            }
        },
        toggle: function (be) {
            var e = arguments,
                bd = 1;
            while (bd < e.length) {
                a.proxy(be, e[bd++])
            }
            return this.click(a.proxy(be, function (bf) {
                var bg = (a._data(this, "lastToggle" + be.guid) || 0) % bd;
                a._data(this, "lastToggle" + be.guid, bg + 1);
                bf.preventDefault();
                return e[bg].apply(this, arguments) || false
            }))
        },
        hover: function (e, bd) {
            return this.mouseenter(e).mouseleave(bd || e)
        }
    });
    var aH = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    a.each(["live", "die"], function (bd, e) {
        a.fn[e] = function (bn, bk, bp, bg) {
            var bo, bl = 0,
                bm, bf, br, bi = bg || this.selector,
                be = bg ? this : a(this.context);
            if (typeof bn === "object" && !bn.preventDefault) {
                for (var bq in bn) {
                    be[e](bq, bk, bn[bq], bi)
                }
                return this
            }
            if (a.isFunction(bk)) {
                bp = bk;
                bk = H
            }
            bn = (bn || "").split(" ");
            while ((bo = bn[bl++]) != null) {
                bm = aP.exec(bo);
                bf = "";
                if (bm) {
                    bf = bm[0];
                    bo = bo.replace(aP, "")
                }
                if (bo === "hover") {
                    bn.push("mouseenter" + bf, "mouseleave" + bf);
                    continue
                }
                br = bo;
                if (bo === "focus" || bo === "blur") {
                    bn.push(aH[bo] + bf);
                    bo = bo + bf
                } else {
                    bo = (aH[bo] || bo) + bf
                }
                if (e === "live") {
                    for (var bj = 0, bh = be.length; bj < bh; bj++) {
                        a.event.add(be[bj], "live." + n(bo, bi), {
                            data: bk,
                            selector: bi,
                            handler: bp,
                            origType: bo,
                            origHandler: bp,
                            preType: br
                        })
                    }
                } else {
                    be.unbind("live." + n(bo, bi), bp)
                }
            }
            return this
        }
    });

    function af(bn) {
        var bk, bf, bt, bh, e, bp, bm, bo, bl, bs, bj, bi, br, bq = [],
            bg = [],
            bd = a._data(this, "events");
        if (bn.liveFired === this || !bd || !bd.live || bn.target.disabled || bn.button && bn.type === "click") {
            return
        }
        if (bn.namespace) {
            bi = new RegExp("(^|\\.)" + bn.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")
        }
        bn.liveFired = this;
        var be = bd.live.slice(0);
        for (bm = 0; bm < be.length; bm++) {
            e = be[bm];
            if (e.origType.replace(aP, "") === bn.type) {
                bg.push(e.selector)
            } else {
                be.splice(bm--, 1)
            }
        }
        bh = a(bn.target).closest(bg, bn.currentTarget);
        for (bo = 0, bl = bh.length; bo < bl; bo++) {
            bj = bh[bo];
            for (bm = 0; bm < be.length; bm++) {
                e = be[bm];
                if (bj.selector === e.selector && (!bi || bi.test(e.namespace)) && !bj.elem.disabled) {
                    bp = bj.elem;
                    bt = null;
                    if (e.preType === "mouseenter" || e.preType === "mouseleave") {
                        bn.type = e.preType;
                        bt = a(bn.relatedTarget).closest(e.selector)[0]
                    }
                    if (!bt || bt !== bp) {
                        bq.push({
                            elem: bp,
                            handleObj: e,
                            level: bj.level
                        })
                    }
                }
            }
        }
        for (bo = 0, bl = bq.length; bo < bl; bo++) {
            bh = bq[bo];
            if (bf && bh.level > bf) {
                break
            }
            bn.currentTarget = bh.elem;
            bn.data = bh.handleObj.data;
            bn.handleObj = bh.handleObj;
            br = bh.handleObj.origHandler.apply(bh.elem, arguments);
            if (br === false || bn.isPropagationStopped()) {
                bf = bh.level;
                if (br === false) {
                    bk = false
                }
                if (bn.isImmediatePropagationStopped()) {
                    break
                }
            }
        }
        return bk
    }
    function n(bd, e) {
        return (bd && bd !== "*" ? bd + "." : "") + e.replace(K, "`").replace(aa, "&")
    }
    a.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error").split(" "), function (bd, e) {
        a.fn[e] = function (bf, be) {
            if (be == null) {
                be = bf;
                bf = null
            }
            return arguments.length > 0 ? this.bind(e, bf, be) : this.trigger(e)
        };
        if (a.attrFn) {
            a.attrFn[e] = true
        }
    });
/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2011, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
    (function () {
        var bn = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            bo = 0,
            br = Object.prototype.toString,
            bi = false,
            bh = true,
            bp = /\\/g,
            bv = /\W/;
        [0, 0].sort(function () {
            bh = false;
            return 0
        });
        var bf = function (bA, e, bD, bE) {
                bD = bD || [];
                e = e || al;
                var bG = e;
                if (e.nodeType !== 1 && e.nodeType !== 9) {
                    return []
                }
                if (!bA || typeof bA !== "string") {
                    return bD
                }
                var bx, bI, bL, bw, bH, bK, bJ, bC, bz = true,
                    by = bf.isXML(e),
                    bB = [],
                    bF = bA;
                do {
                    bn.exec("");
                    bx = bn.exec(bF);
                    if (bx) {
                        bF = bx[3];
                        bB.push(bx[1]);
                        if (bx[2]) {
                            bw = bx[3];
                            break
                        }
                    }
                } while (bx);
                if (bB.length > 1 && bj.exec(bA)) {
                    if (bB.length === 2 && bk.relative[bB[0]]) {
                        bI = bs(bB[0] + bB[1], e)
                    } else {
                        bI = bk.relative[bB[0]] ? [e] : bf(bB.shift(), e);
                        while (bB.length) {
                            bA = bB.shift();
                            if (bk.relative[bA]) {
                                bA += bB.shift()
                            }
                            bI = bs(bA, bI)
                        }
                    }
                } else {
                    if (!bE && bB.length > 1 && e.nodeType === 9 && !by && bk.match.ID.test(bB[0]) && !bk.match.ID.test(bB[bB.length - 1])) {
                        bH = bf.find(bB.shift(), e, by);
                        e = bH.expr ? bf.filter(bH.expr, bH.set)[0] : bH.set[0]
                    }
                    if (e) {
                        bH = bE ? {
                            expr: bB.pop(),
                            set: bl(bE)
                        } : bf.find(bB.pop(), bB.length === 1 && (bB[0] === "~" || bB[0] === "+") && e.parentNode ? e.parentNode : e, by);
                        bI = bH.expr ? bf.filter(bH.expr, bH.set) : bH.set;
                        if (bB.length > 0) {
                            bL = bl(bI)
                        } else {
                            bz = false
                        }
                        while (bB.length) {
                            bK = bB.pop();
                            bJ = bK;
                            if (!bk.relative[bK]) {
                                bK = ""
                            } else {
                                bJ = bB.pop()
                            }
                            if (bJ == null) {
                                bJ = e
                            }
                            bk.relative[bK](bL, bJ, by)
                        }
                    } else {
                        bL = bB = []
                    }
                }
                if (!bL) {
                    bL = bI
                }
                if (!bL) {
                    bf.error(bK || bA)
                }
                if (br.call(bL) === "[object Array]") {
                    if (!bz) {
                        bD.push.apply(bD, bL)
                    } else {
                        if (e && e.nodeType === 1) {
                            for (bC = 0; bL[bC] != null; bC++) {
                                if (bL[bC] && (bL[bC] === true || bL[bC].nodeType === 1 && bf.contains(e, bL[bC]))) {
                                    bD.push(bI[bC])
                                }
                            }
                        } else {
                            for (bC = 0; bL[bC] != null; bC++) {
                                if (bL[bC] && bL[bC].nodeType === 1) {
                                    bD.push(bI[bC])
                                }
                            }
                        }
                    }
                } else {
                    bl(bL, bD)
                }
                if (bw) {
                    bf(bw, bG, bD, bE);
                    bf.uniqueSort(bD)
                }
                return bD
            };
        bf.uniqueSort = function (bw) {
            if (bq) {
                bi = bh;
                bw.sort(bq);
                if (bi) {
                    for (var e = 1; e < bw.length; e++) {
                        if (bw[e] === bw[e - 1]) {
                            bw.splice(e--, 1)
                        }
                    }
                }
            }
            return bw
        };
        bf.matches = function (e, bw) {
            return bf(e, null, null, bw)
        };
        bf.matchesSelector = function (e, bw) {
            return bf(bw, null, null, [e]).length > 0
        };
        bf.find = function (bC, e, bD) {
            var bB;
            if (!bC) {
                return []
            }
            for (var by = 0, bx = bk.order.length; by < bx; by++) {
                var bz, bA = bk.order[by];
                if ((bz = bk.leftMatch[bA].exec(bC))) {
                    var bw = bz[1];
                    bz.splice(1, 1);
                    if (bw.substr(bw.length - 1) !== "\\") {
                        bz[1] = (bz[1] || "").replace(bp, "");
                        bB = bk.find[bA](bz, e, bD);
                        if (bB != null) {
                            bC = bC.replace(bk.match[bA], "");
                            break
                        }
                    }
                }
            }
            if (!bB) {
                bB = typeof e.getElementsByTagName !== "undefined" ? e.getElementsByTagName("*") : []
            }
            return {
                set: bB,
                expr: bC
            }
        };
        bf.filter = function (bG, bF, bJ, bz) {
            var bB, e, bx = bG,
                bL = [],
                bD = bF,
                bC = bF && bF[0] && bf.isXML(bF[0]);
            while (bG && bF.length) {
                for (var bE in bk.filter) {
                    if ((bB = bk.leftMatch[bE].exec(bG)) != null && bB[2]) {
                        var bK, bI, bw = bk.filter[bE],
                            by = bB[1];
                        e = false;
                        bB.splice(1, 1);
                        if (by.substr(by.length - 1) === "\\") {
                            continue
                        }
                        if (bD === bL) {
                            bL = []
                        }
                        if (bk.preFilter[bE]) {
                            bB = bk.preFilter[bE](bB, bD, bJ, bL, bz, bC);
                            if (!bB) {
                                e = bK = true
                            } else {
                                if (bB === true) {
                                    continue
                                }
                            }
                        }
                        if (bB) {
                            for (var bA = 0;
                            (bI = bD[bA]) != null; bA++) {
                                if (bI) {
                                    bK = bw(bI, bB, bA, bD);
                                    var bH = bz ^ !! bK;
                                    if (bJ && bK != null) {
                                        if (bH) {
                                            e = true
                                        } else {
                                            bD[bA] = false
                                        }
                                    } else {
                                        if (bH) {
                                            bL.push(bI);
                                            e = true
                                        }
                                    }
                                }
                            }
                        }
                        if (bK !== H) {
                            if (!bJ) {
                                bD = bL
                            }
                            bG = bG.replace(bk.match[bE], "");
                            if (!e) {
                                return []
                            }
                            break
                        }
                    }
                }
                if (bG === bx) {
                    if (e == null) {
                        bf.error(bG)
                    } else {
                        break
                    }
                }
                bx = bG
            }
            return bD
        };
        bf.error = function (e) {
            throw "Syntax error, unrecognized expression: " + e
        };
        var bk = bf.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (e) {
                    return e.getAttribute("href")
                },
                type: function (e) {
                    return e.getAttribute("type")
                }
            },
            relative: {
                "+": function (bB, bw) {
                    var by = typeof bw === "string",
                        bA = by && !bv.test(bw),
                        bC = by && !bA;
                    if (bA) {
                        bw = bw.toLowerCase()
                    }
                    for (var bx = 0, e = bB.length, bz; bx < e; bx++) {
                        if ((bz = bB[bx])) {
                            while ((bz = bz.previousSibling) && bz.nodeType !== 1) {}
                            bB[bx] = bC || bz && bz.nodeName.toLowerCase() === bw ? bz || false : bz === bw
                        }
                    }
                    if (bC) {
                        bf.filter(bw, bB, true)
                    }
                },
                ">": function (bB, bw) {
                    var bA, bz = typeof bw === "string",
                        bx = 0,
                        e = bB.length;
                    if (bz && !bv.test(bw)) {
                        bw = bw.toLowerCase();
                        for (; bx < e; bx++) {
                            bA = bB[bx];
                            if (bA) {
                                var by = bA.parentNode;
                                bB[bx] = by.nodeName.toLowerCase() === bw ? by : false
                            }
                        }
                    } else {
                        for (; bx < e; bx++) {
                            bA = bB[bx];
                            if (bA) {
                                bB[bx] = bz ? bA.parentNode : bA.parentNode === bw
                            }
                        }
                        if (bz) {
                            bf.filter(bw, bB, true)
                        }
                    }
                },
                "": function (by, bw, bA) {
                    var bz, bx = bo++,
                        e = bt;
                    if (typeof bw === "string" && !bv.test(bw)) {
                        bw = bw.toLowerCase();
                        bz = bw;
                        e = bd
                    }
                    e("parentNode", bw, bx, by, bz, bA)
                },
                "~": function (by, bw, bA) {
                    var bz, bx = bo++,
                        e = bt;
                    if (typeof bw === "string" && !bv.test(bw)) {
                        bw = bw.toLowerCase();
                        bz = bw;
                        e = bd
                    }
                    e("previousSibling", bw, bx, by, bz, bA)
                }
            },
            find: {
                ID: function (bw, bx, by) {
                    if (typeof bx.getElementById !== "undefined" && !by) {
                        var e = bx.getElementById(bw[1]);
                        return e && e.parentNode ? [e] : []
                    }
                },
                NAME: function (bx, bA) {
                    if (typeof bA.getElementsByName !== "undefined") {
                        var bw = [],
                            bz = bA.getElementsByName(bx[1]);
                        for (var by = 0, e = bz.length; by < e; by++) {
                            if (bz[by].getAttribute("name") === bx[1]) {
                                bw.push(bz[by])
                            }
                        }
                        return bw.length === 0 ? null : bw
                    }
                },
                TAG: function (e, bw) {
                    if (typeof bw.getElementsByTagName !== "undefined") {
                        return bw.getElementsByTagName(e[1])
                    }
                }
            },
            preFilter: {
                CLASS: function (by, bw, bx, e, bB, bC) {
                    by = " " + by[1].replace(bp, "") + " ";
                    if (bC) {
                        return by
                    }
                    for (var bz = 0, bA;
                    (bA = bw[bz]) != null; bz++) {
                        if (bA) {
                            if (bB ^ (bA.className && (" " + bA.className + " ").replace(/[\t\n\r]/g, " ").indexOf(by) >= 0)) {
                                if (!bx) {
                                    e.push(bA)
                                }
                            } else {
                                if (bx) {
                                    bw[bz] = false
                                }
                            }
                        }
                    }
                    return false
                },
                ID: function (e) {
                    return e[1].replace(bp, "")
                },
                TAG: function (bw, e) {
                    return bw[1].replace(bp, "").toLowerCase()
                },
                CHILD: function (e) {
                    if (e[1] === "nth") {
                        if (!e[2]) {
                            bf.error(e[0])
                        }
                        e[2] = e[2].replace(/^\+|\s*/g, "");
                        var bw = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                        e[2] = (bw[1] + (bw[2] || 1)) - 0;
                        e[3] = bw[3] - 0
                    } else {
                        if (e[2]) {
                            bf.error(e[0])
                        }
                    }
                    e[0] = bo++;
                    return e
                },
                ATTR: function (bz, bw, bx, e, bA, bB) {
                    var by = bz[1] = bz[1].replace(bp, "");
                    if (!bB && bk.attrMap[by]) {
                        bz[1] = bk.attrMap[by]
                    }
                    bz[4] = (bz[4] || bz[5] || "").replace(bp, "");
                    if (bz[2] === "~=") {
                        bz[4] = " " + bz[4] + " "
                    }
                    return bz
                },
                PSEUDO: function (bz, bw, bx, e, bA) {
                    if (bz[1] === "not") {
                        if ((bn.exec(bz[3]) || "").length > 1 || /^\w/.test(bz[3])) {
                            bz[3] = bf(bz[3], null, null, bw)
                        } else {
                            var by = bf.filter(bz[3], bw, bx, true ^ bA);
                            if (!bx) {
                                e.push.apply(e, by)
                            }
                            return false
                        }
                    } else {
                        if (bk.match.POS.test(bz[0]) || bk.match.CHILD.test(bz[0])) {
                            return true
                        }
                    }
                    return bz
                },
                POS: function (e) {
                    e.unshift(true);
                    return e
                }
            },
            filters: {
                enabled: function (e) {
                    return e.disabled === false && e.type !== "hidden"
                },
                disabled: function (e) {
                    return e.disabled === true
                },
                checked: function (e) {
                    return e.checked === true
                },
                selected: function (e) {
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                    return e.selected === true
                },
                parent: function (e) {
                    return !!e.firstChild
                },
                empty: function (e) {
                    return !e.firstChild
                },
                has: function (bx, bw, e) {
                    return !!bf(e[3], bx).length
                },
                header: function (e) {
                    return (/h\d/i).test(e.nodeName)
                },
                text: function (e) {
                    return "text" === e.getAttribute("type")
                },
                radio: function (e) {
                    return "radio" === e.type
                },
                checkbox: function (e) {
                    return "checkbox" === e.type
                },
                file: function (e) {
                    return "file" === e.type
                },
                password: function (e) {
                    return "password" === e.type
                },
                submit: function (e) {
                    return "submit" === e.type
                },
                image: function (e) {
                    return "image" === e.type
                },
                reset: function (e) {
                    return "reset" === e.type
                },
                button: function (e) {
                    return "button" === e.type || e.nodeName.toLowerCase() === "button"
                },
                input: function (e) {
                    return (/input|select|textarea|button/i).test(e.nodeName)
                }
            },
            setFilters: {
                first: function (bw, e) {
                    return e === 0
                },
                last: function (bx, bw, e, by) {
                    return bw === by.length - 1
                },
                even: function (bw, e) {
                    return e % 2 === 0
                },
                odd: function (bw, e) {
                    return e % 2 === 1
                },
                lt: function (bx, bw, e) {
                    return bw < e[3] - 0
                },
                gt: function (bx, bw, e) {
                    return bw > e[3] - 0
                },
                nth: function (bx, bw, e) {
                    return e[3] - 0 === bw
                },
                eq: function (bx, bw, e) {
                    return e[3] - 0 === bw
                }
            },
            filter: {
                PSEUDO: function (bx, bC, bB, bD) {
                    var e = bC[1],
                        bw = bk.filters[e];
                    if (bw) {
                        return bw(bx, bB, bC, bD)
                    } else {
                        if (e === "contains") {
                            return (bx.textContent || bx.innerText || bf.getText([bx]) || "").indexOf(bC[3]) >= 0
                        } else {
                            if (e === "not") {
                                var by = bC[3];
                                for (var bA = 0, bz = by.length; bA < bz; bA++) {
                                    if (by[bA] === bx) {
                                        return false
                                    }
                                }
                                return true
                            } else {
                                bf.error(e)
                            }
                        }
                    }
                },
                CHILD: function (e, by) {
                    var bB = by[1],
                        bw = e;
                    switch (bB) {
                    case "only":
                    case "first":
                        while ((bw = bw.previousSibling)) {
                            if (bw.nodeType === 1) {
                                return false
                            }
                        }
                        if (bB === "first") {
                            return true
                        }
                        bw = e;
                    case "last":
                        while ((bw = bw.nextSibling)) {
                            if (bw.nodeType === 1) {
                                return false
                            }
                        }
                        return true;
                    case "nth":
                        var bx = by[2],
                            bE = by[3];
                        if (bx === 1 && bE === 0) {
                            return true
                        }
                        var bA = by[0],
                            bD = e.parentNode;
                        if (bD && (bD.sizcache !== bA || !e.nodeIndex)) {
                            var bz = 0;
                            for (bw = bD.firstChild; bw; bw = bw.nextSibling) {
                                if (bw.nodeType === 1) {
                                    bw.nodeIndex = ++bz
                                }
                            }
                            bD.sizcache = bA
                        }
                        var bC = e.nodeIndex - bE;
                        if (bx === 0) {
                            return bC === 0
                        } else {
                            return (bC % bx === 0 && bC / bx >= 0)
                        }
                    }
                },
                ID: function (bw, e) {
                    return bw.nodeType === 1 && bw.getAttribute("id") === e
                },
                TAG: function (bw, e) {
                    return (e === "*" && bw.nodeType === 1) || bw.nodeName.toLowerCase() === e
                },
                CLASS: function (bw, e) {
                    return (" " + (bw.className || bw.getAttribute("class")) + " ").indexOf(e) > -1
                },
                ATTR: function (bA, by) {
                    var bx = by[1],
                        e = bk.attrHandle[bx] ? bk.attrHandle[bx](bA) : bA[bx] != null ? bA[bx] : bA.getAttribute(bx),
                        bB = e + "",
                        bz = by[2],
                        bw = by[4];
                    return e == null ? bz === "!=" : bz === "=" ? bB === bw : bz === "*=" ? bB.indexOf(bw) >= 0 : bz === "~=" ? (" " + bB + " ").indexOf(bw) >= 0 : !bw ? bB && e !== false : bz === "!=" ? bB !== bw : bz === "^=" ? bB.indexOf(bw) === 0 : bz === "$=" ? bB.substr(bB.length - bw.length) === bw : bz === "|=" ? bB === bw || bB.substr(0, bw.length + 1) === bw + "-" : false
                },
                POS: function (bz, bw, bx, bA) {
                    var e = bw[2],
                        by = bk.setFilters[e];
                    if (by) {
                        return by(bz, bx, bw, bA)
                    }
                }
            }
        };
        var bj = bk.match.POS,
            be = function (bw, e) {
                return "\\" + (e - 0 + 1)
            };
        for (var bg in bk.match) {
            bk.match[bg] = new RegExp(bk.match[bg].source + (/(?![^\[]*\])(?![^\(]*\))/.source));
            bk.leftMatch[bg] = new RegExp(/(^(?:.|\r|\n)*?)/.source + bk.match[bg].source.replace(/\\(\d+)/g, be))
        }
        var bl = function (bw, e) {
                bw = Array.prototype.slice.call(bw, 0);
                if (e) {
                    e.push.apply(e, bw);
                    return e
                }
                return bw
            };
        try {
            Array.prototype.slice.call(al.documentElement.childNodes, 0)[0].nodeType
        } catch (bu) {
            bl = function (bz, by) {
                var bx = 0,
                    bw = by || [];
                if (br.call(bz) === "[object Array]") {
                    Array.prototype.push.apply(bw, bz)
                } else {
                    if (typeof bz.length === "number") {
                        for (var e = bz.length; bx < e; bx++) {
                            bw.push(bz[bx])
                        }
                    } else {
                        for (; bz[bx]; bx++) {
                            bw.push(bz[bx])
                        }
                    }
                }
                return bw
            }
        }
        var bq, bm;
        if (al.documentElement.compareDocumentPosition) {
            bq = function (bw, e) {
                if (bw === e) {
                    bi = true;
                    return 0
                }
                if (!bw.compareDocumentPosition || !e.compareDocumentPosition) {
                    return bw.compareDocumentPosition ? -1 : 1
                }
                return bw.compareDocumentPosition(e) & 4 ? -1 : 1
            }
        } else {
            bq = function (bD, bC) {
                var bA, bw, bx = [],
                    e = [],
                    bz = bD.parentNode,
                    bB = bC.parentNode,
                    bE = bz;
                if (bD === bC) {
                    bi = true;
                    return 0
                } else {
                    if (bz === bB) {
                        return bm(bD, bC)
                    } else {
                        if (!bz) {
                            return -1
                        } else {
                            if (!bB) {
                                return 1
                            }
                        }
                    }
                }
                while (bE) {
                    bx.unshift(bE);
                    bE = bE.parentNode
                }
                bE = bB;
                while (bE) {
                    e.unshift(bE);
                    bE = bE.parentNode
                }
                bA = bx.length;
                bw = e.length;
                for (var by = 0; by < bA && by < bw; by++) {
                    if (bx[by] !== e[by]) {
                        return bm(bx[by], e[by])
                    }
                }
                return by === bA ? bm(bD, e[by], -1) : bm(bx[by], bC, 1)
            };
            bm = function (bw, e, bx) {
                if (bw === e) {
                    return bx
                }
                var by = bw.nextSibling;
                while (by) {
                    if (by === e) {
                        return -1
                    }
                    by = by.nextSibling
                }
                return 1
            }
        }
        bf.getText = function (e) {
            var bw = "",
                by;
            for (var bx = 0; e[bx]; bx++) {
                by = e[bx];
                if (by.nodeType === 3 || by.nodeType === 4) {
                    bw += by.nodeValue
                } else {
                    if (by.nodeType !== 8) {
                        bw += bf.getText(by.childNodes)
                    }
                }
            }
            return bw
        };
        (function () {
            var bw = al.createElement("div"),
                bx = "script" + (new Date()).getTime(),
                e = al.documentElement;
            bw.innerHTML = "<a name='" + bx + "'/>";
            e.insertBefore(bw, e.firstChild);
            if (al.getElementById(bx)) {
                bk.find.ID = function (bz, bA, bB) {
                    if (typeof bA.getElementById !== "undefined" && !bB) {
                        var by = bA.getElementById(bz[1]);
                        return by ? by.id === bz[1] || typeof by.getAttributeNode !== "undefined" && by.getAttributeNode("id").nodeValue === bz[1] ? [by] : H : []
                    }
                };
                bk.filter.ID = function (bA, by) {
                    var bz = typeof bA.getAttributeNode !== "undefined" && bA.getAttributeNode("id");
                    return bA.nodeType === 1 && bz && bz.nodeValue === by
                }
            }
            e.removeChild(bw);
            e = bw = null
        })();
        (function () {
            var e = al.createElement("div");
            e.appendChild(al.createComment(""));
            if (e.getElementsByTagName("*").length > 0) {
                bk.find.TAG = function (bw, bA) {
                    var bz = bA.getElementsByTagName(bw[1]);
                    if (bw[1] === "*") {
                        var by = [];
                        for (var bx = 0; bz[bx]; bx++) {
                            if (bz[bx].nodeType === 1) {
                                by.push(bz[bx])
                            }
                        }
                        bz = by
                    }
                    return bz
                }
            }
            e.innerHTML = "<a href='#'></a>";
            if (e.firstChild && typeof e.firstChild.getAttribute !== "undefined" && e.firstChild.getAttribute("href") !== "#") {
                bk.attrHandle.href = function (bw) {
                    return bw.getAttribute("href", 2)
                }
            }
            e = null
        })();
        if (al.querySelectorAll) {
            (function () {
                var e = bf,
                    by = al.createElement("div"),
                    bx = "__sizzle__";
                by.innerHTML = "<p class='TEST'></p>";
                if (by.querySelectorAll && by.querySelectorAll(".TEST").length === 0) {
                    return
                }
                bf = function (bJ, bA, bE, bI) {
                    bA = bA || al;
                    if (!bI && !bf.isXML(bA)) {
                        var bH = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(bJ);
                        if (bH && (bA.nodeType === 1 || bA.nodeType === 9)) {
                            if (bH[1]) {
                                return bl(bA.getElementsByTagName(bJ), bE)
                            } else {
                                if (bH[2] && bk.find.CLASS && bA.getElementsByClassName) {
                                    return bl(bA.getElementsByClassName(bH[2]), bE)
                                }
                            }
                        }
                        if (bA.nodeType === 9) {
                            if (bJ === "body" && bA.body) {
                                return bl([bA.body], bE)
                            } else {
                                if (bH && bH[3]) {
                                    var bD = bA.getElementById(bH[3]);
                                    if (bD && bD.parentNode) {
                                        if (bD.id === bH[3]) {
                                            return bl([bD], bE)
                                        }
                                    } else {
                                        return bl([], bE)
                                    }
                                }
                            }
                            try {
                                return bl(bA.querySelectorAll(bJ), bE)
                            } catch (bF) {}
                        } else {
                            if (bA.nodeType === 1 && bA.nodeName.toLowerCase() !== "object") {
                                var bB = bA,
                                    bC = bA.getAttribute("id"),
                                    bz = bC || bx,
                                    bL = bA.parentNode,
                                    bK = /^\s*[+~]/.test(bJ);
                                if (!bC) {
                                    bA.setAttribute("id", bz)
                                } else {
                                    bz = bz.replace(/'/g, "\\$&")
                                }
                                if (bK && bL) {
                                    bA = bA.parentNode
                                }
                                try {
                                    if (!bK || bL) {
                                        return bl(bA.querySelectorAll("[id='" + bz + "'] " + bJ), bE)
                                    }
                                } catch (bG) {} finally {
                                    if (!bC) {
                                        bB.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                    return e(bJ, bA, bE, bI)
                };
                for (var bw in e) {
                    bf[bw] = e[bw]
                }
                by = null
            })()
        }(function () {
            var e = al.documentElement,
                bx = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector,
                bw = false;
            try {
                bx.call(al.documentElement, "[test!='']:sizzle")
            } catch (by) {
                bw = true
            }
            if (bx) {
                bf.matchesSelector = function (bz, bB) {
                    bB = bB.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!bf.isXML(bz)) {
                        try {
                            if (bw || !bk.match.PSEUDO.test(bB) && !(/!=/).test(bB)) {
                                return bx.call(bz, bB)
                            }
                        } catch (bA) {}
                    }
                    return bf(bB, null, null, [bz]).length > 0
                }
            }
        })();
        (function () {
            var e = al.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!e.getElementsByClassName || e.getElementsByClassName("e").length === 0) {
                return
            }
            e.lastChild.className = "e";
            if (e.getElementsByClassName("e").length === 1) {
                return
            }
            bk.order.splice(1, 0, "CLASS");
            bk.find.CLASS = function (bw, bx, by) {
                if (typeof bx.getElementsByClassName !== "undefined" && !by) {
                    return bx.getElementsByClassName(bw[1])
                }
            };
            e = null
        })();

        function bd(bw, bB, bA, bE, bC, bD) {
            for (var by = 0, bx = bE.length; by < bx; by++) {
                var e = bE[by];
                if (e) {
                    var bz = false;
                    e = e[bw];
                    while (e) {
                        if (e.sizcache === bA) {
                            bz = bE[e.sizset];
                            break
                        }
                        if (e.nodeType === 1 && !bD) {
                            e.sizcache = bA;
                            e.sizset = by
                        }
                        if (e.nodeName.toLowerCase() === bB) {
                            bz = e;
                            break
                        }
                        e = e[bw]
                    }
                    bE[by] = bz
                }
            }
        }
        function bt(bw, bB, bA, bE, bC, bD) {
            for (var by = 0, bx = bE.length; by < bx; by++) {
                var e = bE[by];
                if (e) {
                    var bz = false;
                    e = e[bw];
                    while (e) {
                        if (e.sizcache === bA) {
                            bz = bE[e.sizset];
                            break
                        }
                        if (e.nodeType === 1) {
                            if (!bD) {
                                e.sizcache = bA;
                                e.sizset = by
                            }
                            if (typeof bB !== "string") {
                                if (e === bB) {
                                    bz = true;
                                    break
                                }
                            } else {
                                if (bf.filter(bB, [e]).length > 0) {
                                    bz = e;
                                    break
                                }
                            }
                        }
                        e = e[bw]
                    }
                    bE[by] = bz
                }
            }
        }
        if (al.documentElement.contains) {
            bf.contains = function (bw, e) {
                return bw !== e && (bw.contains ? bw.contains(e) : true)
            }
        } else {
            if (al.documentElement.compareDocumentPosition) {
                bf.contains = function (bw, e) {
                    return !!(bw.compareDocumentPosition(e) & 16)
                }
            } else {
                bf.contains = function () {
                    return false
                }
            }
        }
        bf.isXML = function (e) {
            var bw = (e ? e.ownerDocument || e : 0).documentElement;
            return bw ? bw.nodeName !== "HTML" : false
        };
        var bs = function (e, bC) {
                var bA, by = [],
                    bz = "",
                    bx = bC.nodeType ? [bC] : bC;
                while ((bA = bk.match.PSEUDO.exec(e))) {
                    bz += bA[0];
                    e = e.replace(bk.match.PSEUDO, "")
                }
                e = bk.relative[e] ? e + "*" : e;
                for (var bB = 0, bw = bx.length; bB < bw; bB++) {
                    bf(e, bx[bB], by)
                }
                return bf.filter(bz, by)
            };
        a.find = bf;
        a.expr = bf.selectors;
        a.expr[":"] = a.expr.filters;
        a.unique = bf.uniqueSort;
        a.text = bf.getText;
        a.isXMLDoc = bf.isXML;
        a.contains = bf.contains
    })();
    var W = /Until$/,
        ai = /^(?:parents|prevUntil|prevAll)/,
        aW = /,/,
        a9 = /^.[^:#\[\.,]*$/,
        M = Array.prototype.slice,
        F = a.expr.match.POS,
        ao = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
    a.fn.extend({
        find: function (e) {
            var be = this.pushStack("", "find", e),
                bh = 0;
            for (var bf = 0, bd = this.length; bf < bd; bf++) {
                bh = be.length;
                a.find(e, this[bf], be);
                if (bf > 0) {
                    for (var bi = bh; bi < be.length; bi++) {
                        for (var bg = 0; bg < bh; bg++) {
                            if (be[bg] === be[bi]) {
                                be.splice(bi--, 1);
                                break
                            }
                        }
                    }
                }
            }
            return be
        },
        has: function (bd) {
            var e = a(bd);
            return this.filter(function () {
                for (var bf = 0, be = e.length; bf < be; bf++) {
                    if (a.contains(this, e[bf])) {
                        return true
                    }
                }
            })
        },
        not: function (e) {
            return this.pushStack(av(this, e, false), "not", e)
        },
        filter: function (e) {
            return this.pushStack(av(this, e, true), "filter", e)
        },
        is: function (e) {
            return !!e && a.filter(e, this).length > 0
        },
        closest: function (bm, bd) {
            var bj = [],
                bg, be, bl = this[0];
            if (a.isArray(bm)) {
                var bi, bf, bh = {},
                    e = 1;
                if (bl && bm.length) {
                    for (bg = 0, be = bm.length; bg < be; bg++) {
                        bf = bm[bg];
                        if (!bh[bf]) {
                            bh[bf] = a.expr.match.POS.test(bf) ? a(bf, bd || this.context) : bf
                        }
                    }
                    while (bl && bl.ownerDocument && bl !== bd) {
                        for (bf in bh) {
                            bi = bh[bf];
                            if (bi.jquery ? bi.index(bl) > -1 : a(bl).is(bi)) {
                                bj.push({
                                    selector: bf,
                                    elem: bl,
                                    level: e
                                })
                            }
                        }
                        bl = bl.parentNode;
                        e++
                    }
                }
                return bj
            }
            var bk = F.test(bm) ? a(bm, bd || this.context) : null;
            for (bg = 0, be = this.length; bg < be; bg++) {
                bl = this[bg];
                while (bl) {
                    if (bk ? bk.index(bl) > -1 : a.find.matchesSelector(bl, bm)) {
                        bj.push(bl);
                        break
                    } else {
                        bl = bl.parentNode;
                        if (!bl || !bl.ownerDocument || bl === bd) {
                            break
                        }
                    }
                }
            }
            bj = bj.length > 1 ? a.unique(bj) : bj;
            return this.pushStack(bj, "closest", bm)
        },
        index: function (e) {
            if (!e || typeof e === "string") {
                return a.inArray(this[0], e ? a(e) : this.parent().children())
            }
            return a.inArray(e.jquery ? e[0] : e, this)
        },
        add: function (e, bd) {
            var bf = typeof e === "string" ? a(e, bd) : a.makeArray(e),
                be = a.merge(this.get(), bf);
            return this.pushStack(B(bf[0]) || B(be[0]) ? be : a.unique(be))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    });

    function B(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }
    a.each({
        parent: function (bd) {
            var e = bd.parentNode;
            return e && e.nodeType !== 11 ? e : null
        },
        parents: function (e) {
            return a.dir(e, "parentNode")
        },
        parentsUntil: function (bd, e, be) {
            return a.dir(bd, "parentNode", be)
        },
        next: function (e) {
            return a.nth(e, 2, "nextSibling")
        },
        prev: function (e) {
            return a.nth(e, 2, "previousSibling")
        },
        nextAll: function (e) {
            return a.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return a.dir(e, "previousSibling")
        },
        nextUntil: function (bd, e, be) {
            return a.dir(bd, "nextSibling", be)
        },
        prevUntil: function (bd, e, be) {
            return a.dir(bd, "previousSibling", be)
        },
        siblings: function (e) {
            return a.sibling(e.parentNode.firstChild, e)
        },
        children: function (e) {
            return a.sibling(e.firstChild)
        },
        contents: function (e) {
            return a.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : a.makeArray(e.childNodes)
        }
    }, function (e, bd) {
        a.fn[e] = function (bh, be) {
            var bg = a.map(this, bd, bh),
                bf = M.call(arguments);
            if (!W.test(e)) {
                be = bh
            }
            if (be && typeof be === "string") {
                bg = a.filter(be, bg)
            }
            bg = this.length > 1 && !ao[e] ? a.unique(bg) : bg;
            if ((this.length > 1 || aW.test(be)) && ai.test(e)) {
                bg = bg.reverse()
            }
            return this.pushStack(bg, e, bf.join(","))
        }
    });
    a.extend({
        filter: function (be, e, bd) {
            if (bd) {
                be = ":not(" + be + ")"
            }
            return e.length === 1 ? a.find.matchesSelector(e[0], be) ? [e[0]] : [] : a.find.matches(be, e)
        },
        dir: function (be, bd, bg) {
            var e = [],
                bf = be[bd];
            while (bf && bf.nodeType !== 9 && (bg === H || bf.nodeType !== 1 || !a(bf).is(bg))) {
                if (bf.nodeType === 1) {
                    e.push(bf)
                }
                bf = bf[bd]
            }
            return e
        },
        nth: function (bg, e, be, bf) {
            e = e || 1;
            var bd = 0;
            for (; bg; bg = bg[be]) {
                if (bg.nodeType === 1 && ++bd === e) {
                    break
                }
            }
            return bg
        },
        sibling: function (be, bd) {
            var e = [];
            for (; be; be = be.nextSibling) {
                if (be.nodeType === 1 && be !== bd) {
                    e.push(be)
                }
            }
            return e
        }
    });

    function av(bf, be, e) {
        if (a.isFunction(be)) {
            return a.grep(bf, function (bh, bg) {
                var bi = !! be.call(bh, bg, bh);
                return bi === e
            })
        } else {
            if (be.nodeType) {
                return a.grep(bf, function (bh, bg) {
                    return (bh === be) === e
                })
            } else {
                if (typeof be === "string") {
                    var bd = a.grep(bf, function (bg) {
                        return bg.nodeType === 1
                    });
                    if (a9.test(be)) {
                        return a.filter(be, bd, !e)
                    } else {
                        be = a.filter(be, bd)
                    }
                }
            }
        }
        return a.grep(bf, function (bh, bg) {
            return (a.inArray(bh, be) >= 0) === e
        })
    }
    var ab = / jQuery\d+="(?:\d+|null)"/g,
        aj = /^\s+/,
        O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        c = /<([\w:]+)/,
        v = /<tbody/i,
        T = /<|&#?\w+;/,
        L = /<(?:script|object|embed|option|style)/i,
        m = /checked\s*(?:[^=]|=\s*.checked.)/i,
        an = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    an.optgroup = an.option;
    an.tbody = an.tfoot = an.colgroup = an.caption = an.thead;
    an.th = an.td;
    if (!a.support.htmlSerialize) {
        an._default = [1, "div<div>", "</div>"]
    }
    a.fn.extend({
        text: function (e) {
            if (a.isFunction(e)) {
                return this.each(function (be) {
                    var bd = a(this);
                    bd.text(e.call(this, be, bd.text()))
                })
            }
            if (typeof e !== "object" && e !== H) {
                return this.empty().append((this[0] && this[0].ownerDocument || al).createTextNode(e))
            }
            return a.text(this)
        },
        wrapAll: function (e) {
            if (a.isFunction(e)) {
                return this.each(function (be) {
                    a(this).wrapAll(e.call(this, be))
                })
            }
            if (this[0]) {
                var bd = a(e, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    bd.insertBefore(this[0])
                }
                bd.map(function () {
                    var be = this;
                    while (be.firstChild && be.firstChild.nodeType === 1) {
                        be = be.firstChild
                    }
                    return be
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            if (a.isFunction(e)) {
                return this.each(function (bd) {
                    a(this).wrapInner(e.call(this, bd))
                })
            }
            return this.each(function () {
                var bd = a(this),
                    be = bd.contents();
                if (be.length) {
                    be.wrapAll(e)
                } else {
                    bd.append(e)
                }
            })
        },
        wrap: function (e) {
            return this.each(function () {
                a(this).wrapAll(e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                if (!a.nodeName(this, "body")) {
                    a(this).replaceWith(this.childNodes)
                }
            }).end()
        },
        append: function () {
            return this.domManip(arguments, true, function (e) {
                if (this.nodeType === 1) {
                    this.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, true, function (e) {
                if (this.nodeType === 1) {
                    this.insertBefore(e, this.firstChild)
                }
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function (bd) {
                    this.parentNode.insertBefore(bd, this)
                })
            } else {
                if (arguments.length) {
                    var e = a(arguments[0]);
                    e.push.apply(e, this.toArray());
                    return this.pushStack(e, "before", arguments)
                }
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function (bd) {
                    this.parentNode.insertBefore(bd, this.nextSibling)
                })
            } else {
                if (arguments.length) {
                    var e = this.pushStack(this, "after", arguments);
                    e.push.apply(e, a(arguments[0]).toArray());
                    return e
                }
            }
        },
        remove: function (e, bf) {
            for (var bd = 0, be;
            (be = this[bd]) != null; bd++) {
                if (!e || a.filter(e, [be]).length) {
                    if (!bf && be.nodeType === 1) {
                        a.cleanData(be.getElementsByTagName("*"));
                        a.cleanData([be])
                    }
                    if (be.parentNode) {
                        be.parentNode.removeChild(be)
                    }
                }
            }
            return this
        },
        empty: function () {
            for (var e = 0, bd;
            (bd = this[e]) != null; e++) {
                if (bd.nodeType === 1) {
                    a.cleanData(bd.getElementsByTagName("*"))
                }
                while (bd.firstChild) {
                    bd.removeChild(bd.firstChild)
                }
            }
            return this
        },
        clone: function (bd, e) {
            bd = bd == null ? false : bd;
            e = e == null ? bd : e;
            return this.map(function () {
                return a.clone(this, bd, e)
            })
        },
        html: function (bf) {
            if (bf === H) {
                return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(ab, "") : null
            } else {
                if (typeof bf === "string" && !L.test(bf) && (a.support.leadingWhitespace || !aj.test(bf)) && !an[(c.exec(bf) || ["", ""])[1].toLowerCase()]) {
                    bf = bf.replace(O, "<$1></$2>");
                    try {
                        for (var be = 0, bd = this.length; be < bd; be++) {
                            if (this[be].nodeType === 1) {
                                a.cleanData(this[be].getElementsByTagName("*"));
                                this[be].innerHTML = bf
                            }
                        }
                    } catch (bg) {
                        this.empty().append(bf)
                    }
                } else {
                    if (a.isFunction(bf)) {
                        this.each(function (bh) {
                            var e = a(this);
                            e.html(bf.call(this, bh, e.html()))
                        })
                    } else {
                        this.empty().append(bf)
                    }
                }
            }
            return this
        },
        replaceWith: function (e) {
            if (this[0] && this[0].parentNode) {
                if (a.isFunction(e)) {
                    return this.each(function (bf) {
                        var be = a(this),
                            bd = be.html();
                        be.replaceWith(e.call(this, bf, bd))
                    })
                }
                if (typeof e !== "string") {
                    e = a(e).detach()
                }
                return this.each(function () {
                    var be = this.nextSibling,
                        bd = this.parentNode;
                    a(this).remove();
                    if (be) {
                        a(be).before(e)
                    } else {
                        a(bd).append(e)
                    }
                })
            } else {
                return this.pushStack(a(a.isFunction(e) ? e() : e), "replaceWith", e)
            }
        },
        detach: function (e) {
            return this.remove(e, true)
        },
        domManip: function (bj, bn, bm) {
            var bf, bg, bi, bl, bk = bj[0],
                bd = [];
            if (!a.support.checkClone && arguments.length === 3 && typeof bk === "string" && m.test(bk)) {
                return this.each(function () {
                    a(this).domManip(bj, bn, bm, true)
                })
            }
            if (a.isFunction(bk)) {
                return this.each(function (bp) {
                    var bo = a(this);
                    bj[0] = bk.call(this, bp, bn ? bo.html() : H);
                    bo.domManip(bj, bn, bm)
                })
            }
            if (this[0]) {
                bl = bk && bk.parentNode;
                if (a.support.parentNode && bl && bl.nodeType === 11 && bl.childNodes.length === this.length) {
                    bf = {
                        fragment: bl
                    }
                } else {
                    bf = a.buildFragment(bj, this, bd)
                }
                bi = bf.fragment;
                if (bi.childNodes.length === 1) {
                    bg = bi = bi.firstChild
                } else {
                    bg = bi.firstChild
                }
                if (bg) {
                    bn = bn && a.nodeName(bg, "tr");
                    for (var be = 0, e = this.length, bh = e - 1; be < e; be++) {
                        bm.call(bn ? aX(this[be], bg) : this[be], bf.cacheable || (e > 1 && be < bh) ? a.clone(bi, true, true) : bi)
                    }
                }
                if (bd.length) {
                    a.each(bd, a8)
                }
            }
            return this
        }
    });

    function aX(e, bd) {
        return a.nodeName(e, "table") ? (e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody"))) : e
    }
    function s(e, bj) {
        if (bj.nodeType !== 1 || !a.hasData(e)) {
            return
        }
        var bi = a.expando,
            bf = a.data(e),
            bg = a.data(bj, bf);
        if ((bf = bf[bi])) {
            var bk = bf.events;
            bg = bg[bi] = a.extend({}, bf);
            if (bk) {
                delete bg.handle;
                bg.events = {};
                for (var bh in bk) {
                    for (var be = 0, bd = bk[bh].length; be < bd; be++) {
                        a.event.add(bj, bh + (bk[bh][be].namespace ? "." : "") + bk[bh][be].namespace, bk[bh][be], bk[bh][be].data)
                    }
                }
            }
        }
    }
    function ac(bd, e) {
        if (e.nodeType !== 1) {
            return
        }
        var be = e.nodeName.toLowerCase();
        e.clearAttributes();
        e.mergeAttributes(bd);
        if (be === "object") {
            e.outerHTML = bd.outerHTML
        } else {
            if (be === "input" && (bd.type === "checkbox" || bd.type === "radio")) {
                if (bd.checked) {
                    e.defaultChecked = e.checked = bd.checked
                }
                if (e.value !== bd.value) {
                    e.value = bd.value
                }
            } else {
                if (be === "option") {
                    e.selected = bd.defaultSelected
                } else {
                    if (be === "input" || be === "textarea") {
                        e.defaultValue = bd.defaultValue
                    }
                }
            }
        }
        e.removeAttribute(a.expando)
    }
    a.buildFragment = function (bh, bf, bd) {
        var bg, e, be, bi = (bf && bf[0] ? bf[0].ownerDocument || bf[0] : al);
        if (bh.length === 1 && typeof bh[0] === "string" && bh[0].length < 512 && bi === al && bh[0].charAt(0) === "<" && !L.test(bh[0]) && (a.support.checkClone || !m.test(bh[0]))) {
            e = true;
            be = a.fragments[bh[0]];
            if (be) {
                if (be !== 1) {
                    bg = be
                }
            }
        }
        if (!bg) {
            bg = bi.createDocumentFragment();
            a.clean(bh, bi, bg, bd)
        }
        if (e) {
            a.fragments[bh[0]] = be ? bg : 1
        }
        return {
            fragment: bg,
            cacheable: e
        }
    };
    a.fragments = {};
    a.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, bd) {
        a.fn[e] = function (be) {
            var bh = [],
                bk = a(be),
                bj = this.length === 1 && this[0].parentNode;
            if (bj && bj.nodeType === 11 && bj.childNodes.length === 1 && bk.length === 1) {
                bk[bd](this[0]);
                return this
            } else {
                for (var bi = 0, bf = bk.length; bi < bf; bi++) {
                    var bg = (bi > 0 ? this.clone(true) : this).get();
                    a(bk[bi])[bd](bg);
                    bh = bh.concat(bg)
                }
                return this.pushStack(bh, e, bk.selector)
            }
        }
    });

    function a1(e) {
        if ("getElementsByTagName" in e) {
            return e.getElementsByTagName("*")
        } else {
            if ("querySelectorAll" in e) {
                return e.querySelectorAll("*")
            } else {
                return []
            }
        }
    }
    a.extend({
        clone: function (bg, bi, be) {
            var bh = bg.cloneNode(true),
                e, bd, bf;
            if ((!a.support.noCloneEvent || !a.support.noCloneChecked) && (bg.nodeType === 1 || bg.nodeType === 11) && !a.isXMLDoc(bg)) {
                ac(bg, bh);
                e = a1(bg);
                bd = a1(bh);
                for (bf = 0; e[bf]; ++bf) {
                    ac(e[bf], bd[bf])
                }
            }
            if (bi) {
                s(bg, bh);
                if (be) {
                    e = a1(bg);
                    bd = a1(bh);
                    for (bf = 0; e[bf]; ++bf) {
                        s(e[bf], bd[bf])
                    }
                }
            }
            return bh
        },
        clean: function (be, bg, bn, bi) {
            bg = bg || al;
            if (typeof bg.createElement === "undefined") {
                bg = bg.ownerDocument || bg[0] && bg[0].ownerDocument || al
            }
            var bo = [];
            for (var bm = 0, bh;
            (bh = be[bm]) != null; bm++) {
                if (typeof bh === "number") {
                    bh += ""
                }
                if (!bh) {
                    continue
                }
                if (typeof bh === "string" && !T.test(bh)) {
                    bh = bg.createTextNode(bh)
                } else {
                    if (typeof bh === "string") {
                        bh = bh.replace(O, "<$1></$2>");
                        var bp = (c.exec(bh) || ["", ""])[1].toLowerCase(),
                            bf = an[bp] || an._default,
                            bl = bf[0],
                            bd = bg.createElement("div");
                        bd.innerHTML = bf[1] + bh + bf[2];
                        while (bl--) {
                            bd = bd.lastChild
                        }
                        if (!a.support.tbody) {
                            var e = v.test(bh),
                                bk = bp === "table" && !e ? bd.firstChild && bd.firstChild.childNodes : bf[1] === "<table>" && !e ? bd.childNodes : [];
                            for (var bj = bk.length - 1; bj >= 0; --bj) {
                                if (a.nodeName(bk[bj], "tbody") && !bk[bj].childNodes.length) {
                                    bk[bj].parentNode.removeChild(bk[bj])
                                }
                            }
                        }
                        if (!a.support.leadingWhitespace && aj.test(bh)) {
                            bd.insertBefore(bg.createTextNode(aj.exec(bh)[0]), bd.firstChild)
                        }
                        bh = bd.childNodes
                    }
                }
                if (bh.nodeType) {
                    bo.push(bh)
                } else {
                    bo = a.merge(bo, bh)
                }
            }
            if (bn) {
                for (bm = 0; bo[bm]; bm++) {
                    if (bi && a.nodeName(bo[bm], "script") && (!bo[bm].type || bo[bm].type.toLowerCase() === "text/javascript")) {
                        bi.push(bo[bm].parentNode ? bo[bm].parentNode.removeChild(bo[bm]) : bo[bm])
                    } else {
                        if (bo[bm].nodeType === 1) {
                            bo.splice.apply(bo, [bm + 1, 0].concat(a.makeArray(bo[bm].getElementsByTagName("script"))))
                        }
                        bn.appendChild(bo[bm])
                    }
                }
            }
            return bo
        },
        cleanData: function (bd) {
            var bg, be, e = a.cache,
                bl = a.expando,
                bj = a.event.special,
                bi = a.support.deleteExpando;
            for (var bh = 0, bf;
            (bf = bd[bh]) != null; bh++) {
                if (bf.nodeName && a.noData[bf.nodeName.toLowerCase()]) {
                    continue
                }
                be = bf[a.expando];
                if (be) {
                    bg = e[be] && e[be][bl];
                    if (bg && bg.events) {
                        for (var bk in bg.events) {
                            if (bj[bk]) {
                                a.event.remove(bf, bk)
                            } else {
                                a.removeEvent(bf, bk, bg.handle)
                            }
                        }
                        if (bg.handle) {
                            bg.handle.elem = null
                        }
                    }
                    if (bi) {
                        delete bf[a.expando]
                    } else {
                        if (bf.removeAttribute) {
                            bf.removeAttribute(a.expando)
                        }
                    }
                    delete e[be]
                }
            }
        }
    });

    function a8(e, bd) {
        if (bd.src) {
            a.ajax({
                url: bd.src,
                async: false,
                dataType: "script"
            })
        } else {
            a.globalEval(bd.text || bd.textContent || bd.innerHTML || "")
        }
        if (bd.parentNode) {
            bd.parentNode.removeChild(bd)
        }
    }
    var ae = /alpha\([^)]*\)/i,
        ak = /opacity=([^)]*)/,
        aM = /-([a-z])/ig,
        y = /([A-Z])/g,
        aZ = /^-?\d+(?:px)?$/i,
        a7 = /^-?\d/,
        aV = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ag = ["Left", "Right"],
        aR = ["Top", "Bottom"],
        U, ay, aL, l = function (e, bd) {
            return bd.toUpperCase()
        };
    a.fn.css = function (e, bd) {
        if (arguments.length === 2 && bd === H) {
            return this
        }
        return a.access(this, e, bd, true, function (bf, be, bg) {
            return bg !== H ? a.style(bf, be, bg) : a.css(bf, be)
        })
    };
    a.extend({
        cssHooks: {
            opacity: {
                get: function (be, bd) {
                    if (bd) {
                        var e = U(be, "opacity", "opacity");
                        return e === "" ? "1" : e
                    } else {
                        return be.style.opacity
                    }
                }
            }
        },
        cssNumber: {
            zIndex: true,
            fontWeight: true,
            opacity: true,
            zoom: true,
            lineHeight: true
        },
        cssProps: {
            "float": a.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (bf, be, bk, bg) {
            if (!bf || bf.nodeType === 3 || bf.nodeType === 8 || !bf.style) {
                return
            }
            var bj, bh = a.camelCase(be),
                bd = bf.style,
                bl = a.cssHooks[bh];
            be = a.cssProps[bh] || bh;
            if (bk !== H) {
                if (typeof bk === "number" && isNaN(bk) || bk == null) {
                    return
                }
                if (typeof bk === "number" && !a.cssNumber[bh]) {
                    bk += "px"
                }
                if (!bl || !("set" in bl) || (bk = bl.set(bf, bk)) !== H) {
                    try {
                        bd[be] = bk
                    } catch (bi) {}
                }
            } else {
                if (bl && "get" in bl && (bj = bl.get(bf, false, bg)) !== H) {
                    return bj
                }
                return bd[be]
            }
        },
        css: function (bh, bg, bd) {
            var bf, be = a.camelCase(bg),
                e = a.cssHooks[be];
            bg = a.cssProps[be] || be;
            if (e && "get" in e && (bf = e.get(bh, true, bd)) !== H) {
                return bf
            } else {
                if (U) {
                    return U(bh, bg, be)
                }
            }
        },
        swap: function (bf, be, bg) {
            var e = {};
            for (var bd in be) {
                e[bd] = bf.style[bd];
                bf.style[bd] = be[bd]
            }
            bg.call(bf);
            for (bd in be) {
                bf.style[bd] = e[bd]
            }
        },
        camelCase: function (e) {
            return e.replace(aM, l)
        }
    });
    a.curCSS = a.css;
    a.each(["height", "width"], function (bd, e) {
        a.cssHooks[e] = {
            get: function (bg, bf, be) {
                var bh;
                if (bf) {
                    if (bg.offsetWidth !== 0) {
                        bh = o(bg, e, be)
                    } else {
                        a.swap(bg, aV, function () {
                            bh = o(bg, e, be)
                        })
                    }
                    if (bh <= 0) {
                        bh = U(bg, e, e);
                        if (bh === "0px" && aL) {
                            bh = aL(bg, e, e)
                        }
                        if (bh != null) {
                            return bh === "" || bh === "auto" ? "0px" : bh
                        }
                    }
                    if (bh < 0 || bh == null) {
                        bh = bg.style[e];
                        return bh === "" || bh === "auto" ? "0px" : bh
                    }
                    return typeof bh === "string" ? bh : bh + "px"
                }
            },
            set: function (be, bf) {
                if (aZ.test(bf)) {
                    bf = parseFloat(bf);
                    if (bf >= 0) {
                        return bf + "px"
                    }
                } else {
                    return bf
                }
            }
        }
    });
    if (!a.support.opacity) {
        a.cssHooks.opacity = {
            get: function (bd, e) {
                return ak.test((e && bd.currentStyle ? bd.currentStyle.filter : bd.style.filter) || "") ? (parseFloat(RegExp.$1) / 100) + "" : e ? "1" : ""
            },
            set: function (bf, bg) {
                var be = bf.style;
                be.zoom = 1;
                var e = a.isNaN(bg) ? "" : "alpha(opacity=" + bg * 100 + ")",
                    bd = be.filter || "";
                be.filter = ae.test(bd) ? bd.replace(ae, e) : be.filter + " " + e
            }
        }
    }
    if (al.defaultView && al.defaultView.getComputedStyle) {
        ay = function (bh, e, bf) {
            var be, bg, bd;
            bf = bf.replace(y, "-$1").toLowerCase();
            if (!(bg = bh.ownerDocument.defaultView)) {
                return H
            }
            if ((bd = bg.getComputedStyle(bh, null))) {
                be = bd.getPropertyValue(bf);
                if (be === "" && !a.contains(bh.ownerDocument.documentElement, bh)) {
                    be = a.style(bh, bf)
                }
            }
            return be
        }
    }
    if (al.documentElement.currentStyle) {
        aL = function (bg, be) {
            var bh, bd = bg.currentStyle && bg.currentStyle[be],
                e = bg.runtimeStyle && bg.runtimeStyle[be],
                bf = bg.style;
            if (!aZ.test(bd) && a7.test(bd)) {
                bh = bf.left;
                if (e) {
                    bg.runtimeStyle.left = bg.currentStyle.left
                }
                bf.left = be === "fontSize" ? "1em" : (bd || 0);
                bd = bf.pixelLeft + "px";
                bf.left = bh;
                if (e) {
                    bg.runtimeStyle.left = e
                }
            }
            return bd === "" ? "auto" : bd
        }
    }
    U = ay || aL;

    function o(be, bd, e) {
        var bg = bd === "width" ? ag : aR,
            bf = bd === "width" ? be.offsetWidth : be.offsetHeight;
        if (e === "border") {
            return bf
        }
        a.each(bg, function () {
            if (!e) {
                bf -= parseFloat(a.css(be, "padding" + this)) || 0
            }
            if (e === "margin") {
                bf += parseFloat(a.css(be, "margin" + this)) || 0
            } else {
                bf -= parseFloat(a.css(be, "border" + this + "Width")) || 0
            }
        });
        return bf
    }
    if (a.expr && a.expr.filters) {
        a.expr.filters.hidden = function (be) {
            var bd = be.offsetWidth,
                e = be.offsetHeight;
            return (bd === 0 && e === 0) || (!a.support.reliableHiddenOffsets && (be.style.display || a.css(be, "display")) === "none")
        };
        a.expr.filters.visible = function (e) {
            return !a.expr.filters.hidden(e)
        }
    }
    var i = /%20/g,
        ah = /\[\]$/,
        bc = /\r?\n/g,
        ba = /#.*$/,
        ar = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        aO = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        aB = /(?:^file|^widget|\-extension):$/,
        aD = /^(?:GET|HEAD)$/,
        b = /^\/\//,
        I = /\?/,
        aU = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        p = /^(?:select|textarea)/i,
        g = /\s+/,
        bb = /([?&])_=[^&]*/,
        R = /(^|\-)([a-z])/g,
        aJ = function (bd, e, be) {
            return e + be.toUpperCase()
        },
        G = /^([\w\+\.\-]+:)\/\/([^\/?#:]*)(?::(\d+))?/,
        z = a.fn.load,
        V = {},
        q = {},
        au, r;
    try {
        au = al.location.href
    } catch (am) {
        au = al.createElement("a");
        au.href = "";
        au = au.href
    }
    r = G.exec(au.toLowerCase());

    function d(e) {
        return function (bg, bi) {
            if (typeof bg !== "string") {
                bi = bg;
                bg = "*"
            }
            if (a.isFunction(bi)) {
                var bf = bg.toLowerCase().split(g),
                    be = 0,
                    bh = bf.length,
                    bd, bj, bk;
                for (; be < bh; be++) {
                    bd = bf[be];
                    bk = /^\+/.test(bd);
                    if (bk) {
                        bd = bd.substr(1) || "*"
                    }
                    bj = e[bd] = e[bd] || [];
                    bj[bk ? "unshift" : "push"](bi)
                }
            }
        }
    }
    function aI(bd, bm, bh, bl, bj, bf) {
        bj = bj || bm.dataTypes[0];
        bf = bf || {};
        bf[bj] = true;
        var bi = bd[bj],
            be = 0,
            e = bi ? bi.length : 0,
            bg = (bd === V),
            bk;
        for (; be < e && (bg || !bk); be++) {
            bk = bi[be](bm, bh, bl);
            if (typeof bk === "string") {
                if (!bg || bf[bk]) {
                    bk = H
                } else {
                    bm.dataTypes.unshift(bk);
                    bk = aI(bd, bm, bh, bl, bk, bf)
                }
            }
        }
        if ((bg || !bk) && !bf["*"]) {
            bk = aI(bd, bm, bh, bl, "*", bf)
        }
        return bk
    }
    a.fn.extend({
        load: function (be, bh, bi) {
            if (typeof be !== "string" && z) {
                return z.apply(this, arguments)
            } else {
                if (!this.length) {
                    return this
                }
            }
            var bg = be.indexOf(" ");
            if (bg >= 0) {
                var e = be.slice(bg, be.length);
                be = be.slice(0, bg)
            }
            var bf = "GET";
            if (bh) {
                if (a.isFunction(bh)) {
                    bi = bh;
                    bh = H
                } else {
                    if (typeof bh === "object") {
                        bh = a.param(bh, a.ajaxSettings.traditional);
                        bf = "POST"
                    }
                }
            }
            var bd = this;
            a.ajax({
                url: be,
                type: bf,
                dataType: "html",
                data: bh,
                complete: function (bk, bj, bl) {
                    bl = bk.responseText;
                    if (bk.isResolved()) {
                        bk.done(function (bm) {
                            bl = bm
                        });
                        bd.html(e ? a("<div>").append(bl.replace(aU, "")).find(e) : bl)
                    }
                    if (bi) {
                        bd.each(bi, [bl, bj, bk])
                    }
                }
            });
            return this
        },
        serialize: function () {
            return a.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? a.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || p.test(this.nodeName) || aO.test(this.type))
            }).map(function (e, bd) {
                var be = a(this).val();
                return be == null ? null : a.isArray(be) ? a.map(be, function (bg, bf) {
                    return {
                        name: bd.name,
                        value: bg.replace(bc, "\r\n")
                    }
                }) : {
                    name: bd.name,
                    value: be.replace(bc, "\r\n")
                }
            }).get()
        }
    });
    a.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, bd) {
        a.fn[bd] = function (be) {
            return this.bind(bd, be)
        }
    });
    a.each(["get", "post"], function (e, bd) {
        a[bd] = function (be, bg, bh, bf) {
            if (a.isFunction(bg)) {
                bf = bf || bh;
                bh = bg;
                bg = H
            }
            return a.ajax({
                type: bd,
                url: be,
                data: bg,
                success: bh,
                dataType: bf
            })
        }
    });
    a.extend({
        getScript: function (e, bd) {
            return a.get(e, H, bd, "script")
        },
        getJSON: function (e, bd, be) {
            return a.get(e, bd, be, "json")
        },
        ajaxSetup: function (be, e) {
            if (!e) {
                e = be;
                be = a.extend(true, a.ajaxSettings, e)
            } else {
                a.extend(true, be, a.ajaxSettings, e)
            }
            for (var bd in {
                context: 1,
                url: 1
            }) {
                if (bd in e) {
                    be[bd] = e[bd]
                } else {
                    if (bd in a.ajaxSettings) {
                        be[bd] = a.ajaxSettings[bd]
                    }
                }
            }
            return be
        },
        ajaxSettings: {
            url: au,
            isLocal: aB.test(r[1]),
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": "*/*"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": aY.String,
                "text html": true,
                "text json": a.parseJSON,
                "text xml": a.parseXML
            }
        },
        ajaxPrefilter: d(V),
        ajaxTransport: d(q),
        ajax: function (bh, bf) {
            if (typeof bh === "object") {
                bf = bh;
                bh = H
            }
            bf = bf || {};
            var bl = a.ajaxSetup({}, bf),
                bz = bl.context || bl,
                bo = bz !== bl && (bz.nodeType || bz instanceof a) ? a(bz) : a.event,
                by = a.Deferred(),
                bv = a._Deferred(),
                bj = bl.statusCode || {},
                bk, bp = {},
                bx, bg, bt, bm, bq, bi = 0,
                be, bs, br = {
                    readyState: 0,
                    setRequestHeader: function (e, bA) {
                        if (!bi) {
                            bp[e.toLowerCase().replace(R, aJ)] = bA
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return bi === 2 ? bx : null
                    },
                    getResponseHeader: function (bA) {
                        var e;
                        if (bi === 2) {
                            if (!bg) {
                                bg = {};
                                while ((e = ar.exec(bx))) {
                                    bg[e[1].toLowerCase()] = e[2]
                                }
                            }
                            e = bg[bA.toLowerCase()]
                        }
                        return e === H ? null : e
                    },
                    overrideMimeType: function (e) {
                        if (!bi) {
                            bl.mimeType = e
                        }
                        return this
                    },
                    abort: function (e) {
                        e = e || "abort";
                        if (bt) {
                            bt.abort(e)
                        }
                        bn(0, e);
                        return this
                    }
                };

            function bn(bF, bD, bG, bC) {
                if (bi === 2) {
                    return
                }
                bi = 2;
                if (bm) {
                    clearTimeout(bm)
                }
                bt = H;
                bx = bC || "";
                br.readyState = bF ? 4 : 0;
                var bA, bK, bJ, bE = bG ? a4(bl, br, bG) : H,
                    bB, bI;
                if (bF >= 200 && bF < 300 || bF === 304) {
                    if (bl.ifModified) {
                        if ((bB = br.getResponseHeader("Last-Modified"))) {
                            a.lastModified[bk] = bB
                        }
                        if ((bI = br.getResponseHeader("Etag"))) {
                            a.etag[bk] = bI
                        }
                    }
                    if (bF === 304) {
                        bD = "notmodified";
                        bA = true
                    } else {
                        try {
                            bK = D(bl, bE);
                            bD = "success";
                            bA = true
                        } catch (bH) {
                            bD = "parsererror";
                            bJ = bH
                        }
                    }
                } else {
                    bJ = bD;
                    if (!bD || bF) {
                        bD = "error";
                        if (bF < 0) {
                            bF = 0
                        }
                    }
                }
                br.status = bF;
                br.statusText = bD;
                if (bA) {
                    by.resolveWith(bz, [bK, bD, br])
                } else {
                    by.rejectWith(bz, [br, bD, bJ])
                }
                br.statusCode(bj);
                bj = H;
                if (be) {
                    bo.trigger("ajax" + (bA ? "Success" : "Error"), [br, bl, bA ? bK : bJ])
                }
                bv.resolveWith(bz, [br, bD]);
                if (be) {
                    bo.trigger("ajaxComplete", [br, bl]);
                    if (!(--a.active)) {
                        a.event.trigger("ajaxStop")
                    }
                }
            }
            by.promise(br);
            br.success = br.done;
            br.error = br.fail;
            br.complete = bv.done;
            br.statusCode = function (bA) {
                if (bA) {
                    var e;
                    if (bi < 2) {
                        for (e in bA) {
                            bj[e] = [bj[e], bA[e]]
                        }
                    } else {
                        e = bA[br.status];
                        br.then(e, e)
                    }
                }
                return this
            };
            bl.url = ((bh || bl.url) + "").replace(ba, "").replace(b, r[1] + "//");
            bl.dataTypes = a.trim(bl.dataType || "*").toLowerCase().split(g);
            if (!bl.crossDomain) {
                bq = G.exec(bl.url.toLowerCase());
                bl.crossDomain = !! (bq && (bq[1] != r[1] || bq[2] != r[2] || (bq[3] || (bq[1] === "http:" ? 80 : 443)) != (r[3] || (r[1] === "http:" ? 80 : 443))))
            }
            if (bl.data && bl.processData && typeof bl.data !== "string") {
                bl.data = a.param(bl.data, bl.traditional)
            }
            aI(V, bl, bf, br);
            if (bi === 2) {
                return false
            }
            be = bl.global;
            bl.type = bl.type.toUpperCase();
            bl.hasContent = !aD.test(bl.type);
            if (be && a.active++ === 0) {
                a.event.trigger("ajaxStart")
            }
            if (!bl.hasContent) {
                if (bl.data) {
                    bl.url += (I.test(bl.url) ? "&" : "?") + bl.data
                }
                bk = bl.url;
                if (bl.cache === false) {
                    var bd = a.now(),
                        bw = bl.url.replace(bb, "$1_=" + bd);
                    bl.url = bw + ((bw === bl.url) ? (I.test(bl.url) ? "&" : "?") + "_=" + bd : "")
                }
            }
            if (bl.data && bl.hasContent && bl.contentType !== false || bf.contentType) {
                bp["Content-Type"] = bl.contentType
            }
            if (bl.ifModified) {
                bk = bk || bl.url;
                if (a.lastModified[bk]) {
                    bp["If-Modified-Since"] = a.lastModified[bk]
                }
                if (a.etag[bk]) {
                    bp["If-None-Match"] = a.etag[bk]
                }
            }
            bp.Accept = bl.dataTypes[0] && bl.accepts[bl.dataTypes[0]] ? bl.accepts[bl.dataTypes[0]] + (bl.dataTypes[0] !== "*" ? ", */*; q=0.01" : "") : bl.accepts["*"];
            for (bs in bl.headers) {
                br.setRequestHeader(bs, bl.headers[bs])
            }
            if (bl.beforeSend && (bl.beforeSend.call(bz, br, bl) === false || bi === 2)) {
                br.abort();
                return false
            }
            for (bs in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                br[bs](bl[bs])
            }
            bt = aI(q, bl, bf, br);
            if (!bt) {
                bn(-1, "No Transport")
            } else {
                br.readyState = 1;
                if (be) {
                    bo.trigger("ajaxSend", [br, bl])
                }
                if (bl.async && bl.timeout > 0) {
                    bm = setTimeout(function () {
                        br.abort("timeout")
                    }, bl.timeout)
                }
                try {
                    bi = 1;
                    bt.send(bp, bn)
                } catch (bu) {
                    if (status < 2) {
                        bn(-1, bu)
                    } else {
                        a.error(bu)
                    }
                }
            }
            return br
        },
        param: function (e, be) {
            var bd = [],
                bg = function (bh, bi) {
                    bi = a.isFunction(bi) ? bi() : bi;
                    bd[bd.length] = encodeURIComponent(bh) + "=" + encodeURIComponent(bi)
                };
            if (be === H) {
                be = a.ajaxSettings.traditional
            }
            if (a.isArray(e) || (e.jquery && !a.isPlainObject(e))) {
                a.each(e, function () {
                    bg(this.name, this.value)
                })
            } else {
                for (var bf in e) {
                    u(bf, e[bf], be, bg)
                }
            }
            return bd.join("&").replace(i, "+")
        }
    });

    function u(be, bg, bd, bf) {
        if (a.isArray(bg) && bg.length) {
            a.each(bg, function (bi, bh) {
                if (bd || ah.test(be)) {
                    bf(be, bh)
                } else {
                    u(be + "[" + (typeof bh === "object" || a.isArray(bh) ? bi : "") + "]", bh, bd, bf)
                }
            })
        } else {
            if (!bd && bg != null && typeof bg === "object") {
                if (a.isArray(bg) || a.isEmptyObject(bg)) {
                    bf(be, "")
                } else {
                    for (var e in bg) {
                        u(be + "[" + e + "]", bg[e], bd, bf)
                    }
                }
            } else {
                bf(be, bg)
            }
        }
    }
    a.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });

    function a4(bl, bk, bh) {
        var bd = bl.contents,
            bj = bl.dataTypes,
            be = bl.responseFields,
            bg, bi, bf, e;
        for (bi in be) {
            if (bi in bh) {
                bk[be[bi]] = bh[bi]
            }
        }
        while (bj[0] === "*") {
            bj.shift();
            if (bg === H) {
                bg = bl.mimeType || bk.getResponseHeader("content-type")
            }
        }
        if (bg) {
            for (bi in bd) {
                if (bd[bi] && bd[bi].test(bg)) {
                    bj.unshift(bi);
                    break
                }
            }
        }
        if (bj[0] in bh) {
            bf = bj[0]
        } else {
            for (bi in bh) {
                if (!bj[0] || bl.converters[bi + " " + bj[0]]) {
                    bf = bi;
                    break
                }
                if (!e) {
                    e = bi
                }
            }
            bf = bf || e
        }
        if (bf) {
            if (bf !== bj[0]) {
                bj.unshift(bf)
            }
            return bh[bf]
        }
    }
    function D(bp, bh) {
        if (bp.dataFilter) {
            bh = bp.dataFilter(bh, bp.dataType)
        }
        var bl = bp.dataTypes,
            bo = {},
            bi, bm, be = bl.length,
            bj, bk = bl[0],
            bf, bg, bn, bd, e;
        for (bi = 1; bi < be; bi++) {
            if (bi === 1) {
                for (bm in bp.converters) {
                    if (typeof bm === "string") {
                        bo[bm.toLowerCase()] = bp.converters[bm]
                    }
                }
            }
            bf = bk;

            bk = bl[bi];
            if (bk === "*") {
                bk = bf
            } else {
                if (bf !== "*" && bf !== bk) {
                    bg = bf + " " + bk;
                    bn = bo[bg] || bo["* " + bk];
                    if (!bn) {
                        e = H;
                        for (bd in bo) {
                            bj = bd.split(" ");
                            if (bj[0] === bf || bj[0] === "*") {
                                e = bo[bj[1] + " " + bk];
                                if (e) {
                                    bd = bo[bd];
                                    if (bd === true) {
                                        bn = e
                                    } else {
                                        if (e === true) {
                                            bn = bd
                                        }
                                    }
                                    break
                                }
                            }
                        }
                    }
                    if (!(bn || e)) {
                        a.error("No conversion from " + bg.replace(" ", " to "))
                    }
                    if (bn !== true) {
                        bh = bn ? bn(bh) : e(bd(bh))
                    }
                }
            }
        }
        return bh
    }
    var aq = a.now(),
        t = /(\=)\?(&|$)|()\?\?()/i;
    a.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return a.expando + "_" + (aq++)
        }
    });
    a.ajaxPrefilter("json jsonp", function (bm, bi, bl) {
        var bk = (typeof bm.data === "string");
        if (bm.dataTypes[0] === "jsonp" || bi.jsonpCallback || bi.jsonp != null || bm.jsonp !== false && (t.test(bm.url) || bk && t.test(bm.data))) {
            var bj, be = bm.jsonpCallback = a.isFunction(bm.jsonpCallback) ? bm.jsonpCallback() : bm.jsonpCallback,
                bh = aY[be],
                e = bm.url,
                bg = bm.data,
                bd = "$1" + be + "$2",
                bf = function () {
                    aY[be] = bh;
                    if (bj && a.isFunction(bh)) {
                        aY[be](bj[0])
                    }
                };
            if (bm.jsonp !== false) {
                e = e.replace(t, bd);
                if (bm.url === e) {
                    if (bk) {
                        bg = bg.replace(t, bd)
                    }
                    if (bm.data === bg) {
                        e += (/\?/.test(e) ? "&" : "?") + bm.jsonp + "=" + be
                    }
                }
            }
            bm.url = e;
            bm.data = bg;
            aY[be] = function (bn) {
                bj = [bn]
            };
            bl.then(bf, bf);
            bm.converters["script json"] = function () {
                if (!bj) {
                    a.error(be + " was not called")
                }
                return bj[0]
            };
            bm.dataTypes[0] = "json";
            return "script"
        }
    });
    a.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (e) {
                a.globalEval(e);
                return e
            }
        }
    });
    a.ajaxPrefilter("script", function (e) {
        if (e.cache === H) {
            e.cache = false
        }
        if (e.crossDomain) {
            e.type = "GET";
            e.global = false
        }
    });
    a.ajaxTransport("script", function (be) {
        if (be.crossDomain) {
            var e, bd = al.head || al.getElementsByTagName("head")[0] || al.documentElement;
            return {
                send: function (bf, bg) {
                    e = al.createElement("script");
                    e.async = "async";
                    if (be.scriptCharset) {
                        e.charset = be.scriptCharset
                    }
                    e.src = be.url;
                    e.onload = e.onreadystatechange = function (bi, bh) {
                        if (!e.readyState || /loaded|complete/.test(e.readyState)) {
                            e.onload = e.onreadystatechange = null;
                            if (bd && e.parentNode) {
                                bd.removeChild(e)
                            }
                            e = H;
                            if (!bh) {
                                bg(200, "success")
                            }
                        }
                    };
                    bd.insertBefore(e, bd.firstChild)
                },
                abort: function () {
                    if (e) {
                        e.onload(0, 1)
                    }
                }
            }
        }
    });
    var x = a.now(),
        J, at;

    function A() {
        a(aY).unload(function () {
            for (var e in J) {
                J[e](0, 1)
            }
        })
    }
    function aA() {
        try {
            return new aY.XMLHttpRequest()
        } catch (bd) {}
    }
    function ad() {
        try {
            return new aY.ActiveXObject("Microsoft.XMLHTTP")
        } catch (bd) {}
    }
    a.ajaxSettings.xhr = aY.ActiveXObject ?
    function () {
        return !this.isLocal && aA() || ad()
    } : aA;
    at = a.ajaxSettings.xhr();
    a.support.ajax = !! at;
    a.support.cors = at && ("withCredentials" in at);
    at = H;
    if (a.support.ajax) {
        a.ajaxTransport(function (e) {
            if (!e.crossDomain || a.support.cors) {
                var bd;
                return {
                    send: function (bj, be) {
                        var bi = e.xhr(),
                            bh, bg;
                        if (e.username) {
                            bi.open(e.type, e.url, e.async, e.username, e.password)
                        } else {
                            bi.open(e.type, e.url, e.async)
                        }
                        if (e.xhrFields) {
                            for (bg in e.xhrFields) {
                                bi[bg] = e.xhrFields[bg]
                            }
                        }
                        if (e.mimeType && bi.overrideMimeType) {
                            bi.overrideMimeType(e.mimeType)
                        }
                        if (!(e.crossDomain && !e.hasContent) && !bj["X-Requested-With"]) {
                            bj["X-Requested-With"] = "XMLHttpRequest"
                        }
                        try {
                            for (bg in bj) {
                                bi.setRequestHeader(bg, bj[bg])
                            }
                        } catch (bf) {}
                        bi.send((e.hasContent && e.data) || null);
                        bd = function (bs, bm) {
                            var bn, bl, bk, bq, bp;
                            try {
                                if (bd && (bm || bi.readyState === 4)) {
                                    bd = H;
                                    if (bh) {
                                        bi.onreadystatechange = a.noop;
                                        delete J[bh]
                                    }
                                    if (bm) {
                                        if (bi.readyState !== 4) {
                                            bi.abort()
                                        }
                                    } else {
                                        bn = bi.status;
                                        bk = bi.getAllResponseHeaders();
                                        bq = {};
                                        bp = bi.responseXML;
                                        if (bp && bp.documentElement) {
                                            bq.xml = bp
                                        }
                                        bq.text = bi.responseText;
                                        try {
                                            bl = bi.statusText
                                        } catch (br) {
                                            bl = ""
                                        }
                                        if (!bn && e.isLocal && !e.crossDomain) {
                                            bn = bq.text ? 200 : 404
                                        } else {
                                            if (bn === 1223) {
                                                bn = 204
                                            }
                                        }
                                    }
                                }
                            } catch (bo) {
                                if (!bm) {
                                    be(-1, bo)
                                }
                            }
                            if (bq) {
                                be(bn, bl, bq, bk)
                            }
                        };
                        if (!e.async || bi.readyState === 4) {
                            bd()
                        } else {
                            if (!J) {
                                J = {};
                                A()
                            }
                            bh = x++;
                            bi.onreadystatechange = J[bh] = bd
                        }
                    },
                    abort: function () {
                        if (bd) {
                            bd(0, 1)
                        }
                    }
                }
            }
        })
    }
    var N = {},
        ap = /^(?:toggle|show|hide)$/,
        aF = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        aS, ax = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ];
    a.fn.extend({
        show: function (bf, bi, bh) {
            var be, bg;
            if (bf || bf === 0) {
                return this.animate(aQ("show", 3), bf, bi, bh)
            } else {
                for (var bd = 0, e = this.length; bd < e; bd++) {
                    be = this[bd];
                    bg = be.style.display;
                    if (!a._data(be, "olddisplay") && bg === "none") {
                        bg = be.style.display = ""
                    }
                    if (bg === "" && a.css(be, "display") === "none") {
                        a._data(be, "olddisplay", w(be.nodeName))
                    }
                }
                for (bd = 0; bd < e; bd++) {
                    be = this[bd];
                    bg = be.style.display;
                    if (bg === "" || bg === "none") {
                        be.style.display = a._data(be, "olddisplay") || ""
                    }
                }
                return this
            }
        },
        hide: function (be, bh, bg) {
            if (be || be === 0) {
                return this.animate(aQ("hide", 3), be, bh, bg)
            } else {
                for (var bd = 0, e = this.length; bd < e; bd++) {
                    var bf = a.css(this[bd], "display");
                    if (bf !== "none" && !a._data(this[bd], "olddisplay")) {
                        a._data(this[bd], "olddisplay", bf)
                    }
                }
                for (bd = 0; bd < e; bd++) {
                    this[bd].style.display = "none"
                }
                return this
            }
        },
        _toggle: a.fn.toggle,
        toggle: function (be, bd, bf) {
            var e = typeof be === "boolean";
            if (a.isFunction(be) && a.isFunction(bd)) {
                this._toggle.apply(this, arguments)
            } else {
                if (be == null || e) {
                    this.each(function () {
                        var bg = e ? be : a(this).is(":hidden");
                        a(this)[bg ? "show" : "hide"]()
                    })
                } else {
                    this.animate(aQ("toggle", 3), be, bd, bf)
                }
            }
            return this
        },
        fadeTo: function (e, bf, be, bd) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: bf
            }, e, be, bd)
        },
        animate: function (bg, bd, bf, be) {
            var e = a.speed(bd, bf, be);
            if (a.isEmptyObject(bg)) {
                return this.each(e.complete)
            }
            return this[e.queue === false ? "each" : "queue"](function () {
                var bj = a.extend({}, e),
                    bn, bk = this.nodeType === 1,
                    bl = bk && a(this).is(":hidden"),
                    bh = this;
                for (bn in bg) {
                    var bi = a.camelCase(bn);
                    if (bn !== bi) {
                        bg[bi] = bg[bn];
                        delete bg[bn];
                        bn = bi
                    }
                    if (bg[bn] === "hide" && bl || bg[bn] === "show" && !bl) {
                        return bj.complete.call(this)
                    }
                    if (bk && (bn === "height" || bn === "width")) {
                        bj.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
                        if (a.css(this, "display") === "inline" && a.css(this, "float") === "none") {
                            if (!a.support.inlineBlockNeedsLayout) {
                                this.style.display = "inline-block"
                            } else {
                                var bm = w(this.nodeName);
                                if (bm === "inline") {
                                    this.style.display = "inline-block"
                                } else {
                                    this.style.display = "inline";
                                    this.style.zoom = 1
                                }
                            }
                        }
                    }
                    if (a.isArray(bg[bn])) {
                        (bj.specialEasing = bj.specialEasing || {})[bn] = bg[bn][1];
                        bg[bn] = bg[bn][0]
                    }
                }
                if (bj.overflow != null) {
                    this.style.overflow = "hidden"
                }
                bj.curAnim = a.extend({}, bg);
                a.each(bg, function (bp, bt) {
                    var bs = new a.fx(bh, bj, bp);
                    if (ap.test(bt)) {
                        bs[bt === "toggle" ? bl ? "show" : "hide" : bt](bg)
                    } else {
                        var br = aF.exec(bt),
                            bu = bs.cur();
                        if (br) {
                            var bo = parseFloat(br[2]),
                                bq = br[3] || (a.cssNumber[bp] ? "" : "px");
                            if (bq !== "px") {
                                a.style(bh, bp, (bo || 1) + bq);
                                bu = ((bo || 1) / bs.cur()) * bu;
                                a.style(bh, bp, bu + bq)
                            }
                            if (br[1]) {
                                bo = ((br[1] === "-=" ? -1 : 1) * bo) + bu
                            }
                            bs.custom(bu, bo, bq)
                        } else {
                            bs.custom(bu, bt, "")
                        }
                    }
                });
                return true
            })
        },
        stop: function (bd, e) {
            var be = a.timers;
            if (bd) {
                this.queue([])
            }
            this.each(function () {
                for (var bf = be.length - 1; bf >= 0; bf--) {
                    if (be[bf].elem === this) {
                        if (e) {
                            be[bf](true)
                        }
                        be.splice(bf, 1)
                    }
                }
            });
            if (!e) {
                this.dequeue()
            }
            return this
        }
    });

    function aQ(bd, e) {
        var be = {};
        a.each(ax.concat.apply([], ax.slice(0, e)), function () {
            be[this] = bd
        });
        return be
    }
    a.each({
        slideDown: aQ("show", 1),
        slideUp: aQ("hide", 1),
        slideToggle: aQ("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, bd) {
        a.fn[e] = function (be, bg, bf) {
            return this.animate(bd, be, bg, bf)
        }
    });
    a.extend({
        speed: function (be, bf, bd) {
            var e = be && typeof be === "object" ? a.extend({}, be) : {
                complete: bd || !bd && bf || a.isFunction(be) && be,
                duration: be,
                easing: bd && bf || bf && !a.isFunction(bf) && bf
            };
            e.duration = a.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in a.fx.speeds ? a.fx.speeds[e.duration] : a.fx.speeds._default;
            e.old = e.complete;
            e.complete = function () {
                if (e.queue !== false) {
                    a(this).dequeue()
                }
                if (a.isFunction(e.old)) {
                    e.old.call(this)
                }
            };
            return e
        },
        easing: {
            linear: function (be, bf, e, bd) {
                return e + bd * be
            },
            swing: function (be, bf, e, bd) {
                return ((-Math.cos(be * Math.PI) / 2) + 0.5) * bd + e
            }
        },
        timers: [],
        fx: function (bd, e, be) {
            this.options = e;
            this.elem = bd;
            this.prop = be;
            if (!e.orig) {
                e.orig = {}
            }
        }
    });
    a.fx.prototype = {
        update: function () {
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }(a.fx.step[this.prop] || a.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop]
            }
            var e, bd = a.css(this.elem, this.prop);
            return isNaN(e = parseFloat(bd)) ? !bd || bd === "auto" ? 0 : bd : e
        },
        custom: function (bh, bg, bf) {
            var e = this,
                be = a.fx;
            this.startTime = a.now();
            this.start = bh;
            this.end = bg;
            this.unit = bf || this.unit || (a.cssNumber[this.prop] ? "" : "px");
            this.now = this.start;
            this.pos = this.state = 0;

            function bd(bi) {
                return e.step(bi)
            }
            bd.elem = this.elem;
            if (bd() && a.timers.push(bd) && !aS) {
                aS = setInterval(be.tick, be.interval)
            }
        },
        show: function () {
            this.options.orig[this.prop] = a.style(this.elem, this.prop);
            this.options.show = true;
            this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            a(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = a.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        },
        step: function (bf) {
            var bk = a.now(),
                bg = true;
            if (bf || bk >= this.options.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                this.options.curAnim[this.prop] = true;
                for (var bh in this.options.curAnim) {
                    if (this.options.curAnim[bh] !== true) {
                        bg = false
                    }
                }
                if (bg) {
                    if (this.options.overflow != null && !a.support.shrinkWrapBlocks) {
                        var be = this.elem,
                            bl = this.options;
                        a.each(["", "X", "Y"], function (bm, bn) {
                            be.style["overflow" + bn] = bl.overflow[bm]
                        })
                    }
                    if (this.options.hide) {
                        a(this.elem).hide()
                    }
                    if (this.options.hide || this.options.show) {
                        for (var e in this.options.curAnim) {
                            a.style(this.elem, e, this.options.orig[e])
                        }
                    }
                    this.options.complete.call(this.elem)
                }
                return false
            } else {
                var bd = bk - this.startTime;
                this.state = bd / this.options.duration;
                var bi = this.options.specialEasing && this.options.specialEasing[this.prop];
                var bj = this.options.easing || (a.easing.swing ? "swing" : "linear");
                this.pos = a.easing[bi || bj](this.state, bd, 0, 1, this.options.duration);
                this.now = this.start + ((this.end - this.start) * this.pos);
                this.update()
            }
            return true
        }
    };
    a.extend(a.fx, {
        tick: function () {
            var bd = a.timers;
            for (var e = 0; e < bd.length; e++) {
                if (!bd[e]()) {
                    bd.splice(e--, 1)
                }
            }
            if (!bd.length) {
                a.fx.stop()
            }
        },
        interval: 13,
        stop: function () {
            clearInterval(aS);
            aS = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (e) {
                a.style(e.elem, "opacity", e.now)
            },
            _default: function (e) {
                if (e.elem.style && e.elem.style[e.prop] != null) {
                    e.elem.style[e.prop] = (e.prop === "width" || e.prop === "height" ? Math.max(0, e.now) : e.now) + e.unit
                } else {
                    e.elem[e.prop] = e.now
                }
            }
        }
    });
    if (a.expr && a.expr.filters) {
        a.expr.filters.animated = function (e) {
            return a.grep(a.timers, function (bd) {
                return e === bd.elem
            }).length
        }
    }
    function w(be) {
        if (!N[be]) {
            var e = a("<" + be + ">").appendTo("body"),
                bd = e.css("display");
            e.remove();
            if (bd === "none" || bd === "") {
                bd = "block"
            }
            N[be] = bd
        }
        return N[be]
    }
    var S = /^t(?:able|d|h)$/i,
        Y = /^(?:body|html)$/i;
    if ("getBoundingClientRect" in al.documentElement) {
        a.fn.offset = function (bq) {
            var bg = this[0],
                bj;
            if (bq) {
                return this.each(function (e) {
                    a.offset.setOffset(this, bq, e)
                })
            }
            if (!bg || !bg.ownerDocument) {
                return null
            }
            if (bg === bg.ownerDocument.body) {
                return a.offset.bodyOffset(bg)
            }
            try {
                bj = bg.getBoundingClientRect()
            } catch (bn) {}
            var bp = bg.ownerDocument,
                be = bp.documentElement;
            if (!bj || !a.contains(be, bg)) {
                return bj ? {
                    top: bj.top,
                    left: bj.left
                } : {
                    top: 0,
                    left: 0
                }
            }
            var bk = bp.body,
                bl = az(bp),
                bi = be.clientTop || bk.clientTop || 0,
                bm = be.clientLeft || bk.clientLeft || 0,
                bd = (bl.pageYOffset || a.support.boxModel && be.scrollTop || bk.scrollTop),
                bh = (bl.pageXOffset || a.support.boxModel && be.scrollLeft || bk.scrollLeft),
                bo = bj.top + bd - bi,
                bf = bj.left + bh - bm;
            return {
                top: bo,
                left: bf
            }
        }
    } else {
        a.fn.offset = function (bn) {
            var bh = this[0];
            if (bn) {
                return this.each(function (bo) {
                    a.offset.setOffset(this, bn, bo)
                })
            }
            if (!bh || !bh.ownerDocument) {
                return null
            }
            if (bh === bh.ownerDocument.body) {
                return a.offset.bodyOffset(bh)
            }
            a.offset.initialize();
            var bk, be = bh.offsetParent,
                bd = bh,
                bm = bh.ownerDocument,
                bf = bm.documentElement,
                bi = bm.body,
                bj = bm.defaultView,
                e = bj ? bj.getComputedStyle(bh, null) : bh.currentStyle,
                bl = bh.offsetTop,
                bg = bh.offsetLeft;
            while ((bh = bh.parentNode) && bh !== bi && bh !== bf) {
                if (a.offset.supportsFixedPosition && e.position === "fixed") {
                    break
                }
                bk = bj ? bj.getComputedStyle(bh, null) : bh.currentStyle;
                bl -= bh.scrollTop;
                bg -= bh.scrollLeft;
                if (bh === be) {
                    bl += bh.offsetTop;
                    bg += bh.offsetLeft;
                    if (a.offset.doesNotAddBorder && !(a.offset.doesAddBorderForTableAndCells && S.test(bh.nodeName))) {
                        bl += parseFloat(bk.borderTopWidth) || 0;
                        bg += parseFloat(bk.borderLeftWidth) || 0
                    }
                    bd = be;
                    be = bh.offsetParent
                }
                if (a.offset.subtractsBorderForOverflowNotVisible && bk.overflow !== "visible") {
                    bl += parseFloat(bk.borderTopWidth) || 0;
                    bg += parseFloat(bk.borderLeftWidth) || 0
                }
                e = bk
            }
            if (e.position === "relative" || e.position === "static") {
                bl += bi.offsetTop;
                bg += bi.offsetLeft
            }
            if (a.offset.supportsFixedPosition && e.position === "fixed") {
                bl += Math.max(bf.scrollTop, bi.scrollTop);
                bg += Math.max(bf.scrollLeft, bi.scrollLeft)
            }
            return {
                top: bl,
                left: bg
            }
        }
    }
    a.offset = {
        initialize: function () {
            var e = al.body,
                bd = al.createElement("div"),
                bg, bi, bh, bj, be = parseFloat(a.css(e, "marginTop")) || 0,
                bf = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            a.extend(bd.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            });
            bd.innerHTML = bf;
            e.insertBefore(bd, e.firstChild);
            bg = bd.firstChild;
            bi = bg.firstChild;
            bj = bg.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = (bi.offsetTop !== 5);
            this.doesAddBorderForTableAndCells = (bj.offsetTop === 5);
            bi.style.position = "fixed";
            bi.style.top = "20px";
            this.supportsFixedPosition = (bi.offsetTop === 20 || bi.offsetTop === 15);
            bi.style.position = bi.style.top = "";
            bg.style.overflow = "hidden";
            bg.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = (bi.offsetTop === -5);
            this.doesNotIncludeMarginInBodyOffset = (e.offsetTop !== be);
            e.removeChild(bd);
            e = bd = bg = bi = bh = bj = null;
            a.offset.initialize = a.noop
        },
        bodyOffset: function (e) {
            var be = e.offsetTop,
                bd = e.offsetLeft;
            a.offset.initialize();
            if (a.offset.doesNotIncludeMarginInBodyOffset) {
                be += parseFloat(a.css(e, "marginTop")) || 0;
                bd += parseFloat(a.css(e, "marginLeft")) || 0
            }
            return {
                top: be,
                left: bd
            }
        },
        setOffset: function (bf, bo, bi) {
            var bj = a.css(bf, "position");
            if (bj === "static") {
                bf.style.position = "relative"
            }
            var bh = a(bf),
                bd = bh.offset(),
                e = a.css(bf, "top"),
                bm = a.css(bf, "left"),
                bn = (bj === "absolute" && a.inArray("auto", [e, bm]) > -1),
                bl = {},
                bk = {},
                be, bg;
            if (bn) {
                bk = bh.position()
            }
            be = bn ? bk.top : parseInt(e, 10) || 0;
            bg = bn ? bk.left : parseInt(bm, 10) || 0;
            if (a.isFunction(bo)) {
                bo = bo.call(bf, bi, bd)
            }
            if (bo.top != null) {
                bl.top = (bo.top - bd.top) + be
            }
            if (bo.left != null) {
                bl.left = (bo.left - bd.left) + bg
            }
            if ("using" in bo) {
                bo.using.call(bf, bl)
            } else {
                bh.css(bl)
            }
        }
    };
    a.fn.extend({
        position: function () {
            if (!this[0]) {
                return null
            }
            var be = this[0],
                bd = this.offsetParent(),
                bf = this.offset(),
                e = Y.test(bd[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : bd.offset();
            bf.top -= parseFloat(a.css(be, "marginTop")) || 0;
            bf.left -= parseFloat(a.css(be, "marginLeft")) || 0;
            e.top += parseFloat(a.css(bd[0], "borderTopWidth")) || 0;
            e.left += parseFloat(a.css(bd[0], "borderLeftWidth")) || 0;
            return {
                top: bf.top - e.top,
                left: bf.left - e.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || al.body;
                while (e && (!Y.test(e.nodeName) && a.css(e, "position") === "static")) {
                    e = e.offsetParent
                }
                return e
            })
        }
    });
    a.each(["Left", "Top"], function (bd, e) {
        var be = "scroll" + e;
        a.fn[be] = function (bh) {
            var bf = this[0],
                bg;
            if (!bf) {
                return null
            }
            if (bh !== H) {
                return this.each(function () {
                    bg = az(this);
                    if (bg) {
                        bg.scrollTo(!bd ? bh : a(bg).scrollLeft(), bd ? bh : a(bg).scrollTop())
                    } else {
                        this[be] = bh
                    }
                })
            } else {
                bg = az(bf);
                return bg ? ("pageXOffset" in bg) ? bg[bd ? "pageYOffset" : "pageXOffset"] : a.support.boxModel && bg.document.documentElement[be] || bg.document.body[be] : bf[be]
            }
        }
    });

    function az(e) {
        return a.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
    }
    a.each(["Height", "Width"], function (bd, e) {
        var be = e.toLowerCase();
        a.fn["inner" + e] = function () {
            return this[0] ? parseFloat(a.css(this[0], be, "padding")) : null
        };
        a.fn["outer" + e] = function (bf) {
            return this[0] ? parseFloat(a.css(this[0], be, bf ? "margin" : "border")) : null
        };
        a.fn[be] = function (bg) {
            var bh = this[0];
            if (!bh) {
                return bg == null ? null : this
            }
            if (a.isFunction(bg)) {
                return this.each(function (bl) {
                    var bk = a(this);
                    bk[be](bg.call(this, bl, bk[be]()))
                })
            }
            if (a.isWindow(bh)) {
                var bi = bh.document.documentElement["client" + e];
                return bh.document.compatMode === "CSS1Compat" && bi || bh.document.body["client" + e] || bi
            } else {
                if (bh.nodeType === 9) {
                    return Math.max(bh.documentElement["client" + e], bh.body["scroll" + e], bh.documentElement["scroll" + e], bh.body["offset" + e], bh.documentElement["offset" + e])
                } else {
                    if (bg === H) {
                        var bj = a.css(bh, be),
                            bf = parseFloat(bj);
                        return a.isNaN(bf) ? bj : bf
                    } else {
                        return this.css(be, typeof bg === "string" ? bg : bg + "px")
                    }
                }
            }
        }
    });
    aY.jQuery = aY.$ = a
})(window);
/*!
 * jQuery UI 1.8.1
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */
jQuery.ui ||
function (a) {
    a.ui = {
        version: "1.8.1",
        plugin: {
            add: function (f, c, h) {
                f = a.ui[f].prototype;
                for (var g in h) {
                    f.plugins[g] = f.plugins[g] || [];
                    f.plugins[g].push([c, h[g]])
                }
            },
            call: function (f, c, h) {
                if ((c = f.plugins[c]) && f.element[0].parentNode) {
                    for (var g = 0; g < c.length; g++) {
                        f.options[c[g][0]] && c[g][1].apply(f.element, h)
                    }
                }
            }
        },
        contains: function (d, c) {
            return document.compareDocumentPosition ? d.compareDocumentPosition(c) & 16 : d !== c && d.contains(c)
        },
        hasScroll: function (e, c) {
            if (a(e).css("overflow") == "hidden") {
                return false
            }
            c = c && c == "left" ? "scrollLeft" : "scrollTop";
            var f = false;
            if (e[c] > 0) {
                return true
            }
            e[c] = 1;
            f = e[c] > 0;
            e[c] = 0;
            return f
        },
        isOverAxis: function (e, c, f) {
            return e > c && e < c + f
        },
        isOver: function (h, c, l, k, j, i) {
            return a.ui.isOverAxis(h, l, j) && a.ui.isOverAxis(c, k, i)
        },
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    };
    a.fn.extend({
        _focus: a.fn.focus,
        focus: function (d, c) {
            return typeof d === "number" ? this.each(function () {
                var b = this;
                setTimeout(function () {
                    a(b).focus();
                    c && c.call(b)
                }, d)
            }) : this._focus.apply(this, arguments)
        },
        enableSelection: function () {
            return this.attr("unselectable", "off").css("MozUserSelect", "")
        },
        disableSelection: function () {
            return this.attr("unselectable", "on").css("MozUserSelect", "none")
        },
        scrollParent: function () {
            var b;
            b = a.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(a.curCSS(this, "position", 1)) && /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
            }).eq(0);
            return /fixed/.test(this.css("position")) || !b.length ? a(document) : b
        },
        zIndex: function (d) {
            if (d !== undefined) {
                return this.css("zIndex", d)
            }
            if (this.length) {
                d = a(this[0]);
                for (var c; d.length && d[0] !== document;) {
                    c = d.css("position");
                    if (c == "absolute" || c == "relative" || c == "fixed") {
                        c = parseInt(d.css("zIndex"));
                        if (!isNaN(c) && c != 0) {
                            return c
                        }
                    }
                    d = d.parent()
                }
            }
            return 0
        }
    });
    a.extend(a.expr[":"], {
        data: function (e, c, f) {
            return !!a.data(e, f[3])
        },
        focusable: function (e) {
            var c = e.nodeName.toLowerCase(),
                f = a.attr(e, "tabindex");
            return (/input|select|textarea|button|object/.test(c) ? !e.disabled : "a" == c || "area" == c ? e.href || !isNaN(f) : !isNaN(f)) && !a(e)["area" == c ? "parents" : "closest"](":hidden").length
        },
        tabbable: function (d) {
            var c = a.attr(d, "tabindex");
            return (isNaN(c) || c >= 0) && a(d).is(":focusable")
        }
    })
}(jQuery);
/*!
 * jQuery UI Widget 1.8.1
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Widget
 */
(function (a) {
    var c = a.fn.remove;
    a.fn.remove = function (b, d) {
        return this.each(function () {
            if (!d) {
                if (!b || a.filter(b, [this]).length) {
                    a("*", this).add(this).each(function () {
                        a(this).triggerHandler("remove")
                    })
                }
            }
            return c.call(a(this), b, d)
        })
    };
    a.widget = function (b, j, i) {
        var h = b.split(".")[0],
            g;
        b = b.split(".")[1];
        g = h + "-" + b;
        if (!i) {
            i = j;
            j = a.Widget
        }
        a.expr[":"][g] = function (d) {
            return !!a.data(d, b)
        };
        a[h] = a[h] || {};
        a[h][b] = function (d, e) {
            arguments.length && this._createWidget(d, e)
        };
        j = new j;
        j.options = a.extend({}, j.options);
        a[h][b].prototype = a.extend(true, j, {
            namespace: h,
            widgetName: b,
            widgetEventPrefix: a[h][b].prototype.widgetEventPrefix || b,
            widgetBaseClass: g
        }, i);
        a.widget.bridge(b, a[h][b])
    };
    a.widget.bridge = function (b, d) {
        a.fn[b] = function (k) {
            var j = typeof k === "string",
                i = Array.prototype.slice.call(arguments, 1),
                g = this;
            k = !j && i.length ? a.extend.apply(null, [true, k].concat(i)) : k;
            if (j && k.substring(0, 1) === "_") {
                return g
            }
            j ? this.each(function () {
                var f = a.data(this, b),
                    e = f && a.isFunction(f[k]) ? f[k].apply(f, i) : f;
                if (e !== f && e !== undefined) {
                    g = e;
                    return false
                }
            }) : this.each(function () {
                var e = a.data(this, b);
                if (e) {
                    k && e.option(k);
                    e._init()
                } else {
                    a.data(this, b, new d(k, this))
                }
            });
            return g
        }
    };
    a.Widget = function (b, d) {
        arguments.length && this._createWidget(b, d)
    };
    a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: false
        },
        _createWidget: function (b, f) {
            this.element = a(f).data(this.widgetName, this);
            this.options = a.extend(true, {}, this.options, a.metadata && a.metadata.get(f)[this.widgetName], b);
            var e = this;
            this.element.bind("remove." + this.widgetName, function () {
                e.destroy()
            });
            this._create();
            this._init()
        },
        _create: function () {},
        _init: function () {},
        destroy: function () {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName);
            this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
        },
        widget: function () {
            return this.element
        },
        option: function (b, h) {
            var g = b,
                f = this;
            if (arguments.length === 0) {
                return a.extend({}, f.options)
            }
            if (typeof b === "string") {
                if (h === undefined) {
                    return this.options[b]
                }
                g = {};
                g[b] = h
            }
            a.each(g, function (e, d) {
                f._setOption(e, d)
            });
            return f
        },
        _setOption: function (b, d) {
            this.options[b] = d;
            if (b === "disabled") {
                this.widget()[d ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", d)
            }
            return this
        },
        enable: function () {
            return this._setOption("disabled", false)
        },
        disable: function () {
            return this._setOption("disabled", true)
        },
        _trigger: function (b, j, i) {
            var h = this.options[b];
            j = a.Event(j);
            j.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase();
            i = i || {};
            if (j.originalEvent) {
                b = a.event.props.length;
                for (var g; b;) {
                    g = a.event.props[--b];
                    j[g] = j.originalEvent[g]
                }
            }
            this.element.trigger(j, i);
            return !(a.isFunction(h) && h.call(this.element[0], j, i) === false || j.isDefaultPrevented())
        }
    }
})(jQuery);
/*!
 * jQuery UI Mouse 1.8.1
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function (a) {
    a.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var b = this;
            this.element.bind("mousedown." + this.widgetName, function (c) {
                return b._mouseDown(c)
            }).bind("click." + this.widgetName, function (c) {
                if (b._preventClickEvent) {
                    b._preventClickEvent = false;
                    c.stopImmediatePropagation();
                    return false
                }
            });
            this.started = false
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName)
        },
        _mouseDown: function (d) {
            d.originalEvent = d.originalEvent || {};
            if (!d.originalEvent.mouseHandled) {
                this._mouseStarted && this._mouseUp(d);
                this._mouseDownEvent = d;
                var c = this,
                    h = d.which == 1,
                    g = typeof this.options.cancel == "string" ? a(d.target).parents().add(d.target).filter(this.options.cancel).length : false;
                if (!h || g || !this._mouseCapture(d)) {
                    return true
                }
                this.mouseDelayMet = !this.options.delay;
                if (!this.mouseDelayMet) {
                    this._mouseDelayTimer = setTimeout(function () {
                        c.mouseDelayMet = true
                    }, this.options.delay)
                }
                if (this._mouseDistanceMet(d) && this._mouseDelayMet(d)) {
                    this._mouseStarted = this._mouseStart(d) !== false;
                    if (!this._mouseStarted) {
                        d.preventDefault();
                        return true
                    }
                }
                this._mouseMoveDelegate = function (b) {
                    return c._mouseMove(b)
                };
                this._mouseUpDelegate = function (b) {
                    return c._mouseUp(b)
                };
                a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
                a.browser.safari || d.preventDefault();
                return d.originalEvent.mouseHandled = true
            }
        },
        _mouseMove: function (b) {
            if (a.browser.msie && !b.button) {
                return this._mouseUp(b)
            }
            if (this._mouseStarted) {
                this._mouseDrag(b);
                return b.preventDefault()
            }
            if (this._mouseDistanceMet(b) && this._mouseDelayMet(b)) {
                (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== false) ? this._mouseDrag(b) : this._mouseUp(b)
            }
            return !this._mouseStarted
        },
        _mouseUp: function (b) {
            a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            if (this._mouseStarted) {
                this._mouseStarted = false;
                this._preventClickEvent = b.target == this._mouseDownEvent.target;
                this._mouseStop(b)
            }
            return false
        },
        _mouseDistanceMet: function (b) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - b.pageX), Math.abs(this._mouseDownEvent.pageY - b.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
            return true
        }
    })
})(jQuery);
(function (f) {
    f.ui = f.ui || {};
    var a = /left|center|right/,
        e = /top|center|bottom/,
        d = f.fn.position,
        b = f.fn.offset;
    f.fn.position = function (j) {
        if (!j || !j.of) {
            return d.apply(this, arguments)
        }
        j = f.extend({}, j);
        var c = f(j.of),
            o = (j.collision || "flip").split(" "),
            n = j.offset ? j.offset.split(" ") : [0, 0],
            m, l, k;
        if (j.of.nodeType === 9) {
            m = c.width();
            l = c.height();
            k = {
                top: 0,
                left: 0
            }
        } else {
            if (j.of.scrollTo && j.of.document) {
                m = c.width();
                l = c.height();
                k = {
                    top: c.scrollTop(),
                    left: c.scrollLeft()
                }
            } else {
                if (j.of.preventDefault) {
                    j.at = "left top";
                    m = l = 0;
                    k = {
                        top: j.of.pageY,
                        left: j.of.pageX
                    }
                } else {
                    m = c.outerWidth();
                    l = c.outerHeight();
                    k = c.offset()
                }
            }
        }
        f.each(["my", "at"], function () {
            var g = (j[this] || "").split(" ");
            if (g.length === 1) {
                g = a.test(g[0]) ? g.concat(["center"]) : e.test(g[0]) ? ["center"].concat(g) : ["center", "center"]
            }
            g[0] = a.test(g[0]) ? g[0] : "center";
            g[1] = e.test(g[1]) ? g[1] : "center";
            j[this] = g
        });
        if (o.length === 1) {
            o[1] = o[0]
        }
        n[0] = parseInt(n[0], 10) || 0;
        if (n.length === 1) {
            n[1] = n[0]
        }
        n[1] = parseInt(n[1], 10) || 0;
        if (j.at[0] === "right") {
            k.left += m
        } else {
            if (j.at[0] === "center") {
                k.left += m / 2
            }
        }
        if (j.at[1] === "bottom") {
            k.top += l
        } else {
            if (j.at[1] === "center") {
                k.top += l / 2
            }
        }
        k.left += n[0];
        k.top += n[1];
        return this.each(function () {
            var p = f(this),
                h = p.outerWidth(),
                g = p.outerHeight(),
                i = f.extend({}, k);
            if (j.my[0] === "right") {
                i.left -= h
            } else {
                if (j.my[0] === "center") {
                    i.left -= h / 2
                }
            }
            if (j.my[1] === "bottom") {
                i.top -= g
            } else {
                if (j.my[1] === "center") {
                    i.top -= g / 2
                }
            }
            i.left = parseInt(i.left);
            i.top = parseInt(i.top);
            f.each(["left", "top"], function (s, q) {
                f.ui.position[o[s]] && f.ui.position[o[s]][q](i, {
                    targetWidth: m,
                    targetHeight: l,
                    elemWidth: h,
                    elemHeight: g,
                    offset: n,
                    my: j.my,
                    at: j.at
                })
            });
            f.fn.bgiframe && p.bgiframe();
            p.offset(f.extend(i, {
                using: j.using
            }))
        })
    };
    f.ui.position = {
        fit: {
            left: function (g, c) {
                var h = f(window);
                c = g.left + c.elemWidth - h.width() - h.scrollLeft();
                g.left = c > 0 ? g.left - c : Math.max(0, g.left)
            },
            top: function (g, c) {
                var h = f(window);
                c = g.top + c.elemHeight - h.height() - h.scrollTop();
                g.top = c > 0 ? g.top - c : Math.max(0, g.top)
            }
        },
        flip: {
            left: function (h, c) {
                if (c.at[0] !== "center") {
                    var k = f(window);
                    k = h.left + c.elemWidth - k.width() - k.scrollLeft();
                    var j = c.my[0] === "left" ? -c.elemWidth : c.my[0] === "right" ? c.elemWidth : 0,
                        i = -2 * c.offset[0];
                    h.left += h.left < 0 ? j + c.targetWidth + i : k > 0 ? j - c.targetWidth + i : 0
                }
            },
            top: function (i, c) {
                if (c.at[1] !== "center") {
                    var m = f(window);
                    m = i.top + c.elemHeight - m.height() - m.scrollTop();
                    var l = c.my[1] === "top" ? -c.elemHeight : c.my[1] === "bottom" ? c.elemHeight : 0,
                        k = c.at[1] === "top" ? c.targetHeight : -c.targetHeight,
                        j = -2 * c.offset[1];
                    i.top += i.top < 0 ? l + c.targetHeight + j : m > 0 ? l + k + j : 0
                }
            }
        }
    };
    if (!f.offset.setOffset) {
        f.offset.setOffset = function (i, c) {
            if (/static/.test(f.curCSS(i, "position"))) {
                i.style.position = "relative"
            }
            var m = f(i),
                l = m.offset(),
                k = parseInt(f.curCSS(i, "top", true), 10) || 0,
                j = parseInt(f.curCSS(i, "left", true), 10) || 0;
            l = {
                top: c.top - l.top + k,
                left: c.left - l.left + j
            };
            "using" in c ? c.using.call(i, l) : m.css(l)
        };
        f.fn.offset = function (g) {
            var c = this[0];
            if (!c || !c.ownerDocument) {
                return null
            }
            if (g) {
                return this.each(function () {
                    f.offset.setOffset(this, g)
                })
            }
            return b.call(this)
        }
    }
})(jQuery);
(function (a) {
    a.widget("ui.slider", a.ui.mouse, {
        widgetEventPrefix: "slide",
        options: {
            animate: false,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: false,
            step: 1,
            value: 0,
            values: null
        },
        _create: function () {
            var c = this,
                d = this.options;
            this._mouseSliding = this._keySliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
            d.disabled && this.element.addClass("ui-slider-disabled ui-disabled");
            this.range = a([]);
            if (d.range) {
                if (d.range === true) {
                    this.range = a("<div></div>");
                    if (!d.values) {
                        d.values = [this._valueMin(), this._valueMin()]
                    }
                    if (d.values.length && d.values.length !== 2) {
                        d.values = [d.values[0], d.values[0]]
                    }
                } else {
                    this.range = a("<div></div>")
                }
                this.range.appendTo(this.element).addClass("ui-slider-range");
                if (d.range === "min" || d.range === "max") {
                    this.range.addClass("ui-slider-range-" + d.range)
                }
                this.range.addClass("ui-widget-header")
            }
            a(".ui-slider-handle", this.element).length === 0 && a("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");
            if (d.values && d.values.length) {
                for (; a(".ui-slider-handle", this.element).length < d.values.length;) {
                    a("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle")
                }
            }
            this.handles = a(".ui-slider-handle", this.element).addClass("ui-state-default ui-corner-all");
            this.handle = this.handles.eq(0);
            this.handles.add(this.range).filter("a").click(function (b) {
                b.preventDefault()
            }).hover(function () {
                d.disabled || a(this).addClass("ui-state-hover")
            }, function () {
                a(this).removeClass("ui-state-hover")
            }).focus(function () {
                if (d.disabled) {
                    a(this).blur()
                } else {
                    a(".ui-slider .ui-state-focus").removeClass("ui-state-focus");
                    a(this).addClass("ui-state-focus")
                }
            }).blur(function () {
                a(this).removeClass("ui-state-focus")
            });
            this.handles.each(function (b) {
                a(this).data("index.ui-slider-handle", b)
            });
            this.handles.keydown(function (n) {
                var m = true,
                    l = a(this).data("index.ui-slider-handle"),
                    k, j, b;
                if (!c.options.disabled) {
                    switch (n.keyCode) {
                    case a.ui.keyCode.HOME:
                    case a.ui.keyCode.END:
                    case a.ui.keyCode.PAGE_UP:
                    case a.ui.keyCode.PAGE_DOWN:
                    case a.ui.keyCode.UP:
                    case a.ui.keyCode.RIGHT:
                    case a.ui.keyCode.DOWN:
                    case a.ui.keyCode.LEFT:
                        m = false;
                        if (!c._keySliding) {
                            c._keySliding = true;
                            a(this).addClass("ui-state-active");
                            k = c._start(n, l);
                            if (k === false) {
                                return
                            }
                        }
                        break
                    }
                    b = c.options.step;
                    k = c.options.values && c.options.values.length ? (j = c.values(l)) : (j = c.value());
                    switch (n.keyCode) {
                    case a.ui.keyCode.HOME:
                        j = c._valueMin();
                        break;
                    case a.ui.keyCode.END:
                        j = c._valueMax();
                        break;
                    case a.ui.keyCode.PAGE_UP:
                        j = k + (c._valueMax() - c._valueMin()) / 5;
                        break;
                    case a.ui.keyCode.PAGE_DOWN:
                        j = k - (c._valueMax() - c._valueMin()) / 5;
                        break;
                    case a.ui.keyCode.UP:
                    case a.ui.keyCode.RIGHT:
                        if (k === c._valueMax()) {
                            return
                        }
                        j = k + b;
                        break;
                    case a.ui.keyCode.DOWN:
                    case a.ui.keyCode.LEFT:
                        if (k === c._valueMin()) {
                            return
                        }
                        j = k - b;
                        break
                    }
                    c._slide(n, l, j);
                    return m
                }
            }).keyup(function (f) {
                var b = a(this).data("index.ui-slider-handle");
                if (c._keySliding) {
                    c._keySliding = false;
                    c._stop(f, b);
                    c._change(f, b);
                    a(this).removeClass("ui-state-active")
                }
            });
            this._refreshValue();
            this._animateOff = false
        },
        destroy: function () {
            this.handles.remove();
            this.range.remove();
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
            this._mouseDestroy();
            return this
        },
        _mouseCapture: function (d) {
            var j = this.options,
                p, o, n, m, l, k;
            if (j.disabled) {
                return false
            }
            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();
            p = {
                x: d.pageX,
                y: d.pageY
            };
            o = this._normValueFromMouse(p);
            n = this._valueMax() - this._valueMin() + 1;
            l = this;
            this.handles.each(function (c) {
                var b = Math.abs(o - l.values(c));
                if (n > b) {
                    n = b;
                    m = a(this);
                    k = c
                }
            });
            if (j.range === true && this.values(1) === j.min) {
                k += 1;
                m = a(this.handles[k])
            }
            if (this._start(d, k) === false) {
                return false
            }
            this._mouseSliding = true;
            l._handleIndex = k;
            m.addClass("ui-state-active").focus();
            j = m.offset();
            this._clickOffset = !a(d.target).parents().andSelf().is(".ui-slider-handle") ? {
                left: 0,
                top: 0
            } : {
                left: d.pageX - j.left - m.width() / 2,
                top: d.pageY - j.top - m.height() / 2 - (parseInt(m.css("borderTopWidth"), 10) || 0) - (parseInt(m.css("borderBottomWidth"), 10) || 0) + (parseInt(m.css("marginTop"), 10) || 0)
            };
            o = this._normValueFromMouse(p);
            this._slide(d, k, o);
            return this._animateOff = true
        },
        _mouseStart: function () {
            return true
        },
        _mouseDrag: function (c) {
            var d = this._normValueFromMouse({
                x: c.pageX,
                y: c.pageY
            });
            this._slide(c, this._handleIndex, d);
            return false
        },
        _mouseStop: function (c) {
            this.handles.removeClass("ui-state-active");
            this._mouseSliding = false;
            this._stop(c, this._handleIndex);
            this._change(c, this._handleIndex);
            this._clickOffset = this._handleIndex = null;
            return this._animateOff = false
        },
        _detectOrientation: function () {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (c) {
            var d;
            if (this.orientation === "horizontal") {
                d = this.elementSize.width;
                c = c.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)
            } else {
                d = this.elementSize.height;
                c = c.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)
            }
            d = c / d;
            if (d > 1) {
                d = 1
            }
            if (d < 0) {
                d = 0
            }
            if (this.orientation === "vertical") {
                d = 1 - d
            }
            c = this._valueMax() - this._valueMin();
            return this._trimAlignValue(this._valueMin() + d * c)
        },
        _start: function (d, e) {
            var f = {
                handle: this.handles[e],
                value: this.value()
            };
            if (this.options.values && this.options.values.length) {
                f.value = this.values(e);
                f.values = this.values()
            }
            return this._trigger("start", d, f)
        },
        _slide: function (d, f, h) {
            var g;
            if (this.options.values && this.options.values.length) {
                g = this.values(f ? 0 : 1);
                if (this.options.values.length === 2 && this.options.range === true && (f === 0 && h > g || f === 1 && h < g)) {
                    h = g
                }
                if (h !== this.values(f)) {
                    g = this.values();
                    g[f] = h;
                    d = this._trigger("slide", d, {
                        handle: this.handles[f],
                        value: h,
                        values: g
                    });
                    this.values(f ? 0 : 1);
                    d !== false && this.values(f, h, true)
                }
            } else {
                if (h !== this.value()) {
                    d = this._trigger("slide", d, {
                        handle: this.handles[f],
                        value: h
                    });
                    d !== false && this.value(h)
                }
            }
        },
        _stop: function (d, e) {
            var f = {
                handle: this.handles[e],
                value: this.value()
            };
            if (this.options.values && this.options.values.length) {
                f.value = this.values(e);
                f.values = this.values()
            }
            this._trigger("stop", d, f)
        },
        _change: function (d, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var f = {
                    handle: this.handles[e],
                    value: this.value()
                };
                if (this.options.values && this.options.values.length) {
                    f.value = this.values(e);
                    f.values = this.values()
                }
                this._trigger("change", d, f)
            }
        },
        value: function (c) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(c);
                this._refreshValue();
                this._change(null, 0)
            }
            return this._value()
        },
        values: function (d, g) {
            var j, i, h;
            if (arguments.length > 1) {
                this.options.values[d] = this._trimAlignValue(g);
                this._refreshValue();
                this._change(null, d)
            }
            if (arguments.length) {
                if (a.isArray(arguments[0])) {
                    j = this.options.values;
                    i = arguments[0];
                    for (h = 0; h < j.length; h += 1) {
                        j[h] = this._trimAlignValue(i[h]);
                        this._change(null, h)
                    }
                    this._refreshValue()
                } else {
                    return this.options.values && this.options.values.length ? this._values(d) : this.value()
                }
            } else {
                return this._values()
            }
        },
        _setOption: function (d, f) {
            var h, g = 0;
            if (a.isArray(this.options.values)) {
                g = this.options.values.length
            }
            a.Widget.prototype._setOption.apply(this, arguments);
            switch (d) {
            case "disabled":
                if (f) {
                    this.handles.filter(".ui-state-focus").blur();
                    this.handles.removeClass("ui-state-hover");
                    this.handles.attr("disabled", "disabled");
                    this.element.addClass("ui-disabled")
                } else {
                    this.handles.removeAttr("disabled");
                    this.element.removeClass("ui-disabled")
                }
                break;
            case "orientation":
                this._detectOrientation();
                this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                this._refreshValue();
                break;
            case "value":
                this._animateOff = true;
                this._refreshValue();
                this._change(null, 0);
                this._animateOff = false;
                break;
            case "values":
                this._animateOff = true;
                this._refreshValue();
                for (h = 0; h < g; h += 1) {
                    this._change(null, h)
                }
                this._animateOff = false;
                break
            }
        },
        _value: function () {
            var c = this.options.value;
            return c = this._trimAlignValue(c)
        },
        _values: function (d) {
            var e, f;
            if (arguments.length) {
                e = this.options.values[d];
                return e = this._trimAlignValue(e)
            } else {
                e = this.options.values.slice();
                for (f = 0; f < e.length; f += 1) {
                    e[f] = this._trimAlignValue(e[f])
                }
                return e
            }
        },
        _trimAlignValue: function (d) {
            if (d < this._valueMin()) {
                return this._valueMin()
            }
            if (d > this._valueMax()) {
                return this._valueMax()
            }
            var e = this.options.step,
                f = d % e;
            d = d - f;
            if (f >= e / 2) {
                d += e
            }
            return parseFloat(d.toFixed(5))
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.options.max
        },
        _refreshValue: function () {
            var s = this.options.range,
                t = this.options,
                r = this,
                q = !this._animateOff ? t.animate : false,
                p, o = {},
                n, m, l, d;
            if (this.options.values && this.options.values.length) {
                this.handles.each(function (b) {
                    p = (r.values(b) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100;
                    o[r.orientation === "horizontal" ? "left" : "bottom"] = p + "%";
                    a(this).stop(1, 1)[q ? "animate" : "css"](o, t.animate);
                    if (r.options.range === true) {
                        if (r.orientation === "horizontal") {
                            if (b === 0) {
                                r.range.stop(1, 1)[q ? "animate" : "css"]({
                                    left: p + "%"
                                }, t.animate)
                            }
                            if (b === 1) {
                                r.range[q ? "animate" : "css"]({
                                    width: p - n + "%"
                                }, {
                                    queue: false,
                                    duration: t.animate
                                })
                            }
                        } else {
                            if (b === 0) {
                                r.range.stop(1, 1)[q ? "animate" : "css"]({
                                    bottom: p + "%"
                                }, t.animate)
                            }
                            if (b === 1) {
                                r.range[q ? "animate" : "css"]({
                                    height: p - n + "%"
                                }, {
                                    queue: false,
                                    duration: t.animate
                                })
                            }
                        }
                    }
                    n = p
                })
            } else {
                m = this.value();
                l = this._valueMin();
                d = this._valueMax();
                p = d !== l ? (m - l) / (d - l) * 100 : 0;
                o[r.orientation === "horizontal" ? "left" : "bottom"] = p + "%";
                this.handle.stop(1, 1)[q ? "animate" : "css"](o, t.animate);
                if (s === "min" && this.orientation === "horizontal") {
                    this.range.stop(1, 1)[q ? "animate" : "css"]({
                        width: p + "%"
                    }, t.animate)
                }
                if (s === "max" && this.orientation === "horizontal") {
                    this.range[q ? "animate" : "css"]({
                        width: 100 - p + "%"
                    }, {
                        queue: false,
                        duration: t.animate
                    })
                }
                if (s === "min" && this.orientation === "vertical") {
                    this.range.stop(1, 1)[q ? "animate" : "css"]({
                        height: p + "%"
                    }, t.animate)
                }
                if (s === "max" && this.orientation === "vertical") {
                    this.range[q ? "animate" : "css"]({
                        height: 100 - p + "%"
                    }, {
                        queue: false,
                        duration: t.animate
                    })
                }
            }
        }
    });
    a.extend(a.ui.slider, {
        version: "1.8.1"
    })
})(jQuery);
jQuery.effects ||
function (p) {
    function h(j) {
        var f;
        if (j && j.constructor == Array && j.length == 3) {
            return j
        }
        if (f = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(j)) {
            return [parseInt(f[1], 10), parseInt(f[2], 10), parseInt(f[3], 10)]
        }
        if (f = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(j)) {
            return [parseFloat(f[1]) * 2.55, parseFloat(f[2]) * 2.55, parseFloat(f[3]) * 2.55]
        }
        if (f = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(j)) {
            return [parseInt(f[1], 16), parseInt(f[2], 16), parseInt(f[3], 16)]
        }
        if (f = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(j)) {
            return [parseInt(f[1] + f[1], 16), parseInt(f[2] + f[2], 16), parseInt(f[3] + f[3], 16)]
        }
        if (/rgba\(0, 0, 0, 0\)/.exec(j)) {
            return g.transparent
        }
        return g[p.trim(j).toLowerCase()]
    }
    function b(k, j) {
        var f;
        do {
            f = p.curCSS(k, j);
            if (f != "" && f != "transparent" || p.nodeName(k, "body")) {
                break
            }
            j = "backgroundColor"
        } while (k = k.parentNode);
        return h(f)
    }
    function e() {
        var m = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
            j = {},
            f, l;
        if (m && m.length && m[0] && m[m[0]]) {
            for (var k = m.length; k--;) {
                f = m[k];
                if (typeof m[f] == "string") {
                    l = f.replace(/\-(\w)/g, function (o, n) {
                        return n.toUpperCase()
                    });
                    j[l] = m[f]
                }
            }
        } else {
            for (f in m) {
                if (typeof m[f] === "string") {
                    j[f] = m[f]
                }
            }
        }
        return j
    }
    function d(k) {
        var j, f;
        for (j in k) {
            f = k[j];
            if (f == null || p.isFunction(f) || j in a || /scrollbar/.test(j) || !/color/i.test(j) && isNaN(parseFloat(f))) {
                delete k[j]
            }
        }
        return k
    }
    function t(l, j) {
        var f = {
            _: 0
        },
            k;
        for (k in j) {
            if (l[k] != j[k]) {
                f[k] = j[k]
            }
        }
        return f
    }
    function i(l, j, f, k) {
        if (typeof l == "object") {
            k = j;
            f = null;
            j = l;
            l = j.effect
        }
        if (p.isFunction(j)) {
            k = j;
            f = null;
            j = {}
        }
        if (p.isFunction(f)) {
            k = f;
            f = null
        }
        if (typeof j == "number" || p.fx.speeds[j]) {
            k = f;
            f = j;
            j = {}
        }
        j = j || {};
        f = f || j.duration;
        f = p.fx.off ? 0 : typeof f == "number" ? f : p.fx.speeds[f] || p.fx.speeds._default;
        k = k || j.complete;
        return [l, j, f, k]
    }
    p.effects = {};
    p.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "color", "outlineColor"], function (j, f) {
        p.fx.step[f] = function (k) {
            if (!k.colorInit) {
                k.start = b(k.elem, f);
                k.end = h(k.end);
                k.colorInit = true
            }
            k.elem.style[f] = "rgb(" + Math.max(Math.min(parseInt(k.pos * (k.end[0] - k.start[0]) + k.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(k.pos * (k.end[1] - k.start[1]) + k.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(k.pos * (k.end[2] - k.start[2]) + k.start[2], 10), 255), 0) + ")"
        }
    });
    var g = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0],
        transparent: [255, 255, 255]
    },
        c = ["add", "remove", "toggle"],
        a = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
    p.effects.animateClass = function (l, j, f, k) {
        if (p.isFunction(f)) {
            k = f;
            f = null
        }
        return this.each(function () {
            var r = p(this),
                o = r.attr("style") || " ",
                n = d(e.call(this)),
                q, m = r.attr("className");
            p.each(c, function (s, v) {
                l[v] && r[v + "Class"](l[v])
            });
            q = d(e.call(this));
            r.attr("className", m);
            r.animate(t(n, q), j, f, function () {
                p.each(c, function (s, v) {
                    l[v] && r[v + "Class"](l[v])
                });
                if (typeof r.attr("style") == "object") {
                    r.attr("style").cssText = "";
                    r.attr("style").cssText = o
                } else {
                    r.attr("style", o)
                }
                k && k.apply(this, arguments)
            })
        })
    };
    p.fn.extend({
        _addClass: p.fn.addClass,
        addClass: function (l, j, f, k) {
            return j ? p.effects.animateClass.apply(this, [{
                add: l
            },
            j, f, k]) : this._addClass(l)
        },
        _removeClass: p.fn.removeClass,
        removeClass: function (l, j, f, k) {
            return j ? p.effects.animateClass.apply(this, [{
                remove: l
            },
            j, f, k]) : this._removeClass(l)
        },
        _toggleClass: p.fn.toggleClass,
        toggleClass: function (m, j, f, l, k) {
            return typeof j == "boolean" || j === undefined ? f ? p.effects.animateClass.apply(this, [j ? {
                add: m
            } : {
                remove: m
            },
            f, l, k]) : this._toggleClass(m, j) : p.effects.animateClass.apply(this, [{
                toggle: m
            },
            j, f, l])
        },
        switchClass: function (m, j, f, l, k) {
            return p.effects.animateClass.apply(this, [{
                add: j,
                remove: m
            },
            f, l, k])
        }
    });
    p.extend(p.effects, {
        version: "1.8.1",
        save: function (k, j) {
            for (var f = 0; f < j.length; f++) {
                j[f] !== null && k.data("ec.storage." + j[f], k[0].style[j[f]])
            }
        },
        restore: function (k, j) {
            for (var f = 0; f < j.length; f++) {
                j[f] !== null && k.css(j[f], k.data("ec.storage." + j[f]))
            }
        },
        setMode: function (j, f) {
            if (f == "toggle") {
                f = j.is(":hidden") ? "show" : "hide"
            }
            return f
        },
        getBaseline: function (k, j) {
            var f;
            switch (k[0]) {
            case "top":
                f = 0;
                break;
            case "middle":
                f = 0.5;
                break;
            case "bottom":
                f = 1;
                break;
            default:
                f = k[0] / j.height
            }
            switch (k[1]) {
            case "left":
                k = 0;
                break;
            case "center":
                k = 0.5;
                break;
            case "right":
                k = 1;
                break;
            default:
                k = k[1] / j.width
            }
            return {
                x: k,
                y: f
            }
        },
        createWrapper: function (k) {
            if (k.parent().is(".ui-effects-wrapper")) {
                return k.parent()
            }
            var j = {
                width: k.outerWidth(true),
                height: k.outerHeight(true),
                "float": k.css("float")
            },
                f = p("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                });
            k.wrap(f);
            f = k.parent();
            if (k.css("position") == "static") {
                f.css({
                    position: "relative"
                });
                k.css({
                    position: "relative"
                })
            } else {
                p.extend(j, {
                    position: k.css("position"),
                    zIndex: k.css("z-index")
                });
                p.each(["top", "left", "bottom", "right"], function (m, l) {
                    j[l] = k.css(l);
                    if (isNaN(parseInt(j[l], 10))) {
                        j[l] = "auto"
                    }
                });
                k.css({
                    position: "relative",
                    top: 0,
                    left: 0
                })
            }
            return f.css(j).show()
        },
        removeWrapper: function (f) {
            if (f.parent().is(".ui-effects-wrapper")) {
                return f.parent().replaceWith(f)
            }
            return f
        },
        setTransition: function (l, j, f, k) {
            k = k || {};
            p.each(j, function (n, m) {
                unit = l.cssUnit(m);
                if (unit[0] > 0) {
                    k[m] = unit[0] * f + unit[1]
                }
            });
            return k
        }
    });
    p.fn.extend({
        effect: function (k) {
            var j = i.apply(this, arguments);
            j = {
                options: j[1],
                duration: j[2],
                callback: j[3]
            };
            var f = p.effects[k];
            return f && !p.fx.off ? f.call(this, j) : this
        },
        _show: p.fn.show,
        show: function (j) {
            if (!j || typeof j == "number" || p.fx.speeds[j]) {
                return this._show.apply(this, arguments)
            } else {
                var f = i.apply(this, arguments);
                f[1].mode = "show";
                return this.effect.apply(this, f)
            }
        },
        _hide: p.fn.hide,
        hide: function (j) {
            if (!j || typeof j == "number" || p.fx.speeds[j]) {
                return this._hide.apply(this, arguments)
            } else {
                var f = i.apply(this, arguments);
                f[1].mode = "hide";
                return this.effect.apply(this, f)
            }
        },
        __toggle: p.fn.toggle,
        toggle: function (j) {
            if (!j || typeof j == "number" || p.fx.speeds[j] || typeof j == "boolean" || p.isFunction(j)) {
                return this.__toggle.apply(this, arguments)
            } else {
                var f = i.apply(this, arguments);
                f[1].mode = "toggle";
                return this.effect.apply(this, f)
            }
        },
        cssUnit: function (k) {
            var j = this.css(k),
                f = [];
            p.each(["em", "px", "%", "pt"], function (m, l) {
                if (j.indexOf(l) > 0) {
                    f = [parseFloat(j), l]
                }
            });
            return f
        }
    });
    p.easing.jswing = p.easing.swing;
    p.extend(p.easing, {
        def: "easeOutQuad",
        swing: function (m, j, f, l, k) {
            return p.easing[p.easing.def](m, j, f, l, k)
        },
        easeInQuad: function (m, j, f, l, k) {
            return l * (j /= k) * j + f
        },
        easeOutQuad: function (m, j, f, l, k) {
            return -l * (j /= k) * (j - 2) + f
        },
        easeInOutQuad: function (m, j, f, l, k) {
            if ((j /= k / 2) < 1) {
                return l / 2 * j * j + f
            }
            return -l / 2 * (--j * (j - 2) - 1) + f
        },
        easeInCubic: function (m, j, f, l, k) {
            return l * (j /= k) * j * j + f
        },
        easeOutCubic: function (m, j, f, l, k) {
            return l * ((j = j / k - 1) * j * j + 1) + f
        },
        easeInOutCubic: function (m, j, f, l, k) {
            if ((j /= k / 2) < 1) {
                return l / 2 * j * j * j + f
            }
            return l / 2 * ((j -= 2) * j * j + 2) + f
        },
        easeInQuart: function (m, j, f, l, k) {
            return l * (j /= k) * j * j * j + f
        },
        easeOutQuart: function (m, j, f, l, k) {
            return -l * ((j = j / k - 1) * j * j * j - 1) + f
        },
        easeInOutQuart: function (m, j, f, l, k) {
            if ((j /= k / 2) < 1) {
                return l / 2 * j * j * j * j + f
            }
            return -l / 2 * ((j -= 2) * j * j * j - 2) + f
        },
        easeInQuint: function (m, j, f, l, k) {
            return l * (j /= k) * j * j * j * j + f
        },
        easeOutQuint: function (m, j, f, l, k) {
            return l * ((j = j / k - 1) * j * j * j * j + 1) + f
        },
        easeInOutQuint: function (m, j, f, l, k) {
            if ((j /= k / 2) < 1) {
                return l / 2 * j * j * j * j * j + f
            }
            return l / 2 * ((j -= 2) * j * j * j * j + 2) + f
        },
        easeInSine: function (m, j, f, l, k) {
            return -l * Math.cos(j / k * (Math.PI / 2)) + l + f
        },
        easeOutSine: function (m, j, f, l, k) {
            return l * Math.sin(j / k * (Math.PI / 2)) + f
        },
        easeInOutSine: function (m, j, f, l, k) {
            return -l / 2 * (Math.cos(Math.PI * j / k) - 1) + f
        },
        easeInExpo: function (m, j, f, l, k) {
            return j == 0 ? f : l * Math.pow(2, 10 * (j / k - 1)) + f
        },
        easeOutExpo: function (m, j, f, l, k) {
            return j == k ? f + l : l * (-Math.pow(2, -10 * j / k) + 1) + f
        },
        easeInOutExpo: function (m, j, f, l, k) {
            if (j == 0) {
                return f
            }
            if (j == k) {
                return f + l
            }
            if ((j /= k / 2) < 1) {
                return l / 2 * Math.pow(2, 10 * (j - 1)) + f
            }
            return l / 2 * (-Math.pow(2, -10 * --j) + 2) + f
        },
        easeInCirc: function (m, j, f, l, k) {
            return -l * (Math.sqrt(1 - (j /= k) * j) - 1) + f
        },
        easeOutCirc: function (m, j, f, l, k) {
            return l * Math.sqrt(1 - (j = j / k - 1) * j) + f
        },
        easeInOutCirc: function (m, j, f, l, k) {
            if ((j /= k / 2) < 1) {
                return -l / 2 * (Math.sqrt(1 - j * j) - 1) + f
            }
            return l / 2 * (Math.sqrt(1 - (j -= 2) * j) + 1) + f
        },
        easeInElastic: function (o, j, f, n, m) {
            o = 1.70158;
            var l = 0,
                k = n;
            if (j == 0) {
                return f
            }
            if ((j /= m) == 1) {
                return f + n
            }
            l || (l = m * 0.3);
            if (k < Math.abs(n)) {
                k = n;
                o = l / 4
            } else {
                o = l / (2 * Math.PI) * Math.asin(n / k)
            }
            return -(k * Math.pow(2, 10 * (j -= 1)) * Math.sin((j * m - o) * 2 * Math.PI / l)) + f
        },
        easeOutElastic: function (o, j, f, n, m) {
            o = 1.70158;
            var l = 0,
                k = n;
            if (j == 0) {
                return f
            }
            if ((j /= m) == 1) {
                return f + n
            }
            l || (l = m * 0.3);
            if (k < Math.abs(n)) {
                k = n;
                o = l / 4
            } else {
                o = l / (2 * Math.PI) * Math.asin(n / k)
            }
            return k * Math.pow(2, -10 * j) * Math.sin((j * m - o) * 2 * Math.PI / l) + n + f
        },
        easeInOutElastic: function (o, j, f, n, m) {
            o = 1.70158;
            var l = 0,
                k = n;
            if (j == 0) {
                return f
            }
            if ((j /= m / 2) == 2) {
                return f + n
            }
            l || (l = m * 0.3 * 1.5);
            if (k < Math.abs(n)) {
                k = n;
                o = l / 4
            } else {
                o = l / (2 * Math.PI) * Math.asin(n / k)
            }
            if (j < 1) {
                return -0.5 * k * Math.pow(2, 10 * (j -= 1)) * Math.sin((j * m - o) * 2 * Math.PI / l) + f
            }
            return k * Math.pow(2, -10 * (j -= 1)) * Math.sin((j * m - o) * 2 * Math.PI / l) * 0.5 + n + f
        },
        easeInBack: function (n, j, f, m, l, k) {
            if (k == undefined) {
                k = 1.70158
            }
            return m * (j /= l) * j * ((k + 1) * j - k) + f
        },
        easeOutBack: function (n, j, f, m, l, k) {
            if (k == undefined) {
                k = 1.70158
            }
            return m * ((j = j / l - 1) * j * ((k + 1) * j + k) + 1) + f
        },
        easeInOutBack: function (n, j, f, m, l, k) {
            if (k == undefined) {
                k = 1.70158
            }
            if ((j /= l / 2) < 1) {
                return m / 2 * j * j * (((k *= 1.525) + 1) * j - k) + f
            }
            return m / 2 * ((j -= 2) * j * (((k *= 1.525) + 1) * j + k) + 2) + f
        },
        easeInBounce: function (m, j, f, l, k) {
            return l - p.easing.easeOutBounce(m, k - j, 0, l, k) + f
        },
        easeOutBounce: function (m, j, f, l, k) {
            return (j /= k) < 1 / 2.75 ? l * 7.5625 * j * j + f : j < 2 / 2.75 ? l * (7.5625 * (j -= 1.5 / 2.75) * j + 0.75) + f : j < 2.5 / 2.75 ? l * (7.5625 * (j -= 2.25 / 2.75) * j + 0.9375) + f : l * (7.5625 * (j -= 2.625 / 2.75) * j + 0.984375) + f
        },
        easeInOutBounce: function (m, j, f, l, k) {
            if (j < k / 2) {
                return p.easing.easeInBounce(m, j * 2, 0, l, k) * 0.5 + f
            }
            return p.easing.easeOutBounce(m, j * 2 - k, 0, l, k) * 0.5 + l * 0.5 + f
        }
    })
}(jQuery);
(function (a) {
    a.effects.blind = function (b) {
        return this.queue(function () {
            var c = a(this),
                l = ["position", "top", "left"],
                m = a.effects.setMode(c, b.options.mode || "hide"),
                o = b.options.direction || "vertical";
            a.effects.save(c, l);
            c.show();
            var n = a.effects.createWrapper(c).css({
                overflow: "hidden"
            }),
                k = o == "vertical" ? "height" : "width";
            o = o == "vertical" ? n.height() : n.width();
            m == "show" && n.css(k, 0);
            var j = {};
            j[k] = m == "show" ? o : 0;
            n.animate(j, b.duration, b.options.easing, function () {
                m == "hide" && c.hide();
                a.effects.restore(c, l);
                a.effects.removeWrapper(c);
                b.callback && b.callback.apply(c[0], arguments);
                c.dequeue()
            })
        })
    }
})(jQuery);
(function () {
    var u = this;
    var r = u._;
    var b = {};
    var i = Array.prototype,
        B = Object.prototype,
        D = Function.prototype;
    var s = i.slice,
        w = i.unshift,
        v = B.toString,
        o = B.hasOwnProperty;
    var m = i.forEach,
        h = i.map,
        z = i.reduce,
        e = i.reduceRight,
        l = i.filter,
        a = i.every,
        y = i.some,
        t = i.indexOf,
        f = i.lastIndexOf,
        c = Array.isArray,
        A = Object.keys,
        j = D.bind;
    var C = function (E) {
            return new g(E)
        };
    if (typeof module !== "undefined" && module.exports) {
        module.exports = C;
        C._ = C
    } else {
        u._ = C
    }
    C.VERSION = "1.1.5";
    var d = C.each = C.forEach = function (J, I, H) {
            if (J == null) {
                return
            }
            if (m && J.forEach === m) {
                J.forEach(I, H)
            } else {
                if (C.isNumber(J.length)) {
                    for (var G = 0, E = J.length; G < E; G++) {
                        if (I.call(H, J[G], G, J) === b) {
                            return
                        }
                    }
                } else {
                    for (var F in J) {
                        if (o.call(J, F)) {
                            if (I.call(H, J[F], F, J) === b) {
                                return
                            }
                        }
                    }
                }
            }
        };
    C.map = function (H, G, F) {
        var E = [];
        if (H == null) {
            return E
        }
        if (h && H.map === h) {
            return H.map(G, F)
        }
        d(H, function (K, I, J) {
            E[E.length] = G.call(F, K, I, J)
        });
        return E
    };
    C.reduce = C.foldl = C.inject = function (I, H, E, G) {
        var F = E !== void 0;
        if (I == null) {
            I = []
        }
        if (z && I.reduce === z) {
            if (G) {
                H = C.bind(H, G)
            }
            return F ? I.reduce(H, E) : I.reduce(H)
        }
        d(I, function (L, J, K) {
            if (!F && J === 0) {
                E = L;
                F = true
            } else {
                E = H.call(G, E, L, J, K)
            }
        });
        if (!F) {
            throw new TypeError("Reduce of empty array with no initial value")
        }
        return E
    };
    C.reduceRight = C.foldr = function (H, G, E, F) {
        if (H == null) {
            H = []
        }
        if (e && H.reduceRight === e) {
            if (F) {
                G = C.bind(G, F)
            }
            return E !== void 0 ? H.reduceRight(G, E) : H.reduceRight(G)
        }
        var I = (C.isArray(H) ? H.slice() : C.toArray(H)).reverse();
        return C.reduce(I, G, E, F)
    };
    C.find = C.detect = function (H, G, F) {
        var E;
        p(H, function (K, I, J) {
            if (G.call(F, K, I, J)) {
                E = K;
                return true
            }
        });
        return E
    };
    C.filter = C.select = function (H, G, F) {
        var E = [];
        if (H == null) {
            return E
        }
        if (l && H.filter === l) {
            return H.filter(G, F)
        }
        d(H, function (K, I, J) {
            if (G.call(F, K, I, J)) {
                E[E.length] = K
            }
        });
        return E
    };
    C.reject = function (H, G, F) {
        var E = [];
        if (H == null) {
            return E
        }
        d(H, function (K, I, J) {
            if (!G.call(F, K, I, J)) {
                E[E.length] = K
            }
        });
        return E
    };
    C.every = C.all = function (H, G, F) {
        G = G || C.identity;
        var E = true;
        if (H == null) {
            return E
        }
        if (a && H.every === a) {
            return H.every(G, F)
        }
        d(H, function (K, I, J) {
            if (!(E = E && G.call(F, K, I, J))) {
                return b
            }
        });
        return E
    };
    var p = C.some = C.any = function (H, G, F) {
            G = G || C.identity;
            var E = false;
            if (H == null) {
                return E
            }
            if (y && H.some === y) {
                return H.some(G, F)
            }
            d(H, function (K, I, J) {
                if (E = G.call(F, K, I, J)) {
                    return b
                }
            });
            return E
        };
    C.include = C.contains = function (G, F) {
        var E = false;
        if (G == null) {
            return E
        }
        if (t && G.indexOf === t) {
            return G.indexOf(F) != -1
        }
        p(G, function (H) {
            if (E = H === F) {
                return true
            }
        });
        return E
    };
    C.invoke = function (F, G) {
        var E = s.call(arguments, 2);
        return C.map(F, function (H) {
            return (G ? H[G] : H).apply(H, E)
        })
    };
    C.pluck = function (F, E) {
        return C.map(F, function (G) {
            return G[E]
        })
    };
    C.max = function (H, G, F) {
        if (!G && C.isArray(H)) {
            return Math.max.apply(Math, H)
        }
        var E = {
            computed: -Infinity
        };
        d(H, function (L, I, K) {
            var J = G ? G.call(F, L, I, K) : L;
            J >= E.computed && (E = {
                value: L,
                computed: J
            })
        });
        return E.value
    };
    C.min = function (H, G, F) {
        if (!G && C.isArray(H)) {
            return Math.min.apply(Math, H)
        }
        var E = {
            computed: Infinity
        };
        d(H, function (L, I, K) {
            var J = G ? G.call(F, L, I, K) : L;
            J < E.computed && (E = {
                value: L,
                computed: J
            })
        });
        return E.value
    };
    C.sortBy = function (G, F, E) {
        return C.pluck(C.map(G, function (J, H, I) {
            return {
                value: J,
                criteria: F.call(E, J, H, I)
            }
        }).sort(function (K, J) {
            var I = K.criteria,
                H = J.criteria;
            return I < H ? -1 : I > H ? 1 : 0
        }), "value")
    };
    C.sortedIndex = function (J, I, G) {
        G = G || C.identity;
        var E = 0,
            H = J.length;
        while (E < H) {
            var F = (E + H) >> 1;
            G(J[F]) < G(I) ? E = F + 1 : H = F
        }
        return E
    };
    C.toArray = function (E) {
        if (!E) {
            return []
        }
        if (E.toArray) {
            return E.toArray()
        }
        if (C.isArray(E)) {
            return E
        }
        if (C.isArguments(E)) {
            return s.call(E)
        }
        return C.values(E)
    };
    C.size = function (E) {
        return C.toArray(E).length
    };
    C.first = C.head = function (G, F, E) {
        return (F != null) && !E ? s.call(G, 0, F) : G[0]
    };
    C.rest = C.tail = function (G, E, F) {
        return s.call(G, (E == null) || F ? 1 : E)
    };
    C.last = function (E) {
        return E[E.length - 1]
    };
    C.compact = function (E) {
        return C.filter(E, function (F) {
            return !!F
        })
    };
    C.flatten = function (E) {
        return C.reduce(E, function (F, G) {
            if (C.isArray(G)) {
                return F.concat(C.flatten(G))
            }
            F[F.length] = G;
            return F
        }, [])
    };
    C.without = function (F) {
        var E = s.call(arguments, 1);
        return C.filter(F, function (G) {
            return !C.include(E, G)
        })
    };
    C.uniq = C.unique = function (F, E) {
        return C.reduce(F, function (G, I, H) {
            if (0 == H || (E === true ? C.last(G) != I : !C.include(G, I))) {
                G[G.length] = I
            }
            return G
        }, [])
    };
    C.intersect = function (F) {
        var E = s.call(arguments, 1);
        return C.filter(C.uniq(F), function (G) {
            return C.every(E, function (H) {
                return C.indexOf(H, G) >= 0
            })
        })
    };
    C.zip = function () {
        var E = s.call(arguments);
        var H = C.max(C.pluck(E, "length"));
        var G = new Array(H);
        for (var F = 0; F < H; F++) {
            G[F] = C.pluck(E, "" + F)
        }
        return G
    };
    C.indexOf = function (I, G, H) {
        if (I == null) {
            return -1
        }
        var F, E;
        if (H) {
            F = C.sortedIndex(I, G);
            return I[F] === G ? F : -1
        }
        if (t && I.indexOf === t) {
            return I.indexOf(G)
        }
        for (F = 0, E = I.length; F < E; F++) {
            if (I[F] === G) {
                return F
            }
        }
        return -1
    };
    C.lastIndexOf = function (G, F) {
        if (G == null) {
            return -1
        }
        if (f && G.lastIndexOf === f) {
            return G.lastIndexOf(F)
        }
        var E = G.length;
        while (E--) {
            if (G[E] === F) {
                return E
            }
        }
        return -1
    };
    C.range = function (J, H, I) {
        if (arguments.length <= 1) {
            H = J || 0;
            J = 0
        }
        I = arguments[2] || 1;
        var F = Math.max(Math.ceil((H - J) / I), 0);
        var E = 0;
        var G = new Array(F);
        while (E < F) {
            G[E++] = J;
            J += I
        }
        return G
    };
    C.bind = function (F, G) {
        if (F.bind === j && j) {
            return F.bind.apply(F, s.call(arguments, 1))
        }
        var E = s.call(arguments, 2);
        return function () {
            return F.apply(G, E.concat(s.call(arguments)))
        }
    };
    C.bindAll = function (F) {
        var E = s.call(arguments, 1);
        if (E.length == 0) {
            E = C.functions(F)
        }
        d(E, function (G) {
            F[G] = C.bind(F[G], F)
        });
        return F
    };
    C.memoize = function (G, F) {
        var E = {};
        F = F || C.identity;
        return function () {
            var H = F.apply(this, arguments);
            return o.call(E, H) ? E[H] : (E[H] = G.apply(this, arguments))
        }
    };
    C.delay = function (F, G) {
        var E = s.call(arguments, 2);
        return setTimeout(function () {
            return F.apply(F, E)
        }, G)
    };
    C.defer = function (E) {
        return C.delay.apply(C, [E, 1].concat(s.call(arguments, 1)))
    };
    var x = function (F, H, E) {
            var G;
            return function () {
                var J = this,
                    I = arguments;
                var K = function () {
                        G = null;
                        F.apply(J, I)
                    };
                if (E) {
                    clearTimeout(G)
                }
                if (E || !G) {
                    G = setTimeout(K, H)
                }
            }
        };
    C.throttle = function (E, F) {
        return x(E, F, false)
    };
    C.debounce = function (E, F) {
        return x(E, F, true)
    };
    C.once = function (G) {
        var E = false,
            F;
        return function () {
            if (E) {
                return F
            }
            E = true;
            return F = G.apply(this, arguments)
        }
    };
    C.wrap = function (E, F) {
        return function () {
            var G = [E].concat(s.call(arguments));
            return F.apply(this, G)
        }
    };
    C.compose = function () {
        var E = s.call(arguments);
        return function () {
            var F = s.call(arguments);
            for (var G = E.length - 1; G >= 0; G--) {
                F = [E[G].apply(this, F)]
            }
            return F[0]
        }
    };
    C.keys = A ||
    function (G) {
        if (G !== Object(G)) {
            throw new TypeError("Invalid object")
        }
        var F = [];
        for (var E in G) {
            if (o.call(G, E)) {
                F[F.length] = E
            }
        }
        return F
    };
    C.values = function (E) {
        return C.map(E, C.identity)
    };
    C.functions = C.methods = function (E) {
        return C.filter(C.keys(E), function (F) {
            return C.isFunction(E[F])
        }).sort()
    };
    C.extend = function (E) {
        d(s.call(arguments, 1), function (F) {
            for (var G in F) {
                E[G] = F[G]
            }
        });
        return E
    };
    C.defaults = function (E) {
        d(s.call(arguments, 1), function (F) {
            for (var G in F) {
                if (E[G] == null) {
                    E[G] = F[G]
                }
            }
        });
        return E
    };
    C.clone = function (E) {
        return C.isArray(E) ? E.slice() : C.extend({}, E)
    };
    C.tap = function (F, E) {
        E(F);
        return F
    };
    C.isEqual = function (F, E) {
        if (F === E) {
            return true
        }
        var I = typeof (F),
            K = typeof (E);
        if (I != K) {
            return false
        }
        if (F == E) {
            return true
        }
        if ((!F && E) || (F && !E)) {
            return false
        }
        if (F._chain) {
            F = F._wrapped
        }
        if (E._chain) {
            E = E._wrapped
        }
        if (F.isEqual) {
            return F.isEqual(E)
        }
        if (C.isDate(F) && C.isDate(E)) {
            return F.getTime() === E.getTime()
        }
        if (C.isNaN(F) && C.isNaN(E)) {
            return false
        }
        if (C.isRegExp(F) && C.isRegExp(E)) {
            return F.source === E.source && F.global === E.global && F.ignoreCase === E.ignoreCase && F.multiline === E.multiline
        }
        if (I !== "object") {
            return false
        }
        if (F.length && (F.length !== E.length)) {
            return false
        }
        var G = C.keys(F),
            J = C.keys(E);
        if (G.length != J.length) {
            return false
        }
        for (var H in F) {
            if (!(H in E) || !C.isEqual(F[H], E[H])) {
                return false
            }
        }
        return true
    };
    C.isEmpty = function (F) {
        if (C.isArray(F) || C.isString(F)) {
            return F.length === 0
        }
        for (var E in F) {
            if (o.call(F, E)) {
                return false
            }
        }
        return true
    };
    C.isElement = function (E) {
        return !!(E && E.nodeType == 1)
    };
    C.isArray = c ||
    function (E) {
        return v.call(E) === "[object Array]"
    };
    C.isArguments = function (E) {
        return !!(E && o.call(E, "callee"))
    };
    C.isFunction = function (E) {
        return !!(E && E.constructor && E.call && E.apply)
    };
    C.isString = function (E) {
        return !!(E === "" || (E && E.charCodeAt && E.substr))
    };
    C.isNumber = function (E) {
        return !!(E === 0 || (E && E.toExponential && E.toFixed))
    };
    C.isNaN = function (E) {
        return E !== E
    };
    C.isBoolean = function (E) {
        return E === true || E === false
    };
    C.isDate = function (E) {
        return !!(E && E.getTimezoneOffset && E.setUTCFullYear)
    };
    C.isRegExp = function (E) {
        return !!(E && E.test && E.exec && (E.ignoreCase || E.ignoreCase === false))
    };
    C.isNull = function (E) {
        return E === null
    };
    C.isUndefined = function (E) {
        return E === void 0
    };
    C.noConflict = function () {
        u._ = r;
        return this
    };
    C.identity = function (E) {
        return E
    };
    C.times = function (H, G, F) {
        for (var E = 0; E < H; E++) {
            G.call(F, E)
        }
    };
    C.mixin = function (E) {
        d(C.functions(E), function (F) {
            q(F, C[F] = E[F])
        })
    };
    var k = 0;
    C.uniqueId = function (E) {
        var F = k++;
        return E ? E + F : F
    };
    C.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g
    };
    C.template = function (H, G) {
        var I = C.templateSettings;
        var E = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + H.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(I.interpolate, function (J, K) {
            return "'," + K.replace(/\\'/g, "'") + ",'"
        }).replace(I.evaluate || null, function (J, K) {
            return "');" + K.replace(/\\'/g, "'").replace(/[\r\n\t]/g, " ") + "__p.push('"
        }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');";
        var F = new Function("obj", E);
        return G ? F(G) : F
    };
    var g = function (E) {
            this._wrapped = E
        };
    C.prototype = g.prototype;
    var n = function (F, E) {
            return E ? C(F).chain() : F
        };
    var q = function (E, F) {
            g.prototype[E] = function () {
                var G = s.call(arguments);
                w.call(G, this._wrapped);
                return n(F.apply(C, G), this._chain)
            }
        };
    C.mixin(C);
    d(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (E) {
        var F = i[E];
        g.prototype[E] = function () {
            F.apply(this._wrapped, arguments);
            return n(this._wrapped, this._chain)
        }
    });
    d(["concat", "join", "slice"], function (E) {
        var F = i[E];
        g.prototype[E] = function () {
            return n(F.apply(this._wrapped, arguments), this._chain)
        }
    });
    g.prototype.chain = function () {
        this._chain = true;
        return this
    };
    g.prototype.value = function () {
        return this._wrapped
    }
})();
(function () {
    jQuery.fn.autohide = function (a) {
        var b = this;
        a = _.extend({
            clickable: null,
            onHide: null
        }, a || {});
        b._autoignore = true;
        setTimeout(function () {
            delete b._autoignore
        }, 0);
        if (!b._autohider) {
            b.forceHide = function (c) {
                if (!c && a.onHide) {
                    a.onHide()
                }
                b.hide();
                DV.jQuery(document).unbind("click", b._autohider);
                DV.jQuery(document).unbind("keypress", b._autohider);
                b._autohider = null;
                b.forceHide = null
            };
            b._autohider = function (c) {
                if (b._autoignore) {
                    return
                }
                if (a.clickable && (b[0] == c.target || _.include(DV.jQuery(c.target).parents(), b[0]))) {
                    return
                }
                if (a.onHide && !a.onHide(c)) {
                    return
                }
                b.forceHide(c)
            };
            DV.jQuery(document).bind("click", this._autohider);
            DV.jQuery(document).bind("keypress", this._autohider)
        }
    };
    jQuery.fn.acceptInput = function (b) {
        var a = {
            delay: 1000,
            callback: null,
            className: "acceptInput",
            initialStateClassName: "acceptInput-awaitingActivity",
            typingStateClassName: "acceptInput-acceptingInput",
            inputClassName: "acceptInput-textField"
        };
        if (b) {
            DV.jQuery.extend(a, b)
        }
        this.editTimer = null;
        this.deny = function () {
            this.parent().addClass("stopAcceptingInput")
        };
        this.allow = function () {
            this.parent().removeClass("stopAcceptingInput")
        };
        this.each(function (d, e) {
            if (DV.jQuery(e).parent().hasClass(a.initialStateClassName)) {
                return true
            }
            e = DV.jQuery(e);
            var c = e.wrap('<span class="' + a.initialStateClassName + '"></span>');
            c = c.parent();
            var f = DV.jQuery('<input type="text" class="' + a.inputClassName + '" style="display:none;" />').appendTo(c);
            f.bind("blur", function () {
                c.addClass(a.initialStateClassName).removeClass(a.typingStateClassName);
                f.hide();
                e.show()
            });
            f.bind("keyup", function () {
                var g = f.attr("value");
                e.text(g);
                if (a.changeCallBack) {
                    DV.jQuery.fn.acceptInput.editTimer = setTimeout(a.changeCallBack, 500)
                }
            });
            f.bind("keydown", function () {
                if (DV.jQuery.fn.acceptInput.editTimer) {
                    clearTimeout(DV.jQuery.fn.acceptInput.editTimer)
                }
            });
            c.bind("click", function () {
                if (c.hasClass("stopAcceptingInput")) {
                    return
                }
                if (c.hasClass(a.initialStateClassName)) {
                    var g = function () {
                            c.addClass(a.initialStateClassName).removeClass(a.typingStateClassName)
                        };
                    DV.jQuery(f).autohide({
                        clickable: true,
                        onHide: DV.jQuery.proxy(g, this)
                    });
                    e.hide();
                    f.attr("value", e.text()).show()[0].focus();
                    f[0].select();
                    c.addClass(a.typingStateClassName).removeClass(a.initialStateClassName)
                }
            })
        });
        return this
    }
}).call(this);
(function (a) {
    a.fn.placeholder = function (d) {
        var e = {
            message: "...",
            className: "placeholder",
            clearClassName: "show_cancel_search"
        };
        var b = a.extend({}, e, d);
        var c = function (f) {
                f.val(f.attr("placeholder") || b.message);
                f.addClass(b.className)
            };
        return this.each(function () {
            var f = a(this);
            if (f.attr("type") == "search") {
                return
            }
            f.bind("blur", function () {
                if (f.val() == "") {
                    c(f)
                }
            }).bind("focus", function () {
                if (f.val() == (f.attr("placeholder") || b.message)) {
                    f.val("")
                }
                f.removeClass(b.className)
            }).bind("keyup", function () {
                var g = f.val();
                if (g != "" && g != b.message) {
                    f.parent().addClass(b.clearClassName)
                } else {
                    f.parent().removeClass(b.clearClassName)
                }
            });
            _.defer(function () {
                f.keyup().blur()
            })
        })
    }
})(jQuery);
window.console || (window.console = {});
console.log || (console.log = _.identity);
window.DV = window.DV || {};
DV.jQuery = jQuery.noConflict(true);
DV.viewers = DV.viewers || {};
DV.model = DV.model || {};
DV.Annotation = function (a) {
    this.position = {
        top: a.top,
        left: a.left
    };
    this.dimensions = {
        width: a.width,
        height: a.height
    };
    this.page = a.page;
    this.pageEl = a.pageEl;
    this.annotationContainerEl = a.annotationContainerEl;
    this.viewer = this.page.set.viewer;
    this.annotationEl = null;
    this.renderedHTML = a.renderedHTML;
    this.type = a.type;
    this.id = a.id;
    this.model = this.viewer.models.annotations.getAnnotation(this.id);
    this.state = "collapsed";
    this.active = false;
    this.remove();
    this.add();
    if (a.active) {
        this.viewer.helpers.setActiveAnnotationLimits(this);
        this.viewer.events.resetTracker();
        this.active = null;
        this.show();
        if (a.showEdit) {
            this.showEdit()
        }
    }
};
DV.Annotation.prototype.add = function () {
    if (this.type === "page") {
        this.annotationEl = this.renderedHTML.insertBefore(this.annotationContainerEl)
    } else {
        if (this.page.annotations.length > 0) {
            for (var b = 0, a = this.page.annotations.length; b < a; b++) {
                if (this.page.annotations[b].id === this.id) {
                    return false
                } else {
                    this.annotationEl = this.renderedHTML.appendTo(this.annotationContainerEl)
                }
            }
        } else {
            this.annotationEl = this.renderedHTML.appendTo(this.annotationContainerEl)
        }
    }
};
DV.Annotation.prototype.next = function () {
    this.hide.preventRemovalOfCoverClass = true;
    var a = this.viewer.models.annotations.getNextAnnotation(this.id);
    if (!a) {
        return
    }
    this.page.set.showAnnotation({
        index: a.index,
        id: a.id,
        top: a.top
    })
};
DV.Annotation.prototype.previous = function () {
    this.hide.preventRemovalOfCoverClass = true;
    var a = this.viewer.models.annotations.getPreviousAnnotation(this.id);
    if (!a) {
        return
    }
    this.page.set.showAnnotation({
        index: a.index,
        id: a.id,
        top: a.top
    })
};
DV.Annotation.prototype.show = function (a) {
    if (this.viewer.activeAnnotation && this.viewer.activeAnnotation.id != this.id) {
        this.viewer.activeAnnotation.hide()
    }
    this.viewer.annotationToLoadId = null;
    this.viewer.elements.window.addClass("DV-coverVisible");
    this.annotationEl.find("div.DV-annotationBG").css({
        display: "block",
        opacity: 1
    });
    this.annotationEl.addClass("DV-activeAnnotation");
    this.viewer.activeAnnotation = this;
    this.viewer.helpers.addObserver("trackAnnotation");
    this.viewer.helpers.setActiveAnnotationInNav(this.id);
    this.active = true;
    this.pageEl.parent(".DV-set").addClass("DV-activePage");
    if (a && a.edit) {
        this.showEdit()
    }
};
DV.Annotation.prototype.hide = function (b) {
    var a = parseInt(this.viewer.elements.currentPage.text(), 10);
    if (this.type !== "page") {
        this.annotationEl.find("div.DV-annotationBG").css({
            opacity: 0,
            display: "none"
        })
    }
    var c = this.annotationEl.hasClass("DV-editing");
    this.annotationEl.removeClass("DV-editing DV-activeAnnotation");
    if (b === true) {
        this.viewer.elements.window.removeClass("DV-coverVisible")
    }
    if (this.hide.preventRemovalOfCoverClass === false || !this.hide.preventRemovalOfCoverClass) {
        this.viewer.elements.window.removeClass("DV-coverVisible");
        this.hide.preventRemovalOfCoverClass = false
    }
    this.viewer.activeAnnotation = null;
    this.viewer.events.trackAnnotation.h = null;
    this.viewer.events.trackAnnotation.id = null;
    this.viewer.events.trackAnnotation.combined = null;
    this.active = false;
    this.viewer.pageSet.setActiveAnnotation(null);
    this.viewer.helpers.removeObserver("trackAnnotation");
    this.viewer.helpers.setActiveAnnotationInNav();
    this.pageEl.parent(".DV-set").removeClass("DV-activePage");
    this.removeConnector(true);
    if (c) {
        this.viewer.helpers.saveAnnotation({
            target: this.annotationEl
        }, "onlyIfText")
    }
};
DV.Annotation.prototype.toggle = function (a) {
    if (this.viewer.activeAnnotation && (this.viewer.activeAnnotation != this)) {
        this.viewer.activeAnnotation.hide()
    }
    if (this.type === "page") {
        return
    }
    this.annotationEl.toggleClass("DV-activeAnnotation");
    if (this.active == true) {
        this.hide(true)
    } else {
        this.show()
    }
};
DV.Annotation.prototype.drawConnector = function () {
    if (this.active != true) {
        this.viewer.elements.window.addClass("DV-annotationActivated");
        this.annotationEl.addClass("DV-annotationHover")
    }
};
DV.Annotation.prototype.removeConnector = function (a) {
    if (this.active != true) {
        this.viewer.elements.window.removeClass("DV-annotationActivated");
        this.annotationEl.removeClass("DV-annotationHover")
    }
};
DV.Annotation.prototype.showEdit = function () {
    this.annotationEl.addClass("DV-editing");
    this.viewer.$(".DV-annotationTitleInput", this.annotationEl).focus()
};
DV.Annotation.prototype.remove = function () {
    DV.jQuery("#DV-annotation-" + this.id).remove()
};
DV.DragReporter = function (d, a, c, b) {
    this.viewer = d;
    this.dragClassName = "DV-dragging";
    this.sensitivityY = 1;
    this.sensitivityX = 1;
    this.oldPageY = 0;
    _.extend(this, b);
    this.dispatcher = c;
    this.toWatch = this.viewer.$(a);
    this.boundReporter = _.bind(this.mouseMoveReporter, this);
    this.boundMouseUpReporter = _.bind(this.mouseUpReporter, this);
    this.boundMouseDownReporter = _.bind(this.mouseDownReporter, this);
    this.setBinding()
};
DV.DragReporter.prototype.shouldIgnore = function (b) {
    if (!this.ignoreSelector) {
        return false
    }
    var a = this.viewer.$(b.target);
    return a.parents().is(this.ignoreSelector) || a.is(this.ignoreSelector)
};
DV.DragReporter.prototype.mouseUpReporter = function (a) {
    if (this.shouldIgnore(a)) {
        return true
    }
    a.preventDefault();
    clearInterval(this.updateTimer);
    this.stop()
};
DV.DragReporter.prototype.oldPositionUpdater = function () {
    this.oldPageY = this.pageY
};
DV.DragReporter.prototype.stop = function () {
    this.toWatch.removeClass(this.dragClassName);
    this.toWatch.unbind("mousemove")
};
DV.DragReporter.prototype.setBinding = function () {
    this.toWatch.mouseup(this.boundMouseUpReporter);
    this.toWatch.mousedown(this.boundMouseDownReporter)
};
DV.DragReporter.prototype.unBind = function () {
    this.toWatch.unbind("mouseup", this.boundMouseUpReporter);
    this.toWatch.unbind("mousedown", this.boundMouseDownReporter)
};
DV.DragReporter.prototype.destroy = function () {
    this.unBind();
    this.toWatch = null
};
DV.DragReporter.prototype.mouseDownReporter = function (a) {
    if (this.shouldIgnore(a)) {
        return true
    }
    a.preventDefault();
    this.pageY = a.pageY;
    this.pageX = a.pageX;
    this.oldPageY = a.pageY;
    this.updateTimer = setInterval(_.bind(this.oldPositionUpdater, this), 1200);
    this.toWatch.addClass(this.dragClassName);
    this.toWatch.mousemove(this.boundReporter)
};
DV.DragReporter.prototype.mouseMoveReporter = function (f) {
    if (this.shouldIgnore(f)) {
        return true
    }
    f.preventDefault();
    var b = Math.round(this.sensitivityX * (this.pageX - f.pageX));
    var a = Math.round(this.sensitivityY * (this.pageY - f.pageY));
    var d = (b > 0) ? "right" : "left";
    var c = (a > 0) ? "down" : "up";
    this.pageY = f.pageY;
    this.pageX = f.pageX;
    if (a === 0 && b === 0) {
        return
    }
    this.dispatcher({
        event: f,
        deltaX: b,
        deltaY: a,
        directionX: d,
        directionY: c
    })
};
DV.Elements = function (d) {
    this._viewer = d;
    var c = DV.Schema.elements;
    for (var b = 0, a = c.length; b < a; b++) {
        this.getElement(c[b])
    }
};
DV.Elements.prototype.getElement = function (b, a) {
    this[b.name] = this._viewer.$(b.query)
};
DV.History = function (a) {
    this.viewer = a;
    DV.History.count++;
    this.URL_CHECK_INTERVAL = 500;
    this.USE_IFRAME = DV.jQuery.browser.msie && DV.jQuery.browser.version < 8;
    this.handlers = [];
    this.defaultCallback = null;
    this.hash = window.location.hash;
    _.bindAll(this, "checkURL");
    if (DV.History.count > 1) {
        return
    }
    DV.jQuery(_.bind(function () {
        if (this.USE_IFRAME) {
            this.iframe = DV.jQuery('<iframe src="javascript:0"/>').hide().appendTo("body")[0].contentWindow
        }
        if ("onhashchange" in window) {
            window.onhashchange = this.checkURL
        } else {
            setInterval(this.checkURL, this.URL_CHECK_INTERVAL)
        }
    }, this))
};
DV.History.count = 0;
DV.History.prototype = {
    register: function (a, b) {
        this.handlers.push({
            matcher: a,
            callback: b
        })
    },
    save: function (a) {
        if (DV.History.count > 1) {
            return
        }
        window.location.hash = this.hash = (a ? "#" + a : "");
        if (this.USE_IFRAME && (this.iframe && (this.hash != this.iframe.location.hash))) {
            this.iframe.document.open().close();
            this.iframe.location.hash = this.hash
        }
    },
    checkURL: function () {
        if (DV.History.count > 1) {
            return
        }
        try {
            var b = (this.USE_IFRAME ? this.iframe : window).location.hash
        } catch (a) {}
        if (!b || b == this.hash || "#" + b == this.hash || b == decodeURIComponent(this.hash)) {
            return false
        }
        if (this.USE_IFRAME) {
            window.location.hash = b
        }
        this.loadURL(true)
    },
    loadURL: function (c) {
        var d = this.hash = window.location.hash;
        for (var b = this.handlers.length - 1; b >= 0; b--) {
            var a = d.match(this.handlers[b].matcher);
            if (a) {
                if (c === true) {
                    this.handlers[b].callback.apply(this.handlers[b].callback, a.slice(1, a.length))
                }
                return true
            }
        }
        if (this.defaultCallback != null && c === true) {
            this.defaultCallback()
        } else {
            return false
        }
    }
};
DV.Page = function (d, c) {
    this.viewer = d;
    this.index = c.index;
    for (var b in c) {
        this[b] = c[b]
    }
    this.el = this.viewer.$(this.el);
    this.parent = this.el.parent();
    this.pageNumberEl = this.el.find("span.DV-pageNumber");
    this.pageInsertEl = this.el.find(".DV-pageNoteInsert");
    this.removedOverlayEl = this.el.find(".DV-overlay");
    this.pageImageEl = this.getPageImage();
    this.pageEl = this.el.find("div.DV-page");
    this.annotationContainerEl = this.el.find("div.DV-annotations");
    this.coverEl = this.el.find("div.DV-cover");
    this.loadTimer = null;
    this.hasLayerPage = false;
    this.hasLayerRegional = false;
    this.imgSource = null;
    this.offset = null;
    this.pageNumber = null;
    this.zoom = 1;
    this.annotations = [];
    var a = this.viewer.models;
    this.model_document = a.document;
    this.model_pages = a.pages;
    this.model_annotations = a.annotations;
    this.model_chapters = a.chapters
};
DV.Page.prototype.setPageImage = function () {
    this.pageImageEl = this.getPageImage()
};
DV.Page.prototype.getPageImage = function () {
    return this.el.find("img.DV-pageImage")
};
DV.Page.prototype.getOffset = function () {
    return this.model_document.offsets[this.index]
};
DV.Page.prototype.getPageNoteHeight = function () {
    return this.model_pages.pageNoteHeights[this.index]
};
DV.Page.prototype.draw = function (d) {
    if (this.index === d.index && !d.force && this.imgSource == this.model_pages.imageURL(this.index)) {
        return
    }
    this.index = (d.force === true) ? this.index : d.index;
    var h = [];
    var f = this.model_pages.imageURL(this.index);
    this.el[0].className = this.el[0].className.replace(/\s*DV-page-\d+/, "") + " DV-page-" + (this.index + 1);
    if (this.imgSource != f) {
        this.imgSource = f;
        this.loadImage()
    }
    this.sizeImage();
    this.position();
    if (this.pageNumber != this.index + 1 || d.forceAnnotationRedraw === true) {
        for (var c = 0; c < this.annotations.length; c++) {
            this.annotations[c].remove();
            delete this.annotations[c];
            this.hasLayerRegional = false;
            this.hasLayerPage = false
        }
        this.annotations = [];
        var e = this.model_annotations.byPage[this.index];
        if (e) {
            for (var c = 0; c < e.length; c++) {
                var b = e[c];
                if (b.id === this.viewer.annotationToLoadId) {
                    var g = true;
                    if (b.id === this.viewer.annotationToLoadEdit) {
                        d.edit = true
                    }
                    if (this.viewer.openingAnnotationFromHash) {
                        this.viewer.helpers.jump(this.index, (b.top || 0) - 37);
                        this.viewer.openingAnnotationFromHash = false
                    }
                } else {
                    var g = false
                }
                if (b.type == "page") {
                    this.hasLayerPage = true
                } else {
                    if (b.type == "regional") {
                        this.hasLayerRegional = true
                    }
                }
                var a = new DV.Annotation({
                    renderedHTML: this.viewer.$(".DV-allAnnotations .DV-annotation[rel=aid-" + b.id + "]").clone().attr("id", "DV-annotation-" + b.id),
                    id: b.id,
                    page: this,
                    pageEl: this.pageEl,
                    annotationContainerEl: this.annotationContainerEl,
                    pageNumber: this.pageNumber,
                    state: "collapsed",
                    top: b.y1,
                    left: b.x1,
                    width: b.x1 + b.x2,
                    height: b.y1 + b.y2,
                    active: g,
                    showEdit: d.edit,
                    type: b.type
                });
                this.annotations.push(a)
            }
        }
        this.pageInsertEl.toggleClass("visible", !this.hasLayerPage);
        this.renderMeta({
            pageNumber: this.index + 1
        });
        this.drawRemoveOverlay()
    }
    this.setPageType()
};
DV.Page.prototype.drawRemoveOverlay = function () {
    this.removedOverlayEl.toggleClass("visible", !! this.viewer.models.removedPages[this.index + 1])
};
DV.Page.prototype.setPageType = function () {
    if (this.annotations.length > 0) {
        if (this.hasLayerPage === true) {
            this.el.addClass("DV-layer-page")
        }
        if (this.hasLayerRegional === true) {
            this.el.addClass("DV-layer-page")
        }
    } else {
        this.el.removeClass("DV-layer-page DV-layer-regional")
    }
};
DV.Page.prototype.position = function (a) {
    this.el.css({
        top: this.model_document.offsets[this.index]
    });
    this.offset = this.getOffset()
};
DV.Page.prototype.renderMeta = function (a) {
    this.pageNumberEl.text("p. " + a.pageNumber);
    this.pageNumber = a.pageNumber
};
DV.Page.prototype.loadImage = function (c) {
    if (this.loadTimer) {
        clearTimeout(this.loadTimer);
        delete this.loadTimer
    }
    this.el.removeClass("DV-loaded").addClass("DV-loading");
    var a = this.model_pages;
    var b = DV.jQuery(new Image);
    var d = this;
    var e = function () {
            if (d.loadTimer) {
                clearTimeout(d.loadTimer);
                delete d.loadTimer
            }
            b.bind("load readystatechange", function (g) {
                if (this.complete || (this.readyState == "complete" && g.type == "readystatechange")) {
                    if (b != d._currentLoader) {
                        return
                    }
                    a.updateHeight(b[0], d.index);
                    d.drawImage(b[0].src);
                    clearTimeout(d.loadTimer);
                    delete d.loadTimer
                }
            });
            var f = d.model_pages.imageURL(d.index);
            d._currentLoader = b;
            b[0].src = f
        };
    this.loadTimer = setTimeout(e, 150);
    this.viewer.pageSet.redraw()
};
DV.Page.prototype.sizeImage = function () {
    var b = this.model_pages.width;
    var a = this.model_pages.getPageHeight(this.index);
    this.coverEl.css({
        width: b,
        height: a
    });
    this.pageImageEl.css({
        width: b,
        height: a
    });
    this.el.css({
        height: a,
        width: b
    });
    this.pageEl.css({
        height: a,
        width: b
    })
};
DV.Page.prototype.drawImage = function (b) {
    var a = this.model_pages.getPageHeight(this.index);
    if (b == this.pageImageEl.attr("src") && a == this.pageImageEl.attr("height")) {
        this.el.addClass("DV-loaded").removeClass("DV-loading");
        return
    }
    this.pageImageEl.replaceWith('<img width="' + this.model_pages.width + '" height="' + a + '" class="DV-pageImage" src="' + b + '" />');
    this.setPageImage();
    this.sizeImage();
    this.el.addClass("DV-loaded").removeClass("DV-loading")
};
DV.PageSet = function (a) {
    this.currentPage = null;
    this.pages = {};
    this.viewer = a;
    this.zoomText()
};
DV.PageSet.prototype.execute = function (a, b) {
    this.pages.each(function (c) {
        c[a].apply(c, b)
    })
};
DV.PageSet.prototype.buildPages = function (b) {
    b = b || {};
    var a = this.getPages();
    for (var c = 0; c < a.length; c++) {
        var d = a[c];
        d.set = this;
        d.index = c;
        this.pages[d.label] = new DV.Page(this.viewer, d);
        if (d.currentPage == true) {
            this.currentPage = this.pages[d.label]
        }
    }
    this.viewer.models.annotations.renderAnnotations()
};
DV.PageSet.prototype.getPages = function () {
    var a = [];
    this.viewer.elements.sets.each(function (d, c) {
        var b = (d == 0) ? true : false;
        a.push({
            label: "p" + d,
            el: c,
            index: d,
            pageNumber: d + 1,
            currentPage: b
        })
    });
    return a
};
DV.PageSet.prototype.reflowPages = function () {
    this.viewer.models.pages.resize();
    this.viewer.helpers.setActiveAnnotationLimits();
    this.redraw(false, true)
};
DV.PageSet.prototype.simpleReflowPages = function () {
    this.viewer.helpers.setActiveAnnotationLimits();
    this.redraw(false, false)
};
DV.PageSet.prototype.cleanUp = function () {
    if (this.viewer.activeAnnotation) {
        this.viewer.activeAnnotation.hide(true)
    }
};
DV.PageSet.prototype.zoom = function (d) {
    if (this.viewer.models.document.zoomLevel === d.zoomLevel) {
        return
    }
    var e = this.viewer.models.document.currentIndex();
    var c = this.viewer.models.document.offsets[e];
    var j = this.viewer.models.document.zoomLevel * 1;
    var f = d.zoomLevel / j;
    var b = this.viewer.elements.window.scrollTop();
    this.viewer.models.document.zoom(d.zoomLevel);
    var h = (parseInt(b, 10) > parseInt(c, 10)) ? b - c : c - b;
    var a = h / this.viewer.models.pages.height;
    this.reflowPages();
    this.zoomText();
    if (this.viewer.state === "ViewThumbnails") {
        this.viewer.thumbnails.setZoom(d.zoomLevel);
        this.viewer.thumbnails.lazyloadThumbnails()
    }
    if (this.viewer.state === "ViewDocument") {
        this.viewer.$(".DV-annotationRegion.DV-accessRedact").each(function () {
            var k = DV.jQuery(this);
            k.css({
                top: Math.round(k.position().top * f),
                left: Math.round(k.position().left * f),
                width: Math.round(k.width() * f),
                height: Math.round(k.height() * f)
            })
        })
    }
    if (this.viewer.activeAnnotation != null) {
        var g = {
            index: this.viewer.models.document.currentIndex(),
            top: this.viewer.activeAnnotation.top,
            id: this.viewer.activeAnnotation.id
        };
        this.viewer.activeAnnotation = null;
        this.showAnnotation(g);
        this.viewer.helpers.setActiveAnnotationLimits(this.viewer.activeAnnotation)
    } else {
        var i = Math.round(this.viewer.models.pages.height * a);
        this.viewer.helpers.jump(this.viewer.models.document.currentIndex(), i)
    }
};
DV.PageSet.prototype.zoomText = function () {
    var b = this.viewer.models.pages.DEFAULT_PADDING;
    var a = this.viewer.models.pages.zoomLevel;
    this.viewer.$(".DV-textContents").width(a - b);
    this.viewer.$(".DV-textPage").width(a);
    if (this.viewer.options.zoom == "auto") {
        b = this.viewer.models.pages.REDUCED_PADDING
    }
    this.viewer.elements.collection.css({
        width: a + b
    })
};
DV.PageSet.prototype.draw = function (a) {
    for (var c = 0, b = a.length; c < b; c++) {
        var d = this.pages[a[c].label];
        if (d) {
            d.draw({
                index: a[c].index,
                pageNumber: a[c].index + 1
            })
        }
    }
};
DV.PageSet.prototype.redraw = function (a, b) {
    if (this.pages.p0) {
        this.pages.p0.draw({
            force: true,
            forceAnnotationRedraw: b
        })
    }
    if (this.pages.p1) {
        this.pages.p1.draw({
            force: true,
            forceAnnotationRedraw: b
        })
    }
    if (this.pages.p2) {
        this.pages.p2.draw({
            force: true,
            forceAnnotationRedraw: b
        })
    }
    if (b && this.viewer.activeAnnotation) {
        this.viewer.helpers.jump(this.viewer.activeAnnotation.page.index, this.viewer.activeAnnotation.position.top - 37)
    }
};
DV.PageSet.prototype.setActiveAnnotation = function (b, a) {
    this.viewer.annotationToLoadId = b;
    this.viewer.annotationToLoadEdit = a ? b : null
};
DV.PageSet.prototype.showAnnotation = function (d, b) {
    b = b || {};
    if (this.viewer.state === "ViewAnnotation") {
        var f = this.viewer.$(".DV-allAnnotations div[rel=aid-" + d.id + "]")[0].offsetTop;
        this.viewer.elements.window.scrollTop(f + 10, "fast");
        this.viewer.helpers.setActiveAnnotationInNav(d.id);
        this.viewer.activeAnnotationId = d.id;
        return
    } else {
        this.viewer.helpers.removeObserver("trackAnnotation");
        this.viewer.activeAnnotationId = null;
        if (this.viewer.activeAnnotation != null) {
            this.viewer.activeAnnotation.hide()
        }
        this.setActiveAnnotation(d.id, b.edit);
        var e = this.viewer.models.annotations.byId[d.id].type == "page";
        var a = e ? -7 : 36;
        var f = d.top - a;
        for (var c = 0; c <= 2; c++) {
            if (this.pages["p" + c]) {
                for (var g = 0; g < this.pages["p" + c].annotations.length; g++) {
                    if (this.pages["p" + c].annotations[g].id === d.id) {
                        this.viewer.helpers.jump(d.index, f);
                        this.pages["p" + c].annotations[g].show(b);
                        return
                    }
                }
            }
        }
        this.viewer.helpers.jump(d.index, f)
    }
};
DV.Thumbnails = function (a) {
    this.currentIndex = 0;
    this.zoomLevel = null;
    this.scrollTimer = null;
    this.imageUrl = a.schema.document.resources.page.image.replace(/\{size\}/, "small");
    this.pageCount = a.schema.document.pages;
    this.viewer = a;
    this.resizeId = _.uniqueId();
    this.sizes = {
        "0": {
            w: 60,
            h: 75
        },
        "1": {
            w: 90,
            h: 112
        },
        "2": {
            w: 120,
            h: 150
        },
        "3": {
            w: 150,
            h: 188
        },
        "4": {
            w: 180,
            h: 225
        }
    };
    _.bindAll(this, "lazyloadThumbnails", "loadThumbnails")
};
DV.Thumbnails.prototype.render = function () {
    this.el = this.viewer.$(".DV-thumbnails");
    this.getCurrentIndex();
    this.getZoom();
    if (this.pageCount <= 100 || this.currentIndex >= 100) {
        this.buildThumbnails(1, this.pageCount)
    } else {
        this.buildThumbnails(1, 100);
        _.delay(_.bind(this.buildThumbnails, this, 101, this.pageCount), 100)
    }
    this.setZoom();
    this.viewer.elements.window.unbind("scroll.thumbnails").bind("scroll.thumbnails", this.lazyloadThumbnails);
    var a = "resize.thumbnails-" + this.resizeId;
    DV.jQuery(window).unbind(a).bind(a, this.lazyloadThumbnails)
};
DV.Thumbnails.prototype.buildThumbnails = function (b, a) {
    if (b == 1) {
        this.el.empty()
    }
    var c = JST.thumbnails({
        page: b,
        endPage: a,
        zoom: this.zoomLevel,
        imageUrl: this.imageUrl
    });
    this.el.html(this.el.html() + c);
    this.highlightCurrentPage();
    _.defer(this.loadThumbnails)
};
DV.Thumbnails.prototype.getCurrentIndex = function () {
    this.currentIndex = this.viewer.models.document.currentIndex()
};
DV.Thumbnails.prototype.highlightCurrentPage = function () {
    this.currentIndex = this.viewer.models.document.currentIndex();
    this.viewer.$(".DV-thumbnail.DV-selected").removeClass("DV-selected");
    var b = this.viewer.$(".DV-thumbnail:eq(" + this.currentIndex + ")");
    if (b.length) {
        b.addClass("DV-selected");
        var a = this.viewer.$(".DV-pages");
        a.scrollTop(a.scrollTop() + b.position().top - 12)
    }
};
DV.Thumbnails.prototype.setZoom = function (b) {
    this.getZoom(b);
    var a = this.sizes[this.zoomLevel];
    this.viewer.$(".DV-hasHeight").each(function (c) {
        var d = a.w / this.width;
        DV.jQuery(this).css({
            height: this.height * d
        })
    });
    this.viewer.$(".DV-hasWidth").each(function (c) {
        var d = a.h / this.height;
        var e = DV.jQuery(this);
        e.add(e.prev(".DV-thumbnail-shadow")).css({
            width: this.width * d
        })
    });
    this.el[0].className = this.el[0].className.replace(/DV-zoom-\d\s*/, "");
    this.el.addClass("DV-zoom-" + this.zoomLevel)
};
DV.Thumbnails.prototype.getZoom = function (a) {
    if (a != null) {
        return this.zoomLevel = _.indexOf(this.viewer.models.document.ZOOM_RANGES, a)
    } else {
        return this.zoomLevel = this.viewer.slider.slider("value")
    }
};
DV.Thumbnails.prototype.setImageSize = function (f, g) {
    var c = this.sizes[this.zoomLevel];
    var d = c.w / f.width;
    var a = f.height * d;
    if (Math.abs(c.h - a) > 10 || (/DV-has/).test(g[0].className)) {
        if (a < c.h) {
            g.addClass("DV-hasHeight").css({
                height: a
            })
        } else {
            var b = a / c.h;
            var e = c.w / b;
            g.add(g.prev(".DV-thumbnail-shadow")).addClass("DV-hasWidth").css({
                width: e
            })
        }
    }
    g.attr({
        src: f.src
    })
};
DV.Thumbnails.prototype.lazyloadThumbnails = function () {
    if (this.viewer.state != "ViewThumbnails") {
        return
    }
    if (this.scrollTimer) {
        clearTimeout(this.scrollTimer)
    }
    this.scrollTimer = setTimeout(this.loadThumbnails, 100)
};
DV.Thumbnails.prototype.loadThumbnails = function () {
    var e = this.viewer;
    var b = e.$(".DV-thumbnails").width();
    var k = e.elements.window.height();
    var d = e.elements.window.scrollTop();
    var a = d + k;
    var f = e.$(".DV-thumbnail:first-child");
    var c = f.outerHeight(true);
    var h = f.outerWidth(true);
    var i = Math.floor(b / h);
    var g = Math.floor(d / c * i);
    var j = Math.ceil(a / c * i);
    g -= (g % i) + 1;
    j += i - (j % i);
    this.loadImages(g, j)
};
DV.Thumbnails.prototype.loadImages = function (e, c) {
    var d = this;
    var f = this.viewer;
    var b = e > 0 ? ":gt(" + e + ")" : "";
    var a = c <= this.pageCount ? ":lt(" + c + ")" : "";
    f.$(".DV-thumbnail" + a + b).each(function (g) {
        var h = f.$(this);
        if (!h.attr("src")) {
            var k = f.$(".DV-thumbnail-image", h);
            var j = new Image();
            DV.jQuery(j).bind("load", _.bind(d.setImageSize, d, j, k)).attr({
                src: k.attr("data-src")
            })
        }
    })
};
DV.Schema = function () {
    this.models = {};
    this.views = {};
    this.states = {};
    this.helpers = {};
    this.events = {};
    this.elements = {};
    this.text = {};
    this.data = {
        zoomLevel: 700,
        pageWidthPadding: 20,
        additionalPaddingOnPage: 30,
        state: {
            page: {
                previous: 0,
                current: 0,
                next: 1
            }
        }
    }
};
DV.Schema.prototype.importCanonicalDocument = function (a) {
    _.uniqueId();
    a.sections = _.sortBy(a.sections || [], function (b) {
        return b.page
    });
    a.annotations = a.annotations || [];
    a.canonicalURL = a.canonical_url;
    this.document = DV.jQuery.extend(true, {}, a);
    this.data.title = a.title;
    this.data.totalPages = a.pages;
    this.data.totalAnnotations = a.annotations.length;
    this.data.sections = a.sections;
    this.data.chapters = [];
    this.data.annotationsById = {};
    this.data.annotationsByPage = {};
    _.each(a.annotations, DV.jQuery.proxy(this.loadAnnotation, this))
};
DV.Schema.prototype.loadAnnotation = function (b) {
    if (b.id) {
        b.server_id = b.id
    }
    var a = b.page - 1;
    b.id = b.id || _.uniqueId();
    b.title = b.title || "Untitled Note";
    b.text = b.content || "";
    b.access = b.access || "public";
    b.type = b.location && b.location.image ? "region" : "page";
    if (b.type === "region") {
        var e = DV.jQuery.map(b.location.image.split(","), function (g, f) {
            return parseInt(g, 10)
        });
        b.y1 = e[0];
        b.x2 = e[1];
        b.y2 = e[2];
        b.x1 = e[3]
    } else {
        if (b.type === "page") {
            b.y1 = 0;
            b.x2 = 0;
            b.y2 = 0;
            b.x1 = 0
        }
    }
    this.data.annotationsById[b.id] = b;
    var d = this.data.annotationsByPage[a] = this.data.annotationsByPage[a] || [];
    var c = _.sortedIndex(d, b, function (f) {
        return f.y1
    });
    d.splice(c, 0, b);
    return b
};
DV.Schema.elements = [{
    name: "browserDocument",
    query: document
}, {
    name: "browserWindow",
    query: window
}, {
    name: "header",
    query: "div.DV-header"
}, {
    name: "viewer",
    query: "div.DV-docViewer"
}, {
    name: "window",
    query: "div.DV-pages"
}, {
    name: "sets",
    query: "div.DV-set"
}, {
    name: "pages",
    query: "div.DV-page"
}, {
    name: "metas",
    query: "div.DV-pageMeta"
}, {
    name: "bar",
    query: "div.DV-bar"
}, {
    name: "currentPage",
    query: "span.DV-currentPage"
}, {
    name: "well",
    query: "div.DV-well"
}, {
    name: "collection",
    query: "div.DV-pageCollection"
}, {
    name: "annotations",
    query: "div.DV-allAnnotations"
}, {
    name: "navigation",
    query: "div.DV-navigation"
}, {
    name: "chaptersContainer",
    query: "div.DV-chaptersContainer"
}, {
    name: "searchInput",
    query: "input.DV-searchInput"
}, {
    name: "textCurrentPage",
    query: "span.DV-textCurrentPage"
}, {
    name: "coverPages",
    query: "div.DV-cover"
}, {
    name: "fullscreen",
    query: "div.DV-fullscreen"
}];
DV.model.Annotations = function (a) {
    this.LEFT_MARGIN = 25;
    this.PAGE_NOTE_FUDGE = window.dc && dc.account && (dc.account.isOwner || dc.account.isReviewer) ? 46 : 26;
    this.viewer = a;
    this.offsetsAdjustments = [];
    this.offsetAdjustmentSum = 0;
    this.saveCallbacks = [];
    this.deleteCallbacks = [];
    this.byId = this.viewer.schema.data.annotationsById;
    this.byPage = this.viewer.schema.data.annotationsByPage;
    this.bySortOrder = this.sortAnnotations()
};
DV.model.Annotations.prototype = {
    render: function (e) {
        var c = this.viewer.models.document;
        var d = this.viewer.models.pages;
        var i = d.zoomFactor();
        var j = e;
        var b, a, g, f;
        if (j.type === "page") {
            b = a = g = f = 0;
            j.top = 0
        } else {
            g = Math.round(j.y1 * i);
            f = Math.round(j.y2 * i);
            if (b < this.LEFT_MARGIN) {
                b = this.LEFT_MARGIN
            }
            b = Math.round(j.x1 * i);
            a = Math.round(j.x2 * i);
            j.top = g - 5
        }
        j.owns_note = j.owns_note || false;
        j.width = d.width;
        j.pageNumber = j.page;
        j.author = j.author || "";
        j.author_organization = j.author_organization || "";
        j.bgWidth = j.width;
        j.bWidth = j.width - 66;
        j.excerptWidth = (a - b) - 8;
        j.excerptMarginLeft = b - 3;
        j.excerptHeight = f - g;
        j.index = j.page - 1;
        j.image = d.imageURL(j.index);
        j.imageTop = g + 1;
        j.tabTop = (g < 35 ? 35 - g : 0) + 8;
        j.imageWidth = d.width;
        j.imageHeight = Math.round(d.height * i);
        j.regionLeft = b;
        j.regionWidth = a - b;
        j.regionHeight = f - g;
        j.excerptDSHeight = j.excerptHeight - 6;
        j.DSOffset = 3;
        if (j.access == "public") {
            j.accessClass = "DV-accessPublic"
        } else {
            if (j.access == "exclusive") {
                j.accessClass = "DV-accessExclusive"
            } else {
                if (j.access == "private") {
                    j.accessClass = "DV-accessPrivate"
                }
            }
        }
        j.orderClass = "";
        j.options = this.viewer.options;
        if (j.position == 1) {
            j.orderClass += " DV-firstAnnotation"
        }
        if (j.position == this.bySortOrder.length) {
            j.orderClass += " DV-lastAnnotation"
        }
        var h = (j.type === "page") ? "pageAnnotation" : "annotation";
        return JST[h](j)
    },
    sortAnnotations: function () {
        return this.bySortOrder = _.sortBy(_.values(this.byId), function (a) {
            return a.page * 10000 + a.y1
        })
    },
    renderAnnotations: function () {
        for (var b = 0; b < this.bySortOrder.length; b++) {
            var a = this.bySortOrder[b];
            a.of = _.indexOf(this.byPage[a.page - 1], a);
            a.position = b + 1;
            a.html = this.render(a)
        }
        this.renderAnnotationsByIndex()
    },
    renderAnnotationsByIndex: function () {
        var b = _.map(this.bySortOrder, function (c) {
            return c.html
        });
        var a = b.join("").replace(/id="DV-annotation-(\d+)"/g, function (c, d) {
            return 'id="DV-listAnnotation-' + d + '" rel="aid-' + d + '"'
        });
        this.viewer.$("div.DV-allAnnotations").html(a);
        this.renderAnnotationsByIndex.rendered = true;
        this.renderAnnotationsByIndex.zoomLevel = this.zoomLevel;
        this.updateAnnotationOffsets()
    },
    refreshAnnotation: function (a) {
        var b = this.viewer;
        a.html = this.render(a);
        DV.jQuery.$("#DV-annotation-" + a.id).replaceWith(a.html)
    },
    removeAnnotation: function (b) {
        delete this.byId[b.id];
        var a = b.page - 1;
        this.byPage[a] = _.without(this.byPage[a], b);
        this.sortAnnotations();
        DV.jQuery("#DV-annotation-" + b.id + ", #DV-listAnnotation-" + b.id).remove();
        this.viewer.api.redraw(true);
        if (_.isEmpty(this.byId)) {
            this.viewer.open("ViewDocument")
        }
    },
    updateAnnotationOffsets: function () {
        this.offsetsAdjustments = [];
        this.offsetAdjustmentSum = 0;
        var a = this.viewer.models.document;
        var b = this.viewer.$("div.DV-allAnnotations");
        var g = b.find(".DV-pageNote");
        var c = this.viewer.models.pages.pageNoteHeights;
        var f = this;
        if (this.viewer.$("div.DV-docViewer").hasClass("DV-viewAnnotations") == false) {
            b.addClass("DV-getHeights")
        }
        var h = [];
        _.each(_.select(this.bySortOrder, function (i) {
            return i.type == "page"
        }), function (l, k) {
            l.el = g[k];
            h[l.pageNumber] = l
        });
        for (var d = 0, e = a.totalPages; d <= e; d++) {
            c[d] = 0;
            if (h[d]) {
                var j = (this.viewer.$(h[d].el).height() + this.PAGE_NOTE_FUDGE);
                c[d - 1] = j;
                this.offsetAdjustmentSum += j
            }
            this.offsetsAdjustments[d] = this.offsetAdjustmentSum
        }
        b.removeClass("DV-getHeights")
    },
    fireSaveCallbacks: function (a) {
        _.each(this.saveCallbacks, function (b) {
            b(a)
        })
    },
    fireDeleteCallbacks: function (a) {
        _.each(this.deleteCallbacks, function (b) {
            b(a)
        })
    },
    getAnnotations: function (a) {
        return this.byPage[a]
    },
    getFirstAnnotation: function () {
        return _.first(this.bySortOrder)
    },
    getNextAnnotation: function (a) {
        var b = this.byId[a];
        return this.bySortOrder[_.indexOf(this.bySortOrder, b) + 1]
    },
    getPreviousAnnotation: function (a) {
        var b = this.byId[a];
        return this.bySortOrder[_.indexOf(this.bySortOrder, b) - 1]
    },
    getAnnotation: function (a) {
        if (a.id) {
            return this.byId[a.id]
        }
        if (a.index && !a.id) {
            throw new Error("looked up an annotation without an id")
        }
        return this.byId[a]
    }
};
DV.model.Chapters = function (a) {
    this.viewer = a;
    this.loadChapters()
};
DV.model.Chapters.prototype = {
    loadChapters: function () {
        var g = this.viewer.schema.data.sections;
        var c = this.chapters = this.viewer.schema.data.chapters = [];
        _.each(g, function (h) {
            h.id || (h.id = _.uniqueId())
        });
        var e = 0;
        for (var b = 0, a = this.viewer.schema.data.totalPages; b < a; b++) {
            var d = g[e];
            var f = g[e + 1];
            if (f && (b >= (f.page - 1))) {
                e += 1;
                d = f
            }
            if (d && !(d.page > b + 1)) {
                c[b] = d.id
            }
        }
    },
    getChapterId: function (a) {
        return this.chapters[a]
    },
    getChapterPosition: function (c) {
        for (var b = 0, a = this.chapters.length; b < a; b++) {
            if (this.chapters[b] === c) {
                return b
            }
        }
    }
};
DV.model.Document = function (d) {
    this.viewer = d;
    this.currentPageIndex = 0;
    this.offsets = [];
    this.baseHeightsPortion = [];
    this.baseHeightsPortionOffsets = [];
    this.paddedOffsets = [];
    this.originalPageText = {};
    this.totalDocumentHeight = 0;
    this.totalPages = 0;
    this.additionalPaddingOnPage = 0;
    this.ZOOM_RANGES = [500, 700, 800, 900, 1000];
    var c = this.viewer.schema.data;
    this.state = c.state;
    this.baseImageURL = c.baseImageURL;
    this.canonicalURL = c.canonicalURL;
    this.additionalPaddingOnPage = c.additionalPaddingOnPage;
    this.pageWidthPadding = c.pageWidthPadding;
    this.totalPages = c.totalPages;
    var b = this.zoomLevel = this.viewer.options.zoom || c.zoomLevel;
    if (b == "auto") {
        this.zoomLevel = c.zoomLevel
    }
    var a = _.last(this.ZOOM_RANGES);
    if (this.zoomLevel > a) {
        this.zoomLevel = a
    }
};
DV.model.Document.prototype = {
    setPageIndex: function (a) {
        this.currentPageIndex = a;
        this.viewer.elements.currentPage.text(this.currentPage());
        this.viewer.helpers.setActiveChapter(this.viewer.models.chapters.getChapterId(a));
        return a
    },
    currentPage: function () {
        return this.currentPageIndex + 1
    },
    currentIndex: function () {
        return this.currentPageIndex
    },
    nextPage: function () {
        var a = this.currentIndex() + 1;
        if (a >= this.totalPages) {
            return this.currentIndex()
        }
        return this.setPageIndex(a)
    },
    previousPage: function () {
        var a = this.currentIndex() - 1;
        if (a < 0) {
            return this.currentIndex()
        }
        return this.setPageIndex(a)
    },
    zoom: function (b, a) {
        if (this.zoomLevel != b || a === true) {
            this.zoomLevel = b;
            this.viewer.models.pages.resize(this.zoomLevel);
            this.viewer.models.annotations.renderAnnotations();
            this.computeOffsets()
        }
    },
    computeOffsets: function () {
        var m = this.viewer.models.annotations;
        var j = 0;
        var f = 0;
        var e = this.totalPages;
        var k = 0;
        var a = this.viewer.elements.window[0].scrollTop;
        for (var c = 0; c < e; c++) {
            if (m.offsetsAdjustments[c]) {
                f = m.offsetsAdjustments[c]
            }
            var b = this.viewer.models.pages.getPageHeight(c);
            var g = this.offsets[c] || 0;
            var d = this.offsets[c] = f + j;
            if ((g !== d) && (d < a)) {
                var l = d - g - k;
                a += l;
                k += l
            }
            this.baseHeightsPortion[c] = Math.round((b + this.additionalPaddingOnPage) / 3);
            this.baseHeightsPortionOffsets[c] = (c == 0) ? 0 : d - this.baseHeightsPortion[c];
            j += (b + this.additionalPaddingOnPage)
        }
        j += f;
        if (j != this.totalDocumentHeight) {
            k = (this.totalDocumentHeight != 0) ? k : j - this.totalDocumentHeight;
            this.viewer.helpers.setDocHeight(j, k);
            this.totalDocumentHeight = j
        }
    },
    getOffset: function (a) {
        return this.offsets[a]
    },
    resetRemovedPages: function () {
        this.viewer.models.removedPages = {}
    },
    addPageToRemovedPages: function (a) {
        this.viewer.models.removedPages[a] = true
    },
    removePageFromRemovedPages: function (a) {
        this.viewer.models.removedPages[a] = false
    },
    redrawPages: function () {
        _.each(this.viewer.pageSet.pages, function (a) {
            a.drawRemoveOverlay()
        });
        if (this.viewer.thumbnails) {
            this.viewer.thumbnails.render()
        }
    },
    redrawReorderedPages: function () {
        if (this.viewer.thumbnails) {
            this.viewer.thumbnails.render()
        }
    }
};
DV.model.Pages = function (a) {
    this.viewer = a;
    this.averageHeight = 0;
    this.pageHeights = [];
    this.pageNoteHeights = [];
    this.BASE_WIDTH = 700;
    this.BASE_HEIGHT = 906;
    this.SCALE_FACTORS = {
        "500": 0.714,
        "700": 1,
        "800": 0.8,
        "900": 0.9,
        "1000": 1
    };
    this.DEFAULT_PADDING = 100;
    this.REDUCED_PADDING = 44;
    this.zoomLevel = this.viewer.models.document.zoomLevel;
    this.baseWidth = this.BASE_WIDTH;
    this.baseHeight = this.BASE_HEIGHT;
    this.width = this.zoomLevel;
    this.height = this.baseHeight * this.zoomFactor();
    this.numPagesLoaded = 0
};
DV.model.Pages.prototype = {
    imageURL: function (c) {
        var b = this.viewer.schema.document.resources.page.image;
        var d = this.zoomLevel > this.BASE_WIDTH ? "large" : "normal";
        var a = c + 1;
        if (this.viewer.schema.document.resources.page.zeropad) {
            a = this.zeroPad(a, 5)
        }
        b = b.replace(/\{size\}/, d);
        b = b.replace(/\{page\}/, a);
        return b
    },
    zeroPad: function (b, c) {
        var a = b.toString();
        while (a.length < c) {
            a = "0" + a
        }
        return a
    },
    zoomFactor: function () {
        return this.zoomLevel / this.BASE_WIDTH
    },
    resize: function (d) {
        var b = this.viewer.models.pages.DEFAULT_PADDING;
        if (d) {
            if (d == this.zoomLevel) {
                return
            }
            var a = this.zoomFactor();
            this.zoomLevel = d || this.zoomLevel;
            var c = this.zoomFactor() / a;
            this.width = Math.round(this.baseWidth * this.zoomFactor());
            this.height = Math.round(this.height * c);
            this.averageHeight = Math.round(this.averageHeight * c)
        }
        this.viewer.elements.sets.width(this.zoomLevel);
        this.viewer.elements.collection.css({
            width: this.width + b
        });
        this.viewer.$(".DV-textContents").css({
            "font-size": this.zoomLevel * 0.02 + "px"
        })
    },
    updateHeight: function (e, b) {
        var c = this.getPageHeight(b);
        var a = e.height * (this.zoomLevel > this.BASE_WIDTH ? 0.7 : 1);
        this.setPageHeight(b, a);
        this.averageHeight = ((this.averageHeight * this.numPagesLoaded) + a) / (this.numPagesLoaded + 1);
        this.numPagesLoaded += 1;
        if (c === a) {
            return
        }
        this.viewer.models.document.computeOffsets();
        this.viewer.pageSet.simpleReflowPages();
        if (b < this.viewer.models.document.currentIndex()) {
            var d = Math.round(a * this.zoomFactor() - c);
            this.viewer.elements.window[0].scrollTop += d
        }
    },
    setPageHeight: function (a, b) {
        this.pageHeights[a] = Math.round(b)
    },
    getPageHeight: function (a) {
        var b = this.pageHeights[a];
        return Math.round(b ? b * this.zoomFactor() : this.height)
    }
};
DV.Schema.events = {
    zoom: function (c) {
        var b = this.viewer;
        var a = function () {
                b.pageSet.zoom({
                    zoomLevel: c
                });
                var d = b.models.document.ZOOM_RANGES;
                b.dragReporter.sensitivity = d[d.length - 1] == c ? 1.5 : 1;
                b.notifyChangedState();
                return true
            };
        b.confirmStateChange ? b.confirmStateChange(a) : a()
    },
    drawPages: function () {
        if (this.viewer.state != "ViewDocument") {
            return
        }
        var g = this.models.document;
        var e = this.elements.window[0];
        var c = g.baseHeightsPortionOffsets;
        var a = this.viewer.scrollPosition = e.scrollTop;
        var i = a + (this.viewer.$(e).height() / 3);
        var d = _.sortedIndex(c, a);
        var h = _.sortedIndex(c, i);
        if (c[d] == a) {
            d++ && h++
        }
        var b = this.helpers.sortPages(h - 1);
        var f = g.totalPages;
        if (g.currentPage() != d) {
            g.setPageIndex(d - 1)
        }
        this.drawPageAt(b, h - 1)
    },
    drawPageAt: function (e, b) {
        var d = b == 0;
        var c = b == this.models.document.totalPages - 1;
        if (d) {
            b += 1
        }
        var a = [{
            label: e[0],
            index: b - 1
        }, {
            label: e[1],
            index: b
        }, {
            label: e[2],
            index: b + 1
        }];
        if (c) {
            a.pop()
        }
        a[d ? 0 : a.length - 1].currentPage = true;
        this.viewer.pageSet.draw(a)
    },
    check: function () {
        var b = this.viewer;
        if (b.busy === false) {
            b.busy = true;
            for (var a = 0; a < this.viewer.observers.length; a++) {
                this[b.observers[a]].call(this)
            }
            b.busy = false
        }
    },
    loadText: function (a, f) {
        a = (!a) ? this.models.document.currentIndex() : parseInt(a, 10);
        this._previousTextIndex = a;
        var d = this;
        var b = function (i) {
                var h = parseInt(a, 10) + 1;
                d.viewer.$(".DV-textContents").replaceWith('<pre class="DV-textContents">' + i + "</pre>");
                d.elements.currentPage.text(h);
                d.elements.textCurrentPage.text("p. " + (h));
                d.models.document.setPageIndex(a);
                d.helpers.setActiveChapter(d.models.chapters.getChapterId(a));
                if (d.viewer.openEditor == "editText" && !(h in d.models.document.originalPageText)) {
                    d.models.document.originalPageText[h] = i
                }
                if (d.viewer.openEditor == "editText") {
                    d.viewer.$(".DV-textContents").attr("contentEditable", true).addClass("DV-editing")
                }
                if (f) {
                    f.call(d.helpers)
                }
            };
        if (d.viewer.schema.text[a]) {
            return b(d.viewer.schema.text[a])
        }
        var c = DV.jQuery.proxy(function (h) {
            b(d.viewer.schema.text[a] = h)
        }, this);
        this.viewer.$(".DV-textContents").text("");
        var g = d.viewer.schema.document.resources.page.text.replace("{page}", a + 1);
        var e = this.helpers.isCrossDomain(g);
        if (e) {
            g += "?callback=?"
        }
        DV.jQuery[e ? "getJSON" : "get"](g, {}, c)
    },
    resetTracker: function () {
        this.viewer.activeAnnotation = null;
        this.trackAnnotation.combined = null;
        this.trackAnnotation.h = null
    },
    trackAnnotation: function () {
        var e = this.viewer;
        var d = this.helpers;
        var b = this.elements.window[0].scrollTop;
        if (e.activeAnnotation) {
            var a = e.activeAnnotation;
            var c = this.trackAnnotation;
            if (c.id != a.id) {
                c.id = a.id;
                d.setActiveAnnotationLimits(a)
            }
            if (!e.activeAnnotation.annotationEl.hasClass("DV-editing") && (b > (c.h) || b < c.combined)) {
                a.hide(true);
                e.pageSet.setActiveAnnotation(null);
                e.activeAnnotation = null;
                c.h = null;
                c.id = null;
                c.combined = null
            }
        } else {
            e.pageSet.setActiveAnnotation(null);
            e.activeAnnotation = null;
            c.h = null;
            c.id = null;
            c.combined = null;
            d.removeObserver("trackAnnotation")
        }
    }
};
DV.Schema.events.ViewAnnotation = {
    next: function (d) {
        var f = this.viewer;
        var b = f.activeAnnotationId;
        var a = this.models.annotations;
        var c = (b === null) ? a.getFirstAnnotation() : a.getNextAnnotation(b);
        if (!c) {
            return false
        }
        f.pageSet.showAnnotation(c);
        this.helpers.setAnnotationPosition(c.position)
    },
    previous: function (d) {
        var f = this.viewer;
        var c = f.activeAnnotationId;
        var a = this.models.annotations;
        var b = (!c) ? a.getFirstAnnotation() : a.getPreviousAnnotation(c);
        if (!b) {
            return false
        }
        f.pageSet.showAnnotation(b);
        this.helpers.setAnnotationPosition(b.position)
    },
    search: function (a) {
        a.preventDefault();
        this.viewer.open("ViewSearch");
        return false
    }
};
DV.Schema.events.ViewDocument = {
    next: function () {
        var a = this.models.document.nextPage();
        this.helpers.jump(a)
    },
    previous: function (b) {
        var a = this.models.document.previousPage();
        this.helpers.jump(a)
    },
    search: function (a) {
        a.preventDefault();
        this.viewer.open("ViewSearch");
        return false
    }
};
DV.Schema.events.ViewSearch = {
    next: function (b) {
        var a = this.models.document.nextPage();
        this.loadText(a);
        this.viewer.open("ViewText")
    },
    previous: function (b) {
        var a = this.models.document.previousPage();
        this.loadText(a);
        this.viewer.open("ViewText")
    },
    search: function (a) {
        a.preventDefault();
        this.helpers.getSearchResponse(this.elements.searchInput.val());
        return false
    }
};
DV.Schema.events.ViewText = {
    next: function (b) {
        var a = this.models.document.nextPage();
        this.loadText(a)
    },
    previous: function (b) {
        var a = this.models.document.previousPage();
        this.loadText(a)
    },
    search: function (a) {
        a.preventDefault();
        this.viewer.open("ViewSearch");
        return false
    }
};
DV.Schema.events.ViewThumbnails = {
    next: function () {
        var a = this.models.document.nextPage();
        this.helpers.jump(a)
    },
    previous: function (b) {
        var a = this.models.document.previousPage();
        this.helpers.jump(a)
    },
    search: function (a) {
        a.preventDefault();
        this.viewer.open("ViewSearch");
        return false
    }
};
_.extend(DV.Schema.events, {
    handleHashChangeViewDocumentPage: function (b) {
        var a = parseInt(b, 10) - 1;
        if (this.viewer.state === "ViewDocument") {
            this.viewer.pageSet.cleanUp();
            this.helpers.jump(a)
        } else {
            this.models.document.setPageIndex(a);
            this.viewer.open("ViewDocument")
        }
    },
    handleHashChangeLegacyViewDocumentPage: function (b) {
        var a = parseInt(b, 10) - 1;
        this.handleHashChangeViewDocumentPage(b)
    },
    handleHashChangeViewDocumentAnnotation: function (c, b) {
        var a = parseInt(c, 10) - 1;
        var b = parseInt(b, 10);
        if (this.viewer.state === "ViewDocument") {
            this.viewer.pageSet.showAnnotation(this.viewer.models.annotations.byId[b])
        } else {
            this.models.document.setPageIndex(a);
            this.viewer.pageSet.setActiveAnnotation(b);
            this.viewer.openingAnnotationFromHash = true;
            this.viewer.open("ViewDocument")
        }
    },
    handleHashChangeViewAnnotationAnnotation: function (a) {
        var a = parseInt(a, 10);
        var b = this.viewer;
        if (b.state === "ViewAnnotation") {
            b.pageSet.showAnnotation(this.viewer.models.annotations.byId[a])
        } else {
            b.activeAnnotationId = a;
            this.viewer.open("ViewAnnotation")
        }
    },
    handleHashChangeDefault: function () {
        this.viewer.pageSet.cleanUp();
        this.models.document.setPageIndex(0);
        if (this.viewer.state === "ViewDocument") {
            this.helpers.jump(0)
        } else {
            this.viewer.open("ViewDocument")
        }
    },
    handleHashChangeViewText: function (b) {
        var a = parseInt(b, 10) - 1;
        if (this.viewer.state === "ViewText") {
            this.events.loadText(a)
        } else {
            this.models.document.setPageIndex(a);
            this.viewer.open("ViewText")
        }
    },
    handleHashChangeViewPages: function () {
        if (this.viewer.state == "ViewThumbnails") {
            return
        }
        this.viewer.open("ViewThumbnails")
    },
    handleHashChangeViewSearchRequest: function (c, b) {
        var a = parseInt(c, 10) - 1;
        this.elements.searchInput.val(decodeURIComponent(b));
        if (this.viewer.state !== "ViewSearch") {
            this.models.document.setPageIndex(a)
        }
        this.viewer.open("ViewSearch")
    },
    handleHashChangeViewEntity: function (c, a, d, b) {
        c = parseInt(c, 10) - 1;
        a = decodeURIComponent(a);
        this.elements.searchInput.val(a);
        this.models.document.setPageIndex(c);
        this.states.ViewEntity(a, parseInt(d, 10), parseInt(b, 10))
    }
});
_.extend(DV.Schema.events, {
    handleNavigation: function (g) {
        var c = this.viewer.$(g.target);
        var k = c.closest(".DV-trigger");
        var b = c.closest(".DV-annotationMarker");
        var i = c.closest(".DV-chapter");
        if (!k.length) {
            return
        }
        if (c.hasClass("DV-expander")) {
            return i.toggleClass("DV-collapsed")
        } else {
            if (b.length) {
                var d = b[0].id.replace("DV-annotationMarker-", "");
                var f = this.models.annotations.getAnnotation(d);
                var j = parseInt(f.index, 10) + 1;
                if (this.viewer.state === "ViewText") {
                    this.loadText(f.index)
                } else {
                    if (this.viewer.state === "ViewThumbnails") {
                        this.viewer.open("ViewDocument")
                    }
                    this.viewer.pageSet.showAnnotation(f)
                }
            } else {
                if (i.length) {
                    i.removeClass("DV-collapsed");
                    var h = parseInt(i[0].id.replace("DV-chapter-", ""), 10);
                    var a = parseInt(this.models.chapters.getChapterPosition(h), 10);
                    var j = parseInt(a, 10) + 1;
                    if (this.viewer.state === "ViewText") {
                        this.loadText(a)
                    } else {
                        if (this.viewer.state === "ViewDocument" || this.viewer.state === "ViewThumbnails") {
                            this.helpers.jump(a);
                            if (this.viewer.state === "ViewThumbnails") {
                                this.viewer.open("ViewDocument")
                            }
                        } else {
                            return false
                        }
                    }
                } else {
                    return false
                }
            }
        }
    }
});
DV.Schema.helpers = {
    HOST_EXTRACTOR: (/https?:\/\/([^\/]+)\//),
    annotationClassName: ".DV-annotation",
    bindEvents: function (a) {
        var c = this.events.compile("zoom");
        var i = a.models.document;
        var j = _.indexOf(i.ZOOM_RANGES, i.zoomLevel);
        var d = this.viewer;
        d.slider = d.$(".DV-zoomBox").slider({
            step: 1,
            min: 0,
            max: 4,
            value: j,
            slide: function (l, m) {
                c(a.models.document.ZOOM_RANGES[parseInt(m.value, 10)])
            },
            change: function (l, m) {
                c(a.models.document.ZOOM_RANGES[parseInt(m.value, 10)])
            }
        });
        var f = d.history;
        var g = d.compiled;
        g.next = this.events.compile("next");
        g.previous = this.events.compile("previous");
        var k = a.states;
        d.$(".DV-navControls").delegate("span.DV-next", "click", g.next);
        d.$(".DV-navControls").delegate("span.DV-previous", "click", g.previous);
        d.$(".DV-annotationView").delegate(".DV-trigger", "click", function (l) {
            l.preventDefault();
            a.open("ViewAnnotation")
        });
        d.$(".DV-documentView").delegate(".DV-trigger", "click", function (l) {
            a.open("ViewDocument")
        });
        d.$(".DV-thumbnailsView").delegate(".DV-trigger", "click", function (l) {
            a.open("ViewThumbnails")
        });
        d.$(".DV-textView").delegate(".DV-trigger", "click", function (l) {
            a.open("ViewText")
        });
        d.$(".DV-allAnnotations").delegate(".DV-annotationGoto .DV-trigger", "click", DV.jQuery.proxy(this.gotoPage, this));
        d.$("form.DV-searchDocument").submit(this.events.compile("search"));
        d.$(".DV-searchBar").delegate(".DV-closeSearch", "click", function (l) {
            l.preventDefault();
            a.open("ViewText")
        });
        d.$(".DV-searchBox").delegate(".DV-searchInput-cancel", "click", DV.jQuery.proxy(this.clearSearch, this));
        d.$(".DV-searchResults").delegate("span.DV-resultPrevious", "click", DV.jQuery.proxy(this.highlightPreviousMatch, this));
        d.$(".DV-searchResults").delegate("span.DV-resultNext", "click", DV.jQuery.proxy(this.highlightNextMatch, this));
        d.$(".DV-trigger").bind("selectstart", function () {
            return false
        });
        this.elements.viewer.delegate(".DV-fullscreen", "click", _.bind(this.openFullScreen, this));
        var h = DV.jQuery.proxy(this.annotationBridgeToggle, this);
        var e = this.elements.collection;
        e.delegate(".DV-annotationTab", "click", h);
        e.delegate(".DV-annotationRegion", "click", DV.jQuery.proxy(this.annotationBridgeShow, this));
        e.delegate(".DV-annotationNext", "click", DV.jQuery.proxy(this.annotationBridgeNext, this));
        e.delegate(".DV-annotationPrevious", "click", DV.jQuery.proxy(this.annotationBridgePrevious, this));
        e.delegate(".DV-showEdit", "click", DV.jQuery.proxy(this.showAnnotationEdit, this));
        e.delegate(".DV-cancelEdit", "click", DV.jQuery.proxy(this.cancelAnnotationEdit, this));
        e.delegate(".DV-saveAnnotation", "click", DV.jQuery.proxy(this.saveAnnotation, this));
        e.delegate(".DV-saveAnnotationDraft", "click", DV.jQuery.proxy(this.saveAnnotation, this));
        e.delegate(".DV-deleteAnnotation", "click", DV.jQuery.proxy(this.deleteAnnotation, this));
        e.delegate(".DV-pageNumber", "click", _.bind(this.permalinkPage, this, "document"));
        e.delegate(".DV-textCurrentPage", "click", _.bind(this.permalinkPage, this, "text"));
        e.delegate(".DV-annotationTitle", "click", _.bind(this.permalinkAnnotation, this));
        e.delegate(".DV-permalink", "click", _.bind(this.permalinkAnnotation, this));
        d.$(".DV-thumbnails").delegate(".DV-thumbnail-page", "click", function (n) {
            var m = d.$(n.currentTarget);
            if (!d.openEditor) {
                var l = m.closest(".DV-thumbnail").attr("data-pageNumber") - 1;
                d.models.document.setPageIndex(l);
                d.open("ViewDocument")
            }
        });
        _.bindAll(this, "touchStart", "touchMove", "touchEnd");
        this.elements.window[0].ontouchstart = this.touchStart;
        this.elements.window[0].ontouchmove = this.touchMove;
        this.elements.window[0].ontouchend = this.touchEnd;
        this.elements.well[0].ontouchstart = this.touchStart;
        this.elements.well[0].ontouchmove = this.touchMove;
        this.elements.well[0].ontouchend = this.touchEnd;
        d.$(".DV-descriptionToggle").live("click", function (l) {
            l.preventDefault();
            l.stopPropagation();
            d.$(".DV-descriptionText").toggle();
            d.$(".DV-descriptionToggle").toggleClass("DV-showDescription")
        });
        var b = DV.jQuery.proxy(d.pageSet.cleanUp, this);
        this.elements.window.live("mousedown", function (m) {
            var l = d.$(m.target);
            if (l.parents().is(".DV-annotation") || l.is(".DV-annotation")) {
                return true
            }
            if (a.elements.window.hasClass("DV-coverVisible")) {
                if ((l.width() - parseInt(m.clientX, 10)) >= 15) {
                    b()
                }
            }
        });
        if (DV.jQuery.browser.msie == true) {
            this.elements.browserDocument.bind("focus", DV.jQuery.proxy(this.focusWindow, this));
            this.elements.browserDocument.bind("focusout", DV.jQuery.proxy(this.focusOut, this))
        } else {
            this.elements.browserWindow.bind("focus", DV.jQuery.proxy(this.focusWindow, this));
            this.elements.browserWindow.bind("blur", DV.jQuery.proxy(this.blurWindow, this))
        }
        this.elements.window.bind("scroll", DV.jQuery.proxy(this.focusWindow, this));
        this.elements.coverPages.live("mousedown", b);
        d.acceptInput = this.elements.currentPage.acceptInput({
            changeCallBack: DV.jQuery.proxy(this.acceptInputCallBack, this)
        })
    },
    startCheckTimer: function () {
        var b = this.viewer;
        var a = function () {
                b.events.check()
            };
        this.viewer.checkTimer = setInterval(a, 100)
    },
    stopCheckTimer: function () {
        clearTimeout(this.viewer.checkTimer)
    },
    blurWindow: function () {
        if (this.viewer.isFocus === true) {
            this.viewer.isFocus = false;
            this.stopCheckTimer()
        } else {
            return
        }
    },
    focusOut: function () {
        if (this.viewer.activeElement != document.activeElement) {
            this.viewer.activeElement = document.activeElement;
            this.viewer.isFocus = true
        } else {
            this.viewer.isFocus = false;
            this.viewer.helpers.stopCheckTimer();
            return
        }
    },
    focusWindow: function () {
        if (this.viewer.isFocus === true) {
            return
        } else {
            this.viewer.isFocus = true;
            this.startCheckTimer()
        }
    },
    touchStart: function (a) {
        a.stopPropagation();
        a.preventDefault();
        var b = a.changedTouches[0];
        this._moved = false;
        this._touchX = b.pageX;
        this._touchY = b.pageY
    },
    touchMove: function (c) {
        var b = c.currentTarget;
        var f = c.changedTouches[0];
        var d = this._touchX - f.pageX;
        var a = this._touchY - f.pageY;
        b.scrollLeft += d;
        b.scrollTop += a;
        this._touchX -= d;
        this._touchY -= a;
        if (a != 0 || d != 0) {
            this._moved = true
        }
    },
    touchEnd: function (b) {
        if (!this._moved) {
            var d = b.changedTouches[0];
            var a = d.target;
            var c = document.createEvent("MouseEvent");
            while (a.nodeType !== 1) {
                a = a.parentNode
            }
            c.initMouseEvent("click", true, true, d.view, 1, d.screenX, d.screenY, d.clientX, d.clientY, false, false, false, false, 0, null);
            a.dispatchEvent(c)
        }
        this._moved = false
    },
    permalinkPage: function (f, d) {
        if (f == "text") {
            var b = this.viewer.models.document.currentPage()
        } else {
            var a = this.viewer.$(d.target).closest(".DV-set").attr("data-id");
            var c = this.viewer.pageSet.pages[a];
            var b = c.pageNumber;
            this.jump(c.index)
        }
        this.viewer.history.save(f + "/p" + b)
    },
    permalinkAnnotation: function (c) {
        var d = this.viewer.$(c.target).closest(".DV-annotation").attr("data-id");
        var b = this.viewer.models.annotations.getAnnotation(d);
        var a = b.server_id || b.id;
        if (this.viewer.state == "ViewDocument") {
            this.viewer.pageSet.showAnnotation(b);
            this.viewer.history.save("document/p" + b.pageNumber + "/a" + a)
        } else {
            this.viewer.history.save("annotation/a" + a)
        }
    },
    setDocHeight: function (a, b) {
        this.elements.bar.css("height", a);
        this.elements.window[0].scrollTop += b
    },
    getWindowDimensions: function () {
        var a = {
            height: window.innerHeight ? window.innerHeight : this.elements.browserWindow.height(),
            width: this.elements.browserWindow.width()
        };
        return a
    },
    isCrossDomain: function (b) {
        var a = b.match(this.HOST_EXTRACTOR);
        return a && (a[1] != window.location.host)
    },
    resetScrollState: function () {
        this.elements.window.scrollTop(0)
    },
    gotoPage: function (c) {
        c.preventDefault();
        var b = this.viewer.$(c.target).parents(".DV-annotation").attr("rel").replace("aid-", "");
        var a = this.models.annotations.getAnnotation(b);
        var d = this.viewer;
        if (d.state !== "ViewDocument") {
            this.models.document.setPageIndex(a.index);
            d.open("ViewDocument")
        }
    },
    openFullScreen: function () {
        var a = this.viewer.schema.document;
        window.open(a.canonicalURL, "documentviewer", "toolbar=no,resizable=yes,scrollbars=no,status=no")
    },
    sortPages: function (a) {
        if (a == 0 || a % 3 == 1) {
            return ["p0", "p1", "p2"]
        }
        if (a % 3 == 2) {
            return ["p1", "p2", "p0"]
        }
        if (a % 3 == 0) {
            return ["p2", "p0", "p1"]
        }
    },
    addObserver: function (a) {
        this.removeObserver(a);
        this.viewer.observers.push(a)
    },
    removeObserver: function (b) {
        var d = this.viewer.observers;
        for (var c = 0, a = d.length; c < a; c++) {
            if (b === d[c]) {
                d.splice(c, 1)
            }
        }
    },
    toggleContent: function (a) {
        this.elements.viewer.removeClass("DV-viewText DV-viewSearch DV-viewDocument DV-viewAnnotations DV-viewThumbnails").addClass("DV-" + a)
    },
    jump: function (c, b, d) {
        b = (b) ? parseInt(b, 10) : 0;
        var a = this.models.document.getOffset(parseInt(c, 10)) + b;
        this.elements.window[0].scrollTop = a;
        this.models.document.setPageIndex(c);
        if (d) {
            this.viewer.pageSet.redraw(true)
        }
        if (this.viewer.state === "ViewThumbnails") {
            this.viewer.thumbnails.highlightCurrentPage()
        }
    },
    shift: function (a) {
        var d = this.elements.window;
        var c = d.scrollTop() + a.deltaY;
        var b = d.scrollLeft() + a.deltaX;
        d.scrollTop(c);
        d.scrollLeft(b)
    },
    getAppState: function () {
        var a = this.models.document;
        var b = (a.currentIndex() == 0) ? 1 : a.currentPage();
        return {
            page: b,
            zoom: a.zoomLevel,
            view: this.viewer.state
        }
    },
    constructPages: function () {
        var b = [];
        var d = (this.viewer.schema.data.totalPages < 3) ? this.viewer.schema.data.totalPages : 3;
        var a = this.models.pages.height;
        for (var c = 0; c < d; c++) {
            b.push(JST.pages({
                pageNumber: c + 1,
                pageIndex: c,
                pageImageSource: null,
                baseHeight: a
            }))
        }
        return b.join("")
    },
    positionViewer: function () {
        var a = this.elements.viewer.position();
        this.elements.viewer.css({
            position: "absolute",
            top: a.top,
            bottom: 0,
            left: a.left,
            right: a.left
        })
    },
    unsupportedBrowser: function () {
        if (!(DV.jQuery.browser.msie && DV.jQuery.browser.version <= "6.0")) {
            return false
        }
        DV.jQuery(this.viewer.options.container).html(JST.unsupported({
            viewer: this.viewer
        }));
        return true
    },
    registerHashChangeEvents: function () {
        var a = this.events;
        var b = this.viewer.history;
        b.defaultCallback = _.bind(a.handleHashChangeDefault, this.events);
        b.register(/document\/p(\d*)$/, _.bind(a.handleHashChangeViewDocumentPage, this.events));
        b.register(/p(\d*)$/, _.bind(a.handleHashChangeLegacyViewDocumentPage, this.events));
        b.register(/p=(\d*)$/, _.bind(a.handleHashChangeLegacyViewDocumentPage, this.events));
        b.register(/document\/p(\d*)\/a(\d*)$/, _.bind(a.handleHashChangeViewDocumentAnnotation, this.events));
        b.register(/annotation\/a(\d*)$/, _.bind(a.handleHashChangeViewAnnotationAnnotation, this.events));
        b.register(/pages$/, _.bind(a.handleHashChangeViewPages, a));
        b.register(/text\/p(\d*)$/, _.bind(a.handleHashChangeViewText, this.events));
        b.register(/entity\/p(\d*)\/(.*)\/(\d+):(\d+)$/, _.bind(a.handleHashChangeViewEntity, this.events));
        b.register(/search\/p(\d*)\/(.*)$/, _.bind(a.handleHashChangeViewSearchRequest, this.events))
    },
    autoZoomPage: function () {
        var d = this.elements.window.outerWidth(true);
        var e;
        if (this.viewer.options.zoom == "auto") {
            e = Math.min(700, d - (this.viewer.models.pages.REDUCED_PADDING * 2))
        } else {
            e = this.viewer.options.zoom
        }
        var c = [];
        if (e <= 500) {
            var b = (e + 700) / 2;
            c = [e, b, 700, 850, 1000]
        } else {
            if (e <= 750) {
                var b = ((1000 - 700) / 3) + e;
                var a = ((1000 - 700) / 3) * 2 + e;
                c = [0.66 * e, e, b, a, 1000]
            } else {
                if (750 < e && e <= 850) {
                    var b = ((1000 - e) / 2) + e;
                    c = [0.66 * e, 700, e, b, 1000]
                } else {
                    if (850 < e && e < 1000) {
                        var b = ((e - 700) / 2) + 700;
                        c = [0.66 * e, 700, b, e, 1000]
                    } else {
                        if (e >= 1000) {
                            e = 1000;
                            c = this.viewer.models.document.ZOOM_RANGES
                        }
                    }
                }
            }
        }
        this.viewer.models.document.ZOOM_RANGES = c;
        this.viewer.slider.slider({
            value: parseInt(_.indexOf(c, e), 10)
        });
        this.events.zoom(e)
    },
    handleInitialState: function () {
        var a = this.viewer.history.loadURL(true);
        if (!a) {
            var b = this.viewer.options;
            this.viewer.open("ViewDocument");
            if (b.note) {
                this.viewer.pageSet.showAnnotation(this.viewer.models.annotations.byId[b.note])
            } else {
                if (b.page) {
                    this.jump(b.page - 1)
                }
            }
        }
    }
};
_.extend(DV.Schema.helpers, {
    getAnnotationModel: function (b) {
        var a = parseInt(b.attr("rel").match(/\d+/), 10);
        return this.models.annotations.getAnnotation(a)
    },
    getAnnotationObject: function (a) {
        var a = this.viewer.$(a);
        var d = a.attr("id").replace(/DV\-annotation\-|DV\-listAnnotation\-/, "");
        var b = a.closest("div.DV-set").attr("data-id");
        for (var c = 0;
        (annotationObject = this.viewer.pageSet.pages[b].annotations[c]); c++) {
            if (annotationObject.id == d) {
                a = null;
                return annotationObject
            }
        }
        return false
    },
    annotationBridgeToggle: function (b) {
        b.preventDefault();
        var a = this.getAnnotationObject(this.viewer.$(b.target).closest(this.annotationClassName));
        a.toggle()
    },
    annotationBridgeShow: function (b) {
        b.preventDefault();
        var a = this.getAnnotationObject(this.viewer.$(b.target).closest(this.annotationClassName));
        a.show()
    },
    annotationBridgeHide: function (b) {
        b.preventDefault();
        var a = this.getAnnotationObject(this.viewer.$(b.target).closest(this.annotationClassName));
        a.hide(true)
    },
    annotationBridgeNext: function (b) {
        b.preventDefault();
        var a = this.getAnnotationObject(this.viewer.$(b.target).closest(this.annotationClassName));
        a.next()
    },
    annotationBridgePrevious: function (b) {
        b.preventDefault();
        var a = this.getAnnotationObject(this.viewer.$(b.target).closest(this.annotationClassName));
        a.previous()
    },
    setAnnotationPosition: function (a) {
        this.elements.currentPage.text(a)
    },
    setActiveAnnotationLimits: function (a) {
        var a = (a) ? a : this.viewer.activeAnnotation;
        if (!a || a == null) {
            return
        }
        var e = this.elements;
        var b = a.page;
        var d = a.annotationEl;
        var c = a.position.top * this.models.pages.zoomFactor();
        var f = this.events.trackAnnotation;
        if (a.type === "page") {
            f.h = d.outerHeight() + b.getOffset();
            f.combined = (b.getOffset()) - e.window.height()
        } else {
            f.h = d.height() + c - 20 + b.getOffset() + b.getPageNoteHeight();
            f.combined = (c - 20 + b.getOffset() + b.getPageNoteHeight()) - e.window.height()
        }
    }
});
_.extend(DV.Schema.helpers, {
    renderViewer: function () {
        var i = this.viewer.schema.document;
        var b = this.constructPages();
        var j = (i.description) ? i.description : null;
        var d = i.resources.related_article;
        var g = JST.header({
            options: this.viewer.options,
            id: i.id,
            story_url: d,
            title: i.title || ""
        });
        var c = JST.footer({
            options: this.viewer.options
        });
        var h = i.resources.pdf;
        h = h && this.viewer.options.pdf !== false ? '<a target="_blank" href="' + h + '">Original Document (PDF)</a>' : "";
        var e = {
            options: this.viewer.options,
            pages: b,
            header: g,
            footer: c,
            pdf_url: h,
            story_url: d,
            descriptionContainer: JST.descriptionContainer({
                description: j
            }),
            autoZoom: this.viewer.options.zoom == "auto"
        };
        if (this.viewer.options.width && this.viewer.options.height) {
            DV.jQuery(this.viewer.options.container).css({
                position: "relative",
                width: this.viewer.options.width,
                height: this.viewer.options.height
            })
        }
        var a = this.viewer.options.container;
        var f = DV.jQuery(a);
        if (!f.length) {
            throw "Elemento no encontrado: " + a
        }
        f.html(JST.viewer(e))
    },
    displayNavigation: function () {
        var b = this.viewer.schema.document;
        var a = (!b.description && !_.size(this.viewer.schema.data.annotationsById) && !this.viewer.schema.data.sections.length);
        this.viewer.$(".DV-supplemental").toggleClass("DV-noNavigation", a)
    },
    renderSpecificPageCss: function () {
        var e = [];
        for (var d = 1, a = this.models.document.totalPages; d <= a; d++) {
            e.push(".DV-page-" + d + " .DV-pageSpecific-" + d)
        }
        var c = e.join(", ") + " { display: block; }";
        var b = '<style type="text/css" media="all">\n' + c + "\n</style>";
        DV.jQuery("head").append(b)
    },
    renderNavigation: function () {
        var w = this;
        var c = [],
            h = [],
            e = [],
            r = [],
            o = JST.navigationExpander({}),
            j = [],
            k = [],
            f = [];
        var p = this.viewer.models.boldsId || (this.viewer.models.boldsId = _.uniqueId());
        var s = function (B, A) {
                var C = [];
                for (var z = B, y = A; z < y; z++) {
                    if (k[z]) {
                        C.push(k[z]);
                        j[z] = ""
                    }
                }
                return C.join("")
            };
        var b = function (i) {
                var y = "#DV-selectedChapter-" + i.id + " #DV-chapter-" + i.id;
                h.push(y + " .DV-navChapterTitle");
                return (JST.chapterNav(i))
            };
        var d = function (z) {
                var A = [];
                var B = w.viewer.schema.data.annotationsByPage[z];
                for (var y = 0; y < B.length; y++) {
                    var i = B[y];
                    A.push(JST.annotationNav(i));
                    h.push("#DV-selectedAnnotation-" + i.id + " #DV-annotationMarker-" + i.id + " .DV-navAnnotationTitle")
                }
                return A.join("")
            };
        for (var t = 0, u = this.models.document.totalPages; t < u; t++) {
            if (this.viewer.schema.data.annotationsByPage[t]) {
                j[t] = d(t);
                k[t] = j[t]
            }
        }
        var n = this.viewer.schema.data.sections;
        if (n.length) {
            for (var t = 0; t < n.length; t++) {
                var g = n[t];
                var v = n[t + 1];
                g.id = g.id || _.uniqueId();
                g.pageNumber = g.page;
                g.endPage = v ? v.page - 1 : this.viewer.schema.data.totalPages;
                var a = s(g.pageNumber - 1, g.endPage);
                if (a != "") {
                    g.navigationExpander = o;
                    g.navigationExpanderClass = "DV-hasChildren";
                    g.noteViews = a;
                    j[g.pageNumber - 1] = b(g)
                } else {
                    g.navigationExpanderClass = "DV-noChildren";
                    g.noteViews = "";
                    g.navigationExpander = "";
                    j[g.pageNumber - 1] = b(g)
                }
            }
        }
        var x = j.join("");
        var m = this.viewer.$("div.DV-chaptersContainer");
        m.html(x);
        m.unbind("click").bind("click", this.events.compile("handleNavigation"));
        this.viewer.schema.data.sections.length || _.size(this.viewer.schema.data.annotationsById) ? m.show() : m.hide();
        this.displayNavigation();
        DV.jQuery("#DV-navigationBolds-" + p, DV.jQuery("head")).remove();
        var q = h.join(", ") + " { font-weight:bold; color:#000 !important; }";
        var l = '<style id="DV-navigationBolds-' + p + '" type="text/css" media="screen,print">\n' + q + "\n</style>";
        DV.jQuery("head").append(l);
        m = null
    },
    renderComponents: function () {
        var g = DV.jQuery(this.viewer.options.container);
        var e = g.css("position");
        if (e != "relative" && e != "absolute" && !this.viewer.options.fixedSize) {
            DV.jQuery("html, body").css({
                overflow: "hidden"
            });
            if (g.offset().top == 0) {
                this.viewer.elements.viewer.css({
                    border: 0
                })
            }
        }
        var d = _.any(this.models.annotations.byId);
        var j = this.models.document.totalPages > 1;
        var a = (this.viewer.options.search !== false) && (!this.viewer.options.width || this.viewer.options.width >= 540);
        var f = (!d && !j && !a && !this.viewer.options.sidebar);
        var c = this.viewer.$(".DV-annotationView");
        c[d ? "show" : "hide"]();
        if (a) {
            this.elements.viewer.addClass("DV-searchable");
            this.viewer.$("input.DV-searchInput", g).placeholder({
                message: "Search",
                clearClassName: "DV-searchInput-show-search-cancel"
            })
        } else {
            this.viewer.$(".DV-textView").hide()
        }
        if (!j) {
            this.viewer.$(".DV-thumbnailsView").hide()
        }
        if (!d && !j && !a) {
            this.viewer.$(".DV-views").hide()
        }
        this.viewer.api.roundTabCorners();
        var b = this.models.chapters.chapters.length > 0;
        this.viewer.$(".DV-navControls").remove();
        if (j || this.viewer.options.sidebar) {
            var h = JST.navControls({
                totalPages: this.viewer.schema.data.totalPages,
                totalAnnotations: this.viewer.schema.data.totalAnnotations
            });
            this.viewer.$(".DV-navControlsContainer").html(h)
        }
        this.viewer.$(".DV-fullscreenControl").remove();
        if (this.viewer.schema.document.canonicalURL) {
            var i = JST.fullscreenControl({});
            if (f) {
                this.viewer.$(".DV-collapsibleControls").prepend(i);
                this.elements.viewer.addClass("DV-hideFooter")
            } else {
                this.viewer.$(".DV-fullscreenContainer").html(i)
            }
        }
        if (this.viewer.options.sidebar) {
            this.viewer.$(".DV-sidebar").show()
        }
        _.defer(_.bind(function () {
            if ((this.elements.viewer.width() <= 700) && (d || j || a)) {
                this.viewer.$(".DV-controls").addClass("DV-narrowControls")
            }
        }, this));
        this.elements.currentPage = this.viewer.$("span.DV-currentPage");
        this.models.document.setPageIndex(this.models.document.currentIndex())
    },
    reset: function () {
        this.resetNavigationState();
        this.cleanUpSearch();
        this.viewer.pageSet.cleanUp();
        this.removeObserver("drawPages");
        this.viewer.dragReporter.unBind();
        this.elements.window.scrollTop(0)
    }
});
_.extend(DV.Schema.helpers, {
    showAnnotationEdit: function (c) {
        var b = this.viewer.$(c.target).closest(this.annotationClassName);
        var a = this.viewer.$(".DV-annotationTextArea", b);
        b.addClass("DV-editing");
        a.focus()
    },
    cancelAnnotationEdit: function (c) {
        var b = this.viewer.$(c.target).closest(this.annotationClassName);
        var a = this.getAnnotationModel(b);
        this.viewer.$(".DV-annotationTitleInput", b).val(a.title);
        this.viewer.$(".DV-annotationTextArea", b).val(a.text);
        if (a.unsaved) {
            this.models.annotations.removeAnnotation(a)
        } else {
            b.removeClass("DV-editing")
        }
    },
    saveAnnotation: function (f, b) {
        var d = this.viewer.$(f.target);
        var c = d.closest(this.annotationClassName);
        var a = this.getAnnotationModel(c);
        if (!a) {
            return
        }
        a.title = this.viewer.$(".DV-annotationTitleInput", c).val();
        a.text = this.viewer.$(".DV-annotationTextArea", c).val();
        a.owns_note = a.unsaved ? true : a.owns_note;
        if (a.owns_note) {
            a.author = a.author || dc.account.name;
            a.author_organization = a.author_organization || (dc.account.isReal && dc.account.organization.name)
        }
        if (d.hasClass("DV-saveAnnotationDraft")) {
            a.access = "exclusive"
        } else {
            if (c.hasClass("DV-accessExclusive")) {
                a.access = "public"
            }
        }
        if (b == "onlyIfText" && (!a.title || a.title == "Untitled Note") && !a.text && !a.server_id) {
            return this.models.annotations.removeAnnotation(a)
        }
        c.removeClass("DV-editing");
        this.models.annotations.fireSaveCallbacks(a);
        this.viewer.api.redraw(true);
        if (this.viewer.activeAnnotation) {
            this.viewer.pageSet.showAnnotation(a)
        }
    },
    deleteAnnotation: function (c) {
        var b = this.viewer.$(c.target).closest(this.annotationClassName);
        var a = this.getAnnotationModel(b);
        this.models.annotations.removeAnnotation(a);
        this.models.annotations.fireDeleteCallbacks(a)
    }
});
_.extend(DV.Schema.helpers, {
    resetNavigationState: function () {
        var a = this.elements;
        if (a.chaptersContainer.length) {
            a.chaptersContainer[0].id = ""
        }
        if (a.navigation.length) {
            a.navigation[0].id = ""
        }
    },
    setActiveChapter: function (a) {
        if (a) {
            this.elements.chaptersContainer.attr("id", "DV-selectedChapter-" + a)
        }
    },
    setActiveAnnotationInNav: function (a) {
        if (a != null) {
            this.elements.navigation.attr("id", "DV-selectedAnnotation-" + a)
        } else {
            this.elements.navigation.attr("id", "")
        }
    }
});
_.extend(DV.Schema.helpers, {
    getSearchResponse: function (d) {
        var c = DV.jQuery.proxy(function (e) {
            this.viewer.searchResponse = e;
            var i = (e.results.length > 0) ? true : false;
            var h = i ? "of " + e.results.length + " " : " ";
            this.viewer.$("span.DV-totalSearchResult").text(h);
            this.viewer.$("span.DV-searchQuery").text(e.query);
            if (i) {
                var f = this.viewer.models.document.currentPage();
                var g = (_.include(e.results, f)) ? f : e.results[0];
                this.events.loadText(g - 1, this.highlightSearchResponses)
            } else {
                this.highlightSearchResponses()
            }
        }, this);
        var b = function () {
                this.viewer.$(".DV-currentSearchResult").text("Search is not available at this time");
                this.viewer.$("span.DV-searchQuery").text(d);
                this.viewer.$(".DV-searchResults").addClass("DV-noResults")
            };
        var a = this.viewer.schema.document.resources.search.replace("{query}", encodeURIComponent(d));
        if (this.viewer.helpers.isCrossDomain(a)) {
            a += "&callback=?"
        }
        DV.jQuery.ajax({
            url: a,
            dataType: "json",
            success: c,
            error: b
        })
    },
    acceptInputCallBack: function () {
        var a = parseInt(this.elements.currentPage.text(), 10) - 1;
        a = (a === "") ? 0 : a;
        a = (a < 0) ? 0 : a;
        a = (a + 1 > this.models.document.totalPages) ? this.models.document.totalPages - 1 : a;
        var b = a + 1;
        this.elements.currentPage.text(b);
        this.viewer.$(".DV-pageNumberContainer input").val(b);
        if (this.viewer.state === "ViewDocument" || this.viewer.state === "ViewThumbnails") {
            this.jump(a)
        } else {
            if (this.viewer.state === "ViewText") {
                this.events.loadText(a)
            }
        }
    },
    highlightSearchResponses: function () {
        var g = this.viewer;
        var c = g.searchResponse;
        if (!c) {
            return false
        }
        var e = c.results;
        var h = this.viewer.$(".DV-currentSearchResult");
        if (e.length == 0) {
            h.text("No Results");
            this.viewer.$(".DV-searchResults").addClass("DV-noResults")
        } else {
            this.viewer.$(".DV-searchResults").removeClass("DV-noResults")
        }
        for (var f = 0; f < c.results.length; f++) {
            if (this.models.document.currentPage() === c.results[f]) {
                h.text("Page " + (f + 1) + " ");
                break
            }
        }
        var l = "\\b" + c.query.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&").replace(/\s+/g, "\\s+") + "\\b";
        var j = this.viewer.$(".DV-textContents");
        var d = j.text();
        var k = new RegExp(l, "ig");
        var b = d.replace(k, '<span class="DV-searchMatch">$&</span>');
        j.html(b);
        var a = (g.toHighLight) ? g.toHighLight : 0;
        this.highlightMatch(a);
        h = null;
        j = null
    },
    highlightEntity: function (g, d) {
        this.viewer.$(".DV-searchResults").addClass("DV-noResults");
        var c = this.viewer.$(".DV-textContents");
        var f = c.text();
        var e = f.substr(0, g);
        var a = f.substr(g, d);
        var b = f.substr(g + d);
        f = [e, '<span class="DV-searchMatch">', a, "</span>", b].join("");
        c.html(f);
        this.highlightMatch(0)
    },
    highlightMatch: function (c) {
        var d = this.viewer.$(".DV-textContents span.DV-searchMatch");
        if (d.length == 0) {
            return false
        }
        var f = this.getCurrentSearchPageIndex();
        var a = this.viewer.toHighLight;
        if (a) {
            if (a !== false) {
                if (a === "last") {
                    c = d.length - 1
                } else {
                    if (a === "first") {
                        c = 0
                    } else {
                        c = a
                    }
                }
            }
            a = false
        }
        var e = this.viewer.searchResponse;
        if (e) {
            if (c === (d.length)) {
                if (e.results.length === f + 1) {
                    return
                }
                a = "first";
                this.events.loadText(e.results[f + 1] - 1, this.highlightSearchResponses);
                return
            } else {
                if (c === -1) {
                    if (f - 1 < 0) {
                        return false
                    }
                    a = "last";
                    this.events.loadText(e.results[f - 1] - 1, this.highlightSearchResponses);
                    return
                }
            }
            d.removeClass("DV-highlightedMatch")
        }
        var b = this.viewer.$(".DV-textContents span.DV-searchMatch:eq(" + c + ")");
        b.addClass("DV-highlightedMatch");
        this.elements.window[0].scrollTop = b.position().top - 50;
        if (e) {
            e.highlighted = c
        }
        d = null;
        b = null
    },
    getCurrentSearchPageIndex: function () {
        var d = this.viewer.searchResponse;
        if (!d) {
            return false
        }
        var b = this.models.document;
        for (var c = 0, a = d.results.length; c < a; c++) {
            if (d.results[c] === b.currentPage()) {
                return c
            }
        }
    },
    highlightPreviousMatch: function (a) {
        a.preventDefault();
        this.highlightMatch(this.viewer.searchResponse.highlighted - 1)
    },
    highlightNextMatch: function (a) {
        a.preventDefault(a);
        this.highlightMatch(this.viewer.searchResponse.highlighted + 1)
    },
    clearSearch: function (a) {
        this.elements.searchInput.val("").keyup().focus()
    },
    showEntity: function (a, c, b) {
        this.viewer.$("span.DV-totalSearchResult").text("");
        this.viewer.$("span.DV-searchQuery").text(a);
        this.viewer.$("span.DV-currentSearchResult").text("Buscando");
        this.events.loadText(this.models.document.currentIndex(), _.bind(this.viewer.helpers.highlightEntity, this.viewer.helpers, c, b))
    },
    cleanUpSearch: function () {
        var a = this.viewer;
        a.searchResponse = null;
        a.toHighLight = null;
        if (this.elements) {
            this.elements.searchInput.keyup().blur()
        }
    }
});
DV.Schema.states = {
    InitialLoad: function () {
        if (this.helpers.unsupportedBrowser()) {
            return
        }
        this.helpers.renderViewer();
        this.events.elements = this.helpers.elements = this.elements = new DV.Elements(this);
        this.helpers.renderComponents();
        this.helpers.renderNavigation();
        this.helpers.renderSpecificPageCss();
        this.pageSet = new DV.PageSet(this);
        this.pageSet.buildPages();
        this.helpers.bindEvents(this);
        this.helpers.positionViewer();
        this.models.document.computeOffsets();
        this.helpers.addObserver("drawPages");
        this.helpers.registerHashChangeEvents();
        this.dragReporter = new DV.DragReporter(this, ".DV-pageCollection", DV.jQuery.proxy(this.helpers.shift, this), {
            ignoreSelector: ".DV-annotationContent"
        });
        this.helpers.startCheckTimer();
        this.helpers.handleInitialState();
        _.defer(_.bind(this.helpers.autoZoomPage, this.helpers))
    },
    ViewAnnotation: function () {
        this.helpers.reset();
        this.activeAnnotationId = null;
        this.acceptInput.deny();
        if (DV.jQuery.browser.msie) {
            this.elements.annotations.css({
                zoom: 0
            });
            this.elements.annotations.css({
                zoom: 1
            })
        }
        this.helpers.toggleContent("viewAnnotations");
        this.compiled.next();
        return true
    },
    ViewDocument: function () {
        this.helpers.reset();
        this.helpers.addObserver("drawPages");
        this.dragReporter.setBinding();
        this.elements.window.mouseleave(DV.jQuery.proxy(this.dragReporter.stop, this.dragReporter));
        this.acceptInput.allow();
        this.helpers.toggleContent("viewDocument");
        this.helpers.setActiveChapter(this.models.chapters.getChapterId(this.models.document.currentIndex()));
        this.helpers.jump(this.models.document.currentIndex());
        return true
    },
    ViewEntity: function (a, c, b) {
        this.helpers.reset();
        this.helpers.toggleContent("viewSearch");
        this.helpers.showEntity(a, c, b)
    },
    ViewSearch: function () {
        this.helpers.reset();
        if (this.elements.searchInput.val() == "") {
            this.elements.searchInput.val(a)
        } else {
            var a = this.elements.searchInput.val()
        }
        this.helpers.getSearchResponse(a);
        this.acceptInput.deny();
        this.helpers.toggleContent("viewSearch");
        return true
    },
    ViewText: function () {
        this.helpers.reset();
        this.acceptInput.allow();
        this.pageSet.zoomText();
        this.helpers.toggleContent("viewText");
        this.events.loadText();
        return true
    },
    ViewThumbnails: function () {
        this.helpers.reset();
        this.helpers.toggleContent("viewThumbnails");
        this.thumbnails = new DV.Thumbnails(this);
        this.thumbnails.render();
        return true
    }
};
DV.Api = function (a) {
    this.viewer = a
};
DV.Api.prototype = {
    currentPage: function () {
        return this.viewer.models.document.currentPage()
    },
    getPageNumberForId: function (b) {
        var a = this.viewer.pageSet.pages[b];
        return a.index + 1
    },
    getSchema: function () {
        return this.viewer.schema.document
    },
    getId: function () {
        return this.viewer.schema.document.id
    },
    getModelId: function () {
        return parseInt(this.getId(), 10)
    },
    currentZoom: function () {
        var a = this.viewer.models.document;
        return a.zoomLevel / a.ZOOM_RANGES[1]
    },
    relativeZoom: function () {
        var b = this.viewer.models;
        var a = this.currentZoom();
        return a * (b.document.ZOOM_RANGES[1] / b.pages.BASE_WIDTH)
    },
    numberOfPages: function () {
        return this.viewer.models.document.totalPages
    },
    getContributor: function () {
        return this.viewer.schema.document.contributor
    },
    getContributorOrganization: function () {
        return this.viewer.schema.document.contributor_organization
    },
    setSections: function (a) {
        a = _.sortBy(a, function (b) {
            return b.page
        });
        this.viewer.schema.data.sections = a;
        this.viewer.models.chapters.loadChapters();
        this.redraw()
    },
    getSections: function () {
        return _.clone(this.viewer.schema.data.sections || [])
    },
    getDescription: function () {
        return this.viewer.schema.document.description
    },
    setDescription: function (a) {
        this.viewer.schema.document.description = a;
        this.viewer.$(".DV-description").remove();
        this.viewer.$(".DV-navigation").prepend(JST.descriptionContainer({
            description: a
        }));
        this.viewer.helpers.displayNavigation()
    },
    getRelatedArticle: function () {
        return this.viewer.schema.document.resources.related_article
    },
    setRelatedArticle: function (a) {
        this.viewer.schema.document.resources.related_article = a;
        this.viewer.$(".DV-storyLink a").attr({
            href: a
        });
        this.viewer.$(".DV-storyLink").toggle( !! a)
    },
    getPublishedUrl: function () {
        return this.viewer.schema.document.resources.published_url
    },
    setPublishedUrl: function (a) {
        this.viewer.schema.document.resources.published_url = a
    },
    getTitle: function () {
        return this.viewer.schema.document.title
    },
    setTitle: function (a) {
        this.viewer.schema.document.title = a;
        document.title = a
    },
    getSource: function () {
        return this.viewer.schema.document.source
    },
    setSource: function (a) {
        this.viewer.schema.document.source = a
    },
    getPageText: function (a) {
        return this.viewer.schema.text[a - 1]
    },
    setPageText: function (b, a) {
        this.viewer.schema.text[a - 1] = b
    },
    resetPageText: function (c) {
        var a = this;
        var b = this.viewer.schema.text;
        if (c) {
            this.viewer.models.document.originalPageText = {}
        } else {
            _.each(this.viewer.models.document.originalPageText, function (d, e) {
                e = parseInt(e, 10);
                if (d != b[e - 1]) {
                    a.setPageText(d, e);
                    if (e == a.currentPage()) {
                        a.viewer.events.loadText()
                    }
                }
            })
        }
        if (this.viewer.openEditor == "editText") {
            this.viewer.$(".DV-textContents").attr("contentEditable", true).addClass("DV-editing")
        }
    },
    redraw: function (a) {
        if (a) {
            this.viewer.models.annotations.renderAnnotations();
            this.viewer.models.document.computeOffsets()
        }
        this.viewer.helpers.renderNavigation();
        this.viewer.helpers.renderComponents();
        if (a) {
            this.viewer.elements.window.removeClass("DV-coverVisible");
            this.viewer.pageSet.buildPages({
                noNotes: true
            });
            this.viewer.pageSet.reflowPages()
        }
    },
    addAnnotation: function (a) {
        a = this.viewer.schema.loadAnnotation(a);
        this.viewer.models.annotations.sortAnnotations();
        this.redraw(true);
        this.viewer.pageSet.showAnnotation(a, {
            active: true,
            edit: true
        });
        return a
    },
    onAnnotationSave: function (a) {
        this.viewer.models.annotations.saveCallbacks.push(a)
    },
    onAnnotationDelete: function (a) {
        this.viewer.models.annotations.deleteCallbacks.push(a)
    },
    setConfirmStateChange: function (a) {
        this.viewer.confirmStateChange = a
    },
    onChangeState: function (a) {
        this.viewer.onStateChangeCallbacks.push(a)
    },
    resetRemovedPages: function () {
        this.viewer.models.document.resetRemovedPages()
    },
    addPageToRemovedPages: function (a) {
        this.viewer.models.document.addPageToRemovedPages(a)
    },
    removePageFromRemovedPages: function (a) {
        this.viewer.models.document.removePageFromRemovedPages(a)
    },
    resetReorderedPages: function () {
        this.viewer.models.document.redrawReorderedPages()
    },
    reorderPages: function (c, b) {
        var a = this.getModelId();
        this.viewer.models.document.reorderPages(a, c, b)
    },
    loadJS: function (a, b) {
        DV.jQuery.getScript(a, b)
    },
    roundTabCorners: function () {
        var a = this.viewer.$(".DV-views > div:visible");
        a.first().addClass("DV-first");
        a.last().addClass("DV-last")
    },
    enterRemovePagesMode: function () {
        this.viewer.openEditor = "removePages"
    },
    leaveRemovePagesMode: function () {
        this.viewer.openEditor = null
    },
    enterAddPagesMode: function () {
        this.viewer.openEditor = "addPages"
    },
    leaveAddPagesMode: function () {
        this.viewer.openEditor = null
    },
    enterReplacePagesMode: function () {
        this.viewer.openEditor = "replacePages"
    },
    leaveReplacePagesMode: function () {
        this.viewer.openEditor = null
    },
    enterReorderPagesMode: function () {
        this.viewer.openEditor = "reorderPages";
        this.viewer.elements.viewer.addClass("DV-reorderPages")
    },
    leaveReorderPagesMode: function () {
        this.resetReorderedPages();
        this.viewer.openEditor = null;
        this.viewer.elements.viewer.removeClass("DV-reorderPages")
    },
    enterEditPageTextMode: function () {
        this.viewer.openEditor = "editText";
        this.viewer.events.loadText()
    },
    leaveEditPageTextMode: function () {
        this.viewer.openEditor = null;
        this.resetPageText()
    }
};
DV.DocumentViewer = function (a) {
    this.options = a;
    this.window = window;
    this.$ = this.jQuery;
    this.schema = new DV.Schema();
    this.api = new DV.Api(this);
    this.history = new DV.History(this);
    this.models = this.schema.models;
    this.events = _.extend({}, DV.Schema.events);
    this.helpers = _.extend({}, DV.Schema.helpers);
    this.states = _.extend({}, DV.Schema.states);
    this.isFocus = true;
    this.openEditor = null;
    this.confirmStateChange = null;
    this.activeElement = null;
    this.observers = [];
    this.windowDimensions = {};
    this.scrollPosition = null;
    this.checkTimer = {};
    this.busy = false;
    this.annotationToLoadId = null;
    this.dragReporter = null;
    this.compiled = {};
    this.tracker = {};
    this.onStateChangeCallbacks = [];
    this.events = _.extend(this.events, {
        viewer: this,
        states: this.states,
        elements: this.elements,
        helpers: this.helpers,
        models: this.models,
        compile: function () {
            var b = this.viewer;
            var c = arguments[0];
            return function () {
                if (!b.events[b.state][c]) {
                    b.events[c].apply(b.events, arguments)
                } else {
                    b.events[b.state][c].apply(b.events, arguments)
                }
            }
        }
    });
    this.helpers = _.extend(this.helpers, {
        viewer: this,
        states: this.states,
        elements: this.elements,
        events: this.events,
        models: this.models
    });
    this.states = _.extend(this.states, {
        viewer: this,
        helpers: this.helpers,
        elements: this.elements,
        events: this.events,
        models: this.models
    })
};
DV.DocumentViewer.prototype.loadModels = function () {
    this.models.chapters = new DV.model.Chapters(this);
    this.models.document = new DV.model.Document(this);
    this.models.pages = new DV.model.Pages(this);
    this.models.annotations = new DV.model.Annotations(this);
    this.models.removedPages = {}
};
DV.DocumentViewer.prototype.open = function (b) {
    if (this.state == b) {
        return
    }
    var a = _.bind(function () {
        this.state = b;
        this.states[b].apply(this, arguments);
        this.slapIE();
        this.notifyChangedState();
        return true
    }, this);
    this.confirmStateChange ? this.confirmStateChange(a) : a()
};
DV.DocumentViewer.prototype.slapIE = function () {
    DV.jQuery(this.options.container).css({
        zoom: 0.99
    }).css({
        zoom: 1
    })
};
DV.DocumentViewer.prototype.notifyChangedState = function () {
    _.each(this.onStateChangeCallbacks, function (a) {
        a()
    })
};
DV.DocumentViewer.prototype.recordHit = function (b) {
    var d = window.location;
    var a = d.protocol + "//" + d.host + d.pathname;
    if (a.match(/^file:/)) {
        return false
    }
    a = a.replace(/[\/]+$/, "");
    var e = parseInt(this.api.getId(), 10);
    var c = encodeURIComponent("document:" + e + ":" + a);
    DV.jQuery(document.body).append('<img alt="" width="1" height="1" src="' + b + "?key=" + c + '" />')
};
DV.DocumentViewer.prototype.jQuery = function (a, b) {
    b = b || this.options.container;
    return DV.jQuery.call(DV.jQuery, a, b)
};
DV.load = function (a, c) {
    c = c || {};
    var g = a.id || a.match(/([^\/]+)(\.js|\.json)$/)[1];
    if ("showSidebar" in c) {
        c.sidebar = c.showSidebar
    }
    var e = {
        container: document.body,
        zoom: "auto",
        sidebar: true
    };
    c = _.extend({}, e, c);
    c.fixedSize = !! (c.width || c.height);
    var f = new DV.DocumentViewer(c);
    DV.viewers[g] = f;
    var b = DV.loadJSON = function (h) {
            var i = DV.viewers[h.id];
            i.schema.importCanonicalDocument(h);
            i.loadModels();
            DV.jQuery(function () {
                i.open("InitialLoad");
                if (c.afterLoad) {
                    c.afterLoad(i)
                }
                if (DV.afterLoad) {
                    DV.afterLoad(i)
                }
                if (DV.recordHit) {
                    i.recordHit(DV.recordHit)
                }
            })
        };
    var d = function () {
            if (_.isString(a)) {
                if (a.match(/\.js$/)) {
                    DV.jQuery.getScript(a)
                } else {
                    var h = f.helpers.isCrossDomain(a);
                    if (h) {
                        a = a + "?callback=?"
                    }
                    DV.jQuery.getJSON(a, b)
                }
            } else {
                b(a)
            }
        };
    if (c.templates) {
        DV.jQuery.getScript(c.templates, d)
    } else {
        d()
    }
    return f
};
if (DV.onload) {
    _.defer(DV.onload)
};
(function () {
    window.JST = window.JST || {};
    window.JST.annotation = _.template('<div class="DV-annotation <%= orderClass %> <%= accessClass %> <% if (owns_note) { %>DV-ownsAnnotation<% } %>" style="top:<%= top %>px;" id="DV-annotation-<%= id %>" data-id="<%= id %>">  <div class="DV-annotationTab" style="top:<%= tabTop %>px;">    <div class="DV-annotationClose DV-trigger">      <% if (access == \'exclusive\') { %>        <div class="DV-annotationDraftDot DV-editHidden"></div>      <% } %>    </div>  </div>  <div class="DV-annotationRegion" style="margin-left:<%= excerptMarginLeft - 4 %>px; height:<%= excerptHeight %>px; width:<%= excerptWidth - 1 %>px;">    <div class="<%= accessClass %>">      <div class="DV-annotationEdge DV-annotationEdgeTop"></div>      <div class="DV-annotationEdge DV-annotationEdgeRight"></div>      <div class="DV-annotationEdge DV-annotationEdgeBottom"></div>      <div class="DV-annotationEdge DV-annotationEdgeLeft"></div>      <div class="DV-annotationCorner DV-annotationCornerTopLeft"></div>      <div class="DV-annotationCorner DV-annotationCornerTopRight"></div>      <div class="DV-annotationCorner DV-annotationCornerBottomLeft"></div>      <div class="DV-annotationCorner DV-annotationCornerBottomRight"></div>    </div>    <div class="DV-annotationRegionExclusive"></div>  </div>  <div class="DV-annotationContent">    <div class="DV-annotationHeader DV-clearfix">      <div class="DV-pagination DV-editHidden">        <span class="DV-trigger DV-annotationPrevious" title="Previous Annotation">Previous</span>        <span class="DV-trigger DV-annotationNext" title="Next Annotation">Next</span>      </div>      <div class="DV-annotationGoto DV-editHidden"><div class="DV-trigger">p. <%= pageNumber %></div></div>      <div class="DV-annotationTitle DV-editHidden"><%= title %></div>      <input class="DV-annotationTitleInput DV-editVisible" type="text" placeholder="Annotation Title" value="<%= title.replace(/"/g, \'&quot;\') %>" />      <% if (access == \'exclusive\') { %>        <div class="DV-annotationDraftLabel DV-editHidden DV-interface">Draft</div>      <% } else if (access == \'private\') { %>        <div class="DV-privateLock DV-editHidden" title="Private note"></div>      <% } %>      <span class="DV-permalink DV-editHidden" title="Link to this note"></span>      <div class="DV-showEdit DV-editHidden <%= accessClass %>"></div>    </div>    <div class="DV-annotationExcerpt" style="height:<%= excerptHeight %>px;">      <div class="DV-annotationExcerptImageTop" style="height:<%= excerptHeight %>px; width:<%= excerptWidth %>px;left:<%= excerptMarginLeft - 1 %>px;">        <img src="<%= image %>" style="left:<%= -(excerptMarginLeft + 1) %>px; top:-<%= imageTop %>px;" width="<%= imageWidth %>" />      </div>      <div class="DV-annotationExcerptImage" style="height:<%= excerptHeight %>px;">        <img src="<%= image %>" style="top:-<%= imageTop %>px;" width="<%= imageWidth %>" />      </div>    </div>    <div class="DV-annotationBody DV-editHidden">      <%= text %>    </div>    <textarea class="DV-annotationTextArea DV-editVisible" style="width: <%= bWidth %>px;"><%= text %></textarea>    <div class="DV-annotationMeta <%= accessClass %>">      <% if (author) { %>        <div class="DV-annotationAuthor DV-interface DV-editHidden">          Annotated by: <%= author %><% if (author_organization) { %>, <i><%= author_organization %></i><% } %>        </div>      <% } %>      <% if (access == \'exclusive\') { %>        <div class="DV-annotationWarning DV-interface DV-editHidden">          This draft is only visible to you and collaborators.        </div>      <% } else if (access == \'private\') { %>        <div class="DV-annotationWarning DV-interface DV-editHidden">          This private note is only visible to you.        </div>      <% } %>      <div class="DV-annotationEditControls DV-editVisible">        <div class="DV-clearfix">          <div class="minibutton warn DV-deleteAnnotation float_left">Delete</div>          <div class="minibutton default DV-saveAnnotation float_right">            <% if (access == \'exclusive\') { %>              Publish            <% } else { %>              Save            <% } %>          </div>          <% if (access == \'public\' || access == \'exclusive\') { %>            <div class="minibutton DV-saveAnnotationDraft float_right">Save as Draft</div>          <% } %>          <div class="minibutton DV-cancelEdit float_right">Cancel</div>        </div>      </div>    </div>  </div></div>');
    window.JST.annotationNav = _.template('<div class="DV-annotationMarker" id="DV-annotationMarker-<%= id %>">  <span class="DV-trigger">    <span class="DV-navAnnotationTitle"><%= title %></span>&nbsp;<span class="DV-navPageNumber">p.<%= page %></span>  </span></div>');
    window.JST.chapterNav = _.template('<div id="DV-chapter-<%= id %>" class="DV-chapter <%= navigationExpanderClass %>">  <div class="DV-first">    <%= navigationExpander %>    <span class="DV-trigger">      <span class="DV-navChapterTitle"><%= title %></span>&nbsp;<span class="DV-navPageNumber">p.&nbsp;<%= pageNumber %></span>    </span>  </div>  <%= noteViews %></div>');
    window.JST.descriptionContainer = _.template('<% if (description) { %>  <div class="DV-description">    <div class="DV-descriptionHead">      <span class="DV-descriptionToggle DV-showDescription DV-trigger"> Toggle Description</span>      Description    </div>    <div class="DV-descriptionText"><%= description %></div>  </div><% } %>');
    window.JST.footer = _.template('<% if (!options.sidebar) { %>  <div class="DV-footer">    <div class="DV-fullscreenContainer"></div>    <div class="DV-navControlsContainer"></div>  </div><% } %>');
    window.JST.fullscreenControl = _.template('<div class="DV-fullscreen" title="Pantalla completa"></div>');
    window.JST.header = _.template('<div class="DV-header">  <div class="DV-headerHat" class="DV-clearfix">    <div class="DV-branding">      <% if (story_url) { %>        <span class="DV-storyLink"><%= story_url %></span>      <% } %>    </div>    <div class="DV-title">      <%= title %>    </div>  </div>  <div class="DV-controls">        <div class="DV-views">      <div class="DV-documentView"><span class="DV-trigger DV-selected">Libro</span></div>      <div class="DV-thumbnailsView"><span class="DV-trigger">Páginas</span></div>      <div style="display:none;" class="DV-annotationView"><span class="DV-trigger">Notas</span></div>      <div class="DV-textView"><span class="DV-trigger">Texto</span></div>    </div>    <div class="DV-collapsibleControls">      <div class="DV-searchBox DV-clearfix">        <form action="#" method="get" class="DV-searchDocument">          <div class="DV-searchInputWrap">            <div class="DV-searchInput-cancel"></div>            <input class="DV-searchInput" type="text" autosave="DV-<%= id %>" results="10" placeholder="Buscar" />          </div>        </form>      </div>            <div class="DV-zoomControls">        <span class="DV-zoomLabel">Zoom</span>        <div class="DV-zoomBox"></div>      </div>          </div>      </div></div>');
    window.JST.navControls = _.template('<div class="DV-navControls DV-clearfix">  <span class="DV-trigger DV-previous">&laquo;</span>  <div class="DV-clearfix DV-pageNumberContainer">    <span class="DV-currentPagePrefix">Pag.</span>    <span class="DV-currentAnnotationPrefix">Note&nbsp;</span>    <span class="DV-currentPage">1</span>    <span class="DV-currentPageSuffix">de&nbsp;      <span class="DV-totalPages"><%= totalPages %></span>      <span class="DV-totalAnnotations"><%= totalAnnotations %></span>                            </span>  </div>  <span class="DV-trigger DV-next">&raquo;</span></div>');
    window.JST.navigationExpander = _.template('<span class="DV-trigger DV-expander">Expand</span>');
    window.JST.pageAnnotation = _.template('<div class="DV-annotation DV-pageNote <%= orderClass %> <%= accessClass %> <% if (owns_note) { %>DV-ownsAnnotation<% } %>" style="top:<%= top %>px;" id="DV-annotation-<%= id %>" data-id="<%= id %>">  <div class="DV-annotationTab">    <div class="DV-annotationClose DV-trigger">p. <%= pageNumber %></div>  </div>  <div class="DV-annotationContent">    <!-- Header -->    <div class="DV-annotationHeader DV-clearfix">      <div class="DV-pagination DV-editHidden">        <span class="DV-trigger DV-annotationPrevious" title="Previous Annotation">Previous</span>        <span class="DV-trigger DV-annotationNext" title="Next Annotation">Next</span>      </div>      <div class="DV-annotationGoto DV-editHidden"><div class="DV-trigger">p. <%= pageNumber %></div></div>      <div class="DV-annotationTitle DV-editHidden"><%= title %></div>      <input class="DV-annotationTitleInput DV-editVisible" type="text" placeholder="Annotation Title" value="<%= title.replace(/"/g, \'&quot;\') %>" />      <% if (access == \'exclusive\') { %>        <div class="DV-annotationDraftLabel DV-editHidden DV-interface">Draft</div>      <% } else if (access == \'private\') { %>        <div class="DV-privateLock DV-editHidden" title="Private note"></div>      <% } %>      <span class="DV-permalink DV-editHidden" title="Link to this note"></span>      <div class="DV-showEdit DV-editHidden <%= accessClass %>"></div>    </div>    <div class="DV-annotationBody DV-editHidden">      <%= text %>    </div>    <textarea class="DV-annotationTextArea DV-editVisible" style="width: <%= bWidth %>px;"><%= text %></textarea>    <div class="DV-annotationMeta <%= accessClass %>">      <% if (author) { %>        <div class="DV-annotationAuthor DV-interface DV-editHidden">          Annotated by: <%= author %><% if (author_organization) { %>, <i><%= author_organization %></i><% } %>        </div>      <% } %>      <% if (access == \'exclusive\') { %>        <div class="DV-annotationWarning DV-interface DV-editHidden">          This draft is only visible to you and collaborators.        </div>      <% } else if (access == \'private\') { %>        <div class="DV-annotationWarning DV-interface DV-editHidden">          This private note is only visible to you.        </div>      <% } %>      <div class="DV-annotationEditControls DV-editVisible">        <div class="DV-clearfix">          <div class="minibutton warn DV-deleteAnnotation float_left">Delete</div>          <div class="minibutton default DV-saveAnnotation float_right">            <% if (access == \'exclusive\') { %>              Publish            <% } else { %>              Save            <% } %>          </div>          <% if (access == \'public\' || access == \'exclusive\') { %>            <div class="minibutton DV-saveAnnotationDraft float_right">Save as Draft</div>          <% } %>          <div class="minibutton DV-cancelEdit float_right">Cancel</div>        </div>      </div>    </div>  </div></div>');
    window.JST.pages = _.template('<div class="DV-set p<%= pageIndex %>" data-id="p<%= pageIndex %>" style="top:0;left:0px;height:893px;width:700px;">  <div class="DV-overlay"></div>  <div class="DV-pageNoteInsert" title="Click to Add a Page Note">    <div class="DV-annotationTab">      <div class="DV-annotationClose"></div>    </div>    <div class="DV-annotationDivider"></div>  </div>  <div class="DV-pageMeta"><span class="DV-pageNumber">p. <%= pageNumber %></span></div>  <div class="DV-annotations"></div>  <div class="DV-page" style="height:863px;width:700px;">    <span class="DV-loading-top">Cargando</span>    <span class="DV-loading-bottom">Loading</span>    <div class="DV-cover"></div>    <img class="DV-pageImage" <%= pageImageSource ? \'src="\' + pageImageSource + \'"\' : \'\' %> height="863" />  </div></div>');
    window.JST.thumbnails = _.template('<% for (; page <= endPage; page++) { %>  <% var url = imageUrl.replace(/{page}/, page) ; %>  <div class="DV-thumbnail" id="DV-thumbnail-<%= page %>" data-pageNumber="<%= page %>">    <div class="DV-overlay">      <div class=\'DV-caret\'></div>    </div>    <div class="DV-thumbnail-page">      <div class="DV-thumbnail-select">        <div class="DV-thumbnail-shadow"></div>        <img class="DV-thumbnail-image" data-src="<%= url %>" />      </div>      <div class="DV-pageNumber DV-pageMeta"><span class="DV-pageNumberText"><span class="DV-pageNumberTextUnderline">p. <%= page %></span></span></div>    </div>  </div><% } %>');
    window.JST.unsupported = _.template('<div class="DV-unsupported">  <div class="DV-intro">    <% if (viewer.schema.document.resources && viewer.schema.document.resources.pdf) { %>      <a href="<%= viewer.schema.document.resources.pdf %>">Download this document as a PDF</a>    <% } %>    <br />    <br />    To use the Document Viewer you need to<br /> upgrade your browser:  </div>  <div class="DV-browsers">    <div class="DV-browser">      <a href="http://www.google.com/chrome">        <div class="DV-image DV-chrome"> </div>Chrome      </a>    </div>    <div class="DV-browser">      <a href="http://www.apple.com/safari/download/">        <div class="DV-image DV-safari"> </div>Safari      </a>    </div>    <div class="DV-browser">      <a href="http://www.mozilla.com/en-US/firefox/firefox.html">        <div class="DV-image DV-firefox"> </div>Firefox      </a>    </div>    <br style="clear:both;" />  </div>  <div class="DV-after">    Or, if you\'d like to continue using Internet Explorer 6,<br /> you can    <a href="http://www.google.com/chromeframe">install Google Chrome Frame</a>.  </div></div>');
    window.JST.viewer = _.template('<!--[if lte IE 8]><div class="DV-docViewer DV-clearfix DV-viewDocument DV-ie <% if (autoZoom) { %>DV-autoZoom<% } %> <% if (!options.sidebar) { %>DV-hideSidebar<% } else { %>DV-hideFooter<% } %>"><![endif]--><!--[if (!IE)|(gte IE 9)]><!--><div class="DV-docViewer DV-clearfix DV-viewDocument <% if (autoZoom) { %>DV-autoZoom<% } %> <% if (!options.sidebar) { %>DV-hideSidebar<% } else { %>DV-hideFooter<% } %>"><!-- <![endif]-->    <div class="DV-docViewerWrapper">      <%= header %>    <div class="DV-docViewer-Container">          <div class="DV-searchBarWrapper">        <div class="DV-searchBar">          <span class="DV-trigger DV-closeSearch">CLOSE</span>          <div class="DV-searchPagination DV-foundResult">            <div class="DV-searchResults">              <span class="DV-resultPrevious DV-trigger">Previous</span>              <span class="DV-currentSearchResult"></span>              <span class="DV-totalSearchResult"></span>              <span> for &ldquo;<span class="DV-searchQuery"></span>&rdquo;</span>              <span class="DV-resultNext DV-trigger">Next</span>            </div>          </div>        </div>      </div>          <div class="DV-pages <% if (!options.sidebar) { %>DV-hide-sidebar<% } %>">        <div class="DV-paper">          <div class="DV-thumbnails"></div>          <div class="DV-pageCollection">            <div class="DV-bar" style=""></div>            <div class="DV-allAnnotations">            </div>            <div class="DV-text">              <div class="DV-textSearch DV-clearfix">                        </div>              <div class="DV-textPage">                <span class="DV-textCurrentPage"></span>                <pre class="DV-textContents"></pre>              </div>            </div>            <%= pages %>          </div>        </div>      </div>          <div width="265px" class="DV-sidebar <% if (!options.sidebar) { %>DV-hide<% } %>" style="display:none;">        <div class="DV-well">              <div class="DV-sidebarSpacer"></div>                    <% if (options.sidebar) { %>            <div class="DV-navControlsContainer">            </div>          <% } %>                        <div class="DV-navigation">            <%= descriptionContainer %>            <div class="DV-contentsHeader">Contents</div>            <div class="DV-chaptersContainer">            </div>            <div class="DV-supplemental">              <% if (pdf_url) { %>                <div class="DV-pdfLink"><%= pdf_url %></div>              <% } %>              <div class="DV-storyLink" style="<%= story_url ? \'\' : \'display:none\' %>">                <a target="_blank" href="<%= story_url %>">Related Article &raquo;</a>              </div>              <div class="DV-contributor"></div>            </div>                      </div>        </div>      </div>    </div>        <%= footer %>      </div>  ></div>')
})();
