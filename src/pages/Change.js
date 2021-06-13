import { Layout } from "antd";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import Change from "../components/Change";

const { Header, Content, Footer } = Layout;

function ChangePassWord() {
  return (
    <Layout className="container main-layout">
      <Layout className="bg-gray main-area">
        <Header className="layout-header">
          <AppHeader title="Profile Page" />
        </Header>
        <Content className="login-backgrund">
          <Change />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default ChangePassWord;