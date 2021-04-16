import { useContext } from "react";
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import CookieNavBar from "../components/Cookie-navBar"
import CookieDetail from "../components/CookieDetail"
import left from "../img/otherimg/leftarrow.png"
import right from "../img/otherimg/rightarrow.png"


import { StoreContext } from "../store"




const { Header, Content, Footer } = Layout;
function Cookie() {

    const { state: { cookie } } = useContext(StoreContext);
    return (
        <Layout className="container main-layout">
            <Layout >
                <Header className="layout-header">
                    <AppHeader />
                </Header>
                <Content className="cookie-content">
                    <CookieNavBar />
                    <CookieDetail cookies={cookie} />
                    <img className="arrow left-arrow" src={left}></img>
                    <img className="arrow right-arrow" src={right}></img>
                </Content>
                <Footer className="layout-footer">
                    <AppFooter />
                </Footer>
            </Layout>
        </Layout>
    );
}

export default Cookie;