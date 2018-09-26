import React from 'react'

import { Grid, Row, Col } from 'react-styled-flexboxgrid'

import { Section, Heading, Description, LeftSubHeading } from '../section'

const KeyPractices = () => {
  return (
    <Section>
      <a id="key-practices" />
      <Heading>Key Practices</Heading>
      <Description>
        Below are the key practices that I believe are neccessary as a
        developer.{' '}
      </Description>
      <Grid>
        <Row>
          <Col xsOffset={1} xs={10} mdOffset={1} md={4}>
            <LeftSubHeading>Creativity</LeftSubHeading>
            <Description align="left" top={1}>
              Thinking about the problem differently often leads to creative
              solutions.
            </Description>
            <LeftSubHeading>Empathy</LeftSubHeading>
            <Description align="left" top={1}>
              Caring about the <i>why</i> for the client is really important.
            </Description>
            <LeftSubHeading>Thoroughness</LeftSubHeading>
            <Description align="left" top={1}>
              Having enough context and setting a clear goal will provide the
              space to be thorough.
            </Description>
            <LeftSubHeading>Good Judgment</LeftSubHeading>
            <Description align="left" top={1}>
              Weighing the consequences of a certain direction will ensure the
              right decision is made.
            </Description>
          </Col>
          <Col xsOffset={1} xs={10} mdOffset={2} md={4}>
            <LeftSubHeading>Critical Thinking</LeftSubHeading>
            <Description align="left" top={1}>
              Considering the problem from multiple angles helps solve the real
              issue.
            </Description>
            <LeftSubHeading>Passion</LeftSubHeading>
            <Description align="left" top={1}>
              Focusing on the problem not the solution always returns better
              results.
            </Description>
            <LeftSubHeading>Clear Communication</LeftSubHeading>
            <Description align="left" top={1}>
              Providing the right amount of context in the right way is very
              important.
            </Description>
            <LeftSubHeading>Personal Development</LeftSubHeading>
            <Description align="left" top={1}>
              Having the ability to self reflect is vital to growth.
            </Description>
          </Col>
        </Row>
      </Grid>
    </Section>
  )
}

export default KeyPractices
