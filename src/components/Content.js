import { Link } from "react-router-dom";
import issueImg1 from "../img/home_img/issue.png"
import issueImg2 from "../img/home_img/issue2.png"
import issueImg3 from "../img/home_img/issue3.png"
import issueImg4 from "../img/home_img/issue4.png"
import NavBar from "./NavBar"

export default function Content(){
    return(
        <div className="main-content">
            <div className="hot-issue">
                <div className="hot-issue-text">
                   <p className="hot-issue">HOT ISSUE</p>
                </div>
                <Link className="more">MORE +</Link>
                <div className="hot-issue-img">
                    <Link><img className="issue-img" src={issueImg1}></img></Link>
                    <Link><img className="issue-img" src={issueImg2}></img></Link>
                    <Link><img className="issue-img" src={issueImg3}></img></Link>
                    <Link><img className="issue-img" src={issueImg4}></img></Link>
                </div>
            </div>
            <div className="game-overview">
                <div className="hot-issue-text">
                   <p className="hot-issue">GAME OVERVIEW</p>
                </div>
                <NavBar/>
            </div>
        </div>
    );

}