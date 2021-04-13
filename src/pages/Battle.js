import { useContext } from "react";
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import Top from "../components/Main"
import Appcontent from "../components/Content"
import Home_img from "../components/Home_img"
import battle from "../json/home_img1.json"

const { Header, Content, Footer } = Layout;
function Battle(){
    return(
        <Layout className="container main-layout">
            <Layout >
             <Header className="layout-header">
                <AppHeader/>
             </Header>
             <Content className="layout-content">
                 <Top/>
                 <Appcontent/>
                 <Home_img home_img={battle}/>
             </Content>
             <Footer className="layout-footer">
                <AppFooter />
             </Footer>
            </Layout>
        </Layout>
    );
}

export default Battle;