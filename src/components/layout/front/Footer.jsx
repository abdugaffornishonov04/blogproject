const Footer = () => {

  

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-addresses">
          <p>Finstreet 118 2561 Fintown</p>
          <p>Hello@finsweet.com 020 7993 2905</p>
        </div>
        <div className="footer-link-icons">
          <a target="_blank" rel="noreferrer" href="https://t.me/tycoon_me">
            <img src="/facebookicon.svg" alt="facebook icon" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://t.me/tycoon_me">
            <img src="/twittericon.svg" alt="twitter icon" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/_tycoonme">
            <img src="/instagramicon.svg" alt="facebook icon" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/_tycoonme">
            <img src="/linkedinicon.svg" alt="linkedin icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer