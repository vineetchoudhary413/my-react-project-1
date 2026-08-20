import { Link, useParams } from "react-router-dom";
import { getArticle, getCategoryById } from "../data/kbData";
import Breadcrumb from "../components/Breadcrumb";
import Sidebar from "../components/Sidebar";

function ArticlePage() {
  // Two dynamic segments this time: /category/:categoryId/:articleId
  const { categoryId, articleId } = useParams();
  const category = getCategoryById(categoryId);
  const article = getArticle(categoryId, articleId);

  if (!category || !article) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-slate-600">Article not found.</p>
        <Link to="/" className="text-indigo-600 hover:underline">
          Go back home
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Knowledge Base", to: "/" },
          { label: category.title, to: `/category/${category.id}` },
          { label: article.title },
        ]}
      />

      <div className="mt-6 flex flex-col gap-6 lg:flex-row">
        <article className="flex-1 rounded-xl border border-slate-200 bg-white p-8">
          <h1 className="text-2xl font-bold text-slate-900">
            {article.title}
          </h1>

          {/* whitespace-pre-line keeps the line breaks from our data file */}
          <p className="mt-5 whitespace-pre-line text-sm leading-relaxed text-slate-700">
            {article.content}
          </p>
        </article>

        <div className="lg:w-64">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h4 className="text-sm font-semibold text-slate-900">
              {category.title}
            </h4>
            <ul className="mt-3 space-y-2">
              {category.articles.map((a) => (
                <li key={a.id}>
                  <Link
                    to={`/category/${category.id}/${a.id}`}
                    className={`block rounded-md px-2 py-1.5 text-sm ${
                      a.id === article.id
                        ? "bg-indigo-50 font-medium text-indigo-600"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <Sidebar activeCategoryId={category.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
