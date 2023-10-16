import { Fragment, useEffect, useState } from "react";
import axioss from "../../server";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const HomePageCategoryCards = () => {
  const navigate = useNavigate();
  const [popularOnesPostData, setPopularOnesPostData] = useState([]);

  useEffect(() => {
    const getHomePageDataCategory = async () => {
      try {
        const { data: data2 } = await axioss.get("category");
        setPopularOnesPostData(data2.data);
        // console.log(data2.data);
      } catch (err) {
        // Handle errors
      }
    };

    getHomePageDataCategory();
  }, []);

  const directTocategory = (id) => {
    navigate(`/category/${id}`);
    // console.log(id);
  };

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
          <div
            onClick={() => directTocategory(el._id)}
            key={i}
            className="hpc-category-cards"
          >
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

// apparently done
