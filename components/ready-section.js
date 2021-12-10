import { useState } from 'react'
import styled from 'styled-components'
import Main from '../components/main'
import Button from '../components/button'

export default function Contact({ h2, p }) {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null,
    },
  })

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
    phone: '',
    message: '',
  })

  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()

    setStatus((prevStatus) => ({
      ...prevStatus,
      submitting: true,
    }))

    const endpoint = ''

    const body = JSON.stringify({
      name: inputs.name,
      email: inputs.email,
      phone: inputs.phone,
      message: inputs.message,
    })

    console.log(body)

    const res = await fetch(endpoint, {
      method: 'POST',
      body,
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  const isEnabled = inputs.email.length && inputs.firstName > 0

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg: msg,
        },
      })
      setInputs({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
    } else {
      setStatus({
        info: {
          error: true,
          msg: msg,
        },
      })
    }
  }
  return (
    <>
      <Main>
        <section className="ready-section">
          <h2>{h2}</h2>
          <p>{p}</p>
          <form onSubmit={handleOnSubmit}>
            <div className="form-input">
              <label htmlFor="name">Name *</label>
              <input
                id="name"
                type="text"
                onChange={handleOnChange}
                required
                value={inputs.name}
              />
            </div>
            <div className="form-input">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                type="email"
                onChange={handleOnChange}
                required
                value={inputs.email}
              />
            </div>
            <div className="form-input">
              <label htmlFor="phone">Phone *</label>
              <input
                id="phone"
                type="text"
                onChange={handleOnChange}
                required
                value={inputs.phone}
              />
            </div>
            <div className="form-input">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                type="text"
                onChange={handleOnChange}
                required
                value={inputs.message}
                placeholder="Please enter your website domain name and any other details you want us to know."
              ></textarea>
            </div>
            <SubmitButton
              type="submit"
              disabled={status.submitting || isEnabled}
            >
              {!status.submitting
                ? !status.submitted
                  ? 'I want more Traffic!!!'
                  : 'Got it!'
                : 'Submitting...'}
            </SubmitButton>
            {status.info.error && (
              <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && (
              <div className="success">
                Your message has been sent to Kester at Bowie SEO
              </div>
            )}
          </form>
        </section>
      </Main>
    </>
  )
}

const SubmitButton = styled(Button)`
  width: 100%;
  margin: 1rem 0;
  color: #fff;
  background: rgb(240, 78, 74);
`

// const SubmitButton = styled(Button)`
//   width: 100%;
//   margin: 1rem 0;
//   color: #fff;
//   background: #d35400;
//   border: 1px solid #d35400;
// `
