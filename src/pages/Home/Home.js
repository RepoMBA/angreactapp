import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
// import "../../assets/css.Home.css";
import UserService from "../services/user.service";
//images
import bannerBg from "../images/hero-area/banner-bg.png";
import bannerImg from "../images/hero-area/banner-img.png";
import featureBg1 from "../images/background-shape/feature-bg-1.png";
import featureBg2 from "../images/background-shape/feature-bg-2.png";
import seoBall1 from "../images/background-shape/seo-ball-1.png";
import seoBall2 from "../images/background-shape/seo-ball-2.png";
import seoHalfCycle from "../images/background-shape/seo-half-cycle.png";
import greenDot from "../images/background-shape/green-dot.png";
import blueDot from "../images/background-shape/blue-dot.png";
import blueHalfCycle from "../images/background-shape/blue-half-cycle.png";
import yellowTriangle from "../images/background-shape/yellow-triangle.png";
import serviceHalfCycle from "../images/background-shape/service-half-cycle.png";
import greenHalfCycle from "../images/background-shape/green-half-cycle.png";
import teamBgTriangle from "../images/background-shape/team-bg-triangle.png";
import Marketing from "../images/marketing/marketing.png";
import seoBg from "../images/backgrounds/seo-bg.png";
import footerBg from "../images/backgrounds/footer-bg.png";
import Logo from "../images/logo.png";

