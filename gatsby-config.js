/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Poppins`,
            file: `https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700;900&display=swap`,
          },
          {
            name: `Text Me One`,
            file: `https://fonts.googleapis.com/css2?family=Text+Me+One&display=swap`,
          },
        ],
      },
    },
  ],
  siteMetadata: {
    title: `Arekku Portfolio`,
    description: `Portfolio of Arekku`,
    image: `/arekku-logo.png`
  },
}
