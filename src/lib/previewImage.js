import { useState, useRef } from "react";
import { Form, Button, InputGroup } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import './css/main.css';
const PreviewImage = (props) => {
    const [selectedImage, setSelectedImage] = useState();
    const { t } = useTranslation();
    const [fileName, setFileName] = useState(t("fileSelected"));
    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
            setFileName(e.target.files[0].name);
            props.fileSelected(e.target.files[0]);
        }
    };

    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
        setSelectedImage();
        props.fileSelected();
        setFileName(t("fileSelected"));
    };

    return (
        <div className="previewImage-container">
            <label>{t("imageSelectHeader")}</label>
            <Form.Group controlId="formFile" className="mb-3 mt-2">
                <label for="img" className="btn btn-primary btn-sm">{t("selectFile")}</label>
                <span>{" " + fileName}</span>
                <input type="file" id="img" style={{ display: "none" }} onChange={imageChange} />
            </Form.Group>
            <div className="previewImage-wrapper d-flex justify-content-center">
                {
                    selectedImage && (
                        <div className="image-wrapper text-center">
                            <img
                                src={URL.createObjectURL(selectedImage)}
                                // style={styles.image}
                                alt="Thumb"
                            />
                            <button onClick={removeSelectedImage} className="btn btn-danger mt-3">
                                {t("removeFile")}
                            </button>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default PreviewImage;
