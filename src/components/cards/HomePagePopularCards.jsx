import  { Fragment, useEffect, useState } from "react";
import axioss from "../../server";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const HomePagePopularCards = () => {
  const navigate = useNavigate()
  const [popularOnesPostData, setPopularOnesPostData] = useState([]);

  useEffect(() => {
    const getHomePageDataPopular = async () => {
      try {
        const { data: data2 } = await axioss.get("post/lastones");
        setPopularOnesPostData(data2);
        console.log(data2);

        // const { data: data3 } = await axioss.get(
        //   `upload/${}.jpg`
        // );
      } catch (err) {
        // Handle errors
      }
    };

    getHomePageDataPopular();
  }, []);

  const directToBlog = (id) => {
    navigate(`blogpost/${id}`)
  }

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Number of slides to show at once
    slidesToScroll: 1,
    centerPadding: "20px",
};


  return (
    <Fragment>
      <Slider {...slickSettings}>
        {popularOnesPostData.map((el, i) => (
          <div style={{marginLeft: '10px'}} onClick={() => directToBlog(el._id)} key={i} className="home-page-popular-cards">
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

// apparently   dome

