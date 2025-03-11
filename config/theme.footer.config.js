module.exports = {

    logo: {
        alt: 'Casper Logo',
        src: '/icon/Casper_Wordmark_Horizontal_Red_RGB.png',
        srcDark: "/icon/Casper_Wordmark_Horizontal_White_RGB.png",
        href: 'https://casper.network/',
        width: 120,
        height: 30,
        //className: "footer-logo",  // MP If we need more styling we can do this
    },

    copyright: `Copyright © ${new Date().getFullYear()} Casper Association. Built with Docusaurus.`,
    links: [
        {
            href: "https://discord.com/invite/casperblockchain",
            label: "Discord",
            position: "right",
        },
        {
            href: "https://github.com/casper-network/docs-redux",
            label: "GitHub",
            position: "right",
        },
        {
            href: "./disclaimer.md",
            label: "Disclaimer",
            position: "right",
        },
    ]
}