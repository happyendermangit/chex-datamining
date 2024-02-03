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
    {invertColor: n =!1, type: s = Chunk988268.BotTagTypes.BOT, className: f, verified: _, hideIcon: h =!1, useRemSizes: g =!1, children: m = []} = e,
    E = null,
    p = Chunk782340.default.Messages.VERIFIED_BOT_TOOLTIP,
    {enabled: v} = Chunk996554.AppLauncherOnboardingExperiment.useExperiment({
      location: 'Bot Tag'
    }, {
      autoTrackExposure: !1
    });
  switch (s) {
    case Chunk988268.BotTagTypes.SYSTEM_DM:
    case Chunk988268.BotTagTypes.OFFICIAL:
      _ = !0, p = Chunk782340.default.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP, E = Chunk782340.default.Messages.SYSTEM_DM_TAG_SYSTEM;
      break;
    case Chunk988268.BotTagTypes.SERVER:
      E = Chunk782340.default.Messages.BOT_TAG_SERVER;
      break;
    case Chunk988268.BotTagTypes.ORIGINAL_POSTER:
      E = Chunk782340.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
      break;
    case Chunk988268.BotTagTypes.STAFF_ONLY_DM:
      E = Chunk782340.default.Messages.STAFF_BADGE_TOOLTIP;
      break;
    case Chunk988268.BotTagTypes.AI:
      _ = !0, p = Chunk782340.default.Messages.AI_GENERATED_TOOLTIP, E = Chunk782340.default.Messages.AI_TAG;
      break;
    case Chunk988268.BotTagTypes.REMIX:
      _ = !1, E = Chunk782340.default.Messages.REMIXING_TAG;
      break;
    case Chunk988268.BotTagTypes.BOT:
    default:
      E = v ? Chunk782340.default.Messages.APP_TAG : Chunk782340.default.Messages.BOT_TAG_BOT;
  }
  let S = s === Chunk988268.BotTagTypes.ORIGINAL_POSTER,
    T = s === Chunk988268.BotTagTypes.REMIX,
    I = null;
  _ && (I = (0, Chunk37983.jsx)(Chunk414055.Tooltip, {
    text: p,
    align: 'center',
    position: 'top',
    children: e => (0, Chunk37983.jsx)(Chunk486952.default, {
      ...e,
      className: Chunk647431.botTagVerified
    })
  })), t = s === Chunk988268.BotTagTypes.AI ? Chunk647431.botTagAI : n ? Chunk647431.botTagInvert : Chunk647431.botTagRegular;
  let C = e => (0, Chunk37983.jsxs)('span', {
    ...e,
    className: r(f, t, g ? Chunk647431.rem : Chunk647431.px, {
      [Chunk647431.botTagOP]: S,
      [Chunk647431.botTagRemix]: T
    }),
    children: [
      h ? null : I,
      m,
      (0, Chunk37983.jsx)('span', {
        className: Chunk647431.botText,
        children: E
      })
    ]
  });
  switch (s) {
    case Chunk988268.BotTagTypes.REMIX:
      return (0, Chunk37983.jsx)(Chunk414055.Tooltip, {
        text: Chunk782340.default.Messages.REMIXING_DOWNLOAD_APP,
        position: 'top',
        children: e => C(e)
      });
    case Chunk988268.BotTagTypes.ORIGINAL_POSTER:
      return (0, Chunk37983.jsx)(Chunk414055.Tooltip, {
        text: Chunk782340.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
        position: 'top',
        children: e => C(e)
      });
    default:
      return C();
  }
};
f.Types = Chunk988268.BotTagTypes;
var _ = f;
