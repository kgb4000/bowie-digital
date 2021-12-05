import Header from '../components/header'
import Main from '../components/main'
import HeroBox from '../components/herobox'
import Footer from '../components/footer'

import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <Header buttontext="Talk To Us" />
      <HeroBox
        backgroundHeight="100vh"
        heroText="Our Digital Marketing Agreement"
        subText="This agreement is between Bowie Digital Marketing and You (the client). Sign and send this agreement back to us so that we can start getting you more traffic and sales."
      />
      <Main>
        <section className="contact">
          <div className="container">
            <h2 className="">Online Marketing Services Agreement</h2>

            <p>For Client: </p>
            <p>Date:</p>

            <p>
              Thank you for choosing Bowie Digital Marketing as your digital
              partner. We want to make sure we can provide the best possible
              service within the scope of your plan. In order to do this, this
              document outlines what you can expect from us, in return, our
              expectations from you.
            </p>

            <p>
              By agreeing to this document. Bowie Digital Marketing has retained
              Made By Factory Limited to provide the Services (as defined below)
              in subject to the terms & Conditions set out In this Agreement and
              in accordance with the retainer limit. (Section 5)
            </p>

            <h2>1: Aims & Objectives</h2>

            <p>
              The aim of the agreement and what we will deliver (where
              applicable)
            </p>
            <ul>
              <li>
                Boost traffic to the Client's website at in order to raise your
                brand profile
              </li>
              <li>Improve/protect your brand online</li>
              <li>Improve the speed and functionality of your website</li>
              <li>
                Improve conversion rates of existing traffic, in order to boost
                sales.
              </li>
              <li>
                Identify and monitor client competition and introduce new ideas
                that could be beneficial to your online visibility
              </li>
              <li>
                Provide consultancy advice on marketing related issues, such as
                cost saving.
              </li>
            </ul>

            <p>
              Current key metrics will be benchmarked upon the commencement of
              this agreement and continual comparisons drawn throughout the term
              of this agreement, (where applicable) including but not limited to
              sessions, conversions, conversion rate, session duration, average
              order value.
            </p>

            <p>
              In order to achieve this objective, Made By Factory will undertake
              the work set out in Section 3 Scope of Services, set out below.
              Made By Factory will produce ranking. traffic and progress reports
              for you at the end of each month. You accept that the achievement
              of these aims and objectives also rely on the mitigating factors
              detailed in section 2. (below)
            </p>

            <h2>2: Mitigating Factors</h2>

            <p>
              The work undertaken by us, Bowie Digital Marketing includes
              on-site optimization recommendations, direct on-site work (where
              access is provided) to us and may include off-site link and
              reputation building where applicable{' '}
            </p>

            <p>
              The majority of the on-site work can be completed internally by us
              at no extra cost and will form part of your plan. Where cost is
              involved, we will make the recommendations accordingly and carry
              out those works subject to agreement by you, the client.{' '}
            </p>

            <p>
              In order for our aims and objectives to be met, full and timely
              implementation of all recommended work by the client and any third
              parties is required.{' '}
            </p>

            <h2>3: Scope Of Services</h2>

            <p>
              Bowie Digital Marketing will provide resources to undertake a
              range of services for you, in respect of website which may
              comprise of:{' '}
            </p>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  )
}
