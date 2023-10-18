import PropTypes from "prop-types";
import { Fragment } from "react";
import {  useNavigate } from "react-router-dom";

const AllPostsCards = ({ data }) => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/blogpost/${id}`);
  };

  return (
    <Fragment>
      {data.map((el, i) => (
        <div
          key={i}
          onClick={() => handleNavigate(el._id)} // Pass el._id, not {el._id}
          className="all-posts-card"
        >
          <div className="cpmcc-img">
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div className="cpmpcc-content">
            <p className="cpmpccc-subtext">{el.category.name}</p>
            <h3 className="cpmccc-title">
              {el.title.charAt(0).toUpperCase() + el.title.slice(1)}
            </h3>
            <p className="cpmccc-description">{el.description.slice(0, 100)}</p>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

AllPostsCards.propTypes = {
  data: PropTypes.array,
};

export default AllPostsCards;

// apparently everthing is ok