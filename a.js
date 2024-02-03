'use strict';
WebpackRequire.r(t), WebpackRequire.d(t, {
  default: function() {
    return _;
  }
});
var Chunk37983 = WebpackRequire('37983');
WebpackRequire('884691');
var Chunk414456 = WebpackRequire('414456'),
  r = WebpackRequire.n(s),
  Chunk414055 = WebpackRequire('414055'),
  Chunk996554 = WebpackRequire('996554'),
  Chunk486952 = WebpackRequire('486952'),
  Chunk988268 = WebpackRequire('988268'),
  Chunk782340 = WebpackRequire('782340'),
  Chunk647431 = WebpackRequire('647431');
let f = e => {
  let t,
    {invertColor: n =!1, type: s = u.BotTagTypes.BOT, className: f, verified: _, hideIcon: h =!1, useRemSizes: g =!1, children: m = []} = e,
    E = null,
    p = d.default.Messages.VERIFIED_BOT_TOOLTIP,
    {enabled: v} = o.AppLauncherOnboardingExperiment.useExperiment({
      location: 'Bot Tag'
    }, {
      autoTrackExposure: !1
    });
  switch (s) {
    case u.BotTagTypes.SYSTEM_DM:
    case u.BotTagTypes.OFFICIAL:
      _ = !0, p = d.default.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP, E = d.default.Messages.SYSTEM_DM_TAG_SYSTEM;
      break;
    case u.BotTagTypes.SERVER:
      E = d.default.Messages.BOT_TAG_SERVER;
      break;
    case u.BotTagTypes.ORIGINAL_POSTER:
      E = d.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
      break;
    case u.BotTagTypes.STAFF_ONLY_DM:
      E = d.default.Messages.STAFF_BADGE_TOOLTIP;
      break;
    case u.BotTagTypes.AI:
      _ = !0, p = d.default.Messages.AI_GENERATED_TOOLTIP, E = d.default.Messages.AI_TAG;
      break;
    case u.BotTagTypes.REMIX:
      _ = !1, E = d.default.Messages.REMIXING_TAG;
      break;
    case u.BotTagTypes.BOT:
    default:
      E = v ? d.default.Messages.APP_TAG : d.default.Messages.BOT_TAG_BOT;
  }
  let S = s === u.BotTagTypes.ORIGINAL_POSTER,
    T = s === u.BotTagTypes.REMIX,
    I = null;
  _ && (I = (0, i.jsx)(a.Tooltip, {
    text: p,
    align: 'center',
    position: 'top',
    children: e => (0, i.jsx)(l.default, {
      ...e,
      className: c.botTagVerified
    })
  })), t = s === u.BotTagTypes.AI ? c.botTagAI : n ? c.botTagInvert : c.botTagRegular;
  let C = e => (0, i.jsxs)('span', {
    ...e,
    className: r(f, t, g ? c.rem : c.px, {
      [c.botTagOP]: S,
      [c.botTagRemix]: T
    }),
    children: [
      h ? null : I,
      m,
      (0, i.jsx)('span', {
        className: c.botText,
        children: E
      })
    ]
  });
  switch (s) {
    case u.BotTagTypes.REMIX:
      return (0, i.jsx)(a.Tooltip, {
        text: d.default.Messages.REMIXING_DOWNLOAD_APP,
        position: 'top',
        children: e => C(e)
      });
    case u.BotTagTypes.ORIGINAL_POSTER:
      return (0, i.jsx)(a.Tooltip, {
        text: d.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
        position: 'top',
        children: e => C(e)
      });
    default:
      return C();
  }
};
f.Types = u.BotTagTypes;
var _ = f;
