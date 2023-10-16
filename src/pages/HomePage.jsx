import { Link } from "react-router-dom";
import axioss from "../server";
import { useEffect, useState } from "react";
import HomePagePopularCards from "../components/cards/HomePagePopularCards";
import HpccHolder from "../components/Holder/HpccHolder";
// import HomePageCategoryCards from "../components/cards/HomePageCategoryCards";
// import axios from "axios";

const HomePage = () => {
  const [lastPostData, setLastPostData] = useState({});
  // const [theImageData, settheImageData] = useState("")
  // const [homePagebackground, setHomePageBackground] = useState("");

  useEffect(() => {
    const getHomePageData = async () => {
      try {
        const { data: postData } = await axioss.get("post/lastone");
        setLastPostData(postData);

        // const { data: imageData } = await axios.get(
        //   "https://ap-blog-backend.up.railway.app/upload/652ba7f68250799c53132b10.jpg"
        // );
        // console.log(imageData);
        // settheImageData(imageData)

        // Set the image data to homePagebackground
        // setHomePageBackground(`url(${imageData})`);
      } catch (err) {
        // console.log(err);
      }
    };

    getHomePageData();

    // console.log(lastPostData);
  });

  return (
    <section className="home-page">
      <div className="">
        <div className="home-page-wrapper">
          {/* hero */}

          <div
            className="home-page-hero"
            // style={{ backgroundImage: homePagebackground }}
            style={{
              backgroundImage: `${"/public/gp-hero-bg.png"}`, // Set the image data here
              backgroundSize: "cover", // You can customize other background properties here
              backgroundRepeat: "no-repeat",
            }}
          >
            <p className="hp-hero-subtext">
              posted on <span>startup</span>
            </p>
            <h2 className="hp-hero-title">{lastPostData.title}</h2>
            <p className="hp-hero-info">
              By &nbsp;
              <span>
                {lastPostData?.user?.first_name || "John"} &nbsp;
                {lastPostData?.user?.last_name || "Doe"}
              </span>
              | {lastPostData?.category?.updatedAt?.split("T")[0]}
            </p>
            <p className="hp-hero-description">{lastPostData.description}</p>
            <Link
              to={`blogpost/:${lastPostData?._id}`}
              className="hp-hero-link-end"
            >
              Read More {">"}
            </Link>
          </div>

          {/* popular blogs */}

          <div className="home-page-popular-blogs container">
            <h3 className="hppb-title">Popular blogs</h3>
            <div className="hppb-cards">
              <HomePagePopularCards />
            </div>
          </div>

          {/* category */}

          <div className="home-page-category container">
            <h2 className="hpc-title">Choose A Catagory</h2>
            <div className="hpc-cards">
              <HpccHolder />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;

// styles done for hero 1 2 3 4 5 6
// except for the responsive one

// all styles done. yeah responsive is still yet to be styles

// starting bringing the data

// before adding slick which is slider 1 2 4 5 6 7 8 9 10 11 n
//  slider of popular cards is done 1 2 3  4 5  6
