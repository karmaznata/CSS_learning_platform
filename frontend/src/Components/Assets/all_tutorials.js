import flexboxBanner from '../Assets/flexbox-intro.png';
import gridBanner from '../Assets/grid-intro.png';
import subgridBanner from '../Assets/subgrid-intro.png';
import multicolBanner from '../Assets/multicol-intro.png';
import containerQuerieslBanner from '../Assets/container-queries-intro.png';

const all_tutorials = [
    {
        tutorial_id: 72801,
        tutorial_theme: "Flexbox",
        path: "flexbox",
        tutorial_banner: flexboxBanner,
        tutorial_intro_text: "This tutorial introduces Flexbox, a technology for positioning elements on a page, its main features, and CSS  syntax. At the end of the topic, you will be able to take a short test to consolidate your skills.",
        description: "Flexbox is a one-dimensional layout method for positioning elements in rows or columns.",
        method_browser_support: "widely",
        browser_support_link: "https://caniuse.com/?search=flexbox",
        usage_goals_heading: 'Flexbox solves the following tasks:',
        usage_goals: [`Create layouts that place elements along a given axis.`, `Aligns the container's contents within the parent component.`, `Make all child elements of a container occupy the same amount of available width/height, regardless of what width/height is available.`]
    },
    {
        tutorial_id: 39002,
        tutorial_theme: "Grid",
        path: "grid",
        tutorial_banner: gridBanner,
        description: "Grid is a two-dimensional layout method for positioning elements in grid.",
        methodBrowserSupport: "widely"
    },
    {
        tutorial_id: 72003,
        tutorial_theme: "CSS Grid Subgrid",
        path: "subgrid",
        tutorial_banner: subgridBanner,
        description: "Subgrid is a two-dimensional layout method for positioning elements inside of another already created  grid.",
        methodBrowserSupport: "supported"
    },
    {
        tutorial_id: 84104,
        tutorial_theme: "Multi-column Layout",
        path: "multi-column",
        tutorial_banner: multicolBanner,
        description: "Multi-column layout organizes content into multiple vertical columns within a designated container.",
        methodBrowserSupport: "widely"
    },
    {
        tutorial_id: 93105,
        tutorial_theme: "Container Queries",
        path: "container-queries",
        tutorial_banner: containerQuerieslBanner,
        description: "Container Queries allows styles to adapt based on the size of their containing element rather than the viewport.",
        methodBrowserSupport: "low"
    },
];

export default all_tutorials;
