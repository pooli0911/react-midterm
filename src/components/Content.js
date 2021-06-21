import { Link } from "react-router-dom";
import { useEffect } from 'react';
import issueImg1 from "../img/home_img/issue.png"
import issueImg2 from "../img/home_img/issue2.png"
import issueImg3 from "../img/home_img/issue3.png"
import issueImg4 from "../img/home_img/issue4.png"
import NavBar from "./NavBar"
import Aos from "aos";


export default function Content() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <div className="main-content">
            <div className="hot-issue">
                <div className="hot-issue-text">
                    <p className="hot-issue">HOT ISSUE</p>
                </div>
                <Link className="more">MORE +</Link>

                <div className="hot-issue-img">
                    <Link><img data-aos="fade-left" className="issue-img" src={issueImg1}></img></Link>
                    <Link><img data-aos="fade-left" className="issue-img" src={issueImg2}></img></Link>
                    <Link><img data-aos="fade-left" className="issue-img" src={issueImg3}></img></Link>
                    <Link><img data-aos="fade-left" className="issue-img" src={issueImg4}></img></Link>
                </div>

                <Link className="smallmore">MORE +</Link>
            </div>
            <div className="game-overview">
                <div className="hot-issue-text">
                    <p className="hot-issue">GAME OVERVIEW</p>
                </div>
                <NavBar />
            </div>
        </div >
    );

}