import { useParams } from "react-router-dom";

const NotFoundPage = () => {
  const { "*": accountValue } = useParams();
  console.log(accountValue);
  return (
    <section className="notFound-page">
      <p className="nf-text">Hmm... 🤔</p>
      <p className="nf-info">
        Seems like you are trying to get to a page that does not exist or or to
        which <mark>You are not allowed before Logging in</mark>. You may
        consider going back to Home page or Logging in! <br />
        We could not find a page with the url: <br />{" "}
        <span>{`"${accountValue}"`}</span> <br />
      </p>
    </section>
  );
};

export default NotFoundPage;
