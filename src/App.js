import { useState, useEffect } from "react";
import axios from 'axios';
import Pusher from "pusher-js"
import Header from './header/header';
import Page404 from './page404';
import LanguageSetting from './header/languageSetting';
import Content from './content/content';
import Feed from './feed/feed';
import Footter from './footter/footter';
import Login from './login-register/login'
import LiveSteam from './live-steam/liveSteam'
import LiveStreamTest from './live-steam/liveStreamTest'
import RequireAuth from './login-register/requireAuth'
import Register from './login-register/register'
import ForgotPassword from './login-register/forgotPassword'
import useToken from './login-register/useToken'
import getWindowDimensions from './my-function/getWindowDimensions';
import i18n from './language-setting/i18n';
import LocaleContext from './language-setting/localeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Router,
  Route,
  Navigate,
  useNavigate,
  useLocation
} from "react-router-dom";
import ApiService from './api-service/apiService';
import AlertDetail from './alert-detail/alertDetail'

function App() {
  const containerMain = { width: '50%', margin: '0px auto' };
  const paddPage = { padding: '1rem 2rem' };
  const [footterHeight, setFootterHeight] = useState({ height: "" });
  const [contentHeight, setContentHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState({ height: "" });
  const [languageSetting, setLanguageSetting] = useState({ height: "" });
  const [locale, setLocale] = useState(i18n.language);
  const { height } = getWindowDimensions();
  const { setToken, saveUserData, checkTokenExpired, logout, getUserData, getToken } = useToken();
  const userId = getUserData() !== null ? getUserData().userId : "";
  const [newAlert, setNewAlert] = useState(0);
  let [forceUpdate, setForceUpdate] = useState(0);

  useEffect(() => {

    i18n.on('languageChanged', (lng) => setLocale(i18n.language));
    setContentHeight(calContentHeight(headerHeight.height, footterHeight.height, height, languageSetting.height));
    // handleLogin();
    // Pusher.logToConsole = true;

    test1()
    fetchNewAlert()
    // Initiate the Pusher JS library
    var pusher = new Pusher('6b85e81ce0ae7b74d1dd', {
      encrypted: true,
      cluster: 'ap1'
    });
    var channel = pusher.subscribe('status-liked-test');
    channel.bind('App\\Events\\StatusLiked', function (data) {
      // console.log(data);
    });

    var channel2 = pusher.subscribe(`alert-newPost-${userId}`);
    channel2.bind('App\\Events\\AlertNewPost', async function (data) {
      // console.log(data);
      // const newAlertCount = await newAlertF(userId);
      // setNewAlert(newAlertCount);
      fetchNewAlert()
    });

    setInterval(() => {
      checkTokenExpired();
    }, 1000);

    async function fetchNewAlert() {
      const newAlertCount = await newAlertF(userId);
      setNewAlert(newAlertCount);
    }


  }, [newAlert])

  function test1() {
    const ggg = {
      method: "post",
      url: "http://wave-sport.com/live-app/api/stream-test",
      headers: {},
      data: {
        username: "test",
        data: {
          text: "test",
        }
      },
    };
    return new Promise((resolve, reject) => {
      axios(ggg)
        .then((response) => {

          // console.log(response.data);
          resolve(response.data);
        })
        .catch((error) => {
          console.log(error)
          reject(error);
        });
    })
  }

  async function newAlertF(memberId) {
    const apiService = new ApiService();
    const newAlert = await apiService.fetchNewAlert(memberId);

    return new Promise((resolve, reject) => {
      resolve(newAlert.data[0].allAlert);
    });
  }

  function calContentHeight(headerHeight, footterHeight, windowHeight, languageSetting) {
    return windowHeight - (headerHeight + footterHeight + languageSetting) - 1;
  }

  return (
    <>
      <LocaleContext.Provider value={{ locale, setLocale }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={
              //<RequireAuth>
              <div style={containerMain}>
                <Header style={paddPage} setHeaderHeight={setHeaderHeight} logout={logout} userData={getUserData} newAlert={newAlert} />
                <LanguageSetting setLanguageSetting={setLanguageSetting} />
                <Content height={contentHeight} >
                  <Feed height={contentHeight} />
                </Content>
                <Footter style={paddPage} setFootterHeight={setFootterHeight} />
              </div>

            } />
            <Route path="/login/:message" element={
              <div style={containerMain}>
                {
                  getToken() === null
                    ?
                    <>
                      <Header style={paddPage} setHeaderHeight={setHeaderHeight} />
                      <LanguageSetting setLanguageSetting={setLanguageSetting} />
                      <Content height={contentHeight} >
                        <Login setToken={setToken} saveUserData={saveUserData} />
                      </Content>
                      <Footter style={paddPage} setFootterHeight={setFootterHeight} />
                    </>
                    : <RequireAuth>
                      <Header style={paddPage} setHeaderHeight={setHeaderHeight} />
                      <LanguageSetting setLanguageSetting={setLanguageSetting} />
                      <Content height={contentHeight} >
                        <Login setToken={setToken} saveUserData={saveUserData} />
                      </Content>
                      <Footter style={paddPage} setFootterHeight={setFootterHeight} />
                    </RequireAuth>
                }

              </div>
            }
            />
            <Route path="/register" element={
              <div style={containerMain}>
                <Header style={paddPage} setHeaderHeight={setHeaderHeight} />
                <LanguageSetting setLanguageSetting={setLanguageSetting} />
                <Content height={contentHeight} >
                  <Register />
                </Content>
                <Footter style={paddPage} setFootterHeight={setFootterHeight} />
              </div>
            }
            />
            <Route path="/forgot-password" element={
              <div style={containerMain}>
                <Header style={paddPage} setHeaderHeight={setHeaderHeight} />
                <LanguageSetting setLanguageSetting={setLanguageSetting} />
                <Content height={contentHeight} >
                  <ForgotPassword />
                </Content>
                <Footter style={paddPage} setFootterHeight={setFootterHeight} />
              </div>
            }
            />
            <Route path="/live-steam" element={
              <RequireAuth>
                <div style={containerMain}>
                  <Header style={paddPage} setHeaderHeight={setHeaderHeight} logout={logout} userData={getUserData} newAlert={newAlert} />
                  <LanguageSetting setLanguageSetting={setLanguageSetting} />
                  <Content height={contentHeight} >
                    <LiveStreamTest />
                    {/* <LiveSteam /> */}
                  </Content>
                  <Footter style={paddPage} setFootterHeight={setFootterHeight} />
                </div>
              </RequireAuth>
            } />

            <Route path="/alert-detail/:postId" element={
              <RequireAuth>
                <div style={containerMain}>
                  <Header style={paddPage} setHeaderHeight={setHeaderHeight} logout={logout} userData={getUserData} newAlert={newAlert} />
                  <LanguageSetting setLanguageSetting={setLanguageSetting} />
                  <Content height={contentHeight} >
                    <AlertDetail />
                  </Content>
                  <Footter style={paddPage} setFootterHeight={setFootterHeight} />
                </div>
              </RequireAuth>
            } />

            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </LocaleContext.Provider>
    </>

  );
}

export default App;
