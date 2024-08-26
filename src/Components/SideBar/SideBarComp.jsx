import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./SideBar.css";
import pic1 from "../../Assets/samsung.png";
import BlackGuarantee from "../../Assets/GuranteeBlackCanva.jpg";
import getDone from "../../Assets/GetDoneWhite.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const SideBarComp = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div className="sidebar">
      <Container>
        <div className="sidebar-content">
          <h2 className="text-center">
            Collect Your Memories Back! <hr />
          </h2>
        </div>
        <div className="sidebars">
          <div
            className="sides d-lg-flex justify-content-between"
            data-aos="fade-left"
          >
            <div className="left-sidebar">
              <img src={pic1} alt="sidebar-img" />
            </div>
            <div className="right-sidebar">
              <h4 className="fw-bolder mt-5">Mobile Care</h4>
              <p className="mobilecare">
                80% of people "Never" buy a new mobile often..Not because mobile
                phone is as costly as gold. <br />
                There is an emotional connect to the first mobile we use and
                People like you and me never abandon old one for the new one.{" "}
                <br />
                Are you the one with same mindset if yes , then congrats welcome
                to the emotional enterprises
                <br />
                <span>"OLD IS ALWAYS GOLD"</span>
              </p>
            </div>
          </div>

          <div
            className="sides d-lg-flex justify-content-between mt-5 pt-5"
            data-aos="fade-right"
          >
            <div className="left-sidebar">
              <h4 className="fw-bolder">Satisfaction Guarantee</h4>
              <p>
                Satisfaction is the bond between you and me, Your work will
                never be taken as granted, get your work done by the fixed time
                to sevice your mobile.
              </p>
            </div>
            <div className="right-sidebar">
              <img
                src={BlackGuarantee}
                alt="sidebar-img"
                className="blackGuarantee"
              />
            </div>
          </div>

          <div
            className="sides d-lg-flex justify-content-between"
            data-aos="fade-down"
          >
            <div className="left-sidebar">
              <img src={getDone} alt="sidebar-img" className="getDone" />
            </div>
            <div className="right-sidebar">
              <h4 className="fw-bolder mt-5  text-uppercase">Now</h4>
              <p className="lh-lg ">
                There is no Later it's only Now for us, <br />
                Not only to build service with you It's important to build trust
                with you, <br />
                A small lesson that I learned through 10years of my buisness
                career is "Never Carry the Load to the Next day" <br /> just do
                it Now !.. there will be never a word{" "}
                <span className="text-linethrough">Later</span>
                <br />
                <span>
                  "No worries get your work done by picking a date with us"
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SideBarComp;
