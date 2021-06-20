module.exports = {
  pathPrefix: "/vincent-tse-portfolio",
  siteMetadata: {
    title: "Vincent Tse",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-fontawesome-css",
    `gatsby-plugin-sass`,
  ],
};
