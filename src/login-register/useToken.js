import { useState } from 'react';
import Mylib from '../my-function/mylib';
import ApiService from '../api-service/apiService';

const myLib = new Mylib();



export default function useToken() {
    const getToken = () => {
        // const tokenString = sessionStorage.getItem('token');
        const tokenString = localStorage.getItem('token');
        // console.log(tokenString)
        if (tokenString !== undefined && tokenString !== null) {
            const userToken = JSON.parse(tokenString);
            // console.log(tokenString)
            return userToken?.token
        }
        return null;
    };

    const [token, setToken] = useState(getToken());

    const getUserData = () => {
        const tokenString = localStorage.getItem('userData');
        if (tokenString !== undefined && tokenString !== null) {
            const userData = JSON.parse(tokenString);
            // console.log(userData)
            return userData
        }
        return null;
    };

    const saveToken = userToken => {
        // sessionStorage.setItem('token', JSON.stringify(userToken));
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    };

    const saveUserData = userData => {
        // sessionStorage.setItem('token', JSON.stringify(userToken));
        localStorage.setItem('userData', JSON.stringify(userData));
    };

    const logout = () => {
        // sessionStorage.setItem('token', JSON.stringify(userToken));
        localStorage.removeItem('userData');
        localStorage.removeItem('token');
    };

    const checkTokenExpired = async () => {
        const apiService = new ApiService();
        const tokenString = localStorage.getItem('token');
        const userString = localStorage.getItem('userData');
        // console.log(tokenString)
        if (tokenString !== undefined && tokenString !== null) {
            const tokenData = JSON.parse(tokenString);
            const currentData = myLib.createDate();
            const dateDiff = myLib.calculateDays(currentData.fullFormat, tokenData.expriedAt);
            // console.log(dateDiff);
            if (dateDiff.minutes <= 0) {
                const userData = JSON.parse(userString);
                const accessTokenData = { userKey: userData.userKey };
                const tokenData = await apiService.fetchAccessToken(accessTokenData);
                saveToken(tokenData.data);
                console.log(tokenData);
            }
            // console.log(dateDiff)
        }
    };

    return {
        setToken: saveToken,
        token,
        saveUserData,
        checkTokenExpired,
        logout,
        getUserData,
        getToken
    }
}