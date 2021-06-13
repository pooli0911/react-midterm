import { createContext, useReducer } from "react";
import useReducerWithThunk from 'use-reducer-thunk';
import {
   SET_HOME_IMAGE,
   SET_NAVBAR_ACTIVEITEM,
   SET_COOKIE_IMAGE,
   ADD_TEAM_ITEM,
   REMOVE_TEAM_ITEM,
   EMPTY_CART,
   BEGIN_COOKIES_FEED,
   SUCCESS_COOKIES_FEED,
   FAIL_COOKIES_FEED,
   BEGIN_COOKIES_REQUEST,
   SUCCESS_COOKIES_REQUEST,
   FAIL_COOKIES_REQUEST,
   BEGIN_LOGIN_REQUEST,
   SUCCESS_LOGIN_REQUEST,
   FAIL_LOGIN_REQUEST,
   LOGOUT_REQUEST,
   REMEMBER_LOGIN,
   BEGIN_REGISTER_REQUEST,
   SUCCESS_REGISTER_REQUEST,
   FAIL_REGISTER_REQUEST,
   BEGIN_UPDATE_USERINFO,
   SUCCESS_UPDATE_USERINFO,
   FAIL_UPDATE_USERINFO,
   BEGIN_ORDER_CREATE,
   SUCCESS_ORDER_CREATE,
   FAIL_ORDER_CREATE,
   RESET_ORDER,
   BEGIN_ORDER_DETAIL,
   SUCCESS_ORDER_DETAIL,
   FAIL_ORDER_DETAIL,
   GET_ORDER_BY_USER,
   GET_ORDER_ITEM_BY_USER,
   REMOVE_ORDER_ITEM
} from "../utils/constants";
import battle from "../json/home_img1.json"
import tank from "../json/tank.json"



export const StoreContext = createContext();
let teamItems = localStorage.getItem("teamItems")
   ? JSON.parse(localStorage.getItem("teamItems"))
   : [];

let count = 0;
// let count = localStorage.getItem("count")
//    ? JSON.parse(localStorage.getItem("count"))
//    : 0;


let userInfo;
try {
  userInfo =  JSON.parse(localStorage.getItem("userInfo"));
} catch(e) {
  userInfo = null;
}

let orderInfo_order;
try {
  orderInfo_order = JSON.parse(localStorage.getItem('orderInfo'));
} catch(e) {
  orderInfo_order = { id: "" };
}  


const initialState = {
   home_img: battle,
   navBar: {
      activeItem: "/"
   },
   cookie: tank,
   teamItems,
   count,
   cart:teamItems,
   orderInfo: {
      loading: false,
      order: orderInfo_order,
      success: false,
      error: null,
    },
   orderDetail: {
      loading: true,
      order: { teamItems: []},
      error: null,
    },
   feedCookies: {
      loading: false,
      error: null,
    },
   requestCookies: {
      loading: false,
      error: null,
    },
   userSignin: {
      loading: false,
      userInfo,
      remember: true,
      error: "",
    },
   userRegister: {
      loading: false,
      userInfo: null,
      error: "",
    },
    orderId: {
      orderres: { id: []},
    },
    orderid:[],
    orderitem:[],

}


