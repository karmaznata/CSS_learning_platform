import flexboxBanner from '../Assets/flexbox-intro.png';
import gridBanner from '../Assets/grid-intro.png';
import subgridBanner from '../Assets/subgrid-intro.png';
import multicolBanner from '../Assets/multicol-intro.png';
import containerQuerieslBanner from '../Assets/container-queries-intro.png';

const all_tutorials = [
    {
        id: 72801,
        tutorial_theme: "Flexbox",
        path: "flexbox",
        tutorial_banner: flexboxBanner,
        description: "Flexbox is a one-dimensional layout method for positioning elements in rows or columns.",
        methodBrowserSupport: "widely"
    },
    {
        id: 39002,
        tutorial_theme: "Grid",
        path: "grid",
        tutorial_banner: gridBanner,
        description: "Grid is a two-dimensional layout method for positioning elements in grid.",
        methodBrowserSupport: "widely"
    },
    {
        id: 72003,
        tutorial_theme: "CSS Grid Subgrid",
        path: "subgrid",
        tutorial_banner: subgridBanner,
        description: "Subgrid is a two-dimensional layout method for positioning elements inside of another already created  grid.",
        methodBrowserSupport: "supported"
    },
    {
        id: 84104,
        tutorial_theme: "Multi-column Layout",
        path: "multi-column",
        tutorial_banner: multicolBanner,
        description: "Multi-column layout organizes content into multiple vertical columns within a designated container.",
        methodBrowserSupport: "widely"
    },
    {
        id: 93105,
        tutorial_theme: "Container Queries",
        path: "container-queries",
        tutorial_banner: containerQuerieslBanner,
        description: "Container Queries allows styles to adapt based on the size of their containing element rather than the viewport.",
        methodBrowserSupport: "low"
    },
];

export default all_tutorials;
