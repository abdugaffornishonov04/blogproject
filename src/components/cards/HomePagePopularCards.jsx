import { Fragment, useEffect, useState } from "react";
import axioss from "../../server";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

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
    centerPadding: "20px",
    autoplay: true,
  };

  return (
    <Fragment>
      <Slider {...slickSettings}>
        {popularOnesPostData.map((el, i) => (
          <div
            style={{ marginLeft: "10px" }}
            key={i}
            className="home-page-popular-cards"
          >
            <div className="hppc-image">
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
            <span className="hppc-subtext">
              By &nbsp;
              <span>
                {el?.user?.first_name || "John"} &nbsp;
                {el?.user?.last_name || "Doe"}
              </span>
              &nbsp;
              {el?.category?.updatedAt?.split("T")[0]}
            </span>
            <h4 className="hppc-title">{el?.title.slice(0, 17)}</h4>
            <p className="hppc-text">{el?.description.slice(0, 70)}</p>
            <Link className="hppc-link-to" to={`blogpost/${el._id}`}>
              See the post...
            </Link>
          </div>
        ))}
      </Slider>
    </Fragment>
  );
};

export default HomePagePopularCards;

// apparently   dome

// changing the style of

// apparently done 1 23 4 5 6

// one the way to get the images
