(() => {
  "use strict";
  const e = {};
  let t = !0,
    i = (e = 500) => {
      let i = document.querySelector("body");
      if (t) {
        let s = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight = "0px";
          }
          (i.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (t = !1),
          setTimeout(function () {
            t = !0;
          }, e);
      }
    },
    s = (e = 500) => {
      let i = document.querySelector("body");
      if (t) {
        let s = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < s.length; e++) {
          s[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (i.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (t = !1),
          setTimeout(function () {
            t = !0;
          }, e);
      }
    };
  function n(e) {
    return e.filter(function (e, t, i) {
      return i.indexOf(e) === t;
    });
  }
  function r(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function a(e = {}, t = {}) {
    Object.keys(t).forEach((i) => {
      void 0 === e[i]
        ? (e[i] = t[i])
        : r(t[i]) && r(e[i]) && Object.keys(t[i]).length > 0 && a(e[i], t[i]);
    });
  }
  const o = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function l() {
    const e = "undefined" != typeof document ? document : {};
    return a(e, o), e;
  }
  const d = {
    document: o,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function c() {
    const e = "undefined" != typeof window ? window : {};
    return a(e, d), e;
  }
  class p extends Array {
    constructor(e) {
      "number" == typeof e
        ? super(e)
        : (super(...(e || [])),
          (function (e) {
            const t = e.__proto__;
            Object.defineProperty(e, "__proto__", {
              get: () => t,
              set(e) {
                t.__proto__ = e;
              },
            });
          })(this));
    }
  }
  function u(e = []) {
    const t = [];
    return (
      e.forEach((e) => {
        Array.isArray(e) ? t.push(...u(e)) : t.push(e);
      }),
      t
    );
  }
  function f(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function h(e, t) {
    const i = c(),
      s = l();
    let n = [];
    if (!t && e instanceof p) return e;
    if (!e) return new p(n);
    if ("string" == typeof e) {
      const i = e.trim();
      if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
        let e = "div";
        0 === i.indexOf("<li") && (e = "ul"),
          0 === i.indexOf("<tr") && (e = "tbody"),
          (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (e = "tr"),
          0 === i.indexOf("<tbody") && (e = "table"),
          0 === i.indexOf("<option") && (e = "select");
        const t = s.createElement(e);
        t.innerHTML = i;
        for (let e = 0; e < t.childNodes.length; e += 1)
          n.push(t.childNodes[e]);
      } else
        n = (function (e, t) {
          if ("string" != typeof e) return [e];
          const i = [],
            s = t.querySelectorAll(e);
          for (let e = 0; e < s.length; e += 1) i.push(s[e]);
          return i;
        })(e.trim(), t || s);
    } else if (e.nodeType || e === i || e === s) n.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof p) return e;
      n = e;
    }
    return new p(
      (function (e) {
        const t = [];
        for (let i = 0; i < e.length; i += 1)
          -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t;
      })(n)
    );
  }
  h.fn = p.prototype;
  const m = "resize scroll".split(" ");
  function g(e) {
    return function (...t) {
      if (void 0 === t[0]) {
        for (let t = 0; t < this.length; t += 1)
          m.indexOf(e) < 0 &&
            (e in this[t] ? this[t][e]() : h(this[t]).trigger(e));
        return this;
      }
      return this.on(e, ...t);
    };
  }
  g("click"),
    g("blur"),
    g("focus"),
    g("focusin"),
    g("focusout"),
    g("keyup"),
    g("keydown"),
    g("keypress"),
    g("submit"),
    g("change"),
    g("mousedown"),
    g("mousemove"),
    g("mouseup"),
    g("mouseenter"),
    g("mouseleave"),
    g("mouseout"),
    g("mouseover"),
    g("touchstart"),
    g("touchend"),
    g("touchmove"),
    g("resize"),
    g("scroll");
  const v = {
    addClass: function (...e) {
      const t = u(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.add(...t);
        }),
        this
      );
    },
    removeClass: function (...e) {
      const t = u(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.remove(...t);
        }),
        this
      );
    },
    hasClass: function (...e) {
      const t = u(e.map((e) => e.split(" ")));
      return (
        f(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
          .length > 0
      );
    },
    toggleClass: function (...e) {
      const t = u(e.map((e) => e.split(" ")));
      this.forEach((e) => {
        t.forEach((t) => {
          e.classList.toggle(t);
        });
      });
    },
    attr: function (e, t) {
      if (1 === arguments.length && "string" == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (let i = 0; i < this.length; i += 1)
        if (2 === arguments.length) this[i].setAttribute(e, t);
        else
          for (const t in e) (this[i][t] = e[t]), this[i].setAttribute(t, e[t]);
      return this;
    },
    removeAttr: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    transform: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
      return this;
    },
    transition: function (e) {
      for (let t = 0; t < this.length; t += 1)
        this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
      return this;
    },
    on: function (...e) {
      let [t, i, s, n] = e;
      function r(e) {
        const t = e.target;
        if (!t) return;
        const n = e.target.dom7EventData || [];
        if ((n.indexOf(e) < 0 && n.unshift(e), h(t).is(i))) s.apply(t, n);
        else {
          const e = h(t).parents();
          for (let t = 0; t < e.length; t += 1)
            h(e[t]).is(i) && s.apply(e[t], n);
        }
      }
      function a(e) {
        const t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
      }
      "function" == typeof e[1] && (([t, s, n] = e), (i = void 0)),
        n || (n = !1);
      const o = t.split(" ");
      let l;
      for (let e = 0; e < this.length; e += 1) {
        const t = this[e];
        if (i)
          for (l = 0; l < o.length; l += 1) {
            const e = o[l];
            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
              t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
              t.dom7LiveListeners[e].push({ listener: s, proxyListener: r }),
              t.addEventListener(e, r, n);
          }
        else
          for (l = 0; l < o.length; l += 1) {
            const e = o[l];
            t.dom7Listeners || (t.dom7Listeners = {}),
              t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
              t.dom7Listeners[e].push({ listener: s, proxyListener: a }),
              t.addEventListener(e, a, n);
          }
      }
      return this;
    },
    off: function (...e) {
      let [t, i, s, n] = e;
      "function" == typeof e[1] && (([t, s, n] = e), (i = void 0)),
        n || (n = !1);
      const r = t.split(" ");
      for (let e = 0; e < r.length; e += 1) {
        const t = r[e];
        for (let e = 0; e < this.length; e += 1) {
          const r = this[e];
          let a;
          if (
            (!i && r.dom7Listeners
              ? (a = r.dom7Listeners[t])
              : i && r.dom7LiveListeners && (a = r.dom7LiveListeners[t]),
            a && a.length)
          )
            for (let e = a.length - 1; e >= 0; e -= 1) {
              const i = a[e];
              (s && i.listener === s) ||
              (s &&
                i.listener &&
                i.listener.dom7proxy &&
                i.listener.dom7proxy === s)
                ? (r.removeEventListener(t, i.proxyListener, n), a.splice(e, 1))
                : s ||
                  (r.removeEventListener(t, i.proxyListener, n),
                  a.splice(e, 1));
            }
        }
      }
      return this;
    },
    trigger: function (...e) {
      const t = c(),
        i = e[0].split(" "),
        s = e[1];
      for (let n = 0; n < i.length; n += 1) {
        const r = i[n];
        for (let i = 0; i < this.length; i += 1) {
          const n = this[i];
          if (t.CustomEvent) {
            const i = new t.CustomEvent(r, {
              detail: s,
              bubbles: !0,
              cancelable: !0,
            });
            (n.dom7EventData = e.filter((e, t) => t > 0)),
              n.dispatchEvent(i),
              (n.dom7EventData = []),
              delete n.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd: function (e) {
      const t = this;
      return (
        e &&
          t.on("transitionend", function i(s) {
            s.target === this && (e.call(this, s), t.off("transitionend", i));
          }),
        this
      );
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(e.getPropertyValue("margin-right")) +
            parseFloat(e.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(e.getPropertyValue("margin-top")) +
            parseFloat(e.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function () {
      const e = c();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        const e = c(),
          t = l(),
          i = this[0],
          s = i.getBoundingClientRect(),
          n = t.body,
          r = i.clientTop || n.clientTop || 0,
          a = i.clientLeft || n.clientLeft || 0,
          o = i === e ? e.scrollY : i.scrollTop,
          d = i === e ? e.scrollX : i.scrollLeft;
        return { top: s.top + o - r, left: s.left + d - a };
      }
      return null;
    },
    css: function (e, t) {
      const i = c();
      let s;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (s = 0; s < this.length; s += 1)
            for (const t in e) this[s].style[t] = e[t];
          return this;
        }
        if (this[0])
          return i.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      return e
        ? (this.forEach((t, i) => {
            e.apply(t, [t, i]);
          }),
          this)
        : this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;
      for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      const t = c(),
        i = l(),
        s = this[0];
      let n, r;
      if (!s || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (s.matches) return s.matches(e);
        if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
        if (s.msMatchesSelector) return s.msMatchesSelector(e);
        for (n = h(e), r = 0; r < n.length; r += 1) if (n[r] === s) return !0;
        return !1;
      }
      if (e === i) return s === i;
      if (e === t) return s === t;
      if (e.nodeType || e instanceof p) {
        for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1)
          if (n[r] === s) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      let e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      const t = this.length;
      if (e > t - 1) return h([]);
      if (e < 0) {
        const i = t + e;
        return h(i < 0 ? [] : [this[i]]);
      }
      return h([this[e]]);
    },
    append: function (...e) {
      let t;
      const i = l();
      for (let s = 0; s < e.length; s += 1) {
        t = e[s];
        for (let e = 0; e < this.length; e += 1)
          if ("string" == typeof t) {
            const s = i.createElement("div");
            for (s.innerHTML = t; s.firstChild; )
              this[e].appendChild(s.firstChild);
          } else if (t instanceof p)
            for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
          else this[e].appendChild(t);
      }
      return this;
    },
    prepend: function (e) {
      const t = l();
      let i, s;
      for (i = 0; i < this.length; i += 1)
        if ("string" == typeof e) {
          const n = t.createElement("div");
          for (n.innerHTML = e, s = n.childNodes.length - 1; s >= 0; s -= 1)
            this[i].insertBefore(n.childNodes[s], this[i].childNodes[0]);
        } else if (e instanceof p)
          for (s = 0; s < e.length; s += 1)
            this[i].insertBefore(e[s], this[i].childNodes[0]);
        else this[i].insertBefore(e, this[i].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && h(this[0].nextElementSibling).is(e)
            ? h([this[0].nextElementSibling])
            : h([])
          : this[0].nextElementSibling
          ? h([this[0].nextElementSibling])
          : h([])
        : h([]);
    },
    nextAll: function (e) {
      const t = [];
      let i = this[0];
      if (!i) return h([]);
      for (; i.nextElementSibling; ) {
        const s = i.nextElementSibling;
        e ? h(s).is(e) && t.push(s) : t.push(s), (i = s);
      }
      return h(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        const t = this[0];
        return e
          ? t.previousElementSibling && h(t.previousElementSibling).is(e)
            ? h([t.previousElementSibling])
            : h([])
          : t.previousElementSibling
          ? h([t.previousElementSibling])
          : h([]);
      }
      return h([]);
    },
    prevAll: function (e) {
      const t = [];
      let i = this[0];
      if (!i) return h([]);
      for (; i.previousElementSibling; ) {
        const s = i.previousElementSibling;
        e ? h(s).is(e) && t.push(s) : t.push(s), (i = s);
      }
      return h(t);
    },
    parent: function (e) {
      const t = [];
      for (let i = 0; i < this.length; i += 1)
        null !== this[i].parentNode &&
          (e
            ? h(this[i].parentNode).is(e) && t.push(this[i].parentNode)
            : t.push(this[i].parentNode));
      return h(t);
    },
    parents: function (e) {
      const t = [];
      for (let i = 0; i < this.length; i += 1) {
        let s = this[i].parentNode;
        for (; s; ) e ? h(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
      }
      return h(t);
    },
    closest: function (e) {
      let t = this;
      return void 0 === e ? h([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      const t = [];
      for (let i = 0; i < this.length; i += 1) {
        const s = this[i].querySelectorAll(e);
        for (let e = 0; e < s.length; e += 1) t.push(s[e]);
      }
      return h(t);
    },
    children: function (e) {
      const t = [];
      for (let i = 0; i < this.length; i += 1) {
        const s = this[i].children;
        for (let i = 0; i < s.length; i += 1)
          (e && !h(s[i]).is(e)) || t.push(s[i]);
      }
      return h(t);
    },
    filter: function (e) {
      return h(f(this, e));
    },
    remove: function () {
      for (let e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
  };
  Object.keys(v).forEach((e) => {
    Object.defineProperty(h.fn, e, { value: v[e], writable: !0 });
  });
  const w = h;
  function b(e, t = 0) {
    return setTimeout(e, t);
  }
  function C() {
    return Date.now();
  }
  function T(e, t = "x") {
    const i = c();
    let s, n, r;
    const a = (function (e) {
      const t = c();
      let i;
      return (
        t.getComputedStyle && (i = t.getComputedStyle(e, null)),
        !i && e.currentStyle && (i = e.currentStyle),
        i || (i = e.style),
        i
      );
    })(e);
    return (
      i.WebKitCSSMatrix
        ? ((n = a.transform || a.webkitTransform),
          n.split(",").length > 6 &&
            (n = n
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (r = new i.WebKitCSSMatrix("none" === n ? "" : n)))
        : ((r =
            a.MozTransform ||
            a.OTransform ||
            a.MsTransform ||
            a.msTransform ||
            a.transform ||
            a
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (s = r.toString().split(","))),
      "x" === t &&
        (n = i.WebKitCSSMatrix
          ? r.m41
          : 16 === s.length
          ? parseFloat(s[12])
          : parseFloat(s[4])),
      "y" === t &&
        (n = i.WebKitCSSMatrix
          ? r.m42
          : 16 === s.length
          ? parseFloat(s[13])
          : parseFloat(s[5])),
      n || 0
    );
  }
  function S(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function y(...e) {
    const t = Object(e[0]),
      i = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < e.length; n += 1) {
      const r = e[n];
      if (
        null != r &&
        ((s = r),
        !("undefined" != typeof window && void 0 !== window.HTMLElement
          ? s instanceof HTMLElement
          : s && (1 === s.nodeType || 11 === s.nodeType)))
      ) {
        const e = Object.keys(Object(r)).filter((e) => i.indexOf(e) < 0);
        for (let i = 0, s = e.length; i < s; i += 1) {
          const s = e[i],
            n = Object.getOwnPropertyDescriptor(r, s);
          void 0 !== n &&
            n.enumerable &&
            (S(t[s]) && S(r[s])
              ? r[s].__swiper__
                ? (t[s] = r[s])
                : y(t[s], r[s])
              : !S(t[s]) && S(r[s])
              ? ((t[s] = {}), r[s].__swiper__ ? (t[s] = r[s]) : y(t[s], r[s]))
              : (t[s] = r[s]));
        }
      }
    }
    var s;
    return t;
  }
  function x(e, t, i) {
    e.style.setProperty(t, i);
  }
  function E({ swiper: e, targetPosition: t, side: i }) {
    const s = c(),
      n = -e.translate;
    let r,
      a = null;
    const o = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      s.cancelAnimationFrame(e.cssModeFrameID);
    const l = t > n ? "next" : "prev",
      d = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
      p = () => {
        (r = new Date().getTime()), null === a && (a = r);
        const l = Math.max(Math.min((r - a) / o, 1), 0),
          c = 0.5 - Math.cos(l * Math.PI) / 2;
        let u = n + c * (t - n);
        if ((d(u, t) && (u = t), e.wrapperEl.scrollTo({ [i]: u }), d(u, t)))
          return (
            (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [i]: u });
            }),
            void s.cancelAnimationFrame(e.cssModeFrameID)
          );
        e.cssModeFrameID = s.requestAnimationFrame(p);
      };
    p();
  }
  let k, P, M;
  function L() {
    return (
      k ||
        (k = (function () {
          const e = c(),
            t = l();
          return {
            smoothScroll:
              t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            passiveListener: (function () {
              let t = !1;
              try {
                const i = Object.defineProperty({}, "passive", {
                  get() {
                    t = !0;
                  },
                });
                e.addEventListener("testPassiveListener", null, i);
              } catch (e) {}
              return t;
            })(),
            gestures: "ongesturestart" in e,
          };
        })()),
      k
    );
  }
  function I(e = {}) {
    return (
      P ||
        (P = (function ({ userAgent: e } = {}) {
          const t = L(),
            i = c(),
            s = i.navigator.platform,
            n = e || i.navigator.userAgent,
            r = { ios: !1, android: !1 },
            a = i.screen.width,
            o = i.screen.height,
            l = n.match(/(Android);?[\s\/]+([\d.]+)?/);
          let d = n.match(/(iPad).*OS\s([\d_]+)/);
          const p = n.match(/(iPod)(.*OS\s([\d_]+))?/),
            u = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            f = "Win32" === s;
          let h = "MacIntel" === s;
          return (
            !d &&
              h &&
              t.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${a}x${o}`) >= 0 &&
              ((d = n.match(/(Version)\/([\d.]+)/)),
              d || (d = [0, 1, "13_0_0"]),
              (h = !1)),
            l && !f && ((r.os = "android"), (r.android = !0)),
            (d || u || p) && ((r.os = "ios"), (r.ios = !0)),
            r
          );
        })(e)),
      P
    );
  }
  function O() {
    return (
      M ||
        (M = (function () {
          const e = c();
          return {
            isSafari: (function () {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            })(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      M
    );
  }
  const A = {
    on(e, t, i) {
      const s = this;
      if ("function" != typeof t) return s;
      const n = i ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          s.eventsListeners[e] || (s.eventsListeners[e] = []),
            s.eventsListeners[e][n](t);
        }),
        s
      );
    },
    once(e, t, i) {
      const s = this;
      if ("function" != typeof t) return s;
      function n(...i) {
        s.off(e, n), n.__emitterProxy && delete n.__emitterProxy, t.apply(s, i);
      }
      return (n.__emitterProxy = t), s.on(e, n, i);
    },
    onAny(e, t) {
      const i = this;
      if ("function" != typeof e) return i;
      const s = t ? "unshift" : "push";
      return (
        i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsAnyListeners) return t;
      const i = t.eventsAnyListeners.indexOf(e);
      return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
    },
    off(e, t) {
      const i = this;
      return i.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (i.eventsListeners[e] = [])
              : i.eventsListeners[e] &&
                i.eventsListeners[e].forEach((s, n) => {
                  (s === t || (s.__emitterProxy && s.__emitterProxy === t)) &&
                    i.eventsListeners[e].splice(n, 1);
                });
          }),
          i)
        : i;
    },
    emit(...e) {
      const t = this;
      if (!t.eventsListeners) return t;
      let i, s, n;
      "string" == typeof e[0] || Array.isArray(e[0])
        ? ((i = e[0]), (s = e.slice(1, e.length)), (n = t))
        : ((i = e[0].events), (s = e[0].data), (n = e[0].context || t)),
        s.unshift(n);
      return (
        (Array.isArray(i) ? i : i.split(" ")).forEach((e) => {
          t.eventsAnyListeners &&
            t.eventsAnyListeners.length &&
            t.eventsAnyListeners.forEach((t) => {
              t.apply(n, [e, ...s]);
            }),
            t.eventsListeners &&
              t.eventsListeners[e] &&
              t.eventsListeners[e].forEach((e) => {
                e.apply(n, s);
              });
        }),
        t
      );
    },
  };
  const z = {
    updateSize: function () {
      const e = this;
      let t, i;
      const s = e.$el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : s[0].clientWidth),
        (i =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : s[0].clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === i && e.isVertical()) ||
          ((t =
            t -
            parseInt(s.css("padding-left") || 0, 10) -
            parseInt(s.css("padding-right") || 0, 10)),
          (i =
            i -
            parseInt(s.css("padding-top") || 0, 10) -
            parseInt(s.css("padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(i) && (i = 0),
          Object.assign(e, {
            width: t,
            height: i,
            size: e.isHorizontal() ? t : i,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[t];
      }
      function i(e, i) {
        return parseFloat(e.getPropertyValue(t(i)) || 0);
      }
      const s = e.params,
        { $wrapperEl: n, size: r, rtlTranslate: a, wrongRTL: o } = e,
        l = e.virtual && s.virtual.enabled,
        d = l ? e.virtual.slides.length : e.slides.length,
        c = n.children(`.${e.params.slideClass}`),
        p = l ? e.virtual.slides.length : c.length;
      let u = [];
      const f = [],
        h = [];
      let m = s.slidesOffsetBefore;
      "function" == typeof m && (m = s.slidesOffsetBefore.call(e));
      let g = s.slidesOffsetAfter;
      "function" == typeof g && (g = s.slidesOffsetAfter.call(e));
      const v = e.snapGrid.length,
        w = e.slidesGrid.length;
      let b = s.spaceBetween,
        C = -m,
        T = 0,
        S = 0;
      if (void 0 === r) return;
      "string" == typeof b &&
        b.indexOf("%") >= 0 &&
        (b = (parseFloat(b.replace("%", "")) / 100) * r),
        (e.virtualSize = -b),
        a
          ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
          : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
        s.centeredSlides &&
          s.cssMode &&
          (x(e.wrapperEl, "--swiper-centered-offset-before", ""),
          x(e.wrapperEl, "--swiper-centered-offset-after", ""));
      const y = s.grid && s.grid.rows > 1 && e.grid;
      let E;
      y && e.grid.initSlides(p);
      const k =
        "auto" === s.slidesPerView &&
        s.breakpoints &&
        Object.keys(s.breakpoints).filter(
          (e) => void 0 !== s.breakpoints[e].slidesPerView
        ).length > 0;
      for (let n = 0; n < p; n += 1) {
        E = 0;
        const a = c.eq(n);
        if (
          (y && e.grid.updateSlide(n, a, p, t), "none" !== a.css("display"))
        ) {
          if ("auto" === s.slidesPerView) {
            k && (c[n].style[t("width")] = "");
            const r = getComputedStyle(a[0]),
              o = a[0].style.transform,
              l = a[0].style.webkitTransform;
            if (
              (o && (a[0].style.transform = "none"),
              l && (a[0].style.webkitTransform = "none"),
              s.roundLengths)
            )
              E = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
            else {
              const e = i(r, "width"),
                t = i(r, "padding-left"),
                s = i(r, "padding-right"),
                n = i(r, "margin-left"),
                o = i(r, "margin-right"),
                l = r.getPropertyValue("box-sizing");
              if (l && "border-box" === l) E = e + n + o;
              else {
                const { clientWidth: i, offsetWidth: r } = a[0];
                E = e + t + s + n + o + (r - i);
              }
            }
            o && (a[0].style.transform = o),
              l && (a[0].style.webkitTransform = l),
              s.roundLengths && (E = Math.floor(E));
          } else
            (E = (r - (s.slidesPerView - 1) * b) / s.slidesPerView),
              s.roundLengths && (E = Math.floor(E)),
              c[n] && (c[n].style[t("width")] = `${E}px`);
          c[n] && (c[n].swiperSlideSize = E),
            h.push(E),
            s.centeredSlides
              ? ((C = C + E / 2 + T / 2 + b),
                0 === T && 0 !== n && (C = C - r / 2 - b),
                0 === n && (C = C - r / 2 - b),
                Math.abs(C) < 0.001 && (C = 0),
                s.roundLengths && (C = Math.floor(C)),
                S % s.slidesPerGroup == 0 && u.push(C),
                f.push(C))
              : (s.roundLengths && (C = Math.floor(C)),
                (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                  e.params.slidesPerGroup ==
                  0 && u.push(C),
                f.push(C),
                (C = C + E + b)),
            (e.virtualSize += E + b),
            (T = E),
            (S += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, r) + g),
        a &&
          o &&
          ("slide" === s.effect || "coverflow" === s.effect) &&
          n.css({ width: `${e.virtualSize + s.spaceBetween}px` }),
        s.setWrapperSize &&
          n.css({ [t("width")]: `${e.virtualSize + s.spaceBetween}px` }),
        y && e.grid.updateWrapperSize(E, u, t),
        !s.centeredSlides)
      ) {
        const t = [];
        for (let i = 0; i < u.length; i += 1) {
          let n = u[i];
          s.roundLengths && (n = Math.floor(n)),
            u[i] <= e.virtualSize - r && t.push(n);
        }
        (u = t),
          Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 &&
            u.push(e.virtualSize - r);
      }
      if ((0 === u.length && (u = [0]), 0 !== s.spaceBetween)) {
        const i = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
        c.filter((e, t) => !s.cssMode || t !== c.length - 1).css({
          [i]: `${b}px`,
        });
      }
      if (s.centeredSlides && s.centeredSlidesBounds) {
        let e = 0;
        h.forEach((t) => {
          e += t + (s.spaceBetween ? s.spaceBetween : 0);
        }),
          (e -= s.spaceBetween);
        const t = e - r;
        u = u.map((e) => (e < 0 ? -m : e > t ? t + g : e));
      }
      if (s.centerInsufficientSlides) {
        let e = 0;
        if (
          (h.forEach((t) => {
            e += t + (s.spaceBetween ? s.spaceBetween : 0);
          }),
          (e -= s.spaceBetween),
          e < r)
        ) {
          const t = (r - e) / 2;
          u.forEach((e, i) => {
            u[i] = e - t;
          }),
            f.forEach((e, i) => {
              f[i] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: c,
          snapGrid: u,
          slidesGrid: f,
          slidesSizesGrid: h,
        }),
        s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
      ) {
        x(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
          x(
            e.wrapperEl,
            "--swiper-centered-offset-after",
            e.size / 2 - h[h.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          i = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + i));
      }
      p !== d && e.emit("slidesLengthChange"),
        u.length !== v &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        f.length !== w && e.emit("slidesGridLengthChange"),
        s.watchSlidesProgress && e.updateSlidesOffset();
    },
    updateAutoHeight: function (e) {
      const t = this,
        i = [],
        s = t.virtual && t.params.virtual.enabled;
      let n,
        r = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const a = (e) =>
        s
          ? t.slides.filter(
              (t) =>
                parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
            )[0]
          : t.slides.eq(e)[0];
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          t.visibleSlides.each((e) => {
            i.push(e);
          });
        else
          for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
            const e = t.activeIndex + n;
            if (e > t.slides.length && !s) break;
            i.push(a(e));
          }
      else i.push(a(t.activeIndex));
      for (n = 0; n < i.length; n += 1)
        if (void 0 !== i[n]) {
          const e = i[n].offsetHeight;
          r = e > r ? e : r;
        }
      (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides;
      for (let i = 0; i < t.length; i += 1)
        t[i].swiperSlideOffset = e.isHorizontal()
          ? t[i].offsetLeft
          : t[i].offsetTop;
    },
    updateSlidesProgress: function (e = (this && this.translate) || 0) {
      const t = this,
        i = t.params,
        { slides: s, rtlTranslate: n, snapGrid: r } = t;
      if (0 === s.length) return;
      void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
      let a = -e;
      n && (a = e),
        s.removeClass(i.slideVisibleClass),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      for (let e = 0; e < s.length; e += 1) {
        const o = s[e];
        let l = o.swiperSlideOffset;
        i.cssMode && i.centeredSlides && (l -= s[0].swiperSlideOffset);
        const d =
            (a + (i.centeredSlides ? t.minTranslate() : 0) - l) /
            (o.swiperSlideSize + i.spaceBetween),
          c =
            (a - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - l) /
            (o.swiperSlideSize + i.spaceBetween),
          p = -(a - l),
          u = p + t.slidesSizesGrid[e];
        ((p >= 0 && p < t.size - 1) ||
          (u > 1 && u <= t.size) ||
          (p <= 0 && u >= t.size)) &&
          (t.visibleSlides.push(o),
          t.visibleSlidesIndexes.push(e),
          s.eq(e).addClass(i.slideVisibleClass)),
          (o.progress = n ? -d : d),
          (o.originalProgress = n ? -c : c);
      }
      t.visibleSlides = w(t.visibleSlides);
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const i = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * i) || 0;
      }
      const i = t.params,
        s = t.maxTranslate() - t.minTranslate();
      let { progress: n, isBeginning: r, isEnd: a } = t;
      const o = r,
        l = a;
      0 === s
        ? ((n = 0), (r = !0), (a = !0))
        : ((n = (e - t.minTranslate()) / s), (r = n <= 0), (a = n >= 1)),
        Object.assign(t, { progress: n, isBeginning: r, isEnd: a }),
        (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
          t.updateSlidesProgress(e),
        r && !o && t.emit("reachBeginning toEdge"),
        a && !l && t.emit("reachEnd toEdge"),
        ((o && !r) || (l && !a)) && t.emit("fromEdge"),
        t.emit("progress", n);
    },
    updateSlidesClasses: function () {
      const e = this,
        {
          slides: t,
          params: i,
          $wrapperEl: s,
          activeIndex: n,
          realIndex: r,
        } = e,
        a = e.virtual && i.virtual.enabled;
      let o;
      t.removeClass(
        `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
      ),
        (o = a
          ? e.$wrapperEl.find(
              `.${i.slideClass}[data-swiper-slide-index="${n}"]`
            )
          : t.eq(n)),
        o.addClass(i.slideActiveClass),
        i.loop &&
          (o.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                )
                .addClass(i.slideDuplicateActiveClass)
            : s
                .children(
                  `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                )
                .addClass(i.slideDuplicateActiveClass));
      let l = o.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
      i.loop && 0 === l.length && ((l = t.eq(0)), l.addClass(i.slideNextClass));
      let d = o.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
      i.loop &&
        0 === d.length &&
        ((d = t.eq(-1)), d.addClass(i.slidePrevClass)),
        i.loop &&
          (l.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  `.${i.slideClass}:not(.${
                    i.slideDuplicateClass
                  })[data-swiper-slide-index="${l.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(i.slideDuplicateNextClass)
            : s
                .children(
                  `.${i.slideClass}.${
                    i.slideDuplicateClass
                  }[data-swiper-slide-index="${l.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(i.slideDuplicateNextClass),
          d.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  `.${i.slideClass}:not(.${
                    i.slideDuplicateClass
                  })[data-swiper-slide-index="${d.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(i.slideDuplicatePrevClass)
            : s
                .children(
                  `.${i.slideClass}.${
                    i.slideDuplicateClass
                  }[data-swiper-slide-index="${d.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(i.slideDuplicatePrevClass)),
        e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        i = t.rtlTranslate ? t.translate : -t.translate,
        {
          slidesGrid: s,
          snapGrid: n,
          params: r,
          activeIndex: a,
          realIndex: o,
          snapIndex: l,
        } = t;
      let d,
        c = e;
      if (void 0 === c) {
        for (let e = 0; e < s.length; e += 1)
          void 0 !== s[e + 1]
            ? i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2
              ? (c = e)
              : i >= s[e] && i < s[e + 1] && (c = e + 1)
            : i >= s[e] && (c = e);
        r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
      }
      if (n.indexOf(i) >= 0) d = n.indexOf(i);
      else {
        const e = Math.min(r.slidesPerGroupSkip, c);
        d = e + Math.floor((c - e) / r.slidesPerGroup);
      }
      if ((d >= n.length && (d = n.length - 1), c === a))
        return void (d !== l && ((t.snapIndex = d), t.emit("snapIndexChange")));
      const p = parseInt(
        t.slides.eq(c).attr("data-swiper-slide-index") || c,
        10
      );
      Object.assign(t, {
        snapIndex: d,
        realIndex: p,
        previousIndex: a,
        activeIndex: c,
      }),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        o !== p && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        i = t.params,
        s = w(e).closest(`.${i.slideClass}`)[0];
      let n,
        r = !1;
      if (s)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === s) {
            (r = !0), (n = e);
            break;
          }
      if (!s || !r)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = s),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              w(s).attr("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = n),
        i.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  const _ = {
    getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
      const { params: t, rtlTranslate: i, translate: s, $wrapperEl: n } = this;
      if (t.virtualTranslate) return i ? -s : s;
      if (t.cssMode) return s;
      let r = T(n[0], e);
      return i && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      const i = this,
        {
          rtlTranslate: s,
          params: n,
          $wrapperEl: r,
          wrapperEl: a,
          progress: o,
        } = i;
      let l,
        d = 0,
        c = 0;
      i.isHorizontal() ? (d = s ? -e : e) : (c = e),
        n.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
        n.cssMode
          ? (a[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal()
              ? -d
              : -c)
          : n.virtualTranslate ||
            r.transform(`translate3d(${d}px, ${c}px, 0px)`),
        (i.previousTranslate = i.translate),
        (i.translate = i.isHorizontal() ? d : c);
      const p = i.maxTranslate() - i.minTranslate();
      (l = 0 === p ? 0 : (e - i.minTranslate()) / p),
        l !== o && i.updateProgress(e),
        i.emit("setTranslate", i.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e = 0, t = this.params.speed, i = !0, s = !0, n) {
      const r = this,
        { params: a, wrapperEl: o } = r;
      if (r.animating && a.preventInteractionOnTransition) return !1;
      const l = r.minTranslate(),
        d = r.maxTranslate();
      let c;
      if (
        ((c = s && e > l ? l : s && e < d ? d : e),
        r.updateProgress(c),
        a.cssMode)
      ) {
        const e = r.isHorizontal();
        if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
        else {
          if (!r.support.smoothScroll)
            return (
              E({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }), !0
            );
          o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (r.setTransition(0),
            r.setTranslate(c),
            i &&
              (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd")))
          : (r.setTransition(t),
            r.setTranslate(c),
            i &&
              (r.emit("beforeTransitionStart", t, n),
              r.emit("transitionStart")),
            r.animating ||
              ((r.animating = !0),
              r.onTranslateToWrapperTransitionEnd ||
                (r.onTranslateToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    (r.onTranslateToWrapperTransitionEnd = null),
                    delete r.onTranslateToWrapperTransitionEnd,
                    i && r.emit("transitionEnd"));
                }),
              r.$wrapperEl[0].addEventListener(
                "transitionend",
                r.onTranslateToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                r.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function B({ swiper: e, runCallbacks: t, direction: i, step: s }) {
    const { activeIndex: n, previousIndex: r } = e;
    let a = i;
    if (
      (a || (a = n > r ? "next" : n < r ? "prev" : "reset"),
      e.emit(`transition${s}`),
      t && n !== r)
    ) {
      if ("reset" === a) return void e.emit(`slideResetTransition${s}`);
      e.emit(`slideChangeTransition${s}`),
        "next" === a
          ? e.emit(`slideNextTransition${s}`)
          : e.emit(`slidePrevTransition${s}`);
    }
  }
  const D = {
    slideTo: function (e = 0, t = this.params.speed, i = !0, s, n) {
      if ("number" != typeof e && "string" != typeof e)
        throw new Error(
          `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
        );
      if ("string" == typeof e) {
        const t = parseInt(e, 10);
        if (!isFinite(t))
          throw new Error(
            `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
          );
        e = t;
      }
      const r = this;
      let a = e;
      a < 0 && (a = 0);
      const {
        params: o,
        snapGrid: l,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: p,
        rtlTranslate: u,
        wrapperEl: f,
        enabled: h,
      } = r;
      if ((r.animating && o.preventInteractionOnTransition) || (!h && !s && !n))
        return !1;
      const m = Math.min(r.params.slidesPerGroupSkip, a);
      let g = m + Math.floor((a - m) / r.params.slidesPerGroup);
      g >= l.length && (g = l.length - 1),
        (p || o.initialSlide || 0) === (c || 0) &&
          i &&
          r.emit("beforeSlideChangeStart");
      const v = -l[g];
      if ((r.updateProgress(v), o.normalizeSlideIndex))
        for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * v),
            i = Math.floor(100 * d[e]),
            s = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1]
            ? t >= i && t < s - (s - i) / 2
              ? (a = e)
              : t >= i && t < s && (a = e + 1)
            : t >= i && (a = e);
        }
      if (r.initialized && a !== p) {
        if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
          return !1;
        if (
          !r.allowSlidePrev &&
          v > r.translate &&
          v > r.maxTranslate() &&
          (p || 0) !== a
        )
          return !1;
      }
      let w;
      if (
        ((w = a > p ? "next" : a < p ? "prev" : "reset"),
        (u && -v === r.translate) || (!u && v === r.translate))
      )
        return (
          r.updateActiveIndex(a),
          o.autoHeight && r.updateAutoHeight(),
          r.updateSlidesClasses(),
          "slide" !== o.effect && r.setTranslate(v),
          "reset" !== w && (r.transitionStart(i, w), r.transitionEnd(i, w)),
          !1
        );
      if (o.cssMode) {
        const e = r.isHorizontal(),
          i = u ? v : -v;
        if (0 === t) {
          const t = r.virtual && r.params.virtual.enabled;
          t &&
            ((r.wrapperEl.style.scrollSnapType = "none"),
            (r._immediateVirtual = !0)),
            (f[e ? "scrollLeft" : "scrollTop"] = i),
            t &&
              requestAnimationFrame(() => {
                (r.wrapperEl.style.scrollSnapType = ""),
                  (r._swiperImmediateVirtual = !1);
              });
        } else {
          if (!r.support.smoothScroll)
            return (
              E({ swiper: r, targetPosition: i, side: e ? "left" : "top" }), !0
            );
          f.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
        }
        return !0;
      }
      return (
        r.setTransition(t),
        r.setTranslate(v),
        r.updateActiveIndex(a),
        r.updateSlidesClasses(),
        r.emit("beforeTransitionStart", t, s),
        r.transitionStart(i, w),
        0 === t
          ? r.transitionEnd(i, w)
          : r.animating ||
            ((r.animating = !0),
            r.onSlideToWrapperTransitionEnd ||
              (r.onSlideToWrapperTransitionEnd = function (e) {
                r &&
                  !r.destroyed &&
                  e.target === this &&
                  (r.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  (r.onSlideToWrapperTransitionEnd = null),
                  delete r.onSlideToWrapperTransitionEnd,
                  r.transitionEnd(i, w));
              }),
            r.$wrapperEl[0].addEventListener(
              "transitionend",
              r.onSlideToWrapperTransitionEnd
            ),
            r.$wrapperEl[0].addEventListener(
              "webkitTransitionEnd",
              r.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e = 0, t = this.params.speed, i = !0, s) {
      const n = this;
      let r = e;
      return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, i, s);
    },
    slideNext: function (e = this.params.speed, t = !0, i) {
      const s = this,
        { animating: n, enabled: r, params: a } = s;
      if (!r) return s;
      let o = a.slidesPerGroup;
      "auto" === a.slidesPerView &&
        1 === a.slidesPerGroup &&
        a.slidesPerGroupAuto &&
        (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
      const l = s.activeIndex < a.slidesPerGroupSkip ? 1 : o;
      if (a.loop) {
        if (n && a.loopPreventsSlide) return !1;
        s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
      }
      return a.rewind && s.isEnd
        ? s.slideTo(0, e, t, i)
        : s.slideTo(s.activeIndex + l, e, t, i);
    },
    slidePrev: function (e = this.params.speed, t = !0, i) {
      const s = this,
        {
          params: n,
          animating: r,
          snapGrid: a,
          slidesGrid: o,
          rtlTranslate: l,
          enabled: d,
        } = s;
      if (!d) return s;
      if (n.loop) {
        if (r && n.loopPreventsSlide) return !1;
        s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
      }
      function c(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const p = c(l ? s.translate : -s.translate),
        u = a.map((e) => c(e));
      let f = a[u.indexOf(p) - 1];
      if (void 0 === f && n.cssMode) {
        let e;
        a.forEach((t, i) => {
          p >= t && (e = i);
        }),
          void 0 !== e && (f = a[e > 0 ? e - 1 : e]);
      }
      let h = 0;
      return (
        void 0 !== f &&
          ((h = o.indexOf(f)),
          h < 0 && (h = s.activeIndex - 1),
          "auto" === n.slidesPerView &&
            1 === n.slidesPerGroup &&
            n.slidesPerGroupAuto &&
            ((h = h - s.slidesPerViewDynamic("previous", !0) + 1),
            (h = Math.max(h, 0)))),
        n.rewind && s.isBeginning
          ? s.slideTo(s.slides.length - 1, e, t, i)
          : s.slideTo(h, e, t, i)
      );
    },
    slideReset: function (e = this.params.speed, t = !0, i) {
      return this.slideTo(this.activeIndex, e, t, i);
    },
    slideToClosest: function (e = this.params.speed, t = !0, i, s = 0.5) {
      const n = this;
      let r = n.activeIndex;
      const a = Math.min(n.params.slidesPerGroupSkip, r),
        o = a + Math.floor((r - a) / n.params.slidesPerGroup),
        l = n.rtlTranslate ? n.translate : -n.translate;
      if (l >= n.snapGrid[o]) {
        const e = n.snapGrid[o];
        l - e > (n.snapGrid[o + 1] - e) * s && (r += n.params.slidesPerGroup);
      } else {
        const e = n.snapGrid[o - 1];
        l - e <= (n.snapGrid[o] - e) * s && (r -= n.params.slidesPerGroup);
      }
      return (
        (r = Math.max(r, 0)),
        (r = Math.min(r, n.slidesGrid.length - 1)),
        n.slideTo(r, e, t, i)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, $wrapperEl: i } = e,
        s =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let n,
        r = e.clickedIndex;
      if (t.loop) {
        if (e.animating) return;
        (n = parseInt(w(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
          t.centeredSlides
            ? r < e.loopedSlides - s / 2 ||
              r > e.slides.length - e.loopedSlides + s / 2
              ? (e.loopFix(),
                (r = i
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                b(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r)
            : r > e.slides.length - s
            ? (e.loopFix(),
              (r = i
                .children(
                  `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              b(() => {
                e.slideTo(r);
              }))
            : e.slideTo(r);
      } else e.slideTo(r);
    },
  };
  const G = {
    loopCreate: function () {
      const e = this,
        t = l(),
        { params: i, $wrapperEl: s } = e,
        n = s.children().length > 0 ? w(s.children()[0].parentNode) : s;
      n.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
      let r = n.children(`.${i.slideClass}`);
      if (i.loopFillGroupWithBlank) {
        const e = i.slidesPerGroup - (r.length % i.slidesPerGroup);
        if (e !== i.slidesPerGroup) {
          for (let s = 0; s < e; s += 1) {
            const e = w(t.createElement("div")).addClass(
              `${i.slideClass} ${i.slideBlankClass}`
            );
            n.append(e);
          }
          r = n.children(`.${i.slideClass}`);
        }
      }
      "auto" !== i.slidesPerView ||
        i.loopedSlides ||
        (i.loopedSlides = r.length),
        (e.loopedSlides = Math.ceil(
          parseFloat(i.loopedSlides || i.slidesPerView, 10)
        )),
        (e.loopedSlides += i.loopAdditionalSlides),
        e.loopedSlides > r.length && (e.loopedSlides = r.length);
      const a = [],
        o = [];
      r.each((t, i) => {
        const s = w(t);
        i < e.loopedSlides && o.push(t),
          i < r.length && i >= r.length - e.loopedSlides && a.push(t),
          s.attr("data-swiper-slide-index", i);
      });
      for (let e = 0; e < o.length; e += 1)
        n.append(w(o[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
      for (let e = a.length - 1; e >= 0; e -= 1)
        n.prepend(w(a[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
    },
    loopFix: function () {
      const e = this;
      e.emit("beforeLoopFix");
      const {
        activeIndex: t,
        slides: i,
        loopedSlides: s,
        allowSlidePrev: n,
        allowSlideNext: r,
        snapGrid: a,
        rtlTranslate: o,
      } = e;
      let l;
      (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
      const d = -a[t] - e.getTranslate();
      if (t < s) {
        (l = i.length - 3 * s + t), (l += s);
        e.slideTo(l, 0, !1, !0) &&
          0 !== d &&
          e.setTranslate((o ? -e.translate : e.translate) - d);
      } else if (t >= i.length - s) {
        (l = -i.length + t + s), (l += s);
        e.slideTo(l, 0, !1, !0) &&
          0 !== d &&
          e.setTranslate((o ? -e.translate : e.translate) - d);
      }
      (e.allowSlidePrev = n), (e.allowSlideNext = r), e.emit("loopFix");
    },
    loopDestroy: function () {
      const { $wrapperEl: e, params: t, slides: i } = this;
      e
        .children(
          `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
        )
        .remove(),
        i.removeAttr("data-swiper-slide-index");
    },
  };
  function N(e) {
    const t = this,
      i = l(),
      s = c(),
      n = t.touchEventsData,
      { params: r, touches: a, enabled: o } = t;
    if (!o) return;
    if (t.animating && r.preventInteractionOnTransition) return;
    !t.animating && r.cssMode && r.loop && t.loopFix();
    let d = e;
    d.originalEvent && (d = d.originalEvent);
    let p = w(d.target);
    if ("wrapper" === r.touchEventsTarget && !p.closest(t.wrapperEl).length)
      return;
    if (
      ((n.isTouchEvent = "touchstart" === d.type),
      !n.isTouchEvent && "which" in d && 3 === d.which)
    )
      return;
    if (!n.isTouchEvent && "button" in d && d.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    !!r.noSwipingClass &&
      "" !== r.noSwipingClass &&
      d.target &&
      d.target.shadowRoot &&
      e.path &&
      e.path[0] &&
      (p = w(e.path[0]));
    const u = r.noSwipingSelector
        ? r.noSwipingSelector
        : `.${r.noSwipingClass}`,
      f = !(!d.target || !d.target.shadowRoot);
    if (
      r.noSwiping &&
      (f
        ? (function (e, t = this) {
            return (function t(i) {
              return i && i !== l() && i !== c()
                ? (i.assignedSlot && (i = i.assignedSlot),
                  i.closest(e) || t(i.getRootNode().host))
                : null;
            })(t);
          })(u, d.target)
        : p.closest(u)[0])
    )
      return void (t.allowClick = !0);
    if (r.swipeHandler && !p.closest(r.swipeHandler)[0]) return;
    (a.currentX = "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX),
      (a.currentY =
        "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY);
    const h = a.currentX,
      m = a.currentY,
      g = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
      v = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
    if (g && (h <= v || h >= s.innerWidth - v)) {
      if ("prevent" !== g) return;
      e.preventDefault();
    }
    if (
      (Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (a.startX = h),
      (a.startY = m),
      (n.touchStartTime = C()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      r.threshold > 0 && (n.allowThresholdMove = !1),
      "touchstart" !== d.type)
    ) {
      let e = !0;
      p.is(n.focusableElements) && (e = !1),
        i.activeElement &&
          w(i.activeElement).is(n.focusableElements) &&
          i.activeElement !== p[0] &&
          i.activeElement.blur();
      const s = e && t.allowTouchMove && r.touchStartPreventDefault;
      (!r.touchStartForcePreventDefault && !s) ||
        p[0].isContentEditable ||
        d.preventDefault();
    }
    t.emit("touchStart", d);
  }
  function W(e) {
    const t = l(),
      i = this,
      s = i.touchEventsData,
      { params: n, touches: r, rtlTranslate: a, enabled: o } = i;
    if (!o) return;
    let d = e;
    if ((d.originalEvent && (d = d.originalEvent), !s.isTouched))
      return void (
        s.startMoving &&
        s.isScrolling &&
        i.emit("touchMoveOpposite", d)
      );
    if (s.isTouchEvent && "touchmove" !== d.type) return;
    const c =
        "touchmove" === d.type &&
        d.targetTouches &&
        (d.targetTouches[0] || d.changedTouches[0]),
      p = "touchmove" === d.type ? c.pageX : d.pageX,
      u = "touchmove" === d.type ? c.pageY : d.pageY;
    if (d.preventedByNestedSwiper) return (r.startX = p), void (r.startY = u);
    if (!i.allowTouchMove)
      return (
        (i.allowClick = !1),
        void (
          s.isTouched &&
          (Object.assign(r, { startX: p, startY: u, currentX: p, currentY: u }),
          (s.touchStartTime = C()))
        )
      );
    if (s.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
      if (i.isVertical()) {
        if (
          (u < r.startY && i.translate <= i.maxTranslate()) ||
          (u > r.startY && i.translate >= i.minTranslate())
        )
          return (s.isTouched = !1), void (s.isMoved = !1);
      } else if (
        (p < r.startX && i.translate <= i.maxTranslate()) ||
        (p > r.startX && i.translate >= i.minTranslate())
      )
        return;
    if (
      s.isTouchEvent &&
      t.activeElement &&
      d.target === t.activeElement &&
      w(d.target).is(s.focusableElements)
    )
      return (s.isMoved = !0), void (i.allowClick = !1);
    if (
      (s.allowTouchCallbacks && i.emit("touchMove", d),
      d.targetTouches && d.targetTouches.length > 1)
    )
      return;
    (r.currentX = p), (r.currentY = u);
    const f = r.currentX - r.startX,
      h = r.currentY - r.startY;
    if (i.params.threshold && Math.sqrt(f ** 2 + h ** 2) < i.params.threshold)
      return;
    if (void 0 === s.isScrolling) {
      let e;
      (i.isHorizontal() && r.currentY === r.startY) ||
      (i.isVertical() && r.currentX === r.startX)
        ? (s.isScrolling = !1)
        : f * f + h * h >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(h), Math.abs(f))) / Math.PI),
          (s.isScrolling = i.isHorizontal()
            ? e > n.touchAngle
            : 90 - e > n.touchAngle));
    }
    if (
      (s.isScrolling && i.emit("touchMoveOpposite", d),
      void 0 === s.startMoving &&
        ((r.currentX === r.startX && r.currentY === r.startY) ||
          (s.startMoving = !0)),
      s.isScrolling)
    )
      return void (s.isTouched = !1);
    if (!s.startMoving) return;
    (i.allowClick = !1),
      !n.cssMode && d.cancelable && d.preventDefault(),
      n.touchMoveStopPropagation && !n.nested && d.stopPropagation(),
      s.isMoved ||
        (n.loop && !n.cssMode && i.loopFix(),
        (s.startTranslate = i.getTranslate()),
        i.setTransition(0),
        i.animating &&
          i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        (s.allowMomentumBounce = !1),
        !n.grabCursor ||
          (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
          i.setGrabCursor(!0),
        i.emit("sliderFirstMove", d)),
      i.emit("sliderMove", d),
      (s.isMoved = !0);
    let m = i.isHorizontal() ? f : h;
    (r.diff = m),
      (m *= n.touchRatio),
      a && (m = -m),
      (i.swipeDirection = m > 0 ? "prev" : "next"),
      (s.currentTranslate = m + s.startTranslate);
    let g = !0,
      v = n.resistanceRatio;
    if (
      (n.touchReleaseOnEdges && (v = 0),
      m > 0 && s.currentTranslate > i.minTranslate()
        ? ((g = !1),
          n.resistance &&
            (s.currentTranslate =
              i.minTranslate() -
              1 +
              (-i.minTranslate() + s.startTranslate + m) ** v))
        : m < 0 &&
          s.currentTranslate < i.maxTranslate() &&
          ((g = !1),
          n.resistance &&
            (s.currentTranslate =
              i.maxTranslate() +
              1 -
              (i.maxTranslate() - s.startTranslate - m) ** v)),
      g && (d.preventedByNestedSwiper = !0),
      !i.allowSlideNext &&
        "next" === i.swipeDirection &&
        s.currentTranslate < s.startTranslate &&
        (s.currentTranslate = s.startTranslate),
      !i.allowSlidePrev &&
        "prev" === i.swipeDirection &&
        s.currentTranslate > s.startTranslate &&
        (s.currentTranslate = s.startTranslate),
      i.allowSlidePrev ||
        i.allowSlideNext ||
        (s.currentTranslate = s.startTranslate),
      n.threshold > 0)
    ) {
      if (!(Math.abs(m) > n.threshold || s.allowThresholdMove))
        return void (s.currentTranslate = s.startTranslate);
      if (!s.allowThresholdMove)
        return (
          (s.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (s.currentTranslate = s.startTranslate),
          void (r.diff = i.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY)
        );
    }
    n.followFinger &&
      !n.cssMode &&
      (((n.freeMode && n.freeMode.enabled && i.freeMode) ||
        n.watchSlidesProgress) &&
        (i.updateActiveIndex(), i.updateSlidesClasses()),
      i.params.freeMode &&
        n.freeMode.enabled &&
        i.freeMode &&
        i.freeMode.onTouchMove(),
      i.updateProgress(s.currentTranslate),
      i.setTranslate(s.currentTranslate));
  }
  function H(e) {
    const t = this,
      i = t.touchEventsData,
      { params: s, touches: n, rtlTranslate: r, slidesGrid: a, enabled: o } = t;
    if (!o) return;
    let l = e;
    if (
      (l.originalEvent && (l = l.originalEvent),
      i.allowTouchCallbacks && t.emit("touchEnd", l),
      (i.allowTouchCallbacks = !1),
      !i.isTouched)
    )
      return (
        i.isMoved && s.grabCursor && t.setGrabCursor(!1),
        (i.isMoved = !1),
        void (i.startMoving = !1)
      );
    s.grabCursor &&
      i.isMoved &&
      i.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const d = C(),
      c = d - i.touchStartTime;
    if (t.allowClick) {
      const e = l.path || (l.composedPath && l.composedPath());
      t.updateClickedSlide((e && e[0]) || l.target),
        t.emit("tap click", l),
        c < 300 &&
          d - i.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", l);
    }
    if (
      ((i.lastClickTime = C()),
      b(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !i.isTouched ||
        !i.isMoved ||
        !t.swipeDirection ||
        0 === n.diff ||
        i.currentTranslate === i.startTranslate)
    )
      return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
    let p;
    if (
      ((i.isTouched = !1),
      (i.isMoved = !1),
      (i.startMoving = !1),
      (p = s.followFinger
        ? r
          ? t.translate
          : -t.translate
        : -i.currentTranslate),
      s.cssMode)
    )
      return;
    if (t.params.freeMode && s.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: p });
    let u = 0,
      f = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < a.length;
      e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
    ) {
      const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
      void 0 !== a[e + t]
        ? p >= a[e] && p < a[e + t] && ((u = e), (f = a[e + t] - a[e]))
        : p >= a[e] && ((u = e), (f = a[a.length - 1] - a[a.length - 2]));
    }
    const h = (p - a[u]) / f,
      m = u < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    if (c > s.longSwipesMs) {
      if (!s.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (h >= s.longSwipesRatio ? t.slideTo(u + m) : t.slideTo(u)),
        "prev" === t.swipeDirection &&
          (h > 1 - s.longSwipesRatio ? t.slideTo(u + m) : t.slideTo(u));
    } else {
      if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
        ? l.target === t.navigation.nextEl
          ? t.slideTo(u + m)
          : t.slideTo(u)
        : ("next" === t.swipeDirection && t.slideTo(u + m),
          "prev" === t.swipeDirection && t.slideTo(u));
    }
  }
  function j() {
    const e = this,
      { params: t, el: i } = e;
    if (i && 0 === i.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = e;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses(),
      ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
      e.isEnd &&
      !e.isBeginning &&
      !e.params.centeredSlides
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = n),
      (e.allowSlideNext = s),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function F(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function R() {
    const e = this,
      { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
    if (!s) return;
    let n;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      -0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
      n !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  let V = !1;
  function q() {}
  const Y = (e, t) => {
    const i = l(),
      {
        params: s,
        touchEvents: n,
        el: r,
        wrapperEl: a,
        device: o,
        support: d,
      } = e,
      c = !!s.nested,
      p = "on" === t ? "addEventListener" : "removeEventListener",
      u = t;
    if (d.touch) {
      const t = !(
        "touchstart" !== n.start ||
        !d.passiveListener ||
        !s.passiveListeners
      ) && { passive: !0, capture: !1 };
      r[p](n.start, e.onTouchStart, t),
        r[p](
          n.move,
          e.onTouchMove,
          d.passiveListener ? { passive: !1, capture: c } : c
        ),
        r[p](n.end, e.onTouchEnd, t),
        n.cancel && r[p](n.cancel, e.onTouchEnd, t);
    } else
      r[p](n.start, e.onTouchStart, !1),
        i[p](n.move, e.onTouchMove, c),
        i[p](n.end, e.onTouchEnd, !1);
    (s.preventClicks || s.preventClicksPropagation) &&
      r[p]("click", e.onClick, !0),
      s.cssMode && a[p]("scroll", e.onScroll),
      s.updateOnWindowResize
        ? e[u](
            o.ios || o.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            j,
            !0
          )
        : e[u]("observerUpdate", j, !0);
  };
  const X = {
      attachEvents: function () {
        const e = this,
          t = l(),
          { params: i, support: s } = e;
        (e.onTouchStart = N.bind(e)),
          (e.onTouchMove = W.bind(e)),
          (e.onTouchEnd = H.bind(e)),
          i.cssMode && (e.onScroll = R.bind(e)),
          (e.onClick = F.bind(e)),
          s.touch && !V && (t.addEventListener("touchstart", q), (V = !0)),
          Y(e, "on");
      },
      detachEvents: function () {
        Y(this, "off");
      },
    },
    K = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  const U = {
    setBreakpoint: function () {
      const e = this,
        {
          activeIndex: t,
          initialized: i,
          loopedSlides: s = 0,
          params: n,
          $el: r,
        } = e,
        a = n.breakpoints;
      if (!a || (a && 0 === Object.keys(a).length)) return;
      const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
      if (!o || e.currentBreakpoint === o) return;
      const l = (o in a ? a[o] : void 0) || e.originalParams,
        d = K(e, n),
        c = K(e, l),
        p = n.enabled;
      d && !c
        ? (r.removeClass(
            `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
          ),
          e.emitContainerClasses())
        : !d &&
          c &&
          (r.addClass(`${n.containerModifierClass}grid`),
          ((l.grid.fill && "column" === l.grid.fill) ||
            (!l.grid.fill && "column" === n.grid.fill)) &&
            r.addClass(`${n.containerModifierClass}grid-column`),
          e.emitContainerClasses());
      const u = l.direction && l.direction !== n.direction,
        f = n.loop && (l.slidesPerView !== n.slidesPerView || u);
      u && i && e.changeDirection(), y(e.params, l);
      const h = e.params.enabled;
      Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev,
      }),
        p && !h ? e.disable() : !p && h && e.enable(),
        (e.currentBreakpoint = o),
        e.emit("_beforeBreakpoint", l),
        f &&
          i &&
          (e.loopDestroy(),
          e.loopCreate(),
          e.updateSlides(),
          e.slideTo(t - s + e.loopedSlides, 0, !1)),
        e.emit("breakpoint", l);
    },
    getBreakpoint: function (e, t = "window", i) {
      if (!e || ("container" === t && !i)) return;
      let s = !1;
      const n = c(),
        r = "window" === t ? n.innerHeight : i.clientHeight,
        a = Object.keys(e).map((e) => {
          if ("string" == typeof e && 0 === e.indexOf("@")) {
            const t = parseFloat(e.substr(1));
            return { value: r * t, point: e };
          }
          return { value: e, point: e };
        });
      a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
      for (let e = 0; e < a.length; e += 1) {
        const { point: r, value: o } = a[e];
        "window" === t
          ? n.matchMedia(`(min-width: ${o}px)`).matches && (s = r)
          : o <= i.clientWidth && (s = r);
      }
      return s || "max";
    },
  };
  const Z = {
    addClasses: function () {
      const e = this,
        { classNames: t, params: i, rtl: s, $el: n, device: r, support: a } = e,
        o = (function (e, t) {
          const i = [];
          return (
            e.forEach((e) => {
              "object" == typeof e
                ? Object.keys(e).forEach((s) => {
                    e[s] && i.push(t + s);
                  })
                : "string" == typeof e && i.push(t + e);
            }),
            i
          );
        })(
          [
            "initialized",
            i.direction,
            { "pointer-events": !a.touch },
            { "free-mode": e.params.freeMode && i.freeMode.enabled },
            { autoheight: i.autoHeight },
            { rtl: s },
            { grid: i.grid && i.grid.rows > 1 },
            {
              "grid-column":
                i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
            },
            { android: r.android },
            { ios: r.ios },
            { "css-mode": i.cssMode },
            { centered: i.cssMode && i.centeredSlides },
          ],
          i.containerModifierClass
        );
      t.push(...o), n.addClass([...t].join(" ")), e.emitContainerClasses();
    },
    removeClasses: function () {
      const { $el: e, classNames: t } = this;
      e.removeClass(t.join(" ")), this.emitContainerClasses();
    },
  };
  const Q = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function J(e, t) {
    return function (i = {}) {
      const s = Object.keys(i)[0],
        n = i[s];
      "object" == typeof n && null !== n
        ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
            !0 === e[s] &&
            (e[s] = { auto: !0 }),
          s in e && "enabled" in n
            ? (!0 === e[s] && (e[s] = { enabled: !0 }),
              "object" != typeof e[s] ||
                "enabled" in e[s] ||
                (e[s].enabled = !0),
              e[s] || (e[s] = { enabled: !1 }),
              y(t, i))
            : y(t, i))
        : y(t, i);
    };
  }
  const ee = {
      eventsEmitter: A,
      update: z,
      translate: _,
      transition: {
        setTransition: function (e, t) {
          const i = this;
          i.params.cssMode || i.$wrapperEl.transition(e),
            i.emit("setTransition", e, t);
        },
        transitionStart: function (e = !0, t) {
          const i = this,
            { params: s } = i;
          s.cssMode ||
            (s.autoHeight && i.updateAutoHeight(),
            B({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e = !0, t) {
          const i = this,
            { params: s } = i;
          (i.animating = !1),
            s.cssMode ||
              (i.setTransition(0),
              B({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: D,
      loop: G,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            t.support.touch ||
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const i =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          (i.style.cursor = "move"),
            (i.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
            (i.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
            (i.style.cursor = e ? "grabbing" : "grab");
        },
        unsetGrabCursor: function () {
          const e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = "");
        },
      },
      events: X,
      breakpoints: U,
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: i } = e,
            { slidesOffsetBefore: s } = i;
          if (s) {
            const t = e.slides.length - 1,
              i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
            e.isLocked = e.size > i;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: Z,
      images: {
        loadImage: function (e, t, i, s, n, r) {
          const a = c();
          let o;
          function l() {
            r && r();
          }
          w(e).parent("picture")[0] || (e.complete && n)
            ? l()
            : t
            ? ((o = new a.Image()),
              (o.onload = l),
              (o.onerror = l),
              s && (o.sizes = s),
              i && (o.srcset = i),
              t && (o.src = t))
            : l();
        },
        preloadImages: function () {
          const e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (let i = 0; i < e.imagesToLoad.length; i += 1) {
            const s = e.imagesToLoad[i];
            e.loadImage(
              s,
              s.currentSrc || s.getAttribute("src"),
              s.srcset || s.getAttribute("srcset"),
              s.sizes || s.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    te = {};
  class ie {
    constructor(...e) {
      let t, i;
      if (
        (1 === e.length &&
        e[0].constructor &&
        "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
          ? (i = e[0])
          : ([t, i] = e),
        i || (i = {}),
        (i = y({}, i)),
        t && !i.el && (i.el = t),
        i.el && w(i.el).length > 1)
      ) {
        const e = [];
        return (
          w(i.el).each((t) => {
            const s = y({}, i, { el: t });
            e.push(new ie(s));
          }),
          e
        );
      }
      const s = this;
      (s.__swiper__ = !0),
        (s.support = L()),
        (s.device = I({ userAgent: i.userAgent })),
        (s.browser = O()),
        (s.eventsListeners = {}),
        (s.eventsAnyListeners = []),
        (s.modules = [...s.__modules__]),
        i.modules && Array.isArray(i.modules) && s.modules.push(...i.modules);
      const n = {};
      s.modules.forEach((e) => {
        e({
          swiper: s,
          extendParams: J(i, n),
          on: s.on.bind(s),
          once: s.once.bind(s),
          off: s.off.bind(s),
          emit: s.emit.bind(s),
        });
      });
      const r = y({}, Q, n);
      return (
        (s.params = y({}, r, te, i)),
        (s.originalParams = y({}, s.params)),
        (s.passedParams = y({}, i)),
        s.params &&
          s.params.on &&
          Object.keys(s.params.on).forEach((e) => {
            s.on(e, s.params.on[e]);
          }),
        s.params && s.params.onAny && s.onAny(s.params.onAny),
        (s.$ = w),
        Object.assign(s, {
          enabled: s.params.enabled,
          el: t,
          classNames: [],
          slides: w(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === s.params.direction,
          isVertical: () => "vertical" === s.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: s.params.allowSlideNext,
          allowSlidePrev: s.params.allowSlidePrev,
          touchEvents: (function () {
            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
              t = ["pointerdown", "pointermove", "pointerup"];
            return (
              (s.touchEventsTouch = {
                start: e[0],
                move: e[1],
                end: e[2],
                cancel: e[3],
              }),
              (s.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
              s.support.touch || !s.params.simulateTouch
                ? s.touchEventsTouch
                : s.touchEventsDesktop
            );
          })(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: s.params.focusableElements,
            lastClickTime: C(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: s.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        s.emit("_swiper"),
        s.params.init && s.init(),
        s
      );
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const i = this;
      e = Math.min(Math.max(e, 0), 1);
      const s = i.minTranslate(),
        n = (i.maxTranslate() - s) * e + s;
      i.translateTo(n, void 0 === t ? 0 : t),
        i.updateActiveIndex(),
        i.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return e.className
        .split(" ")
        .filter(
          (e) =>
            0 === e.indexOf("swiper-slide") ||
            0 === e.indexOf(t.params.slideClass)
        )
        .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.each((i) => {
        const s = e.getSlideClasses(i);
        t.push({ slideEl: i, classNames: s }), e.emit("_slideClass", i, s);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e = "current", t = !1) {
      const {
        params: i,
        slides: s,
        slidesGrid: n,
        slidesSizesGrid: r,
        size: a,
        activeIndex: o,
      } = this;
      let l = 1;
      if (i.centeredSlides) {
        let e,
          t = s[o].swiperSlideSize;
        for (let i = o + 1; i < s.length; i += 1)
          s[i] &&
            !e &&
            ((t += s[i].swiperSlideSize), (l += 1), t > a && (e = !0));
        for (let i = o - 1; i >= 0; i -= 1)
          s[i] &&
            !e &&
            ((t += s[i].swiperSlideSize), (l += 1), t > a && (e = !0));
      } else if ("current" === e)
        for (let e = o + 1; e < s.length; e += 1) {
          (t ? n[e] + r[e] - n[o] < a : n[e] - n[o] < a) && (l += 1);
        }
      else
        for (let e = o - 1; e >= 0; e -= 1) {
          n[o] - n[e] < a && (l += 1);
        }
      return l;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: i } = e;
      function s() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let n;
      i.breakpoints && e.setBreakpoint(),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled
          ? (s(), e.params.autoHeight && e.updateAutoHeight())
          : ((n =
              ("auto" === e.params.slidesPerView ||
                e.params.slidesPerView > 1) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)),
            n || s()),
        i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t = !0) {
      const i = this,
        s = i.params.direction;
      return (
        e || (e = "horizontal" === s ? "vertical" : "horizontal"),
        e === s ||
          ("horizontal" !== e && "vertical" !== e) ||
          (i.$el
            .removeClass(`${i.params.containerModifierClass}${s}`)
            .addClass(`${i.params.containerModifierClass}${e}`),
          i.emitContainerClasses(),
          (i.params.direction = e),
          i.slides.each((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          i.emit("changeDirection"),
          t && i.update()),
        i
      );
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      const i = w(e || t.params.el);
      if (!(e = i[0])) return !1;
      e.swiper = t;
      const s = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let n = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const t = w(e.shadowRoot.querySelector(s()));
          return (t.children = (e) => i.children(e)), t;
        }
        return i.children(s());
      })();
      if (0 === n.length && t.params.createElements) {
        const e = l().createElement("div");
        (n = w(e)),
          (e.className = t.params.wrapperClass),
          i.append(e),
          i.children(`.${t.params.slideClass}`).each((e) => {
            n.append(e);
          });
      }
      return (
        Object.assign(t, {
          $el: i,
          el: e,
          $wrapperEl: n,
          wrapperEl: n[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
          wrongRTL: "-webkit-box" === n.css("display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.params.loop && t.loopCreate(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.preloadImages && t.preloadImages(),
          t.params.loop
            ? t.slideTo(
                t.params.initialSlide + t.loopedSlides,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.attachEvents(),
          (t.initialized = !0),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e = !0, t = !0) {
      const i = this,
        { params: s, $el: n, $wrapperEl: r, slides: a } = i;
      return (
        void 0 === i.params ||
          i.destroyed ||
          (i.emit("beforeDestroy"),
          (i.initialized = !1),
          i.detachEvents(),
          s.loop && i.loopDestroy(),
          t &&
            (i.removeClasses(),
            n.removeAttr("style"),
            r.removeAttr("style"),
            a &&
              a.length &&
              a
                .removeClass(
                  [
                    s.slideVisibleClass,
                    s.slideActiveClass,
                    s.slideNextClass,
                    s.slidePrevClass,
                  ].join(" ")
                )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index")),
          i.emit("destroy"),
          Object.keys(i.eventsListeners).forEach((e) => {
            i.off(e);
          }),
          !1 !== e &&
            ((i.$el[0].swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      y(te, e);
    }
    static get extendedDefaults() {
      return te;
    }
    static get defaults() {
      return Q;
    }
    static installModule(e) {
      ie.prototype.__modules__ || (ie.prototype.__modules__ = []);
      const t = ie.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => ie.installModule(e)), ie)
        : (ie.installModule(e), ie);
    }
  }
  Object.keys(ee).forEach((e) => {
    Object.keys(ee[e]).forEach((t) => {
      ie.prototype[t] = ee[e][t];
    });
  }),
    ie.use([
      function ({ swiper: e, on: t, emit: i }) {
        const s = c();
        let n = null;
        const r = () => {
            e &&
              !e.destroyed &&
              e.initialized &&
              (i("beforeResize"), i("resize"));
          },
          a = () => {
            e && !e.destroyed && e.initialized && i("orientationchange");
          };
        t("init", () => {
          e.params.resizeObserver && void 0 !== s.ResizeObserver
            ? e &&
              !e.destroyed &&
              e.initialized &&
              ((n = new ResizeObserver((t) => {
                const { width: i, height: s } = e;
                let n = i,
                  a = s;
                t.forEach(
                  ({ contentBoxSize: t, contentRect: i, target: s }) => {
                    (s && s !== e.el) ||
                      ((n = i ? i.width : (t[0] || t).inlineSize),
                      (a = i ? i.height : (t[0] || t).blockSize));
                  }
                ),
                  (n === i && a === s) || r();
              })),
              n.observe(e.el))
            : (s.addEventListener("resize", r),
              s.addEventListener("orientationchange", a));
        }),
          t("destroy", () => {
            n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)),
              s.removeEventListener("resize", r),
              s.removeEventListener("orientationchange", a);
          });
      },
      function ({ swiper: e, extendParams: t, on: i, emit: s }) {
        const n = [],
          r = c(),
          a = (e, t = {}) => {
            const i = new (r.MutationObserver || r.WebkitMutationObserver)(
              (e) => {
                if (1 === e.length) return void s("observerUpdate", e[0]);
                const t = function () {
                  s("observerUpdate", e[0]);
                };
                r.requestAnimationFrame
                  ? r.requestAnimationFrame(t)
                  : r.setTimeout(t, 0);
              }
            );
            i.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              n.push(i);
          };
        t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          i("init", () => {
            if (e.params.observer) {
              if (e.params.observeParents) {
                const t = e.$el.parents();
                for (let e = 0; e < t.length; e += 1) a(t[e]);
              }
              a(e.$el[0], { childList: e.params.observeSlideChildren }),
                a(e.$wrapperEl[0], { attributes: !1 });
            }
          }),
          i("destroy", () => {
            n.forEach((e) => {
              e.disconnect();
            }),
              n.splice(0, n.length);
          });
      },
    ]);
  const se = ie;
  function ne({ swiper: e, extendParams: t, on: i, emit: s }) {
    function n(t) {
      let i;
      return (
        t &&
          ((i = w(t)),
          e.params.uniqueNavElements &&
            "string" == typeof t &&
            i.length > 1 &&
            1 === e.$el.find(t).length &&
            (i = e.$el.find(t))),
        i
      );
    }
    function r(t, i) {
      const s = e.params.navigation;
      t &&
        t.length > 0 &&
        (t[i ? "addClass" : "removeClass"](s.disabledClass),
        t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = i),
        e.params.watchOverflow &&
          e.enabled &&
          t[e.isLocked ? "addClass" : "removeClass"](s.lockClass));
    }
    function a() {
      if (e.params.loop) return;
      const { $nextEl: t, $prevEl: i } = e.navigation;
      r(i, e.isBeginning && !e.params.rewind),
        r(t, e.isEnd && !e.params.rewind);
    }
    function o(t) {
      t.preventDefault(),
        (!e.isBeginning || e.params.loop || e.params.rewind) && e.slidePrev();
    }
    function d(t) {
      t.preventDefault(),
        (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext();
    }
    function c() {
      const t = e.params.navigation;
      if (
        ((e.params.navigation = (function (e, t, i, s) {
          const n = l();
          return (
            e.params.createElements &&
              Object.keys(s).forEach((r) => {
                if (!i[r] && !0 === i.auto) {
                  let a = e.$el.children(`.${s[r]}`)[0];
                  a ||
                    ((a = n.createElement("div")),
                    (a.className = s[r]),
                    e.$el.append(a)),
                    (i[r] = a),
                    (t[r] = a);
                }
              }),
            i
          );
        })(e, e.originalParams.navigation, e.params.navigation, {
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev",
        })),
        !t.nextEl && !t.prevEl)
      )
        return;
      const i = n(t.nextEl),
        s = n(t.prevEl);
      i && i.length > 0 && i.on("click", d),
        s && s.length > 0 && s.on("click", o),
        Object.assign(e.navigation, {
          $nextEl: i,
          nextEl: i && i[0],
          $prevEl: s,
          prevEl: s && s[0],
        }),
        e.enabled ||
          (i && i.addClass(t.lockClass), s && s.addClass(t.lockClass));
    }
    function p() {
      const { $nextEl: t, $prevEl: i } = e.navigation;
      t &&
        t.length &&
        (t.off("click", d), t.removeClass(e.params.navigation.disabledClass)),
        i &&
          i.length &&
          (i.off("click", o), i.removeClass(e.params.navigation.disabledClass));
    }
    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
      },
    }),
      (e.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null,
      }),
      i("init", () => {
        c(), a();
      }),
      i("toEdge fromEdge lock unlock", () => {
        a();
      }),
      i("destroy", () => {
        p();
      }),
      i("enable disable", () => {
        const { $nextEl: t, $prevEl: i } = e.navigation;
        t &&
          t[e.enabled ? "removeClass" : "addClass"](
            e.params.navigation.lockClass
          ),
          i &&
            i[e.enabled ? "removeClass" : "addClass"](
              e.params.navigation.lockClass
            );
      }),
      i("click", (t, i) => {
        const { $nextEl: n, $prevEl: r } = e.navigation,
          a = i.target;
        if (e.params.navigation.hideOnClick && !w(a).is(r) && !w(a).is(n)) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === a || e.pagination.el.contains(a))
          )
            return;
          let t;
          n
            ? (t = n.hasClass(e.params.navigation.hiddenClass))
            : r && (t = r.hasClass(e.params.navigation.hiddenClass)),
            s(!0 === t ? "navigationShow" : "navigationHide"),
            n && n.toggleClass(e.params.navigation.hiddenClass),
            r && r.toggleClass(e.params.navigation.hiddenClass);
        }
      }),
      Object.assign(e.navigation, { update: a, init: c, destroy: p });
  }
  function re() {
    let e = document.querySelectorAll(
      '[class*="__swiper"]:not(.swiper-wrapper)'
    );
    e &&
      e.forEach((e) => {
        e.parentElement.classList.add("swiper"),
          e.classList.add("swiper-wrapper");
        for (const t of e.children) t.classList.add("swiper-slide");
      });
  }
  window.addEventListener("load", function (e) {
    re(),
      document.querySelector(".slider-reviews") &&
        new se(".slider-reviews__slider", {
          modules: [ne],
          observer: !0,
          observeParents: !0,
          slidesPerView: 1,
          spaceBetween: 20,
          speed: 800,
          navigation: {
            nextEl: ".slider-reviews__item_next",
            prevEl: ".slider-reviews__item_prev",
          },
          on: {},
        });
  });
  e.watcher = new (class {
    constructor(e) {
      (this.config = Object.assign({ logging: !0 }, e)),
        this.observer,
        !document.documentElement.classList.contains("watcher") &&
          this.scrollWatcherRun();
    }
    scrollWatcherUpdate() {
      this.scrollWatcherRun();
    }
    scrollWatcherRun() {
      document.documentElement.classList.add("watcher"),
        this.scrollWatcherConstructor(
          document.querySelectorAll("[data-watch]")
        );
    }
    scrollWatcherConstructor(e) {
      if (e.length) {
        this.scrollWatcherLogging(
          `Проснулся, слежу за объектами (${e.length})...`
        ),
          n(
            Array.from(e).map(function (e) {
              return `${
                e.dataset.watchRoot ? e.dataset.watchRoot : null
              }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
            })
          ).forEach((t) => {
            let i = t.split("|"),
              s = { root: i[0], margin: i[1], threshold: i[2] },
              n = Array.from(e).filter(function (e) {
                let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                  i = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                  n = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                if (
                  String(t) === s.root &&
                  String(i) === s.margin &&
                  String(n) === s.threshold
                )
                  return e;
              }),
              r = this.getScrollWatcherConfig(s);
            this.scrollWatcherInit(n, r);
          });
      } else
        this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
    }
    getScrollWatcherConfig(e) {
      let t = {};
      if (
        (document.querySelector(e.root)
          ? (t.root = document.querySelector(e.root))
          : "null" !== e.root &&
            this.scrollWatcherLogging(
              `Эмм... родительского объекта ${e.root} нет на странице`
            ),
        (t.rootMargin = e.margin),
        !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
      ) {
        if ("prx" === e.threshold) {
          e.threshold = [];
          for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
        } else e.threshold = e.threshold.split(",");
        return (t.threshold = e.threshold), t;
      }
      this.scrollWatcherLogging(
        "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
      );
    }
    scrollWatcherCreate(e) {
      this.observer = new IntersectionObserver((e, t) => {
        e.forEach((e) => {
          this.scrollWatcherCallback(e, t);
        });
      }, e);
    }
    scrollWatcherInit(e, t) {
      this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
    }
    scrollWatcherIntersecting(e, t) {
      e.isIntersecting
        ? (!t.classList.contains("_watcher-view") &&
            t.classList.add("_watcher-view"),
          this.scrollWatcherLogging(
            `Я вижу ${t.classList}, добавил класс _watcher-view`
          ))
        : (t.classList.contains("_watcher-view") &&
            t.classList.remove("_watcher-view"),
          this.scrollWatcherLogging(
            `Я не вижу ${t.classList}, убрал класс _watcher-view`
          ));
    }
    scrollWatcherOff(e, t) {
      t.unobserve(e),
        this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
    }
    scrollWatcherLogging(e) {
      this.config.logging &&
        (function (e) {
          setTimeout(() => {
            window.FLS && console.log(e);
          }, 0);
        })(`[Наблюдатель]: ${e}`);
    }
    scrollWatcherCallback(e, t) {
      const i = e.target;
      this.scrollWatcherIntersecting(e, i),
        i.hasAttribute("data-watch-once") &&
          e.isIntersecting &&
          this.scrollWatcherOff(i, t),
        document.dispatchEvent(
          new CustomEvent("watcherCallback", { detail: { entry: e } })
        );
    }
  })({});
  let ae = !1;
  var oe;
  setTimeout(() => {
    if (ae) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    (oe = function (e) {
      var t,
        i,
        s,
        n,
        r,
        a,
        o = "Close",
        l = "BeforeClose",
        d = "MarkupParse",
        c = "Open",
        p = "Change",
        u = "mfp",
        f = "." + u,
        h = "mfp-ready",
        m = "mfp-removing",
        g = "mfp-prevent-close",
        v = function () {},
        w = !!window.jQuery,
        b = e(window),
        C = function (e, i) {
          t.ev.on(u + e + f, i);
        },
        T = function (t, i, s, n) {
          var r = document.createElement("div");
          return (
            (r.className = "mfp-" + t),
            s && (r.innerHTML = s),
            n ? i && i.appendChild(r) : ((r = e(r)), i && r.appendTo(i)),
            r
          );
        },
        S = function (i, s) {
          t.ev.triggerHandler(u + i, s),
            t.st.callbacks &&
              ((i = i.charAt(0).toLowerCase() + i.slice(1)),
              t.st.callbacks[i] &&
                t.st.callbacks[i].apply(t, e.isArray(s) ? s : [s]));
        },
        y = function (i) {
          return (
            (i === a && t.currTemplate.closeBtn) ||
              ((t.currTemplate.closeBtn = e(
                t.st.closeMarkup.replace("%title%", t.st.tClose)
              )),
              (a = i)),
            t.currTemplate.closeBtn
          );
        },
        x = function () {
          e.magnificPopup.instance ||
            ((t = new v()).init(), (e.magnificPopup.instance = t));
        };
      (v.prototype = {
        constructor: v,
        init: function () {
          var i = navigator.appVersion;
          (t.isLowIE = t.isIE8 = document.all && !document.addEventListener),
            (t.isAndroid = /android/gi.test(i)),
            (t.isIOS = /iphone|ipad|ipod/gi.test(i)),
            (t.supportsTransition = (function () {
              var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
              if (void 0 !== e.transition) return !0;
              for (; t.length; ) if (t.pop() + "Transition" in e) return !0;
              return !1;
            })()),
            (t.probablyMobile =
              t.isAndroid ||
              t.isIOS ||
              /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
                navigator.userAgent
              )),
            (s = e(document)),
            (t.popupsCache = {});
        },
        open: function (i) {
          var n;
          if (!1 === i.isObj) {
            (t.items = i.items.toArray()), (t.index = 0);
            var a,
              o = i.items;
            for (n = 0; n < o.length; n++)
              if (((a = o[n]).parsed && (a = a.el[0]), a === i.el[0])) {
                t.index = n;
                break;
              }
          } else
            (t.items = e.isArray(i.items) ? i.items : [i.items]),
              (t.index = i.index || 0);
          if (!t.isOpen) {
            (t.types = []),
              (r = ""),
              i.mainEl && i.mainEl.length
                ? (t.ev = i.mainEl.eq(0))
                : (t.ev = s),
              i.key
                ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}),
                  (t.currTemplate = t.popupsCache[i.key]))
                : (t.currTemplate = {}),
              (t.st = e.extend(!0, {}, e.magnificPopup.defaults, i)),
              (t.fixedContentPos =
                "auto" === t.st.fixedContentPos
                  ? !t.probablyMobile
                  : t.st.fixedContentPos),
              t.st.modal &&
                ((t.st.closeOnContentClick = !1),
                (t.st.closeOnBgClick = !1),
                (t.st.showCloseBtn = !1),
                (t.st.enableEscapeKey = !1)),
              t.bgOverlay ||
                ((t.bgOverlay = T("bg").on("click" + f, function () {
                  t.close();
                })),
                (t.wrap = T("wrap")
                  .attr("tabindex", -1)
                  .on("click" + f, function (e) {
                    t._checkIfClose(e.target) && t.close();
                  })),
                (t.container = T("container", t.wrap))),
              (t.contentContainer = T("content")),
              t.st.preloader &&
                (t.preloader = T("preloader", t.container, t.st.tLoading));
            var l = e.magnificPopup.modules;
            for (n = 0; n < l.length; n++) {
              var p = l[n];
              (p = p.charAt(0).toUpperCase() + p.slice(1)),
                t["init" + p].call(t);
            }
            S("BeforeOpen"),
              t.st.showCloseBtn &&
                (t.st.closeBtnInside
                  ? (C(d, function (e, t, i, s) {
                      i.close_replaceWith = y(s.type);
                    }),
                    (r += " mfp-close-btn-in"))
                  : t.wrap.append(y())),
              t.st.alignTop && (r += " mfp-align-top"),
              t.fixedContentPos
                ? t.wrap.css({
                    overflow: t.st.overflowY,
                    overflowX: "hidden",
                    overflowY: t.st.overflowY,
                  })
                : t.wrap.css({ top: b.scrollTop(), position: "absolute" }),
              (!1 === t.st.fixedBgPos ||
                ("auto" === t.st.fixedBgPos && !t.fixedContentPos)) &&
                t.bgOverlay.css({ height: s.height(), position: "absolute" }),
              t.st.enableEscapeKey &&
                s.on("keyup" + f, function (e) {
                  27 === e.keyCode && t.close();
                }),
              b.on("resize" + f, function () {
                t.updateSize();
              }),
              t.st.closeOnContentClick || (r += " mfp-auto-cursor"),
              r && t.wrap.addClass(r);
            var u = (t.wH = b.height()),
              m = {};
            if (t.fixedContentPos && t._hasScrollBar(u)) {
              var g = t._getScrollbarSize();
              g && (m.marginRight = g);
            }
            t.fixedContentPos &&
              (t.isIE7
                ? e("body, html").css("overflow", "hidden")
                : (m.overflow = "hidden"));
            var v = t.st.mainClass;
            return (
              t.isIE7 && (v += " mfp-ie7"),
              v && t._addClassToMFP(v),
              t.updateItemHTML(),
              S("BuildControls"),
              e("html").css(m),
              t.bgOverlay
                .add(t.wrap)
                .prependTo(t.st.prependTo || e(document.body)),
              (t._lastFocusedEl = document.activeElement),
              setTimeout(function () {
                t.content
                  ? (t._addClassToMFP(h), t._setFocus())
                  : t.bgOverlay.addClass(h),
                  s.on("focusin" + f, t._onFocusIn);
              }, 16),
              (t.isOpen = !0),
              t.updateSize(u),
              S(c),
              i
            );
          }
          t.updateItemHTML();
        },
        close: function () {
          t.isOpen &&
            (S(l),
            (t.isOpen = !1),
            t.st.removalDelay && !t.isLowIE && t.supportsTransition
              ? (t._addClassToMFP(m),
                setTimeout(function () {
                  t._close();
                }, t.st.removalDelay))
              : t._close());
        },
        _close: function () {
          S(o);
          var i = m + " " + h + " ";
          if (
            (t.bgOverlay.detach(),
            t.wrap.detach(),
            t.container.empty(),
            t.st.mainClass && (i += t.st.mainClass + " "),
            t._removeClassFromMFP(i),
            t.fixedContentPos)
          ) {
            var n = { marginRight: "" };
            t.isIE7 ? e("body, html").css("overflow", "") : (n.overflow = ""),
              e("html").css(n);
          }
          s.off("keyup.mfp focusin" + f),
            t.ev.off(f),
            t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            t.bgOverlay.attr("class", "mfp-bg"),
            t.container.attr("class", "mfp-container"),
            !t.st.showCloseBtn ||
              (t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type]) ||
              (t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach()),
            t.st.autoFocusLast &&
              t._lastFocusedEl &&
              e(t._lastFocusedEl).focus(),
            (t.currItem = null),
            (t.content = null),
            (t.currTemplate = null),
            (t.prevHeight = 0),
            S("AfterClose");
        },
        updateSize: function (e) {
          if (t.isIOS) {
            var i = document.documentElement.clientWidth / window.innerWidth,
              s = window.innerHeight * i;
            t.wrap.css("height", s), (t.wH = s);
          } else t.wH = e || b.height();
          t.fixedContentPos || t.wrap.css("height", t.wH), S("Resize");
        },
        updateItemHTML: function () {
          var i = t.items[t.index];
          t.contentContainer.detach(),
            t.content && t.content.detach(),
            i.parsed || (i = t.parseEl(t.index));
          var s = i.type;
          if (
            (S("BeforeChange", [t.currItem ? t.currItem.type : "", s]),
            (t.currItem = i),
            !t.currTemplate[s])
          ) {
            var r = !!t.st[s] && t.st[s].markup;
            S("FirstMarkupParse", r), (t.currTemplate[s] = !r || e(r));
          }
          n && n !== i.type && t.container.removeClass("mfp-" + n + "-holder");
          var a = t["get" + s.charAt(0).toUpperCase() + s.slice(1)](
            i,
            t.currTemplate[s]
          );
          t.appendContent(a, s),
            (i.preloaded = !0),
            S(p, i),
            (n = i.type),
            t.container.prepend(t.contentContainer),
            S("AfterChange");
        },
        appendContent: function (e, i) {
          (t.content = e),
            e
              ? t.st.showCloseBtn &&
                t.st.closeBtnInside &&
                !0 === t.currTemplate[i]
                ? t.content.find(".mfp-close").length || t.content.append(y())
                : (t.content = e)
              : (t.content = ""),
            S("BeforeAppend"),
            t.container.addClass("mfp-" + i + "-holder"),
            t.contentContainer.append(t.content);
        },
        parseEl: function (i) {
          var s,
            n = t.items[i];
          if (
            (n.tagName
              ? (n = { el: e(n) })
              : ((s = n.type), (n = { data: n, src: n.src })),
            n.el)
          ) {
            for (var r = t.types, a = 0; a < r.length; a++)
              if (n.el.hasClass("mfp-" + r[a])) {
                s = r[a];
                break;
              }
            (n.src = n.el.attr("data-mfp-src")),
              n.src || (n.src = n.el.attr("href"));
          }
          return (
            (n.type = s || t.st.type || "inline"),
            (n.index = i),
            (n.parsed = !0),
            (t.items[i] = n),
            S("ElementParse", n),
            t.items[i]
          );
        },
        addGroup: function (e, i) {
          var s = function (s) {
            (s.mfpEl = this), t._openClick(s, e, i);
          };
          i || (i = {});
          var n = "click.magnificPopup";
          (i.mainEl = e),
            i.items
              ? ((i.isObj = !0), e.off(n).on(n, s))
              : ((i.isObj = !1),
                i.delegate
                  ? e.off(n).on(n, i.delegate, s)
                  : ((i.items = e), e.off(n).on(n, s)));
        },
        _openClick: function (i, s, n) {
          if (
            (void 0 !== n.midClick
              ? n.midClick
              : e.magnificPopup.defaults.midClick) ||
            !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)
          ) {
            var r =
              void 0 !== n.disableOn
                ? n.disableOn
                : e.magnificPopup.defaults.disableOn;
            if (r)
              if (e.isFunction(r)) {
                if (!r.call(t)) return !0;
              } else if (b.width() < r) return !0;
            i.type && (i.preventDefault(), t.isOpen && i.stopPropagation()),
              (n.el = e(i.mfpEl)),
              n.delegate && (n.items = s.find(n.delegate)),
              t.open(n);
          }
        },
        updateStatus: function (e, s) {
          if (t.preloader) {
            i !== e && t.container.removeClass("mfp-s-" + i),
              s || "loading" !== e || (s = t.st.tLoading);
            var n = { status: e, text: s };
            S("UpdateStatus", n),
              (e = n.status),
              (s = n.text),
              t.preloader.html(s),
              t.preloader.find("a").on("click", function (e) {
                e.stopImmediatePropagation();
              }),
              t.container.addClass("mfp-s-" + e),
              (i = e);
          }
        },
        _checkIfClose: function (i) {
          if (!e(i).hasClass(g)) {
            var s = t.st.closeOnContentClick,
              n = t.st.closeOnBgClick;
            if (s && n) return !0;
            if (
              !t.content ||
              e(i).hasClass("mfp-close") ||
              (t.preloader && i === t.preloader[0])
            )
              return !0;
            if (i === t.content[0] || e.contains(t.content[0], i)) {
              if (s) return !0;
            } else if (n && e.contains(document, i)) return !0;
            return !1;
          }
        },
        _addClassToMFP: function (e) {
          t.bgOverlay.addClass(e), t.wrap.addClass(e);
        },
        _removeClassFromMFP: function (e) {
          this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
        },
        _hasScrollBar: function (e) {
          return (
            (t.isIE7 ? s.height() : document.body.scrollHeight) >
            (e || b.height())
          );
        },
        _setFocus: function () {
          (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
        },
        _onFocusIn: function (i) {
          return i.target === t.wrap[0] || e.contains(t.wrap[0], i.target)
            ? void 0
            : (t._setFocus(), !1);
        },
        _parseMarkup: function (t, i, s) {
          var n;
          s.data && (i = e.extend(s.data, i)),
            S(d, [t, i, s]),
            e.each(i, function (i, s) {
              if (void 0 === s || !1 === s) return !0;
              if ((n = i.split("_")).length > 1) {
                var r = t.find(f + "-" + n[0]);
                if (r.length > 0) {
                  var a = n[1];
                  "replaceWith" === a
                    ? r[0] !== s[0] && r.replaceWith(s)
                    : "img" === a
                    ? r.is("img")
                      ? r.attr("src", s)
                      : r.replaceWith(
                          e("<img>")
                            .attr("src", s)
                            .attr("class", r.attr("class"))
                        )
                    : r.attr(n[1], s);
                }
              } else t.find(f + "-" + i).html(s);
            });
        },
        _getScrollbarSize: function () {
          if (void 0 === t.scrollbarSize) {
            var e = document.createElement("div");
            (e.style.cssText =
              "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
              document.body.appendChild(e),
              (t.scrollbarSize = e.offsetWidth - e.clientWidth),
              document.body.removeChild(e);
          }
          return t.scrollbarSize;
        },
      }),
        (e.magnificPopup = {
          instance: null,
          proto: v.prototype,
          modules: [],
          open: function (t, i) {
            return (
              x(),
              ((t = t ? e.extend(!0, {}, t) : {}).isObj = !0),
              (t.index = i || 0),
              this.instance.open(t)
            );
          },
          close: function () {
            return e.magnificPopup.instance && e.magnificPopup.instance.close();
          },
          registerModule: function (t, i) {
            i.options && (e.magnificPopup.defaults[t] = i.options),
              e.extend(this.proto, i.proto),
              this.modules.push(t);
          },
          defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup:
              '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0,
          },
        }),
        (e.fn.magnificPopup = function (i) {
          x();
          var s = e(this);
          if ("string" == typeof i)
            if ("open" === i) {
              var n,
                r = w ? s.data("magnificPopup") : s[0].magnificPopup,
                a = parseInt(arguments[1], 10) || 0;
              r.items
                ? (n = r.items[a])
                : ((n = s),
                  r.delegate && (n = n.find(r.delegate)),
                  (n = n.eq(a))),
                t._openClick({ mfpEl: n }, s, r);
            } else
              t.isOpen &&
                t[i].apply(t, Array.prototype.slice.call(arguments, 1));
          else
            (i = e.extend(!0, {}, i)),
              w ? s.data("magnificPopup", i) : (s[0].magnificPopup = i),
              t.addGroup(s, i);
          return s;
        });
      var E,
        k,
        P,
        M = "inline",
        L = function () {
          P && (k.after(P.addClass(E)).detach(), (P = null));
        };
      e.magnificPopup.registerModule(M, {
        options: {
          hiddenClass: "hide",
          markup: "",
          tNotFound: "Content not found",
        },
        proto: {
          initInline: function () {
            t.types.push(M),
              C(o + "." + M, function () {
                L();
              });
          },
          getInline: function (i, s) {
            if ((L(), i.src)) {
              var n = t.st.inline,
                r = e(i.src);
              if (r.length) {
                var a = r[0].parentNode;
                a &&
                  a.tagName &&
                  (k || ((E = n.hiddenClass), (k = T(E)), (E = "mfp-" + E)),
                  (P = r.after(k).detach().removeClass(E))),
                  t.updateStatus("ready");
              } else t.updateStatus("error", n.tNotFound), (r = e("<div>"));
              return (i.inlineElement = r), r;
            }
            return t.updateStatus("ready"), t._parseMarkup(s, {}, i), s;
          },
        },
      });
      var I,
        O = "ajax",
        A = function () {
          I && e(document.body).removeClass(I);
        },
        z = function () {
          A(), t.req && t.req.abort();
        };
      e.magnificPopup.registerModule(O, {
        options: {
          settings: null,
          cursor: "mfp-ajax-cur",
          tError: '<a href="%url%">The content</a> could not be loaded.',
        },
        proto: {
          initAjax: function () {
            t.types.push(O),
              (I = t.st.ajax.cursor),
              C(o + "." + O, z),
              C("BeforeChange." + O, z);
          },
          getAjax: function (i) {
            I && e(document.body).addClass(I), t.updateStatus("loading");
            var s = e.extend(
              {
                url: i.src,
                success: function (s, n, r) {
                  var a = { data: s, xhr: r };
                  S("ParseAjax", a),
                    t.appendContent(e(a.data), O),
                    (i.finished = !0),
                    A(),
                    t._setFocus(),
                    setTimeout(function () {
                      t.wrap.addClass(h);
                    }, 16),
                    t.updateStatus("ready"),
                    S("AjaxContentAdded");
                },
                error: function () {
                  A(),
                    (i.finished = i.loadError = !0),
                    t.updateStatus(
                      "error",
                      t.st.ajax.tError.replace("%url%", i.src)
                    );
                },
              },
              t.st.ajax.settings
            );
            return (t.req = e.ajax(s)), "";
          },
        },
      });
      var _,
        $,
        B = function (i) {
          if (i.data && void 0 !== i.data.title) return i.data.title;
          var s = t.st.image.titleSrc;
          if (s) {
            if (e.isFunction(s)) return s.call(t, i);
            if (i.el) return i.el.attr(s) || "";
          }
          return "";
        };
      e.magnificPopup.registerModule("image", {
        options: {
          markup:
            '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
          cursor: "mfp-zoom-out-cur",
          titleSrc: "title",
          verticalFit: !0,
          tError: '<a href="%url%">The image</a> could not be loaded.',
        },
        proto: {
          initImage: function () {
            var i = t.st.image,
              s = ".image";
            t.types.push("image"),
              C(c + s, function () {
                "image" === t.currItem.type &&
                  i.cursor &&
                  e(document.body).addClass(i.cursor);
              }),
              C(o + s, function () {
                i.cursor && e(document.body).removeClass(i.cursor),
                  b.off("resize" + f);
              }),
              C("Resize" + s, t.resizeImage),
              t.isLowIE && C("AfterChange", t.resizeImage);
          },
          resizeImage: function () {
            var e = t.currItem;
            if (e && e.img && t.st.image.verticalFit) {
              var i = 0;
              t.isLowIE &&
                (i =
                  parseInt(e.img.css("padding-top"), 10) +
                  parseInt(e.img.css("padding-bottom"), 10)),
                e.img.css("max-height", t.wH - i);
            }
          },
          _onImageHasSize: function (e) {
            e.img &&
              ((e.hasSize = !0),
              _ && clearInterval(_),
              (e.isCheckingImgSize = !1),
              S("ImageHasSize", e),
              e.imgHidden &&
                (t.content && t.content.removeClass("mfp-loading"),
                (e.imgHidden = !1)));
          },
          findImageSize: function (e) {
            var i = 0,
              s = e.img[0],
              n = function (r) {
                _ && clearInterval(_),
                  (_ = setInterval(function () {
                    return s.naturalWidth > 0
                      ? void t._onImageHasSize(e)
                      : (i > 200 && clearInterval(_),
                        void (3 == ++i
                          ? n(10)
                          : 40 === i
                          ? n(50)
                          : 100 === i && n(500)));
                  }, r));
              };
            n(1);
          },
          getImage: function (i, s) {
            var n = 0,
              r = function () {
                i &&
                  (i.img[0].complete
                    ? (i.img.off(".mfploader"),
                      i === t.currItem &&
                        (t._onImageHasSize(i), t.updateStatus("ready")),
                      (i.hasSize = !0),
                      (i.loaded = !0),
                      S("ImageLoadComplete"))
                    : 200 > ++n
                    ? setTimeout(r, 100)
                    : a());
              },
              a = function () {
                i &&
                  (i.img.off(".mfploader"),
                  i === t.currItem &&
                    (t._onImageHasSize(i),
                    t.updateStatus("error", o.tError.replace("%url%", i.src))),
                  (i.hasSize = !0),
                  (i.loaded = !0),
                  (i.loadError = !0));
              },
              o = t.st.image,
              l = s.find(".mfp-img");
            if (l.length) {
              var d = document.createElement("img");
              (d.className = "mfp-img"),
                i.el &&
                  i.el.find("img").length &&
                  (d.alt = i.el.find("img").attr("alt")),
                (i.img = e(d).on("load.mfploader", r).on("error.mfploader", a)),
                (d.src = i.src),
                l.is("img") && (i.img = i.img.clone()),
                (d = i.img[0]).naturalWidth > 0
                  ? (i.hasSize = !0)
                  : d.width || (i.hasSize = !1);
            }
            return (
              t._parseMarkup(s, { title: B(i), img_replaceWith: i.img }, i),
              t.resizeImage(),
              i.hasSize
                ? (_ && clearInterval(_),
                  i.loadError
                    ? (s.addClass("mfp-loading"),
                      t.updateStatus("error", o.tError.replace("%url%", i.src)))
                    : (s.removeClass("mfp-loading"), t.updateStatus("ready")),
                  s)
                : (t.updateStatus("loading"),
                  (i.loading = !0),
                  i.hasSize ||
                    ((i.imgHidden = !0),
                    s.addClass("mfp-loading"),
                    t.findImageSize(i)),
                  s)
            );
          },
        },
      }),
        e.magnificPopup.registerModule("zoom", {
          options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (e) {
              return e.is("img") ? e : e.find("img");
            },
          },
          proto: {
            initZoom: function () {
              var e,
                i = t.st.zoom,
                s = ".zoom";
              if (i.enabled && t.supportsTransition) {
                var n,
                  r,
                  a = i.duration,
                  d = function (e) {
                    var t = e
                        .clone()
                        .removeAttr("style")
                        .removeAttr("class")
                        .addClass("mfp-animated-image"),
                      s = "all " + i.duration / 1e3 + "s " + i.easing,
                      n = {
                        position: "fixed",
                        zIndex: 9999,
                        left: 0,
                        top: 0,
                        "-webkit-backface-visibility": "hidden",
                      },
                      r = "transition";
                    return (
                      (n["-webkit-" + r] =
                        n["-moz-" + r] =
                        n["-o-" + r] =
                        n[r] =
                          s),
                      t.css(n),
                      t
                    );
                  },
                  c = function () {
                    t.content.css("visibility", "visible");
                  };
                C("BuildControls" + s, function () {
                  if (t._allowZoom()) {
                    if (
                      (clearTimeout(n),
                      t.content.css("visibility", "hidden"),
                      !(e = t._getItemToZoom()))
                    )
                      return void c();
                    (r = d(e)).css(t._getOffset()),
                      t.wrap.append(r),
                      (n = setTimeout(function () {
                        r.css(t._getOffset(!0)),
                          (n = setTimeout(function () {
                            c(),
                              setTimeout(function () {
                                r.remove(),
                                  (e = r = null),
                                  S("ZoomAnimationEnded");
                              }, 16);
                          }, a));
                      }, 16));
                  }
                }),
                  C(l + s, function () {
                    if (t._allowZoom()) {
                      if ((clearTimeout(n), (t.st.removalDelay = a), !e)) {
                        if (!(e = t._getItemToZoom())) return;
                        r = d(e);
                      }
                      r.css(t._getOffset(!0)),
                        t.wrap.append(r),
                        t.content.css("visibility", "hidden"),
                        setTimeout(function () {
                          r.css(t._getOffset());
                        }, 16);
                    }
                  }),
                  C(o + s, function () {
                    t._allowZoom() && (c(), r && r.remove(), (e = null));
                  });
              }
            },
            _allowZoom: function () {
              return "image" === t.currItem.type;
            },
            _getItemToZoom: function () {
              return !!t.currItem.hasSize && t.currItem.img;
            },
            _getOffset: function (i) {
              var s,
                n = (s = i
                  ? t.currItem.img
                  : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
                r = parseInt(s.css("padding-top"), 10),
                a = parseInt(s.css("padding-bottom"), 10);
              n.top -= e(window).scrollTop() - r;
              var o = {
                width: s.width(),
                height: (w ? s.innerHeight() : s[0].offsetHeight) - a - r,
              };
              return (
                void 0 === $ &&
                  ($ =
                    void 0 !== document.createElement("p").style.MozTransform),
                $
                  ? (o["-moz-transform"] = o.transform =
                      "translate(" + n.left + "px," + n.top + "px)")
                  : ((o.left = n.left), (o.top = n.top)),
                o
              );
            },
          },
        });
      var D = "iframe",
        G = function (e) {
          if (t.currTemplate[D]) {
            var i = t.currTemplate[D].find("iframe");
            i.length &&
              (e || (i[0].src = "//about:blank"),
              t.isIE8 && i.css("display", e ? "block" : "none"));
          }
        };
      e.magnificPopup.registerModule(D, {
        options: {
          markup:
            '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
          srcAction: "iframe_src",
          patterns: {
            youtube: {
              index: "youtube.com",
              id: "v=",
              src: "//www.youtube.com/embed/%id%?autoplay=1",
            },
            vimeo: {
              index: "vimeo.com/",
              id: "/",
              src: "//player.vimeo.com/video/%id%?autoplay=1",
            },
            gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
          },
        },
        proto: {
          initIframe: function () {
            t.types.push(D),
              C("BeforeChange", function (e, t, i) {
                t !== i && (t === D ? G() : i === D && G(!0));
              }),
              C(o + "." + D, function () {
                G();
              });
          },
          getIframe: function (i, s) {
            var n = i.src,
              r = t.st.iframe;
            e.each(r.patterns, function () {
              return n.indexOf(this.index) > -1
                ? (this.id &&
                    (n =
                      "string" == typeof this.id
                        ? n.substr(
                            n.lastIndexOf(this.id) + this.id.length,
                            n.length
                          )
                        : this.id.call(this, n)),
                  (n = this.src.replace("%id%", n)),
                  !1)
                : void 0;
            });
            var a = {};
            return (
              r.srcAction && (a[r.srcAction] = n),
              t._parseMarkup(s, a, i),
              t.updateStatus("ready"),
              s
            );
          },
        },
      });
      var N = function (e) {
          var i = t.items.length;
          return e > i - 1 ? e - i : 0 > e ? i + e : e;
        },
        W = function (e, t, i) {
          return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i);
        };
      e.magnificPopup.registerModule("gallery", {
        options: {
          enabled: !1,
          arrowMarkup:
            '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
          preload: [0, 2],
          navigateByImgClick: !0,
          arrows: !0,
          tPrev: "Previous (Left arrow key)",
          tNext: "Next (Right arrow key)",
          tCounter: "%curr% of %total%",
        },
        proto: {
          initGallery: function () {
            var i = t.st.gallery,
              n = ".mfp-gallery";
            return (
              (t.direction = !0),
              !(!i || !i.enabled) &&
                ((r += " mfp-gallery"),
                C(c + n, function () {
                  i.navigateByImgClick &&
                    t.wrap.on("click" + n, ".mfp-img", function () {
                      return t.items.length > 1 ? (t.next(), !1) : void 0;
                    }),
                    s.on("keydown" + n, function (e) {
                      37 === e.keyCode
                        ? t.prev()
                        : 39 === e.keyCode && t.next();
                    });
                }),
                C("UpdateStatus" + n, function (e, i) {
                  i.text &&
                    (i.text = W(i.text, t.currItem.index, t.items.length));
                }),
                C(d + n, function (e, s, n, r) {
                  var a = t.items.length;
                  n.counter = a > 1 ? W(i.tCounter, r.index, a) : "";
                }),
                C("BuildControls" + n, function () {
                  if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
                    var s = i.arrowMarkup,
                      n = (t.arrowLeft = e(
                        s
                          .replace(/%title%/gi, i.tPrev)
                          .replace(/%dir%/gi, "left")
                      ).addClass(g)),
                      r = (t.arrowRight = e(
                        s
                          .replace(/%title%/gi, i.tNext)
                          .replace(/%dir%/gi, "right")
                      ).addClass(g));
                    n.click(function () {
                      t.prev();
                    }),
                      r.click(function () {
                        t.next();
                      }),
                      t.container.append(n.add(r));
                  }
                }),
                C(p + n, function () {
                  t._preloadTimeout && clearTimeout(t._preloadTimeout),
                    (t._preloadTimeout = setTimeout(function () {
                      t.preloadNearbyImages(), (t._preloadTimeout = null);
                    }, 16));
                }),
                void C(o + n, function () {
                  s.off(n),
                    t.wrap.off("click" + n),
                    (t.arrowRight = t.arrowLeft = null);
                }))
            );
          },
          next: function () {
            (t.direction = !0), (t.index = N(t.index + 1)), t.updateItemHTML();
          },
          prev: function () {
            (t.direction = !1), (t.index = N(t.index - 1)), t.updateItemHTML();
          },
          goTo: function (e) {
            (t.direction = e >= t.index), (t.index = e), t.updateItemHTML();
          },
          preloadNearbyImages: function () {
            var e,
              i = t.st.gallery.preload,
              s = Math.min(i[0], t.items.length),
              n = Math.min(i[1], t.items.length);
            for (e = 1; e <= (t.direction ? n : s); e++)
              t._preloadItem(t.index + e);
            for (e = 1; e <= (t.direction ? s : n); e++)
              t._preloadItem(t.index - e);
          },
          _preloadItem: function (i) {
            if (((i = N(i)), !t.items[i].preloaded)) {
              var s = t.items[i];
              s.parsed || (s = t.parseEl(i)),
                S("LazyLoad", s),
                "image" === s.type &&
                  (s.img = e('<img class="mfp-img" />')
                    .on("load.mfploader", function () {
                      s.hasSize = !0;
                    })
                    .on("error.mfploader", function () {
                      (s.hasSize = !0),
                        (s.loadError = !0),
                        S("LazyLoadError", s);
                    })
                    .attr("src", s.src)),
                (s.preloaded = !0);
            }
          },
        },
      });
      var H = "retina";
      e.magnificPopup.registerModule(H, {
        options: {
          replaceSrc: function (e) {
            return e.src.replace(/\.\w+$/, function (e) {
              return "@2x" + e;
            });
          },
          ratio: 1,
        },
        proto: {
          initRetina: function () {
            if (window.devicePixelRatio > 1) {
              var e = t.st.retina,
                i = e.ratio;
              (i = isNaN(i) ? i() : i) > 1 &&
                (C("ImageHasSize." + H, function (e, t) {
                  t.img.css({
                    "max-width": t.img[0].naturalWidth / i,
                    width: "100%",
                  });
                }),
                C("ElementParse." + H, function (t, s) {
                  s.src = e.replaceSrc(s, i);
                }));
            }
          },
        },
      }),
        x();
    }),
    "function" == typeof define && define.amd
      ? define(["jquery"], oe)
      : oe(
          "object" == typeof exports
            ? require("jquery")
            : window.jQuery || window.Zepto
        ),
    $(document).ready(function () {
      $(".popup-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          titleSrc: function (e) {
            return e.el.attr("title") + "<small>by ArchMove</small>";
          },
        },
      });
    }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      let e = document.querySelector(".icon-menu");
      e &&
        e.addEventListener("click", function (e) {
          t &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? i(e) : s(e);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })();
})();
