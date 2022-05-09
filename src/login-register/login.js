import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import {
    Link,
    useNavigate,
    useParams
} from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import ApiService from '../api-service/apiService';
import ModalError from '../modal/modalError';
import './css/main.css';
const apiService = new ApiService();
export default function Login({ setToken, saveUserData }) {

    const [username, setUserName] = useState();

    const [password, setPassword] = useState();
    const { t } = useTranslation();
    const contractMobile = " 088-555-2145";
    const navigate = useNavigate();
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [dataError, setDataError] = useState([]);
    const modalErrorHeader = "Error message.";
    let { message } = useParams();
    async function loginUser(credentials) {


        return new Promise((resolve, reject) => {
            resolve({
                token: 'test123'
            })
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const dataSend = {
            username: username,
            password: password
        };
        const userData = await apiService.fetchLoginUser(dataSend);
        console.log(userData);
        if (userData.status === false) {
            setShowErrorModal(true);
            setDataError(userData.error);
            return;
        }
        const accessTokenData = { userKey: userData.data.userKey };
        const tokenData = await apiService.fetchAccessToken(accessTokenData);
        setToken(tokenData.data);
        saveUserData(userData.data);
        navigate('/home');
        window.location.reload();
    }

    return (
        <>
            <ModalError
                show={showErrorModal}
                onHide={() => setShowErrorModal(false)}
                modalHeader={modalErrorHeader}
                dataError={dataError}
            />
            {
                message !== "no"
                    ?
                    <div className="alert alert-success text-center mb-0">
                        <ul className="list-group">
                            <li>{message}</li>
                        </ul>
                    </div>
                    : ""
            }


            <div className="login-wrapper">
                <div className="login-header">
                    <h3 className="mb-3">{t("loginHeader")}</h3>
                </div>
                <div className="login-body">
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder={t("loginPlaceholderUsername")}
                                onChange={e => setUserName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="password"
                                placeholder={t("loginPlaceholderPassword")}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 text-center button-login">
                            <Button variant="success" className="" type="submit">
                                {t("loginButton")}
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
                <div className="login-footter">
                    <div className="remember-forgot-wrapper mb-3">
                        <Link to="/register">{t("loginRegister")}</Link>
                        <Link to="/forgot-password">{t("loginForgotPassword")}</Link>
                    </div>
                    <div className="problem-wrapper text-center">
                        <div>{t("loginIfProblem")}</div>
                        <div>{t("loginContract")}{contractMobile}</div>
                    </div>
                </div>
            </div>
        </>
    )

}

Login.propTypes = {

    setToken: PropTypes.func.isRequired

};