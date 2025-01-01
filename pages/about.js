import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'
import FooterContent from '../components/footer-content'

const About = (props) => {
  return (
    <>
      <div className="about-container1">
        <Head>
          <title>about - AIRF</title>
          <meta
            name="description"
            content="AIRF is a non-for profit, development organization headquartered in Arusha, Tanzania, with branches in Dar-es-Salaam and Kagera, Tanzania."
          />
          <meta property="og:title" content="about - AIRF" />
          <meta
            property="og:description"
            content="AIRF is a non-for profit, development organization headquartered in Arusha, Tanzania, with branches in Dar-es-Salaam and Kagera, Tanzania."
          />
        </Head>
        <div className="about-logo">
          <div className="about-container2">
            <Link href="/">
              <a className="about-link1">
                <img
                  alt="logo"
                  src="/external/airf-logo-1500h.png"
                  className="about-image"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="about-header">
          <div className="about-container3">
            <header data-thq="thq-navbar" className="about-navbar-interactive">
              <div data-thq="thq-navbar-nav" className="about-desktop-menu">
                <NavigationLinks rootClassName="rootClassName14"></NavigationLinks>
              </div>
              <div data-thq="thq-burger-menu" className="about-burger-menu">
                <svg viewBox="0 0 1024 1024" className="about-icon10">
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div data-thq="thq-mobile-menu" className="about-mobile-menu">
                <div className="about-nav">
                  <div className="about-top">
                    <div data-thq="thq-close-menu" className="about-close-menu">
                      <svg viewBox="0 0 1024 1024" className="about-icon12">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <NavigationLinks rootClassName="rootClassName15"></NavigationLinks>
                </div>
                <div>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="about-icon14"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="about-icon16"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="about-icon18"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </header>
          </div>
        </div>
        <div className="about-blog1">
          <div className="about-container4">
            <div className="about-blog2">
              <div>
                <div>
                  <h2 className="h2">About AIRF</h2>
                  <p className="p">
                    AIRF is a non-for profit, development organization
                    headquartered in Arusha, Tanzania, with branches in
                    Dar-es-Salaam and Kagera, Tanzania. It is registered with a
                    certificate O1NGO/1162 under the Non-Governmental
                    Organization Act. No. 24 of 2002, Section 12(2), Tanzania.
                    AIRF designs, develops and implements solutions that
                    integrate and promote societal transformation and systemic
                    change, gender, youth, equity, social inclusion, in the
                    agricultural, fisheries, environmental management,
                    manufacturing, research and development, and development
                    sectors at the community, national, and regional scale.
                  </p>
                  <h2 className="h2">
                    Areas of expertise and services delivery
                  </h2>
                  <p className="p">
                    <span>
                      AIRF provides technical expertise, knowledge and technical
                      and business support services in: Strategic Plan
                      Development; Business Planning and Implementation Support;
                      Skills Development; Technology and Best Practices
                      Transfer; Productive Capacity Building; Environment
                      Management and Climate Change; and Youth and women
                      economic empowerment for income security, decent work, and
                      economic autonomy. Other areas of expertise include:
                      Agriculture, Fisheries and Livestock Development;
                      Enterprise Development; Rural Industrialization; Sector
                      and Firm Transformation; Institutional Strengthening;
                      Policy and program design; and Economic Growth. AIRF has
                      supported several projects in Tanzania, Kenya, Uganda, and
                      South Africa. It has a strong network and provides
                      strategic and technical guidance to multi-sectoral
                      stakeholders.
                    </span>
                    <br></br>
                  </p>
                  <p className="p">
                    <span>
                      Our multidisciplinary research team is composed of staff
                      with technical backgrounds in economic, social,
                      environmental and industrialization areas. Our mission is
                      to innovate and implement solutions and interventions that
                      are both socio-economically sustainable and scalable,
                      using cluster-based research, joined-up approaches, and
                      strategic partnerships. AIRF researchers are fluent in
                      English, Kiswahili, Polish, Japanese, and other local East
                      African languages.
                    </span>
                    <br></br>
                  </p>
                  <p className="p">
                    <span>
                      Among the current areas of focus include: i) Institutional
                      or corporate strategy and business plan development,
                      updating and refinement in line with aspirations and
                      resource options; ii) Conducting policy and feasibility
                      analyses to ensure coherence of advice to programs,
                      project design and implementation support; iii) Supporting
                      organizations in developing, and consolidating
                      sector/firm-specific strategies and policies on
                      Sustainability, Climate Change and ESG; and iv)
                      Preparation of the mid-term and final monitoring,
                      evaluation and learning reviews (M&amp;EL) and periodical
                      and special updates and reports.
                    </span>
                    <br></br>
                  </p>
                  <p className="p">
                    <span>
                      Our priority partners are public and private sector
                      entities, multi-government stakeholders, donors,
                      community-based organizations, NGOs, philanthropic
                      foundations, academic and research institutions, social
                      enterprises, and individuals.
                    </span>
                    <br></br>
                  </p>
                </div>
                <div>
                  <div className="about-section-title">
                    <div className="about-content1">
                      <h2 className="about-text25 h2">Meet Our Best Team</h2>
                      <p className="about-text26">
                        Meet the dedicated individuals behind AIRF who are
                        committed to driving agricultural innovation and
                        economic empowerment in Tanzania.
                      </p>
                    </div>
                  </div>
                  <div className="about-row">
                    <div className="about-card1">
                      <img
                        alt="Image of team member"
                        src="/external/daniel-mwakitalima-team-photo-1x1-600w.jpg"
                        loading="lazy"
                        className="thq-img-ratio-1-1 about-placeholder-image1"
                      />
                      <div className="about-content2">
                        <div className="about-title1">
                          <span className="about-text27 thq-body-small">
                            Mr. Daniel Mwakitalima
                          </span>
                          <span className="about-text28 thq-body-small">
                            B.com, MBA, (LLB Scholar)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="about-card2">
                      <img
                        alt="Image of team member"
                        src="/external/dr-gratian-bamwenda-team-photo-1x1-600w.jpg"
                        loading="lazy"
                        className="thq-img-ratio-1-1 about-placeholder-image2"
                      />
                      <div className="about-content3">
                        <div className="about-title2">
                          <span className="about-text29 thq-body-small">
                            Dr. Gratian Bamwenda
                          </span>
                          <span className="about-text30 thq-body-small">
                            PhD, MBA
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="about-card3">
                      <img
                        alt="Image of Alice Johnson"
                        src="/external/nahya-rashid-mansour-team-photo-600w.jpg"
                        className="thq-img-ratio-1-1 about-placeholder-image3"
                      />
                      <div className="about-content4">
                        <div className="about-title3">
                          <span className="about-text31 thq-body-small">
                            Nayha Rashid Mansour
                          </span>
                          <span className="about-text32 thq-body-small">
                            Bachelor of Arts, MPA
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="about-heading">
                  &quot;AIRF is a Promoter of Economic Empowerment and
                  Transformative Wealth Creation&quot;
                </h3>
              </div>
            </div>
          </div>
        </div>
        <footer className="about-footer">
          <FooterContent
            text={
              <Fragment>
                <span className="about-text33">
                  <span>
                    © 2024
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <Link href="/">
                    <a className="about-link2">
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
          .about-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .about-logo {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .about-container2 {
            flex: 0 0 auto;
            width: var(--dl-size-size-contentwidth);
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .about-link1 {
            display: contents;
          }
          .about-image {
            height: 8.5rem;
            margin-right: 0px;
            text-decoration: none;
          }
          .about-header {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .about-container3 {
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
          .about-navbar-interactive {
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
          .about-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .about-burger-menu {
            display: none;
          }
          .about-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .about-mobile-menu {
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
          .about-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .about-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .about-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .about-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .about-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .about-icon18 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .about-blog1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .about-container4 {
            width: var(--dl-size-size-contentwidth);
            display: flex;
            padding: var(--dl-space-space-twounits);
            min-height: auto;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .about-blog2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-section-title {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: auto;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .about-content1 {
            gap: 0;
            display: flex;
            align-self: stretch;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .about-text25 {
            align-self: flex-start;
          }
          .about-text26 {
            align-self: flex-start;
          }
          .about-row {
            gap: 48px;
            display: flex;
            max-width: 1200px;
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-shrink: 0;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
          }
          .about-card1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .about-content2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .about-title1 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .about-text27 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
          }
          .about-text28 {
            align-self: flex-start;
          }
          .about-card2 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .about-content3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .about-title2 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .about-text29 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
          }
          .about-text30 {
            align-self: flex-start;
          }
          .about-card3 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .about-content4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .about-title3 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .about-text31 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
          }
          .about-text32 {
            align-self: flex-start;
          }
          .about-heading {
            color: var(--dl-color-leaves-dark);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .about-footer {
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
          .about-text33 {
            display: inline-block;
            margin-left: var(--dl-space-space-halfunit);
          }
          .about-link2 {
            color: var(--dl-color-leaves-dark);
            font-style: normal;
            font-weight: 600;
          }
          @media (max-width: 991px) {
            .about-container2 {
              width: 100%;
            }
            .about-container3 {
              width: 100%;
            }
            .about-container4 {
              width: 100%;
              flex-direction: column;
            }
            .about-row {
              align-items: center;
              flex-direction: row;
            }
            .about-footer {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 767px) {
            .about-container2 {
              justify-content: center;
            }
            .about-container3 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-unit);
              justify-content: center;
            }
            .about-navbar-interactive {
              justify-content: center;
            }
            .about-desktop-menu {
              display: none;
            }
            .about-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .about-icon10 {
              fill: var(--dl-color-gray-white);
            }
            .about-mobile-menu {
              background-color: var(--dl-color-gray-dark);
            }
            .about-top {
              justify-content: flex-end;
            }
            .about-icon12 {
              fill: var(--dl-color-gray-white);
            }
            .about-container4 {
              padding: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-row {
              flex-direction: column;
            }
            .about-footer {
              padding-left: 0px;
              padding-right: 0px;
            }
            .about-text33 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .about-container3 {
              padding: var(--dl-space-space-unit);
            }
            .about-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .about-mobile-menu {
              padding: 16px;
            }
            .about-container4 {
              padding: var(--dl-space-space-halfunit);
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .about-placeholder-image1 {
              height: 450px;
            }
            .about-placeholder-image2 {
              height: 450px;
            }
            .about-placeholder-image3 {
              height: 450px;
            }
            .about-heading {
              text-align: center;
            }
            .about-footer {
              padding: 0px;
            }
            .about-text33 {
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

export default About
