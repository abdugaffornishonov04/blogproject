import { useEffect, useState } from "react";
import AllPostsCards from "../components/cards/AllPostsCards";
import axioss from "../server";

const AllPostsPage = () => {
  const [appData, setAppData] = useState([]);
  const [aPSearch, setAPSearch] = useState("");

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

  // Handle search input changes
  const handleApSearch = (event) => {
    setAPSearch(event.target.value);
  };

  console.log(aPSearch);

  // Filter appData based on the search input
  const filteredData = appData.filter((item) =>
    item.title.toLowerCase().includes(aPSearch.toLowerCase())
  );

  return (
    <section className="all-posts-page container">
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
        <AllPostsCards data={filteredData} />
      </div>
    </section>
  );
};

export default AllPostsPage;

// on the way of pagination 




