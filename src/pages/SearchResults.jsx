import { Link } from "react-router-dom";
import { categories } from "../data/kbData";

// searchTerm comes down from App.jsx as a prop.
function SearchResults({ searchTerm }) {
  // Flatten every article across every category into one list,
  // keeping a reference to its parent category.
  const allArticles = categories.flatMap((category) =>
    category.articles.map((article) => ({ ...article, category }))
  );

  const results = allArticles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-lg font-semibold text-slate-900">
        Search results for "{searchTerm}"
      </h1>
      <p className="mt-1 text-sm text-slate-500">
        {results.length} {results.length === 1 ? "article" : "articles"} found
      </p>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white">
        {results.length === 0 && (
          <p className="px-6 py-8 text-sm text-slate-500">
            No articles matched your search. Try a different keyword.
          </p>
        )}

        {results.map((article, index) => (
          <Link
            key={article.id}
            to={`/category/${article.category.id}/${article.id}`}
            className={`block px-6 py-4 hover:bg-slate-50 ${
              index !== results.length - 1 ? "border-b border-slate-100" : ""
            }`}
          >
            <p className="text-sm font-medium text-slate-800 hover:text-indigo-600">
              {article.title}
            </p>
            <p className="mt-0.5 text-xs text-slate-400">
              in {article.category.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
