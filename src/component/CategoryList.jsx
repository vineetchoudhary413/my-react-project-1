import React from "react";
import CategoryCard from "./CategoryCard";
import "./CategoryList.css";

const categories = [
  { icon: "🐣", title: "Getting started with EarlyCaves", description: "Let's get you started with EarlyCaves", articleCount: 8 },
  { icon: "🧑‍💼", title: "Quick Guides", description: "Learn about all the product and features on EarlyCaves", articleCount: 14 },
  { icon: "📝", title: "Payment Page", description: "Learn all about creating payment pages on EarlyCaves", articleCount: 14 },
  { icon: "✈️", title: "Telegram Integration", description: "Learn how to integrate telegram to start", articleCount: 10 },
  { icon: "🛠️", title: "Events", description: "Learn all about creating events/webinars on EarlyCaves", articleCount: 12 },
  { icon: "✏️", title: "Courses", description: "Learn all about creating courses on EarlyCaves", articleCount: 15 },
];

function CategoryList() {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <CategoryCard
          key={category.title}
          icon={category.icon}
          title={category.title}
          description={category.description}
          articleCount={category.articleCount}
        />
      ))}
    </div>
  );
}

export default CategoryList;