function reducer(state, action) {
   console.log(action)
   switch (action.type) {
      case SET_HOME_IMAGE:
         return {
            ...state, home_img: action.payload,
         };
      case SET_NAVBAR_ACTIVEITEM:
         return {
            ...state,
            navBar: {
               activeItem: action.payload,
            }
         }
      case SET_COOKIE_IMAGE:
         return {
            ...state, cookie: action.payload,
         }
      case ADD_TEAM_ITEM:
         const item = action.payload;
         const cookie = state.teamItems.find((x) => x.id === item.id);
         if (cookie) {
            count++;
            teamItems = state.teamItems.map((x) =>
               x.id === cookie.id ? item : x
            );
            return { ...state, teamItems, count };
         }
         teamItems = [...state.teamItems, item];
         count += 1;
         return { ...state, teamItems, count };
      case REMOVE_TEAM_ITEM:
         if (count > 0) { count--; }
         teamItems = state.teamItems.filter((x) => x.id !== action.payload);
         return { ...state, teamItems, count };
      case EMPTY_CART:
         teamItems = [];
         return { ...state, cart: { ...state.cart, teamItems } };
      case BEGIN_COOKIES_REQUEST:
         return { ...state, requestCookies: { ...state.requestCookies, loading: true } };
      case SUCCESS_COOKIES_REQUEST:
        return { ...state, requestCookies: { ...state.requestCookies, loading: false } };
      case FAIL_COOKIES_REQUEST:
        return { ...state, requestCookies: { ...state.requestCookies, loading: false, error: action.payload } };
      case BEGIN_COOKIES_FEED:
        return { ...state, feedCookies: { ...state.feedCookies, loading: true } };
      case SUCCESS_COOKIES_FEED:
        return { ...state, feedCookies: { ...state.feedCookies, loading: false } };
      case FAIL_COOKIES_FEED:
        return { ...state, feedCookies: { ...state.feedCookies, loading: false, error: action.payload } };
        case BEGIN_LOGIN_REQUEST:
         return { ...state, userSignin: { ...state.userSignin, loading: true } };
       case SUCCESS_LOGIN_REQUEST:
         return {
           ...state,
           userSignin: {
             ...state.userSignin,
             loading: false,
             userInfo: action.payload,
             error: "",
           },
         };
       case FAIL_LOGIN_REQUEST:
         return {
           ...state,
           userSignin: {
             ...state.userSignin,
             loading: false,
             userInfo: null,
             error: action.payload,
           },
         };
       case BEGIN_UPDATE_USERINFO:
         return { ...state, userSignin: { ...state.userSignin, loading: true } };
       case SUCCESS_UPDATE_USERINFO:
         return {
           ...state,
           userSignin: {
             ...state.userSignin,
             loading: false,
             userInfo: action.payload,
             error: "",
           },
         };
       case FAIL_UPDATE_USERINFO:
         return {
           ...state,
           userSignin: {
             ...state.userSignin,
             loading: false,
             error: action.payload,
           },
         };
       case LOGOUT_REQUEST:
         teamItems = [];
         return {
           ...state,
           userSignin: {
             ...state.userSignin,
             userInfo: null,
           },
         };
       case REMEMBER_LOGIN:
         return {
           ...state,
           userSignin: {
             ...state.userSignin,
             remember: action.payload,
           },
         };
       case BEGIN_REGISTER_REQUEST:
         return {
           ...state,
           userRegister: { ...state.userRegister, loading: true },
         };
       case SUCCESS_REGISTER_REQUEST:
         return {
           ...state,
           userRegister: {
             ...state.userRegister,
             loading: false,
             userInfo: action.payload,
             error: "",
           },
           userSignin: {
             ...state.userSignin,
             userInfo: action.payload,
           },
         };
       case FAIL_REGISTER_REQUEST:
         return {
           ...state,
           userRegister: {
             ...state.userRegister,
             loading: false,
             userInfo: null,
             error: action.payload,
           },
         };
       case BEGIN_ORDER_CREATE:
         return {
           ...state,
           orderInfo: {
             ...state.orderInfo,
             loading: true,
             success: false,
           }
         };
       case SUCCESS_ORDER_CREATE:
         return {
           ...state,
           orderInfo: {
             ...state.orderInfo,
             loading: false,
             order: action.payload,
             success: true,
             error: null,
           },
         };
       case FAIL_ORDER_CREATE:
         return {
           ...state,
           orderInfo: {
             ...state.orderInfo,
             loading: false,
             order: { id: "" },
             success: false,
             error: action.payload,
           },
         };
       case RESET_ORDER:
         return {
           ...state,
           orderInfo: {
             ...state.orderInfo,
             loading: false,
             order: { id: "" },
             success: false,
           },
         };
       case BEGIN_ORDER_DETAIL:
         return {
           ...state,
           orderDetail: {
             ...state.orderDetail,
             loading: true,
           }
         };
       case SUCCESS_ORDER_DETAIL:
         return {
           ...state,
           orderDetail: {
             ...state.orderDetail,
             loading: false,
             order: action.payload,
           },
         };
       case FAIL_ORDER_DETAIL:
         return {
           ...state,
           orderDetail: {
             ...state.orderDetail,
             loading: false,
             error: action.payload,
           },
         };
         case GET_ORDER_BY_USER:
      console.log(action.payload);
     
      return {
        ...state,
        order: {
          ...state.order,
          orderres:{id:action.payload}
        },
        orderid:action.payload
      };
      case GET_ORDER_ITEM_BY_USER:
        console.log(action.payload);
     
        return {
          ...state,
          orderitem:action.payload
        };
      case REMOVE_ORDER_ITEM:
        console.log(action.payload);
     
        return {
          ...state,
          orderitem:action.payload
        };
      default:
         return state;
   }
}


export function StoreProvider(props) {
   const [state, dispatch] = useReducerWithThunk(reducer, initialState, "example");
   const value = { state, dispatch };

   return (
      <StoreContext.Provider value={value}>
         {props.children}
      </StoreContext.Provider>
   );
}