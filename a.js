'use strict';
WebpackRequire.r(t), WebpackRequire.d(t, {
  default: function() {
    return f;
  }
});
var Chunk37983 = WebpackRequire('37983');
WebpackRequire('884691');
var Chunk414456 = WebpackRequire('414456'),
  r = WebpackRequire.n(s),
  Chunk414055 = WebpackRequire('414055'),
  Chunk486952 = WebpackRequire('486952'),
  Chunk988268 = WebpackRequire('988268'),
  Chunk782340 = WebpackRequire('782340'),
  Chunk647431 = WebpackRequire('647431');
let c = e => {
  let t,
    {invertColor: n =!1, type: s = l.BotTagTypes.BOT, className: c, verified: f, hideIcon: _ =!1, useRemSizes: h =!1, children: g = []} = e,
    m = null,
    E = u.default.Messages.VERIFIED_BOT_TOOLTIP;
  switch (s) {
    case l.BotTagTypes.SYSTEM_DM:
    case l.BotTagTypes.OFFICIAL:
      f = !0, E = u.default.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP, m = u.default.Messages.SYSTEM_DM_TAG_SYSTEM;
      break;
    case l.BotTagTypes.SERVER:
      m = u.default.Messages.BOT_TAG_SERVER;
      break;
    case l.BotTagTypes.ORIGINAL_POSTER:
      m = u.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
      break;
    case l.BotTagTypes.STAFF_ONLY_DM:
      m = u.default.Messages.STAFF_BADGE_TOOLTIP;
      break;
    case l.BotTagTypes.AI:
      f = !0, E = u.default.Messages.AI_GENERATED_TOOLTIP, m = u.default.Messages.AI_TAG;
      break;
    case l.BotTagTypes.REMIX:
      f = !1, m = u.default.Messages.REMIXING_TAG;
      break;
    case l.BotTagTypes.BOT:
    default:
      m = u.default.Messages.BOT_TAG_BOT;
  }
  let p = s === l.BotTagTypes.ORIGINAL_POSTER,
    v = s === l.BotTagTypes.REMIX,
    S = null;
  f && (S = (0, i.jsx)(a.Tooltip, {
    text: E,
    align: 'center',
    position: 'top',
    children: e => (0, i.jsx)(o.default, {
      ...e,
      className: d.botTagVerified
    })
  })), t = s === l.BotTagTypes.AI ? d.botTagAI : n ? d.botTagInvert : d.botTagRegular;
  let T = e => (0, i.jsxs)('span', {
    ...e,
    className: r(c, t, h ? d.rem : d.px, {
      [d.botTagOP]: p,
      [d.botTagRemix]: v
    }),
    children: [
      _ ? null : S,
      g,
      (0, i.jsx)('span', {
        className: d.botText,
        children: m
      })
    ]
  });
  switch (s) {
    case l.BotTagTypes.REMIX:
      return (0, i.jsx)(a.Tooltip, {
        text: u.default.Messages.REMIXING_DOWNLOAD_APP,
        position: 'top',
        children: e => T(e)
      });
    case l.BotTagTypes.ORIGINAL_POSTER:
      return (0, i.jsx)(a.Tooltip, {
        text: u.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
        position: 'top',
        children: e => T(e)
      });
    default:
      return T();
  }
};
c.Types = l.BotTagTypes;
var f = c;
