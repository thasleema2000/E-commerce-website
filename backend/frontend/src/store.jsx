import { createStore , combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducers";
import {productListReducers, productDetailsReducers,
        productDeleteReducers,productCreateReducers,
        productUpdateReducers,productReviewCreateReducers,
        productTopRatedReducers} from "./reducers/productReducers";

import { userLoginReducers, userRegisterReducers, userDetailsReducers ,
            userUpdateProfileReducer,userListReducer,
            userDeleteReducer,userUpdateReducer } from './reducers/userReducers'

import{ orderCreateReducer, orderDetailsReducer ,
        orderPayReducer, orderListMyReducer,
        orderListReducer,orderDeliverReducer} from './reducers/orderReducers'


const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    productDelete: productDeleteReducers,
    productCreate: productCreateReducers,
    productUpdate: productUpdateReducers,
    productReviewCreate: productReviewCreateReducers,
    productTopRated: productTopRatedReducers,
    
    cart: cartReducer,
    
    userLogin: userLoginReducers,
    userRegister: userRegisterReducers,
    userDetails: userDetailsReducers,
    userUpdteProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
        
    orderCreate: orderCreateReducer,
    orderDetails : orderDetailsReducer,
    orderPay : orderPayReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
    orderDeliver: orderDeliverReducer,
    
    
})

const cartItemFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}




const initialState = {
    cart: {
        cartItems: cartItemFromStorage,
        shippingAddress:shippingAddressFromStorage
    },
    userLogin:{userInfo: userInfoFromStorage},

}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools
    (applyMiddleware(...middleware)))


export default store