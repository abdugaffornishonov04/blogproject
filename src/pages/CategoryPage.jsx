import { useEffect, useState } from "react";
import CategoryPageCards from "../components/cards/CategoryPageCards";
import { useParams } from "react-router-dom";
import axioss from "../server";

const CategoryPage = () => {
  const { categoryId } = useParams();
  // console.log(categoryId);
  const [getCategoryData, setGetCategoryData] = useState({});
   const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const getCategoryAxioss = async () => {
      try {
        const { data: postData } = await axioss.get(`category/${categoryId}`);
        setGetCategoryData(postData);
        // console.log(postData);
            
      } catch (err) {
        // console.log(err);
      }
    };

    getCategoryAxioss();
  });
  // console.log(getCategoryData);

    const handleSearchInputChange = (event) => {
      setSearchInput(event.target.value);
    };
    // console.log(searchInput);

  return (
    <section className="category-page">
      {/* upper */}
      <div className="category-page-upper-category">
        <h2 className="cpup-title">{getCategoryData.name}</h2>
        <p className="cpup-desc">{getCategoryData.description}</p>
        <div className="cpup-directions">
          Blog {">"} {getCategoryData.name}
        </div>
      </div>

      {/* main */}

      <div className="category-page-main-content">
        <div className="cpmc-search">
          <input
            onChange={handleSearchInputChange}
            type="search"
            placeholder="Search..."
          />
        </div>
        <div className="cpmc-cards-wrapper">
          <CategoryPageCards
            categoryId={categoryId}
            categoryName={getCategoryData.name}
            searchInput={searchInput}
          />
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;

// apparently done 1 2 3 4567
