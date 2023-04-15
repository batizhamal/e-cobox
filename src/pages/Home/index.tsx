import React from "react";

import { Layout } from "antd";
const { Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content" style={{ background: "#ffffff" }}>
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>by Bachatrio</Footer>
    </Layout>
  );
};

export default Home;
