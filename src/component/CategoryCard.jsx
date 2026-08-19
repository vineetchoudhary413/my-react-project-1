import React from "react";
import "./CategoryCard.css";

function CategoryCard({ icon, title, description, articleCount }) {
  return (
    <div className="category-card">
      <div className="category-card-icon">{icon}</div>
      <h3 className="category-card-title">{title}</h3>
      <p className="category-card-description">{description}</p>
      <span className="category-card-count">{articleCount} Articles</span>
    </div>
  );
}

export default CategoryCard;