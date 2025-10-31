// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
        tutorialSidebar: [
        'intro',
        {
            type: 'category',
            label: 'Setup',
            items: [
                'Setup/Editor Setup',
                'Setup/Scene Setup'
            ]
        },
        {
            type :'category',
            label: 'Tutorials',
            items: [
                'Tutorials/Level Structure',
                'Tutorials/Geometry',
                'Tutorials/Lighting',
                'Tutorials/Checkpoints',
                'Tutorials/Arenas And Enemies',
                'Tutorials/Texturing',
                'Tutorials/Music',
                'Tutorials/NavMesh',
                'Tutorials/Object Activator',
                'Tutorials/ULTRAKILL Event',
                'Tutorials/Optimization',
                'Tutorials/Compiling/index'
            ]
        },
        {
            type :'category',
            label: 'Advanced Tutorials',
            items: [
                'Advanced Tutorials/Information',
                'Advanced Tutorials/Skulls And Buttons',
                'Advanced Tutorials/Advanced Arenas',
                'Advanced Tutorials/Terminal Customization',
                'Advanced Tutorials/Challenges',
                'Advanced Tutorials/Tip Of The Day',
                'Advanced Tutorials/Delayed Level Name',
                'Advanced Tutorials/Plushies',
                'Advanced Tutorials/Symbiote',
                'Advanced Tutorials/Components/Components List',
                'Advanced Tutorials/Components/Slow-Mo',
                'Advanced Tutorials/Components/Screenshake',
                'Advanced Tutorials/Custom Scripts',
                'Advanced Tutorials/Custom Assets'
            ]
        },
        {
            type :'category',
            label: 'Miscellaneous',
            items: [
                'Miscellaneous/Level Compression',
                'Miscellaneous/Enemy Names',
                'Miscellaneous/Contribution'
            ]
        }
    ],
};

export default sidebars;
