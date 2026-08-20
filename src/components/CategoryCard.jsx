import { Link } from "react-router-dom";

// A "presentational" component: it doesn't manage any state itself,
// it just receives a "category" object as a prop and renders it.
function CategoryCard({ category }) {
  return (
    <Link
      to={`/category/${category.id}`}
      className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50 text-2xl">
        {category.icon}
      </div>

      <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-indigo-600">
        {category.title}
      </h3>

      <p className="mt-1 text-sm text-slate-500">{category.description}</p>

      <p className="mt-4 text-xs font-medium text-slate-400">
        {category.articles.length}{" "}
        {category.articles.length === 1 ? "Article" : "Articles"}
      </p>
    </Link>
  );
}

export default CategoryCard;
