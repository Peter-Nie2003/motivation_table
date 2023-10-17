import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { post } from '../../utilities';

function SubmitLists() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, nameSetter] = useState<string>('');
    const handlename = (event: ChangeEvent<HTMLInputElement>) => {
        nameSetter(event.target.value);
    }
    const handleSubmit = () => {
        const body = {
            name: name,
        }
        post('/api/addNewList', body);
    }
    async function handleSubmitButton() {
        await handleSubmit();
        await handleClose();
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>add new workSpace</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>workSpace name</Form.Label>
                            <Form.Control
                                type="workspace"
                                onChange={handlename}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmitButton}>
                        submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SubmitLists;