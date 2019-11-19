require("dotenv").config()

const config = {
    title: `Phoenix.`,
    description: `A free personal blogging theme for Gatsby with great typography and dark mode.`,
    siteUrl: process.env.SITE_URL,
    startUrl: "/",
    postsPerPage: 5,
    copyright: `© YYYY Phoenix. All rights reserved.`,
    icon: `assets/images/icon.png`,
    colors: {
        primary: "#3C64F1",
    },
    fonts: {
        text: ["Open Sans", "Arial", "sans-serif"],
        heading: ["Alegreya Sans", "sans-serif"],
        branding: ["Bowlby One SC", "cursive"],
    },
    menuLinks: [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Projects",
            link: "/projects",
        },
        {
            name: "About",
            link: "/about",
        },
        {
            name: "Contact",
            link: "/contact",
        },
    ],
    socialLinks: [
        {
            name: "Twitter",
            url: "https://twitter.com/arshadcn",
            icon: "twitter",
        },
        {
            name: "Github",
            url: "https://github.com/arshad",
            icon: "github",
        },
        {
            name: "Youtube",
            url: "https://youtube.com",
            icon: "youtube",
        },
    ],
}

module.exports = {
    siteMetadata: config,
    plugins: [
        {
            resolve: "@arshad/gatsby-theme-phoenix",
            options: {
                ...config,
                contentPath: process.env.MDX_CONTENT_PATH,
            },
        },
    ],
}
