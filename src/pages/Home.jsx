import { categories } from "../data/kbData";
import CategoryCard from "../components/CategoryCard";

function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-xl font-semibold text-slate-900">Knowledge Base</h1>
      <p className="mt-1 text-sm text-slate-500">
        Browse articles by category, or use the search bar above.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Home;
