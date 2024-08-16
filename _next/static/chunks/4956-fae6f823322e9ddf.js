(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4956],
  {
    75006: function (e, a, l) {
      "use strict";
      l.d(a, {
        I: function () {
          return r;
        },
      });
      var t = l(52322),
        n = l(4602),
        i = l(2784);
      let r = (e) => {
        let {
            label: a,
            name: l,
            type: r,
            placeholder: s,
            register: o,
            required: c,
            error: u,
            errorMessage: d,
            className: m = "",
            pattern: b,
            validateEmail: h = !1,
            icon: g,
            ...v
          } = e,
          [p, x] = (0, i.useState)(!1),
          f = async (e) =>
            fetch("/api/test-email", {
              method: "POST",
              body: JSON.stringify({ email: e }),
              headers: { "Content-Type": "application/json" },
            })
              .then((e) => e.json())
              .then((e) => "success" === e.status)
              .catch((e) => {
                console.log(e);
              });
        return (0, t.jsxs)("div", {
          className: "relative pb-7 ".concat(m && m),
          children: [
            (0, t.jsx)("label", {
              htmlFor: l,
              className:
                "text-light-title block pl-2 text-sm font-semibold leading-6",
              children: a,
            }),
            (0, t.jsxs)("div", {
              className: "relative mt-2 rounded-md shadow-sm",
              children: [
                g &&
                  (0, t.jsx)("div", {
                    className:
                      "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                    children: (0, t.jsx)(n.J, {
                      className: "text-light-icon",
                      "aria-hidden": "true",
                      iconName: g,
                      iconColor: "currentColor",
                      iconSize: "default",
                    }),
                  }),
                (0, t.jsx)("input", {
                  onFocus: () => {
                    x(!0);
                  },
                  onBlur: !0,
                  ...o(l, {
                    required: c,
                    pattern: {
                      value: b,
                      message: "Entered value does not match email format",
                    },
                    validate: async (e) =>
                      !h || (await f(e)) || "Please use a valid email address",
                  }),
                  id: l,
                  type: r,
                  placeholder: s,
                  className: "block w-full rounded-md border-0 py-2 "
                    .concat(
                      g ? "pl-10" : "pl-4",
                      " focus:ring-brand-secondary text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 "
                    )
                    .concat(u && "ring-2 ring-orange-400"),
                }),
              ],
            }),
            u &&
              (0, t.jsx)("span", {
                className: "absolute left-2 text-xs text-orange-400",
                children: d,
              }),
          ],
        });
      };
    },
    86405: function (e, a, l) {
      "use strict";
      l.d(a, {
        C: function () {
          return c;
        },
        Q: function () {
          return u;
        },
      });
      var t = l(52322),
        n = l(4602),
        i = l(12524),
        r = l.n(i),
        s = l(63955),
        o = l(70065);
      let c = (e) => {
          let {
            name: a = "",
            label: l = "",
            errorMessage: i = "This field is required",
            control: c,
            options: u = [],
            setCountry: d,
            setPartnerType: m,
            icon: b = "location_on",
          } = e;
          return (0, t.jsxs)("div", {
            className: "relative pb-5",
            children: [
              (0, t.jsx)("label", {
                htmlFor: a.toLowerCase(),
                className:
                  "block pl-2 text-sm font-semibold leading-6 text-light-title",
                children: l || a,
              }),
              (0, t.jsxs)("div", {
                className: "relative mt-2 rounded-md shadow-sm",
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                    children: (0, t.jsx)(n.J, {
                      className: "text-light-icon",
                      "aria-hidden": "true",
                      iconName: b,
                      iconColor: "currentColor",
                      iconSize: "default",
                    }),
                  }),
                  (0, t.jsx)(s.Qr, {
                    name: "multiOptions",
                    control: c,
                    rules: { required: "".concat(i) },
                    render: (e) => {
                      var l;
                      let {
                        field: { onChange: n, value: i },
                        formState: { errors: s },
                      } = e;
                      return (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(o.ZP, {
                            inputId: a.toLowerCase(),
                            name: a,
                            options: u,
                            isMulti: !0,
                            closeMenuOnSelect: !1,
                            value: i,
                            onChange: (e) => {
                              n(e), d && d(e), m && m(e);
                            },
                            unstyled: !0,
                            priority: !0,
                            instanceId: "select-".concat(a),
                            classNames: {
                              control: (e) => {
                                let { isDisabled: l, isFocused: t } = e;
                                return r()(
                                  "block w-full rounded-md border-0 py-2 pl-10 focus:ring-brand-secondary text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6",
                                  !l && t && "border-purple-800",
                                  t &&
                                    "shadow-[0_0_0_1px] shadow-purple-800 ring-1 ring-purple-800 ring-inset outline-none",
                                  t && "hover:border-purple-800",
                                  (null == s ? void 0 : s[a]) &&
                                    "ring-orange-400 ring-2"
                                );
                              },
                              menu: () =>
                                "bg-white shadow-lg rounded-br-md mt-1 pt-2",
                              option: (e) => {
                                let {
                                  isDisabled: a,
                                  isFocused: l,
                                  isSelected: t,
                                } = e;
                                return r()(
                                  "text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9",
                                  t && "bg-light-highlight text-white",
                                  !t && l && "bg-dark-highlight text-white",
                                  !a && t && "active:bg-light-highlight"
                                );
                              },
                              indicatorSeparator: () =>
                                "bg-[hsl(0,0%,80%)] my-0.5",
                              dropdownIndicator: (e) => {
                                let { isFocused: a, isSelected: l } = e;
                                return r()(
                                  "text-[hsl(0,0%,80%)] px-2",
                                  a && "text-[hsl(0,0%,30%)]"
                                );
                              },
                              placeholder: () => "text-gray-400",
                              multiValue: () =>
                                r()(
                                  "text-gray-900 cursor-default select-none relative mr-2 my-1"
                                ),
                              multiValueLabel: () =>
                                r()(
                                  "bg-brand-dim text-white rounded-l-md px-2 py-1 text-xs font-semibold"
                                ),
                              multiValueRemove: () =>
                                r()(
                                  "bg-brand-primary text-white rounded-r-md px-1 py-1 text-xs font-semibold hover:bg-brand-primary-dark"
                                ),
                            },
                          }),
                          (null == s ? void 0 : s[a]) &&
                            (0, t.jsx)("span", {
                              className:
                                "absolute left-2 text-xs text-orange-400",
                              children: "".concat(
                                null == s
                                  ? void 0
                                  : null === (l = s[a]) || void 0 === l
                                  ? void 0
                                  : l.message
                              ),
                            }),
                        ],
                      });
                    },
                  }),
                ],
              }),
            ],
          });
        },
        u = (e) => {
          let {
            name: a = "",
            label: l = "",
            errorMessage: i = "This field is required",
            control: c,
            options: u = [],
            setCountry: d,
            setPartnerType: m,
            icon: b = "location_on",
          } = e;
          return (0, t.jsxs)("div", {
            className: "relative pb-5",
            children: [
              (0, t.jsx)("label", {
                htmlFor: a.toLowerCase(),
                className:
                  "block pl-2 text-sm font-semibold leading-6 text-light-title",
                children: l || a,
              }),
              (0, t.jsxs)("div", {
                className: "relative mt-2 rounded-md shadow-sm",
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                    children: (0, t.jsx)(n.J, {
                      className: "text-light-icon",
                      "aria-hidden": "true",
                      iconName: b,
                      iconColor: "currentColor",
                      iconSize: "default",
                    }),
                  }),
                  (0, t.jsx)(s.Qr, {
                    name: a,
                    control: c,
                    rules: { required: "".concat(i) },
                    render: (e) => {
                      var l;
                      let {
                        field: { onChange: n, value: i },
                        formState: { errors: s },
                      } = e;
                      return (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(o.ZP, {
                            inputId: a.toLowerCase(),
                            name: a,
                            options: u,
                            value: i,
                            onChange: (e) => {
                              n(e), d && d(e), m && m(e);
                            },
                            autocomplete: "garbage",
                            unstyled: !0,
                            priority: !0,
                            instanceId: "select-".concat(a),
                            classNames: {
                              control: (e) => {
                                let { isDisabled: l, isFocused: t } = e;
                                return r()(
                                  "block w-full rounded-md border-0 py-2 pl-10 focus:ring-brand-secondary text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6",
                                  !l && t && "border-purple-800",
                                  t &&
                                    "shadow-[0_0_0_1px] shadow-purple-800 ring-1 ring-purple-800 ring-inset outline-none",
                                  t && "hover:border-purple-800",
                                  (null == s ? void 0 : s[a]) &&
                                    "ring-orange-400 ring-2"
                                );
                              },
                              menu: () =>
                                "bg-white shadow-lg rounded-br-md mt-1 pt-2",
                              option: (e) => {
                                let {
                                  isDisabled: a,
                                  isFocused: l,
                                  isSelected: t,
                                } = e;
                                return r()(
                                  "text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9",
                                  t && "bg-light-highlight text-white",
                                  !t && l && "bg-dark-highlight text-white",
                                  !a && t && "active:bg-light-highlight"
                                );
                              },
                              indicatorSeparator: () =>
                                "bg-[hsl(0,0%,80%)] my-0.5",
                              dropdownIndicator: (e) => {
                                let { isFocused: a, isSelected: l } = e;
                                return r()(
                                  "text-[hsl(0,0%,80%)] px-2",
                                  a && "text-[hsl(0,0%,30%)]"
                                );
                              },
                              placeholder: () => "text-gray-400",
                            },
                          }),
                          (null == s ? void 0 : s[a]) &&
                            (0, t.jsx)("span", {
                              className:
                                "absolute left-2 text-xs text-orange-400",
                              children: "".concat(
                                null == s
                                  ? void 0
                                  : null === (l = s[a]) || void 0 === l
                                  ? void 0
                                  : l.message
                              ),
                            }),
                        ],
                      });
                    },
                  }),
                ],
              }),
            ],
          });
        };
    },
    854: function (e, a, l) {
      "use strict";
      l.d(a, {
        D: function () {
          return j;
        },
      });
      var t = l(52322),
        n = l(32564),
        i = l(83422),
        r = l(37862),
        s = l(5600),
        o = l(13173),
        c = l(31089),
        u = l(68628),
        d = l(65239),
        m = l(48508),
        b = l(11163),
        h = l(2784),
        g = l(63955),
        v = l(55258),
        p = l(50636),
        x = l(75006),
        f = l(86405),
        y = l(51050);
      let j = (e) => {
        let {
            formId: a,
            buttonText: l,
            formAction: j,
            setIsRegistered: w,
            webinarType: N,
          } = e,
          [k, C] = (0, h.useState)(null),
          [S, M] = (0, h.useState)({ label: "", value: "" }),
          [I, A] = (0, h.useState)(!1),
          [T, E] = (0, h.useState)(""),
          [P, L] = (0, h.useState)(""),
          { showOptIn: R, regionOptions: B, showRegion: _ } = (0, i.y)(S),
          {
            control: G,
            register: D,
            handleSubmit: z,
            formState: { errors: F },
          } = (0, g.cI)(),
          O = (0, s.X)("utms", {}),
          J = (0, b.useRouter)(),
          [V, U] = (0, h.useState)(!1),
          q = (0, h.useMemo)(() => (0, c.Z)("country").getData(), []),
          { setFormId: W } = (0, r.P)();
        (0, h.useEffect)(() => {
          a && W(a);
        }, [a, W]),
          (0, h.useEffect)(() => {
            if (window && window.sessionStorage) {
              let e = window.sessionStorage.getItem("brandValue");
              e && E(e.replace(/^\s+|\s+$/g, ""));
            }
          }, [T]),
          (0, h.useEffect)(() => {
            window.MktoForms2 && C(window.MktoForms2.getForm(a));
          }, [a]),
          (0, h.useEffect)(() => {
            J.asPath.includes("pricing")
              ? L("pricing_request")
              : J.asPath.includes("guide")
              ? L("guide_request")
              : J.asPath.includes("webinar")
              ? L("webinar_request")
              : J.asPath.includes("research")
              ? L("research_request")
              : L("demo_request");
          }, [J.asPath]);
        let H = (e) => {
          var l, t;
          let {
              utm_campaign: n,
              utm_content: i,
              utm_medium: r,
              utm_source: s,
              utm_term: c,
              gclid: u,
            } = O,
            d = window.MktoForms2.getForm(a);
          console.log("submitting form", e),
            d.validate(),
            d.setValues({
              FirstName: e.FirstName,
              LastName: e.LastName,
              Email: e.WorkEmail,
              Phone: e.PhoneNumber,
              Company: e.CompanyName,
              Country:
                null === (l = e.Country) || void 0 === l ? void 0 : l.label,
              State: null === (t = e.State) || void 0 === t ? void 0 : t.label,
              UTM_Campaign_Content__c: i || "",
              UTM_Campaign_Medium__c: r || "",
              UTM_Campaign_Name__c: n || "",
              UTM_Campaign_Source__c: s || "",
              UTM_Campaign_Term__c: c || "",
              GCLID__c: u || "",
              Marketing_Single_Opt_In__c: (0, y.s)(R, e, J),
              marketingRequestedGDPR: "True",
              uRLBrand: T || "",
              webinarAttendedOnDemand: "ON-DEMAND" === N ? "True" : "False",
            }),
            console.log("form values", d.getValues()),
            d.submit(),
            d
              .onSubmit(() => {
                console.log("form submit onSubmit"), A(!0);
              })
              .onSuccess(
                () => (
                  console.log("form success"),
                  (0, o._)({
                    event: "form_success_".concat(P),
                    formId: a,
                    formLocation: "".concat(J.asPath),
                  }),
                  A(!1),
                  j && "redirect" === j.formActionType
                    ? window.open(
                        j.formRedirect.url,
                        "newTab" === j.formRedirect.target ? "_blank" : "_self"
                      )
                    : j && "webinar" === j.formActionType
                    ? w(!0)
                    : (console.log("show thank you"), U(!0)),
                  !1
                )
              );
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("form", {
              onSubmit: z((e) => {
                console.log("submitting form"),
                  A(!0),
                  (0, o._)({
                    event: "form_submit_".concat(P),
                    formId: a,
                    formLocation: "".concat(J.asPath),
                  }),
                  H(e);
              }),
              className:
                "border-brand-gray-100 rounded-xl border bg-brand-white px-10 py-12 shadow-card lg:max-w-lg",
              children: V
                ? (0, t.jsx)(d.M, {
                    children:
                      V &&
                      (0, t.jsx)(m.E.div, {
                        className: "text-center",
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: 20 },
                        transition: { duration: 0.5 },
                        children: (null == j ? void 0 : j.formThankYouMessage)
                          ? (0, t.jsx)(u.YI, {
                              value: j.formThankYouMessage,
                              components: p.BJ,
                            })
                          : (0, t.jsxs)(t.Fragment, {
                              children: [
                                (0, t.jsx)(v.L, {
                                  component: "h3",
                                  color: "dark-title",
                                  fontWeight: "semibold",
                                  className: "pb-4",
                                  children: "Thank you for registering!",
                                }),
                                (0, t.jsx)(v.L, {
                                  component: "p",
                                  color: "dark-content",
                                  fontWeight: "normal",
                                  className: "pb-4",
                                  children:
                                    "We look forward to seeing you at the event.",
                                }),
                              ],
                            }),
                      }),
                  })
                : (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsxs)("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 lg:gap-3",
                        children: [
                          (0, t.jsx)(x.I, {
                            label: "First name",
                            name: "FirstName",
                            register: D,
                            error: F.FirstName,
                            errorMessage: "This field is required",
                            required: !0,
                            placeholder: "First Name",
                          }),
                          (0, t.jsx)(x.I, {
                            label: "Last name",
                            name: "LastName",
                            register: D,
                            error: F.LastName,
                            errorMessage: "This field is required",
                            required: !0,
                            placeholder: "Last Name",
                          }),
                        ],
                      }),
                      (0, t.jsx)(x.I, {
                        label: "Work email",
                        name: "WorkEmail",
                        register: D,
                        pattern: /^[\w_.-]+@([\w-]+\.)+[\w-]{2,8}$/g,
                        validateEmail: !0,
                        error: F.WorkEmail,
                        errorMessage: "Please enter a valid work email address",
                        required: !0,
                        placeholder: "Work Email",
                        icon: "mail",
                      }),
                      (0, t.jsx)(x.I, {
                        label: "Phone number",
                        name: "PhoneNumber",
                        register: D,
                        error: F.PhoneNumber,
                        errorMessage: "Please enter a valid phone number",
                        required: !0,
                        placeholder: "+1 555 555 5555",
                        icon: "phone",
                      }),
                      (0, t.jsx)(x.I, {
                        label: "Your company name",
                        name: "CompanyName",
                        register: D,
                        error: F.CompanyName,
                        errorMessage: "This field is required",
                        required: !0,
                        placeholder: "Your company",
                        icon: "business",
                      }),
                      (0, t.jsx)(f.Q, {
                        name: "Country",
                        options: q,
                        control: G,
                        errorMessage: "Please select a country",
                        setCountry: M,
                      }),
                      _ &&
                        (0, t.jsx)(f.Q, {
                          name: "State",
                          label:
                            "Canada" === S.label
                              ? "Province/Territory"
                              : "State",
                          options: B,
                          control: G,
                          errorMessage: "Please select a state",
                        }),
                      (0, t.jsx)(p.GZ, { showOptIn: R, control: G }),
                      (0, t.jsx)(n.Z, {
                        className: "mx-auto mt-8 flex font-semibold ".concat(
                          I ? "pointer-events-none opacity-50" : ""
                        ),
                        type: "submit",
                        variant: "primary",
                        disabled: I,
                        children: l || "Submit",
                      }),
                    ],
                  }),
            }),
            (0, t.jsx)("form", {
              hidden: !0,
              className: "hidden",
              id: "mktoForm_".concat(a),
            }),
          ],
        });
      };
    },
    51050: function (e, a, l) {
      "use strict";
      l.d(a, {
        s: function () {
          return t;
        },
      });
      let t = (e, a, l) =>
        e
          ? void 0 !== a.optIn && a.optIn
          : !l.asPath.includes("/legal/") || null;
    },
    4956: function (e, a, l) {
      "use strict";
      l.d(a, {
        q: function () {
          return $;
        },
        A: function () {
          return X;
        },
      });
      var t = l(52322),
        n = l(34107),
        i = l.n(n),
        r = (e) => {
          let { activePage: a } = e;
          return a
            ? (0, t.jsx)("div", {
                className: "container mx-auto px-4 py-4",
                children: (0, t.jsxs)("div", {
                  className:
                    "flex flex-row justify-between gap-x-20 font-semibold",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "whitespace-nowrap text-xl text-brand-secondary",
                      children: a,
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "flex flex-row gap-8 overflow-x-scroll whitespace-nowrap ".concat(
                          i()["nav-wrapper"]
                        ),
                      children: [
                        (0, t.jsx)("a", {
                          href: "/company/about-us",
                          className:
                            "About us" === a
                              ? "text-light-title"
                              : "text-brand-secondary",
                          children: "About us",
                        }),
                        (0, t.jsx)("a", {
                          href: "/company/careers",
                          className:
                            "Careers" === a
                              ? "text-light-title"
                              : "text-brand-secondary",
                          children: "Careers",
                        }),
                        (0, t.jsx)("a", {
                          href: "/company/newsroom",
                          className:
                            "Newsroom" === a
                              ? "text-light-title"
                              : "text-brand-secondary",
                          children: "Newsroom",
                        }),
                        (0, t.jsx)("a", {
                          href: "/partners/showcase",
                          className:
                            "Showcase" === a
                              ? "text-light-title"
                              : "text-brand-secondary",
                          children: "Showcase",
                        }),
                        (0, t.jsx)("a", {
                          href: "/company/contact-us",
                          className:
                            "Contact us" === a
                              ? "text-light-title"
                              : "text-brand-secondary",
                          children: "Contact us",
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : null;
        },
        s = l(5775),
        o = l(4602),
        c = l(41664),
        u = l.n(c),
        d = l(2784),
        m = l(51286);
      let b = (e) => fetch(e).then((e) => e.json());
      var h = (e) => {
        let { onlyMobile: a = !1 } = e,
          [l, n] = (0, d.useState)(!1),
          { data: i, error: r } = (0, m.ZP)("/api/navigation", b);
        return ((0, d.useEffect)(() => {
          let e = localStorage.getItem("announcementBanner");
          e || n(!0), e && JSON.parse(e) !== i.bannerCreatedAt && n(!0);
        }, []),
        r)
          ? (0, t.jsx)("div", { children: "failed to load" })
          : i
          ? (0, t.jsx)(t.Fragment, {
              children:
                i.text &&
                (0, t.jsxs)("div", {
                  className:
                    "sticky top-0 z-[90] flex w-full flex-col items-center  bg-[#FBE6E5] hover:cursor-pointer  "
                      .concat(
                        a && "lg:hidden",
                        " ease overflow-hidden transition-all duration-300 "
                      )
                      .concat(l ? "max-h-screen px-6 py-5" : "max-h-0 p-0"),
                  children: [
                    (0, t.jsx)("button", {
                      type: "button",
                      className:
                        "absolute right-6 top-4 cursor-pointer text-light-icon",
                      onClick: () => {
                        n(!1),
                          localStorage.setItem(
                            "announcementBanner",
                            JSON.stringify(i.bannerCreatedAt)
                          );
                      },
                      children: (0, t.jsx)(o.J, {
                        iconName: "close",
                        iconColor: "currentColor",
                        iconSize: "default",
                      }),
                    }),
                    (0, t.jsx)(u(), {
                      href: i.link.href,
                      className:
                        "mb-2 w-3/4 text-center text-sm font-semibold md:w-full",
                      children: i.text,
                    }),
                  ],
                }),
            })
          : (0, t.jsx)("div", { children: "loading..." });
      };
      let g = (e) => {
        let { label: a, href: l, iconName: n, mouseEnter: i } = e;
        return (0, t.jsx)("div", {
          onMouseEnter: i,
          children: (0, t.jsxs)("a", {
            href: l,
            className:
              "flex w-full flex-row items-center gap-2 whitespace-nowrap px-4 py-3.5 text-sm font-semibold text-light-content hover:text-brand-primary",
            children: [
              (0, t.jsx)(o.J, {
                iconColor: "currentColor",
                iconSize: "sm",
                iconName: n,
              }),
              a,
            ],
          }),
        });
      };
      var v = () =>
          (0, t.jsx)("div", {
            className: "z-50",
            children: (0, t.jsx)(P, {
              label: "Industries",
              children: (0, t.jsxs)("div", {
                className:
                  "grid w-full grid-cols-nav rounded-bl-xl rounded-br-xl bg-white",
                children: [
                  (0, t.jsx)(g, {
                    href: "/industries/financial-services",
                    label: "Financial Services",
                    iconName: "monetization_on",
                  }),
                  (0, t.jsx)(g, {
                    href: "/industries/retail",
                    label: "Retail",
                    iconName: "storefront",
                  }),
                  (0, t.jsx)(g, {
                    href: "/industries/broadcasting-and-telecommunications",
                    label: "Broadcasting & Telecom",
                    iconName: "cell_tower",
                  }),
                  (0, t.jsx)(g, {
                    href: "/industries/technology",
                    label: "Technology",
                    iconName: "devices",
                  }),
                  (0, t.jsx)(g, {
                    href: "/industries/manufacturing",
                    label: "Manufacturing",
                    iconName: "factory",
                  }),
                  (0, t.jsx)(g, {
                    href: "/industries/healthcare",
                    label: "Healthcare",
                    iconName: "health_and_safety",
                  }),
                  (0, t.jsx)(g, {
                    href: "/industries/energy",
                    label: "Energy",
                    iconName: "bolt",
                  }),
                  (0, t.jsx)(g, {
                    href: "/industries/transportation-and-warehousing",
                    label: "Transportation & Warehousing",
                    iconName: "explore",
                  }),
                  (0, t.jsx)(g, {
                    href: "/industries/higher-education",
                    label: "Higher Education",
                    iconName: "history_edu",
                  }),
                  (0, t.jsx)(g, {
                    href: "/industries/real-estate-and-construction",
                    label: "Real Estate & Construction",
                    iconName: "apartment",
                  }),
                  (0, t.jsx)(g, {
                    href: "/industries/legal",
                    label: "Legal",
                    iconName: "balance",
                  }),
                  (0, t.jsx)(g, {
                    href: "/industries/federal-government",
                    label: "Federal Government",
                    iconName: "account_balance",
                  }),
                  (0, t.jsx)(g, {
                    href: "/industries/state-and-local-government",
                    label: "State & Local Government",
                    iconName: "home_work",
                  }),
                ],
              }),
            }),
          }),
        p = l(32564),
        x = l(11163),
        f = l(60829);
      let y = () => (
          (0, x.useRouter)(),
          (0, t.jsxs)("div", {
            className:
              "mx-4 flex flex-col rounded-md border border-brand-divider bg-white px-4 py-5",
            children: [
              (0, t.jsxs)("p", {
                className: "pb-2 text-base font-semibold text-light-title",
                children: [
                  "Uncertain about the",
                  " ",
                  (0, t.jsx)("span", {
                    className: "text-brand-primary",
                    children: "ideal product",
                  }),
                  " for your business?",
                ],
              }),
              (0, t.jsxs)("div", {
                className: "flex flex-row items-center justify-between",
                children: [
                  (0, t.jsx)(f.M, {
                    intent: "primary",
                    href: "/company/contact-us",
                    size: "sm",
                    children: "Contact Us",
                  }),
                  (0, t.jsx)(o.J, {
                    iconName: "contact_support",
                    iconColor: "default",
                    iconSize: "lg",
                  }),
                ],
              }),
            ],
          })
        ),
        j = (e) => {
          let { label: a, href: l, description: n, mouseEnter: i } = e;
          return (0, t.jsx)("div", {
            onMouseEnter: i,
            children: (0, t.jsx)("a", {
              href: l,
              children: (0, t.jsxs)("div", {
                className:
                  "group flex w-72 flex-col bg-white px-6 py-4 transition-all hover:bg-brand-primary/10",
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "text-sm font-bold text-light-title group-hover:text-brand-primary",
                    children: a,
                  }),
                  (0, t.jsx)("div", {
                    className: "text-xs font-normal text-light-content",
                    children: n,
                  }),
                ],
              }),
            }),
          });
        };
      var w = () =>
          (0, t.jsx)("div", {
            className: "z-50",
            children: (0, t.jsx)(P, {
              label: "Products",
              children: (0, t.jsxs)("div", {
                className: "flex flex-row rounded-b-xl bg-white",
                children: [
                  (0, t.jsxs)("div", {
                    className: "rounded-bl-xl bg-white",
                    children: [
                      (0, t.jsx)(j, {
                        description:
                          "Manage audit, risk and compliance. Provide the highest level of assurance to executives.",
                        href: "/platform/diligent-one",
                        label: "Diligent One Platform (formerly HighBond)",
                      }),
                      (0, t.jsx)(j, {
                        description:
                          "Digitize board materials, streamline board and committee meetings.",
                        href: "/products/board-and-leadership-collaboration",
                        label: "Boards",
                      }),
                      (0, t.jsx)(j, {
                        description:
                          "Manage audit, risk and compliance. Provide the highest level of assurance to executives.",
                        href: "/platform/diligent-ai",
                        label: "Diligent AI",
                      }),
                      (0, t.jsx)(j, {
                        description:
                          "Manage subsidiaries with a centralized corporate record that's always up to date.",
                        href: "/products/entities",
                        label: "Entities",
                      }),
                      (0, t.jsx)(j, {
                        description:
                          "Automate manual processes and provide continuous monitoring, without adding headcount.",
                        href: "/products/acl-analytics",
                        label: "ACL Analytics",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "bg-white",
                    children: [
                      (0, t.jsx)(j, {
                        description:
                          "Secure, flexible board management software for nonprofits, community healthcare and higher education.",
                        href: "/products/board-effect",
                        label: "BoardEffect",
                      }),
                      (0, t.jsx)(j, {
                        description:
                          "Systemize and automate third-party monitoring and compliance processes.",
                        href: "/products/third-party-manager",
                        label: "Third Party Manager",
                      }),
                      (0, t.jsx)(j, {
                        description:
                          "Powerful training content rooted in behavior-change science, available in 60+ languages.",
                        href: "/products/compliance-ethics-training",
                        label: "Compliance & Ethics Training",
                      }),
                      (0, t.jsx)(j, {
                        description:
                          "Protect against reputational, AML and financial risk with automated, real-time monitoring.",
                        href: "/products/risk-intelligence-data",
                        label: "Risk Intelligence Data",
                      }),
                      (0, t.jsx)(j, {
                        description:
                          "Best-in-class due diligence services fueled by AI capabilities and human investigational skills.",
                        href: "/products/due-diligence",
                        label: "Due Diligence",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "rounded-br-xl bg-white",
                    children: [
                      (0, t.jsx)(j, {
                        description:
                          "Quickly and seamlessly review, create, deploy and administer corporate policies.",
                        href: "/products/policy-manager",
                        label: "Policy Manager",
                      }),
                      (0, t.jsx)(j, {
                        description:
                          "Expertly manage evolving ESG considerations with software that scales to your needs.",
                        href: "/products/diligent-esg",
                        label: "Diligent ESG",
                      }),
                      (0, t.jsx)(j, {
                        description:
                          "On-demand access to exclusive shareholder activism, executive compensation and ESG data.",
                        href: "/solutions/market-intelligence",
                        label: "Diligent Market Intelligence",
                      }),
                      (0, t.jsx)(j, {
                        description:
                          "Increase transparency, streamline internal processes and empower your school board.",
                        href: "/products/community",
                        label: "Diligent Community",
                      }),
                      (0, t.jsx)("div", {
                        className: "pb-8 pt-4",
                        children: (0, t.jsx)(y, {}),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        N = (e) => {
          let {
            href: a,
            title: l,
            subtitle: n,
            isExternal: i = !1,
            icon: r,
            iconSize: s = "default",
          } = e;
          return (0, t.jsxs)("a", {
            href: a,
            className:
              "pb-2 text-sm font-semibold  text-light-content hover:text-light-link",
            children: [
              (0, t.jsxs)("div", {
                className:
                  "flex w-full flex-shrink flex-grow-0 cursor-pointer flex-row items-center gap-1",
                children: [
                  l,
                  i &&
                    (0, t.jsx)(o.J, {
                      iconName: "open_in_new",
                      iconColor: "currentColor",
                      iconSize: "sm",
                    }),
                  r &&
                    (0, t.jsx)(o.J, {
                      iconName: r,
                      iconColor: "currentColor",
                      iconSize: s,
                    }),
                ],
              }),
              n && (0, t.jsx)("div", { className: "text-xs", children: n }),
            ],
          });
        };
      let k = (e) => {
        let { label: a, href: l, iconName: n, mouseEnter: i } = e;
        return (0, t.jsx)("div", {
          onMouseEnter: i,
          children: (0, t.jsxs)("a", {
            href: l,
            className:
              "flex w-full flex-row items-center gap-2 whitespace-nowrap px-8 py-2.5 text-sm font-semibold text-light-content hover:text-brand-primary",
            children: [
              (0, t.jsx)(o.J, {
                iconColor: "currentColor",
                iconSize: "sm",
                iconName: n,
              }),
              a,
            ],
          }),
        });
      };
      var C = () =>
        (0, t.jsx)("div", {
          className: "z-50",
          children: (0, t.jsx)(P, {
            label: "Resources",
            children: (0, t.jsxs)("div", {
              className: "flex flex-row",
              children: [
                (0, t.jsxs)("div", {
                  className: "rounded-bl-xl bg-white py-2",
                  children: [
                    (0, t.jsx)(k, {
                      href: "/resources/blog",
                      label: "Blog",
                      iconName: "bookmarks",
                    }),
                    (0, t.jsx)(k, {
                      href: "/resources/guides",
                      label: "Guides",
                      iconName: "map",
                    }),
                    (0, t.jsx)(k, {
                      href: "/resources/videos",
                      label: "Videos",
                      iconName: "play_circle",
                    }),
                    (0, t.jsx)(k, {
                      href: "/resources/podcasts",
                      label: "Podcasts",
                      iconName: "podcasts",
                    }),
                    (0, t.jsx)(k, {
                      href: "/resources/research",
                      label: "Research & Reports",
                      iconName: "summarize",
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className:
                    "flex flex-col justify-between whitespace-nowrap rounded-br-xl bg-brand-gray px-8 py-8",
                  children: (0, t.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                      (0, t.jsxs)("div", {
                        className:
                          "mb-4 text-xs font-semibold uppercase text-light-icon",
                        children: [" ", "More", " "],
                      }),
                      (0, t.jsx)(N, {
                        href: "/elevate",
                        title: "Diligent Elevate",
                        subtitle: "(formerly Modern Governance Summit)",
                        isExternal: !0,
                      }),
                      (0, t.jsx)(N, {
                        href: "https://www.diligentinstitute.com",
                        title: "Diligent Institute",
                        isExternal: !0,
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      let S = (e) => {
          let {
              label: a,
              iconName: l,
              children: n,
              mouseEnter: i,
              active: r,
              href: s,
            } = e,
            c = "!text-brand-primary",
            u = void 0 !== s;
          return (0, t.jsx)("div", {
            onMouseEnter: i,
            className: "border-r border-brand-divider",
            children: u
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)("a", {
                      href: s,
                      className:
                        "flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-4 text-sm font-semibold text-light-title hover:text-brand-primary "
                          .concat(
                            u ? "hover:cursor-pointer" : "hover:cursor-default",
                            " "
                          )
                          .concat(r && c),
                      children: [
                        (0, t.jsx)(o.J, {
                          iconColor: "currentColor",
                          iconSize: "sm",
                          iconName: l,
                        }),
                        a,
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: "absolute right-0 top-0 translate-x-full",
                      children: n,
                    }),
                  ],
                })
              : (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)("div", {
                      className:
                        "flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-4 text-sm font-semibold text-light-title hover:text-brand-primary "
                          .concat(
                            u ? "hover:cursor-pointer" : "hover:cursor-default",
                            " "
                          )
                          .concat(r && c),
                      children: [
                        (0, t.jsx)(o.J, {
                          iconColor: "currentColor",
                          iconSize: "sm",
                          iconName: l,
                        }),
                        a,
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: "absolute right-0 top-0 translate-x-full",
                      children: n,
                    }),
                  ],
                }),
          });
        },
        M = (e) => {
          let { label: a, href: l, description: n } = e;
          return (0, t.jsx)("a", {
            href: l || "#",
            children: (0, t.jsxs)("div", {
              className:
                "group flex w-96 flex-col bg-white px-6 py-4 transition-all hover:bg-brand-primary/10",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "text-sm font-medium text-light-content group-hover:text-brand-primary",
                  children: a,
                }),
                (0, t.jsx)("div", {
                  className: "text-xs font-normal text-light-content",
                  children: n,
                }),
              ],
            }),
          });
        };
      var I = () => {
          let [e, a] = (0, d.useState)("Board");
          return (0, t.jsx)(P, {
            label: "Solutions",
            children: (0, t.jsxs)("div", {
              className: "flex flex-col ",
              onMouseLeave: () => a("Board"),
              children: [
                (0, t.jsx)(S, {
                  label: "Boards & Governance",
                  iconName: "assured_workload",
                  mouseEnter: () => a("Board"),
                  active: "Board" === e,
                  href: "/solutions/boards-and-governance",
                  children:
                    "Board" === e &&
                    (0, t.jsxs)("div", {
                      className:
                        "flex h-[520px] flex-col overflow-y-auto rounded-br-xl bg-white",
                      children: [
                        (0, t.jsx)(M, {
                          label: "Board Management",
                          description:
                            "Integrated platform with tools to streamline meetings, collaboration & communications.",
                          href: "/solutions/board-and-leadership-collaboration",
                        }),
                        (0, t.jsx)(M, {
                          label: "Entity & Subsidiary Management",
                          description:
                            "Integrated platform to record and track your corporate record in a central location.",
                          href: "/solutions/entity-subsidiary-management",
                        }),
                        (0, t.jsx)(M, {
                          label: "Compensation & Governance Intel",
                          description:
                            "Surface relevant data within your board platform to drive data-backed decision making.",
                          href: "/solutions/compensation-governance-intel",
                        }),
                        (0, t.jsx)(M, {
                          label: "Cap Table & Option Management",
                          description:
                            "Dedicated platform to ensure cap table accuracy, reporting, and scenario modeling.",
                          href: "/solutions/cap-table-management-software",
                        }),
                        (0, t.jsx)(M, {
                          label: "Governance for Public & Elected Boards",
                          description:
                            "Streamline school board and local government meeting prep, collaborate securely and provide transparency.",
                          href: "/solutions/governance-for-public-and-elected-boards",
                        }),
                        (0, t.jsx)(M, {
                          label: "Governance for Nonprofit & Volunteer Boards",
                          description:
                            "Simplify board processes, boost director engagement and promote better collaboration and accountability.",
                          href: "/solutions/governance-for-nonprofit-and-volunteer-boards",
                        }),
                      ],
                    }),
                }),
                (0, t.jsx)(S, {
                  label: "Risk & Strategy",
                  iconName: "chart_data",
                  mouseEnter: () => a("Risk"),
                  active: "Risk" === e,
                  href: "/solutions/pillar-hub-risk-and-strategy", 
                  children:
                    "Risk" === e &&
                    (0, t.jsxs)("div", {
                      className:
                        "flex h-[520px] flex-col rounded-br-xl bg-white",
                      children: [
                        (0, t.jsx)(M, {
                          label: "Enterprise Risk Management",
                          description:
                            "Identify, assess and mitigate risks that could impact your organization’s objectives",
                          href: "/solutions/enterprise-risk-management",
                        }),
                        (0, t.jsx)(M, {
                          label: "IT Risk Management",
                          description:
                            "Effectively monitor, assess and remediate IT and cyber risks to your organization's assets",
                          href: "/solutions/it-risk-management",
                        }),
                        (0, t.jsx)(M, {
                          label: "IT Vendor Risk Management",
                          description:
                            "Integrated risk platform to monitor and manage your third-party vendor landscape.",
                          href: "/solutions/it-vendor-risk-management",
                        }),
                        (0, t.jsx)(M, {
                          label: "IT Compliance",
                          description:
                            "Ensure IT Compliance While Saving Time and Resources.",
                          href: "/solutions/it-compliance",
                        }),
                        (0, t.jsx)(M, {
                          label: "Risk Management for Public Agencies",
                          description:
                            "The only FedRAMP & DoD IL-5 solution for comprehensive risk management.",
                          href: "/solutions/risk-management-for-public-agencies",
                        }),
                        (0, t.jsx)(M, {
                          label: "IT Risk & Compliance for Public Agencies",
                          description:
                            "Stay ahead of emerging IT risks and empower leaders to make risk-informed decisions.",
                          href: "/solutions/it-risk-compliance-for-public-agencies",
                        }),
                      ],
                    }),
                }),
                (0, t.jsx)(S, {
                  label: "Information Security",
                  iconName: "verified_user",
                  mouseEnter: () => a("InfoSec"),
                  active: "InfoSec" === e,
                  children:
                    "InfoSec" === e &&
                    (0, t.jsxs)("div", {
                      className:
                        "flex h-[520px] flex-col rounded-br-xl bg-white",
                      children: [
                        (0, t.jsx)(M, {
                          label: "IT Risk Management",
                          description:
                            "Effectively monitor, assess and remediate IT and cyber risks to your organization's assets",
                          href: "/solutions/it-risk-management",
                        }),
                        (0, t.jsx)(M, {
                          label: "IT Vendor Risk Management",
                          description:
                            "Integrated risk platform to monitor and manage your third-party vendor landscape.",
                          href: "/solutions/it-vendor-risk-management",
                        }),
                        (0, t.jsx)(M, {
                          label: "IT Compliance",
                          description:
                            "Ensure IT Compliance While Saving Time and Resources.",
                          href: "/solutions/it-compliance",
                        }),
                        (0, t.jsx)(M, {
                          label: "IT Risk & Compliance for Public Agencies",
                          description:
                            "Stay ahead of emerging IT risks and empower leaders to make risk-informed decisions.",
                          href: "/solutions/it-risk-compliance-for-public-agencies",
                        }),
                      ],
                    }),
                }),
                (0, t.jsx)(S, {
                  label: "Audit & Analytics",
                  iconName: "data_usage",
                  mouseEnter: () => a("Audit"),
                  active: "Audit" === e,
                  href: "/solutions/audit-and-analytics",
                  children:
                    "Audit" === e &&
                    (0, t.jsxs)("div", {
                      className:
                        "flex h-[520px] flex-col rounded-br-xl bg-white",
                      children: [
                        (0, t.jsx)(M, {
                          label: "Audit Management",
                          description:
                            "FedRamp certified audit solution that easily integrates disparate data sources.",
                          href: "/solutions/audit-management",
                        }),
                        (0, t.jsx)(M, {
                          label: "Internal Controls Management",
                          description:
                            "Framework that centralizes and automates internal control monitoring and workflows.",
                          href: "/solutions/internal-controls-management",
                        }),
                        (0, t.jsx)(M, {
                          label: "ACL Analytics & Continuous Monitoring",
                          description:
                            "Audit analytics that runs your data access, reporting, and remediation tasks from beginning to end.",
                          href: "/solutions/continuous-monitoring",
                        }),
                        (0, t.jsx)(M, {
                          label: "Audit Management for Federal Government",
                          description:
                            "The only FedRamp & IL5 solution for comprehensive audit management.",
                          href: "/solutions/audit-management-for-federal-agencies",
                        }),
                        (0, t.jsx)(M, {
                          label:
                            "Audit Management for Government and Education",
                          description:
                            "Data-driven audit management software for government and education",
                          href: "/solutions/audit-management-for-government-and-education",
                        }),
                      ],
                    }),
                }),
                (0, t.jsx)(S, {
                  label: "ESG & Diversity",
                  iconName: "spa",
                  mouseEnter: () => a("ESG"),
                  active: "ESG" === e,
                  href: "/solutions/esg-and-diversity",
                  children:
                    "ESG" === e &&
                    (0, t.jsxs)("div", {
                      className:
                        "flex h-[520px] flex-col rounded-br-xl bg-white",
                      children: [
                        (0, t.jsx)(M, {
                          label: "Carbon Accounting",
                          description:
                            "Accurate sustainability audits with over 80 pre-configured audit-ready reports.",
                          href: "/solutions/carbon-accounting",
                        }),
                        (0, t.jsx)(M, {
                          label: "Board Diversity",
                          description:
                            "The board is your organization's most powerful strategic tool – and who sits at the boardroom table matters more than ever.",
                          href: "/solutions/board-diversity",
                        }),
                      ],
                    }),
                }),
                (0, t.jsx)(S, {
                  label: "Board Education & Certification",
                  iconName: "school",
                  mouseEnter: () => a("Cert"),
                  active: "Cert" === e,
                  href: "/board-education-and-certifications",
                  children:
                    "Cert" === e &&
                    (0, t.jsxs)("div", {
                      className:
                        "flex h-[520px] flex-col rounded-br-xl bg-white",
                      children: [
                        (0, t.jsx)(M, {
                          label: "Climate Leadership",
                          description:
                            "Diligent's Climate Leadership Certificate prepares leaders for climate challenges.",
                          href: "/solutions/climate-leadership-certificate",
                        }),
                        (0, t.jsx)(M, {
                          label: "Cyber Risk & Strategy",
                          description:
                            "Build cyber competency with Cyber Risk & Strategy Certification for directors.",
                          href: "/solutions/cyber-risk-strategy-leadership-certification",
                        }),
                        (0, t.jsx)(M, {
                          label: "AI Ethics & Board Oversight",
                          description:
                            "Navigate the ethical and technological issues inherent in AI, so you can steer your organization toward sustainable, trustworthy practices.",
                          href: "/landing/ai-ethics-board-oversight-certification",
                        }),
                        (0, t.jsx)(M, {
                          label: "Human Capital, Compensation & Culture",
                          description:
                            "Gain strategic insights into HR, compensation strategies and cultural dynamics to elevate boardroom effectiveness.",
                          href: "/solutions/human-capital-compensation-and-culture-certificate",
                        }),
                      ],
                    }),
                }),
                (0, t.jsx)(S, {
                  label: "Market Intelligence",
                  iconName: "shopping_cart",
                  mouseEnter: () => a("Market"),
                  active: "Market" === e,
                  children:
                    "Market" === e &&
                    (0, t.jsxs)("div", {
                      className:
                        "flex h-[520px] flex-col rounded-br-xl bg-white",
                      children: [
                        (0, t.jsx)(M, {
                          label: "Market Intelligence",
                          description:
                            " Access global governance data and expertise for enhanced company workflows",
                          href: "/solutions/market-intelligence",
                        }),
                        (0, t.jsx)(M, {
                          label: "Voting Intelligence",
                          description:
                            "Enhance strategy with Diligent's expertise for navigating governance and shareholders",
                          href: "/solutions/voting-intelligence",
                        }),
                        (0, t.jsx)(M, {
                          label: "Shareholder Activism",
                          description:
                            "Track and analyze investor activism to manage shareholder demands effectively.",
                          href: "/solutions/shareholder-activism",
                        }),
                        (0, t.jsx)(M, {
                          label: "Executive Compensation",
                          description:
                            "Incentivize executives with competitive plans using global compensation solutions",
                          href: "/solutions/executive-compensation",
                        }),
                        (0, t.jsx)(M, {
                          label: "Environmental, Social & Governance",
                          description:
                            "Access Clarity AI's science-based ESG risk scores for informed decisions",
                          href: "/solutions/esg-intelligence-solutions",
                        }),
                      ],
                    }),
                }),
                (0, t.jsx)(S, {
                  label: "Compliance & Ethics",
                  iconName: "explore",
                  mouseEnter: () => a("Compliance"),
                  active: "Compliance" === e,
                  href: "/solutions/compliance-and-ethics",
                  children:
                    "Compliance" === e &&
                    (0, t.jsxs)("div", {
                      className:
                        "flex h-[520px] flex-col rounded-br-xl bg-white",
                      children: [
                        (0, t.jsx)(M, {
                          label: "Policy Management",
                          description:
                            "Enhance policy comprehension, to reduce time, cost, and risk",
                          href: "/solutions/policy-management",
                        }),
                        (0, t.jsx)(M, {
                          label: "Compliance and Ethics training",
                          description:
                            "Use behavior-change science and content to empowers employees and improve training outcomes",
                          href: "/solutions/compliance-and-ethics-training",
                        }),
                        (0, t.jsx)(M, {
                          label: "Third-Party Risk Management",
                          description:
                            "Integrated risk platform to monitor and manage your third-party vendor landscape.",
                          href: "/solutions/third-party-risk-management",
                        }),
                        (0, t.jsx)(M, {
                          label: "Regulatory Compliance Management",
                          description:
                            "Integrated platform that tracks, prioritizes and centralizes regulatory compliance.",
                          href: "/solutions/regulatory-compliance-management",
                        }),
                      ],
                    }),
                }),
                (0, t.jsx)("div", {
                  className:
                    "flex h-[104px] flex-col rounded-bl-xl bg-brand-gray px-8 py-4",
                }),
              ],
            }),
          });
        },
        A = l(25675),
        T = l.n(A),
        E = l(98174);
      let P = (e) => {
        let { href: a, label: l, children: n } = e,
          [i, r] = (0, d.useState)(!1),
          s =
            'relative after:absolute after:bottom-0 after:w-0 after:bg-brand-primary after:h-1 after:transition-width after:duration-500 group-hover:w-full after:hover:w-full after:content[""] '.concat(
              i && "after:w-full"
            ),
          o = void 0 !== a,
          c = (0, t.jsx)("div", {
            onMouseEnter: () => r(!0),
            onMouseLeave: () => {
              r(!1);
            },
            className: "z-50",
            children: (0, t.jsxs)("div", {
              cFlassName: "relative flex flex-col px-4 ".concat(
                o ? "hover:cursor-pointer" : "hover:cursor-default"
              ),
              children: [
                (0, t.jsx)("div", {
                  className: (0, E.m)(
                    "flex pb-5 pt-4 text-base font-semibold text-light-title hover:text-brand-primary",
                    s
                  ),
                  children: l,
                }),
                i &&
                  (0, t.jsx)("div", {
                    className:
                      "absolute bottom-0 left-[-150px] translate-y-full ",
                    children: n,
                  }),
              ],
            }),
          });
        return o ? (0, t.jsx)(u(), { href: a, children: c }) : c;
      };
      var L = (e) => {
        let { bgColor: a } = e,
          [l, n] = (0, d.useState)(!1),
          [i, r] = (0, d.useState)(!0);
        return (
          (0, x.useRouter)(),
          (0, d.useEffect)(() => {
            let e = () => {
              window.scrollY > 40 ? (n(!0), r(!1)) : (n(!1), r(!0));
            };
            return (
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            );
          }, [i]),
          (0, t.jsx)("div", {
            className:
              "sticky top-0 z-[100] mx-auto hidden w-full items-center justify-between px-4 py-4 transition-all duration-200 lg:flex "
                .concat(l && "shadow-nav", " ")
                .concat(
                  "transparent" === a ? "bg-transparent" : "bg-white",
                  " "
                )
                .concat(
                  "transparent" === a && l && "bg-white/80 backdrop-blur-lg"
                ),
            children: (0, t.jsxs)("div", {
              className:
                "container mx-auto items-center justify-between lg:flex",
              children: [
                (0, t.jsxs)("div", {
                  className: "flex",
                  children: [
                    (0, t.jsx)(u(), {
                      href: "/",
                      children: (0, t.jsx)(T(), {
                        src: "/logo/diligent_logo_fullcolor_rgb.svg",
                        alt: "Diligent",
                        width: 157,
                        height: 44,
                        className: "mr-8",
                        priority: !0,
                      }),
                    }),
                    (0, t.jsx)(I, {}),
                    (0, t.jsx)(w, {}),
                    (0, t.jsx)(v, {}),
                    (0, t.jsx)(C, {}),
                  ],
                }),
                (0, t.jsx)(f.M, {
                  href: "/request-a-demo",
                  intent: "secondary",
                  children: "Request a demo",
                }),
              ],
            }),
          })
        );
      };
      let R = [
        {
          category: "Solutions",
          items: [
            {
              subcategory: "Boards & Governance",
              type: "accordion",
              icon: "assured_workload",
              items: [
                {
                  title: "Board Management",
                  link: "/solutions/board-and-leadership-collaboration",
                },
                {
                  title: "Entity & Subsidiary Management",
                  link: "/solutions/entity-subsidiary-management",
                },
                {
                  title: "Compensation & Governance Intel",
                  link: "/solutions/compensation-governance-intel",
                },
                {
                  title: "Cap table & Option management",
                  link: "/solutions/cap-table-management-software",
                },
                {
                  title: "Governance for Public & Elected Boards",
                  link: "/solutions/governance-for-public-and-elected-boards",
                },
                {
                  title: "Governance for Nonprofit & Volunteer Boards",
                  link: "/solutions/governance-for-nonprofit-and-volunteer-boards",
                },
              ],
            },
            {
              subcategory: "Risk & Strategy",
              type: "accordion",
              icon: "chart_data",
              items: [
                {
                  title: "Enterprise Risk Management",
                  link: "/solutions/enterprise-risk-management",
                },
                {
                  title: "IT Risk Management",
                  link: "/solutions/it-risk-management",
                },
                { title: "IT Compliance", link: "/solutions/it-compliance" },
                {
                  title: "Risk management for Federal Agencies",
                  link: "/solutions/risk-management-for-federal-agencies",
                },
                {
                  title: "IT Risk & Compliance for Public Agencies",
                  link: "/solutions/it-risk-compliance-for-public-agencies",
                },
              ],
            },
            {
              subcategory: "Information Security",
              type: "accordion",
              icon: "verified_user",
              items: [
                {
                  title: "IT Risk Management",
                  link: "/solutions/it-risk-management",
                },
                { title: "IT Compliance", link: "/solutions/it-compliance" },
                {
                  title: "IT Risk & Compliance for Public Agencies",
                  link: "/solutions/it-risk-compliance-for-public-agencies",
                },
              ],
            },
            {
              subcategory: "Audit & Analytics",
              type: "accordion",
              icon: "data_usage",
              items: [
                {
                  title: "Audit Management",
                  link: "/solutions/audit-management",
                },
                {
                  title: "Internal Controls Management",
                  link: "/solutions/internal-controls-management",
                },
                {
                  title: "ACL Analytics & Continous Monitoring",
                  link: "/solutions/continuous-monitoring",
                },
                {
                  title: "Audit Management for Federal Government",
                  link: "/solutions/audit-management-for-federal-agencies",
                },
                {
                  title: "Audit Management for Government and Education",
                  link: "/solutions/audit-management-for-government-and-education",
                },
              ],
            },
            {
              subcategory: "ESG & Diversity",
              type: "accordion",
              icon: "spa",
              items: [
                {
                  title: "Carbon Accounting",
                  link: "/solutions/carbon-accounting",
                },
                {
                  title: "Board Deversity",
                  link: "/solutions/board-diversity",
                },
              ],
            },
            {
              subcategory: "Board Education & Certification",
              type: "accordion",
              icon: "school",
              items: [
                {
                  title: "Climate Leadership",
                  link: "/solutions/climate-leadership-certificate",
                },
                {
                  title: "Cyber Risk & Strategy",
                  link: "/solutions/cyber-risk-strategy-leadership-certification",
                },
                {
                  title: "ESG Leadership",
                  link: "/solutions/esg-leadership-certification",
                },
              ],
            },
            {
              subcategory: "Market Intelligence",
              type: "accordion",
              icon: "shopping_cart",
              items: [
                {
                  title: "Market Intelligence",
                  link: "/solutions/market-intelligence",
                },
                {
                  title: "Voting Intelligence",
                  link: "/solutions/voting-intelligence",
                },
                {
                  title: "Shareholder Activism",
                  link: "/solutions/shareholder-activism",
                },
                {
                  title: "Executive Compensation",
                  link: "/solutions/executive-compensation",
                },
                {
                  title: "Environmental, Social & Governance",
                  link: "/solutions/esg",
                },
              ],
            },
            {
              subcategory: "Compliance & Ethics",
              type: "accordion",
              icon: "explore",
              items: [
                {
                  title: "Policy Manager",
                  link: "/solutions/policy-management",
                },
                {
                  title: "Compliance and Ethic training",
                  link: "/solutions/compliance-and-ethics-training",
                },
                {
                  title: "Third-Party Risk Management",
                  link: "/solutions/third-party-risk-management",
                },
                {
                  title: "Regulatory Compliance Management",
                  link: "/solutions/regulatory-compliance-management",
                },
              ],
            },
          ],
        },
        {
          category: "Products",
          items: [
            {
              subcategory: "Diligent Platform",
              type: "item",
              href: "/platform/diligent-one",
            },
            {
              subcategory: "Boards",
              type: "item",
              href: "/products/board-and-leadership-collaboration",
            },
            {
              subcategory: "Diligent AI",
              type: "item",
              href: "/platform/diligent-ai",
            },
            {
              subcategory: "Entities",
              type: "item",
              href: "/products/entities",
            },
            {
              subcategory: "ACL Analytics",
              type: "item",
              href: "/products/acl-analytics",
            },
            {
              subcategory: "Diligent One Platform (formerly HighBond)",
              type: "item",
              href: "/platform/diligent-one",
            },
            {
              subcategory: "BoardEffect",
              type: "item",
              href: "/products/board-effect",
            },
            {
              subcategory: "Third Party Manager",
              type: "item",
              href: "/products/third-party-manager",
            },
            {
              subcategory: "Compliance & Ethics Training",
              type: "item",
              href: "/products/compliance-ethics-training",
            },
            {
              subcategory: "Risk Intellegence Data",
              type: "item",
              href: "/products/risk-intelligence-data",
            },
            {
              subcategory: "Due Diligence",
              type: "item",
              href: "/products/due-diligence",
            },
            {
              subcategory: "Policy Manager",
              type: "item",
              href: "/products/policy-manager",
            },
            {
              subcategory: "Diligent ESG",
              type: "item",
              href: "/products/diligent-esg",
            },
            {
              subcategory: "Diligent Market Intelligence",
              type: "item",
              href: "/solutions/market-intelligence",
            },
            {
              subcategory: "Diligent Community",
              type: "item",
              href: "/products/community",
            },
          ],
        },
        {
          category: "Industries",
          items: [
            {
              subcategory: "Financial Services",
              type: "item",
              href: "/industries/financial-services",
            },
            { subcategory: "Retail", type: "item", href: "/industries/retail" },
            {
              subcategory: "Broadcasting & Telecom",
              type: "item",
              href: "/industries/broadcasting-and-telecommunications",
            },
            {
              subcategory: "Technology",
              type: "item",
              href: "/industries/technology",
            },
            {
              subcategory: "Manufacturing",
              type: "item",
              href: "/industries/manufacturing",
            },
            {
              subcategory: "Healthcare",
              type: "item",
              href: "/industries/healthcare",
            },
            { subcategory: "Energy", type: "item", href: "/industries/energy" },
            {
              subcategory: "Transportation & Warehousing",
              type: "item",
              href: "/industries/transportation-warehousing",
            },
            { subcategory: "Legal", type: "item", href: "/industries/legal" },
            {
              subcategory: "Higher Education",
              type: "item",
              href: "/industries/higher-education",
            },
            {
              subcategory: "Private Equity",
              type: "item",
              href: "/industries/private-equity",
            },
            {
              subcategory: "Real Estate & Construction",
              type: "item",
              href: "/industries/real-estate-and-construction",
            },
            {
              subcategory: "Federal Government",
              type: "item",
              href: "/industries/federal-government",
            },
            {
              subcategory: "State & Local Government",
              type: "item",
              href: "/industries/state-and-local-government",
            },
          ],
        },
        {
          category: "Resources",
          items: [
            { subcategory: "Blog", type: "item", href: "/resources/blog" },
            { subcategory: "Guides", type: "item", href: "/resources/guides" },
            { subcategory: "Videos", type: "item", href: "/resources/videos" },
            {
              subcategory: "Podcasts",
              type: "item",
              href: "/resources/podcasts",
            },
            {
              subcategory: "Research & Reports",
              type: "item",
              href: "/resources/research",
            },
          ],
        },
      ];
      var B = l(50636);
      let _ = (e) => {
          let { label: a, menuOnclick: l } = e,
            [n, i] = (0, d.useState)("");
          return (0, t.jsx)("div", {
            className: "border-b border-brand-divider",
            onClick: l,
            children: (0, t.jsxs)("div", {
              className: "flex flex-row justify-between py-6",
              children: [
                (0, t.jsx)("div", {
                  className: "text-base font-semibold text-light-title",
                  children: a,
                }),
                (0, t.jsx)(o.J, {
                  iconName: "chevron_right",
                  iconColor: "default",
                  iconSize: "default",
                }),
              ],
            }),
          });
        },
        G = (e) => {
          let { label: a, icon: l = "", children: n } = e,
            [i, r] = (0, d.useState)(!1);
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)("div", {
              className: "border-b border-brand-divider",
              children: [
                (0, t.jsxs)("div", {
                  className: "flex flex-row justify-between py-6",
                  onClick: () => r(!i),
                  children: [
                    (0, t.jsxs)("div", {
                      className:
                        "flex cursor-pointer flex-row items-center gap-2 text-base font-semibold ".concat(
                          i ? "text-brand-primary" : "text-light-title"
                        ),
                      children: [
                        (0, t.jsx)(o.J, {
                          iconName: l,
                          iconColor: i ? "primary" : "currentColor",
                          iconSize: "default",
                        }),
                        a,
                      ],
                    }),
                    (0, t.jsx)(o.J, {
                      iconName: i ? "expand_less" : "expand_more",
                      iconColor: "default",
                      iconSize: "default",
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "".concat(
                    i ? "max-h-screen " : "max-h-0",
                    " overflow-hidden transition-[max-height] duration-300"
                  ),
                  children: n,
                }),
              ],
            }),
          });
        },
        D = (e) => {
          let { label: a, href: l, withBackground: n = !1 } = e;
          return (0, t.jsx)("a", {
            href: l,
            children: (0, t.jsx)("div", {
              className:
                "border-b border-brand-divider px-4 py-3 text-sm font-medium text-light-title ".concat(
                  n ? "bg-brand-gray" : "bg-white"
                ),
              children: a,
            }),
          });
        },
        z = (e) => {
          let { categoryLabel: a, onClick: l, close: n } = e;
          return (0, t.jsxs)("div", {
            className:
              "left-0 flex w-full flex-row items-center justify-between bg-white px-4 py-4 shadow",
            children: [
              (0, t.jsx)(o.J, {
                iconName: "chevron_left",
                iconColor: "primary",
                iconSize: "lg",
                onClick: l,
              }),
              (0, t.jsx)("div", {
                className:
                  "absolute left-1/2 -translate-x-1/2 text-sm font-bold uppercase text-light-title",
                children: a,
              }),
              (0, t.jsx)("div", {
                className: "".concat(
                  'w-8 h-0.5 bg-light-icon rotate-45 before:content-[""] before:absolute before:rotate-90 before:w-8 before:h-0.5 before:bg-light-icon ',
                  " "
                ),
                onClick: n,
              }),
            ],
          });
        },
        F = () => {
          let e = (0, x.useRouter)();
          return (0, t.jsxs)("div", {
            className: "rounded-sm bg-brand-gray px-3 py-6",
            children: [
              (0, t.jsxs)("div", {
                className:
                  "mb-6 flex flex-row items-center justify-center text-sm font-semibold text-light-content",
                children: [
                  (0, t.jsx)(u(), {
                    href: "/company/partners",
                    className: "border-r border-brand-divider px-2 py-1.5 ",
                    children: "Partner",
                  }),
                  (0, t.jsx)(u(), {
                    href: "/company/about-us",
                    className: "border-r border-brand-divider px-2 py-1.5 ",
                    children: "Company",
                  }),
                  (0, t.jsx)(u(), {
                    href: "/support",
                    className: "px-2 py-1.5",
                    children: "Support",
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "mb-4 flex flex-row justify-center gap-4",
                children: [
                  (0, t.jsx)(B.Rl, {}),
                  (0, t.jsx)(p.Z, {
                    variant: "secondary",
                    hasIcon: !1,
                    className: "px-5 py-0.5 text-sm",
                    onClick: () => e.push("login"),
                    children: (0, t.jsxs)("div", {
                      className: "flex flex-row items-center gap-1",
                      children: [
                        (0, t.jsx)(o.J, {
                          iconName: "login",
                          iconColor: "primary",
                          iconSize: "sm",
                        }),
                        "Log In",
                      ],
                    }),
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                children: (0, t.jsx)(p.Z, {
                  variant: "primary",
                  className: "w-full",
                  onClick: () => e.push("request-a-demo"),
                  children: "Request a demo",
                }),
              }),
            ],
          });
        },
        O = () =>
          (0, t.jsxs)("div", {
            className: "my-4 flex flex-col rounded-sm bg-brand-gray px-4 py-4",
            children: [
              (0, t.jsx)("div", {
                className:
                  "mb-4 text-xs font-semibold uppercase text-light-icon",
                children: "More",
              }),
              (0, t.jsx)(N, {
                href: "/elevate",
                title: "Diligent Elevate",
                subtitle: "(formerly Modern Governance Summit)",
                isExternal: !0,
              }),
              (0, t.jsx)(N, {
                href: "https://www.diligentinstitute.com",
                title: "Diligent Institute",
                isExternal: !0,
              }),
            ],
          }),
        J = (e) => {
          let { activeCategory: a, goBack: l, close: n } = e,
            i = R.find((e) => e.category === a);
          return (0, t.jsx)("div", {
            className:
              "fixed left-0 top-0 z-[999] h-full w-screen -translate-x-full overflow-scroll bg-white transition-[transform] duration-300 ".concat(
                a && "translate-x-0"
              ),
            children:
              i &&
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(z, {
                    categoryLabel: i.category,
                    onClick: l,
                    close: n,
                  }),
                  (0, t.jsx)("div", {
                    className: "my-4",
                    children: i.items.map((e, a) =>
                      "accordion" === e.type
                        ? (0, t.jsx)(
                            "div",
                            {
                              className: "px-4",
                              children: (0, t.jsx)(G, {
                                label: e.subcategory,
                                icon: e.icon,
                                children:
                                  e.items &&
                                  e.items.map((e, a) =>
                                    (0, t.jsx)(
                                      D,
                                      {
                                        label: e.title,
                                        href: e.link,
                                        withBackground: !0,
                                      },
                                      a + e.title
                                    )
                                  ),
                              }),
                            },
                            a + e.subcategory
                          )
                        : (0, t.jsx)(
                            D,
                            { label: e.subcategory, href: e.href || "#" },
                            a + e.subcategory
                          )
                    ),
                  }),
                ],
              }),
          });
        };
      var V = () => {
          let [e, a] = (0, d.useState)(!1),
            [l, n] = (0, d.useState)(null),
            i =
              'w-8 h-0.5 bg-light-icon rotate-45 before:content-[""] before:absolute before:rotate-90 before:w-8 before:h-0.5 before:bg-light-icon ',
            r = () => {
              e ? s() : o();
            },
            s = () => {
              a(!1), n(null);
            },
            o = () => {
              a(!0);
            };
          return (0, t.jsxs)("div", {
            className:
              "flex w-full flex-row justify-between bg-white lg:hidden",
            children: [
              (0, t.jsxs)("div", {
                className: "flex w-full  justify-between  px-4 py-4 shadow",
                children: [
                  (0, t.jsx)(u(), {
                    href: "/",
                    children: (0, t.jsx)(T(), {
                      src: "/logo/diligent_logo_fullcolor_rgb.svg",
                      alt: "Diligent",
                      width: 103,
                      height: 29,
                      priority: !1,
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: "translate-y-2.5 cursor-pointer",
                    onClick: r,
                    children: (0, t.jsx)("div", {
                      className: "".concat(
                        e
                          ? i
                          : 'w-8 h-0.5 bg-light-icon before:content-[""] before:absolute before:w-8 before:h-0.5 before:bg-light-icon before:translate-y-2.5 ',
                        " transition-all"
                      ),
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className:
                  "fixed left-0 top-0 z-[100] h-screen w-screen -translate-x-full overflow-y-scroll bg-white transition-all "
                    .concat(e && "translate-x-0", " ")
                    .concat(l && "!overflow-hidden"),
                children: [
                  (0, t.jsxs)("div", {
                    className:
                      "mb-4 flex w-full justify-between px-4 py-4 shadow",
                    children: [
                      (0, t.jsx)(u(), {
                        href: "/",
                        children: (0, t.jsx)(T(), {
                          src: "/logo/diligent_logo_fullcolor_rgb.svg",
                          alt: "Diligent",
                          width: 103,
                          height: 29,
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "".concat(i, "  translate-y-3 "),
                        onClick: r,
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "px-4",
                    children: [
                      (0, t.jsx)(F, {}),
                      (0, t.jsx)(_, {
                        label: "Solutions",
                        menuOnclick: () => n("Solutions"),
                      }),
                      (0, t.jsx)(_, {
                        label: "Products",
                        menuOnclick: () => n("Products"),
                      }),
                      (0, t.jsx)(_, {
                        label: "Industries",
                        menuOnclick: () => n("Industries"),
                      }),
                      (0, t.jsx)(_, {
                        label: "Resources",
                        menuOnclick: () => n("Resources"),
                      }),
                      (0, t.jsx)(O, {}),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(J, {
                activeCategory: l,
                goBack: () => n(null),
                close: () => r(),
              }),
            ],
          });
        },
        U = l(4718),
        q = l(22995);
      let W = (e) => fetch(e).then((e) => e.json()),
        H = () => {
          let { data: e, error: a } = (0, m.ZP)("/api/navigation", W),
            [l, n] = (0, d.useState)(!1);
          return a
            ? (0, t.jsx)("div", { children: "failed to load" })
            : e
            ? (0, t.jsx)("div", {
                children:
                  e.text &&
                  (0, t.jsx)("a", {
                    href: e.link.href,
                    className:
                      "flex flex-row items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-1 text-sm transition-all hover:bg-brand-primary/20",
                    onMouseEnter: () => n(!0),
                    onMouseLeave: () => n(!1),
                    children: (0, t.jsxs)("div", {
                      className: "flex items-center gap-1",
                      children: [
                        (0, t.jsx)("span", {
                          className: "font-semibold text-light-title",
                          children: e.text,
                        }),
                        (0, t.jsx)(q.w, { hover: l }),
                      ],
                    }),
                  }),
              })
            : (0, t.jsx)("div", {});
        };
      var K = (e) => {
          let { bgColor: a } = e;
          return (0, t.jsx)("div", {
            className:
              "relative z-10 mx-auto hidden w-full px-8 py-1.5  lg:block ".concat(
                "transparent" === a
                  ? "bg-brand-gray/10 backdrop-blur-lg"
                  : "bg-brand-gray"
              ),
            children: (0, t.jsxs)("div", {
              className:
                "container mx-auto flex flex-row items-center justify-between",
              children: [
                (0, t.jsx)(H, {}),
                (0, t.jsxs)("div", {
                  className:
                    "flex flex-row items-center justify-end text-sm text-light-content",
                  children: [
                    (0, t.jsx)("a", {
                      href: "/company/partners",
                      className:
                        "relative border-r border-brand-divider px-2 py-1.5 hover:text-light-icon",
                      children: "Partner",
                    }),
                    (0, t.jsx)("a", {
                      href: "/company/about-us",
                      className:
                        "relative border-r border-brand-divider px-2 py-1.5 hover:text-light-icon",
                      children: "Company",
                    }),
                    (0, t.jsx)("a", {
                      href: "/support",
                      className:
                        "relative mr-2 border-r border-brand-divider px-2 py-1.5 hover:text-light-icon",
                      children: "Support",
                    }),
                    (0, t.jsxs)("a", {
                      href: "/login",
                      className:
                        "relative mr-2 flex items-center gap-1 px-2 py-1.5 text-brand-primary hover:text-light-icon",
                      children: [
                        (0, t.jsx)(U._fJ, { color: "currentColor", size: 16 }),
                        (0, t.jsx)("span", { children: "Login" }),
                      ],
                    }),
                    (0, t.jsx)(B.Rl, {}),
                  ],
                }),
              ],
            }),
          });
        },
        Z = (e) => {
          let { data: a, bgColor: l } = e;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(K, { bgColor: l }),
              (0, t.jsx)(L, { bgColor: l }),
              (0, t.jsx)(V, {}),
              a && (0, t.jsx)(h, { onlyMobile: !0 }),
            ],
          });
        },
        Y = l(85478),
        Q = l(53601);
      let X = (e) => {
          let {
              children: a,
              seo: l,
              simpleHeader: n,
              navButton: i,
              bgColor: r,
            } = e,
            { asPath: o } = (0, x.useRouter)(),
            [c, u] = (0, d.useState)(!1);
          return (
            (0, d.useEffect)(() => {
              o.includes("/elevate") && u(!0);
            }, [o]),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(Y.H, { ...l }),
                n || c
                  ? (0, t.jsx)(Q.Ql, { navButton: i })
                  : (0, t.jsx)(Z, { bgColor: r }),
                (0, t.jsx)("main", { children: a }),
                (0, t.jsx)(s.Z, {}),
              ],
            })
          );
        },
        $ = (e) => {
          let { children: a, seo: l, page: n } = e,
            i = ((e) => {
              switch (e) {
                case "about-us":
                  return "About us";
                case "careers":
                  return "Careers";
                case "awards":
                  return "Awards";
                case "newsroom":
                  return "Newsroom";
                case "contact-us":
                  return "Contact us";
                default:
                  return null;
              }
            })(n);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Y.H, { ...l }),
              (0, t.jsx)(Z, {}),
              (0, t.jsx)(r, { activePage: i }),
              (0, t.jsx)("main", { children: a }),
              (0, t.jsx)(s.Z, {}),
            ],
          });
        };
    },
    85478: function (e, a, l) {
      "use strict";
      l.d(a, {
        H: function () {
          return o;
        },
      });
      var t = l(52322),
        n = l(9008),
        i = l.n(n),
        r = l(11163),
        s = l(34406);
      let o = (e) => {
        var a, l;
        let {
            title: n = "A Modern Governance Company",
            description:
              o = "Diligent, a modern governance company, is the only comprehensive governance software provider featuring tools to improve and simplify modern day governance.",
            openGraph: c,
            noIndex: u,
            cannonical: d,
          } = e,
          { asPath: m } = (0, r.useRouter)(),
          b =
            (null == c
              ? void 0
              : null === (l = c.images) || void 0 === l
              ? void 0
              : null === (a = l[0]) || void 0 === a
              ? void 0
              : a.url) ||
            "https://cdn.sanity.io/images/33u1mixi/production/c0c3232991cf79b73d98cf58204d28943cfea226-1200x630.png?w=1200&fit=max&auto=format",
          h = "true" === s.env.NEXT_PUBLIC_NOINDEX || u || !1;
        return (0, t.jsxs)(i(), {
          children: [
            (0, t.jsx)("title", { children: n }),
            (0, t.jsx)("meta", { name: "description", content: o }),
            (0, t.jsx)("meta", {
              name: "robots",
              content: h ? "noindex, nofollow" : "index, follow",
            }),
            (0, t.jsx)("link", {
              rel: "cannonical",
              href: d || "https://www.diligent.com".concat(m),
            }),
            (0, t.jsx)("meta", {
              property: "og:type",
              content: (null == c ? void 0 : c.type) || "website",
            }),
            (0, t.jsx)("meta", {
              property: "og:title",
              content: (null == c ? void 0 : c.title) || n,
            }),
            (0, t.jsx)("meta", {
              property: "og:description",
              content: (null == c ? void 0 : c.description) || o,
            }),
            (0, t.jsx)("meta", {
              property: "og:url",
              content:
                (null == c ? void 0 : c.url) ||
                "https://diligent.com".concat(m),
            }),
            (null == c ? void 0 : c.images) &&
              c.images.map((e, a) =>
                (0, t.jsx)("meta", { property: "og:image", content: e.url }, a)
              ),
            !(null == c ? void 0 : c.images) &&
              (0, t.jsx)("meta", { property: "og:image", content: b }),
            (0, t.jsx)("meta", { property: "og:image:width", content: "1200" }),
            (0, t.jsx)("meta", { property: "og:image:height", content: "630" }),
          ],
        });
      };
    },
    92881: function (e, a, l) {
      "use strict";
      l.d(a, {
        hs: function () {
          return o;
        },
        Ts: function () {
          return g;
        },
        al: function () {
          return p;
        },
      });
      var t = l(52322),
        n = l(60829),
        i = l(57937),
        r = l(55258),
        s = l(98174);
      let o = (e) => {
        let { headline: a, description: l, cta: o, className: c } = e;
        return (0, t.jsx)("div", {
          className: "flex flex-col gap-6",
          children: (0, t.jsxs)("div", {
            className: (0, s.m)("flex flex-col", c),
            children: [
              (0, t.jsx)("div", {
                className: "title",
                children: (0, t.jsx)(r.s, {
                  component: a.component,
                  color: a.color || "dark-title",
                  fontWeight: a.fontWeight,
                  text: a.text,
                  highlights: a.highlights,
                  className: "pb-2",
                }),
              }),
              (0, t.jsx)("div", {
                className: "description",
                children: (0, t.jsx)(r.L, {
                  component: "p",
                  color: l.color || "dark-content",
                  fontWeight: "normal",
                  className: "pb-4",
                  children: l.text,
                }),
              }),
              o &&
                (0, t.jsx)("div", {
                  className: "cta",
                  children:
                    "link" === o.type
                      ? (0, t.jsx)(i.r, {
                          href: null == o ? void 0 : o.link,
                          intent: "light",
                          arrow: !0,
                          children: null == o ? void 0 : o.label,
                        })
                      : (0, t.jsx)(n.M, {
                          href: null == o ? void 0 : o.link,
                          intent: (null == o ? void 0 : o.intent) || "primary",
                          arrow: !0,
                          children: null == o ? void 0 : o.label,
                        }),
                }),
            ],
          }),
        });
      };
      var c = l(50636),
        u = l(34575),
        d = l(68628),
        m = l(61335),
        b = l(2784);
      let h = (0, m.j)(["flex flex-col justify-center gap-6"], {
          variants: {
            centered: {
              true: "mx-auto items-center justify-center text-center md:max-w-md lg:max-w-3xl",
              false:
                "mx-auto max-w-xs items-start justify-center text-center md:max-w-lg lg:mx-0 lg:max-w-[50%] lg:justify-start lg:text-left",
            },
          },
          defaultVariants: { centered: !1 },
        }),
        g = (e) => {
          let {
              label: a,
              heroText: l,
              heroCta: i,
              centered: o,
              className: m,
              eventHero: g,
              darkMode: v,
            } = e,
            [p, x] = (0, b.useState)(!1);
          return (
            (0, b.useEffect)(() => {
              a.text && x(!0);
            }, [a]),
            (0, t.jsxs)("div", {
              className: (0, s.m)(h({ centered: o }), m),
              children: [
                (0, t.jsxs)("div", {
                  className: "w-full",
                  children: [
                    p &&
                      (0, t.jsx)(c.__, {
                        className: "pb-2 ".concat(
                          o
                            ? "mx-auto justify-center"
                            : "justify-center lg:justify-start"
                        ),
                        text: a.text,
                        icon: a.icon ? a.icon.name : void 0,
                      }),
                    (0, t.jsx)(d.YI, {
                      value: l.title,
                      components: v ? c.IK : c.YD,
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  children: l.richText
                    ? (0, t.jsx)(d.YI, {
                        value: l.richText,
                        components: v ? c.IK : c.BJ,
                      })
                    : (0, t.jsx)(r.L, {
                        component: "p",
                        color: v ? "light-content" : "dark-content",
                        children: l.subtitle,
                      }),
                }),
                (0, t.jsxs)("div", {
                  className: "w-full",
                  children: [
                    g &&
                      (0, t.jsx)(n.M, {
                        intent: "primary",
                        arrow: !0,
                        className: "",
                        onClick: (e) => {
                          e.preventDefault(),
                            (0, u.HZ)("#register-section", 100);
                        },
                        children: e.onDemand
                          ? "Watch Online"
                          : "Register for free",
                      }),
                    i &&
                      i.map((e, a) =>
                        (0, t.jsx)(
                          n.M,
                          {
                            href: e.ctaLink,
                            intent: "button" === e.ctaType ? "primary" : "link",
                            children: e.ctaLabel,
                          },
                          a
                        )
                      ),
                  ],
                }),
              ],
            })
          );
        },
        v = (0, m.j)(["flex flex-col justify-center gap-6 pb-12 pt-16"], {
          variants: {
            bg: {
              default: "bg-brand-white",
              gray: "bg-brand-gray-1",
              dark: "bg-brand-dim",
            },
            centered: {
              true: "mx-auto w-full items-center justify-center text-center",
              false:
                "mx-auto max-w-xs items-start justify-center text-center md:max-w-lg lg:mx-0 lg:max-w-[50%] lg:justify-start lg:text-left",
            },
          },
          defaultVariants: { bg: "default", centered: !1 },
        }),
        p = (e) => {
          let { bg: a, centered: l, className: i, data: o } = e,
            { label: u, text: m, logos: h, cta: g, link: p } = o,
            [x, f] = (0, b.useState)(!1);
          return (
            (0, b.useEffect)(() => {
              u && u.text && f(!0);
            }, [u]),
            (0, t.jsx)("div", {
              className: (0, s.m)(v({ bg: a, centered: l }), i),
              children: (0, t.jsxs)("div", {
                className: "".concat(l && "max-w-5xl"),
                children: [
                  (0, t.jsxs)("div", {
                    className: "w-full pb-5",
                    children: [
                      x &&
                        (0, t.jsx)(c.__, {
                          className: "pb-2 ".concat(
                            l
                              ? "mx-auto justify-center"
                              : "justify-center lg:justify-start"
                          ),
                          text: (null == u ? void 0 : u.text) || "",
                          icon: (null == u ? void 0 : u.icon)
                            ? u.icon.name
                            : void 0,
                        }),
                      (null == m ? void 0 : m.titleRichText)
                        ? (0, t.jsx)(d.YI, {
                            value: null == m ? void 0 : m.titleRichText,
                            components: c.YD,
                          })
                        : (0, t.jsx)(r.L, {
                            component: "h3",
                            as: "h2",
                            fontWeight: "semibold",
                            color: "dark-title",
                            children: (null == m ? void 0 : m.title) || "",
                          }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    children: (null == m ? void 0 : m.richText)
                      ? (0, t.jsx)(d.YI, {
                          value: null == m ? void 0 : m.richText,
                          components: c.BJ,
                        })
                      : (0, t.jsx)(r.L, {
                          component: "p",
                          color: "dark-content",
                          children: null == m ? void 0 : m.subtitle,
                        }),
                  }),
                  h &&
                    (0, t.jsx)("div", {
                      className:
                        "mb-4 flex flex-wrap items-center justify-evenly gap-4 pb-8 pt-5 md:flex-row",
                      children:
                        null == h
                          ? void 0
                          : h.map((e, a) =>
                              (0, t.jsx)(
                                "div",
                                {
                                  children: (0, t.jsx)(c.p9, {
                                    image: e.image,
                                    alt: e.alt || "Image ".concat(a),
                                    width: 200,
                                    height: 200,
                                    className: " max-h-[80px] max-w-[120px]",
                                  }),
                                },
                                e.id + a
                              )
                            ),
                    }),
                  (null == g ? void 0 : g.ctaLink) &&
                    (0, t.jsx)("div", {
                      className: "w-full pt-7",
                      children: (0, t.jsx)(n.M, {
                        href: g.ctaLink,
                        intent: "button" === g.ctaType ? "primary" : "link",
                        children: g.ctaLabel,
                      }),
                    }),
                ],
              }),
            })
          );
        };
    },
    46415: function (e, a, l) {
      "use strict";
      l.d(a, {
        P: function () {
          return u;
        },
        a: function () {
          return g;
        },
      });
      var t = l(52322),
        n = l(13684),
        i = l(50636),
        r = l(34575),
        s = l(41664),
        o = l.n(s),
        c = l(2784);
      let u = (e) => {
        var a, l, s;
        let [u, d] = (0, c.useState)(0),
          [m, b] = (0, c.useState)(""),
          [h, g] = (0, c.useState)(""),
          [v, p] = (0, c.useState)(!1);
        return (
          (0, c.useEffect)(() => {
            d((0, r.iN)(e.content, e.title)), b((0, n.h)(e.content));
          }, [e.content]),
          (0, c.useEffect)(() => {
            g(
              new Date(e.dateTime || "").toLocaleDateString("en-US", {
                timeZone: "UTC",
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            );
          }, [e.dateTime]),
          (0, t.jsx)("article", {
            className: "group flex flex-col items-start justify-between",
            onMouseEnter: () => p(!0),
            onMouseLeave: () => p(!1),
            children: (0, t.jsxs)(o(), {
              href: e.href || "#",
              className: "w-full",
              children: [
                (0, t.jsxs)("div", {
                  className: "relative w-full",
                  children: [
                    (0, t.jsx)(i.p9, {
                      image: e.image,
                      alt: "",
                      className:
                        "aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover transition-all sm:aspect-[2/1] lg:aspect-[3/2] ",
                      width: 300,
                      height: 200,
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "className='flex absolute inset-0 flex-col items-start justify-between  rounded-lg ring-1 ring-inset ring-gray-900/10 transition-all",
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "max-w-full",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "mt-8 flex items-center gap-x-2 text-xs",
                      children: [
                        (0, t.jsx)("time", {
                          dateTime: h,
                          className: "text-gray-500",
                          children: h,
                        }),
                        (0, t.jsx)("div", {
                          className: "text-gray-500",
                          children: "•",
                        }),
                        (0, t.jsxs)("div", {
                          className: "text-gray-500",
                          children: [u, " min read"],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "group relative",
                      children: [
                        (0, t.jsxs)("h3", {
                          className:
                            "mt-3 line-clamp-2 text-lg font-semibold leading-6 text-brand-dim transition-colors group-hover:text-brand-primary",
                          children: [
                            (0, t.jsx)("span", {
                              className: "absolute inset-0",
                            }),
                            e.title,
                          ],
                        }),
                        (0, t.jsx)("p", {
                          className:
                            "mt-5 line-clamp-3 text-sm leading-6 text-gray-600",
                          children: m,
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "relative mt-8 flex items-center gap-x-4",
                      children: [
                        (0, t.jsx)(i.p9, {
                          image:
                            null === (a = e.author) || void 0 === a
                              ? void 0
                              : a.image,
                          alt: "",
                          className: "h-10 w-10 rounded-full bg-gray-100",
                          width: 40,
                          height: 40,
                        }),
                        (0, t.jsxs)("div", {
                          className: "text-sm leading-6",
                          children: [
                            (0, t.jsxs)("p", {
                              className: "font-semibold text-gray-900",
                              children: [
                                (0, t.jsx)("span", {
                                  className: "absolute inset-0",
                                }),
                                null === (l = e.author) || void 0 === l
                                  ? void 0
                                  : l.name,
                              ],
                            }),
                            (0, t.jsx)("p", {
                              className: "text-gray-600",
                              children:
                                null === (s = e.author) || void 0 === s
                                  ? void 0
                                  : s.title,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
      var d = l(60829),
        m = l(54794),
        b = l(25675),
        h = l.n(b);
      let g = (e) => {
        let { title: a, description: l, cta: n, logos: i, centered: r } = e;
        return (0, t.jsxs)("div", {
          className:
            "flex flex-col items-center overflow-hidden rounded-xl border border-gray-200 px-4 py-5",
          children: [
            (0, t.jsx)("div", {
              className: "",
              children: (0, t.jsx)(m.L, {
                component: "h5",
                color: "dark-title",
                fontWeight: "semibold",
                className: "pb-3 text-center",
                children: a,
              }),
            }),
            (0, t.jsxs)("div", {
              className: "flex h-full flex-col justify-between",
              children: [
                l &&
                  (0, t.jsx)("div", {
                    className: "pb-8",
                    children: (0, t.jsx)(m.L, {
                      component: "p",
                      color: "dark-content",
                      className: "".concat(r ? "text-center" : "text-left"),
                      children: l,
                    }),
                  }),
                n &&
                  n.label &&
                  (0, t.jsx)("div", {
                    className: "border-t border-gray-200",
                    children: (0, t.jsx)(d.M, {
                      color: "brand-primary",
                      intent: "primary" === n.type ? "primary" : "link",
                      size: "md",
                      fullWidth: !0,
                      href: n.link,
                      children: n.label,
                    }),
                  }),
                i &&
                  (0, t.jsx)("div", {
                    className: "border-t border-gray-200",
                    children: (0, t.jsx)("div", {
                      className:
                        "grid grid-cols-4 items-center justify-center gap-3 pt-3",
                      children: i.map((e) =>
                        (0, t.jsx)(
                          "div",
                          {
                            className: "",
                            children: (0, t.jsx)(h(), {
                              className: "max-h-12 w-full object-contain",
                              src: e.src,
                              alt: e.alt || "".concat(e.name, " logo") || 0,
                              width: 80,
                              height: 80,
                            }),
                          },
                          e.id
                        )
                      ),
                    }),
                  }),
              ],
            }),
          ],
        });
      };
    },
    53601: function (e, a, l) {
      "use strict";
      l.d(a, {
        Ln: function () {
          return y;
        },
        PI: function () {
          return t.P;
        },
        TG: function () {
          return w;
        },
        Ql: function () {
          return m;
        },
      });
      var t = l(46415),
        n = l(52322),
        i = l(60829),
        r = l(25675),
        s = l.n(r),
        o = l(41664),
        c = l.n(o),
        u = l(11163),
        d = l(2784);
      let m = (e) => {
        let { navButton: a } = e,
          [l, t] = (0, d.useState)(!1),
          [r, o] = (0, d.useState)(!0),
          m = (0, u.useRouter)();
        return (
          (0, d.useEffect)(() => {
            let e = () => {
              window.scrollY > 40 ? (t(!0), o(!1)) : (t(!1), o(!0));
            };
            return (
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            );
          }, []),
          (0, n.jsx)("div", {
            className:
              "sticky top-0 z-[100] mx-auto flex w-full items-center justify-between bg-white px-4 py-4 transition-shadow duration-200 ".concat(
                l && "shadow-nav"
              ),
            children: (0, n.jsx)("div", {
              className:
                "container mx-auto items-center justify-between lg:flex",
              children: (0, n.jsxs)("div", {
                className: "flex w-full justify-between",
                children: [
                  (0, n.jsx)(c(), {
                    href: "/",
                    children: (0, n.jsx)(s(), {
                      src: "/logo/diligent_logo_fullcolor_rgb.svg",
                      alt: "Diligent",
                      width: 157,
                      height: 44,
                      className: "mr-8",
                    }),
                  }),
                  "/elevate" === m.asPath &&
                    (0, n.jsx)("div", {
                      className: "hidden lg:block",
                      children: (0, n.jsx)(i.M, {
                        href: "https://cvent.me/vrrxe3",
                        intent: "secondary",
                        children: "Register now",
                      }),
                    }),
                  (null == a ? void 0 : a.link) &&
                    (0, n.jsx)("div", {
                      className: "hidden lg:block",
                      children: (0, n.jsx)(i.M, {
                        href: a.link,
                        intent: "secondary",
                        children: a.label,
                      }),
                    }),
                ],
              }),
            }),
          })
        );
      };
      var b = l(50932),
        h = l(854),
        g = l(50636),
        v = l(92881),
        p = l(15316),
        x = l(75452),
        f = l(34575);
      let y = (e) => {
        let {
            heroText: a,
            heroLayout: l,
            ctaPlacement: t = !1,
            heroBackgroundImage: i,
            eventHero: r,
            backgroundColor: s,
            label: o,
            asset: c,
            image: u,
            imageAlt: m,
            heroCta: y,
          } = e.data,
          j = (0, p.w)(),
          [w, N] = (0, d.useState)(!1);
        return (
          (0, d.useEffect)(() => {
            ("image" === c.assetType ||
              ((null === c.assetType || "none" === c.assetType) && u)) &&
              N(!0);
          }, [c.assetType, u]),
          (0, n.jsxs)("div", {
            className:
              "relative w-full bg-cover bg-center bg-no-repeat ".concat(
                "black" === s && "bg-black"
              ),
            style: {
              backgroundImage:
                !j && i ? "url(".concat((0, x.i)(i.image).url(), ")") : "none",
            },
            children: [
              j &&
                (0, n.jsx)("div", {
                  className:
                    "absolute -z-10 h-[85%] w-full origin-top-left -skew-y-3 overflow-hidden border-b-1 border-brand-gray-2 bg-brand-gray-1",
                }),
              (0, n.jsx)("div", {
                className: "container",
                children: (0, n.jsxs)(g.A0, {
                  direction: l || "ltr",
                  justify: "between",
                  align: "form" === c.assetType ? "start" : "center",
                  children: [
                    (0, n.jsx)(v.Ts, {
                      centered: "ttb" === l,
                      label: o,
                      heroText: a,
                      heroCta: "ttb" === l && t ? void 0 : y,
                      darkMode: "black" === s,
                    }),
                    w &&
                      (0, n.jsx)("div", {
                        className: "flex justify-center",
                        children: (0, n.jsx)(g.p9, {
                          image: c.image || u,
                          alt: c.imageAlt || m,
                          width: 500,
                          height: 300,
                          shadow: !0,
                        }),
                      }),
                    "form" === c.assetType &&
                      (0, n.jsx)(h.D, {
                        formId: c.formId || "12556",
                        buttonText: c.formCtaText || "Submit",
                        formAction: c.formAction || null,
                      }),
                    "video" === c.assetType &&
                      (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)(g.g3, { videoUrl: c.videoUrl }),
                      }),
                    r &&
                      (0, n.jsx)(b.M, {
                        intent: "primary",
                        arrow: !0,
                        className: "",
                        onClick: (e) => {
                          e.preventDefault(),
                            (0, f.HZ)("#register-section", 100);
                        },
                        children: "Register",
                      }),
                    "ttb" === l &&
                      t &&
                      y.map((e, a) =>
                        (0, n.jsx)(
                          b.M,
                          {
                            href: e.ctaLink,
                            intent: "button" === e.ctaType ? "primary" : "link",
                            children: e.ctaLabel,
                          },
                          a
                        )
                      ),
                  ],
                }),
              }),
            ],
          })
        );
      };
      var j = l(55258);
      let w = () =>
        (0, n.jsxs)("div", {
          className: "relative isolate px-6 pt-14 lg:px-8",
          children: [
            (0, n.jsx)("div", {
              className:
                "absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80",
              "aria-hidden": "true",
              children: (0, n.jsx)("div", {
                className:
                  "relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] animate-moveSlowToBottom bg-gradient-to-tr from-brand-primary to-brand-secondary opacity-30 sm:left-[calc(10%-30rem)] sm:w-[72.1875rem]",
                style: {
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                },
              }),
            }),
            (0, n.jsxs)("div", {
              className: "mx-auto max-w-2xl py-32 sm:py-48 lg:py-56",
              children: [
                (0, n.jsx)("div", {
                  className: "hidden sm:mb-8 sm:flex sm:justify-center",
                  children: (0, n.jsxs)("div", {
                    className:
                      "relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20",
                    children: [
                      "Find out more about modern governance and Diligent One",
                      " ",
                      (0, n.jsx)(i.M, {
                        href: "/platform/diligent-one",
                        intent: "link",
                        size: "sm",
                        className: "p-0 px-1",
                        children: "Read more",
                      }),
                    ],
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, n.jsx)(j.s, {
                      component: "h1",
                      fontWeight: "bold",
                      text: "Modern Governance 100",
                      color: "dark-title",
                      highlights: ["100"],
                    }),
                    (0, n.jsx)(j.L, {
                      component: "h4",
                      color: "dark-content",
                      className: "mt-6",
                      children: "Recognizing today's modern leaders",
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "mt-10 flex items-center justify-center gap-x-6",
                      children: (0, n.jsx)(i.M, {
                        href: "/company/newsroom/diligent-announces-2023-modern-governance-100-honorees",
                        intent: "link",
                        children: "Read the press release",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className:
                "absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]",
              "aria-hidden": "true",
              children: (0, n.jsx)("div", {
                className:
                  "relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 animate-moveSlowToTop bg-gradient-to-tr from-brand-red-1 to-brand-red-7 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]",
                style: {
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                },
              }),
            }),
            (0, n.jsx)("div", {
              className:
                "absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]",
              "aria-hidden": "true",
              children: (0, n.jsx)("div", {
                className:
                  "relative left-[calc(0%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 animate-moveSlowToTop bg-gradient-to-tr from-brand-red-6 to-brand-red-7 opacity-30 sm:left-[calc(0%+36rem)] sm:w-[72.1875rem]",
                style: {
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                },
              }),
            }),
            (0, n.jsx)(c(), {
              href: "#navigation",
              onClick: (e) => {
                e.preventDefault(), (0, f.HZ)("#navigation", 100);
              },
              children: (0, n.jsx)("svg", {
                className:
                  "absolute bottom-5 left-1/2 -ml-5 h-10 w-10 animate-bounceSlow",
                children: (0, n.jsx)("path", {
                  "stroke-linecap": "round",
                  d: "M0 0 L20 22 L40 0",
                  className: "fill-none stroke-brand-primary stroke-2",
                }),
              }),
            }),
          ],
        });
    },
    83422: function (e, a, l) {
      "use strict";
      l.d(a, {
        y: function () {
          return s;
        },
      });
      var t = l(31089),
        n = l(44004),
        i = l.n(n),
        r = l(2784);
      let s = (e) => {
        let [a, l] = (0, r.useState)(!1),
          n = (0, r.useMemo)(() => i()("US").getData(), []),
          s = (0, r.useMemo)(() => i()("CA").getData(), []),
          o = (0, r.useMemo)(() => i()("AU").getData(), []),
          [c, u] = (0, r.useState)(!1),
          [d, m] = (0, r.useState)([]),
          [b, h] = (0, r.useState)(null),
          g = (0, r.useMemo)(() => (0, t.Z)("highRiskCountries").getData(), []);
        return (
          (0, r.useEffect)(() => {
            var a;
            ((a = e.value), g.some((e) => e.value === a)) ? l(!0) : l(!1);
          }, [e, g]),
          (0, r.useEffect)(() => {
            (null == e ? void 0 : e.value) === "United States"
              ? m(n)
              : (null == e ? void 0 : e.value) === "Canada"
              ? m(s)
              : (null == e ? void 0 : e.value) === "Australia"
              ? m(o)
              : m([]);
          }, [e, n, s, o]),
          (0, r.useEffect)(() => {
            d.length > 0 ? u(!0) : u(!1);
          }, [d]),
          {
            showOptIn: a,
            showRegion: c,
            regionOptions: d,
            region: b,
            setRegion: h,
          }
        );
      };
    },
    37862: function (e, a, l) {
      "use strict";
      l.d(a, {
        P: function () {
          return n;
        },
      });
      var t = l(2784);
      let n = () => {
        let [e, a] = (0, t.useState)(null),
          [l, n] = (0, t.useState)(""),
          [i, r] = (0, t.useState)(!1),
          [s, o] = (0, t.useState)(!1);
        return (
          (0, t.useEffect)(() => {
            if (!l) return;
            let e = document.createElement("script");
            return (
              (e.src = "//learn.diligent.com/js/forms2/js/forms2.min.js"),
              (e.async = !0),
              (e.onload = () => {
                r(!0);
              }),
              (e.onerror = () => {
                o(!0);
              }),
              document.body.appendChild(e),
              () => {
                document.body.removeChild(e);
              }
            );
          }, [l]),
          (0, t.useEffect)(() => {
            i &&
              window.MktoForms2.loadForm(
                "//learn.diligent.com",
                "946-AVX-095",
                l
              );
          }, [i, l]),
          (0, t.useEffect)(() => {
            i && a(window.MktoForms2.getForm(l));
          }, [i]),
          { form: e, setFormId: n, formLoaded: i, formLoadedError: s }
        );
      };
    },
    5600: function (e, a, l) {
      "use strict";
      l.d(a, {
        X: function () {
          return t;
        },
      });
      let t = (e, a) => {
        let l = window.sessionStorage.getItem(e);
        return l ? JSON.parse(l) : a;
      };
    },
    44004: function (e, a, l) {
      "use strict";
      let t = (e) => {
        switch (e) {
          case "US":
            return l(77010);
          case "CA":
            return l(29582);
          case "AU":
            return l(68020);
          default:
            return [];
        }
      };
      class n {
        getValue(e) {
          return this.labelMap[e.toLowerCase()];
        }
        getLabel(e) {
          return this.valueMap[e.toLowerCase()];
        }
        getLabels() {
          return this.data.map((e) => e.label);
        }
        getValues() {
          return this.data.map((e) => e.value);
        }
        getLabelList() {
          return this.labelMap;
        }
        getValueList() {
          return this.valueMap;
        }
        getData() {
          return this.data;
        }
        setLabel(e, a) {
          return (
            this.data.forEach((l) => {
              l.value === e &&
                ((l.label = a),
                (this.valueMap[l.value.toLocaleLowerCase()] = l.label));
            }),
            this
          );
        }
        setEmpty(e) {
          return (
            this.data.unshift({ value: "", label: e || "" }),
            (this.valueMap[""] = e || ""),
            (this.labelMap[e || ""] = ""),
            this
          );
        }
        constructor(e) {
          (this.data = t(e)),
            (this.labelMap = {}),
            (this.valueMap = {}),
            this.data.forEach((e) => {
              (this.labelMap[e.label] = e.value),
                (this.valueMap[e.value] = e.label);
            });
        }
      }
      e.exports = (e) => new n(e);
    },
    34107: function (e) {
      e.exports = { "nav-wrapper": "style_nav-wrapper__pbuf9" };
    },
    31089: function (e, a, l) {
      "use strict";
      l.d(a, {
        Z: function () {
          return v;
        },
      });
      var t = JSON.parse(
          '[{"value":"United States","label":"United States"},{"value":"United Kingdom","label":"United Kingdom"},{"value":"Australia","label":"Australia"},{"value":"Canada","label":"Canada"},{"value":"Afghanistan","label":"Afghanistan"},{"value":"Aland Islands","label":"Aland Islands"},{"value":"Albania","label":"Albania"},{"value":"Algeria","label":"Algeria"},{"value":"Andorra","label":"Andorra"},{"value":"Angola","label":"Angola"},{"value":"Anguilla","label":"Anguilla"},{"value":"Antarctica","label":"Antarctica"},{"value":"Antigua and Barbuda","label":"Antigua and Barbuda"},{"value":"Argentina","label":"Argentina"},{"value":"Armenia","label":"Armenia"},{"value":"Aruba","label":"Aruba"},{"value":"Austria","label":"Austria"},{"value":"Azerbaijan","label":"Azerbaijan"},{"value":"Bahamas","label":"Bahamas"},{"value":"Bahrain","label":"Bahrain"},{"value":"Bangladesh","label":"Bangladesh"},{"value":"Barbados","label":"Barbados"},{"value":"Belarus","label":"Belarus"},{"value":"Belgium","label":"Belgium"},{"value":"Belize","label":"Belize"},{"value":"Benin","label":"Benin"},{"value":"Bermuda","label":"Bermuda"},{"value":"Bhutan","label":"Bhutan"},{"value":"Bolivia","label":"Bolivia"},{"value":"Bonaire, Sint Eustatius and Saba","label":"Bonaire, Sint Eustatius and Saba"},{"value":"Bosnia and Herzegovina","label":"Bosnia and Herzegovina"},{"value":"Botswana","label":"Botswana"},{"value":"Bouvet Island","label":"Bouvet Island"},{"value":"Brazil","label":"Brazil"},{"value":"British Indian Ocean Territory","label":"British Indian Ocean Territory"},{"value":"Brunei Darussalam","label":"Brunei Darussalam"},{"value":"Bulgaria","label":"Bulgaria"},{"value":"Burkina Faso","label":"Burkina Faso"},{"value":"Burundi","label":"Burundi"},{"value":"Cambodia","label":"Cambodia"},{"value":"Cameroon","label":"Cameroon"},{"value":"Canary Island","label":"Canary Island"},{"value":"Cape Verde","label":"Cape Verde"},{"value":"Cayman Islands","label":"Cayman Islands"},{"value":"Central African Republic","label":"Central African Republic"},{"value":"Chad","label":"Chad"},{"value":"Chile","label":"Chile"},{"value":"China","label":"China"},{"value":"Christmas Island","label":"Christmas Island"},{"value":"Cocos (Keeling) Islands","label":"Cocos (Keeling) Islands"},{"value":"Colombia","label":"Colombia"},{"value":"Comoros","label":"Comoros"},{"value":"Congo","label":"Congo"},{"value":"Costa Rica","label":"Costa Rica"},{"value":"Cote d\'Ivoire","label":"Cote d\'Ivoire"},{"value":"Croatia","label":"CroatiaHrvatska"},{"value":"Cuba","label":"Cuba"},{"value":"Cura\xe7ao","label":"Cura\xe7ao"},{"value":"Cyprus","label":"Cyprus"},{"value":"Czech Republic","label":"Czech Republic"},{"value":"Denmark","label":"Denmark"},{"value":"Djibouti","label":"Djibouti"},{"value":"Dominica","label":"Dominica"},{"value":"Dominican Republic","label":"Dominican Republic"},{"value":"Ecuador","label":"Ecuador"},{"value":"Egypt","label":"Egypt"},{"value":"El Salvador","label":"El Salvador"},{"value":"Equatorial Guinea","label":"Equatorial Guinea"},{"value":"Eritrea","label":"Eritrea"},{"value":"Estonia","label":"Estonia"},{"value":"Ethiopia","label":"Ethiopia"},{"value":"Falkland Islands (Malvinas)","label":"Falkland Islands (Malvinas)"},{"value":"Faroe Islands","label":"Faroe Islands"},{"value":"Fiji","label":"Fiji"},{"value":"Finland","label":"Finland"},{"value":"France","label":"France"},{"value":"French Guiana","label":"French Guiana"},{"value":"French Polynesia","label":"French Polynesia"},{"value":"French Southern Territories","label":"French Southern Territories"},{"value":"Gabon","label":"Gabon"},{"value":"Gambia","label":"Gambia"},{"value":"Georgia","label":"Georgia"},{"value":"Germany","label":"Germany"},{"value":"Ghana","label":"Ghana"},{"value":"Gibraltar","label":"Gibraltar"},{"value":"Greece","label":"Greece"},{"value":"Greenland","label":"Greenland"},{"value":"Grenada","label":"Grenada"},{"value":"Guadeloupe","label":"Guadeloupe"},{"value":"Guam","label":"Guam"},{"value":"Guatemala","label":"Guatemala"},{"value":"Guernsey","label":"Guernsey"},{"value":"Guinea","label":"Guinea"},{"value":"Guinea-Bissau","label":"Guinea-Bissau"},{"value":"Guyana","label":"Guyana"},{"value":"Haiti","label":"Haiti"},{"value":"Honduras","label":"Honduras"},{"value":"Hong Kong","label":"Hong Kong"},{"value":"Hungary","label":"Hungary"},{"value":"Iceland","label":"Iceland"},{"value":"India","label":"India"},{"value":"Indonesia","label":"Indonesia"},{"value":"Iran","label":"Iran, Islamic Republic of"},{"value":"Iraq","label":"Iraq"},{"value":"Ireland","label":"Ireland"},{"value":"Isle of Man","label":"Isle of Man"},{"value":"Israel","label":"Israel"},{"value":"Italy","label":"Italy"},{"value":"Jamaica","label":"Jamaica"},{"value":"Japan","label":"Japan"},{"value":"Jersey","label":"Jersey"},{"value":"Jordan","label":"Jordan"},{"value":"Kazakhstan","label":"Kazakhstan"},{"value":"Kenya","label":"Kenya"},{"value":"Kiribati","label":"Kiribati"},{"value":"Kuwait","label":"Kuwait"},{"value":"Kyrgyzstan","label":"Kyrgyzstan"},{"value":"Lao","label":"Lao People\'s Democratic Republic"},{"value":"Latvia","label":"Latvia"},{"value":"Lebanon","label":"Lebanon"},{"value":"Lesotho","label":"Lesotho"},{"value":"Liberia","label":"Liberia"},{"value":"Libyan Arab Jamahiriya","label":"Libyan Arab Jamahiriya"},{"value":"Liechtenstein","label":"Liechtenstein"},{"value":"Lithuania","label":"Lithuania"},{"value":"Luxembourg","label":"Luxembourg"},{"value":"Macao","label":"Macao"},{"value":"Macedonia","label":"Macedonia"},{"value":"Madagascar","label":"Madagascar"},{"value":"Malawi","label":"Malawi"},{"value":"Malaysia","label":"Malaysia"},{"value":"Maldives","label":"Maldives"},{"value":"Mali","label":"Mali"},{"value":"Malta","label":"Malta"},{"value":"Marshall Island","label":"Marshall Island"},{"value":"Martinique","label":"Martinique"},{"value":"Mauritania","label":"Mauritania"},{"value":"Mauritius","label":"Mauritius"},{"value":"Mayotte","label":"Mayotte"},{"value":"Mexico","label":"Mexico"},{"value":"Moldova","label":"Moldova, Republic of"},{"value":"Monaco","label":"Monaco"},{"value":"Mongolia","label":"Mongolia"},{"value":"Montenegro","label":"Montenegro"},{"value":"Montserrat","label":"Montserrat"},{"value":"Morocco","label":"Morocco"},{"value":"Mozambique","label":"Mozambique"},{"value":"Myanmar","label":"Myanmar"},{"value":"Namibia","label":"Namibia"},{"value":"Nauru","label":"Nauru"},{"value":"Nepal","label":"Nepal"},{"value":"Netherlands","label":"Netherlands"},{"value":"New Caledonia","label":"New Caledonia"},{"value":"New Zealand","label":"New Zealand"},{"value":"Nicaragua","label":"Nicaragua"},{"value":"Niger","label":"Niger"},{"value":"Nigeria","label":"Nigeria"},{"value":"Niue","label":"Niue"},{"value":"Norway","label":"Norway"},{"value":"Oman","label":"Oman"},{"value":"Pakistan","label":"Pakistan"},{"value":"Panama","label":"Panama"},{"value":"Papua New Guinea","label":"Papua New Guinea"},{"value":"Paraguay","label":"Paraguay"},{"value":"Peru","label":"Peru"},{"value":"Philippines","label":"Philippines"},{"value":"Poland","label":"Poland"},{"value":"Portugal","label":"Portugal"},{"value":"Puerto Rico","label":"Puerto Rico"},{"value":"Qatar","label":"Qatar"},{"value":"Romania","label":"Romania"},{"value":"Russia","label":"Russia"},{"value":"Rwanda","label":"Rwanda"},{"value":"Saint Kitts and Nevis","label":"Saint Kitts and Nevis"},{"value":"Saint Vincent and the Grenadines","label":"Saint Vincent and the Grenadines"},{"value":"Samoa","label":"Samoa"},{"value":"San Marino","label":"San Marino"},{"value":"Sao Tome and Principe","label":"Sao Tome and Principe"},{"value":"Saudi Arabia","label":"Saudi Arabia"},{"value":"Senegal","label":"Senegal"},{"value":"Serbia","label":"Serbia"},{"value":"Seychelles","label":"Seychelles"},{"value":"Sierra Leone","label":"Sierra Leone"},{"value":"Singapore","label":"Singapore"},{"value":"Slovakia","label":"Slovakia"},{"value":"Slovenia","label":"Slovenia"},{"value":"Solomon Islands","label":"Solomon Islands"},{"value":"Somalia","label":"Somalia"},{"value":"South Africa","label":"South Africa"},{"value":"South Korea","label":"Korea, Republic of"},{"value":"South Sudan","label":"South Sudan"},{"value":"Spain","label":"Spain"},{"value":"Sri Lanka","label":"Sri Lanka"},{"value":"Sudan","label":"Sudan"},{"value":"Swaziland","label":"Swaziland"},{"value":"Sweden","label":"Sweden"},{"value":"Switzerland","label":"Switzerland"},{"value":"Syrian Arab Republic","label":"Syrian Arab Republic"},{"value":"Tajikistan","label":"Tajikistan"},{"value":"Taiwan","label":"Taiwan"},{"value":"Tanzania","label":"Tanzania"},{"value":"Thailand","label":"Thailand"},{"value":"Timor-Leste","label":"Timor-Leste"},{"value":"Togo","label":"Togo"},{"value":"Tokelau","label":"Tokelau"},{"value":"Tonga","label":"Tonga"},{"value":"Trinidad and Tobago","label":"Trinidad and Tobago"},{"value":"Tunisia","label":"Tunisia"},{"value":"Turkey","label":"Turkey"},{"value":"Turkmenistan","label":"Turkmenistan"},{"value":"Turks and Caicos Islands","label":"Turks and Caicos Islands"},{"value":"Tuvalu","label":"Tuvalu"},{"value":"Uganda","label":"Uganda"},{"value":"Ukraine","label":"Ukraine"},{"value":"United Arab Emirates","label":"United Arab Emirates"},{"value":"Uruguay","label":"Uruguay"},{"value":"Uzbekistan","label":"Uzbekistan"},{"value":"Vanuatu","label":"Vanuatu"},{"value":"Venezuela","label":"Venezuela"},{"value":"Vietnam","label":"Vietnam"},{"value":"Virgin Islands (British)","label":"Virgin Islands (British)"},{"value":"Wallis and Futuna","label":"Wallis and Futuna"},{"value":"Western Sahara","label":"Western Sahara"},{"value":"Yemen","label":"Yemen"},{"value":"Zambia","label":"Zambia"},{"value":"Zimbabwe","label":"Zimbabwe"}]'
        ),
        n = JSON.parse(
          '[{"value":"Uruguay","label":"Uruguay"},{"value":"Turkey","label":"Turkey"},{"value":"Switzerland","label":"Switzerland"},{"value":"Panama","label":"Panama"},{"value":"Netherlands","label":"Netherlands"},{"value":"Mexico","label":"Mexico"},{"value":"Hong Kong","label":"Hong Kong"},{"value":"Germany","label":"Germany"},{"value":"Colombia","label":"Colombia"},{"value":"China","label":"China"},{"value":"Chile","label":"Chile"},{"value":"Brazil","label":"Brazil"},{"value":"Argentina","label":"Argentina"},{"value":"Austria","label":"Austria"}]'
        ),
        i = JSON.parse(
          '[{"label":"Boards & Governance Innovator","value":"Boards & Governance Innovator"},{"label":"Audit & Analytics All Star","value":"Content"},{"label":"ESG, Diversity, & Climate Trailblazer","value":"ESG, Diversity, & Climate Trailblazer"},{"label":"Compliance & Ethics Leader","value":"Compliance & Ethics Leader"},{"label":"Risk & Strategy Advisor","value":"Risk & Strategy Advisor"},{"label":"Mission Driven Champion","value":"Mission Driven Champion"}]'
        ),
        r = JSON.parse(
          '[{"value":"Alliance Partner","label":"Alliance Partner"},{"value":"Channel/Reseller/Solution Provider","label":"Channel/Reseller/Solution Provider"},{"value":"Consulting Partner","label":"Consulting Partner"},{"value":"Content Provider","label":"Content Provider"},{"value":"ISV/Technology Partner","label":"ISV/Technology Partner"},{"value":"Membership Association","label":"Membership Association"},{"value":"Mission Driver Organization/Affiliate","label":"Mission Driver Organization/Affiliate"},{"value":"Referral Partner","label":"Referral Partner"},{"value":"Services/Implementation","label":"Services/Implementation"},{"value":"Other","label":"Other"}]'
        ),
        s = JSON.parse(
          '[{"label":"Diligent","value":"diligent"},{"label":"Partner","value":"partner"}]'
        ),
        o = JSON.parse(
          '[{"label":"Connector","value":"connector"},{"label":"Content","value":"content"},{"label":"Embedded","value":"embedded"},{"label":"ToolKit","value":"toolkit"}]'
        ),
        c = JSON.parse(
          '[{"label":"ISV/Technology","value":"isv"},{"label":"Channel/Reseller/Solution Provider","value":"channel"},{"label":"Services/Impementation","value":"services"},{"label":"Consulting","value":"consulting"},{"label":"Referral","value":"referral"},{"label":"Alliance","value":"alliance"}]'
        ),
        u = JSON.parse(
          '[{"label":"Boards","value":"boards"},{"label":"Entities","value":"entities"},{"label":"ESG","value":"esg"},{"label":"HighBond","value":"highbond"}]'
        ),
        d = JSON.parse(
          '[{"label":"Boards & Governance","value":"boards-governance"},{"label":"Risk & Strategy","value":"risk-strategy"},{"label":"Audit & Analytics","value":"audit-analytics"},{"label":"Compliance & Ethics","value":"compliance-ethics"},{"label":"ESG & Diversity","value":"esg-diversity"}]'
        ),
        m = JSON.parse(
          '[{"label":"Global","value":"global"},{"label":"North America","value":"north-america"},{"label":"EMEA","value":"emea"},{"label":"APAC","value":"apac"},{"label":"LATAM","value":"latam"}]'
        );
      let b = {
          partner: r,
          partnerType: c,
          nominationCategory: i,
          integrationType: o,
          partnerPlatform: u,
          partnerProductFamily: d,
          partnerSolutions: JSON.parse(
            '[{"label":"All Solutions","value":"allsolutions"},{"label":"ACL Analytics","value":"acl-analytics"},{"label":"Board & Leadership Collaboration","value":"boards&leadershipcollaboration"},{"label":"Compensation Governance Intel","value":"compensationgovernanceintel"},{"label":"Compliance","value":"compliance"},{"label":"Entity & Subsidiary Management","value":"entity&subsidarymanagement"},{"label":"Equity & Cap Table Management","value":"equity&captablemanagement"},{"label":"Internal Audit Management","value":"internalauditmanagement"},{"label":"Internal Compliance","value":"internalcompliance"},{"label":"Internal Control For Financial Reporting","value":"internalcontrolforfinancialreporting"},{"label":"Internal Controls Management","value":"internalcontrolsmanagement"},{"label":"IT Risk","value":"itrisk"},{"label":"Regulatory Complinace Management","value":"regulartorycompliancemanagement"},{"label":"Third Party Risk Management","value":"thirdpartyriskmanagement"},{"label":"Environmental & Social","value":"environmentalAndSocial"},{"label":"Governance","value":"governance"}]'
          ),
          partnerRegion: m,
          partnerTier: JSON.parse(
            '[{"label":"Gold","value":"gold"},{"label":"Silver","value":"silver"},{"label":"Bronze","value":"bronze"}]'
          ),
          partnerDevelopedBy: s,
          country: t,
          region: JSON.parse(
            '[{"label":"North America","value":"north-america"},{"label":"Europe","value":"europe"},{"label":"Asia","value":"asia"},{"label":"Africa","value":"africa"},{"label":"South America","value":"south-america"},{"label":"Australia/New Zealand","value":"australia"}]'
          ),
          trustCenter: JSON.parse(
            '[{"label":"Security","value":"security"},{"label":"Data Protection","value":"dataProtection"},{"label":"Reliablity","value":"reliablity"},{"label":"Policies, Practices, and Processes","value":"policies"},{"label":"Cloud Based Delivery","value":"cloudBasedDelivery"},{"label":"Reporting Security Concerns","value":"reportingSecurityConcerns"}]'
          ),
          highRiskCountries: n,
        },
        h = (e) => b[e] || [];
      class g {
        getValue(e) {
          return this.labelMap[e.toLowerCase()];
        }
        getLabel(e) {
          return this.valueMap[e.toLowerCase()];
        }
        getLabels() {
          return this.data.map((e) => {
            let { label: a } = e;
            return a;
          });
        }
        getValues() {
          return this.data.map((e) => {
            let { value: a } = e;
            return a;
          });
        }
        getLabelList() {
          return this.labelMap;
        }
        getValueList() {
          return this.valueMap;
        }
        getData() {
          return this.data;
        }
        setLabel(e, a) {
          return (
            this.data.forEach((l) => {
              l.value === e &&
                ((l.label = a),
                (this.valueMap[l.value.toLowerCase()] = l.label));
            }),
            this
          );
        }
        setEmpty(e) {
          return (
            this.data.unshift({ value: "", label: e || "" }),
            (this.valueMap[""] = e || ""),
            (this.labelMap[e || ""] = ""),
            this
          );
        }
        constructor(e) {
          (this.data = h(e)),
            (this.labelMap = {}),
            (this.valueMap = {}),
            this.data.forEach((e) => {
              let { label: a, value: l } = e;
              (this.labelMap[a] = l), (this.valueMap[l] = a);
            });
        }
      }
      var v = (e) => new g(e);
    },
    68020: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '[{"value":"Australian Capital Territory","label":"Australian Capital Territory"},{"value":"New South Wales","label":"New South Wales"},{"value":"Northern Territory","label":"Northern Territory"},{"value":"Queensland","label":"Queensland"},{"value":"South Australia","label":"South Australia"},{"value":"Tasmania","label":"Tasmania"},{"value":"Victoria","label":"Victoria"},{"value":"Western Australia","label":"Western Australia"}]'
      );
    },
    29582: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '[{"value":"Alberta","label":"Alberta"},{"value":"British Columbia","label":"British Columbia"},{"value":"Manitoba","label":"Manitoba"},{"value":"New Brunswick","label":"New Brunswick"},{"value":"Newfoundland and Labrador","label":"Newfoundland and Labrador"},{"value":"Northwest Territories","label":"Northwest Territories"},{"value":"Nova Scotia","label":"Nova Scotia"},{"value":"Nunavut","label":"Nunavut"},{"value":"Ontario","label":"Ontario"},{"value":"Prince Edward Island","label":"Prince Edward Island"},{"value":"Quebec","label":"Quebec"},{"value":"Saskatchewan","label":"Saskatchewan"},{"value":"Yukon","label":"Yukon"}]'
      );
    },
    77010: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '[{"value":"AL","label":"Alabama"},{"value":"AK","label":"Alaska"},{"value":"AZ","label":"Arizona"},{"value":"AR","label":"Arkansas"},{"value":"CA","label":"California"},{"value":"CO","label":"Colorado"},{"value":"CT","label":"Connecticut"},{"value":"DE","label":"Delaware"},{"value":"DC","label":"District of Columbia"},{"value":"FL","label":"Florida"},{"value":"GA","label":"Georgia"},{"value":"GU","label":"Guam"},{"value":"HI","label":"Hawaii"},{"value":"ID","label":"Idaho"},{"value":"IL","label":"Illinois"},{"value":"IN","label":"Indiana"},{"value":"IA","label":"Iowa"},{"value":"KS","label":"Kansas"},{"value":"KY","label":"Kentucky"},{"value":"LA","label":"Louisiana"},{"value":"ME","label":"Maine"},{"value":"MD","label":"Maryland"},{"value":"MA","label":"Massachusetts"},{"value":"MI","label":"Michigan"},{"value":"MN","label":"Minnesota"},{"value":"MS","label":"Mississippi"},{"value":"MO","label":"Missouri"},{"value":"MT","label":"Montana"},{"value":"NE","label":"Nebraska"},{"value":"NV","label":"Nevada"},{"value":"NH","label":"New Hampshire"},{"value":"NJ","label":"New Jersey"},{"value":"NM","label":"New Mexico"},{"value":"NY","label":"New York"},{"value":"NC","label":"North Carolina"},{"value":"ND","label":"North Dakota"},{"value":"OH","label":"Ohio"},{"value":"OK","label":"Oklahoma"},{"value":"OR","label":"Oregon"},{"value":"PA","label":"Pennsylvania"},{"value":"RI","label":"Rhode Island"},{"value":"SC","label":"South Carolina"},{"value":"SD","label":"South Dakota"},{"value":"TN","label":"Tennessee"},{"value":"TX","label":"Texas"},{"value":"UT","label":"Utah"},{"value":"VT","label":"Vermont"},{"value":"VA","label":"Virginia"},{"value":"VI","label":"Virgin Islands"},{"value":"WA","label":"Washington"},{"value":"WV","label":"West Virginia"},{"value":"WI","label":"Wisconsin"},{"value":"WY","label":"Wyoming"}]'
      );
    },
  },
]);
