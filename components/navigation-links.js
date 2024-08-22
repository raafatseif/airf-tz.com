import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <Link href="/">
          <a className="navigation-links-link1">{props.text1}</a>
        </Link>
        <Link href="/training">
          <a className="navigation-links-link2">{props.text11}</a>
        </Link>
        <Link href="/programs-services">
          <a className="navigation-links-link3">{props.text2}</a>
        </Link>
        <Link href="/vision-and-mission">
          <a className="navigation-links-link4">{props.text3}</a>
        </Link>
        <Link href="/partnership">
          <a className="navigation-links-link5">{props.text4}</a>
        </Link>
        <Link href="/about">
          <a className="navigation-links-link6">{props.text5}</a>
        </Link>
        <Link href="/contact">
          <a className="navigation-links-link7">{props.text6}</a>
        </Link>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-link1 {
            color: var(--dl-color-gray-white);
            width: auto;
            height: auto;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navigation-links-link1:hover {
            background-color: var(--dl-color-wood-dark);
          }
          .navigation-links-link2 {
            color: var(--dl-color-gray-white);
            width: auto;
            height: auto;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .navigation-links-link2:hover {
            background-color: var(--dl-color-wood-dark);
          }
          .navigation-links-link3 {
            color: var(--dl-color-gray-white);
            width: auto;
            height: auto;
            transition: 0.3s;
            margin-left: 0px;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            border-top-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .navigation-links-link3:hover {
            background-color: var(--dl-color-wood-dark);
          }
          .navigation-links-link4 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            margin-left: 0px;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            border-top-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .navigation-links-link4:hover {
            background-color: var(--dl-color-wood-dark);
          }
          .navigation-links-link5 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            margin-left: 0px;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            border-top-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .navigation-links-link5:hover {
            background-color: var(--dl-color-wood-dark);
          }
          .navigation-links-link6 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            margin-left: 0px;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            border-top-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .navigation-links-link6:hover {
            background-color: var(--dl-color-wood-dark);
          }
          .navigation-links-link7 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            margin-left: 0px;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            border-top-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .navigation-links-link7:hover {
            background-color: var(--dl-color-wood-dark);
          }

          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-link1 {
              width: 100%;
              margin-bottom: 0px;
            }
            .navigation-links-link2 {
              width: 100%;
              margin-bottom: 0px;
            }
            .navigation-links-link3 {
              width: 100%;
              margin-left: 0;
              border-width: 0px;
              margin-bottom: 0px;
              border-left-width: 0px;
            }
            .navigation-links-link4 {
              width: 100%;
              margin-left: 0;
              border-width: 0px;
              margin-bottom: 0px;
              border-left-width: 0px;
            }
            .navigation-links-link5 {
              width: 100%;
              margin-left: 0;
              border-width: 0px;
              margin-bottom: 0px;
              border-left-width: 0px;
            }
            .navigation-links-link6 {
              width: 100%;
              margin-left: 0;
              border-width: 0px;
              margin-bottom: 0px;
              border-left-width: 0px;
            }
            .navigation-links-link7 {
              width: 100%;
              margin-left: 0;
              border-width: 0px;
              margin-bottom: 0px;
              border-left-width: 0px;
            }
            .navigation-linksroot-class-name11 {
              width: 100%;
            }
            .navigation-linksroot-class-name12 {
              fill: var(--dl-color-gray-black);
              color: var(--dl-color-gray-black);
              width: 100%;
            }
            .navigation-linksroot-class-name13 {
              width: 100%;
            }
            .navigation-linksroot-class-name14 {
              fill: var(--dl-color-gray-black);
              color: var(--dl-color-gray-black);
              width: 100%;
            }
            .navigation-linksroot-class-name15 {
              width: 100%;
            }
            .navigation-linksroot-class-name16 {
              fill: var(--dl-color-gray-black);
              color: var(--dl-color-gray-black);
              width: 100%;
            }
            .navigation-linksroot-class-name17 {
              width: 100%;
            }
            .navigation-linksroot-class-name18 {
              fill: var(--dl-color-gray-black);
              color: var(--dl-color-gray-black);
              width: 100%;
            }
            .navigation-linksroot-class-name19 {
              width: 100%;
            }
            .navigation-linksroot-class-name20 {
              fill: var(--dl-color-gray-black);
              color: var(--dl-color-gray-black);
              width: 100%;
            }
            .navigation-linksroot-class-name21 {
              width: 100%;
            }
            .navigation-linksroot-class-name22 {
              fill: var(--dl-color-gray-black);
              color: var(--dl-color-gray-black);
              width: 100%;
            }
            .navigation-linksroot-class-name23 {
              width: 100%;
            }
            .navigation-linksroot-class-name24 {
              fill: var(--dl-color-gray-black);
              color: var(--dl-color-gray-black);
              width: 100%;
            }
            .navigation-linksroot-class-name25 {
              width: 100%;
            }
            .navigation-linksroot-class-name26 {
              fill: var(--dl-color-gray-black);
              color: var(--dl-color-gray-black);
              width: 100%;
            }
            .navigation-linksroot-class-name27 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .navigation-linksroot-class-name21 {
              fill: var(--dl-color-gray-black);
              color: var(--dl-color-gray-black);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  text11: 'Training',
  text3: 'Vision and Mission',
  text6: 'Contact',
  text2: 'Programs/Services',
  text1: 'Home',
  text5: 'About',
  text4: 'Partnership',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text11: PropTypes.string,
  text3: PropTypes.string,
  text6: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text5: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
