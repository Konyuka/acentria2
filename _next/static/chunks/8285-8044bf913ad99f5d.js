(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8285],
  {
    28285: function (e, l, s) {
      "use strict";
      s.d(l, {
        q: function () {
          return la;
        },
      });
      var a = s(52322),
        t = s(2915),
        c = s(55258);
      let r = {
        block: {
          h3: (e) =>
            (0, a.jsx)(c.L, {
              component: "h4",
              fontWeight: "semibold",
              className: "pb-3",
              children: e.children,
            }),
          normal: (e) =>
            (0, a.jsx)(t.nv, {
              color: "",
              variant: "regular",
              className: " text-sm",
              ...e,
            }),
        },
        marks: {
          link: (e) => {
            let { value: l, children: s } = e,
              { blank: t, href: c } = l;
            return (0, a.jsx)("a", {
              href: c,
              rel: "noopener noreferrer",
              className:
                "font-semibold text-light-link hover:cursor-pointer hover:text-light-link/80",
              children: s,
            });
          },
          colorHighlight: (e) =>
            (0, a.jsx)(t.Dr, { color: "primary", className: "", ...e }),
        },
      };
      var i = s(34575),
        n = s(68628),
        o = (e) => {
          let { content: l, image: s, imageAlt: t, theme: c = "light" } = e;
          return (0, a.jsx)("div", {
            className: "w-full",
            children: (0, a.jsxs)("div", {
              className:
                "flex w-full flex-col items-center justify-between gap-10 sm:flex-row lg:items-start",
              children: [
                (0, a.jsx)("div", {
                  className: "max-w-xl flex-auto",
                  children: (0, a.jsx)("div", {
                    className: "text-".concat(c, "-content"),
                    children: (0, a.jsx)(n.YI, { value: l, components: r }),
                  }),
                }),
                s &&
                  (0, a.jsx)("img", {
                    className:
                      "aspect-square w-60 flex-none rounded-md object-cover lg:w-44",
                    src: (0, i.Jn)(s).url(),
                    alt: t || "Image for vertical text section",
                  }),
              ],
            }),
          });
        },
        d = s(50636),
        m = (e) => {
          let { data: l, theme: s = "light" } = e;
          return (0, a.jsx)("div", {
            className: "container mx-auto px-4",
            children: (0, a.jsx)("div", {
              className: "py-10 md:py-16 text-".concat(s, "-content"),
              children: (0, a.jsxs)("div", {
                className:
                  "mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 ".concat(
                    "split" === l.sectionWidth
                      ? "xl:grid-cols-2"
                      : "xl:grid-cols-[2fr_3fr]"
                  ),
                children: [
                  (0, a.jsx)("div", {
                    className: "max-w-2xl",
                    children:
                      "dark" === s
                        ? (0, a.jsx)(n.YI, {
                            value: l.content,
                            components: d.IK,
                          })
                        : (0, a.jsx)(n.YI, {
                            value: l.content,
                            components: d.BJ,
                          }),
                  }),
                  (0, a.jsx)("div", {
                    className: "",
                    children:
                      l.verticalTextImages &&
                      l.verticalTextImages.map((e, l) =>
                        (0, a.jsx)(
                          "div",
                          {
                            className:
                              "flex border-brand-divider pb-6 [&:not(:first-child)]:pt-6 [&:not(:last-child)]:border-b",
                            children: (0, a.jsx)(o, {
                              content: e.content,
                              image: e.image,
                              imageAlt: e.imageAlt || "Image ".concat(l),
                              theme: s,
                            }),
                          },
                          "".concat(e.id, "-").concat(l)
                        )
                      ),
                  }),
                ],
              }),
            }),
          });
        },
        x = s(18737);
      let h = {
          block: {
            normal: (e) =>
              (0, a.jsx)(t.X6, {
                tag: "h2",
                color: "light-title",
                className:
                  "pb-6 sm:pb-6 md:!pb-12 lg:!pb-24 xl:!text-4xl 2xl:!text-4xl ",
                ...e,
              }),
          },
          marks: {
            colorHighlight: (e) =>
              (0, a.jsx)(t.Dr, {
                color: "primary",
                className:
                  "pb-6 sm:pb-6 md:!pb-12 lg:!pb-24 xl:text-4xl 2xl:text-4xl",
                ...e,
              }),
          },
        },
        g = {
          block: {
            normal: (e) =>
              (0, a.jsx)(t.nv, {
                color: "light-content",
                variant: "regular",
                ...e,
              }),
          },
        },
        p = {
          block: {
            info: (e) =>
              (0, a.jsx)(t.nv, {
                color: "light-icon",
                variant: "regular",
                className: "text-sm",
                ...e,
              }),
            country: (e) =>
              (0, a.jsx)(t.nv, {
                color: "light-icon",
                variant: "regular",
                className: "text-xs font-semibold mb-4",
                ...e,
              }),
            address: (e) =>
              (0, a.jsx)(t.nv, {
                color: "light-content",
                variant: "regular",
                className: "text-sm font-medium",
                ...e,
              }),
            city: (e) =>
              (0, a.jsx)(t.nv, {
                color: "light-title",
                variant: "regular",
                className: "text-base font-semibold",
                ...e,
              }),
          },
        };
      var v = s(4602),
        u = s(2784);
      let j = (e) => {
          let { isOpen: l, onClose: s, selectedRegion: t } = e,
            c = "translate-x-full ",
            r = (0, u.useRef)(null);
          return ((0, u.useEffect)(() => {
            function e(e) {
              r.current && !r.current.contains(e.target) && s();
            }
            return (
              document.addEventListener("mousedown", e),
              () => {
                document.removeEventListener("mousedown", e);
              }
            );
          }, [r]),
          t)
            ? (0, a.jsx)("div", {
                className: "",
                children: (0, a.jsxs)("div", {
                  className: "relative z-[150] w-full ".concat(
                    l ? "" : c,
                    " block  transition-[transform] duration-300"
                  ),
                  children: [
                    (0, a.jsx)("div", { className: "fixed inset-0" }),
                    (0, a.jsx)("div", {
                      className: "fixed inset-0 overflow-hidden",
                      children: (0, a.jsx)("div", {
                        className:
                          "absolute inset-0 overflow-hidden bg-black/50",
                        children: (0, a.jsx)("div", {
                          className:
                            "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16",
                          children: (0, a.jsx)("div", {
                            className:
                              "pointer-events-auto z-[150] w-screen max-w-2xl ".concat(
                                l ? "" : c,
                                " block transition-[transform] duration-300"
                              ),
                            ref: r,
                            children: (0, a.jsxs)("div", {
                              className:
                                "flex h-full flex-col overflow-y-scroll bg-white shadow-xl ",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "px-4 py-6 sm:px-6",
                                  children: (0, a.jsxs)("div", {
                                    className:
                                      "flex items-start justify-between",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className:
                                          "text-xl font-semibold leading-6 text-light-title",
                                        children: t.region,
                                      }),
                                      (0, a.jsx)("div", {
                                        className: "ml-3 flex h-7 items-center",
                                        children: (0, a.jsx)("button", {
                                          type: "button",
                                          onClick: s,
                                          children: (0, a.jsx)(v.J, {
                                            iconName: "close",
                                            iconColor: "default",
                                            iconSize: "default",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  className: "",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: "pb-6",
                                      children: (0, a.jsx)("div", {
                                        className: "overflow-hidden",
                                        children: (0, a.jsx)("img", {
                                          className:
                                            "h-24 w-full flex-shrink-0 object-cover sm:h-40 lg:h-48",
                                          src: t.image,
                                          alt: "",
                                        }),
                                      }),
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "px-4 py-5 md:px-8",
                                      children: (0, a.jsx)("div", {
                                        className: "text-sm text-light-content",
                                        children: (0, a.jsx)(n.YI, {
                                          value: t.info,
                                          components: p,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              })
            : null;
        },
        f = (e) => {
          let { onRegionSelect: l, regions: s } = e;
          return (0, a.jsx)("div", {
            className:
              "container mx-auto grid grid-cols-1 gap-5 text-center md:grid-cols-3 lg:grid-cols-3",
            children:
              s &&
              s.map((e, s) =>
                (0, a.jsx)(
                  "div",
                  {
                    className: "group flex",
                    children: (0, a.jsxs)("div", {
                      className:
                        "w-full cursor-pointer rounded-md border border-brand-divider bg-white group-hover:border-brand-primary",
                      onClick: () => l(e),
                      children: [
                        (0, a.jsx)("div", {
                          className: "flex px-5 py-6",
                          children: (0, a.jsx)("span", {
                            className:
                              "text-xl font-bold text-light-title group-hover:text-brand-primary",
                            children: e.region,
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "h-40 overflow-hidden",
                          children: (0, a.jsx)("img", {
                            src: e.image,
                            alt: e.name,
                            className:
                              "h-40 w-full object-cover grayscale transition-all group-hover:scale-110 group-hover:grayscale-0 ",
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "flex items-center px-5 py-4",
                          children: (0, a.jsx)("span", {
                            className:
                              "text-base font-semibold text-brand-primary",
                            children: "See offices",
                          }),
                        }),
                      ],
                    }),
                  },
                  "".concat(e._key, "-").concat(s)
                )
              ),
          });
        };
      var b = (e) => {
        let { data: l } = e,
          { title: s, content: t, regions: c } = l,
          [r, i] = (0, u.useState)(null),
          o = (e) => {
            i(e), window.document && (document.body.style.overflow = "hidden");
          };
        return (0, a.jsxs)("div", {
          className: "container px-4 py-24",
          children: [
            (0, a.jsxs)("div", {
              className: "text-center",
              children: [
                s && (0, a.jsx)(n.YI, { value: s, components: h }),
                t &&
                  (0, a.jsx)("div", {
                    className: "mb-10",
                    children: (0, a.jsx)(n.YI, { value: t, components: g }),
                  }),
              ],
            }),
            (0, a.jsx)(f, { regions: c, onRegionSelect: (e) => o(e) }),
            (0, a.jsx)(j, {
              isOpen: !!r,
              onClose: () => {
                i(null),
                  window.document && (document.body.style.overflow = "unset");
              },
              selectedRegion: r,
            }),
          ],
        });
      };
      let N = {
        block: {
          h5: (e) =>
            (0, a.jsx)(t.X6, {
              tag: "h5",
              color: "light-title",
              className: "!text-base font-semibold md:!pb-3 md:!text-xl",
              ...e,
            }),
          normal: (e) =>
            (0, a.jsx)(t.nv, {
              color: "light-content",
              variant: "regular",
              className: " text-base",
              ...e,
            }),
        },
        marks: {
          link: (e) => {
            let { value: l, children: s } = e,
              { blank: t, href: c } = l;
            return (0, a.jsx)("a", {
              href: c,
              rel: "noopener noreferrer",
              className:
                "text-light-link hover:text-light-link/80 font-semibold hover:cursor-pointer",
              children: s,
            });
          },
          colorHighlight: (e) =>
            (0, a.jsx)(t.Dr, { color: "primary", className: "", ...e }),
        },
        types: {
          iconPicker: (e) =>
            (0, a.jsx)(v.J, {
              iconName: e.value.name,
              iconColor: "default",
              iconSize: "default",
            }),
        },
      };
      var y = (e) => {
          let { content: l, iconName: s } = e;
          return (0, a.jsxs)("div", {
            className: "flex flex-row gap-2",
            children: [
              (0, a.jsx)(v.J, {
                iconName: s,
                iconColor: "default",
                iconSize: "default",
              }),
              (0, a.jsx)("div", {
                children: (0, a.jsx)(n.YI, { value: l, components: N }),
              }),
            ],
          });
        },
        w = (e) => {
          let { data: l } = e;
          return (0, a.jsx)("div", {
            className: "container mx-auto",
            children: (0, a.jsx)("div", {
              className: "py-24 sm:py-32",
              children: (0, a.jsx)("div", {
                className: "mx-auto max-w-7xl px-6 lg:px-8",
                children: (0, a.jsxs)("div", {
                  className:
                    "mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3",
                  children: [
                    (0, a.jsx)("div", {
                      children: (0, a.jsx)(n.YI, {
                        value: l.content,
                        components: d.BJ,
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16",
                      children:
                        l.features &&
                        l.features.map((e) =>
                          (0, a.jsx)(
                            y,
                            {
                              content: e.content,
                              iconName: e.icon ? e.icon.name : null,
                            },
                            e._key
                          )
                        ),
                    }),
                  ],
                }),
              }),
            }),
          });
        };
      let z = {
          block: {
            normal: (e) =>
              (0, a.jsx)(t.X6, {
                tag: "h1",
                color: "light-title",
                className:
                  "pb-4 sm:pb-4 md:!pb-4 lg:!pb-6 xl:!text-4xl 2xl:!text-4xl ",
                ...e,
              }),
          },
          marks: {
            colorHighlight: (e) =>
              (0, a.jsx)(t.Dr, {
                color: "primary",
                className:
                  "pb-4 sm:pb-4 md:!pb-4 lg:!pb-6 xl:text-4xl 2xl:text-4xl",
                ...e,
              }),
          },
        },
        k = {
          block: {
            normal: (e) =>
              (0, a.jsx)(t.nv, {
                color: "light-content",
                variant: "regular",
                ...e,
              }),
          },
        };
      var M = (e) => {
          let { title: l, body: s, images: t } = e;
          return (0, a.jsx)("div", {
            className: "container mx-auto",
            children: (0, a.jsx)("div", {
              className: "mb-10 mt-20 overflow-hidden sm:mt-20",
              children: (0, a.jsx)("div", {
                className: "container mx-auto max-w-7xl px-6 lg:flex lg:px-8",
                children: (0, a.jsxs)("div", {
                  className:
                    "mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8",
                      children: [
                        (0, a.jsx)(n.YI, { value: l, components: z }),
                        (0, a.jsx)(n.YI, { value: s, components: k }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end",
                          children: (0, a.jsx)("img", {
                            src: t.image1.src,
                            alt:
                              t.image1.alt || "First image in the hero section",
                            className:
                              "aspect-[7/4] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "order-first flex w-64 flex-none justify-end self-end lg:w-auto",
                              children: (0, a.jsx)("img", {
                                src: t.image2.src,
                                alt:
                                  t.image2.alt ||
                                  "Second image in the hero section",
                                className:
                                  "aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "flex w-96 flex-auto justify-end lg:w-auto lg:flex-none",
                              children: (0, a.jsx)("img", {
                                src: t.image3.src,
                                alt:
                                  t.image3.alt ||
                                  "Third image in the hero section",
                                className:
                                  "aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none",
                              children: (0, a.jsx)("img", {
                                src: t.image4.src,
                                alt:
                                  t.image4.alt ||
                                  "Fourth image in the hero section",
                                className:
                                  "aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        C = s(56635),
        _ = s(388),
        L = s(75452),
        H = s(25675),
        I = s.n(H);
      let S = (e) => {
          let { isOpen: l, onClose: s, selectedBio: c } = e,
            r = "translate-x-full ",
            i = (0, u.useRef)(null);
          return ((0, u.useEffect)(() => {
            function e(e) {
              i.current && !i.current.contains(e.target) && s();
            }
            return (
              document.addEventListener("mousedown", e),
              () => {
                document.removeEventListener("mousedown", e);
              }
            );
          }, [i]),
          c)
            ? (0, a.jsx)("div", {
                className: "",
                children: (0, a.jsxs)("div", {
                  className: "relative z-[150] w-full ".concat(
                    l ? "" : r,
                    " block  transition-transform duration-300"
                  ),
                  children: [
                    (0, a.jsx)("div", { className: "fixed inset-0" }),
                    (0, a.jsx)("div", {
                      className: "fixed inset-0 overflow-hidden",
                      children: (0, a.jsx)("div", {
                        className:
                          "absolute inset-0 overflow-hidden bg-black/50",
                        children: (0, a.jsx)("div", {
                          className:
                            "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16",
                          children: (0, a.jsx)("div", {
                            className:
                              "pointer-events-auto z-[150] w-screen max-w-2xl ".concat(
                                l ? "" : r,
                                " block transition-[transform] duration-300"
                              ),
                            ref: i,
                            children: (0, a.jsxs)("div", {
                              className:
                                "flex h-full flex-col overflow-y-scroll bg-white shadow-xl ",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "px-4 py-6 sm:px-6",
                                  children: (0, a.jsxs)("div", {
                                    className:
                                      "flex items-start justify-between",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className:
                                          "text-base font-semibold leading-6 text-light-title",
                                        children: "Profile",
                                      }),
                                      (0, a.jsx)("div", {
                                        className: "ml-3 flex h-7 items-center",
                                        children: (0, a.jsx)("button", {
                                          type: "button",
                                          onClick: s,
                                          children: (0, a.jsx)(v.J, {
                                            iconName: "close",
                                            iconColor: "default",
                                            iconSize: "default",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  className: "",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: "pb-6",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className:
                                            "h-24 bg-brand-primary sm:h-20 lg:h-28",
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "-mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-16",
                                          children: [
                                            (0, a.jsx)("div", {
                                              children: (0, a.jsx)("div", {
                                                className: "-m-1 flex",
                                                children: (0, a.jsx)("div", {
                                                  className:
                                                    "inline-flex overflow-hidden rounded-lg border-4 border-white",
                                                  children: (0, a.jsx)("img", {
                                                    className:
                                                      "h-24 w-24 flex-shrink-0 object-cover sm:h-40 sm:w-40 lg:h-48 lg:w-48",
                                                    src: c.image,
                                                    alt: "",
                                                  }),
                                                }),
                                              }),
                                            }),
                                            (0, a.jsxs)("div", {
                                              className:
                                                "mt-6 sm:ml-6 sm:flex-1",
                                              children: [
                                                (0, a.jsxs)("div", {
                                                  children: [
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "flex items-center",
                                                      children: (0, a.jsx)(
                                                        t.X6,
                                                        {
                                                          tag: "h3",
                                                          className: "!pb-2",
                                                          children: c.name,
                                                        }
                                                      ),
                                                    }),
                                                    (0, a.jsx)("p", {
                                                      className:
                                                        "text-xs text-light-content",
                                                      children: c.job,
                                                    }),
                                                  ],
                                                }),
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "mt-5 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0",
                                                  children: [
                                                    c.linkedin &&
                                                      (0, a.jsx)("div", {
                                                        children: (0, a.jsx)(
                                                          "a",
                                                          {
                                                            href: c.linkedin,
                                                            target: "_blank",
                                                            children: (0,
                                                            a.jsxs)("svg", {
                                                              width: "24",
                                                              height: "24",
                                                              viewBox:
                                                                "0 0 24 24",
                                                              fill: "none",
                                                              xmlns:
                                                                "http://www.w3.org/2000/svg",
                                                              children: [
                                                                (0, a.jsx)(
                                                                  "mask",
                                                                  {
                                                                    id: "path-1-inside-1_343_4931",
                                                                    fill: "white",
                                                                    children:
                                                                      (0,
                                                                      a.jsx)(
                                                                        "path",
                                                                        {
                                                                          d: "M16.8278 17.5132H14.7958V14.3517C14.7958 13.5979 14.7822 12.6274 13.7389 12.6274C12.6806 12.6274 12.5186 13.4488 12.5186 14.2969V17.513H10.4866V11.0117H12.4373V11.9002H12.4647C12.6599 11.5686 12.942 11.2958 13.2809 11.1108C13.6199 10.9259 14.0029 10.8357 14.3894 10.85C16.4489 10.85 16.8287 12.1958 16.8287 13.9467L16.8278 17.5132ZM8.19379 10.123C7.96057 10.1231 7.73256 10.0544 7.53862 9.9257C7.34467 9.797 7.19351 9.61406 7.10422 9.40001C7.01493 9.18596 6.99153 8.95041 7.03699 8.72314C7.08245 8.49588 7.19472 8.28712 7.35961 8.12324C7.52449 7.95937 7.73459 7.84776 7.96333 7.80251C8.19206 7.75727 8.42916 7.78043 8.64465 7.86906C8.86014 7.95769 9.04433 8.10782 9.17394 8.30045C9.30355 8.49308 9.37275 8.71957 9.3728 8.95128C9.37282 9.10513 9.34234 9.25747 9.28311 9.39962C9.22387 9.54177 9.13705 9.67093 9.02757 9.77974C8.91809 9.88854 8.7881 9.97486 8.64504 10.0338C8.50198 10.0927 8.34865 10.123 8.19379 10.123ZM9.20981 17.5132H7.17566V11.0117H9.20981V17.5132ZM17.8409 5.90523H6.15457C5.88933 5.90225 5.63373 6.00402 5.44397 6.18816C5.25421 6.37231 5.14582 6.62377 5.14258 6.88728V18.5456C5.1457 18.8092 5.25404 19.0608 5.44379 19.2452C5.63354 19.4295 5.8892 19.5315 6.15457 19.5287H17.8409C18.1068 19.532 18.3631 19.4303 18.5536 19.246C18.7441 19.0616 18.8532 18.8097 18.8569 18.5456V6.88644C18.8531 6.6224 18.7439 6.37066 18.5534 6.18652C18.3629 6.00238 18.1066 5.9009 17.8409 5.90438",
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                                (0, a.jsx)(
                                                                  "path",
                                                                  {
                                                                    d: "M16.8278 17.5132H14.7958V14.3517C14.7958 13.5979 14.7822 12.6274 13.7389 12.6274C12.6806 12.6274 12.5186 13.4488 12.5186 14.2969V17.513H10.4866V11.0117H12.4373V11.9002H12.4647C12.6599 11.5686 12.942 11.2958 13.2809 11.1108C13.6199 10.9259 14.0029 10.8357 14.3894 10.85C16.4489 10.85 16.8287 12.1958 16.8287 13.9467L16.8278 17.5132ZM8.19379 10.123C7.96057 10.1231 7.73256 10.0544 7.53862 9.9257C7.34467 9.797 7.19351 9.61406 7.10422 9.40001C7.01493 9.18596 6.99153 8.95041 7.03699 8.72314C7.08245 8.49588 7.19472 8.28712 7.35961 8.12324C7.52449 7.95937 7.73459 7.84776 7.96333 7.80251C8.19206 7.75727 8.42916 7.78043 8.64465 7.86906C8.86014 7.95769 9.04433 8.10782 9.17394 8.30045C9.30355 8.49308 9.37275 8.71957 9.3728 8.95128C9.37282 9.10513 9.34234 9.25747 9.28311 9.39962C9.22387 9.54177 9.13705 9.67093 9.02757 9.77974C8.91809 9.88854 8.7881 9.97486 8.64504 10.0338C8.50198 10.0927 8.34865 10.123 8.19379 10.123ZM9.20981 17.5132H7.17566V11.0117H9.20981V17.5132ZM17.8409 5.90523H6.15457C5.88933 5.90225 5.63373 6.00402 5.44397 6.18816C5.25421 6.37231 5.14582 6.62377 5.14258 6.88728V18.5456C5.1457 18.8092 5.25404 19.0608 5.44379 19.2452C5.63354 19.4295 5.8892 19.5315 6.15457 19.5287H17.8409C18.1068 19.532 18.3631 19.4303 18.5536 19.246C18.7441 19.0616 18.8532 18.8097 18.8569 18.5456V6.88644C18.8531 6.6224 18.7439 6.37066 18.5534 6.18652C18.3629 6.00238 18.1066 5.9009 17.8409 5.90438",
                                                                    fill: "#6B7099",
                                                                  }
                                                                ),
                                                                (0, a.jsx)(
                                                                  "path",
                                                                  {
                                                                    d: "M16.8278 17.5132V18.5132H17.8276L17.8278 17.5135L16.8278 17.5132ZM14.7958 17.5132H13.7958V18.5132H14.7958V17.5132ZM12.5186 17.513V18.513H13.5186V17.513H12.5186ZM10.4866 17.513H9.48659V18.513H10.4866V17.513ZM10.4866 11.0117V10.0117H9.48659V11.0117H10.4866ZM12.4373 11.0117H13.4373V10.0117H12.4373V11.0117ZM12.4373 11.9002H11.4373V12.9002H12.4373V11.9002ZM12.4647 11.9002V12.9002H13.0364L13.3264 12.4075L12.4647 11.9002ZM14.3894 10.85L14.3525 11.8493L14.3709 11.85H14.3894V10.85ZM16.8287 13.9467L17.8287 13.947V13.9467H16.8287ZM8.19379 10.123L8.19361 9.12302L8.19379 10.123ZM9.3728 8.95128L10.3728 8.9511L9.3728 8.95128ZM9.20981 17.5132V18.5132H10.2098V17.5132H9.20981ZM7.17566 17.5132H6.17566V18.5132H7.17566V17.5132ZM7.17566 11.0117V10.0117H6.17566V11.0117H7.17566ZM9.20981 11.0117H10.2098V10.0117H9.20981V11.0117ZM6.15457 5.90523L6.14336 6.90523H6.15457V5.90523ZM5.14258 6.88728L4.14258 6.875V6.88728H5.14258ZM5.14258 18.5456H4.14251L4.14265 18.5574L5.14258 18.5456ZM6.15457 19.5287V18.5286L6.144 18.5287L6.15457 19.5287ZM17.8409 19.5287L17.8533 18.5287H17.8409V19.5287ZM18.8569 18.5456L19.8569 18.5595V18.5456H18.8569ZM18.8569 6.88644H19.8569V6.87926L19.8568 6.87208L18.8569 6.88644ZM16.8278 16.5132H14.7958V18.5132H16.8278V16.5132ZM15.7958 17.5132V14.3517H13.7958V17.5132H15.7958ZM15.7958 14.3517C15.7958 14.0195 15.8054 13.3851 15.588 12.8377C15.4677 12.5348 15.2621 12.2107 14.9146 11.9694C14.5654 11.7269 14.1582 11.6274 13.7389 11.6274V13.6274C13.8412 13.6274 13.8271 13.6491 13.7738 13.6122C13.7223 13.5764 13.7157 13.542 13.7292 13.576C13.7463 13.619 13.7681 13.7045 13.7813 13.8531C13.7944 13.9999 13.7958 14.1601 13.7958 14.3517H15.7958ZM13.7389 11.6274C13.3452 11.6274 12.9625 11.7042 12.6196 11.8929C12.2708 12.0848 12.0236 12.3596 11.8575 12.6589C11.5514 13.2105 11.5186 13.8541 11.5186 14.2969H13.5186C13.5186 14.1123 13.5278 13.9607 13.5477 13.8377C13.5678 13.7132 13.5937 13.6519 13.6063 13.6293C13.613 13.6172 13.6047 13.6336 13.5839 13.6451C13.5691 13.6532 13.6034 13.6274 13.7389 13.6274V11.6274ZM11.5186 14.2969V17.513H13.5186V14.2969H11.5186ZM12.5186 16.513H10.4866V18.513H12.5186V16.513ZM11.4866 17.513V11.0117H9.48659V17.513H11.4866ZM10.4866 12.0117H12.4373V10.0117H10.4866V12.0117ZM11.4373 11.0117V11.9002H13.4373V11.0117H11.4373ZM12.4373 12.9002H12.4647V10.9002H12.4373V12.9002ZM13.3264 12.4075C13.4296 12.2323 13.5791 12.0873 13.7599 11.9886L12.8019 10.233C12.3048 10.5042 11.8902 10.9048 11.6029 11.3929L13.3264 12.4075ZM13.7599 11.9886C13.9407 11.89 14.1455 11.8417 14.3525 11.8493L14.4262 9.85067C13.8603 9.8298 13.299 9.96177 12.8019 10.233L13.7599 11.9886ZM14.3894 11.85C15.1757 11.85 15.4154 12.086 15.537 12.2776C15.7249 12.5738 15.8287 13.0936 15.8287 13.9467H17.8287C17.8287 13.049 17.7425 12.0204 17.2257 11.206C16.6425 10.2869 15.6626 9.84999 14.3894 9.84999V11.85ZM15.8287 13.9465L15.8278 17.513L17.8278 17.5135L17.8287 13.947L15.8287 13.9465ZM8.19361 9.12302C8.15671 9.12302 8.12117 9.11213 8.09153 9.09246L6.98571 10.7589C7.34395 10.9967 7.76442 11.1231 8.19397 11.123L8.19361 9.12302ZM8.09153 9.09246C8.06198 9.07285 8.03992 9.04565 8.02714 9.01502L6.1813 9.785C6.3471 10.1825 6.62737 10.5212 6.98571 10.7589L8.09153 9.09246ZM8.02714 9.01502C8.0144 8.98447 8.01117 8.95125 8.01756 8.91929L6.05641 8.527C5.97189 8.94956 6.01546 9.38744 6.1813 9.785L8.02714 9.01502ZM8.01756 8.91929C8.02396 8.88728 8.03995 8.85696 8.06453 8.83253L6.65469 7.41396C6.3495 7.71727 6.14093 8.10448 6.05641 8.527L8.01756 8.91929ZM8.06453 8.83253C8.08917 8.80804 8.12136 8.79063 8.15737 8.78351L7.76928 6.82152C7.34782 6.90489 6.95982 7.11071 6.65469 7.41396L8.06453 8.83253ZM8.15737 8.78351C8.19341 8.77638 8.2307 8.78008 8.26426 8.79389L9.02504 6.94423C8.62762 6.78077 8.19071 6.73816 7.76928 6.82152L8.15737 8.78351ZM8.26426 8.79389C8.29776 8.80766 8.32534 8.83056 8.34426 8.85868L10.0036 7.74222C9.76333 7.38507 9.42252 7.10772 9.02504 6.94423L8.26426 8.79389ZM8.34426 8.85868C8.36313 8.88673 8.37279 8.91901 8.3728 8.95146L10.3728 8.9511C10.3727 8.52014 10.244 8.09944 10.0036 7.74222L8.34426 8.85868ZM8.3728 8.95146C8.3728 8.97306 8.36853 8.99461 8.36005 9.01496L10.2062 9.78428C10.3162 9.52033 10.3728 9.2372 10.3728 8.9511L8.3728 8.95146ZM8.36005 9.01496C8.35156 9.03534 8.33895 9.05424 8.32265 9.07045L9.73248 10.489C9.93514 10.2876 10.0962 10.0482 10.2062 9.78428L8.36005 9.01496ZM8.32265 9.07045C8.30632 9.08667 8.28656 9.09991 8.26432 9.10907L9.02576 10.9585C9.28963 10.8498 9.52985 10.6904 9.73248 10.489L8.32265 9.07045ZM8.26432 9.10907C8.24209 9.11822 8.21805 9.12301 8.19361 9.12302L8.19397 11.123C8.47925 11.123 8.76187 11.0671 9.02576 10.9585L8.26432 9.10907ZM9.20981 16.5132H7.17566V18.5132H9.20981V16.5132ZM8.17566 17.5132V11.0117H6.17566V17.5132H8.17566ZM7.17566 12.0117H9.20981V10.0117H7.17566V12.0117ZM8.20981 11.0117V17.5132H10.2098V11.0117H8.20981ZM17.8409 4.90523H6.15457V6.90523H17.8409V4.90523ZM6.16578 4.90529C5.63761 4.89937 5.12739 5.10193 4.74756 5.47052L6.14038 6.90581C6.14007 6.90611 6.14104 6.90514 6.14336 6.90516L6.16578 4.90529ZM4.74756 5.47052C4.3675 5.83934 4.14917 6.34436 4.14265 6.875L6.1425 6.89956C6.14246 6.90317 6.14093 6.90528 6.14038 6.90581L4.74756 5.47052ZM4.14258 6.88728V18.5456H6.14258V6.88728H4.14258ZM4.14265 18.5574C4.14894 19.0882 4.36707 19.5934 4.747 19.9624L6.14059 18.5279C6.141 18.5283 6.14247 18.5303 6.14251 18.5337L4.14265 18.5574ZM4.747 19.9624C5.12669 20.3313 5.63687 20.5342 6.16514 20.5286L6.144 18.5287C6.14152 18.5288 6.1404 18.5277 6.14059 18.5279L4.747 19.9624ZM6.15457 20.5287H17.8409V18.5287H6.15457V20.5287ZM17.8284 20.5286C18.3572 20.5352 18.8682 20.3331 19.249 19.9646L17.8582 18.5273C17.858 18.5275 17.8564 18.5288 17.8533 18.5288L17.8284 20.5286ZM19.249 19.9646C19.63 19.5959 19.8494 19.0907 19.8568 18.5595L17.857 18.5316C17.857 18.5303 17.8573 18.5292 17.8576 18.5284C17.8579 18.5276 17.8583 18.5273 17.8582 18.5273L19.249 19.9646ZM19.8569 18.5456V6.88644H17.8569V18.5456H19.8569ZM19.8568 6.87208C19.8491 6.34094 19.6296 5.8359 19.2484 5.4675L17.8584 6.90554C17.8585 6.90557 17.8584 6.90546 17.8582 6.90521C17.858 6.90498 17.8578 6.90467 17.8577 6.90427C17.8573 6.90343 17.857 6.90218 17.857 6.9008L19.8568 6.87208ZM19.2484 5.4675C18.8675 5.09932 18.3564 4.89754 17.8278 4.90447L17.854 6.9043C17.8568 6.90426 17.8583 6.90544 17.8584 6.90554L19.2484 5.4675Z",
                                                                    fill: "#6B7099",
                                                                    mask: "url(#path-1-inside-1_343_4931)",
                                                                  }
                                                                ),
                                                                (0, a.jsx)(
                                                                  "circle",
                                                                  {
                                                                    cx: "12",
                                                                    cy: "12",
                                                                    r: "11.5",
                                                                    stroke:
                                                                      "#6B7099",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                    c.twitter &&
                                                      (0, a.jsx)("div", {
                                                        children: (0, a.jsx)(
                                                          "a",
                                                          {
                                                            href: "",
                                                            children: (0,
                                                            a.jsxs)("svg", {
                                                              width: "24",
                                                              height: "24",
                                                              viewBox:
                                                                "0 0 24 24",
                                                              fill: "none",
                                                              xmlns:
                                                                "http://www.w3.org/2000/svg",
                                                              children: [
                                                                (0, a.jsx)(
                                                                  "circle",
                                                                  {
                                                                    cx: "12",
                                                                    cy: "12",
                                                                    r: "11.5",
                                                                    stroke:
                                                                      "#6B7099",
                                                                  }
                                                                ),
                                                                (0, a.jsx)(
                                                                  "path",
                                                                  {
                                                                    d: "M17.1593 9.13744L16.935 9.30014L16.954 9.57659C16.961 9.67771 16.9612 9.78164 16.9612 9.90682C16.9612 13.3681 14.3734 17.3138 9.66567 17.4281L9.45476 17.4284C8.66326 17.4295 7.8808 17.3045 7.13557 17.0616C8.03444 16.8638 8.88334 16.465 9.61598 15.8883L10.7164 15.0221L9.31623 14.9955C8.59188 14.9817 7.9323 14.6315 7.51165 14.074C7.70334 14.0563 7.89368 14.0218 8.08045 13.9707L8.04763 12.9984C7.21782 12.8304 6.56641 12.2293 6.30984 11.458C6.52032 11.5067 6.73585 11.5348 6.95341 11.5413L8.69053 11.5933L7.24662 10.6261C6.43952 10.0855 6.07507 9.1193 6.26628 8.21308C7.74939 9.7136 9.74595 10.6152 11.8714 10.7217L12.5329 10.7548L12.3835 10.1095C12.1967 9.30294 12.452 8.45824 13.0532 7.89197L13.0532 7.89193C13.9853 7.01383 15.4506 7.0589 16.3266 7.99243L16.5163 8.19454L16.7881 8.14081C16.8539 8.12782 16.9194 8.11375 16.9846 8.09863L17.2998 9.02187C17.3048 9.02127 17.3099 9.02067 17.3149 9.02006C17.2638 9.06012 17.2119 9.09925 17.1593 9.13744Z",
                                                                    fill: "#6B7099",
                                                                    stroke:
                                                                      "#6B7099",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "px-4 py-5 md:px-8",
                                      children: (0, a.jsx)("div", {
                                        className: "text-sm text-light-content",
                                        children: (0, a.jsx)(n.YI, {
                                          value: c.bio,
                                          components: _.fs,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              })
            : null;
        },
        V = (e) => {
          let { onBioSelect: l, bios: s } = e;
          return (0, a.jsx)("div", {
            className:
              "container mx-auto grid grid-cols-1 gap-5 text-center md:grid-cols-3 lg:grid-cols-4",
            children:
              s &&
              s.map((e) =>
                (0, a.jsx)(
                  "div",
                  {
                    className: "flex",
                    children: (0, a.jsxs)("div", {
                      className:
                        "w-full cursor-pointer rounded-xl bg-brand-gray",
                      onClick: () => l(e),
                      children: [
                        (0, a.jsx)(I(), {
                          src: (0, L.i)(e.image)
                            .fit("clip")
                            .quality(90)
                            .auto("format")
                            .url(),
                          alt: e.name || "Image of ".concat(e.name) || 0,
                          width: 400,
                          height: 400,
                          className:
                            "min-h-[150px] w-full rounded-t-xl object-cover grayscale md:min-h-[247px]",
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "flex max-h-[200px] flex-col items-center p-4",
                          children: [
                            (0, a.jsx)("span", {
                              className: "text-xl font-bold text-light-title",
                              children: e.name,
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "mb-4 flex-grow text-base text-light-content",
                              children: e.job,
                            }),
                            (0, a.jsx)("span", {
                              className: "font-bold text-brand-primary",
                              children: "Read Bio",
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  e.id
                )
              ),
          });
        };
      var Z = (e) => {
          let { title: l, content: s, bios: t } = e,
            [c, r] = (0, u.useState)(null);
          return (0, a.jsxs)("div", {
            className: "container px-4 py-24",
            children: [
              (0, a.jsxs)("div", {
                className: "text-center",
                children: [
                  l && (0, a.jsx)(n.YI, { value: l, components: _.mq }),
                  s &&
                    (0, a.jsx)("div", {
                      className: "mb-10",
                      children: (0, a.jsx)(n.YI, {
                        value: s,
                        components: _.Zy,
                      }),
                    }),
                ],
              }),
              (0, a.jsx)(V, { bios: t, onBioSelect: (e) => r(e) }),
              (0, a.jsx)(S, {
                isOpen: !!c,
                onClose: () => r(null),
                selectedBio: c,
              }),
            ],
          });
        },
        T = s(97166),
        Y = s(13496);
      let B = {
        block: {
          h2: (e) =>
            (0, a.jsx)(t.X6, {
              tag: "h2",
              color: "light-title",
              className:
                "pb-4 sm:pb-4 md:!pb-4 lg:!pb-9 xl:!pb-9 xl:text-4xl 2xl:text-4xl",
              ...e,
            }),
          h5: (e) =>
            (0, a.jsx)(t.X6, {
              tag: "h5",
              color: "light-title",
              className: "!text-lg",
              ...e,
            }),
          normal: (e) =>
            (0, a.jsx)(t.nv, {
              color: "light-content",
              variant: "regular",
              className: "leading-2 mb-4",
              ...e,
            }),
        },
        list: {
          number: (e) =>
            (0, a.jsx)("ol", {
              className: "list-decimal pb-6 pl-4 text-base leading-normal",
              children: e.children,
            }),
          bullet: (e) =>
            (0, a.jsx)("ul", {
              className: "list-disc pb-6 pl-4 text-base leading-normal",
              children: e.children,
            }),
        },
        listItem: {
          number: (e) => (0, a.jsx)("li", { children: e.children }),
          bullet: (e) => (0, a.jsx)("li", { children: e.children }),
        },
        marks: {
          colorHighlight: (e) =>
            (0, a.jsx)(t.Dr, {
              color: "primary",
              className:
                "pb-0 sm:pb-4 md:!pb-4 lg:!pb-9 xl:!pb-9 xl:text-4xl 2xl:text-4xl",
              ...e,
            }),
          link: (e) => {
            let { value: l, children: s } = e,
              { blank: t, href: c } = l;
            return (0, a.jsx)("a", {
              href: c,
              rel: "noopener noreferrer",
              className:
                "text-light-link hover:text-light-link/80 font-semibold hover:cursor-pointer",
              children: s,
            });
          },
        },
        types: {
          divider: (e) =>
            (0, a.jsx)(t.iz, { variant: "thin", className: "mb-4" }),
        },
      };
      var D = (e) => {
          let { data: l } = e;
          return (0, a.jsx)("div", {
            className: "container mx-auto",
            children: (0, a.jsx)("div", {
              className: "overflow-hidden bg-white py-24 sm:py-32",
              children: (0, a.jsx)("div", {
                className: "mx-auto max-w-7xl md:px-6 lg:px-8",
                children: (0, a.jsxs)("div", {
                  className:
                    "grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start",
                  children: [
                    (0, a.jsx)("div", {
                      className: "px-6 lg:px-0 lg:pr-4 lg:pt-4",
                      children: (0, a.jsx)("div", {
                        className: "mx-auto max-w-2xl lg:mx-0 lg:max-w-lg",
                        children: (0, a.jsx)("div", {
                          className: "mt-6",
                          children: (0, a.jsx)(n.YI, {
                            value: l.content,
                            components: B,
                          }),
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "h-full min-h-[25rem] sm:min-h-[40rem] sm:px-6 lg:px-0",
                      children: (0, a.jsxs)("div", {
                        className:
                          "bg-brand-primary relative isolate h-full overflow-hidden px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white",
                            "aria-hidden": "true",
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "absolute bottom-0 right-0 h-[90%] w-[90%]",
                            children: (0, a.jsx)(I(), {
                              src: l.image,
                              alt: l.imageAlt || "Image",
                              fill: !0,
                              style: { objectFit: "cover" },
                              priority: !0,
                              className: "rounded-tl-xl",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-xl",
                            "aria-hidden": "true",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        E = s(30195);
      E.z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid ISO-8601 date format"),
        E.z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/,
            "Invalid ISO-8601 date-time format"
          ),
        E.z.object({
          _type: E.z.literal("geopoint"),
          lat: E.z.number(),
          lng: E.z.number(),
          alt: E.z.number().optional(),
        });
      let P = E.z.object({
          _type: E.z.string(),
          _ref: E.z.string(),
          _key: E.z.string().optional(),
          _weak: E.z.boolean().optional(),
          _strengthenOnPublish: E.z
            .object({
              type: E.z.string(),
              weak: E.z.boolean().optional(),
              template: E.z
                .object({
                  id: E.z.string(),
                  params: E.z.record(
                    E.z.union([E.z.string(), E.z.number(), E.z.boolean()])
                  ),
                })
                .optional(),
            })
            .optional(),
        }),
        q = E.z.object({
          _type: E.z.literal("sanity.imageCrop").optional(),
          left: E.z.number(),
          bottom: E.z.number(),
          right: E.z.number(),
          top: E.z.number(),
        }),
        R = E.z.object({
          _type: E.z.literal("sanity.imageHotspot").optional(),
          width: E.z.number(),
          height: E.z.number(),
          x: E.z.number(),
          y: E.z.number(),
        });
      E.z
        .object({
          asset: P.optional(),
          crop: q.optional(),
          hotspot: R.optional(),
        })
        .passthrough();
      let W = E.z
          .object({ _type: E.z.string(), _key: E.z.string().optional() })
          .extend({})
          .passthrough(),
        J = E.z
          .object({ _type: E.z.string(), _key: E.z.string() })
          .passthrough(),
        X = E.z.object({
          _type: E.z.literal("span"),
          _key: E.z.string().optional(),
          text: E.z.string(),
          marks: E.z.array(E.z.string()).optional(),
        }),
        F = E.z.union([
          E.z.literal("normal"),
          E.z.literal("blockquote"),
          E.z.literal("h1"),
          E.z.literal("h2"),
          E.z.literal("h3"),
          E.z.literal("h4"),
          E.z.literal("h5"),
          E.z.literal("h6"),
          E.z.string(),
        ]),
        O = E.z.union([
          E.z.literal("bullet"),
          E.z.literal("number"),
          E.z.string(),
        ]),
        G = E.z.object({
          _type: E.z.union([E.z.literal("block"), E.z.string()]),
          _key: E.z.string().optional(),
          children: E.z.array(E.z.union([W, X])),
          markDefs: E.z.array(J).optional(),
          style: F.optional(),
          listItem: O.optional(),
          level: E.z.number().optional(),
        }),
        A = E.z.union([G, W]),
        $ = E.z.union([E.z.literal(0), E.z.literal(1), E.z.literal(2)]),
        U = E.z.object({
          comparisonCategoryName: E.z.string(),
          diligentRating: $,
          competitorRating: $,
          comparisonDescription: E.z.array(A),
        }),
        K = E.z.object({
          theme: E.z.enum(["light", "dark"]),
          competitorName: E.z
            .object({ name: E.z.string() })
            .transform((e) => e.name),
          competitionComparison: E.z.array(U),
        }),
        Q = { dark: "bg-brand-dim", light: "bg-white" },
        ee = { dark: "!text-dark-content", light: "!text-light-content" },
        el = {
          block: {
            h1: (e) => (0, a.jsx)(t.X6, { tag: "h1", color: "", ...e }),
            h2: (e) =>
              (0, a.jsx)(t.X6, {
                tag: "h2",
                color: "",
                className: "lg:pt10 pt-6",
                ...e,
              }),
            h3: (e) =>
              (0, a.jsx)(t.X6, {
                tag: "h3",
                color: "",
                className: "pb-3 pt-5",
                ...e,
              }),
            h4: (e) => (0, a.jsx)(t.X6, { tag: "h4", color: "", ...e }),
            h5: (e) => (0, a.jsx)(t.X6, { tag: "h5", color: "", ...e }),
            h6: (e) => (0, a.jsx)(t.X6, { tag: "h6", color: "", ...e }),
            normal: (e) =>
              (0, a.jsx)(t.nv, { color: "", variant: "", className: "", ...e }),
          },
          list: {
            number: (e) =>
              (0, a.jsx)("ol", {
                className: "list-decimal pb-6 pl-4 text-base leading-normal",
                ...e,
              }),
            bullet: (e) =>
              (0, a.jsx)("ul", {
                className: "list-disc pb-6 pl-4 text-base leading-normal",
                ...e,
              }),
          },
          listItem: {
            number: (e) => (0, a.jsx)("li", { ...e }),
            bullet: (e) => (0, a.jsx)("li", { ...e }),
          },
          marks: {
            link: (e) => {
              let { value: l, children: s } = e,
                { blank: t, href: c } = l;
              return (0, a.jsx)("a", {
                href: c,
                rel: "noopener noreferrer",
                className:
                  "text-light-link hover:text-light-link/80 font-semibold hover:cursor-pointer",
                children: s,
              });
            },
          },
          types: {
            iconPicker: (e) =>
              (0, a.jsx)(v.J, {
                iconName: e.value.name,
                iconColor: "default",
                iconSize: "default",
              }),
          },
        },
        es = {
          block: {
            h3: (e) =>
              (0, a.jsx)(t.X6, {
                tag: "h3",
                color: "",
                className: "p-0 !pb-0",
                ...e,
              }),
            normal: (e) =>
              (0, a.jsx)(t.nv, {
                color: "",
                variant: "regular",
                className: "pb-8 pt-4 text-sm",
                ...e,
              }),
          },
          marks: {
            link: (e) => {
              let { value: l, children: s } = e,
                { blank: t, href: c } = l;
              return (0, a.jsx)("a", {
                href: c,
                rel: "noopener noreferrer",
                className:
                  "text-light-link hover:text-light-link/80 font-semibold hover:cursor-pointer",
                children: s,
              });
            },
          },
          types: {
            iconPicker: (e) =>
              (0, a.jsx)(v.J, {
                iconName: e.value.name,
                iconColor: "default",
                iconSize: "default",
              }),
          },
        };
      var ea = s(57937),
        et = s(11163),
        ec = s(60829),
        er = (e) => {
          var l, s, t, c, r, i;
          let {
            mainSection: o,
            additionalInfo: d,
            colorTheme: m,
            backgroundImage: x,
          } = e.data;
          return ((0, et.useRouter)(), o && d && m)
            ? (0, a.jsx)("div", {
                className: "bg-cover bg-center py-8 md:py-16 lg:py-20 ".concat(
                  x ? "" : Q[m]
                ),
                style: {
                  backgroundImage: x
                    ? "url(".concat(x.image.asset.url, ")")
                    : "",
                },
                children: (0, a.jsx)("div", {
                  className: "container mx-auto px-4 lg:px-0",
                  children: (0, a.jsx)("div", {
                    className: "rounded-sm px-6 py-8 ".concat(Q[m]),
                    children: (0, a.jsxs)("div", {
                      className:
                        "grid grid-cols-1 items-center gap-4 lg:grid-cols-2",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "mb-8 text-center lg:mb-0 lg:text-left",
                          children: [
                            (0, a.jsx)("div", {
                              className: "mb-4 ".concat(ee[m]),
                              children: (0, a.jsx)(n.YI, {
                                value: o.content,
                                components: el,
                              }),
                            }),
                            (null === (l = o.button) || void 0 === l
                              ? void 0
                              : l.text) &&
                              (0, a.jsx)(ec.M, {
                                href: o.button.href,
                                children:
                                  null === (s = o.button) || void 0 === s
                                    ? void 0
                                    : s.text,
                              }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "grid grid-cols-1 md:grid-cols-2",
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "flex flex-col items-center justify-start border-b border-b-brand-divider px-4 py-6 text-center md:items-start md:border-b-0 md:border-r md:border-r-brand-divider md:py-0 md:text-left",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "flex flex-row items-center gap-2",
                                  children: [
                                    d.left.iconName &&
                                      (0, a.jsx)(v.J, {
                                        iconName: d.left.iconName,
                                        iconColor: "default",
                                        iconSize: "default",
                                      }),
                                    (0, a.jsx)("div", {
                                      className: " ".concat(ee[m]),
                                      children: (0, a.jsx)(n.YI, {
                                        value: d.left.title,
                                        components: es,
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className: "flex-grow ".concat(ee[m]),
                                  children: (0, a.jsx)(n.YI, {
                                    value: d.left.content,
                                    components: es,
                                  }),
                                }),
                                d.left.link &&
                                  (0, a.jsx)(ea.r, {
                                    href:
                                      null === (t = d.left.link) || void 0 === t
                                        ? void 0
                                        : t.href,
                                    arrow: !0,
                                    intent: "dark",
                                    children:
                                      null === (c = d.left.link) || void 0 === c
                                        ? void 0
                                        : c.text,
                                  }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "flex flex-col items-center justify-start px-4 py-6 text-center md:items-start md:py-0 md:text-left",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "flex flex-row items-center gap-2",
                                  children: [
                                    d.right.iconName &&
                                      (0, a.jsx)(v.J, {
                                        iconName: d.right.iconName,
                                        iconColor: "default",
                                        iconSize: "default",
                                      }),
                                    (0, a.jsx)("div", {
                                      className: " ".concat(ee[m]),
                                      children: (0, a.jsx)(n.YI, {
                                        value: d.right.title,
                                        components: es,
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className: "flex-grow ".concat(ee[m]),
                                  children: (0, a.jsx)(n.YI, {
                                    value: d.right.content,
                                    components: es,
                                  }),
                                }),
                                d.right.link &&
                                  (0, a.jsx)(ea.r, {
                                    href:
                                      null === (r = d.right.link) ||
                                      void 0 === r
                                        ? void 0
                                        : r.href,
                                    intent: "dark",
                                    arrow: !0,
                                    children:
                                      null === (i = d.right.link) ||
                                      void 0 === i
                                        ? void 0
                                        : i.text,
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              })
            : null;
        },
        ei = s(19665),
        en = s(42184),
        eo = s(62902),
        ed = s(21038);
      let em = {
        block: {
          h1: (e) =>
            (0, a.jsx)(t.X6, { tag: "h1", color: "light-title", ...e }),
          h2: (e) =>
            (0, a.jsx)(t.X6, {
              tag: "h2",
              color: "light-title",
              className: "lg:pt10 pt-6",
              ...e,
            }),
          h3: (e) =>
            (0, a.jsx)(t.X6, {
              tag: "h3",
              color: "light-title",
              className: "pb-3 pt-5",
              ...e,
            }),
          h4: (e) =>
            (0, a.jsx)(t.X6, { tag: "h4", color: "light-title", ...e }),
          h5: (e) =>
            (0, a.jsx)(t.X6, { tag: "h5", color: "light-title", ...e }),
          h6: (e) =>
            (0, a.jsx)(t.X6, { tag: "h6", color: "light-title", ...e }),
          normal: (e) =>
            (0, a.jsx)(t.nv, {
              color: "",
              variant: "regular",
              className:
                "leading-2 mb-1 text-xl font-thin md:text-base md:font-normal",
              ...e,
            }),
          blockquote: (e) => (0, a.jsx)(eo.Z, { color: "red", ...e }),
        },
        list: {
          number: (e) =>
            (0, a.jsx)("ol", {
              className: "list-decimal pb-6 pl-4 text-base leading-normal",
              ...e,
            }),
          bullet: (e) =>
            (0, a.jsx)("ul", {
              className: "list-disc pb-6 pl-4 text-base leading-normal",
              ...e,
            }),
        },
        listItem: {
          number: (e) => (0, a.jsx)("li", { ...e }),
          bullet: (e) => (0, a.jsx)("li", { ...e }),
        },
        marks: {
          link: (e) => {
            let { value: l, children: s } = e,
              { blank: t, href: c } = l;
            return (0, a.jsx)("a", {
              href: c,
              rel: "noopener noreferrer",
              className:
                "text-light-link hover:text-light-link/80 font-semibold hover:cursor-pointer",
              children: s,
            });
          },
        },
        types: {
          image: (e) =>
            (0, a.jsx)("div", {
              className: "py-6",
              children: (0, a.jsx)(en.c, {
                hasCover: !1,
                isRounded: !1,
                coverVariant: "type3",
                src: (0, L.i)(e.value).url(),
                blurDataURL: (0, L.i)(e.value).width(10).blur(20).url(),
                alt: e.value.alt,
                width: 1e3,
                height: 300,
                className:
                  "rounded-md rounded-br-none object-cover md:min-h-[300px] lg:min-h-[500px]",
              }),
            }),
          table: (e) => (0, a.jsx)(ed.S, { data: e.value }),
        },
      };
      var ex = (e) => {
          let {
            imageSrc: l,
            imageAlt: s,
            companyLogo: c,
            companyLogoFilter: r,
            title: i,
            content: o,
            link: m,
            name: x,
            subtitle: h,
          } = e.data;
          return (0, a.jsx)("div", {
            className: "bg-white pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32",
            children: (0, a.jsx)("div", {
              className:
                "container bg-brand-dim pb-20 sm:pb-24 md:rounded xl:pb-0",
              children: (0, a.jsxs)("div", {
                className:
                  "mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-2 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "-mt-8 w-full md:max-w-[455px] xl:-mb-8 xl:w-96 xl:max-w-[255px] xl:flex-none",
                    children: (0, a.jsx)("div", {
                      className:
                        "relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto",
                      children: (0, a.jsx)(d.p9, {
                        className:
                          "absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl",
                        image: l,
                        alt: s || "Image for ".concat(i),
                        width: 455,
                        height: 227,
                      }),
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "relative w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-11",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex flex-col-reverse items-center justify-between gap-2 lg:flex-row",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "flex flex-row items-center justify-start gap-6",
                            children: (0, a.jsxs)("div", {
                              className:
                                "flex flex-col items-center pl-3 md:items-start md:border-l-4",
                              children: [
                                (0, a.jsx)(t.nv, {
                                  variant: "semibold",
                                  color: "dark-content",
                                  className: "!pb-0 text-xl md:!pb-0",
                                  children: x,
                                }),
                                h &&
                                  (0, a.jsx)(t.Dr, {
                                    className: "text-xs font-thin",
                                    color: "dark-content",
                                    children: h,
                                  }),
                              ],
                            }),
                          }),
                          c &&
                            (0, a.jsx)("div", {
                              className:
                                "w-fit max-w-[120px] text-center md:top-[5%]",
                              children: (0, a.jsx)("img", {
                                src: c,
                                alt: i,
                                className: r
                                  ? "brightness-0 invert filter"
                                  : "",
                              }),
                            }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "relative isolate pb-9 pt-6 sm:pt-12",
                        children: (0, a.jsx)("blockquote", {
                          className:
                            "text-lg font-semibold leading-8 text-dark-content sm:leading-9",
                          children: (0, a.jsx)(n.YI, {
                            value: o,
                            components: em,
                          }),
                        }),
                      }),
                      m &&
                        m.text &&
                        (0, a.jsx)("div", {
                          className:
                            "flex w-full flex-row justify-center xl:justify-end",
                          children: (0, a.jsx)(ei.n, {
                            url: m.href,
                            children: m.text,
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        eh = s(92017),
        eg = s(32564),
        ep = s(83422),
        ev = s(37862),
        eu = s(5600),
        ej = s(31089),
        ef = s(63955),
        eb = s(40478);
      let eN = (e) => {
          let { formId: l, buttonText: s, query: t, setShowThankYou: c } = e,
            [r, i] = (0, u.useState)({ label: "", value: "" }),
            [n, o] = (0, u.useState)({ label: "", value: "" }),
            [d, m] = (0, u.useState)(!1),
            [x, h] = (0, u.useState)(!1),
            { regionOptions: g, showRegion: p } = (0, ep.y)(r),
            {
              control: v,
              register: j,
              handleSubmit: f,
              formState: { errors: b },
            } = (0, ef.cI)(),
            N = (0, u.useMemo)(() => (0, ej.Z)("country").getData(), []),
            y = (0, u.useMemo)(() => (0, ej.Z)("partner").getData(), []),
            { setFormId: w } = (0, ev.P)(),
            z = (0, eu.X)("utms", {});
          (0, u.useEffect)(() => {
            l && w(l);
          }, [l, w]),
            (0, u.useEffect)(() => {
              "Other" === n.value ? h(!0) : h(!1);
            }, [n]);
          let k = (e) => {
            var s, a, t;
            let {
                utm_campaign: r,
                utm_content: i,
                utm_medium: n,
                utm_source: o,
                utm_term: d,
                gclid: x,
              } = z,
              h = window.MktoForms2.getForm(l);
            h.validate(),
              h.setValues({
                FirstName: e.FirstName,
                LastName: e.LastName,
                Email: e.WorkEmail,
                Title: e.Role,
                Company: e.CompanyName,
                Country:
                  null === (s = e.Country) || void 0 === s ? void 0 : s.label,
                State:
                  null === (a = e.State) || void 0 === a ? void 0 : a.label,
                becomeaPartnerType:
                  null === (t = e.PartnerType) || void 0 === t
                    ? void 0
                    : t.label,
                becomeaPartnerTypeOther: e.becomeaPartnerTypeOther || "",
                UTM_Campaign_Content__c: i || "",
                UTM_Campaign_Medium__c: n || "",
                UTM_Campaign_Name__c: r || "",
                UTM_Campaign_Source__c: o || "",
                UTM_Campaign_Term__c: d || "",
                GCLID__c: x || "",
                Marketing_Single_Opt_In__c: null,
                marketingRequestedGDPR: "True",
              }),
              h.submit(),
              h.onSubmit(() => {
                m(!0);
              }),
              h.onSuccess(() => (m(!1), c(!0), !1));
          };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("form", {
                onSubmit: f((e) => {
                  k(e);
                }),
                className:
                  "border-brand-gray-100 rounded-xl border bg-brand-white px-10 py-12 shadow-card lg:max-w-lg",
                children: [
                  (0, a.jsxs)("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 lg:gap-3",
                    children: [
                      (0, a.jsx)(eb.II, {
                        label: "First name",
                        name: "FirstName",
                        register: j,
                        error: b.FirstName,
                        errorMessage: "This field is required",
                        required: !0,
                        placeholder: "First Name",
                      }),
                      (0, a.jsx)(eb.II, {
                        label: "Last name",
                        name: "LastName",
                        register: j,
                        error: b.LastName,
                        errorMessage: "This field is required",
                        required: !0,
                        placeholder: "Last Name",
                      }),
                    ],
                  }),
                  (0, a.jsx)(eb.II, {
                    label: "Work email",
                    name: "WorkEmail",
                    register: j,
                    pattern: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    validateEmail: !0,
                    error: b.WorkEmail,
                    errorMessage: "Please enter a valid work email address",
                    required: !0,
                    placeholder: "Work Email",
                    icon: "mail",
                  }),
                  (0, a.jsx)(eb.II, {
                    label: "Role",
                    name: "Role",
                    register: j,
                    validateEmail: !0,
                    error: b.Role,
                    errorMessage: "Please enter your role",
                    required: !0,
                    placeholder: "Your role",
                    icon: "hub",
                  }),
                  (0, a.jsx)(eb.II, {
                    label: "Your company name",
                    name: "CompanyName",
                    register: j,
                    error: b.CompanyName,
                    errorMessage: "This field is required",
                    required: !0,
                    placeholder: "Your company",
                    icon: "business",
                  }),
                  (0, a.jsx)(eb.Qf, {
                    name: "Country",
                    options: N,
                    control: v,
                    errorMessage: "Please select a country",
                    setCountry: i,
                  }),
                  p &&
                    (0, a.jsx)(eb.Qf, {
                      name: "State",
                      label:
                        "Canada" === r.label ? "Province/Territory" : "State",
                      options: g,
                      control: v,
                      errorMessage: "Please select a state",
                    }),
                  (0, a.jsx)(eb.Qf, {
                    name: "PartnerType",
                    label: "Partner type",
                    options: y,
                    control: v,
                    errorMessage: "This field is required",
                    icon: "handshake",
                    setPartnerType: o,
                  }),
                  x &&
                    (0, a.jsx)(eb.Kx, {
                      label: "If other, please specify",
                      name: "becomeaPartnerTypeOther",
                      register: j,
                      error: b.becomeaPartnerTypeOther,
                      errorMessage: "This field is required",
                      required: !0,
                      placeholder: "Other partner type...",
                      icon: "fact_check",
                    }),
                  (0, a.jsx)(eg.Z, {
                    className: "mx-auto mt-8 flex font-semibold ".concat(
                      d ? "pointer-events-none opacity-50" : ""
                    ),
                    type: "submit",
                    variant: "primary",
                    disabled: d,
                    children: s || "Submit",
                  }),
                ],
              }),
              (0, a.jsx)("form", {
                hidden: !0,
                className: "hidden",
                id: "mktoForm_".concat(l),
              }),
            ],
          });
        },
        ey = {
          block: {
            normal: (e) =>
              (0, a.jsx)(t.Dr, {
                color: "light-title",
                className:
                  "!pb-0 sm:pb-0 md:!pb-0 lg:pb-0 xl:pb-0 xl:text-5xl 2xl:text-5xl",
                ...e,
              }),
          },
          marks: {
            colorHighlight: (e) =>
              (0, a.jsx)(t.Dr, {
                color: "primary",
                className:
                  "!pb-0 sm:pb-0 md:!pb-0 lg:pb-0 xl:pb-0 xl:text-5xl 2xl:text-5xl",
                ...e,
              }),
          },
        },
        ew = {
          block: {
            h2: (e) =>
              (0, a.jsx)(t.Dr, {
                color: "light-title",
                className: "text-2xl font-semibold leading-tight lg:text-3xl",
                ...e,
              }),
            normal: (e) =>
              (0, a.jsx)(t.nv, {
                className:
                  "text-light-body pt-4 text-base leading-7 lg:text-lg",
                ...e,
              }),
          },
          marks: {
            colorHighlight: (e) =>
              (0, a.jsx)(t.Dr, {
                color: "primary",
                className: "text-2xl font-semibold leading-tight lg:text-3xl",
                ...e,
              }),
          },
        },
        ez = (e) => {
          let {
              title: l,
              description: s,
              image: t,
              form: c,
              thankYouMessage: r,
              assetUrl: i = "",
            } = e.data,
            { formId: o, formCtaText: d } = c,
            [m, x] = (0, u.useState)(!1),
            h = (0, et.useRouter)(),
            g = h.query;
          return (
            (0, u.useEffect)(() => {
              let { query: e } = h;
              "false" === e.gated && x(!0);
            }, [x]),
            (0, a.jsx)("div", {
              className: "bg-hero-industries bg-cover",
              children: (0, a.jsxs)("div", {
                className:
                  "container mx-auto w-full px-3.5 pb-10 pt-12 lg:max-w-5xl lg:px-4",
                children: [
                  (0, a.jsx)("div", {}),
                  (0, a.jsxs)("div", {
                    className:
                      "grid gap-8 pt-2 lg:grid-cols-2 lg:gap-20 lg:pt-12",
                    children: [
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("h1", {
                            className:
                              "text-4xl font-semibold leading-tight lg:text-5xl",
                            children: (0, a.jsx)(n.YI, {
                              value: l,
                              components: ey,
                            }),
                          }),
                          (0, a.jsx)("p", {
                            className: "py-6 text-lg",
                            children: s,
                          }),
                          (0, a.jsx)("div", {
                            className: "relative pt-5 md:pt-8",
                            children:
                              t &&
                              (0, a.jsx)(I(), {
                                src: t.asset
                                  ? (0, L.i)(t.asset).url()
                                  : t.src || "",
                                alt: t.alt ? t.alt : "Hero Image",
                                width: 1e3,
                                height: 1e3,
                                className: "rounded-xl object-contain",
                              }),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        children: [
                          !m &&
                            ((e, l) => {
                              switch (e) {
                                case "12498":
                                default:
                                  return (0, a.jsx)(eh.l, {
                                    formId: e,
                                    buttonText: l || "Submit",
                                    setShowThankYou: x,
                                    query: g,
                                  });
                                case "9702":
                                  return (0, a.jsx)(eN, {
                                    formId: e,
                                    buttonText: l || "Submit",
                                    setShowThankYou: x,
                                    query: g,
                                  });
                              }
                            })(o, d),
                          m &&
                            (0, a.jsx)("div", {
                              className:
                                "border-brand-gray-100 rounded-xl border bg-brand-white px-10 py-12 shadow-card lg:max-w-lg",
                              children:
                                r &&
                                (0, a.jsx)(n.YI, { value: r, components: ew }),
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        ek = {
          block: {
            normal: (e) =>
              (0, a.jsx)(t.X6, {
                tag: "h1",
                color: "light-title",
                className:
                  "pb-0 sm:pb-0 md:!pb-0 lg:pb-0 xl:pb-0 xl:text-5xl 2xl:text-5xl",
                ...e,
              }),
          },
          marks: {
            colorHighlight: (e) =>
              (0, a.jsx)(t.Dr, {
                color: "primary",
                className:
                  "pb-0 sm:pb-0 md:!pb-0 lg:pb-0 xl:pb-0 xl:text-5xl 2xl:text-5xl",
                ...e,
              }),
          },
        },
        eM = {
          block: {
            normal: (e) =>
              (0, a.jsx)(t.nv, {
                color: "light-content",
                variant: "regular",
                ...e,
              }),
          },
        },
        eC = (e) => {
          let { title: l, body: s, button: t, images: c } = e.data;
          return (0, a.jsx)("div", {
            className: "isolate",
            children: (0, a.jsx)("div", {
              className: "relative isolate -z-10",
              children: (0, a.jsx)("div", {
                className: "container overflow-hidden",
                children: (0, a.jsx)("div", {
                  className: "max-w-full",
                  children: (0, a.jsxs)("div", {
                    className:
                      "mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center lg:justify-between",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex w-full max-w-xl flex-col gap-6 pr-0 sm:pr-24 lg:shrink-0 lg:pr-0",
                        children: [
                          (0, a.jsx)(n.YI, { value: l, components: ek }),
                          (0, a.jsx)(n.YI, { value: s, components: eM }),
                          t &&
                            (0, a.jsx)("div", {
                              children: (0, a.jsx)(ec.M, {
                                intent: "primary",
                                href: t.url,
                                children: t.text,
                              }),
                            }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80",
                            children: (0, a.jsxs)("div", {
                              className: "relative",
                              children: [
                                (0, a.jsx)("img", {
                                  src: c.image1.src,
                                  alt:
                                    c.image1.alt || "First image in the grid",
                                  className:
                                    "aspect-[2/3] w-full rounded bg-gray-900/5 object-cover shadow-lg",
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10",
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "relative",
                                children: [
                                  (0, a.jsx)("img", {
                                    src: c.image2.src,
                                    alt:
                                      c.image2.alt ||
                                      "Second image in the grid",
                                    className:
                                      "aspect-[2/3] w-full rounded bg-gray-900/5 object-cover shadow-lg",
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "relative",
                                children: [
                                  (0, a.jsx)("img", {
                                    src: c.image3.src,
                                    alt:
                                      c.image3.alt || "Third image in the grid",
                                    className:
                                      "aspect-[2/3] w-full rounded bg-gray-900/5 object-cover shadow-lg",
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "w-44 flex-none space-y-8 pt-32 sm:pt-0",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "relative",
                                children: [
                                  (0, a.jsx)("img", {
                                    src: c.image4.src,
                                    alt:
                                      c.image4.alt ||
                                      "Fourth image in the grid",
                                    className:
                                      "aspect-[2/3] w-full rounded bg-gray-900/5 object-cover shadow-lg",
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "relative",
                                children: [
                                  (0, a.jsx)("img", {
                                    src: c.image5.src,
                                    alt:
                                      c.image5.alt || "Fifth image in the grid",
                                    className:
                                      "aspect-[2/3] w-full rounded bg-gray-900/5 object-cover shadow-lg",
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        };
      var e_ = s(14056);
      let eL = (e) => {
        let { data: l } = e,
          { color: s, content: t } = l,
          [c, r] = (0, u.useState)("light");
        return (
          (0, u.useEffect)(() => {
            r(s.label);
          }, [s.label]),
          (0, a.jsx)("div", {
            className: "py-6 text-white xl:py-12",
            style: { backgroundColor: s.value },
            children: t.map((e) => {
              switch (e._type) {
                case "logoCarousel":
                  return (0, a.jsx)(e_.Z, { logos: e.logos }, e._key);
                case "sectionWithImage":
                  return (0, a.jsx)(C.Z, { data: e, theme: s.label }, e._key);
                case "statIconText":
                  return (0, a.jsx)(
                    T.Z,
                    { data: e.data, theme: s.label },
                    e._key
                  );
                case "asymmetricSectionWithTextImage":
                  return (0, a.jsx)(
                    m,
                    { data: e.data, theme: s.label },
                    e._key
                  );
                case "cardWithIconSection":
                  return (0, a.jsx)(
                    x.I,
                    { data: e, cards: e, theme: c },
                    e._key
                  );
                default:
                  return null;
              }
            }),
          })
        );
      };
      var eH = s(21611),
        eI = s(92881),
        eS = s(53601);
      s(54794);
      var eV = s(57276);
      let eZ = () =>
          (0, a.jsx)("svg", {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0",
            y: "0",
            xmlSpace: "preserve",
            viewBox: "0 0 2158.75 2334",
            children: (0, a.jsxs)("g", {
              id: "circle__analytics",
              children: [
                (0, a.jsx)("ellipse", {
                  cx: "981.937",
                  cy: "1198.143",
                  className: "fill-[#f1f1f1]",
                  rx: "816.312",
                  ry: "808.5",
                }),
                (0, a.jsx)("path", {
                  d: "m309.131 1500.883-40.312 2.003-2.27-5.464 29.863-27.152 2.055 4.945-7.002 6.277 6.223 14.977 9.389-.531 2.054 4.945zm-16.336-4.093-4.988-12.01-16.457 14.624-.549-1.318 21.994-1.296zM294.742 1465.664l-25.822 9.424-1.609-4.407 5.031-1.836-.17.876c-1.861-.044-3.508-.611-4.936-1.7-1.43-1.089-2.494-2.592-3.193-4.509-.676-1.852-.863-3.656-.564-5.413a9.777 9.777 0 0 1 2.191-4.708c1.16-1.382 2.668-2.412 4.52-3.088l16.721-6.103 1.643 4.504-15.283 5.577c-1.438.524-2.557 1.224-3.361 2.096a5.868 5.868 0 0 0-1.504 3.019c-.199 1.141-.076 2.318.365 3.531.443 1.215 1.109 2.193 1.996 2.937.887.744 1.932 1.205 3.137 1.38 1.203.177 2.508.008 3.914-.505l15.283-5.578 1.641 4.503zM282.607 1429.183c.549 1.717.719 3.34.512 4.869-.207 1.53-.75 2.846-1.631 3.947-.879 1.103-2.047 1.886-3.504 2.352-1.393.444-2.746.538-4.061.28s-2.564-.902-3.75-1.935c-1.186-1.03-2.252-2.466-3.197-4.306l-4.691-9.155 3.789-1.211 4.27 8.166c.83 1.592 1.748 2.646 2.75 3.164 1.006.518 2.074.595 3.207.233 1.068-.342 1.824-1.056 2.262-2.142.438-1.085.449-2.276.035-3.572-.527-1.651-1.332-2.974-2.418-3.965a7.863 7.863 0 0 0-3.75-1.935c-1.414-.297-2.836-.218-4.262.237l-6.703 2.143c-1.424.455-2.416 1.344-2.977 2.664-.559 1.321-.564 2.84-.018 4.557.477 1.49 1.287 2.686 2.432 3.587s2.422 1.431 3.828 1.588l-.783 4.587c-1.354-.104-2.68-.536-3.977-1.3s-2.447-1.77-3.453-3.019-1.758-2.651-2.254-4.206c-.643-2.007-.826-3.894-.551-5.659.273-1.766.955-3.295 2.041-4.588 1.086-1.292 2.502-2.219 4.252-2.777l17.779-5.682 1.414 4.421-4.955 1.583.076-.935c1.18.23 2.318.696 3.418 1.397 1.1.702 2.064 1.607 2.9 2.714.838 1.11 1.494 2.408 1.97 3.898zM275.514 1408.184l-37.102 10.675-1.326-4.606 37.102-10.676 1.326 4.607zM282.428 1391.307c.152.593.256 1.198.309 1.816s.033 1.221-.062 1.806l-4.1 1.055c-.061-.37-.109-.84-.15-1.409a9.339 9.339 0 0 0-.266-1.644c-.398-1.547-1.047-2.635-1.945-3.265-.898-.629-2.266-1.094-4.098-1.395l-4.434-.65 4.027-.931-25.678 18.716-1.281-4.988 20.445-14.686.381 1.482-24.98-2.949-1.309-5.087 32.871 4.343c1.559.196 3.045.577 4.453 1.145a10.138 10.138 0 0 1 3.635 2.462c1.014 1.074 1.74 2.467 2.182 4.179zM262.717 1356.35c.582 2.622.283 4.813-.895 6.571s-3.127 2.938-5.85 3.542l-14.141 3.133 1.07 4.83-4.432.981-.221-.996c-.266-1.194-.838-2.052-1.719-2.57s-1.92-.646-3.115-.381l-2.189.485-1.037-4.681 6.174-1.368-1.334-6.024 4.432-.981 1.334 6.024 13.992-3.1c.896-.199 1.645-.513 2.246-.942.602-.429 1.02-1.018 1.254-1.766.234-.749.23-1.671-.012-2.767a10.233 10.233 0 0 0-.244-.86 53.298 53.298 0 0 0-.314-.948l4.084-.905c.195.41.377.875.543 1.395.169.52.294.962.374 1.328zM229.109 1352.738l-6.004 1.186-.928-4.703 6.004-1.186.928 4.703zm31.272-6.174-26.969 5.324-.928-4.703 26.969-5.324.928 4.703zM256.34 1321.035c.447 2.684.219 5.151-.682 7.403-.898 2.253-2.324 4.153-4.271 5.7-1.949 1.549-4.264 2.545-6.947 2.992-2.717.452-5.23.268-7.539-.555a13.506 13.506 0 0 1-5.838-4.018c-1.584-1.856-2.6-4.125-3.047-6.809-.295-1.777-.252-3.491.127-5.14a13.787 13.787 0 0 1 1.912-4.507c.896-1.354 2.002-2.418 3.322-3.189l2.758 3.833c-1.336.877-2.332 2.042-2.986 3.495s-.84 3.035-.555 4.745c.273 1.644.932 3.06 1.975 4.247 1.043 1.188 2.357 2.047 3.943 2.575 1.588.529 3.305.64 5.148.332 1.811-.301 3.383-.958 4.713-1.974 1.33-1.014 2.305-2.253 2.922-3.718.619-1.464.791-3.018.518-4.661-.285-1.711-.979-3.138-2.084-4.28-1.102-1.144-2.447-1.928-4.035-2.354l1.418-4.527c1.498.303 2.889.95 4.174 1.942a13.657 13.657 0 0 1 3.27 3.644c.891 1.44 1.487 3.047 1.784 4.824zM252.223 1292.727c.346 2.731-.027 5.195-1.121 7.39-1.092 2.194-2.73 3.876-4.912 5.043l-2.303-3.563c1.521-.98 2.668-2.206 3.441-3.675a7.726 7.726 0 0 0 .846-4.683c-.184-1.449-.691-2.619-1.523-3.508s-1.82-1.261-2.969-1.115c-.809.103-1.43.412-1.861.93a5.183 5.183 0 0 0-.959 1.767 9.69 9.69 0 0 0-.404 1.876l-.645 4.246c-.367 2.514-1.145 4.42-2.334 5.719s-2.662 2.059-4.416 2.281c-1.619.205-3.078-.029-4.381-.705-1.303-.674-2.381-1.686-3.238-3.034-.855-1.348-1.396-2.915-1.623-4.704-.303-2.395.031-4.621 1.004-6.682.975-2.059 2.506-3.633 4.596-4.72l2.258 3.621c-1.34.786-2.338 1.838-2.994 3.155-.656 1.316-.887 2.734-.695 4.252.176 1.384.652 2.437 1.428 3.16.777.725 1.707 1.019 2.785.882.742-.095 1.332-.375 1.77-.841.439-.467.748-1.003.928-1.608s.32-1.188.422-1.75l.752-4.619c.357-2.308 1.135-4.161 2.328-5.564 1.193-1.401 2.734-2.222 4.623-2.461 1.518-.192 2.938.057 4.258.746 1.322.689 2.414 1.733 3.275 3.132.861 1.398 1.416 3.076 1.664 5.032zM248.447 1255.392c.148 2.137-.121 4.064-.803 5.78-.682 1.718-1.73 3.094-3.141 4.128-1.412 1.034-3.084 1.618-5.018 1.751-1.662.114-3.15-.09-4.463-.612-1.314-.523-2.461-1.202-3.439-2.038a17.863 17.863 0 0 1-2.504-2.588 68.283 68.283 0 0 1-1.66-2.212l-1.879-2.784c-.645-.944-1.336-1.851-2.078-2.72s-1.582-1.578-2.523-2.127-1.955-.785-3.041-.711c-1.322.092-2.402.609-3.24 1.553-.838.944-1.213 2.077-1.121 3.4.092 1.322.609 2.395 1.551 3.216.943.821 2.109 1.184 3.5 1.088.916-.062 1.801-.345 2.65-.847a13.143 13.143 0 0 0 2.383-1.8 42.558 42.558 0 0 0 2.053-2.085l20.662-22.127.436 6.309-17.736 19.319a53.892 53.892 0 0 1-2.682 2.639 16.11 16.11 0 0 1-3.217 2.292c-1.182.644-2.52 1.017-4.012 1.119-1.865.129-3.516-.192-4.949-.962a9.271 9.271 0 0 1-3.467-3.212c-.879-1.371-1.377-2.922-1.496-4.651-.117-1.696.166-3.274.85-4.736a9.193 9.193 0 0 1 2.973-3.604c1.299-.94 2.812-1.472 4.541-1.591 1.799-.124 3.396.192 4.795.948s2.605 1.695 3.619 2.817a35.674 35.674 0 0 1 2.598 3.195l1.875 2.733a34.889 34.889 0 0 0 2.119 2.563 11.84 11.84 0 0 0 2.764 2.264c1.029.611 2.258.867 3.682.769 1.697-.117 2.982-.759 3.855-1.927.873-1.167 1.25-2.634 1.127-4.397-.076-1.119-.332-2.106-.766-2.964-.434-.855-.98-1.61-1.639-2.264s-1.371-1.227-2.137-1.719a53.83 53.83 0 0 0-2.268-1.378l-9.053-5.255-.375-5.444 10.953 6.146c.85.453 1.811 1.035 2.881 1.744a20.113 20.113 0 0 1 3.09 2.548c.988.989 1.828 2.167 2.518 3.533.691 1.368 1.101 3.001 1.232 4.901zM245.984 1219.806l-38.211-13-.096-5.915 37.768-14.231.088 5.354-8.822 3.255.262 16.216 8.924 2.967.087 5.354zm-13.677-9.827-.211-13.003-20.688 7.527-.023-1.428 20.922 6.904zM246.734 1172.671c-.07 2.005-.592 3.772-1.564 5.303-.973 1.531-2.297 2.709-3.977 3.534-1.68.826-3.59 1.2-5.73 1.125l-17.176-.604.168-4.791 16.666.587c1.359.048 2.559-.19 3.598-.716a6.114 6.114 0 0 0 2.479-2.26c.613-.981.941-2.118.988-3.41.045-1.291-.203-2.447-.746-3.471-.541-1.022-1.346-1.833-2.414-2.433-1.068-.599-2.35-.925-3.844-.978l-16.26-.572.168-4.791 27.473.968-.164 4.638-5.352-.188.484-.697c1.711.707 3.023 1.842 3.938 3.404.914 1.563 1.336 3.347 1.265 5.352zM248.148 1140.83c-.186 2.68-1.092 4.696-2.721 6.048-1.627 1.354-3.83 1.934-6.613 1.74l-14.449-1.001-.342 4.936-4.527-.314.07-1.018c.084-1.221-.223-2.204-.92-2.952-.697-.746-1.658-1.162-2.879-1.247l-2.238-.155.33-4.782 6.311.437.426-6.155 4.527.313-.426 6.156 14.297.99c.916.063 1.723-.025 2.422-.267.697-.241 1.266-.688 1.703-1.339s.693-1.537.771-2.656c.016-.236.02-.535.01-.894-.008-.358-.02-.691-.033-.999l4.174.289c.07.448.113.945.125 1.491a14.88 14.88 0 0 1-.018 1.379zM250.459 1118.838c-.275 2.604-1.141 4.905-2.6 6.906-1.457 2-3.336 3.521-5.633 4.561-2.297 1.041-4.816 1.417-7.555 1.129s-5.107-1.17-7.105-2.646a14.09 14.09 0 0 1-4.539-5.605c-1.027-2.262-1.402-4.711-1.125-7.349.281-2.671 1.152-5.007 2.609-7.008a13.73 13.73 0 0 1 5.578-4.516c2.26-1.01 4.777-1.369 7.549-1.077 2.773.291 5.166 1.193 7.178 2.703 2.012 1.512 3.523 3.389 4.535 5.631 1.012 2.245 1.381 4.667 1.108 7.271zm-4.566-.481c.182-1.725-.078-3.315-.779-4.774-.701-1.458-1.754-2.662-3.158-3.614-1.404-.95-3.02-1.522-4.846-1.714-1.824-.192-3.506.033-5.045.674-1.537.642-2.801 1.603-3.789 2.884-.99 1.28-1.576 2.782-1.758 4.507-.178 1.691.086 3.266.785 4.724.703 1.459 1.738 2.67 3.105 3.635 1.369.964 2.967 1.542 4.791 1.734 1.826.192 3.527-.039 5.1-.694 1.574-.655 2.855-1.623 3.844-2.903.99-1.282 1.572-2.767 1.75-4.459zM252.057 1098.078l-27.143-4.347.74-4.633 5.541.887-.912.526c-1.637-.951-2.791-2.237-3.461-3.86-.67-1.622-.857-3.356-.562-5.203.34-2.115 1.232-3.926 2.678-5.434 1.447-1.507 3.178-2.427 5.193-2.758l-.158 1.317c-2.002-1.044-3.414-2.492-4.238-4.346-.82-1.853-1.068-3.804-.74-5.852.301-1.88 1.01-3.514 2.127-4.902 1.119-1.387 2.521-2.411 4.211-3.07s3.508-.833 5.455-.521l17.574 2.813-.758 4.734-16.064-2.572c-1.51-.242-2.828-.178-3.955.192-1.127.371-2.051.98-2.773 1.829-.721.849-1.178 1.877-1.371 3.086-.193 1.208-.082 2.337.336 3.385.418 1.049 1.111 1.935 2.08 2.657.969.724 2.191 1.203 3.668 1.439l16.064 2.572-.758 4.734-16.064-2.572c-1.51-.242-2.83-.178-3.957.192-1.125.371-2.049.973-2.768 1.804-.719.832-1.178 1.869-1.375 3.111-.193 1.208-.082 2.337.336 3.385.418 1.049 1.109 1.935 2.078 2.657.969.724 2.193 1.203 3.67 1.439l16.064 2.572-.758 4.739zM262.215 1043.82c-.377 1.763-1.035 3.256-1.975 4.48-.939 1.226-2.064 2.098-3.375 2.617-1.311.521-2.713.62-4.209.301-1.43-.306-2.65-.896-3.664-1.773-1.012-.876-1.777-2.056-2.295-3.54-.518-1.483-.729-3.259-.635-5.325l.473-10.276 3.891.83-.35 9.208c-.07 1.794.203 3.164.816 4.112.615.948 1.504 1.547 2.668 1.795 1.098.234 2.105-.011 3.025-.736.92-.724 1.521-1.752 1.805-3.082.363-1.696.32-3.243-.129-4.644a7.855 7.855 0 0 0-2.295-3.54c-1.08-.961-2.354-1.598-3.816-1.91l-6.883-1.47c-1.463-.312-2.766-.034-3.906.835-1.143.869-1.9 2.185-2.277 3.946-.326 1.53-.217 2.971.328 4.32.547 1.352 1.391 2.444 2.533 3.279l-2.957 3.592c-1.123-.761-2.059-1.795-2.805-3.102s-1.246-2.751-1.5-4.336a12.902 12.902 0 0 1 .133-4.77c.439-2.062 1.217-3.79 2.332-5.187 1.115-1.396 2.465-2.385 4.049-2.968 1.586-.583 3.275-.683 5.07-.3l18.256 3.897-.969 4.539-5.088-1.086.529-.773c.91.786 1.668 1.756 2.273 2.91a11.167 11.167 0 0 1 1.172 3.796c.177 1.38.101 2.832-.225 4.361zM269.334 1011.809c-.65 2.606-1.893 4.435-3.73 5.483s-4.109 1.236-6.816.562l-14.055-3.501-1.195 4.8-4.404-1.097.246-.989c.297-1.188.166-2.21-.391-3.067-.559-.856-1.432-1.434-2.619-1.729l-2.178-.543 1.16-4.651 6.137 1.528 1.49-5.988 4.404 1.098-1.49 5.987 13.906 3.464c.891.222 1.701.275 2.43.159.73-.116 1.367-.456 1.91-1.022.545-.565.951-1.393 1.223-2.481.057-.23.113-.523.166-.878.055-.354.102-.685.141-.989l4.059 1.011c-.008.453-.053.95-.135 1.49s-.169.99-.259 1.353zM240.861 993.601l-5.904-1.616 1.268-4.624 5.902 1.616-1.266 4.624zm30.743 8.418-26.512-7.26 1.266-4.624 26.514 7.26-1.268 4.624zM279.441 977.135c-.771 2.503-2.064 4.594-3.881 6.275-1.818 1.681-3.953 2.811-6.408 3.388s-5 .46-7.631-.352-4.785-2.134-6.463-3.967a14.117 14.117 0 0 1-3.371-6.376c-.57-2.418-.465-4.894.316-7.429.791-2.565 2.096-4.69 3.912-6.372a13.728 13.728 0 0 1 6.346-3.354c2.412-.555 4.951-.422 7.615.399 2.664.822 4.838 2.168 6.52 4.039 1.684 1.871 2.803 4.005 3.363 6.4.561 2.399.454 4.848-.318 7.349zm-4.384-1.352c.51-1.657.562-3.269.156-4.835s-1.207-2.951-2.4-4.156c-1.195-1.204-2.67-2.077-4.424-2.618s-3.447-.645-5.08-.312c-1.633.334-3.059 1.032-4.275 2.098-1.219 1.065-2.084 2.427-2.594 4.084-.502 1.625-.549 3.22-.143 4.786.408 1.566 1.189 2.955 2.346 4.165 1.156 1.211 2.611 2.086 4.367 2.627 1.754.541 3.467.643 5.137.304s3.113-1.041 4.332-2.107c1.216-1.067 2.076-2.411 2.578-4.036zM285.244 956.96l-25.895-9.227 1.576-4.42 5.043 1.797-.688.566c-1.406-1.222-2.311-2.708-2.717-4.459-.404-1.75-.264-3.587.42-5.509.662-1.856 1.67-3.365 3.021-4.526a9.781 9.781 0 0 1 4.691-2.227c1.775-.323 3.594-.154 5.449.507l16.768 5.975-1.609 4.517-15.326-5.462c-1.439-.513-2.748-.69-3.924-.532a5.881 5.881 0 0 0-3.086 1.364c-.881.751-1.537 1.735-1.971 2.952-.436 1.218-.547 2.396-.34 3.533.209 1.14.719 2.161 1.533 3.064.816.904 1.928 1.607 3.338 2.109l15.324 5.461-1.607 4.517z",
                  className: "fill-[#282e37]",
                }),
              ],
            }),
          }),
        eT = () =>
          (0, a.jsx)("svg", {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0",
            y: "0",
            xmlSpace: "preserve",
            viewBox: "0 0 2158.75 2334",
            children: (0, a.jsxs)("g", {
              id: "circle__board-reporting",
              children: [
                (0, a.jsx)("path", {
                  d: "M958.79 52.388c627.437 0 1136.075 500.993 1136.075 1119s-508.638 1119-1136.075 1119",
                  className: "fill-[#f3f3f3] stroke-[#f3f3f3] stroke-[8px]",
                  style: { strokeMiterlimit: 10 },
                }),
                (0, a.jsx)("path", {
                  d: "m1991.519 939.161 45.178-11.068 4.725 19.262c.674 2.748.77 5.236.288 7.465-.482 2.227-1.47 4.099-2.962 5.617-1.492 1.518-3.45 2.574-5.876 3.169-2.224.544-4.379.453-6.464-.276-2.087-.728-3.912-2.097-5.476-4.105l2.229-.611c-.244 2.148-.805 4.014-1.68 5.599-.876 1.585-2.012 2.896-3.407 3.934a12.966 12.966 0 0 1-4.7 2.195c-4.165 1.021-7.771.469-10.82-1.654-3.05-2.123-5.147-5.524-6.295-10.2l-4.74-19.327zm6.936 4.694 3.321 13.538c.653 2.666 1.884 4.627 3.692 5.88 1.807 1.254 3.924 1.583 6.35.989 2.425-.595 4.159-1.868 5.202-3.819 1.042-1.952 1.237-4.261.583-6.928l-3.32-13.538-15.828 3.878zm21.164-5.184 3.215 13.106c.543 2.216 1.618 3.845 3.224 4.887s3.398 1.32 5.38.835c2.062-.505 3.473-1.569 4.231-3.189.76-1.622.868-3.54.324-5.756l-3.215-13.106-13.159 3.223zM2004.119 998.519c-.616-3.236-.428-6.303.566-9.201s2.653-5.365 4.979-7.397c2.324-2.033 5.143-3.365 8.454-3.995 3.312-.63 6.4-.434 9.266.59 2.864 1.024 5.302 2.7 7.313 5.026 2.011 2.327 3.329 5.129 3.954 8.407.616 3.236.428 6.303-.566 9.202-.995 2.897-2.636 5.349-4.923 7.354s-5.108 3.327-8.461 3.965c-3.354.638-6.479.415-9.375-.667-2.897-1.084-5.339-2.78-7.325-5.088-1.987-2.312-3.28-5.043-3.882-8.196zm5.521-1.05c.396 2.074 1.265 3.854 2.606 5.34 1.342 1.486 3.006 2.546 4.992 3.179 1.984.633 4.081.739 6.289.319 2.248-.428 4.148-1.296 5.701-2.602a11.589 11.589 0 0 0 3.412-4.777c.723-1.877.886-3.854.49-5.929-.403-2.117-1.286-3.916-2.649-5.398a11.857 11.857 0 0 0-4.936-3.221c-1.929-.665-4.017-.783-6.265-.355-2.208.42-4.117 1.3-5.727 2.638s-2.766 2.944-3.467 4.819c-.7 1.875-.85 3.871-.446 5.987zM2010.196 1034.591c-.314-2.217-.19-4.229.373-6.037.563-1.807 1.487-3.293 2.773-4.456 1.285-1.163 2.855-1.876 4.71-2.139 1.771-.251 3.424-.091 4.955.482 1.531.572 2.909 1.613 4.133 3.126 1.224 1.512 2.219 3.494 2.988 5.944l3.819 12.258-4.821.683-3.448-10.966c-.68-2.122-1.583-3.605-2.712-4.447-1.129-.844-2.414-1.162-3.856-.958-1.36.192-2.415.907-3.164 2.144-.75 1.236-1.006 2.692-.769 4.364.303 2.133 1.008 3.921 2.117 5.363a9.908 9.908 0 0 0 4.142 3.189c1.651.683 3.405.894 5.261.631l8.469-1.2c1.813-.257 3.189-1.145 4.131-2.664.94-1.52 1.254-3.388.939-5.604-.273-1.924-1-3.561-2.179-4.907a8.825 8.825 0 0 0-4.331-2.746l1.876-5.449c1.613.411 3.126 1.221 4.538 2.429 1.411 1.209 2.598 2.682 3.56 4.424a16.237 16.237 0 0 1 1.87 5.623c.368 2.591.207 4.938-.482 7.042-.689 2.103-1.812 3.829-3.364 5.181-1.554 1.35-3.464 2.186-5.729 2.507l-22.626 3.204-.81-5.709 6.305-.893-.219 1.119a11.576 11.576 0 0 1-3.872-2.396c-1.161-1.072-2.146-2.384-2.954-3.933-.809-1.55-1.35-3.286-1.623-5.209zM2014.547 1062.194l33.469-3.522.605 5.734-6.147.646.803-.722c1.988.598 3.535 1.668 4.64 3.208 1.104 1.54 1.78 3.486 2.028 5.839l.22 2.078-5.465.575-.312-2.961c-.252-2.394-1.191-4.249-2.815-5.564-1.626-1.317-3.783-1.832-6.474-1.549l-19.932 2.098-.62-5.86zM2017.303 1101.265c-.213-3.203.363-6.131 1.73-8.781 1.367-2.653 3.331-4.804 5.891-6.455s5.48-2.585 8.762-2.803c3.365-.223 6.414.315 9.15 1.617 2.735 1.3 4.956 3.174 6.662 5.622 1.707 2.448 2.667 5.273 2.88 8.477.188 2.823-.237 5.371-1.275 7.642-1.038 2.27-2.512 4.103-4.421 5.499l-1.496-.853 20.809-1.379.396 5.942-47.162 3.124-.383-5.753 7.165-.475-.947.824c-2.28-1.034-4.097-2.639-5.451-4.813-1.355-2.176-2.126-4.654-2.31-7.435zm5.64.133c.143 2.15.789 4.033 1.939 5.651 1.15 1.615 2.662 2.859 4.535 3.731 1.872.87 3.931 1.231 6.173 1.083 2.284-.151 4.297-.783 6.038-1.892 1.74-1.11 3.074-2.543 4-4.298s1.318-3.706 1.176-5.856c-.141-2.107-.797-3.979-1.97-5.615a11.342 11.342 0 0 0-4.503-3.734c-1.831-.853-3.908-1.201-6.234-1.047-2.242.148-4.234.767-5.977 1.856-1.743 1.088-3.078 2.511-4.004 4.265s-1.315 3.707-1.173 5.856zM2020.146 1142.727l46.517.243-.082 16.662c-.016 3.126-.612 5.868-1.789 8.229-1.177 2.358-2.852 4.198-5.022 5.517-2.171 1.319-4.714 1.972-7.627 1.956-3.289-.018-6.074-.877-8.354-2.577-2.281-1.702-3.914-3.992-4.898-6.868l-18.91 10.861.035-7.222 20.225-11.426-2.394 4.105.065-13.178-17.795-.093.029-6.209zm23.385 6.331-.053 10.645c-.01 1.857.336 3.486 1.037 4.884a7.803 7.803 0 0 0 3.043 3.279c1.328.788 2.866 1.187 4.615 1.196 1.789.009 3.342-.373 4.657-1.148s2.329-1.857 3.044-3.247 1.076-3.015 1.086-4.873l.053-10.644-17.482-.092zM2018.692 1198.418c.114-3.293.987-6.2 2.616-8.72 1.629-2.521 3.811-4.473 6.546-5.855 2.735-1.385 5.766-2.017 9.095-1.898 3.369.118 6.34.952 8.909 2.501 2.569 1.548 4.569 3.605 6.001 6.171 1.431 2.563 2.092 5.408 1.982 8.532-.089 2.533-.615 4.766-1.578 6.696-.963 1.932-2.228 3.557-3.793 4.875-1.567 1.317-3.33 2.312-5.29 2.982s-3.98.97-6.061.896a13.538 13.538 0 0 1-1.526-.149 29.263 29.263 0 0 1-1.583-.277l.978-27.986 4.992.176-.857 24.568-2.149-2.865c2.149.456 4.091.312 5.825-.429 1.733-.742 3.127-1.877 4.18-3.403 1.054-1.527 1.614-3.283 1.684-5.267.069-1.985-.366-3.816-1.307-5.498-.941-1.681-2.322-3.009-4.141-3.98-1.82-.974-4.002-1.42-6.545-1.34-2.449-.256-4.615.06-6.5.943-1.885.885-3.367 2.185-4.447 3.9s-1.656 3.607-1.729 5.676c-.08 2.28.373 4.219 1.358 5.817s2.272 2.911 3.861 3.94l-2.669 4.851c-1.516-.73-2.883-1.823-4.103-3.282s-2.17-3.162-2.852-5.109-.98-4.103-.897-6.466zM2005.945 1222.106l46.004 3.576-.445 5.748-7.221-.561 1.49-.646c1.895 1.417 3.348 3.267 4.361 5.549 1.013 2.282 1.41 4.834 1.191 7.655-.248 3.2-1.238 6.015-2.971 8.443s-3.975 4.276-6.724 5.547c-2.75 1.268-5.806 1.771-9.167 1.511-3.278-.255-6.189-1.223-8.73-2.902-2.542-1.682-4.482-3.855-5.82-6.521-1.339-2.668-1.882-5.622-1.631-8.864.212-2.738 1.008-5.188 2.385-7.346 1.378-2.158 3.214-3.764 5.509-4.814l.923 1.025-19.609-1.524.455-5.876zm15.975 18.528c-.166 2.147.204 4.104 1.111 5.87.906 1.764 2.227 3.191 3.959 4.279 1.731 1.087 3.718 1.718 5.959 1.892 2.324.181 4.404-.135 6.242-.944a11.176 11.176 0 0 0 4.539-3.618c1.188-1.603 1.866-3.478 2.032-5.625.167-2.148-.204-4.115-1.108-5.901-.906-1.786-2.223-3.245-3.951-4.375-1.729-1.129-3.735-1.782-6.017-1.959-2.241-.175-4.303.162-6.185 1.013-1.883.848-3.408 2.085-4.578 3.71s-1.836 3.509-2.003 5.658zM2012.064 1282.727c.399-3.271 1.514-6.135 3.345-8.591 1.83-2.458 4.162-4.3 6.996-5.526 2.833-1.229 5.925-1.638 9.271-1.228 3.348.409 6.229 1.538 8.646 3.386 2.417 1.849 4.228 4.188 5.435 7.017 1.205 2.828 1.607 5.898 1.203 9.211-.399 3.27-1.515 6.133-3.345 8.59-1.831 2.457-4.141 4.291-6.931 5.504-2.789 1.212-5.879 1.61-9.267 1.196-3.389-.415-6.298-1.579-8.727-3.493-2.431-1.916-4.238-4.275-5.427-7.079-1.188-2.806-1.587-5.802-1.199-8.987zm5.579.681c-.256 2.097.029 4.058.855 5.882.824 1.824 2.087 3.339 3.785 4.548 1.697 1.207 3.662 1.948 5.894 2.221 2.272.277 4.347.031 6.224-.739a11.586 11.586 0 0 0 4.705-3.509c1.261-1.57 2.02-3.401 2.275-5.498.261-2.139-.032-4.12-.879-5.948a11.847 11.847 0 0 0-3.719-4.572c-1.634-1.221-3.587-1.97-5.859-2.248-2.23-.273-4.317-.018-6.258.767-1.941.783-3.532 1.961-4.771 3.533-1.241 1.57-1.991 3.426-2.252 5.563zM2009.221 1309.344l33.246 5.231-.895 5.696-6.106-.961.962-.49c1.767 1.09 2.985 2.522 3.655 4.295.669 1.773.82 3.828.454 6.164l-.325 2.065-5.428-.854.462-2.941c.374-2.379-.055-4.413-1.285-6.103-1.23-1.691-3.183-2.746-5.855-3.167l-19.8-3.116.915-5.819zM2002.473 1346.694c.605-3.282 1.992-5.635 4.16-7.06 2.167-1.427 4.929-1.828 8.286-1.208l17.438 3.221 1.126-6.106 5.465 1.01-.229 1.245c-.276 1.496-.045 2.763.695 3.802.739 1.039 1.847 1.694 3.32 1.966l2.702.5-1.068 5.793-7.614-1.405-1.39 7.538-5.466-1.01 1.391-7.537-17.255-3.188c-1.104-.204-2.1-.205-2.983-.003-.885.2-1.639.674-2.262 1.418-.624.743-1.062 1.802-1.314 3.173-.054.288-.102.657-.141 1.101-.039.442-.073.856-.101 1.237l-5.035-.93a14.094 14.094 0 0 1 .057-1.857c.061-.677.134-1.243.218-1.7zM2000.329 1359.4l32.949 6.862-1.2 5.767-32.949-6.859 1.2-5.77zm38.206 7.957 7.336 1.527-1.199 5.768-7.336-1.526 1.199-5.769zM1996.953 1375.643l32.738 7.811-1.336 5.607-6.378-1.521.767-.794c1.87 1.313 3.164 3.021 3.882 5.126.719 2.103.784 4.389.196 6.854-.567 2.383-1.601 4.383-3.099 6.002a12.054 12.054 0 0 1-5.431 3.393c-2.122.645-4.357.687-6.706.127l-21.198-5.056 1.381-5.793 19.376 4.621c1.821.435 3.438.473 4.851.115a7.443 7.443 0 0 0 3.614-2.102c.997-1.042 1.683-2.345 2.054-3.905.372-1.562.348-3.034-.071-4.414-.42-1.382-1.185-2.573-2.294-3.576-1.108-1.003-2.555-1.715-4.336-2.141l-19.375-4.623 1.365-5.731zM1970.269 1424.646c.659-2.315 1.629-4.356 2.91-6.121 1.28-1.766 2.751-3.169 4.411-4.212a13.173 13.173 0 0 1 5.324-1.942l.895 5.984c-1.684.137-3.283.855-4.802 2.158-1.517 1.303-2.622 3.173-3.315 5.61-.531 1.867-.663 3.664-.396 5.387.269 1.723.965 3.229 2.092 4.516 1.128 1.286 2.673 2.209 4.635 2.768l7.267 2.068-1.376.729c-1.879-1.764-3.096-3.879-3.649-6.341-.556-2.464-.468-4.976.26-7.535.878-3.087 2.374-5.647 4.488-7.68 2.114-2.033 4.6-3.391 7.455-4.07s5.784-.593 8.787.262c3.042.866 5.589 2.338 7.639 4.414a16.038 16.038 0 0 1 4.176 7.347c.733 2.821.661 5.776-.217 8.864-.728 2.56-1.96 4.723-3.696 6.491a13.975 13.975 0 0 1-6.144 3.685l-1.259-1.28 7.207 2.051-1.577 5.545-30.99-8.82c-2.802-.798-5.114-2.181-6.935-4.148-1.82-1.967-3.024-4.319-3.609-7.055-.588-2.737-.448-5.629.419-8.675zm19.52 5.095c-.555 1.95-.574 3.843-.058 5.682a11.24 11.24 0 0 0 2.808 4.851c1.355 1.396 3.034 2.378 5.037 2.949 1.961.558 3.896.603 5.804.137 1.907-.469 3.563-1.347 4.97-2.637 1.405-1.291 2.385-2.911 2.939-4.861.566-1.99.601-3.936.102-5.833a10.733 10.733 0 0 0-2.791-4.911c-1.361-1.376-3.043-2.349-5.045-2.919-2.003-.569-3.943-.628-5.825-.176a10.799 10.799 0 0 0-4.948 2.676c-1.418 1.33-2.415 3.01-2.993 5.042z",
                  className: "fill-[#282e37]",
                }),
              ],
            }),
          }),
        eY = () =>
          (0, a.jsx)("svg", {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0",
            y: "0",
            xmlSpace: "preserve",
            viewBox: "0 0 2158.75 2334",
            children: (0, a.jsxs)("g", {
              id: "circle__continuous-monitoring",
              children: [
                (0, a.jsx)("circle", {
                  cx: "989.39",
                  cy: "1198.143",
                  r: "697.926",
                  className: "fill-[#ffffff]",
                }),
                (0, a.jsx)("path", {
                  d: "M410.143 1456.302c1.09 2.455 1.652 4.921 1.691 7.396a17.332 17.332 0 0 1-1.354 7.072c-.939 2.24-2.309 4.271-4.104 6.09-1.797 1.82-3.984 3.303-6.564 4.447-2.611 1.158-5.193 1.793-7.748 1.903-2.555.111-4.977-.236-7.27-1.042a17.475 17.475 0 0 1-6.143-3.719c-1.803-1.674-3.254-3.754-4.357-6.24-1.062-2.393-1.598-4.731-1.607-7.015-.008-2.284.363-4.382 1.111-6.296.752-1.914 1.764-3.489 3.037-4.724l3.82 3.326c-1.6 1.678-2.617 3.636-3.057 5.876-.438 2.24-.125 4.557.938 6.949 1.074 2.425 2.605 4.321 4.59 5.691s4.236 2.129 6.756 2.274c2.52.146 5.148-.387 7.881-1.601 2.705-1.2 4.848-2.783 6.43-4.75 1.582-1.966 2.531-4.146 2.848-6.536.314-2.39-.064-4.798-1.141-7.222-1.062-2.393-2.57-4.178-4.525-5.356s-4.074-1.744-6.361-1.697l.051-5.044c1.771-.116 3.617.189 5.539.918 1.924.728 3.729 1.86 5.414 3.399 1.687 1.541 3.062 3.507 4.125 5.901zM397.072 1424.275c.924 2.45 1.184 4.896.777 7.338-.406 2.441-1.402 4.643-2.99 6.604-1.586 1.96-3.668 3.427-6.244 4.397-2.578.972-5.09 1.246-7.537.824a14.096 14.096 0 0 1-6.572-2.974c-1.932-1.561-3.365-3.582-4.301-6.063-.947-2.513-1.219-4.991-.812-7.433.406-2.442 1.393-4.621 2.959-6.538s3.654-3.367 6.264-4.351c2.607-.983 5.15-1.251 7.627-.803 2.477.447 4.67 1.446 6.58 2.997s3.325 3.553 4.249 6.002zm-4.295 1.62c-.611-1.623-1.557-2.929-2.838-3.917-1.281-.989-2.762-1.594-4.445-1.813-1.682-.22-3.381-.007-5.1.641-1.717.647-3.119 1.604-4.205 2.866-1.086 1.264-1.785 2.689-2.096 4.277-.309 1.588-.158 3.194.453 4.816.6 1.592 1.541 2.881 2.82 3.869 1.281.989 2.75 1.607 4.406 1.855s3.342.048 5.061-.6 3.133-1.616 4.246-2.908c1.111-1.291 1.822-2.73 2.133-4.318.309-1.589.165-3.178-.435-4.768zM389.367 1404.876l-26.178 8.389-1.432-4.468 5.1-1.635-.203.869c-1.859-.118-3.48-.75-4.865-1.896-1.385-1.145-2.387-2.689-3.01-4.632-.602-1.877-.717-3.688-.348-5.432a9.773 9.773 0 0 1 2.375-4.617c1.215-1.335 2.762-2.304 4.639-2.905l16.951-5.432 1.463 4.565-15.494 4.965c-1.457.467-2.604 1.12-3.441 1.959a5.864 5.864 0 0 0-1.623 2.957c-.244 1.132-.17 2.313.225 3.543.395 1.231 1.02 2.235 1.877 3.014.855.779 1.883 1.28 3.078 1.504 1.197.224 2.508.106 3.932-.35l15.492-4.965 1.462 4.567zM377.656 1365.007c.717 2.589.531 4.792-.553 6.608-1.086 1.817-2.971 3.098-5.658 3.841l-13.961 3.86 1.32 4.769-4.375 1.21-.271-.983c-.326-1.18-.943-2.006-1.85-2.479-.906-.472-1.951-.545-3.131-.219l-2.162.598-1.277-4.62 6.094-1.686-1.645-5.948 4.375-1.21 1.645 5.948 13.812-3.82c.885-.245 1.617-.597 2.195-1.057s.965-1.069 1.16-1.829c.197-.76.145-1.681-.154-2.762-.064-.229-.16-.512-.287-.847s-.25-.646-.363-.932l4.029-1.114c.217.399.422.854.617 1.364.194.512.341.947.44 1.308zM343.922 1363.097l-5.939 1.472-1.154-4.653 5.941-1.472 1.152 4.653zm30.939-7.667-26.682 6.612-1.154-4.653 26.682-6.612 1.154 4.653zM371.729 1342.83l-26.891 5.699-.973-4.591 5.238-1.109-.291.843c-1.836-.305-3.387-1.098-4.648-2.377s-2.104-2.917-2.525-4.912c-.41-1.929-.342-3.742.201-5.439a9.779 9.779 0 0 1 2.832-4.354c1.344-1.205 2.98-2.013 4.908-2.422l17.412-3.689.994 4.689-15.916 3.373c-1.496.317-2.703.852-3.623 1.602-.916.751-1.555 1.678-1.912 2.778s-.402 2.283-.135 3.547c.268 1.265.789 2.327 1.561 3.188.775.861 1.744 1.464 2.912 1.807 1.168.344 2.484.36 3.947.05l15.914-3.373.995 4.69zM364.162 1300.306c.414 2.586.178 5.033-.709 7.345s-2.305 4.269-4.252 5.871c-1.945 1.603-4.279 2.622-7 3.058-2.719.435-5.234.201-7.549-.703a14.087 14.087 0 0 1-5.842-4.23c-1.58-1.916-2.58-4.184-3-6.802-.424-2.652-.193-5.134.693-7.445s2.291-4.248 4.209-5.812c1.92-1.563 4.256-2.566 7.008-3.007 2.754-.44 5.299-.193 7.633.741 2.338.935 4.285 2.354 5.848 4.255 1.561 1.901 2.547 4.144 2.961 6.729zm-4.531.725c-.275-1.712-.939-3.181-1.996-4.406s-2.387-2.114-3.992-2.667c-1.602-.552-3.311-.684-5.123-.394-1.814.29-3.379.945-4.695 1.965-1.318 1.021-2.287 2.277-2.91 3.771-.621 1.494-.795 3.097-.521 4.81.27 1.679.932 3.13 1.988 4.355 1.059 1.226 2.373 2.126 3.945 2.7 1.572.575 3.266.717 5.078.427s3.393-.956 4.742-1.998c1.348-1.042 2.334-2.311 2.955-3.805s.796-3.078.529-4.758zM360.043 1269.934c.219 1.995-.045 3.819-.787 5.473-.742 1.655-1.885 3.011-3.43 4.068-1.543 1.059-3.379 1.703-5.508 1.936l-17.086 1.865-.52-4.766 16.578-1.81c1.352-.147 2.504-.556 3.457-1.225a6.124 6.124 0 0 0 2.129-2.592c.465-1.06.627-2.231.488-3.517-.141-1.284-.553-2.394-1.236-3.328-.684-.934-1.596-1.621-2.738-2.061s-2.457-.578-3.945-.416l-16.172 1.766-.521-4.766 27.328-2.983.502 4.613-5.322.581.379-.759c1.793.454 3.256 1.389 4.385 2.805 1.128 1.416 1.802 3.121 2.019 5.116zM357.398 1239.727c.178 2.748-.346 5.185-1.572 7.308-1.225 2.124-2.963 3.701-5.213 4.732l-2.08-3.698c1.578-.886 2.799-2.037 3.66-3.456a7.735 7.735 0 0 0 1.133-4.622c-.094-1.459-.529-2.657-1.307-3.596-.775-.938-1.74-1.369-2.895-1.294-.814.053-1.451.323-1.914.813s-.818 1.059-1.066 1.704a9.76 9.76 0 0 0-.518 1.849l-.904 4.197c-.52 2.487-1.414 4.343-2.682 5.565-1.266 1.225-2.781 1.893-4.545 2.007-1.629.105-3.072-.218-4.332-.972-1.256-.754-2.271-1.829-3.045-3.228-.771-1.397-1.215-2.995-1.332-4.794-.156-2.409.314-4.611 1.412-6.607s2.723-3.473 4.875-4.43l2.031 3.752c-1.385.703-2.445 1.691-3.18 2.966-.736 1.274-1.055 2.675-.955 4.201.09 1.392.5 2.472 1.232 3.242.73.771 1.639 1.121 2.725 1.051.746-.049 1.354-.292 1.818-.731.465-.438.807-.954 1.023-1.548s.395-1.167.527-1.721l1.033-4.564c.5-2.281 1.389-4.084 2.666-5.411 1.277-1.326 2.865-2.051 4.766-2.174 1.527-.099 2.928.237 4.205 1.006 1.275.77 2.303 1.878 3.076 3.327.778 1.45 1.23 3.158 1.358 5.126zM355.182 1212.695l-37.99-.616.076-4.64 20.475-13.899-.039 2.346-20.016-14.453.076-4.59 37.988.616-.08 5.049-31.668-.514.59-1.775 19.658 14.447-.006.408-20.113 13.649-.537-1.59 31.668.514-.082 5.048zM357.428 1156.075c-.168 2.613-.941 4.947-2.318 7.005s-3.191 3.651-5.445 4.783-4.756 1.609-7.504 1.432c-2.748-.179-5.15-.964-7.207-2.357a14.116 14.116 0 0 1-4.76-5.419c-1.115-2.219-1.59-4.651-1.418-7.298.174-2.68.949-5.05 2.326-7.106a13.71 13.71 0 0 1 5.391-4.736c2.219-1.1 4.719-1.561 7.5-1.38 2.783.18 5.209.984 7.279 2.413 2.072 1.429 3.658 3.244 4.76 5.444 1.101 2.201 1.566 4.607 1.396 7.219zm-4.58-.297c.113-1.73-.211-3.31-.971-4.739-.758-1.429-1.859-2.59-3.301-3.484-1.441-.893-3.078-1.399-4.91-1.519-1.832-.118-3.504.174-5.014.877s-2.734 1.714-3.672 3.033c-.936 1.319-1.461 2.844-1.574 4.574-.109 1.697.217 3.259.975 4.688.76 1.429 1.844 2.598 3.248 3.506 1.406.909 3.025 1.423 4.857 1.541 1.832.119 3.521-.181 5.066-.898 1.547-.718 2.789-1.736 3.725-3.056.938-1.318 1.461-2.825 1.571-4.523zM358.408 1135.205l-27.311-3.135.535-4.661 5.32.61-.543.708c-1.645-.873-2.863-2.117-3.652-3.73-.791-1.613-1.07-3.434-.838-5.461.227-1.958.865-3.656 1.92-5.093a9.768 9.768 0 0 1 4.066-3.229c1.658-.716 3.465-.962 5.424-.737l17.684 2.03-.547 4.763-16.162-1.855c-1.521-.175-2.836-.052-3.945.368a5.878 5.878 0 0 0-2.695 2.026c-.689.931-1.107 2.038-1.254 3.321-.148 1.284.008 2.457.469 3.519.459 1.062 1.188 1.942 2.186 2.639s2.24 1.13 3.727 1.3l16.164 1.855-.548 4.762zM330.641 1100.263l-6.053-.903.707-4.741 6.053.903-.707 4.741zm31.525 4.705-27.188-4.058.707-4.741 27.189 4.057-.708 4.742zM366.41 1081.013c-.467 2.646-1.582 4.555-3.342 5.728-1.762 1.174-4.016 1.518-6.762 1.032l-14.262-2.521-.861 4.871-4.469-.79.176-1.004c.213-1.206.014-2.217-.602-3.033s-1.527-1.331-2.732-1.544l-2.209-.391.834-4.722 6.229 1.102 1.074-6.077 4.469.79-1.074 6.077 14.113 2.494c.902.16 1.715.157 2.436-.01.721-.166 1.332-.55 1.834-1.151.504-.602.854-1.455 1.049-2.56.041-.234.076-.53.105-.888s.053-.69.072-.997l4.117.728c.023.453.014.952-.031 1.496a15.387 15.387 0 0 1-.164 1.37zM371.084 1059.544c-.562 2.558-1.68 4.748-3.354 6.573-1.672 1.824-3.709 3.125-6.107 3.902-2.4.777-4.945.869-7.635.277-2.689-.593-4.945-1.733-6.766-3.423a14.089 14.089 0 0 1-3.883-6.078c-.768-2.362-.867-4.838-.297-7.428.578-2.623 1.703-4.848 3.377-6.673a13.71 13.71 0 0 1 6.047-3.863c2.357-.751 4.9-.827 7.621-.228 2.725.6 5 1.763 6.83 3.489 1.832 1.727 3.123 3.761 3.879 6.103s.85 4.793.288 7.349zm-4.482-.987c.373-1.693.293-3.304-.242-4.831-.533-1.527-1.443-2.842-2.734-3.944-1.289-1.102-2.83-1.851-4.623-2.246-1.793-.395-3.488-.358-5.088.106-1.6.466-2.963 1.279-4.09 2.441-1.125 1.162-1.875 2.59-2.248 4.283-.367 1.66-.281 3.254.252 4.781.533 1.528 1.428 2.848 2.68 3.959s2.773 1.864 4.566 2.26c1.793.395 3.51.354 5.145-.121 1.637-.475 3.02-1.293 4.145-2.455 1.125-1.162 1.871-2.572 2.237-4.233zM375.332 1038.929l-26.578-7.018 1.197-4.537 4.883 1.289-.82.311c-1.348-1.022-2.223-2.274-2.623-3.751-.4-1.478-.359-3.137.127-4.978l.43-1.628 4.389 1.159-.611 2.317c-.496 1.874-.318 3.538.527 4.992.848 1.455 2.34 2.464 4.475 3.028l15.83 4.18-1.226 4.636zM349.691 1011.772l-5.875-1.711 1.34-4.604 5.875 1.711-1.34 4.604zm30.606 8.911-26.395-7.685 1.34-4.603 26.395 7.685-1.34 4.603zM383.908 1008.234l-26.115-8.579 1.463-4.458 5.088 1.672-.674.583c-1.436-1.187-2.377-2.65-2.826-4.391-.449-1.739-.354-3.579.283-5.517.615-1.873 1.584-3.406 2.906-4.602a9.783 9.783 0 0 1 4.635-2.342c1.768-.367 3.588-.244 5.461.371l16.91 5.556-1.496 4.555-15.457-5.078c-1.453-.478-2.766-.622-3.936-.435a5.88 5.88 0 0 0-3.051 1.44c-.861.772-1.494 1.772-1.898 3-.402 1.228-.486 2.408-.25 3.541.236 1.134.771 2.142 1.609 3.025.836.884 1.967 1.559 3.387 2.025l15.457 5.077-1.496 4.557zM408.66 971.393c-.697 1.808-1.627 3.372-2.791 4.69s-2.457 2.332-3.879 3.042a10.753 10.753 0 0 1-4.461 1.149l-.307-4.873c1.377.021 2.727-.434 4.051-1.363 1.322-.929 2.346-2.329 3.066-4.201.562-1.459.795-2.892.699-4.295s-.555-2.673-1.373-3.809c-.82-1.136-2.008-2.004-3.562-2.603l-5.758-2.219 1.15-.432c1.402 1.562 2.246 3.344 2.531 5.348.283 2.005.033 4.022-.748 6.052-.918 2.38-2.307 4.305-4.166 5.773-1.859 1.47-3.977 2.376-6.35 2.718-2.373.343-4.748.056-7.129-.861-2.41-.929-4.373-2.314-5.887-4.154-1.512-1.841-2.469-3.922-2.867-6.243s-.133-4.688.795-7.1c.771-1.999 1.92-3.633 3.447-4.902a11.38 11.38 0 0 1 5.24-2.462l.951 1.077-5.711-2.201 1.67-4.331 24.555 9.465c2.221.855 4.002 2.143 5.344 3.862 1.34 1.72 2.154 3.7 2.438 5.941.287 2.242-.03 4.552-.948 6.932zm-15.5-5.592c.588-1.522.736-3.041.445-4.556s-.938-2.885-1.941-4.11c-1.004-1.225-2.299-2.143-3.885-2.754-1.555-.6-3.115-.781-4.682-.547s-2.965.815-4.197 1.743c-1.232.929-2.141 2.153-2.729 3.677-.6 1.555-.762 3.113-.49 4.675.273 1.562.906 2.945 1.9 4.148s2.283 2.11 3.869 2.722c1.588.611 3.16.808 4.719.589a8.764 8.764 0 0 0 4.207-1.768c1.245-.959 2.173-2.232 2.784-3.819z",
                  className: "fill-[#282e37]",
                }),
              ],
            }),
          }),
        eB = () =>
          (0, a.jsx)("svg", {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0",
            y: "0",
            xmlSpace: "preserve",
            viewBox: "0 0 2158.75 2334",
            children: (0, a.jsxs)("g", {
              id: "circle__data-feeds",
              children: [
                (0, a.jsx)("circle", {
                  cx: "973.621",
                  cy: "1176.739",
                  r: "925.861",
                  className: "fill-[#d8d8d8] stroke-[#ff0000] stroke-[8px]",
                  style: { strokeMiterlimit: 10 },
                }),
                (0, a.jsx)("path", {
                  d: "m252.848 1629.779-32.655 19.423-6.388-10.738c-1.964-3.303-3.003-6.581-3.119-9.835s.653-6.283 2.309-9.087 4.12-5.18 7.392-7.127c3.273-1.946 6.537-2.977 9.791-3.093s6.29.649 9.109 2.296c2.818 1.646 5.21 4.121 7.174 7.423l6.387 10.738zm-6.527-1.992-3.832-6.444c-1.442-2.425-3.2-4.217-5.275-5.377-2.074-1.159-4.325-1.67-6.755-1.53-2.429.139-4.9.956-7.414 2.451-2.513 1.494-4.405 3.283-5.679 5.365-1.273 2.083-1.889 4.309-1.846 6.676.044 2.368.778 4.75 2.203 7.146l3.832 6.443 24.766-14.73zM230.486 1589.881c.858 1.585 1.328 3.147 1.408 4.689.081 1.542-.208 2.936-.868 4.181-.658 1.247-1.661 2.234-3.007 2.962-1.285.696-2.598 1.04-3.937 1.03s-2.688-.41-4.045-1.203c-1.356-.793-2.67-2.005-3.94-3.637l-6.312-8.124 3.498-1.895 5.712 7.23c1.111 1.41 2.209 2.275 3.291 2.598 1.083.322 2.148.199 3.194-.367.986-.534 1.595-1.375 1.823-2.523.229-1.148.02-2.32-.628-3.517-.826-1.525-1.863-2.674-3.113-3.447s-2.598-1.175-4.044-1.203c-1.446-.029-2.827.312-4.143 1.024l-6.189 3.352c-1.315.712-2.125 1.769-2.43 3.171-.304 1.402-.027 2.896.83 4.479.745 1.376 1.764 2.4 3.056 3.073s2.645.956 4.056.849l.083 4.652c-1.349.15-2.731-.028-4.148-.538-1.415-.509-2.733-1.283-3.955-2.324a12.897 12.897 0 0 1-2.996-3.713c-1.003-1.854-1.533-3.674-1.593-5.459-.058-1.786.326-3.415 1.153-4.887s2.048-2.646 3.662-3.52l16.415-8.887 2.209 4.081-4.574 2.477-.099-.933c1.202.007 2.408.253 3.618.738s2.328 1.194 3.354 2.127c1.029.935 1.915 2.089 2.659 3.464zM215.033 1560.887c1.208 2.399 1.457 4.597.747 6.59-.709 1.994-2.309 3.617-4.8 4.87l-12.938 6.511 2.224 4.419-4.055 2.041-.459-.911c-.55-1.094-1.315-1.783-2.297-2.069s-2.02-.155-3.112.396l-2.005 1.009-2.155-4.282 5.649-2.843-2.774-5.513 4.055-2.04 2.774 5.512 12.801-6.442c.82-.412 1.47-.9 1.946-1.464.479-.564.739-1.237.782-2.021.044-.783-.187-1.677-.691-2.679-.106-.212-.256-.471-.446-.774s-.37-.584-.539-.842l3.736-1.881c.29.35.58.756.87 1.219s.519.86.687 1.194zM207.628 1544.838c.762 1.634 1.136 3.222 1.123 4.765-.012 1.545-.385 2.918-1.117 4.122-.733 1.205-1.793 2.13-3.18 2.775-1.325.617-2.656.882-3.992.791-1.336-.09-2.657-.571-3.965-1.444-1.307-.872-2.545-2.162-3.715-3.867l-5.812-8.488 3.605-1.681 5.268 7.562c1.024 1.474 2.067 2.403 3.128 2.79 1.062.387 2.133.329 3.211-.174 1.017-.474 1.675-1.277 1.972-2.41.298-1.132.159-2.314-.415-3.548-.732-1.571-1.698-2.781-2.9-3.628-1.2-.847-2.522-1.328-3.964-1.444s-2.841.142-4.197.774l-6.38 2.972c-1.355.632-2.227 1.639-2.615 3.02-.388 1.382-.202 2.889.56 4.521.66 1.418 1.615 2.502 2.864 3.251 1.25.75 2.582 1.113 3.997 1.092l-.197 4.649c-1.354.068-2.725-.193-4.107-.787s-2.652-1.446-3.809-2.558a12.931 12.931 0 0 1-2.768-3.888c-.89-1.91-1.31-3.759-1.261-5.545.05-1.785.531-3.389 1.444-4.809.914-1.419 2.203-2.518 3.867-3.293l16.92-7.883 1.96 4.207-4.716 2.196-.042-.937c1.2.079 2.389.397 3.567.954a11.165 11.165 0 0 1 3.221 2.325c.97.995 1.785 2.2 2.445 3.618zM193.663 1515.219l-35.175 14.364-9.12-22.332 4.249-1.735 7.211 17.658 11.379-4.646-6.536-16.006 4.297-1.755 6.536 16.006 15.25-6.228 1.909 4.674zM178.957 1476.058c.913 2.49 1.139 4.934.677 7.329-.462 2.396-1.518 4.531-3.167 6.402-1.649 1.872-3.751 3.275-6.306 4.212-2.586.947-5.089 1.231-7.51.851-2.421-.38-4.558-1.298-6.414-2.755-1.855-1.457-3.222-3.382-4.1-5.776-.702-1.916-.981-3.741-.839-5.478s.606-3.336 1.391-4.801a13.42 13.42 0 0 1 3.098-3.851 13.854 13.854 0 0 1 4.313-2.531c.384-.141.792-.263 1.224-.367.433-.104.869-.2 1.307-.288l7.756 21.165-3.879 1.422-6.809-18.58 2.514 1.523c-1.776.289-3.208.977-4.295 2.062-1.087 1.087-1.797 2.361-2.13 3.822-.334 1.462-.226 2.943.324 4.443.55 1.501 1.444 2.73 2.683 3.688s2.686 1.523 4.342 1.695c1.657.172 3.435-.163 5.335-1.005 1.931-.562 3.475-1.463 4.632-2.702 1.157-1.238 1.885-2.663 2.181-4.275a8.909 8.909 0 0 0-.415-4.764c-.631-1.724-1.562-3.029-2.794-3.919a10.04 10.04 0 0 0-4.117-1.75l.547-4.437c1.368.078 2.735.474 4.101 1.186 1.366.713 2.605 1.698 3.718 2.956s1.989 2.768 2.632 4.523zM168.525 1445.727c.815 2.523.947 4.973.394 7.35-.553 2.377-1.689 4.469-3.41 6.276-1.72 1.808-3.874 3.129-6.462 3.966-2.62.848-5.133 1.036-7.537.562-2.404-.473-4.505-1.473-6.304-2.999-1.798-1.527-3.09-3.504-3.875-5.93-.628-1.941-.837-3.776-.628-5.505.209-1.729.733-3.311 1.574-4.744s1.922-2.677 3.242-3.729a13.851 13.851 0 0 1 4.408-2.363 11.25 11.25 0 0 1 1.236-.32c.437-.088.876-.167 1.317-.238l6.938 21.448-3.931 1.271-6.09-18.828 2.453 1.619c-1.786.221-3.243.853-4.372 1.896-1.127 1.044-1.885 2.29-2.274 3.737-.39 1.448-.338 2.933.154 4.453a8.073 8.073 0 0 0 2.538 3.788c1.201 1.005 2.626 1.626 4.273 1.86 1.649.235 3.439-.031 5.37-.799 1.951-.488 3.528-1.329 4.731-2.522 1.205-1.193 1.986-2.59 2.344-4.188a8.917 8.917 0 0 0-.231-4.776c-.565-1.746-1.445-3.088-2.642-4.022a10.028 10.028 0 0 0-4.048-1.907l.717-4.413c1.365.131 2.716.578 4.053 1.343 1.338.765 2.538 1.797 3.602 3.096 1.065 1.299 1.884 2.838 2.46 4.618zM159.307 1415.171c.696 2.489.719 4.901.065 7.237-.652 2.337-1.866 4.371-3.642 6.103-1.774 1.733-3.955 2.961-6.542 3.685-2.652.742-5.18.822-7.585.242-2.404-.58-4.487-1.685-6.248-3.31-1.761-1.626-2.994-3.698-3.7-6.221-.613-2.192-.692-4.271-.235-6.235s1.334-3.657 2.631-5.079l1.335.421-16.403 4.59-1.292-4.617 37.179-10.402 1.251 4.47-5.648 1.58.621-.81a9.758 9.758 0 0 1 5.172 2.869c1.422 1.491 2.436 3.317 3.041 5.477zm-4.531.844c-.458-1.637-1.281-3.004-2.472-4.101-1.188-1.098-2.604-1.831-4.243-2.202-1.64-.37-3.344-.31-5.112.186-1.8.504-3.297 1.338-4.49 2.501-1.191 1.163-2.012 2.522-2.46 4.077-.447 1.556-.442 3.152.016 4.789.458 1.638 1.282 3.004 2.472 4.101 1.189 1.098 2.595 1.825 4.212 2.185 1.619.359 3.329.287 5.13-.217 1.768-.495 3.259-1.317 4.473-2.47 1.213-1.151 2.047-2.496 2.498-4.035.452-1.539.443-3.144-.024-4.814zM151.179 1383.93c.644 2.678.542 5.168-.304 7.469-.845 2.302-2.289 4.152-4.331 5.552l-2.679-3.29c1.404-1.142 2.411-2.485 3.019-4.03a7.732 7.732 0 0 0 .327-4.746c-.341-1.422-.975-2.528-1.899-3.32-.924-.792-1.948-1.053-3.072-.783-.794.191-1.376.567-1.749 1.129a5.17 5.17 0 0 0-.759 1.86 9.645 9.645 0 0 0-.196 1.909l-.176 4.291c-.089 2.539-.653 4.52-1.693 5.94-1.039 1.422-2.419 2.339-4.138 2.752-1.587.381-3.064.309-4.433-.22s-2.552-1.415-3.551-2.661c-.998-1.246-1.709-2.745-2.13-4.497-.563-2.348-.476-4.598.266-6.752.741-2.153 2.092-3.886 4.049-5.195l2.642 3.352c-1.245.929-2.122 2.083-2.629 3.464-.508 1.381-.583 2.815-.226 4.303.326 1.356.915 2.351 1.767 2.985.853.634 1.808.824 2.865.57.728-.175 1.283-.519 1.667-1.03s.632-1.078.745-1.7a16.42 16.42 0 0 0 .227-1.785l.24-4.674c.104-2.333.673-4.261 1.704-5.786 1.033-1.523 2.475-2.509 4.326-2.953 1.487-.357 2.926-.266 4.314.274s2.589 1.458 3.599 2.754c1.01 1.294 1.747 2.901 2.208 4.818zM143.218 1347.155c.393 2.105.349 4.051-.131 5.834-.479 1.785-1.361 3.272-2.645 4.462-1.282 1.191-2.876 1.964-4.781 2.318-1.637.306-3.14.274-4.505-.094-1.365-.367-2.582-.91-3.649-1.628-1.067-.717-1.996-1.478-2.786-2.281s-1.424-1.473-1.904-2.006l-2.188-2.549a31.776 31.776 0 0 0-2.379-2.462 9.759 9.759 0 0 0-2.752-1.821 5.18 5.18 0 0 0-3.102-.355c-1.303.243-2.316.882-3.04 1.916s-.965 2.203-.722 3.506c.243 1.304.881 2.31 1.911 3.017 1.032.707 2.232.933 3.603.677.902-.168 1.748-.551 2.536-1.147s1.507-1.284 2.157-2.062 1.251-1.547 1.801-2.307l17.972-24.363 1.16 6.217-15.392 21.235a53.622 53.622 0 0 1-2.358 2.931 16.125 16.125 0 0 1-2.931 2.647c-1.101.775-2.386 1.301-3.856 1.575-1.838.343-3.514.214-5.026-.386s-2.784-1.53-3.814-2.791c-1.03-1.26-1.705-2.742-2.022-4.447-.312-1.671-.213-3.271.297-4.803a9.203 9.203 0 0 1 2.537-3.923c1.182-1.084 2.624-1.786 4.329-2.104 1.771-.331 3.396-.201 4.871.388a13.45 13.45 0 0 1 3.92 2.382 35.453 35.453 0 0 1 2.948 2.875l2.178 2.499a35.18 35.18 0 0 0 2.401 2.302c.91.799 1.912 1.442 3.005 1.93 1.095.488 2.344.601 3.747.339 1.672-.312 2.874-1.098 3.606-2.358.734-1.261.938-2.761.614-4.499-.206-1.103-.573-2.054-1.104-2.854a8.696 8.696 0 0 0-1.889-2.061 13.085 13.085 0 0 0-2.321-1.461 51.92 51.92 0 0 0-2.411-1.106l-9.599-4.176-1-5.365 11.59 4.843c.896.352 1.917.818 3.062 1.4a20.011 20.011 0 0 1 3.362 2.174c1.096.868 2.066 1.941 2.909 3.22.845 1.276 1.442 2.85 1.791 4.722zM135.165 1301.877l-33.111 4.42 1.363 10.211-4.55.607-3.374-25.275 4.55-.607 1.343 10.06 33.111-4.42.668 5.004zM132.601 1281.793l-38.421 3.793-.471-4.771 16.394-1.618-.372.908c-1.792-.506-3.245-1.465-4.357-2.875-1.113-1.41-1.77-3.131-1.971-5.161-.193-1.962.074-3.757.802-5.383a9.774 9.774 0 0 1 3.293-4.016c1.469-1.05 3.184-1.672 5.146-1.866l17.713-1.748.472 4.771-16.19 1.599c-1.522.15-2.781.556-3.774 1.218-.994.662-1.729 1.512-2.209 2.55-.478 1.039-.653 2.2-.526 3.485.123 1.253.522 2.357 1.198 3.315.676.959 1.574 1.673 2.697 2.143 1.122.471 2.428.632 3.917.484l16.189-1.598.47 4.77zM98.019 1253.596l-6.104.443-.348-4.781 6.104-.443.348 4.781zm31.791-2.312-27.417 1.993-.348-4.781 27.417-1.993.348 4.781zM128.902 1238.069l-27.449 1.475-.252-4.686 5.042-.271-.686.547c-1.596-.561-2.812-1.483-3.647-2.767-.835-1.282-1.303-2.874-1.405-4.776l-.09-1.681 4.532-.243.129 2.394c.104 1.936.782 3.466 2.033 4.59 1.253 1.125 2.982 1.627 5.188 1.509l16.348-.878.257 4.787zM128.229 1206.764c.057 2.584-.521 4.927-1.732 7.027-1.211 2.102-2.892 3.771-5.041 5.009-2.148 1.238-4.565 1.887-7.252 1.946-2.753.061-5.222-.487-7.407-1.646-2.185-1.158-3.929-2.744-5.232-4.756-1.302-2.012-1.983-4.326-2.041-6.943-.051-2.277.389-4.311 1.318-6.1s2.199-3.212 3.808-4.268l1.19.738-17.03.378-.106-4.793 38.598-.855.103 4.64-5.863.13.803-.63a9.746 9.746 0 0 1 4.298 4.062c1.007 1.797 1.537 3.818 1.586 6.061zm-4.598-.306c-.037-1.699-.496-3.229-1.377-4.587-.88-1.357-2.068-2.419-3.564-3.186-1.496-.766-3.162-1.129-4.998-1.088-1.869.042-3.526.479-4.97 1.309-1.443.832-2.576 1.945-3.396 3.341-.818 1.396-1.21 2.943-1.172 4.643.037 1.7.497 3.229 1.377 4.586s2.061 2.412 3.539 3.161c1.479.75 3.153 1.103 5.022 1.062 1.836-.041 3.484-.468 4.945-1.283 1.461-.813 2.603-1.91 3.421-3.289.821-1.379 1.212-2.936 1.173-4.669zM127.398 1173.723l-37.978-1.122.397-13.459c.074-2.515.615-4.709 1.623-6.585 1.008-1.874 2.411-3.321 4.21-4.34s3.905-1.491 6.317-1.42c2.38.07 4.428.666 6.146 1.788s3.026 2.641 3.922 4.555c.896 1.915 1.306 4.146 1.23 6.695l-.248 8.411 14.528.43-.147 5.047zm-18.966-5.613.253-8.564c.044-1.495-.206-2.812-.751-3.95-.544-1.139-1.351-2.038-2.42-2.699s-2.317-1.013-3.745-1.055c-1.461-.043-2.736.234-3.825.831-1.089.598-1.938 1.447-2.55 2.552s-.938 2.405-.983 3.9l-.253 8.563 14.274.422zM129.6 1134.38c-.117 1.799-.551 3.372-1.303 4.72-.752 1.349-1.738 2.375-2.96 3.079-1.221.705-2.595 1.007-4.121.908-1.459-.095-2.753-.502-3.882-1.223s-2.057-1.777-2.784-3.171c-.728-1.393-1.194-3.118-1.402-5.176l-1.022-10.237 3.97.258.99 9.161c.191 1.784.66 3.102 1.405 3.95s1.712 1.312 2.899 1.389c1.119.073 2.082-.315 2.887-1.167.805-.85 1.251-1.954 1.339-3.312.112-1.73-.154-3.256-.802-4.575-.646-1.319-1.575-2.376-2.784-3.17s-2.56-1.239-4.053-1.337l-7.023-.455c-1.493-.097-2.74.367-3.745 1.393-1.003 1.025-1.563 2.437-1.68 4.235-.102 1.561.216 2.97.952 4.227.736 1.258 1.73 2.217 2.982 2.877l-2.405 3.983c-1.222-.591-2.297-1.478-3.226-2.662-.928-1.185-1.632-2.542-2.112-4.072a12.94 12.94 0 0 1-.562-4.738c.137-2.104.655-3.927 1.556-5.47.901-1.543 2.093-2.718 3.576-3.524s3.141-1.151 4.974-1.032l18.626 1.208-.3 4.632-5.191-.337.412-.842c1.015.646 1.905 1.495 2.672 2.55s1.336 2.25 1.709 3.586.509 2.784.408 4.344zM130.625 1112.214l-27.368-2.572.438-4.671 5.027.473-.759.44c-1.496-.789-2.563-1.88-3.201-3.271s-.867-3.035-.689-4.932l.157-1.676 4.52.425-.225 2.387c-.181 1.93.266 3.543 1.339 4.839 1.073 1.297 2.71 2.047 4.91 2.254l16.299 1.532-.448 4.772zM134.131 1082.027c-.315 2.668-1.319 4.638-3.011 5.909-1.69 1.272-3.921 1.744-6.689 1.417l-14.384-1.702-.581 4.913-4.508-.533.12-1.014c.144-1.215-.114-2.213-.775-2.993-.661-.779-1.6-1.242-2.815-1.386l-2.229-.264.563-4.761 6.28.743.726-6.128 4.507.533-.725 6.128 14.231 1.684c.912.108 1.723.059 2.432-.148.71-.207 1.299-.625 1.766-1.255.469-.629.769-1.501.9-2.615a9.6 9.6 0 0 0 .055-.893c.009-.358.014-.691.016-.999l4.152.491c.05.451.067.95.055 1.495a15.379 15.379 0 0 1-.086 1.378zM146.431 1072.271c-.09.605-.23 1.203-.422 1.794a7.265 7.265 0 0 1-.759 1.64l-4.188-.622c.088-.365.225-.817.408-1.357s.315-1.079.396-1.617c.234-1.58.061-2.835-.523-3.764s-1.661-1.889-3.232-2.879l-3.831-2.322 4.07.708-30.933 7.26.758-5.096 24.547-5.579-.225 1.514-21.87-12.43.773-5.196 28.596 16.781a17.91 17.91 0 0 1 3.658 2.787 10.15 10.15 0 0 1 2.392 3.682c.516 1.383.644 2.948.385 4.696zM141.435 1032.723l-37.342-7.015.932-4.962 37.342 7.015-.932 4.962zM144.005 1019.051l-26.87-5.8.99-4.586 5.234 1.13-.61.65c-1.552-1.03-2.642-2.387-3.27-4.07-.628-1.683-.727-3.522-.296-5.517.415-1.927 1.219-3.554 2.409-4.88 1.191-1.325 2.646-2.264 4.364-2.814s3.542-.618 5.47-.202l17.398 3.755-1.012 4.686-15.902-3.432c-1.496-.323-2.816-.329-3.961-.021a5.896 5.896 0 0 0-2.883 1.752c-.776.859-1.301 1.92-1.573 3.183-.273 1.264-.232 2.446.121 3.548.354 1.103.992 2.049 1.917 2.84s2.119 1.344 3.581 1.66l15.903 3.432-1.01 4.686zM153.643 978.424c-.647 2.607-1.89 4.437-3.727 5.485-1.838 1.051-4.109 1.239-6.815.567l-14.057-3.491-1.192 4.802-4.405-1.095.246-.989c.295-1.188.164-2.21-.395-3.067-.558-.855-1.431-1.433-2.619-1.728l-2.178-.541 1.156-4.652 6.137 1.524 1.488-5.989 4.404 1.094-1.487 5.989 13.909 3.454c.891.222 1.701.274 2.431.157.729-.116 1.366-.457 1.909-1.023.544-.565.95-1.393 1.221-2.482.058-.23.113-.523.166-.878.054-.354.1-.685.141-.99l4.059 1.009c-.008.453-.053.95-.134 1.49-.083.54-.169.992-.258 1.354zM159.613 957.401c-.719 2.553-1.967 4.665-3.744 6.337s-3.883 2.783-6.316 3.334c-2.434.552-4.959.458-7.578-.279-2.65-.746-4.846-1.981-6.585-3.708-1.739-1.726-2.935-3.722-3.585-5.99-.651-2.267-.631-4.628.06-7.082.553-1.964 1.396-3.607 2.527-4.932 1.133-1.323 2.445-2.349 3.939-3.076a13.428 13.428 0 0 1 4.766-1.308 13.857 13.857 0 0 1 4.979.475c.393.11.795.25 1.206.419.412.169.821.347 1.229.531l-6.109 21.698-3.977-1.119 5.363-19.048 1.145 2.707c-1.609-.806-3.172-1.087-4.689-.844-1.517.244-2.839.861-3.965 1.851-1.127.99-1.906 2.254-2.339 3.792-.434 1.539-.429 3.059.014 4.561.443 1.503 1.285 2.809 2.526 3.917 1.242 1.109 2.88 1.88 4.913 2.311 1.895.675 3.673.849 5.337.522 1.663-.326 3.088-1.056 4.271-2.188a8.9 8.9 0 0 0 2.453-4.104c.498-1.767.509-3.371.031-4.812a10.078 10.078 0 0 0-2.312-3.83l3.041-3.276c1.063.865 1.94 1.986 2.63 3.363.689 1.378 1.116 2.902 1.282 4.573.165 1.669-.006 3.406-.513 5.205zM179.143 929.582c-.599 1.844-1.444 3.455-2.535 4.834-1.092 1.38-2.328 2.461-3.709 3.245a10.784 10.784 0 0 1-4.393 1.389l-.569-4.851c1.375-.053 2.699-.579 3.972-1.578 1.271-.999 2.218-2.452 2.838-4.36.482-1.486.638-2.93.467-4.326a7.234 7.234 0 0 0-1.577-3.729c-.879-1.09-2.111-1.893-3.695-2.407l-5.869-1.906 1.125-.492c1.484 1.483 2.423 3.218 2.814 5.203.392 1.987.25 4.015-.422 6.084-.788 2.425-2.07 4.422-3.85 5.988-1.777 1.567-3.843 2.586-6.193 3.056-2.352.47-4.739.311-7.165-.478-2.457-.799-4.491-2.076-6.102-3.833-1.609-1.756-2.676-3.782-3.199-6.08-.522-2.296-.385-4.674.413-7.131.662-2.038 1.722-3.731 3.18-5.081a11.37 11.37 0 0 1 5.1-2.74l1.008 1.024-5.821-1.891 1.435-4.414 25.028 8.131c2.263.735 4.11 1.926 5.543 3.571 1.431 1.645 2.35 3.578 2.754 5.801.401 2.222.21 4.546-.578 6.971zm-15.778-4.75c.504-1.553.57-3.077.199-4.574a9.12 9.12 0 0 0-2.159-3.999c-1.068-1.169-2.41-2.017-4.027-2.542-1.584-.515-3.152-.613-4.704-.295a9.125 9.125 0 0 0-4.098 1.967c-1.181.993-2.022 2.266-2.527 3.817-.515 1.585-.594 3.15-.238 4.695.356 1.546 1.063 2.893 2.12 4.04s2.394 1.984 4.011 2.51 3.198.637 4.744.334a8.764 8.764 0 0 0 4.105-1.99c1.19-1.025 2.049-2.346 2.574-3.963zM175.305 905.905l-25.859-9.322 1.591-4.414 4.75 1.712-.845.238c-1.252-1.138-2.014-2.461-2.283-3.968-.271-1.507-.083-3.155.563-4.947l.57-1.583 4.271 1.539-.813 2.255c-.657 1.823-.627 3.497.089 5.02.716 1.523 2.113 2.659 4.192 3.409l15.4 5.552-1.626 4.509zM185.261 880.903c-.661 1.678-1.555 3.042-2.683 4.096-1.128 1.055-2.381 1.73-3.759 2.027-1.378.299-2.778.166-4.202-.395-1.359-.536-2.468-1.319-3.322-2.351-.854-1.03-1.415-2.32-1.682-3.869-.268-1.549-.185-3.334.246-5.357l2.154-10.06 3.701 1.459-1.856 9.025c-.363 1.757-.319 3.154.131 4.189.45 1.037 1.229 1.773 2.336 2.209 1.044.411 2.08.336 3.105-.229 1.026-.563 1.789-1.479 2.287-2.744.636-1.613.848-3.146.635-4.601s-.773-2.744-1.683-3.87c-.908-1.125-2.059-1.962-3.451-2.511l-6.548-2.579c-1.392-.549-2.722-.487-3.991.182-1.269.67-2.233 1.843-2.894 3.519-.573 1.456-.702 2.895-.385 4.316.316 1.422.971 2.639 1.96 3.65l-3.507 3.058c-.982-.936-1.735-2.108-2.258-3.521-.521-1.411-.777-2.919-.767-4.523.011-1.603.314-3.164.913-4.683.772-1.961 1.823-3.538 3.152-4.732s2.823-1.948 4.482-2.264c1.658-.314 3.342-.136 5.051.537l17.366 6.843-1.701 4.317-4.84-1.906.65-.676c.769.925 1.356 2.006 1.764 3.244.408 1.238.585 2.551.532 3.937-.05 1.388-.363 2.809-.936 4.263zM197.514 850.389c-1.06 2.469-2.581 4.073-4.563 4.812-1.982.74-4.254.561-6.816-.539l-13.31-5.713-1.951 4.546-4.171-1.79.402-.938c.482-1.125.518-2.154.105-3.091-.413-.935-1.182-1.645-2.307-2.127l-2.062-.885 1.891-4.405 5.812 2.494 2.434-5.671 4.171 1.79-2.434 5.671 13.169 5.652c.844.362 1.635.545 2.374.547.739.004 1.422-.23 2.05-.702.627-.47 1.162-1.221 1.604-2.252.094-.219.196-.499.306-.841.109-.341.209-.659.298-.954l3.844 1.649c-.081.447-.205.931-.373 1.45a15.49 15.49 0 0 1-.473 1.297zM172.314 827.852l-5.572-2.529 1.98-4.365 5.573 2.529-1.981 4.365zm29.026 13.173-25.031-11.361 1.981-4.365 25.031 11.36-1.981 4.366zM212.992 817.646c-1.148 2.353-2.75 4.219-4.806 5.599-2.055 1.381-4.34 2.166-6.854 2.356-2.515.191-5.01-.318-7.484-1.526-2.475-1.209-4.398-2.848-5.771-4.919a14.113 14.113 0 0 1-2.345-6.82c-.189-2.477.297-4.907 1.46-7.29 1.179-2.413 2.796-4.31 4.852-5.69a13.72 13.72 0 0 1 6.786-2.333c2.47-.175 4.957.35 7.462 1.573 2.506 1.223 4.444 2.89 5.817 4.997 1.373 2.109 2.15 4.391 2.333 6.844.183 2.454-.3 4.856-1.45 7.209zm-4.124-2.015c.761-1.558 1.062-3.142.902-4.752s-.736-3.103-1.73-4.478c-.993-1.374-2.314-2.465-3.965-3.271-1.649-.806-3.307-1.17-4.971-1.094-1.664.077-3.181.547-4.549 1.411-1.367.864-2.433 2.075-3.193 3.634-.746 1.527-1.039 3.097-.88 4.707s.718 3.103 1.673 4.478c.956 1.375 2.258 2.465 3.908 3.271 1.649.806 3.326 1.17 5.027 1.094 1.703-.077 3.238-.547 4.606-1.412 1.369-.865 2.426-2.06 3.172-3.588zM221.871 798.504l-24.22-13.003 2.22-4.134 4.718 2.533-.766.457c-1.207-1.419-1.879-3.024-2.017-4.816-.139-1.791.275-3.586 1.24-5.383.933-1.737 2.154-3.078 3.665-4.023a9.782 9.782 0 0 1 4.973-1.498c1.804-.054 3.575.386 5.312 1.317l15.683 8.42-2.268 4.224-14.334-7.695c-1.349-.724-2.615-1.095-3.801-1.115a5.87 5.87 0 0 0-3.255.887c-.983.611-1.781 1.485-2.393 2.623-.611 1.139-.899 2.287-.864 3.443.035 1.157.388 2.244 1.058 3.26s1.665 1.877 2.982 2.585l14.334 7.695-2.267 4.223zM241.936 763.491c-1.385 2.381-3.178 4.111-5.379 5.19-2.201 1.08-4.523 1.421-6.967 1.022l.337-4.229c1.804.145 3.459-.132 4.966-.829a7.73 7.73 0 0 0 3.517-3.205c.734-1.264 1.041-2.501.92-3.713-.121-1.211-.682-2.107-1.681-2.688-.705-.411-1.387-.541-2.044-.393-.656.149-1.268.423-1.834.821s-1.054.813-1.462 1.244l-3.091 2.981c-1.818 1.774-3.594 2.816-5.328 3.125-1.733.31-3.364.02-4.893-.869-1.411-.821-2.429-1.895-3.053-3.222-.624-1.326-.867-2.785-.729-4.377.139-1.591.66-3.165 1.566-4.723 1.214-2.087 2.833-3.652 4.856-4.697 2.024-1.045 4.196-1.365 6.518-.959l-.406 4.247c-1.542-.188-2.974.041-4.294.688-1.321.647-2.366 1.633-3.136 2.956-.701 1.205-.962 2.331-.785 3.378.179 1.048.737 1.845 1.678 2.392.646.376 1.285.512 1.916.406a3.97 3.97 0 0 0 1.714-.714c.511-.371.977-.749 1.397-1.134l3.402-3.213c1.688-1.615 3.431-2.616 5.229-3.006 1.8-.389 3.522-.104 5.168.853 1.322.77 2.299 1.829 2.93 3.179.631 1.351.864 2.844.7 4.479-.163 1.636-.741 3.306-1.732 5.01z",
                  className: "fill-[#282e37]",
                }),
              ],
            }),
          }),
        eD = () =>
          (0, a.jsx)("svg", {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0",
            y: "0",
            xmlSpace: "preserve",
            viewBox: "0 0 2158.75 2334",
            children: (0, a.jsxs)("g", {
              id: "circle__center-logo",
              children: [
                (0, a.jsx)("circle", {
                  cx: "987.937",
                  cy: "1179.415",
                  r: "164",
                  className: "fill-white drop-shadow-lg",
                }),
                (0, a.jsx)("path", {
                  d: "M1070.502 1179.304c0 24.538-8.804 44.749-23.862 58.727-.174.155-.305.311-.479.466-11.201 10.206-25.801 16.995-42.798 19.59l-10.373-10.561 31.641-131.076 3.879-7.965c25.932 12.669 41.992 37.961 41.992 70.819z",
                  className: "fill-[#e1312e]",
                }),
                (0, a.jsx)("path", {
                  d: "M1028.51 1108.485c-.523.843-4.598 7.543-4.642 7.543-.305.244-90.063 88.101-91.959 89.499-3.857-11.137-4.38-12.868-6.537-20.589V1099.544h61.866c4.271 0 8.411.244 12.421.732h.153c10.133 1.198 19.46 3.838 27.805 7.787.326.156.609.289.893.422z",
                  className: "fill-[#a2292e]",
                }),
                (0, a.jsx)("path", {
                  d: "m1028.51 1108.485-103.139 76.455v74.344h62.106c5.497 0 10.796-.418 15.891-1.197 0 .001 25.143-149.601 25.142-149.602z",
                  className: "fill-[#c6222a]",
                }),
              ],
            }),
          }),
        eE = (e) =>
          (0, a.jsx)("svg", {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0",
            y: "0",
            xmlSpace: "preserve",
            viewBox: "0 0 2158.75 2334",
            children: (0, a.jsxs)("g", {
              id: "circle__red-center",
              children: [
                (0, a.jsx)("circle", {
                  cx: "981.937",
                  cy: "1198.143",
                  r: "585.926",
                  className: "fill-[#ee312e]",
                  ...e,
                }),
                (0, a.jsx)("path", {
                  d: "M497.078 1129.178v-57.365h18.865c5.801 0 10.857 1.182 15.169 3.543s7.647 5.697 10.01 10.01c2.36 4.312 3.542 9.344 3.542 15.092 0 5.75-1.182 10.779-3.542 15.092-2.362 4.312-5.698 7.662-10.01 10.049s-9.368 3.58-15.169 3.58h-18.865zm7.623-6.93h11.318c4.261 0 7.943-.896 11.051-2.695 3.104-1.795 5.505-4.324 7.199-7.584 1.693-3.26 2.541-7.096 2.541-11.512 0-4.414-.861-8.25-2.58-11.512-1.721-3.26-4.133-5.775-7.238-7.545-3.105-1.771-6.764-2.656-10.973-2.656h-11.318v43.504zM553.287 1081.053v-9.24h7.238v9.24h-7.238zm0 48.125v-41.502h7.238v41.502h-7.238zM571.537 1129.178v-58.289h7.238v58.289h-7.238zM589.785 1081.053v-9.24h7.238v9.24h-7.238zm0 48.125v-41.502h7.238v41.502h-7.238zM627.9 1146.119c-2.926 0-5.634-.463-8.123-1.387-2.49-.924-4.62-2.195-6.391-3.812a16.248 16.248 0 0 1-4.043-5.658l6.699-3.08c.719 1.949 2.091 3.605 4.119 4.967 2.027 1.359 4.555 2.039 7.585 2.039 2.36 0 4.505-.449 6.429-1.348a10.912 10.912 0 0 0 4.621-4.004c1.154-1.77 1.732-3.914 1.732-6.43v-9.316l1.231 1.387c-1.438 2.824-3.491 4.979-6.159 6.467-2.67 1.49-5.648 2.234-8.933 2.234-3.851 0-7.315-.912-10.396-2.734-3.08-1.82-5.505-4.312-7.275-7.469-1.771-3.156-2.657-6.66-2.657-10.51 0-3.9.886-7.418 2.657-10.549 1.771-3.131 4.183-5.609 7.237-7.432 3.054-1.82 6.532-2.732 10.434-2.732 3.233 0 6.16.73 8.778 2.193 2.617 1.463 4.722 3.479 6.313 6.045l-1.001 1.926v-9.24h7.008v39.73c0 3.594-.848 6.803-2.541 9.625-1.695 2.824-4.043 5.045-7.047 6.662-2.999 1.618-6.426 2.426-10.277 2.426zm-.539-24.871c2.465 0 4.684-.617 6.661-1.85 1.976-1.23 3.554-2.887 4.735-4.965 1.18-2.08 1.771-4.402 1.771-6.969 0-2.516-.592-4.812-1.771-6.893-1.182-2.078-2.76-3.734-4.735-4.967-1.978-1.23-4.196-1.848-6.661-1.848-2.516 0-4.8.617-6.853 1.848-2.054 1.232-3.657 2.877-4.812 4.93s-1.732 4.363-1.732 6.93.577 4.889 1.732 6.969a13.222 13.222 0 0 0 4.774 4.965c2.028 1.233 4.325 1.85 6.891 1.85zM677.873 1130.102c-4.004 0-7.584-.949-10.742-2.848-3.156-1.898-5.634-4.506-7.43-7.816-1.798-3.311-2.695-7.02-2.695-11.127 0-4.158.897-7.854 2.695-11.088 1.796-3.234 4.209-5.787 7.238-7.66 3.027-1.875 6.467-2.811 10.317-2.811 3.08 0 5.813.551 8.2 1.654 2.387 1.105 4.414 2.594 6.084 4.467a20.297 20.297 0 0 1 3.85 6.391 20.959 20.959 0 0 1 1.348 7.43c0 .617-.039 1.26-.115 1.926a56.561 56.561 0 0 1-.27 2.002h-34.035v-6.236h29.877l-3.465 2.771c.512-2.668.281-5.055-.693-7.16-.977-2.105-2.414-3.773-4.312-5.006-1.899-1.232-4.056-1.848-6.468-1.848-2.413 0-4.62.629-6.622 1.887s-3.555 3.016-4.658 5.273c-1.104 2.26-1.553 4.955-1.348 8.086-.205 3.029.27 5.686 1.424 7.969 1.156 2.285 2.798 4.057 4.929 5.312 2.13 1.26 4.452 1.887 6.968 1.887 2.772 0 5.107-.641 7.008-1.924a15.188 15.188 0 0 0 4.62-4.928l6.006 3.08c-.821 1.898-2.093 3.631-3.812 5.197-1.721 1.566-3.762 2.811-6.121 3.734-2.363.925-4.956 1.386-7.778 1.386zM705.978 1129.178v-41.502h7.084v8.084l-1.155-.693c1.027-2.617 2.682-4.658 4.967-6.121 2.283-1.463 4.967-2.193 8.047-2.193 2.977 0 5.633.668 7.969 2.002s4.184 3.184 5.545 5.543c1.359 2.361 2.04 5.031 2.04 8.008v26.873h-7.237v-24.562c0-2.311-.412-4.26-1.232-5.852-.822-1.592-1.99-2.822-3.504-3.697-1.515-.871-3.247-1.309-5.197-1.309-1.951 0-3.684.438-5.197 1.309-1.516.875-2.709 2.119-3.58 3.734-.874 1.617-1.31 3.557-1.31 5.814v24.562h-7.24zM767.576 1129.641c-4.055 0-7.188-1.156-9.395-3.465-2.207-2.311-3.31-5.57-3.31-9.779v-21.869h-7.47v-6.852h1.541c1.848 0 3.297-.564 4.35-1.695 1.052-1.127 1.579-2.617 1.579-4.465v-3.389h7.237v9.549h9.316v6.852h-9.316v21.639c0 1.385.219 2.592.654 3.619s1.168 1.836 2.195 2.424c1.025.592 2.387.887 4.08.887.359 0 .809-.025 1.348-.078a86.761 86.761 0 0 0 1.502-.154v6.314a17.25 17.25 0 0 1-2.232.348c-.821.075-1.514.114-2.079.114zM587.245 1222.502c-4.108 0-7.919-.73-11.435-2.193-3.518-1.463-6.597-3.529-9.24-6.199-2.645-2.668-4.723-5.812-6.236-9.432-1.516-3.619-2.271-7.559-2.271-11.82 0-4.26.756-8.201 2.271-11.818 1.514-3.619 3.592-6.75 6.236-9.395 2.644-2.645 5.723-4.697 9.24-6.16 3.516-1.463 7.326-2.195 11.435-2.195 4.106 0 7.917.732 11.435 2.195a28.035 28.035 0 0 1 9.24 6.197c2.643 2.67 4.722 5.803 6.236 9.395 1.514 3.594 2.271 7.521 2.271 11.781 0 4.262-.758 8.201-2.271 11.82-1.515 3.619-3.594 6.764-6.236 9.432a28.03 28.03 0 0 1-9.24 6.199c-3.518 1.462-7.328 2.193-11.435 2.193zm0-7.006c3.13 0 6.006-.578 8.624-1.732a20.44 20.44 0 0 0 6.814-4.852c1.925-2.078 3.426-4.492 4.504-7.238s1.617-5.684 1.617-8.816c0-3.131-.539-6.057-1.617-8.777s-2.579-5.121-4.504-7.199a20.423 20.423 0 0 0-6.814-4.852c-2.618-1.154-5.494-1.732-8.624-1.732-3.132 0-6.007.578-8.624 1.732a20.364 20.364 0 0 0-6.814 4.852c-1.926 2.078-3.427 4.479-4.505 7.199-1.077 2.721-1.616 5.646-1.616 8.777 0 3.133.539 6.07 1.616 8.816 1.078 2.746 2.579 5.16 4.505 7.238a20.459 20.459 0 0 0 6.814 4.852c2.617 1.154 5.492 1.732 8.624 1.732zM626.514 1221.578v-41.502h7.084v8.084l-1.154-.693c1.026-2.617 2.682-4.658 4.967-6.121 2.283-1.463 4.967-2.193 8.047-2.193 2.977 0 5.633.668 7.969 2.002s4.184 3.184 5.544 5.543c1.36 2.361 2.04 5.031 2.04 8.008v26.873h-7.237v-24.562c0-2.311-.411-4.26-1.231-5.852-.822-1.592-1.99-2.822-3.504-3.697-1.516-.871-3.248-1.309-5.197-1.309-1.952 0-3.685.438-5.197 1.309-1.516.875-2.709 2.119-3.581 3.734-.874 1.617-1.31 3.557-1.31 5.814v24.562h-7.24zM690.346 1222.502c-4.004 0-7.584-.949-10.741-2.848s-5.634-4.506-7.431-7.816-2.695-7.02-2.695-11.127c0-4.158.898-7.854 2.695-11.088s4.209-5.787 7.238-7.66c3.028-1.875 6.468-2.811 10.318-2.811 3.08 0 5.812.551 8.2 1.654 2.387 1.105 4.414 2.594 6.083 4.467 1.668 1.875 2.951 4.004 3.85 6.391s1.348 4.865 1.348 7.43c0 .617-.039 1.26-.115 1.926a54.323 54.323 0 0 1-.27 2.002h-34.034v-6.236h29.876l-3.465 2.771c.513-2.668.281-5.055-.693-7.16-.976-2.105-2.413-3.773-4.312-5.006-1.899-1.232-4.056-1.848-6.468-1.848-2.414 0-4.621.629-6.623 1.887s-3.555 3.016-4.658 5.273c-1.104 2.26-1.553 4.955-1.348 8.086-.205 3.029.27 5.686 1.425 7.969 1.155 2.285 2.798 4.057 4.929 5.312 2.129 1.26 4.452 1.887 6.968 1.887 2.772 0 5.107-.641 7.007-1.924a15.191 15.191 0 0 0 4.621-4.928l6.006 3.08c-.822 1.898-2.093 3.631-3.812 5.197-1.721 1.566-3.761 2.811-6.121 3.734-2.362.925-4.956 1.386-7.778 1.386zM480.446 1313.979v-57.365h20.328c3.798 0 7.134.719 10.01 2.156 2.874 1.438 5.12 3.49 6.737 6.16s2.426 5.826 2.426 9.471c0 3.594-.809 6.711-2.426 9.355s-3.85 4.686-6.699 6.121c-2.849 1.438-6.197 2.156-10.048 2.156h-12.705v21.945h-7.623zm7.623-28.875h12.937c2.258 0 4.234-.436 5.928-1.309a9.538 9.538 0 0 0 3.967-3.773c.949-1.643 1.424-3.543 1.424-5.699 0-2.205-.475-4.119-1.424-5.736-.951-1.617-2.271-2.861-3.967-3.734-1.693-.871-3.67-1.309-5.928-1.309h-12.937v21.56zM529.264 1313.979v-58.289h7.238v58.289h-7.238zM559.756 1314.902c-2.722 0-5.135-.5-7.238-1.502-2.105-1-3.748-2.387-4.928-4.158-1.182-1.771-1.771-3.811-1.771-6.121 0-2.207.487-4.197 1.463-5.967.975-1.771 2.477-3.273 4.505-4.506 2.026-1.23 4.581-2.104 7.661-2.617l15.323-2.541v6.006l-13.706 2.387c-2.67.463-4.607 1.297-5.813 2.502-1.207 1.207-1.81 2.709-1.81 4.506 0 1.693.68 3.105 2.041 4.234 1.359 1.129 3.066 1.693 5.12 1.693 2.618 0 4.89-.551 6.814-1.654s3.427-2.605 4.505-4.506c1.078-1.898 1.617-3.977 1.617-6.236v-10.625c0-2.26-.822-4.094-2.465-5.506s-3.824-2.117-6.545-2.117c-2.361 0-4.453.615-6.275 1.848s-3.17 2.824-4.043 4.773l-6.236-3.234c.77-1.898 2.002-3.605 3.695-5.119 1.694-1.514 3.67-2.707 5.93-3.582a19.515 19.515 0 0 1 7.084-1.309c3.182 0 5.979.604 8.393 1.811 2.412 1.205 4.299 2.887 5.66 5.043 1.359 2.156 2.04 4.619 2.04 7.393v28.182h-7.007v-7.854l1.309.537c-.873 1.592-2.066 3.018-3.58 4.275-1.515 1.258-3.261 2.232-5.236 2.926-1.978.691-4.148 1.038-6.507 1.038zM607.958 1314.439c-4.056 0-7.188-1.154-9.394-3.465-2.209-2.311-3.312-5.568-3.312-9.779v-21.867h-7.47v-6.854h1.541c1.848 0 3.297-.564 4.35-1.693 1.052-1.129 1.579-2.619 1.579-4.467v-3.387h7.237v9.547h9.317v6.854h-9.317v21.637c0 1.387.219 2.594.655 3.619.436 1.027 1.167 1.836 2.194 2.426 1.026.59 2.387.885 4.081.885.358 0 .809-.025 1.347-.076.539-.051 1.04-.104 1.502-.154v6.314c-.668.154-1.412.27-2.232.346-.821.077-1.515.114-2.078.114zM625.976 1313.979v-34.65h-7.931v-6.854h7.931v-2.848c0-3.029.642-5.57 1.925-7.623s3.028-3.619 5.236-4.697c2.206-1.078 4.645-1.617 7.314-1.617.564 0 1.193.037 1.887.115.693.076 1.271.168 1.732.27v6.391a7.514 7.514 0 0 0-1.463-.191 32.263 32.263 0 0 0-1.309-.039c-2.362 0-4.301.564-5.814 1.693-1.514 1.131-2.271 3.029-2.271 5.699v2.848h9.856v6.854h-9.856v34.65h-7.237zM669.865 1314.902c-3.953 0-7.547-.936-10.78-2.811-3.233-1.873-5.813-4.453-7.738-7.738s-2.888-7.008-2.888-11.166.949-7.854 2.85-11.088c1.898-3.234 4.465-5.801 7.699-7.699s6.854-2.85 10.857-2.85c4.055 0 7.699.938 10.934 2.811a20.724 20.724 0 0 1 7.662 7.662c1.873 3.234 2.811 6.957 2.811 11.164 0 4.211-.977 7.945-2.926 11.203-1.952 3.262-4.531 5.828-7.739 7.701-3.209 1.876-6.79 2.811-10.742 2.811zm0-6.929c2.617 0 4.967-.643 7.045-1.926 2.08-1.283 3.722-3.053 4.928-5.312 1.206-2.258 1.811-4.773 1.811-7.547 0-2.771-.604-5.26-1.811-7.469-1.206-2.207-2.848-3.951-4.928-5.236-2.078-1.281-4.428-1.924-7.045-1.924-2.568 0-4.89.643-6.969 1.924-2.079 1.285-3.734 3.029-4.967 5.236-1.231 2.209-1.848 4.697-1.848 7.469 0 2.773.616 5.289 1.848 7.547 1.232 2.26 2.888 4.029 4.967 5.312s4.401 1.926 6.969 1.926zM700.51 1313.979v-41.504h7.084v7.623l-.77-1.078c.975-2.359 2.465-4.119 4.467-5.273 2.002-1.156 4.439-1.732 7.314-1.732h2.541v6.852h-3.619c-2.926 0-5.287.9-7.084 2.695-1.797 1.799-2.695 4.363-2.695 7.701v24.717h-7.238zM727.459 1313.979v-41.504h7.084v8.471l-1-1.232c1.025-2.668 2.668-4.697 4.928-6.082 2.258-1.387 4.799-2.08 7.623-2.08 3.234 0 6.146.898 8.739 2.695 2.592 1.797 4.376 4.158 5.353 7.084l-2.002.076c1.076-3.232 2.898-5.684 5.467-7.354 2.566-1.666 5.414-2.502 8.547-2.502 2.873 0 5.479.668 7.814 2.002 2.336 1.336 4.197 3.184 5.582 5.545 1.387 2.361 2.08 5.031 2.08 8.008v26.873h-7.238v-24.564c0-2.309-.412-4.26-1.232-5.852-.82-1.59-1.951-2.822-3.387-3.695-1.438-.873-3.08-1.309-4.93-1.309-1.848 0-3.502.436-4.965 1.309s-2.619 2.117-3.465 3.734c-.848 1.617-1.271 3.555-1.271 5.812v24.564h-7.238v-24.564c0-2.309-.411-4.26-1.231-5.852-.821-1.59-1.938-2.822-3.35-3.695-1.413-.873-3.067-1.309-4.966-1.309-1.849 0-3.504.436-4.967 1.309s-2.619 2.117-3.465 3.734c-.848 1.617-1.271 3.555-1.271 5.812v24.564h-7.239z",
                  className: "fill-[#ffffff]",
                }),
              ],
            }),
          }),
        eP = (e) => {
          let { isActive: l } = e;
          return (0, a.jsx)("svg", {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0",
            y: "0",
            xmlSpace: "preserve",
            viewBox: "0 0 2158.75 2334",
            children: (0, a.jsxs)("g", {
              id: "slice__audit",
              className: "relative z-40 origin-center transition-all ".concat(
                l && "drop-shadow-[0_12px_24px_rgba(0,131,247,0.8)]"
              ),
              children: [
                (0, a.jsx)("path", {
                  d: "M1934.453 859.484c-67.414-207.834-199.225-386.527-371.812-512.403L961.79 1176.412l972.663-316.928z",
                  className: "transition-all ".concat(
                    l ? "fill-[#00d0f0]" : "fill-white"
                  ),
                }),
                (0, a.jsx)("path", {
                  d: "M1934.453 859.484c-67.414-207.834-199.225-386.527-371.812-512.403L961.79 1176.412l972.663-316.928z",
                  className: "fill-none stroke-[#00d0f0] stroke-[8px]",
                  style: { strokeLinejoin: "round", strokeMiterlimit: 10 },
                }),
                (0, a.jsx)("path", {
                  d: "m1349.518 870.94 18.979-53.102h8.244l18.978 53.102h-7.463l-4.336-12.402h-22.603l-4.335 12.402h-7.464zm14.003-18.888h18.124l-10.021-29.081h1.99l-10.093 29.081zM1414.482 871.796c-2.796 0-5.284-.642-7.463-1.925-2.18-1.283-3.886-3.076-5.117-5.381-1.233-2.305-1.849-4.954-1.849-7.948v-24.02h6.682v23.308c0 1.9.391 3.563 1.173 4.989a8.53 8.53 0 0 0 3.27 3.35c1.396.809 2.996 1.212 4.797 1.212s3.4-.403 4.798-1.212c1.397-.808 2.488-1.971 3.27-3.492s1.173-3.326 1.173-5.417v-22.737h6.682v38.418h-6.468v-7.484l.995.642c-.901 2.424-2.417 4.312-4.549 5.667-2.134 1.352-4.599 2.03-7.394 2.03zM1459.544 871.796c-3.602 0-6.848-.879-9.737-2.638-2.891-1.757-5.165-4.157-6.823-7.198-1.659-3.041-2.487-6.438-2.487-10.193 0-3.849.84-7.281 2.522-10.299s3.945-5.405 6.788-7.164c2.844-1.757 6.088-2.637 9.737-2.637 3.175 0 5.994.677 8.458 2.031s4.407 3.172 5.829 5.452l-1.066 1.64v-23.807h6.681v53.957h-6.468v-8.197l.854 1.141c-1.327 2.566-3.259 4.526-5.793 5.881-2.536 1.353-5.367 2.031-8.495 2.031zm.569-6.415c2.368 0 4.513-.594 6.432-1.782 1.92-1.187 3.436-2.815 4.55-4.882 1.112-2.067 1.67-4.384 1.67-6.95 0-2.612-.558-4.941-1.67-6.985-1.114-2.042-2.63-3.658-4.55-4.847-1.919-1.187-4.063-1.781-6.432-1.781-2.37 0-4.514.595-6.433 1.781-1.919 1.188-3.424 2.805-4.514 4.847-1.091 2.044-1.635 4.373-1.635 6.985 0 2.566.544 4.883 1.635 6.95 1.09 2.066 2.582 3.695 4.478 4.882 1.895 1.188 4.052 1.782 6.469 1.782zM1489.609 826.393v-8.554h6.681v8.554h-6.681zm0 44.547v-38.418h6.681v38.418h-6.681zM1522.092 871.368c-3.744 0-6.635-1.069-8.672-3.208-2.038-2.138-3.057-5.155-3.057-9.052v-20.243h-6.895v-6.343h1.422c1.706 0 3.044-.522 4.016-1.568.971-1.045 1.457-2.424 1.457-4.134v-3.137h6.682v8.839h8.601v6.343h-8.601v20.029c0 1.283.201 2.4.604 3.35.401.951 1.077 1.7 2.025 2.246.947.547 2.203.819 3.767.819.331 0 .747-.023 1.244-.071.498-.047.96-.095 1.386-.143v5.845c-.616.143-1.304.249-2.061.32a20.85 20.85 0 0 1-1.918.108z",
                  className: "fill-[#282e37]",
                }),
              ],
            }),
          });
        },
        eq = (e) => {
          let { isActive: l } = e;
          return (0, a.jsx)("svg", {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0",
            y: "0",
            xmlSpace: "preserve",
            viewBox: "0 0 2158.75 2334",
            children: (0, a.jsxs)("g", {
              id: "slice__compliance",
              className: "relative z-40 origin-center transition-all ".concat(
                l && "drop-shadow-[0_12px_24px_rgba(0,131,247,0.8)]"
              ),
              children: [
                (0, a.jsx)("path", {
                  d: "M1563.178 2006.483c172.607-126.062 304.362-304.981 371.605-513.036L961.79 1176.412l601.388 830.071z",
                  className: "transition-all ".concat(
                    l ? "fill-[#0b4ccb]" : "fill-white"
                  ),
                }),
                (0, a.jsx)("path", {
                  d: "M1563.178 2006.483c172.607-126.062 304.362-304.981 371.605-513.036L961.79 1176.412l601.388 830.071z",
                  className: "fill-none stroke-[#0b4ccb] stroke-[8px]",
                  style: { strokeLinejoin: "round", strokeMiterlimit: 10 },
                }),
                (0, a.jsx)("path", {
                  className: "transition-all ".concat(
                    l ? "fill-white" : "fill-[#282e37]"
                  ),
                  d: "M1379.015 1593.232c-3.743 0-7.203-.678-10.377-2.031-3.175-1.354-5.924-3.267-8.245-5.738-2.322-2.47-4.135-5.369-5.438-8.695-1.304-3.326-1.954-6.961-1.954-10.905 0-3.992.65-7.65 1.954-10.978 1.303-3.325 3.115-6.225 5.438-8.695a24.293 24.293 0 0 1 8.21-5.738c3.15-1.354 6.621-2.031 10.412-2.031 3.648 0 6.931.642 9.845 1.925s5.377 2.946 7.392 4.989c2.014 2.044 3.447 4.229 4.3 6.558l-6.396 2.993c-1.232-2.993-3.151-5.404-5.757-7.234-2.606-1.828-5.734-2.744-9.383-2.744-3.695 0-6.978.88-9.844 2.638-2.867 1.758-5.106 4.205-6.717 7.341-1.611 3.137-2.417 6.796-2.417 10.978 0 4.134.806 7.769 2.417 10.905 1.61 3.136 3.85 5.584 6.717 7.341 2.866 1.759 6.148 2.638 9.844 2.638 3.648 0 6.776-.914 9.383-2.744 2.605-1.829 4.524-4.217 5.757-7.163l6.396 2.922c-.853 2.329-2.286 4.515-4.3 6.558-2.015 2.044-4.478 3.706-7.392 4.989s-6.197 1.921-9.845 1.921zM1426.637 1593.232c-3.649 0-6.966-.866-9.951-2.602-2.985-1.734-5.366-4.122-7.144-7.163-1.776-3.041-2.665-6.486-2.665-10.336 0-3.849.876-7.27 2.63-10.264a19.695 19.695 0 0 1 7.107-7.128c2.985-1.757 6.326-2.637 10.022-2.637 3.742 0 7.107.867 10.093 2.602a19.15 19.15 0 0 1 7.072 7.092c1.729 2.994 2.594 6.439 2.594 10.335 0 3.897-.9 7.354-2.7 10.371-1.802 3.019-4.183 5.394-7.144 7.128-2.961 1.736-6.267 2.602-9.914 2.602zm0-6.415c2.416 0 4.584-.594 6.503-1.782 1.919-1.187 3.436-2.826 4.549-4.918 1.113-2.091 1.671-4.419 1.671-6.985 0-2.565-.558-4.87-1.671-6.914-1.113-2.042-2.63-3.658-4.549-4.847-1.919-1.187-4.087-1.781-6.503-1.781-2.37 0-4.514.595-6.433 1.781-1.919 1.188-3.447 2.805-4.585 4.847-1.137 2.044-1.705 4.349-1.705 6.914 0 2.566.568 4.895 1.705 6.985 1.138 2.092 2.666 3.731 4.585 4.918 1.919 1.189 4.063 1.782 6.433 1.782zM1454.925 1592.377v-38.418h6.539v7.84l-.925-1.141c.947-2.47 2.464-4.348 4.549-5.631 2.085-1.282 4.431-1.924 7.037-1.924 2.985 0 5.674.832 8.067 2.494 2.392 1.664 4.039 3.85 4.939 6.558l-1.848.071c.995-2.993 2.677-5.262 5.046-6.807 2.369-1.544 4.999-2.316 7.89-2.316 2.653 0 5.058.618 7.215 1.853 2.155 1.236 3.874 2.947 5.153 5.132 1.279 2.187 1.919 4.658 1.919 7.413v24.876h-6.682v-22.737c0-2.139-.38-3.943-1.137-5.417-.759-1.473-1.802-2.613-3.128-3.422-1.327-.807-2.843-1.211-4.549-1.211s-3.234.404-4.584 1.211c-1.351.809-2.417 1.961-3.199 3.457-.781 1.497-1.173 3.291-1.173 5.382v22.737h-6.681v-22.737c0-2.139-.38-3.943-1.138-5.417-.758-1.473-1.789-2.613-3.092-3.422-1.304-.807-2.832-1.211-4.584-1.211-1.706 0-3.234.404-4.585 1.211-1.351.809-2.416 1.961-3.198 3.457-.782 1.497-1.173 3.291-1.173 5.382v22.737h-6.678zM1519.817 1606.633v-52.674h6.539v8.268l-.853-1.64c1.421-2.28 3.363-4.098 5.828-5.452 2.463-1.354 5.283-2.031 8.458-2.031 3.601 0 6.834.88 9.702 2.637 2.866 1.759 5.128 4.146 6.787 7.164 1.658 3.018 2.488 6.45 2.488 10.299 0 3.755-.83 7.152-2.488 10.193-1.659 3.041-3.921 5.441-6.787 7.198-2.868 1.759-6.125 2.638-9.773 2.638-3.081 0-5.889-.678-8.423-2.031-2.535-1.354-4.49-3.314-5.863-5.881l1.065-1.141v22.453h-6.68zm19.404-19.816c2.417 0 4.561-.594 6.433-1.782 1.872-1.187 3.353-2.815 4.442-4.882 1.09-2.067 1.635-4.384 1.635-6.95 0-2.612-.545-4.941-1.635-6.985-1.09-2.042-2.57-3.658-4.442-4.847-1.872-1.187-4.016-1.781-6.433-1.781-2.416 0-4.584.595-6.503 1.781-1.919 1.188-3.437 2.805-4.549 4.847-1.114 2.044-1.671 4.373-1.671 6.985 0 2.566.557 4.883 1.671 6.95 1.112 2.066 2.63 3.695 4.549 4.882 1.919 1.189 4.087 1.782 6.503 1.782zM1567.367 1592.377v-53.957h6.681v53.957h-6.681zM1584.212 1547.829v-8.554h6.682v8.554h-6.682zm0 44.548v-38.418h6.682v38.418h-6.682zM1612.358 1593.232c-2.512 0-4.738-.464-6.681-1.39-1.944-.927-3.46-2.21-4.549-3.85-1.091-1.639-1.635-3.528-1.635-5.666 0-2.043.449-3.885 1.35-5.524s2.286-3.029 4.158-4.17c1.871-1.14 4.229-1.947 7.072-2.423l14.145-2.353v5.56l-12.652 2.21c-2.464.428-4.253 1.2-5.366 2.316-1.113 1.117-1.67 2.507-1.67 4.17 0 1.567.628 2.875 1.884 3.92 1.255 1.046 2.83 1.568 4.727 1.568 2.416 0 4.514-.511 6.29-1.532 1.777-1.021 3.163-2.411 4.158-4.17.995-1.758 1.492-3.682 1.492-5.773v-9.837c0-2.09-.759-3.788-2.274-5.096-1.517-1.307-3.53-1.96-6.041-1.96-2.181 0-4.111.57-5.793 1.71-1.683 1.141-2.927 2.614-3.731 4.42l-5.758-2.994c.711-1.757 1.849-3.338 3.412-4.74 1.563-1.4 3.388-2.506 5.473-3.314a17.96 17.96 0 0 1 6.539-1.211c2.938 0 5.52.559 7.748 1.675 2.227 1.117 3.968 2.673 5.224 4.669 1.255 1.995 1.884 4.276 1.884 6.842v26.088h-6.468v-7.271l1.208.499c-.807 1.474-1.908 2.792-3.306 3.956-1.397 1.165-3.009 2.067-4.833 2.709-1.825.641-3.828.962-6.007.962zM1641.927 1592.377v-38.418h6.539v7.483l-1.066-.642c.947-2.423 2.476-4.312 4.584-5.666s4.585-2.031 7.428-2.031c2.748 0 5.2.618 7.356 1.853 2.156 1.236 3.861 2.947 5.117 5.132 1.256 2.187 1.884 4.658 1.884 7.413v24.876h-6.681v-22.737c0-2.139-.38-3.943-1.138-5.417-.759-1.473-1.837-2.613-3.233-3.422-1.398-.807-2.998-1.211-4.798-1.211-1.802 0-3.401.404-4.798 1.211-1.398.809-2.5 1.961-3.305 3.457-.807 1.497-1.209 3.291-1.209 5.382v22.737h-6.68zM1700.99 1593.232c-3.791 0-7.132-.879-10.021-2.638-2.891-1.757-5.178-4.157-6.859-7.198-1.683-3.041-2.523-6.462-2.523-10.265 0-3.849.829-7.27 2.488-10.264 1.658-2.993 3.944-5.369 6.858-7.128 2.914-1.757 6.267-2.637 10.058-2.637 2.511 0 4.856.452 7.037 1.354 2.179.903 4.098 2.128 5.757 3.671 1.658 1.545 2.866 3.314 3.625 5.311l-5.899 2.922a11.26 11.26 0 0 0-4.123-4.918c-1.848-1.234-3.979-1.853-6.396-1.853-2.322 0-4.419.582-6.29 1.746-1.873 1.165-3.353 2.779-4.442 4.847-1.091 2.067-1.635 4.408-1.635 7.021 0 2.566.544 4.883 1.635 6.95 1.09 2.066 2.569 3.695 4.442 4.882 1.871 1.188 3.968 1.782 6.29 1.782 2.417 0 4.537-.629 6.361-1.889 1.824-1.259 3.21-2.934 4.158-5.025l5.899 2.994c-.759 1.995-1.967 3.767-3.625 5.31-1.659 1.545-3.578 2.769-5.757 3.671-2.181.902-4.527 1.354-7.038 1.354zM1743.707 1593.232c-3.695 0-7.001-.879-9.915-2.638-2.914-1.757-5.201-4.169-6.858-7.234-1.66-3.064-2.488-6.497-2.488-10.3 0-3.849.828-7.27 2.488-10.264 1.657-2.993 3.885-5.356 6.681-7.092 2.796-1.734 5.971-2.602 9.524-2.602 2.843 0 5.366.511 7.569 1.532 2.204 1.022 4.075 2.4 5.615 4.134a18.779 18.779 0 0 1 3.554 5.916 19.429 19.429 0 0 1 1.244 6.879c0 .569-.035 1.164-.106 1.781a49.042 49.042 0 0 1-.249 1.854h-31.416v-5.773h27.578l-3.198 2.565c.473-2.47.26-4.68-.64-6.628-.901-1.948-2.229-3.493-3.98-4.634-1.754-1.14-3.744-1.71-5.971-1.71-2.228 0-4.265.582-6.112 1.746-1.849 1.165-3.282 2.792-4.301 4.883-1.02 2.091-1.434 4.586-1.243 7.483-.19 2.805.248 5.264 1.314 7.378s2.582 3.754 4.549 4.918c1.966 1.165 4.11 1.746 6.433 1.746 2.559 0 4.714-.594 6.468-1.782a14.03 14.03 0 0 0 4.265-4.562l5.544 2.851c-.758 1.759-1.931 3.362-3.518 4.812-1.589 1.45-3.473 2.602-5.651 3.457-2.181.857-4.575 1.284-7.18 1.284z",
                }),
              ],
            }),
          });
        },
        eR = (e) => {
          let { isActive: l } = e;
          return (0, a.jsx)("svg", {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0",
            y: "0",
            xmlSpace: "preserve",
            viewBox: "0 0 2158.75 2334",
            children: (0, a.jsxs)("g", {
              id: "slice__esg",
              className: "relative z-40 origin-center transition-all ".concat(
                l && "drop-shadow-[0_12px_24px_rgba(0,131,247,0.8)]"
              ),
              children: [
                (0, a.jsx)("path", {
                  d: "m961.79 1176.412.001 1026.063c224.775 0 432.609-72.728 601.387-195.993l-601.388-830.07z",
                  className: "transition-all ".concat(
                    l ? "fill-[#0b4ccb]" : "fill-white"
                  ),
                }),
                (0, a.jsx)("path", {
                  d: "m961.79 1176.412.001 1026.063c224.775 0 432.609-72.728 601.387-195.993l-601.388-830.07z",
                  className: "fill-none stroke-[#0b4ccb] stroke-[8px]",
                  style: { strokeLinejoin: "round", strokeMiterlimit: 10 },
                }),
                (0, a.jsx)("path", {
                  className: "transition-all ".concat(
                    l ? "fill-white" : "fill-[#282e37]"
                  ),
                  d: "M1105.811 1985.553v-53.102h34.544v6.415h-27.507v16.821h26.085v6.486h-26.085v16.964h27.507v6.415h-34.544zM1167.078 1986.408c-3.317 0-6.373-.631-9.169-1.889-2.796-1.259-5.165-2.981-7.107-5.168-1.943-2.185-3.365-4.633-4.265-7.342l6.112-2.494c1.279 3.421 3.187 6.047 5.722 7.876 2.534 1.83 5.509 2.744 8.92 2.744 2.085 0 3.91-.332 5.474-.998 1.563-.665 2.783-1.604 3.66-2.815.876-1.212 1.315-2.625 1.315-4.241 0-2.232-.629-3.991-1.884-5.274-1.257-1.283-3.092-2.28-5.509-2.993l-9.737-2.994c-3.838-1.187-6.788-3.053-8.85-5.595-2.061-2.542-3.092-5.5-3.092-8.874 0-2.898.711-5.453 2.133-7.663 1.421-2.209 3.376-3.943 5.863-5.203 2.488-1.258 5.319-1.889 8.494-1.889 3.174 0 6.053.57 8.636 1.711 2.582 1.141 4.773 2.673 6.574 4.598a18.266 18.266 0 0 1 3.98 6.593l-6.041 2.495c-1.091-2.946-2.784-5.204-5.082-6.771-2.299-1.568-4.965-2.353-7.996-2.353-1.896 0-3.566.321-5.012.962-1.445.642-2.559 1.581-3.34 2.815-.782 1.236-1.173 2.662-1.173 4.277 0 1.949.615 3.683 1.848 5.203 1.231 1.521 3.104 2.685 5.615 3.492l8.885 2.638c4.169 1.283 7.321 3.112 9.453 5.488 2.132 2.377 3.198 5.322 3.198 8.838 0 2.899-.746 5.465-2.238 7.698-1.493 2.234-3.555 3.98-6.184 5.239-2.629 1.258-5.697 1.889-9.203 1.889zM1219.319 1986.408c-3.744 0-7.203-.678-10.377-2.031a24.562 24.562 0 0 1-8.28-5.738c-2.346-2.47-4.171-5.369-5.474-8.695-1.304-3.326-1.954-6.961-1.954-10.905 0-3.992.65-7.65 1.954-10.978 1.303-3.325 3.115-6.225 5.438-8.695a24.293 24.293 0 0 1 8.21-5.738c3.15-1.354 6.621-2.031 10.412-2.031 3.648 0 6.93.642 9.845 1.925 2.914 1.283 5.377 2.946 7.392 4.989 2.014 2.044 3.447 4.229 4.3 6.558l-6.255 3.064c-1.232-3.04-3.162-5.476-5.792-7.306-2.63-1.828-5.793-2.744-9.489-2.744-3.695 0-6.978.88-9.844 2.638-2.867 1.758-5.106 4.205-6.717 7.341-1.611 3.137-2.417 6.796-2.417 10.978 0 4.134.817 7.769 2.452 10.905 1.635 3.136 3.885 5.584 6.753 7.341 2.866 1.759 6.147 2.638 9.844 2.638 3.174 0 6.064-.688 8.671-2.067 2.605-1.377 4.68-3.278 6.22-5.702 1.539-2.423 2.31-5.227 2.31-8.41v-3.279l3.199 2.994h-20.471v-6.059h24.309v4.704c0 3.706-.64 7.057-1.919 10.05-1.279 2.994-3.033 5.56-5.26 7.698a22.712 22.712 0 0 1-7.747 4.883c-2.941 1.113-6.043 1.672-9.313 1.672z",
                }),
              ],
            }),
          });
        },
        eW = (e) => {
          let { isActive: l } = e;
          return (0, a.jsx)("svg", {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0",
            y: "0",
            xmlSpace: "preserve",
            viewBox: "0 0 2158.75 2334",
            children: (0, a.jsxs)("g", {
              id: "slice__governance",
              className: "relative z-40 origin-center transition-all ".concat(
                l && "drop-shadow-[0_12px_24px_rgba(0,131,247,0.8)]"
              ),
              children: [
                (0, a.jsx)("path", {
                  d: "M1934.453 859.484 961.79 1176.412l972.993 317.035c32.215-99.674 49.626-206.034 49.626-316.472 0-110.814-17.53-217.522-49.956-317.491z",
                  className: "transition-all ".concat(
                    l ? "fill-[#0083f7]" : "fill-white"
                  ),
                }),
                (0, a.jsx)("path", {
                  d: "M1934.453 859.484 961.79 1176.412l972.993 317.035c32.215-99.674 49.626-206.034 49.626-316.472 0-110.814-17.53-217.522-49.956-317.491z",
                  className: "fill-none stroke-[#0083f7] stroke-[8px]",
                  style: { strokeLinejoin: "round", strokeMiterlimit: 10 },
                }),
                (0, a.jsx)("path", {
                  d: "M1416.631 1141.756h585.244v68.517h-585.244z",
                  className: "fill-none",
                }),
                (0, a.jsx)("path", {
                  className: "transition-all ".concat(
                    l ? "fill-white" : "fill-[#282e37]"
                  ),
                  d: "M1446.981 1204.802c-3.743 0-7.203-.678-10.377-2.031a24.582 24.582 0 0 1-8.28-5.738c-2.346-2.47-4.17-5.369-5.473-8.695-1.305-3.326-1.955-6.961-1.955-10.905 0-3.992.65-7.65 1.955-10.978 1.303-3.325 3.114-6.225 5.437-8.695a24.293 24.293 0 0 1 8.21-5.738c3.15-1.354 6.621-2.031 10.412-2.031 3.648 0 6.931.642 9.845 1.925s5.377 2.946 7.392 4.989c2.014 2.044 3.447 4.229 4.301 6.558l-6.255 3.064c-1.233-3.04-3.163-5.476-5.793-7.306-2.63-1.828-5.793-2.744-9.489-2.744-3.695 0-6.978.88-9.844 2.638-2.867 1.758-5.106 4.205-6.717 7.341-1.611 3.137-2.416 6.796-2.416 10.978 0 4.134.816 7.769 2.451 10.905 1.635 3.136 3.885 5.584 6.753 7.341 2.866 1.759 6.147 2.638 9.844 2.638 3.175 0 6.065-.688 8.672-2.067 2.605-1.377 4.679-3.278 6.219-5.702 1.539-2.423 2.311-5.227 2.311-8.41v-3.279l3.198 2.994h-20.471v-6.059h24.309v4.704c0 3.706-.64 7.057-1.919 10.05-1.279 2.994-3.033 5.56-5.26 7.698a22.712 22.712 0 0 1-7.747 4.883c-2.94 1.112-6.043 1.672-9.313 1.672zM1497.943 1204.802c-3.65 0-6.966-.866-9.951-2.602-2.985-1.734-5.366-4.122-7.144-7.163-1.776-3.041-2.665-6.486-2.665-10.336 0-3.849.876-7.27 2.63-10.264a19.687 19.687 0 0 1 7.107-7.128c2.985-1.757 6.326-2.637 10.022-2.637 3.742 0 7.107.867 10.093 2.602a19.14 19.14 0 0 1 7.071 7.092c1.729 2.994 2.595 6.439 2.595 10.335 0 3.897-.9 7.354-2.701 10.371-1.801 3.019-4.183 5.394-7.143 7.128-2.961 1.736-6.266 2.602-9.914 2.602zm0-6.415c2.416 0 4.584-.594 6.503-1.782 1.919-1.187 3.435-2.826 4.549-4.918 1.113-2.091 1.671-4.419 1.671-6.985 0-2.565-.558-4.87-1.671-6.914-1.114-2.042-2.63-3.658-4.549-4.847-1.919-1.187-4.087-1.781-6.503-1.781-2.37 0-4.514.595-6.433 1.781-1.919 1.188-3.447 2.805-4.585 4.847-1.137 2.044-1.706 4.349-1.706 6.914 0 2.566.569 4.895 1.706 6.985 1.138 2.092 2.666 3.731 4.585 4.918 1.92 1.188 4.063 1.782 6.433 1.782zM1536.253 1203.946l-14.997-38.418h7.392l12.013 32.502h-2.559l12.083-32.502h7.392l-15.068 38.418h-6.256zM1580.392 1204.802c-3.696 0-7.001-.879-9.915-2.638-2.914-1.757-5.201-4.169-6.859-7.234-1.659-3.064-2.487-6.497-2.487-10.3 0-3.849.828-7.27 2.487-10.264 1.658-2.993 3.885-5.356 6.682-7.092 2.795-1.734 5.971-2.602 9.524-2.602 2.843 0 5.366.511 7.569 1.532 2.203 1.022 4.074 2.4 5.615 4.134a18.797 18.797 0 0 1 3.554 5.916 19.451 19.451 0 0 1 1.244 6.879c0 .569-.036 1.164-.106 1.781a51.174 51.174 0 0 1-.249 1.854h-31.416v-5.773h27.577l-3.198 2.565c.474-2.47.26-4.68-.64-6.628-.9-1.948-2.228-3.493-3.98-4.634-1.753-1.14-3.743-1.71-5.97-1.71-2.229 0-4.265.582-6.113 1.746-1.848 1.165-3.281 2.792-4.3 4.883-1.02 2.091-1.434 4.586-1.244 7.483-.189 2.805.249 5.264 1.315 7.378 1.065 2.114 2.582 3.754 4.549 4.918 1.966 1.165 4.11 1.746 6.433 1.746 2.559 0 4.714-.594 6.468-1.782a14.04 14.04 0 0 0 4.265-4.562l5.544 2.851c-.759 1.759-1.932 3.362-3.519 4.812-1.588 1.45-3.472 2.602-5.65 3.457-2.181.856-4.575 1.284-7.18 1.284zM1606.334 1203.946v-38.418h6.539v7.056l-.71-.997c.899-2.186 2.274-3.813 4.122-4.883s4.098-1.604 6.752-1.604h2.346v6.344h-3.34c-2.701 0-4.882.831-6.54 2.494-1.659 1.664-2.487 4.039-2.487 7.128v22.88h-6.682zM1631.211 1203.946v-38.418h6.539v7.483l-1.066-.642c.947-2.423 2.476-4.312 4.584-5.666s4.585-2.031 7.428-2.031c2.748 0 5.2.618 7.356 1.853 2.156 1.236 3.861 2.947 5.118 5.132 1.255 2.187 1.883 4.658 1.883 7.413v24.876h-6.681v-22.737c0-2.139-.38-3.943-1.138-5.417-.758-1.473-1.837-2.613-3.233-3.422-1.398-.807-2.998-1.211-4.798-1.211-1.802 0-3.4.404-4.798 1.211-1.398.809-2.5 1.961-3.305 3.457-.807 1.497-1.209 3.291-1.209 5.382v22.737h-6.68zM1683.735 1204.802c-2.512 0-4.738-.464-6.681-1.39-1.944-.927-3.46-2.21-4.549-3.85-1.091-1.639-1.635-3.528-1.635-5.666 0-2.043.449-3.885 1.35-5.524s2.286-3.029 4.158-4.17c1.871-1.14 4.229-1.947 7.072-2.423l14.145-2.353v5.56l-12.652 2.21c-2.464.428-4.253 1.2-5.366 2.316-1.113 1.117-1.67 2.507-1.67 4.17 0 1.567.628 2.875 1.884 3.92 1.255 1.046 2.83 1.568 4.727 1.568 2.416 0 4.514-.511 6.29-1.532 1.777-1.021 3.163-2.411 4.158-4.17.995-1.758 1.492-3.682 1.492-5.773v-9.837c0-2.09-.759-3.788-2.274-5.096-1.517-1.307-3.53-1.96-6.041-1.96-2.181 0-4.111.57-5.793 1.71-1.683 1.141-2.927 2.614-3.731 4.42l-5.758-2.994c.711-1.757 1.849-3.338 3.412-4.74 1.563-1.4 3.388-2.506 5.473-3.314a17.96 17.96 0 0 1 6.539-1.211c2.938 0 5.52.559 7.748 1.675 2.227 1.117 3.968 2.673 5.224 4.669 1.255 1.995 1.884 4.276 1.884 6.842v26.088h-6.468v-7.271l1.208.499c-.807 1.474-1.908 2.792-3.306 3.956-1.397 1.165-3.009 2.067-4.833 2.709-1.825.64-3.828.962-6.007.962zM1713.304 1203.946v-38.418h6.539v7.483l-1.066-.642c.947-2.423 2.476-4.312 4.584-5.666s4.585-2.031 7.428-2.031c2.748 0 5.2.618 7.356 1.853 2.156 1.236 3.861 2.947 5.117 5.132 1.256 2.187 1.884 4.658 1.884 7.413v24.876h-6.681v-22.737c0-2.139-.38-3.943-1.138-5.417-.759-1.473-1.837-2.613-3.233-3.422-1.398-.807-2.998-1.211-4.798-1.211-1.802 0-3.401.404-4.798 1.211-1.398.809-2.5 1.961-3.305 3.457-.807 1.497-1.209 3.291-1.209 5.382v22.737h-6.68zM1772.367 1204.802c-3.791 0-7.132-.879-10.021-2.638-2.891-1.757-5.178-4.157-6.859-7.198-1.683-3.041-2.523-6.462-2.523-10.265 0-3.849.829-7.27 2.488-10.264 1.658-2.993 3.944-5.369 6.858-7.128 2.914-1.757 6.267-2.637 10.058-2.637 2.511 0 4.856.452 7.037 1.354 2.179.903 4.098 2.128 5.757 3.671 1.658 1.545 2.866 3.314 3.625 5.311l-5.899 2.922a11.26 11.26 0 0 0-4.123-4.918c-1.848-1.234-3.979-1.853-6.396-1.853-2.322 0-4.419.582-6.29 1.746-1.873 1.165-3.353 2.779-4.442 4.847-1.091 2.067-1.635 4.408-1.635 7.021 0 2.566.544 4.883 1.635 6.95 1.09 2.066 2.569 3.695 4.442 4.882 1.871 1.188 3.968 1.782 6.29 1.782 2.417 0 4.537-.629 6.361-1.889 1.824-1.259 3.21-2.934 4.158-5.025l5.899 2.994c-.759 1.995-1.967 3.767-3.625 5.31-1.659 1.545-3.578 2.769-5.757 3.671-2.181.902-4.527 1.354-7.038 1.354zM1815.084 1204.802c-3.695 0-7.001-.879-9.915-2.638-2.914-1.757-5.201-4.169-6.858-7.234-1.66-3.064-2.488-6.497-2.488-10.3 0-3.849.828-7.27 2.488-10.264 1.657-2.993 3.885-5.356 6.681-7.092 2.796-1.734 5.971-2.602 9.524-2.602 2.843 0 5.366.511 7.569 1.532 2.204 1.022 4.075 2.4 5.615 4.134a18.779 18.779 0 0 1 3.554 5.916 19.429 19.429 0 0 1 1.244 6.879c0 .569-.035 1.164-.106 1.781a49.042 49.042 0 0 1-.249 1.854h-31.416v-5.773h27.578l-3.198 2.565c.473-2.47.26-4.68-.64-6.628-.901-1.948-2.229-3.493-3.98-4.634-1.754-1.14-3.744-1.71-5.971-1.71-2.228 0-4.265.582-6.112 1.746-1.849 1.165-3.282 2.792-4.301 4.883-1.02 2.091-1.434 4.586-1.243 7.483-.19 2.805.248 5.264 1.314 7.378s2.582 3.754 4.549 4.918c1.966 1.165 4.11 1.746 6.433 1.746 2.559 0 4.714-.594 6.468-1.782a14.03 14.03 0 0 0 4.265-4.562l5.544 2.851c-.758 1.759-1.931 3.362-3.518 4.812-1.589 1.45-3.473 2.602-5.651 3.457-2.181.856-4.575 1.284-7.18 1.284z",
                }),
              ],
            }),
          });
        },
        eJ = (e) => {
          let { isActive: l } = e;
          return (0, a.jsx)("svg", {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0",
            y: "0",
            xmlSpace: "preserve",
            viewBox: "0 0 2158.75 2334",
            children: (0, a.jsxs)("g", {
              id: "slice__risk",
              className: "relative z-40 origin-center transition-all ".concat(
                l && "drop-shadow-[0_12px_24px_rgba(0,131,247,0.8)]"
              ),
              children: [
                (0, a.jsx)("path", {
                  d: "m961.79 151.476.001 1024.937 600.851-829.331c-168.683-123.03-376.314-195.606-600.852-195.606z",
                  className: "transition-all ".concat(
                    l ? "fill-[#00d0f0]" : "fill-white"
                  ),
                }),
                (0, a.jsx)("path", {
                  d: "m961.79 151.476.001 1024.937 600.851-829.331c-168.683-123.03-376.314-195.606-600.852-195.606z",
                  className: "fill-none stroke-[#00d0f0] stroke-[8px]",
                  style: { strokeLinejoin: "round", strokeMiterlimit: 10 },
                }),
                (0, a.jsx)("path", {
                  d: "M1105.811 430.756v-53.102h18.765c3.506 0 6.585.666 9.239 1.996 2.653 1.331 4.727 3.231 6.22 5.702 1.492 2.471 2.239 5.394 2.239 8.767 0 3.707-.949 6.879-2.844 9.516-1.896 2.638-4.454 4.526-7.676 5.667l12.296 21.454h-8.103l-13.007-23.022 4.69 2.708h-14.783v20.314h-7.036zm7.037-26.729h11.94c2.085 0 3.909-.403 5.473-1.212a8.817 8.817 0 0 0 3.661-3.493c.876-1.52 1.314-3.278 1.314-5.274 0-2.042-.438-3.813-1.314-5.31-.878-1.497-2.098-2.648-3.661-3.457-1.563-.808-3.388-1.212-5.473-1.212h-11.94v19.958zM1151.086 386.208v-8.554h6.682v8.554h-6.682zm0 44.548v-38.418h6.682v38.418h-6.682zM1181.721 431.611c-3.839 0-7.179-.95-10.022-2.852-2.843-1.899-4.881-4.466-6.112-7.697l5.331-2.566c1.089 2.281 2.582 4.087 4.478 5.417 1.895 1.331 4.004 1.996 6.326 1.996 2.036 0 3.742-.499 5.117-1.497 1.374-.998 2.062-2.304 2.062-3.92 0-1.141-.32-2.055-.96-2.744a7.197 7.197 0 0 0-2.274-1.64c-.877-.403-1.718-.7-2.523-.891l-5.757-1.64c-3.412-.95-5.912-2.363-7.499-4.241-1.588-1.876-2.381-4.051-2.381-6.521 0-2.281.58-4.265 1.741-5.952 1.161-1.686 2.748-3.005 4.763-3.956 2.013-.949 4.275-1.425 6.788-1.425 3.363 0 6.385.855 9.062 2.565 2.677 1.711 4.585 4.111 5.722 7.199l-5.401 2.495c-.853-1.996-2.133-3.564-3.838-4.705-1.706-1.14-3.625-1.71-5.758-1.71-1.943 0-3.482.476-4.62 1.425-1.137.951-1.705 2.187-1.705 3.707 0 1.046.284 1.913.853 2.602a5.536 5.536 0 0 0 2.062 1.568 22.41 22.41 0 0 0 2.345.891l6.255 1.854c3.128.903 5.556 2.305 7.285 4.205 1.729 1.901 2.595 4.182 2.595 6.843 0 2.138-.593 4.062-1.776 5.773-1.186 1.71-2.82 3.041-4.904 3.991-2.091.951-4.508 1.426-7.255 1.426zM1204.251 430.756v-53.957h6.681v36.993l-2.7-.642 20.327-20.812h8.459l-14.713 15.467 15.708 22.951h-7.819l-14.357-20.812 4.123-.214-11.16 11.76 2.132-4.919v14.185h-6.681z",
                }),
              ],
            }),
          });
        },
        eX = (e) => {
          let { slice: l, isActive: s, color: t } = e;
          switch (l) {
            case "audit":
              return (0, a.jsx)(eP, { isActive: s });
            case "compliance":
              return (0, a.jsx)(eq, { isActive: s });
            case "esg":
              return (0, a.jsx)(eR, { isActive: s });
            case "governance":
              return (0, a.jsx)(eW, { isActive: s });
            case "risk":
              return (0, a.jsx)(eJ, { isActive: s });
            default:
              return null;
          }
        },
        eF = (e) => {
          let {
            className: l,
            handleMouseEnter: s,
            handleMouseLeave: t,
            activeSlice: c,
          } = e;
          return (0, a.jsx)("div", {
            className: "container ".concat(l && l),
            children: (0, a.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              xmlSpace: "preserve",
              id: "Layer_1",
              x: "0",
              y: "0",
              version: "1.1",
              viewBox: "0 0 2158.75 2334",
              children: [
                (0, a.jsx)(eB, {}),
                (0, a.jsx)(eZ, {}),
                (0, a.jsx)(eY, {}),
                (0, a.jsx)(eE, {
                  onMouseEnter: () => {
                    s && s("");
                  },
                  onMouseLeave: () => {
                    t && t();
                  },
                }),
                (0, a.jsx)(eT, {}),
                [
                  { name: "risk", color: "#00d0f0" },
                  { name: "audit", color: "#00d0f0" },
                  { name: "governance", color: "#0083f7" },
                  { name: "compliance", color: "#0b4ccb" },
                  { name: "esg", color: "#0b4ccb" },
                ].map((e, l) =>
                  (0, a.jsx)(
                    "g",
                    {
                      onMouseEnter: () => {
                        s && s(e.name);
                      },
                      onMouseLeave: () => {
                        t && t();
                      },
                      children: (0, a.jsx)(
                        eX,
                        {
                          slice: e.name,
                          color: e.color,
                          isActive: e.name === c,
                        },
                        l
                      ),
                    },
                    l
                  )
                ),
                (0, a.jsx)(eD, {}),
              ],
            }),
          });
        },
        eO = () => {
          let [e, l] = (0, u.useState)(""),
            [s, t] = (0, u.useState)(!1),
            [r, i] = (0, u.useState)(!1),
            [n, o] = (0, u.useState)(!1);
          return (
            (0, u.useEffect)(() => {
              if (!s) {
                let e = [
                    "risk",
                    "audit",
                    "governance",
                    "compliance",
                    "esg",
                    "",
                  ],
                  s = 0,
                  a = setInterval(() => {
                    l(e[s]), i(!0), ++s === e.length && (s = 0);
                  }, 3e3);
                return () => clearInterval(a);
              }
            }, [s]),
            (0, u.useEffect)(() => {
              s && i(!1);
            }, [s]),
            (0, u.useEffect)(() => {
              window.innerWidth < 768 && o(!0);
            }, []),
            (0, a.jsxs)(eV.$, {
              padding: "tight",
              className:
                "relative overflow-hidden bg-cover bg-center bg-no-repeat",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "absolute left-0 top-0 h-full w-full origin-top-left overflow-hidden bg-brand-dim lg:-top-20 lg:-skew-y-6",
                }),
                (0, a.jsx)(c.s, {
                  component: "h2",
                  color: "light-title",
                  fontWeight: "bold",
                  text: "Transform today’s risks into tomorrow’s opportunities with the Diligent One Platform ",
                  highlights: ["Diligent", "One", "Platform"],
                  className: "relative z-10 pb-5 text-center lg:pb-20",
                }),
                (0, a.jsxs)("div", {
                  className:
                    "relative grid grid-cols-1 items-center gap-4 lg:grid-cols-2 lg:gap-10 lg:pb-28",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "relative flex flex-col items-center",
                      children: [
                        (0, a.jsx)(eF, {
                          className:
                            "max-w-lg overflow-y-visible pb-4 lg:pb-10",
                          handleMouseEnter: (e) => {
                            l(e), t(!0);
                          },
                          activeSlice: e,
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "absolute -bottom-2 flex items-center transition-all lg:-bottom-0 ".concat(
                              r
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-5 opacity-0"
                            ),
                          children: [
                            (0, a.jsx)(v.J, {
                              iconColor: "default",
                              iconSize: "default",
                              iconName: n ? "touch_app" : "mouse",
                              className: "inline-block",
                            }),
                            (0, a.jsx)(c.L, {
                              component: "label",
                              className: "text-xs text-gray-300 lg:text-sm",
                              children: n
                                ? "Touch each pillar to learn more about the Diligent One Platform"
                                : "Hover on the pillars to learn more about the Diligent One Platform",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "mx-auto flex flex-col items-start justify-start ".concat(
                              "" === e ? "block" : "hidden"
                            ),
                          children: [
                            (0, a.jsx)(c.s, {
                              component: "h2",
                              color: "light-title",
                              fontWeight: "bold",
                              text: "Diligent One Platform",
                              highlights: ["Platform"],
                              className: "pb-5 lg:pb-10",
                            }),
                            (0, a.jsxs)("ul", {
                              className:
                                "grid list-disc grid-flow-col grid-rows-3 items-center justify-center gap-x-10 gap-y-2 pl-4 text-dark-content",
                              children: [
                                (0, a.jsx)("li", {
                                  className: "text-md",
                                  children: "Board reports",
                                }),
                                (0, a.jsx)("li", {
                                  className: "text-md",
                                  children: "Risk reports",
                                }),
                                (0, a.jsx)("li", {
                                  className: "text-md",
                                  children: "Audit reports",
                                }),
                                (0, a.jsx)("li", {
                                  className: "text-md",
                                  children: "ESG reports",
                                }),
                                (0, a.jsx)("li", {
                                  className: "text-md",
                                  children: "Reporting best practices",
                                }),
                                (0, a.jsx)("li", {
                                  className: "text-md",
                                  children: "Benchmarking & insights",
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className: "self-start pt-7",
                              children: (0, a.jsx)(ea.r, {
                                intent: "light",
                                className: "font-semibold",
                                href: "/platform/diligent-one",
                                arrow: !0,
                                children: "Learn about the #1 GRC platform",
                              }),
                            }),
                          ],
                        }),
                        "" !== e &&
                          (0, a.jsx)("div", {
                            className:
                              "mx-auto flex w-fit flex-col items-start justify-start",
                            children: (0, a.jsx)(eG, { activeSlice: e }),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        eG = (e) => {
          let { activeSlice: l } = e,
            [s, t] = (0, u.useState)(!1);
          (0, u.useEffect)(() => {
            window.innerWidth < 768 && t(!0);
          }, []);
          let r = {
            risk: {
              title: "Risk and security management",
              description:
                "Easily manage risks with automated processes and continuous monitoring. Seamlessly deliver clarity to the board and C-suite. ",
              cta: {
                label: "Learn about risk management",
                href: "/solutions/enterprise-risk-management",
              },
            },
            audit: {
              title: "Audit and control management",
              description:
                "Generate strategic insights that fuel transformative change by effortlessly automating manual tasks and unifying diverse datasets.",
              cta: {
                label: "Learn about audit and control management",
                href: "/solutions/audit-management",
              },
            },
            governance: {
              title: "Governance and board management",
              description:
                "Cut board meeting prep time in half and protect your most sensitive information on the world’s leading board portal. Trusted by over 700,000 directors. ",
              cta: {
                label: "Learn about board management",
                href: "/solutions/board-and-leadership-collaboration",
              },
            },
            compliance: {
              title: "Ethics - compliance management",
              description:
                "Stay ahead of new regulations that affect you and your suppliers and turn ethical decision-making into standard operating procedure.",
              cta: {
                label: "Learn about compliance management",
                href: "/solutions/policy-management",
              },
            },
            esg: {
              title: "Diversity and sustainability management",
              description:
                "Take the hassle out of ESG data collection and analysis. Show customers, employees and investors you’re serious about sustainability.",
              cta: {
                label: "Learn about ESG management",
                href: "/solutions/market-intelligence",
              },
            },
          };
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)("div", {
              className: "flex flex-col",
              children: [
                (0, a.jsx)(c.s, {
                  component: s ? "h3" : "h2",
                  as: "h2",
                  color: "light-title",
                  fontWeight: "bold",
                  text: r[l].title,
                  className: "pb-5 lg:pb-10",
                }),
                (0, a.jsx)(c.L, {
                  component: "p",
                  color: "light-content",
                  children: r[l].description,
                }),
                (0, a.jsx)("div", {
                  className: "pt-4",
                  children: (0, a.jsx)(ea.r, {
                    intent: "light",
                    className: "font-semibold",
                    href: r[l].cta.href,
                    arrow: !0,
                    children: r[l].cta.label,
                  }),
                }),
              ],
            }),
          });
        };
      var eA = s(52907),
        e$ = s(46415);
      let eU = (e) => {
          let [l, s] = (0, u.useState)(3);
          return (
            (0, u.useEffect)(() => {
              s(e.cards.length > 4 ? 4 : e.cards.length);
            }, [e.cards]),
            (0, a.jsxs)(eV.$, {
              padding: "tight",
              children: [
                (0, a.jsx)("div", {
                  className: "pb-5 text-center lg:pb-10",
                  children: (0, a.jsx)(n.YI, {
                    value: e.title,
                    components: d.YD,
                  }),
                }),
                (0, a.jsx)(eA.M, {
                  gap: 8,
                  cols: l,
                  children: e.cards.map((e, l) => {
                    var s, t;
                    return (0, a.jsx)(
                      e$.a,
                      {
                        title: e.title,
                        description: e.content,
                        logos: e.logos,
                        cta: {
                          label:
                            null === (s = e.cta) || void 0 === s
                              ? void 0
                              : s.ctaText,
                          link:
                            null === (t = e.cta) || void 0 === t
                              ? void 0
                              : t.ctaLink,
                          type: "link",
                        },
                        centered: !0,
                      },
                      l
                    );
                  }),
                }),
              ],
            })
          );
        },
        eK = (e) => {
          let { textBlock: l, pricingPlans: s } = e;
          return (0, a.jsx)(eV.$, {
            padding: "xTight",
            children: (0, a.jsxs)(d.A0, {
              justify: "between",
              children: [
                (0, a.jsx)(eI.al, { data: l }),
                (0, a.jsx)(eA.M, {
                  cols: 2,
                  className: "flex-grow-0",
                  children: s.map((e) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        className:
                          "flex flex-col items-center justify-between gap-4 rounded-md bg-white px-6 py-4 shadow-card lg:items-start",
                        children: [
                          (0, a.jsx)(n.YI, {
                            value: e.plan.title,
                            components: d.BJ,
                          }),
                          (0, a.jsxs)(c.L, {
                            component: "h4",
                            as: "p",
                            color: "dark-content",
                            fontWeight: "bold",
                            className: "flex items-start gap-0.5",
                            children: [
                              (0, a.jsx)(c.L, {
                                component: "span",
                                as: "span",
                                color: "dark-content",
                                className: "text-sm",
                                children: "$",
                              }),
                              e.plan.price,
                            ],
                          }),
                        ],
                      },
                      e.plan._key
                    )
                  ),
                }),
              ],
            }),
          });
        },
        eQ = {
          block: {
            normal: (e) =>
              (0, a.jsx)("div", {
                className:
                  "font-plus-jakarta-sans text-[14px] leading-5 text-white",
                children: e.children,
              }),
          },
          marks: {
            em: (e) => {
              let { children: l } = e;
              return (0, a.jsx)("em", { children: l });
            },
            strong: (e) => {
              let { children: l } = e;
              return (0, a.jsx)("strong", {
                className: "font-semibold",
                children: l,
              });
            },
            link: (e) => {
              let { value: l, children: s } = e,
                { blank: t, href: c } = l;
              return (0, a.jsx)("a", {
                href: c,
                rel: "noopener noreferrer",
                className:
                  "font-semibold text-light-link hover:cursor-pointer hover:text-light-link/80",
                children: s,
              });
            },
            colorHighlight: (e) =>
              (0, a.jsx)(c.L, {
                component: "span",
                color: "red",
                className: "",
                children: e.children,
              }),
            highlight: (e) =>
              (0, a.jsx)(c.L, {
                component: "span",
                color: e.value.color,
                children: e.children,
              }),
          },
        },
        e1 = {
          block: {
            normal: (e) =>
              (0, a.jsx)("div", {
                className:
                  "font-plus-jakarta-sans text-[30px] leading-10 text-black",
                children: e.children,
              }),
          },
          marks: {
            em: (e) => {
              let { children: l } = e;
              return (0, a.jsx)("em", { children: l });
            },
            strong: (e) => {
              let { children: l } = e;
              return (0, a.jsx)("strong", {
                className: "font-semibold",
                children: l,
              });
            },
            link: (e) => {
              let { value: l, children: s } = e,
                { blank: t, href: c } = l;
              return (0, a.jsx)("a", {
                href: c,
                rel: "noopener noreferrer",
                className:
                  "font-semibold text-light-link hover:cursor-pointer hover:text-light-link/80",
                children: s,
              });
            },
            colorHighlight: (e) =>
              (0, a.jsx)(c.L, {
                component: "span",
                color: "red",
                className: "",
                children: e.children,
              }),
            highlight: (e) =>
              (0, a.jsx)(c.L, {
                component: "span",
                color: e.value.color,
                children: e.children,
              }),
          },
        },
        e2 = (e) => {
          let { data: l, color: s } = e;
          return (0, a.jsxs)("div", {
            className:
              "flex h-full w-full flex-col items-start justify-start gap-14 p-10 ".concat(
                s
              ),
            children: [
              (0, a.jsx)("div", {
                className: "p-2",
                children: (0, a.jsx)("img", {
                  src: l.icon,
                  style: { objectFit: "contain" },
                  alt: "icon",
                  className: "h-[40px] w-[40px]",
                }),
              }),
              (0, a.jsxs)("div", {
                className: "flex flex-col gap-[20px]",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "font-plus-jakarta-sans text-[22px] font-[500] text-white",
                    children: l.title,
                  }),
                  (0, a.jsx)(n.YI, { value: l.description, components: eQ }),
                ],
              }),
            ],
          });
        };
      var e3 = (e) => {
        let { data: l } = e,
          s = (e) => {
            let l = ["bg-neutral-400", "bg-neutral-500", "bg-red-600"];
            return l[e % l.length];
          };
        return (0, a.jsx)(eV.$, {
          children: (0, a.jsxs)("div", {
            className: "flex flex-col gap-[50px]",
            children: [
              l.title &&
                l.subTitle &&
                (0, a.jsxs)("div", {
                  className: "flex flex-col p-2",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "font-plus-jakarta-sans text-[60px] text-black",
                      children: l.title,
                    }),
                    (0, a.jsx)(n.YI, { value: l.subTitle, components: e1 }),
                  ],
                }),
              (0, a.jsx)("div", {
                className:
                  "grid grid-cols-1 gap-x-1 gap-y-1 sm:grid-cols-2 lg:grid-cols-3 ",
                children: l.informationBlocks.map((e, l) =>
                  (0, a.jsx)(e2, { data: e, color: s(l) }, l)
                ),
              }),
            ],
          }),
        });
      };
      let e4 = E.z.object({
          title: E.z.string(),
          description: E.z.array(A),
          icon: E.z.string().url(),
        }),
        e5 = E.z.object({
          title: E.z.string().optional(),
          subTitle: E.z.array(A).optional(),
          informationBlocks: E.z.array(e4),
        }),
        e6 = (e) => {
          let { data: l } = e,
            { headline: s, description: t, iconItems: c } = l;
          return (0, a.jsxs)(eV.$, {
            bgColor: "gray",
            padding: "tight",
            children: [
              (0, a.jsxs)("div", {
                className: "flex flex-col place-items-center gap-2 text-center",
                children: [
                  (0, a.jsx)(n.YI, { value: s, components: d.YD }),
                  (0, a.jsx)("div", {
                    className: "max-w-3xl",
                    children: (0, a.jsx)(n.YI, { value: t, components: d.BJ }),
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className:
                  "mx-auto grid grid-cols-2 gap-10 pt-10 text-center md:grid-cols-3 lg:grid-cols-6",
                children: c.map((e, l) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      className:
                        "mx-auto flex max-w-[150px] flex-col items-center justify-center gap-3 lg:max-w-fit lg:justify-start",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "flex h-20 w-20 items-center justify-center rounded-full bg-brand-primary",
                          children: (0, a.jsx)(v.J, {
                            iconName: e.icon,
                            iconSize: "lg",
                            iconColor: "white",
                            className: "text-brand-primary",
                          }),
                        }),
                        (0, a.jsx)(n.YI, { value: e.title, components: d.BJ }),
                      ],
                    },
                    l
                  )
                ),
              }),
            ],
          });
        };
      var e7 = s(97497);
      let e8 = (e) => {
          let { data: l } = e,
            { image: s, title: t, link: r } = l;
          return (0, a.jsxs)("a", {
            href: r,
            className: "flex flex-col items-center",
            children: [
              (0, a.jsx)(d.p9, {
                image: s.image,
                alt: s.alt,
                width: 1e3,
                height: 1e3,
                className:
                  "max-h-[235px] w-full object-contain pb-3 drop-shadow-lg lg:max-h-[158px] lg:pb-5",
              }),
              (0, a.jsx)(c.L, {
                component: "h5",
                color: "dark-title",
                fontWeight: "semibold",
                className: "pt-3 text-center",
                children: t,
              }),
              (0, a.jsx)(e7.r, {
                className:
                  "w-fit pt-2 font-semibold text-light-link hover:cursor-pointer hover:text-light-link/80",
                arrow: !0,
                children: "Learn More",
              }),
            ],
          });
        },
        e0 = (e) => {
          let { data: l } = e,
            { imageLinks: s } = l;
          return (0, a.jsxs)(eV.$, {
            padding: "tight",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "mx-auto flex w-fit flex-col items-center gap-3 text-center",
                children: [
                  (0, a.jsx)(n.YI, { value: l.title, components: d.YD }),
                  (0, a.jsx)(n.YI, { value: l.subtitle, components: d.BJ }),
                ],
              }),
              (0, a.jsx)(eA.M, {
                gap: 8,
                cols: 4,
                className: "pt-5 lg:pt-10",
                children: s.map((e) => (0, a.jsx)(e8, { data: e }, e._key)),
              }),
            ],
          });
        };
      var e9 = s(97092);
      let le = (e) => {
        let { data: l } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("section", {
              className: "container pt-8 lg:pt-14",
              children: (0, a.jsxs)("div", {
                className:
                  "flex flex-col place-content-center gap-3 text-center",
                children: [
                  (0, a.jsx)(n.YI, { value: l.headline, components: d.YD }),
                  (0, a.jsx)("div", {
                    className: "mx-auto max-w-3xl",
                    children: (0, a.jsx)(n.YI, {
                      value: l.description,
                      components: d.BJ,
                    }),
                  }),
                ],
              }),
            }),
            l.listGroups.map((e) =>
              (0, a.jsx)(
                eV.$,
                {
                  bgColor: e.backgroundColor || "light",
                  padding: "tight",
                  children: (0, a.jsxs)("div", {
                    className: "container mx-auto py-12",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "mx-auto flex max-w-3xl flex-col gap-3 text-center",
                        children: [
                          (0, a.jsx)(n.YI, {
                            value: e.headline,
                            components:
                              "dark" === e.backgroundColor ? e9.HD : d.YD,
                          }),
                          (0, a.jsx)(n.YI, {
                            value: e.description,
                            components:
                              "dark" === e.backgroundColor ? e9.IK : d.BJ,
                          }),
                        ],
                      }),
                      (0, a.jsx)("ul", {
                        className: "grid pt-5 ".concat(
                          e.shortList
                            ? "grid-col-1 lg:grid-flow-col lg:grid-rows-6"
                            : "grid-col-1 lg:grid-flow-col lg:grid-rows-name-list"
                        ),
                        children: e.listItems.map((l, s) =>
                          (0, a.jsx)(
                            d.xh,
                            {
                              text: l.name,
                              label: l.company,
                              color:
                                "dark" === e.backgroundColor
                                  ? "light-content"
                                  : "dark-content",
                            },
                            s
                          )
                        ),
                      }),
                    ],
                  }),
                },
                e._key
              )
            ),
          ],
        });
      };
      function ll(e) {
        let { data: l } = e,
          [s, t] = (0, u.useState)(4),
          { name: r, resources: i } = l;
        return (
          (0, u.useEffect)(() => {
            t(null == i ? void 0 : i.length);
          }, [i]),
          (0, a.jsxs)(eV.$, {
            children: [
              (0, a.jsx)("div", {
                className: "pb-7 text-center",
                children:
                  r &&
                  (0, a.jsx)(c.L, {
                    component: "h2",
                    color: "dark-title",
                    children: r,
                  }),
              }),
              (0, a.jsx)(eA.M, {
                cols: s,
                children: i.map((e, l) =>
                  (0, a.jsx)(
                    d.Zb,
                    {
                      type: e._type,
                      slug: e.slug.current,
                      title: e.title,
                      description: e.description || void 0,
                      image: e.image || void 0,
                      ratio: e.ratio || void 0,
                    },
                    l
                  )
                ),
              }),
            ],
          })
        );
      }
      var ls = s(60690);
      let la = (e) => {
        let { data: l } = e,
          { pageComponents: s } = l;
        return (0, a.jsx)("div", {
          children: s.map((e) => {
            switch (e._type) {
              case "colorBlock":
                return (0, a.jsx)(eL, { data: e }, e._key);
              case "hero":
                return (0, a.jsx)(eS.Ln, { data: e }, e._key);
              case "formHero":
                return (0, a.jsx)(ez, { data: e }, e._key);
              case "formBlock":
                return (0, a.jsx)(ls.n, { data: e }, e._key);
              case "logoCarousel":
                return (0, a.jsx)(e_.Z, { logos: e.logos }, e._key);
              case "cardWithIconSection":
                return (0, a.jsx)(x.I, { data: e, cards: e }, e._key);
              case "sectionWithImage":
                return (0, a.jsx)(C.Z, { data: e }, e._key);
              case "testimonialCard":
                return (0, a.jsx)(ex, { data: e }, e._key);
              case "callOutBanner":
                return (0, a.jsx)(er, { data: e }, e._key);
              case "statIconText":
                return (0, a.jsx)(T.Z, { data: e }, e._key);
              case "textWithLogos":
                return (0, a.jsx)(
                  eI.al,
                  { data: e, bg: "gray", centered: !0 },
                  e._key
                );
              case "textBlock":
                return (0, a.jsx)(Y.a, { data: e }, e._key);
              case "imageLinksSection":
                return (0, a.jsx)(e0, { data: e }, e._key);
              case "featureListSection":
                return (0, a.jsx)(w, { data: e.data }, e._key);
              case "standardCardSection":
                return (0, a.jsx)(
                  eU,
                  { title: e.title, cards: e.cards },
                  e._key
                );
              case "contactUsBlock":
                return (0, a.jsx)(b, { data: e.data }, e._key);
              case "asymmetricSectionWithTextImage":
                return (0, a.jsx)(m, { data: e.data }, e._key);
              case "imageTilesScattered":
                return (0, a.jsx)(
                  M,
                  {
                    title: e.sectionTitle,
                    body: e.sectionBody,
                    images: e.images,
                  },
                  e._key
                );
              case "peopleInfoSchema":
                return (0, a.jsx)(
                  Z,
                  { title: e.title, content: e.content, bios: e.bios },
                  e._key
                );
              case "imageTilesSection":
                return (0, a.jsx)(eC, { data: e }, e._key);
              case "textWithTallImage":
                return (0, a.jsx)(D, { data: e.data }, e._key);
              case "platformAnimation":
                return (0, a.jsx)(eO, {}, e._key);
              case "pricingCallout":
                return (0, a.jsx)(
                  eK,
                  { textBlock: e.textBlock, pricingPlans: e.pricingPlans },
                  e._key
                );
              case "competitionComparisonTable": {
                let l = K.safeParse(e);
                if (!l.success)
                  return (
                    console.error("Error parsing data:", l.error.format()), null
                  );
                let s = l.data;
                return (0, a.jsx)(eH.aG, { data: s }, e._key);
              }
              case "relatedResourcesSection":
                return (0, a.jsx)(ll, { data: e }, e._key);
              case "informationGrid": {
                console.log("informationGrid Data:", e);
                let l = e5.safeParse(e);
                if (l.success) return (0, a.jsx)(e3, { data: e }, e._key);
                return (
                  console.error(
                    "Error parsing informationGrid",
                    l.error.format()
                  ),
                  null
                );
              }
              case "iconSection":
                return (0, a.jsx)(e6, { data: e }, e._key);
              case "namesListSection":
                return (0, a.jsx)(le, { data: e }, e._key);
              default:
                return null;
            }
          }),
        });
      };
    },
    21611: function (e, l, s) {
      "use strict";
      s.d(l, {
        aG: function () {
          return u;
        },
        qU: function () {
          return n;
        },
      });
      var a = s(52322),
        t = s(60829),
        c = s(97497),
        r = s(55258),
        i = s(50636);
      let n = (e) => {
        let {
          firstName: l,
          lastName: s,
          email: n,
          description: o,
          scheduleLink: d,
          image: m,
        } = e;
        return (0, a.jsx)("section", {
          className: "isolate overflow-hidden bg-white px-6 lg:px-8",
          children: (0, a.jsxs)("div", {
            className: "relative mx-auto max-w-2xl py-16 sm:py-16 lg:max-w-4xl",
            children: [
              (0, a.jsx)("div", {
                className:
                  "absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.indigo.100),white)] opacity-20 lg:left-36",
              }),
              (0, a.jsx)("div", {
                className:
                  "absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center",
              }),
              (0, a.jsx)(r.L, {
                component: "h2",
                fontWeight: "semibold",
                color: "dark-title",
                className: "pb-8",
                children: "About your CSM",
              }),
              (0, a.jsxs)("figure", {
                className:
                  "grid grid-cols-1 items-center gap-x-6 gap-y-6 lg:gap-x-10",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "relative row-start-2 md:col-span-2 md:col-start-1 md:row-start-2",
                    children: [
                      (0, a.jsxs)(r.L, {
                        component: "h5",
                        fontWeight: "semibold",
                        color: "dark-content",
                        children: [l, " ", s],
                      }),
                      (0, a.jsx)(c.r, {
                        className: "mt-1",
                        href: "mailto:".concat(
                          n,
                          "?subject=Diligent One Discovery Call"
                        ),
                        children: n,
                      }),
                    ],
                  }),
                  m &&
                    (0, a.jsx)("div", {
                      className:
                        "aspect-square h-full w-full md:col-end-1 md:row-span-4 md:h-72 md:w-72",
                      children: (0, a.jsx)(i.p9, {
                        className:
                          "h-full rounded-xl bg-indigo-50 object-cover md:h-72 md:rounded-3xl",
                        image: m.image.asset,
                        alt: "",
                        width: 576,
                        height: 576,
                        priority: !0,
                      }),
                    }),
                  (0, a.jsxs)("figcaption", {
                    className:
                      "col-start-1 text-base md:col-start-1 md:row-start-3",
                    children: [
                      (0, a.jsxs)(r.L, {
                        component: "p",
                        fontWeight: "normal",
                        color: "dark-content",
                        children: [l, " is known for ", o],
                      }),
                      (0, a.jsxs)(r.L, {
                        component: "p",
                        fontWeight: "normal",
                        color: "dark-content",
                        className: "mt-4",
                        children: [
                          "/request-a-demo" === d
                            ? "Request a demo"
                            : "Schedule a call with ".concat(l),
                          " ",
                          "to discover more about how the Diligent One Platform can support you in your business and beyond.",
                        ],
                      }),
                    ],
                  }),
                  d &&
                    (0, a.jsx)(t.M, {
                      href: d,
                      trackEvent: !0,
                      eventLabel: "Schedule a call",
                      className:
                        "w-fit text-base md:col-start-1 md:row-start-4",
                      children:
                        "/request-a-demo" === d
                          ? "Request a demo"
                          : "Schedule a call",
                    }),
                ],
              }),
            ],
          }),
        });
      };
      s(25675), s(92881), s(57937);
      var o = s(4602),
        d = s(57276),
        m = s(97092),
        x = s(68628),
        h = s(61335),
        g = s(98174),
        p = s(87890),
        v = s.n(p);
      let u = (e) => {
          let { data: l } = e;
          return (0, a.jsxs)(d.$, {
            className: "overflow-auto",
            children: [
              (0, a.jsx)(r.L, {
                component: "h2",
                color: "dark-title",
                className: "mb-8 text-center",
                children: "Feature Comparison",
              }),
              (0, a.jsx)("table", {
                className: v().PortableTable,
                children: (0, a.jsxs)("tbody", {
                  className: "overflow-hidden rounded-xl",
                  children: [
                    (0, a.jsxs)("tr", {
                      className: "px-2 py-3",
                      children: [
                        (0, a.jsx)("td", {
                          className: v().tableHeader,
                          children: "Comparison Category",
                        }),
                        (0, a.jsx)("td", {
                          className: "".concat(v().tableHeader, " text-center"),
                          children: "Diligent",
                        }),
                        (0, a.jsx)("td", {
                          className: "".concat(v().tableHeader, " text-center"),
                          children: l.competitorName,
                        }),
                        (0, a.jsx)("td", {
                          className: "".concat(
                            v().tableHeader,
                            " hidden md:block"
                          ),
                          children: "Comparison Description",
                        }),
                      ],
                    }),
                    l.competitionComparison.map((e) =>
                      (0, a.jsxs)(
                        "tr",
                        {
                          children: [
                            (0, a.jsx)("td", {
                              className: "max-w-[250px] px-6 py-4",
                              children: e.comparisonCategoryName,
                            }),
                            (0, a.jsx)("td", {
                              className: "px-6 py-4",
                              children: (0, a.jsx)(f, {
                                rating: e.diligentRating,
                              }),
                            }),
                            (0, a.jsx)("td", {
                              className: "px-6 py-4",
                              children: (0, a.jsx)(f, {
                                rating: e.competitorRating,
                              }),
                            }),
                            (0, a.jsx)("td", {
                              className: "hidden max-w-md px-6 py-4 md:block",
                              children: (0, a.jsx)(x.YI, {
                                value: e.comparisonDescription,
                                components: m.bM,
                              }),
                            }),
                          ],
                        },
                        e.comparisonCategoryName
                      )
                    ),
                  ],
                }),
              }),
            ],
          });
        },
        j = (0, h.j)(
          ["flex h-4 w-4 items-center justify-center rounded-full"],
          {
            variants: {
              rating: {
                0: "border border-gray-300 bg-transparent",
                1: "bg-half-red",
                2: "check_circle",
              },
            },
            defaultVariants: { rating: 0 },
          }
        ),
        f = (e) => {
          let { rating: l } = e;
          return (0, a.jsxs)("div", {
            className: "flex justify-center",
            children: [
              0 === l &&
                (0, a.jsx)(o.J, { iconName: "cancel", iconColor: "primary" }),
              1 === l &&
                (0, a.jsx)("div", { className: (0, g.m)(j({ rating: l })) }),
              2 === l &&
                (0, a.jsx)(o.J, {
                  iconName: "check_circle",
                  iconColor: "primary",
                }),
            ],
          });
        };
    },
    87890: function (e) {
      e.exports = {
        PortableTable: "style_PortableTable__c4CKX",
        tableHeader: "style_tableHeader__K0_GJ",
      };
    },
  },
]);
