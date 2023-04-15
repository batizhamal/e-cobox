import React from "react";
import { Layout } from "antd";
import "./index.scss";
import img from "../../assets/bins.jpeg";
import img1 from "../../assets/truck.jpeg";
const { Footer } = Layout;

const Home = () => {
  return (
    <>
      <div className="home--content">
        <div className="home--full-img-container">
          <img className="home--full-img" src={img} />
          <div className="home--full-img-overlay">
            <div className="home--title">Free Garbage Collection</div>
            <div className="home--subtitle">
              Buy an eco box and protect nature for free
            </div>
          </div>
        </div>

        <div className="space"></div>

        <div className="home--ant-row">
          <div className="home--ant-col">
            <p className="home--info">
              Sed pulvinar dolor ex, et elementum nibh aliquam nec. Phasellus
              vitae aliquet velit, et convallis magna. Etiam nibh nisi, iaculis
              eu tempus eu, placerat quis sapien. Curabitur nec erat venenatis,
              aliquam ligula nec, volutpat ex. Fusce lacinia leo dolor, vel
              pharetra lacus ultrices accumsan. Proin tincidunt dictum arcu at
              fringilla. Suspendisse auctor lacus a congue vehicula. Donec
              hendrerit dictum tortor a hendrerit. Nam eu mauris in lectus
              scelerisque commodo. Proin ut magna eget massa mollis condimentum.
              Etiam lobortis orci vitae lobortis scelerisque. Vestibulum
              condimentum nibh eu sapien efficitur consectetur. Fusce
              sollicitudin enim et tellus bibendum pretium eu in libero.
            </p>
          </div>
          <div className="home--ant-col">
            <img className="home--img" src={img1} />
          </div>
        </div>

        <div className="space"></div>
      </div>

      <Footer style={{ textAlign: "center" }}>by Bachatrio</Footer>
    </>
  );
};

export default Home;
