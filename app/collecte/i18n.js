// Internationalisation de l'INTERFACE (distincte de la langue de CONTENU collectée).
// L'app est autorée en français (source) ; l'anglais est fourni ici pour la diaspora
// et une portée mondiale. La langue d'interface est un choix séparé (localStorage
// `langa-ui`), bascule via le sélecteur FR|EN de l'en-tête.
//
// Usage :
//   - HTML statique : <span data-i18n="hub.title">…</span> (texte), data-i18n-ph pour
//     un placeholder, data-i18n-title pour un attribut title/aria-label.
//   - JS dynamique  : t("cle") renvoie la chaîne dans la langue d'interface courante.
//
// Auteur : Brice Kengni Zanguim.

const LS_UI = "langa-ui";

export function getUiLang() {
  const v = localStorage.getItem(LS_UI);
  return v === "en" ? "en" : "fr";
}
export function setUiLang(l) {
  localStorage.setItem(LS_UI, l === "en" ? "en" : "fr");
}

// Table de traduction. Le français est la SOURCE (toujours présent) ; l'anglais
// complète. Une clé sans entrée `en` retombe sur le français (aucun trou visible).
export const STR = {
  // — En-tête / chrome —
  "chip.home": { fr: "Accueil", en: "Home" },
  "chip.lang": { fr: "Langue", en: "Language" },
  "chip.about": { fr: "À propos", en: "About" },
  "chip.help": { fr: "Aide", en: "Help" },
  "chip.bugs": { fr: "Bugs", en: "Bugs" },
  "chip.profile": { fr: "Mon profil", en: "My profile" },
  "chip.ui": { fr: "EN", en: "FR" },                 // ce que propose la bascule (l'AUTRE langue)
  "chip.ui.title": { fr: "Switch to English", en: "Passer en français" },
  "tagline": { fr: "Numériser les langues d'Afrique, texte et voix, par leurs communautés",
               en: "Digitizing African languages, text and voice, by their communities" },

  // — Écran de choix de langue —
  "lang.title": { fr: "Choisis ta langue 🌍", en: "Choose your language 🌍" },
  "lang.intro": { fr: "LANGA est une plateforme communautaire où chaque langue s'enrichit des traductions et des voix de celles et ceux qui la parlent. Choisis la tienne, ou déclare-la si elle n'existe pas encore, pour que d'autres puissent l'enrichir avec toi.",
                  en: "LANGA is a community platform where every language grows from the translations and voices of those who speak it. Pick yours, or declare it if it isn't listed yet, so others can grow it with you." },
  "lang.dedicated": { fr: "⌨ clavier dédié", en: "⌨ dedicated keyboard" },
  "lang.standard": { fr: "clavier standard", en: "standard keyboard" },
  "lang.provisoire": { fr: " · alphabet à valider", en: " · alphabet to confirm" },
  "lang.add": { fr: "Déclarer ma langue", en: "Declare my language" },
  "lang.add.sub": { fr: "Elle n'est pas là ? Ajoute-la pour la communauté", en: "Not listed? Add it for the community" },
  "lang.search.ph": { fr: "Rechercher une langue (nom, région…)", en: "Search a language (name, region…)" },
  "lang.search.go": { fr: "Rechercher", en: "Search" },
  "tr.guide.title": { fr: "Avant d'enregistrer ta voix", en: "Before you record your voice" },
  "tr.guide.lead": { fr: "Deux règles simples pour un bon enregistrement :", en: "Two simple rules for a good recording:" },
  "tr.guide.r1.t": { fr: "Enregistre dans un endroit <mark class=\"ok\">calme</mark>", en: "Record in a <mark class=\"ok\">quiet</mark> place" },
  "tr.guide.r1.d": { fr: "Pas de bruit autour : ni rue, ni télé, ni ventilateur. On doit bien entendre ta voix.", en: "No noise around: no street, no TV, no fan. Your voice must be clearly heard." },
  "tr.guide.r2.t": { fr: "Dis <mark class=\"ok\">seulement le mot dans ta langue</mark>, <mark class=\"ok\">une seule fois</mark>", en: "Say <mark class=\"ok\">only the word in your language</mark>, <mark class=\"ok\">just once</mark>" },
  "tr.guide.r2.d": { fr: "Ne dis <mark class=\"no\">pas</mark> le mot français avant. Ne le répète <mark class=\"no\">pas</mark> deux fois.", en: "Do <mark class=\"no\">not</mark> say the French word first. Do <mark class=\"no\">not</mark> repeat it twice." },
  "tr.guide.ex.badl": { fr: "✗ À éviter", en: "✗ Avoid" },
  "tr.guide.ex.goodl": { fr: "✓ À faire", en: "✓ Do this" },
  "tr.guide.ex.bad": { fr: "« eau… jʉ… jʉ »", en: "“water… jʉ… jʉ”" },
  "tr.guide.ex.good": { fr: "« jʉ »", en: "“jʉ”" },
  "tr.guide.ok": { fr: "J'ai compris le principe", en: "I understand" },
  "tr.guide.open": { fr: "📋 Revoir les consignes", en: "📋 See the rules again" },
  "work.audio.transcribe": { fr: "Transcription audio", en: "Audio transcription" },
  "work.audio.translate": { fr: "Audio (facultatif)", en: "Audio (optional)" },
  "tra.guide.title": { fr: "Avant de traduire", en: "Before you translate" },
  "tra.guide.lead": { fr: "Deux règles simples pour une bonne traduction :", en: "Two simple rules for a good translation:" },
  "tra.guide.r1.t": { fr: "Donne le <mark class=\"ok\">vrai mot</mark>, celui qu'on dit vraiment", en: "Give the <mark class=\"ok\">real word</mark>, the one really used" },
  "tra.guide.r1.d": { fr: "Pas une approximation ni un mot inventé. Si tu ne connais <mark class=\"no\">pas</mark>, passe au suivant.", en: "No approximation, no made-up word. If you do <mark class=\"no\">not</mark> know it, skip to the next one." },
  "tra.guide.r2.t": { fr: "Écris avec les <mark class=\"ok\">bonnes lettres</mark> et les <mark class=\"ok\">tons</mark>", en: "Write with the <mark class=\"ok\">right letters</mark> and <mark class=\"ok\">tones</mark>" },
  "tra.guide.r2.d": { fr: "Le clavier ngiemboon donne les lettres spéciales (ŋ, ɛ, ɔ, ʉ) et les tons. Une lettre change le sens.", en: "The ngiemboon keyboard has the special letters (ŋ, ɛ, ɔ, ʉ) and tones. One letter changes the meaning." },
  "tra.guide.ex.bad": { fr: "« ju »", en: "“ju”" },
  "tra.guide.ex.good": { fr: "« jʉ »", en: "“jʉ”" },
  "tr.guide.open.t": { fr: "📋 Revoir les consignes", en: "📋 See the rules again" },
  "lang.search.none": { fr: "Aucune langue ne correspond. Tu peux la déclarer ci-dessus.", en: "No matching language. You can declare it above." },
  "lang.declare.h": { fr: "➕ Déclarer une nouvelle langue", en: "➕ Declare a new language" },
  "lang.declare.hint": { fr: "Elle deviendra aussitôt visible et enrichissable par toute la communauté.",
                         en: "It will immediately become visible and open for everyone to enrich." },
  "lang.f.nom": { fr: "Nom de la langue *", en: "Language name *" },
  "lang.f.region": { fr: "Région / localité *", en: "Region / locality *" },
  "lang.f.pays": { fr: "Pays (optionnel)", en: "Country (optional)" },
  "lang.f.autonym": { fr: "Autonyme (optionnel)", en: "Endonym (optional)" },
  "lang.f.alias": { fr: "Autres noms / orthographes (optionnel)", en: "Other names / spellings (optional)" },
  "lang.f.alias.ph": { fr: "ex. Nguiembor, Nguiembow", en: "e.g. Nguiembor, Nguiembow" },
  "lang.f.famille": { fr: "Famille / groupe (optionnel)", en: "Family / group (optional)" },
  "lang.f.famille.ph": { fr: "ex. bamiléké, bantou", en: "e.g. Bamileke, Bantu" },
  "lang.f.note": { fr: "Note sur l'alphabet (optionnel)", en: "Note about the alphabet (optional)" },
  "lang.f.autonym.ph": { fr: "le nom dans la langue elle-même", en: "the name in the language itself" },
  "lang.f.note.ph": { fr: "lettres ou tons particuliers (futur clavier dédié)", en: "special letters or tones (future dedicated keyboard)" },
  "lang.similar.head": { fr: "Ces langues existent déjà et pourraient être la tienne :", en: "These languages already exist and might be yours:" },
  "lang.similar.pick": { fr: "C'est la mienne →", en: "That's mine →" },
  "lang.similar.none": { fr: "Aucune ne correspond ? Continue simplement ta déclaration.", en: "None match? Just continue your declaration." },
  "lang.dup.confirm": { fr: "Une langue très proche existe déjà (ci-dessus). Si c'est bien une NOUVELLE langue, clique encore sur « Créer ».", en: "A very similar language already exists (above). If this is really a NEW language, click “Create” again." },
  "lang.cancel": { fr: "Annuler", en: "Cancel" },
  "lang.submit": { fr: "Créer et donner voix →", en: "Create and give voice →" },
  "lang.err.req": { fr: "Le nom de la langue et la région sont obligatoires.", en: "Language name and region are required." },
  // Jumelage / fusion de langues (Phase C)
  "merge.ask": { fr: "Quelqu'un pense que <b>{a}</b> et <b>{b}</b> sont la même langue. Est-ce le cas ?",
                 en: "Someone thinks <b>{a}</b> and <b>{b}</b> are the same language. Is that so?" },
  "merge.yes": { fr: "Oui, les fusionner", en: "Yes, merge them" },
  "merge.no": { fr: "Non, distinctes", en: "No, different" },
  "merge.sugg": { fr: "<b>{a}</b> et <b>{b}</b> se ressemblent beaucoup. Est-ce la même langue ?",
                  en: "<b>{a}</b> and <b>{b}</b> look very similar. Are they the same language?" },
  "merge.propose": { fr: "Proposer la fusion", en: "Propose the merge" },
  "merge.manual.h": { fr: "Signaler un doublon", en: "Report a duplicate" },
  "merge.manual.hint": { fr: "Deux langues sont en fait la même ? Choisis-les et propose de les réunir.",
                         en: "Are two languages actually the same? Pick them and propose merging them." },
  "merge.manual.pick": { fr: "Choisir une langue…", en: "Choose a language…" },
  "merge.done": { fr: "Langues réunies ✓", en: "Languages merged ✓" },
  "merge.pending": { fr: "Merci, en attente de l'autre déclarant.", en: "Thanks, waiting for the other declarant." },
  "merge.sent": { fr: "Proposition envoyée : les déclarants vont confirmer.", en: "Proposal sent: the declarants will confirm." },
  "merge.distinct": { fr: "Noté : langues distinctes.", en: "Noted: different languages." },
  "merge.same": { fr: "Choisis deux langues différentes.", en: "Choose two different languages." },
  "merge.fail": { fr: "Action impossible pour le moment (connexion ?).", en: "Action not possible right now (connection?)." },
  // Découpe d'un enregistrement (#47)
  "trim.open": { fr: "✂️ Découper", en: "✂️ Trim" },
  "trim.h": { fr: "Garder une partie de l'enregistrement", en: "Keep part of the recording" },
  "trim.hint": { fr: "Fais glisser les deux poignées sur l'onde, ou saisis le début et la fin en secondes, pour ne conserver que la bonne partie. Le reste sera supprimé.",
                 en: "Drag the two handles on the wave, or type the start and end in seconds, to keep only the good part. The rest is removed." },
  "trim.start": { fr: "Début (s)", en: "Start (s)" },
  "trim.end": { fr: "Fin (s)", en: "End (s)" },
  "trim.silence": { fr: "Rogner les silences", en: "Trim the silences" },
  "trim.play": { fr: "▶ Écouter la sélection", en: "▶ Play selection" },
  "trim.cancel": { fr: "Annuler", en: "Cancel" },
  "trim.keep": { fr: "Garder cette partie", en: "Keep this part" },
  "trim.kept": { fr: "Partie conservée ✓", en: "Selection kept ✓" },
  "trim.decodeErr": { fr: "Impossible d'ouvrir cet enregistrement pour le découper.", en: "Could not open this recording for trimming." },
  "trim.empty": { fr: "Sélectionne d'abord une zone à garder.", en: "First select a part to keep." },
  "trim.dur": { fr: "Sélection : {d} s", en: "Selection: {d} s" },

  // — Amorce sonore (premières voix d'une langue créée) —
  "amorce.title.pre": { fr: "Donne voix à", en: "Give voice to" },
  "amorce.intro": { fr: "Ta langue est <b>créée</b> ✓. Pour lui donner ses toutes premières voix, enregistre-toi en prononçant quelques mots de base. Vise au moins <b id=\"amorce-min\">5</b> mots, mais tu peux t'arrêter quand tu veux, car tout ce que tu enregistres est gardé.",
                  en: "Your language is <b>created</b> ✓. To give it its very first voices, record yourself saying a few basic words. Aim for at least <b id=\"amorce-min\">5</b> words, but you can stop anytime, because everything you record is kept." },
  "amorce.done.sep": { fr: "/", en: "/" },
  "amorce.done.min": { fr: "minimum", en: "minimum" },
  "amorce.word.hint": { fr: "Prononce ce mot à voix haute dans ta langue", en: "Say this word aloud in your language" },
  "amorce.rec": { fr: "● Enregistrer", en: "● Record" },
  "amorce.rec.stop": { fr: "■ Arrêter", en: "■ Stop" },
  "amorce.rec.wip": { fr: "Enregistrement…", en: "Recording…" },
  "amorce.skip": { fr: "Passer ce mot", en: "Skip this word" },
  "amorce.validate": { fr: "Valider & suivant →", en: "Save & next →" },
  "amorce.finish": { fr: "J'ai terminé", en: "I'm done" },
  "amorce.reached": { fr: "Bravo, minimum atteint ! Continue si tu veux, ou termine.", en: "Well done, minimum reached! Keep going or finish." },
  "amorce.allwords": { fr: "Tu as parcouru tous les mots, merci ! 🎉", en: "You've gone through every word, thank you! 🎉" },

  // — Accueil (hub) —
  "hub.choose": { fr: "Choisis une activité pour commencer. Tu passeras de l'une à l'autre quand tu veux, grâce au menu en haut.",
                  en: "Pick an activity to start. You can switch anytime using the top menu." },
  "hub.card.translate": { fr: "Traduire", en: "Translate" },
  "hub.card.transcribe": { fr: "Transcrire", en: "Transcribe" },
  "hub.card.explore": { fr: "Explorer", en: "Explore" },
  "hub.card.explore.desc": { fr: "Parcours les contributions déjà faites : apprends, écoute les prononciations, propose des améliorations.",
                             en: "Browse what's already been shared: learn, listen to pronunciations, suggest improvements." },
  "hub.start": { fr: "Commencer →", en: "Start →" },
  "hub.open": { fr: "Ouvrir →", en: "Open →" },

  // — Accueil (contenu) —
  "hub.vision": { fr: "LANGA numérise <b>nos langues d'Afrique</b>, texte et voix. Le <b>ngiemboon</b> est la plus avancée, avec son clavier dédié ; d'autres langues sont déjà ouvertes et tu peux déclarer la tienne. Tout le monde peut y contribuer.",
                  en: "LANGA digitizes <b>our African languages</b>, text and voice. <b>Ngiemboon</b> is the most advanced, with its dedicated keyboard; other languages are already open and you can declare your own. Everyone can contribute." },
  "hub.greeting": { fr: "que veux-tu faire ?", en: "what would you like to do?" },
  "hub.greeting.hello": { fr: "Bonjour", en: "Hello" },
  "hub.greeting.solo": { fr: "Que veux-tu faire ? 👋", en: "What would you like to do? 👋" },
  "hub.desc.translate": { fr: "Donne la traduction d'un mot ou d'une phrase (français ↔ {lang}). Tu peux ajouter ta voix, c'est un plus.",
                          en: "Give the translation of a word or phrase (French ↔ {lang}). You can add your voice too, it helps." },
  "hub.desc.transcribe": { fr: "Enregistre ta voix qui prononce un mot ou une phrase en {lang}. Le texte peut être proposé, la voix est l'essentiel.",
                           en: "Record your voice pronouncing a word or phrase in {lang}. The text can be suggested, the voice is what matters." },

  // — À propos —
  "about.title": { fr: "À propos de LANGA", en: "About LANGA" },
  "about.lead": { fr: "Dans les langues nguni, <b>LANGA</b> signifie « la lumière », et le mot évoque aussi « langue ». Son ambition est de donner une <b>voix numérique</b> à nos langues.",
                  en: "In the Nguni languages, <b>LANGA</b> means \"light\", and the word also evokes \"language\". Its ambition is to give our languages a <b>digital voice</b>." },
  "about.vision.h": { fr: "La vision : nos langues d'Afrique, texte et voix", en: "The vision: our African languages, text and voice" },
  "about.vision.p1": { fr: "LANGA est un projet <b>ouvert à tous</b>. Il rassemble <b>les mots et les voix</b> de <b>nos langues</b> pour bâtir ensemble les outils qui les font vivre, qu'il s'agisse <b>de dictionnaires, de claviers ou d'intelligences artificielles</b> qui les comprennent.",
                       en: "LANGA is a project <b>open to everyone</b>. It gathers <b>the words and voices</b> of <b>our languages</b> so we can build together the tools that keep them alive, whether <b>dictionaries, keyboards or artificial intelligences</b> that understand them." },
  "about.vision.p2": { fr: "LANGA donne une <b>voix numérique</b> à <b>nos langues d'Afrique</b>. Le <b>ngiemboon</b> est aujourd'hui la langue la plus avancée, car il possède déjà son clavier dédié et le corpus le plus riche, mais la plateforme accueille plusieurs langues et chacun peut y ajouter la sienne. Où que tu sois, un simple <b>téléphone ou ordinateur</b> suffit pour y contribuer.",
                       en: "LANGA gives a <b>digital voice</b> to <b>our African languages</b>. <b>Ngiemboon</b> is currently the most advanced language, because it already has its own dedicated keyboard and the richest corpus, but the platform welcomes several languages and anyone can add their own. Wherever you are, a simple <b>phone or computer</b> is enough to contribute." },
  "about.why.h": { fr: "Pourquoi participer", en: "Why take part" },
  "about.why.1.h": { fr: "Préserver", en: "Preserve" },
  "about.why.1.p": { fr: "Chaque mot et chaque prononciation enregistrés aujourd'hui restent pour toutes les générations à venir",
                     en: "Every word and every pronunciation recorded today remains for all generations to come" },
  "about.why.2.h": { fr: "Outiller", en: "Equip" },
  "about.why.2.p": { fr: "Une langue présente dans le numérique reste vivante, car elle gagne des outils de traduction, un clavier à ses caractères et, demain, une intelligence artificielle qui la comprend.",
                     en: "A language present in the digital world stays alive, because it gains translation tools, a keyboard with its own characters and, tomorrow, an artificial intelligence that understands it." },
  "about.why.3.h": { fr: "Ensemble", en: "Together" },
  "about.why.3.p": { fr: "La langue appartient à sa communauté. Ta contribution en fait partie, quel que soit ton village",
                     en: "A language belongs to its community. Your contribution is part of it, whatever your village" },
  "about.how.h": { fr: "Trois façons de contribuer", en: "Three ways to contribute" },
  "about.how.1.h": { fr: "Traduire", en: "Translate" },
  "about.how.1.p": { fr: "Donne la traduction de mots et de phrases entières (français ↔ ngiemboon)",
                     en: "Give the translation of words and whole sentences (French ↔ ngiemboon)" },
  "about.how.2.h": { fr: "Transcrire", en: "Transcribe" },
  "about.how.2.p": { fr: "Enregistre ta voix quand tu prononces les mots, car cette prononciation est un trésor à préserver.",
                     en: "Record your voice as you pronounce the words, because that pronunciation is a treasure to preserve." },

  "about.how.3.h": { fr: "Explorer", en: "Explore" },
  "about.how.3.p": { fr: "Écoute, apprends et vote pour les meilleures améliorations", en: "Listen, learn and vote for the best improvements" },
  "about.share.h": { fr: "Partager le projet", en: "Share the project" },
  "about.share.p": { fr: "Fais découvrir LANGA autour de toi en montrant le QR code ou en partageant le flyer.", en: "Spread the word about LANGA by showing the QR code or sharing the flyer." },
  "about.share.img": { fr: "⬇ Flyer (image)", en: "⬇ Flyer (image)" },
  "about.share.pdf": { fr: "⬇ Flyer (PDF)", en: "⬇ Flyer (PDF)" },
  "about.share.present": { fr: "🖥 Mode présentation", en: "🖥 Presentation mode" },
  "share.lead": { fr: "Ou partage le lien en un clic :", en: "Or share the link in one click:" },
  "share.foot": { fr: "Partage LANGA autour de toi :", en: "Share LANGA around you:" },
  "share.hub": { fr: "Aide nos langues à rayonner, partage LANGA :", en: "Help our languages shine, share LANGA:" },
  "share.text": { fr: "Découvre LANGA et aidons ensemble à numériser nos langues d'Afrique, en texte et en voix 🌍", en: "Discover LANGA and let's help digitize Africa's languages together, in text and voice 🌍" },
  "share.native": { fr: "Partager", en: "Share" },
  "share.copy": { fr: "Copier le lien", en: "Copy link" },
  "share.copied": { fr: "Lien copié ✓", en: "Link copied ✓" },
  "share.ig": { fr: "Lien copié. Colle-le dans ta story ou ta bio Instagram.", en: "Link copied. Paste it in your Instagram story or bio." },
  "about.cta.start": { fr: "Commencer à contribuer →", en: "Start contributing →" },
  "p.intro": { fr: "Avant de commencer, renseigne ton profil. Ces informations servent à <b>te créditer</b> comme contributeur et à <b>revenir vers toi</b> si une traduction demande une précision. Elles sont enregistrées sur ton appareil : tu ne les saisiras qu'une seule fois. <span class=\"req\">* obligatoire</span>",
               en: "Before you start, fill in your profile. This information is used to <b>credit you</b> as a contributor and to <b>get back to you</b> if a translation needs clarification. It is stored on your device: you only enter it once. <span class=\"req\">* required</span>" },
  "p.nom": { fr: "Nom <span class=\"req\">*</span>", en: "Last name <span class=\"req\">*</span>" },
  "p.prenom": { fr: "Prénom <span class=\"req\">*</span>", en: "First name <span class=\"req\">*</span>" },
  "p.village": { fr: "Village / variante <span class=\"req\">*</span>", en: "Village / variant <span class=\"req\">*</span>" },
  "p.role": { fr: "Rôle <span class=\"req\">*</span>", en: "Role <span class=\"req\">*</span>" },
  "p.email": { fr: "E-mail <span class=\"req\">*</span>", en: "Email <span class=\"req\">*</span>" },
  "p.tel": { fr: "Téléphone (avec indicatif) <span class=\"req\">*</span>", en: "Phone (with country code) <span class=\"req\">*</span>" },
  "p.langs": { fr: "Mes langues d'appartenance <span class=\"hint-inline\">(touche une langue pour l'ajouter, retouche-la pour en faire la principale)</span>",
               en: "My languages <span class=\"hint-inline\">(tap a language to add it, tap it again to make it the main one)</span>" },
  "p.langs.primary": { fr: "principale", en: "main" },
  "p.nom.ph": { fr: "Ton nom", en: "Your last name" },
  "p.prenom.ph": { fr: "Ton prénom", en: "Your first name" },
  "p.village.ph": { fr: "Choisis dans la liste ou tape ton village / quartier", en: "Pick from the list or type your village / district" },
  "p.email.ph": { fr: "ton@email.com", en: "you@email.com" },
  "p.role.choose": { fr: "Choisir…", en: "Choose…" },
  "p.role.natif": { fr: "Locuteur natif", en: "Native speaker" },
  "p.role.apprenant": { fr: "Apprenant", en: "Learner" },
  "p.role.linguiste": { fr: "Linguiste", en: "Linguist" },
  "p.consent": { fr: "J'accepte que mes contributions (texte et voix) servent à documenter et outiller la langue, et qu'on puisse me contacter à ce sujet. <span class=\"req\">*</span>",
                 en: "I agree that my contributions (text and voice) may be used to document and equip the language, and that I may be contacted about it. <span class=\"req\">*</span>" },
  "p.credit": { fr: "J'autorise l'affichage de mon nom sur mes contributions dans la <b>bibliothèque publique</b>. <span class=\"hint-inline\">(facultatif, sinon tu restes anonyme)</span>",
                en: "I allow my name to be shown on my contributions in the <b>public library</b>. <span class=\"hint-inline\">(optional, otherwise you stay anonymous)</span>" },
  "p.credit.label": { fr: "Nom affiché dans la bibliothèque", en: "Name shown in the library" },
  "p.credit.prenom": { fr: "Prénom seul", en: "First name only" },
  "p.credit.sigle": { fr: "Sigle (ex. « Brice K.Z. »)", en: "Initials (e.g. \"Brice K.Z.\")" },
  "profile.title.welcome": { fr: "Bienvenue 👋", en: "Welcome 👋" },
  "profile.title.edit": { fr: "Mon profil", en: "My profile" },
  "profile.cancel": { fr: "Annuler", en: "Cancel" },
  "profile.continue": { fr: "Continuer →", en: "Continue →" },
  "profile.save": { fr: "Enregistrer", en: "Save" },
  "profile.lock": { fr: "🔒 Complète tous les champs obligatoires (marqués *) pour continuer.", en: "🔒 Complete all required fields (marked *) to continue." },

  // — Suivi des bugs —
  "bugs.title": { fr: "🐞 Suivi des bugs", en: "🐞 Bug tracker" },
  "bugs.intro": { fr: "Chaque bug est <b>identifié</b>, décrit, daté et suivi jusqu'à sa résolution. Tu peux <b>signaler</b> un problème : il rejoint la liste et tu suis son avancement (⏳ en attente → ✅ résolu).",
                  en: "Every bug is <b>tracked</b>, described, dated and followed until it's fixed. You can <b>report</b> a problem: it joins the list and you follow its progress (⏳ pending → ✅ fixed)." },
  "bugs.report.h": { fr: "Signaler un bug", en: "Report a bug" },
  "bugs.f.title": { fr: "Titre court", en: "Short title" },
  "bugs.f.desc": { fr: "Description", en: "Description" },

  // — Navigation —
  "nav.translate": { fr: "Traduire", en: "Translate" },
  "nav.transcribe": { fr: "Transcrire", en: "Transcribe" },
  "nav.explore": { fr: "Explorer", en: "Explore" },

  // — Espace de travail (Traduire / Transcrire) —
  "work.mode.proposed": { fr: "Se faire proposer un mot", en: "Get a word to work on" },
  "work.mode.free": { fr: "Écrire moi-même", en: "Write my own" },
  "work.next": { fr: "Prochain mot →", en: "Next word →" },
  "work.kb.open": { fr: "⌨ Ouvrir le clavier", en: "⌨ Open the keyboard" },
  "work.rec": { fr: "🎙️ Enregistrer", en: "🎙️ Record" },
  "work.rec.clear": { fr: "Effacer l'audio", en: "Clear audio" },
  "work.save": { fr: "Enregistrer la contribution", en: "Save contribution" },
  "work.title.translate": { fr: "Traduire", en: "Translate" },
  "work.title.transcribe": { fr: "Transcrire", en: "Transcribe" },
  "work.propcat.translate": { fr: "À traduire :", en: "To translate:" },
  "work.propcat.transcribe": { fr: "À prononcer :", en: "To pronounce:" },
  "work.lbltarget.translate": { fr: "Traduction", en: "Translation" },
  "work.lbltarget.transcribe": { fr: "Traduction (facultatif)", en: "Translation (optional)" },
  "work.send": { fr: "☁ Envoyer les données", en: "☁ Send data" },
  "work.resend": { fr: "↻ Renvoyer", en: "↻ Resend" },
  "work.domaine": { fr: "Domaine (facultatif)", en: "Domain (optional)" },
  "work.note": { fr: "Note (facultatif)", en: "Note (optional)" },
  "work.domaine.ph": { fr: "ex. parenté, nourriture, nature…", en: "e.g. kinship, food, nature…" },
  "work.note.ph": { fr: "registre, contexte d'emploi…", en: "register, context of use…" },
  "work.public": { fr: "Afficher mon nom sur mes contributions publiques", en: "Show my name on my public contributions" },

  // — Explorer —
  "exp.title": { fr: "Explorer la bibliothèque", en: "Explore the library" },
  "exp.intro": { fr: "Consulte les traductions et transcriptions déjà partagées par la communauté, pour apprendre, écouter les prononciations et repérer ce qui pourrait être amélioré. Chaque entrée montre son contexte, comme le domaine, la variante du village et le rôle du contributeur.",
                 en: "Browse the translations and recordings already shared by the community, to learn, listen to pronunciations and spot what could be improved. Each entry shows its context, such as the domain, the village variant and the contributor's role." },
  "exp.search.ph": { fr: "Rechercher un mot, une phrase…", en: "Search for a word or phrase…" },
  "exp.f.dir": { fr: "Tous les sens", en: "All directions" },
  "exp.f.role": { fr: "Tous les rôles", en: "All roles" },
  "exp.f.variante": { fr: "Toutes les variantes", en: "All variants" },
  "exp.f.domaine": { fr: "Tous les domaines", en: "All domains" },
  "exp.export.csv": { fr: "⬇ Exporter (CSV)", en: "⬇ Export (CSV)" },
  "exp.export.json": { fr: "⬇ Exporter (JSON)", en: "⬇ Export (JSON)" },

  // — Boutons communs —
  "btn.back": { fr: "← Retour", en: "← Back" },

  // — Pied de page —
  "foot.by": { fr: "Créé par", en: "Created by" },
  "foot.contact": { fr: "Un problème ou une suggestion ?", en: "A problem or a suggestion?" },
  "foot.sub": { fr: "Numériser les langues d'Afrique, texte et voix, par leurs communautés",
                en: "Digitizing African languages, text and voice, by their communities" },
  "foot.thanks": { fr: "Merci à chaque contributeur de la langue", en: "Thanks to every contributor to the language" },
};

