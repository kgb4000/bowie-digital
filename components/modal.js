import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Button from './button'

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const handleCloseClick = (e) => {
    e.preventDefault()
    onClose()
  }

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </StyledModalHeader>
        {title && <StyledModalTitle>{title}</StyledModalTitle>}
        <StyledModalBody>
          <section>
            <div className="modal-container">
              <h2>Get Your Free SEO Audit</h2>
              <p>
                Find out what's holding your website back from ranking higher
                and getting more traffic.
              </p>
              <form>
                <div className="form-data">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="form-data">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" />
                </div>
                <div className="form-data">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" name="phone" id="phone" />
                </div>
                <div className="form-data">
                  <label htmlFor="website">Website</label>
                  <input type="text" name="website" id="website" />
                </div>
                <SubmitButton>I Want More Website Traffic!</SubmitButton>
              </form>
            </div>
          </section>
        </StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    )
  } else {
    return null
  }
}

const StyledModalBody = styled.div`
  .modal-container {
    max-width: 30rem;
    padding: 0 2rem;
  }
  font-size: 1rem;
  input {
    height: 40px;
  }
  textarea {
    height: 50px;
  }
  section {
    padding: 0;

    h2 {
      font-size: 1.5rem;
      margin: 1rem 0;
    }
  }
`

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`

const StyledModal = styled.div`
  background: white;
  max-width: 90%;
  border-radius: 15px;
  padding: 2rem 0.5rem;
`
const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`

const SubmitButton = styled(Button)`
  width: 100%;
  margin: 1rem 0;
  color: #fff;
  background: #d35400;
  border: 1px solid #d35400;
`

export default Modal
