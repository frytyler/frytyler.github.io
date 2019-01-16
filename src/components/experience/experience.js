import React from 'react'

import { Grid, Row, Col } from 'react-styled-flexboxgrid'

import { Anchor } from '../typography.styled'
import { Section, Heading, Description } from '../section'
import { Item, ItemDescription, List, ListItem } from './experience.styled'

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
              <b>Team Lead</b>
              <br />
              <List>
                <ListItem>
                  As a team lead I provide mentorship and training for our two
                  development teams. This includes providing context, direction
                  and support.
                </ListItem>
                <ListItem>
                  I’ve been involved in the direction of the product and setting
                  priorities and goals for each team.
                </ListItem>
              </List>
              <b>Senior Developer</b>
              <br />
              <List>
                <ListItem>
                  One of my roles as a full stack developer is on our current
                  product where I look for opportunities to improve the
                  architecture.
                </ListItem>
                <ListItem>
                  I lead a project that is modernizing our tech stack using
                  React, Node and other tools.
                </ListItem>
                <ListItem>
                  Current Tech Stack: ColdFusion, MsSQL, jQuery
                </ListItem>
                <ListItem>
                  Modern Tech Stack: Node.js, MySQL, Mongo, RxJS, React, GraphQL
                  and others.
                </ListItem>
              </List>
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
              <List>
                <ListItem>
                  CRG provides all the resources to the Conservative Members of
                  Parliament. Our team was providing a variety of services both
                  to internal staff as well as MP’s. We built a platform to
                  provide each MP with a unique website that they could control.
                  The platform provided a library of plugins targeted to their
                  market.
                </ListItem>
                <ListItem>
                  Through building that platform and a number of other services,
                  I was able to learn very valuable skills that I continue to
                  use everyday.
                </ListItem>
                <ListItem>
                  The stack consisted of PHP, MySQL, Javascript, Backbone and
                  others.
                </ListItem>
              </List>
            </ItemDescription>
          </Col>
        </Row>
      </Grid>
    </Section>
  )
}

export default Experience
