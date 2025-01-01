import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'
import FooterContent from '../components/footer-content'

const Home = (props) => {
  return (
    <>
      <div className="home-container10">
        <Head>
          <title>AIRF</title>
          <meta
            name="description"
            content="AIRF is a non-for profit, development organization headquartered in Arusha, Tanzania, with branches in Dar-es-Salaam and Kagera, Tanzania."
          />
          <meta property="og:title" content="AIRF" />
          <meta
            property="og:description"
            content="AIRF is a non-for profit, development organization headquartered in Arusha, Tanzania, with branches in Dar-es-Salaam and Kagera, Tanzania."
          />
        </Head>
        <div className="home-logo">
          <div className="home-container11">
            <Link href="/">
              <a className="home-link1">
                <img
                  alt="logo"
                  src="/external/airf-logo-1500h.png"
                  className="home-image1"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="home-header">
          <div className="home-container12">
            <header data-thq="thq-navbar" className="home-navbar-interactive">
              <div data-thq="thq-navbar-nav" className="home-desktop-menu">
                <NavigationLinks rootClassName="rootClassName12"></NavigationLinks>
              </div>
              <div data-thq="thq-burger-menu" className="home-burger-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                <div className="home-nav">
                  <div className="home-top">
                    <div data-thq="thq-close-menu" className="home-close-menu">
                      <svg viewBox="0 0 1024 1024" className="home-icon12">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <NavigationLinks rootClassName="rootClassName13"></NavigationLinks>
                </div>
                <div>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon14"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon16"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon18"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </header>
          </div>
        </div>
        <div className="home-hero1">
          <div className="home-container13">
            <div className="home-hero2">
              <h1 className="home-text10">
                Agriculture Innovation Research Foundation
              </h1>
              <h3 className="home-text11">
                Promoters of Economic Empowerment and Transformative Wealth
                Creation
              </h3>
              <span className="home-text12">
                The AIRF Multi-disciplinary Team has been instrumental in
                undertaking several in-country and sub-regional assignments and
                with collaborators in Kenya, Uganda, South Africa, European
                Union, Japan, Canada, and United States of America. AIRF’s
                capacity is very fundamental to the tasks enumerated in its
                assignment.
              </span>
              <Link href="/contact">
                <a className="home-link2 button">Contact Us</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="home-slideshow">
          <div className="home-container14">
            <div className="home-container15 container">
              <div className="wrapper">
                <img
                  alt="image"
                  src="/external/training-certification-1024x768-1500w.jpg"
                  className="home-image2 slide-img"
                />
                <img src="/external/majani-1500w.jpg" className="slide-img" />
                <img
                  alt="image"
                  src="/external/field2-1024x768-1500w.jpg"
                  className="home-image4 slide-img"
                />
                <img
                  src="/external/field-1024x768-1500w.jpg"
                  className="slide-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="home-consulting-training-and-development">
          <div className="home-container17">
            <div className="home-hero3">
              <h1 className="home-text13">
                Consulting, Training And Development
              </h1>
              <span className="home-text14">
                AIRF, as organization, has competent and experienced people who
                have proven their capability to deliver quality and impactful
                results through doing, consulting &amp; training on Human
                resource management, general management, organizational
                development, strategic management and planning Agriculture,
                research, environmental management, facilitation Business
                management, business plan development for various organizations.
              </span>
              <Link href="/programs-services">
                <a className="home-link3 button">Programs and Services</a>
              </Link>
            </div>
            <div className="home-content1">
              <h2 className="home-text15">
                Areas of Expertise and Services Delivery
              </h2>
              <div className="home-content2">
                <div className="home-row1">
                  <div className="home-card1">
                    <svg viewBox="0 0 1024 1024" className="home-icon20">
                      <path d="M896 472.747v39.253c-0.043 106.027-43.051 201.941-112.64 271.445s-165.547 112.384-271.573 112.299-201.984-43.051-271.445-112.64-112.384-165.504-112.341-271.573 43.051-201.941 112.64-271.445 165.547-112.384 271.573-112.341c56.747 0.043 110.336 12.331 155.691 33.067 21.419 9.813 46.763 0.341 56.533-21.077s0.341-46.763-21.077-56.533c-56.619-25.856-122.283-40.747-191.104-40.789-129.579-0.085-246.997 52.437-331.947 137.259s-137.557 202.24-137.643 331.819 52.437 246.997 137.259 331.947 202.197 137.6 331.776 137.643 246.997-52.437 331.947-137.259 137.6-202.197 137.685-331.819v-39.253c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM908.501 140.501l-396.501 396.885-97.835-97.792c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l128 128c16.683 16.683 43.691 16.64 60.373 0l426.667-427.093c16.64-16.683 16.64-43.691-0.043-60.331s-43.691-16.64-60.331 0.043z"></path>
                    </svg>
                    <div className="home-content3">
                      <h2>Training</h2>
                      <p className="home-text17">
                        Training to enhance competences and upskilling for
                        productivity and performance enhancements, driving
                        results and sustained competitiveness.
                      </p>
                    </div>
                  </div>
                  <div className="home-card2">
                    <svg viewBox="0 0 1024 1024" className="home-icon22">
                      <path d="M896 472.747v39.253c-0.043 106.027-43.051 201.941-112.64 271.445s-165.547 112.384-271.573 112.299-201.984-43.051-271.445-112.64-112.384-165.504-112.341-271.573 43.051-201.941 112.64-271.445 165.547-112.384 271.573-112.341c56.747 0.043 110.336 12.331 155.691 33.067 21.419 9.813 46.763 0.341 56.533-21.077s0.341-46.763-21.077-56.533c-56.619-25.856-122.283-40.747-191.104-40.789-129.579-0.085-246.997 52.437-331.947 137.259s-137.557 202.24-137.643 331.819 52.437 246.997 137.259 331.947 202.197 137.6 331.776 137.643 246.997-52.437 331.947-137.259 137.6-202.197 137.685-331.819v-39.253c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM908.501 140.501l-396.501 396.885-97.835-97.792c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l128 128c16.683 16.683 43.691 16.64 60.373 0l426.667-427.093c16.64-16.683 16.64-43.691-0.043-60.331s-43.691-16.64-60.331 0.043z"></path>
                    </svg>
                    <div className="home-content4">
                      <h2>Strategic Plan</h2>
                      <p className="home-text19">
                        Strategic Plan and Business Plan Development and
                        Implementation Support.
                      </p>
                    </div>
                  </div>
                  <div className="home-card3">
                    <svg viewBox="0 0 1024 1024" className="home-icon24">
                      <path d="M896 472.747v39.253c-0.043 106.027-43.051 201.941-112.64 271.445s-165.547 112.384-271.573 112.299-201.984-43.051-271.445-112.64-112.384-165.504-112.341-271.573 43.051-201.941 112.64-271.445 165.547-112.384 271.573-112.341c56.747 0.043 110.336 12.331 155.691 33.067 21.419 9.813 46.763 0.341 56.533-21.077s0.341-46.763-21.077-56.533c-56.619-25.856-122.283-40.747-191.104-40.789-129.579-0.085-246.997 52.437-331.947 137.259s-137.557 202.24-137.643 331.819 52.437 246.997 137.259 331.947 202.197 137.6 331.776 137.643 246.997-52.437 331.947-137.259 137.6-202.197 137.685-331.819v-39.253c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM908.501 140.501l-396.501 396.885-97.835-97.792c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l128 128c16.683 16.683 43.691 16.64 60.373 0l426.667-427.093c16.64-16.683 16.64-43.691-0.043-60.331s-43.691-16.64-60.331 0.043z"></path>
                    </svg>
                    <div className="home-content5">
                      <h2>Youth and Women</h2>
                      <p className="home-text21">
                        <span>
                          Youth and women economic empowerment for income
                          security and economic wellbeing. AIRF supports
                          diversity, equity and inclusion of voices, ideas and
                          approaches from research, project design, capacity
                          development, and implementation to after care.
                        </span>
                        <br></br>
                        <br></br>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="home-row2">
                  <div className="home-card4">
                    <svg viewBox="0 0 1024 1024" className="home-icon26">
                      <path d="M896 472.747v39.253c-0.043 106.027-43.051 201.941-112.64 271.445s-165.547 112.384-271.573 112.299-201.984-43.051-271.445-112.64-112.384-165.504-112.341-271.573 43.051-201.941 112.64-271.445 165.547-112.384 271.573-112.341c56.747 0.043 110.336 12.331 155.691 33.067 21.419 9.813 46.763 0.341 56.533-21.077s0.341-46.763-21.077-56.533c-56.619-25.856-122.283-40.747-191.104-40.789-129.579-0.085-246.997 52.437-331.947 137.259s-137.557 202.24-137.643 331.819 52.437 246.997 137.259 331.947 202.197 137.6 331.776 137.643 246.997-52.437 331.947-137.259 137.6-202.197 137.685-331.819v-39.253c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM908.501 140.501l-396.501 396.885-97.835-97.792c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l128 128c16.683 16.683 43.691 16.64 60.373 0l426.667-427.093c16.64-16.683 16.64-43.691-0.043-60.331s-43.691-16.64-60.331 0.043z"></path>
                    </svg>
                    <div className="home-content6">
                      <h2>Facilitating</h2>
                      <p className="home-text26">
                        Facilitating access to capacity building and productive
                        resources.
                      </p>
                    </div>
                  </div>
                  <div className="home-card5">
                    <svg viewBox="0 0 1024 1024" className="home-icon28">
                      <path d="M896 472.747v39.253c-0.043 106.027-43.051 201.941-112.64 271.445s-165.547 112.384-271.573 112.299-201.984-43.051-271.445-112.64-112.384-165.504-112.341-271.573 43.051-201.941 112.64-271.445 165.547-112.384 271.573-112.341c56.747 0.043 110.336 12.331 155.691 33.067 21.419 9.813 46.763 0.341 56.533-21.077s0.341-46.763-21.077-56.533c-56.619-25.856-122.283-40.747-191.104-40.789-129.579-0.085-246.997 52.437-331.947 137.259s-137.557 202.24-137.643 331.819 52.437 246.997 137.259 331.947 202.197 137.6 331.776 137.643 246.997-52.437 331.947-137.259 137.6-202.197 137.685-331.819v-39.253c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM908.501 140.501l-396.501 396.885-97.835-97.792c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l128 128c16.683 16.683 43.691 16.64 60.373 0l426.667-427.093c16.64-16.683 16.64-43.691-0.043-60.331s-43.691-16.64-60.331 0.043z"></path>
                    </svg>
                    <div className="home-content7">
                      <h2>Environment</h2>
                      <p className="home-text28">
                        Environment Management, Climate Change, and
                        Sustainability.
                      </p>
                    </div>
                  </div>
                  <div className="home-card6">
                    <svg viewBox="0 0 1024 1024" className="home-icon30">
                      <path d="M896 472.747v39.253c-0.043 106.027-43.051 201.941-112.64 271.445s-165.547 112.384-271.573 112.299-201.984-43.051-271.445-112.64-112.384-165.504-112.341-271.573 43.051-201.941 112.64-271.445 165.547-112.384 271.573-112.341c56.747 0.043 110.336 12.331 155.691 33.067 21.419 9.813 46.763 0.341 56.533-21.077s0.341-46.763-21.077-56.533c-56.619-25.856-122.283-40.747-191.104-40.789-129.579-0.085-246.997 52.437-331.947 137.259s-137.557 202.24-137.643 331.819 52.437 246.997 137.259 331.947 202.197 137.6 331.776 137.643 246.997-52.437 331.947-137.259 137.6-202.197 137.685-331.819v-39.253c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM908.501 140.501l-396.501 396.885-97.835-97.792c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l128 128c16.683 16.683 43.691 16.64 60.373 0l426.667-427.093c16.64-16.683 16.64-43.691-0.043-60.331s-43.691-16.64-60.331 0.043z"></path>
                    </svg>
                    <div className="home-content8">
                      <h2>Technology</h2>
                      <p className="home-text30">
                        Technology and Best Practices Transfer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-hero4">
              <h1 className="home-text31">Partnership</h1>
              <span className="home-text32">
                Our partners are public and private sector entities,
                multi-government stakeholders, donors, community-based
                organizations, NGOs, philanthropic foundations, academic and
                research institutions, social enterprises, and individuals.
              </span>
              <Link href="/partnership">
                <a className="home-link4 button">Partnership</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="home-blog">
          <div className="home-container18">
            <div className="home-container19">
              <div className="home-blog-post-card1">
                <div className="home-container20">
                  <span className="home-text33">About Us</span>
                  <span className="home-text34">
                    AIRF is a non-for profit, development organization
                    headquartered in Arusha, Tanzania, with branches in
                    Dar-es-Salaam and Kagera, Tanzania. It is registered with a
                    certificate O1NGO/1162 under the Non-Governmental
                    Organization Act. No. 24 of 2002, Section 12(2), Tanzania.
                    AIRF designs, develops and ...
                  </span>
                  <Link href="/about">
                    <a className="home-link5 button">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="home-container21">
              <div className="home-blog-post-card2">
                <div className="home-container22">
                  <span className="home-text35">Training</span>
                  <span className="home-text36">
                    Majority of the courses offered by AIRF are short,
                    tailor-made to suit customer’s needs and are in line with
                    the current business, technological, social and economic
                    environments. Our courses are geared to improving expertise
                    and skills in various areas so that the participants can
                    turn into multi-skilled and enterprising people.
                  </span>
                  <Link href="/training">
                    <a className="home-link6 button">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="home-container23">
              <div className="home-blog-post-card3">
                <div className="home-container24">
                  <span className="home-text37">News</span>
                  <span className="home-text38">
                    <span>
                      AIRF is introducing to you training on
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <Link href="/smart-strategy-execution">
                      <a className="home-link7">
                        Smart Strategy Execution (SSE
                      </a>
                    </Link>
                    <span className="home-text40">)</span>
                    <span>
                      , a project management and intervention that involves
                      prioritization, short term planning execution and frequent
                      reviews. The short term planning as part of long term
                      strategic plan, makes it easier to adapt to changes when
                      needed, while delivering
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <Link href="/smart-strategy-execution">
                    <a className="home-link8 button">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="home-footer">
          <FooterContent
            text={
              <Fragment>
                <span className="home-text42">
                  <span>
                    © 2024
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <Link href="/">
                    <a className="home-link9">
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
          .home-container10 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-logo {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .home-container11 {
            flex: 0 0 auto;
            width: var(--dl-size-size-contentwidth);
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .home-link1 {
            display: contents;
          }
          .home-image1 {
            height: 8.5rem;
            margin-right: 0px;
            text-decoration: none;
          }
          .home-header {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .home-container12 {
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
          .home-navbar-interactive {
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
          .home-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
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
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon18 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .home-container13 {
            width: var(--dl-size-size-contentwidth);
            display: flex;
            padding: var(--dl-space-space-twounits);
            min-height: auto;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .home-hero2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text10 {
            font-size: 2.5rem;
            text-align: center;
          }
          .home-text11 {
            color: var(--dl-color-leaves-dark);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text12 {
            margin-top: 0px;
            text-align: center;
            margin-left: 0px;
            margin-right: 0px;
            padding-left: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-threeunits);
          }
          .home-link2 {
            text-align: center;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link2:hover {
            color: var(--dl-color-gray-white);
            transform: scale(1.02);
            background-color: var(--dl-color-wood-dark);
          }
          .home-slideshow {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .home-container14 {
            flex: 0 0 auto;
            width: var(--dl-size-size-contentwidth);
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .home-container15 {
            flex: 0 0 auto;
            width: 95%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .home-image2 {
            width: 100%;
            object-fit: cover;
          }
          .home-image4 {
            width: 100%;
            object-fit: cover;
          }
          .home-consulting-training-and-development {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .home-container17 {
            width: var(--dl-size-size-contentwidth);
            display: flex;
            padding: var(--dl-space-space-twounits);
            min-height: auto;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .home-hero3 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text13 {
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text14 {
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-left: 0px;
            margin-right: 0px;
            padding-left: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-threeunits);
          }
          .home-link3 {
            text-align: center;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-link3:hover {
            color: var(--dl-color-gray-white);
            transform: scale(1.02);
            background-color: var(--dl-color-wood-dark);
          }
          .home-content1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-text15 {
            font-size: 2rem;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-content2 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .home-row1 {
            gap: 48px;
            display: flex;
            max-width: 1200px;
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .home-card1 {
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
          .home-icon20 {
            fill: var(--dl-color-theme-primary1);
            width: var(--dl-size-size-medium);
            height: auto;
            align-self: center;
          }
          .home-content3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .home-text17 {
            text-align: center;
          }
          .home-card2 {
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
          .home-icon22 {
            fill: var(--dl-color-theme-primary1);
            width: var(--dl-size-size-medium);
            height: auto;
            align-self: center;
          }
          .home-content4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .home-text19 {
            text-align: center;
          }
          .home-card3 {
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
          .home-icon24 {
            fill: var(--dl-color-theme-primary1);
            width: var(--dl-size-size-medium);
            height: auto;
            align-self: center;
          }
          .home-content5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .home-text21 {
            text-align: center;
          }
          .home-row2 {
            gap: 48px;
            display: flex;
            max-width: 1200px;
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .home-card4 {
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
          .home-icon26 {
            fill: var(--dl-color-theme-primary1);
            width: var(--dl-size-size-medium);
            height: auto;
            align-self: center;
          }
          .home-content6 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .home-text26 {
            text-align: center;
          }
          .home-card5 {
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
          .home-icon28 {
            fill: var(--dl-color-theme-primary1);
            width: var(--dl-size-size-medium);
            height: auto;
            align-self: center;
          }
          .home-content7 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .home-text28 {
            text-align: center;
          }
          .home-card6 {
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
          .home-icon30 {
            fill: var(--dl-color-theme-primary1);
            width: var(--dl-size-size-medium);
            height: auto;
            align-self: center;
          }
          .home-content8 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .home-text30 {
            text-align: center;
          }
          .home-hero4 {
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
          }
          .home-text31 {
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text32 {
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-left: 0px;
            margin-right: 0px;
            padding-left: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-threeunits);
          }
          .home-link4 {
            text-align: center;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-link4:hover {
            color: var(--dl-color-gray-white);
            transform: scale(1.02);
            background-color: var(--dl-color-wood-dark);
          }
          .home-blog {
            width: 100%;
            display: flex;
            max-width: auto;
            align-items: center;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .home-container18 {
            flex: 0 0 auto;
            width: var(--dl-size-size-contentwidth);
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-white);
          }
          .home-container19 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-blog-post-card1 {
            width: 100%;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-blog-post-card1:hover {
            transform: scale(1.02);
          }
          .home-container20 {
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text33 {
            width: 100%;
            font-size: 1.5rem;
            text-align: center;
            font-weight: 300;
            padding-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: #d9d9d9;
          }
          .home-text34 {
            color: var(--dl-color-gray-500);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-link5 {
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link5:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-wood-dark);
          }
          .home-container21 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-blog-post-card2 {
            width: 100%;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-blog-post-card2:hover {
            transform: scale(1.02);
          }
          .home-container22 {
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text35 {
            width: 100%;
            font-size: 1.5rem;
            text-align: center;
            font-weight: 300;
            padding-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: #d9d9d9;
          }
          .home-text36 {
            color: var(--dl-color-gray-500);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-link6 {
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link6:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-wood-dark);
          }
          .home-container23 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-blog-post-card3 {
            width: 100%;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-blog-post-card3:hover {
            transform: scale(1.02);
          }
          .home-container24 {
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text37 {
            width: 100%;
            font-size: 1.5rem;
            text-align: center;
            font-weight: 300;
            padding-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: #d9d9d9;
          }
          .home-text38 {
            color: var(--dl-color-gray-500);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-link7 {
            color: var(--dl-color-leaves-dark);
            font-style: normal;
            font-weight: 600;
          }
          .home-text40 {
            color: var(--dl-color-leaves-dark);
            font-style: normal;
            font-weight: 600;
          }
          .home-link8 {
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link8:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-wood-dark);
          }
          .home-footer {
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
          .home-text42 {
            display: inline-block;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-link9 {
            color: var(--dl-color-leaves-dark);
            font-style: normal;
            font-weight: 600;
          }
          @media (max-width: 1600px) {
            .home-link2 {
              width: var(--dl-size-size-large);
              height: var(--dl-size-size-small);
            }
            .home-link3 {
              width: var(--dl-size-size-large);
              height: var(--dl-size-size-small);
            }
            .home-link4 {
              width: var(--dl-size-size-large);
              height: var(--dl-size-size-small);
            }
          }
          @media (max-width: 991px) {
            .home-container11 {
              width: 100%;
            }
            .home-container12 {
              width: 100%;
            }
            .home-container13 {
              width: 100%;
              flex-direction: column;
            }
            .home-hero2 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .home-text10 {
              text-align: center;
            }
            .home-text12 {
              text-align: center;
            }
            .home-container14 {
              width: 100%;
            }
            .home-container17 {
              width: 100%;
              flex-direction: column;
            }
            .home-hero3 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .home-text13 {
              text-align: center;
            }
            .home-text14 {
              text-align: center;
            }
            .home-text15 {
              text-align: center;
            }
            .home-row1 {
              align-items: center;
              flex-direction: row;
            }
            .home-row2 {
              align-items: center;
              flex-direction: row;
            }
            .home-hero4 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .home-text31 {
              text-align: center;
            }
            .home-text32 {
              text-align: center;
            }
            .home-blog {
              flex-direction: column;
            }
            .home-container18 {
              width: 100%;
            }
            .home-container19 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-container21 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-footer {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 767px) {
            .home-container11 {
              justify-content: center;
            }
            .home-container12 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-unit);
              justify-content: center;
            }
            .home-navbar-interactive {
              justify-content: center;
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-icon10 {
              fill: var(--dl-color-gray-white);
            }
            .home-mobile-menu {
              background-color: var(--dl-color-gray-dark);
            }
            .home-top {
              justify-content: flex-end;
            }
            .home-icon12 {
              fill: var(--dl-color-gray-white);
            }
            .home-container13 {
              padding: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-hero2 {
              margin-bottom: 0px;
            }
            .home-text12 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-link2 {
              width: var(--dl-size-size-large);
              height: var(--dl-size-size-small);
            }
            .home-container14 {
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-container17 {
              padding: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-hero3 {
              margin-bottom: 0px;
            }
            .home-text14 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-link3 {
              width: var(--dl-size-size-large);
              height: var(--dl-size-size-small);
            }
            .home-row1 {
              flex-direction: column;
            }
            .home-row2 {
              flex-direction: column;
            }
            .home-hero4 {
              margin-bottom: 0px;
            }
            .home-text32 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-link4 {
              width: var(--dl-size-size-large);
              height: var(--dl-size-size-small);
            }
            .home-blog {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-container18 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-link5 {
              align-self: center;
            }
            .home-link6 {
              align-self: center;
            }
            .home-link8 {
              align-self: center;
            }
            .home-footer {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-text42 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .home-container12 {
              padding: var(--dl-space-space-unit);
            }
            .home-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-container13 {
              padding: var(--dl-space-space-halfunit);
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-hero2 {
              margin-bottom: 0px;
            }
            .home-text11 {
              text-align: center;
            }
            .home-text12 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link2 {
              width: var(--dl-size-size-large);
              height: auto;
              padding: var(--dl-space-space-unit);
              margin-top: 0px;
              text-align: center;
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .home-container14 {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-container15 {
              z-index: 100;
              border-radius: var(--dl-radius-radius-radius2);
            }
            .home-container17 {
              padding: var(--dl-space-space-halfunit);
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-hero3 {
              margin-bottom: 0px;
            }
            .home-text14 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link3 {
              width: var(--dl-size-size-large);
              height: auto;
              padding: var(--dl-space-space-unit);
              margin-top: 0px;
              text-align: center;
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .home-hero4 {
              margin-bottom: 0px;
            }
            .home-text32 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link4 {
              width: var(--dl-size-size-large);
              height: auto;
              padding: var(--dl-space-space-unit);
              margin-top: 0px;
              text-align: center;
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .home-blog {
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .home-container18 {
              padding-left: var(--dl-space-space-unit);
              margin-bottom: 0px;
              padding-right: var(--dl-space-space-unit);
            }
            .home-container19 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-container20 {
              padding: var(--dl-space-space-halfunit);
            }
            .home-link5 {
              width: var(--dl-size-size-large);
              height: var(--dl-size-size-small);
              align-self: center;
              text-align: center;
            }
            .home-container21 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-container22 {
              padding: var(--dl-space-space-halfunit);
            }
            .home-link6 {
              width: var(--dl-size-size-large);
              height: var(--dl-size-size-small);
              align-self: center;
              text-align: center;
            }
            .home-container23 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-container24 {
              padding: var(--dl-space-space-halfunit);
            }
            .home-link8 {
              width: var(--dl-size-size-large);
              height: var(--dl-size-size-small);
              align-self: center;
              text-align: center;
            }
            .home-footer {
              padding: 0px;
            }
            .home-text42 {
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

export default Home
