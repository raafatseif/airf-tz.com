import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const FooterContent = (props) => {
  return (
    <>
      <div className="footer-content-container">
        <Link href="/">
          <a className="footer-content-link1">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="footer-content-image"
            />
          </a>
        </Link>
        <span className="footer-content-text1">
          {props.text ?? (
            <Fragment>
              <span className="footer-content-text2">
                <span>
                  © 2024
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <Link href="/">
                  <a className="footer-content-link2">
                    Agriculture Innovation Research Foundation
                  </a>
                </Link>
                <span>, All Rights Reserved.</span>
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <style jsx>
        {`
          .footer-content-container {
            flex: 0 0 auto;
            width: var(--dl-size-size-contentwidth);
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .footer-content-link1 {
            display: contents;
          }
          .footer-content-image {
            height: 4rem;
            margin-right: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .footer-content-text2 {
            display: inline-block;
            margin-left: var(--dl-space-space-halfunit);
          }
          .footer-content-link2 {
            color: var(--dl-color-leaves-dark);
            font-style: normal;
            font-weight: 600;
          }
          @media (max-width: 991px) {
            .footer-content-container {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .footer-content-text1 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .footer-content-text2 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .footer-content-container {
              padding-top: 0px;
              flex-direction: column;
              padding-bottom: 0px;
            }
            .footer-content-image {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .footer-content-text1 {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer-content-text2 {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

FooterContent.defaultProps = {
  imageAlt: 'logo',
  imageSrc: '/external/airf-logo-1500h.png',
  text: undefined,
}

FooterContent.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  text: PropTypes.element,
}

export default FooterContent
