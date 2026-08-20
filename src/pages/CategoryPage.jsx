import { Link, useParams } from "react-router-dom";
import { getCategoryById } from "../data/kbData";
import Breadcrumb from "../components/Breadcrumb";
import Sidebar from "../components/Sidebar";

function CategoryPage() {
  // useParams() reads the dynamic part of the URL.
  // Our route is defined as "/category/:categoryId" in App.jsx,
  // so this gives us { categoryId: "getting-started" } for example.
  const { categoryId } = useParams();
  const category = getCategoryById(categoryId);

  if (!category) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-slate-600">Category not found.</p>
        <Link to="/" className="text-indigo-600 hover:underline">
          Go back home
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumb
        items={[{ label: "Knowledge Base", to: "/" }, { label: category.title }]}
      />

      <div className="mt-6 flex flex-col gap-6 lg:flex-row">
        <div className="flex-1 rounded-xl border border-slate-200 bg-white">
          {category.articles.map((article, index) => (
            <Link
              key={article.id}
              to={`/category/${category.id}/${article.id}`}
              className={`block px-6 py-4 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-indigo-600 ${
                index !== category.articles.length - 1
                  ? "border-b border-slate-100"
                  : ""
              }`}
            >
              {article.title}
            </Link>
          ))}
        </div>

        <div className="lg:w-64">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-xl">
              {category.icon}
            </div>
            <h3 className="mt-3 text-base font-semibold text-slate-900">
              {category.title}
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              {category.description}
            </p>
          </div>

          <div className="mt-5">
            <Sidebar activeCategoryId={category.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
