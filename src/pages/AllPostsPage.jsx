import AllPostsCards from "../components/cards/AllPostsCards";

const AllPostsPage = () => {
  return (
    <section className="all-posts-page">
      <div className="app-search">
        <input type="search" placeholder="Searching ..." />
      </div>
      <h2 className="app-title">All posts</h2>
      <div className="app-cards-wrapper">
        <AllPostsCards />
        <AllPostsCards />
        <AllPostsCards />
        <AllPostsCards />
      </div>
    </section>
  );
};

export default AllPostsPage;
