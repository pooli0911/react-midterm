import { useContext } from "react";
import { Link } from "react-router-dom";
import { SET_HOME_IMAGE, SET_NAVBAR_ACTIVEITEM,SET_COOKIE_IMAGE } from "../utils/constants"
import { StoreContext } from "../store"
import battle from "../json/home_img1.json"
import kingdom from "../json/home_img2.json"
import adventure from "../json/home_img3.json"
import cookie from "../json/home_img4.json"
import pvp from "../json/home_img5.json"
import adCookie from "../json/ad.json"
import attackCookie from "../json/attack.json"
import bumpCookie from "../json/bump.json"
import flyattackCookie from "../json/flyattack.json"
import healCookie from "../json/heal.json"
import magicCookie from "../json/magic.json"
import supCookie from "../json/support.json"
import tankCookie from "../json/tank.json"

export default function NavItem(props){
   const { children, to, className, activeClassName } = props
   const { state, dispatch } = useContext(StoreContext);
   const getJSON = url => {
       switch(url){
           case "/home/battle":
               return battle;
           case "/home/kingdom":
               return kingdom;
           case "/home/adventure":
               return adventure;
           case "/home/cookie":
               return cookie;
           case "/home/pvp":
               return pvp;
           default:
               return battle;
       }
   }
   const getCookie = url =>{
       switch(url){
           case "/cookie/adcarry":
               return adCookie;
            case "/cookie/attack":
                return attackCookie;
            case "/cookie/bump":
                return bumpCookie;
            case "/cookie/fly_attack":
                return flyattackCookie;
            case "/cookie/heal":
                return healCookie;
            case "/cookie/magic":
                return magicCookie;
            case "/cookie/support":
                return supCookie;
            case "/cookie/tank":
                return tankCookie;
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
   dispatch({
       type:SET_COOKIE_IMAGE,
       payload:getCookie(to),
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