module.exports = {
  siteMetadata: {
    title: `Helping businesses grow with customised AI`,
    description: `Intellisr Pvt. Ltd. empowers businesses with innovative, tailor-made AI solutions to drive efficiency, growth, and long-term success. Our approach combines cutting-edge technology with deep industry insights, ensuring that every tool and concept aligns perfectly with your unique needs.`,
    siteUrl: "https://intellisr.com/",
    author: `Sathira Aroshan <sathira@intellisr.com>`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        // If you need other files from src, keep this; otherwise, remove.
        path: `${__dirname}/src`,
        name: `_content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // Removed "gatsby-remark-relative-images" because it’s typically used in Netlify CMS.
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`, `webp`],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1360,
              withWebp: false,
              showCaptions: false,
              quality: 100,
              disableBgImageOnAlpha: false,
              wrapperStyle: `margin: 7vw 0;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Intellisr pvt ltd`,
        short_name: `Intellisr`,
        start_url: `/`,
        background_color: `#ebebfa`,
        theme_color: `#ebebfa`,
        display: `standalone`,
        icon: `src/images/logo-half-c.png`, // This path is relative to the root of the site.
      },
    },
    // Removed "gatsby-plugin-netlify" because it’s specifically for Netlify integration.
    // Keep "gatsby-plugin-gatsby-cloud" only if you're deploying to Gatsby Cloud.
    `gatsby-plugin-gatsby-cloud`,
    "gatsby-plugin-postcss",
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
}