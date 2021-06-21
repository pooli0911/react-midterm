import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import cookies from "../json/cookie.json"



// INITIALIZE FIREBASE
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
  };

  firebase.initializeApp(firebaseConfig);
  // REFERENCE PRODUCTS
  const cookiesCollectionRef = firebase.firestore().collection("cookies");
  const cookiesDocRef = cookiesCollectionRef.doc("json");
  const allCookiesCollectionRef = cookiesDocRef.collection("allCookies");
  const allOrdersCollectionRef = firebase.firestore().collection("allOrders");
  const allCommentsCollectionRef=firebase.firestore().collection("allComments")
  const allComments2CollectionRef=firebase.firestore().collection("allComments2")

  //REFERENCE AUTH
  const auth = firebase.auth();

  export const getCookieById = async (cookieId) => {
    // REFERENCE PRODUCTS COLLECTION
    const doc = await allCookiesCollectionRef.doc(cookieId).get();
    return doc.data()
  }
  
  export const getCookies = async (url) => {
    const collection = cookies.find(element => element.url === url);
    const collectionName = collection.name || "allProducts";
    let jsonProducts = [];
  
    // QUERY PRODUCTS
    let querySnapshot;
    if (collectionName === "allCookies")
      querySnapshot = await allCookiesCollectionRef.get();
    else
      querySnapshot = await allCookiesCollectionRef.where("style", "==", collectionName).get();
    querySnapshot.forEach((doc) => {
      jsonProducts.push(doc.data());
    });
    return jsonProducts;
  }
  export const getCookiesByStyle = async(style)=>{
    const amount=0;
    const collection = cookies.find(element => element.style === style);
    let jsonProducts = [];
    const querySnapshot = await allCookiesCollectionRef.where("style", "==", collection).get();
    querySnapshot.forEach((doc) => {
      jsonProducts.push(doc.data());
      amount+=1;
    });
    return amount;

  }
  
export const feedCookies = () => {
    cookies.forEach((cookie) => {
      const docRef = allCookiesCollectionRef.doc();
      const id = docRef.id;
      // Store Data for Aggregation Queries
      docRef.set({
        ...cookie,
        id
      });
    })
  }


  export const signInWithEmailPassword = async (email, password) => {
    return await auth.signInWithEmailAndPassword(email, password);
  }
  
  export const registerWithEmailPassword = async (email, password, displayName) => {
    await auth.createUserWithEmailAndPassword(email, password);
    const user = auth.currentUser;
    await user.updateProfile({ displayName })
    return user;
  }
  
  export const updateUserInfoApi = async (email, password, displayName) => {
    const user = auth.currentUser;
    if(displayName)
      await user.updateProfile({ displayName });
    if(email)
      await user.updateEmail(String(email));
    if(password)
      await user.updatePassword(password);
    return user;
  }
  
  export const createOrderApi = async (order) => {
    const user = auth.currentUser.uid;
    const orderRef = await allOrdersCollectionRef.doc();
    const id = orderRef.id;
    // Store Data for Aggregation Queries
    await orderRef.set({
      ...order,
      id,
      user
    });
    return { ...order, id };
  }
  export const createCommentApi = async (comment) =>{
    const commentRef=await allCommentsCollectionRef.doc();
    const id = commentRef.id;
    await commentRef.set({
      ...comment,
      id
    });
    return {...comment,id};
  }
  export const getComment = async()=>{
    let jsonComments=[];
    const querySnapshot=await allCommentsCollectionRef.get();
    querySnapshot.forEach((doc)=>{
      jsonComments.push(doc.data());
    });
    return jsonComments;
  }
  export const createComment2Api = async (comment) =>{
    const commentRef=await allComments2CollectionRef.doc();
    const id = commentRef.id;
    await commentRef.set({
      ...comment,
      id
    });
    return {...comment,id};
  }
  export const getComment2 = async()=>{
    let jsonComments=[];
    const querySnapshot=await allComments2CollectionRef.get();
    querySnapshot.forEach((doc)=>{
      jsonComments.push(doc.data());
    });
    return jsonComments;
  }
  
  export const getOrderById = async (orderId) => {
    const doc = await allOrdersCollectionRef.doc(orderId).get();
    return doc.data()
  }
  export const removeOrderById =async(orderId)=>{
    const doc = await allOrdersCollectionRef.doc(orderId).delete();
    return doc
  }
  
  export const getOrderByUser = async () => {
    const user = auth.currentUser.uid;
    let jsonOrders = [];
  
    // QUERY Orders
    const querySnapshot = await allOrdersCollectionRef.where("user", "==", user).get();
    querySnapshot.forEach((doc) => {
      jsonOrders.push(doc.data());
    });
    return jsonOrders;
  }
  export const getOrderItemByUser = async () => {
    const user = auth.currentUser.uid;
    let jsonOrdersItem = [];
  
    // QUERY Orders
    const querySnapshot = await allOrdersCollectionRef.where("user", "==", user).get();
    querySnapshot.forEach((doc) => {
      jsonOrdersItem.push(doc.data().id);
    });
    console.log(jsonOrdersItem);
    return jsonOrdersItem;
  }
  
  export const signOut = () => {
    auth.signOut();
  }
  
  export const checkLoginApi = () => {
    const user = auth.currentUser;
    return user.uid?  true : false;
  }
  
  export const authenticateAnonymously = () => {
    return firebase.auth().signInAnonymously();
  };
  