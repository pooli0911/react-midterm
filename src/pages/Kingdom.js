import { useContext } from "react";
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import Top from "../components/Main"
import Appcontent from "../components/Content"
import Home_img from "../components/Home_img"
import kingdom from "../json/home_img2.json"

const { Header, Content, Footer } = Layout;
function Kingdom(){
    return(
        <Layout className="container main-layout">
            <Layout >
             <Header className="layout-header">
                <AppHeader/>
             </Header>
             <Content className="layout-content">
                 <Top/>
                 <Appcontent/>
                 <Home_img home_img={kingdom}/>
             </Content>
             <Footer className="layout-footer">
                <AppFooter />
             </Footer>
            </Layout>
        </Layout>
    );
}

export default Kingdom;