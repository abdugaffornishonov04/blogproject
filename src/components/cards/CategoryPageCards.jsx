import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axioss from "../../server";
import { useNavigate } from "react-router-dom";

const CategoryPageCards = ({ categoryName, searchInput }) => {
  const [cpcData, setCpcData] = useState([]);

  useEffect(() => {
    const cpcAxios = async () => {
      try {
        const { data: what } = await axioss.get(`post`);
        console.log(what);
        const filteredData = what.data.filter(
          (el) => el.category.name == categoryName
        );
        const filteredDataFoSearch = filteredData.filter((el) =>
          el.title.toLowerCase().includes(searchInput)
        );
        //  console.log(what.data);
        //  console.log(categoryName);
        setCpcData(filteredDataFoSearch);
      } catch (err) {
        console.error(err); // Log the error
      }
    };

    cpcAxios();
  }, [categoryName, searchInput]);

  // console.log(cpcData);

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/blogpost/${id}`);
  };

  return (
    <div>
      {cpcData.map((el, i) => (
        <div
          onClick={() => handleNavigate(el._id)}
          className="cpmc-card"
          key={i}
        >
          <div className="cpmcc-img">
            <img src="" alt="" />
          </div>
          <div className="cpmpcc-content">
            <p className="cpmpccc-subtext">{el.category.name}</p>
            <h3 className="cpmccc-title">{el.title}</h3>
            <p className="cpmccc-description">{el.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

CategoryPageCards.propTypes = {
  categoryName: PropTypes.string,
  searchInput: PropTypes.string,
};

export default CategoryPageCards;

// well do not know if done or not
