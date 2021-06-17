import {
    ADD_TEAM_ITEM,
    REMOVE_TEAM_ITEM,
    EMPTY_CART,
    EMPTY_COMMENT,
    BEGIN_COOKIES_FEED,
    SUCCESS_COOKIES_FEED,
    FAIL_COOKIES_FEED,
    BEGIN_COOKIES_REQUEST,
    SUCCESS_COOKIES_REQUEST,
    FAIL_COOKIES_REQUEST,
    SET_COOKIE_IMAGE,
    SET_NAVBAR_ACTIVEITEM,
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
    BEGIN_COMMENT_CREATE,
    SUCCESS_COMMENT_CREATE,
    FAIL_COMMENT_CREATE,
    FEED_TO_COMMENTITEM,
    RESET_COMMENT,
    BEGIN_ORDER_DETAIL,
    SUCCESS_ORDER_DETAIL,
    FAIL_ORDER_DETAIL,
    GET_ORDER_BY_USER,
    GET_ORDER_ITEM_BY_USER,
    BEGIN_COMMENT_DETAIL,
    SUCCESS_COMMENT_DETAIL,
    FAIL_COMMENT_DETAIL,
} from "../utils/constants"
import { 
  getCookies, 
  getCookieById, 
  feedCookies,
  signInWithEmailPassword,
  registerWithEmailPassword,
  signOut,
  updateUserInfoApi,
  createOrderApi,
  getOrderById,
  checkLoginApi,
  getOrderByUser,
  getOrderItemByUser,
  removeOrderById,
  createCommentApi,
  getComment
} from "../api";

export const addToTeamItem = (dispatch, cookie, count) => {
    const item = {
        id: cookie.id,
        name: cookie.name,
        image: cookie.image,
        style: cookie.style,
        atk: cookie.atk,
    };
    dispatch({
        type: ADD_TEAM_ITEM,
        payload: item, count
    });
}

export const removeFromTeam = (dispatch, cookieId) => {
    dispatch({
        type: REMOVE_TEAM_ITEM,
        payload: cookieId,
    });
};

export const setCookieDetail = async (dispatch, cookieId) => {
    dispatch({ type: BEGIN_COOKIES_REQUEST });
    try {
      const cookie = await getCookieById(cookieId);
      dispatch({
          type: SET_COOKIE_IMAGE,
          payload: {
            cookie,
          }
        })
         
      dispatch({ type: SUCCESS_COOKIES_REQUEST });
    } catch (error) {
      console.log(error);
      dispatch({ type: FAIL_COOKIES_REQUEST, payload: error });
    }
  } 
