
const BASE = "https://api.adzuna.com/v1/api/jobs";


function getEnvVar(viteKey, craKey) {
  if (typeof import.meta !== "undefined" && import.meta.env && import.meta.env[viteKey]) {
    return import.meta.env[viteKey]; // Vite
  }
  if (process.env && process.env[craKey]) {
    return process.env[craKey]; // CRA
  }
  return ""; 
}

export function buildAdzunaUrl({
  country = "gb",
  page = 1,
  what = "",
  where = "",
  results_per_page = 20,
}) {
  const app_id = getEnvVar("VITE_ADZUNA_APP_ID", "REACT_APP_ADZUNA_APP_ID");
  const app_key = getEnvVar("VITE_ADZUNA_APP_KEY", "REACT_APP_ADZUNA_APP_KEY");

  const params = new URLSearchParams({
    app_id,
    app_key,
    results_per_page: String(results_per_page),
    what,
    where,
  });

  return `${BASE}/${country}/search/${page}?${params.toString()}`;
}

