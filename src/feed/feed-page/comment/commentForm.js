
import { useRef, useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap';
export default function CommentForm(props) {
    return (
        <Form className="form-100 p-3">
            <Form.Group className="input-group" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="เพิ่มความคิดเห็น" />
                <Button variant="primary" type="submit" className="ms-2">
                    โพสต์
                </Button>
            </Form.Group>
        </Form>
    )
}