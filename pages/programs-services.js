import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'
import FooterContent from '../components/footer-content'

const ProgramsServices = (props) => {
  return (
    <>
      <div className="programs-services-container1">
        <Head>
          <title>programs-services - AIRF</title>
          <meta
            name="description"
            content="AIRF is a non-for profit, development organization headquartered in Arusha, Tanzania, with branches in Dar-es-Salaam and Kagera, Tanzania."
          />
          <meta property="og:title" content="programs-services - AIRF" />
          <meta
            property="og:description"
            content="AIRF is a non-for profit, development organization headquartered in Arusha, Tanzania, with branches in Dar-es-Salaam and Kagera, Tanzania."
          />
        </Head>
        <div className="programs-services-logo">
          <div className="programs-services-container2">
            <Link href="/">
              <a className="programs-services-link1">
                <img
                  alt="logo"
                  src="/external/airf-logo-1500h.png"
                  className="programs-services-image"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="programs-services-header">
          <div className="programs-services-container3">
            <header
              data-thq="thq-navbar"
              className="programs-services-navbar-interactive"
            >
              <div
                data-thq="thq-navbar-nav"
                className="programs-services-desktop-menu"
              >
                <NavigationLinks rootClassName="rootClassName20"></NavigationLinks>
              </div>
              <div
                data-thq="thq-burger-menu"
                className="programs-services-burger-menu"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="programs-services-icon1"
                >
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div
                data-thq="thq-mobile-menu"
                className="programs-services-mobile-menu"
              >
                <div className="programs-services-nav">
                  <div className="programs-services-top">
                    <div
                      data-thq="thq-close-menu"
                      className="programs-services-close-menu"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="programs-services-icon3"
                      >
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <NavigationLinks rootClassName="rootClassName21"></NavigationLinks>
                </div>
              </div>
            </header>
          </div>
        </div>
        <div className="programs-services-blog1">
          <div className="programs-services-container4">
            <div className="programs-services-blog2">
              <div>
                <div>
                  <h2 className="h2">Programs and Services</h2>
                  <p className="p">
                    The AIRF’s primary product is to strengthen technical
                    capabilities and competences in entrepreneurship development
                    among agricultural stakeholders, dissemination of good
                    agricultural practices, agro-commodities quality and safety
                    (ISO 9001, ISO 14001, HACCP, SPS Measures), by working in
                    collaboration with the government, public sector, civil
                    society, donor community and the growing private sector. It
                    delivers this through research, consultancies, capacity
                    building, coordination, facilitation and provision of
                    training and coaching. Above all, AIRF ensures that
                    processes are focused on delivering intended outputs and
                    practical valences. Some of the programs include:
                  </p>
                  <ul className="list">
                    <li className="list-bullet list-item">
                      <span>
                        To advise organizations and train employees on issues of
                        strategy formulation and implementation;
                        entrepreneurship development; technology development,
                        acquisition, and transfer; marketing; supply chain
                        management; and human resource management within and
                        outside Tanzania.
                      </span>
                    </li>
                    <li className="programs-services-li11 list-bullet list-item">
                      <span>
                        To support enterprises and organizations to thrive and
                        grow by providing them advice on: strategic management,
                        feasibility studies, policy analysis and formulation;
                        program implementation, monitoring, and evaluation;
                        investment and capital budgeting; innovation and
                        technology transfer; industrial best practices and know
                        how; and providing them with technical support services;
                        research and development services; environmental
                        services, and information and counseling services.
                      </span>
                    </li>
                    <li className="programs-services-li12 list-bullet list-item">
                      <span>
                        To advise firms in the areas of entrepreneurship
                        development, knowledge and technology up gradation,
                        corporate sustainable development, innovative green
                        competitive strategies, strategic and business planning,
                        supply chain management, risk management, organizational
                        viability enhancement, environment assessment, corporate
                        environment management, compliance performance
                        management, customer relationship management,
                        e-commerce, and international trade.
                      </span>
                    </li>
                    <li className="programs-services-li13 list-bullet list-item">
                      <span>
                        To provide management consulting services in quality
                        management, value adding strategies, corporate
                        transformation, and competition in the global arena,
                        global supply chain management, project management and
                        corporate finance management.
                      </span>
                    </li>
                    <li className="programs-services-li14 list-bullet list-item">
                      <span>
                        To perform research, acquisition, and distribution of
                        value-for-money, low-energy-consuming innovative green
                        technologies.
                      </span>
                    </li>
                    <li className="programs-services-li15 list-bullet list-item">
                      <span>
                        To collaborate and share knowledge, information, build
                        skills and partnerships with multiple stakeholders at
                        local, regional and global levels so as to create new
                        markets for clients products and services, gain access
                        to networks, and to prepare firms to address the coming
                        challenges and seizing the opportunities in emerging
                        markets.
                      </span>
                    </li>
                    <li className="programs-services-li16 list-bullet list-item">
                      <span>
                        To deliver customized, creative, innovative training and
                        capacity development courses.
                      </span>
                    </li>
                    <li className="programs-services-li17 list-bullet list-item">
                      <span>
                        To carry out studies, equipment and plant designs,
                        capital investment appraisals, preparation of tender
                        documents and bills of quantities, works implementation,
                        control and supervision, and commercialization of
                        projects.
                      </span>
                    </li>
                    <li className="programs-services-li18 list-bullet list-item">
                      <span>
                        To deal in provision of know-how, research, supply,
                        production, marketing, distribution and customer service
                        functions in the agro-commodities supply chain and
                        related goods and services.
                      </span>
                    </li>
                    <li className="list-bullet list-item">
                      <span>
                        To solve technical and management problems in HVA
                        through collaborative and innovative integrated
                        management approaches, i.e. by engaging a wide range of
                        stakeholders in developing the requisite strategies,
                        action plans, implementation and evaluation process,
                        according to the Deming cycle.
                      </span>
                    </li>
                  </ul>
                  <h2 className="h2">Consulting</h2>
                  <p className="p">
                    The Agricultural Innovation Research Foundation (AIRF)
                    covers the fields of: Strategic Planning and Strategic
                    Management of Businesses; Sustainable Agriculture; Viability
                    Assessment and Value Chain Analysis, Entrepreneurship and
                    Agribusiness Development; Mitigation and Adaptation of
                    Farming Systems to Climate Change; Technology Exchange;
                    Quality and Safe Agro-Production and Processing (GAP and
                    GMP);Food and Feed Safety; Sustainable Management of Natural
                    Resources; Environmental Management (Environment Impact
                    Assessment, Environmental Risk Assessment, Environmental
                    Management System, Eco-Balance); Provision of Agro
                    Information and Business Intelligence; Marketing; Supply
                    Chain Management, and Trade.
                  </p>
                  <p className="p">
                    The AIRF Multi-disciplinary Team has been instrumental in
                    undertaking several in-country and sub-regional assignments
                    and with collaborators in Kenya, Uganda, South Africa,
                    European Union, Japan, Canada, and United States of America.
                    AIRF’s capacity is very fundamental to the tasks enumerated
                    in this assignment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="programs-services-footer">
          <FooterContent
            text={
              <Fragment>
                <span className="programs-services-text25">
                  <span>
                    © 2024
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <Link href="/">
                    <a className="programs-services-link2">
                      Agriculture Innovation Research Foundation
                    </a>
                  </Link>
                  <span>, All Rights Reserved.</span>
                </span>
              </Fragment>
            }
          ></FooterContent>
        </footer>
        <footer className="programs-services-space-filler">
          <div className="programs-services-container7"></div>
        </footer>
      </div>
      <style jsx>
        {`
          .programs-services-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .programs-services-logo {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .programs-services-container2 {
            flex: 0 0 auto;
            width: var(--dl-size-size-contentwidth);
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .programs-services-link1 {
            display: contents;
          }
          .programs-services-image {
            height: 8.5rem;
            margin-right: 0px;
            text-decoration: none;
          }
          .programs-services-header {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .programs-services-container3 {
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
          .programs-services-navbar-interactive {
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
          .programs-services-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .programs-services-burger-menu {
            display: none;
          }
          .programs-services-icon1 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .programs-services-mobile-menu {
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
          .programs-services-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .programs-services-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .programs-services-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .programs-services-icon3 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .programs-services-blog1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .programs-services-container4 {
            width: var(--dl-size-size-contentwidth);
            display: flex;
            padding: var(--dl-space-space-twounits);
            min-height: auto;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .programs-services-blog2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .programs-services-li11 {
            list-style-type: disc;
            list-style-image: none;
            list-style-position: outside;
          }
          .programs-services-li12 {
            list-style-type: disc;
            list-style-image: none;
            list-style-position: outside;
          }
          .programs-services-li13 {
            list-style-type: disc;
            list-style-image: none;
            list-style-position: outside;
          }
          .programs-services-li14 {
            list-style-type: disc;
            list-style-image: none;
            list-style-position: outside;
          }
          .programs-services-li15 {
            list-style-type: disc;
            list-style-image: none;
            list-style-position: outside;
          }
          .programs-services-li16 {
            list-style-type: disc;
            list-style-image: none;
            list-style-position: outside;
          }
          .programs-services-li17 {
            list-style-type: disc;
            list-style-image: none;
            list-style-position: outside;
          }
          .programs-services-li18 {
            list-style-type: disc;
            list-style-image: none;
            list-style-position: outside;
          }
          .programs-services-footer {
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
          .programs-services-text25 {
            display: inline-block;
            margin-left: var(--dl-space-space-halfunit);
          }
          .programs-services-link2 {
            color: var(--dl-color-leaves-dark);
            font-style: normal;
            font-weight: 600;
          }
          .programs-services-space-filler {
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
          .programs-services-container7 {
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
            .programs-services-container2 {
              width: 100%;
            }
            .programs-services-container3 {
              width: 100%;
            }
            .programs-services-container4 {
              width: 100%;
              flex-direction: column;
            }
            .programs-services-footer {
              padding-left: 0px;
              padding-right: 0px;
            }
            .programs-services-space-filler {
              padding-left: 0px;
              padding-right: 0px;
            }
            .programs-services-container7 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .programs-services-container2 {
              justify-content: center;
            }
            .programs-services-container3 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-unit);
              justify-content: center;
            }
            .programs-services-navbar-interactive {
              justify-content: center;
            }
            .programs-services-desktop-menu {
              display: none;
            }
            .programs-services-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .programs-services-icon1 {
              fill: var(--dl-color-gray-white);
            }
            .programs-services-mobile-menu {
              background-color: var(--dl-color-gray-dark);
            }
            .programs-services-top {
              justify-content: flex-end;
            }
            .programs-services-icon3 {
              fill: var(--dl-color-gray-white);
            }
            .programs-services-container4 {
              padding: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .programs-services-footer {
              padding-left: 0px;
              padding-right: 0px;
            }
            .programs-services-text25 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .programs-services-space-filler {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .programs-services-container3 {
              padding: var(--dl-space-space-unit);
            }
            .programs-services-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .programs-services-mobile-menu {
              padding: 16px;
            }
            .programs-services-container4 {
              padding: var(--dl-space-space-halfunit);
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .programs-services-footer {
              padding: 0px;
            }
            .programs-services-text25 {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .programs-services-space-filler {
              padding: 0px;
            }
            .programs-services-container7 {
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

export default ProgramsServices
