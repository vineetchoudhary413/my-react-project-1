import { Link } from "react-router-dom";

// "items" is an array of { label, to } objects passed in as a prop.
// The last item is shown as plain text (current page), the rest are links.
function Breadcrumb({ items }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} className="flex items-center gap-2">
            {isLast || !item.to ? (
              <span className={isLast ? "text-slate-700" : ""}>
                {item.label}
              </span>
            ) : (
              <Link to={item.to} className="hover:text-indigo-600">
                {item.label}
              </Link>
            )}
            {!isLast && <span className="text-slate-300">/</span>}
          </span>
        );
      })}
    </div>
  );
}

export default Breadcrumb;