export const setPage = async (dispatch, url) => {
    let cookies = [];
    dispatch({ type: BEGIN_COOKIES_REQUEST });
    
    try {
      cookies = await getCookies(url);
      dispatch({
        type: SET_COOKIE_IMAGE,
        payload: { cookies },
      });
      dispatch({
        type: SET_NAVBAR_ACTIVEITEM,
        payload: url,
      });    
      dispatch({ type: SUCCESS_COOKIES_REQUEST });
    } catch (error) {
      console.log(error);
      dispatch({ type: FAIL_COOKIES_REQUEST, payload: error });
    }
  }
  export const loginToFirebase = async (dispatch, userInfo) => {
    dispatch({ type: BEGIN_LOGIN_REQUEST });
    try {
      const user = await signInWithEmailPassword(userInfo.email, userInfo.password);
      dispatch({
        type: SUCCESS_LOGIN_REQUEST,
        payload: user.user.providerData[0],
      })
      return user;
    } catch (e) {
      dispatch({
        type: FAIL_LOGIN_REQUEST,
        payload: e.message
      })
      console.log(e)
      return null;
    }
  }
  
  export const rememberLoginUser = (dispatch, remember) => {
    dispatch({
      type: REMEMBER_LOGIN,
      payload: remember,
    })
  }
  
  export const registerToFirebase = async (dispatch, userInfo) => {
    dispatch({ type: BEGIN_REGISTER_REQUEST });
    try {
      const user = await registerWithEmailPassword(userInfo.email, userInfo.password, userInfo.name);
      console.log(user)
      dispatch({
        type: SUCCESS_REGISTER_REQUEST,
        payload: user.providerData[0],
      })
      return user;
    } catch (e) {
      dispatch({
        type: FAIL_REGISTER_REQUEST,
        payload: e.message
      })
      console.log(e)
      return null;
    }
  }
  
  export const updateUserInfo = async (dispatch, userInfo) => {
    dispatch({ type: BEGIN_UPDATE_USERINFO });
    try {
      const user = await updateUserInfoApi(
        userInfo.email,
        userInfo.password,
        userInfo.name
      );
      dispatch({
        type: SUCCESS_UPDATE_USERINFO,
        payload: user.providerData[0],
      });
    } catch (e) {
      dispatch({
        type: FAIL_UPDATE_USERINFO,
        payload: e.message,
      });
      console.log(e);
    }
  };
  
  export const logoutFromFirebase = async (dispatch) => {
    signOut();
    dispatch({ type: LOGOUT_REQUEST });
  }
  
  export const createOrder = async (dispatch, cart) => {
    dispatch({ type: BEGIN_ORDER_CREATE });
    try {
      const item = {
        orderItems: cart,
      };    
      const orderInfo = await createOrderApi(item);
      dispatch({ 
        type: SUCCESS_ORDER_CREATE, 
        payload: orderInfo 
      });
      dispatch({ type: EMPTY_CART,})
      localStorage.setItem('orderInfo', JSON.stringify(orderInfo));
      localStorage.removeItem("teamItems");
      return orderInfo;
    } catch (error) {
      console.log(error);
      dispatch({ type: FAIL_ORDER_CREATE, payload: error });
      return null;
    }  
  };
  export const createComment=async(dispatch,comment,name)=>{
    dispatch({type:BEGIN_COMMENT_CREATE});
    try{
      const item={
        commentItems:comment,
        name:name,
      };
      const commentInfo=await createCommentApi(item);
      dispatch({
        type:SUCCESS_COMMENT_CREATE,
        payload:commentInfo
      });
      dispatch({type:EMPTY_COMMENT,})
      localStorage.setItem('commentInfo', JSON.stringify(commentInfo));
      localStorage.removeItem("comments");
      return commentInfo;

    }catch (error){
      console.log(error);
      dispatch({ type: FAIL_COMMENT_CREATE, payload: error });
      return null;
    }
  };
  export const requestComment = async(dispatch)=>{
    dispatch ({type:BEGIN_COMMENT_DETAIL});
    try{
      const comment=await getComment();
      dispatch({
        type:SUCCESS_COMMENT_DETAIL,
        payload:comment
      });
      dispatch({
        type:FEED_TO_COMMENTITEM,
        payload:comment
      })
    }catch(error){
      dispatch({
        type:FAIL_COMMENT_DETAIL,
        payload:error
      });
    }
  }
  
  export const requestOrderDetail = async (dispatch, orderId) => {
    dispatch({ type: BEGIN_ORDER_DETAIL });
    try {
      const order = await getOrderById(orderId);
      dispatch({ 
        type: SUCCESS_ORDER_DETAIL,
        payload: order
      });
    } catch (error) {
      dispatch({ 
        type: FAIL_ORDER_DETAIL, 
        payload: error 
      });
    }
  }
  export const removeOrderDetail = async (dispatch, orderId) => {
    dispatch({ type: BEGIN_ORDER_DETAIL });
    try {
      const order = await removeOrderById(orderId);
      dispatch({ 
        type: SUCCESS_ORDER_DETAIL,
        payload: order
      });
    } catch (error) {
      dispatch({ 
        type: FAIL_ORDER_DETAIL, 
        payload: error 
      });
    }
  }
  
  export const resetOrder = (dispatch) => {
    dispatch({ type: RESET_ORDER });
  }
  
  export const checkLogin = (dispatch) => {
    const isLogin = checkLoginApi();
    if(!isLogin) {
      localStorage.removeItem('orderInfo')
      dispatch({ type: LOGOUT_REQUEST });    
    }
    return isLogin;
  }
  export const storeOrderId=async (dispatch) => {
    try{
      const userOrder =await getOrderByUser();
      console.log(userOrder);
      dispatch({ 
        type:GET_ORDER_BY_USER,
        payload:userOrder
      });
      return userOrder;
    }catch (error) {
     
      console.error(error);
    }
  }
  export const storeOrderItem=async (dispatch) => {
    try{
      const userOrderItem =await getOrderItemByUser();
      console.log(userOrderItem );
      dispatch({ 
        type:GET_ORDER_ITEM_BY_USER,
        payload:userOrderItem 
      });
      return userOrderItem ;
    }catch (error) {
     
      console.error(error);
    }
  }
  