import React from 'react'

import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import { Intro, Anchor } from '../typography.styled'
import { Section } from '../section'

const About = () => {
  return (
    <Section top={75}>
      <Grid>
        <Row>
          <Col mdOffset={1} md={10} xs={12}>
            <Intro>
              <b>I'm Tyler</b>
              <br />I am a full stack developer from Ottawa Canada. Here you’ll
              find a few things about me, my{' '}
              <Anchor href="#core-values">Core Values</Anchor>, my{' '}
              <Anchor href="#key-practices">Key Practices</Anchor> and my{' '}
              <Anchor href="#experience">Experience</Anchor>. I often find that
              people present their experiences first, however I believe that
              core values and key practices are what have enabled me to do great
              work.
            </Intro>
          </Col>
        </Row>
      </Grid>
    </Section>
  )
}

export default About
