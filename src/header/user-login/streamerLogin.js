import { useRef, useState, useEffect, useCallback, createRef, Component } from "react";
import { IoSettingsSharp } from 'react-icons/io5';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { BsFillChatSquareFill } from 'react-icons/bs';
import { AiTwotoneHeart } from 'react-icons/ai';
import { useTranslation } from "react-i18next";
import ModalTop from "../../modal/modalTop";
import PreviewImage from "../../lib/previewImage";
import useToken from '../../login-register/useToken'
import MyLib from "../../my-function/mylib";
import ApiService from "../../api-service/apiService";
import ModalError from '../../modal/modalError';
import ModalSuccess from '../../modal/modalSuccess';
import {
    Link
} from "react-router-dom";
import './css/main.css';


const myLib = new MyLib();
function FormNewPost(props) {

    const { getUserData } = useToken();
    const [dataForm, setDataForm] = useState({
        userId: getUserData().userId,
        caption: "",
        imageFile: "",
    });
    const [selectedImage, setSelectedImage] = useState();
    const { t } = useTranslation();
    const modalErrorHeader = t("modalErrorMessage");
    const [dataError, setDataError] = useState([]);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const modalSuccessHeader = t("modalSuccessHeader");
    const [dataSuccess, setDataSuccess] = useState([]);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiService = new ApiService();


        if (selectedImage === undefined) {
            setShowErrorModal(true);
            setDataError(["Please select image file"]);
            return;
        }

        const fileBase64 = await myLib.convertFileToBase64(selectedImage);
        const validate = myLib.checkEmpty([{ fileImage: fileBase64 }, { caption: dataForm.caption }], [], t("validateEmpty"));

        if (validate.length > 0) {
            console.log(validate);
            setShowErrorModal(true);
            setDataError(validate);
            return;
        }
        dataForm.imageFile = fileBase64;
        const response = await apiService.createPost(dataForm);
        if (response.status === true) {
            setDataSuccess([t("modalCreatePostSuccessMessage")]);
            setShowSuccessModal(true);

        } else {
            setShowErrorModal(true);
            setDataError(response.error);
        }
        console.log(response)
    };

    function clearData() {
        setDataForm({
            userId: getUserData().userId,
            caption: "",
            imageFile: "",
        })
        setSelectedImage();
        props.showNewpostModal(false);
    }

    const handleCreatePostSuccess = () => {
        clearData()
        setShowSuccessModal(false)
    }

    const handleInputChange = e => {
        const { name, value } = e.target;
        setDataForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <ModalError
                show={showErrorModal}
                onHide={() => setShowErrorModal(false)}
                modalHeader={modalErrorHeader}
                dataError={dataError}
            />
            <ModalSuccess
                show={showSuccessModal}
                onHide={() => clearData()}
                modalHeader={modalSuccessHeader}
                dataSuccess={dataSuccess}
            />
            <div className="form-new-post">
                <Form onSubmit={handleSubmit}>
                    <PreviewImage fileSelected={setSelectedImage} />

                    <Form.Group className="mb-3">
                        <Form.Label>{t("newPostCaption")}</Form.Label>
                        <Form.Control type="text" onChange={handleInputChange} name="caption" />
                    </Form.Group>
                    <Form.Group className="text-center">
                        <button className="btn btn-success">{t("newPostConfirm")}</button>
                    </Form.Group>

                </Form>
            </div>
        </>

    );
}

export default function StreamerLogin() {
    const { t } = useTranslation();
    const [showModalScroll, setshowModalScroll] = useState(false);
    const modalNewpostTxt = t("newPost");

    // useEffect(() => {

    // }, [])
    return (
        <>
            <ModalTop
                show={showModalScroll}
                onHide={() => setshowModalScroll(false)}
                modalHeader={modalNewpostTxt}
                modalBody={<FormNewPost showNewpostModal={setshowModalScroll} />}
            // modalFootter={< />}
            />
            <div className="login-type-container">
                <button className="btn btn-primary btn-sm" onClick={() => { setshowModalScroll(true); }}>{t("newPost")}</button>
            </div>
        </>

    )
}
