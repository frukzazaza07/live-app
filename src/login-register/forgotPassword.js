import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import {
    useNavigate
} from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import './css/main.css';

export default function ForgotPassword({ setToken }) {

    const [username, setUsername] = useState();

    const { t } = useTranslation();

    const navigate = useNavigate();

    async function forgotPassword(credentials) {
        return new Promise((resolve, reject) => {
            resolve({
                token: 'test123'
            })
        })
        // return fetch('http://localhost:8080/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(credentials)
        // })
        //     .then(data => data.json())
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await forgotPassword({
            optMobile: username
        });
        navigate('/login/no');
    }

    return (
        <div className="login-wrapper">
            <div className="login-header">
                <h3 className="mb-3">{t("forgotPasswordHeader")}</h3>
            </div>
            <div className="login-body">
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="text"
                            placeholder={t("forgotPasswordPlaceholderMobile")}
                            onChange={e => setUsername(e.target.value)}
                        />
                        {/* <Form.Text className="text-muted">
        We'll never share your email with anyone else.
    </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3 text-center button-login" controlId="formBasicEmail">
                        <Button variant="success" className="" type="submit">
                            {t("forgotPasswordButton")}
                        </Button>
                    </Form.Group>
                </Form>
            </div>
            <div className="login-footter">

            </div>
        </div>

    )

}