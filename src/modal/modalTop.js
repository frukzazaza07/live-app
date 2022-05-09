import { useEffect, } from "react";
import { Modal } from 'react-bootstrap';
import "./css/main.css"
export default function ModalTop(props) {
    // useEffect(() => {
    //     console.log(props.modalFootter);
    // })
    return (
        <>
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
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
                {
                    props.modalFootter === undefined
                        ? <></>
                        : <Modal.Footer>
                            {props.modalFootter}
                            {/* <Button onClick={props.onHide}>Close</Button> */}
                        </Modal.Footer>
                }

            </Modal>
        </>
    );
}