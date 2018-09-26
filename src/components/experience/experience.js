import React from 'react'

import { Grid, Row, Col } from 'react-styled-flexboxgrid'

import { Anchor } from '../typography.styled'
import { Section, Heading, Description } from '../section'
import { Item, ItemDescription } from './experience.styled'

const Experience = () => {
  return (
    <Section noDivider>
      <a id="experience" />
      <Heading>Experience</Heading>
      <Description>
        Listed below are my most recent full-time roles. Refer to my{' '}
        <Anchor href="https://github.com/frytyler">Github</Anchor> account for
        some other work.
      </Description>
      <Grid>
        <Row>
          <Col xs={12} sm={3}>
            <Item company="MB3 Technologies" start="March 2014" />
          </Col>
          <Col xs={12} smOffset={1} sm={7}>
            <ItemDescription position="Team Lead / Senior Developer">
              A large portion of my role at MB3 is a Team Lead. In that position
              I help the two development teams by providing context, direction
              and support. This is done through a variety of ways including
              mentorship and training. <br />
              <br />
              My remaining time is spent as a senior fullstack developer. Our
              current legacy product is built in Coldfusion + MsSQL and jQuery
              frontend. We have been working on multiple solutions to modernize
              this through Node.js, MySQL, Mongo, RxJS in the backend and the
              full React ecosystem in the frontend.
              <br /> <br />
            </ItemDescription>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={3}>
            <Item
              company="Conservative Resource Group (CRG)"
              start="November 2010"
              end="March 2014"
            />
          </Col>
          <Col xs={12} smOffset={1} sm={7}>
            <ItemDescription position="Web Developer">
              CRG provides all the resources to the Conservative Members of
              Parliament. Our team was providing a variety of services both to
              internal staff as well as MP’s. We built a platform to provide
              each MP with a unique website that they could control. The
              platform provided a library of plugins targeted to their market.
              <br />
              <br />
              Through building that platform and a number of other services, I
              was able to learn very valuable skills that I continue to use
              everyday. <br />
              <br />
              The stack consisted of PHP, MySQL, Javascript, Backbone and
              others.
            </ItemDescription>
          </Col>
        </Row>
      </Grid>
    </Section>
  )
}

export default Experience
