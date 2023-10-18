import { Fragment, useEffect, useState } from "react";
import axioss from "../../server";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const HomePageCategoryCards = () => {
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



  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay:true,
  };

  return (
    <Fragment>
      <Slider {...slickSettings}>
        {popularOnesPostData.map((el, i) => (
          <div key={i} className="hpc-category-cards">
            <div className="hpccc-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStbLIpn3aJSwpeFlX7tfLUZJp-S50s5Kdl2g&usqp=CAU"
                alt="category image"
              />
            </div>
            <h4 className="hpccc-title">{el.name}</h4>
            <p className="hpccc-desc">
              {/* {el._id} */}
              {el.description.slice(0, 40)}
            </p>
            <Link className="hpccc-kink-to" to={`/category/${el._id}`}>See the category...</Link>
          </div>
        ))}
      </Slider>
    </Fragment>
  );
};

export default HomePageCategoryCards;

// apparently done

//  changin link 12 3 423 54 3433443
