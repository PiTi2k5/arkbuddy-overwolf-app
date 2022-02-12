(this["webpackJsonpdev-console-ui"] = this["webpackJsonpdev-console-ui"] || [])
.push([
	[0], {
		1120: function(e, t, a) {},
		1169: function(e, t, a) {},
		1280: function(e, t, a) {},
		1281: function(e, t, a) {
			"use strict";
			a.r(t);
			a(809), a(819), a(1006);
			var n = a(0),
				r = a.n(n),
				c = a(31),
				i = a.n(c),
				s = a(3),
				o = a(167),
				l = a(397),
				d = a(62),
				j = a(1379),
				u = a(1378),
				b = a(1381),
				p = a(384),
				O = a.n(p),
				h = a(1388),
				x = a(1357),
				m = a(749),
				f = a(489),
				v = a(1360),
				g = a(695),
				y = a(696),
				C = a(356),
				w = a(95),
				I = a(347),
				k = a.n(I),
				S = a(1390),
				N = a(2),
				P = function(e) {
					var t = e.record,
						a = e.size,
						n = e.className;
					return t ? Object(N.jsx)(S.a, {
						src: "".concat(t.avatar),
						sizes: a,
						style: {
							width: a,
							height: a
						},
						className: n
					}) : null
				};
			P.defaultProps = {
				size: "25"
			};
			var T = P,
				B = Object(w.a)((function(e) {
					return {
						root: {
							display: "flex",
							flexWrap: "nowrap",
							alignItems: "center"
						},
						avatar: {
							marginRight: e.spacing(1)
						}
					}
				})),
				L = k()((function(e) {
					var t = e.record,
						a = e.size,
						n = B();
					return t ? Object(N.jsxs)("div", {
						className: n.root,
						children: [Object(N.jsx)(T, {
							className: n.avatar,
							record: t,
							size: a
						}), t.email]
					}) : null
				}));
			L.defaultProps = {
				source: "id",
				label: "resources.customers.fields.name"
			};
			var A = L,
				M = function(e) {
					return e.record ? Object(N.jsx)(C.a, {
						to: "/users/".concat(e.record.id),
						children: Object(N.jsx)(A, Object(s.a)({}, e))
					}) : null
				};
			M.defaultProps = {
				source: "id",
				label: "User",
				addLabel: !1
			};
			var _, R = M;
			! function(e) {
				e[e.Unknown = 1] = "Unknown", e[e.User = 2] = "User", e[e.Developer = 3] =
					"Developer", e[e.PowerUser = 4] = "PowerUser", e[e.QA = 5] = "QA", e[e.ContentManager =
						6] = "ContentManager", e[e.Admin = 7] = "Admin"
			}(_ || (_ = {}));
			var F = _.PowerUser,
				D = [{
					id: _.User,
					name: "User"
				}, {
					id: _.Developer,
					name: "Developer"
				}, {
					id: _.QA,
					name: "QA"
				}, {
					id: _.ContentManager,
					name: "Content Manager"
				}, {
					id: _.Admin,
					name: "Admin"
				}],
				z = a(51),
				E = a(1345),
				H = a(173),
				W = a(1306),
				V = a(180),
				U = a(689),
				q = a(1353),
				Z = a(746),
				K = a(1350),
				Q = a(1351),
				J = a(1352),
				Y = a(498),
				G = a(59),
				$ = a.n(G),
				X = a(744),
				ee = a(12),
				te = a(56),
				ae = a(244),
				ne = a(64),
				re = ["helperText", "helperTextTypographyProps"],
				ce = ["icon", "label", "disabled", "variant", "size"],
				ie = Object(Y.a)((function(e) {
					return {
						owButton: Object(o.a)({
							minWidth: "80px"
						}, e.breakpoints.down("sm"), {
							minWidth: 0
						}),
						noIcon: {
							"& .MuiButton-label > span": {
								paddingLeft: 0
							}
						}
					}
				})),
				se = function(e) {
					var t = e.helperText,
						a = e.helperTextTypographyProps,
						n = Object(z.a)(e, re),
						r = ie(),
						c = n.icon,
						i = n.label,
						o = n.disabled,
						l = (n.variant, n.size, Object(z.a)(n, ce));
					return c && !i ? Object(N.jsx)(ae.a, Object(s.a)(Object(s.a)({}, l), {}, {
						children: c
					})) : Object(N.jsxs)("span", {
						children: [Object(N.jsx)(te.a, Object(s.a)(Object(s.a)({}, n), {}, {
							className: "".concat(r.owButton, " ").concat(!c && r.noIcon,
								" ").concat(n.className),
							children: c && c
						})), o && t && Object(N.jsx)(ne.a, Object(s.a)(Object(s.a)({}, a), {}, {
							children: t
						}))]
					})
				},
				oe = function(e) {
					var t, a, n, r = Object(ee.h)(),
						c = e.basePath,
						i = e.record,
						s = e.redirectTo,
						o = void 0 === s ? "" : s,
						l = e.redirect;
					return n = l instanceof Function ? l : "".concat(c, "/").concat((null ===
						i || void 0 === i ? void 0 : i.id) ? "".concat(i.id, "/") : "").concat(
						o), Object(N.jsx)(se, {
						color: null !== (t = e.color) && void 0 !== t ? t : "default",
						icon: e.icon,
						label: e.label || e.buttonLabel || o,
						onClick: function(t) {
							var a;
							t.stopPropagation(), a = n instanceof Function ? n(null === i ||
								void 0 === i ? void 0 : i.id, c, i) : n, r.push(a, e.state)
						},
						variant: null !== (a = e.variant) && void 0 !== a ? a : "text"
					})
				},
				le = a(756),
				de = function(e) {
					return Object(N.jsxs)(le.a, {
						viewBox: "0 0 24 24",
						children: [Object(N.jsx)("path", {
							d: "M8 3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3V4H19C19.5523 4 20 4.44772 20 5V6H4V5C4 4.44772 4.44772 4 5 4H8V3Z"
						}), Object(N.jsx)("path", {
							"fill-rule": "evenodd",
							"clip-rule": "evenodd",
							d: "M19 8H5V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V8ZM15 10H13V20H15V10ZM9 10H11V20H9V10Z"
						})]
					})
				},
				je = a(9),
				ue = a(1287),
				be = a(1289),
				pe = a(1290),
				Oe = a(1291),
				he = a(1292),
				xe = a(674),
				me = a.n(xe),
				fe = a(673),
				ve = a.n(fe),
				ge = function(e) {
					var t = Object(d.a)(),
						a = e.title,
						n = e.question,
						r = e.showDialog,
						c = e.onApprove,
						i = e.onCancel,
						s = e.cancelButtonLabel,
						o = void 0 === s ? "ra.action.cancel" : s,
						l = e.cancelButtonIcon,
						j = (void 0 === l && ve.a, e.approveButtonLabel),
						u = void 0 === j ? "ra.action.confirm" : j,
						b = e.approveButtonIcon;
					void 0 === b && me.a;
					return Object(N.jsxs)(ue.a, {
						fullWidth: !0,
						open: r,
						onClose: i,
						"aria-label": t(a),
						children: [Object(N.jsx)(be.a, {
							style: {
								paddingBottom: "5px"
							},
							children: t(a)
						}), Object(N.jsx)(pe.a, {
							children: Object(N.jsx)(Oe.a, {
								children: Object(N.jsx)("span", {
									style: {
										marginBottom: "15px",
										width: "100%"
									},
									children: t(n)
								})
							})
						}), Object(N.jsxs)(he.a, {
							children: [Object(N.jsx)(te.a, {
								label: o,
								onClick: i,
								id: "confirm011"
							}), Object(N.jsx)(te.a, {
								label: u,
								onClick: c,
								variant: "contained",
								id: "confirm012"
							})]
						})]
					})
				},
				ye = function(e) {
					var t = e.label,
						a = e.icon,
						r = e.color,
						c = e.className,
						i = e.variant,
						o = e.disabled,
						l = e.title,
						d = e.question,
						j = e.onApprove,
						u = e.onCancel,
						b = e.cancelButtonLabel,
						p = e.approveButtonLabel,
						O = e.cancelButtonIcon,
						h = e.approveButtonIcon,
						x = e.size,
						m = e.record,
						f = Object(n.useState)(!1),
						v = Object(je.a)(f, 2),
						g = v[0],
						y = v[1],
						C = {
							label: t,
							icon: a,
							color: r,
							variant: i,
							disabled: o,
							className: c,
							size: x,
							onClick: function(e) {
								e.stopPropagation(), y(!0)
							}
						},
						w = {
							title: l,
							question: d,
							onApprove: function() {
								y(!1), j(m)
							},
							onCancel: function() {
								y(!1), u && u()
							},
							cancelButtonLabel: b,
							approveButtonLabel: p,
							cancelButtonIcon: O,
							approveButtonIcon: h
						};
					return Object(N.jsxs)(N.Fragment, {
						children: [Object(N.jsx)(se, Object(s.a)({}, C)), Object(N.jsx)(ge,
							Object(s.a)(Object(s.a)({}, w), {}, {
								showDialog: g
							}))]
					})
				},
				Ce = Object(Y.a)((function(e) {
					return {
						enforceTheme: {
							"& th": {
								backgroundColor: e.palette.background.paper,
								zIndex: "auto"
							}
						},
						editButtonCellStyles: {
							textAlign: "end",
							"& button:not(.MuiButton-contained)": {
								backgroundColor: "transparent",
								color: e.palette.grey[600],
								"&:hover": {
									color: e.palette.grey[900],
									backgroundColor: "transparent"
								}
							}
						}
					}
				})),
				we = function(e) {
					var t = Ce(),
						a = Object(n.useContext)(Be),
						r = Object(s.a)(Object(s.a)({}, a), e);
					return Object(N.jsxs)(X.a, {
						className: t.enforceTheme,
						rowClick: r.rowClick,
						rowStyle: function() {
							return {
								height: "48px"
							}
						},
						expand: r.expand,
						children: [e.children, r.showDelete && Object(N.jsx)(ye, {
							icon: Object(N.jsx)(de, {}),
							color: "primary",
							title: "Hold it!",
							question: "Are you sure you want to delete this?",
							onApprove: r.deleteButtonAction,
							cellClassName: t.editButtonCellStyles
						}), r.showEdit && (r.editButton ? r.editButton : Object(N.jsx)(oe, {
							buttonLabel: r.editButtonLabel,
							icon: r.editButtonIcon,
							variant: "contained",
							redirectTo: "edit",
							redirect: r.editButtonRedirect,
							cellClassName: t.editButtonCellStyles
						}))]
					})
				},
				Ie = a(172),
				ke = a.n(Ie),
				Se = ke.a,
				Ne = a(686),
				Pe = a.n(Ne).a,
				Te = ["className", "exporter", "filters"],
				Be = Object(n.createContext)({}),
				Le = function(e) {
					var t = e.className,
						a = (e.exporter, e.filters),
						r = Object(z.a)(e, Te),
						c = Object(E.a)(),
						i = c.basePath,
						o = c.displayedFilters,
						l = c.filterValues,
						d = c.resource,
						j = c.showFilter,
						u = Object(n.useContext)(Be),
						b = u.createButton,
						p = u.createButtonLabel,
						O = u.createButtonRedirect,
						h = u.createInitialState,
						x = u.customActions,
						m = u.showCreate,
						f = b ? Object(n.cloneElement)(b, {
							basePath: i,
							resource: d,
							state: {
								createInitialState: h
							},
							variant: "contained"
						}) : Object(N.jsx)(oe, {
							basePath: i,
							redirectTo: "create",
							redirect: O,
							state: h,
							variant: "contained",
							icon: Object(N.jsx)(Se, {}),
							label: p
						});
					return Object(N.jsxs)(H.a, Object(s.a)(Object(s.a)({
						className: t
					}, Object(W.c)(r)), {}, {
						children: [a && Object(n.cloneElement)(a, {
							resource: d,
							showFilter: j,
							displayedFilters: o,
							filterValues: l,
							context: "button"
						}), x && x, m && f]
					}))
				},
				Ae = Object(Y.a)((function(e) {
					return {
						content: {
							boxShadow: "none"
						},
						actions: {
							padding: e.spacing(2),
							"& > :not(:last-child)": {
								marginRight: e.spacing(2)
							}
						}
					}
				})),
				Me = function(e) {
					return Object(N.jsx)(h.a, Object(s.a)(Object(s.a)({}, e), {}, {
						variant: "standard",
						children: Object(N.jsx)(V.a, {
							source: "q",
							label: "Search",
							alwaysOn: !0,
							resettable: !0
						})
					}))
				},
				_e = function(e) {
					return Object(N.jsx)(U.a, Object(s.a)(Object(s.a)({}, e), {}, {
						color: "default"
					}))
				},
				Re = Object(Y.a)((function(e) {
					return {
						listCard: {
							paddingBottom: "0px !important"
						},
						card: {
							height: "fit-content",
							minWidth: "1000px"
						},
						cardTitle: {
							paddingBottom: "0px"
						}
					}
				})),
				Fe = function(e) {
					var t = Ae(),
						a = Re(),
						n = e.actionsOverride,
						c = e.cardTitle,
						i = void 0 === c ? e.resource : c,
						o = e.cardSubtitle,
						l = e.createButton,
						d = e.createButtonLabel,
						j = e.createButtonRedirect,
						u = e.createInitialState,
						b = e.customActions,
						p = e.deleteButtonAction,
						O = e.deleteButtonLabel,
						h = e.editButton,
						x = e.editButtonIcon,
						m = void 0 === x ? Object(N.jsx)(Pe, {}) : x,
						f = e.editButtonLabel,
						v = e.editButtonRedirect,
						g = e.expand,
						y = e.filtersOverride,
						C = e.hideCardTitle,
						w = void 0 === C || C,
						I = e.layout,
						k = void 0 === I ? Object(N.jsx)(we, {}) : I,
						S = e.rowClick,
						P = void 0 === S ? e.rowClick || e.hasShow ? "show" : "" : S,
						T = e.showCreate,
						B = void 0 === T ? e.hasCreate : T,
						L = e.showDelete,
						A = e.showEdit,
						M = {
							actionsOverride: n,
							cardSubtitle: o,
							cardTitle: i,
							createButton: l,
							createButtonLabel: d,
							createButtonRedirect: j,
							createInitialState: u,
							customActions: b,
							deleteButtonAction: p,
							deleteButtonLabel: O,
							editButton: h,
							editButtonIcon: m,
							editButtonLabel: f,
							editButtonRedirect: v,
							expand: g,
							filtersOverride: y,
							hideCardTitle: w,
							rowClick: P,
							showCreate: B,
							showDelete: L,
							showEdit: void 0 === A ? e.hasEdit : A
						};
					return Object(N.jsx)(Be.Provider, {
						value: M,
						children: Object(N.jsxs)(K.a, {
							className: a.card,
							children: [!w && Object(N.jsx)(Q.a, {
								className: a.cardTitle,
								title: $.a.humanize(i),
								titleTypographyProps: {
									variant: "h6"
								},
								subheader: o,
								subheaderTypographyProps: {
									variant: "subtitle2"
								}
							}), Object(N.jsx)(J.a, {
								className: a.listCard,
								children: Object(N.jsx)(q.a, Object(s.a)(Object(s.a)({}, e), {}, {
									actions: n || Object(N.jsx)(Le, {
										className: t.actions
									}),
									bulkActionButtons: !1,
									classes: t,
									filters: y || Object(N.jsx)(Me, {}),
									pagination: Object(N.jsx)(Z.a, {
										rowsPerPageOptions: [5, 10, 25],
										actions: _e
									}),
									perPage: 10,
									children: r.a.cloneElement(k, {
										children: e.children
									})
								}))
							})]
						})
					})
				},
				De = function(e) {
					return Object(N.jsxs)(h.a, Object(s.a)(Object(s.a)({}, e), {}, {
						variant: "standard",
						children: [Object(N.jsx)(x.a, {
							source: "email",
							alwaysOn: !0
						}), Object(N.jsx)(m.a, {
							source: "disabled"
						}), Object(N.jsx)(f.a, {
							source: "scope",
							choices: D
						})]
					}))
				},
				ze = function(e) {
					return Object(N.jsxs)(Fe, Object(s.a)(Object(s.a)({}, e), {}, {
						filtersOverride: Object(N.jsx)(De, {}),
						perPage: 25,
						children: [Object(N.jsx)(R, {}), Object(N.jsx)(v.a, {
							source: "scope",
							choices: D
						}), Object(N.jsx)(g.a, {
							source: "last_login",
							showTime: !0
						}), Object(N.jsx)(y.a, {
							source: "disabled"
						})]
					}))
				},
				Ee = a(1385),
				He = a(750),
				We = a(372),
				Ve = a(751),
				Ue = a(1384),
				qe = Object(w.a)({
					root: {
						alignItems: "flex-start",
						minWidth: "800px"
					},
					email: {
						width: 400
					},
					scope: {
						width: 400
					}
				}),
				Ze = function(e) {
					var t = qe();
					return Object(N.jsx)(Ee.a, Object(s.a)(Object(s.a)({
						classes: t
					}, e), {}, {
						children: Object(N.jsxs)(He.a, {
							redirect: "list",
							children: [Object(N.jsx)(V.a, {
								autoFocus: !0,
								type: "email",
								source: "email",
								validation: {
									email: !0
								},
								fullWidth: !0,
								formClassName: t.email,
								validate: [Object(We.h)(), Object(We.c)()]
							}), Object(N.jsx)(f.a, {
								source: "scope",
								formClassName: t.scope,
								choices: D,
								validate: [Object(We.h)()]
							}), Object(N.jsx)(Ve.a, {
								label: "Partner",
								source: "partnerId",
								reference: "partners",
								children: Object(N.jsx)(Ue.a, {
									allowEmpty: !0,
									optionText: "name"
								})
							}), Object(N.jsx)(m.a, {
								source: "disabled"
							})]
						})
					}))
				},
				Ke = a(279),
				Qe = a(1362),
				Je = function(e) {
					var t = e.record;
					return t ? Object(N.jsx)(A, {
						record: t,
						size: "32"
					}) : null
				},
				Ye = Object(w.a)({
					root: {
						alignItems: "flex-start",
						minWidth: "800px"
					},
					email: {
						width: 256
					}
				}),
				Ge = function(e) {
					return Object(N.jsx)(N.Fragment, {
						children: Object(N.jsxs)(He.a, Object(s.a)(Object(s.a)({}, e), {}, {
							style: {
								marginBottom: "2em"
							},
							children: [Object(N.jsx)(Ke.a, {
								source: "id"
							}), Object(N.jsx)(f.a, {
								source: "scope",
								choices: D,
								validate: [Object(We.h)()]
							}), Object(N.jsx)(Ve.a, {
								label: "Partner",
								source: "partnerId",
								reference: "partners",
								children: Object(N.jsx)(Ue.a, {
									source: "partnerId",
									optionText: "name"
								})
							}), Object(N.jsx)(m.a, {
								source: "disabled"
							})]
						}))
					})
				},
				$e = {
					list: ze,
					create: Ze,
					edit: function(e) {
						var t = Ye();
						return Object(N.jsx)(Qe.a, Object(s.a)(Object(s.a)({
							title: Object(N.jsx)(Je, {}),
							classes: t
						}, e), {}, {
							children: Object(N.jsx)(Ge, Object(s.a)({}, e))
						}))
					},
					icon: O.a
				},
				Xe = (a(1120), a(714)),
				et = a.n(Xe),
				tt = a(1397),
				at = function(e) {
					var t = e.source,
						a = e.record,
						n = (void 0 === a ? {} : a)[t];
					return Object(N.jsx)(tt.a, {
						precision: .5,
						value: n,
						size: "small",
						readOnly: !0
					})
				},
				nt = ["record", "showTime"],
				rt = function(e) {
					var t = e.record,
						a = e.showTime,
						n = void 0 === a || a,
						r = Object(z.a)(e, nt);
					delete r.textAlign;
					var c = {
						year: "numeric",
						month: "long",
						day: "numeric"
					};
					return n && (c = Object(s.a)(Object(s.a)({}, c), {}, {
						hour: "numeric",
						minute: "2-digit"
					})), Object(N.jsx)(g.a, Object(s.a)({
						record: t,
						options: c
					}, r))
				},
				ct = "https://storeapi.overwolf.com/asset/",
				it = ("".concat(ct, "tile-image/"), "".concat(ct, "logo-image/")),
				st = function(e) {
					var t = e.record;
					return Object(N.jsx)("img", {
						src: "".concat(it).concat(t.id),
						width: "30px",
						alt: t.name
					})
				},
				ot = function(e) {
					return Object(N.jsxs)(Fe, Object(s.a)(Object(s.a)({}, e), {}, {
						perPage: 5,
						rowClick: function(e) {
							return "/applications/".concat(e, "/summary-dashboard")
						},
						children: [Object(N.jsx)(st, {}), Object(N.jsx)(Ke.a, {
							source: "name"
						}), Object(N.jsx)(at, {
							source: "rating"
						}), Object(N.jsx)(rt, {
							label: "Last Updated",
							source: "updated"
						})]
					}))
				},
				lt = a(476),
				dt = function(e) {
					var t = e.record,
						a = e.page,
						n = "".concat(it).concat(t.id);
					return Object(N.jsxs)("div", {
						style: {
							display: "flex",
							flexWrap: "nowrap",
							alignItems: "center",
							gap: 6
						},
						children: [Object(N.jsx)("img", {
							src: n,
							style: {
								width: 32,
								height: 32
							},
							alt: ""
						}), "\xa0", "".concat(t.name || t.app.name).concat(a ? ": ".concat(
							a) : "")]
					})
				},
				jt = a(1394),
				ut = a(706),
				bt = a(1393),
				pt = a(1369),
				Ot = a(1370),
				ht = a(106),
				xt = a.n(ht),
				mt = a(15),
				ft = a.n(mt),
				vt = a(226),
				gt = a.n(vt),
				yt = ["className", "source", "record", "prefix"],
				Ct = k()((function(e) {
					var t = e.className,
						a = void 0 === t ? "" : t,
						n = e.source,
						r = e.record,
						c = void 0 === r ? {} : r,
						i = e.prefix,
						s = void 0 === i ? "" : i;
					Object(z.a)(e, yt);
					return Object(N.jsx)("a", {
						className: a,
						href: s + ft()(c, n),
						rel: "noopener noreferrer",
						children: Object(N.jsx)(gt.a, {})
					})
				}));
			Ct.defaultProps = {
				addLabel: !1
			};
			var wt, It = Ct;
			! function(e) {
				e.Error = "error", e.Uploaded = "uploaded", e.Signing = "signing", e.Signed =
					"signed", e.Diffing = "diffing", e.Diffed = "diffed", e.Draft = "draft",
					e.Beta = "beta", e.Publishing = "publishing", e.Phasing = "phasing", e.Public =
					"public", e.History = "history"
			}(wt || (wt = {}));
			var kt = function(e) {
					var t = e.source,
						a = e.record,
						n = function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] :
								2;
							if (null === e) return "";
							if (0 === e) return "0 Bytes";
							var a = 1024,
								n = t < 0 ? 0 : t,
								r = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
								c = Math.floor(Math.log(e) / Math.log(a));
							return parseFloat((e / Math.pow(a, c)).toFixed(n)) + " " + r[c]
						}((void 0 === a ? {} : a)[t]);
					return Object(N.jsx)("span", {
						children: n
					})
				},
				St = function(e) {
					return Object(N.jsx)(ne.a, {
						style: {
							fontWeight: "bold"
						},
						children: e.title
					})
				},
				Nt = a(203),
				Pt = a(93),
				Tt = a.n(Pt),
				Bt = a(235),
				Lt = a(761),
				At = a(477),
				Mt = function(e) {
					return Object(N.jsx)(le.a, {
						viewBox: "0 0 32 32",
						children: Object(N.jsx)("path", {
							d: "M17.5941 15.0254L21.6535 10.8629C21.8515 10.6599 21.8515 10.3553 21.6535 10.1523C21.4554 9.94924 21.1584 9.94924 20.9604 10.1523L16.901 14.3147L12.8416 10.1523C12.6436 9.94924 12.3465 9.94924 12.1485 10.1523C11.9505 10.3553 11.9505 10.6599 12.1485 10.8629L16.2079 15.0254L12.1485 19.1878C11.9505 19.3909 11.9505 19.6954 12.1485 19.8985C12.2475 20 12.3465 20 12.5446 20C12.7426 20 12.8416 20 12.9406 19.8985L17 15.736L21.0594 19.8985C21.1584 20 21.2574 20 21.4554 20C21.6535 20 21.7525 20 21.8515 19.8985C22.0495 19.6954 22.0495 19.3909 21.8515 19.1878L17.5941 15.0254Z"
						})
					})
				},
				_t = a(36),
				Rt = a.n(_t),
				Ft = a(58),
				Dt = a(57),
				zt = a(24),
				Et = a(146),
				Ht = a.n(Et),
				Wt = (a(457), a(385)),
				Vt = new Wt.Converter({
					tables: !0,
					simplifiedAutoLink: !0,
					strikethrough: !0,
					tasklists: !0,
					underline: !1
				}),
				Ut = function(e, t) {
					if (e) {
						var a;
						if (e = (e = (e = e.replace(
								/.*(!\[(.*)\]\((new|improved|bugs|coming-soon)?\)).*/g,
								"<h2 class='$3'>$2</h2>")).replace(/.*(!\[(.*)\]\(img\)).*/g,
								"<figure><img src='$2'></figure>")).replace(
								/.*(!\[(.*)\]\(vid\)).*/g,
								"<figure><video src='$2' autoplay loop></figure>"), e = Vt.makeHtml(
								e), t) {
							a = t.replace(/([\w\d\.-_>& \[\]=^$~+#\*,|:\(\)]+)(?={)/g,
								".release-notes-content $&")
						}
						return e = "<style>".concat(a,
							'</style><div class="release-notes-content">').concat(e, "</div>")
					}
				},
				qt = Object(Y.a)({
					reactMde: {
						width: "100%",
						backgroundColor: "#262626",
						"& .mde-preview .mde-preview-content": {
							"& h1, h2, h3, h4, h5, h6": {
								border: "none"
							}
						}
					},
					grip: {
						display: "none"
					}
				}),
				Zt = Object(Y.a)((function(e) {
					return {
						error: {
							"&>span": {
								color: e.palette.error.main
							},
							"&>.react-mde": {
								borderWidth: "1px",
								borderStyle: "solid",
								borderColor: e.palette.error.main
							}
						}
					}
				})),
				Kt = function(e) {
					var t = e.classes,
						a = e.onChange,
						r = e.source,
						c = e.validate,
						i = (e.label, e.customCommands),
						o = e.customToolbarCommands,
						l = e.customCss,
						j = Object(Dt.a)(),
						u = Zt(j),
						b = qt(),
						p = t || b,
						O = Object(d.a)(),
						h = Object(Et.getDefaultCommandMap)(),
						x = Object(Et.getDefaultToolbarCommands)();
					o && x.push(o);
					var m = Object(zt.d)(r, {
							validate: c || void 0
						}).input,
						f = Object(n.useState)(null),
						v = Object(je.a)(f, 2),
						g = v[0],
						y = v[1],
						C = Object(n.useState)(),
						w = Object(je.a)(C, 2),
						I = w[0],
						k = w[1],
						S = Object(n.useCallback)(function() {
							var e = Object(Ft.a)(Rt.a.mark((function e(t) {
								return Rt.a.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return t = Ut(t, l), e.abrupt("return", Promise.resolve(
												t));
										case 2:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(), [l]);
					return Object(N.jsxs)("span", {
						className: g ? u.error : "",
						style: {
							width: "100%"
						},
						children: [Object(N.jsx)(Ht.a, {
							classes: p,
							onChange: function(e) {
								if (c) {
									var t = c(e, {});
									y(t || null)
								}
								a && a(e), m.onChange(e)
							},
							onTabChange: function(e) {
								return k(e)
							},
							commands: i ? Object(s.a)(Object(s.a)({}, h), i) : h,
							toolbarCommands: x,
							generateMarkdownPreview: S,
							selectedTab: I,
							value: m.value
						}), g && Object(N.jsx)("span", {
							children: O(g)
						})]
					})
				},
				Qt = a(282),
				Jt = a(404),
				Yt = a(1364),
				Gt = function(e) {
					var t = e.version,
						a = void 0 === t ? {} : t,
						r = e.cellClassName,
						c = Object(n.useState)(!1),
						i = Object(je.a)(c, 2),
						s = i[0],
						o = i[1],
						l = Object(d.a)(),
						j = Object(Bt.a)(),
						u = Object(Lt.a)(),
						b = {};
					a.currentPhase.is_halted ? (b.title =
						"resources.versions.rollout.resumeConfirm.title", b.question =
						"resources.versions.rollout.resumeConfirm.question", b.button = l(
							"resources.versions.fields.resume"), b.success =
						"resources.versions.rollout.resume_success", b.failure =
						"resources.versions.rollout.resume_failure") : (b.title =
						"resources.versions.rollout.haltConfirm.title", b.question =
						"resources.versions.rollout.haltConfirm.question", b.button = l(
							"resources.versions.fields.halt"), b.success =
						"resources.versions.rollout.halt_success", b.failure =
						"resources.versions.rollout.halt_failure");
					var p = Object(At.a)("phasing/".concat(a.currentPhase.is_halted ?
							"resume" : "halt"), a.id, {
							appId: a.application_id,
							version: a.version
						}, a, {
							undoable: !1,
							onSuccess: function() {
								j(b.success, "info"), u()
							},
							onFailure: function() {
								j(b.failure, "warning")
							}
						}),
						O = Object(je.a)(p, 2),
						h = O[0],
						x = O[1].loading;
					return Object(N.jsxs)(N.Fragment, {
						children: [Object(N.jsx)(ge, {
							title: b.title,
							question: b.question,
							onApprove: function() {
								o(!1), h()
							},
							onCancel: function() {
								o(!1)
							},
							showDialog: s
						}), Object(N.jsx)(te.a, {
							className: r,
							color: "primary",
							variant: "contained",
							onClick: function() {
								return o(!0)
							},
							disabled: x,
							children: Object(N.jsx)(N.Fragment, {
								children: b.button
							})
						})]
					})
				},
				$t = function(e) {
					var t = e.disabled,
						a = void 0 !== t && t,
						r = e.version,
						c = void 0 === r ? {} : r,
						i = e.isDraft,
						s = e.percent,
						o = e.channelId,
						l = Object(n.useState)(!1),
						j = Object(je.a)(l, 2),
						u = j[0],
						b = j[1],
						p = Object(d.a)(),
						O = Object(Bt.a)(),
						h = Object(Lt.a)(),
						x = {};
					i ? (x.success = "resources.versions.draft.publish_success", x.title =
						"resources.versions.draft.publishConfirm.title", x.question =
						"resources.versions.draft.publishConfirm.question", x.button = o ?
						"resources.versions.rollout.start_rollout_test" :
						"resources.versions.rollout.start_rollout") : (x.success =
						"resources.versions.rollout.increase_rollout_success", x.title =
						"resources.versions.rollout.increaseRolloutConfirm.title", x.question =
						"resources.versions.rollout.increaseRolloutConfirm.question", x.button =
						"resources.versions.rollout.increase_rollout");
					var m = Object(At.a)("versions/publish", c.id, {
							percent: s,
							appId: c.application_id
						}, c, {
							undoable: !1,
							onSuccess: function() {
								O(x.success, "info"), h()
							},
							onFailure: function(e) {
								O(e.body.message, "warning")
							}
						}),
						f = Object(je.a)(m, 2),
						v = f[0],
						g = f[1].loading;
					return Object(N.jsxs)(N.Fragment, {
						children: [Object(N.jsx)(ge, {
							title: x.title,
							question: x.question,
							onApprove: function() {
								b(!1), v()
							},
							onCancel: function() {
								b(!1)
							},
							showDialog: u
						}), Object(N.jsx)(Nt.a, {
							id: "publish",
							color: "primary",
							variant: "contained",
							onClick: function() {
								return b(!0)
							},
							disabled: a || g,
							size: "small",
							children: Object(N.jsx)(N.Fragment, {
								children: p(x.button)
							})
						})]
					})
				},
				Xt = function(e) {
					var t = Object(Yt.a)().permissions,
						a = Object(n.useState)(""),
						r = Object(je.a)(a, 2),
						c = r[0],
						i = r[1],
						o = e.isDraft,
						l = e.version,
						j = Object(ee.j)().channelId,
						u = Object(d.a)(),
						b = Object(w.a)((function(e) {
							return {
								setRollout: {
									fontSize: "11pt",
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between"
								},
								setRolloutDisabled: {
									color: "grey"
								},
								percentage: {
									width: "7.5em",
									fontWeight: "bold",
									"& input": {
										fontSize: "large"
									},
									"& .MuiInputBase-root": {
										backgroundColor: e.palette.grey[300]
									}
								},
								buttonArea: {
									width: "auto",
									display: "flex",
									marginTop: "2em"
								},
								removeButton: {
									marginRight: "1em"
								}
							}
						}))(),
						p = function() {
							return !(t >= 6 || j) && ((null === l || void 0 === l ? void 0 : l.workflowRequest) ?
								"approved" !== (null === l || void 0 === l || null === (e = l.workflowRequest) ||
									void 0 === e ? void 0 : e.status) : null === l || void 0 === l ?
								void 0 : l.qaWorkflowEnabled);
							var e
						};
					return Object(N.jsxs)("div", {
						className: "".concat(o && b.setRollout, " ").concat(p() ? b.setRolloutDisabled :
							""),
						children: [Object(N.jsxs)("div", {
							children: [Object(N.jsx)("h4", {
								children: u("resources.versions.rollout.title")
							}), Object(N.jsx)("p", {
								children: u("resources.versions.rollout.specify_rollout")
							})]
						}), Object(N.jsxs)("form", {
							children: [Object(N.jsx)("div", {
								style: {
									width: "100%",
									textAlign: "center"
								},
								children: Object(N.jsx)("p", {
									style: {
										textAlign: o ? "center" : "left"
									},
									children: Object(N.jsx)(Qt.a, {
										disabled: p(),
										className: b.percentage,
										color: "primary",
										value: c,
										onChange: function(e) {
											return i(e.target.value)
										},
										variant: "outlined",
										InputProps: {
											endAdornment: Object(N.jsx)(Jt.a, {
												position: "end",
												children: "%"
											})
										}
									})
								})
							}), Object(N.jsxs)("div", {
								className: b.buttonArea,
								style: {
									justifyContent: o ? "space-evenly" : "flex-end",
									width: o ? "100%" : ""
								},
								children: [!o && Object(N.jsx)(Gt, Object(s.a)(Object(s.a)({},
									e), {}, {
									cellClassName: b.removeButton
								}), "halt"), Object(N.jsx)($t, Object(s.a)(Object(s.a)({},
									e), {}, {
									percent: c,
									disabled: p(),
									channelId: j
								}))]
							})]
						})]
					})
				},
				ea = a(1358),
				ta = a(1359),
				aa = a(11),
				na = a(230),
				ra = a.n(na),
				ca = a(1299),
				ia = a(99),
				sa = a.n(ia),
				oa = (Object(Y.a)((function(e) {
					return {
						inputLabelBox: {
							color: e.palette.text.secondary,
							fontFamily: "'Helvetica', sans-serif",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center"
						}
					}
				})), Object(Y.a)((function(e) {
					return {
						previewBox: {
							height: "100%",
							width: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							position: "relative"
						},
						previewImage: {
							height: "100%"
						},
						previewUploadingImage: {
							position: "absolute",
							height: "100%",
							width: "100%",
							opacity: .3,
							backgroundSize: "contain",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center"
						},
						removeButton: {
							position: "absolute",
							top: "0.2em",
							right: "0.2em",
							cursor: "pointer",
							borderRadius: "100%",
							color: e.palette.text.secondary,
							backgroundColor: e.palette.grey[50],
							opacity: .5,
							"&:hover": {
								opacity: .75
							}
						}
					}
				})), Object(Y.a)((function(e) {
					return {
						dropzone: {
							width: "7em",
							height: "7em",
							position: "relative",
							transition: "all .15s linear",
							border: "2px solid ".concat(e.palette.divider),
							backgroundColor: e.palette.background.default
						},
						dropzoneActive: {
							backgroundColor: e.palette.primary.light
						},
						dropzoneReject: {
							backgroundColor: e.palette.error.main
						}
					}
				})), Object(Y.a)({
					reactMde: {
						width: "100%"
					},
					grip: {
						display: "none"
					}
				}), a(705)),
				la = a.n(oa),
				da = function(e) {
					var t = e.source,
						a = e.onValidate,
						n = Object(zt.d)(t).input;
					return Object(N.jsx)(N.Fragment, {
						children: Object(N.jsx)(la.a, Object(s.a)(Object(s.a)({}, e), {}, {
							value: n.value || [],
							onAdd: function(e) {
								var t = e;
								if (!a || (t = a(e))) {
									var r = n.value || [];
									(r = r.slice()).includes(t) || (r.push(t), n.onChange(r))
								}
							},
							onDelete: function(e) {
								var t = n.value || [];
								t = t.filter((function(t) {
									return t !== e
								})), n.onChange(t)
							},
							onBlur: function() {
								return n.onBlur()
							}
						}))
					})
				},
				ja = (a(632), Object(Y.a)((function(e) {
					return {
						previewBox: {
							display: "inline-flex",
							justifyContent: "center",
							alignItems: "center",
							position: "relative",
							border: "2px solid ".concat(e.palette.divider)
						},
						previewInnerBox: {
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: e.palette.background.default
						},
						previewImage: {
							height: "100%",
							maxHeight: "100%",
							maxWidth: "100%"
						},
						removeButton: {
							position: "absolute",
							top: "0.2em",
							right: "0.2em",
							cursor: "pointer",
							borderRadius: "100%",
							color: e.palette.text.secondary,
							backgroundColor: e.palette.grey[50],
							opacity: .5,
							"&:hover": {
								opacity: .75
							}
						}
					}
				}))),
				ua = function(e) {
					var t = e.url,
						a = e.width,
						n = e.height,
						r = e.imageHeight,
						c = e.onRemoved,
						i = Object(Dt.a)(),
						s = ja(i);
					return Object(N.jsx)("div", {
						className: s.previewBox,
						children: Object(N.jsxs)("div", {
							className: s.previewInnerBox,
							style: {
								width: a,
								height: n
							},
							children: [Object(N.jsx)("img", {
								className: s.previewImage,
								alt: "preview",
								src: t,
								style: {
									height: r || "inherit"
								}
							}), Object(N.jsx)(sa.a, {
								onClick: c,
								className: s.removeButton
							})]
						})
					})
				},
				ba = Object(Y.a)((function(e) {
					return {
						previewBox: {
							display: "inline-flex",
							justifyContent: "center",
							alignItems: "center",
							position: "relative",
							border: "2px solid ".concat(e.palette.divider)
						},
						removeButton: {
							position: "absolute",
							top: "0.2em",
							right: "0.2em",
							cursor: "pointer",
							borderRadius: "100%",
							color: e.palette.text.secondary,
							backgroundColor: e.palette.grey[50],
							opacity: .5,
							"&:hover": {
								opacity: .75
							}
						}
					}
				})),
				pa = function(e) {
					var t = e.url,
						a = e.width,
						n = (e.imageWidth, e.height),
						r = e.disabled,
						c = e.backgroundSize,
						i = e.onRemoved,
						s = null !== r && void 0 !== r && r,
						o = Object(Dt.a)(),
						l = ba(o);
					return Object(N.jsx)("div", {
						className: l.previewBox,
						style: {
							backgroundImage: "url(".concat(t, ")"),
							height: n,
							width: a,
							backgroundSize: c || "cover",
							padding: "0 0.5em 0.5em 0"
						},
						children: Object(N.jsx)(ae.a, {
							disabled: s,
							onClick: i,
							className: l.removeButton,
							size: "small",
							children: Object(N.jsx)(sa.a, {})
						})
					})
				},
				Oa = ":uploading:",
				ha = Object(Y.a)((function(e) {
					return {
						inputLabelBox: {
							color: e.palette.text.secondary,
							fontFamily: "'Helvetica', sans-serif",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center"
						}
					}
				})),
				xa = function(e) {
					var t = Object(Dt.a)(),
						a = ha(t);
					return Object(N.jsxs)("div", {
						className: a.inputLabelBox,
						children: [Object(N.jsx)(ke.a, {}), Object(N.jsx)(ne.a, {
							variant: "subtitle2",
							children: "Drop image here"
						})]
					})
				},
				ma = Object(Y.a)((function(e) {
					return {
						previewBox: {
							height: "100%",
							width: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							position: "relative"
						},
						previewImage: {
							height: "100%"
						},
						previewUploadingImageBox: {
							position: "absolute",
							height: "100%",
							width: "100%"
						},
						previewUploadingImage: {
							opacity: .3,
							maxHeight: "100%",
							maxWidth: "100%"
						},
						removeButton: {
							position: "absolute",
							top: "0.2em",
							right: "0.2em",
							cursor: "pointer",
							borderRadius: "100%",
							color: e.palette.text.secondary,
							backgroundColor: e.palette.grey[50],
							opacity: .5,
							"&:hover": {
								opacity: .75
							}
						}
					}
				})),
				fa = function(e) {
					var t, a = e.fileWithMeta,
						n = a.meta,
						r = n.previewUrl,
						c = n.status,
						i = a.remove,
						s = Object(Dt.a)(),
						o = ma(s);
					if ("done" !== c && "error_upload" !== c) t = Object(N.jsxs)(N.Fragment, {
						children: [Object(N.jsx)(ca.a, {
							color: "secondary",
							style: {
								position: "absolute"
							}
						}), r && Object(N.jsx)("img", {
							src: r,
							alt: "preview",
							className: o.previewUploadingImage
						})]
					});
					else if ("done" !== c) return i(), null;
					return Object(N.jsx)("div", {
						className: o.previewBox,
						style: {
							padding: "0 0.5em 0.5em 0"
						},
						children: t
					})
				},
				va = Object(Y.a)((function(e) {
					return {
						dropzone: {
							width: "7em",
							height: "7em",
							position: "relative",
							transition: "all .15s linear",
							border: "2px solid ".concat(e.palette.divider),
							backgroundColor: e.palette.background.default
						},
						dropzoneActive: {
							backgroundColor: e.palette.primary.light
						},
						dropzoneReject: {
							backgroundColor: e.palette.error.main
						}
					}
				})),
				ga = Object(Y.a)((function(e) {
					return {
						helperText: {
							position: "relative",
							whiteSpace: "pre-line",
							textAlign: "left",
							marginLeft: "0.3em",
							marginBottom: "0.2em",
							fontSize: "11px",
							color: e.palette.text.secondary
						}
					}
				})),
				ya = function(e) {
					var t = e.accept,
						a = void 0 === t ? "image/*" : t,
						n = e.maxSizeBytes,
						r = e.classNames,
						c = e.index,
						i = e.width,
						o = e.height,
						l = e.disabled,
						d = e.getUploadParams,
						j = e.onRemoved,
						u = void 0 === j ? function() {} : j,
						b = e.onError,
						p = void 0 === b ? function() {} : b,
						O = e.inputContent,
						h = e.PreviewComponent,
						x = e.previewHeight,
						m = e.backgroundSize,
						f = e.source,
						v = e.validate,
						g = e.sequence,
						y = void 0 !== g && g,
						C = e.imageWidth,
						w = void 0 === C ? 0 : C,
						I = e.helperText,
						k = e.helperTextTypographyProps,
						S = e.assetTypeIndicate,
						P = {
							dropzone: {
								width: i,
								height: o
							}
						},
						T = Object(Dt.a)(),
						B = va(T),
						L = ga(T),
						A = r || B,
						M = O || Object(N.jsx)(xa, {}),
						_ = h || fa,
						R = Object(zt.f)(),
						F = "",
						D = f.replace("url", "width");
					if (S && R.values[D]) {
						var z = R.values[D];
						z && (F = function(e) {
							switch (e) {
								case "1650":
								case "2250":
									return "Animation";
								case "150":
									return "Static image";
								default:
									return ""
							}
						}(z.toString()))
					}
					var E = Object(zt.d)(f, {
						validate: v || void 0
					}).input;
					return E.value.length > 0 && E.value !== Oa ? y ? Object(N.jsxs)("div", {
						children: [S && Object(N.jsx)(ne.a, {
							className: L.helperText,
							children: F
						}), Object(N.jsx)(pa, {
							url: E.value,
							disabled: l,
							width: i,
							height: o,
							imageWidth: w,
							backgroundSize: m,
							onRemoved: function(e) {
								function t() {
									return e.apply(this, arguments)
								}
								return t.toString = function() {
									return e.toString()
								}, t
							}((function() {
								var e = E.value;
								E.onChange(""), u(e, c)
							}))
						}), I && Object(N.jsx)(ne.a, Object(s.a)(Object(s.a)({
							className: L.helperText
						}, k), {}, {
							children: I
						}))]
					}) : Object(N.jsxs)("div", {
						style: {
							padding: "0 0.5em 0.5em 0"
						},
						children: [S && Object(N.jsx)(ne.a, {
							className: L.helperText,
							children: F
						}), Object(N.jsx)(ua, {
							imageHeight: x,
							url: E.value,
							width: i,
							height: o,
							onRemoved: function(e) {
								function t() {
									return e.apply(this, arguments)
								}
								return t.toString = function() {
									return e.toString()
								}, t
							}((function() {
								var e = E.value;
								E.onChange(""), u(e, c)
							}))
						}), I && Object(N.jsx)(ne.a, Object(s.a)(Object(s.a)({
							className: L.helperText
						}, k), {}, {
							children: I
						}))]
					}) : Object(N.jsxs)("div", {
						style: {
							padding: "0 0.5em 0.5em 0"
						},
						children: [Object(N.jsx)(ra.a, {
							onChangeStatus: function(e, t) {
								var r = e.meta,
									c = e.xhr;
								if (c && c.addEventListener("readystatechange", (function() {
										if (4 === c.readyState && c.status >= 400 && c.responseText) {
											var e = JSON.parse(c.responseText).message;
											E.onChange(""), p(e)
										}
									})), r.name)
									if ("done" !== t) {
										switch (E.onChange(Oa), t) {
											case "removed":
												E.onChange("");
												break;
											case "rejected_file_type":
												p('Please upload a valid "'.concat(a, '" file'));
												break;
											case "rejected_max_files":
												p("You can only upload 1 file");
												break;
											case "error_file_size":
												p("File must be smaller than ".concat(n, " bytes!"));
												break;
											case "exception_upload":
												p("An unexpected error has occured")
										}
										S && r.width && (R.values[D] = r.width)
									} else E.onChange(null === c || void 0 === c ? void 0 : c.response)
							},
							classNames: A,
							styles: P,
							disabled: l,
							getUploadParams: d,
							PreviewComponent: _,
							inputContent: M,
							maxFiles: 1,
							maxSizeBytes: n,
							accept: a
						}), I && Object(N.jsx)(ne.a, Object(s.a)(Object(s.a)({
							className: L.helperText
						}, k), {}, {
							children: I
						}))]
					})
				},
				Ca = Object(w.a)((function(e) {
					return {
						modal: {
							width: "auto",
							"& [role=dialog]": {
								minWidth: "700px"
							}
						},
						closeButton: {
							position: "absolute",
							top: 0,
							right: 0,
							minWidth: 32,
							height: 32,
							padding: 0,
							"& svg": {
								height: 32,
								width: 32
							},
							"&:hover": {
								color: "#fff",
								backgroundColor: e.palette.primary.main
							}
						},
						togglesList: {
							width: "fit-content",
							display: "flex",
							flexDirection: "column",
							alignItems: "stretch",
							"&>label": {
								justifyContent: "space-between",
								gap: 12
							}
						}
					}
				})),
				wa = function(e) {
					var t = e.record,
						a = e.modalButton,
						r = e.showPublishToggle,
						c = void 0 !== r && r,
						i = Ca(),
						o = Object(n.useState)(t),
						l = Object(je.a)(o, 2),
						d = l[0],
						j = l[1],
						u = Object(n.useState)(d.releaseNote),
						b = Object(je.a)(u, 2),
						p = b[0],
						O = b[1],
						h = Object(n.useState)(d.releaseNoteCss),
						x = Object(je.a)(h, 2),
						m = x[0],
						f = x[1],
						v = Object(n.useState)(!1),
						g = Object(je.a)(v, 2),
						y = g[0],
						C = g[1],
						w = Object(n.useState)(!1),
						I = Object(je.a)(w, 2),
						k = I[0],
						S = I[1],
						P = Object(n.useState)(null === d || void 0 === d ? void 0 : d.isImportant),
						T = Object(je.a)(P, 2),
						B = T[0],
						L = T[1],
						A = Object(n.useState)(d.releaseNotesPublished),
						M = Object(je.a)(A, 2),
						_ = M[0],
						R = M[1],
						F = Object(aa.g)(),
						D = Object(Bt.a)(),
						z = Object(Lt.a)(),
						E = Object(At.a)(),
						H = Object(je.a)(E, 1)[0],
						W = Object(At.a)("versions/releaseNotesCss", d.id, {
							css: m
						}, d, {
							onSuccess: function(e) {
								var t = e.data;
								D("Changed External Release Notes Css successfully", "info"), F.getState()
									.admin.resources.versions.data[t.id] = t, j(t)
							},
							onFailure: function(e) {
								D(e.message, "warning")
							}
						}),
						U = Object(je.a)(W, 1)[0],
						q = function() {
							L(d.isImportant), O(d.releaseNote), C(!1)
						},
						Z = function() {
							f(d.releaseNoteCss), S(!1)
						};
					return Object(N.jsxs)(N.Fragment, {
						children: [Object(n.cloneElement)(a, {
							onClick: function(e) {
								e.preventDefault(), C(!0)
							}
						}), Object(N.jsxs)(ue.a, {
							className: i.modal,
							open: y,
							onClose: q,
							children: [Object(N.jsx)(Nt.a, {
								className: i.closeButton,
								onClick: q,
								children: Object(N.jsx)(Mt, {})
							}), Object(N.jsxs)(He.a, Object(s.a)(Object(s.a)({}, e), {}, {
								className: i.modal,
								record: d,
								variant: "standard",
								toolbar: Object(N.jsx)(N.Fragment, {}),
								children: [Object(N.jsx)(be.a, {
									className: i.modal,
									children: "Edit release notes"
								}), Object(N.jsxs)(pe.a, {
									className: i.modal,
									children: [Object(N.jsxs)("div", {
										className: i.togglesList,
										children: [Object(N.jsx)(ea.a, {
											label: "Important",
											labelPlacement: "start",
											style: {
												marginBottom: "2em"
											},
											control: Object(N.jsx)(ta.a, {
												color: "primary",
												checked: B,
												onChange: function(e, t) {
													L(t)
												}
											})
										}), c && Object(N.jsx)(ea.a, {
											label: "Publish",
											labelPlacement: "start",
											style: {
												marginBottom: "2em"
											},
											control: Object(N.jsx)(ta.a, {
												color: "primary",
												checked: _,
												onChange: function(e, t) {
													R(t)
												}
											})
										})]
									}), Object(N.jsx)(Kt, {
										source: "releaseNote",
										label: "Release notes",
										onChange: function(e) {
											return O(e)
										},
										customCss: m,
										customCommands: {
											css: {
												icon: function() {
													return Object(N.jsx)("span", {
														children: "CSS"
													})
												},
												execute: function() {
													S(!0)
												}
											}
										},
										customToolbarCommands: ["css"]
									})]
								}), Object(N.jsxs)(he.a, {
									className: i.modal,
									children: [Object(N.jsx)(Nt.a, {
										size: "large",
										onClick: q,
										children: "cancel"
									}), Object(N.jsx)(Nt.a, {
										size: "large",
										variant: "contained",
										color: "primary",
										onClick: function() {
											H("versions", "externalReleaseNotes/".concat(d.id), {
												isImportant: B,
												releaseNote: p,
												shouldPublish: _
											}, d, {
												onSuccess: function(e) {
													var t = e.data;
													D(
														"Changed External Release Notes successfully",
														"info"), z(), j(t)
												},
												onFailure: function(e) {
													D(e.message, "warning"), z()
												}
											}), C(!1)
										},
										children: "Save"
									})]
								})]
							}))]
						}), Object(N.jsxs)(ue.a, {
							className: i.modal,
							open: k,
							onClose: Z,
							children: [Object(N.jsx)(Nt.a, {
								className: i.closeButton,
								onClick: Z,
								children: Object(N.jsx)(Mt, {})
							}), Object(N.jsxs)(He.a, Object(s.a)(Object(s.a)({}, e), {}, {
								className: i.modal,
								record: d,
								variant: "standard",
								toolbar: Object(N.jsx)(N.Fragment, {}),
								children: [Object(N.jsx)(be.a, {
									className: i.modal,
									children: "Edit preview css"
								}), Object(N.jsx)(pe.a, {
									className: i.modal,
									children: Object(N.jsx)(V.a, {
										style: {
											width: "100%"
										},
										multiline: !0,
										rows: 10,
										placeholder: ".some-class {\n  background-color: red;\n}",
										source: "releaseNoteCss",
										onChange: function(e) {
											return f(e.target.value)
										}
									})
								}), Object(N.jsxs)(he.a, {
									className: i.modal,
									children: [Object(N.jsx)(Nt.a, {
										size: "large",
										onClick: Z,
										children: "cancel"
									}), Object(N.jsx)(Nt.a, {
										size: "large",
										variant: "contained",
										color: "primary",
										onClick: function() {
											U(), S(!1)
										},
										children: "save"
									})]
								})]
							}))]
						})]
					})
				},
				Ia = function(e) {
					var t = e.date,
						a = e.percent,
						n = e.isHalted,
						c = Object(d.a)(),
						i = new Date(t).toLocaleString();
					return Object(N.jsxs)(r.a.Fragment, {
						children: [Object(N.jsxs)("span", {
							children: [i, ": ", a, "%"]
						}), n && Object(N.jsxs)("span", {
							children: ["\xa0", c("resources.versions.rollout.halted")]
						})]
					})
				},
				ka = Object(w.a)((function(e) {
					return {
						modal: {
							width: "auto",
							"& [role=dialog]": {
								minWidth: "700px"
							}
						},
						expandedVersionRowTitle: {
							fontWeight: "bold",
							marginTop: 16,
							marginBottom: 20
						},
						expandedVersionRowLinks: {
							display: "flex",
							flexDirection: "column",
							lineHeight: 2,
							marginBottom: 32
						},
						expandedVersionRolloutHistory: {
							marginBottom: 48,
							"&>p": {
								margin: 0
							}
						},
						closeButton: {
							position: "absolute",
							top: 0,
							right: 0,
							minWidth: 32,
							height: 32,
							padding: 0,
							"& svg": {
								height: 32,
								width: 32
							},
							"&:hover": {
								color: "#fff",
								backgroundColor: e.palette.primary.main
							}
						}
					}
				})),
				Sa = ["cchhcaiapeikjbdbpfplgmpobbcdkdaphclbmkbj",
					"cghphpbjeabdkomiphingnegihoigeggcfphdofo",
					"npijmgiaiiemcnijaljcfddgeihcbifdbhpffihe",
					"efkgmolhjcfeajfainncogimecoajaepbpobacpb"
				],
				Na = function(e) {
					var t, a = ka(),
						r = e.record,
						c = Object(n.useState)(r.creationNote),
						i = Object(je.a)(c, 2),
						s = i[0],
						o = i[1],
						l = Object(n.useState)(!1),
						j = Object(je.a)(l, 2),
						u = j[0],
						b = j[1],
						p = (null === r || void 0 === r ? void 0 : r.phasing) || [],
						O = Object(d.a)(),
						h = Object(Bt.a)(),
						x = Object(Lt.a)(),
						m = Object(ee.j)(),
						f = m.appId,
						v = m.channelId,
						g = Sa.includes(f) && !v,
						y = Object(At.a)("versions/releaseNotes", r.id, {
							note: s
						}, r, {
							onSuccess: function() {
								h("Changed Release Notes successfully", "info"), x()
							},
							onFailure: function(e) {
								h(e.message, "warning"), x()
							}
						}),
						C = Object(je.a)(y, 1)[0],
						w = function() {
							o(r.creationNote), b(!1)
						};
					if (0 === p.length) return Object(N.jsx)("span", {
						children: O("resources.versions.rollout.no_history")
					});
					var I = Tt.a.chain(p).orderBy("percent", "desc").value();
					return Object(N.jsxs)(N.Fragment, {
						children: [Object(N.jsxs)("p", {
								className: a.expandedVersionRowTitle,
								children: ["Release ", r.version]
							}), Object(N.jsxs)("p", {
								className: a.expandedVersionRowLinks,
								children: [Object(N.jsx)("a", {
									href: "/#",
									onClick: function(e) {
										e.preventDefault(), b(!0)
									},
									children: "Internal release notes"
								}), g && Object(N.jsx)(wa, {
									showPublishToggle: !0,
									record: r,
									modalButton: Object(N.jsx)("a", {
										href: "/#",
										children: "Release notes"
									})
								}), Object(N.jsxs)(ue.a, {
									className: a.modal,
									open: u,
									onClose: w,
									children: [Object(N.jsx)(Nt.a, {
										className: a.closeButton,
										onClick: w,
										children: Object(N.jsx)(Mt, {})
									}), Object(N.jsxs)(He.a, {
										className: a.modal,
										record: r,
										variant: "standard",
										toolbar: Object(N.jsx)(N.Fragment, {}),
										children: [Object(N.jsx)(be.a, {
											className: a.modal,
											children: "What's new in this release?"
										}), Object(N.jsx)(pe.a, {
											className: a.modal,
											children: Object(N.jsx)(Kt, {
												source: "creationNote",
												onChange: function(e) {
													return o(e)
												}
											})
										}), Object(N.jsxs)(he.a, {
											className: a.modal,
											children: [Object(N.jsx)(Nt.a, {
												size: "large",
												onClick: w,
												children: "cancel"
											}), Object(N.jsx)(Nt.a, {
												color: "primary",
												size: "large",
												variant: "contained",
												onClick: function() {
													C(), b(!1)
												},
												children: "save"
											})]
										})]
									})]
								})]
							}), I.length > 0 && Object(N.jsxs)("div", {
								className: a.expandedVersionRolloutHistory,
								children: [Object(N.jsx)("p", {
									style: {
										fontWeight: "bold"
									},
									children: "Rollout History"
								}), I.map((function(e) {
									return Object(N.jsx)("p", {
										children: Object(N.jsx)(Ia, {
											date: e.created_at,
											percent: e.percent,
											isHalted: e.is_halted
										})
									}, e.id)
								}))]
							}), 100 === (null === r || void 0 === r || null === (t = r.currentPhase) ||
								void 0 === t ? void 0 : t.percent) || (null === r || void 0 === r ?
								void 0 : r.state) === wt.History ? Object(N.jsx)(N.Fragment, {}) :
							Object(N.jsx)(Xt, {
								version: r
							})
						]
					})
				},
				Pa = function(e) {
					var t = Object(d.a)(),
						a = Object(w.a)({
							table: {
								flexGrow: 1
							}
						})();
					return Object(N.jsx)(n.Fragment, {
						children: Object(N.jsxs)(bt.a, {
							defaultExpanded: !0,
							children: [Object(N.jsx)(pt.a, {
								expandIcon: Object(N.jsx)(xt.a, {}),
								children: Object(N.jsx)(St, {
									title: t("resources.versions.release_history")
								})
							}), Object(N.jsx)(Ot.a, {
								children: Object(N.jsx)(He.a, Object(s.a)(Object(s.a)({
									toolbar: null
								}, e), {}, {
									className: a.table,
									children: Object(N.jsx)(jt.a, {
										addLabel: !1,
										reference: "versions",
										target: "application_id",
										perPage: 5,
										pagination: Object(N.jsx)(Z.a, {}),
										filter: {
											state: [wt.History]
										},
										fullWidth: !0,
										children: Object(N.jsxs)(X.a, {
											rowClick: "expand",
											expand: Object(N.jsx)(Na, Object(s.a)({}, e)),
											children: [Object(N.jsx)(Ke.a, {
												source: "version",
												style: {
													fontWeight: "bold"
												}
											}), Object(N.jsx)(rt, {
												label: "resources.versions.fields.uploaded",
												source: "created_at"
											}), Object(N.jsx)(kt, {
												label: "resources.versions.fields.download_size",
												source: "size_in_bytes"
											}), Object(N.jsx)(ut.a, {
												source: "installs"
											}), Object(N.jsx)(ut.a, {
												label: "resources.versions.fields.activeInstalls",
												source: "activeUsers"
											}), Object(N.jsx)(It, {
												textAlign: "right",
												label: "",
												source: "url"
											})]
										})
									})
								}))
							})]
						})
					})
				},
				Ta = a(171),
				Ba = a(708),
				La = a(124),
				Aa = a(707),
				Ma = a.n(Aa),
				_a = a(275),
				Ra = "owdevconsole.token",
				Fa = "token",
				Da = function(e) {
					return e >= F
				},
				za = function() {
					var e = localStorage.getItem(Ra),
						t = new _a.a;
					if (!e) return null;
					t.set(Fa, e, {
						domain: "overwolf.com"
					});
					var a = Ma()(e);
					return null != a.scope && 0 === a.scope ? null : a.exp ? new Date(1e3 *
						a.exp) < new Date ? null : {
						id: a.context,
						avatar: a.avatar,
						domain: a.domain,
						email: a.email,
						scope: a.scope,
						ownedPartnerIds: a.ownedPartnerIds
					} : null
				},
				Ea = function() {
					var e = Object(Ft.a)(Rt.a.mark((function e(t) {
						var a, n, r = arguments;
						return Rt.a.wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return (a = r.length > 1 && void 0 !== r[1] ? r[1] : {}).headers ||
										(a.headers = new Headers({
											Accept: "application/json"
										})), n = localStorage.getItem(Ra), a.headers.set(
											"Authorization", "Bearer ".concat(n)), e.abrupt("return",
											La.a.fetchJson(t, a));
								case 5:
								case "end":
									return e.stop()
							}
						}), e)
					})));
					return function(t) {
						return e.apply(this, arguments)
					}
				}(),
				Ha = {
					apiUrl: "https://console-be.overwolf.com",
					redashProxyUrl: "https://console-stats.overwolf.com"
				},
				Wa = Object(Ba.a)(Ha.apiUrl, Ea),
				Va = a(47),
				Ua = function(e) {
					var t = Object(d.a)(),
						a = Object(Dt.a)(),
						n = e.title,
						r = e.error,
						c = e.showDialog,
						i = e.onClose;
					return Object(N.jsxs)(ue.a, {
						fullWidth: !0,
						open: c,
						onClose: i,
						"aria-label": t(n),
						children: [Object(N.jsx)(be.a, {
							style: {
								paddingBottom: "5px"
							},
							children: t(n)
						}), Object(N.jsx)(pe.a, {
							children: r && Object(N.jsx)(Oe.a, {
								children: Object(N.jsx)("span", {
									style: {
										color: a.palette.primary.main,
										marginBottom: "15px",
										width: "100%"
									},
									children: t(r)
								})
							})
						}), Object(N.jsx)(he.a, {
							children: Object(N.jsx)(te.a, {
								label: "ra.action.close",
								onClick: i,
								id: "dbe01"
							})
						})]
					})
				},
				qa = function(e) {
					var t = Object(ee.j)(),
						a = t.appId,
						c = t.channelId,
						i = Object(Dt.a)(),
						o = Object(n.useState)({
							error: "",
							uploading: !1
						}),
						l = Object(je.a)(o, 2),
						j = l[0],
						u = l[1],
						b = j.error,
						p = Object(aa.e)(),
						O = Object(Lt.a)(),
						h = Object(Bt.a)(),
						x = Object(d.a)(),
						m = {
							dropzone: {
								overflow: "hidden",
								backgroundColor: i.palette.background.default,
								borderColor: i.palette.grey[400],
								borderStyle: "dashed",
								color: i.palette.primary.dark,
								borderRadius: "0px"
							},
							inputLabel: {
								color: i.palette.grey[900],
								fontWeight: "inherit",
								fontFamily: "inherit",
								fontSize: "inherit"
							}
						};
					return Object(N.jsxs)(r.a.Fragment, {
						children: [Object(N.jsx)(He.a, {
							resource: "posts",
							toolbar: Object(N.jsx)(N.Fragment, {}),
							children: Object(N.jsx)(ra.a, {
								styles: m,
								getUploadParams: function(e) {
									e.meta;
									var t = localStorage.getItem(Ra);
									return {
										url: "".concat(Ha.apiUrl, "/versions?appId=").concat(a,
											"&channelId=").concat(null !== c && void 0 !== c ? c : 0),
										headers: {
											authorization: "Bearer ".concat(t)
										}
									}
								},
								onChangeStatus: function(e, t, a) {
									e.meta, e.file;
									var n = e.xhr;
									switch (n && n.addEventListener("readystatechange", (
										function() {
											if (4 === n.readyState && n.status >= 400 && n.responseText) {
												var e = JSON.parse(n.responseText).message;
												u(Object(s.a)(Object(s.a)({}, j), {}, {
													error: e,
													uploading: !1
												})), p(Object(Va.e)())
											}
										})), t) {
										case "rejected_file_type":
											u(Object(s.a)(Object(s.a)({}, j), {}, {
												error: "Please upload a valid OPK file"
											}));
											break;
										case "rejected_max_files":
											u(Object(s.a)(Object(s.a)({}, j), {}, {
												error: "You can only upload 1 file"
											}));
											break;
										case "error_file_size":
											u(Object(s.a)(Object(s.a)({}, j), {}, {
												error: "File must be smaller than 120MB"
											}));
											break;
										case "preparing":
										case "restarted":
											u(Object(s.a)(Object(s.a)({}, j), {}, {
												uploading: !0
											})), p(Object(Va.f)());
											break;
										case "error_upload_params":
										case "exception_upload":
										case "aborted":
										case "removed":
											u(Object(s.a)(Object(s.a)({}, j), {}, {
												error: "",
												uploading: !1
											}));
											break;
										case "done":
											O(), p(Object(Va.e)()), h(
												"resources.versions.draft.new_version_created", "info")
									}
								},
								accept: ".opk",
								SubmitButtonComponent: void 0,
								inputContent: x("resources.versions.draft.drag_opk"),
								maxFiles: 1,
								maxSizeBytes: 2e8
							})
						}), Object(N.jsx)(Ua, {
							title: "resources.versions.draft.error_uploading_opk",
							showDialog: b.length > 0,
							error: b,
							onClose: function() {
								u(Object(s.a)(Object(s.a)({}, j), {}, {
									error: ""
								}))
							}
						})]
					})
				},
				Za = function(e) {
					return Object(N.jsxs)(le.a, {
						viewBox: "0 0 24 24",
						children: [Object(N.jsx)("path", {
							"fill-rule": "evenodd",
							"clip-rule": "evenodd",
							d: "M13 2H5C4.44772 2 4 2.44772 4 3V21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21V8.99981H13V2ZM10 12H6V14H10V12ZM10 18H6V20H10V18ZM6 15H13V17H6V15ZM18 15H15V17H18V15ZM12 12H18V14H12V12ZM18 20V18H12V20H18Z",
							fill: "currentColor"
						}), Object(N.jsx)("path", {
							d: "M15.0002 2L20 6.99981H15L15.0002 2Z",
							fill: "currentColor"
						})]
					})
				},
				Ka = a(273),
				Qa = a.n(Ka),
				Ja = a(616),
				Ya = a(617),
				Ga = function(e) {
					var t = e.version,
						a = void 0 === t ? {} : t,
						r = e.cellClassName,
						c = e.type,
						i = void 0 === c ? "remove" : c,
						s = Object(n.useState)(!1),
						o = Object(je.a)(s, 2),
						l = o[0],
						j = o[1],
						u = Object(d.a)(),
						b = Object(Bt.a)(),
						p = Object(Lt.a)(),
						O = Object(Ya.a)("versions", a.id, a, {
							undoable: !1,
							onSuccess: function() {
								b("resources.versions.draft.remove_success", "info"), p()
							},
							onFailure: function() {
								b("resources.versions.draft.remove_error", "warning")
							}
						}),
						h = Object(je.a)(O, 2),
						x = h[0],
						m = h[1].loading;
					return Object(N.jsxs)(N.Fragment, {
						children: [Object(N.jsx)(ge, {
							title: "resources.versions.draft.removeConfirm.title",
							question: "resources.versions.draft.removeConfirm.question",
							onApprove: function() {
								j(!1), x()
							},
							onCancel: function() {
								j(!1)
							},
							showDialog: l
						}), Object(N.jsx)(te.a, {
							className: r,
							color: "primary",
							onClick: function() {
								return j(!0)
							},
							disabled: m,
							children: Object(N.jsx)(N.Fragment, {
								children: u(function() {
									switch (i) {
										case "remove":
											return "resources.versions.fields.remove";
										case "upload-another":
											return "upload another opk"
									}
								}())
							})
						})]
					})
				},
				$a = Object(w.a)({
					opkReviewBox: {
						display: "flex",
						flexDirection: "column",
						fontSize: "11pt",
						alignItems: "flex-start",
						justifyContent: "space-between"
					},
					opkReviewButton: {
						display: "flex",
						justifyContent: "flex-end"
					},
					opkStatusText: {
						whiteSpace: "pre"
					},
					opkInfoStatusBox: {
						display: "flex",
						alignItems: "flex-start"
					},
					opkInfoStatusTextBox: {
						fontWeight: "bold",
						marginLeft: "1em",
						"&>p:first-child": {
							marginTop: "4pt"
						}
					}
				}),
				Xa = function(e) {
					var t, a = e.version,
						n = $a(),
						r = Object(Bt.a)(),
						c = Object(Lt.a)(),
						i = Object(Ja.a)("workflow-items", {
							version: a
						}, {
							onSuccess: function(e) {
								var t = e.data;
								r("Review requested for version ".concat(t.version.version),
									"info"), c()
							},
							onFailure: function(e) {
								r(e.message, "warning"), c()
							}
						}),
						s = Object(je.a)(i, 2),
						o = s[0],
						l = s[1].loading,
						d = Object(Ya.a)("workflow-items", null === a || void 0 === a || null ===
							(t = a.workflowRequest) || void 0 === t ? void 0 : t.id, a, {
								onSuccess: function(e) {
									var t = e.data;
									r("Deleted review request for version ".concat(t.versionNumber),
										"info"), c()
								},
								onFailure: function(e) {
									r(e.message, "warning"), c()
								}
							}),
						j = Object(je.a)(d, 2),
						u = j[0],
						b = j[1].loading,
						p = function() {
							var e;
							switch (null === a || void 0 === a || null === (e = a.workflowRequest) ||
								void 0 === e ? void 0 : e.status) {
								case "pending":
									return {
										statusText: Object(N.jsxs)("b", {
											children: ["Version ", null === a || void 0 === a ? void 0 : a.version,
												" was successfully submitted for review"
											]
										}),
										actionButton: Object(N.jsx)(Nt.a, {
											disabled: b,
											onClick: u,
											color: "primary",
											variant: "outlined",
											size: "small",
											children: "cancel request"
										})
									};
								case "approved":
									return {
										statusText: Object(N.jsxs)("div", {
											className: n.opkInfoStatusBox,
											children: [Object(N.jsx)(Qa.a, {}), Object(N.jsxs)("div", {
												className: n.opkInfoStatusTextBox,
												children: [Object(N.jsxs)("p", {
													children: ["Version ", null === a || void 0 === a ?
														void 0 : a.version,
														" was reviewed and approved by the Overwolf team."
													]
												}), Object(N.jsx)("p", {
													children: "You can start rolling it out to production."
												})]
											})]
										}),
										actionButton: null
									};
								case "rejected":
									return {
										statusText: Object(N.jsxs)("div", {
											className: n.opkInfoStatusBox,
											children: [Object(N.jsx)(Qa.a, {}), Object(N.jsxs)("div", {
												className: n.opkInfoStatusTextBox,
												children: [Object(N.jsxs)("p", {
													children: ["Version ", null === a || void 0 === a ?
														void 0 : a.version,
														" was reviewed and wasn't approved by the Overwolf team."
													]
												}), Object(N.jsx)("p", {
													children: "Please contact your account manager for further info."
												})]
											})]
										}),
										actionButton: Object(N.jsx)(Ga, {
											type: "upload-another",
											version: a
										})
									};
								default:
									return {
										statusText: "Submit your OPK for review by the Overwolf team",
										actionButton: Object(N.jsx)(Nt.a, {
											disabled: l || !a.creationNote,
											onClick: o,
											color: "primary",
											variant: "contained",
											size: "small",
											children: "submit for review"
										})
									}
							}
						}(),
						O = p.statusText,
						h = p.actionButton;
					return Object(N.jsxs)("div", {
						className: n.opkReviewBox,
						children: [Object(N.jsxs)("div", {
							style: {
								marginBottom: "2em"
							},
							children: [Object(N.jsx)("h4", {
								children: "OPK review"
							}), Object(N.jsx)("p", {
								className: n.opkStatusText,
								children: O
							})]
						}), Object(N.jsx)("div", {
							className: n.opkReviewButton,
							style: {
								width: "100%",
								display: "flex",
								justifyContent: "center"
							},
							children: h
						})]
					})
				},
				en = a(1395),
				tn = a(1371),
				an = a(1387),
				nn = Object(w.a)({
					stepper: {
						width: "60%",
						minWidth: "430px"
					}
				}),
				rn = function(e) {
					var t = nn();
					return Object(N.jsx)(en.a, {
						activeStep: e.activeStep,
						className: t.stepper,
						children: ["OPK uploaded", "Processing", "Ready for release"].map((
							function(t, a) {
								return Object(N.jsx)(tn.a, {
									completed: a < e.activeStep,
									children: Object(N.jsx)(an.a, {
										disabled: !0,
										children: t
									})
								}, t)
							}))
					})
				},
				cn = Object(w.a)((function(e) {
					return {
						manageVersion: {
							display: "flex",
							width: "100%",
							justifyContent: "space-between",
							"& > div": {
								width: "45%"
							}
						},
						withReleaseNotes: {
							marginBottom: "5em",
							display: "flex",
							justifyContent: "space-around"
						},
						withoutReleaseNotes: {
							marginBottom: "5em",
							display: "flex",
							marginLeft: "5em"
						},
						releaseNotesBox: {
							justifyContent: "center",
							alignItems: "center",
							marginTop: "2em",
							display: "flex",
							flexDirection: "column",
							gap: 18
						},
						modal: {
							width: "auto",
							"& [role=dialog]": {
								minWidth: "700px"
							}
						},
						closeButton: {
							position: "absolute",
							top: 0,
							right: 0,
							minWidth: 32,
							height: 32,
							padding: 0,
							"& svg": {
								height: 32,
								width: 32
							},
							"&:hover": {
								color: "#fff",
								backgroundColor: e.palette.primary.main
							}
						}
					}
				})),
				sn = ["cchhcaiapeikjbdbpfplgmpobbcdkdaphclbmkbj",
					"cghphpbjeabdkomiphingnegihoigeggcfphdofo",
					"npijmgiaiiemcnijaljcfddgeihcbifdbhpffihe",
					"efkgmolhjcfeajfainncogimecoajaepbpobacpb"
				],
				on = function(e) {
					var t = cn(),
						a = e.data,
						r = e.ids,
						c = {
							data: Object(Pt.keyBy)(a, "id"),
							ids: r,
							currentSort: {
								field: "id",
								order: "DESC"
							},
							style: {
								width: "100%",
								marginBottom: "1em"
							}
						},
						i = a[r[0]],
						o = Object(n.useState)(i.creationNote),
						l = Object(je.a)(o, 2),
						d = l[0],
						j = l[1],
						u = Object(At.a)("versions/releaseNotes", i.id, {
							note: d
						}, i, {
							onSuccess: function() {
								m("Changed Release Notes successfully", "info"), f()
							},
							onFailure: function(e) {
								m(e.message, "warning"), f()
							}
						}),
						b = Object(je.a)(u, 1)[0],
						p = Object(n.useState)(!1),
						O = Object(je.a)(p, 2),
						h = O[0],
						x = O[1],
						m = Object(Bt.a)(),
						f = Object(Lt.a)(),
						v = Object(ee.j)(),
						g = v.appId,
						y = v.channelId,
						C = sn.includes(g) && !y,
						w = function() {
							j(i.creationNote), x(!1)
						};
					return Object(N.jsxs)(N.Fragment, {
						children: [Object(N.jsx)("div", {
							style: {
								display: "flex",
								justifyContent: "flex-end"
							},
							children: Object(N.jsx)(Ga, {
								version: i,
								type: "remove"
							}, "remove")
						}), Object(N.jsx)("div", {
							style: {
								width: "100%",
								display: "flex",
								justifyContent: "center"
							},
							children: Object(N.jsx)(rn, {
								activeStep: 3
							})
						}), Object(N.jsxs)(X.a, Object(s.a)(Object(s.a)({}, c), {}, {
							hasBulkActions: !1,
							selectedIds: [],
							children: [Object(N.jsx)(Ke.a, {
								source: "version",
								style: {
									fontWeight: "bold"
								},
								sortable: !1
							}), Object(N.jsx)(rt, {
								label: "resources.versions.fields.uploaded",
								source: "created_at",
								textAlign: "center",
								sortable: !1
							}), Object(N.jsx)(kt, {
								label: "resources.versions.fields.download_size",
								source: "size_in_bytes",
								textAlign: "center",
								sortable: !1
							}), Object(N.jsx)(It, {
								textAlign: "right",
								label: "",
								source: "url",
								prefix: Ha.apiUrl
							})]
						})), Object(N.jsxs)("div", {
							className: C ? t.withReleaseNotes : t.withoutReleaseNotes,
							children: [Object(N.jsxs)("div", {
								className: t.releaseNotesBox,
								children: [Object(N.jsx)(Za, {}),
									"Add internal notes for this release", Object(N.jsx)(Nt.a, {
										onClick: function(e) {
											e.preventDefault(), x(!0)
										},
										color: "default",
										variant: "contained",
										size: "small",
										children: "Add internal release notes"
									})
								]
							}), C && Object(N.jsxs)("div", {
								className: t.releaseNotesBox,
								children: [Object(N.jsx)(Za, {}),
									"Let users know what's in your release", Object(N.jsx)(wa, {
										record: i,
										modalButton: Object(N.jsx)(Nt.a, {
											color: "default",
											variant: "contained",
											size: "small",
											children: "Add release notes"
										})
									})
								]
							})]
						}), Object(N.jsxs)(ue.a, {
							className: t.modal,
							open: h,
							onClose: w,
							children: [Object(N.jsx)(Nt.a, {
								className: t.closeButton,
								onClick: w,
								children: Object(N.jsx)(Mt, {})
							}), Object(N.jsxs)(He.a, Object(s.a)(Object(s.a)({}, e), {}, {
								className: t.modal,
								record: i,
								variant: "standard",
								toolbar: Object(N.jsx)(N.Fragment, {}),
								children: [Object(N.jsx)(be.a, {
									className: t.modal,
									children: "What's new in this release?"
								}), Object(N.jsx)(pe.a, {
									className: t.modal,
									children: Object(N.jsx)(Kt, {
										source: "creationNote",
										onChange: function(e) {
											return j(e)
										}
									})
								}), Object(N.jsxs)(he.a, {
									className: t.modal,
									children: [Object(N.jsx)(Nt.a, {
										size: "large",
										onClick: w,
										children: "cancel"
									}), Object(N.jsx)(Nt.a, {
										color: "primary",
										variant: "contained",
										size: "large",
										onClick: function() {
											b(), x(!1)
										},
										children: "save"
									})]
								})]
							}))]
						}), Object(N.jsxs)("div", {
							className: t.manageVersion,
							children: [Object(N.jsx)(Xa, {
								version: i
							}), Object(N.jsx)("hr", {}), Object(N.jsx)(Xt, {
								version: i,
								isDraft: !0
							})]
						})]
					})
				},
				ln = a(133),
				dn = (a(1169), a.p + "static/media/logo.2f2c83f7.svg"),
				jn = a.p + "static/media/sprite.ed6ac4f4.svg",
				un = a.p + "static/media/helmet.38498dbf.png",
				bn = function(e) {
					e.location;
					var t = Object(n.useState)(!1),
						a = Object(je.a)(t, 2),
						r = a[0],
						c = a[1],
						i = Object(n.useState)(!1),
						s = Object(je.a)(i, 2),
						o = s[0],
						l = s[1],
						j = Object(d.a)(),
						u = function() {
							var e = Object(Ft.a)(Rt.a.mark((function e() {
								return Rt.a.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											-1 !== window.location.hash.indexOf("unauthorized") && c(!
												0);
										case 1:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(),
						b = function() {
							var e = Object(Ft.a)(Rt.a.mark((function e() {
								var t, a, n;
								return Rt.a.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											t = "unexpectedErr", -1 !== (a = window.location.hash.indexOf(
												t)) && (l(!0), n = window.location.hash.substr(a + t.length +
												1), console.error("Server error code: ".concat(n)));
										case 3:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}();
					Object(n.useEffect)((function() {
						u(), b(), window.location.hash = "/login"
					}));
					return Object(N.jsxs)("div", {
						className: "login",
						children: [Object(N.jsx)("header", {
							children: Object(N.jsx)("a", {
								href: "https://www.overwolf.com",
								children: Object(N.jsx)("img", {
									src: dn,
									alt: "overwolf"
								})
							})
						}, "header"), Object(N.jsx)("main", {
							className: "login-container",
							children: Object(N.jsxs)("div", {
								className: "login-form-container",
								children: [Object(N.jsxs)("div", {
									className: "login-form",
									children: [Object(N.jsxs)("div", {
										className: "form-title",
										children: [Object(N.jsx)("div", {
											className: "dashboard-image",
											children: Object(N.jsx)("img", {
												src: un
											})
										}), Object(N.jsx)("h1", {
											className: "login-title",
											children: j("login.title")
										})]
									}), Object(N.jsx)("fieldset", {
										children: Object(N.jsxs)("button", {
											className: "submit-button",
											onClick: function() {
												return e = "google", void(window.location.href =
													"".concat(Ha.apiUrl, "/auth/").concat(e));
												var e
											},
											children: [Object(N.jsx)("div", {
												className: "login-service-icon",
												children: Object(N.jsx)("svg", {
													children: Object(N.jsx)("use", {
														href: jn + "#login-social-google"
													})
												})
											}), Object(N.jsx)("div", {
												className: "loader",
												children: Object(N.jsx)("svg", {
													children: Object(N.jsx)("use", {
														href: jn + "#button-loading-ring"
													})
												})
											}), Object(N.jsx)("div", {
												className: "submit-button-text",
												children: j("login.login-with-google")
											})]
										})
									})]
								}), Object(N.jsxs)("div", {
									className: "form-footer",
									children: [r && Object(N.jsxs)("div", {
										id: "unauthorized",
										className: "unauthorized {unauthorized}hide",
										children: [Object(N.jsx)("h2", {
											children: "Unauthorized"
										}), Object(N.jsx)("p", {
											children: "Contact us for login permissions"
										})]
									}), o && Object(N.jsx)("div", {
										className: "continue ",
										children: Object(N.jsx)("h2", {
											id: "unexpectedError",
											className: "validation-big-box active",
											children: "Something went wrong. Please try again."
										})
									})]
								})]
							})
						}, "main")]
					})
				},
				pn = {
					login: function(e) {
						e.username;
						return Promise.reject("Unsupported method")
					},
					logout: function() {
						var e = new _a.a;
						return localStorage.removeItem(Ra), e.remove(Fa), Promise.resolve()
					},
					checkError: function(e) {
						var t = e.status;
						return 401 === t || 403 === t ? (localStorage.removeItem(Ra), Promise
							.reject()) : Promise.resolve()
					},
					checkAuth: function() {
						return za() ? Promise.resolve() : Promise.reject()
					},
					getPermissions: function() {
						var e = za();
						return e ? Promise.resolve(e.scope) : Promise.reject()
					},
					getOwnedPartnerIds: function() {
						var e = za();
						return null === e || void 0 === e ? void 0 : e.ownedPartnerIds
					},
					getIdentity: function() {
						var e = za();
						return e ? Promise.resolve({
							id: e.id,
							fullName: e.email,
							avatar: e.avatar
						}) : Promise.reject()
					}
				},
				On = function(e, t, a) {
					var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] :
						null;
					Object(n.useEffect)((function() {
						var n = localStorage.getItem(Ra),
							c = new EventSource("".concat(Ha.apiUrl, "/").concat(e, "/sse/").concat(
								t, "?token=").concat(n));
						return c.onmessage = a, c.onerror = r,
							function() {
								c.close()
							}
					}), [])
				},
				hn = ["publishing"],
				xn = function(e) {
					var t, a = e.data,
						r = e.ids,
						c = Object(Lt.a)(),
						i = Object(n.useState)(Date.now()),
						s = Object(je.a)(i, 2),
						o = s[0],
						l = s[1],
						d = Object(ln.a)(),
						j = Object(ee.j)().appId;
					Object(n.useEffect)((function() {
						return l(Date.now())
					}), []), On("versions", r[0], (function(e) {
						var t = e.data,
							a = JSON.parse(t);
						hn.includes(a.state) || setTimeout((function() {
							return c()
						}), 7500 - (Date.now() - o))
					}), (function(e) {
						var t = function() {
							var e = Object(Ft.a)(Rt.a.mark((function e() {
								var a, n;
								return Rt.a.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.prev = 0, e.next = 3, d.getOne(
												"versions/publishing", {
													id: j
												});
										case 3:
											if (null === (n = e.sent) || void 0 === n || null ===
												(a = n.data) || void 0 === a ? void 0 : a.id) {
												e.next = 7;
												break
											}
											return c(), e.abrupt("return");
										case 7:
											e.next = 12;
											break;
										case 9:
											e.prev = 9, e.t0 = e.catch(0), console.log(e.t0);
										case 12:
											setTimeout(t, 5e3);
										case 13:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[0, 9]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}();
						t()
					}));
					var u = null !== (t = a[r[0]]) && void 0 !== t ? t : {},
						b = u.version,
						p = u.state;
					return Object(N.jsxs)("div", {
						style: {
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center"
						},
						children: [Object(N.jsx)(ca.a, {
							style: {
								width: "40px",
								height: "40px",
								marginBottom: "1em"
							},
							color: "primary"
						}), Object(N.jsx)(ne.a, {
							color: "primary",
							style: {
								marginBottom: "1em"
							},
							children: hn.includes(p) ? Object(N.jsx)("span", {
								children: "Processing..."
							}) : Object(N.jsxs)("span", {
								children: ["Rolling out version ", null !== b && void 0 !== b ?
									b : ""
								]
							})
						})]
					})
				},
				mn = Object(n.memo)(xn),
				fn = ["uploaded", "signing", "signed", "diffing", "diffed"],
				vn = function(e) {
					var t = Object(Lt.a)(),
						a = Object(n.useState)(0),
						r = Object(je.a)(a, 2),
						c = r[0],
						i = r[1],
						s = Object(n.useState)(Date.now()),
						o = Object(je.a)(s, 2),
						l = o[0],
						d = o[1],
						j = Object(ln.a)(),
						u = Object(ee.j)().appId;
					Object(n.useEffect)((function() {
						return d(Date.now())
					}), []);
					var b = e.ids;
					return On("versions", b[0], (function(e) {
						var a = e.data,
							n = JSON.parse(a);
						i(1), fn.includes(n.state) || setTimeout((function() {
							return t()
						}), 7500 - (Date.now() - l))
					}), (function(e) {
						var a = function() {
							var e = Object(Ft.a)(Rt.a.mark((function e() {
								var n, r;
								return Rt.a.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.prev = 0, e.next = 3, j.getOne(
												"versions/uploading", {
													id: u
												});
										case 3:
											if (null === (r = e.sent) || void 0 === r || null ===
												(n = r.data) || void 0 === n ? void 0 : n.id) {
												e.next = 7;
												break
											}
											return t(), e.abrupt("return");
										case 7:
											e.next = 12;
											break;
										case 9:
											e.prev = 9, e.t0 = e.catch(0), console.log(e.t0);
										case 12:
											setTimeout(a, 5e3);
										case 13:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[0, 9]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}();
						a()
					})), Object(N.jsxs)("div", {
						style: {
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center"
						},
						children: [Object(N.jsx)(ca.a, {
							style: {
								width: "40px",
								height: "40px",
								marginBottom: "1em"
							},
							color: "primary"
						}), Object(N.jsx)(rn, {
							activeStep: c
						})]
					})
				},
				gn = Object(n.memo)(vn),
				yn = function(e) {
					var t, a = Object(d.a)(),
						r = Object(n.useState)({}),
						c = Object(je.a)(r, 2),
						i = c[0],
						o = c[1],
						l = Object(n.useState)([]),
						j = Object(je.a)(l, 2),
						u = j[0],
						b = j[1],
						p = Object(Ta.a)();
					Object(n.useEffect)((function() {
						Wa.getList("versions", {
							pagination: {
								page: 1,
								perPage: 2
							},
							sort: {
								field: "id",
								order: "DESC"
							},
							filter: {
								application_id: e.record.id,
								state: [wt.Draft, wt.Publishing, wt.Signing, wt.Diffing, wt.Uploaded]
							}
						}).then((function(e) {
							var t = Pt.keyBy(e.data, "id");
							o(t), b(Pt.keys(t).map(Number))
						}))
					}), [p, e.record.id]);
					var O, h = "undefined" !== typeof e.record.draft_versions,
						x = "undefined" !== typeof e.record.publishing_versions;
					return O = h && e.record.draft_versions > 0 ? Object(N.jsx)(on, Object(
							s.a)(Object(s.a)({}, e), {}, {
							data: i,
							ids: u
						})) : x && e.record.publishing_versions > 0 ? Object(N.jsx)(mn, Object(
							s.a)({
							data: i,
							ids: u
						}, e)) : !u || ["uploaded", "signing", "signed", "diffing", "diffed"].includes(
							(null === (t = i[u[0]]) || void 0 === t ? void 0 : t.state) || "") ?
						Object(N.jsx)(gn, Object(s.a)({
							data: i,
							ids: u
						}, e)) : Object(N.jsx)(qa, Object(s.a)({}, e)), Object(N.jsx)(K.a, {
							children: Object(N.jsxs)(J.a, {
								style: {
									paddingBottom: 0
								},
								children: [Object(N.jsx)(St, {
									title: a("resources.versions.draft.title")
								}), O]
							})
						})
				},
				Cn = function(e) {
					var t = e.source,
						a = e.record,
						n = void 0 === a ? {} : a,
						r = Object(d.a)(),
						c = Tt.a.get(n, t, null);
					return 100 === c ? Object(N.jsx)("span", {
						children: r("resources.versions.rollout.full_rollout")
					}) : Object(N.jsxs)("span", {
						children: [c, "%"]
					})
				},
				wn = function(e) {
					var t = e.record,
						a = void 0 === t ? {} : t,
						n = Object(d.a)();
					return Tt.a.get(a, "currentPhase.is_halted", !1) ? Object(N.jsx)("span", {
						children: n("resources.versions.rollout.halted")
					}) : Object(N.jsx)(Cn, {
						record: a,
						source: "currentPhase.percent"
					})
				},
				In = function(e) {
					var t = Object(d.a)();
					return Object(N.jsx)(n.Fragment, {
						children: Object(N.jsxs)(bt.a, {
							defaultExpanded: !0,
							children: [Object(N.jsx)(pt.a, {
								expandIcon: Object(N.jsx)(xt.a, {}),
								children: Object(N.jsx)(St, {
									title: t("resources.versions.public.title")
								})
							}), Object(N.jsx)(Ot.a, {
								children: Object(N.jsx)(He.a, Object(s.a)(Object(s.a)({
									toolbar: null
								}, e), {}, {
									children: Object(N.jsx)(jt.a, {
										addLabel: !1,
										reference: "versions",
										target: "application_id",
										perPage: 5,
										sort: {
											field: "created_at",
											order: "DESC"
										},
										pagination: Object(N.jsx)(N.Fragment, {}),
										filter: {
											state: [wt.Public, wt.Phasing]
										},
										fullWidth: !0,
										children: Object(N.jsxs)(X.a, {
											rowClick: "expand",
											expand: Object(N.jsx)(Na, Object(s.a)({}, e)),
											children: [Object(N.jsx)(Ke.a, {
												source: "version",
												style: {
													fontWeight: "bold"
												}
											}), Object(N.jsx)(rt, {
												label: "resources.versions.fields.uploaded",
												source: "created_at"
											}), Object(N.jsx)(kt, {
												label: "resources.versions.fields.download_size",
												source: "size_in_bytes"
											}), Object(N.jsx)(wn, {
												label: "Rollout"
											}), Object(N.jsx)(ut.a, {
												source: "installs"
											}), Object(N.jsx)(ut.a, {
												label: "resources.versions.fields.activeInstalls",
												source: "activeUsers"
											}), Object(N.jsx)(It, {
												textAlign: "right",
												label: "",
												source: "url",
												prefix: Ha.apiUrl
											})]
										})
									})
								}))
							})]
						})
					})
				},
				kn = a(709),
				Sn = a(710),
				Nn = function() {
					function e(t) {
						Object(kn.a)(this, e), this.name = void 0, this.list = void 0, this.edit =
							void 0, this.create = void 0, this.show = void 0, this.icon = void 0,
							this.custom = void 0, this.name = t.name, this.list = t.list, this.edit =
							t.edit, this.create = t.create, this.show = t.show, this.icon = t.icon,
							this.custom = t.custom
					}
					return Object(Sn.a)(e, [{
						key: "basePath",
						get: function() {
							return "/".concat(this.name)
						}
					}, {
						key: "resource",
						get: function() {
							return this.name
						}
					}]), e
				}(),
				Pn = a(753),
				Tn = a(1361),
				Bn = a(245),
				Ln = ["validate", "helperText", "helperTextTypographyProps"],
				An = Object(w.a)((function(e) {
					return {
						input: {
							display: "flex",
							color: e.palette.text.secondary,
							flexDirection: "column",
							"& p": {
								textAlignLast: "right"
							}
						}
					}
				})),
				Mn = function(e) {
					var t = [];
					return (null === e || void 0 === e ? void 0 : e.maxLength) && t.push(
							Object(We.d)(e.maxLength)), (null === e || void 0 === e ? void 0 : e.required) &&
						t.push(Object(We.h)()), (null === e || void 0 === e ? void 0 : e.email) &&
						t.push(Object(We.c)()), t
				},
				_n = function(e, t) {
					return t && t.maxLength ? "".concat(e, "/").concat(t.maxLength) : ""
				},
				Rn = function(e) {
					var t = e.validate,
						a = e.helperText,
						r = e.helperTextTypographyProps,
						c = Object(z.a)(e, Ln),
						i = An(),
						o = Object(Bn.a)(c).input.value,
						l = Object(n.useState)((null === o || void 0 === o ? void 0 : o.length) ||
							0),
						d = Object(je.a)(l, 2),
						j = d[0],
						u = d[1];
					return Object(N.jsxs)("span", {
						className: i.input,
						children: [Object(N.jsx)(V.a, Object(s.a)({
							onChange: function(e) {
								return u(e.target.value.length)
							},
							helperText: _n(j, t),
							validate: Mn(t),
							source: c.source
						}, c)), a && Object(N.jsx)(ne.a, Object(s.a)(Object(s.a)({}, r), {}, {
							children: a
						}))]
					})
				},
				Fn = a(698),
				Dn = a(379),
				zn = a(1383),
				En = a(1396),
				Hn = function(e) {
					var t = document.getElementById("ow-console-footer");
					return t ? Object(c.createPortal)(e.children, t) : null
				},
				Wn = ["basePath", "children", "className", "handleSubmit", "invalid",
					"margin", "pristine", "withPadding", "record", "redirect", "resource",
					"saving", "stickyToolbar", "submitOnEnter", "toolbar", "undoable",
					"variant", "warnUnsaved", "captionTypographyProps"
				],
				Vn = Object(w.a)((function(e) {
					return {
						form: {
							minWidth: "800px"
						},
						formPadding: {
							padding: "3rem"
						},
						fieldRow: {
							display: "flex",
							"&:not(:last-child)": {
								marginBottom: "1.5em"
							}
						},
						fieldTitle: {
							width: "10em"
						},
						fieldInput: {
							display: "flex",
							alignItems: "center",
							flex: 1,
							"& div.MuiInput-root, & div.MuiFormControl-root": {
								margin: 0
							},
							"& p.MuiFormHelperText-root": {
								textAlign: "right"
							}
						},
						fullWidth: {
							"& div.ra-input": {
								width: "100%"
							}
						},
						hideInputLabel: {
							"& label:not(.MuiFormControlLabel-root), .MuiFormControlLabel-label": {
								display: "none"
							}
						},
						sectionHeader: {
							marginBottom: "2em"
						},
						toolbar: {
							marginTop: 0,
							backgroundColor: e.palette.background.paper,
							display: "flex",
							justifyContent: "flex-end",
							"&>div": {
								flex: 0,
								gap: 8
							}
						}
					}
				})),
				Un = function(e) {
					var t = e.basePath,
						a = e.children,
						c = (e.className, e.handleSubmit),
						i = e.invalid,
						o = (e.margin, e.pristine),
						l = e.withPadding,
						d = void 0 === l || l,
						j = e.record,
						u = e.redirect,
						b = e.resource,
						p = e.saving,
						O = e.stickyToolbar,
						h = void 0 === O || O,
						x = e.submitOnEnter,
						m = e.toolbar,
						f = void 0 === m ? Object(N.jsx)(Pn.a, {}) : m,
						v = e.undoable,
						g = (e.variant, e.warnUnsaved),
						y = void 0 === g || g,
						C = e.captionTypographyProps;
					Object(z.a)(e, Wn);
					Object(Fn.a)(y);
					var w = Vn(),
						I = Object(n.useRef)(null),
						k = Object(n.useState)(),
						S = Object(je.a)(k, 2),
						P = S[0],
						T = S[1];
					Object(n.useLayoutEffect)((function() {
						T((null === I || void 0 === I ? void 0 : I.current).clientWidth)
					}), []);
					var B = function(e) {
							var a;
							switch (null === e || void 0 === e || null === (a = e.type) || void 0 ===
								a ? void 0 : a.displayName) {
								case "OwFormSectionHeader":
									return Object(N.jsx)(ne.a, {
										variant: "h6",
										className: w.sectionHeader,
										children: e.props.children
									});
								case "OwFormAsIs":
									return r.a.cloneElement(e.props.children, Object(s.a)(Object(s.a)(
										Object(s.a)({}, e.props), e.props.children.props), {}, {
										record: j
									}));
								default:
									return e && Object(N.jsx)(qn, {
										basePath: t,
										input: e,
										record: j,
										resource: b,
										captionTypographyProps: C
									})
							}
						},
						L = r.a.cloneElement(f, {
							basePath: t,
							className: w.toolbar,
							handleSubmitWithRedirect: c,
							handleSubmit: c,
							invalid: i,
							pristine: o,
							record: j,
							redirect: u,
							resource: b,
							saving: p,
							style: {
								width: P
							},
							submitOnEnter: x,
							undoable: v
						});
					return Object(N.jsx)(N.Fragment, {
						children: Object(N.jsxs)("form", {
							className: "".concat(w.form, " ").concat(d && w.formPadding),
							ref: I,
							children: [n.Children.map(a, (function(e) {
								var t;
								return "OwFormCard" === (null === e || void 0 === e || null ===
										(t = e.type) || void 0 === t ? void 0 : t.displayName) ?
									Object(N.jsx)(K.a, Object(s.a)(Object(s.a)({}, e.props), {}, {
										style: {
											marginBottom: "2em"
										},
										children: Object(N.jsx)(J.a, {
											style: {
												padding: "2em"
											},
											children: n.Children.map(e.props.children, (function(
												e) {
												return B(e)
											}))
										})
									})) : B(e)
							})), h ? Object(N.jsx)(Hn, {
								children: L
							}) : L]
						})
					})
				},
				qn = function(e) {
					var t, a = e.basePath,
						n = e.input,
						c = e.record,
						i = e.resource,
						o = e.captionTypographyProps,
						l = void 0 === o ? {
							variant: "caption"
						} : o,
						d = Vn(),
						j = n.props.label || n.props.source && $.a.humanize(n.props.source),
						u = !n.props.hasOwnProperty("fullWidth") || n.props.fullWidth,
						b = Object(s.a)(Object(s.a)({}, l), n.props.captionTypographyProps);
					return Object(N.jsxs)(En.a, {
						className: d.fieldRow,
						children: [Object(N.jsxs)(En.a, {
							className: "".concat(d.fieldTitle, " ").concat(n.props.labelClassName),
							children: [Object(N.jsxs)(ne.a, {
								variant: "subtitle1",
								children: [j, (t = n.props.validate, t && (Array.isArray(t) &&
									t.some((function(e) {
										return e.isRequired
									})) || t.isRequired || t.required) && " *")]
							}), n.props.caption && Object(N.jsx)(ne.a, Object(s.a)(Object(
								s.a)({}, b), {}, {
								children: n.props.caption
							}))]
						}), Object(N.jsx)(En.a, {
							className: "".concat(d.fieldInput, "\n          ").concat(!n.props
								.addLabel && d.hideInputLabel, "\n          ").concat(u && d.fullWidth,
								"\n          ").concat(n.props.className),
							style: n.props.style,
							children: Object(N.jsx)(Dn.a, {
								basePath: a,
								input: r.a.cloneElement(n, {
									addLabel: !1,
									fullWidth: u
								}),
								record: c,
								resource: i,
								variant: "standard"
							})
						})]
					})
				},
				Zn = function(e) {
					return Object(N.jsx)(zn.a, Object(s.a)(Object(s.a)({}, e), {}, {
						sanitizeEmptyValues: !1,
						render: function(t) {
							return Object(N.jsx)(Un, Object(s.a)(Object(s.a)({}, t), {}, {
								warnUnsaved: e.warnUnsaved
							}))
						}
					}))
				},
				Kn = function(e) {
					return null
				};
			Kn.displayName = "OwFormSectionHeader";
			var Qn = Kn,
				Jn = function(e) {
					return null
				};
			Jn.displayName = "OwFormAsIs";
			var Yn = Jn,
				Gn = function(e) {
					return null
				};
			Gn.displayName = "OwFormCard";
			var $n, Xn = Gn,
				er = a(496),
				tr = Object(w.a)((function(e) {
					return {
						titleBox: {
							cursor: "pointer",
							"&:hover": {
								color: e.palette.grey[900]
							}
						},
						icon: {
							marginRight: ".5em"
						},
						subtitle: {
							marginLeft: ".2em"
						},
						tooltip: {
							maxWidth: "none",
							fontSize: "large"
						}
					}
				})),
				ar = function(e) {
					var t = tr(),
						a = Object(Bt.a)(),
						n = e.record,
						r = e.source,
						c = e.title,
						i = void 0 === c ? "Copy link" : c,
						o = e.titleTypographyProps,
						l = void 0 === o ? {
							variant: "subtitle1",
							display: "inline"
						} : o,
						d = e.subtitle,
						j = e.subtitleTypographyProps,
						u = void 0 === j ? {
							variant: "caption"
						} : j,
						b = e.icon,
						p = e.onClick,
						O = void 0 === p ? function(e) {
							navigator.clipboard.writeText(h), a("Copied!")
						} : p,
						h = Object(Pt.get)(n, r, null);
					return h && Object(N.jsxs)("div", {
						style: e.style,
						children: [Object(N.jsx)("div", {
							children: Object(N.jsx)(er.a, {
								title: h,
								placement: "top",
								classes: {
									tooltip: t.tooltip
								},
								children: Object(N.jsxs)("span", {
									className: t.titleBox,
									onClick: function(e) {
										return O(e, n, r)
									},
									children: [b, "\xa0", Object(N.jsx)(ne.a, Object(s.a)(
										Object(s.a)({}, l), {}, {
											children: i
										}))]
								})
							})
						}), d && Object(N.jsx)(ne.a, Object(s.a)(Object(s.a)({}, u), {}, {
							className: t.subtitle,
							children: d
						}))]
					})
				},
				nr = a(711),
				rr = a.n(nr).a,
				cr = Object(w.a)({
					cancelButton: {
						marginRight: "1em"
					}
				}),
				ir = function(e) {
					var t = Object(zt.e)(),
						a = !e.pristine && !e.invalid,
						r = Object(n.useState)(e.record.name),
						c = Object(je.a)(r, 2),
						i = c[0],
						o = c[1];
					Object(n.useEffect)((function() {
						return o(e.record.name)
					}), [e.record.name]);
					var l = cr();
					return Object(N.jsxs)(Pn.a, Object(s.a)(Object(s.a)({}, e), {}, {
						style: {
							width: "auto"
						},
						children: [Object(N.jsx)(te.a, {
							label: "Cancel",
							className: l.cancelButton,
							disabled: !a,
							onClick: function() {
								return t.change("name", i)
							}
						}), Object(N.jsx)(Tn.a, {
							label: "Save",
							redirect: !1,
							submitOnEnter: !0,
							disabled: !a
						})]
					}))
				},
				sr = function(e) {
					return Object(N.jsx)(Qe.a, Object(s.a)(Object(s.a)({}, e), {}, {
						basePath: "/".concat(Cr.name),
						resource: Cr.name,
						children: Object(N.jsxs)(Zn, {
							redirect: !1,
							withPadding: !1,
							stickyToolbar: !1,
							toolbar: Object(N.jsx)(ir, {}),
							children: [Object(N.jsx)(Qn, {
								children: "Channel details"
							}), Object(N.jsx)(Rn, {
								source: "name",
								label: "Name",
								validate: {
									maxLength: 25,
									required: !0
								}
							}), Object(N.jsx)(ar, {
								source: "channelUrl",
								label: "URL",
								icon: Object(N.jsx)(rr, {}),
								title: "Copy link",
								subtitle: "This is how testers join your channel"
							})]
						})
					}))
				},
				or = a(364),
				lr = a(754),
				dr = ["buttonColor", "buttonIcon", "buttonLabel", "buttonVariant",
					"children", "dialogSubtitle", "dialogTitle", "saveButtonLabel",
					"submitAction", "disabled", "helperText", "helperTextTypographyProps",
					"type"
				],
				jr = Object(w.a)((function(e) {
					return {
						toolbar: {
							display: "flex",
							justifyContent: "flex-end",
							backgroundColor: e.palette.background.paper,
							padding: 0,
							minHeight: "unset",
							marginTop: 24
						}
					}
				})),
				ur = function(e) {
					var t = e.setModalState,
						a = (e.handleSubmit, e.actionsElemId),
						r = e.submitAction,
						i = e.saveButtonLabel,
						s = e.pristine,
						o = e.invalid,
						l = jr(),
						d = Object(Lt.a)(),
						j = Object(n.useState)(),
						u = Object(je.a)(j, 2),
						b = u[0],
						p = u[1],
						O = Object(zt.e)();
					return Object(n.useEffect)((function() {
						var e = document.getElementById(a);
						p(e)
					}), [a]), b ? Object(c.createPortal)(Object(N.jsxs)(Pn.a, {
						className: l.toolbar,
						children: [Object(N.jsx)(se, {
							label: "cancel",
							style: {
								marginRight: "1em"
							},
							size: "medium",
							onClick: function() {
								return t(!1)
							}
						}), Object(N.jsx)(se, {
							label: a.startsWith("create") ? i : "save",
							variant: "contained",
							size: "medium",
							disabled: s || o,
							onClick: Object(Ft.a)(Rt.a.mark((function e() {
								return Rt.a.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, r(O);
										case 2:
											d(), t(!1);
										case 4:
										case "end":
											return e.stop()
									}
								}), e)
							})))
						})]
					}), b) : null
				},
				br = Object(w.a)((function(e) {
					return {
						paper: {
							minHeight: "fit-content",
							minWidth: "500px",
							padding: "32px 24px 24px 24px",
							border: "1px solid",
							borderColor: e.palette.grey[300],
							position: "relative",
							"& .MuiPaper-root": {
								boxShadow: "none",
								"& form": {
									padding: 0
								}
							}
						},
						floatingbtn: {
							position: "absolute",
							right: 0,
							top: 0,
							"& button": {
								padding: 0,
								width: 32,
								height: 32,
								borderRadius: 0,
								color: e.palette.grey[600],
								"&:hover": {
									color: e.palette.grey[900]
								},
								"& svg": {
									width: 32,
									height: 32
								}
							}
						},
						mainDialogContent: {
							"& > div, & > div:first-child": {
								padding: 0,
								"& .create-page > div": {
									margin: 0
								},
								"& .simple-form .MuiCardContent-root": {
									padding: 0,
									"& .MuiFormControl-root": {
										margin: 0,
										width: "100%"
									}
								}
							}
						},
						dialogfooter: {
							"& > div": {
								padding: 0,
								display: "block"
							}
						}
					}
				})),
				pr = function(e) {
					var t = br(),
						a = Object(n.useState)(!1),
						r = Object(je.a)(a, 2),
						c = r[0],
						i = r[1],
						o = e.buttonColor,
						l = void 0 === o ? "default" : o,
						d = e.buttonIcon,
						j = void 0 === d ? Object(N.jsx)(N.Fragment, {}) : d,
						u = e.buttonLabel,
						b = e.buttonVariant,
						p = void 0 === b ? "contained" : b,
						O = e.children,
						h = e.dialogSubtitle,
						x = e.dialogTitle,
						m = e.saveButtonLabel,
						f = void 0 === m ? "add" : m,
						v = e.submitAction,
						g = e.disabled,
						y = void 0 !== g && g,
						C = e.helperText,
						w = e.helperTextTypographyProps,
						I = e.type,
						k = void 0 === I ? "create" : I,
						S = Object(z.a)(e, dr);
					return Object(N.jsxs)(N.Fragment, {
						children: [Object(N.jsx)(se, {
							label: u,
							variant: p,
							color: l,
							icon: j,
							disabled: y,
							helperText: C,
							helperTextTypographyProps: w,
							onClick: function() {
								i(!0)
							}
						}), Object(N.jsxs)(ue.a, {
							maxWidth: "md",
							open: c,
							onClose: function() {
								return i(!1)
							},
							classes: t,
							children: [Object(N.jsx)("div", {
								className: t.floatingbtn,
								children: Object(N.jsx)(ae.a, {
									onClick: function() {
										return i(!1)
									},
									children: Object(N.jsx)(Mt, {})
								})
							}), x && Object(N.jsx)(be.a, {
								style: {
									padding: 0
								},
								children: x
							}), h && Object(N.jsx)(be.a, {
								style: {
									padding: 0
								},
								children: Object(N.jsx)(ne.a, {
									variant: "caption",
									children: h
								})
							}), Object(N.jsx)("div", {
								className: t.mainDialogContent,
								children: Object(N.jsx)(pe.a, {
									children: "create" === k ? Object(N.jsx)(Ee.a, Object(s.a)
										(Object(s.a)({}, S), {}, {
											title: Object(N.jsx)(N.Fragment, {}),
											children: Object(N.jsx)(He.a, {
												variant: "standard",
												toolbar: Object(N.jsx)(ur, {
													setModalState: i,
													actionsElemId: "".concat(k, ".").concat(x),
													submitAction: v,
													saveButtonLabel: f
												}),
												redirect: !1,
												children: O
											})
										})) : Object(N.jsx)(Qe.a, Object(s.a)(Object(s.a)({}, S), {}, {
										title: Object(N.jsx)(N.Fragment, {}),
										children: Object(N.jsx)(He.a, {
											variant: "standard",
											toolbar: Object(N.jsx)(ur, {
												setModalState: i,
												actionsElemId: "".concat(k, ".").concat(x),
												submitAction: v
											}),
											redirect: !1,
											children: O
										})
									}))
								})
							}), Object(N.jsx)("div", {
								className: t.dialogfooter,
								children: Object(N.jsx)(he.a, {
									id: "".concat(k, ".").concat(x)
								})
							})]
						})]
					})
				},
				Or = a(712),
				hr = a(713),
				xr = function(e) {
					return Object(N.jsx)(h.a, Object(s.a)(Object(s.a)({}, e), {}, {
						variant: "standard",
						children: Object(N.jsx)(Ve.a, {
							label: "Application",
							source: "application_id",
							reference: "applications",
							link: !1,
							filterToQuery: function(e) {
								return {
									name: e
								}
							},
							alwaysOn: !0,
							children: Object(N.jsx)(Ue.a, {
								optionText: "name"
							})
						})
					}))
				},
				mr = {
					name: "versions",
					list: function(e) {
						return Object(N.jsxs)(Fe, Object(s.a)(Object(s.a)({}, e), {}, {
							sort: {
								field: "created_at",
								order: "DESC"
							},
							filtersOverride: Object(N.jsx)(xr, Object(s.a)({}, e)),
							children: [Object(N.jsx)(lr.a, {
								source: "application_id",
								reference: "applications",
								link: function(e, t) {
									return "/".concat(t, "/").concat(e.application_id,
										"/releases")
								},
								children: Object(N.jsx)(dt, {})
							}), Object(N.jsx)(Ke.a, {
								source: "version"
							}), Object(N.jsx)(kt, {
								source: "size_in_bytes"
							}), Object(N.jsx)(Ke.a, {
								source: "state"
							}), Object(N.jsx)(g.a, {
								source: "created_at"
							})]
						}))
					},
					edit: function(e) {
						return Object(N.jsx)(Qe.a, Object(s.a)(Object(s.a)({}, e), {}, {
							children: Object(N.jsxs)(Zn, {
								children: [Object(N.jsx)(Ke.a, {
									source: "id"
								}), Object(N.jsx)(lr.a, {
									source: "application_id",
									reference: "applications",
									children: Object(N.jsx)(dt, {})
								}), Object(N.jsx)(V.a, {
									source: "version"
								}), Object(N.jsx)(Or.a, {
									source: "created_at"
								}), Object(N.jsx)(hr.a, {
									source: "channelId"
								}), Object(N.jsx)(V.a, {
									source: "dock_button_title"
								}), Object(N.jsx)(V.a, {
									source: "min_ow_version"
								}), Object(N.jsx)(V.a, {
									source: "md5_checksum"
								}), Object(N.jsx)(hr.a, {
									source: "size_in_bytes"
								}), Object(N.jsx)(f.a, {
									source: "state",
									choices: [{
										id: "error",
										name: "Error"
									}, {
										id: "uploaded",
										name: "Uploaded"
									}, {
										id: "signing",
										name: "Signing"
									}, {
										id: "signed",
										name: "Signed"
									}, {
										id: "sign-error",
										name: "Sign error"
									}, {
										id: "diffing",
										name: "Diffing"
									}, {
										id: "diffed",
										name: "Diffed"
									}, {
										id: "diff-error",
										name: "Diff error"
									}, {
										id: "draft",
										name: "Draft"
									}, {
										id: "beta",
										name: "Beta"
									}, {
										id: "publishing",
										name: "Publishing"
									}, {
										id: "phasing",
										name: "Phasing"
									}, {
										id: "public",
										name: "Public"
									}, {
										id: "history",
										name: "History"
									}]
								}), Object(N.jsx)(hr.a, {
									source: "installs"
								}), Object(N.jsx)(hr.a, {
									source: "activeUsers",
									label: "Active users"
								}), Object(N.jsx)(V.a, {
									source: "creationNote",
									label: "Creation note"
								}), Object(N.jsx)(V.a, {
									source: "currentPhase",
									label: "Current phase"
								})]
							})
						}))
					}
				},
				fr = function(e) {
					var t = e.state.createInitialState,
						a = "".concat(e.resource),
						r = Object(ln.a)(),
						c = Object(Bt.a)(),
						i = Object(n.useContext)(or.a).total;
					return Object(N.jsxs)(pr, Object(s.a)(Object(s.a)({}, e), {}, {
						buttonIcon: Object(N.jsx)(Se, {}),
						buttonLabel: "create channel",
						dialogTitle: "Create channel",
						record: t,
						submitAction: function(e) {
							return r.create(a, {
								data: e.getState().values
							}, {
								onFailure: function(e) {
									c("".concat(e), "warning")
								}
							})
						},
						saveButtonLabel: "create",
						disabled: t.appId && i >= 5,
						helperText: "\n The max amount of test channels \n has been reached for this app",
						helperTextTypographyProps: {
							variant: "caption",
							style: {
								position: "relative",
								whiteSpace: "pre-line",
								textAlign: "left",
								marginLeft: "0.3em",
								marginBottom: "0.2em",
								fontSize: "11px"
							}
						},
						children: [t.appId ? null : Object(N.jsx)(Ve.a, {
							filterToQuery: function(e) {
								return {
									name: e
								}
							},
							label: "Application",
							link: !1,
							reference: Fr.name,
							source: "appId",
							children: Object(N.jsx)(Ue.a, {
								optionText: "name",
								validate: [Object(We.h)()]
							})
						}), Object(N.jsx)(Rn, {
							label: "Channel name",
							source: "name",
							validate: {
								required: !0,
								maxLength: 25
							},
							helperText: "This is so you can identify the channel. Channel testers can see this name.",
							helperTextTypographyProps: {
								variant: "caption",
								style: {
									marginTop: ".75em"
								}
							}
						})]
					}))
				},
				vr = function(e) {
					var t, a, r, c = Object(n.useContext)(gr),
						i = c.map,
						s = c.loading,
						o = null === (t = e.record) || void 0 === t ? void 0 : t.id;
					return s && o ? Object(N.jsx)("span", {
						children: "..."
					}) : Object(N.jsx)("span", {
						children: null !== (a = null === (r = i[o]) || void 0 === r ? void 0 :
							r.version) && void 0 !== a ? a : "There's no release in this channel"
					})
				},
				gr = Object(n.createContext)({}),
				yr = function(e) {
					var t = Object(ee.j)().appId,
						a = Object(n.useContext)(or.a).ids,
						r = Object(ln.a)(),
						c = Object(n.useState)({}),
						i = Object(je.a)(c, 2),
						s = i[0],
						o = i[1],
						l = Object(n.useState)(!0),
						d = Object(je.a)(l, 2),
						j = d[0],
						u = d[1];
					return Object(n.useEffect)((function() {
						(function() {
							var e = Object(Ft.a)(Rt.a.mark((function e() {
								var n;
								return Rt.a.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, r.getList(mr.name, {
												filter: {
													application_id: t,
													channelId: a,
													state: [wt.Public]
												},
												pagination: {
													page: 1,
													perPage: a.length
												},
												sort: {
													field: "id",
													order: "DESC"
												}
											});
										case 2:
											n = e.sent, u(!1), o(n.data.reduce((function(e, t) {
												return e[t.channelId] = t, e
											}), {}));
										case 5:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						})()()
					}), [r, a, t]), Object(N.jsx)(gr.Provider, {
						value: {
							map: s,
							loading: j
						},
						children: Object(N.jsx)(we, {
							children: e.children
						})
					})
				},
				Cr = new Nn({
					name: "beta-channels",
					list: function(e) {
						var t = Object(Yt.a)().permissions,
							a = Object(ee.j)().appId,
							n = Object(ln.a)(),
							r = Object(Lt.a)(),
							c = Object(Bt.a)(),
							i = !a;
						if (i && t < 6) return null;
						return Object(N.jsxs)(Fe, Object(s.a)(Object(s.a)({}, e), {}, {
							basePath: "/".concat(Cr.name),
							cardTitle: "Closed testing",
							cardSubtitle: "Create and manage one or more closed testing channels to test pre-release versions of your app",
							createButton: Object(N.jsx)(fr, {}),
							createInitialState: {
								appId: a
							},
							deleteButtonAction: function(e) {
								n.delete(Cr.name, {
									id: e.id,
									previousData: e
								}, {
									onSuccess: function() {
										r(), c("deleted successfully")
									},
									onFailure: function() {
										c("unexpected error encountered", "warning")
									}
								})
							},
							editButtonIcon: Object(N.jsx)(N.Fragment, {}),
							filter: {
								appId: a
							},
							filtersOverride: Object(N.jsx)(N.Fragment, {}),
							hideCardTitle: !1,
							layout: Object(N.jsx)(yr, {}),
							resource: Cr.name,
							editButtonRedirect: function(e, t, a) {
								return "/".concat(Fr.name, "/").concat(a.appId, "/").concat(Cr
									.name, "/").concat(e, "/releases")
							},
							editButtonLabel: "Manage",
							showCreate: !0,
							showDelete: t >= 6,
							showEdit: !0,
							title: "Closed testing",
							empty: !1,
							children: [i && Object(N.jsx)(lr.a, {
								link: function(e) {
									return "applications/".concat(e.appId, "/releases")
								},
								reference: Fr.name,
								source: "appId",
								children: Object(N.jsx)(dt, {})
							}), Object(N.jsx)(Ke.a, {
								source: "name",
								label: "Channel"
							}), Object(N.jsx)(vr, {
								label: "Live version"
							})]
						}))
					},
					edit: sr
				}),
				wr = {
					flex: {
						display: "flex"
					},
					leftCol: {
						flex: 1,
						marginRight: "1em"
					},
					rightCol: {
						flex: 1,
						marginLeft: "1em"
					},
					singleCol: {
						marginTop: "1em",
						marginBottom: "1em"
					}
				},
				Ir = {
					display: "flex",
					flexDirection: "column",
					minWidth: "800px"
				},
				kr = function(e) {
					var t = Object(ee.j)().channelId;
					return Object(N.jsxs)("div", {
						style: Ir,
						children: [t && Object(N.jsx)(Cr.edit, Object(s.a)(Object(s.a)({}, e), {}, {
							id: t,
							basePath: Cr.basePath,
							resource: Cr.resource,
							title: Object(N.jsx)(N.Fragment, {})
						})), Object(N.jsx)("div", {
							style: wr.singleCol,
							children: Object(N.jsx)(yn, Object(s.a)({}, e))
						}), Object(N.jsx)("div", {
							style: wr.singleCol,
							children: Object(N.jsx)(In, Object(s.a)({}, e))
						}), Object(N.jsx)("div", {
							style: wr.singleCol,
							children: Object(N.jsx)(Pa, Object(s.a)({}, e))
						})]
					})
				},
				Sr = Object(w.a)({
					root: {
						alignItems: "flex-start"
					},
					card: {
						backgroundColor: "transparent",
						boxShadow: "none",
						padding: 1
					}
				}),
				Nr = function(e) {
					var t = Object(ee.j)().appId,
						a = Object(lt.a)(Fr.name, t),
						n = a.data,
						r = "Release management";
					return a.loading || !n ? Object(N.jsx)("span", {
						children: r
					}) : Object(N.jsx)(dt, {
						record: n,
						page: r
					})
				},
				Pr = function(e) {
					var t = Sr(),
						a = Object(ee.j)().appId;
					return Object(N.jsx)(Qe.a, Object(s.a)(Object(s.a)({}, e), {}, {
						basePath: "/versions/report",
						resource: "versions/report",
						id: a,
						title: Object(N.jsx)(Nr, {}),
						classes: t,
						children: Object(N.jsx)(kr, {})
					}))
				},
				Tr = Object(w.a)({
					textInputs: {
						width: 400
					}
				}),
				Br = function(e) {
					var t = Tr();
					return Object(N.jsx)(Ee.a, Object(s.a)(Object(s.a)({}, e), {}, {
						children: Object(N.jsxs)(He.a, {
							redirect: "list",
							children: [Object(N.jsx)(V.a, {
								autoFocus: !0,
								source: "name",
								fullWidth: !0,
								variant: "standard",
								formClassName: t.textInputs,
								validate: [Object(We.h)(), Object(We.e)(3), Object(We.d)(45)]
							}), Object(N.jsx)(V.a, {
								source: "author",
								fullWidth: !0,
								formClassName: t.textInputs,
								validate: [Object(We.h)(), Object(We.e)(3), Object(We.d)(45)]
							})]
						})
					}))
				},
				Lr = function(e) {
					var t = e.data,
						a = e.ids;
					return t && a && t[a[0]] ? ["uploaded", "signing", "signed", "diffing",
						"diffed"
					].includes(t[a[0]].state) ? Object(N.jsx)(gn, Object(s.a)({
						data: t,
						ids: a
					}, e)) : ["publishing"].includes(t[a[0]].state) ? Object(N.jsx)(mn, {
						ids: a,
						data: t
					}) : Object(N.jsx)(on, Object(s.a)(Object(s.a)({}, e), {}, {
						data: t,
						ids: a
					})) : Object(N.jsx)(qa, {})
				},
				Ar = function(e) {
					var t = Object(ee.j)(),
						a = t.appId,
						n = t.channelId,
						r = Object(lt.a)(Fr.name, a),
						c = r.data,
						i = r.loading,
						s = Object(lt.a)(Cr.name, n),
						o = s.data,
						l = s.loading,
						d = "";
					return n && o && !l ? d = 'Manage "'.concat(o.name, '" test channel') :
						c && !l && (d = "Release management"), i || !c ? Object(N.jsx)("span", {
							children: d
						}) : Object(N.jsx)(dt, {
							record: c,
							page: d
						})
				},
				Mr = function(e) {
					var t = Object(ee.j)().appId,
						a = Object(lt.a)(Fr.name, t),
						n = a.data,
						r = "Release management";
					return a.loading || !n ? Object(N.jsx)("span", {
						children: r
					}) : Object(N.jsx)(dt, {
						record: n,
						page: r
					})
				},
				_r = function(e) {
					return Object(ee.j)().channelId ? Object(N.jsx)(Ar, Object(s.a)({}, e)) :
						Object(N.jsx)(Mr, Object(s.a)({}, e))
				},
				Rr = Object(w.a)({
					channel: {
						marginBottom: "2em",
						"& div.MuiCard-root": {
							padding: "2em",
							paddingBottom: 0
						},
						"& .MuiToolbar-root": {
							paddingRight: 0
						}
					}
				}),
				Fr = new Nn({
					name: "applications",
					list: ot,
					create: Br,
					edit: Pr,
					icon: et.a,
					custom: {
						releases: function(e) {
							var t = Object(ee.j)(),
								a = t.appId,
								n = t.channelId,
								r = Rr();
							return Object(N.jsx)(Qe.a, Object(s.a)(Object(s.a)({}, e), {}, {
								title: Object(N.jsx)(_r, {}),
								component: "div",
								basePath: "/".concat(Fr.name),
								resource: Fr.name,
								id: a,
								children: Object(N.jsxs)(Zn, Object(s.a)(Object(s.a)({}, e), {}, {
									toolbar: Object(N.jsx)(N.Fragment, {}),
									withPadding: !1,
									children: [n && Object(N.jsx)(Yn, {
										className: r.channel,
										children: Object(N.jsx)(Cr.edit, Object(s.a)(Object(s.a)
											({}, e), {}, {
												id: n,
												basePath: Cr.basePath,
												resource: Cr.resource,
												title: Object(N.jsx)(N.Fragment, {})
											}))
									}), Object(N.jsxs)(Xn, {
										children: [Object(N.jsx)(Yn, {
											children: Object(N.jsx)(ne.a, {
												variant: "subtitle1",
												children: "OPK release"
											})
										}), Object(N.jsx)(Yn, {
											children: Object(N.jsx)(jt.a, {
												basePath: "/".concat(Fr.name),
												resource: Fr.name,
												reference: mr.name,
												target: "application_id",
												filter: {
													state: [wt.Draft, wt.Publishing, wt.Signing, wt
														.Signed, wt.Diffing, wt.Diffed, wt.Uploaded
													],
													channelId: null !== n && void 0 !== n ? n : 0
												},
												sort: {
													field: "created_at",
													order: "DESC"
												},
												children: Object(N.jsx)(Lr, {})
											})
										})]
									}), Object(N.jsxs)(Xn, {
										children: [Object(N.jsx)(Yn, {
											children: Object(N.jsx)(ne.a, {
												variant: "subtitle1",
												children: "Public versions"
											})
										}), Object(N.jsx)(Yn, {
											children: Object(N.jsx)(jt.a, {
												addLabel: !1,
												basePath: "/".concat(Fr.name),
												filter: {
													state: [wt.Public, wt.Phasing],
													channelId: null !== n && void 0 !== n ? n : 0
												},
												fullWidth: !0,
												pagination: Object(N.jsx)(N.Fragment, {}),
												perPage: 5,
												record: {
													id: a
												},
												reference: "versions",
												resource: Fr.name,
												sort: {
													field: "created_at",
													order: "DESC"
												},
												target: "application_id",
												children: Object(N.jsxs)(X.a, {
													rowClick: "expand",
													expand: Object(N.jsx)(Na, Object(s.a)({}, e)),
													children: [Object(N.jsx)(Ke.a, {
														source: "version",
														style: {
															fontWeight: "bold"
														}
													}), Object(N.jsx)(rt, {
														label: "resources.versions.fields.uploaded",
														source: "created_at"
													}), Object(N.jsx)(kt, {
														label: "resources.versions.fields.download_size",
														source: "size_in_bytes"
													}), Object(N.jsx)(wn, {
														label: "Rollout"
													}), Object(N.jsx)(ut.a, {
														source: "installs"
													}), Object(N.jsx)(ut.a, {
														label: "resources.versions.fields.activeInstalls",
														source: "activeUsers"
													}), Object(N.jsx)(It, {
														textAlign: "right",
														label: "",
														source: "url",
														prefix: Ha.apiUrl
													})]
												})
											})
										})]
									}), Object(N.jsxs)(Xn, {
										children: [Object(N.jsx)(Yn, {
											children: Object(N.jsx)(ne.a, {
												variant: "subtitle1",
												children: "Release history"
											})
										}), Object(N.jsx)(Yn, {
											children: Object(N.jsx)(jt.a, {
												addLabel: !1,
												basePath: "/".concat(Fr.name),
												filter: {
													state: [wt.History],
													channelId: null !== n && void 0 !== n ? n : 0
												},
												fullWidth: !0,
												pagination: Object(N.jsx)(Z.a, {}),
												perPage: 5,
												record: {
													id: a
												},
												reference: "versions",
												resource: Fr.name,
												target: "application_id",
												children: Object(N.jsxs)(X.a, {
													rowClick: "expand",
													expand: Object(N.jsx)(Na, Object(s.a)({}, e)),
													children: [Object(N.jsx)(Ke.a, {
														source: "version",
														style: {
															fontWeight: "bold"
														}
													}), Object(N.jsx)(rt, {
														label: "resources.versions.fields.uploaded",
														source: "created_at"
													}), Object(N.jsx)(kt, {
														label: "resources.versions.fields.download_size",
														source: "size_in_bytes"
													}), Object(N.jsx)(ut.a, {
														source: "installs"
													}), Object(N.jsx)(ut.a, {
														label: "resources.versions.fields.activeInstalls",
														source: "activeUsers"
													}), Object(N.jsx)(It, {
														textAlign: "right",
														label: "",
														source: "url",
														prefix: Ha.apiUrl
													})]
												})
											})
										})]
									})]
								}))
							}))
						}
					}
				});
			! function(e) {
				e[e.Unknown = 1] = "Unknown", e[e.User = 2] = "User", e[e.Owner = 3] =
					"Owner"
			}($n || ($n = {}));
			var Dr = [{
					id: $n.User,
					name: "User"
				}, {
					id: $n.Owner,
					name: "Owner"
				}],
				zr = function(e) {
					return Object(N.jsxs)(h.a, Object(s.a)(Object(s.a)({}, e), {}, {
						variant: "standard",
						children: [Object(N.jsx)(Ve.a, {
							label: "User email",
							link: !1,
							source: "userId",
							reference: "users",
							filterToQuery: function(e) {
								return {
									q: e
								}
							},
							alwaysOn: !0,
							children: Object(N.jsx)(Ue.a, {
								optionText: "email"
							})
						}), Object(N.jsx)(Ve.a, {
							label: "Application",
							link: !1,
							source: "appId",
							reference: "applications",
							filterToQuery: function(e) {
								return {
									q: e
								}
							},
							children: Object(N.jsx)(Ue.a, {
								source: "name"
							})
						})]
					}))
				},
				Er = function(e) {
					return Object(N.jsxs)(Fe, Object(s.a)(Object(s.a)({}, e), {}, {
						title: "resources.admin.appPrivileges.listTitle",
						perPage: 25,
						filtersOverride: Object(N.jsx)(zr, {}),
						children: [Object(N.jsx)(lr.a, {
							label: "User",
							source: "userId",
							link: !1,
							reference: "users",
							children: Object(N.jsx)(R, {})
						}), Object(N.jsx)(lr.a, {
							label: "Application",
							link: !1,
							source: "appId",
							reference: "applications",
							children: Object(N.jsx)(Ke.a, {
								source: "name"
							})
						}), Object(N.jsx)(v.a, {
							source: "scope",
							choices: Dr
						})]
					}))
				},
				Hr = function(e) {
					return Object(N.jsx)(Ee.a, Object(s.a)(Object(s.a)({}, e), {}, {
						children: Object(N.jsxs)(He.a, {
							redirect: "list",
							children: [Object(N.jsx)(Ve.a, {
								label: "User",
								source: "userId",
								reference: "users",
								filterToQuery: function(e) {
									return {
										email: e
									}
								},
								children: Object(N.jsx)(Ue.a, {
									optionText: "email",
									validate: [Object(We.h)()]
								})
							}), Object(N.jsx)(Ve.a, {
								label: "Application",
								source: "appId",
								reference: "applications",
								link: !1,
								filterToQuery: function(e) {
									return {
										name: e
									}
								},
								children: Object(N.jsx)(Ue.a, {
									optionText: "name",
									validate: [Object(We.h)()]
								})
							}), Object(N.jsx)(f.a, {
								source: "scope",
								choices: Dr,
								validate: [Object(We.h)()]
							})]
						})
					}))
				},
				Wr = Object(w.a)({
					root: {
						alignItems: "flex-start",
						minWidth: "800px"
					}
				}),
				Vr = function(e) {
					var t = e.record;
					return t ? Object(N.jsx)(lr.a, {
						record: t,
						basePath: "/applications-privilegs",
						resource: "applications-privileges",
						label: "User",
						source: "userId",
						link: !1,
						reference: "users",
						children: Object(N.jsx)(A, {
							size: "32"
						})
					}) : null
				},
				Ur = new Nn({
					name: "applications-privileges",
					list: Er,
					create: Hr,
					edit: function(e) {
						var t = Wr();
						return Object(N.jsx)(Qe.a, Object(s.a)(Object(s.a)({
							title: Object(N.jsx)(Vr, {}),
							classes: t
						}, e), {}, {
							children: Object(N.jsxs)(He.a, {
								children: [Object(N.jsx)(lr.a, {
									label: "User",
									source: "userId",
									link: !1,
									reference: "users",
									children: Object(N.jsx)(Ke.a, {
										source: "email"
									})
								}), Object(N.jsx)(lr.a, {
									label: "Application",
									source: "appId",
									reference: "applications",
									children: Object(N.jsx)(Ke.a, {
										source: "name"
									})
								}), Object(N.jsx)(f.a, {
									source: "scope",
									choices: Dr,
									validate: [Object(We.h)()]
								})]
							})
						}))
					},
					icon: O.a
				}),
				qr = function(e) {
					return Object(N.jsx)(Qe.a, Object(s.a)(Object(s.a)({}, e), {}, {
						children: Object(N.jsxs)(Zn, {
							children: [Object(N.jsx)(V.a, {
								source: "id"
							}), Object(N.jsx)(V.a, {
								source: "name"
							}), Object(N.jsx)(V.a, {
								source: "author"
							}), Object(N.jsx)(m.a, {
								source: "shouldDiff"
							}), Object(N.jsx)(Ve.a, {
								label: "Partner",
								source: "partnerId",
								reference: "partners",
								filterToQuery: function(e) {
									return {
										name: e
									}
								},
								children: Object(N.jsx)(Ue.a, {
									allowEmpty: !0,
									optionText: "name"
								})
							})]
						})
					}))
				},
				Zr = a(1372),
				Kr = function(e) {
					var t = Object(n.useContext)(or.a),
						a = Object(n.useRef)(null);
					Object(n.useEffect)((function() {
						return function() {
							return r()
						}
					}), []), Object(n.useEffect)((function() {
						a.current = t
					}));
					var r = function() {
						if (a) {
							var t = a.current,
								n = t.setFilters,
								r = t.filterValues,
								c = t.displayedFilters;
							delete r["".concat(e.from)], delete r["".concat(e.to)], delete c["".concat(
								e.source)], n(r, c)
						}
					};
					return Object(N.jsxs)(N.Fragment, {
						children: [Object(N.jsx)(Zr.a, Object(s.a)(Object(s.a)({
							style: {
								marginRight: "1em"
							}
						}, e), {}, {
							source: e.from,
							label: "From"
						})), Object(N.jsx)(Zr.a, Object(s.a)(Object(s.a)({}, e), {}, {
							source: e.to,
							label: "To"
						}))]
					})
				},
				Qr = function(e) {
					return Object(N.jsxs)(h.a, Object(s.a)(Object(s.a)({}, e), {}, {
						variant: "standard",
						children: [Object(N.jsx)(Ve.a, {
							label: "Application",
							source: "appId",
							reference: "applications",
							link: !1,
							alwaysOn: !0,
							filterToQuery: function(e) {
								return {
									name: e
								}
							},
							children: Object(N.jsx)(Ue.a, {
								optionText: "name"
							})
						}), Object(N.jsx)(Ve.a, {
							label: "Users",
							source: "userId",
							reference: "users",
							filterToQuery: function(e) {
								return {
									email: e
								}
							},
							children: Object(N.jsx)(Ue.a, {
								optionText: "email"
							})
						}), Object(N.jsx)(Kr, {
							source: "date",
							from: "whenFrom",
							to: "whenTo"
						})]
					}))
				},
				Jr = function(e) {
					var t = Object(w.a)({
							auditSubtitle: {
								fontSize: "small"
							},
							auditTitle: {
								fontWeight: "bold"
							}
						})(),
						a = function(e) {
							return Object(N.jsxs)("div", {
								children: [Object(N.jsx)("div", {
									className: t.auditTitle,
									children: e.record.controller
								}), Object(N.jsx)("div", {
									className: t.auditSubtitle,
									children: e.record.function
								})]
							})
						},
						n = function(e) {
							return Object(N.jsxs)("div", {
								children: [Object(N.jsxs)("div", {
									children: [e.record.action, ":"]
								}), Object(N.jsx)("div", {
									className: t.auditSubtitle,
									children: e.record.actionDescription
								})]
							})
						};
					return Object(N.jsxs)(Fe, Object(s.a)(Object(s.a)({}, e), {}, {
						perPage: 25,
						filtersOverride: Object(N.jsx)(Qr, {}),
						sort: {
							field: "requestTime",
							order: "DESC"
						},
						children: [Object(N.jsx)(lr.a, {
							label: "Application",
							source: "appId",
							reference: "applications",
							link: !1,
							children: Object(N.jsx)(dt, Object(s.a)({}, e))
						}), Object(N.jsx)(a, Object(s.a)({
							label: "Item"
						}, e)), Object(N.jsx)(n, Object(s.a)({
							label: "Change"
						}, e)), Object(N.jsx)(lr.a, {
							source: "userId",
							reference: "users",
							children: Object(N.jsx)(R, {})
						}), Object(N.jsx)(g.a, {
							showTime: !0,
							label: "Date",
							source: "requestTime"
						})]
					}))
				},
				Yr = a(176),
				Gr = a.n(Yr),
				$r = a(111),
				Xr = function() {
					var e = Object(ee.h)();
					return Object(N.jsxs)(N.Fragment, {
						children: [Object(N.jsx)($r.b, {
							title: "Oops!"
						}), Object(N.jsxs)("div", {
							children: [Object(N.jsx)("p", {
								children: "Sorry, we couldn't find what you are looking for..."
							}), Object(N.jsx)("div", {
								children: Object(N.jsx)(Nt.a, {
									variant: "contained",
									startIcon: Object(N.jsx)(Gr.a, {}),
									onClick: function() {
										return e.goBack()
									},
									children: "Back"
								})
							})]
						})]
					})
				},
				ec = {
					name: "diffs",
					list: function(e) {
						return Object(N.jsxs)(Fe, Object(s.a)(Object(s.a)({}, e), {}, {
							sort: {
								field: "createdAt",
								order: "DESC"
							},
							children: [Object(N.jsx)(lr.a, {
								label: "Application",
								source: "sourceVersionId",
								reference: "versions",
								link: !1,
								children: Object(N.jsx)(lr.a, {
									source: "application_id",
									reference: "applications",
									link: function(e, t) {
										return "applications/".concat(e.application_id,
											"/releases")
									},
									children: Object(N.jsx)(dt, {})
								})
							}), Object(N.jsx)(lr.a, {
								source: "sourceVersionId",
								reference: "versions",
								link: !1,
								children: Object(N.jsx)(Ke.a, {
									source: "version"
								})
							}), Object(N.jsx)(lr.a, {
								source: "targetVersionId",
								reference: "versions",
								link: !1,
								children: Object(N.jsx)(Ke.a, {
									source: "version"
								})
							}), Object(N.jsx)(kt, {
								source: "size",
								textAlign: "center"
							}), Object(N.jsx)(It, {
								prefix: "https://devconsole-apps.s3.us-east-2.amazonaws.com/",
								textAlign: "right",
								label: "",
								source: "url"
							}), Object(N.jsx)(rt, {
								source: "createdAt"
							})]
						}))
					},
					edit: a(1380).a
				},
				tc = a(388),
				ac = Object(s.a)(Object(s.a)({}, tc.a), {}, {
					login: {
						title: "Overwolf Developers Console",
						"login-with-google": "Login with Google"
					},
					pos: {
						title: "Overwolf Developers Console",
						search: "Search",
						configuration: "Configuration",
						language: "Language",
						theme: {
							name: "Theme",
							light: "Light",
							dark: "Dark"
						},
						dashboard: {
							monthly_revenue: "Monthly Revenue",
							new_orders: "New Orders",
							pending_reviews: "Pending Reviews",
							new_customers: "New Customers",
							pending_orders: "Pending Orders",
							order: {
								items: "by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items"
							},
							welcome: {
								title: "Welcome to react-admin demo",
								subtitle: "This is the admin of an imaginary poster shop. Feel free to explore and modify the data - it's local to your computer, and will reset each time you reload.",
								aor_button: "react-admin site",
								demo_button: "Source for this demo"
							}
						},
						menu: {
							sales: "Sales",
							catalog: "Catalog",
							customers: "Customers",
							admin: "Settings"
						}
					},
					resources: {
						applications: {
							name: "Application |||| All applications",
							create: "Create",
							fields: {
								app_name: "App Name",
								rating: "Rating",
								author: "Author",
								extension: "Extension Id",
								lastUpdate: "Last Update"
							}
						},
						mods: {
							name: "All mods",
							create: "Create Mod",
							fields: {
								app_name: "Mod Name",
								author: "Author",
								extension: "Extension Id",
								lastUpdate: "Last Update"
							},
							versions: {
								upload: "Drop your .zip here, or select a file"
							}
						},
						versions: {
							name: "Versions",
							fields: {
								uploaded: "Uploaded",
								published: "Published",
								download_size: "Download size",
								activeInstalls: "Active Installs",
								remove: "Remove",
								halt: "Halt",
								resume: "Resume",
								publish: "Publish"
							},
							draft: {
								title: "OPK release",
								drag_opk: "Drop your app OPK here, or select a file.",
								error_uploading_opk: "Error uploading OPK",
								new_version_created: "New version created!",
								removeConfirm: {
									title: "Remove draft version",
									question: "Are you sure you want to remove the draft version?"
								},
								remove_success: "Successfully removed version",
								remove_error: "Failed to remove version - please try again",
								publishConfirm: {
									title: "Publish draft version",
									question: "Are you sure you want to publish the draft version?"
								},
								publishing: "publishing",
								publish_success: "Successfully published version",
								publish_error: "Failed to publish version - please try again"
							},
							rollout: {
								title: "Release rollout percentage",
								start_rollout: "Start rollout to production",
								start_rollout_test: "Start rollout",
								increase_rollout: "Increase rollout %",
								increase_rollout_success: "Successfully increased version rollout percentage",
								increase_rollout_failure: "Could not increase version rollout percentage",
								increaseRolloutConfirm: {
									title: "Increase version rollout percentage",
									question: "Are you sure you want to increase the version rollout percentage?"
								},
								specify_rollout: "Specify the percentage of your user base that you want to rollout this release to",
								rollout_percent: "Rollout percentage",
								no_history: "There's no rollout history for this version",
								halted: "HALTED",
								halt_success: "Successfully halted version rollout",
								halt_failure: "Could not halt version rollout",
								haltConfirm: {
									title: "Halt version rollout",
									question: "Are you sure you want to halt this version's rollout?"
								},
								resume_success: "Successfully resumed version rollout",
								resume_failure: "Could not resume version rollout",
								resumeConfirm: {
									title: "Reusme version rollout",
									question: "Are you sure you want to resume this version's rollout?"
								},
								full_rollout: "FULL ROLLOUT"
							},
							public: {
								title: "Public versions"
							},
							release_history: "Release history"
						},
						admin: {
							users: {
								name: "User |||| Users"
							},
							appPrivileges: {
								name: "App privileges",
								listTitle: "App privileges"
							},
							audit: {
								name: "Activity Log"
							}
						},
						customers: {
							name: "Customer |||| Customers",
							fields: {
								commands: "Orders",
								groups: "Segments",
								last_seen_gte: "Visited Since",
								name: "Name",
								total_spent: "Total spent"
							},
							tabs: {
								identity: "Identity",
								address: "Address",
								orders: "Orders",
								reviews: "Reviews",
								stats: "Stats"
							},
							page: {
								delete: "Delete Customer"
							}
						},
						commands: {
							name: "Order |||| Orders",
							title: "Order %{reference}",
							fields: {
								basket: {
									delivery: "Delivery",
									reference: "Reference",
									quantity: "Quantity",
									sum: "Sum",
									tax_rate: "Tax Rate",
									total: "Total",
									unit_price: "Unit Price"
								},
								customer_id: "Customer",
								date_gte: "Passed Since",
								date_lte: "Passed Before",
								total_gte: "Min amount",
								status: "Status",
								returned: "Returned"
							}
						},
						invoices: {
							name: "Invoice |||| Invoices",
							fields: {
								date: "Invoice date",
								customer_id: "Customer",
								command_id: "Order",
								date_gte: "Passed Since",
								date_lte: "Passed Before",
								total_gte: "Min amount",
								address: "Address"
							}
						},
						products: {
							name: "Poster |||| Posters",
							fields: {
								category_id: "Category",
								height_gte: "Min height",
								height_lte: "Max height",
								height: "Height",
								image: "Image",
								price: "Price",
								reference: "Reference",
								stock_lte: "Low Stock",
								stock: "Stock",
								thumbnail: "Thumbnail",
								width_gte: "Min width",
								width_lte: "Max width",
								width: "Width"
							},
							tabs: {
								image: "Image",
								details: "Details",
								description: "Description",
								reviews: "Reviews"
							}
						},
						categories: {
							name: "Category |||| Categories",
							fields: {
								products: "Products"
							}
						},
						reviews: {
							name: "Review |||| Reviews",
							detail: "Review detail",
							fields: {
								customer_id: "Customer",
								command_id: "Order",
								product_id: "Product",
								date_gte: "Posted since",
								date_lte: "Posted before",
								date: "Date",
								comment: "Comment",
								rating: "Rating"
							},
							action: {
								accept: "Accept",
								reject: "Reject"
							},
							notification: {
								approved_success: "Review approved",
								approved_error: "Error: Review not approved",
								rejected_success: "Review rejected",
								rejected_error: "Error: Review not rejected"
							}
						},
						segments: {
							name: "Segments",
							fields: {
								customers: "Customers",
								name: "Name"
							},
							data: {
								compulsive: "Compulsive",
								collector: "Collector",
								ordered_once: "Ordered once",
								regular: "Regular",
								returns: "Returns",
								reviewer: "Reviewer"
							}
						}
					}
				}),
				nc = a(745),
				rc = a(1367),
				cc = a(752),
				ic = a(399),
				sc = a(1298),
				oc = function() {
					return Object(aa.f)((function(e) {
						return e.admin.loading > 0
					})) ? Object(N.jsx)(sc.a, {
						color: "secondary"
					}) : null
				},
				lc = {
					50: "#0d0d0d",
					100: "#1a1a1a",
					200: "#262626",
					300: "#333333",
					400: "#4d4d4d",
					500: "#808080",
					600: "#999999",
					700: "#b2b2b2",
					800: "#cccccc",
					900: "#e5e5e5"
				},
				dc = {
					50: "#e9e8ed",
					100: "#c8c6d1",
					200: "#a4a1b3",
					300: "#7f7b94",
					400: "#635e7d",
					500: "#484266",
					600: "#413c5e",
					700: "#383353",
					800: "#302b49",
					900: "#211d38",
					A100: "#8e7dff",
					A200: "#624aff",
					A400: "#3517ff",
					A700: "#2100fc",
					contrastDefaultColor: "light"
				},
				jc = "#D34037",
				uc = {
					MuiMenuItem: {
						root: {
							paddingTop: "12px",
							paddingBottom: "12px",
							color: lc[800],
							fontSize: "16px",
							lineHeight: "24px"
						},
						dense: {
							fontSize: "16px",
							lineHeight: "24px"
						}
					},
					MuiInputBase: {
						input: {
							border: "none",
							height: 24,
							padding: "6px 12px"
						},
						inputAdornedStart: {
							marginLeft: "-.5em",
							pointerEvents: "none"
						},
						multiline: {
							height: "auto",
							padding: "6px 12px",
							"&.MuiInputBase-marginDense": {
								paddingTop: 6
							}
						},
						root: {
							backgroundColor: lc[200],
							color: lc[700],
							minHeight: 36,
							border: "none",
							"&::after, &::before": {
								display: "none !important"
							},
							"&.Mui-focused": {
								color: lc[900]
							},
							"&:hover, &:hover .MuiSelect-icon": {
								color: lc[900]
							}
						},
						inputMarginDense: {
							paddingTop: ""
						}
					},
					RaAutocompleteSuggestionList: {
						suggestionsPaper: {
							backgroundColor: lc[300],
							marginTop: "0 !important"
						},
						root: {
							paddingTop: 6,
							paddingBottom: 6
						}
					},
					MuiOutlinedInput: {
						root: {
							borderRadius: 0,
							border: "none",
							"&:hover .MuiOutlinedInput-notchedOutline": {
								borderColor: "transparent"
							}
						},
						notchedOutline: {
							borderColor: "transparent"
						},
						input: {
							padding: "6px 12px"
						}
					},
					MuiInputAdornment: {
						root: {},
						positionStart: {
							pointerEvents: "none"
						}
					},
					MuiFormLabel: {
						root: {
							zIndex: 1,
							"&.Mui-focused": {
								color: lc[700]
							}
						}
					},
					MuiInput: {
						input: {
							"&::-webkit-calendar-picker-indicator": {
								filter: "invert(0.9)",
								transform: "translate(6px, 0px)"
							}
						}
					},
					MuiRating: {
						root: {
							color: jc
						}
					},
					MuiInputLabel: {
						marginDense: {
							transform: "translate(12px, 26px) scale(1)"
						},
						shrink: {
							transform: "translate(0, 0) scale(0.75)"
						},
						filled: {
							"&.MuiInputLabel-marginDense": {
								transform: "translate(12px, 26px) scale(1)"
							},
							"&.MuiInputLabel-shrink": {
								transform: "translate(0, 0) scale(0.75) !important"
							}
						}
					},
					MuiTable: {
						root: {
							minWidth: "800px"
						}
					},
					MuiAvatar: {
						root: {
							width: "32px",
							height: "32px"
						}
					},
					MuiAppBar: {
						colorDefault: {
							backgroundColor: lc[100],
							color: "#ffffff"
						}
					},
					MuiExpansionPanel: {
						rounded: {
							"&:first-child": {
								borderTopLeftRadius: "none",
								borderTopRightRadius: "none"
							},
							"&:last-child": {
								borderBottomLeftRadius: "none",
								borderBottomRightRadius: "none"
							}
						}
					},
					MuiChip: {
						root: {
							height: 28,
							backgroundColor: lc[300],
							color: lc[800]
						},
						label: {
							fontSize: 14,
							lineHeight: "16px",
							"&:first-letter": {
								textTransform: "uppercase"
							}
						},
						sizeSmall: {
							height: 24
						},
						labelSmall: {
							fontSize: 12
						},
						clickable: {
							transition: "color 150ms ease",
							"&:hover": {
								backgroundColor: lc[300],
								color: lc[900]
							},
							"&:hover .MuiChip-deleteIcon": {
								color: lc[900]
							}
						}
					},
					RaCardContentInner: {
						root: {
							"&:hover .ra-input .dzu-inputLabel": {
								backgroundColor: lc[300]
							},
							"& .ra-input .dzu-previewContainer": {
								padding: "50px 16px",
								borderBottom: "none",
								"& .dzu-previewFileName": {
									color: lc[900]
								},
								"& progress::-webkit-progress-bar": {
									backgroundColor: jc
								},
								"& .dzu-previewButton": {
									filter: "invert(1)",
									"&:hover": {
										filter: "invert(0.5)"
									}
								}
							}
						}
					},
					MuiButton: {
						root: {
							height: 36,
							borderRadius: "none",
							fontWeight: "bold",
							fontSize: 16
						},
						label: {
							paddingLeft: 0,
							fontWeight: "normal",
							textTransform: "capitalize"
						},
						containedSizeSmall: {
							fontSize: 14
						},
						contained: {
							backgroundColor: lc[300],
							"&:hover": {
								backgroundColor: lc[400],
								boxShadow: "none"
							},
							"&.MuiButton-containedPrimary.Mui-disabled": {
								opacity: .5,
								color: lc[900],
								backgroundColor: jc
							}
						},
						outlinedSizeSmall: {
							color: lc[900],
							"&:hover": {
								backgroundColor: lc[200]
							}
						},
						textPrimary: {
							backgroundColor: "transparent",
							color: lc[900],
							"&:hover": {
								backgroundColor: lc[400],
								boxShadow: "none"
							}
						}
					},
					MuiSvgIcon: {
						root: {
							verticalAlign: "middle"
						}
					},
					MuiStepIcon: {
						root: {
							"&$active": {
								color: dc[500]
							}
						}
					},
					MuiTooltip: {
						popper: {
							pointerEvents: "all"
						},
						tooltip: {
							backgroundColor: lc[300],
							color: lc[800],
							boxShadow: "0px 2px 15px #000000",
							fontSize: "1rem",
							padding: "12px 16px"
						},
						tooltipPlacementBottom: {
							margin: "8px 0 0 0 !important",
							"&::before": {
								content: '""',
								position: "absolute",
								left: 0,
								right: 0,
								margin: "auto",
								marginTop: -20,
								width: 0,
								height: 0,
								borderStyle: "solid",
								borderWidth: "0 8px 8px 8px",
								borderColor: "transparent transparent ".concat(lc[300],
									" transparent")
							}
						},
						tooltipPlacementTop: {
							"&::after": {
								content: '""',
								position: "absolute",
								left: 0,
								right: 0,
								margin: "auto",
								marginTop: 34,
								width: 0,
								height: 0,
								borderStyle: "solid",
								borderWidth: "8px 8px 0 8px",
								borderColor: "".concat(lc[300],
									" transparent transparent transparent")
							}
						}
					},
					MuiSwitch: {
						root: {
							padding: 6
						},
						track: {
							borderRadius: 14,
							opacity: "1 !important",
							backgroundColor: lc[300]
						},
						colorPrimary: {
							"&.Mui-checked": {
								color: "#ffffff"
							}
						},
						switchBase: {
							"&:hover": {
								backgroundColor: "transparent"
							},
							"&:hover + .MuiSwitch-track": {
								backgroundColor: lc[200]
							}
						}
					},
					MuiListItem: {
						button: {
							"&:hover": {
								backgroundColor: lc[200]
							}
						},
						root: {
							"&.Mui-selected": {
								backgroundColor: "transparent"
							},
							"&.Mui-selected:hover": {
								backgroundColor: "#4d4d4d80"
							}
						}
					},
					RaDeleteWithUndoButton: {
						deleteButton: {
							color: lc[600],
							fontSize: 16,
							padding: "6px 16px",
							"&:hover": {
								color: lc[900],
								backgroundColor: lc[300]
							}
						}
					},
					MuiListItemIcon: {
						root: {
							color: "unset"
						}
					},
					MuiList: {
						padding: {
							paddingTop: 0,
							paddingBottom: 0,
							backgroundColor: lc[300],
							color: lc[800],
							"& li": {
								paddingTop: 6,
								paddingBottom: 6
							},
							"& li:hover": {
								backgroundColor: "#4d4d4d80"
							}
						}
					},
					RaButton: {
						button: {
							padding: "6px 16px",
							fontSize: 16
						},
						label: {
							paddingLeft: 0,
							textTransform: "capitalize"
						},
						smallIcon: {
							fontSize: 18,
							paddingRight: 8
						}
					},
					RaLink: {
						link: {
							color: lc[700],
							textDecoration: "underline",
							"&:hover": {
								color: lc[900]
							}
						}
					},
					RaReferenceField: {
						link: {
							color: lc[700],
							"&:hover": {
								color: lc[900]
							}
						}
					},
					RaToolbar: {
						toolbar: {
							backgroundColor: lc[100]
						},
						desktopToolbar: {
							marginTop: 0
						}
					},
					MuiFilledInput: {
						root: {
							position: "unset",
							transition: "",
							marginTop: 16,
							borderTopLeftRadius: "",
							borderTopRightRadius: "",
							backgroundColor: ""
						},
						inputMarginDense: {
							paddingTop: ""
						},
						input: {
							padding: "",
							"&::-webkit-calendar-picker-indicator": {
								filter: "invert(0.9)",
								transform: "translate(6px, 0px)"
							}
						}
					},
					MuiFormHelperText: {
						contained: {
							marginLeft: 0,
							marginRight: 0
						}
					},
					MuiDialog: {
						paperWidthSm: {
							border: "1px solid ".concat(lc[300])
						}
					},
					MuiDialogActions: {
						root: {
							paddingLeft: 24,
							paddingRight: 24,
							paddingBottom: 16
						}
					},
					MuiDialogContent: {
						root: {
							"&:first-child": {
								paddingTop: 0
							}
						}
					},
					WAMuiChipInput: {
						inputRoot: {
							paddingBottom: 14
						}
					},
					MuiTypography: {
						h6: {
							color: lc[900]
						}
					},
					RaEmpty: {
						icon: {
							width: 100,
							height: 100
						},
						message: {
							margin: "24px 0px",
							"& .MuiTypography-paragraph": {
								fontSize: 24
							}
						}
					},
					RaSelectArrayInput: {
						chip: {
							margin: "2px 4px 2px 0px",
							backgroundColor: lc[50]
						}
					},
					MuiSelect: {
						selectMenu: {
							minHeight: "unset"
						},
						icon: {
							top: "inherit"
						}
					},
					RaSimpleFormIterator: {
						index: {
							paddingTop: "2em",
							fontWeight: "bold",
							color: jc,
							position: "relative",
							left: -9
						}
					},
					RaFormInput: {
						input: {
							width: 326
						}
					},
					MuiPaper: {
						rounded: {
							borderRadius: "none"
						},
						root: {
							"& .react-mde": {
								border: "none",
								"& .mde-header": {
									backgroundColor: lc[200],
									borderBottomColor: lc[400],
									"& .mde-tabs button": {
										color: lc[700]
									},
									"& ul.mde-header-group li.mde-header-item button": {
										color: lc[700]
									},
									"& svg": {
										width: "1em",
										height: "1em",
										display: "inline-block",
										verticalAlign: "-0.125em",
										fontSize: "inherit"
									}
								},
								"& .mde-text": {
									backgroundColor: lc[200],
									color: lc[700],
									outline: "none"
								},
								"& .mde-preview": {
									minHeight: "200px !important",
									height: "200px",
									overflow: "auto"
								}
							}
						}
					},
					RaPaginationActions: {
						currentPageButton: {
							backgroundColor: "rgba(178, 178, 178, 0.2)"
						}
					},
					MuiFormControlLabel: {
						labelPlacementStart: {
							marginLeft: 0
						}
					}
				},
				bc = {
					palette: {
						type: "dark",
						primary: {
							main: "#D34037"
						},
						error: {
							main: jc
						},
						text: {
							primary: lc[700]
						},
						background: {
							default: lc[50],
							paper: lc[100]
						},
						secondary: dc,
						grey: lc
					},
					typography: {
						fontFamily: "Lato , sans-serif"
					},
					overrides: uc,
					sidebar: {
						width: 280
					}
				},
				pc = {
					palette: {
						type: "light",
						primary: {
							50: "#e2e2e2",
							100: "#b7b7b7",
							200: "#888888",
							300: "#585858",
							400: "#343434",
							500: "#101010",
							600: "#0e0e0e",
							700: "#0c0c0c",
							800: "#090909",
							900: "#050505",
							A100: "#ff4e4e",
							A200: "#ff1b1b",
							A400: "#e70000",
							A700: "#ce0000",
							contrastDefaultColor: "light"
						},
						secondary: {
							50: "#fae8e7",
							100: "#f2c6c3",
							200: "#e9a09b",
							300: "#e07973",
							400: "#da5d55",
							500: "#d34037",
							600: "#ce3a31",
							700: "#c8322a",
							800: "#c22a23",
							900: "#b71c16",
							A100: "#ffeaea",
							A200: "#ffb9b7",
							A400: "#ff8884",
							A700: "#ff6f6a",
							contrastDefaultColor: "light"
						}
					},
					overrides: uc,
					sidebar: {
						width: 280
					}
				},
				Oc = a(723),
				hc = a.n(Oc),
				xc = a(391),
				mc = a.n(xc),
				fc = a(758),
				vc = a(389),
				gc = a(1349),
				yc = a(283),
				Cc = a(1304),
				wc = a(1373),
				Ic = a(1368),
				kc = Object(w.a)((function(e) {
					return {
						icon: {
							minWidth: e.spacing(5)
						},
						sidebarIsOpen: {
							transition: "padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
							"&>a": {
								paddingLeft: 32
							}
						},
						sidebarIsClosed: {
							paddingLeft: 0,
							transition: "padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"
						},
						submenuOpen: {}
					}
				})),
				Sc = function(e) {
					var t = e.handleToggle,
						a = e.sidebarIsOpen,
						r = e.isOpen,
						c = e.name,
						i = e.icon,
						s = e.children,
						o = e.dense,
						l = Object(n.useState)(r),
						j = Object(je.a)(l, 2),
						u = j[0],
						b = j[1],
						p = Object(ee.i)(),
						O = Object(d.a)(),
						h = kc();
					Object(n.useEffect)((function() {
						Array.isArray(s) && b(s.some((function(e) {
							var t;
							return p.pathname.startsWith(null === e || void 0 === e ||
								null === (t = e.props) || void 0 === t ? void 0 : t.to)
						})))
					}), [p, s]);
					var x = Object(N.jsxs)(yc.a, {
						dense: o,
						button: !0,
						onClick: t,
						children: [Object(N.jsx)(Cc.a, {
							className: h.icon,
							children: r ? Object(N.jsx)(xt.a, {}) : i
						}), Object(N.jsx)(ne.a, {
							className: u ? h.submenuOpen : "",
							variant: "inherit",
							color: "textSecondary",
							children: O(c)
						})]
					});
					return Object(N.jsxs)(n.Fragment, {
						children: [a || r ? x : Object(N.jsx)(er.a, {
							title: O(c),
							placement: "right",
							children: x
						}), Object(N.jsxs)(Ic.a, { in : r,
							timeout: "auto",
							unmountOnExit: !0,
							children: [Object(N.jsx)(gc.a, {
								dense: o,
								component: "div",
								disablePadding: !0,
								className: a ? h.sidebarIsOpen : h.sidebarIsClosed,
								children: s
							}), Object(N.jsx)(wc.a, {})]
						})]
					})
				},
				Nc = function(e) {
					return Object(N.jsxs)(le.a, {
						viewBox: e.viewBox,
						children: [Object(N.jsx)("path", {
							d: "M26.6612 27C29.9127 24.4363 32 20.4619 32 16C32 8.26801 25.732 2 18 2C10.268 2 4 8.26801 4 16C4 20.4619 6.08734 24.4363 9.3388 27H26.6612ZM17 11C17 10.4477 17.4477 10 18 10C18.5523 10 19 10.4477 19 11V21C19 21.5523 18.5523 22 18 22C17.4477 22 17 21.5523 17 21V11ZM12 19C12 18.4477 12.4477 18 13 18C13.5523 18 14 18.4477 14 19V21C14 21.5523 13.5523 22 13 22C12.4477 22 12 21.5523 12 21V19ZM23 14C22.4477 14 22 14.4477 22 15V21C22 21.5523 22.4477 22 23 22C23.5523 22 24 21.5523 24 21V15C24 14.4477 23.5523 14 23 14Z"
						}), Object(N.jsx)("path", {
							d: "M29.7682 32.3393L27.0493 29H8.95074L6.23176 32.3393C5.69918 32.9934 6.14348 34 6.96477 34H29.0352C29.8565 34 30.3008 32.9934 29.7682 32.3393Z"
						})]
					})
				},
				Pc = a(719),
				Tc = a.n(Pc),
				Bc = a(720),
				Lc = a.n(Bc),
				Ac = a(390),
				Mc = a.n(Ac),
				_c = a(721),
				Rc = a.n(_c),
				Fc = function(e) {
					return Object(N.jsx)(le.a, Object(s.a)(Object(s.a)({}, e), {}, {
						children: Object(N.jsx)("path", {
							d: "M 22 2 C 22 2 16 2 14 4 C 11.675 6.325 6 15 6 15 L 9 18 C 9 18 17.675 12.325 20 10 C 22 8 22 2 22 2 z M 9 18 L 10 22 C 13.536 19.879 13 17 13 16 L 9 18 z M 6 15 L 8 11 C 7 11 4.121 10.464 2 14 L 6 15 z M 16.875 5.125 C 17.38675 5.125 17.89075 5.32825 18.28125 5.71875 C 19.06225 6.49875 19.06225 7.75025 18.28125 8.53125 C 17.50025 9.31225 16.24975 9.31225 15.46875 8.53125 C 14.68775 7.75025 14.68775 6.49975 15.46875 5.71875 C 15.85925 5.32825 16.36325 5.125 16.875 5.125 z M 5 17 C 2 18 2.0625 21.9375 2.0625 21.9375 C 2.0625 21.9375 6 22 7 19 L 4 20 L 5 17 z"
						})
					}))
				},
				Dc = function(e) {
					return Object(N.jsx)(le.a, Object(s.a)(Object(s.a)({}, e), {}, {
						children: Object(N.jsx)("path", {
							d: "M5.20465 18.6659C5.26968 18.8647 5.4628 19 5.6813 19H18.3187C18.5372 19 18.7303 18.8647 18.7954 18.6659L21.9765 8.94604C22.1012 8.56499 21.7074 8.21591 21.3174 8.36176L16.04 10.3351C15.7932 10.4274 15.5138 10.3198 15.4035 10.0901L12.4506 3.93899C12.269 3.56083 11.7306 3.56084 11.5491 3.93901L8.59647 10.0901C8.48622 10.3198 8.20675 10.4274 7.95997 10.3351L2.68259 8.36176C2.29255 8.21591 1.89879 8.56499 2.0235 8.94604L5.20465 18.6659Z"
						})
					}))
				},
				zc = function(e) {
					return Object(N.jsxs)(le.a, Object(s.a)(Object(s.a)({}, e), {}, {
						children: [Object(N.jsx)("path", {
							d: "M10.5829 15.8017C10.6197 15.9195 10.731 16 10.8571 16H17.1429C17.269 16 17.3803 15.9195 17.4171 15.8017L18.987 10.7804C19.0574 10.5554 18.8296 10.351 18.6061 10.4385L16.4659 11.6621C16.1465 11.8448 15.7489 11.7002 15.6005 11.3475L14.2617 8.16563C14.2111 8.05521 14.1055 8 14 8C13.8945 8 13.7889 8.05521 13.7383 8.16563L12.3995 11.3475C12.2511 11.7002 11.8535 11.8448 11.5341 11.6621L9.39392 10.4385C9.17036 10.351 8.94265 10.5554 9.013 10.7804L10.5829 15.8017Z"
						}), Object(N.jsx)("path", {
							"fill-rule": "evenodd",
							"clip-rule": "evenodd",
							d: "M6 1C5.44772 1 5 1.44772 5 2V22C5 22.5523 5.44772 23 6 23H22C22.5523 23 23 22.5523 23 22V2C23 1.44772 22.5523 1 22 1H6ZM7 3V21H21V3H7Z"
						}), Object(N.jsx)("path", {
							d: "M1 20C1 20.5523 1.44772 21 2 21C2.55229 21 3 20.5523 3 20L3 4C3 3.44772 2.55228 3 2 3C1.44772 3 1 3.44772 1 4V20Z"
						})]
					}))
				},
				Ec = function(e) {
					return Object(N.jsxs)(le.a, Object(s.a)(Object(s.a)({}, e), {}, {
						children: [Object(N.jsx)("path", {
							d: "M7.5 9C9.433 9 11 7.433 11 5.5C11 3.567 9.433 2 7.5 2C5.567 2 4 3.567 4 5.5C4 7.433 5.567 9 7.5 9Z"
						}), Object(N.jsx)("path", {
							d: "M8 10C8.85427 10 9.6728 10.153 10.4297 10.4332C8.3565 11.8787 7 14.281 7 17V22H1V17C1 13.134 4.13401 10 8 10Z"
						}), Object(N.jsx)("path", {
							d: "M19 5.5C19 7.433 17.433 9 15.5 9C13.567 9 12 7.433 12 5.5C12 3.567 13.567 2 15.5 2C17.433 2 19 3.567 19 5.5Z"
						}), Object(N.jsx)("path", {
							"fill-rule": "evenodd",
							"clip-rule": "evenodd",
							d: "M8 17C8 13.134 11.134 10 15 10H16C19.866 10 23 13.134 23 17V22H8V17ZM12.6714 19C12.5579 19 12.4577 18.9396 12.4246 18.8513L11.0117 15.0853C10.9484 14.9166 11.1533 14.7633 11.3545 14.8289L13.2806 15.7466C13.5681 15.8836 13.926 15.7752 14.0596 15.5106L15.2645 13.1242C15.31 13.0414 15.405 13 15.5 13C15.595 13 15.69 13.0414 15.7355 13.1242L16.9404 15.5106C17.074 15.7752 17.4319 15.8836 17.7194 15.7466L19.6455 14.8289C19.8467 14.7633 20.0516 14.9166 19.9883 15.0853L18.5754 18.8513C18.5423 18.9396 18.4421 19 18.3286 19H12.6714Z"
						})]
					}))
				},
				Hc = a(722),
				Wc = a.n(Hc),
				Vc = function(e) {
					return Object(N.jsxs)(le.a, Object(s.a)(Object(s.a)({}, e), {}, {
						children: [Object(N.jsx)("path", {
							d: "M0 0h24v24H0zm15.35 6.41l-1.77-1.77c-.2-.2-.51-.2-.71 0L6 11.53V14h2.47l6.88-6.88c.2-.19.2-.51 0-.71z",
							fill: "none"
						}), Object(N.jsx)("path", {
							d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z"
						})]
					}))
				},
				Uc = function(e) {
					return Object(N.jsx)(le.a, {
						version: "1.0",
						xmlns: "http://www.w3.org/2000/svg",
						width: "1600.000000pt",
						height: "1600.000000pt",
						viewBox: "0 0 1600.000000 1600.000000",
						preserveAspectRatio: "xMidYMid meet",
						children: Object(N.jsxs)("g", {
							transform: "translate(0.000000,1600.000000) scale(0.100000,-0.100000)",
							children: [Object(N.jsx)("path", {
								d: "M8620 15945 c-271 -56 -492 -226 -610 -470 -65 -133 -80 -196 -87\n-346 -4 -96 -2 -145 12 -210 69 -341 336 -609 680 -680 450 -93 893 184 1016\n636 18 65 22 107 22 220 0 123 -3 151 -27 230 -116 386 -451 638 -843 634 -54\n0 -127 -7 -163 -14z"
							}), Object(N.jsx)("path", {
								d: "M4850 12970 l0 -610 300 0 300 0 0 -1750 0 -1751 -30 -60 c-32 -63\n-194 -282 -337 -457 -94 -114 -307 -354 -663 -747 -1315 -1452 -1926 -2191\n-2421 -2935 -469 -704 -694 -1201 -765 -1685 -22 -146 -24 -456 -5 -595 39\n-291 124 -559 248 -790 389 -723 1225 -1185 2398 -1327 142 -17 345 -18 4000\n-18 4071 0 3880 -2 4200 45 864 127 1589 485 1996 986 191 234 352 573 417\n875 55 251 70 578 38 802 -68 475 -263 928 -679 1572 -495 769 -1094 1503\n-2445 2998 -488 541 -618 687 -737 832 -143 174 -307 398 -336 460 l-29 60 0\n1743 0 1742 305 0 305 0 0 610 0 610 -3030 0 -3030 0 0 -610z m4240 -2462 c0\n-1266 3 -1882 11 -1943 13 -113 49 -222 98 -301 21 -33 83 -117 137 -186 54\n-68 145 -183 200 -254 174 -222 497 -592 1112 -1274 l222 -245 -2502 -5 -2502\n-5 -94 -130 c-153 -215 -668 -992 -844 -1275 -754 -1212 -1226 -2183 -1392\n-2860 -38 -159 -66 -329 -66 -409 0 -28 -4 -51 -9 -51 -17 0 -236 78 -319 114\n-275 118 -503 310 -615 517 -69 127 -98 259 -99 438 0 141 25 246 109 456 231\n582 690 1268 1492 2230 288 345 513 601 1178 1338 638 706 896 1003 1068 1229\n44 57 123 158 176 225 144 181 188 281 209 483 6 59 10 784 10 1928 l0 1832\n1210 0 1210 0 0 -1852z m-2045 -4798 c128 -15 196 -35 310 -89 265 -127 446\n-350 517 -638 27 -111 29 -301 5 -410 -56 -245 -207 -462 -420 -601 -297 -194\n-692 -198 -997 -10 -311 191 -489 548 -450 901 31 280 186 540 411 689 155\n102 298 148 519 167 8 0 56 -4 105 -9z m2850 -1185 c134 -22 229 -51 341 -104\n378 -180 633 -513 710 -926 21 -116 21 -329 -1 -450 -93 -520 -503 -929 -1025\n-1021 -194 -34 -447 -16 -630 46 -238 80 -460 241 -612 445 -87 116 -172 294\n-209 440 -40 156 -50 366 -25 520 78 471 399 850 850 1000 58 20 145 42 193\n49 119 19 298 19 408 1z"
							}), Object(N.jsx)("path", {
								d: "M7451 11099 c-328 -64 -594 -316 -682 -644 -30 -113 -31 -297 -1\n-417 78 -314 314 -554 631 -640 106 -29 305 -31 411 -4 329 84 574 327 650\n646 24 102 27 281 6 380 -71 335 -341 605 -676 675 -77 16 -266 19 -339 4z"
							})]
						})
					})
				},
				qc = function(e) {
					var t = Object(d.a)();
					return Object(N.jsx)(r.a.Fragment, {
						children: Object(N.jsx)(vc.a, {
							activeClassName: e.classes.active,
							to: "/applications",
							primaryText: t("resources.applications.name", {
								smart_count: 2
							}),
							leftIcon: Object(N.jsx)(Fr.icon, {}),
							onClick: e.onMenuClick,
							dense: e.dense,
							sidebarIsOpen: e.open
						})
					})
				},
				Zc = function(e) {
					var t = Object(ee.i)(),
						a = Object(n.useState)(t.pathname.includes("release") || t.pathname.includes(
							"channel")),
						r = Object(je.a)(a, 2),
						c = r[0],
						i = r[1],
						s = Object(n.useState)(t.pathname.includes("subscri")),
						o = Object(je.a)(s, 2),
						l = o[0],
						d = o[1],
						j = Object(n.useState)(t.pathname.includes("review")),
						u = Object(je.a)(j, 2),
						b = u[0],
						p = u[1],
						O = Object(Yt.a)().permissions;
					return Object(N.jsxs)(N.Fragment, {
						children: [Object(N.jsx)(vc.a, {
							activeClassName: e.classes.activeTitle,
							to: "/applications",
							primaryText: "Applications",
							leftIcon: Object(N.jsx)(Tc.a, {}),
							onClick: e.onMenuClick,
							dense: e.dense,
							sidebarIsOpen: e.open
						}), Object(N.jsx)(vc.a, {
							activeClassName: e.classes.active,
							to: "/applications/".concat(e.id, "/summary-dashboard"),
							primaryText: "Dashboard",
							leftIcon: Object(N.jsx)(Mc.a, {}),
							onClick: e.onMenuClick,
							dense: e.dense,
							sidebarIsOpen: e.open
						}), Object(N.jsxs)(Sc, {
							handleToggle: function() {
								return i(!c)
							},
							isOpen: c,
							sidebarIsOpen: e.open,
							name: "Release management",
							icon: Object(N.jsx)(Fc, {}),
							dense: e.dense,
							children: [Object(N.jsx)(vc.a, {
								activeClassName: e.classes.active,
								to: "/applications/".concat(e.id, "/releases"),
								primaryText: "Production",
								leftIcon: Object(N.jsx)(Fc, {}),
								onClick: e.onMenuClick,
								dense: e.dense,
								sidebarIsOpen: e.open
							}), Object(N.jsx)(vc.a, {
								activeClassName: e.classes.active,
								to: "/applications/".concat(e.id, "/").concat(Cr.name),
								primaryText: "Testing",
								leftIcon: Object(N.jsx)(Uc, {
									viewBox: "0 0 32 32"
								}),
								onClick: e.onMenuClick,
								dense: e.dense,
								sidebarIsOpen: e.open
							})]
						}), Object(N.jsx)(vc.a, {
							activeClassName: e.classes.active,
							to: "/applications/".concat(e.id, "/listing"),
							primaryText: "Store listing",
							leftIcon: Object(N.jsx)(mc.a, {}),
							onClick: e.onMenuClick,
							dense: e.dense,
							sidebarIsOpen: e.open
						}), Da(O) && Object(N.jsx)(vc.a, {
							activeClassName: e.classes.active,
							to: "/applications/".concat(e.id, "/crash-reports"),
							primaryText: "Crash reports",
							leftIcon: Object(N.jsx)(Lc.a, {}),
							onClick: e.onMenuClick,
							dense: e.dense,
							sidebarIsOpen: e.open
						}), Object(N.jsxs)(Sc, {
							handleToggle: function() {
								return d(!l)
							},
							isOpen: l,
							sidebarIsOpen: e.open,
							name: "Subscriptions",
							icon: Object(N.jsx)(Dc, {}),
							dense: e.dense,
							children: [Object(N.jsx)(vc.a, {
								activeClassName: e.classes.active,
								to: "/applications/".concat(e.id,
									"/subscriptions-statistics"),
								primaryText: "Statistics",
								leftIcon: Object(N.jsx)(Rc.a, {}),
								onClick: e.onMenuClick,
								dense: e.dense,
								sidebarIsOpen: e.open
							}), Object(N.jsx)(vc.a, {
								activeClassName: e.classes.active,
								to: "/applications/".concat(e.id, "/subscription-plans"),
								primaryText: "Plans",
								leftIcon: Object(N.jsx)(zc, {}),
								onClick: e.onMenuClick,
								dense: e.dense,
								sidebarIsOpen: e.open
							}), Object(N.jsx)(vc.a, {
								activeClassName: e.classes.active,
								to: "/applications/".concat(e.id, "/subscribers"),
								primaryText: "Subscribers",
								leftIcon: Object(N.jsx)(Ec, {}),
								onClick: e.onMenuClick,
								dense: e.dense,
								sidebarIsOpen: e.open
							})]
						}), Object(N.jsx)(Sc, {
							handleToggle: function() {
								return p(!b)
							},
							isOpen: b,
							sidebarIsOpen: e.open,
							name: "User feedback",
							icon: Object(N.jsx)(Wc.a, {}),
							dense: e.dense,
							children: Object(N.jsx)(vc.a, {
								activeClassName: e.classes.active,
								to: "/applications/".concat(e.id, "/reviews"),
								primaryText: "Reviews",
								leftIcon: Object(N.jsx)(Vc, {}),
								onClick: e.onMenuClick,
								dense: e.dense,
								sidebarIsOpen: e.open
							})
						})]
					})
				},
				Kc = function(e) {
					var t = Object(n.useState)(Object(N.jsx)(qc, Object(s.a)({}, e))),
						a = Object(je.a)(t, 2),
						r = a[0],
						c = a[1],
						i = Object(ee.i)(),
						o = i.pathname.split("/")[2];
					return Object(n.useEffect)((function() {
						/^\/applications\/[a-z0-9-]+(\/[a-z0-9-]+)*$/.test(i.pathname) ? c(
							Object(N.jsx)(Zc, Object(s.a)(Object(s.a)({}, e), {}, {
								id: o
							}))) : c(Object(N.jsx)(qc, Object(s.a)({}, e)))
					}), [i, o, e]), r
				},
				Qc = function(e) {
					return Object(N.jsxs)(le.a, {
						viewBox: e.viewBox,
						children: [Object(N.jsx)("g", {
							"clip-path": "url(#clip0)",
							children: Object(N.jsx)("path", {
								"fill-rule": "evenodd",
								"clip-rule": "evenodd",
								d: "M0 6L4 2V6L0 6ZM5 7V2H24.0001V22H0V7H5ZM8.94336 14.085C8.94336 15.0387 8.71712 15.7793 8.26465 16.3066C7.81543 16.834 7.19043 17.0977 6.38965 17.0977C5.59212 17.0977 4.96549 16.8372 4.50977 16.3164C4.05404 15.7923 3.82292 15.0599 3.81641 14.1191V12.9033C3.81641 11.9268 4.04264 11.165 4.49512 10.6182C4.94759 10.068 5.57585 9.79297 6.37988 9.79297C7.1709 9.79297 7.79427 10.0632 8.25 10.6035C8.70573 11.1406 8.93685 11.8958 8.94336 12.8691V14.085ZM7.50293 12.8936C7.50293 12.2523 7.41178 11.7754 7.22949 11.4629C7.0472 11.1504 6.764 10.9941 6.37988 10.9941C5.99902 10.9941 5.71745 11.1455 5.53516 11.4482C5.35286 11.7477 5.25846 12.2051 5.25195 12.8203V14.085C5.25195 14.7067 5.34473 15.1657 5.53027 15.4619C5.71582 15.7549 6.00228 15.9014 6.38965 15.9014C6.764 15.9014 7.04232 15.7581 7.22461 15.4717C7.4069 15.182 7.49967 14.7344 7.50293 14.1289V12.8936ZM11.4092 14.5V17H9.97363V9.89062H12.3955C13.0986 9.89062 13.6585 10.1087 14.0752 10.5449C14.4951 10.9811 14.7051 11.5475 14.7051 12.2441C14.7051 12.9408 14.4984 13.4909 14.085 13.8945C13.6715 14.2982 13.0986 14.5 12.3662 14.5H11.4092ZM11.4092 13.3037H12.3955C12.6689 13.3037 12.8805 13.2142 13.0303 13.0352C13.18 12.8561 13.2549 12.5957 13.2549 12.2539C13.2549 11.8991 13.1784 11.6175 13.0254 11.4092C12.8724 11.1976 12.6673 11.0902 12.4102 11.0869H11.4092V13.3037ZM17.1025 14.9688L17.6689 14.2559L18.9678 17H20.6719L18.6016 13.0156L20.6377 9.89062H18.8799L17.5566 12.2246L17.1025 12.9912V9.89062H15.667V17H17.1025V14.9688Z",
								"fill-opacity": "0.54"
							})
						}), Object(N.jsx)("defs", {
							children: Object(N.jsx)("clipPath", {
								id: "clip0",
								children: Object(N.jsx)("rect", {
									width: "24",
									height: "24",
									fill: "white"
								})
							})
						})]
					})
				},
				Jc = function(e) {
					return Object(N.jsxs)(le.a, {
						viewBox: "0 0 24 24",
						children: [Object(N.jsx)("path", {
							"fill-rule": "evenodd",
							"clip-rule": "evenodd",
							d: "M2 5C2 4.44772 2.44772 4 3 4H21C21.5523 4 22 4.44772 22 5V16C22 16.5523 21.5523 17 21 17H3C2.44772 17 2 16.5523 2 16V5ZM7.29305 7.29282L3.58594 10.9999L7.29304 14.707L8.70726 13.2928L6.41436 10.9999L8.70725 8.70704L7.29305 7.29282ZM20.4141 10.9999L16.707 7.29282L15.2927 8.70704L17.5856 10.9999L15.2927 13.2928L16.707 14.707L20.4141 10.9999ZM14 6H12L10 15H12L14 6Z"
						}), Object(N.jsx)("path", {
							d: "M6 21C6 19.8954 6.89543 19 8 19H16C17.1046 19 18 19.8954 18 21H6Z"
						})]
					})
				},
				Yc = function(e) {
					return Object(N.jsxs)(le.a, {
						viewBox: "0 0 24 24",
						children: [Object(N.jsx)("path", {
							"fill-rule": "evenodd",
							"clip-rule": "evenodd",
							d: "M13 2H5C4.44772 2 4 2.44772 4 3V21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21V8.99981H13V2ZM10 12H6V14H10V12ZM10 18H6V20H10V18ZM6 15H13V17H6V15ZM18 15H15V17H18V15ZM12 12H18V14H12V12ZM18 20V18H12V20H18Z"
						}), Object(N.jsx)("path", {
							d: "M15.0002 2L20 6.99981H15L15.0002 2Z"
						})]
					})
				},
				Gc = function(e) {
					return Object(N.jsxs)(le.a, {
						viewBox: e.viewBox,
						children: [Object(N.jsx)("path", {
							d: "M11 5.5C11 7.433 9.433 9 7.5 9C5.567 9 4 7.433 4 5.5C4 3.567 5.567 2 7.5 2C9.433 2 11 3.567 11 5.5Z"
						}), Object(N.jsx)("path", {
							d: "M10.4297 10.4332C9.6728 10.153 8.85427 10 8 10C4.13401 10 1 13.134 1 17V22H7V17C7 14.281 8.3565 11.8787 10.4297 10.4332Z"
						}), Object(N.jsx)("path", {
							d: "M19 5.5C19 7.433 17.433 9 15.5 9C13.567 9 12 7.433 12 5.5C12 3.567 13.567 2 15.5 2C17.433 2 19 3.567 19 5.5Z"
						}), Object(N.jsx)("path", {
							"fill-rule": "evenodd",
							"clip-rule": "evenodd",
							d: "M15 10C11.134 10 8 13.134 8 17V22H23V17C23 13.134 19.866 10 16 10H15ZM16.9367 13H15.7066L14.2695 19.9548H15.4996L16.9367 13ZM10 16.9549L12.1716 18.9548L13 18.1919L11.6569 16.9548L13 15.7178L12.1716 14.9548L10 16.9549ZM18.8284 14.9548L21 16.9548L18.8284 18.9548L18 18.1919L19.3431 16.9548L18 15.7178L18.8284 14.9548Z"
						})]
					})
				},
				$c = Object(w.a)((function(e) {
					return {
						menuTitle: {
							minHeight: "48px",
							fontFamily: "Roboto, Helvetica, Arial, sans-serif",
							borderBottom: "1px solid ".concat(e.palette.grey[300]),
							fontSize: "20px",
							fontWeight: 500,
							letterSpacing: "0.15px"
						}
					}
				})),
				Xc = function(e) {
					var t = $c();
					return Object(N.jsx)(vc.a, {
						className: t.menuTitle,
						to: "/",
						primaryText: "Overwolf Console",
						leftIcon: Object(N.jsx)(Nc, {
							viewBox: "0 0 32 32"
						}),
						onClick: e.onMenuClick,
						sidebarIsOpen: e.isSidebarOpen,
						dense: e.dense
					})
				},
				ei = function(e) {
					var t = e.onMenuClick,
						a = e.dense,
						r = e.logout,
						c = Object(n.useState)({
							menuPartners: !1,
							menuAdmin: !1
						}),
						i = Object(je.a)(c, 2),
						l = i[0],
						j = i[1],
						u = Object(Dt.a)(),
						b = Object(d.a)(),
						p = Object(Yt.a)().permissions,
						O = pn.getOwnedPartnerIds(),
						h = (null === O || void 0 === O ? void 0 : O.length) > 0,
						x = Object(fc.a)((function(e) {
							return e.breakpoints.down("xs")
						})),
						m = Object(aa.f)((function(e) {
							return e.admin.ui.sidebarOpen
						}));
					Object(aa.f)((function(e) {
						return e.theme
					}));
					var f = function(e) {
							j((function(t) {
								return Object(s.a)(Object(s.a)({}, t), {}, Object(o.a)({}, e, !t[
									e]))
							}))
						},
						v = Object(w.a)({
							active: {
								backgroundColor: u.palette.grey[300],
								color: u.palette.grey[900],
								boxShadow: "4px 0 0 0 ".concat(u.palette.primary.main, " inset")
							},
							activeTitle: {
								"& svg": {
									fontWeight: "bold"
								}
							}
						})(u);
					return Object(N.jsxs)("div", {
						children: [Object(N.jsx)(Xc, {
							isSidebarOpen: m,
							onMenuClick: t,
							dense: a
						}), Object(N.jsx)(Kc, {
							classes: v,
							onMenuClick: t,
							dense: a,
							isPowerUser: Da(p),
							open: m
						}), Da(p) && Object(N.jsx)(Sc, {
							handleToggle: function() {
								return f("menuPartners")
							},
							isOpen: l.menuPartners,
							sidebarIsOpen: m,
							name: "Partner accounts",
							icon: Object(N.jsx)(Gc, {
								viewBox: "0 0 24 24"
							}),
							dense: a,
							children: Object(N.jsx)(vc.a, {
								activeClassName: v.active,
								to: "/workflow-items",
								primaryText: "OPKs for review",
								leftIcon: Object(N.jsx)(Qc, {
									viewBox: "0 0 24 24"
								}),
								onClick: t,
								sidebarIsOpen: m,
								dense: a
							})
						}), Object(N.jsxs)(Sc, {
							handleToggle: function() {
								return f("menuAdmin")
							},
							isOpen: l.menuAdmin,
							sidebarIsOpen: m,
							name: "pos.menu.admin",
							icon: Object(N.jsx)(hc.a, {}),
							dense: a,
							children: [(Da(p) || h) && Object(N.jsx)(vc.a, {
								activeClassName: v.active,
								to: "/partners",
								primaryText: "Users and permissions",
								leftIcon: Object(N.jsx)($e.icon, {}),
								onClick: t,
								sidebarIsOpen: m,
								dense: a
							}), Da(p) && Object(N.jsxs)(N.Fragment, {
								children: [Object(N.jsx)(vc.a, {
									activeClassName: v.active,
									to: "/audit",
									primaryText: b("resources.admin.audit.name", {
										smart_count: 2
									}),
									leftIcon: Object(N.jsx)(mc.a, {}),
									onClick: t,
									sidebarIsOpen: m,
									dense: a
								}), Object(N.jsx)(vc.a, {
									activeClassName: v.active,
									to: "/users",
									primaryText: b("resources.admin.users.name", {
										smart_count: 2
									}),
									leftIcon: Object(N.jsx)($e.icon, {}),
									onClick: t,
									sidebarIsOpen: m,
									dense: a
								}), Object(N.jsx)(vc.a, {
									activeClassName: v.active,
									to: "/applications-privileges",
									primaryText: b("resources.admin.appPrivileges.name", {
										smart_count: 2
									}),
									leftIcon: Object(N.jsx)($e.icon, {}),
									onClick: t,
									sidebarIsOpen: m,
									dense: a
								}), Object(N.jsx)(vc.a, {
									activeClassName: v.active,
									to: "/versions",
									primaryText: "Versions",
									leftIcon: Object(N.jsx)(Jc, {}),
									onClick: t,
									sidebarIsOpen: m,
									dense: a
								}), Object(N.jsx)(vc.a, {
									activeClassName: v.active,
									to: "/diffs",
									primaryText: "Diffs",
									leftIcon: Object(N.jsx)(Yc, {}),
									onClick: t,
									sidebarIsOpen: m,
									dense: a
								})]
							})]
						}), x && r]
					})
				},
				ti = Object(w.a)((function(e) {
					return {
						stickyFooter: {
							position: "sticky",
							bottom: 0,
							width: "100%",
							boxSizing: "border-box",
							backgroundColor: e.palette.background.paper,
							borderTop: "1px solid ".concat(e.palette.grey[300]),
							boxShadow: "inset 10px 0px 10px -10px rgb(0, 0, 0, 0.2)",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							"& .MuiButton-textPrimary": {
								padding: "6px 16px",
								color: e.palette.grey[700],
								"&:hover": {
									backgroundColor: e.palette.grey[300],
									color: e.palette.grey[900]
								}
							}
						}
					}
				})),
				ai = function(e) {
					var t = Object(Dt.a)(),
						a = ti(t);
					return Object(N.jsx)("div", {
						id: "ow-console-footer",
						className: a.stickyFooter
					})
				},
				ni = a(1375),
				ri = a(1294),
				ci = a(393),
				ii = a.n(ci),
				si = a(77),
				oi = a(755),
				li = a(1374),
				di = a(748),
				ji = a(392),
				ui = a.n(ji),
				bi = Object(w.a)((function(e) {
					return {
						user: {},
						userButton: {
							textTransform: "none"
						},
						avatar: {
							width: e.spacing(4),
							height: e.spacing(4)
						}
					}
				})),
				pi = function(e) {
					var t = Object(n.useState)(null),
						a = Object(je.a)(t, 2),
						r = a[0],
						c = a[1],
						i = Object(d.a)(),
						s = Object(li.a)(),
						o = s.loaded,
						l = s.identity,
						j = bi(e),
						u = e.children,
						b = e.label,
						p = e.icon,
						O = e.logout;
					if (!O && !u) return null;
					var h = Boolean(r),
						x = function(e) {
							return c(e.currentTarget)
						},
						m = function() {
							return c(null)
						};
					return Object(N.jsxs)("div", {
						className: j.user,
						children: [o && l ? Object(N.jsx)(Nt.a, {
							"aria-label": b && i(b, {
								_: b
							}),
							className: j.userButton,
							color: "inherit",
							onClick: x,
							children: l.avatar ? Object(N.jsx)(S.a, {
								className: j.avatar,
								src: l.avatar,
								alt: l.fullName
							}) : p
						}) : Object(N.jsx)(er.a, {
							title: b && i(b, {
								_: b
							}),
							children: Object(N.jsx)(ae.a, {
								"aria-label": b && i(b, {
									_: b
								}),
								"aria-haspopup": !0,
								color: "inherit",
								onClick: x,
								children: p
							})
						}), Object(N.jsxs)(di.a, {
							id: "menu-appbar",
							anchorEl: r,
							anchorOrigin: {
								vertical: "top",
								horizontal: "right"
							},
							transformOrigin: {
								vertical: "top",
								horizontal: "right"
							},
							open: h,
							onClose: m,
							children: [n.Children.map(u, (function(e) {
								return Object(n.isValidElement)(e) ? Object(n.cloneElement)
									(e, {
										onClick: m
									}) : null
							})), O]
						})]
					})
				};
			pi.defaultProps = {
				label: "ra.auth.user_menu",
				icon: Object(N.jsx)(ui.a, {})
			};
			var Oi = pi,
				hi = ["children", "classes", "className", "color", "logout", "open",
					"title", "userMenu"
				],
				xi = Object(w.a)((function(e) {
					return {
						toolbar: {
							paddingRight: 24
						},
						menuButton: {
							marginLeft: "0.5em",
							marginRight: "0.5em"
						},
						menuButtonIconClosed: {
							transition: e.transitions.create(["transform"], {
								easing: e.transitions.easing.sharp,
								duration: e.transitions.duration.leavingScreen
							}),
							transform: "rotate(0deg)"
						},
						menuButtonIconOpen: {
							transition: e.transitions.create(["transform"], {
								easing: e.transitions.easing.sharp,
								duration: e.transitions.duration.leavingScreen
							}),
							transform: "rotate(180deg)"
						},
						title: {
							flex: 1,
							textOverflow: "ellipsis",
							whiteSpace: "nowrap",
							overflow: "hidden"
						}
					}
				})),
				mi = function(e) {
					var t = e.children,
						a = (e.classes, e.className),
						r = e.color,
						c = void 0 === r ? "primary" : r,
						i = e.logout,
						o = e.open,
						l = (e.title, e.userMenu, Object(z.a)(e, hi)),
						j = xi(e),
						u = Object(aa.e)(),
						b = Object(fc.a)((function(e) {
							return e.breakpoints.down("xs")
						})),
						p = Object(d.a)();
					return Object(N.jsx)(ni.a, Object(s.a)(Object(s.a)({
						className: a,
						color: c
					}, l), {}, {
						children: Object(N.jsxs)(ri.a, {
							disableGutters: !0,
							variant: b ? "regular" : "dense",
							className: j.toolbar,
							children: [Object(N.jsx)(er.a, {
								title: p(o ? "ra.action.close_menu" : "ra.action.open_menu", {
									_: "Open/Close menu"
								}),
								enterDelay: 500,
								children: Object(N.jsx)(ae.a, {
									color: "inherit",
									onClick: function() {
										return u(Object(si.h)())
									},
									className: j.menuButton,
									children: Object(N.jsx)(ii.a, {
										classes: {
											root: o ? j.menuButtonIconOpen : j.menuButtonIconClosed
										}
									})
								})
							}), 0 === n.Children.count(t) ? Object(N.jsx)(ne.a, {
								variant: "h6",
								color: "inherit",
								className: j.title,
								id: "react-admin-title"
							}) : t, Object(N.jsx)(oi.a, {}), Object(N.jsx)(Oi, {
								logout: i
							})]
						})
					}))
				},
				fi = a(725),
				vi = a(394),
				gi = a.n(vi),
				yi = function(e) {
					e.error;
					return Object(N.jsxs)("div", {
						children: [Object(N.jsx)($r.b, {
							title: "Oops!"
						}), Object(N.jsxs)("h1", {
							children: [Object(N.jsx)(gi.a, {}), " Something Went Wrong "]
						}), Object(N.jsx)("div", {
							children: "A client error occurred and your request couldn't be completed."
						}), Object(N.jsx)("div", {
							children: "Contact your account manager for more information."
						}), !1, Object(N.jsx)("br", {}), Object(N.jsx)("div", {
							children: Object(N.jsx)(Nt.a, {
								variant: "contained",
								startIcon: Object(N.jsx)(Gr.a, {}),
								onClick: function() {
									return window.location.href = "/"
								},
								children: "Back to home page"
							})
						})]
					})
				},
				Ci = Object(w.a)((function(e) {
					return {
						root: {
							display: "flex",
							backgroundColor: e.palette.background.default,
							minHeight: "100vh"
						},
						sidebar: {
							backgroundColor: e.palette.background.paper,
							"& > div": {
								position: "sticky",
								top: 0
							}
						},
						content: {
							display: "flex",
							flexDirection: "column",
							flex: 1
						},
						header: {
							position: "sticky",
							top: 0,
							"& h6": {
								flex: 1,
								textOverflow: "ellipsis",
								whiteSpace: "nowrap",
								overflow: "hidden"
							},
							"& div.app-loader": {
								display: "none"
							}
						},
						main: {
							padding: e.spacing(4),
							display: "flex",
							justifyContent: "center",
							flex: 1,
							boxShadow: "inset 10px 10px 10px -10px rgb(0, 0, 0, 0.2)"
						},
						loader: {
							position: "fixed",
							zIndex: 1101,
							top: 0,
							left: 0,
							right: 0
						}
					}
				})),
				wi = function(e) {
					var t = e.children,
						a = e.logout,
						r = e.title,
						c = Ci(),
						i = Object(aa.f)((function(e) {
							return e.admin.ui.sidebarOpen
						})),
						s = Object(ee.i)();
					return Object(n.useEffect)((function() {
						window.dataLayer = window.dataLayer || [], window.dataLayer.push({
							event: "virtualPageView",
							page: {
								title: s.pathname,
								location: s.pathname
							}
						})
					}), [s]), Object(N.jsxs)("div", {
						className: c.root,
						children: [Object(N.jsx)("section", {
							className: c.loader,
							children: Object(N.jsx)(oc, {})
						}), Object(N.jsx)("section", {
							className: c.sidebar,
							children: Object(N.jsx)(cc.a, {
								classes: {},
								children: Object(N.jsx)(ei, {
									logout: a,
									onMenuClick: function() {
										return window.location.href = "".concat(window.location,
											"/#")
									},
									dense: !0
								})
							})
						}), Object(N.jsxs)("section", {
							className: c.content,
							children: [Object(N.jsx)(mi, {
								color: "default",
								className: c.header,
								title: r,
								open: i,
								logout: a
							}), Object(N.jsx)("main", {
								className: c.main,
								children: Object(N.jsx)(fi.ErrorBoundary, {
									FallbackComponent: yi,
									children: t
								})
							}), Object(N.jsx)(ai, {})]
						}), Object(N.jsx)(ic.a, {})]
					})
				},
				Ii = function(e) {
					var t = "light" === Object(aa.f)((function(e) {
						return e.theme
					})) ? pc : bc;
					return Object(N.jsx)(rc.a, {
						theme: Object(nc.a)(t),
						children: Object(N.jsx)(wi, Object(s.a)({}, e))
					})
				},
				ki = a(110),
				Si = a.n(ki),
				Ni = a(40),
				Pi = a(1391),
				Ti = ["hasCreate", "basePath", "label"],
				Bi = function(e) {
					var t = e.hasCreate,
						a = e.basePath,
						n = e.label,
						r = void 0 === n ? "ra.action.create" : n,
						c = Object(z.a)(e, Ti),
						i = Object(fc.a)((function(e) {
							return e.breakpoints.down("sm")
						}));
					return Object(N.jsx)(N.Fragment, {
						children: t ? i ? Object(N.jsx)(Pi.a, Object(s.a)({
							basePath: a
						}, c)) : Object(N.jsx)(te.a, {
							component: Ni.a,
							color: "primary",
							variant: "contained",
							to: "".concat(a, "/create"),
							label: r
						}) : null
					})
				},
				Li = ["currentSort", "className", "resource", "filters",
					"displayedFilters", "exporter", "filterValues", "permanentFilter",
					"hasCreate", "basePath", "selectedIds", "onUnselectItems", "showFilter",
					"maxResults", "total"
				],
				Ai = function(e) {
					e.currentSort;
					var t = e.className,
						a = e.resource,
						r = e.filters,
						c = e.displayedFilters,
						i = (e.exporter, e.filterValues),
						o = (e.permanentFilter, e.hasCreate),
						l = e.basePath,
						d = (e.selectedIds, e.onUnselectItems, e.showFilter),
						j = (e.maxResults, e.total, Object(z.a)(e, Li));
					return Object(N.jsxs)(H.a, Object(s.a)(Object(s.a)({
						className: t
					}, Object(W.c)(j)), {}, {
						children: [r && Object(n.cloneElement)(r, {
							resource: a,
							showFilter: d,
							displayedFilters: c,
							filterValues: i,
							context: "button"
						}), Object(N.jsx)(Bi, {
							label: "resources.applications.create",
							basePath: l,
							hasCreate: o
						})]
					}))
				};
			Ai.defaultProps = {
				selectedIds: [],
				onUnselectItems: function() {
					return null
				}
			};
			var Mi, _i = function(e) {
					var t = e.record;
					return Object(N.jsx)("img", {
						src: "".concat(it).concat(null === t || void 0 === t ? void 0 : t.id),
						width: "30px",
						alt: null === t || void 0 === t ? void 0 : t.name
					})
				},
				Ri = function(e) {
					var t = "partners/".concat(e.id, "/applications"),
						a = Object(ln.a)();
					return Object(N.jsx)(pr, Object(s.a)(Object(s.a)({}, e), {}, {
						buttonLabel: "add app",
						basePath: "/".concat(t),
						dialogTitle: "Add app to ".concat(e.record.name),
						dialogSubtitle: "Select an app to be associated with this partner",
						resource: t,
						record: {
							partnerId: e.id
						},
						submitAction: function(e) {
							return a.create(t, {
								data: e.getState().values
							})
						},
						children: Object(N.jsx)(Ve.a, {
							label: "Application",
							source: "appId",
							reference: "applications",
							link: !1,
							filter: {
								partnerId: null
							},
							filterToQuery: function(e) {
								return {
									name: e
								}
							},
							children: Object(N.jsx)(Ue.a, {
								optionText: "name"
							})
						})
					}))
				},
				Fi = function(e) {
					var t = "partners/".concat(e.id, "/users"),
						a = Object(ln.a)();
					return Object(N.jsx)(pr, Object(s.a)(Object(s.a)({}, e), {}, {
						buttonLabel: "add user",
						basePath: "/".concat(t),
						dialogTitle: "Add user to ".concat(e.record.name),
						dialogSubtitle: "Invite new users and grant them access to this account",
						resource: t,
						record: {
							partnerId: e.id
						},
						submitAction: function(e) {
							return a.create(t, {
								data: e.getState().values
							})
						},
						children: Object(N.jsx)(V.a, {
							source: "email",
							validate: [Object(We.c)(), Object(We.h)()]
						})
					}))
				},
				Di = function(e) {
					var t = e.record;
					return t ? Object(N.jsx)("span", {
						children: t.disabled ? "Disabled" : "Active"
					}) : Object(N.jsx)("span", {
						children: "---"
					})
				},
				zi = a(92),
				Ei = function(e) {
					var t = e.record.id,
						a = Object(ln.a)();
					return Object(N.jsxs)(pr, Object(s.a)(Object(s.a)({}, e), {}, {
						buttonLabel: "add app",
						basePath: "/".concat(Ur.name),
						resource: Ur.name,
						record: {
							userId: t
						},
						submitAction: function(e) {
							return a.create(Ur.name, {
								data: e.getState().values
							})
						},
						children: [Object(N.jsx)(Ve.a, {
							label: "Application",
							source: "appId",
							link: !1,
							reference: "applications",
							filter: {
								partnerId: parseInt(e.id)
							},
							filterToQuery: function(e) {
								return {
									name: e
								}
							},
							children: Object(N.jsx)(Ue.a, {
								optionText: "name",
								validate: [Object(We.h)()]
							})
						}), Object(N.jsx)(f.a, {
							source: "scope",
							choices: Dr,
							validate: [Object(We.h)()]
						})]
					}))
				},
				Hi = function(e) {
					var t = e.record,
						a = Object(Lt.a)(),
						n = Object(Bt.a)(),
						r = Object(Ya.a)(Ur.name, t.id, t, {
							onSuccess: function() {
								a(), n("success")
							},
							onFailure: function() {
								n("failure", "warning")
							}
						}),
						c = Object(je.a)(r, 1)[0];
					return Object(N.jsx)(ye, {
						icon: Object(N.jsx)(Si.a, {}),
						title: "Hold it!",
						question: "This privilege will be removed",
						onApprove: c
					})
				},
				Wi = function(e) {
					var t = e.record;
					return t ? Object(N.jsx)(A, {
						record: t,
						size: "32"
					}) : null
				},
				Vi = Object(w.a)((function(e) {
					return {
						textRight: {
							textAlign: "right"
						},
						columnThird: {
							width: "33%"
						},
						columnMiddle: {
							textAlign: "center"
						}
					}
				})),
				Ui = function(e) {
					var t = Vi();
					return Object(N.jsx)(N.Fragment, {
						children: Object(N.jsxs)(Zn, Object(s.a)(Object(s.a)({}, e), {}, {
							style: {
								marginBottom: "2em"
							},
							toolbar: Object(N.jsx)(N.Fragment, {}),
							children: [Object(N.jsx)(Qn, {
								children: "User details"
							}), Object(N.jsx)(Ke.a, {
								source: "email",
								label: "Email"
							}), Object(N.jsx)(Di, {
								label: "Status"
							}), Object(N.jsx)(Qn, {
								children: "Permissions"
							}), Object(N.jsx)(Yn, {
								children: Object(N.jsx)("div", {
									style: {
										display: "flex",
										justifyContent: "flex-end",
										marginBottom: "1em"
									},
									children: Object(N.jsx)(Ei, Object(s.a)({}, e))
								})
							}), Object(N.jsx)(Yn, {
								children: Object(N.jsx)(jt.a, {
									label: "Privileges",
									basePath: "/".concat(Ur.name),
									reference: Ur.name,
									target: "userId",
									children: Object(N.jsxs)(X.a, {
										rowStyle: function() {
											return {
												height: "64px"
											}
										},
										children: [Object(N.jsx)(lr.a, {
											label: "Application",
											link: !1,
											source: "appId",
											reference: "applications",
											headerClassName: t.columnThird,
											children: Object(N.jsx)(Ke.a, {
												source: "name"
											})
										}), Object(N.jsx)(v.a, {
											source: "scope",
											choices: Dr,
											headerClassName: "".concat(t.columnThird, " ").concat(
												t.columnMiddle),
											cellClassName: t.columnMiddle
										}), Object(N.jsx)(Hi, {
											cellClassName: t.textRight
										})]
									})
								})
							})]
						}))
					})
				},
				qi = function(e) {
					var t, a, n = Object(ln.a)();
					return Object(N.jsx)(pr, Object(s.a)(Object(s.a)({}, e), {}, {
						title: Object(N.jsx)(Wi, {}),
						buttonLabel: "manage",
						basePath: "/users",
						resource: "users",
						id: null === (t = e.record) || void 0 === t ? void 0 : t.id,
						record: {
							userId: null === (a = e.record) || void 0 === a ? void 0 : a.id
						},
						type: "edit",
						submitAction: function(t) {
							var a;
							return n.update("users", {
								id: null === (a = e.record) || void 0 === a ? void 0 : a.id,
								data: t.getState().values,
								previousData: e.record
							})
						},
						children: Object(N.jsx)(Ui, Object(s.a)({}, e))
					}))
				},
				Zi = Object(w.a)((function(e) {
					return {
						toolbar: {
							justifyContent: "space-between",
							backgroundColor: e.palette.background.paper,
							boxSizing: "border-box"
						},
						deleteButton: {
							color: e.palette.error.main,
							"&:hover": {
								backgroundColor: Object(zi.fade)(e.palette.error.main, .12)
							}
						}
					}
				})),
				Ki = Object(w.a)((function(e) {
					return {
						textRight: {
							textAlign: "right"
						},
						noRightPadding: {
							paddingRight: "0 !important"
						},
						fatColumn: {
							width: "45%"
						}
					}
				})),
				Qi = function(e) {
					var t = Zi(),
						a = e.pristine,
						n = e.invalid,
						r = Object(Bt.a)(),
						c = Object(Ya.a)(e.resource, e.id),
						i = Object(je.a)(c, 1)[0],
						o = Object(ee.h)();
					return Object(N.jsx)(Pn.a, Object(s.a)(Object(s.a)({}, e), {}, {
						className: t.toolbar,
						children: e.permissions >= 6 && [Object(N.jsx)(ye, {
							onApprove: function() {
								i(), o.push("/partners")
							},
							title: "Remove ".concat(e.record.name, "?"),
							question: "This partner will be removed and all related users and apps will be disconnected",
							approveButtonLabel: "Remove",
							approveButtonIcon: Object(N.jsx)(Si.a, {}),
							icon: Object(N.jsx)(Si.a, {}),
							label: "Delete",
							className: t.deleteButton
						}), Object(N.jsx)(Tn.a, {
							disabled: a || n,
							redirect: function() {
								return r("Partner updated"), ""
							},
							submitOnEnter: !1
						})]
					}))
				},
				Ji = function(e) {
					var t = Ki(),
						a = e.permissions,
						n = pn.getOwnedPartnerIds(),
						r = (null === n || void 0 === n ? void 0 : n.includes(parseInt(e.id))) ||
						a >= 6,
						c = Object(Lt.a)(),
						i = Object(Bt.a)(),
						o = Object(ln.a)();
					return Object(N.jsxs)(Zn, Object(s.a)(Object(s.a)({}, e), {}, {
						style: {
							width: "1000px"
						},
						toolbar: Object(N.jsx)(Qi, Object(s.a)({}, e)),
						redirect: !1,
						children: [Object(N.jsxs)(Xn, {
							children: [Object(N.jsx)(Qn, {
								children: "Partner details"
							}), Object(N.jsx)(Rn, {
								source: "name",
								label: "Partner name",
								disabled: a < 6,
								validate: {
									required: !0
								}
							}), Object(N.jsx)(Rn, {
								source: "owner.email",
								label: "Owner",
								disabled: a < 6,
								validate: {
									required: !0,
									email: !0
								}
							}), a >= 6 && Object(N.jsx)(m.a, {
								source: "qaWorkflowEnabled",
								label: "Mandatory QA"
							})]
						}), Object(N.jsxs)(Xn, {
							children: [Object(N.jsx)(Qn, {
								children: "Applications"
							}), Object(N.jsx)(Yn, {
								children: Object(N.jsx)(ne.a, {
									variant: "caption",
									children: "Applications associated with this partner"
								})
							}), Object(N.jsx)(Yn, {
								children: Object(N.jsx)("div", {
									style: {
										display: "flex",
										justifyContent: "flex-end",
										marginBottom: "1em"
									},
									children: a >= 6 && Object(N.jsx)(Ri, Object(s.a)({}, e))
								})
							}), Object(N.jsx)(Yn, {
								children: Object(N.jsx)(jt.a, {
									label: "Applications",
									reference: "applications",
									target: "partnerId",
									basePath: "/applications",
									perPage: 5,
									pagination: Object(N.jsx)(Z.a, {}),
									children: Object(N.jsxs)(we, {
										showDelete: a >= 6,
										deleteButtonAction: function(e) {
											o.delete("partners/".concat(e.partnerId,
												"/applications"), {
												id: e.id,
												previousData: e
											}, {
												onSuccess: function() {
													c(), i("deleted successfully")
												},
												onFailure: function() {
													i("unexpected error encountered", "warning")
												}
											})
										},
										children: [Object(N.jsx)(_i, {}), Object(N.jsx)(Ke.a, {
											source: "name",
											headerClassName: t.fatColumn
										}), Object(N.jsx)(rt, {
											source: "updated",
											label: "Last update"
										})]
									})
								})
							})]
						}), Object(N.jsxs)(Xn, {
							children: [Object(N.jsx)(Qn, {
								children: "Users"
							}), Object(N.jsx)(Yn, {
								children: Object(N.jsx)(ne.a, {
									variant: "caption",
									children: "Manage who has access to your developer account and invite new users"
								})
							}), Object(N.jsx)(Yn, {
								children: Object(N.jsx)("div", {
									style: {
										display: "flex",
										justifyContent: "flex-end",
										marginBottom: "1em"
									},
									children: r && Object(N.jsx)(Fi, Object(s.a)({}, e))
								})
							}), Object(N.jsx)(Yn, {
								children: Object(N.jsx)(jt.a, {
									label: "Users",
									reference: "users",
									target: "partnerId",
									basePath: "/users",
									perPage: 5,
									pagination: Object(N.jsx)(Z.a, {}),
									children: Object(N.jsxs)(we, {
										showDelete: r,
										deleteButtonAction: function(e) {
											o.delete("partners/".concat(e.partnerId, "/users"), {
												id: e.id,
												previousData: e
											}, {
												onSuccess: function() {
													c(), i("deleted successfully")
												},
												onFailure: function() {
													i("unexpected error encountered", "warning")
												}
											})
										},
										showEdit: r,
										editButton: Object(N.jsx)(qi, Object(s.a)(Object(s.a)
											({}, e), {}, {
												cellClassName: "".concat(t.textRight, " ").concat(
													t.noRightPadding)
											})),
										children: [Object(N.jsx)(A, {
											label: "User"
										}), Object(N.jsx)(Di, {
											label: "Status"
										})]
									})
								})
							})]
						})]
					}))
				},
				Yi = function(e) {
					return Object(N.jsx)("span", {
						children: "Edit ".concat(e.record.name)
					})
				},
				Gi = Object(w.a)({
					root: {
						alignItems: "flex-start"
					},
					card: {
						backgroundColor: "transparent",
						boxShadow: "none",
						padding: 1,
						marginTop: "-3em"
					}
				}),
				$i = new Nn({
					name: "partners",
					list: function(e) {
						return Object(N.jsxs)(Fe, Object(s.a)(Object(s.a)({}, e), {}, {
							hideCardTitle: !1,
							children: [Object(N.jsx)(Ke.a, {
								source: "name"
							}), Object(N.jsx)(lr.a, {
								source: "ownerId",
								reference: "users",
								link: !1,
								children: Object(N.jsx)(A, {})
							})]
						}))
					},
					edit: function(e) {
						var t = Gi();
						return Object(N.jsx)(Qe.a, Object(s.a)(Object(s.a)({}, e), {}, {
							classes: t,
							title: Object(N.jsx)(Yi, {}),
							children: Object(N.jsx)(Ji, Object(s.a)({}, e))
						}))
					},
					create: function(e) {
						return Object(N.jsx)(Ee.a, Object(s.a)(Object(s.a)({}, e), {}, {
							children: Object(N.jsxs)(He.a, {
								children: [Object(N.jsx)(V.a, {
									source: "name",
									label: "Partner name"
								}), Object(N.jsx)(m.a, {
									source: "qaWorkflowEnabled",
									label: "Apps QA required"
								})]
							})
						}))
					}
				}),
				Xi = a(747),
				es = "ow-theme",
				ts = Object(Xi.a)({
					name: "theme",
					initialState: localStorage.getItem(es),
					reducers: {
						toggle: function(e) {
							var t = "light" === e ? "dark" : "light";
							return function(e) {
								localStorage.setItem(es, e)
							}(t), t
						}
					}
				}),
				as = new Nn({
					name: "replies"
				}),
				ns = function(e) {
					var t = e.resource;
					return Object(aa.f)((function(e) {
						var a;
						return null === (a = e.admin.resources[t]) || void 0 === a ? void 0 :
							a.list
					})) ? Object(N.jsx)(q.a, Object(s.a)(Object(s.a)({
						basePath: "/".concat(t),
						exporter: !1,
						bulkActionButtons: !1
					}, e), {}, {
						children: e.children
					})) : null
				},
				rs = function(e) {
					var t = Object(ee.j)(),
						a = e.resource,
						n = e.filter;
					return Object(N.jsx)(ns, Object(s.a)(Object(s.a)({}, e), {}, {
						resource: a,
						filter: Object(s.a)(Object(s.a)({}, t), n),
						children: e.children
					}))
				},
				cs = a(1377),
				is = function(e) {
					return Object(N.jsxs)(h.a, Object(s.a)(Object(s.a)({}, e), {}, {
						variant: "standard",
						children: [Object(N.jsx)(cs.a, {
							alwaysOn: !0,
							label: "Ratings",
							source: "ratings",
							choices: [{
								id: 1,
								name: "1 star"
							}, {
								id: 2,
								name: "2 stars"
							}, {
								id: 3,
								name: "3 stars"
							}, {
								id: 4,
								name: "4 stars"
							}, {
								id: 5,
								name: "5 stars"
							}],
							style: {
								minWidth: "120px"
							}
						}), Object(N.jsx)(Kr, {
							label: "Date",
							from: "after",
							to: "before",
							source: "createdAt"
						})]
					}))
				},
				ss = function(e) {
					var t = Object(zt.e)(),
						a = e.handleSubmitWithRedirect,
						r = e.setFormPristine;
					return Object(n.useEffect)((function() {
						r(e.pristine)
					}), [e.pristine, r]), e.pristine ? null : Object(N.jsxs)(Pn.a, Object(
						s.a)(Object(s.a)({}, e), {}, {
						children: [Object(N.jsx)(ye, {
							label: "Publish reply",
							icon: Object(N.jsx)(N.Fragment, {}),
							color: "default",
							variant: "contained",
							onApprove: function() {
								return a(!1)
							},
							title: "Are you sure?",
							question: "Your reply will be visible below the original review on the Overwolf Appstore"
						}), Object(N.jsx)(ye, {
							label: "Discard",
							icon: Object(N.jsx)(N.Fragment, {}),
							color: "default",
							variant: "outlined",
							disabled: e.pristine,
							title: "Are you sure?",
							question: "Your changes will be discarded",
							onApprove: function() {
								return t.change("body", null)
							}
						})]
					}))
				},
				os = function(e) {
					var t = e.setFormPristine;
					return Object(N.jsx)(Ee.a, Object(s.a)(Object(s.a)({}, e), {}, {
						title: Object(N.jsx)(N.Fragment, {}),
						children: Object(N.jsx)(He.a, {
							toolbar: Object(N.jsx)(ss, {
								setFormPristine: t
							}),
							redirect: !1,
							children: Object(N.jsx)(Rn, {
								fullWidth: !0,
								variant: "standard",
								source: "body",
								label: "Reply to this review",
								multiline: !0,
								validate: {
									maxLength: 350
								}
							})
						})
					}))
				},
				ls = a(1302),
				ds = function(e) {
					var t = Object(zt.e)(),
						a = Object(zt.f)(),
						r = Object(Lt.a)(),
						c = Object(Bt.a)(),
						i = Object(n.useState)(""),
						o = Object(je.a)(i, 2),
						l = o[0],
						d = o[1],
						j = e.setFormPristine,
						u = e.pristine,
						b = e.resource,
						p = e.record;
					Object(n.useEffect)((function() {
						d(a.values.body)
					}), [a.values.body]), Object(n.useEffect)((function() {
						j(e.pristine)
					}), [e.pristine, j]);
					var O = Object(At.a)(b, p.id),
						h = Object(je.a)(O, 1)[0],
						x = Object(n.useCallback)((function() {
							return h({
								payload: {
									data: a.values
								}
							}, {
								action: ls.a,
								onSuccess: function() {
									c("Reply update successfully"), r()
								},
								onFailure: function(e) {
									c(e.message, "warning")
								}
							})
						}), [h, a.values, r, c]);
					return Object(N.jsxs)(Pn.a, Object(s.a)(Object(s.a)({}, e), {}, {
						children: [Object(N.jsx)(ye, {
							label: "Update reply",
							icon: Object(N.jsx)(N.Fragment, {}),
							color: "default",
							variant: "contained",
							disabled: u,
							onApprove: function() {
								return x()
							},
							title: "Are you sure?",
							question: "Your reply will be visible below the original review on the Overwolf Appstore"
						}), Object(N.jsx)(ye, {
							label: "Discard",
							icon: Object(N.jsx)(N.Fragment, {}),
							color: "default",
							variant: "outlined",
							disabled: e.pristine,
							title: "Are you sure?",
							question: "Your changes will be discarded",
							onApprove: function() {
								return t.change("body", l)
							}
						})]
					}))
				},
				js = function(e) {
					var t = Object(n.useState)(""),
						a = Object(je.a)(t, 2),
						r = a[0],
						c = a[1];
					Object(n.useEffect)((function() {
						var e = za();
						c(e.email)
					}), []);
					var i = e.record.email === r ? "You" : e.record.email;
					return Object(N.jsxs)("div", {
						style: {
							marginBottom: 8
						},
						children: [i, " replied at ", Object(N.jsx)(rt, Object(s.a)({
							style: {
								fontSize: "small"
							}
						}, e))]
					})
				},
				us = function(e) {
					var t = e.setFormPristine;
					return Object(N.jsxs)(He.a, Object(s.a)(Object(s.a)({}, e), {}, {
						toolbar: Object(N.jsx)(ds, {
							setFormPristine: t
						}),
						redirect: !1,
						children: [Object(N.jsx)(js, {
							source: "createdAt"
						}), Object(N.jsx)(Rn, {
							fullWidth: !0,
							label: "Reply to this review",
							variant: "standard",
							source: "body",
							multiline: !0,
							validate: {
								maxLength: 350
							}
						})]
					}))
				},
				bs = a(1386),
				ps = Object(w.a)((function(e) {
					return {
						reviewContent: {
							padding: 0,
							"&:last-child": {
								padding: 0
							}
						},
						reviewExpand: {
							minHeight: 0,
							paddingTop: 0,
							borderTop: "1px solid ".concat(e.palette.grey[400]),
							"& .MuiExpansionPanelSummary-root": {
								minHeight: 0,
								flexDirection: "row-reverse",
								"& .MuiExpansionPanelSummary-expandIcon": {
									marginRight: ".75em"
								},
								"&:hover": {
									backgroundColor: "#4d4d4d80"
								}
							},
							"& .MuiExpansionPanelDetails-root": {
								paddingTop: 0
							}
						},
						rating: {
							color: e.palette.primary.main
						},
						username: {
							fontWeight: "bold"
						},
						card: {
							"& .ra-delete-button.Mui-disabled": {
								color: e.palette.text.disabled,
								opacity: "0.3"
							},
							"& .ra-delete-button:hover": {
								backgroundColor: e.palette.grey[100]
							},
							"&:not(:last-child)": {
								marginBottom: "2em"
							},
							"& .MuiCardContent-root": {
								paddingTop: 0
							},
							"& .create-page > div, .edit-page > div": {
								marginTop: 0,
								"& > div": {
									boxShadow: "none"
								}
							}
						},
						replyCreate: {
							"& .MuiToolbar-root": {
								backgroundColor: e.palette.background.paper,
								gap: 16
							}
						},
						machineInfo: {
							width: "100%",
							paddingLeft: "5em",
							"& span": {
								fontWeight: "bold"
							}
						}
					}
				})),
				Os = function(e) {
					var t = e.title;
					return Object(N.jsxs)("div", {
						style: {
							display: "flex",
							alignItems: "center",
							maxWidth: "80%"
						},
						children: [Object(N.jsx)(ne.a, {
							variant: "subtitle1",
							style: {
								marginRight: "1em"
							},
							children: t
						}), Object(N.jsx)(wc.a, {
							style: {
								flex: 1
							}
						})]
					})
				},
				hs = function(e) {
					var t = e.record,
						a = Object(Dt.a)(),
						n = ps(a);
					return Object(N.jsxs)("div", {
						className: n.machineInfo,
						children: [Object(N.jsx)(Os, {
							title: "APPLICATION"
						}), Object(N.jsxs)("div", {
							style: {
								marginBottom: "1.5em"
							},
							children: ["App version: ", Object(N.jsx)("span", {
								children: t.appVersion
							})]
						}), Object(N.jsx)(Os, {
							title: "OVERWOLF"
						}), Object(N.jsxs)("div", {
							style: {
								display: "flex",
								alignItems: "center",
								marginBottom: "1.5em"
							},
							children: [Object(N.jsxs)("div", {
								children: ["Overwolf version: ", Object(N.jsx)("span", {
									style: {
										marginRight: "1.5em"
									},
									children: t.owVersion
								})]
							}), Object(N.jsxs)("div", {
								children: ["GEP version: ", Object(N.jsx)("span", {
									children: t.gepVersion
								})]
							})]
						}), Object(N.jsx)(Os, {
							title: "MACHINE"
						}), Object(N.jsxs)("div", {
							style: {
								display: "flex",
								marginBottom: "1.5em"
							},
							children: [Object(N.jsxs)("div", {
								style: {
									marginRight: "2em"
								},
								children: [Object(N.jsxs)("div", {
									style: {
										marginBottom: ".5em"
									},
									children: ["Main screen size: ", Object(N.jsx)("span", {
										children: t.mainScreenResolution
									})]
								}), Object(N.jsxs)("div", {
									children: ["Secondary screen size: ", Object(N.jsx)(
										"span", {
											children: t.secondaryScreenResolution
										})]
								})]
							}), Object(N.jsxs)("div", {
								style: {
									marginRight: "2em"
								},
								children: [Object(N.jsxs)("div", {
									style: {
										marginBottom: ".5em"
									},
									children: ["Main screen DPI: ", Object(N.jsx)("span", {
										children: t.mainScreenDpi
									})]
								}), Object(N.jsxs)("div", {
									children: ["Secondary screen DPI: ", Object(N.jsx)(
										"span", {
											children: t.secondaryScreenDpi
										})]
								})]
							}), Object(N.jsx)("div", {
								style: {
									marginRight: "2em"
								},
								children: Object(N.jsxs)("div", {
									children: ["Operating system: ", Object(N.jsx)("span", {
										children: t.os
									})]
								})
							})]
						})]
					})
				},
				xs = function(e) {
					var t = e.record;
					return Object(N.jsxs)("div", {
						style: {
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							width: "100%"
						},
						children: [Object(N.jsxs)("span", {
							children: ["App version: ", t.appVersion]
						}), Object(N.jsxs)("span", {
							children: ["Overwolf version: ", t.owVersion]
						}), Object(N.jsxs)("span", {
							children: ["GEP version: ", t.gepVersion]
						})]
					})
				},
				ms = function(e) {
					var t = e.record,
						a = Object(Dt.a)(),
						n = t.username,
						r = t.createdAt,
						c = ps(a);
					return Object(N.jsxs)("span", {
						children: [Object(N.jsx)(ne.a, {
							variant: "subtitle1",
							className: c.username,
							component: "span",
							children: n
						}), "\xa0 \xa0", Object(N.jsx)(ne.a, {
							component: "span",
							variant: "subtitle2",
							children: new Date(r).toLocaleString("en-EU", {
								year: "numeric",
								month: "long",
								day: "numeric",
								hour: "numeric",
								minute: "2-digit"
							})
						})]
					})
				},
				fs = function(e) {
					var t = Object(Yt.a)().permissions,
						a = e.record,
						r = Object(Dt.a)(),
						c = ps(r),
						i = Object(n.useRef)(null),
						o = Object(n.useState)(!1),
						l = Object(je.a)(o, 2),
						d = l[0],
						j = l[1],
						u = Object(n.useState)(!0),
						b = Object(je.a)(u, 2),
						p = b[0],
						O = b[1],
						h = function(e) {
							var t;
							return {
								paddingLeft: (null === i || void 0 === i || null === (t = i.current) ||
									void 0 === t ? void 0 : t.clientWidth) + r.spacing(e)
							}
						};
					return a ? Object(N.jsxs)(K.a, {
						className: c.card,
						children: [Object(N.jsx)(Q.a, {
							avatar: Object(N.jsx)(S.a, {
								ref: i,
								src: a.avatar,
								children: "OW"
							}),
							title: Object(N.jsx)(ms, {
								record: a
							}),
							subheader: Object(N.jsx)(tt.a, {
								className: c.rating,
								precision: .5,
								value: a.rating,
								size: "small",
								readOnly: !0
							}),
							action: t >= 7 && Object(N.jsx)(bs.a, Object(s.a)(Object(s.a)({},
								e), {}, {
								resource: e.resource,
								disabled: a.deletedAt,
								label: "",
								redirect: !1
							}))
						}), Object(N.jsx)(J.a, {
							style: h(4),
							children: Object(N.jsx)(ne.a, {
								variant: "body2",
								component: "p",
								children: a.body
							})
						}), a.deletedAt ? Object(N.jsx)(J.a, {
							style: h(4),
							children: Object(N.jsxs)(ne.a, {
								variant: "body2",
								style: {
									fontWeight: "bold"
								},
								children: ["Deleted at ", Object(N.jsx)(rt, {
									record: {
										date: a.deletedAt
									},
									source: "date",
									style: {
										fontWeight: "bold"
									}
								})]
							})
						}) : a.replies && a.replies[0] ? Object(N.jsx)(J.a, {
							style: h(2),
							children: Object(N.jsx)(us, Object(s.a)(Object(s.a)({
								className: c.replyCreate
							}, e), {}, {
								record: Object(s.a)(Object(s.a)({}, a.replies[0]), {}, {
									appId: a.appId
								}),
								resource: as.name,
								basePath: "/".concat(as.name),
								setFormPristine: O
							}))
						}) : Object(N.jsx)(J.a, {
							style: h(2),
							children: Object(N.jsx)(os, Object(s.a)(Object(s.a)({
								className: c.replyCreate
							}, e), {}, {
								record: {
									reviewId: a.id,
									appId: a.appId
								},
								resource: as.name,
								basePath: "/".concat(as.name),
								setFormPristine: O
							}))
						}), !p && Object(N.jsx)(J.a, {
							style: h(4),
							children: Object(N.jsx)(ne.a, {
								variant: "caption",
								children: "Your reply will be visible below the original review on the Overwolf Appstore"
							})
						}), Object(N.jsx)(J.a, {
							className: c.reviewContent,
							children: Object(N.jsxs)(bt.a, {
								expanded: d,
								className: c.reviewExpand,
								children: [Object(N.jsx)(pt.a, {
									onClick: function() {
										return j(!d)
									},
									expandIcon: Object(N.jsx)(xt.a, {}),
									children: !d && Object(N.jsx)(xs, {
										record: a
									})
								}), Object(N.jsx)(Ot.a, {
									children: Object(N.jsx)(hs, {
										record: a
									})
								})]
							})
						})]
					}) : null
				},
				vs = a(1382),
				gs = a(726),
				ys = a.n(gs),
				Cs = Object(w.a)((function(e) {
					return {
						list: {
							"& > .MuiToolbar-root, span > .MuiToolbar-root": {
								backgroundColor: e.palette.background.paper,
								margin: "2em 0",
								padding: "1em",
								boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
								"& > form": {
									maxWidth: "850px"
								}
							}
						},
						ratingStar: {
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							width: "200px",
							"& .MuiSvgIcon-root": {
								color: e.palette.primary.main,
								position: "relative",
								top: -2,
								marginLeft: 4
							}
						}
					}
				})),
				ws = function(e) {
					var t = e.ids,
						a = e.data;
					return Object(N.jsx)("div", {
						style: {
							width: "1000px"
						},
						children: t.map((function(t) {
							return Object(N.jsx)(fs, Object(s.a)({
								record: a[t]
							}, e))
						}))
					})
				},
				Is = function(e) {
					var t = e.record,
						a = Cs();
					return Object(N.jsxs)("div", {
						style: {
							display: "flex",
							justifyContent: "space-around",
							alignItems: "center",
							width: "100%",
							padding: "1em",
							height: "69px"
						},
						children: [Object(N.jsxs)("div", {
							className: a.ratingStar,
							children: [Object(N.jsx)("span", {
								children: "Overwolf Appstore rating"
							}), Object(N.jsxs)(ne.a, {
								variant: "h6",
								children: [(null === t || void 0 === t ? void 0 : t.rating) ?
									t.rating.toFixed(2) : "N/A", Object(N.jsx)(ys.a, {})
								]
							})]
						}), Object(N.jsxs)("div", {
							className: a.ratingStar,
							children: [Object(N.jsx)("span", {
								children: "Total ratings"
							}), Object(N.jsx)(ne.a, {
								variant: "h6",
								children: t.totalRatings
							})]
						})]
					})
				},
				ks = function(e) {
					var t = Object(ee.j)().appId,
						a = Object(lt.a)(Fr.name, t),
						n = a.data,
						r = "Reviews";
					return a.loading || !n ? Object(N.jsx)("span", {
						children: r
					}) : Object(N.jsx)(dt, {
						record: n,
						page: r
					})
				},
				Ss = new Nn({
					name: "reviews",
					list: function(e) {
						var t = Object(Dt.a)(),
							a = Cs(t),
							n = Object(ee.j)().appId;
						return Object(N.jsxs)("div", {
							children: [Object(N.jsx)(vs.a, Object(s.a)(Object(s.a)({}, e), {}, {
								id: n,
								resource: "extensions/rating",
								basePath: "/extensions/rating",
								title: Object(N.jsx)(ks, Object(s.a)({}, e)),
								children: Object(N.jsx)(Is, {})
							})), Object(N.jsx)(rs, Object(s.a)(Object(s.a)({}, e), {}, {
								className: a.list,
								title: Object(N.jsx)(N.Fragment, {}),
								component: "div",
								resource: Ss.name,
								filters: Object(N.jsx)(is, {}),
								sort: {
									field: "createdAt",
									order: "DESC"
								},
								children: Object(N.jsx)(ws, Object(s.a)({}, e))
							}))]
						})
					},
					show: function(e) {
						return Object(N.jsx)(vs.a, Object(s.a)(Object(s.a)({}, e), {}, {
							children: Object(N.jsx)(fs, Object(s.a)({}, e))
						}))
					}
				}),
				Ns = a(495),
				Ps = function(e) {
					var t, a, n, r, c = e.getUploadParams,
						i = e.onError,
						s = void 0 === i ? function() {} : i,
						o = e.source,
						l = e.record,
						d = (e.label, Object(Bn.a)({
							source: o,
							record: l
						}).input);
					(0 === (null === (t = d.value) || void 0 === t ? void 0 : t.length) ||
						0 === (null === (a = d.value) || void 0 === a ? void 0 : a.filter((
							function(e) {
								return null === e || JSON.stringify(e) === JSON.stringify({}) ||
									":uploading:" === e.asset
							})).length) && (null === (n = d.value) || void 0 === n ? void 0 : n.length) <
						5) && d.onChange([].concat(Object(Ns.a)(d.value), [null]));
					var j = function(e, t) {
						if (t || 0 === t) {
							var a = d.value.filter((function(e, a) {
								return a !== t
							}));
							d.onChange(Object(Ns.a)(a))
						}
					};
					return Object(N.jsx)(N.Fragment, {
						children: (null === (r = d.value) || void 0 === r ? void 0 : r.length) >
							0 && d.value.filter((function(e) {
								return null === e || JSON.stringify(e) === JSON.stringify({}) ||
									(null === e || void 0 === e ? void 0 : e.hasOwnProperty("asset"))
							})).map((function(e, t) {
								return Object(N.jsx)(ya, {
									accept: "image/jpg, image/jpeg",
									index: t,
									width: "179.2px",
									height: "112px",
									getUploadParams: function(e) {
										return c(e, "asset_".concat(t), {
											height: 750,
											width: 1200
										})
									},
									onError: s,
									onRemoved: j,
									source: "assets[".concat(t, "].asset")
								})
							}))
					})
				},
				Ts = Object(Y.a)({
					input: {
						width: "100%",
						"& p": {
							textAlign: "right"
						}
					}
				}),
				Bs = function(e) {
					var t = e.color,
						a = e.className,
						n = e.disabled,
						r = e.maxLength,
						c = e.source,
						i = e.record,
						s = e.validate,
						o = e.InputProps,
						l = Ts(),
						d = Object(zt.d)(c, {
							initialValue: i[c],
							validate: s
						}).input;
					return Object(N.jsx)(Qt.a, {
						className: "".concat(l.input, " ").concat(a),
						color: t || "primary",
						disabled: !!n && n,
						error: (d.value, s && s(d.value, {}) || !!r && d.value.length > r),
						helperText: r ? "".concat(d.value.length, "/").concat(r) : void 0,
						multiline: !0,
						onChange: function(e) {
							return d.onChange(e.target.value)
						},
						value: d.value,
						variant: "standard",
						InputProps: o
					})
				},
				Ls = a(728),
				As = a.n(Ls),
				Ms = ["prefix"],
				_s = function(e) {
					var t = e.prefix,
						a = Object(z.a)(e, Ms);
					return Object(N.jsx)(Bs, Object(s.a)(Object(s.a)({}, a), {}, {
						InputProps: {
							startAdornment: Object(N.jsx)(Jt.a, {
								position: "start",
								children: t
							}),
							endAdornment: Object(N.jsx)(Jt.a, {
								position: "end",
								children: Object(N.jsx)(As.a, {
									style: {
										cursor: "pointer"
									},
									onClick: function() {
										return window.open("".concat(t).concat(a.record[a.source]))
									}
								})
							})
						}
					}))
				},
				Rs = Object(w.a)({
					label: {
						"& span": {
							position: "inherit"
						}
					},
					input: {
						"& p.MuiFormHelperText-root": {
							display: "none"
						}
					}
				}),
				Fs = function(e) {
					var t, a = e.disabled,
						n = e.record,
						r = Rs();
					return t = a ? [Object(N.jsxs)("span", {
						style: {
							display: "flex",
							alignItems: "center"
						},
						children: ["Free ", Object(N.jsx)(y.a, {
							className: r.label,
							record: n,
							source: "free",
							valueLabelTrue: "Free",
							valueLabelFalse: "Free"
						})]
					}), Object(N.jsxs)("span", {
						style: {
							display: "flex",
							alignItems: "center"
						},
						children: ["Contains ads ", Object(N.jsx)(y.a, {
							className: r.label,
							record: n,
							source: "contains_ads",
							valueLabelTrue: "Contains ads",
							valueLabelFalse: "Contains ads"
						})]
					}), Object(N.jsxs)("span", {
						style: {
							display: "flex",
							alignItems: "center"
						},
						children: ["Subscription available ", Object(N.jsx)(y.a, {
							className: r.label,
							record: n,
							label: "Subscription available",
							source: "subs_available",
							valueLabelTrue: "Subscription available",
							valueLabelFalse: "Subscription available"
						})]
					})] : [Object(N.jsxs)("span", {
						style: {
							display: "flex",
							alignItems: "center"
						},
						children: [Object(N.jsx)(m.a, {
							className: r.input,
							record: n,
							disabled: a,
							source: "free"
						}), Object(N.jsx)("span", {
							children: " Free"
						})]
					}), Object(N.jsxs)("span", {
						style: {
							display: "flex",
							alignItems: "center"
						},
						children: [Object(N.jsx)(m.a, {
							className: r.input,
							record: n,
							disabled: a,
							source: "contains_ads"
						}), Object(N.jsx)("span", {
							children: " Contains ads"
						})]
					}), Object(N.jsxs)("span", {
						style: {
							display: "flex",
							alignItems: "center"
						},
						children: [Object(N.jsx)(m.a, {
							className: r.input,
							record: n,
							label: "Subscription available",
							disabled: a,
							source: "subs_available"
						}), Object(N.jsx)("span", {
							children: " Subscription available"
						})]
					})], Object(N.jsx)("div", {
						style: {
							display: "flex",
							flexDirection: "column"
						},
						children: t
					})
				},
				Ds = Object(Y.a)((function(e) {
					return {
						fieldInputBox: {
							"& > div": {
								display: "flex",
								flex: 1,
								justifyContent: "flex-end",
								alignItems: "center"
							}
						},
						imageInputList: {
							"&>div": {
								flexWrap: "wrap",
								display: "flex",
								justifyContent: "flex-end",
								alignItems: "center",
								margin: "0 0 1em 1em"
							}
						},
						chipInputHideX: {
							"& svg": {
								display: "none"
							}
						},
						urlFieldModifyColors: {
							"& div.MuiInputAdornment-positionStart p": {
								color: "inherit"
							},
							"& div.MuiInputAdornment-positionEnd svg": {
								color: e.palette.text.primary
							}
						}
					}
				})),
				zs = function(e) {
					var t = Object(zt.f)();
					return Object(N.jsxs)(Pn.a, Object(s.a)(Object(s.a)({}, e), {}, {
						children: [Object(N.jsx)(ee.a, {
							when: Object.entries(t.modified).some((function(e) {
								var t = Object(je.a)(e, 2),
									a = t[0],
									n = t[1];
								return "assets" !== a && n
							})),
							message: "You have unsaved changes, are you sure you want to leave?"
						}), Object(N.jsx)(Tn.a, {
							disabled: function() {
								var e, a = null === (e = t.values.assets) || void 0 === e ?
									void 0 : e.filter((function(e) {
										return null !== e && (null === e || void 0 === e ? void 0 :
											e.hasOwnProperty("asset"))
									}));
								return t.invalid || !Object.entries(t.modified).some((
										function(e) {
											var t = Object(je.a)(e, 2),
												a = t[0],
												n = t[1];
											return "assets" !== a && n
										})) || 0 === (null === a || void 0 === a ? void 0 : a.length) ||
									(null === a || void 0 === a ? void 0 : a.length) > 5
							}(),
							transform: function(e) {
								return Object(s.a)(Object(s.a)({}, e), {}, {
									assets: e.assets.filter((function(e) {
										return null !== e && e.asset
									}))
								})
							}
						})]
					}))
				},
				Es = function(e) {
					var t = e.record,
						a = Object(Yt.a)().permissions,
						r = Ds(),
						c = function(e, a, n) {
							var r = localStorage.getItem(Ra),
								c = new FormData;
							return c.append("file", e.file), n && (c.append("fileHeight", e.meta.height),
								c.append("fileWidth", e.meta.width), c.append("height", n.height.toString()),
								c.append("width", n.width.toString())), {
								url: "".concat(Ha.apiUrl, "/app-store-listing/").concat(t.id,
									"/assets/").concat(a),
								headers: {
									authorization: "Bearer ".concat(r)
								},
								body: c
							}
						},
						i = Object(n.useState)(""),
						o = Object(je.a)(i, 2),
						l = o[0],
						d = o[1],
						j = Object(n.useState)(!1),
						u = Object(je.a)(j, 2),
						b = u[0],
						p = u[1],
						O = function() {
							d(""), p(!1)
						},
						h = function(e) {
							d(e), p(!0)
						};
					return Object(N.jsxs)(Zn, Object(s.a)(Object(s.a)({}, e), {}, {
						toolbar: Object(N.jsx)(zs, {}),
						redirect: !1,
						warnUnsaved: !1,
						children: [Object(N.jsx)(Qn, {
							children: "App details"
						}), Object(N.jsx)(Ke.a, {
							source: "app.name",
							label: "Name"
						}), Object(N.jsx)(Ke.a, {
							source: "app.author",
							label: "Author"
						}), Object(N.jsx)(Rn, {
							source: "title",
							label: "App title",
							validate: {
								required: !0
							},
							disabled: a < 4
						}), Object(N.jsx)(f.a, {
							variant: "standard",
							fullWidth: !0,
							allowEmpty: !1,
							initialValue: t.hidden,
							record: t,
							source: "hidden",
							label: "App visibility",
							disabled: a < 7,
							choices: [{
								id: 1,
								value: !1,
								text: "Visible"
							}, {
								id: 2,
								value: !0,
								text: "Hidden"
							}],
							optionText: "text",
							optionValue: "value"
						}), Object(N.jsx)(_s, {
							disabled: a < 4,
							variant: "standard",
							record: t,
							source: "seo_name",
							label: "App URL",
							prefix: "https://www.overwolf.com/app/",
							className: a < 4 && r.urlFieldModifyColors
						}), Object(N.jsx)(Fs, {
							label: "Monetization",
							record: t,
							disabled: a < 4
						}), Object(N.jsx)(Rn, {
							source: "shortDescription",
							label: "Short description",
							record: t,
							validate: {
								maxLength: 180
							}
						}), Object(N.jsx)(Kt, {
							source: "fullDescription",
							label: "Full description",
							validate: function(e) {
								if (!e) return "full description is required"
							}
						}), Object(N.jsx)(da, {
							source: "tags",
							placeholder: "Add tags",
							label: "Tags",
							disabled: a < 4,
							variant: "outlined",
							fullWidth: !0,
							className: a < 4 && r.chipInputHideX
						}), Object(N.jsx)(Qn, {
							children: "Graphic assets"
						}), Object(N.jsx)(ya, {
							label: "Tile",
							caption: "258x198 JPG format",
							accept: "image/jpg, image/jpeg",
							maxSizeBytes: 15e5,
							width: "145px",
							height: "112px",
							getUploadParams: function(e) {
								return c(e, "tile", {
									height: 198,
									width: 258
								})
							},
							source: "tile",
							onError: function(e) {
								return h(e)
							},
							validate: Object(We.h)(),
							addLabel: !0,
							className: r.fieldInputBox
						}), Object(N.jsx)(ya, {
							label: "Icon",
							accept: "image/png",
							caption: "55x55 PNG format",
							width: "112px",
							height: "112px",
							previewHeight: "55px",
							getUploadParams: function(e) {
								return c(e, "icon", {
									height: 55,
									width: 55
								})
							},
							source: "icon",
							onError: function(e) {
								return h(e)
							},
							validate: Object(We.h)(),
							addLabel: !0,
							className: r.fieldInputBox
						}), Object(N.jsx)(Ps, {
							label: "Screenshots",
							caption: "1200x750 JPG format\nAt least 1 screenshot is required (max. 5)",
							captionTypographyProps: {
								style: {
									whiteSpace: "pre-line"
								}
							},
							className: r.imageInputList,
							record: t,
							getUploadParams: c,
							onError: function(e) {
								return h(e)
							},
							source: "assets",
							addLabel: !0
						}), Object(N.jsxs)(ue.a, {
							open: b,
							onClose: O,
							children: [Object(N.jsx)(be.a, {
								children: "Image Upload Error"
							}), Object(N.jsx)(pe.a, {
								children: Object(N.jsx)(Oe.a, {
									children: l
								})
							}), Object(N.jsx)(he.a, {
								children: Object(N.jsx)(Nt.a, {
									onClick: O,
									color: "primary",
									autoFocus: !0,
									children: "Close"
								})
							})]
						})]
					}))
				},
				Hs = Object(Y.a)({
					edit: {
						width: "70%",
						maxWidth: "960px"
					}
				}),
				Ws = a(67),
				Vs = a(118),
				Us = a.n(Vs),
				qs = function(e) {
					var t = e.children,
						a = e.loading,
						n = e.style;
					return Object(N.jsx)(K.a, {
						style: n,
						children: a ? Object(N.jsx)(J.a, {
							style: {
								display: "flex",
								justifyContent: "center"
							},
							children: Object(N.jsx)(ca.a, {
								color: "primary"
							})
						}) : t
					})
				},
				Zs = function(e) {
					return Object(Pt.sortBy)(Object.values(e.reverse().reduce((function(e,
						t) {
						return e[new Date(t.timestamp).getDate()] = t.timestamp, e
					}), {})))
				},
				Ks = {
					dataKey: "timestamp",
					scale: "time",
					type: "number",
					domain: ["dataMin", "dataMax"],
					tickFormatter: function(e) {
						return Us()(e).format("MMM DD")
					},
					height: 50,
					tickLine: !1
				},
				Qs = {
					axisLine: !1,
					tickLine: !1
				},
				Js = {
					labelFormatter: function(e) {
						return Us()(e).format("ddd, MMM DD, HH:mm")
					}
				},
				Ys = {
					vertical: !1
				},
				Gs = Object(w.a)({
					chart: {
						fontSize: "small",
						"& g.yAxis g.recharts-cartesian-axis-tick:first-child": {
							display: "none"
						},
						"& .recharts-tooltip-label": {
							color: "#000000"
						},
						"& .recharts-label tspan": {
							filter: "contrast(0)"
						},
						"& .recharts-tooltip-wrapper-bottom > div > div": {
							color: "#000000"
						}
					}
				}),
				$s = function(e) {
					return Object(N.jsx)("div", {
						style: {
							padding: "1em"
						},
						children: Object(N.jsx)(ne.a, {
							variant: "caption",
							children: "We're still collecting data, please try again in 24 hours (or contact your account manager if this issue persists)"
						})
					})
				},
				Xs = function(e, t) {
					var a = {
						minWidth: "1200px"
					};
					return (e || t.length > 0) && (a.minHeight = "450px"), a
				},
				eo = function(e) {
					var t = e.x,
						a = e.y,
						n = e.width,
						r = void 0 === n ? 24 : n,
						c = e.payload,
						i = e.selectedRollout,
						s = (null === i || void 0 === i ? void 0 : i.created) === c.value,
						o = t - r / 2,
						l = a / 2;
					return Object(N.jsx)("g", {
						cursor: "pointer",
						transform: "translate(".concat(o, ",").concat(l, ")"),
						children: Object(N.jsx)(Fc, {
							width: "".concat(r, "px"),
							color: s ? "primary" : "secondary"
						})
					})
				},
				to = Object(w.a)((function(e) {
					return {
						rolloutExpand: {
							borderTop: "1px solid ".concat(e.palette.grey[500]),
							paddingBottom: "8px",
							display: "flex",
							flexDirection: "row",
							alignItems: "flex-end",
							"&>*:not(:last-child)": {
								marginRight: "1em"
							}
						}
					}
				})),
				ao = function(e) {
					var t = e.data,
						a = e.loading,
						r = e.onClick,
						c = e.rollouts,
						i = Object(Dt.a)(),
						o = to(i),
						l = Gs(),
						d = Object(n.useState)([]),
						j = Object(je.a)(d, 2),
						u = j[0],
						b = j[1],
						p = Object(n.useState)([]),
						O = Object(je.a)(p, 2),
						h = O[0],
						x = O[1],
						m = Object(n.useState)(!1),
						f = Object(je.a)(m, 2),
						v = f[0],
						g = f[1],
						y = Object(n.useState)({}),
						C = Object(je.a)(y, 2),
						w = C[0],
						I = C[1],
						k = function() {
							g(!1), I(null)
						};
					return Object(n.useEffect)((function() {
						t.length > 0 && b(Zs(t))
					}), [t]), Object(n.useEffect)((function() {
						c.length > 0 && x(c.map((function(e) {
							return new Date(e.created_at).getTime()
						})))
					}), [c]), Object(N.jsx)(N.Fragment, {
						children: Object(N.jsxs)(qs, {
							loading: a,
							style: Xs(a, t),
							children: [Object(N.jsxs)(J.a, {
								children: [Object(N.jsx)(ne.a, {
									variant: "subtitle1",
									children: "Crashes over time"
								}), Object(N.jsx)(ne.a, {
									variant: "caption",
									children: "Sum of hourly app crashes over the last week"
								})]
							}), 0 === t.length ? Object(N.jsx)($s, {}) : Object(N.jsxs)(N.Fragment, {
								children: [Object(N.jsx)(J.a, {
									children: Object(N.jsx)(Ws.g, {
										aspect: 12 / 4.5,
										minWidth: 800,
										width: 1200,
										children: Object(N.jsxs)(Ws.f, {
											data: t,
											className: Object.values(l).join(" "),
											onClick: r,
											children: [Object(N.jsx)(Ws.b, Object(s.a)({}, Ys)),
												Object(N.jsx)(Ws.i, Object(s.a)(Object(s.a)({},
													Ks), {}, {
													xAxisId: 0,
													ticks: u
												})), (null === c || void 0 === c ? void 0 : c.length) >
												0 && Object(N.jsx)(Ws.i, {
													xAxisId: 1,
													dataKey: "timestamp",
													scale: "time",
													type: "number",
													domain: ["dataMin", "dataMax"],
													tickLine: !1,
													ticks: h,
													interval: 0,
													tick: Object(N.jsx)(eo, {
														selectedRollout: w,
														width: 24
													}),
													onClick: function(e, t) {
														var a = c[t];
														a === w ? k() : (g(!0), I(a))
													}
												}), Object(N.jsx)(Ws.j, Object(s.a)(Object(s.a)({},
													Qs), {}, {
													label: {
														value: "Crashes",
														angle: -90,
														position: "insideLeft"
													}
												})), Object(N.jsx)(Ws.e, {
													dataKey: "appCrashes",
													stroke: i.palette.primary.main,
													dot: !1,
													strokeWidth: 2
												}), Object(N.jsx)(Ws.h, Object(s.a)(Object(s.a)({},
													Js), {}, {
													formatter: function(e) {
														return [e, "crashes"]
													}
												}))
											]
										})
									})
								}), Object(N.jsxs)(bt.a, {
									expanded: v,
									children: [Object(N.jsx)(pt.a, {
										style: {
											display: "none"
										}
									}), Object(N.jsx)(Ot.a, {
										className: o.rolloutExpand,
										children: (null === w || void 0 === w ? void 0 : w.version) &&
											Object(N.jsxs)(N.Fragment, {
												children: [Object(N.jsx)(Fc, {
													width: "1em"
												}), Object(N.jsx)(ne.a, {
													variant: "subtitle2",
													style: {
														fontWeight: "bold"
													},
													children: "Release rollout"
												}), Object(N.jsxs)(ne.a, {
													variant: "subtitle2",
													children: [Us()(w.created_at).format(
														"ddd, MMM DD, HH:mm:ss"), " - "]
												}), Object(N.jsxs)(ne.a, {
													variant: "subtitle2",
													children: ["Rollout of ", null === w || void 0 ===
														w ? void 0 : w.version.version, " at ", null ===
														w || void 0 === w ? void 0 : w.percent, "%"
													]
												})]
											})
									})]
								})]
							})]
						})
					})
				},
				no = function(e) {
					return e.active && Object(N.jsxs)("div", {
						style: {
							backgroundColor: "white",
							padding: "1em",
							boxSizing: "border-box",
							border: "1px solid rgb(200, 200, 200, 0.5)"
						},
						children: [Object(N.jsx)("div", {
							children: e.labelFormatter(e.label)
						}), e.payload.map((function(t) {
							var a = t.color,
								n = t.name,
								r = t.value,
								c = e.formatter(r, n),
								i = Object(je.a)(c, 2),
								s = i[0],
								o = i[1];
							return "minMaxCrashes" === n && (a = "grey"), Object(N.jsxs)(
								"p", {
									style: {
										color: a
									},
									children: [o, ": ", s]
								})
						}))]
					})
				},
				ro = function(e) {
					var t = e.data,
						a = e.loading,
						r = (e.onClick, Object(Dt.a)()),
						c = Object(n.useState)([]),
						i = Object(je.a)(c, 2),
						o = i[0],
						l = i[1],
						d = Gs();
					return Object(n.useEffect)((function() {
						t.length > 0 && l(Zs(t))
					}), [t]), Object(N.jsxs)(qs, {
						loading: a,
						style: Xs(a, t),
						children: [Object(N.jsx)(J.a, {
							children: Object(N.jsx)(ne.a, {
								variant: "subtitle1",
								children: "Crash rate compared to peers"
							})
						}), 0 === t.length ? Object(N.jsx)($s, {}) : Object(N.jsx)(J.a, {
							children: Object(N.jsx)(Ws.g, {
								aspect: 12 / 4.5,
								minWidth: 800,
								width: 1200,
								children: Object(N.jsxs)(Ws.c, {
									data: t,
									className: Object.values(d).join(" "),
									children: [Object(N.jsx)(Ws.b, Object(s.a)({}, Ys)),
										Object(N.jsx)(Ws.i, Object(s.a)(Object(s.a)({}, Ks), {}, {
											ticks: o
										})), Object(N.jsx)(Ws.j, Object(s.a)(Object(s.a)({}, Qs), {}, {
											unit: "%"
										})), Object(N.jsx)(Ws.e, {
											dataKey: "medianCrashes",
											stroke: r.palette.primary.light,
											strokeDasharray: "5 2",
											type: "monotone",
											dot: !1
										}), Object(N.jsx)(Ws.a, {
											dataKey: "minMaxCrashes",
											fill: r.palette.grey[200],
											stroke: r.palette.grey[300],
											dot: !1
										}), Object(N.jsx)(Ws.e, {
											dataKey: "appCrashRate",
											stroke: r.palette.primary.main,
											dot: !1,
											strokeWidth: 2
										}), Object(N.jsx)(Ws.d, {
											verticalAlign: "bottom",
											align: "left",
											margin: {
												top: 10
											},
											height: 36,
											payload: [{
												id: "appCrashRate",
												value: "App crash rate",
												type: "plainline",
												color: r.palette.primary.main,
												payload: {
													strokeDasharray: null
												}
											}, {
												id: "medianCrashes",
												value: "Peer median crash rate",
												type: "plainline",
												color: r.palette.primary.light,
												payload: {
													strokeDasharray: "5 2"
												}
											}, {
												id: "minMaxCrashes",
												value: "Peer crash rate range",
												type: "circle",
												color: r.palette.grey[200]
											}]
										}), Object(N.jsx)(Ws.h, Object(s.a)(Object(s.a)({}, Js), {}, {
											content: no,
											formatter: function(e, t, a) {
												var n, r;
												switch (t) {
													case "appCrashRate":
														n = "Your app's crash rate", r = "".concat(e, "%");
														break;
													case "medianCrashes":
														n = "Median peer crash rate", r = "".concat(e,
															"%");
														break;
													case "minMaxCrashes":
														n = "Peers' crash rate range", r = "".concat(e[0],
															"% - ").concat(e[1], "%")
												}
												return [r, n]
											}
										}))
									]
								})
							})
						})]
					})
				},
				co = Object(w.a)((function(e) {
					return {
						owButton: {
							minWidth: "80px",
							backgroundColor: "transparent",
							color: e.palette.grey[600],
							"&:hover": {
								color: e.palette.grey[900],
								backgroundColor: "transparent"
							}
						},
						noIcon: {
							"& .MuiButton-label > span": {
								paddingLeft: 0
							}
						}
					}
				})),
				io = function(e) {
					var t = co(),
						a = e.icon;
					return Object(N.jsx)(te.a, Object(s.a)(Object(s.a)({
						className: "".concat(t.owButton, " ").concat(!a && t.noIcon, " ").concat(
							e.className)
					}, e), {}, {
						children: a && a
					}))
				},
				so = function(e) {
					var t = e.record,
						a = e.source,
						r = e.isAdmin,
						c = Object(n.useState)(""),
						i = Object(je.a)(c, 2),
						s = i[0],
						o = i[1],
						l = Object(n.useState)(null),
						d = Object(je.a)(l, 2),
						j = d[0],
						u = d[1];
					Object(n.useEffect)((function() {
						t && (o(t.id), u(t.extentionId))
					}), [t]);
					var b = Object(ln.a)(),
						p = function() {
							var e = Object(Ft.a)(Rt.a.mark((function e() {
								var t, a;
								return Rt.a.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, b.getOne("extension-crash-logs/".concat(
												j).concat(r && "/admin"), {
												id: s
											});
										case 2:
											t = e.sent, a = t.data, window.open(a.url);
										case 5:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}();
					return t && t[a] ? Object(N.jsx)(io, {
						style: {
							minWidth: 0
						},
						size: "md",
						icon: Object(N.jsx)(gt.a, {}),
						onClick: p
					}) : Object(N.jsx)("span", {
						children: "N/A"
					})
				},
				oo = Object(w.a)((function(e) {
					return {
						cellCenter: {
							textAlign: "center"
						},
						dateFilterButton: {
							background: e.palette.grey[300],
							borderRadius: "5px",
							padding: ".3em",
							fontSize: "large",
							cursor: "pointer",
							"&:hover": {
								background: e.palette.grey[400]
							}
						}
					}
				})),
				lo = function(e) {
					var t = e.logDateState,
						a = e.appId,
						r = Object(je.a)(t, 2),
						c = r[0],
						i = r[1],
						s = oo(),
						o = Object(n.useState)(),
						l = Object(je.a)(o, 2),
						d = l[0],
						j = l[1],
						u = Object(n.useState)(),
						b = Object(je.a)(u, 2),
						p = b[0],
						O = b[1],
						h = Object(Yt.a)(),
						x = h.loaded,
						m = h.permissions;
					return Object(n.useEffect)((function() {
						if (c) {
							var e = new Date(c);
							j(new Date(e.setMinutes(0, 0, 0))), O(new Date(e.setMinutes(59, 59,
								999)))
						} else j(void 0), O(void 0)
					}), [c, O, j]), Object(N.jsxs)(K.a, {
						children: [Object(N.jsxs)(J.a, {
							children: [Object(N.jsxs)(ne.a, {
								variant: "subtitle1",
								children: ["Crash logs ", c && Object(N.jsxs)("span", {
									children: ["for ", Object(N.jsxs)("span", {
										className: s.dateFilterButton,
										onClick: function() {
											return i(void 0)
										},
										children: [Object(N.jsx)(rt, {
											record: {
												date: new Date(c)
											},
											source: "date"
										}), "\xa0\xd7"]
									})]
								})]
							}), Object(N.jsx)(ne.a, {
								variant: "caption",
								children: "Click on the graph above to filter this list by hour"
							})]
						}), Object(N.jsx)(J.a, {
							children: Object(N.jsx)(jt.a, {
								basePath: "/extension-crash-logs",
								reference: "extension-crash-logs",
								record: {
									id: a
								},
								target: "extensionId",
								filter: {
									before: p,
									after: d
								},
								perPage: 10,
								pagination: Object(N.jsx)(Z.a, {}),
								children: Object(N.jsxs)(X.a, {
									rowStyle: function() {
										return {
											height: "48px"
										}
									},
									children: [Object(N.jsx)(Ke.a, {
										source: "extensionVersion",
										label: "App version"
									}), Object(N.jsx)(Ke.a, {
										source: "owVersion",
										label: "Overwolf client version"
									}), Object(N.jsx)(rt, {
										source: "createdAt"
									}), Object(N.jsx)(Ke.a, {
										source: "username"
									}), 7 === m && Object(N.jsx)(Ke.a, {
										source: "reason"
									}), Object(N.jsx)(so, {
										source: "receivedAppLogs",
										label: "App logs",
										cellClassName: s.cellCenter,
										headerClassName: s.cellCenter
									}), x && m >= 4 && Object(N.jsx)(so, {
										source: "receivedFullLogs",
										label: "Full logs",
										cellClassName: s.cellCenter,
										headerClassName: s.cellCenter,
										isAdmin: !0
									})]
								})
							})
						})]
					})
				},
				jo = Object(Y.a)({
					root: {
						marginTop: "16px",
						"& div.MuiCard-root": {
							marginBottom: "16px"
						}
					},
					card: {
						backgroundColor: "transparent",
						boxShadow: "none"
					}
				}),
				uo = function(e) {
					var t = e.appId,
						a = Object(n.useState)(),
						r = Object(je.a)(a, 2),
						c = r[0],
						i = r[1],
						o = function(e) {
							var t = Object(ln.a)(),
								a = Object(n.useState)([]),
								r = Object(je.a)(a, 2),
								c = r[0],
								i = r[1],
								o = Object(n.useState)(!0),
								l = Object(je.a)(o, 2),
								d = l[0],
								j = l[1];
							return Object(n.useEffect)((function() {
								t.getList("crash-reports", {
									filter: {
										appId: e,
										type: "app"
									},
									pagination: {},
									sort: {
										field: "timestamp",
										order: "ASC"
									}
								}).then((function(e) {
									j(!1), i(e.data.map((function(e) {
										return Object(s.a)(Object(s.a)({}, e), {}, {
											timestamp: Us()(e.timestamp).toDate().getTime()
										})
									})))
								}))
							}), [t, e]), {
								loading: d,
								data: c
							}
						}(t),
						l = o.data,
						d = o.loading,
						j = function(e) {
							var t = Object(ln.a)(),
								a = Object(n.useState)([]),
								r = Object(je.a)(a, 2),
								c = r[0],
								i = r[1],
								o = Object(n.useState)(!0),
								l = Object(je.a)(o, 2),
								d = l[0],
								j = l[1];
							return Object(n.useEffect)((function() {
								t.getList("crash-reports/aggregate", {
									filter: {
										appId: e
									},
									pagination: {},
									sort: {}
								}).then((function(e) {
									j(!1), i(e.data.map((function(e) {
										return Object(s.a)(Object(s.a)({}, e), {}, {
											minMaxCrashes: JSON.parse(e.minMaxCrashes),
											timestamp: Us()(e.timestamp).toDate().getTime()
										})
									})))
								}))
							}), [t, e]), {
								loading: d,
								data: c
							}
						}(t),
						u = j.data,
						b = j.loading,
						p = function(e) {
							var t = Object(ln.a)(),
								a = Us()().add(-7, "d").toDate().toString(),
								r = Object(n.useState)([]),
								c = Object(je.a)(r, 2),
								i = c[0],
								o = c[1],
								l = Object(n.useState)(!0),
								d = Object(je.a)(l, 2),
								j = d[0],
								u = d[1];
							return Object(n.useEffect)((function() {
								t.getList("phasing", {
									filter: {
										application_id: e,
										created_at: a
									},
									pagination: {},
									sort: {
										field: "created_at",
										order: "ASC"
									}
								}).then((function(e) {
									u(!1), o(e.data.map((function(e) {
										return Object(s.a)(Object(s.a)({}, e), {}, {
											created: Us()(e.created_at).toDate().getTime()
										})
									})))
								}))
							}), [t, e, a]), {
								loading: j,
								data: i
							}
						}(t),
						O = p.data,
						h = p.loading,
						x = function(e) {
							i(e.activeLabel)
						};
					return Object(N.jsxs)(N.Fragment, {
						children: [Object(N.jsx)(ao, {
							data: l,
							rollouts: O,
							loading: d || h,
							onClick: function(e) {
								return x(e)
							}
						}), Object(N.jsx)(lo, {
							appId: t,
							logDateState: [c, i]
						}), Object(N.jsx)(ro, {
							data: u,
							loading: b,
							onClick: function(e) {
								return x(e)
							}
						})]
					})
				},
				bo = function(e) {
					var t = e.record,
						a = e.source;
					return Object(N.jsx)("span", {
						children: ["Inactive", "Test", "Active"][t[a] - 1]
					})
				},
				po = function(e) {
					var t = Object(ee.j)().appId,
						a = Object(lt.a)(Fr.name, t),
						n = a.data,
						r = "Subscription plans";
					return a.loading || !n ? Object(N.jsx)("span", {
						children: r
					}) : Object(N.jsx)(dt, {
						record: n,
						page: r
					})
				},
				Oo = a.p + "static/media/subscription template.3b7b2ed8.png",
				ho = Object(w.a)((function(e) {
					return {
						imageBox: {
							display: "flex",
							"&>div:not(:last-child)": {
								marginRight: "1.5em"
							}
						}
					}
				})),
				xo = function(e) {
					var t = e.getUploadParams,
						a = e.onError,
						n = e.accept,
						r = e.source_light,
						c = e.source_dark,
						i = e.validate,
						s = e.disabled,
						o = e.label,
						l = e.width,
						d = e.height,
						j = e.imageWidth,
						u = e.fullWidth,
						b = e.style,
						p = e.sequence,
						O = e.caption,
						h = e.addLabel,
						x = e.lightHelperText,
						m = e.darkHelperText,
						f = e.assetTypeIndicate,
						v = ho();
					return Object(N.jsxs)("div", {
						className: v.imageBox,
						children: [Object(N.jsx)(ya, {
							addLabel: h,
							accept: n,
							getUploadParams: t,
							source: r,
							width: l,
							height: d,
							imageWidth: j,
							sequence: p,
							style: b,
							validate: i,
							fullWidth: u,
							label: o,
							caption: O,
							onError: a,
							disabled: s,
							helperText: x,
							assetTypeIndicate: f
						}), Object(N.jsx)(ya, {
							addLabel: h,
							accept: n,
							getUploadParams: t,
							source: c,
							width: l,
							height: d,
							imageWidth: j,
							sequence: p,
							style: b,
							validate: i,
							fullWidth: u,
							label: o,
							caption: O,
							onError: a,
							disabled: s,
							helperText: m,
							assetTypeIndicate: f
						})]
					})
				},
				mo = Object(w.a)({
					numberInput: {
						width: "10em"
					},
					statusInput: {
						width: "3em"
					}
				}),
				fo = function(e) {
					var t = e.pristine,
						a = e.invalid,
						n = Object(Bt.a)();
					return Object(N.jsx)(Pn.a, Object(s.a)(Object(s.a)({}, e), {}, {
						children: Object(N.jsx)(Tn.a, {
							disabled: t || a,
							redirect: function() {
								return n("Plan updated"), ""
							},
							submitOnEnter: !1
						})
					}))
				},
				vo = function(e) {
					var t = Object(Yt.a)().permissions,
						a = Object(ee.j)(),
						r = a.appId,
						c = a.id,
						i = function(e, t) {
							var a = localStorage.getItem(Ra),
								n = new FormData;
							return n.append("file", e.file), t && (n.append("fileHeight", e.meta.height),
								n.append("fileWidth", e.meta.width), n.append("dimensions", JSON.stringify(
									t))), {
								url: "".concat(Ha.apiUrl, "/subscription-plans/").concat(c,
									"/assets?appId=").concat(r),
								headers: {
									authorization: "Bearer ".concat(a)
								},
								body: n
							}
						},
						o = mo(),
						l = Object(n.useState)(""),
						d = Object(je.a)(l, 2),
						j = d[0],
						u = d[1],
						b = Object(n.useState)(!1),
						p = Object(je.a)(b, 2),
						O = p[0],
						h = p[1],
						x = function() {
							u(""), h(!1)
						},
						m = function(e) {
							u(e), h(!0)
						};
					return Object(N.jsx)(N.Fragment, {
						children: Object(N.jsxs)(Zn, Object(s.a)(Object(s.a)({}, e), {}, {
							redirect: !1,
							toolbar: Object(N.jsx)(fo, Object(s.a)({}, e)),
							captionTypographyProps: {
								variant: "caption",
								style: {
									whiteSpace: "pre-line"
								}
							},
							children: [Object(N.jsx)(Qn, {
								children: "Plan details"
							}), Object(N.jsx)(Rn, {
								source: "title",
								validate: {
									maxLength: 50,
									required: !0
								}
							}), Object(N.jsx)(Ke.a, {
								label: "ID",
								source: "id"
							}), Object(N.jsx)(hr.a, {
								label: "Price (USD)",
								source: "price",
								className: o.numberInput,
								fullWidth: !1,
								validate: [Object(We.h)()]
							}), Object(N.jsx)(hr.a, {
								label: "Period (months)",
								source: "period",
								className: o.numberInput,
								fullWidth: !1,
								validate: [Object(We.h)()]
							}), Object(N.jsx)(f.a, {
								source: "status",
								choices: [{
									id: 1,
									text: "Inactive"
								}, {
									id: 2,
									text: "Test"
								}, {
									id: 3,
									text: "Active"
								}],
								optionText: "text",
								fullWidth: !1,
								className: o.statusInput,
								validate: [Object(We.h)()]
							}), Object(N.jsxs)(Qn, {
								children: [Object(N.jsx)("div", {
									children: "Customize plan page"
								}), Object(N.jsxs)(ne.a, {
									variant: "caption",
									children: ["The plan page assets marked in ", Object(N.jsx)
										("span", {
											style: {
												color: "blue"
											},
											children: "blue"
										}), " are customizable"
									]
								})]
							}), Object(N.jsx)(Yn, {
								children: Object(N.jsx)("div", {
									style: {
										display: "flex",
										justifyContent: "center",
										marginBottom: "4em"
									},
									children: Object(N.jsx)("img", {
										src: Oo,
										alt: "plan template"
									})
								})
							}), Object(N.jsx)(xo, {
								addLabel: !0,
								accept: "image/png",
								getUploadParams: function(e) {
									return i(e, [{
										width: 2250,
										height: 96
									}, {
										width: 150,
										height: 96
									}])
								},
								source_light: "image0_url",
								source_dark: "image0_url_dark",
								width: "150px",
								height: "96px",
								imageWidth: 2250,
								sequence: !0,
								style: {
									display: "flex",
									justifyContent: "flex-end"
								},
								validate: Object(We.h)(),
								fullWidth: !1,
								label: "Image 1",
								caption: "PNG format \n\n Sprite animation - 2250x96 pixels \n OR \n Static image - 150x96 pixels",
								onError: function(e) {
									return m(e)
								},
								disabled: t < 6,
								lightHelperText: "Light mode image \n(For Appstore or in-app experience)",
								darkHelperText: "Dark mode image \n(Only for in-app experience)",
								assetTypeIndicate: !0
							}), Object(N.jsx)(Rn, {
								label: "Title 1",
								source: "image0_title",
								disabled: t < 6,
								validate: {
									maxLength: 50,
									required: !0
								}
							}), Object(N.jsx)(Rn, {
								source: "image0_description",
								label: "Description 1",
								disabled: t < 6,
								validate: {
									maxLength: 80,
									required: !0
								},
								style: {
									marginBottom: "2em"
								}
							}), Object(N.jsx)(xo, {
								addLabel: !0,
								accept: "image/png",
								getUploadParams: function(e) {
									return i(e, [{
										width: 2250,
										height: 96
									}])
								},
								source_light: "image1_url",
								source_dark: "image1_url_dark",
								width: "150px",
								height: "96px",
								imageWidth: 2250,
								sequence: !0,
								style: {
									display: "flex",
									justifyContent: "flex-end"
								},
								validate: Object(We.h)(),
								fullWidth: !1,
								label: "Image 2",
								caption: "PNG format",
								onError: function(e) {
									return m(e)
								},
								lightHelperText: "Light mode image \n(For Appstore or in-app experience)",
								darkHelperText: "Dark mode image \n(Only for in-app experience)"
							}), Object(N.jsx)(Rn, {
								label: "Title 2",
								source: "image1_title",
								validate: {
									maxLength: 50,
									required: !0
								},
								helperText: "* This title will also be displayed as the subscription plan name in the Overwolf settings",
								helperTextTypographyProps: {
									variant: "caption",
									style: {
										fontSize: "11px"
									}
								}
							}), Object(N.jsx)(Rn, {
								source: "image1_description",
								label: "Description 2",
								validate: {
									maxLength: 80,
									required: !0
								},
								style: {
									marginBottom: "2em"
								}
							}), Object(N.jsx)(xo, {
								addLabel: !0,
								accept: "image/png",
								getUploadParams: function(e) {
									return i(e, [{
										width: 2250,
										height: 96
									}])
								},
								source_light: "image2_url",
								source_dark: "image2_url_dark",
								width: "150px",
								height: "96px",
								imageWidth: 2250,
								sequence: !0,
								style: {
									display: "flex",
									justifyContent: "flex-end"
								},
								fullWidth: !1,
								label: "Image 3",
								caption: "PNG format",
								onError: function(e) {
									return m(e)
								},
								lightHelperText: "Light mode image \n(For Appstore or in-app experience)",
								darkHelperText: "Dark mode image \n(Only for in-app experience)"
							}), Object(N.jsx)(Rn, {
								label: "Title 3",
								source: "image2_title",
								validate: {
									maxLength: 50
								}
							}), Object(N.jsx)(Rn, {
								label: "Description 3",
								source: "image2_description",
								validate: {
									maxLength: 80
								}
							}), Object(N.jsxs)(Qn, {
								children: [Object(N.jsx)("div", {
									children: "Customize the Xsolla payment page"
								}), Object(N.jsx)(ne.a, {
									variant: "caption",
									children: "The xsolla payment page background is customizable"
								})]
							}), Object(N.jsx)(ya, {
								addLabel: !0,
								accept: "image/png, image/jpeg",
								getUploadParams: function(e) {
									return i(e, [{
										width: 1920,
										height: 1080
									}])
								},
								source: "xsolla_payment_background_image",
								width: "150px",
								height: "96px",
								imageWidth: 1920,
								maxSizeBytes: 2e5,
								sequence: !0,
								style: {
									display: "flex",
									justifyContent: "flex-end"
								},
								fullWidth: !1,
								label: "Background image",
								caption: "PNG/JPG format \n1920x1080 \n(Image size must be less than 200Kb)",
								onError: function(e) {
									return m(e)
								}
							}), Object(N.jsxs)(ue.a, {
								open: O,
								onClose: x,
								children: [Object(N.jsx)(be.a, {
									children: "Image Upload Error"
								}), Object(N.jsx)(pe.a, {
									children: Object(N.jsx)(Oe.a, {
										children: j
									})
								}), Object(N.jsx)(he.a, {
									children: Object(N.jsx)(Nt.a, {
										onClick: x,
										color: "primary",
										autoFocus: !0,
										children: "Close"
									})
								})]
							})]
						}))
					})
				},
				go = function(e) {
					var t;
					return Object(N.jsxs)("span", {
						children: ['Edit plan "', null === (t = e.record) || void 0 === t ?
							void 0 : t.title, '"'
						]
					})
				},
				yo = Object(w.a)({
					numberInput: {
						width: "10em"
					},
					statusInput: {
						width: "3em"
					}
				}),
				Co = function(e) {
					var t = Object(ee.j)().appId,
						a = e.pristine,
						n = e.invalid,
						r = Object(Bt.a)();
					return Object(N.jsx)(Pn.a, Object(s.a)(Object(s.a)({}, e), {}, {
						children: Object(N.jsx)(Tn.a, {
							disabled: a || n,
							redirect: function() {
								return r("Plan updated"), "/applications/".concat(t,
									"/subscription-plans")
							},
							submitOnEnter: !1
						})
					}))
				},
				wo = function(e) {
					var t = Object(ee.j)().appId,
						a = yo();
					return Object(N.jsxs)(Zn, Object(s.a)(Object(s.a)({}, e), {}, {
						redirect: function() {
							return "/applications/".concat(t, "/subscription-plans")
						},
						toolbar: Object(N.jsx)(Co, Object(s.a)({}, e)),
						record: {
							app_id: t
						},
						children: [Object(N.jsx)(V.a, {
							source: "title"
						}), Object(N.jsx)(hr.a, {
							label: "Price (USD)",
							source: "price",
							className: a.numberInput,
							fullWidth: !1,
							validate: [Object(We.g)(), Object(We.f)(0)]
						}), Object(N.jsx)(hr.a, {
							label: "Period (months)",
							source: "period",
							className: a.numberInput,
							fullWidth: !1,
							validate: [Object(We.g)(), Object(We.f)(0)]
						}), Object(N.jsx)(f.a, {
							source: "status",
							choices: [{
								id: 1,
								text: "Inactive"
							}, {
								id: 2,
								text: "Test"
							}, {
								id: 3,
								text: "Active"
							}],
							optionText: "text",
							fullWidth: !1,
							className: a.statusInput
						})]
					}))
				},
				Io = Ha.redashProxyUrl,
				ko = Object(w.a)((function(e) {
					return {
						iframe: {
							border: "none",
							backgroundColor: e.palette.background.default,
							color: e.palette.text.primary
						},
						wrapper: {
							display: "flex",
							flexDirection: "column",
							alignItems: "center"
						}
					}
				})),
				So = function(e) {
					var t = e.title,
						a = e.source,
						r = e.width,
						c = e.height,
						i = e.params,
						s = void 0 === i ? "" : i,
						o = e.scrolling,
						l = void 0 === o ? "no" : o,
						d = ko(),
						j = Object(n.useState)(!1),
						u = Object(je.a)(j, 2),
						b = u[0],
						p = u[1],
						O = "".concat(Io, "/").concat(a, "?").concat(s);
					return Object(N.jsxs)("div", {
						className: d.wrapper,
						children: [!b && Object(N.jsx)(ca.a, {
							color: "primary"
						}), Object(N.jsx)("iframe", {
							id: "".concat(a, "iFrame"),
							className: d.iframe,
							title: t,
							src: O,
							width: r,
							height: c,
							scrolling: l,
							allowTransparency: !0,
							onLoad: function() {
								return p(!0)
							}
						})]
					})
				},
				No = function(e) {
					var t = Object(ee.j)().appId,
						a = e.appId,
						n = e.page,
						r = a || t,
						c = Object(lt.a)(Fr.name, r),
						i = c.data,
						s = c.loaded;
					return Object(N.jsx)(N.Fragment, {
						children: s && Object(N.jsx)($r.b, {
							record: i,
							title: Object(N.jsx)(dt, {
								page: n
							})
						})
					})
				},
				Po = a(1392),
				To = a(677),
				Bo = a(366),
				Lo = a.n(Bo);
			! function(e) {
				e[e.Active = 0] = "Active", e[e.Cancelled = 1] = "Cancelled", e[e.Revoked =
					2] = "Revoked", e[e.Invalid = 3] = "Invalid"
			}(Mi || (Mi = {}));
			var Ao = function(e) {
					var t = Object.keys(Mi).map((function(e) {
						return parseInt(e)
					})).filter((function(e) {
						return !isNaN(e)
					})).map((function(e) {
						return {
							id: Number(e),
							text: Mi[e]
						}
					}));
					return Object(N.jsx)(f.a, Object(s.a)(Object(s.a)({}, e), {}, {
						choices: t,
						optionText: "text"
					}))
				},
				Mo = function(e) {
					var t = e.record,
						a = e.source,
						n = e.style,
						r = Object.keys(Mi).filter((function(e) {
							return isNaN(parseInt(e))
						}));
					return Object(N.jsx)("span", {
						style: n,
						children: r[t[a]]
					})
				},
				_o = function(e) {
					var t = Object(ee.j)().appId;
					return Object(N.jsxs)(h.a, Object(s.a)(Object(s.a)({}, e), {}, {
						variant: "standard",
						children: [Object(N.jsx)(V.a, {
							source: "username",
							alwaysOn: !0
						}), Object(N.jsx)(Ve.a, {
							source: "planId",
							reference: "subscription-plans",
							filterToQuery: function(e) {
								return {
									title: e,
									app_id: t
								}
							},
							alwaysOn: !0,
							children: Object(N.jsx)(Ue.a, {
								optionText: "title"
							})
						}), Object(N.jsx)(Ao, {
							source: "state",
							alwaysOn: !0
						})]
					}))
				},
				Ro = function(e) {
					var t = Object(E.a)(),
						a = t.total,
						r = t.resource,
						c = t.currentSort,
						i = t.filterValues,
						o = t.setFilters,
						l = t.exporter,
						d = Object(ee.j)().appId;
					return Object(n.useEffect)((function() {
						o(Object(s.a)(Object(s.a)({}, i), {}, {
							extensionId: d
						}), {})
					}), [d]), Object(N.jsx)(Po.a, {
						disabled: 0 === a,
						resource: r,
						sort: c,
						exporter: l,
						label: "Export to CSV"
					})
				},
				Fo = function(e) {
					var t = Object(ee.j)().appId,
						a = Object(lt.a)(Fr.name, t),
						n = a.data,
						r = "Subscribers";
					return a.loading || !n ? Object(N.jsx)("span", {
						children: r
					}) : Object(N.jsx)(dt, {
						record: n,
						page: r
					})
				},
				Do = function(e) {
					var t = e.map((function(e) {
							var t = parseInt(e.state);
							return isNaN(t) || (e.state = Mi[t]), e
						})),
						a = Us()().format("[subscribers]_YYYYMMDD_HHmmss");
					Lo()(t, (function(e, t) {
						Object(To.a)(t, a)
					}))
				},
				zo = a(1300),
				Eo = function(e) {
					var t = e.editControl,
						a = e.viewControl,
						r = e.saveFunc,
						c = e.fieldStyle,
						i = Object(n.useState)(!1),
						o = Object(je.a)(i, 2),
						l = o[0],
						d = o[1],
						j = Object(s.a)({
							display: "flex",
							width: "100%",
							justifyContent: "space-between",
							alignItems: "center"
						}, c);
					return Object(N.jsx)("span", {
						style: j,
						children: Object(N.jsxs)(N.Fragment, {
							children: [l ? t : a, Object(N.jsx)(Nt.a, {
								size: "small",
								color: "default",
								variant: "contained",
								style: {
									marginLeft: "1em"
								},
								onClick: function() {
									l && r(), d(!l)
								},
								children: l ? "save" : "edit"
							})]
						})
					})
				},
				Ho = function(e) {
					var t = e.record,
						a = Object(lt.a)("subscription-plans", null === t || void 0 === t ?
							void 0 : t.planId),
						r = a.data,
						c = a.loading,
						i = a.error,
						o = Object(n.useState)(null === t || void 0 === t ? void 0 : t.expire),
						l = Object(je.a)(o, 2),
						d = l[0],
						j = l[1],
						u = Object(n.useState)(null === t || void 0 === t ? void 0 : t.state),
						b = Object(je.a)(u, 2),
						p = b[0],
						O = b[1],
						h = Object(Lt.a)(),
						x = Object(Bt.a)(),
						m = Object(At.a)("subscriptions", null === t || void 0 === t ? void 0 :
							t.id, {
								expireAt: d,
								planId: null === r || void 0 === r ? void 0 : r.id
							}, t, {
								onSuccess: function(e) {
									h(), x("Expiration date updated successfully")
								},
								onFailure: function(e) {
									h(), x("Expiration date saving failed", "warning")
								}
							}),
						f = Object(je.a)(m, 1)[0],
						v = Object(At.a)("subscriptions", null === t || void 0 === t ? void 0 :
							t.id, {
								state: p,
								planId: null === r || void 0 === r ? void 0 : r.id
							}, t, {
								onSuccess: function(e) {
									h(), x("Subscription state updated successfully")
								},
								onFailure: function(e) {
									h(), x("Subscription state saving failed", "warning")
								}
							}),
						y = Object(je.a)(v, 1)[0];
					return Object(N.jsx)(N.Fragment, {
						children: !c && !i && r && Object(N.jsxs)(Zn, {
							record: Object(s.a)(Object(s.a)({}, t), r),
							toolbar: Object(N.jsx)(N.Fragment, {}),
							children: [Object(N.jsx)(Qn, {
								children: Object(N.jsx)(ne.a, {
									variant: "subtitle1",
									children: "Plan details"
								})
							}), Object(N.jsx)(ut.a, {
								source: "id",
								label: "Plan ID"
							}), Object(N.jsx)(Ke.a, {
								source: "title"
							}), Object(N.jsx)(ut.a, {
								source: "price",
								label: "Price (USD)"
							}), Object(N.jsx)(Eo, {
								label: "Expiration date",
								editControl: Object(N.jsx)(Zr.a, {
									addLabel: !1,
									variant: "standard",
									record: t,
									source: "expireAt",
									onChange: function(e) {
										return j(e.target.value)
									}
								}),
								viewControl: Object(N.jsx)(g.a, {
									record: t,
									source: "expireAt",
									showTime: !0,
									style: {
										fontWeight: "bold"
									}
								}),
								saveFunc: f,
								fieldStyle: {
									width: "90%"
								}
							}), Object(N.jsx)(Eo, {
								label: "State",
								editControl: Object(N.jsx)(Ao, {
									addLabel: !1,
									choices: [],
									variant: "standard",
									record: t,
									source: "state",
									onChange: function(e) {
										return O(e.target.value)
									}
								}),
								viewControl: Object(N.jsx)(Mo, {
									record: t,
									source: "state",
									style: {
										fontWeight: "bold"
									}
								}),
								saveFunc: y,
								fieldStyle: {
									width: "90%"
								}
							})]
						})
					})
				},
				Wo = function(e) {
					var t = e.record,
						a = e.source;
					return Object(N.jsx)("span", {
						children: ["Create", "Renew", "Cancel", "Revoke", "Delete", "Refund",
							"Activate", "Invalidate", "Expiration Updated", "Reactivate",
							"Payment"
						][t[a]]
					})
				},
				Vo = function(e) {
					var t, a = e.record,
						r = (null === a || void 0 === a ? void 0 : a.extra) || "",
						c = Object(ee.j)().appId;
					try {
						t = JSON.parse(r)
					} catch (m) {
						r = r.replace(/(\w* *\w+): /g, '"$1": '), r = "{".concat(r, "}"), t =
							JSON.parse(r)
					}
					var i = Object(n.useState)(!1),
						s = Object(je.a)(i, 2),
						o = s[0],
						l = s[1],
						d = Object(Bt.a)(),
						j = Object(Lt.a)(),
						u = Object(n.useState)(),
						b = Object(je.a)(u, 2),
						p = b[0],
						O = b[1],
						h = Object(Ja.a)("subscription-payments/refund", {
							transactionId: p,
							appId: c
						}, {
							onSuccess: function(e) {
								e.data;
								d("Revoked subscription", "info"), j()
							},
							onFailure: function(e) {
								d(e.message, "warning"), j()
							}
						}),
						x = Object(je.a)(h, 1)[0];
					return Object(n.useEffect)((function() {
							t && O(t.transactionId)
						}), [t]), (null === a || void 0 === a ? void 0 : a.extra) ? Object(N.jsxs)
						("div", {
							children: [Object(N.jsxs)("div", {
								style: {
									marginTop: "1em"
								},
								children: ["Transaction ID:\xa0\xa0\xa0", p]
							}), Object(N.jsxs)("div", {
								children: ["Amount (USD):\xa0\xa0\xa0", t.amount]
							}), Object(N.jsx)("div", {
								style: {
									width: "100%",
									display: "flex",
									justifyContent: "flex-end",
									alignItems: "center",
									marginBottom: "1em"
								},
								children: p && Object(N.jsx)(Nt.a, {
									color: "default",
									variant: "contained",
									size: "small",
									onClick: function() {
										return l(!0)
									},
									children: "refund & cancel"
								})
							}), Object(N.jsx)(ge, {
								title: "Hold it!",
								question: "Are you sure you want to REFUND AND CANCEL this subscription?",
								onApprove: function() {
									l(!1), x()
								},
								onCancel: function() {
									return l(!1)
								},
								showDialog: o
							})]
						}) : Object(N.jsx)("span", {
							children: "No extra information to display."
						})
				},
				Uo = Object(w.a)({
					header: {
						width: "33.333%"
					}
				}),
				qo = function(e) {
					return Object(N.jsxs)(h.a, Object(s.a)(Object(s.a)({}, e), {}, {
						children: [Object(N.jsx)(Zr.a, {
							alwaysOn: !0,
							source: "startDate",
							variant: "standard"
						}), Object(N.jsx)(Zr.a, {
							alwaysOn: !0,
							source: "endDate",
							variant: "standard"
						})]
					}))
				},
				Zo = function(e) {
					var t = e.record,
						a = Object(ee.j)().appId,
						n = Uo();
					return Object(N.jsx)(N.Fragment, {
						children: Object(N.jsx)(q.a, Object(s.a)(Object(s.a)({}, e), {}, {
							bulkActionButtons: !1,
							exporter: !1,
							title: Object(N.jsx)(N.Fragment, {}),
							basePath: "/subscription-history",
							resource: "subscription-history",
							filter: {
								subscriptionId: null === t || void 0 === t ? void 0 : t.id,
								appId: a
							},
							filters: Object(N.jsx)(qo, {}),
							sort: {
								field: "when",
								order: "DESC"
							},
							children: Object(N.jsxs)(X.a, {
								expand: Object(N.jsx)(Vo, {}),
								rowClick: "expand",
								children: [Object(N.jsx)(Wo, {
									headerClassName: n.header,
									source: "action"
								}), Object(N.jsx)(g.a, {
									headerClassName: n.header,
									source: "when",
									label: "Date",
									showTime: !0
								}), Object(N.jsx)(Ke.a, {
									headerClassName: n.header,
									source: "who",
									label: "User"
								})]
							})
						}))
					})
				},
				Ko = Object(w.a)({
					cardRoot: {
						"& div.MuiCard-root:first-child": {
							marginTop: "2em"
						},
						"& div.MuiCard-root:not(:last-child)": {
							marginBottom: "2em"
						},
						"& .MuiPaper-root": {
							boxShadow: "none"
						}
					}
				}),
				Qo = function(e) {
					var t = e.record,
						a = Ko();
					return t ? Object(N.jsxs)("div", {
						className: a.cardRoot,
						children: [(null === t || void 0 === t ? void 0 : t.username) &&
							Object(N.jsx)($r.b, Object(s.a)(Object(s.a)({}, e), {}, {
								title: "".concat(null === t || void 0 === t ? void 0 : t.username,
									"'s subscription")
							})), Object(N.jsx)(K.a, {
								children: Object(N.jsx)(Ho, {
									record: t
								})
							}), Object(N.jsx)(K.a, {
								children: Object(N.jsxs)(J.a, {
									style: {
										padding: "3rem"
									},
									children: [Object(N.jsx)(ne.a, {
										style: {
											marginBottom: "1em"
										},
										variant: "subtitle1",
										children: "Activity log"
									}), Object(N.jsx)(Zo, Object(s.a)({
										record: t
									}, e))]
								})
							})
						]
					}) : null
				},
				Jo = Object(w.a)({
					usernameInput: {
						textTransform: "none"
					}
				}),
				Yo = function(e) {
					var t = Object(ee.j)().appId,
						a = e.pristine,
						n = e.invalid,
						r = Object(Bt.a)();
					return Object(N.jsx)(Pn.a, Object(s.a)(Object(s.a)({}, e), {}, {
						children: Object(N.jsx)(Tn.a, {
							disabled: a || n,
							redirect: function() {
								return r("Plan updated"), "/applications/".concat(t,
									"/subscribers")
							},
							submitOnEnter: !1
						})
					}))
				},
				Go = function(e) {
					var t = Object(ee.j)().appId,
						a = Jo();
					return Object(N.jsxs)(Zn, Object(s.a)(Object(s.a)({}, e), {}, {
						redirect: function() {
							return "/applications/".concat(t, "/subscribers")
						},
						toolbar: Object(N.jsx)(Yo, Object(s.a)({}, e)),
						record: {
							app_id: t
						},
						children: [Object(N.jsx)(V.a, {
							labelClassName: a.usernameInput,
							source: "username",
							label: "User name",
							validate: [Object(We.h)()]
						}), Object(N.jsx)(Ve.a, {
							label: "Plan",
							source: "planId",
							reference: "subscription-plans",
							filter: {
								app_id: t
							},
							children: Object(N.jsx)(f.a, {
								optionText: "title",
								validate: [Object(We.h)()]
							})
						})]
					}))
				},
				$o = [Object(N.jsx)(ee.c, {
					exact: !0,
					path: "/partners/:partnerId/applications/create",
					component: Ri
				}), Object(N.jsx)(ee.c, {
					exact: !0,
					path: "/partners/:partnerId/users/create",
					component: Fi
				}), Object(N.jsx)(ee.c, {
					exact: !0,
					path: "/partners/:partnerId/users/:userId",
					component: qi
				}), Object(N.jsx)(ee.c, {
					exact: !0,
					path: "/partners/:partnerId/users/:userId/apps/create",
					component: Ei
				}), Object(N.jsx)(ee.c, {
					exact: !0,
					path: "/".concat(Fr.resource, "/:appId/listing"),
					component: function(e) {
						var t = Hs(),
							a = Object(ee.j)().appId;
						return Object(N.jsx)(Qe.a, {
							basePath: "/app-store-listing",
							resource: "app-store-listing",
							id: a,
							title: Object(N.jsx)(dt, {
								page: "Store listing"
							}),
							className: t.edit,
							children: Object(N.jsx)(Es, Object(s.a)({}, e))
						})
					}
				}), Object(N.jsx)(ee.c, {
					exact: !0,
					path: "/".concat(Fr.resource, "/:appId/crash-reports"),
					component: function() {
						var e = Object(ee.j)().appId,
							t = jo();
						return Object(N.jsx)(vs.a, {
							actions: Object(N.jsx)(N.Fragment, {}),
							basePath: "/applications",
							resource: "applications",
							id: e,
							component: "div",
							className: t.root,
							classes: t,
							title: Object(N.jsx)(dt, {
								page: "Crash reports"
							}),
							children: Object(N.jsx)(uo, {
								appId: e
							})
						})
					}
				}), Object(N.jsx)(ee.c, {
					exact: !0,
					path: "/".concat(Fr.resource, "/:appId/subscribers"),
					component: function(e) {
						var t = Object(ee.j)().appId;
						return Object(aa.f)((function(e) {
							var t;
							return null === (t = e.admin.resources.subscriptions) || void 0 ===
								t ? void 0 : t.list
						})) ? Object(N.jsxs)(Fe, Object(s.a)(Object(s.a)({}, e), {}, {
							exporter: Do,
							cardTitle: "Subscribers",
							hideCardTitle: !1,
							basePath: "/subscriptions",
							resource: "subscriptions",
							filter: {
								extensionId: t,
								exporter: void 0
							},
							title: Object(N.jsx)(Fo, Object(s.a)({}, e)),
							showEdit: !0,
							editButtonRedirect: function(e) {
								return "/applications/".concat(t, "/subscribers/").concat(e)
							},
							showCreate: !0,
							createButtonRedirect: function() {
								return "/applications/".concat(t, "/subscribers/create")
							},
							customActions: Object(N.jsx)(Ro, {}),
							filtersOverride: Object(N.jsx)(_o, {}),
							sort: {
								field: "expireAt",
								order: "DESC"
							},
							children: [Object(N.jsx)(Ke.a, {
								source: "username",
								label: "User name"
							}), Object(N.jsx)(lr.a, {
								source: "planId",
								reference: "subscription-plans",
								link: !1,
								children: Object(N.jsx)(Ke.a, {
									source: "title"
								})
							}), Object(N.jsx)(Mo, {
								source: "state"
							}), Object(N.jsx)(g.a, {
								label: "Expiration date",
								source: "expireAt",
								options: {
									month: "short",
									day: "numeric",
									year: "numeric",
									hour: "numeric",
									minute: "2-digit"
								}
							})]
						})) : null
					}
				}), Object(N.jsx)(ee.c, {
					exact: !0,
					path: "/".concat(Fr.resource, "/:appId/subscribers/create"),
					component: function(e) {
						return Object(N.jsx)(Ee.a, Object(s.a)(Object(s.a)({}, e), {}, {
							basePath: "/subscriptions",
							resource: "subscriptions",
							children: Object(N.jsx)(Go, {})
						}))
					}
				}), Object(N.jsx)(ee.c, {
					exact: !0,
					path: "/".concat(Fr.resource, "/:appId/subscribers/:id"),
					component: function(e) {
						var t = Object(ee.j)().id,
							a = Object(zo.a)({
								basePath: "/subscriptions",
								resource: "subscriptions",
								id: t
							});
						return Object(N.jsx)(Qo, Object(s.a)(Object(s.a)({}, e), a))
					}
				}), Object(N.jsx)(ee.c, {
					exact: !0,
					path: "/".concat(Fr.resource, "/:appId/subscription-plans"),
					component: function(e) {
						var t = Object(ee.j)().appId,
							a = Object(Yt.a)().permissions;
						return Object(aa.f)((function(e) {
							var t;
							return null === (t = e.admin.resources["subscription-plans"]) ||
								void 0 === t ? void 0 : t.list
						})) ? Object(N.jsxs)(Fe, Object(s.a)(Object(s.a)({}, e), {}, {
							basePath: "/subscription-plans",
							resource: "subscription-plans",
							cardTitle: "Subscription plans",
							filter: {
								app_id: t
							},
							title: Object(N.jsx)(po, Object(s.a)({}, e)),
							hideCardTitle: !1,
							showEdit: !0,
							empty: !1,
							editButtonRedirect: function(e) {
								return "/applications/".concat(t, "/subscription-plans/").concat(
									e)
							},
							showCreate: a >= 6,
							createButtonRedirect: function(e, a) {
								return "/applications/".concat(t).concat(a, "/create")
							},
							children: [Object(N.jsx)(Ke.a, {
								label: "Plan title",
								source: "title"
							}), Object(N.jsx)(ut.a, {
								textAlign: "left",
								label: "Price ($)",
								source: "price"
							}), Object(N.jsx)(ut.a, {
								textAlign: "left",
								label: "Period (months)",
								source: "period"
							}), Object(N.jsx)(bo, {
								source: "status"
							})]
						})) : null
					}
				}), Object(N.jsx)(ee.c, {
					exact: !0,
					path: "/".concat(Fr.resource, "/:appId/summary-dashboard"),
					component: function(e) {
						var t = Object(ee.j)().appId,
							a = "Main KPIs dashboard";
						return Object(N.jsxs)(N.Fragment, {
							children: [Object(N.jsx)(No, {
								page: a
							}), Object(N.jsx)(So, {
								title: a,
								source: "public/dashboards/kpis",
								params: "app_id=".concat(t),
								width: "1330",
								height: "6000"
							})]
						})
					}
				}), Object(N.jsx)(ee.c, {
					exact: !0,
					path: "/".concat(Fr.resource, "/:appId/subscriptions-statistics"),
					component: function(e) {
						var t = Object(ee.j)().appId,
							a = "Statistics";
						return Object(N.jsxs)(N.Fragment, {
							children: [Object(N.jsx)(No, {
								page: a
							}), Object(N.jsx)(So, {
								title: a,
								source: "public/dashboards/subs",
								params: "app_id=".concat(t),
								width: "1080",
								height: "920"
							})]
						})
					}
				}), Object(N.jsx)(ee.c, {
					exact: !0,
					path: "/".concat(Fr.resource, "/:appId/subscription-plans/create"),
					component: function(e) {
						return Object(N.jsx)(Ee.a, Object(s.a)(Object(s.a)({}, e), {}, {
							basePath: "/subscription-plans",
							resource: "subscription-plans",
							children: Object(N.jsx)(wo, {})
						}))
					}
				}), Object(N.jsx)(ee.c, {
					exact: !0,
					path: "/".concat(Fr.resource, "/:appId/subscription-plans/:id"),
					component: function(e) {
						var t = Object(ee.j)().id;
						return Object(N.jsx)(Qe.a, Object(s.a)(Object(s.a)({}, e), {}, {
							basePath: "/subscription-plans",
							resource: "subscription-plans",
							id: t,
							title: Object(N.jsx)(go, {}),
							children: Object(N.jsx)(vo, {})
						}))
					}
				}), Object(N.jsx)(ee.c, {
					exact: !0,
					path: "/".concat(Fr.resource, "/:appId/reviews"),
					component: Ss.list
				}), Object(N.jsx)(ee.c, {
					exact: !0,
					path: "/".concat(Fr.resource, "/:appId/releases"),
					component: Fr.custom.releases
				}), Object(N.jsx)(ee.c, {
					exact: !0,
					path: "/".concat(Fr.resource, "/:appId/beta-channels"),
					component: Cr.list
				}), Object(N.jsx)(ee.c, {
					exact: !0,
					path: "/".concat(Fr.resource, "/:appId/beta-channels/create"),
					component: Cr.create
				}), Object(N.jsx)(ee.c, {
					exact: !0,
					path: "/".concat(Fr.resource, "/:appId/").concat(Cr.resource,
						"/:channelId/releases"),
					component: Fr.custom.releases
				})],
				Xo = Object(Y.a)({
					reactMde: {
						width: "100%",
						"& .mde-preview .mde-preview-content": {
							"& h1, h2, h3, h4, h5, h6": {
								border: "none"
							}
						},
						"& .mde-header": {
							display: "none"
						}
					},
					grip: {
						display: "none"
					}
				}),
				el = function(e) {
					var t = e.classes,
						a = e.source,
						n = e.record,
						r = e.customCss,
						c = Xo(),
						i = t || c,
						s = Object(zt.d)(a).input,
						o = n ? n[a] : s.value;
					return Object(N.jsx)(Ht.a, {
						classes: i,
						generateMarkdownPreview: function() {
							var e = Object(Ft.a)(Rt.a.mark((function e(t) {
								return Rt.a.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return t = Ut(t, r), e.abrupt("return", Promise.resolve(
												t));
										case 2:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(),
						selectedTab: "preview",
						value: o
					})
				},
				tl = Object(w.a)({
					buttonsArea: {
						display: "flex",
						justifyContent: "flex-end",
						padding: "1em",
						"&>button": {
							padding: "6px 16px",
							fontSize: 16
						},
						"&>button:not(:last-child)": {
							marginRight: "16px"
						}
					}
				}),
				al = function(e) {
					var t, a, r = e.handleSubmitWithRedirect,
						c = tl(),
						i = Object(zt.e)(),
						s = Object(n.useCallback)((function(e) {
							i.change("status", e), r(null)
						}), [i, r]);
					return Object(N.jsxs)("div", {
						className: c.buttonsArea,
						children: ["rejected" !== (null === (t = e.record) || void 0 === t ?
							void 0 : t.status) && Object(N.jsx)(Tn.a, {
							color: "primary",
							size: "small",
							icon: Object(N.jsx)(N.Fragment, {}),
							label: "reject",
							handleSubmitWithRedirect: function() {
								return s("rejected")
							},
							children: "reject"
						}), "approved" !== (null === (a = e.record) || void 0 === a ? void 0 :
							a.status) && Object(N.jsx)(Tn.a, {
							color: "primary",
							size: "small",
							icon: Object(N.jsx)(N.Fragment, {}),
							label: "approve",
							handleSubmitWithRedirect: function() {
								return s("approved")
							},
							children: "approve"
						})]
					})
				},
				nl = function(e) {
					var t = tl();
					return Object(N.jsx)("div", {
						className: t.buttonsArea,
						children: Object(N.jsx)(bs.a, Object(s.a)(Object(s.a)({}, e), {}, {
							resource: e.resource,
							label: "",
							redirect: !1,
							undoable: !1
						}))
					})
				},
				rl = Object(w.a)({
					modal: {
						width: "auto",
						"& [role=dialog]": {
							minWidth: "700px"
						}
					}
				}),
				cl = function(e) {
					var t, a, r, c = Object(zt.e)(),
						i = rl(),
						s = Object(n.useState)(!1),
						o = Object(je.a)(s, 2),
						l = o[0],
						d = o[1],
						j = Object(n.useState)(!1),
						u = Object(je.a)(j, 2),
						b = u[0],
						p = u[1],
						O = Object(n.useState)(null === (t = c.getState()) || void 0 === t ||
							null === (a = t.values) || void 0 === a ? void 0 : a.statusNote),
						h = Object(je.a)(O, 2),
						x = h[0],
						m = h[1],
						f = Object(lt.a)("versions", null === (r = e.record) || void 0 === r ?
							void 0 : r.versionId);
					Object(n.useEffect)((function() {
						var e, t;
						m(null === (e = c.getState()) || void 0 === e || null === (t = e.values) ||
							void 0 === t ? void 0 : t.statusNote)
					}), [c]);
					var v = function() {
						c.change("statusNote", x), p(!1)
					};
					return Object(N.jsxs)(N.Fragment, {
						children: [Object(N.jsx)("h4", {
							children: "What's new in this release?"
						}), Object(N.jsx)("a", {
							href: "/#",
							onClick: function(e) {
								e.preventDefault(), d(!0)
							},
							children: "OPK release notes"
						}), Object(N.jsx)("h4", {
							style: {
								width: "auto"
							},
							children: "Overwolf team comments for this release"
						}), Object(N.jsx)("a", {
							href: "/#",
							onClick: function(e) {
								e.preventDefault(), p(!0)
							},
							children: "Add comments"
						}), Object(N.jsxs)(ue.a, {
							className: i.modal,
							open: l,
							onClose: function() {
								return d(!1)
							},
							children: [Object(N.jsx)(be.a, {
								children: "What's new in this release?"
							}), Object(N.jsx)(pe.a, {
								children: Object(N.jsx)(el, {
									record: f.data,
									source: "creationNote"
								})
							}), Object(N.jsx)(he.a, {
								children: Object(N.jsx)(Nt.a, {
									onClick: function() {
										return d(!1)
									},
									children: "close"
								})
							})]
						}), Object(N.jsxs)(ue.a, {
							className: i.modal,
							open: b,
							onClose: v,
							children: [Object(N.jsxs)(be.a, {
								children: ["Overwolf team comments for version ", e.record.versionNumber]
							}), Object(N.jsx)(pe.a, {
								children: Object(N.jsx)(Kt, {
									source: "statusNote"
								})
							}), Object(N.jsxs)(he.a, {
								children: [Object(N.jsx)(Nt.a, {
									onClick: v,
									children: "cancel"
								}), Object(N.jsx)(Nt.a, {
									onClick: function() {
										var e, t;
										m(null === (e = c.getState()) || void 0 === e || null ===
											(t = e.values) || void 0 === t ? void 0 : t.statusNote
										), p(!1)
									},
									children: "save"
								})]
							})]
						})]
					})
				},
				il = function(e) {
					return Object(N.jsx)(Qe.a, Object(s.a)(Object(s.a)({}, e), {}, {
						title: Object(N.jsx)(N.Fragment, {}),
						children: Object(N.jsx)(He.a, Object(s.a)(Object(s.a)({}, e), {}, {
							variant: "standard",
							toolbar: Object(N.jsx)(al, Object(s.a)({}, e)),
							children: Object(N.jsx)(cl, Object(s.a)({}, e))
						}))
					}))
				},
				sl = function(e) {
					return Object(N.jsx)(He.a, Object(s.a)(Object(s.a)({}, e), {}, {
						variant: "standard",
						toolbar: Object(N.jsx)(nl, Object(s.a)({}, e)),
						children: Object(N.jsx)("div", {
							children: "This version has been removed"
						})
					}))
				},
				ol = function(e) {
					var t;
					return (null === (t = e.record) || void 0 === t ? void 0 : t.versionId) ?
						Object(N.jsx)(il, Object(s.a)({}, e)) : Object(N.jsx)(sl, Object(s.a)({},
							e))
				},
				ll = Object(w.a)({
					expand: {
						"&>div": {
							marginTop: 0,
							"&>div": {
								boxShadow: "none"
							}
						}
					}
				}),
				dl = function(e) {
					var t = ll();
					return Object(N.jsx)(ol, Object(s.a)({
						className: t.expand
					}, e))
				},
				jl = function(e) {
					var t = e.record;
					return Object(N.jsxs)("span", {
						style: {
							display: "flex",
							justifyContent: "space-between"
						},
						children: [Object(N.jsx)(kt, {
							record: t,
							source: "size_in_bytes"
						}), Object(N.jsx)(It, {
							record: t,
							source: "url",
							prefix: Ha.apiUrl
						})]
					})
				},
				ul = Object(w.a)({
					statusFilter: {
						"& .MuiChip-root": {
							height: "24px",
							marginTop: 0,
							marginBottom: 0
						}
					}
				}),
				bl = function(e) {
					var t = ul();
					return Object(N.jsxs)(h.a, Object(s.a)(Object(s.a)({}, e), {}, {
						variant: "standard",
						children: [Object(N.jsx)(V.a, {
							label: "Search apps",
							source: "q",
							alwaysOn: !0
						}), Object(N.jsx)(cs.a, {
							className: t.statusFilter,
							label: "Status",
							source: "status",
							alwaysOn: !0,
							choices: [{
								id: "approved",
								name: "Approved"
							}, {
								id: "pending",
								name: "Pending"
							}, {
								id: "rejected",
								name: "Rejected"
							}]
						})]
					}))
				},
				pl = function(e) {
					return Object(N.jsxs)(Fe, Object(s.a)(Object(s.a)({}, e), {}, {
						title: "OPKs for review",
						filtersOverride: Object(N.jsx)(bl, {}),
						filterDefaultValues: {
							status: ["pending"]
						},
						sort: {
							field: "created",
							order: "DESC"
						},
						showEdit: !1,
						rowClick: "expand",
						expand: Object(N.jsx)(dl, {}),
						children: [Object(N.jsx)(lr.a, {
							source: "appId",
							reference: "applications",
							link: !1,
							children: Object(N.jsx)(dt, Object(s.a)({}, e))
						}), Object(N.jsx)(Ke.a, {
							source: "versionNumber"
						}), Object(N.jsx)(g.a, {
							source: "created",
							showTime: !0
						}), Object(N.jsx)(lr.a, {
							source: "versionId",
							reference: "versions",
							label: "App download size",
							link: !1,
							children: Object(N.jsx)(jl, {})
						}), Object(N.jsx)(Ke.a, {
							source: "status",
							style: {
								textTransform: "capitalize"
							}
						})]
					}))
				},
				Ol = Object(l.a)((function(e) {
					return "fr" === e ? a.e(3).then(a.bind(null, 1399)).then((function(e) {
						return e.default
					})) : ac
				}), "en"),
				hl = function() {
					var e = za(),
						t = Object(d.a)();
					return Object(N.jsx)(j.a, {
						title: t("pos.title"),
						catchAll: Xr,
						initialState: {
							user: e
						},
						authProvider: pn,
						dataProvider: Wa,
						customReducers: Object(o.a)({}, ts.name, ts.reducer),
						customRoutes: $o,
						loginPage: bn,
						layout: Ii,
						i18nProvider: Ol,
						children: function(e) {
							return [Object(N.jsx)(u.a, {
								name: "applications",
								list: Fr.list,
								create: Da(e) ? Fr.create : void 0,
								edit: Da(e) ? qr : void 0
							}), Object(N.jsx)(u.a, {
								name: "extension-crash-logs"
							}), Object(N.jsx)(u.a, {
								name: "app-store-listing"
							}), Object(N.jsx)(u.a, {
								name: "audit",
								list: Jr
							}), Object(N.jsx)(u.a, Object(s.a)(Object(s.a)({}, mr), {}, {
								list: Da(e) ? mr.list : void 0,
								edit: Da(e) ? mr.edit : void 0
							})), Object(N.jsx)(u.a, {
								name: "versions/report"
							}), Object(N.jsx)(u.a, Object(s.a)(Object(s.a)({}, Cr), {}, {
								edit: Da(e) ? Cr.edit : void 0
							})), Object(N.jsx)(u.a, {
								name: "users",
								list: $e.list,
								create: Da(e) ? $e.create : void 0,
								edit: Da(e) ? $e.edit : void 0
							}), Object(N.jsx)(u.a, Object(s.a)(Object(s.a)({}, $i), {}, {
								create: Da(e) ? $i.create : void 0
							})), Object(N.jsx)(u.a, {
								name: "workflow-items",
								list: Da(e) ? pl : void 0,
								edit: Da(e) ? ol : void 0
							}), Object(N.jsx)(u.a, Object(s.a)(Object(s.a)({}, Ur), {}, {
								create: Da(e) ? Ur.create : void 0,
								edit: Da(e) ? Ur.edit : void 0
							})), Object(N.jsx)(u.a, Object(s.a)({}, Ss)), Object(N.jsx)(u.a,
								Object(s.a)({}, as)), Object(N.jsx)(u.a, Object(s.a)(Object(s.a)
								({}, ec), {}, {
									list: Da(e) ? ec.list : void 0,
									edit: Da(e) ? ec.edit : void 0
								})), Object(N.jsx)(u.a, {
								name: "extensions/rating"
							}), Object(N.jsx)(u.a, {
								name: "subscriptions"
							}), Object(N.jsx)(u.a, {
								name: "subscription-plans"
							}), Object(N.jsx)(u.a, {
								name: "subscription-compound"
							}), Object(N.jsx)(u.a, {
								name: "subscription-history"
							}), Object(N.jsx)(u.a, {
								name: "subscription-transactions",
								list: b.a
							}), Object(N.jsx)(u.a, {
								name: "subscription-payments",
								list: b.a
							}), Object(N.jsx)(u.a, {
								name: "auth/api-key",
								intent: "registration"
							})]
						}
					})
				};
			a(1280);
			! function() {
				var e = function(e) {
						e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
						var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.hash);
						return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
					}("token"),
					t = new _a.a;
				e && (localStorage.removeItem(Ra), localStorage.setItem(Ra, e), t.set(Fa,
					e, {
						domain: "overwolf.com"
					}), window.location.hash = "")
			}(), i.a.render(Object(N.jsx)(hl, {}), document.getElementById("root"))
		}
	},
	[
		[1281, 1, 2]
	]
]);
//# sourceMappingURL=main.858795ce.chunk.js.map