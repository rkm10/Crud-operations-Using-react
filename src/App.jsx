import React, { useState } from "react"
import './App.css'
import reactDom from 'react-dom'



function Modal(props) {
  return (
    reactDom.createPortal(
      <div className="modal-overlay">
        <div className="content">
          <h1>This is heading</h1>
          <p>this is modal content</p>
          <button className="btn btn-danger" onClick={props.close}>close</button>
        </div>
      </div>, document.getElementById('modal-root')
    )
  )

}

function App() {
  const [showModal, setShowModal] = useState()
  function toggleModal() {
    setShowModal(!showModal)
  }


  return (
    <div className="app">
      <button className="btn btn-primary" onClick={toggleModal}>open modal</button>
      {showModal && <Modal close={toggleModal}></Modal>}
    </div>
  )
}
export default App
