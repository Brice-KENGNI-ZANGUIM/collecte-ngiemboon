// Journal des bugs — VERSIONNÉ dans le dépôt (source de vérité des statuts).
// Chaque bug : identifiant unique, description, statut, dates (détection /
// résolution) et métadonnées (sévérité, zone, version du correctif).
// Les bugs SIGNALÉS PAR LES UTILISATEURS arrivent en plus et sont triés ici par le
// mainteneur quand ils sont pris en charge / résolus.
//
// statut   : "resolu" | "en_attente"
// severite : "critique" | "majeur" | "mineur"
// Auteur : Brice Kengni Zanguim
export const BUGS = [
  {
    id: "BUG-001", titre: "Certains envois ne partaient pas (données)",
    description: "En cliquant sur « Envoyer les données » avec beaucoup de contributions, quelques-unes étaient comptées comme échouées alors qu'elles avaient bien été enregistrées : le résultat de l'envoi était mal interprété.",
    statut: "resolu", severite: "critique", zone: "Envoi / synchro",
    detecte_le: "2026-07-12", resolu_le: "2026-07-13", version: "v76",
    correctif: "L'application vérifie désormais ce qui est réellement enregistré et renvoie automatiquement ce qui manque, jusqu'à confirmation ; deux groupes distinguent « envoyés » et « à renvoyer ».",
  },
  {
    id: "BUG-002", titre: "Un même mot pouvait être reproposé au même utilisateur",
    description: "Un item déjà traduit/transcrit par un utilisateur pouvait lui être reproposé (le même mot existait sous plusieurs identifiants, ex. entre « mots » et le dictionnaire).",
    statut: "resolu", severite: "majeur", zone: "Propositions",
    detecte_le: "2026-07-13", resolu_le: "2026-07-13", version: "v77",
    correctif: "Anti-répétition par utilisateur, dédup par texte normalisé, reconstruit depuis les contributions réelles. Tirage aléatoire parmi les non-faits.",
  },
  {
    id: "BUG-003", titre: "Micro non détecté sur PC (portable AMD)",
    description: "Sur PC, l'enregistrement audio échoue (« aucun micro détecté ») alors qu'il fonctionne sur mobile. Le micro interne est un micro numérique (DMIC) rattaché au co-processeur audio AMD ; le noyau Linux actuel lie un pilote qui ne l'expose pas.",
    statut: "en_attente", severite: "majeur", zone: "Audio / système",
    detecte_le: "2026-07-13", resolu_le: "", version: "",
    correctif: "En cours : test d'un noyau plus récent qui prend en charge le micro interne. Contournement fiable : micro/casque USB.",
  },
  {
    id: "BUG-004", titre: "Menus déroulants mal positionnés (PC)",
    description: "Sur PC, un menu déroulant (village, rôle…) s'ouvrait ailleurs que sous son champ.",
    statut: "resolu", severite: "majeur", zone: "Interface",
    detecte_le: "2026-07-13", resolu_le: "2026-07-13", version: "v70",
    correctif: "Correction de la superposition qui décalait l'ouverture ; le menu s'affiche de nouveau juste sous son champ.",
  },
  {
    id: "BUG-005", titre: "Clavier ngiemboon s'ouvrait au défilement",
    description: "Un simple défilement démarrant sur le champ ouvrait le clavier et pouvait insérer des lettres parasites.",
    statut: "resolu", severite: "mineur", zone: "Clavier",
    detecte_le: "2026-07-12", resolu_le: "2026-07-12", version: "v54",
    correctif: "Ouverture au vrai tap uniquement (immobile < 10 px et < 500 ms) ; suivi du mouvement au niveau document.",
  },
  {
    id: "BUG-008", titre: "Version en retard sur un appareil (cache navigateur)",
    description: "Après une mise à jour, un appareil pouvait rester sur une ancienne version (ex. mobile en v79 alors que le PC était en v83), obligeant à un rechargement forcé (Ctrl+Shift+R).",
    statut: "resolu", severite: "majeur", zone: "Interface",
    detecte_le: "2026-07-13", resolu_le: "2026-07-13", version: "v84",
    correctif: "L'application détecte la nouvelle version et propose de l'installer en un clic (bannière « Nouvelle version disponible »), sans rechargement manuel.",
  },
  {
    id: "BUG-007", titre: "Menus déroulants d'Explorer cachés par les cartes",
    description: "Dans « Explorer », un menu déroulant (filtres) était partiellement occulté par les cartes situées en dessous quand il s'ouvrait (superposition).",
    statut: "resolu", severite: "majeur", zone: "Interface",
    detecte_le: "2026-07-13", resolu_le: "2026-07-13", version: "v79",
    correctif: "Le menu s'affiche désormais au premier plan, bien ancré sous son champ, sans être masqué par les cartes, à l'identique sur PC et mobile.",
  },
  {
    id: "BUG-009", titre: "La bannière de mise à jour réapparaissait après la mise à jour",
    description: "Après avoir cliqué sur « Mettre à jour », la mise à jour se faisait mais la bannière « Nouvelle version disponible » revenait indéfiniment ; elle ne disparaissait qu'avec un rechargement forcé (Ctrl+Shift+R).",
    statut: "resolu", severite: "majeur", zone: "Interface / mise à jour",
    detecte_le: "2026-07-13", resolu_le: "2026-07-13", version: "v88",
    correctif: "La mise à jour s'installe correctement du premier coup et la bannière se referme d'elle-même dès que l'application est réellement à jour.",
  },
  {
    id: "BUG-006", titre: "Audio non réinitialisé au mot suivant",
    description: "En passant au mot suivant, un audio enregistré mais non sauvegardé pouvait « coller » à la contribution d'après.",
    statut: "resolu", severite: "majeur", zone: "Audio",
    detecte_le: "2026-07-12", resolu_le: "2026-07-12", version: "v54",
    correctif: "Remise à zéro du travail en cours (texte, note, domaine, audio) à chaque changement de mot ou d'espace.",
  },
  {
    id: "BUG-U-mrmae78s-7670", titre: "Entrée « fantôme » dans Explorer (sans mot, ni audio, ni traduction)",
    description: "Dans Explorer, deux propositions apparaissaient regroupées sans que le mot à transcrire soit indiqué ; en les ouvrant, deux cadres s'affichaient sans bouton d'écoute audio ni traduction. En cause : des contributions vides (ni texte source, ni traduction, ni audio) issues d'un envoi malformé, regroupées sous une clé vide.",
    statut: "resolu", severite: "mineur", zone: "Explorer",
    detecte_le: "2026-07-15", resolu_le: "2026-07-15", version: "v113",
    correctif: "Explorer ignore désormais toute entrée sans aucun contenu (ni mot, ni traduction, ni audio jouable), et une contribution vide est refusée à l'enregistrement.",
  },
];
