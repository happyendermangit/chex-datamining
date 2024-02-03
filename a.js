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
    {invertColor: n =!1, type: s = Chunk988268.BotTagTypes.BOT, className: c, verified: f, hideIcon: _ =!1, useRemSizes: h =!1, children: g = []} = e,
    m = null,
    E = Chunk782340.default.Messages.VERIFIED_BOT_TOOLTIP;
  switch (s) {
    case Chunk988268.BotTagTypes.SYSTEM_DM:
    case Chunk988268.BotTagTypes.OFFICIAL:
      f = !0, E = Chunk782340.default.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP, m = Chunk782340.default.Messages.SYSTEM_DM_TAG_SYSTEM;
      break;
    case Chunk988268.BotTagTypes.SERVER:
      m = Chunk782340.default.Messages.BOT_TAG_SERVER;
      break;
    case Chunk988268.BotTagTypes.ORIGINAL_POSTER:
      m = Chunk782340.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
      break;
    case Chunk988268.BotTagTypes.STAFF_ONLY_DM:
      m = Chunk782340.default.Messages.STAFF_BADGE_TOOLTIP;
      break;
    case Chunk988268.BotTagTypes.AI:
      f = !0, E = Chunk782340.default.Messages.AI_GENERATED_TOOLTIP, m = Chunk782340.default.Messages.AI_TAG;
      break;
    case Chunk988268.BotTagTypes.REMIX:
      f = !1, m = Chunk782340.default.Messages.REMIXING_TAG;
      break;
    case Chunk988268.BotTagTypes.BOT:
    default:
      m = Chunk782340.default.Messages.BOT_TAG_BOT;
  }
  let p = s === Chunk988268.BotTagTypes.ORIGINAL_POSTER,
    v = s === Chunk988268.BotTagTypes.REMIX,
    S = null;
  f && (S = (0, Chunk37983.jsx)(Chunk414055.Tooltip, {
    text: E,
    align: 'center',
    position: 'top',
    children: e => (0, Chunk37983.jsx)(Chunk486952.default, {
      ...e,
      className: Chunk647431.botTagVerified
    })
  })), t = s === Chunk988268.BotTagTypes.AI ? Chunk647431.botTagAI : n ? Chunk647431.botTagInvert : Chunk647431.botTagRegular;
  let T = e => (0, Chunk37983.jsxs)('span', {
    ...e,
    className: r(c, t, h ? Chunk647431.rem : Chunk647431.px, {
      [Chunk647431.botTagOP]: p,
      [Chunk647431.botTagRemix]: v
    }),
    children: [
      _ ? null : S,
      g,
      (0, Chunk37983.jsx)('span', {
        className: Chunk647431.botText,
        children: m
      })
    ]
  });
  switch (s) {
    case Chunk988268.BotTagTypes.REMIX:
      return (0, Chunk37983.jsx)(Chunk414055.Tooltip, {
        text: Chunk782340.default.Messages.REMIXING_DOWNLOAD_APP,
        position: 'top',
        children: e => T(e)
      });
    case Chunk988268.BotTagTypes.ORIGINAL_POSTER:
      return (0, Chunk37983.jsx)(Chunk414055.Tooltip, {
        text: Chunk782340.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
        position: 'top',
        children: e => T(e)
      });
    default:
      return T();
  }
};
c.Types = Chunk988268.BotTagTypes;
var f = c;
