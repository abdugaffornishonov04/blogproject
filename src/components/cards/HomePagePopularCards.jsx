import  { Fragment, useEffect, useState } from "react";
import axioss from "../../server";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePagePopularCards = () => {
  const [popularOnesPostData, setPopularOnesPostData] = useState([]);

  useEffect(() => {
    const getHomePageDataPopular = async () => {
      try {
        const { data: data2 } = await axioss.get("post/lastones");
        setPopularOnesPostData(data2);
        console.log(data2);
      } catch (err) {
        // Handle errors
      }
    };

    getHomePageDataPopular();
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
          <div key={i} className="home-page-popular-cards">
            <div className="hppc-image">
              <img src={el.image} alt="" />
            </div>
            <span className="hppc-subtext">
              By &nbsp;
              <span>
                {el?.user?.first_name || "John"} &nbsp;
                {el?.user?.last_name || "Doe"}
              </span>
              {el?.category?.updatedAt?.split("T")[0]}
            </span>
            <h4 className="hppc-title">{el?.title}</h4>
            <p className="hppc-text">{el?.description}</p>
          </div>
        ))}
      </Slider>
    </Fragment>
  );
};

export default HomePagePopularCards;

