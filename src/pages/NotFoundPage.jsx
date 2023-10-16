import HomePageCategoryCards from "../components/cards/HomePageCategoryCards"

const NotFoundPage = () => {
  return (
    <section className="notFound-page">
      Hmm... seems like the page you are lead is not found,
      maybe you should log in?
      <HomePageCategoryCards/>
    </section>
  )
}

export default NotFoundPage