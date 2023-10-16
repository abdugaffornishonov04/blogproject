// import PropTypes from "prop-types";
// import { Fragment } from "react";

// const AllPostsCards = ({ data }) => (

//     const handleNavigate = (id) => {
//     return <Navigate to={`/other-route/${id}`} />;
//   };
//   <Fragment>
//     {data.map((el, i) => (
//       <div key={i} onClick={() => handleNavigate({el._id})} className="all-posts-card">
//         <div className="cpmcc-img">
//           <img src="" alt="" />
//         </div>
//         <div className="cpmpcc-content">
//           <p className="cpmpccc-subtext">{el.category.name}</p>
//           <h3 className="cpmccc-title">{el.title}</h3>
//           <p className="cpmccc-description">{el.description}</p>
//         </div>
//       </div>
//     ))}
//   </Fragment>
// );

// AllPostsCards.propTypes = {
//   data: PropTypes.array,
// };

// export default AllPostsCards;

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
            <img src="" alt="" />
          </div>
          <div className="cpmpcc-content">
            <p className="cpmpccc-subtext">{el.category.name}</p>
            <h3 className="cpmccc-title">{el.title}</h3>
            <p className="cpmccc-description">{el.description}</p>
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
