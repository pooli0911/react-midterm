import { Layout } from "antd";
import React, { useState, useEffect } from 'react';
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import ProfileCard from "../components/ProfileCard";

const { Header, Content, Footer } = Layout;

function Profile() {
  const [isOnTouch, setIsOnTouch] = useState(false);
  return (
    <Layout className="container main-layout">
      <Layout className="bg-gray main-area">
        <HamMenu
            onClick={() => setIsOnTouch(!isOnTouch)}
            isOnTouch={isOnTouch}
        />
        <Header className="layout-header">
          <AppHeader  isOnTouch={isOnTouch} />
        </Header>
        <Content className="login-backgrund">
          <ProfileCard />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Profile;