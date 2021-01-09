(this['webpackJsonphome-wall'] = this['webpackJsonphome-wall'] || []).push([
  [0],
  {
    104: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(3),
        r = a(0),
        c = a.n(r),
        o = a(10),
        s = a.n(o),
        l = (a(94), a(95), a(38)),
        i = a(25),
        d = a(26),
        u = a(18),
        h = a(31),
        j = a(29),
        b = a(39),
        p = a(56),
        m = 'https://europe-west3-homewall-301021.cloudfunctions.net/HomeWall',
        f = a.p + 'static/media/wall.ecca603c.jpg',
        x = window.matchMedia && window.matchMedia('screen and (max-width: 600px)').matches ? 2 : 1,
        O = function (e, t) {
          return (e / t) * window.devicePixelRatio;
        },
        v = function (e, t, a) {
          e.forEach(function (e) {
            t.beginPath();
            var n = e[0],
              r = n.x,
              c = n.y;
            t.moveTo(O(r, a), O(c, a)),
              e.forEach(function (e) {
                var n = e.x,
                  r = e.y;
                return t.lineTo(O(n, a), O(r, a));
              }),
              t.lineTo(O(r, a), O(c, a)),
              t.stroke(),
              t.closePath();
          });
        },
        g = (function (e) {
          Object(h.a)(a, e);
          var t = Object(j.a)(a);
          function a(e) {
            var n;
            return Object(i.a)(this, a), ((n = t.call(this, e)).canvasRef = c.a.createRef()), n;
          }
          return (
            Object(d.a)(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props.holds,
                    a = this.canvasRef.current.getContext('2d'),
                    n = new Image();
                  (n.src = f),
                    (n.onload = function () {
                      var r = n.height / (n.width / 600) / x,
                        c = 600 / x;
                      (e.canvasRef.current.width = c * window.devicePixelRatio),
                        (e.canvasRef.current.height = r * window.devicePixelRatio),
                        (e.canvasRef.current.style.width = ''.concat(c, 'px')),
                        (e.canvasRef.current.style.height = ''.concat(r, 'px')),
                        a.drawImage(n, 0, 0, e.canvasRef.current.width, e.canvasRef.current.height),
                        (a.lineWidth = 2),
                        (a.strokeStyle = '#FFFFFF'),
                        v(t, a, x);
                    });
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  e.holds !== this.props.holds &&
                    v(this.props.holds, this.canvasRef.current.getContext('2d'), x);
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.onClick;
                  return Object(n.jsx)('canvas', {
                    className: 'home-wall-canvas',
                    width: 600 / x,
                    ref: this.canvasRef,
                    onMouseDown: function (a) {
                      var n = a.clientX,
                        r = a.clientY;
                      if (t) {
                        var c = e.canvasRef.current.getBoundingClientRect(),
                          o = n - c.left,
                          s = r - c.top;
                        console.log({ click: { x: o, y: s } }), t({ x: o * x, y: s * x });
                      }
                    },
                  });
                },
              },
            ]),
            a
          );
        })(c.a.PureComponent),
        y = a(145),
        w = a(156),
        k = a(167),
        C = a(153),
        N = a(169),
        P = a(163),
        H = a(155),
        S = a(150),
        R = a(148),
        W = Object(y.a)(function (e) {
          return {
            root: {
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              overflow: 'hidden',
              backgroundColor: e.palette.background.paper,
            },
            formControl: { margin: e.spacing(1), minWidth: 120 },
            selectEmpty: { marginTop: e.spacing(2) },
          };
        }),
        B = function (e) {
          var t = e.selectedHolds,
            a = e.wallKey,
            r = e.addHold,
            o = e.saveProblem,
            s = W(),
            l = c.a.useState('6B'),
            i = Object(b.a)(l, 2),
            d = i[0],
            u = i[1],
            h = c.a.useState(null),
            j = Object(b.a)(h, 2),
            p = j[0],
            m = j[1],
            f = c.a.useState('Scott Williams'),
            x = Object(b.a)(f, 2),
            O = x[0],
            v = x[1],
            y = t.length < 3 || !p || !O || !d;
          return Object(n.jsxs)('div', {
            className: s.root,
            children: [
              Object(n.jsx)(R.a, {}),
              Object(n.jsxs)(S.a, {
                maxWidth: 'sm',
                children: [
                  Object(n.jsx)(g, { onClick: r, holds: t }, a),
                  Object(n.jsxs)('div', {
                    children: [
                      Object(n.jsx)(k.a, {
                        className: s.formControl,
                        label: 'Problem Name',
                        variant: 'outlined',
                        onChange: function (e) {
                          var t = e.target.value;
                          return m(t);
                        },
                      }),
                      Object(n.jsx)(k.a, {
                        className: s.formControl,
                        label: 'Author',
                        defaultValue: O,
                        variant: 'outlined',
                        onChange: function (e) {
                          var t = e.target.value;
                          return v(t);
                        },
                      }),
                      Object(n.jsxs)(C.a, {
                        variant: 'outlined',
                        className: s.formControl,
                        children: [
                          Object(n.jsx)(N.a, { children: 'Grade' }),
                          Object(n.jsxs)(P.a, {
                            value: d,
                            onChange: function (e) {
                              var t = e.target.value;
                              return u(t);
                            },
                            label: 'Grade',
                            children: [
                              Object(n.jsx)(H.a, { value: 'None', children: 'None' }),
                              Object(n.jsx)(H.a, { value: '6B', children: '6B' }),
                              Object(n.jsx)(H.a, { value: '7A', children: '7A' }),
                              Object(n.jsx)(H.a, { value: '8A', children: '8A' }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(n.jsx)(w.a, {
                    className: s.formControl,
                    variant: 'contained',
                    color: 'primary',
                    onClick: function () {
                      return o({ name: p, grade: d, author: O, holds: t });
                    },
                    disabled: y,
                    children: 'Save problem',
                  }),
                ],
              }),
            ],
          });
        },
        T = (function (e) {
          Object(h.a)(a, e);
          var t = Object(j.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).state = { selectedHolds: [], wallKey: 0 }),
              (n.addHold = n.addHold.bind(Object(u.a)(n))),
              (n.saveProblem = n.saveProblem.bind(Object(u.a)(n))),
              n
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: 'addHold',
                value: function (e) {
                  var t = this,
                    a = e.x,
                    n = e.y,
                    r = this.props.allHolds,
                    c = this.state.selectedHolds;
                  r.forEach(function (e) {
                    (function (e, t) {
                      for (
                        var a = e.x, n = e.y, r = !1, c = 0, o = t.length - 1;
                        c < t.length;
                        o = c++
                      ) {
                        var s = t[c].x,
                          l = t[c].y,
                          i = t[o].x,
                          d = t[o].y;
                        l > n !== d > n && a < ((i - s) * (n - l)) / (d - l) + s && (r = !r);
                      }
                      return r;
                    })({ x: a, y: n }, e) &&
                      -1 === c.indexOf(e) &&
                      t.setState({ selectedHolds: [].concat(Object(l.a)(c), [e]) });
                  });
                },
              },
              {
                key: 'saveProblem',
                value: function (e) {
                  (0, this.props.createProblem)(e),
                    this.setState({ selectedHolds: [], wallKey: this.state.wallKey + 1 });
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state,
                    t = e.selectedHolds,
                    a = e.wallKey;
                  return Object(n.jsx)(B, {
                    selectedHolds: t,
                    wallKey: a,
                    addHold: this.addHold,
                    saveProblem: this.saveProblem,
                  });
                },
              },
            ]),
            a
          );
        })(c.a.PureComponent),
        D = a(57),
        M = Object(y.a)(function (e) {
          return {
            root: {
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              overflow: 'hidden',
              backgroundColor: e.palette.background.paper,
            },
            card: {
              position: 'relative',
              marginBottom: '50px',
              display: 'inline-block',
              backgroundColor: 'black',
            },
            overlay: {
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '100%',
              color: 'white',
              backgroundColor: 'black',
              opacity: 0.6,
            },
            description: { padding: '10px 10px 10px 10px' },
          };
        }),
        E = function (e) {
          var t = e.problems,
            a = M();
          return 0 === t.length
            ? Object(n.jsxs)('div', {
                className: a.root,
                children: [
                  Object(n.jsx)(R.a, {}),
                  Object(n.jsx)(S.a, {
                    maxWidth: 'sm',
                    children: Object(n.jsx)('div', {
                      className: a.root,
                      children: 'No problems created yet',
                    }),
                  }),
                ],
              })
            : Object(n.jsxs)('div', {
                className: a.root,
                children: [
                  Object(n.jsx)(R.a, {}),
                  Object(n.jsx)(S.a, {
                    maxWidth: 'sm',
                    children: t.map(function (e) {
                      var t = e.holds,
                        r = e.name,
                        c = e.grade,
                        o = e.author;
                      return Object(n.jsxs)(
                        'div',
                        {
                          className: a.card,
                          children: [
                            Object(n.jsx)(g, { holds: t }),
                            Object(n.jsx)('div', {
                              className: a.overlay,
                              children: Object(n.jsxs)('div', {
                                className: a.description,
                                children: [
                                  Object(n.jsx)(D.a, {
                                    variant: 'h5',
                                    children: ''.concat(r, ' ').concat(c),
                                  }),
                                  Object(n.jsx)(D.a, {
                                    variant: 'body1',
                                    children: 'by: '.concat(o),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        },
                        r,
                      );
                    }),
                  }),
                ],
              });
        },
        A = Object(y.a)(function (e) {
          return {
            root: {
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              overflow: 'hidden',
              backgroundColor: e.palette.background.paper,
            },
            formControl: { margin: e.spacing(1), minWidth: 120 },
            selectEmpty: { marginTop: e.spacing(2) },
          };
        }),
        F = function (e) {
          var t = e.holds,
            a = e.handleClick,
            r = e.createHold,
            c = e.saveBoard,
            o = A();
          return Object(n.jsxs)('div', {
            className: o.root,
            children: [
              Object(n.jsx)(R.a, {}),
              Object(n.jsxs)(S.a, {
                maxWidth: 'sm',
                children: [
                  Object(n.jsx)('div', {
                    className: 'home-wall',
                    children: Object(n.jsx)(g, { onClick: a, holds: t }),
                  }),
                  Object(n.jsx)(w.a, {
                    className: o.formControl,
                    variant: 'contained',
                    color: 'secondary',
                    onClick: r,
                    children: 'Create hold',
                  }),
                  Object(n.jsx)(w.a, {
                    className: o.formControl,
                    variant: 'contained',
                    color: 'primary',
                    onClick: c,
                    children: 'Save board',
                  }),
                ],
              }),
            ],
          });
        },
        K = (function (e) {
          Object(h.a)(a, e);
          var t = Object(j.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).state = { points: [], holds: [] }),
              (n.handleClick = n.handleClick.bind(Object(u.a)(n))),
              (n.createHold = n.createHold.bind(Object(u.a)(n))),
              n
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: 'handleClick',
                value: function (e) {
                  var t = e.x,
                    a = e.y;
                  this.setState({
                    points: [].concat(Object(l.a)(this.state.points), [{ x: t, y: a }]),
                  });
                },
              },
              {
                key: 'createHold',
                value: function () {
                  var e = this.state.points;
                  e.length < 3 ||
                    this.setState({
                      holds: [].concat(Object(l.a)(this.state.holds), [e]),
                      points: [],
                    });
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.updateHolds;
                  return Object(n.jsx)(F, {
                    holds: this.state.holds,
                    handleClick: this.handleClick,
                    createHold: this.createHold,
                    saveBoard: function () {
                      return t(e.state.holds);
                    },
                  });
                },
              },
            ]),
            a
          );
        })(c.a.PureComponent),
        J = a(78),
        G = a.n(J),
        I = a(160),
        U = a(157),
        L = a(166),
        V = a(165),
        X = a(162),
        Y = a(79),
        q = a.n(Y),
        z = a(154),
        Q = a(107),
        Z = a(158),
        $ = a(159),
        _ = a(80),
        ee = a.n(_),
        te = a(161),
        ae = a(12),
        ne = 240,
        re = Object(y.a)(function (e) {
          return {
            root: { display: 'flex' },
            drawer: Object(p.a)({}, e.breakpoints.up('sm'), { width: ne, flexShrink: 0 }),
            appBar: Object(p.a)({}, e.breakpoints.up('sm'), {
              width: 'calc(100% - '.concat(ne, 'px)'),
              marginLeft: ne,
            }),
            menuButton: Object(p.a)({ marginRight: e.spacing(2) }, e.breakpoints.up('sm'), {
              display: 'none',
            }),
            toolbar: e.mixins.toolbar,
            drawerPaper: { width: ne },
            content: { flexGrow: 1, padding: e.spacing(3) },
          };
        }),
        ce = function (e) {
          var t = e.page,
            a = e.setPage,
            r = re();
          return Object(n.jsxs)('div', {
            children: [
              Object(n.jsx)('div', { className: r.toolbar }),
              Object(n.jsx)(U.a, {}),
              Object(n.jsxs)(z.a, {
                children: [
                  Object(n.jsxs)(Q.a, {
                    button: !0,
                    onClick: function () {
                      return a('create');
                    },
                    selected: 'create' === t,
                    children: [
                      Object(n.jsx)(Z.a, { children: Object(n.jsx)(G.a, {}) }),
                      Object(n.jsx)($.a, { primary: 'Create problem' }),
                    ],
                  }),
                  Object(n.jsxs)(Q.a, {
                    button: !0,
                    onClick: function () {
                      return a('list');
                    },
                    selected: 'list' === t,
                    children: [
                      Object(n.jsx)(Z.a, { children: Object(n.jsx)(q.a, {}) }),
                      Object(n.jsx)($.a, { primary: 'Existing problems' }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        oe = function (e) {
          var t = e.fullWidth,
            a = void 0 !== t && t,
            r = e.handleDrawerToggle,
            c = re();
          return Object(n.jsx)('div', {
            children: Object(n.jsx)(I.a, {
              position: 'fixed',
              className: a ? null : c.appBar,
              children: Object(n.jsxs)(te.a, {
                children: [
                  Object(n.jsx)(X.a, {
                    color: 'inherit',
                    'aria-label': 'open drawer',
                    edge: 'start',
                    onClick: r,
                    className: c.menuButton,
                    children: Object(n.jsx)(ee.a, {}),
                  }),
                  Object(n.jsx)(D.a, { variant: 'h6', noWrap: !0, children: 'Home Wall' }),
                ],
              }),
            }),
          });
        },
        se = function (e) {
          var t = e.problems,
            a = e.holds,
            r = e.createProblem,
            o = e.loading,
            s = e.updateHolds,
            l = re(),
            i = Object(ae.a)(),
            d = c.a.useState(!1),
            u = Object(b.a)(d, 2),
            h = u[0],
            j = u[1],
            p = c.a.useState('list'),
            m = Object(b.a)(p, 2),
            f = m[0],
            x = m[1],
            O = function () {
              j(!h);
            };
          return 0 === a.length
            ? Object(n.jsxs)('div', {
                className: l.root,
                children: [
                  Object(n.jsx)(R.a, {}),
                  Object(n.jsx)(oe, { handleDrawerToggle: O, fullWidth: !0 }),
                  Object(n.jsxs)('main', {
                    className: l.content,
                    children: [
                      Object(n.jsx)('div', { className: l.toolbar }),
                      !o && Object(n.jsx)(K, { updateHolds: s }),
                    ],
                  }),
                ],
              })
            : Object(n.jsxs)('div', {
                className: l.root,
                children: [
                  Object(n.jsx)(R.a, {}),
                  Object(n.jsx)(oe, { handleDrawerToggle: O }),
                  Object(n.jsxs)('nav', {
                    className: l.drawer,
                    'aria-label': 'mailbox folders',
                    children: [
                      Object(n.jsx)(V.a, {
                        smUp: !0,
                        implementation: 'css',
                        children: Object(n.jsx)(L.a, {
                          variant: 'temporary',
                          anchor: 'rtl' === i.direction ? 'right' : 'left',
                          open: h,
                          onClose: O,
                          classes: { paper: l.drawerPaper },
                          ModalProps: { keepMounted: !0 },
                          children: Object(n.jsx)(ce, {
                            setPage: function (e) {
                              x(e), j(!1);
                            },
                          }),
                        }),
                      }),
                      Object(n.jsx)(V.a, {
                        xsDown: !0,
                        implementation: 'css',
                        children: Object(n.jsx)(L.a, {
                          classes: { paper: l.drawerPaper },
                          variant: 'permanent',
                          open: !0,
                          children: Object(n.jsx)(ce, { page: f, setPage: x }),
                        }),
                      }),
                    ],
                  }),
                  Object(n.jsxs)('main', {
                    className: l.content,
                    children: [
                      Object(n.jsx)('div', { className: l.toolbar }),
                      'list' === f && Object(n.jsx)(E, { problems: t }),
                      'create' === f && Object(n.jsx)(T, { allHolds: a, createProblem: r }),
                    ],
                  }),
                ],
              });
        },
        le = (function (e) {
          Object(h.a)(a, e);
          var t = Object(j.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).state = { loading: !0, holds: [], problems: [] }),
              (n.updateHolds = n.updateHolds.bind(Object(u.a)(n))),
              (n.createProblem = n.createProblem.bind(Object(u.a)(n))),
              n
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this;
                  fetch(''.concat(m, '/problems'))
                    .then(function (e) {
                      return e.json();
                    })
                    .then(
                      function (e) {
                        return e;
                      },
                      function (e) {
                        console.error({ error: e });
                      },
                    )
                    .then(function (t) {
                      fetch(''.concat(m, '/holds'))
                        .then(function (e) {
                          return e.json();
                        })
                        .then(
                          function (e) {
                            return e;
                          },
                          function (e) {
                            console.error({ error: e });
                          },
                        )
                        .then(function (a) {
                          return e.setState({ problems: t, holds: a, loading: !1 });
                        });
                    });
                },
              },
              {
                key: 'createProblem',
                value: function (e) {
                  var t = this;
                  (function (e) {
                    return fetch(''.concat(m, '/problems'), {
                      method: 'POST',
                      body: JSON.stringify(e),
                    })
                      .then(function (e) {
                        return e.json();
                      })
                      .then(
                        function (e) {
                          return e;
                        },
                        function (e) {
                          console.error({ error: e });
                        },
                      );
                  })(e).then(function (e) {
                    return t.setState({ problems: [e].concat(Object(l.a)(t.state.problems)) });
                  });
                },
              },
              {
                key: 'updateHolds',
                value: function (e) {
                  var t = this;
                  (function (e) {
                    return fetch(''.concat(m, '/holds'), { method: 'PUT', body: JSON.stringify(e) })
                      .then(function (e) {
                        return e.json();
                      })
                      .then(
                        function (e) {
                          return e;
                        },
                        function (e) {
                          console.error({ error: e });
                        },
                      );
                  })(e).then(function (e) {
                    return t.setState({ holds: e });
                  });
                },
              },
              {
                key: 'render',
                value: function () {
                  return Object(n.jsx)(se, {
                    problems: this.state.problems,
                    holds: this.state.holds,
                    createProblem: this.createProblem,
                    updateHolds: this.updateHolds,
                    loading: this.state.loading,
                  });
                },
              },
            ]),
            a
          );
        })(c.a.PureComponent);
      var ie = function () {
        return Object(n.jsx)('div', { className: 'App', children: Object(n.jsx)(le, {}) });
      };
      s.a.render(
        Object(n.jsx)(c.a.StrictMode, { children: Object(n.jsx)(ie, {}) }),
        document.getElementById('root'),
      );
    },
    94: function (e, t, a) {},
    95: function (e, t, a) {},
  },
  [[104, 1, 2]],
]);
//# sourceMappingURL=main.70e19c25.chunk.js.map
