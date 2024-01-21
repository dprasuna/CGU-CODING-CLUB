import React, { useEffect } from "react";
import ReactGA from "react-ga";
import "./about.css";

const about = () => {
  const handleWebClicks = (webLink) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: webLink,
    });
    window.open(webLink);
  };
  useEffect(() => {
    document.title = "About Us";
    const observer = new IntersectionObserver(
      (entryies) => {
        entryies.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id == "about-left")
              entry.target.classList.add("aboutScrollAnimateLeft");
            if (entry.target.id == "about-right")
              entry.target.classList.add("aboutScrollAnimateRight");
          }
        });
      },
      {
        threshold: 1,
      }
    );
    const divs = document.querySelectorAll(
      ".foundation-title,.foundation-description,.about-srmvec-title,.about-srmvec-description,.about-csi-title,.about-csi-description,.about-whitehatians-title,.about-whitehatians-description"
    );
    divs.forEach((div) => observer.observe(div));
  });

  return (
    <React.Fragment>
      <div id="about" className="parent-about">
        <h1 className="about-title">About Us</h1>
        <div className="foundation">
          <div className="foundation-title " id="about-right">
            <img
              src="/images/download.png"
              alt="cgu.png"
              className="about-srm-logo"
            />
            Foundation Day Celebration
            <img
              src="/images/cgu.jpg"
              alt="srmvec logo"
              className="about-srmvec-logo"
            />
          </div>
          <div className="foundation-description" id="about-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam minus quis velit suscipit hic corrupti, excepturi laborum ratione odio atque fuga sit, rem eaque animi voluptatem voluptatibus tenetur ipsa dolor?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus ipsam asperiores sed perspiciatis dolorem, sunt, pariatur hic molestias delectus obcaecati officiis, omnis optio consequatur sequi! Fugiat suscipit eum tempore sit?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate voluptates corrupti optio. Provident labore accusamus ipsam commodi aliquam optio at saepe obcaecati, architecto laboriosam reprehenderit quaerat aliquid, nesciunt, enim maiores?
          </div>
        </div>

        <div className="srmvec">
          <div
            className="about-srmvec-title "
            id="about-left"
            onClick={() => handleWebClicks("https://cgu-odisha.ac.in/")}
          >
            <img
              className="about-srmvec-logo"
              src="/images/cgu.jpg"
              alt="srmvec logo"
            />
            About Srmvec
          </div>
          <div className="about-srmvec-description" id="about-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dignissimos ut vel fugit. Quidem maxime recusandae eum veniam fugiat. Earum amet sed at in quibusdam repellendus repellat cupiditate excepturi ipsum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus magni atque asperiores ducimus debitis expedita incidunt. Excepturi est tenetur vero nam minus earum voluptates eum dolores itaque! Praesentium, similique.
          </div>
        </div>
        <div className="csi">
          <div
            className="about-csi-title"
            id="about-right"
            onClick={() => handleWebClicks("https://cgu-odisha.ac.in/")}
          >
            <img
              className="about-csi-logo"
              src="/images/download.png"
              alt=""
            />
            About Club
          </div>
          <div className="about-csi-description" id="about-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nobis illum ipsum saepe veniam illo soluta aliquid error autem numquam quae magnam eum, odio repudiandae voluptatibus omnis minima consectetur mollitia?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dignissimos eum atque voluptatibus itaque beatae. Numquam hic, sit officiis asperiores autem doloremque veniam facere culpa aspernatur nam quaerat repudiandae iusto!

          </div>
        </div>
        <div className="whitehatians">
          <div
            className="about-whitehatians-title"
            id="about-left"
            onClick={() => handleWebClicks("https://cgu-odisha.ac.in/")}
          >
            <img
              className="about-whitehatians-logo"
              src="/images/cgu.jpg"
              alt="whitehatians logo"
            />
            About CGU CODING CLUB
          </div>
          <div className="about-whitehatians-description" id="about-right">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil amet similique deserunt architecto voluptatem sunt alias! Omnis doloribus dolores illo! Quia nemo impedit delectus, amet cupiditate illo eaque ea nesciunt?
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, nulla. Voluptatum aliquid rerum delectus corrupti esse excepturi cum adipisci id maxime, blanditiis minima, obcaecati neque, dolorem reiciendis ipsa animi provident.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default about;
