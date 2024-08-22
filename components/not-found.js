import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NotFound = (props) => {
  return (
    <>
      <div className="not-found-container1 thq-section-padding">
        <div className="not-found-max-width thq-section-max-width">
          <div className="not-found-container2">
            <h1>
              {props.heading1 ?? (
                <Fragment>
                  <h1 className="not-found-text19 thq-heading-2">Ooops...</h1>
                </Fragment>
              )}
            </h1>
            <h2>
              {props.heading2 ?? (
                <Fragment>
                  <h2 className="not-found-text16 thq-heading-2">
                    Page not found
                  </h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="not-found-text18 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris ....
                  </p>
                </Fragment>
              )}
            </p>
            <Link href="/">
              <a className="not-found-link thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="not-found-text20 thq-body-small">
                        Back to homepage
                      </span>
                    </Fragment>
                  )}
                </span>
              </a>
            </Link>
          </div>
          <div className="not-found-container3">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="not-found-image"
            />
            <div className="not-found-container4"></div>
            <div className="not-found-container5">
              <h1>
                {props.heading3 ?? (
                  <Fragment>
                    <h1 className="not-found-text15 thq-heading-2">404</h1>
                  </Fragment>
                )}
              </h1>
              <span>
                {props.content2 ?? (
                  <Fragment>
                    <span className="not-found-text17 thq-body-large">
                      Page not found
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .not-found-container1 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            min-height: 400px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .not-found-max-width {
            gap: var(--dl-space-space-threeunits);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .not-found-container2 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 60%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: center;
          }
          .not-found-link {
            text-decoration: none;
          }
          .not-found-container3 {
            flex: 1;
            height: 100%;
            display: flex;
            position: relative;
            min-height: 400px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .not-found-image {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .not-found-container4 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.7);
          }
          .not-found-container5 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .not-found-text15 {
            color: var(--dl-color-theme-neutral-light);
            display: inline-block;
          }
          .not-found-text16 {
            display: inline-block;
            font-style: normal;
            font-weight: 400;
          }
          .not-found-text17 {
            color: var(--dl-color-theme-neutral-light);
            display: inline-block;
          }
          .not-found-text18 {
            display: inline-block;
          }
          .not-found-text19 {
            display: inline-block;
          }
          .not-found-text20 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .not-found-container1 {
              align-items: center;
              justify-content: center;
            }
            .not-found-container2 {
              width: 100%;
              align-items: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .not-found-container3 {
              display: none;
            }
            .not-found-text18 {
              text-align: center;
            }
            .not-found-text19 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .not-found-container1 {
              height: auto;
            }
            .not-found-container2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

NotFound.defaultProps = {
  heading3: undefined,
  heading2: undefined,
  content2: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1576668919998-78ce5ffc3bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDA3NDg2NXw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  heading1: undefined,
  image1Alt: 'image',
  action1: undefined,
}

NotFound.propTypes = {
  heading3: PropTypes.element,
  heading2: PropTypes.element,
  content2: PropTypes.element,
  image1Src: PropTypes.string,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  image1Alt: PropTypes.string,
  action1: PropTypes.element,
}

export default NotFound
