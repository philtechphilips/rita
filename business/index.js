const useIntersectionObserver = (callback, options) => {
  const ref = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
};

const TextInputWithButton = () => (
  <div className="input-container animated fadeIn">
    {/* <input type="text" className="text-input" style={{ width: "220px" }} /> */}
    <a
      className="demo-button"
      href="https://calendly.com/johnarts/chat?month=2023-06"
      target="_blank"
    >
      Book a Demo
    </a>
  </div>
);

const Header = () => (
  <div className="navbar__container__fluid animate__animated animate__fadeIn">
    <nav className="navbar__container">
      <div className="header__left">
        <a href="#">
          <img
            src="assets/logo.png"
            alt="Logo"
            width="100%"
            height="20%"
            className="d-inline-block align-top header__left__logo"
          />
        </a>
      </div>
      <div className="navbar__container__button">
        <a
          className="btn btn-mobile-app"
          href="https://ritapersonaldata.com"
          target="_blank"
        >
          Rita Mobile App
        </a>
        <a
          className="btn btn-book-demo hidden__on__mobile"
          href="https://calendly.com/johnarts/chat?month=2023-06"
          target="_blank"
        >
          Book a Demo
        </a>
      </div>
    </nav>
  </div>
);

const Banner = () => (
  <div className="banner__container__fluid">
    <div className="banner__container">
      <div className="banner__left">
        <h3 className="header__three animate__animated animate__fadeInDown">
          Unlike any data you've seen before.
        </h3>
        <p className="text animate__animated animate__fadeInDown">
          We enable digitally native brands with data to track competitor
          strategies, boost conversion rates, and act faster on market changes.
          In an ethical <br />
          and privacy-first way.
        </p>
        <TextInputWithButton />
      </div>
      <div className="banner__right">
        <img src="assets/animationfile.gif" alt="Logo" width="100%" />
      </div>
    </div>
  </div>
);

const HeaderSection = ({ title, subtitle, logo, gradient__one }) => (
  <section
    id="section1"
    className={`section__container animate__animated animate__fadeIn ${gradient__one}`}
  >
    {/* <p className="section__one__section__text">{title}</p> */}
    <h4 className="header__four">{title}</h4>
    <span className="section__text section__one__section__text">
      {subtitle}
    </span>
    {logo}
  </section>
);
const SectionTwo = () => {
  const [isAnimated, setIsAnimated] = React.useState(false);
  const sectionRef = useIntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isAnimated) {
          entry.target.classList.add(
            "animate__animated",
            "animate__fadeInDown"
          );
          setIsAnimated(true);
        } else if (!entry.isIntersecting && isAnimated) {
          entry.target.classList.remove(
            "animate__animated",
            "animate__fadeInDown"
          );
          setIsAnimated(false);
        }
      });
    },
    { rootMargin: "40px", threshold: 0.5 }
  );

  return (
    <section className="section__container section__two">
      <h4 ref={sectionRef} className="header__four gradient__two section__text__on__mobile">
        Find out which Competitors you are losing customers to and why.
      </h4>
      <div className="section__container__image">
        <img src="assets/section_one.svg" alt="Logo" width="100%" />
      </div>
      <p className="section__text">
        Understand customer behaviour outside of your website or app.
      </p>
    </section>
  );
};

const SectionThree = () => {
  const [isAnimated, setIsAnimated] = React.useState(false);
  const sectionRef = useIntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isAnimated) {
          entry.target.classList.add(
            "animate__animated",
            "animate__fadeInDown"
          );
          setIsAnimated(true);
        } else if (!entry.isIntersecting && isAnimated) {
          entry.target.classList.remove(
            "animate__animated",
            "animate__fadeInDown"
          );
          setIsAnimated(false);
        }
      });
    },
    { rootMargin: "40px", threshold: 0.5 }
  );

  return (
    <section className="section__container section__three">
      <h4 ref={sectionRef} className="header__four gradient__four">
        Which Competitor Strategies are Most <br />
        Successful.
      </h4>
      <div className="section__container__image">
        <img src="assets/section_two.svg" alt="Logo" width="100%" />
      </div>
      <p className="section__text section__text__three">
        Benchmark and outshine competitors by tracking their successful
        strategies
      </p>
    </section>
  );
};

const SectionFour = () => (
  <section className="section__container section__text__gradient">
    <h4 className="header__four dont__get__stucked"> Don't get stuck in a limited view.</h4>
    <p className="section__text__secondary">
      You have mastered the art of understanding customer behaviour on your own
      website and app, but what <br />
      about beyond? Drive into the world outside and break free from your vacuum
      of data with Rita.
    </p>
    <img src="assets/section_four_image.svg" alt="Logo" width="30%" />
  </section>
);

