import React, { useState, ChangeEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { post } from "../../utilities"
import { Form, FloatingLabel, Col } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "../../utilities.css"

interface submitTasksProps {
  id: string;
}
function SubmitTasks(props: submitTasksProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, nameSetter] = useState<string>('');
  const [confident, confidentSetter] = useState<number>(0);
  const [interest, interestSetter] = useState<number>(0);
  const [selectDate, setSelectDate] = useState(new Date());
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
  const handleSubmit = () => {
    const body = {
      name: name,
      dueDate: selectDate.toDateString(),
      time: selectDate.getTime(),
      confident: confident,
      interest: interest,
      done: false,
      workSpace: props.id,
    };
    post('/api/newTasks', body);
    post('/api/upToDateTask');
  }
  async function handleUnderstand() {
    await handleClose();
    await handleSubmit();
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow} className='medium-button' >
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

export default SubmitTasks;
