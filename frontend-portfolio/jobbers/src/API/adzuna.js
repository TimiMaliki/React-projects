
const BASE = "https://api.adzuna.com/v1/api/jobs";

export function buildAdzunaUrl({
  country = "gb",
  page = 1,
  what = "",
  where = "",
  results_per_page = 20,
}) {
  const params = new URLSearchParams({
    app_id:
      import.meta?.env?.VITE_ADZUNA_APP_ID ??
      process.env.REACT_APP_ADZUNA_APP_ID,
    app_key:
      import.meta?.env?.VITE_ADZUNA_APP_KEY ??
      process.env.REACT_APP_ADZUNA_APP_KEY,
    results_per_page: String(results_per_page),
    what,
    where,
  });

  return `${BASE}/${country}/search/${page}?${params.toString()}`;
}
