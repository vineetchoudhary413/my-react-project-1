import { Link } from "react-router-dom";
import { categories } from "../data/kbData";

// activeCategoryId is passed in so we can highlight which section
// the user is currently browsing.
function Sidebar({ activeCategoryId }) {
  return (
    <aside className="w-full shrink-0 lg:w-64">
      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <h4 className="text-sm font-semibold text-slate-900">KB Sections</h4>
        <ul className="mt-3 space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                to={`/category/${category.id}`}
                className={`block rounded-md px-2 py-1.5 text-sm ${
                  category.id === activeCategoryId
                    ? "bg-indigo-50 font-medium text-indigo-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
