import { useRef, useState, useEffect, } from "react";
import { Button, Modal } from 'react-bootstrap';
import "./css/main.css"
export default function ModalError(props) {
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
                    <div className="alert alert-danger text-left">
                        <ul className="list-group">
                            {
                                props.dataError.map((value, index) => (
                                    typeof value === "object"
                                        ? <li key={index}>{value.msg}</li>
                                        : <li key={index}>- {value}</li>
                                ))
                            }
                        </ul>
                    </div>

                </Modal.Body>
                {
                    props.modalFootter !== undefined
                        ? <Modal.Footer>{props.modalFootter}</Modal.Footer>
                        : <></>
                }

                {/* <Button onClick={props.onHide}>Close</Button> */}

            </Modal>
        </>
    );
}