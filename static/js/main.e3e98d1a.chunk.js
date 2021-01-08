(this['webpackJsonphome-wall'] = this['webpackJsonphome-wall'] || []).push([
  [0],
  {
    104: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(3),
        r = a(0),
        o = a.n(r),
        c = a(10),
        s = a.n(c),
        l = (a(94), a(95), a(38)),
        i = a(25),
        d = a(26),
        j = a(18),
        h = a(31),
        u = a(29),
        b = a(39),
        p = a(57),
        m = 'https://europe-west3-homewall-301021.cloudfunctions.net/HomeWall',
        f = a.p + 'static/media/wall.27c8fb8f.jpg',
        O = window.matchMedia && window.matchMedia('screen and (max-width: 600px)').matches ? 2 : 1,
        x = function (e, t, a) {
          e.forEach(function (e) {
            t.beginPath(), t.moveTo(e[0].x / a, e[0].y / a);
            for (var n = 1; n < e.length; n++) t.lineTo(e[n].x / a, e[n].y / a);
            t.lineTo(e[0].x / a, e[0].y / a), t.stroke(), t.closePath();
          });
        },
        v = (function (e) {
          Object(h.a)(a, e);
          var t = Object(u.a)(a);
          function a(e) {
            var n;
            return Object(i.a)(this, a), ((n = t.call(this, e)).canvasRef = o.a.createRef()), n;
          }
          return (
            Object(d.a)(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.canvasRef.current.getContext('2d'),
                    a = new Image();
                  (a.src = f),
                    (a.onload = function () {
                      if (e.canvasRef.current) {
                        var n = a.width,
                          r = a.height;
                        (e.canvasRef.current.height = r / (n / 600) / O),
                          t.drawImage(
                            a,
                            0,
                            0,
                            e.canvasRef.current.clientWidth,
                            e.canvasRef.current.clientHeight,
                          ),
                          (t.lineWidth = 2),
                          (t.strokeStyle = '#FFFFFF'),
                          x(e.props.holds, t, O),
                          e.setState({ loading: !0 });
                      }
                    });
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  if (e.holds !== this.props.holds) {
                    var t = this.canvasRef.current.getContext('2d');
                    x(this.props.holds, t, O);
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.onClick;
                  return Object(n.jsx)('canvas', {
                    className: 'home-wall-canvas',
                    width: 600 / O,
                    ref: this.canvasRef,
                    onMouseDown: function (a) {
                      var n = a.clientX,
                        r = a.clientY;
                      if (t) {
                        var o = e.canvasRef.current.getBoundingClientRect(),
                          c = n - o.left,
                          s = r - o.top;
                        t({ x: c * O, y: s * O });
                      }
                    },
                  });
                },
              },
            ]),
            a
          );
        })(o.a.PureComponent),
        g = a(145),
        y = a(156),
        k = a(167),
        w = a(153),
        C = a(169),
        N = a(163),
        H = a(155),
        P = a(150),
        S = a(148),
        W = Object(g.a)(function (e) {
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
            c = e.saveProblem,
            s = W(),
            l = o.a.useState('6B'),
            i = Object(b.a)(l, 2),
            d = i[0],
            j = i[1],
            h = o.a.useState(null),
            u = Object(b.a)(h, 2),
            p = u[0],
            m = u[1],
            f = o.a.useState('Scott Williams'),
            O = Object(b.a)(f, 2),
            x = O[0],
            g = O[1],
            B = t.length < 3 || !p || !x || !d;
          return Object(n.jsxs)('div', {
            className: s.root,
            children: [
              Object(n.jsx)(S.a, {}),
              Object(n.jsxs)(P.a, {
                maxWidth: 'sm',
                children: [
                  Object(n.jsx)(v, { onClick: r, holds: t }, a),
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
                        defaultValue: x,
                        variant: 'outlined',
                        onChange: function (e) {
                          var t = e.target.value;
                          return g(t);
                        },
                      }),
                      Object(n.jsxs)(w.a, {
                        variant: 'outlined',
                        className: s.formControl,
                        children: [
                          Object(n.jsx)(C.a, { children: 'Grade' }),
                          Object(n.jsxs)(N.a, {
                            value: d,
                            onChange: function (e) {
                              var t = e.target.value;
                              return j(t);
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
                  Object(n.jsx)(y.a, {
                    className: s.formControl,
                    variant: 'contained',
                    color: 'primary',
                    onClick: function () {
                      return c({ name: p, grade: d, author: x, holds: t });
                    },
                    disabled: B,
                    children: 'Save problem',
                  }),
                ],
              }),
            ],
          });
        },
        R = (function (e) {
          Object(h.a)(a, e);
          var t = Object(u.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).state = { selectedHolds: [], wallKey: 0 }),
              (n.addHold = n.addHold.bind(Object(j.a)(n))),
              (n.saveProblem = n.saveProblem.bind(Object(j.a)(n))),
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
                    o = this.state.selectedHolds;
                  r.forEach(function (e) {
                    (function (e, t) {
                      for (
                        var a = e.x, n = e.y, r = !1, o = 0, c = t.length - 1;
                        o < t.length;
                        c = o++
                      ) {
                        var s = t[o].x,
                          l = t[o].y,
                          i = t[c].x,
                          d = t[c].y;
                        l > n !== d > n && a < ((i - s) * (n - l)) / (d - l) + s && (r = !r);
                      }
                      return r;
                    })({ x: a, y: n }, e) &&
                      -1 === o.indexOf(e) &&
                      t.setState({ selectedHolds: [].concat(Object(l.a)(o), [e]) });
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
        })(o.a.PureComponent),
        T = a(58),
        D = Object(g.a)(function (e) {
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
        M = function (e) {
          var t = e.problems,
            a = D();
          return 0 === t.length
            ? Object(n.jsxs)('div', {
                className: a.root,
                children: [
                  Object(n.jsx)(S.a, {}),
                  Object(n.jsx)(P.a, {
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
                  Object(n.jsx)(S.a, {}),
                  Object(n.jsx)(P.a, {
                    maxWidth: 'sm',
                    children: t.map(function (e) {
                      var t = e.holds,
                        r = e.name,
                        o = e.grade,
                        c = e.author;
                      return Object(n.jsxs)('div', {
                        className: a.card,
                        children: [
                          Object(n.jsx)(v, { holds: t }),
                          Object(n.jsx)('div', {
                            className: a.overlay,
                            children: Object(n.jsxs)('div', {
                              className: a.description,
                              children: [
                                Object(n.jsx)(T.a, {
                                  variant: 'h5',
                                  children: ''.concat(r, ' ').concat(o),
                                }),
                                Object(n.jsx)(T.a, {
                                  variant: 'body1',
                                  children: 'by: '.concat(c),
                                }),
                              ],
                            }),
                          }),
                        ],
                      });
                    }),
                  }),
                ],
              });
        },
        A = Object(g.a)(function (e) {
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
        E = function (e) {
          var t = e.holds,
            a = e.handleClick,
            r = e.createHold,
            o = e.saveBoard,
            c = A();
          return Object(n.jsxs)('div', {
            className: c.root,
            children: [
              Object(n.jsx)(S.a, {}),
              Object(n.jsxs)(P.a, {
                maxWidth: 'sm',
                children: [
                  Object(n.jsx)('div', {
                    className: 'home-wall',
                    children: Object(n.jsx)(v, { onClick: a, holds: t }),
                  }),
                  Object(n.jsx)(y.a, {
                    className: c.formControl,
                    variant: 'contained',
                    color: 'secondary',
                    onClick: r,
                    children: 'Create hold',
                  }),
                  Object(n.jsx)(y.a, {
                    className: c.formControl,
                    variant: 'contained',
                    color: 'primary',
                    onClick: o,
                    children: 'Save board',
                  }),
                ],
              }),
            ],
          });
        },
        F = (function (e) {
          Object(h.a)(a, e);
          var t = Object(u.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).state = { points: [], holds: [] }),
              (n.handleClick = n.handleClick.bind(Object(j.a)(n))),
              (n.createHold = n.createHold.bind(Object(j.a)(n))),
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
                  return Object(n.jsx)(E, {
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
        })(o.a.PureComponent),
        K = a(78),
        J = a.n(K),
        G = a(160),
        I = a(157),
        U = a(166),
        L = a(165),
        V = a(162),
        X = a(79),
        Y = a.n(X),
        q = a(154),
        z = a(107),
        Q = a(158),
        Z = a(159),
        $ = a(80),
        _ = a.n($),
        ee = a(161),
        te = a(12),
        ae = 240,
        ne = Object(g.a)(function (e) {
          return {
            root: { display: 'flex' },
            drawer: Object(p.a)({}, e.breakpoints.up('sm'), { width: ae, flexShrink: 0 }),
            appBar: Object(p.a)({}, e.breakpoints.up('sm'), {
              width: 'calc(100% - '.concat(ae, 'px)'),
              marginLeft: ae,
            }),
            menuButton: Object(p.a)({ marginRight: e.spacing(2) }, e.breakpoints.up('sm'), {
              display: 'none',
            }),
            toolbar: e.mixins.toolbar,
            drawerPaper: { width: ae },
            content: { flexGrow: 1, padding: e.spacing(3) },
          };
        }),
        re = function (e) {
          var t = e.page,
            a = e.setPage,
            r = ne();
          return Object(n.jsxs)('div', {
            children: [
              Object(n.jsx)('div', { className: r.toolbar }),
              Object(n.jsx)(I.a, {}),
              Object(n.jsxs)(q.a, {
                children: [
                  Object(n.jsxs)(z.a, {
                    button: !0,
                    onClick: function () {
                      return a('create');
                    },
                    selected: 'create' === t,
                    children: [
                      Object(n.jsx)(Q.a, { children: Object(n.jsx)(J.a, {}) }),
                      Object(n.jsx)(Z.a, { primary: 'Create problem' }),
                    ],
                  }),
                  Object(n.jsxs)(z.a, {
                    button: !0,
                    onClick: function () {
                      return a('list');
                    },
                    selected: 'list' === t,
                    children: [
                      Object(n.jsx)(Q.a, { children: Object(n.jsx)(Y.a, {}) }),
                      Object(n.jsx)(Z.a, { primary: 'Existing problems' }),
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
            o = ne();
          return Object(n.jsx)('div', {
            children: Object(n.jsx)(G.a, {
              position: 'fixed',
              className: a ? null : o.appBar,
              children: Object(n.jsxs)(ee.a, {
                children: [
                  Object(n.jsx)(V.a, {
                    color: 'inherit',
                    'aria-label': 'open drawer',
                    edge: 'start',
                    onClick: r,
                    className: o.menuButton,
                    children: Object(n.jsx)(_.a, {}),
                  }),
                  Object(n.jsx)(T.a, { variant: 'h6', noWrap: !0, children: 'Home Wall' }),
                ],
              }),
            }),
          });
        },
        ce = function (e) {
          var t = e.problems,
            a = e.holds,
            r = e.createProblem,
            c = e.loading,
            s = e.updateHolds,
            l = ne(),
            i = Object(te.a)(),
            d = o.a.useState(!1),
            j = Object(b.a)(d, 2),
            h = j[0],
            u = j[1],
            p = o.a.useState('list'),
            m = Object(b.a)(p, 2),
            f = m[0],
            O = m[1],
            x = function () {
              u(!h);
            };
          return 0 === a.length
            ? Object(n.jsxs)('div', {
                className: l.root,
                children: [
                  Object(n.jsx)(S.a, {}),
                  Object(n.jsx)(oe, { handleDrawerToggle: x, fullWidth: !0 }),
                  Object(n.jsxs)('main', {
                    className: l.content,
                    children: [
                      Object(n.jsx)('div', { className: l.toolbar }),
                      !c && Object(n.jsx)(F, { updateHolds: s }),
                    ],
                  }),
                ],
              })
            : Object(n.jsxs)('div', {
                className: l.root,
                children: [
                  Object(n.jsx)(S.a, {}),
                  Object(n.jsx)(oe, { handleDrawerToggle: x }),
                  Object(n.jsxs)('nav', {
                    className: l.drawer,
                    'aria-label': 'mailbox folders',
                    children: [
                      Object(n.jsx)(L.a, {
                        smUp: !0,
                        implementation: 'css',
                        children: Object(n.jsx)(U.a, {
                          variant: 'temporary',
                          anchor: 'rtl' === i.direction ? 'right' : 'left',
                          open: h,
                          onClose: x,
                          classes: { paper: l.drawerPaper },
                          ModalProps: { keepMounted: !0 },
                          children: Object(n.jsx)(re, {
                            setPage: function (e) {
                              O(e), u(!1);
                            },
                          }),
                        }),
                      }),
                      Object(n.jsx)(L.a, {
                        xsDown: !0,
                        implementation: 'css',
                        children: Object(n.jsx)(U.a, {
                          classes: { paper: l.drawerPaper },
                          variant: 'permanent',
                          open: !0,
                          children: Object(n.jsx)(re, { page: f, setPage: O }),
                        }),
                      }),
                    ],
                  }),
                  Object(n.jsxs)('main', {
                    className: l.content,
                    children: [
                      Object(n.jsx)('div', { className: l.toolbar }),
                      'list' === f && Object(n.jsx)(M, { problems: t }),
                      'create' === f && Object(n.jsx)(R, { allHolds: a, createProblem: r }),
                    ],
                  }),
                ],
              });
        },
        se = (function (e) {
          Object(h.a)(a, e);
          var t = Object(u.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).state = { loading: !0, holds: [], problems: [] }),
              (n.updateHolds = n.updateHolds.bind(Object(j.a)(n))),
              (n.createProblem = n.createProblem.bind(Object(j.a)(n))),
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
                      e.setState({
                        problems: t,
                        holds: fetch(''.concat(m, '/holds'))
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
                          ),
                        loading: !1,
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
                  return Object(n.jsx)(ce, {
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
        })(o.a.PureComponent);
      var le = function () {
        return Object(n.jsx)('div', { className: 'App', children: Object(n.jsx)(se, {}) });
      };
      s.a.render(
        Object(n.jsx)(o.a.StrictMode, { children: Object(n.jsx)(le, {}) }),
        document.getElementById('root'),
      );
    },
    94: function (e, t, a) {},
    95: function (e, t, a) {},
  },
  [[104, 1, 2]],
]);
//# sourceMappingURL=main.e3e98d1a.chunk.js.map