// labels objects
import {
  heroLabels,
  pricingLabels,
  featureLabels,
  footerLabels,
  marketingLabels,
  aboutLabels,
} from "../../constants/home.components.labels_constant";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  render() {
    if (localStorage.getItem("accessToken")) {
      return <Redirect to={"/dashboard"} />;
    }
    return (
      <div className="container-fluid px-0">
        {/* <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header> */}

        {/* <!-- hero area --> */}
        <section
          class="hero-section hero"
          data-background=""
          style={{ backgroundImage: `url(${bannerBg})` }}
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center zindex-1">
                <h1 class="mb-0">{heroLabels.mainHeading1}</h1>
                <h1 class="mb-3">{heroLabels.mainHeading2}</h1>
                <p class="mb-4">{heroLabels.text1}</p>
                <Link to="/register" class="btn btn-secondary btn-lg">
                  {heroLabels.buttonLabel1}
                </Link>
                {/* <!-- banner image --> */}
                <img
                  class="img-fluid w-100 banner-image"
                  src={bannerImg}
                  alt="banner-img"
                />
              </div>
            </div>
          </div>
          {/* <!-- background shapes --> */}
          <div id="scene">
            <img
              class="img-fluid hero-bg-1 up-down-animation"
              src={featureBg2}
              alt=""
            />
            <img
              class="img-fluid hero-bg-2 left-right-animation"
              src={seoBall1}
              alt=""
            />
            <img
              class="img-fluid hero-bg-3 left-right-animation"
              src={seoHalfCycle}
              alt=""
            />
            <img
              class="img-fluid hero-bg-4 up-down-animation"
              src={greenDot}
              alt=""
            />
            <img
              class="img-fluid hero-bg-5 left-right-animation"
              src={blueHalfCycle}
              alt=""
            />
            <img
              class="img-fluid hero-bg-6 up-down-animation"
              src={seoBall1}
              alt=""
            />
            <img
              class="img-fluid hero-bg-7 left-right-animation"
              src={yellowTriangle}
              alt=""
            />
            <img
              class="img-fluid hero-bg-8 up-down-animation"
              src={serviceHalfCycle}
              alt=""
            />
            <img
              class="img-fluid hero-bg-9 up-down-animation"
              src={teamBgTriangle}
              alt=""
            />
          </div>
        </section>
        {/* <!-- feature --> */}
        <section class="section feature mb-0" id="feature">
          <div id="feature" class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 class="section-title">{featureLabels.mainHeading1}</h2>
                <p class="mb-100">{featureLabels.text1}</p>
              </div>
              {/* <!-- feature item --> */}
              {featureLabels.featureItems.map((itemsVal) => {
                return (
                  <div class="col-md-6 mb-80">
                    <div class="d-flex feature-item">
                      <div>
                        <i className={`${itemsVal.icon} feature-icon mr-4`}></i>
                      </div>
                      <div>
                        <h4>{itemsVal.subHeading}</h4>
                        <p>{itemsVal.content}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <img
            class="feature-bg-1 up-down-animation"
            src={featureBg1}
            alt="bg-shape"
          />
          <img
            class="feature-bg-2 left-right-animation"
            src={featureBg2}
            alt="bg-shape"
          />
        </section>
        {/* <!-- /feature --> */}

        {/* <!-- marketing --> */}
        <section class="section-lg seo">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="seo-image">
                  <img class="img-fluid" src={Marketing} alt="form-img" />
                </div>
              </div>
              <div class="col-md-5">
                <h2 class="section-title">{marketingLabels.mainHeading}</h2>
                <p>{marketingLabels.text1}</p>
                <p>{marketingLabels.text2}</p>
              </div>
            </div>
          </div>
          {/* <!-- background image --> */}
          <img class="img-fluid seo-bg" src={seoBg} alt="seo-bg" />
          {/* <!-- background-shape --> */}
          <img
            class="seo-bg-shape-1 left-right-animation"
            src={seoBall1}
            alt="bg-shape"
          />
          <img
            class="seo-bg-shape-2 up-down-animation"
            src={seoHalfCycle}
            alt="bg-shape"
          />
          <img
            class="seo-bg-shape-3 left-right-animation"
            src={seoBall2}
            alt="bg-shape"
          />
        </section>
        {/* <!-- /marketing --> */}

        {/* <!-- pricing --> */}
        <section class="section-lg pb-0 pricing" id="pricing">
          <div id="pricing" class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 class="section-title">{pricingLabels.mainHeading}</h2>
                <p class="mb-50">{pricingLabels.text}</p>
              </div>
              <div class="col-lg-10 mx-auto">
                <div class="row justify-content-center">
                  {/* <!-- pricing table --> */}
                  {pricingLabels.pricingTable.map((tableData, index) => {
                    return (
                      <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div
                          className={`rounded text-center pricing-table table-${
                            index + 1
                          }`}
                        >
                          <h3>{tableData.type}</h3>
                          <h1>
                            <span>{tableData.currencyType}</span>
                            {tableData.price}
                          </h1>
                          <p>
                            {tableData.desc} <br />
                            <br />
                          </p>
                          <a href="#" class="btn pricing-btn px-2">
                            {tableData.linkText}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- background shapes --> */}
          <img
            class="pricing-bg-shape-1 up-down-animation"
            src={seoBall1}
            alt="background-shape"
          />
          <img
            class="pricing-bg-shape-2 up-down-animation"
            src={seoHalfCycle}
            alt="background-shape"
          />
          <img
            class="pricing-bg-shape-3 left-right-animation"
            src={teamBgTriangle}
            alt="background-shape"
          />
        </section>
        {/* <!-- /pricing --> */}

        {/* <!-- about us --> */}
        <section class="section-lg about pb-0" id="aboutus">
          <div id="about" class="container">
            <div class="row">
              <div class="col-lg-12">
                <h2 class="section-title">About us</h2>
              </div>
              <div class="col-lg-12 mb-100">
                <p>
                  Angootha is world’s first platform which allows to create your
                  signature on blockchain; manage and track signatures done on
                  any documents.
                </p>
                <p>
                  At present most enterprises use PDFs for creating business
                  documents. Generally, the security features of the PDF
                  included password protection, digital signatures, and
                  encryption for creation of the document. Electronic signatures
                  can be added to PDF for signing of the document. Depending on
                  the hashgraph algorithm used in the PDF files, it is not very
                  difficult to sabotage the protection promised by PDF. It is
                  not very difficult to change the document content and
                  date/time stamp of a PDF document. Thus, even a ‘signed’ PDF
                  can be easily manipulated.
                </p>
                <p>
                  There is additional issue of renewing digital signatures every
                  two years which includes financial costs as well as overheads
                  for the user/signer.
                </p>
                <p>
                  Also, no user right now knows how many times and for which
                  document(s) they have used their signature.
                </p>
                <p>
                  Angootha helps you to create your signature on blockchain,
                  which is different from your govt issues documents, sllows you
                  to sign a document digitally and keep a track of it. Since the
                  whole transaction happens on blockchain, autehnticity and data
                  security is ensured automatically.
                </p>
                <p>
                  Welcome to the world of Angootha. Make your signatures safe.
                </p>
              </div>
              <div class="col-lg-12">
                {/* <!-- about video --> */}

                {/* <div class="about-video">
          <img class="img-fluid w-100" src="images/about/video-thumb.jpg" alt="video-thumb">
          <a class="venobox play-btn" href="https://www.youtube.com/watch?v=eq3YUfn2SQE" data-vbtype="iframe"><i class="ti-control-play"></i></a>
        </div>
		 */}
              </div>
            </div>
          </div>
          {/* <!-- background shapes --> */}
          <img
            src={greenDot}
            alt="background-shape"
            class="about-bg-1 up-down-animation"
          />
          <img
            src={blueDot}
            alt="background-shape"
            class="about-bg-2 left-right-animation"
          />
          <img
            src={greenHalfCycle}
            alt="background-shape"
            class="about-bg-3 up-down-animation"
          />
          <img
            src={seoBall1}
            alt="background-shape"
            class="about-bg-4 left-right-animation"
          />
          <img
            src={teamBgTriangle}
            alt="background-shape"
            class="about-bg-5 up-down-animation"
          />
          <img
            src={serviceHalfCycle}
            alt="background-shape"
            class="about-bg-6 left-right-animation"
          />
        </section>
        {/* <!-- /about us --> */}

        {/* <!-- footer --> */}
        <footer
          class="footer-section footer"
          // style="background-image: url(images/backgrounds/footer-bg.png);"
          style={{ backgroundImage: `url(${footerBg})` }}
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-4 text-center text-lg-left mb-4 mb-lg-0">
                {/* <!-- logo --> */}
                <a href="#">
                  <img class="img-fluid" src={Logo} alt="logo" />
                </a>
              </div>
              {/* <!-- footer menu --> */}
              <nav class="col-lg-8 align-self-center mb-5">
                <ul class="list-inline text-lg-right text-center footer-menu">
                  <li class="list-inline-item active">
                    <Link to="/">Home</Link>
                  </li>
                  <li class="list-inline-item">
                    <a class="page-scroll" href="#feature">
                      Feature
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="page-scroll" href="#pricing">
                      Pricing
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#aboutus">About</a>
                  </li>
                </ul>
              </nav>
              {/* <!-- footer social icon --> */}
              <nav class="col-12">
                <ul class="list-inline text-lg-right text-center social-icon">
                  <li class="list-inline-item">
                    <a class="facebook" href="#">
                      <i class="ti-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="twitter" href="#">
                      <i class="ti-twitter-alt"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="linkedin" href="#">
                      <i class="ti-linkedin"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="black" href="#">
                      <i class="ti-github"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>
        {/* <!-- /footer --> */}
      </div>
    );
  }
}
