import styled from 'styled-components'
import Button from '../components/button'

const Ready = () => {
  return (
    <section className="ready-section">
      <div className="container">
        <h2 className="title">
          Ready To Get Traffic To Your Website And Make More Money?
        </h2>
        <p className="subtext">
          {' '}
          We look forward to meeting you and showing you how you can get more
          traffic and make more money for your business!
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
          <div className="form-data">
            <label htmlFor="message">Your message (optional)</label>
            <textarea name="message" id="message"></textarea>
          </div>
          <SubmitButton>I Want More Website Traffic!</SubmitButton>
        </form>
      </div>
    </section>
  )
}

export default Ready

const SubmitButton = styled(Button)`
  width: 100%;
  margin: 1rem 0;
  color: #fff;
  background: #d35400;
  border: 1px solid #d35400;
`
