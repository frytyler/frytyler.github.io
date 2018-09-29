import React from 'react'

import { Grid, Row, Col } from 'react-styled-flexboxgrid'

import { Section, Heading, Description, SubHeading } from '../section'
import { List, Item } from './core-values.styled'

const CoreValues = () => {
  return (
    <Section>
      <a id="core-values" />
      <Heading>Core Values</Heading>
      <Description>
        Here are three of my core values. I've listed a few ways in which a work
        environment can help me prioritize them.
      </Description>
      <Grid>
        <Row>
          <Col xs={12} md={4}>
            <SubHeading>
              Invest in
              <br />
              Family
            </SubHeading>
            <List>
              <Item>Supports Work / Life Balance</Item>
              <Item>Promotes Honesty</Item>
              <Item>Encourages Healthy Living</Item>
            </List>
          </Col>
          <Col xs={12} md={4}>
            <SubHeading>
              Identify Opportunity <br />
              for Leadership
            </SubHeading>
            <List>
              <Item>Gives Freedom to Learn</Item>
              <Item>Inspires Innovation</Item>
              <Item>Allows for Creativity</Item>
            </List>
          </Col>
          <Col xs={12} md={4}>
            <SubHeading>
              Explore <br />
              Curiosity
            </SubHeading>
            <List>
              <Item>Expects Excellence</Item>
              <Item>Gives Ownership</Item>
              <Item>Provides Clear Vision</Item>
            </List>
          </Col>
        </Row>
      </Grid>
    </Section>
  )
}

export default CoreValues
