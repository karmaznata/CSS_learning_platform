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
        tutorial_intro_text: "This tutorial introduces Grid method for positioning elements on a page , its main features, and CSS syntax. At the end of the topic, you will be able to take a short test to consolidate your skills.",
        description: "Grid is a two-dimensional layout method for positioning elements in grid.",
        method_browser_support: "widely",
        browser_support_link: "https://caniuse.com/?search=grid",
        usage_goals_heading: "Grid solves the following tasks:",
        usage_goals:[`Create intricate, multi-column layouts with ease.`, `Easily align items within the grid vertically and horizontally.`, `Create grids within grids, providing additional flexibility in layout design.`,
        `Precisely control the dimension of elements.`, `Add gaps between grid items, providing spacing and improving readability.`]
    },
    {
        tutorial_id: 72003,
        tutorial_theme: "CSS Grid Subgrid",
        path: "subgrid",
        tutorial_banner: subgridBanner,
        tutorial_intro_text: "This tutorial introduces Subgrid, a technology for positioning elements on a page inside another grid, its main features, and CSS syntax. At the end of the topic, you will be able to take a short test to consolidate your skills.",
        description: "Subgrid is a two-dimensional layout method for positioning elements inside of another already created  grid.",
        method_browser_support: "supported",
        browser_support_link: "https://caniuse.com/?search=subgrid",
        usage_goals_heading: "Subgrid solves the following case:",
        usage_goals: [`Create and position elements within the created grid that will inherit the properties of the parent grid, which allows you to manage a single set of tracks (columns and rows).`]
    },
    {
        tutorial_id: 84104,
        tutorial_theme: "Multi-column Layout",
        path: "multi-column",
        tutorial_banner: multicolBanner,
        tutorial_intro_text: "This tutorial introduces Multi-column layout , an approach of arranging a chunk of content, its main features, and CSS syntax. At the end of the topic, you will be able to take a short test to consolidate your skills.",
        description: "Multi-column layout is a CSS feature that allows content to flow into multiple columns within a container, facilitating better organization and readability of text-heavy content on a webpage.",
        method_browser_support: "widely",
        browser_support_link: "https://caniuse.com/?search=multicol",
        usage_goals_heading: "By using multicol you can:",
        usage_goals: [`Effectively present long text content, making it easier for users to comprehend its content.`, `Position texts in the styles of magazines, newspapers, textbooks, educational materials, etc.`, `Display lists, such as products, in multiple columns.`, `Create image galleries or portfolios.`, `Provide responsive design.`]
    },
    {
        tutorial_id: 93105,
        tutorial_theme: "Container Queries",
        path: "container-queries",
        tutorial_banner: containerQuerieslBanner,
        tutorial_intro_text: "In this tutorial we are going to consider container queries layout , its main features, and CSS syntax. At the end of the topic, you will be able to take a short test to consolidate your skills.",
        description: "Container Queries are a highly anticipated feature in CSS that allow developers to apply styles based on the size of a container rather than the viewport.",
        method_browser_support: "low",
        browser_support_link: "https://caniuse.com/?search=container%20queries",
        usage_goals_heading: "Container Queries layout help with:",
        usage_goals: [`Designing components that need to adapt their layout based on their container size, such as navigation menus, cards, or grids building macro and micro layout.`,
        `Creating layouts that adjust dynamically to the available space within a container, ensuring optimal presentation across various screen sizes and devices.`, `Implementing complex user interface elements, like interactive widgets or modals, that require responsive behavior based on their container's dimensions.`]
    },
];

export default all_tutorials;
