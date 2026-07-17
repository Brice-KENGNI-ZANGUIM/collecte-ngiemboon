// Export du dictionnaire (CSV / JSON) — fonctions PURES, testables en isolation.
// Robustesse : échappement CSV strict (guillemets, virgules, retours ligne),
// GARDE anti-injection de formule (cellules commençant par = + - @ dans un tableur),
// unicode préservé (lettres ɓ ɗ ŋ…), champs manquants tolérés.
//
// Auteur : Brice Kengni Zanguim.

/** Échappe une valeur pour une cellule CSV, avec garde anti-injection de formule. */
export function csvCell(v) {
  let s = v === null || v === undefined ? "" : String(v);
  // Anti-injection : un tableur interprète =…, +…, -…, @… (et TAB/CR en tête) comme
  // une FORMULE. On neutralise en préfixant d'une apostrophe (le contenu reste lisible).
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
  // Échappement CSV standard (RFC 4180) : entourer de " si , " CR LF présents ;
  // les " internes sont doublés.
  if (/[",\n\r]/.test(s)) s = '"' + s.replace(/"/g, '""') + '"';
  return s;
}

/** Assemble des lignes (tableaux de valeurs) en texte CSV (CRLF, RFC 4180). */
export function toCSV(rows) {
  return (rows || []).map((r) => (r || []).map(csvCell).join(",")).join("\r\n");
}

// Colonnes exportées (ordre stable). Clés = champs d'une entrée browse.
const COLS = [
  ["mot_source", "source_text"],
  ["traduction", "target_text"],
  ["sens", "direction"],
  ["variante", "variante"],
  ["role", "role"],
  ["domaine", "domaine"],
  ["note", "note"],
  ["date", "date"],
  ["audio", "audio_url"],
];

/** Entrées du dictionnaire → CSV (avec en-tête + BOM UTF-8 pour Excel). */
export function entriesToCSV(entries) {
  const header = COLS.map((c) => c[0]);
  const rows = [header].concat((entries || []).map((e) => COLS.map((c) => e[c[1]])));
  // BOM UTF-8 : garantit qu'Excel lit correctement les lettres spéciales (ɓ, é…).
  return "﻿" + toCSV(rows);
}

/** Entrées → JSON pretty (uniquement les champs publics utiles). */
export function entriesToJSON(entries, meta) {
  const clean = (entries || []).map((e) => {
    const o = {};
    for (const [k, src] of COLS) {
      const v = e[src];
      if (v !== null && v !== undefined && v !== "") o[k] = v;
    }
    return o;
  });
  return JSON.stringify(Object.assign({}, meta || {}, { entrees: clean }), null, 2);
}

/** Nom de fichier sûr (sans caractères hostiles au système de fichiers). */
export function exportFilename(langId, ext) {
  const id = String(langId || "langue").normalize("NFD").replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-+|-+$/g, "").toLowerCase() || "langue";
  return `langa-dictionnaire-${id}.${ext === "json" ? "json" : "csv"}`;
}
