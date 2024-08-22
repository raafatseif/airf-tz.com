import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'
import FooterContent from '../components/footer-content'

const VisionAndMission = (props) => {
  return (
    <>
      <div className="vision-and-mission-container1">
        <Head>
          <title>vision-and-mission - AIRF</title>
          <meta
            name="description"
            content="AIRF is a non-for profit, development organization headquartered in Arusha, Tanzania, with branches in Dar-es-Salaam and Kagera, Tanzania."
          />
          <meta property="og:title" content="vision-and-mission - AIRF" />
          <meta
            property="og:description"
            content="AIRF is a non-for profit, development organization headquartered in Arusha, Tanzania, with branches in Dar-es-Salaam and Kagera, Tanzania."
          />
        </Head>
        <div className="vision-and-mission-logo">
          <div className="vision-and-mission-container2">
            <Link href="/">
              <a className="vision-and-mission-link1">
                <img
                  alt="logo"
                  src="/external/airf-logo-1500h.png"
                  className="vision-and-mission-image"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="vision-and-mission-header">
          <div className="vision-and-mission-container3">
            <header
              data-thq="thq-navbar"
              className="vision-and-mission-navbar-interactive"
            >
              <div
                data-thq="thq-navbar-nav"
                className="vision-and-mission-desktop-menu"
              >
                <NavigationLinks rootClassName="rootClassName16"></NavigationLinks>
              </div>
              <div
                data-thq="thq-burger-menu"
                className="vision-and-mission-burger-menu"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="vision-and-mission-icon10"
                >
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div
                data-thq="thq-mobile-menu"
                className="vision-and-mission-mobile-menu"
              >
                <div className="vision-and-mission-nav">
                  <div className="vision-and-mission-top">
                    <div
                      data-thq="thq-close-menu"
                      className="vision-and-mission-close-menu"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="vision-and-mission-icon12"
                      >
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <NavigationLinks rootClassName="rootClassName17"></NavigationLinks>
                </div>
                <div>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="vision-and-mission-icon14"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="vision-and-mission-icon16"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="vision-and-mission-icon18"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </header>
          </div>
        </div>
        <div className="vision-and-mission-blog1">
          <div className="vision-and-mission-container4">
            <div className="vision-and-mission-blog2">
              <div>
                <div>
                  <h2 className="h2">
                    <span>Vision</span>
                    <br></br>
                  </h2>
                  <p className="p">
                    Empowered organizations and communities with growing,
                    inclusive economic and ecological opportunities that are
                    yielding visible benefits for economy, society and nature.
                  </p>
                  <h2 className="h2">Mission</h2>
                  <p className="p">
                    <span>
                      To support organizations and communities to achieve
                      equitable and sustainable growth and development through
                      continuous learning, skills development, and technology
                      and best practice transfer.
                    </span>
                    <br></br>
                  </p>
                  <h2 className="h2">Scope</h2>
                  <p className="p">
                    <span>
                      The Agricultural Innovation Research Foundation (AIRF)
                      covers the fields of: Strategic Planning and Strategic
                      Management of Businesses; Transformation and Reengineering
                      of public and private institutions to enhance performance
                      and service delivery levels; Development of Advocacy and
                      Communication Strategies; Entrepreneurship development;
                      Corporate Governance; Corporate Social Responsibility and
                      Agribusiness Development; Mitigation and Adaptation of
                      Farming Systems to Climate Change; Technology Exchange;
                      Quality and Safe Agro-Production and Processing (GAP and
                      GMP); Food and Feed Safety; Sustainable Management of
                      Natural Resources; Environmental Management (Environment
                      Impact Assessment, Environmental Risk Assessment,
                      Environmental Management System, Eco-Balance); Provision
                      of Information; Marketing; Supply Chain Management, and
                      Trade.
                    </span>
                    <br></br>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="vision-and-mission-footer">
          <FooterContent
            text={
              <Fragment>
                <span className="vision-and-mission-text22">
                  <span>
                    © 2024
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <Link href="/">
                    <a className="vision-and-mission-link2">
                      Agriculture Innovation Research Foundation
                    </a>
                  </Link>
                  <span>, All Rights Reserved.</span>
                </span>
              </Fragment>
            }
          ></FooterContent>
        </footer>
        <footer className="vision-and-mission-space-filler">
          <div className="vision-and-mission-container7"></div>
        </footer>
      </div>
      <style jsx>
        {`
          .vision-and-mission-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .vision-and-mission-logo {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .vision-and-mission-container2 {
            flex: 0 0 auto;
            width: var(--dl-size-size-contentwidth);
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .vision-and-mission-link1 {
            display: contents;
          }
          .vision-and-mission-image {
            height: 8.5rem;
            margin-right: 0px;
            text-decoration: none;
          }
          .vision-and-mission-header {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .vision-and-mission-container3 {
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
          .vision-and-mission-navbar-interactive {
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
          .vision-and-mission-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .vision-and-mission-burger-menu {
            display: none;
          }
          .vision-and-mission-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .vision-and-mission-mobile-menu {
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
          .vision-and-mission-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .vision-and-mission-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .vision-and-mission-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .vision-and-mission-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .vision-and-mission-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .vision-and-mission-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .vision-and-mission-icon18 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .vision-and-mission-blog1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .vision-and-mission-container4 {
            width: var(--dl-size-size-contentwidth);
            display: flex;
            padding: var(--dl-space-space-twounits);
            min-height: auto;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .vision-and-mission-blog2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .vision-and-mission-footer {
            flex: 0;
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
            padding-bottom: 0px;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .vision-and-mission-text22 {
            display: inline-block;
            margin-left: var(--dl-space-space-halfunit);
          }
          .vision-and-mission-link2 {
            color: var(--dl-color-leaves-dark);
            font-style: normal;
            font-weight: 600;
          }
          .vision-and-mission-space-filler {
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
          .vision-and-mission-container7 {
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
            .vision-and-mission-container2 {
              width: 100%;
            }
            .vision-and-mission-container3 {
              width: 100%;
            }
            .vision-and-mission-container4 {
              width: 100%;
              flex-direction: column;
            }
            .vision-and-mission-footer {
              padding-left: 0px;
              padding-right: 0px;
            }
            .vision-and-mission-space-filler {
              padding-left: 0px;
              padding-right: 0px;
            }
            .vision-and-mission-container7 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .vision-and-mission-container2 {
              justify-content: center;
            }
            .vision-and-mission-container3 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-unit);
              justify-content: center;
            }
            .vision-and-mission-navbar-interactive {
              justify-content: center;
            }
            .vision-and-mission-desktop-menu {
              display: none;
            }
            .vision-and-mission-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .vision-and-mission-icon10 {
              fill: var(--dl-color-gray-white);
            }
            .vision-and-mission-mobile-menu {
              background-color: var(--dl-color-gray-dark);
            }
            .vision-and-mission-top {
              justify-content: flex-end;
            }
            .vision-and-mission-icon12 {
              fill: var(--dl-color-gray-white);
            }
            .vision-and-mission-container4 {
              padding: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .vision-and-mission-footer {
              padding-left: 0px;
              padding-right: 0px;
            }
            .vision-and-mission-text22 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .vision-and-mission-space-filler {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .vision-and-mission-container3 {
              padding: var(--dl-space-space-unit);
            }
            .vision-and-mission-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .vision-and-mission-mobile-menu {
              padding: 16px;
            }
            .vision-and-mission-container4 {
              padding: var(--dl-space-space-halfunit);
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .vision-and-mission-footer {
              padding: 0px;
            }
            .vision-and-mission-text22 {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .vision-and-mission-space-filler {
              padding: 0px;
            }
            .vision-and-mission-container7 {
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

export default VisionAndMission
