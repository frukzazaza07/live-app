import { useRef, useState, useEffect, } from "react";
import { Button, Modal } from 'react-bootstrap';
import "./css/main.css"
import LoadingOverlay from 'react-loading-overlay';
export default function ModalLoading(props) {
    function changeParentModalBg() {
        const parentModal = document.getElementsByClassName("custom-loading-modal")[0].parentNode;
        parentModal.style.backgroundColor = "black";
        parentModal.style.opacity = "0.5";
    }
    useEffect(() => {
        changeParentModalBg();
    }, [])
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
                dialogClassName="custom-loading-modal"
                animation={false}
            >
                <Modal.Body>
                    <LoadingOverlay
                        active={true}
                        spinner
                    >
                    </LoadingOverlay>
                </Modal.Body>
            </Modal>
        </>
    );
}