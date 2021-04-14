import { useContext } from "react";
import { Link } from "react-router-dom";
import { SET_HOME_IMAGE, SET_NAVBAR_ACTIVEITEM } from "../utils/constants"
import { StoreContext } from "../store"
import battle from "../json/home_img1.json"
import kingdom from "../json/home_img2.json"
import adventure from "../json/home_img3.json"
import cookie from "../json/home_img4.json"
import pvp from "../json/home_img5.json"

export default function NavItem(props){
   const { children, to, className, activeClassName } = props
   const { state, dispatch } = useContext(StoreContext);
   const getJSON = url => {
       switch(url){
           case "/battle":
               return battle;
           case "/kingdom":
               return kingdom;
           case "/adventure":
               return adventure;
           case "/cookie":
               return cookie;
           case "/pvp":
               return pvp;
           default:
               return battle;
       }
   }
   const onClick = () => {
     console.log(children)
   
   dispatch({
    type: SET_HOME_IMAGE, 
    payload: getJSON(to),
   });
   dispatch({
    type: SET_NAVBAR_ACTIVEITEM, 
    payload: to,
   });
};
return (
    <Link to={to}>
       <div
          onClick={onClick}
          className={`
          ${className} 
          ${state.navBar.activeItem === to ? activeClassName : ""}`}
       >
          {children}
       </div>
    </Link>
    );

}