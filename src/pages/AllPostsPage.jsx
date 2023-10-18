import { useEffect, useState } from "react";
import AllPostsCards from "../components/cards/AllPostsCards";
import axioss from "../server";

const AllPostsPage = () => {
  const [appData, setAppData] = useState([]);
  const [aPSearch, setAPSearch] = useState("");
  const [seeMoreClickedFalse, setSMCFalse] = useState(false);

  useEffect(() => {
    const cpcAxios = async () => {
      try {
        const { data: what } = await axioss.get("post");
        console.log(what);
        setAppData(what.data);

        const { data: what2 } = await axioss.get(`post?search=${aPSearch}`);
        console.log(what2);
      } catch (err) {
        console.error(err);
      }
    };

    cpcAxios();
  }, [aPSearch]);


  const handleApSearch = (event) => {
    setAPSearch(event.target.value);
  };

  console.log(aPSearch);

  const filteredData = appData.filter((item) =>
    item.title.toLowerCase().includes(aPSearch.toLowerCase())
  );

  const firstFour = filteredData.slice(0, 3);

  
  const seeAllClicked = () => {
    setSMCFalse(true)
  }
  const seeAllClickedTwice = () => {
    setSMCFalse(false);
  };
  return (
    <section className="all-posts-page ">
      <div className="app-search">
        <input
          onChange={handleApSearch}
          type="search"
          placeholder="Searching ..."
          value={aPSearch}
        />
      </div>
      <h2 className="app-title">All posts</h2>
      <div className="app-cards-wrapper">
        {seeMoreClickedFalse ? (
          <AllPostsCards data={filteredData} />
        ) : (
          <AllPostsCards data={firstFour} />
        )}

        <div className="see-more-wrapper">
          {seeMoreClickedFalse ? (
            <button className="see-more-app" onClick={seeAllClickedTwice}>
              Show little...
            </button>
          ) : (
            <button className="see-more-app" onClick={seeAllClicked}>
              See All...
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllPostsPage;

// on the way of pagination 
//  start of see more
//  end of see more. 1 2 3 45 6 






