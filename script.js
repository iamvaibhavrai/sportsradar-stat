(function (a, b, c, d, e, f, g, h, i) {
  a[e] ||
    ((i = a[e] =
      function () {
        (a[e].q = a[e].q || []).push(arguments);
      }),
    (i.l = 1 * new Date()),
    (i.o = f),
    (g = b.createElement(c)),
    (h = b.getElementsByTagName(c)[0]),
    (g.async = 1),
    (g.src = d),
    g.setAttribute("n", e),
    h.parentNode.insertBefore(g, h));
})(
  window,
  document,
  "script",
  "https://widgets.sir.sportradar.com/sportradar/widgetloader",
  "SIR",
  {
    theme: false, // using custom theme
    language: "en",
  }
);
SIR("addWidget", ".sr-widget-1", "match.basketball.boxScore", {
  matchId: 40463227,
  disableWidgetHeader: true,
  disableTeamPicker: true,
  compactMode: true,
});
