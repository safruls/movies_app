import React from "react";
import styled from "@emotion/styled";
import { cx, css } from "@emotion/css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import MenuRender from "components/MenuRender/index";

const { Sider, Content } = Layout;

const Index = ({ children }) => {
  return (
    <Container>
      <Layout style={{ height: "100vh" }}>
        <Sider collapsible breakpoint="lg" collapsedWidth="0">
          <LogoPanel>
            <h2>Movies Search</h2>
          </LogoPanel>
          <MenuRender />
        </Sider>
        <Layout
          style={{ height: "100vh" }}
          className={cx(css`
            background-color: #e8e8e8;
            overflow-x: auto;
          `)}
        >
          <Content style={{ margin: "20px 15px" }}>{children}</Content>
        </Layout>
      </Layout>
    </Container>
  );
};

export default Index;

const Container = styled.div`
  background-color: #e8e8e8;
`;

const LogoPanel = styled.div`
  height: 40px;
  margin: 16px;
  padding: 10px 0 0 0;
  background: rgba(255, 255, 255, 0.2);
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;

  & h2 {
    color: white !important;
  }
`;
