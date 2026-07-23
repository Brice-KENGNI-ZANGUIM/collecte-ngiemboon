// Contenu du popup de remerciement affiché quand une contribution vient d'être CONFIRMÉE en
// base (pas au simple enregistrement local : au moment où le serveur l'a reçue). Le message et
// le visuel varient (1re contribution / palier rond / envoi courant, pool tourné au hasard) pour
// ne jamais répéter deux fois la même chose et pour porter la voix héritage/transmission/
// apprentissage. Module pur, sans dépendance au DOM, testable indépendamment de l'UI.
//
// Auteur : Brice Kengni Zanguim.

function ip(s, ctx) {
  let o = s || "";
  for (const k in (ctx || {})) o = o.split("{" + k + "}").join(String(ctx[k]));
  return o;
}

const FIRST = {
  fr: { title: "Ta toute première contribution", body: "Elle est enregistrée pour de bon dans la base : un mot de ta langue qui ne se perdra plus. Merci d'avoir fait ce premier pas." },
  en: { title: "Your very first contribution", body: "It's now safely stored in the archive: one more word of your language that won't be lost. Thank you for taking this first step." },
};

// Paliers ronds : un moment un peu plus marqué que les envois courants.
const MILESTONES = [5, 10, 25, 50, 100, 200, 300, 500, 750, 1000];

const MILESTONE_MSG = {
  fr: [
    { title: "{n} contributions franchies", body: "Chaque mot que tu donnes est une pierre de plus dans la mémoire de ta langue. Continue, c'est un vrai trésor que tu bâtis." },
    { title: "Cap des {n} atteint", body: "Ce que tu transmets aujourd'hui, quelqu'un l'apprendra demain. Merci pour cette régularité." },
    { title: "{n} contributions, merci", body: "Peu de gens donnent autant de leur temps pour que leur langue reste vivante. La communauté te le doit." },
  ],
  en: [
    { title: "{n} contributions reached", body: "Every word you give is one more stone in your language's memory. Keep going, you're building a real treasure." },
    { title: "{n}-contribution milestone", body: "What you pass on today, someone will learn tomorrow. Thank you for this steady work." },
    { title: "{n} contributions, thank you", body: "Few people give this much of their time to keep their language alive. The community owes you for it." },
  ],
};

const REGULAR = {
  fr: [
    { icon: "🌿", title: "Contribution enregistrée", body: "Un fragment de plus de ton héritage, gardé pour de bon dans la base." },
    { icon: "✨", title: "Merci pour ce mot", body: "Il fera peut-être partie de ce qu'apprendra un enfant, demain." },
    { icon: "🤝", title: "Envoyée et confirmée", body: "Ta langue avance d'un mot grâce à toi." },
    { icon: "🌍", title: "Bien reçu", body: "Ce que tu transmets aujourd'hui ne se perdra plus jamais." },
    { icon: "🔥", title: "Ça compte vraiment", body: "Continue, chaque contribution a de la valeur pour la communauté." },
    { icon: "🌾", title: "En sécurité dans la base", body: "Merci de semer aujourd'hui pour les générations à venir." },
    { icon: "🎁", title: "Un cadeau de plus", body: "C'est exactement ça, un héritage : merci de l'agrandir un peu." },
  ],
  en: [
    { icon: "🌿", title: "Contribution saved", body: "One more piece of your heritage, kept for good in the archive." },
    { icon: "✨", title: "Thank you for this word", body: "It might become part of what a child learns, tomorrow." },
    { icon: "🤝", title: "Sent and confirmed", body: "Your language moves forward by one word, thanks to you." },
    { icon: "🌍", title: "Received", body: "What you share today will never be lost again." },
    { icon: "🔥", title: "It truly matters", body: "Keep going, every contribution has real value for the community." },
    { icon: "🌾", title: "Safely stored", body: "Thank you for planting today for the generations to come." },
    { icon: "🎁", title: "One more gift", body: "That's exactly what a heritage is: thank you for growing it a little more." },
  ],
};

const MULTI = {
  fr: (k) => ({ title: k + " contributions confirmées", body: "Merci, chacune d'elles compte et vient enrichir la mémoire de ta langue." }),
  en: (k) => ({ title: k + " contributions confirmed", body: "Thank you, each one matters and enriches your language's memory." }),
};

export function isMilestoneCount(n) { return MILESTONES.indexOf(n) >= 0; }

/** Choisit le contenu du popup de remerciement.
    total = nb total d'envois confirmés sur cet appareil (compteur local, après ce tick) ;
    justConfirmed = nb d'envois confirmés PENDANT ce tick (peut être > 1, un seul popup alors) ;
    lang = "fr" | "en" (langue d'interface courante). */
export function pickThanksContent(total, justConfirmed, lang) {
  const L = (lang === "en") ? "en" : "fr";
  if (justConfirmed > 1) {
    const m = MULTI[L](justConfirmed);
    return { title: m.title, body: m.body, visual: "regular", icon: "🎉" };
  }
  if (total === 1) {
    const f = FIRST[L];
    return { title: f.title, body: f.body, visual: "photo" };
  }
  if (isMilestoneCount(total)) {
    const pool = MILESTONE_MSG[L];
    const pick = pool[Math.floor(Math.random() * pool.length)];
    return { title: ip(pick.title, { n: total }), body: ip(pick.body, { n: total }), visual: "milestone", n: total };
  }
  const pool = REGULAR[L];
  const pick = pool[Math.floor(Math.random() * pool.length)];
  return { title: pick.title, body: pick.body, visual: "regular", icon: pick.icon };
}
