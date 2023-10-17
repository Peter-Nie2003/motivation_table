import React, { useState, ChangeEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { post } from "../../utilities"
import { Form, FloatingLabel, Col } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";


function SubmitButton() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, nameSetter] = useState<string>('');
  const [confident, confidentSetter] = useState<number>(0);
  const [interest, interestSetter] = useState<number>(0);
  const [selectDate, setSelectDate] = useState(new Date());
  const [type,setType]=useState(0)
  // function handle the input change and submit
  const handleName = (event: ChangeEvent<HTMLInputElement>) => {
    nameSetter(event.target.value);
  }

  const handleConfident = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    confidentSetter(parseInt(value));
  }
  const handleInterest = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    interestSetter(parseInt(value));
  }
  const handleType = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setType(parseInt(value));
  }
  const handleSubmit = () => {
    const body = {
      name: name,
      dueDate: selectDate.toDateString(),
      time: selectDate.getTime(),
      confident: confident,
      interest: interest,
      done: false,
      workSpace:type,
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
          <Col>
            <Form.Label htmlFor="inputName">name</Form.Label>
            <Form.Control type="name" onChange={handleName} />
            <Form.Label htmlFor="inputConfident">confident</Form.Label>
            <Form.Control type="confident rate" onChange={handleConfident} />
            <Form.Label htmlFor="inputInterest">intereset</Form.Label>
            <Form.Control type="Interest rate" onChange={handleInterest} />
            <Form.Label htmlFor="inputType">Type</Form.Label>
            <Form.Control type="Type of task" onChange={handleType} />
            <div style={{ marginTop: '20px' }}>
              Date
            </div>
            <DatePicker selected={selectDate} onChange={(date) => setSelectDate(date)} />
          </Col>
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