const SectionFive = () => {
  const [isAnimated, setIsAnimated] = React.useState(false);
  const sectionRef = useIntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isAnimated) {
          entry.target.classList.add(
            "animate__animated",
            "animate__fadeInDown"
          );
          setIsAnimated(true);
        } else if (!entry.isIntersecting && isAnimated) {
          entry.target.classList.remove(
            "animate__animated",
            "animate__fadeInDown"
          );
          setIsAnimated(false);
        }
      });
    },
    { rootMargin: "40px", threshold: 0.5 }
  );

  return (
    <section className="section__container section__five">
      <h4 ref={sectionRef} className="header__four">
        Tap into zero-party data.
      </h4>
      <div className="section__container__image">
        <img src="assets/section_four.svg" alt="Logo" width="100%" />
      </div>
      <p className="section__five__section__text">
        Tap into Europe's largest pool of ethically sourced data. Rita platform
        rewards
        <br />
        users for their data in a GDPR compliant manner.
      </p>
    </section>
  );
};

const SectionSix = () => {
  React.useEffect(() => {
    $(document).ready(function () {
      $(".owl-carousel").owlCarousel({
        rtl: false,
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 4,
            loop: true,
          },
        },
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        smartSpeed: 1000,
        autoplay: true,
      });
    });
  }, []);

  return (
    <section className="carousel__container__fluid section__six">
      <div className="carousel__container">
        <h4 className="carousel__header">
          Study your market to make informed decisions
        </h4>
        <div className="owl-carousel owl-theme">
          <div className="item">
            <img src="assets/cardone.png" alt="Card One" width="100%" />
          </div>
          <div className="item">
            <img src="assets/cardtwo.png" alt="Card Two" width="100%" />
          </div>
          <div className="item">
            <img src="assets/cardthree.png" alt="Card Three" width="100%" />
          </div>
          <div className="item">
            <img src="assets/cardfour.png" alt="Card Four" width="100%" />
          </div>
          <div className="item">
            <img src="assets/cardfive.png" alt="Card Five" width="100%" />
          </div>
          <div className="item">
            <img src="assets/cardsix.png" alt="Card Six" width="100%" />
          </div>
        </div>
      </div>
    </section>
  );
};

const GetStarted = () => {
  return (
    <div className="get__started__container">
      <div className="get__started__banner__left">
        <h3 className="get__started__header__three animate__animated animate__fadeInDown">
          Get started with Rita Today
        </h3>
        <p className="text animate__animated animate__fadeInDown">
          Explore how the next generation of customers and competitor analytics
          will drive your growth
        </p>
      </div>
      <div className="get__started__banner__right">
        <a
          className="btn btn-primary btn-book-demo"
          href="https://calendly.com/johnarts/chat?month=2023-06"
          target="_blank"
        >
          Book a Demo
        </a>
      </div>
    </div>
  );
};

const SectionSeven = () => (
  <section
    id=""
    className="section__seven__container animate__animated animate__fadeIn"
  >
    <p className="section__seven__text">
      "Holistic view of our customer journey has brought to light behaviours and
      patterns that even our customers are unaware of"
    </p>
  </section>
);

const FooterSection = () => {
  return (
    <div className="footer__container">
      <div className="footer__content">
        <div className="header__left">
          <a href="https://ritapersonaldata.com">
            <img
              src="assets/footer-logo.png"
              alt="L'ogo"
              width="30%"
              height="25%"
              className="d-inline-block align-top footer__logo"
            />
          </a>
          <p className="footer__section__text">Your data in your pocket</p>
          <div className="socials__container">
            <a href="">
              <img src="assets/insta.svg" alt="socials" />
            </a>
            <a href="https://twitter.com/data_rita" target="_blank">
              <img src="assets/twitter.svg" alt="socials" />
            </a>
            <a
              href="https://www.linkedin.com/company/ritapersonaldata/"
              target="_blank"
            >
              <img src="assets/linkedin.svg" alt="socials" />
            </a>
          </div>
        </div>
        {/* <button className="btn btn-primary btn-access-platform"> */}
        <a
          href="https://pz4vmmqvaka.typeform.com/to/f572NX4A"
          className="btn-access-platform"
          id="request-demo"
          target="_blank"
        >
          Access Platform
        </a>
        {/* </button> */}
      </div>
      <div className="separator"></div>
      <div className="copyright__container">
        <p className="footer__section__text">&copy; Rita Data BV 2023</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="">
      <Header />
      <Banner />
      <HeaderSection
        title={`"${`We've gained remarkable insights since working with Rita.`}"`}
        subtitle="Stefan Platteau, Head of Analytics at Hellofresh"
        logo={
          <img
            src="assets/hello_fresh.svg"
            alt="Logo"
            width="100%"
            className="headers__section__logo"
          />
        }
        gradient__one="gradient__one"
      />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <HeaderSection
        title={`"${`Rita opens up unprecedented levels of online behavioural insight – it’s a gold mine!`}"`}
        subtitle="Nyssa Packard, Senior Director of Insights, Skyscanner"
        logo={<img src="assets/skyscanner.svg" alt="Logo" width="100%" className="headers__section__logo" />}
      />
      <GetStarted />
      {/* <SectionSeven /> */}
      <FooterSection />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
