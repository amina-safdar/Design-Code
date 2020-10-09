/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const dotenv = require("dotenv");

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

if (process.env.NODE_ENV === 'development') {
  process.env.GATSBY_WEBPACK_PUBLICPATH = '/'
}

const {
  spaceId,
  accessToken
} = process.env;

module.exports = {
  plugins: [{
    resolve: "gatsby-source-contentful",
    options: {
      spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
      accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`
    }
  },
  {
    resolve: `gatsby-plugin-styled-components`,
    options: {
      // Add any options here
    },
  }
  ]
};
