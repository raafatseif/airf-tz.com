import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Team2 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="team2-max-width thq-section-max-width">
          <div className="team2-section-title">
            <span>
              {props.content1 ?? (
                <Fragment>
                  <span className="team2-text39 thq-body-small">
                    Meet the dedicated individuals behind AIRF who are committed
                    to driving agricultural innovation and economic empowerment
                    in Tanzania.
                  </span>
                </Fragment>
              )}
            </span>
            <div className="team2-content10">
              <h2>
                {props.heading1 ?? (
                  <Fragment>
                    <h2 className="team2-text42 thq-heading-2">Our Team</h2>
                  </Fragment>
                )}
              </h2>
              <p>
                {props.content2 ?? (
                  <Fragment>
                    <p className="team2-text51 thq-body-large">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="team2-content11">
            <div className="team2-content12">
              <div className="team2-row1">
                <div className="team2-card1">
                  <img
                    alt={props.member1Alt}
                    src={props.member1Src}
                    className="thq-img-ratio-1-1 team2-placeholder-image1"
                  />
                  <div className="team2-content13">
                    <div className="team2-title1">
                      <span>
                        {props.member1 ?? (
                          <Fragment>
                            <span className="team2-text37 thq-body-small">
                              John Doe
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member1Job ?? (
                          <Fragment>
                            <span className="team2-text34 thq-body-small">
                              Founder &amp; CEO
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member1Content ?? (
                        <Fragment>
                          <span className="team2-text56 thq-body-small">
                            John is a visionary leader with a passion for
                            sustainable agriculture and community development.
                            With over 10 years of experience in the field, he is
                            dedicated to creating positive change in the
                            agricultural sector.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team2-social-icons1">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team2-card2">
                  <img
                    alt={props.member2Alt}
                    src={props.member2Src}
                    className="thq-img-ratio-1-1 team2-placeholder-image2"
                  />
                  <div className="team2-content14">
                    <div className="team2-title2">
                      <span>
                        {props.member2 ?? (
                          <Fragment>
                            <span className="team2-text54 thq-body-small">
                              Jane Smith
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member2Job ?? (
                          <Fragment>
                            <span className="team2-text45 thq-body-small">
                              Program Manager
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member2Content ?? (
                        <Fragment>
                          <span className="team2-text41 thq-body-small">
                            Jane brings expertise in project management and
                            capacity building. She is committed to empowering
                            youth and women in agriculture through training and
                            skill development programs.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team2-social-icons2">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team2-card3">
                  <img
                    alt={props.member3Alt}
                    src={props.member3Src}
                    className="thq-img-ratio-1-1 team2-placeholder-image3"
                  />
                  <div className="team2-content15">
                    <div className="team2-title3">
                      <span>
                        {props.member3 ?? (
                          <Fragment>
                            <span className="team2-text50 thq-body-small">
                              Alice Johnson
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member3Job ?? (
                          <Fragment>
                            <span className="team2-text44 thq-body-small">
                              Agricultural Specialist
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member3Content ?? (
                        <Fragment>
                          <span className="team2-text35 thq-body-small">
                            Alice is a seasoned agricultural specialist with a
                            focus on sustainable farming practices. She works
                            closely with farmers to implement innovative
                            techniques for increased productivity.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team2-social-icons3">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="team2-row2">
                <div className="team2-card4">
                  <img
                    alt={props.member4Alt}
                    src={props.member4Src}
                    className="thq-img-ratio-1-1 team2-placeholder-image4"
                  />
                  <div className="team2-content16">
                    <div className="team2-title4">
                      <span>
                        {props.member4 ?? (
                          <Fragment>
                            <span className="team2-text36 thq-body-small">
                              David Brown
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member4Job ?? (
                          <Fragment>
                            <span className="team2-text47 thq-body-small">
                              Environmental Consultant
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member4Content ?? (
                        <Fragment>
                          <span className="team2-text40 thq-body-small">
                            David is an environmental expert who advises on
                            sustainable land management practices. He
                            collaborates with local communities to promote
                            conservation and biodiversity.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team2-social-icons4">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team2-card5">
                  <img
                    alt={props.member5Alt}
                    src={props.member5Src}
                    className="thq-img-ratio-1-1 team2-placeholder-image5"
                  />
                  <div className="team2-content17">
                    <div className="team2-title5">
                      <span>
                        {props.member5 ?? (
                          <Fragment>
                            <span className="team2-text48 thq-body-small">
                              Sarah Lee
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member5Job ?? (
                          <Fragment>
                            <span className="team2-text38 thq-body-small">
                              Technology Transfer Officer
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member5Content ?? (
                        <Fragment>
                          <span className="team2-text46 thq-body-small">
                            Sarah specializes in technology transfer for
                            agricultural development. She facilitates the
                            adoption of new technologies among farmers to
                            improve efficiency and productivity.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team2-social-icons5">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team2-card6">
                  <img
                    alt={props.member6Alt}
                    src={props.member6Src}
                    className="thq-img-ratio-1-1 team2-placeholder-image6"
                  />
                  <div className="team2-content18">
                    <div className="team2-title6">
                      <span>
                        {props.member6 ?? (
                          <Fragment>
                            <span className="team2-text43 thq-body-small">
                              Michael Wangari
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member6Job ?? (
                          <Fragment>
                            <span className="team2-text57 thq-body-small">
                              Finance Manager
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member6Content ?? (
                        <Fragment>
                          <span className="team2-text61 thq-body-small">
                            Michael oversees the financial operations of AIRF,
                            ensuring transparency and accountability in all
                            financial matters. His expertise contributes to the
                            organization&apos;s sustainability and growth.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team2-social-icons6">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="team2-content19">
              <div className="team2-content20">
                <h2>
                  {props.heading2 ?? (
                    <Fragment>
                      <h2 className="team2-text55 thq-heading-2">
                        We’re hiring!
                      </h2>
                    </Fragment>
                  )}
                </h2>
                <span>
                  {props.content3 ?? (
                    <Fragment>
                      <span className="team2-text58 thq-body-small">
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <button className="team2-button thq-button-filled">
                <span>
                  {props.actionContent ?? (
                    <Fragment>
                      <span className="team2-text49 thq-body-small">
                        Open positions
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .team2-max-width {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .team2-section-title {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team2-content10 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team2-content11 {
            gap: 96px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .team2-content12 {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .team2-row1 {
            gap: 48px;
            display: flex;
            max-width: 1200px;
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .team2-card1 {
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
          .team2-content13 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team2-title1 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team2-social-icons1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team2-card2 {
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
          .team2-content14 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team2-title2 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team2-social-icons2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team2-card3 {
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
          .team2-content15 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team2-title3 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team2-social-icons3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team2-row2 {
            gap: 48px;
            display: flex;
            max-width: 1200px;
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .team2-card4 {
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
          .team2-content16 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team2-title4 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team2-social-icons4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team2-card5 {
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
          .team2-content17 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team2-title5 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team2-social-icons5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team2-card6 {
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
          .team2-content18 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team2-title6 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team2-social-icons6 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team2-content19 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
          }
          .team2-content20 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team2-button {
            width: 100%;
            max-width: 300px;
          }
          .team2-text34 {
            display: inline-block;
            align-self: flex-start;
          }
          .team2-text35 {
            display: inline-block;
            align-self: flex-start;
          }
          .team2-text36 {
            display: inline-block;
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
          }
          .team2-text37 {
            display: inline-block;
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
          }
          .team2-text38 {
            display: inline-block;
            align-self: flex-start;
          }
          .team2-text39 {
            display: inline-block;
          }
          .team2-text40 {
            display: inline-block;
            align-self: flex-start;
          }
          .team2-text41 {
            display: inline-block;
            align-self: flex-start;
          }
          .team2-text42 {
            display: inline-block;
            align-self: flex-start;
          }
          .team2-text43 {
            display: inline-block;
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
          }
          .team2-text44 {
            display: inline-block;
            align-self: flex-start;
          }
          .team2-text45 {
            display: inline-block;
            align-self: flex-start;
          }
          .team2-text46 {
            display: inline-block;
            align-self: flex-start;
          }
          .team2-text47 {
            display: inline-block;
            align-self: flex-start;
          }
          .team2-text48 {
            display: inline-block;
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
          }
          .team2-text49 {
            display: inline-block;
          }
          .team2-text50 {
            display: inline-block;
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
          }
          .team2-text51 {
            display: inline-block;
            align-self: flex-start;
          }
          .team2-text54 {
            display: inline-block;
            align-self: flex-start;
            font-style: normal;
            font-weight: 600;
          }
          .team2-text55 {
            display: inline-block;
            align-self: flex-start;
            font-stretch: normal;
          }
          .team2-text56 {
            display: inline-block;
            align-self: flex-start;
          }
          .team2-text57 {
            display: inline-block;
            align-self: flex-start;
          }
          .team2-text58 {
            display: inline-block;
            align-self: flex-start;
          }
          .team2-text61 {
            display: inline-block;
            align-self: flex-start;
          }
          @media (max-width: 991px) {
            .team2-row1 {
              align-items: center;
              flex-direction: row;
            }
            .team2-row2 {
              align-items: center;
              flex-direction: row;
            }
          }
          @media (max-width: 767px) {
            .team2-row1 {
              flex-direction: column;
            }
            .team2-row2 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .team2-placeholder-image1 {
              height: 450px;
            }
            .team2-placeholder-image2 {
              height: 450px;
            }
            .team2-placeholder-image3 {
              height: 450px;
            }
            .team2-placeholder-image4 {
              height: 450px;
            }
            .team2-placeholder-image5 {
              height: 450px;
            }
            .team2-placeholder-image6 {
              height: 450px;
            }
            .team2-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Team2.defaultProps = {
  member1Job: undefined,
  member4Alt: 'Image of David Brown',
  member3Content: undefined,
  member4: undefined,
  member1: undefined,
  member5Job: undefined,
  content1: undefined,
  member6Alt: 'Image of Michael Wangari',
  member4Src:
    'https://images.unsplash.com/photo-1479767574301-a01c78234a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDE5NzM2MHw&ixlib=rb-4.0.3&q=80&w=1080',
  member1Src:
    'https://images.unsplash.com/photo-1577202214328-c04b77cefb5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDE5NzM1OXw&ixlib=rb-4.0.3&q=80&w=1080',
  member4Content: undefined,
  member3Alt: 'Image of Alice Johnson',
  member3Src:
    'https://images.unsplash.com/photo-1519671845924-1fd18db430b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDE5NzM1OXw&ixlib=rb-4.0.3&q=80&w=1080',
  member2Content: undefined,
  heading1: undefined,
  member6: undefined,
  member3Job: undefined,
  member2Alt: 'Image of Jane Smith',
  member2Job: undefined,
  member2Src:
    'https://images.unsplash.com/photo-1716010590238-0f397ab965d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDE5NzM2MHw&ixlib=rb-4.0.3&q=80&w=1080',
  member5Content: undefined,
  member6Src:
    'https://images.unsplash.com/photo-1642334640124-c80d5e7e78d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDE5NzM1OXw&ixlib=rb-4.0.3&q=80&w=1080',
  member5Alt: 'Image of Sarah Lee',
  member4Job: undefined,
  member5: undefined,
  actionContent: undefined,
  member3: undefined,
  member1Alt: 'Image of John Doe',
  content2: undefined,
  member2: undefined,
  heading2: undefined,
  member1Content: undefined,
  member5Src:
    'https://images.unsplash.com/photo-1533939141733-63078e139c4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDE5NzM1OXw&ixlib=rb-4.0.3&q=80&w=1080',
  member6Job: undefined,
  content3: undefined,
  member6Content: undefined,
}

Team2.propTypes = {
  member1Job: PropTypes.element,
  member4Alt: PropTypes.string,
  member3Content: PropTypes.element,
  member4: PropTypes.element,
  member1: PropTypes.element,
  member5Job: PropTypes.element,
  content1: PropTypes.element,
  member6Alt: PropTypes.string,
  member4Src: PropTypes.string,
  member1Src: PropTypes.string,
  member4Content: PropTypes.element,
  member3Alt: PropTypes.string,
  member3Src: PropTypes.string,
  member2Content: PropTypes.element,
  heading1: PropTypes.element,
  member6: PropTypes.element,
  member3Job: PropTypes.element,
  member2Alt: PropTypes.string,
  member2Job: PropTypes.element,
  member2Src: PropTypes.string,
  member5Content: PropTypes.element,
  member6Src: PropTypes.string,
  member5Alt: PropTypes.string,
  member4Job: PropTypes.element,
  member5: PropTypes.element,
  actionContent: PropTypes.element,
  member3: PropTypes.element,
  member1Alt: PropTypes.string,
  content2: PropTypes.element,
  member2: PropTypes.element,
  heading2: PropTypes.element,
  member1Content: PropTypes.element,
  member5Src: PropTypes.string,
  member6Job: PropTypes.element,
  content3: PropTypes.element,
  member6Content: PropTypes.element,
}

export default Team2
