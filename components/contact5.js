import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Contact5 = (props) => {
  return (
    <>
      <div className="contact5-container thq-section-padding">
        <div className="contact5-max-width thq-section-max-width">
          <div className="contact5-section-title">
            <div className="contact5-content1">
              <h2>
                {props.heading1 ?? (
                  <Fragment>
                    <h2 className="contact5-text25 thq-heading-2">
                      Contact Us
                    </h2>
                  </Fragment>
                )}
              </h2>
              <p>
                {props.content1 ?? (
                  <Fragment>
                    <p className="contact5-text24 thq-body-large">
                      Feel free to reach out to us for any inquiries or
                      collaborations.
                    </p>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="contact5-content2 thq-flex-row">
            <div className="contact5-content3">
              <div className="contact5-content4">
                <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <div className="contact5-contact-info1">
                  <h3 className="contact5-text12 thq-heading-3">Email</h3>
                  <p>
                    {props.content2 ?? (
                      <Fragment>
                        <p className="contact5-text20 thq-body-large">
                          +255 123 456 789
                        </p>
                      </Fragment>
                    )}
                  </p>
                  <span>
                    {props.email ?? (
                      <Fragment>
                        <span className="contact5-text26 thq-body-small">
                          info@airf.org
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="contact5-content5">
                <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                  <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                </svg>
                <div className="contact5-contact-info2">
                  <h3 className="contact5-text14 thq-heading-3">Phone</h3>
                  <p>
                    {props.content3 ?? (
                      <Fragment>
                        <p className="contact5-text19 thq-body-large">
                          Our office hours are Monday to Friday, 9am to 5pm
                        </p>
                      </Fragment>
                    )}
                  </p>
                  <span>
                    {props.phone1 ?? (
                      <Fragment>
                        <span className="contact5-text21 thq-body-small">
                          +255 123 456 789
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="contact5-content6">
                <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                  <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                </svg>
                <div className="contact5-contact-info3">
                  <h3 className="contact5-text17 thq-heading-3">Office</h3>
                  <p>
                    {props.content5 ?? (
                      <Fragment>
                        <p className="contact5-text23 thq-body-large">
                          For partnership inquiries, please email
                          partnerships@airf.org
                        </p>
                      </Fragment>
                    )}
                  </p>
                  <span>
                    {props.address1 ?? (
                      <Fragment>
                        <span className="contact5-text22 thq-body-small">
                          Plot 123, Kilimo Street, Dar es Salaam, Tanzania
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="contact5-image thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact5-container {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact5-max-width {
            align-self: center;
          }
          .contact5-section-title {
            width: 100%;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .contact5-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact5-content2 {
            width: 100%;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact5-content3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact5-content4 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact5-contact-info1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact5-text12 {
            align-self: flex-start;
            text-align: center;
          }
          .contact5-content5 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact5-contact-info2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact5-text14 {
            align-self: flex-start;
            text-align: center;
          }
          .contact5-content6 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact5-contact-info3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact5-text17 {
            align-self: flex-start;
            text-align: center;
          }
          .contact5-image {
            max-width: 767px;
          }
          .contact5-text19 {
            display: inline-block;
          }
          .contact5-text20 {
            display: inline-block;
          }
          .contact5-text21 {
            display: inline-block;
          }
          .contact5-text22 {
            display: inline-block;
          }
          .contact5-text23 {
            display: inline-block;
          }
          .contact5-text24 {
            display: inline-block;
          }
          .contact5-text25 {
            display: inline-block;
          }
          .contact5-text26 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .contact5-content2 {
              position: relative;
              align-items: flex-start;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Contact5.defaultProps = {
  content3: undefined,
  content2: undefined,
  phone1: undefined,
  imageAlt: 'AIRF Logo',
  address1: undefined,
  content5: undefined,
  content1: undefined,
  imageSrc:
    'https://images.unsplash.com/photo-1620416127728-e8afbf96def5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDE1ODA2NXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  email: undefined,
}

Contact5.propTypes = {
  content3: PropTypes.element,
  content2: PropTypes.element,
  phone1: PropTypes.element,
  imageAlt: PropTypes.string,
  address1: PropTypes.element,
  content5: PropTypes.element,
  content1: PropTypes.element,
  imageSrc: PropTypes.string,
  heading1: PropTypes.element,
  email: PropTypes.element,
}

export default Contact5
