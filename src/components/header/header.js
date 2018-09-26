import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Hero, Avatar, Tag } from './header.styled'

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={({
        site: {
          siteMetadata: { title },
        },
      }) => {
        return (
          <Hero>
            <Helmet>
              <title>{title}</title>
            </Helmet>
            <Avatar />
            <Tag>Hello</Tag>
          </Hero>
        )
      }}
    />
  )
}

export default Header
