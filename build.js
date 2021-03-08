(() => {
  var i = Object.create,
    m = Object.defineProperty,
    a = Object.getPrototypeOf,
    f = Object.prototype.hasOwnProperty,
    s = Object.getOwnPropertyNames,
    A = Object.getOwnPropertyDescriptor;
  var b = (r) => m(r, '__esModule', { value: !0 });
  var l = (r, t, e) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of s(t))
          !f.call(r, o) && o !== 'default' && m(r, o, { get: () => t[o], enumerable: !(e = A(t, o)) || e.enumerable });
      return r;
    },
    p = (r) =>
      l(
        b(
          m(
            r != null ? i(a(r)) : {},
            'default',
            r && r.__esModule && 'default' in r
              ? { get: () => r.default, enumerable: !0 }
              : { value: r, enumerable: !0 }
          )
        ),
        r
      );
  var d = p(require('react')),
    u = p(require('react-dom'));
  var n = p(require('react')),
    v = () => n.default.createElement('div', null, 'App Component', ((t, e) => t + e)(3, 5)),
    c = v;
  u.default.render(d.default.createElement(c, null), document.getElementById('root'));
})();
