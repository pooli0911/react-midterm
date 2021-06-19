import { Layout } from "antd";
import * as QueryString from "query-string";
import React, { useState, useEffect } from 'react';

import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import LoginCard from "../components/LoginCard";
import HamMenu from "../components/hammenu"

const { Header, Content, Footer } = Layout;

function Login(props) {
    const { redirect } = QueryString.parse(props.location.search);
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
            <LoginCard redirect={redirect} />
          </Content>
          <Footer className="layout-footer">
            <AppFooter />
          </Footer>
        </Layout>
      </Layout>
    );
  }
  
  export default Login;