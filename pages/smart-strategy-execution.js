import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'
import FooterContent from '../components/footer-content'

const SmartStrategyExecution = (props) => {
  return (
    <>
      <div className="smart-strategy-execution-container10">
        <Head>
          <title>smart-strategy-execution - AIRF</title>
          <meta
            name="description"
            content="AIRF is a non-for profit, development organization headquartered in Arusha, Tanzania, with branches in Dar-es-Salaam and Kagera, Tanzania."
          />
          <meta property="og:title" content="smart-strategy-execution - AIRF" />
          <meta
            property="og:description"
            content="AIRF is a non-for profit, development organization headquartered in Arusha, Tanzania, with branches in Dar-es-Salaam and Kagera, Tanzania."
          />
        </Head>
        <div className="smart-strategy-execution-logo">
          <div className="smart-strategy-execution-container11">
            <Link href="/">
              <a className="smart-strategy-execution-link1">
                <img
                  alt="logo"
                  src="/external/airf-logo-1500h.png"
                  className="smart-strategy-execution-image"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="smart-strategy-execution-header">
          <div className="smart-strategy-execution-container12">
            <header
              data-thq="thq-navbar"
              className="smart-strategy-execution-navbar-interactive"
            >
              <div
                data-thq="thq-navbar-nav"
                className="smart-strategy-execution-desktop-menu"
              >
                <NavigationLinks rootClassName="rootClassName26"></NavigationLinks>
              </div>
              <div
                data-thq="thq-burger-menu"
                className="smart-strategy-execution-burger-menu"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="smart-strategy-execution-icon10"
                >
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div
                data-thq="thq-mobile-menu"
                className="smart-strategy-execution-mobile-menu"
              >
                <div className="smart-strategy-execution-nav">
                  <div className="smart-strategy-execution-top">
                    <div
                      data-thq="thq-close-menu"
                      className="smart-strategy-execution-close-menu"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="smart-strategy-execution-icon12"
                      >
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <NavigationLinks rootClassName="rootClassName27"></NavigationLinks>
                </div>
                <div>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="smart-strategy-execution-icon14"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="smart-strategy-execution-icon16"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="smart-strategy-execution-icon18"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </header>
          </div>
        </div>
        <div className="smart-strategy-execution-blog1">
          <div className="smart-strategy-execution-container13">
            <div className="smart-strategy-execution-blog2">
              <div>
                <div>
                  <h2 className="h2">
                    <span>Smart Strategy Execution</span>
                    <br></br>
                  </h2>
                  <p className="p">
                    <span>
                      The Agricultural Innovation Research Foundation (AIRF)
                      would like to introduce to you training on “Smart Strategy
                      Execution (SSE)”, a project management and intervention
                      that involves prioritization, short term planning
                      execution and frequent reviews. 
                    </span>
                    <span>
                      The short-term planning as part of long-term strategic
                      plan, makes it easier to adapt to changes when needed,
                      while delivering value earlier in the execution process,
                      thus lowering risks associated with the project.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Moreover, the SSE entails building projects around
                      motivated cross-functional knowledge based “Smart Teams”
                      (STs) which are provided with conducive working
                      environment and support by the leadership. In this regard,
                      the SSE enhances “Agility” and continuous improvement that
                      enables an organization to attain its major goals as
                      reflected in the realistic key performance indicators.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      One of the SSE strengths is conducting “Smart Execution”
                      (SE) and review that allows the “Smart Teams” to engage
                      with customers/stakeholders and reflect on successes,
                      lessons learnt, challenges and re-prioritizing activities
                      and tactics that will be dealt in the upcoming execution.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      The main benefit of SSE is to improve leadership approach
                      that encourages teamwork, self-organization and
                      accountability, setting up the best practices intended for
                      rapid delivery of high-quality products/services, and
                      adoption of a business approach that aligns planning and
                      execution with customer/stakeholder needs and company
                      strategic objectives and goals.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Through the SSE, motivated human capacity, continuous
                      improvement and innovation, competitiveness,
                      customer/stakeholder value and improved performance and
                      growth of organization in the current competitive business
                      environment will be attained.
                    </span>
                  </p>
                  <h3 className="h3">
                    1.0 The Smart Strategy Execution (SSE) Short Training
                  </h3>
                  <p className="p">
                    <span>
                      The SSE is a three-day training program that offers
                      concepts, principles, planning approach and fast start
                      towards executing organization plans. This training gives
                      organization, the foundation of knowledge it needs to
                      initiate and adapt to SSE. It is a starting point for
                      teams to acquire techniques, skills and tools essential to
                      building SSE discipline and culture.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Over and above defining SSE principles, the training
                      highlights benefits and shortcomings, strengths and
                      weaknesses of SSE development in relation to traditional
                      planning and execution. It brings an understanding on how
                      to take advantage of opportunities created by adoption of
                      SSE. Finally, it enhances an understanding of the team’s
                      collaboration and communication needed between them and
                      customer/stakeholders.
                    </span>
                    <br></br>
                  </p>
                  <div>
                    <h3 className="h3">2.0 Who Should Attend?</h3>
                    <p className="p">
                      Intended participants for SSE training program are the
                      Executives, Management, Project leaders and senior staff
                      entrusted with planning and execution.
                    </p>
                  </div>
                  <div>
                    <h3 className="h3">3.0 Training Duration</h3>
                    <p className="p">
                      Intended participants for SSE training program are the
                      Executives, Management, Project leaders and senior staff
                      entrusted with planning and execution.
                    </p>
                  </div>
                  <div>
                    <h3 className="h3">
                      4.0 Outputs of The Training on The Target Group
                    </h3>
                    <ol className="smart-strategy-execution-ul list">
                      <li className="list-decimal list-item">
                        <span>
                          Attained self-confidence and empowerment of teams in
                          pursuing organizational goals effectively and
                          efficiently.
                        </span>
                      </li>
                      <li className="list-decimal list-item">
                        <span>
                          Clear roles, accountability and responsibility of the
                          teams enhanced.
                        </span>
                      </li>
                      <li className="list-decimal list-item">
                        <span>
                          Employees and leadership satisfaction, team building
                          and resource-based institution created.
                        </span>
                      </li>
                      <li className="list-decimal list-item">
                        <span>
                          Increased and improved quality of work, cost
                          efficiency and timely deliverable of outputs.
                        </span>
                      </li>
                      <li className="list-decimal list-item">
                        <span>
                          Enhanced control and ownership of the projects by the
                          teams.
                        </span>
                      </li>
                    </ol>
                    <div>
                      <h3 className="h3">5.0 Impact of The Training</h3>
                      <p className="p">
                        The training will improve skills and knowledge level of
                        the staff in smart planning and execution thus, enabling
                        the organization face challenges in terms of Political,
                        Economical, Social, Technological, Environmental and
                        Legal. The practicing of cost-effective, efficient
                        processes during strategy execution, will place an
                        organization to compete better in the chosen markets
                        resulting increased customer value, performance and
                        organization growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="smart-strategy-execution-footer">
          <FooterContent
            text={
              <Fragment>
                <span className="smart-strategy-execution-text47">
                  <span>
                    © 2024
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <Link href="/">
                    <a className="smart-strategy-execution-link2">
                      Agriculture Innovation Research Foundation
                    </a>
                  </Link>
                  <span>, All Rights Reserved.</span>
                </span>
              </Fragment>
            }
          ></FooterContent>
        </footer>
        <footer className="smart-strategy-execution-space-filler">
          <div className="smart-strategy-execution-container20"></div>
        </footer>
      </div>
      <style jsx>
        {`
          .smart-strategy-execution-container10 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .smart-strategy-execution-logo {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .smart-strategy-execution-container11 {
            flex: 0 0 auto;
            width: var(--dl-size-size-contentwidth);
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .smart-strategy-execution-link1 {
            display: contents;
          }
          .smart-strategy-execution-image {
            height: 8.5rem;
            margin-right: 0px;
            text-decoration: none;
          }
          .smart-strategy-execution-header {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .smart-strategy-execution-container12 {
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
          .smart-strategy-execution-navbar-interactive {
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
          .smart-strategy-execution-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .smart-strategy-execution-burger-menu {
            display: none;
          }
          .smart-strategy-execution-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .smart-strategy-execution-mobile-menu {
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
          .smart-strategy-execution-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .smart-strategy-execution-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .smart-strategy-execution-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .smart-strategy-execution-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .smart-strategy-execution-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .smart-strategy-execution-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .smart-strategy-execution-icon18 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .smart-strategy-execution-blog1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .smart-strategy-execution-container13 {
            width: var(--dl-size-size-contentwidth);
            display: flex;
            padding: var(--dl-space-space-twounits);
            min-height: auto;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .smart-strategy-execution-blog2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .smart-strategy-execution-ul {
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-image: none;
            list-style-position: outside;
          }
          .smart-strategy-execution-footer {
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
          .smart-strategy-execution-text47 {
            display: inline-block;
            margin-left: var(--dl-space-space-halfunit);
          }
          .smart-strategy-execution-link2 {
            color: var(--dl-color-leaves-dark);
            font-style: normal;
            font-weight: 600;
          }
          .smart-strategy-execution-space-filler {
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
          .smart-strategy-execution-container20 {
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
            .smart-strategy-execution-container11 {
              width: 100%;
            }
            .smart-strategy-execution-container12 {
              width: 100%;
            }
            .smart-strategy-execution-container13 {
              width: 100%;
              flex-direction: column;
            }
            .smart-strategy-execution-footer {
              padding-left: 0px;
              padding-right: 0px;
            }
            .smart-strategy-execution-space-filler {
              padding-left: 0px;
              padding-right: 0px;
            }
            .smart-strategy-execution-container20 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .smart-strategy-execution-container11 {
              justify-content: center;
            }
            .smart-strategy-execution-container12 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-unit);
              justify-content: center;
            }
            .smart-strategy-execution-navbar-interactive {
              justify-content: center;
            }
            .smart-strategy-execution-desktop-menu {
              display: none;
            }
            .smart-strategy-execution-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .smart-strategy-execution-icon10 {
              fill: var(--dl-color-gray-white);
            }
            .smart-strategy-execution-mobile-menu {
              background-color: var(--dl-color-gray-dark);
            }
            .smart-strategy-execution-top {
              justify-content: flex-end;
            }
            .smart-strategy-execution-icon12 {
              fill: var(--dl-color-gray-white);
            }
            .smart-strategy-execution-container13 {
              padding: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .smart-strategy-execution-footer {
              padding-left: 0px;
              padding-right: 0px;
            }
            .smart-strategy-execution-text47 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .smart-strategy-execution-space-filler {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .smart-strategy-execution-container12 {
              padding: var(--dl-space-space-unit);
            }
            .smart-strategy-execution-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .smart-strategy-execution-mobile-menu {
              padding: 16px;
            }
            .smart-strategy-execution-container13 {
              padding: var(--dl-space-space-halfunit);
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .smart-strategy-execution-footer {
              padding: 0px;
            }
            .smart-strategy-execution-text47 {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .smart-strategy-execution-space-filler {
              padding: 0px;
            }
            .smart-strategy-execution-container20 {
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

export default SmartStrategyExecution
