module.exports = {
    title: "",
    logo: {
        alt: "Casper Logo",
        src: "/icon/Casper_Wordmark_Red_RGB.png",
        srcDark: "/icon/Casper_Wordmark_Red_RGB.png",
    },
    items: [
        // {
        //     type: "docSidebar",
        //     sidebarId: "home",
        //     label: "Home",
        //     position: "left",
        // },

        {
            type: "docSidebar",
            sidebarId: "concepts",
            label: "Concepts",
            position: "left",
        },
        {
            type: "docSidebar",
            sidebarId: "developers",
            label: "Developers",
            position: "left",
        },
        {
            type: "docSidebar",
            sidebarId: "operators",
            label: "Operators",
            position: "left",
        },
        {
            type: "docSidebar",
            sidebarId: "users",
            label: "Users",
            position: "left",
        },
        {
            type: "docSidebar",
            sidebarId: "resources",
            label: "Resources",
            position: "left",
        },
        {
            type: "docSidebar",
            sidebarId: "tutorials",
            label: "Tutorials",
            position: "left",
        },
        // {
        //     to: 'pages/condor/',
        //     label: 'Condor Articles',
        //     position: 'right'
        // },
        {
            type: "docSidebar",
            sidebarId: "condorSidebar",
            docsPluginId: 'condor',
            label: "Casper 2.0",
            position: "right",
        },
        {
            type: "docSidebar",
            sidebarId: "faqSidebar",
            docsPluginId: 'faq',
            label: "FAQ",
            position: "right",
        },
        // { 
        //     to: 'blog', 
        //     label: 'Blog Articles', 
        //     position: 'right' 
        // },
        {
            type: "search",
            position: "right",
        },
        {
            to: `https://github.com/casper-network/docs-redux/issues/new?template=feedback.yml`,
            label: "Submit Feedback",
            position: "right",
        },
        {
            type: "docsVersionDropdown",
            position: "right",
            label:"Docs Version:",
            dropdownActiveClassDisabled: true,
        },
        // {
        //     href: "https://forum.casper.network/",
        //     label: "Forum",
        //     position: "right",
        // },
        // {
        //     href: "https://discord.gg/caspernetwork",
        //     label: "Discord",
        //     position: "right",
        // },
        // {
        //     href: "https://github.com/casper-devrel/docs-redux",
        //     label: "GitHub",
        //     position: "right",
        // },
    ],
};
