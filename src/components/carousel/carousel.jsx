import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleCarousel = () => {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const carouselItems = [
    { title: "Item 1", content: "This is item 1" },
    { title: "Item 2", content: "This is item 2" },
    { title: "Item 3", content: "This is item 3" },
    { title: "Item 4", content: "This is item 4" },
    { title: "Item 5", content: "This is item 5" },
  ];

  return (
    <div className="simple-carousel">
      <h3 className="carousel-title">Simple Carousel</h3>
      <Slider {...slickSettings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-item">
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleCarousel;
