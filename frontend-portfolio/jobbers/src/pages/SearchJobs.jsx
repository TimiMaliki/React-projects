import React from 'react'
import { useCallback, useMemo, useRef, useState } from "react";
import { buildAdzunaUrl } from "../API/adzuna";
import Spinners from '../Component/Spinners';


const SearchJobs = () => {
  const [country, setCountry] = useState("gb"); // e.g. "gb", "us", "ca"
  const [what, setWhat] = useState("");         // keyword(s)
  const [where, setWhere] = useState("");       // city/region
  const [page, setPage] = useState(1);

  const [results, setResults] = useState([]);
  const [count, setCount] = useState(0);        // total results
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Keep the latest AbortController to cancel previous requests
  const controllerRef = useRef(null);

  const url = useMemo(
    () => buildAdzunaUrl({ country, page, what, where, results_per_page: 20 }),
    [country, page, what, where]
  );

  const fetchJobs = useCallback(async () => {
    // Cancel previous request if still in-flight
    controllerRef.current?.abort();
    controllerRef.current = new AbortController();

    setLoading(true);
    setError("");

    try {
      const res = await fetch(url, { signal: controllerRef.current.signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      // Adzuna returns { mean, count, results: [...] }
      setResults(Array.isArray(data.results) ? data.results : []);
      setCount(typeof data.count === "number" ? data.count : 0);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message || "Failed to fetch jobs");
      }
    } finally {
      setLoading(false);
    }
  }, [url]);

  const onSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    // After state updates, `url` changes -> `fetchJobs` effect isn’t automatic.
    // Call explicitly so the user sees results immediately:
    fetchJobs();
  };
  return (
    <section className="p-8 max-w-6xl mx-auto mt-32">
  {/* Title */}
  <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
    Search Jobs <span className="text-green-600">(Jobber)</span>
  </h1>

  {/* Search Form */}
  <form
    onSubmit={onSubmit}
    className="bg-white shadow-lg rounded-2xl p-6 grid gap-4 md:grid-cols-4 border border-gray-100"
  >
    <select
      className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      value={country}
      onChange={(e) => setCountry(e.target.value)}
    >
      <option value="gb">United Kingdom</option>
      <option value="us">United States</option>
      <option value="ca">Canada</option>
      <option value="au">Australia</option>
      <option value="nl">Netherlands</option>
      <option value="fr">France</option>
    </select>

    <input
      className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      placeholder="Keyword (what)"
      value={what}
      onChange={(e) => setWhat(e.target.value)}
    />

    <input
      className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      placeholder="Location (where)"
      value={where}
      onChange={(e) => setWhere(e.target.value)}
    />
    <button
      type="submit"
      className="bg-green-600 hover:bg-green-700 text-white rounded-lg p-3 font-semibold transition-colors disabled:opacity-50"
      disabled={loading}
    >
      {loading ? "Searching…" : "Search"}
    </button>
  </form>

  {/* Results Info */}
  <div className="mt-6 text-center text-gray-600 text-sm">
    {<Spinners loading = {loading} /> 
    ? (<Spinners loading = {loading} />) 
      : error
      ? `Error: ${error}`
      : `Found ${count} results`}
  </div>

  {/* Job Results */}
  <ul className="mt-10 grid gap-6 md:grid-cols-2">
    {!loading &&
      !error &&
      results.map((job) => (
        <li
          key={job.id}
          className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
          <p className="text-sm text-gray-600">
            {job.company?.display_name ?? "Unknown company"}
          </p>
          <p className="text-sm text-gray-500">
            {job.location?.display_name ?? "Unknown location"}
          </p>

          {typeof job.salary_min === "number" &&
          typeof job.salary_max === "number" ? (
            <p className="text-sm font-medium text-green-700 mt-2">
              £{job.salary_min.toLocaleString()} – £
              {job.salary_max.toLocaleString()}
            </p>
          ) : (
            <p className="text-sm mt-2 text-gray-500">Salary not specified</p>
          )}

          <a
            href={job.redirect_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-green-600 font-medium hover:text-green-800 transition-colors"
          >
            View Job →
          </a>
        </li>
      ))}
  </ul>

  {/* Pagination */}
  <div className="mt-10 flex items-center justify-center gap-4">
    <button
      onClick={() => page > 1 && setPage((p) => p - 1)}
      className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
      disabled={loading || page <= 1}
    >
      Prev
    </button>
    <span className="text-gray-700 font-medium">Page {page}</span>
    <button
      onClick={() => setPage((p) => p + 1)}
      className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
      disabled={loading}
    >
      Next
    </button>
    <button
      onClick={fetchJobs}
      className="ml-auto px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
      disabled={loading}
    >
     Please click the refresh
    </button>
  </div>
</section>

  )
}

export default SearchJobs