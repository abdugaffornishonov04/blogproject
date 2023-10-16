// const HomePageCategoryCards = () => {
  
//   return (
    // <div className="hpc-category-cards">
    //   <div className="hpccc-image">
    //     <img src="" alt="" />
    //   </div>
    //   <h4 className="hpccc-title">Business</h4>
    //   <p className="hpccc-desc">
    //     Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    //   </p>
    // </div>
//   );
// }

// export default HomePageCategoryCards

import  { Fragment, useEffect, useState } from "react";
import axioss from "../../server";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePageCategoryCards = () => {
  const [popularOnesPostData, setPopularOnesPostData] = useState([]);

  useEffect(() => {
    const getHomePageDataCategory = async () => {
      try {
        const { data: data2 } = await axioss.get("category");
        setPopularOnesPostData(data2.data);
        console.log(data2.data);
      } catch (err) {
        // Handle errors
      }
    };

    getHomePageDataCategory();
  }, []);

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1,
  };

  return (
    <Fragment>
      <Slider {...slickSettings}>
        {popularOnesPostData.map((el, i) => (
          <div key={i} className="hpc-category-cards">
            <div className="hpccc-image">
              <img src="" alt="" />
            </div>
            <h4 className="hpccc-title">{el.name}</h4>
            <p className="hpccc-desc">
              {el._id}
              {el.description}
            </p>
          </div>
        ))}
      </Slider>
    </Fragment>
  );
};

export default HomePageCategoryCards;

