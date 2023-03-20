import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import Carousel from './components/Carousel/Carousel';
import Row from './components/Row/Row';
import Col from './components/Col/Col';
import DatePicker from './components/DatePicker/DatePicker';
import CartoonNetworkSpinner from './components/CartoonNetworkSpinner/CartoonNetworkSpinner';
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faXmark, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

library.add(faXmark, faAngleLeft, faAngleRight);

const App = () => {
  const [isOpen, openModal] = useState(false);
  const [date, setDate] = useState();

  return (
    <>
      <h1>Modal</h1>
      <button onClick={() => openModal(true)}>Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={() => openModal(false)}
        >
        <Modal.Title>My Modal Title</Modal.Title>
        <Modal.Body>My Modal Body</Modal.Body>
        <Modal.Footer>My Modal Footer</Modal.Footer>
      </Modal>

      <h1>Carousel</h1>
      <Carousel
        images={[
          'https://image.smythstoys.com/zoom/211963.jpg',
          'https://static-de.gamestop.de/images/products/304916/5scrmax1.jpg',
          'https://fischertoys.de/media/image/product/8864/lg/squishmallows-detina-der-hund-19-cm.jpg'
        ]}
        size="medium"
      />

      <h1>Row/Col</h1>
      <Row>
        <Col size={4}></Col>
        <Col size={4}></Col>
        <Col size={4}></Col>
        <Col size={6}></Col>
        <Col size={6}></Col>
        <Col size={3}></Col>
        <Col size={3}></Col>
      </Row>

      <h1>DatePicker</h1>
      <DatePicker
        onDatePick={ () => setDate(date) }
        locale="is-IS" />

      <h1>CartoonNetworkSpinner</h1>
      <CartoonNetworkSpinner 
        interval={4}/>
    </>
  );
}

export default App;
