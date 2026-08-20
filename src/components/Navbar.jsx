import { Link } from "react-router-dom";

// This component receives two props from its parent (App.jsx):
// - searchTerm: the current text typed in the search box
// - onSearchChange: a function to call whenever the text changes
// This pattern (state lives in parent, child just displays + reports changes)
// is called "lifting state up" and is very common in React.
function Navbar({ searchTerm, onSearchChange }) {
  return (
    <header className="bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500 text-lg">
              🛟
            </span>
            <span className="text-lg font-semibold text-white">
              Support Center
            </span>
          </Link>

          <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <button type="button" className="hover:text-white">
              Sign In
            </button>
          </nav>
        </div>

        <div className="mt-5 flex gap-3">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search articles..."
            className="w-full rounded-md border-0 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button className="hidden shrink-0 items-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100 sm:flex">
            + Add Ticket
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
