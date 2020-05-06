require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `Phoenix.`,
    description: `A personal blogging theme for Gatsby with great typography and dark mode.`,
    siteUrl: process.env.SITE_URL || `http://localhost`,
    startUrl: `/`,
    copyright: `© YYYY Phoenix. All rights reserved.`,
    icon: `src/images/icon.png`,
    color: `#3C64F1`,
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
      },
      {
        name: `Blog`,
        link: `/blog`,
      },
      {
        name: `Podcast`,
        link: `/podcast`,
      },
      {
        name: `Portfolio`,
        link: `/portfolio`,
      },
      {
        name: `Photography`,
        link: `/photography`,
      },
    ],
    socialLinks: [
      {
        name: `Twitter`,
        url: `https://twitter.com`,
        icon: `twitter`,
      },
      {
        name: `Github`,
        url: `https://github.com`,
        icon: `github`,
      },
      {
        name: `Youtube`,
        url: `https://youtube.com`,
        icon: `youtube`,
      },
    ],
  },
  plugins: [
    // This is a list of all themes that this starter is using.
    // To disable a theme, remove it here and run `yarn remove @arshad/gatsby-theme-NAME`.
    `@arshad/gatsby-theme-blog-core`,
    `@arshad/gatsby-theme-page-core`,
    `@arshad/gatsby-theme-portfolio-core`,
    `@arshad/gatsby-theme-photo-core`,
    {
      resolve: `@arshad/gatsby-theme-podcast-core`,
      options: {
        feedUrl: `https://feeds.megaphone.fm/travelgenius`,
        podcast: {
          name: `Travel Genuis`,
          description: `Eligendi nisi nobis nisi voluptate. Corporis deserunt provident hic numquam. Veritatis vero necessitatibus adipisci cumque voluptate rerum at.`,
          image: `assets/images/podcast.jpg`,
          social: [
            {
              name: `Apple Podcast`,
              url: `https://itunes.apple.com`,
            },
            {
              name: `Google Podcast`,
              url: `https://podcasts.google.com`,
            },
          ],
        },
      },
    },
    `@arshad/gatsby-theme-phoenix`,
  ],
}
