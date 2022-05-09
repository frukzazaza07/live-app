import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import {
    useNavigate
} from "react-router-dom";
import { Form, Button, InputGroup } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import ApiService from '../api-service/apiService';
import ModalError from '../modal/modalError';
import './css/main.css';
const apiService = new ApiService();
export default function Register() {
    const [dataForm, setDataForm] = useState({
        username: "",
        password: "",
        password_confirmation: "",
        email: "",
        idCard: "",
        firstname: "",
        lastname: "",
        mobile: "",
        title: "",
        sex: "",
    });

    const { t } = useTranslation();

    const [showErrorModal, setShowErrorModal] = useState(false);
    const [dataError, setDataError] = useState([]);
    const modalErrorHeader = "Error message.";
    const navigate = useNavigate();

    async function registerUser(credentials) {
        const registerData = await apiService.registerUser(dataForm);
        if (registerData.status === false) {

            let errorData = registerData.error;
            if (typeof registerData.error === "object") {
                errorData = Object.values(registerData.error);
            }
            setShowErrorModal(true);
            setDataError(errorData);
            return;
        }
        navigate('/login/Register successfully');
    }

    const handleInputChange = e => {
        const { name, value } = e.target;
        setDataForm(prevState => ({
            ...prevState,
            [name]: value.replace(/-/g, "")
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(dataForm);
        registerUser();
        // navigate('/login');
    }

    return (
        <>
            <ModalError
                show={showErrorModal}
                onHide={() => setShowErrorModal(false)}
                modalHeader={modalErrorHeader}
                dataError={dataError}
            />
            <div className="login-wrapper">
                <div className="login-header">
                    <h3 className="mb-3">{t("registerHeader")}</h3>
                </div>
                <div className="login-body">
                    <Form onSubmit={handleSubmit}>

                        <InputGroup className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder={t("registerPlaceholderUsername")}
                                onChange={handleInputChange}
                                name="username"
                            />
                        </InputGroup>
                        <Form.Group className="mb-1">
                            <Form.Control
                                type="password"
                                placeholder={t("registerPlaceholderPassword")}
                                onChange={handleInputChange}
                                name="password"
                                autoComplete="off"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="password"
                                placeholder={t("registerPlaceholderPasswordConfirm")}
                                onChange={handleInputChange}
                                name="password_confirmation"
                                autoComplete="off"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="email"
                                placeholder={t("registerPlaceholderEmail")}
                                onChange={handleInputChange}
                                name="email"
                            />
                        </Form.Group>
                        <InputGroup className="mb-3">
                            <InputMask
                                className="me-2 form-control"
                                mask="999-9999-999-99-9"
                                type="tel"
                                maskChar=""
                                onChange={handleInputChange}
                                placeholder={t("registerPlaceholderCardId")}
                                name="idCard"
                            />

                            <InputMask
                                className="ms-2 form-control"
                                mask="999-999-9999"
                                type="tel"
                                maskChar=""
                                onChange={handleInputChange}
                                placeholder={t("registerPlaceholderMobile")}
                                name="mobile"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Form.Control
                                className="me-2"
                                type="text"
                                placeholder={t("registerPlaceholderFirstname")}
                                onChange={handleInputChange}
                                name="firstname"
                            />
                            <Form.Control
                                className="ms-2"
                                type="text"
                                placeholder={t("registerPlaceholderLastname")}
                                onChange={handleInputChange}
                                name="lastname"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Form.Control
                                className="me-2"
                                type="text"
                                placeholder={t("registerPlaceholderNickname")}
                                onChange={handleInputChange}
                                name="nickname"
                            />
                            <Form.Select
                                className="me-2"
                                placeholder={t("registerPlaceholderTitle")}
                                onChange={handleInputChange}
                                name="title"
                            >
                                <option value="">{t("registerPlaceholderTitle")}</option>
                                <option value="mr">{t("registerPlaceholderTitleMr")}</option>
                                <option value="mrs">{t("registerPlaceholderTitleMrs")}</option>
                                <option value="miss">{t("registerPlaceholderTitleMiss")}</option>
                            </Form.Select>

                            <Form.Select
                                className="ms-2"
                                placeholder={t("registerPlaceholderSex")}
                                onChange={handleInputChange}
                                name="sex"
                            >
                                <option value="">{t("registerPlaceholderSex")}</option>
                                <option value="man">{t("registerPlaceholderSexMan")}</option>
                                <option value="woman">{t("registerPlaceholderSexWomen")}</option>
                            </Form.Select>
                        </InputGroup>

                        <Form.Group className="mb-3 text-center button-login">
                            <Button variant="success" className="" type="submit">
                                {t("registerButton")}
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
                <div className="login-footter">

                </div>
            </div>
        </>


    )

}