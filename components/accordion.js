import { useState } from 'react'
import styled from 'styled-components'
import { data } from '../components/lib/data'
import { FAQPageJsonLd } from 'next-seo'

const Accordion = () => {
  console.log(data)

  const [clicked, setClicked] = useState(false)
  const [isActive, setActive] = useState('')

  const toggleClass = () => {
    setActive(!isActive)
  }

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null)
    }
    setClicked(index)
  }
  return (
    <AccordionSection
      className={isActive ? 'active' : null}
      onClick={toggleClass}
    >
      <Container>
        {data.map((item, index) => {
          return (
            <>
              <Wrap onClick={() => toggle(index)} key={index}>
                <h3>{item.question}</h3>
                <span>{clicked === index ? '-' : '+'}</span>
              </Wrap>
              {clicked === index ? (
                <DropDown>
                  <p>{item.answer}</p>
                </DropDown>
              ) : null}
            </>
          )
        })}
      </Container>
    </AccordionSection>
  )
}

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 2rem;
`

const Container = styled.div`
  position: relative;
  width: 100%;
`

const Wrap = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);

  h3 {
    margin: 0;
  }
`

const DropDown = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  cursor: pointer;
`

export default Accordion
