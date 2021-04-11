import { useContext } from "react";
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import Top from "../components/Main"


import { StoreContext } from "../store"


const { Header, Content, Footer } = Layout;
function Home(){
    return(
        <Layout className="container main-layout">
            <Layout >
             <Header className="layout-header">
                <AppHeader/>
             </Header>
             <Content className="layout-content">
                 <Top/>
             </Content>
             <Footer className="layout-footer">
                <AppFooter />
             </Footer>
            </Layout>
        </Layout>
    );
}

export default Home;