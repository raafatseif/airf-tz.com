import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'
import FooterContent from '../components/footer-content'

const Page = (props) => {
  return (
    <>
      <div className="page-container1">
        <Head>
          <title>Page - AIRF</title>
          <meta
            name="description"
            content="AIRF is a non-for profit, development organization headquartered in Arusha, Tanzania, with branches in Dar-es-Salaam and Kagera, Tanzania."
          />
          <meta property="og:title" content="Page - AIRF" />
          <meta
            property="og:description"
            content="AIRF is a non-for profit, development organization headquartered in Arusha, Tanzania, with branches in Dar-es-Salaam and Kagera, Tanzania."
          />
        </Head>
        <div className="page-logo">
          <div className="page-container2">
            <Link href="/">
              <a className="page-link1">
                <img
                  alt="logo"
                  src="/external/airf-logo-1500h.png"
                  className="page-image1"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="page-header">
          <div className="page-container3">
            <header data-thq="thq-navbar" className="page-navbar-interactive">
              <div data-thq="thq-navbar-nav" className="page-desktop-menu">
                <NavigationLinks rootClassName="rootClassName24"></NavigationLinks>
              </div>
              <div data-thq="thq-burger-menu" className="page-burger-menu">
                <svg viewBox="0 0 1024 1024" className="page-icon10">
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div data-thq="thq-mobile-menu" className="page-mobile-menu">
                <div className="page-nav">
                  <div className="page-top">
                    <div data-thq="thq-close-menu" className="page-close-menu">
                      <svg viewBox="0 0 1024 1024" className="page-icon12">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <NavigationLinks rootClassName="rootClassName25"></NavigationLinks>
                </div>
                <div>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="page-icon14"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="page-icon16"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="page-icon18"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </header>
          </div>
        </div>
        <div className="page-blog">
          <div className="page-container4">
            <div className="page-container5 thq-section-padding">
              <div className="page-max-width thq-section-max-width">
                <div className="page-container6">
                  <h1 className="thq-heading-2 page-text1">Ooops...</h1>
                  <h2 className="page-text2 thq-heading-2">Page not found</h2>
                  <p className="thq-body-large page-text3">
                    Oops! It seems you&apos;ve ventured into uncharted
                    territory. While we can&apos;t find the page you&apos;re
                    looking for, we invite you to navigate back to our homepage
                    where you can discover our range of consulting, training,
                    and development services.
                  </p>
                  <Link href="/">
                    <a className="page-link2 thq-button-filled">
                      <span className="thq-body-small">Back to homepage</span>
                    </a>
                  </Link>
                </div>
                <div className="page-container7">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1576668919998-78ce5ffc3bd7?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDA3NDg2NXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                    className="page-image2"
                  />
                  <div className="page-container8"></div>
                  <div className="page-container9">
                    <h1 className="page-text4 thq-heading-2">404</h1>
                    <span className="page-text5 thq-body-large">
                      Page not found
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="page-footer">
          <FooterContent
            text={
              <Fragment>
                <span className="page-text6">
                  <span>
                    © 2024
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <Link href="/">
                    <a className="page-link3">
                      Agriculture Innovation Research Foundation
                    </a>
                  </Link>
                  <span>, All Rights Reserved.</span>
                </span>
              </Fragment>
            }
          ></FooterContent>
        </footer>
      </div>
      <style jsx>
        {`
          .page-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page-logo {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .page-container2 {
            flex: 0 0 auto;
            width: var(--dl-size-size-contentwidth);
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .page-link1 {
            display: contents;
          }
          .page-image1 {
            height: 8.5rem;
            margin-right: 0px;
            text-decoration: none;
          }
          .page-header {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .page-container3 {
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
          .page-navbar-interactive {
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
          .page-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .page-burger-menu {
            display: none;
          }
          .page-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .page-mobile-menu {
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
          .page-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .page-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .page-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .page-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .page-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .page-icon18 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .page-blog {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .page-container4 {
            width: var(--dl-size-size-contentwidth);
            display: flex;
            padding: var(--dl-space-space-twounits);
            min-height: auto;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .page-container5 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            min-height: 400px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .page-max-width {
            gap: var(--dl-space-space-threeunits);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .page-container6 {
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
          .page-text2 {
            font-style: normal;
            font-weight: 400;
          }
          .page-link2 {
            text-decoration: none;
          }
          .page-container7 {
            flex: 1;
            height: 100%;
            display: flex;
            position: relative;
            min-height: 400px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-image2 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .page-container8 {
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
          .page-container9 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-text4 {
            color: var(--dl-color-theme-neutral-light);
          }
          .page-text5 {
            color: var(--dl-color-theme-neutral-light);
          }
          .page-footer {
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
          .page-text6 {
            display: inline-block;
            margin-left: var(--dl-space-space-halfunit);
          }
          .page-link3 {
            color: var(--dl-color-leaves-dark);
            font-style: normal;
            font-weight: 600;
          }
          @media (max-width: 991px) {
            .page-container2 {
              width: 100%;
            }
            .page-container3 {
              width: 100%;
            }
            .page-container4 {
              width: 100%;
              flex-direction: column;
            }
            .page-footer {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 767px) {
            .page-container2 {
              justify-content: center;
            }
            .page-container3 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-unit);
              justify-content: center;
            }
            .page-navbar-interactive {
              justify-content: center;
            }
            .page-desktop-menu {
              display: none;
            }
            .page-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .page-icon10 {
              fill: var(--dl-color-gray-white);
            }
            .page-mobile-menu {
              background-color: var(--dl-color-gray-dark);
            }
            .page-top {
              justify-content: flex-end;
            }
            .page-icon12 {
              fill: var(--dl-color-gray-white);
            }
            .page-container4 {
              padding: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .page-container5 {
              align-items: center;
              justify-content: center;
            }
            .page-container6 {
              width: 100%;
              align-items: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .page-text1 {
              text-align: center;
            }
            .page-text3 {
              text-align: center;
            }
            .page-container7 {
              display: none;
            }
            .page-footer {
              padding-left: 0px;
              padding-right: 0px;
            }
            .page-text6 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .page-container3 {
              padding: var(--dl-space-space-unit);
            }
            .page-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .page-mobile-menu {
              padding: 16px;
            }
            .page-container4 {
              padding: var(--dl-space-space-halfunit);
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .page-container5 {
              height: auto;
            }
            .page-container6 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .page-footer {
              padding: 0px;
            }
            .page-text6 {
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

export default Page
