import React, { useState, ChangeEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { post } from "../../utilities"
import { Form, FloatingLabel } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";


function SubmitButton() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, nameSetter] = useState<string>('');
  const [difficulty, difficultySetter] = useState<number>(0);
  const [interest, interestSetter] = useState<number>(0);
  const [selectDate, setSelectDate] = useState(new Date());
  // function handle the input change and submit
  const handleName = (event: ChangeEvent<HTMLInputElement>) => {
    nameSetter(event.target.value);
  }

  const handleDifficulty = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    difficultySetter(parseInt(value));
  }
  const handleInterest = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    interestSetter(parseInt(value));
  }
  const handleSubmit = () => {
    const body = {
      name: name,
      dueDate: selectDate.toDateString(),
      difficulty: difficulty,
      interest: interest,
    };
    post('/api/newTasks', body);
  }
  async function handleUnderstand() {
    await handleClose();
    await handleSubmit();
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        add new tasks
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>new tasks</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput1"
            label="name"
            className="mb-3"
          >
            <Form.Control type="name" onChange={handleName} />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput3"
            label="0"
            className="mb-3"
          >
            <Form.Control type="name" onChange={handleDifficulty} />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput4"
            label="0"
            className="mb-3"
          >
            <Form.Control type="Interest rate" onChange={handleInterest} />
          </FloatingLabel>
          <DatePicker selected={selectDate} onChange={(date) => setSelectDate(date)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUnderstand}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SubmitButton;
