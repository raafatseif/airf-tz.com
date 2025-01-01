import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'
import FooterContent from '../components/footer-content'

const Training = (props) => {
  return (
    <>
      <div className="training-container1">
        <Head>
          <title>training - AIRF</title>
          <meta
            name="description"
            content="AIRF is a non-for profit, development organization headquartered in Arusha, Tanzania, with branches in Dar-es-Salaam and Kagera, Tanzania."
          />
          <meta property="og:title" content="training - AIRF" />
          <meta
            property="og:description"
            content="AIRF is a non-for profit, development organization headquartered in Arusha, Tanzania, with branches in Dar-es-Salaam and Kagera, Tanzania."
          />
        </Head>
        <div className="training-logo">
          <div className="training-container2">
            <Link href="/">
              <a className="training-link1">
                <img
                  alt="logo"
                  src="/external/airf-logo-1500h.png"
                  className="training-image"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="training-header">
          <div className="training-container3">
            <header
              data-thq="thq-navbar"
              className="training-navbar-interactive"
            >
              <div data-thq="thq-navbar-nav" className="training-desktop-menu">
                <NavigationLinks rootClassName="rootClassName10"></NavigationLinks>
              </div>
              <div data-thq="thq-burger-menu" className="training-burger-menu">
                <svg viewBox="0 0 1024 1024" className="training-icon10">
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div data-thq="thq-mobile-menu" className="training-mobile-menu">
                <div className="training-nav">
                  <div className="training-top">
                    <div
                      data-thq="thq-close-menu"
                      className="training-close-menu"
                    >
                      <svg viewBox="0 0 1024 1024" className="training-icon12">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <NavigationLinks rootClassName="rootClassName11"></NavigationLinks>
                </div>
                <div>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="training-icon14"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="training-icon16"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="training-icon18"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </header>
          </div>
        </div>
        <div className="training-blog1">
          <div className="training-container4">
            <div className="training-blog2">
              <div>
                <div>
                  <div className="training-hero">
                    <h1 className="training-text100 Heading h1">
                      Training and Development
                    </h1>
                    <p className="training-text101 text-bold">
                      &quot;Embrace continuous leaning for continuous
                      Emprovement&quot;
                    </p>
                  </div>
                  <h2 className="training-text102 h2">
                    Overall Goal of Training
                  </h2>
                  <p className="p">
                    Among the goals of AIRF’s training programs include creating
                    an understanding on various modern management and
                    productivity enhancing techniques exposing participants to
                    entrepreneurial and analytical skills to improve their
                    knowledge base, creativity, innovativeness, strategic
                    thinking, and competitiveness so as build competence and
                    capacity to constant self learning and continual improvement
                    of job efficiency, effectiveness, and productivity.
                  </p>
                  <p className="p">
                    AIRF always aims at satisfaction of ever changing customer
                    needs and wants and continuous provision of superior value
                    to customers.
                  </p>
                  <p className="p">
                    Service delivery surveys from our clients who have received
                    our training indicated that after the training, their staffs
                    associate more with their firms; there is an increase in
                    motivation, work spirit and ethics, competitiveness; better
                    organizational culture; and hence, an increase in individual
                    and overall organizational performance.
                  </p>
                  <h2 className="training-text106 h2">
                    Training Courses Offered
                  </h2>
                  <p className="p">
                    Majority of the courses offered by AIRF are short,
                    tailor-made to suit customer’s needs and are in line with
                    the current business, technological, social and economic
                    environments. Our courses are geared to improving expertise
                    and skills in various areas so that the participants can
                    turn into multi-skilled and enterprising people.
                  </p>
                  <p className="training-text108">
                    Below are some of the courses we offer in Kiswahili or
                    English:
                  </p>
                  <h3 className="training-text109 h3">
                    1. Driving Corporate Performance: Aligning Strategy and
                    culture
                  </h3>
                  <p className="p">
                    Corporate performance is about much more than financial
                    results. How can your organization align its structures,
                    systems, talent, and processes to execute a winning
                    strategy? In Driving Corporate Performance, you will
                    consider the diverse aspects of company performance and how
                    executives are using powerful performance measurement and
                    management control systems to confront some of today&apos;s
                    biggest challenges and opportunities, such as improving
                    employee motivation, using data analytics effectively. With
                    a deeper understanding of strategy communication,
                    accountability, and organizational design, you will emerge
                    fully prepared to help your organization drive short-term
                    and long-term success
                  </p>
                  <p className="training-text111 text-bold">
                    Key Benefits of attending this course
                  </p>
                  <p className="p">
                    Through an in-depth look at the links connecting strategy,
                    organizational structures and systems, culture, talent
                    management, and performance measurement, this corporate
                    performance management program improves your ability to
                    actively improve performance, create value, and drive
                    growth. You will return to your organization with the
                    strategic knowledge to align your measurement and control
                    systems across all business functions for effective strategy
                    execution and to design, motivate, and lead a successful,
                    scalable organization. You will broaden your repertoire of
                    techniques for generating growth, driving employee
                    productivity and performance, and creating sustainable value
                    for shareholders, customers, employees, and communities.
                  </p>
                  <h3 className="h3">2. Transforming Customer Experiences</h3>
                  <p className="p">
                    Superior customer service can differentiate your business in
                    the marketplace if you design the right offerings and
                    execute smartly. This program delves into the fundamentals
                    of leading and managing service-oriented businesses. You
                    will explore new strategies for designing sustainable
                    service models, addressing gaps in service execution, and
                    delivering a transformational customer experience.
                  </p>
                  <p className="text-bold">
                    Key Benefits of attending this course
                  </p>
                  <p className="p">
                    Taking a holistic approach to service design, execution, and
                    transformation, this customer experience management program
                    prepares you to create an exceptional service culture that
                    supports employees, delights customers, and drives
                    organizational performance. You will return with the
                    frameworks to align your firm&apos;s operating models and
                    strategic service mission with changing consumer needs,
                    shifting market demands, and an evolving competitive scope.
                    You will be prepared to design and deliver transformational
                    customer experiences. You will leave with a road map for
                    creating a distinct and sustainable service model,
                    maximizing customer engagement, enabling customers and
                    employees to thrive, and securing a competitive edge in your
                    industry.
                  </p>
                  <h3 className="h3">
                    3. Driving Organizational to cope with rapid changing
                    environment
                  </h3>
                  <p className="p">
                    Today&apos;s businesses must be alert to changes in the
                    external environment, develop competitive strategies quickly
                    and adapt the organization to execute. In this program, you
                    will explore organizational structures and processes that
                    have enabled organizations to change direction quickly and
                    manage successful execution of ever-shifting strategies. You
                    will also learn how to embed agility into your
                    organization&apos;s DNA as you shape your strategy, your
                    organization, and your people. Acquiring a deeper
                    understanding of the role of leadership in mobilizing and
                    driving change, eventually we will emerge ready to propel
                    higher levels of responsiveness throughout our
                    organizations.
                  </p>
                  <p className="text-bold">
                    Key Benefits of attending this course
                  </p>
                  <p className="p">
                    &quot;Agile&quot; has become a common theme across
                    management disciplines. In this program, we&apos;ll discover
                    core principles underlying this trend and the essence of
                    what it means to be agile. We&apos;ll gain a deeper
                    understanding of a range of tools and methods, their pros
                    and cons, and how you can drive an &quot;agile
                    transformation&quot; that prepares your organization to
                    adapt or move quickly whatever your strategic direction.
                  </p>
                  <h3 className="h3">4. Managing Innovation</h3>
                  <p className="p">
                    What differentiates the world&apos;s most innovative
                    companies? How do you design an innovation strategy? And how
                    do you execute a cutting-edge innovation initiative? This
                    program takes a deep dive into the latest innovation tools,
                    operating models, and business strategies used by leading
                    companies across the globe. With new insight into innovation
                    processes, you will be ready to take action and lead a
                    highly creative, innovation-focused culture that can
                    consistently deliver results.
                  </p>
                  <p className="text-bold">
                    Key Benefits of attending this course
                  </p>
                  <p className="p">
                    As you explore the prototyping and experimentation practices
                    of the world&apos;s top innovators, you will lay the
                    foundation for transforming your business and sustaining
                    growth through innovation the moment you return to work. In
                    the process, you will rethink your company&apos;s innovation
                    system and begin to create a more customized and focused
                    innovation strategy.
                  </p>
                  <h3 className="h3">
                    5. Creating meaningful Strategies for a Successful
                    Enterprise
                  </h3>
                  <p className="p">
                    More than 20 years ago, late HBS professor Clayton
                    Christensen introduced a revolutionary concept that
                    transformed the business world and is still widely applied
                    today: disruptive innovation. In this program, Trainer will
                    help strategic decision-makers understand how disruption
                    works and determine when to invest in core versus disruptive
                    business models. As you gain insight into the ways that
                    evolving industries, technologies, and competitive forces
                    can affect your business, you will be better prepared to
                    harness innovation, lead breakthrough change, and sustain
                    enterprise success.
                  </p>
                  <p className="text-bold">
                    Key Benefits of attending this course
                  </p>
                  <p className="p">
                    Examining disruption and strategic decision-making through
                    the lens of Christensen&apos;s transformative theory, you
                    will gain a deeper understanding of the levers that can
                    drive organizational growth. With the ability to spot
                    potential threats and opportunities sooner and make the
                    right strategic moves faster, you will be ready to drive
                    innovation and position your organization for long-term
                    success.
                  </p>
                  <h3 className="training-text129 h3">
                    6. Governing for Non-profit excellence
                  </h3>
                  <p className="p">
                    Non-governmental organizations worldwide face transformative
                    forces, both internally and externally. To fulfill their
                    mission, they depend ontheir board for strong, innovative
                    leadership. Governing for Nonprofit Excellence Program
                    prepares you to excel in your role as a board orexecutive
                    team member and to contribute at a higher level. As you gain
                    insight into four essential competencies of nonprofit
                    governance board leadership, strategic stewardship
                    performance measurement, and financial oversight you will
                    learn how to drive the strategic and organizational
                    transformation that enables your nonprofit organization to
                    survive and thrive.
                  </p>
                  <p className="text-bold">
                    Key Benefits of attending this course
                  </p>
                  <p className="p">
                    Whether your non-profit organization is planning to make
                    incremental improvements or is facing more significant
                    challenges, this program will prepare you to lead
                    transformational change. Focused on the critical governance
                    issues facing non-profit board leaders and executive team
                    members, you will examine the latest governance frameworks,
                    performance and measurement systems, oversight models for
                    ensuring accountability and compliance, and the dynamics
                    between boards and CEOs. With a deeper understanding of
                    board roles and responsibilities and the connections between
                    the board and executive team. You will emerge a stronger
                    leader and a more strategic steward for your organization.
                    you will examine how effective boards maintain mission
                    clarity, forge productive relationships with CEOs, structure
                    and manage important alliances, drive organizational
                    performance, achieve financial sustainability, and lead
                    transformational change.
                  </p>
                  <div>
                    <h3 className="training-text133 h3">
                      7. Driving Non-profit Performance and Innovation
                    </h3>
                    <p className="p">
                      Performance measurement is essential for organizational
                      innovation, learning, and success. Nonprofits, however,
                      must evaluate social or environmental outcomes as well as
                      financial performance, and the ideal metrics are not
                      always easy to identify. Indeed, to improve the
                      effectiveness of a nonprofit organization especially when
                      tackling society&apos;s toughest challenges—senior
                      executives and board members must prioritize assessment of
                      organizational performance. In this program, you will
                      explore how to align mission and strategy through
                      performance measurement.
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      With a stronger performance management strategy in place,
                      your organization will be better positioned to achieve its
                      objectives. This program features sessions on innovation
                      and organizational learning; generating evidence about an
                      intervention&apos;s effectiveness; building a culture of
                      performance measurement; and managing for collective
                      impact amid the challenges of today&apos;s rapidly
                      changing world. As a participant, you will learn to think
                      conceptually about performance measurement and prepare to
                      lead performance-focused initiatives that will empower
                      your organization and drive new levels of success.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text137 h3">
                      8. Strategic Perspectives in Non-profit Management
                    </h3>
                    <p className="p">
                      Today&apos;s nonprofit organizations are faced with
                      shifting demands for services, resource constraints, and
                      diverse operational challenges. They must also learn to
                      navigate the advent of new technology and new sources of
                      funding. To fulfill their missions, nonprofit leaders must
                      step up their game and create organizations that can
                      thrive in the midst of change. Exploring crucial concepts
                      and skills for nonprofit leadership, this program will
                      prepare you to strengthen management and accountability
                      while leading the evolution needed to create an effective,
                      high-performing organization.
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      This program delivers the strategic perspectives,
                      practical frameworks, and leadership skills you need to
                      drive high performance across the organization. You will
                      leave prepared to take decisive action and create a more
                      responsive, successful, and sustainable non-profit
                      organization.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text141 h3">
                      9. Changing the Game: Negotiation and Competitive
                      Decision-Making
                    </h3>
                    <p className="p">
                      Whether you&apos;re executing a strategic sale, a vendor
                      contract, or a high-stakes acquisition, your ability to
                      negotiate can make or break your company&apos;s
                      success—and your career. In this comprehensive negotiation
                      training program, you will develop the psychological
                      insights and practical skills needed to bargain more
                      effectively, make better decisions on the spot, and
                      consistently deliver results.
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      This program improves your performance in a wide range of
                      competitive transactions. You will return to your company
                      ready to make the right moves during negotiations and
                      become a skilled representative your organization can
                      trust with critical partner, vendor, client, investor, and
                      other important negotiations.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text145 h3">
                      <span>10. Making Corporate Boards More Effective</span>
                      <br></br>
                    </h3>
                    <p className="p">
                      Faced with increasingly complex oversight challenges and
                      demands for greater transparency, how can today&apos;s
                      boards do more for their companies? In this board of
                      directors training program, you will gain a deeper
                      understanding of the board&apos;s responsibilities in
                      areas such as financial resilience, strategic direction,
                      line of demarcation between the senior management team and
                      the board, executive compensation, and regulatory
                      compliance. At the same time, you will learn how to work
                      more effectively with fellow directors and company
                      management to strengthen governance, manage unexpected
                      crises, Conflicts and make decisions that drive long-term
                      corporate success.
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      This corporate governance program is based on the premise
                      that there is no one best way for boards to
                      operate—rather, each board must develop practices that
                      suit the unique needs of its company and management. As
                      you examine the latest thinking on the internal function
                      of corporate boards, interaction with management, and
                      overall board relations, you will discover how to enhance
                      and focus your own board&apos;s efforts.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text151 h3">
                      <span>11. Managing Turbulence</span>
                      <br></br>
                    </h3>
                    <p className="p">
                      <span>
                        Even before the global pandemic, businesses and their
                        leaders struggled with the extraordinary challenges of
                        technological change, rapidly evolving consumer tastes,
                        and a reconfiguration of the global economic order.
                        COVID-19 added further turbulence, disrupting supply
                        chains and causing an all-out war for scarce talent. How
                        do the best business leaders manage through these
                        disruptions? What strategies have proven successful in
                        unstable environments with few certainties? How do
                        leaders continue to grow when faced with seemingly
                        insurmountable challenges?
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        This program welcomes executives who are tasked with
                        setting the direction of their organization in a
                        volatile business environment. With an equal focus on
                        strategy and leadership, the course reflects our
                        conviction that smart strategic decision-making will
                        bear little fruit in the absence of effective
                        leadership, and that superb leadership skills are of
                        little value when businesses lack strategic moves that
                        cut through the fog of competition. Through this
                        program, you will prepare to identify strategic
                        opportunities and challenges and then create the
                        conditions for your organization to thrive
                      </span>
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      <span>
                        Through this approach that includes strategy
                        development, strategy execution, and leadership, you
                        will have a peculiar opportunity to deepen your
                        knowledge, broaden your expertise, and maximize your
                        impact in all three areas of strategic leadership.
                      </span>
                      <br></br>
                      <span>
                        Immersed in a vibrant exchange with experienced peers,
                        you will share diverse perspectives and new industry
                        insights. In the process, you will learn how to champion
                        diversity and inclusion, foster communication and trust
                        and lead strategic initiatives that accelerate
                        innovation and productivity.
                      </span>
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text164 h3">
                      12. Leading and Building a Culture of Innovation
                    </h3>
                    <p className="p">
                      Today&apos;s leaders are evolving their approaches to
                      leadership and innovation in response to quantum shifts in
                      how we work and live. In the midst of economic, societal,
                      and technological disruptions, leaders must build and lead
                      agile organizations able to collaborate, leverage digital
                      assets, and innovate again and again. This leadership
                      program immerses you in every stage of the innovation
                      process. You&apos;ll roll up your sleeves and experience
                      first-hand what it really takes to build the culture and
                      capabilities required to encourage collaborative
                      problem-solving, creative thinking, rapid iteration, and
                      learning from success and failure. You will focus on
                      addressing one of your organization&apos;s innovation
                      challenges and return to work ready to foster the
                      innovations that will drive your organization&apos;s
                      competitive advantage and growth.
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      Focusing on the nature of innovation and on your
                      leadership practice, you will expand your personal
                      effectiveness in building an organization able to execute
                      innovative ideas at scale. As you explore the culture and
                      capabilities needed to inspire organization-wide
                      innovation, you will practice the behaviors and skills
                      needed to drive innovation and change, deepening your
                      understanding of what it takes to lead creative and
                      collaborative teams that empower everyone to innovate.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text168 h3">
                      13. Risk Management for Corporate Leaders
                    </h3>
                    <p className="p">
                      All organizations even those with sophisticated models of
                      risk exposure—are vulnerable to disaster. In most
                      organizations, risk management attempts to avoid disasters
                      by emphasizing compliance, internal controls, and
                      conformance to standard operating procedures. This program
                      takes a more comprehensive and strategic view of risk
                      management. It provides frameworks and tools for senior
                      leadership and corporate boards to strengthen your
                      company&apos;s approach to managing both internal and
                      external risks. You will return from this program ready to
                      develop and implement innovative strategies by better
                      identification and mitigation of the attendant risks
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      In this course, you will examine the latest research and
                      best practices for measuring risk level, assessing
                      potential threats, identifying and responding to novel
                      risk events, and protecting enterprise value. By improving
                      your ability to organize, manage, and govern the risk
                      management function, you will be better prepared to
                      protect your company&apos;s assets, brand reputation, and
                      competitive advantage and to respond rapidly to
                      unexpected, consequential events.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text172 h3">
                      14. Building and Sustaining Competitive Advantage
                    </h3>
                    <p className="p">
                      In the fight for market leadership and the continuous
                      drive toward improved returns, your company needs to
                      devise an effective strategy and execute it flawlessly.
                      This program prepares you to tackle or lead that challenge
                      in all its aspects, from deciding in which markets to
                      compete and building a lasting competitive advantage to
                      outsmarting competitors, capturing opportunities, and
                      expanding into new markets and geographies.
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      This program will provide you with the tools, skills, and
                      insights that you need to devise a successful strategy for
                      your organization. It takes a deep dive into all aspects
                      of successful strategy and its execution: scoping the
                      competitive landscape, choosing where (and where not) to
                      compete, identifying opportunities to build a competitive
                      advantage and activating them, making advantage durable,
                      outmaneuvering competitors, driving innovation,
                      identifying and tackling needs for strategy change, and
                      leveraging multi-business and global opportunities.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text176 h3">
                      15. Designing and Executing Corporate Revitalization
                    </h3>
                    <p className="p">
                      Given today&apos;s turbulent environment, business leaders
                      are seeking a new path to success for their companies. But
                      while many firms talk about transforming themselves around
                      current trends such as digitization and remote work, most
                      struggle when it comes to actually executing a
                      transformation. If your company is at an inflection point,
                      how do you proceed? Will your business be held back by old
                      ways of thinking or is it willing to embrace new
                      frontiers? Will your company be static and hesitant in the
                      face of a changing environment or is it agile and willing
                      to transform? In this program, you will explore the
                      multiple dimensions of corporate revitalization, including
                      strategy, finance, organization, culture, and the
                      leader&apos;s role. Whether your company seeks to maximize
                      and fulfill its potential or requires radical
                      intervention, you will develop and strengthen your ability
                      to address major corporate challenges proactively, make
                      the right strategic moves, and lead a revitalization
                      effort that establishes a firm foundation for growth.
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      Drawing on lessons from companies that have executed major
                      transitions successfully, you will expand your ability to
                      diagnose what is not working or could be working better at
                      your company, overcome inertia, and revitalize the
                      organization and its culture to move in a bold new
                      direction. In the process, you will acquire practical
                      tools and approaches that will help you execute corporate
                      transformation successfully.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text180 h3">
                      16. Unlocking Growth with Climate Change Innovation
                    </h3>
                    <p className="p">
                      <span>
                        To respond to the changing climate and the related
                        demands of regulators, investors, customers, and
                        employees, businesses must embrace rapid innovation.
                        Climate challenges are coupled with exciting growth
                        opportunities for those who can transition effectively
                        to more sustainable products and practices. To succeed
                        in navigating this shift, companies need executives who
                        can lead with an understanding of new business
                        strategies and operating models.
                      </span>
                      <br></br>
                      <span>
                        Focused on both strategy and execution, this program
                        will help you identify, prioritize, and realize
                        opportunities to reduce carbon emissions; deliver
                        climate-optimized solutions; bolster the sustainability
                        of your company&apos;s operations, supply chain, and
                        offerings; and pursue emerging avenues for growth.
                        Whatever your industry or market, you will acquire a new
                        ability to lead climate-informed initiatives that boost
                        your organization&apos;s capacity to compete and
                        succeed.
                      </span>
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      Learn how you can help your company respond to climate
                      change by developing new strategies, business models,
                      operational practices, products, and services and by
                      leading purposeful organizational evolution. As you
                      explore other companies&apos; successes and failures, you
                      will clarify your own organization&apos;s best approach to
                      driving business success in the face of climate
                      challenges.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text187 h3">
                      17. Prepare for the Highest Level of Leadership
                    </h3>
                    <p className="p">
                      <span>
                        Market volatility, digital transformation, and
                        innovation are changing the way companies compete in
                        every industry and increasing the demand for business
                        leaders who are global change makers. Whether you are
                        looking to move up to the executive suite or are about
                        to take on greater leadership responsibilities, the
                        program is designed to bring about a full-scale change
                        that empowers executives to create and renew competitive
                        advantage for their organizations.
                      </span>
                      <br></br>
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      You will emerge from this life-altering program
                      transformed better able to tackle your organization&apos;s
                      toughest strategic challenges, lead with greater
                      confidence, inspire performance at all levels and
                      contribute more value as a member of your company&apos;s
                      senior leadership team.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text193 h3">
                      18. Shaping the Future of Outstanding Leaders
                    </h3>
                    <p className="p">
                      <span>
                        Taking your organization and your career to the next
                        level requires going beyond your field of expertise to
                        gain an end-to-end view of the enterprise, an in-depth
                        understanding of business operations, and a
                        multidisciplinary approach to leadership. This Program
                        accelerates this leadership transition by blending
                        full-time, personalized learning with practical
                        application on the job maximizing your learning and your
                        return on investment.
                      </span>
                      <br></br>
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      The course is designed to broaden your business
                      perspective, management expertise, and leadership skills.
                      You will learn how to identify, frame, and solve complex
                      business problems; build cooperation among disciplines;
                      and drive innovation and organizational change. Focused on
                      strategy, leadership, and the organization, the program
                      delivers the tools you need to capitalize on technological
                      disruption and digital transformation and play a more
                      strategic role in corporate success.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text199 h3">
                      19. Program for Leadership Development: Accelerating the
                      Careers of High-Potential Leaders
                    </h3>
                    <p className="p">
                      <span>
                        Innovative companies know that long-term success
                        requires a pipeline of visionary leaders who can help
                        build and secure a competitive edge. The Program
                        prepares emerging executives to become more effective
                        influencers who can contribute to corporate success on a
                        higher level. This highly personalized program that
                        focus on accelerating your business and your career. You
                        will return to your organization more confident, more
                        capable, and better equipped to take on new challenges.
                      </span>
                      <br></br>
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      This leadership development program improves your
                      decision-making and cross-functional skills by expanding
                      your understanding of business operations and the global
                      marketplace. With broader business knowledge, global
                      perspectives, and leadership insights, you will be ready
                      to create an agile culture that embraces digital
                      transformation and implement strategies that drive
                      breakthrough innovation.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text205 h3">
                      20. Driving Organizational Agility
                    </h3>
                    <p className="p">
                      <span>
                        Today&apos;s businesses must be alert to changes in the
                        external environment, develop competitive strategies
                        quickly and adapt the organization to execute. In this
                        program, you&apos;ll explore organizational structures
                        and processes that have enabled businesses to change
                        direction quickly and manage successful execution of
                        ever-shifting strategies. You will also learn how to
                        embed agility into your organization&apos;s DNA as you
                        shape your strategy, your organization, and your people.
                        Acquiring a deeper understanding of the role of leaders
                        in mobilizing and driving change, you will emerge ready
                        to propel higher levels of responsiveness throughout
                        your organization.
                      </span>
                      <br></br>
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      &quot;Agile&quot; has become a common theme across
                      management disciplines, from software development to
                      supply chain management and beyond. In this program,
                      you&apos;ll discover core principles underlying this trend
                      and the essence of what it means to be agile. You&apos;ll
                      gain a deeper understanding of a range of tools and
                      methods, their pros and cons, and how you can drive an
                      &quot;agile transformation&quot; that prepares your
                      organization to move quickly whatever your strategic
                      direction.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text211 h3">
                      21. Transforming Customer Experiences
                    </h3>
                    <p className="p">
                      This leadership development program improves your
                      decision-making and cross-functional skills by expanding
                      your understanding of business operations and the global
                      marketplace. With broader business knowledge, global
                      perspectives, and leadership insights, you will be ready
                      to create an agile culture that embraces digital
                      transformation and implement strategies that drive
                      breakthrough innovation.
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      Taking a holistic approach to service design, execution,
                      and transformation, this customer experience management
                      program prepares you to create an exceptional service
                      culture that supports employees, delights customers, and
                      drives organizational performance. You will return with
                      the frameworks to align your firm&apos;s operating models
                      and strategic service mission with changing consumer
                      needs, shifting market demands, and an evolving
                      competitive landscape.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text215 h3">
                      22. Leading Change and Organizational Renewal
                    </h3>
                    <p className="p">
                      Market-leading organizations must constantly innovate,
                      adjust to new business conditions, and seize opportunities
                      before competitors do. Focused on leading organizational
                      change, this program explores how to create a nimble
                      organization that balances innovation with performance and
                      experimentation with financial stability. You will return
                      to your company prepared to build change strategies that
                      inspire organizational change and drive corporate success.
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      Delving into the challenges of leading and managing
                      change, this program prepares you to drive organizational
                      evolution and innovation as the business environment
                      rapidly evolves. You will gain new insight into the
                      strategies used by top global companies to eliminate
                      roadblocks to change and improve your ability to become an
                      effective agent of corporate change and organizational
                      renewal.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text219 h3">
                      23. Leading Global Businesses
                    </h3>
                    <p className="p">
                      In an increasingly complex and volatile global world,
                      companies need capable leaders with a unique mix of global
                      business knowledge and personal leadership strengths. In
                      this global leadership program, you&apos;ll prepare to
                      become an authentic global leader who can step up to more
                      challenging roles. You&apos;ll develop global acumen in
                      realms as diverse as purposeful leadership in a
                      multi-stakeholder world, strategy, customer-centric
                      marketing, the structure, culture and operation of global
                      organizations and teams, and leading in a time of crisis.
                      In parallel, the program will guide you in a profoundly
                      personal exploration that builds your self-awareness and
                      emotional intelligence, delving into the core of your
                      experience to strengthen your capacities as a global
                      business leader.
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      Drawing on the diverse capabilities of a powerful faculty
                      team, this highly personalized global leadership program
                      develops both your global intelligence and your personal
                      effectiveness in leading a global business. You&apos;ll
                      learn how to create and sustain global competitive
                      advantage for your company, continue developing your own
                      global leadership, and build global leadership capacity
                      throughout your organization.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text223 h3">
                      24. Aligning Strategy and Sales
                    </h3>
                    <p className="p">
                      A company&apos;s sales organization is a core vehicle for
                      implementing business strategy—yet there&apos;s often a
                      big gap between the company&apos;s strategic objectives
                      and the way its sales organization actually functions. In
                      this program, you will examine the critical relationship
                      between business strategy and sales activities and
                      discover how to synchronize your strategic priorities,
                      go-to-market initiatives, and sales team to boost revenue
                      and long-term success.
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      Focusing on sales execution as a strategic asset, this
                      sales channel strategy program will help you enable
                      essential company-wide alignment. By aligning strategy and
                      sales, you will explore new ways to help sales
                      professionals meet their numbers, how to improve your
                      company&apos;s return on investment in business
                      development activities as well as implement the
                      infrastructure, processes, and cultural values critical to
                      profitable growth.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text227 h3">
                      25. Creating Brand Value
                    </h3>
                    <p className="p">
                      In an increasingly complex and volatile global world,
                      companies need capable leaders with a unique mix of global
                      business knowledge and personal leadership strengths. In
                      this global leadership program, you&apos;ll prepare to
                      become an authentic global leader who can step up to more
                      challenging roles. You&apos;ll develop global acumen in
                      realms as diverse as purposeful leadership in a
                      multi-stakeholder world, strategy, customer-centric
                      marketing, the structure, culture and operation of global
                      organizations and teams, and leading in a time of crisis.
                      In parallel, the program will guide you in a profoundly
                      personal exploration that builds your self-awareness and
                      emotional intelligence, delving into the core of your
                      experience to strengthen your capacities as a global
                      business leader.
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      Through real-life examples of how business to consumer
                      companies and their marketers are creating brand value,
                      you will expand your understanding of today&apos;s
                      branding challenges and discover best practices for
                      designing, curating, and managing successful brands.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text231 h3">
                      26. Creating Brand Value
                    </h3>
                    <p className="p">
                      As digital technology continues to open up new
                      distribution channels, customer demands and sales
                      strategies are rapidly evolving. With multichannel
                      networks becoming the norm, leaders must design a
                      go-to-market strategy that sells the right products at the
                      right time through the right combination of channels. In
                      this hands-on program, you will improve your ability to
                      optimize sales outcomes by developing and managing a
                      high-performance multichannel network and sales force.
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      Sales leaders must understand when to sell directly to a
                      customer, to a retailer, to a customer through a
                      distributor, or to a wholesaler that supplies a retailer.
                      This sales team management program explores effective
                      strategies for analysing different route-to-market
                      options. You will also learn to manage multiple channels,
                      strengthen sales teams, and adapt to changing market
                      dynamics. You will return to your company ready to
                      implement an action plan that sets up your distribution
                      channels—and your sales teams—to drive revenue and
                      long-term success.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text235 h3">
                      27. Strategic Negotiations: Deal making for the Long Term
                    </h3>
                    <p className="p">
                      The planning and strategizing process behind complex,
                      high-stakes deals and major disputes can be even more
                      important than your performance at the bargaining table.
                      In this business negotiation strategy program, you will
                      learn how to bring together the right players, identify
                      and address key issues, and develop the best process for
                      each deal—all before the negotiations even start.
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      The advanced skills you develop in this program will
                      enable you to achieve your goals by proactively preparing
                      for complicated, multifaceted negotiations from a
                      strategic perspective. As you learn how to take control of
                      the strategic and tactical aspects of deals, you will
                      approach each negotiation with greater skill and
                      confidence.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text239 h3">
                      28. HR Excellence- Gaining Organization Growth and
                      Development through People
                    </h3>
                    <p className="p">
                      In today’s highly competitive global economy, successful
                      organizations more than ever need people who deliver real
                      business results. But while most organizations know people
                      are their most important and expensive asset, few have
                      clear insight into their potential or value.
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      Gain Insights into…Associating your department with
                      Excellence, Transforming the HR function from a support
                      function to a strategic business Unit. Highlighting the
                      evolving Labour Laws and putting strategies in place to
                      comply to these to minimize unexpected huge costs that
                      result due to unlawful decisions. Remaining locally
                      relevant while becoming globally competitive. Attracting,
                      developing and retaining the right talent for your
                      organization. Guiding your organization through changing
                      times and preparing them for the necessary changes.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text243 h3">
                      29. Understanding Principles of Management and Leadership
                      in Work Organization
                    </h3>
                    <p className="p">
                      Proper Management helps to ensure that an organization’s
                      goals are met. It is important because it helps to ensure
                      that resources are used effectively and efficiently and
                      that employees are as productive as possible. So,
                      combining management and leadership at the workplace
                      contributes greatly goals achievements.
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      Helps managers to manage organizational resources
                      effectively and efficiently. Helps managers to communicate
                      effectively. Helps managers to observe chain of command.
                      Helps managers to do delegation of duties more
                      effectively.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text247 h3">
                      30. Overcoming challenges of entrepreneurship
                    </h3>
                    <p className="p">
                      Entrepreneurship has become a major force in the global
                      economy. Policy maker across the world are discovering
                      that economic growth and prosperity lie in the hands of
                      entrepreneurs those dynamic, driven men and women,
                      organisations whom are committed to achieving success by
                      creating and marketing innovative, customer for cased new
                      products and services. Not only are these entrepreneurs
                      creating economic prosperity,but many of them are also
                      striving to make the world a better place in which to
                      live. Those organizations, individual who possess this
                      spirit of entrepreneurial leadership will continue to lead
                      the economic revolution that has proved time and again its
                      ability to raise standard of living for the people
                      everywhere.
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      Introduces you to the process of creating a new business
                      venture. Provides you with the knowledge you need to
                      launch your business so that it has greatest chance for
                      success. If equips you with the tools you will need for
                      entrepreneurial success.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text251 h3">
                      31. Pricing strategies in this era of competition.
                    </h3>
                    <p className="p">
                      Setting prices for their product and services require
                      entrepreneurs to balance a multitude of complex forces,
                      many of them working in opposite directions. Price is an
                      important factor in building long-term relationship with
                      customers and haphazard pricing techniques can confuse and
                      alienate customer hence endangering profitability of the
                      company and henceforth it survival in the marketplace.
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      <span>
                        Retention of customers if proceed well. Reasonable
                        profit hence win- win situation. Using proper pricing
                        strategies hence good impact and reputation of the
                        company.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text257 h3">
                      32. Designing a competitive business model and building a
                      solid strategic plan
                    </h3>
                    <p className="p">
                      In today’s global competitive environment, any business, a
                      large or small, that is not thinking and acting
                      strategically is extremely vulnerable. Every business is
                      exposed to the forces of rapidly changing competitive
                      environment, and in the future small business executives
                      can expect even greater change and uncertainty. From
                      sweeping political change, around the planet and rapid
                      technological advances to more intense competitive and
                      newly emerging global markets, the business environment
                      has become more turbulent and challenging to business
                      owners. Although this market turbulence creates many
                      challenges for small business, it also creates opportunity
                      for those companies that have in place strategies to
                      capitalize on them.
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      Apply proven impact Business models. You will be in a
                      position to write /formulate a powerful mission statement
                      vision. Build a customable competitive advantage. Create a
                      strategic plan for company.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text261 h3">
                      33. Creating a Learning Organization
                    </h3>
                    <p className="p">
                      “An organization&apos;s ability to learn, and translate
                      that learning into action rapidly, is the greatest
                      competitive advantage.” Continuous learning and its
                      respective implementation to generate desired business
                      outcomes is at the core of successful organizations. Prof
                      Peter Senge defined a learning organization as the one
                      “where people continually expand their capacity to create
                      the results, they truly desire, where new and expansive
                      patterns of thinking are nurtured, where collective
                      aspiration is set free, and where people are continually
                      learning to see the whole together.”
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      You will able to respond to the changes in the internal
                      and external environments of organization to ensure
                      survive and development. Your organization’s rate of
                      learning will be equal to or greater than the rate of
                      change in the environment.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text265 h3">
                      34. Customer Relationship Management (CRM)
                    </h3>
                    <p className="p">
                      CRM is a business strategy that aims to understand,
                      anticipate and manage the needs of an organisation’s
                      current and potential customers. It is a comprehensive
                      approach which provides seamless integration of every area
                      of business that touches the customer- namely marketing,
                      sales, customer services and field support through the
                      integration of people, process and technology.CRM is a
                      shift from traditional marketing as it focuses on the
                      retention of customers in addition to the acquisition of
                      new customers.
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      <span>
                        Reduced costs, because the right things are being done
                        (i.e. effective and efficient operation) Increased
                        customer satisfaction, because
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>
                        they are getting exactly what they want (i.e. meeting
                        and exceeding expectations) Ensuring that the focus of
                        the organization is external, Growth in numbers of
                        customers Maximization of opportunities (e.g. increased
                        services, referrals, etc. Increased access to a source
                        of market and competitor information Highlighting poor
                        operational processes long term profitability and
                        sustainability.
                      </span>
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text272 h3">
                      35. Corporate Governance and Ethics
                    </h3>
                    <p className="p">
                      <span>
                        Corporate governance refers to the system by which
                        corporations are directed and controlled. The governance
                        structure specifies the distribution of rights and
                        responsibilities among different participants in the
                        corporation (such as the board of directors, managers,
                        shareholders, creditors, auditors, regulators, and other
                        stakeholders and specifies the rules and procedures for
                        making decisions in corporate affairs. Governance
                        provides the structure through which corporations set
                        and pursue their objectives, while reflecting the
                        context of the social, regulatory and market
                        environment. Governance is a mechanism for monitoring
                        the actions, policies and decisions of corporations.
                        Governance involves the alignment of interests among the
                        stakeholders.
                      </span>
                      <br></br>
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      Reduced fraudulent acts within the organization
                      Satisfaction of customers/ stakeholders is realized on the
                      ground. Independence of Auditors is seen on the ground
                      Independence of Auditors is seen on the ground Separation
                      of duties/roles between Board of Directors and management
                      team is vividly clarified Speeds up growth and development
                      of organization The issue of integrity is emphasized and
                      everybody in the organization become the issue of
                      integrity is emphasized and everybody in the organization
                      become aware why it matters a lot in the growth and
                      development of organization in a more sustainable manner
                      Agency problem is handled to achieve a win- win situation.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text278 h3">
                      36. Customer Relationship Management (CRM)
                    </h3>
                    <p className="p">
                      CRM is a business strategy that aims to understand,
                      anticipate and manage the needs of an organization’s
                      current and potential customers. It is a comprehensive
                      approach which provides seamless integration of every area
                      of business that touches the customer- namely marketing,
                      sales, customer services and field support through the
                      integration of people, process and technology. CRM is a
                      shift from traditional marketing as it focuses on the
                      retention of customers in addition to the acquisition of
                      new customers.
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      Reduced costs, because the right things are being done
                      (i.e. effective and efficient operation) Increased
                      customer satisfaction, because they are getting exactly
                      what they want (i.e. meeting and exceeding expectations),
                      Ensuring that the focus of the organization is external,
                      Growth in numbers of customers, Maximization of
                      opportunities (e.g. increased services, referrals, etc.)
                      increased access to a source of market and competitor
                      information, increased access to a source of market and
                      competitor information, Highlighting poor operational
                      processes, long term profitability and sustainability.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text282 h3">
                      37. Modern Leadership in Organizations
                    </h3>
                    <p className="p">
                      <span>
                        Leaders are critical to building positive employee
                        experiences. They build their teams, provide direction,
                        help their people to grow and develop and are crucial to
                        both setting the tone and defining company culture.
                        Traditional leaders focus on themselves – their power,
                        their control and their ego, with age-old leadership
                        practices giving a dangerously high percentage of
                        decision-making power and control to a small percentage
                        of designated leaders. Traditional leaders don’t
                        encourage shared responsibility, critical thinking and
                        innovation but are all about micro-managing, keeping
                        their ‘reports’ in their place and taking rather than
                        giving credit. The outcome is a toxic and chronically
                        stressed workplace which strangles the business from the
                        inside out, preventing it from growing and thriving.
                      </span>
                      <br></br>
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      Enhanced Leadership Skills: Participants will develop a
                      better understanding of modern leadership principles,
                      styles, and strategies, leading to improved leadership
                      effectiveness.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text288 h3">
                      38. Agility and Strategic Management
                    </h3>
                    <p className="p">
                      In today&apos;s business world, agility is key. Adapting
                      quickly to changing customer demands, technology, and
                      employee expectations separate successful companies from
                      those that struggle to stay afloat. Agility, therefore,
                      allows businesses to be more flexible and responsive to
                      customer needs and expectations, as well as trends and
                      technological advances. It gives them a competitive edge
                      over other companies stuck in their ways and unable to
                      keep up with the pace of change.
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      Improved Agile Management Practices: Participants will
                      learn agile methodologies and practices, helping them
                      become more adaptable, responsive, and efficient in their
                      work. Better Strategic Thinking: Participants will develop
                      skills in strategic planning, analysis, and execution,
                      enabling them to make more informed and effective
                      decisions. Improved Problem-Solving and Decision-Making:
                      Training will equip individuals with tools and techniques
                      to solve complex problems and make better decisions.
                      Increased Productivity and Efficiency. Institutional
                      Design and Governance. Enhanced Team Collaboration:
                      Participants will learn how to foster collaboration,
                      communication, and teamwork, leading to improved team
                      performance and outcomes. Greater Resilience and
                      Adaptability: Training will help individuals become more
                      resilient and adaptable in the face of challenges and
                      change.
                    </p>
                  </div>
                  <div>
                    <h3 className="training-text292 h3">
                      39. Strategic Living &amp; Healthy Lifestyle
                    </h3>
                    <p className="p">
                      When people don’t engage in strategic living, they can
                      often feel directionless and, the things they do in life
                      aren’t helping them accomplish anything. This can lead to
                      inner turmoil and stress. Living strategically helps bring
                      your mind to peace because you know that even if it
                      doesn’t seem like you are making progress, you are indeed
                      heading in the right direction. No matter how you look at
                      it, living strategically is truly a great thing. But
                      again, on the same note, maintaining a healthy lifestyle
                      is crucial for overall well-being. However, it can be
                      challenging to navigate through the plethora of
                      information available and find practical strategies to
                      incorporate into our daily lives.
                    </p>
                    <p className="text-bold">
                      Key Benefits of attending this course
                    </p>
                    <p className="p">
                      <span>
                        Learning about useful technical and business analyses
                        (e.g., Factor conditions, Constraints and Opportunities
                        Analysis; Problems and Solutions Pathways/Results
                        Framework; Theory of Change; SWOC; PESTEL; &amp;
                        Organization’s Fitness Analysis). Introduction to
                        Strategic Visioning for personal and business purposes:
                        Vision for Change; Workable Emergent Strategy; Goal and
                        Target Setting; Stakeholder Assessment &amp; Management;
                        Innovation, Competitiveness, Inclusiveness, and
                        Resilience; Effective Work Planning, Budgeting and
                        Execution; Resource Mobilization; Risk Assessment and
                        Mitigation Strategies; and Monitoring Evaluation and
                        Learning from results to increase the odds of success.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Participants will learn techniques to improve their
                        productivity, time management, and work-life balance.
                        Increased Self-Awareness and Personal Growth: Training
                        will help individuals understand their strengths,
                        weaknesses, values, and goals, leading to personal
                        growth and development.
                      </span>
                      <br></br>
                      <br></br>
                      <br></br>
                      <span>
                        AIRF, apart from the courses outlined above, we also
                        design training courses for organizations basing on
                        their training assessment needs, contextual analysis
                        (tailor made courses) so as to be able to solve problems
                        and improve work performance.
                      </span>
                      <br></br>
                    </p>
                  </div>
                  <div className="training-section1">
                    <h2 className="training-text305 h2">Mode of delivery</h2>
                    <ol className="training-ul1 list">
                      <li className="list-decimal list-item">
                        <span>
                          For organizations, trainings will be in person or face
                          to face delivered in organization&apos;s premises or
                          any place which the organization will choose. For the
                          training to be conducted at the organizations’
                          premises the number of people (participants) should
                          not be less than five (5). The cost is a round table
                          negotiation. The training duration for each course
                          will be at least 3 days to at most 5 days depending on
                          the intensity of the course.
                        </span>
                      </li>
                      <li className="list-decimal list-item">
                        <span>
                          The course may be advertised in social media or other
                          means of communications and delivered in Hotels’
                          conference rooms at a mentioned reasonable cost, and
                          trainings can be done anywhere in the country and
                          outside the country.
                        </span>
                      </li>
                    </ol>
                  </div>
                  <h2 className="training-text308 h2">
                    Training Duration And Financial Requirements
                  </h2>
                  <p className="p">
                    Training duration: Each course is conducted for 3-6 days
                  </p>
                  <p className="p">
                    Number of participants: 15-25 participants
                  </p>
                  <p className="p">Training fees: Affordable</p>
                  <h2 className="h2">Output of Training on The Target Group</h2>
                  <ol className="training-ul2 list">
                    <li className="list-bullet list-item">
                      <span>
                        New understanding on current local and global business
                        issues will be created;
                      </span>
                    </li>
                    <li className="list-bullet list-item">
                      <span>
                        Enhanced capability to assemble and effective use of
                        resources;
                      </span>
                    </li>
                    <li className="list-bullet list-item">
                      <span>
                        Strategic positioning of the organization/institution
                        staff in dealing with global challenges
                      </span>
                    </li>
                    <li className="list-bullet list-item">
                      <span>
                        Self confidence and empowerment of the staff in pursuing
                        business and production issues effectively and
                        efficiently;
                      </span>
                    </li>
                    <li className="list-bullet list-item">
                      <span>
                        Output orientation rather than input orientation;
                      </span>
                    </li>
                    <li className="list-bullet list-item">
                      <span>
                        Clear roles, accountability and responsibility of the
                        staff will be enhanced;
                      </span>
                    </li>
                    <li className="list-bullet list-item">
                      <span>
                        Employees satisfaction, team building and a resource
                        based institution will be created;
                      </span>
                    </li>
                    <li className="list-bullet list-item">
                      <span>
                        Increased and improved quality of work, customer
                        satisfaction and recognition among stakeholders;
                      </span>
                    </li>
                    <li className="list-bullet list-item">
                      <span>
                        Positive impact on personal knowledge and overall
                        economic development and poverty reduction.
                      </span>
                    </li>
                  </ol>
                  <div className="training-section2">
                    <h2 className="training-text322 h2">Sustainability</h2>
                    <p className="p">
                      The fact that the training will improve the skills and
                      knowledge level of the staff it will enable participants
                      meet customer and market requirements in terms of quality,
                      safety, reliability and timelines of product or service
                      delivery, and enable them negotiate better terms,
                      resulting to premium prices and quality products.  The
                      choice of cost-effective, efficient strategies and
                      technologies will provide opportunities for organizations
                      and Tanzania to compete better in domestic and world
                      markets.
                    </p>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <footer className="training-footer">
          <FooterContent
            text={
              <Fragment>
                <span className="training-text324">
                  <span>
                    © 2024
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <Link href="/">
                    <a className="training-link2">
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
          .training-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .training-logo {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .training-container2 {
            flex: 0 0 auto;
            width: var(--dl-size-size-contentwidth);
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .training-link1 {
            display: contents;
          }
          .training-image {
            height: 8.5rem;
            margin-right: 0px;
            text-decoration: none;
          }
          .training-header {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .training-container3 {
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
          .training-navbar-interactive {
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
          .training-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .training-burger-menu {
            display: none;
          }
          .training-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .training-mobile-menu {
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
          .training-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .training-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .training-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .training-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .training-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .training-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .training-icon18 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .training-blog1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            background-color: var(--dl-color-background-off-white);
          }
          .training-container4 {
            width: var(--dl-size-size-contentwidth);
            display: flex;
            padding: var(--dl-space-space-twounits);
            min-height: auto;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .training-blog2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .training-hero {
            display: flex;
            align-items: center;
            margin-bottom: 0px;
            flex-direction: column;
          }
          .training-text100 {
            text-align: center;
            padding-bottom: 0px;
          }
          .training-text101 {
            color: var(--dl-color-leaves-dark);
            margin-top: 0px;
            text-align: center;
            margin-bottom: 0px;
          }
          .training-text102 {
            font-weight: 700;
          }
          .training-text106 {
            font-weight: 700;
          }
          .training-text108 {
            font-style: normal;
            font-weight: 400;
          }
          .training-text109 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .training-text111 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .training-text129 {
            font-weight: 700;
          }
          .training-text133 {
            font-weight: 700;
          }
          .training-text137 {
            font-weight: 700;
          }
          .training-text141 {
            font-weight: 700;
          }
          .training-text145 {
            font-weight: 700;
          }
          .training-text151 {
            font-weight: 700;
          }
          .training-text164 {
            font-weight: 700;
          }
          .training-text168 {
            font-weight: 700;
          }
          .training-text172 {
            font-weight: 700;
          }
          .training-text176 {
            font-weight: 700;
          }
          .training-text180 {
            font-weight: 700;
          }
          .training-text187 {
            font-weight: 700;
          }
          .training-text193 {
            font-weight: 700;
          }
          .training-text199 {
            font-weight: 700;
          }
          .training-text205 {
            font-weight: 700;
          }
          .training-text211 {
            font-weight: 700;
          }
          .training-text215 {
            font-weight: 700;
          }
          .training-text219 {
            font-weight: 700;
          }
          .training-text223 {
            font-weight: 700;
          }
          .training-text227 {
            font-weight: 700;
          }
          .training-text231 {
            font-weight: 700;
          }
          .training-text235 {
            font-weight: 700;
          }
          .training-text239 {
            font-weight: 700;
          }
          .training-text243 {
            font-weight: 700;
          }
          .training-text247 {
            font-weight: 700;
          }
          .training-text251 {
            font-weight: 700;
          }
          .training-text257 {
            font-weight: 700;
          }
          .training-text261 {
            font-weight: 700;
          }
          .training-text265 {
            font-weight: 700;
          }
          .training-text272 {
            font-weight: 700;
          }
          .training-text278 {
            font-weight: 700;
          }
          .training-text282 {
            font-weight: 700;
          }
          .training-text288 {
            font-weight: 700;
          }
          .training-text292 {
            font-weight: 700;
          }
          .training-section1 {
            display: flex;
            flex-direction: column;
          }
          .training-text305 {
            font-weight: 700;
          }
          .training-ul1 {
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-image: none;
            list-style-position: outside;
          }
          .training-text308 {
            margin-top: var(--dl-space-space-unit);
          }
          .training-ul2 {
            list-style-type: disc;
            list-style-image: none;
            list-style-position: outside;
          }
          .training-section2 {
            display: flex;
            flex-direction: column;
          }
          .training-text322 {
            font-weight: 700;
          }
          .training-footer {
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
          .training-text324 {
            display: inline-block;
            margin-left: var(--dl-space-space-halfunit);
          }
          .training-link2 {
            color: var(--dl-color-leaves-dark);
            font-style: normal;
            font-weight: 600;
          }
          @media (max-width: 991px) {
            .training-container2 {
              width: 100%;
            }
            .training-container3 {
              width: 100%;
            }
            .training-container4 {
              width: 100%;
              flex-direction: column;
            }
            .training-hero {
              align-items: center;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .training-text100 {
              text-align: center;
            }
            .training-footer {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 767px) {
            .training-container2 {
              justify-content: center;
            }
            .training-container3 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-unit);
              justify-content: center;
            }
            .training-navbar-interactive {
              justify-content: center;
            }
            .training-desktop-menu {
              display: none;
            }
            .training-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .training-icon10 {
              fill: var(--dl-color-gray-white);
            }
            .training-mobile-menu {
              background-color: var(--dl-color-gray-dark);
            }
            .training-top {
              justify-content: flex-end;
            }
            .training-icon12 {
              fill: var(--dl-color-gray-white);
            }
            .training-container4 {
              padding: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .training-hero {
              margin-bottom: 0px;
            }
            .training-footer {
              padding-left: 0px;
              padding-right: 0px;
            }
            .training-text324 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .training-container3 {
              padding: var(--dl-space-space-unit);
            }
            .training-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .training-mobile-menu {
              padding: 16px;
            }
            .training-container4 {
              padding: var(--dl-space-space-halfunit);
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .training-hero {
              margin-bottom: 0px;
            }
            .training-text101 {
              text-align: center;
            }
            .training-footer {
              padding: 0px;
            }
            .training-text324 {
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

export default Training
