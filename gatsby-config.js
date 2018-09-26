module.exports = {
  siteMetadata: {
    title: 'Tyler Fry',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/favicon.png',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `josefin sans\:700`,
          `montserrat\:300,400,400i,500,500i,600,600i,800`,
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
}
