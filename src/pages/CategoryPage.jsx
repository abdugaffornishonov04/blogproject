import CategoryPageCards from "../components/cards/CategoryPageCards";

const CategoryPage = () => {
  return (
    <section className="category-page">
      {/* upper */}
      <div className="category-page-upper-category">
        <h2 className="cpup-title">Business</h2>
        <p className="cpup-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <div className="cpup-directions">Blog {">"} Business</div>
      </div>

      {/* main */}

    <div className="category-page-main-content">
      <div className="cpmc-search">
        <input type="search" placeholder="Search..."/>

      </div>
      <div className="cpmc-cards-wrapper">
        <CategoryPageCards/>
        <CategoryPageCards/>
        <CategoryPageCards/>
        <CategoryPageCards/>
      </div>
    </div>
    </section>
  );
};

export default CategoryPage;
