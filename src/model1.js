import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'



function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button variant="primary" onClick={handleShow}>
        Launch demo modal
      </button>


    </>
  );
}

export default Example;