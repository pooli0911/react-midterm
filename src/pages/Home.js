import { useContext } from "react";
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import Top from "../components/Main"
import Appcontent from "../components/Content"
import Home_img from "../components/Home_img"
import Loader from "../components/loader"



import { StoreContext } from "../store"


const { Header, Content, Footer } = Layout;
function Home() {
    const { state: { home_img } } = useContext(StoreContext);
    return (
        <div>
            <Loader />
            <Layout className="container main-layout">
                <Layout >
                    <Header className="layout-header">
                        <AppHeader />
                    </Header>
                    <Content className="layout-content">
                        <Top />
                        <Appcontent />
                        <Home_img home_img={home_img} />
                    </Content>
                    <Footer className="layout-footer">
                        <AppFooter />
                    </Footer>
                </Layout>
            </Layout>
        </div>
    );
}

export default Home;