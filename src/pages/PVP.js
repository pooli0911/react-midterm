import { useContext } from "react";
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import Top from "../components/Main"
import Appcontent from "../components/Content"
import Home_img from "../components/Home_img"
import pvp from "../json/home_img5.json"


const { Header, Content, Footer } = Layout;
function PVP(){
    return(
        <Layout className="container main-layout">
            <Layout >
             <Header className="layout-header">
                <AppHeader/>
             </Header>
             <Content className="layout-content">
                 <Top/>
                 <Appcontent/>
                 <Home_img home_img={pvp}/>
             </Content>
             <Footer className="layout-footer">
                <AppFooter />
             </Footer>
            </Layout>
        </Layout>
    );
}

export default PVP;