import { useRef, useState, useEffect, } from "react";
import { Button, Modal } from 'react-bootstrap';
import "./css/main.css"
export default function ModalScroll(props) {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
                dialogClassName="custom-scroll-modal"
                // dialogClassName="modal-dialog modal-dialog-scrollable custom-scroll-modal"
                scrollable={true}
            // fullscreen={"lg-down"}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.modalHeader}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.modalBody}

                </Modal.Body>
                <Modal.Footer>
                    {props.modalFootter}
                    {/* <Button onClick={props.onHide}>Close</Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}