// Messages éphémères (toasts) : table FR → EN. On garde le FR comme source dans les
// appels `toast(...)` du code ; `tToast()` renvoie l'EN si la langue d'interface est
// l'anglais (correspondance exacte, sinon par préfixe pour les messages concaténés).
const TOASTS_EN = {
  "Application à jour (": "App up to date (",
  "Bug signalé, merci ! Tu peux suivre son avancement ici.": "Bug reported, thanks! You can follow its progress here.",
  "Ce navigateur ne supporte pas l'enregistrement audio. Essaie Chrome ou Firefox à jour.": "This browser doesn't support audio recording. Try an up-to-date Chrome or Firefox.",
  "Contribution enregistrée localement.": "Contribution saved locally.",
  "Donne au moins un titre au bug.": "Give the bug at least a title.",
  "Écris ou fais-toi proposer le mot/phrase à prononcer.": "Type or get a word/phrase to pronounce.",
  "Écris ta proposition.": "Write your suggestion.",
  "Enregistre d'abord ta prononciation.": "Record your pronunciation first.",
  "Enregistre ta voix : c'est l'essentiel d'une transcription.": "Record your voice: it's the heart of a transcription.",
  "Envoi impossible (connexion ?).": "Sending failed (connection?).",
  "Finalisation de la mise à jour…": "Finalizing the update…",
  "L'enregistrement audio exige HTTPS ou localhost (sécurité du navigateur). ": "Audio recording requires HTTPS or localhost (browser security). ",
  "Mise à jour automatique impossible, recharge la page (Ctrl+Maj+R).": "Automatic update failed, reload the page (Ctrl+Shift+R).",
  "Proposition envoyée. Merci !": "Suggestion sent. Thank you!",
  "Remplis d'abord ton profil (tous les champs marqués *).": "Fill in your profile first (all fields marked *).",
  "Renseigne le mot/phrase ET sa traduction.": "Provide the word/phrase AND its translation.",
  "Renseigne ton profil pour proposer.": "Fill in your profile to suggest.",
  "Renvoi en cours…": "Resending…",
  "Rien à guider sur cette page pour le moment.": "Nothing to guide on this page for now.",
  "Vote non enregistré (connexion ?).": "Vote not saved (connection?).",
  "Dictionnaire exporté · ": "Dictionary exported · ",
  "Export impossible sur cet appareil.": "Export not available on this device.",
  "Carte copiée, colle-la où tu veux !": "Card copied, paste it anywhere!",
  "Partage indisponible sur cet appareil.": "Sharing not available on this device.",
  "Présentation téléchargée ✓": "Presentation downloaded ✓",
  "Téléchargement impossible sur cet appareil.": "Download not available on this device.",
};
export function tToast(fr) {
  if (getUiLang() !== "en" || !fr) return fr;
  if (TOASTS_EN[fr]) return TOASTS_EN[fr];
  for (const k of Object.keys(TOASTS_EN)) {
    if (fr.startsWith(k)) return TOASTS_EN[k] + fr.slice(k.length);
  }
  return fr;
}

export function t(key) {
  const e = STR[key];
  if (!e) return key;
  const l = getUiLang();
  return (l === "en" ? e.en : e.fr) || e.fr || key;
}

/** Applique la langue d'interface à tout le DOM statique marqué `data-i18n*`. */
export function applyI18n(root) {
  const scope = root || document;
  scope.querySelectorAll("[data-i18n]").forEach((el) => {
    const s = STR[el.getAttribute("data-i18n")];
    if (s) el.textContent = t(el.getAttribute("data-i18n"));
  });
  // Contenu RICHE (avec balises <b>…) : innerHTML. Les valeurs sont des chaînes de
  // traduction STATIQUES du dépôt (aucune entrée utilisateur) → sûr.
  scope.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const s = STR[el.getAttribute("data-i18n-html")];
    if (s) el.innerHTML = t(el.getAttribute("data-i18n-html"));
  });
  scope.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const s = STR[el.getAttribute("data-i18n-ph")];
    if (s) el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
  });
  scope.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const s = STR[el.getAttribute("data-i18n-title")];
    if (s) { const v = t(el.getAttribute("data-i18n-title")); el.setAttribute("title", v); el.setAttribute("aria-label", v); }
  });
  document.documentElement.lang = getUiLang();
}
