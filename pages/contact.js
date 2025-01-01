import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'
import FooterContent from '../components/footer-content'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container10">
        <Head>
          <title>contact - AIRF</title>
          <meta
            name="description"
            content="AIRF is a non-for profit, development organization headquartered in Arusha, Tanzania, with branches in Dar-es-Salaam and Kagera, Tanzania."
          />
          <meta property="og:title" content="contact - AIRF" />
          <meta
            property="og:description"
            content="AIRF is a non-for profit, development organization headquartered in Arusha, Tanzania, with branches in Dar-es-Salaam and Kagera, Tanzania."
          />
        </Head>
        <div className="contact-logo">
          <div className="contact-container11">
            <Link href="/">
              <a className="contact-link1">
                <img
                  alt="logo"
                  src="/external/airf-logo-1500h.png"
                  className="contact-image"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="contact-header">
          <div className="contact-container12">
            <header
              data-thq="thq-navbar"
              className="contact-navbar-interactive"
            >
              <div data-thq="thq-navbar-nav" className="contact-desktop-menu">
                <NavigationLinks rootClassName="rootClassName22"></NavigationLinks>
              </div>
              <div data-thq="thq-burger-menu" className="contact-burger-menu">
                <svg viewBox="0 0 1024 1024" className="contact-icon10">
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div data-thq="thq-mobile-menu" className="contact-mobile-menu">
                <div className="contact-nav">
                  <div className="contact-top">
                    <div
                      data-thq="thq-close-menu"
                      className="contact-close-menu"
                    >
                      <svg viewBox="0 0 1024 1024" className="contact-icon12">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <NavigationLinks rootClassName="rootClassName23"></NavigationLinks>
                </div>
                <div>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="contact-icon14"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="contact-icon16"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="contact-icon18"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </header>
          </div>
        </div>
        <div className="contact-blog">
          <div className="contact-container13">
            <div className="contact-section-title">
              <div className="contact-content10">
                <h1 className="Heading h1">Contact Us</h1>
                <p>
                  Feel free to reach out to us for any inquiries or
                  collaborations.
                </p>
              </div>
            </div>
            <div className="contact-row1">
              <div className="contact-container14">
                <div className="contact-content11">
                  <div className="contact-content12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                      <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                    </svg>
                    <div className="contact-contact-info1">
                      <h2 className="contact-text12 h2">Email</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-container15">
                <div className="contact-content13">
                  <div className="contact-content14">
                    <div className="contact-contact-info2">
                      <span>agric@airf-tz.com</span>
                      <span>gratian.bamwenda@gmail.com</span>
                      <span>nahyarashid@gmail.com</span>
                      <span>dakitalima@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-row2">
              <div className="contact-container16">
                <div className="contact-content15">
                  <div className="contact-content16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                      <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                    </svg>
                    <div className="contact-contact-info3">
                      <h2 className="contact-text13 thq-heading-3 h2">Phone</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-container17">
                <div className="contact-content17">
                  <div className="contact-content18">
                    <div className="contact-contact-info4">
                      <span>+255 754 005 656</span>
                      <span>+255 746 437 953</span>
                      <span>+255 755 819 611</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-row3">
              <div className="contact-container18">
                <div className="contact-content19">
                  <div className="contact-content20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                      <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                    </svg>
                    <div className="contact-contact-info5">
                      <h2 className="contact-text17 h2">Post box</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-container19">
                <div className="contact-content21">
                  <div className="contact-content22">
                    <div className="contact-contact-info6">
                      <span>P.O. Box 15480, Arusha, Tanzania</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="contact-footer">
          <FooterContent
            text={
              <Fragment>
                <span className="contact-text18">
                  <span>
                    © 2024
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <Link href="/">
                    <a className="contact-link2">
                      Agriculture Innovation Research Foundation
                    </a>
                  </Link>
                  <span>, All Rights Reserved.</span>
                </span>
              </Fragment>
            }
          ></FooterContent>
        </footer>
        <footer className="contact-space-filler">
          <div className="contact-container20"></div>
        </footer>
      </div>
      <style jsx>
        {`
          .contact-container10 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .contact-logo {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .contact-container11 {
            flex: 0 0 auto;
            width: var(--dl-size-size-contentwidth);
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .contact-link1 {
            display: contents;
          }
          .contact-image {
            height: 8.5rem;
            margin-right: 0px;
            text-decoration: none;
          }
          .contact-header {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .contact-container12 {
            width: var(--dl-size-size-contentwidth);
            display: flex;
            padding: var(--dl-space-space-halfunit);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: 0px;
            padding-top: 0px;
            padding-left: 0px;
            margin-bottom: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
          }
          .contact-navbar-interactive {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            justify-content: space-between;
            background-color: var(--dl-color-gray-dark);
          }
          .contact-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .contact-burger-menu {
            display: none;
          }
          .contact-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .contact-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .contact-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .contact-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .contact-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .contact-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .contact-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .contact-icon18 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .contact-blog {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .contact-container13 {
            width: var(--dl-size-size-contentwidth);
            display: flex;
            padding: var(--dl-space-space-twounits);
            min-height: auto;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .contact-section-title {
            width: 100%;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .contact-content10 {
            gap: 0;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-row1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .contact-container14 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-content11 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: var(--dl-size-size-xxlarge);
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-halfunit);
            flex-direction: column;
          }
          .contact-content12 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-contact-info1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-text12 {
            align-self: flex-start;
            text-align: center;
          }
          .contact-container15 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-content13 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-halfunit);
            flex-direction: column;
          }
          .contact-content14 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-contact-info2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-row2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .contact-container16 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-content15 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: var(--dl-size-size-xxlarge);
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-halfunit);
            flex-direction: column;
          }
          .contact-content16 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-contact-info3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-text13 {
            align-self: flex-start;
            text-align: center;
          }
          .contact-container17 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-content17 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-halfunit);
            flex-direction: column;
          }
          .contact-content18 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-contact-info4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-row3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .contact-container18 {
            display: flex;
            position: relative;
            flex-direction: column;
          }
          .contact-content19 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: var(--dl-size-size-xxlarge);
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-halfunit);
            flex-direction: column;
          }
          .contact-content20 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-contact-info5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-text17 {
            align-self: flex-start;
            text-align: center;
          }
          .contact-container19 {
            display: flex;
            position: relative;
            flex-direction: column;
          }
          .contact-content21 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-halfunit);
            flex-direction: column;
          }
          .contact-content22 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-contact-info6 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-footer {
            width: 100%;
            display: flex;
            max-width: auto;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: 0px;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .contact-text18 {
            display: inline-block;
            margin-left: var(--dl-space-space-halfunit);
          }
          .contact-link2 {
            color: var(--dl-color-leaves-dark);
            font-style: normal;
            font-weight: 600;
          }
          .contact-space-filler {
            flex: 1;
            width: 100%;
            height: auto;
            display: flex;
            max-width: auto;
            max-height: auto;
            min-height: auto;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .contact-container20 {
            flex: 1;
            width: var(--dl-size-size-contentwidth);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: center;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          @media (max-width: 991px) {
            .contact-container11 {
              width: 100%;
            }
            .contact-container12 {
              width: 100%;
            }
            .contact-container13 {
              width: 100%;
              flex-direction: column;
            }
            .contact-footer {
              padding-left: 0px;
              padding-right: 0px;
            }
            .contact-space-filler {
              padding-left: 0px;
              padding-right: 0px;
            }
            .contact-container20 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .contact-container11 {
              justify-content: center;
            }
            .contact-container12 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-unit);
              justify-content: center;
            }
            .contact-navbar-interactive {
              justify-content: center;
            }
            .contact-desktop-menu {
              display: none;
            }
            .contact-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .contact-icon10 {
              fill: var(--dl-color-gray-white);
            }
            .contact-mobile-menu {
              background-color: var(--dl-color-gray-dark);
            }
            .contact-top {
              justify-content: flex-end;
            }
            .contact-icon12 {
              fill: var(--dl-color-gray-white);
            }
            .contact-container13 {
              padding: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .contact-footer {
              padding-left: 0px;
              padding-right: 0px;
            }
            .contact-text18 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .contact-space-filler {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .contact-container12 {
              padding: var(--dl-space-space-unit);
            }
            .contact-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .contact-mobile-menu {
              padding: 16px;
            }
            .contact-container13 {
              padding: var(--dl-space-space-halfunit);
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .contact-footer {
              padding: 0px;
            }
            .contact-text18 {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-space-filler {
              padding: 0px;
            }
            .contact-container20 {
              padding-top: 0px;
              flex-direction: column;
              padding-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
