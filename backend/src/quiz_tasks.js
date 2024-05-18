
//answer_options: {a: "", b: "", c: "", d: ""},
function quiz_tasks() {
  return [
    {
      task_id: 7280101,
      quiz_theme: "Flexbox",
      task_type: "multipleChoice",
      question: "What is the primary purpose of using Flexbox layout in CSS?",
      answer_options: {
        "1": "Controlling font styles",
        "2": "Arranging items in a row or column with flexibility",
        "3": "Adjusting background colors",
        "4": "Defining keyframes for animations"
      },
      right_answer: 2,
    },
    {
      task_id: 7280102,
      quiz_theme: "Flexbox",
      task_type: "multipleChoice",
      question: "What is the default positioning behavior of children along the primary and cross axes in a Flexbox container?",
      answer_options: {
        "1": "Primary axis: Children are evenly distributed; Cross axis: Children are centered",
        "2": "Primary axis: Children spread apart; Cross axis: Children are centered",
        "3": "Primary axis: Children are bunched up at the start; Cross axis: Children stretch out to fill the entire container",
        "4": "Primary axis: Children are positioned at the end; Cross axis: Children are evenly distributed"
      },
      right_answer: 1,
    },
    {
      task_id: 7280103,
      quiz_theme: "Flexbox",
      task_type: "multipleChoice",
      question: "Which property is used to change the alignment of a specific child along the cross axis in Flexbox?",
      answer_options: {
        "1": "justify-content",
        "2": "align-items",
        "3": "align-self",
        "4": "flex-grow"
      },
      right_answer: 3,
    },
    {
      task_id: 7280104,
      quiz_theme: "Flexbox",
      task_type: "enterValue",
      question: "Add properties to the gaps to arrange the elements as shown in the picture.",
      right_answer: ['column', 'space-around', 'center'],
      htmlCode: `<div class="flexbox-panel">\n  <div class="flexbox-item">1</div>\n  <div class="flexbox-item">2</div>\n  <div class="flexbox-item">3</div>\n</div>`,
      cssCode: `.flexbox-panel {\n  display: flex;\n  flex-direction:  @cssValue\n  gap: 8px;\n  justify-content:  @cssValue\n  height: 30rem;\n  align-items:  @cssValue\n}\n\n.flexbox-item {\n  background: #99c5e9ff;\n  padding: 3rem;\n  border-radius: 6px;\n}`,
    },
    {
      task_id: 7280105,
      quiz_theme: "Flexbox",
      task_type: "enterValue",
      question: "Add properties to the gaps to arrange the elements as shown in the picture.",
      right_answer: ['flex-wrap', '10px', 'flex-grow', 'flex-grow', 'flex-grow'],
      htmlCode:`<form>\n  <label class="name" for="name-field">Name:<input id="name-field" /></label>\n  <label class="email" for="email-field">Email:<input id="email-field" type="email" /></label>\n  <button>Submit</button>\n</form>`,
      cssCode:`form {\n  display: flex;\n    @cssProperty : wrap;\n  gap:  @cssValue\n  padding: 10rem;\n  font-size: 25px;\n}\n\n.name {\n    @cssProperty : 1;\n  flex-basis: calc(25% - 4px);\n}\n\n.email {\n    @cssProperty : 2;\n  flex-basis: calc(50% - 4px);\n}\n\nbutton {\n    @cssProperty : 3;\n   flex-basis: 100%;\n   height: 40px;\n}\n\ninput {\n   height: 25px;\n   width: 98%;\n}`,
    },
    {
      task_id: 3900201,
      quiz_theme: "Grid",
      task_type: "multipleChoice",
      question: "How can child elements be arranged in a CSS grid?",
      answer_options: {
        "1": "By using float: left.",
        "2": "By using position: absolute.",
        "3": "By assigning the corresponding grid positions using grid-row and grid-column.",
        "4": "By using the display: grid property on the parent container and defining the layout using grid-template-columns and grid-template-rows properties."
      },
      right_answer: 3,
    },
    {
      task_id: 3900202,
      quiz_theme: "Grid",
      task_type: "multipleChoice",
      question: "What happens if an element is not given an explicit position in the grid?",
      answer_options: {
        "1": "It is automatically placed in the next available cell.",
        "2": "It becomes invisible and is not rendered.",
        "3": "It appears at the beginning of the grid.",
        "4": "It appears in the next row of the grid."
      },
      right_answer: 1,
    },
    {
      task_id: 3900203,
      quiz_theme: "Grid",
      task_type: "multipleChoice",
      question: "How do you define the number of columns and rows in a CSS grid?",
      answer_options: {
        "1": `With the "grid-gap" property.`,
        "2": `With the "grid-rows" and "grid-columns" property`,
        "3": `With the "grid-template-rows" and "grid-template-columns" property`,
        "4": `With the "grid-layout" property`
      },
      right_answer: 3,
    },
    {
      task_id: 3900204,
      quiz_theme: "Grid",
      task_type: "enterValue",
      question: "Add properties to the gaps to arrange the elements as shown in the picture.",
      right_answer: { 1: '1fr3fr', 2: 'header', 3: 'sidebar', 4: 'main-content', 5: 'footer' },
      htmlCode:`<div class="container">\n  <header class="header">Header</header>\n  <nav class="sidebar">Sidebar</nav>\n  <main class="main-content">\n    <section class="content">Content</section>\n    <aside class="aside">Aside</aside>\n  </main>\n  <footer class="footer">Footer</footer>\n</div>`,
      cssCode:`.container {\n    display: grid;\n    grid-template-columns:  @cssValue\n    grid-template-rows: auto 1fr auto;\n    grid-template-areas:\n        "header header header"\n        "sidebar main-content aside"\n        "footer footer footer";\n    min-height: 90vh;\n}\n\n.header{\n    grid-area:  @cssValue\n    background-color: #333;\n    color: white;\n    padding: 10px;\n}\n\n.sidebar {\n    grid-area:  @cssValue\n    background-color: #f0f0f0;\n    padding: 10px;\n}\n\n.main-content {\n    grid-area:  @cssValue\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n}\n\n.content {\n    background-color: #eaeaea;\n    padding: 10px;\n}\n\n.aside {\n    background-color: #ddd;\n    padding: 10px;\n}\n\n.footer {\n    grid-area:  @cssValue\n    background-color: #333;\n    color: white;\n    padding: 10px;\n}`,
    },
    {
      task_id: 3900205,
      quiz_theme: "Grid",
      task_type: "enterValue",
      question: "Add properties to the gaps to arrange the elements as shown in the picture.",
      right_answer: { 1: 'auto1frauto', 2: 'grid-column', 3: '3fr1fr'},
      htmlCode:`<div class="container">\n  <header class="header">Header</header>\n  <nav class="sidebar">Sidebar</nav>\n  <main class="main-content">\n    <section class="content">Content</section>\n    <aside class="aside">Aside</aside>\n  </main>\n  <footer class="footer">Footer</footer>\n</div>`,
      cssCode: `.container {\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    grid-template-rows:  @cssValue\n    grid-template-areas:\n        "header header"\n        "nav main"\n        "footer footer";\n    min-height: 50vh;\n}\n\n.main {\n    grid-area: main;\n    grid-template-columns:  @cssValue\n    display: grid;\n}\n\n.header, .footer {\n    @cssProperty : 1 / span 2;\n    background-color: #333;\n    color: white;\n    padding: 10px;\n}\n\n.nav {\n    grid-area: nav;\n    background-color: #f0f0f0;\n    padding: 10px;\n}\n\n.content {\n    background-color: #eaeaea;\n    padding: 10px;\n}\n\n.sidebar {\n    background-color: #ddd;\n    padding: 10px;\n}\n\n.footer {\n    background-color: #333;\n    color: white;\n    padding: 10px;\n}`
    },
    {
      task_id: 7200301,
      quiz_theme: "CSS Grid Subgrid",
      task_type: "multipleChoice",
      question: "What does the subgrid value do in the grid-template-columns or grid-template-rows property?",
      answer_options: {
        "1": "It sets the size of the subgrid tracks based on the content within them",
        "2": "It inherits the grid definition from the parent grid container",
        "3": "It defines the gap between the subgrid tracks",
        "4": "It aligns the subgrid tracks with the tracks of the parent grid container"
      },
      right_answer: 2,
    },
    {
      task_id: 7200302,
      quiz_theme: "CSS Grid Subgrid",
      task_type: "multipleChoice",
      question: "What happens if a grid item in a subgrid is placed outside the defined grid area?",
      answer_options: {
        "1": "It is positioned relative to the nearest grid line within the subgrid",
        "2": "It is hidden from view",
        "3": "It breaks the layout and causes an error",
        "4": "It is positioned relative to the nearest grid line within the parent grid"
      },
      right_answer: 4,
    },
    {
      task_id: 7200303,
      quiz_theme: "CSS Grid Subgrid",
      task_type: "multipleChoice",
      question: "What happens to a subgrid's alignment properties and dimensions in its subgridded dimension(s)?",
      answer_options: {
        "1": "They are fully respected, allowing for custom alignment and sizing",
        "2": "They are overridden, ignoring any specified alignment or dimensions",
        "3": "They are partially applied, depending on the content within the subgrid",
        "4": "They are adjusted based on the total number of grid lines in the parent grid"
      },
      right_answer: 2,
    },
    {
      task_id: 7200304,
      quiz_theme: "CSS Grid Subgrid",
      task_type: "enterValue",
      question: "Add properties to the gaps to arrange the elements as shown in the picture.",
      right_answer: { 1: '2/4', 2: '1/3', 3: 'grid-template-columns', 4: 'grid-template-rows'},
      htmlCode:`<div class="grid">\n  <p>One</p>\n  <p>Two</p>\n  <p>Three</p>\n  <p>Four</p>\n  <section class="subgrid">\n    <p>Five/One</p>\n    <p>Five/Two</p>\n    <p>Five/Three</p>\n    <p>Five/Four</p>\n  </section>\n  <p>Six</p>\n  <p>Seven</p>\n  <p>Eight</p>\n  <p>Nine</p>\n</div>`,
      cssCode: `.grid {\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    grid-template-rows: 50px 50vh 50px;\n}\n\n.subgrid {\n    grid-column:  @cssValue\n    grid-row:  @cssValue\n    display: grid;\n    @cssProperty : subgrid;\n    @cssProperty : subgrid;\n}\n\n.subgrid p {\n    background: #00375fff;\n    color: black;\n}\n\ndiv {\n    margin: 40px 40px 40px 20px;\n}\n\np,section{\n    background-color: #669dc5ff;\n    color: white;\n    margin: 0;\n    font-size: 1.25rem;\n    border: 1px white solid;\n}\n\np {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}`
    },
    {
      task_id: 7200305,
      quiz_theme: "CSS Grid Subgrid",
      task_type: "enterValue",
      question: "Add properties to the gaps to arrange the elements as shown in the picture.",
      right_answer: { 1: 'subgrid', 2: '1fr2fr3fr'},
      htmlCode:`<div class="grid">\n  <div class="subgrid">\n    <div class="item"></div>\n  </div>\n</div>`,
      cssCode: `.grid {\n    background-color: #99c5e9ff;\n    height: 300px;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n}\n\n.item {\n    background-color: black;\n    grid-column: 2 / 3;\n    grid-row: inherit;\n}\n\n.subgrid {\n    background-color: #669dc5ff;\n    grid-column: 2 / 5;\n    grid-row: 1 / 3;\n    display: grid;\n    grid-template-columns:  @cssValue\n    grid-template-rows:  @cssValue\n}`
    },
    {
      task_id: 8410401,
      quiz_theme: "Multi-column Layout",
      task_type: "multipleChoice",
      question: "What value can be used to create a gap between columns in a multi-column layout?",
      answer_options: {
        "1": "gap",
        "2": "column-gap",
        "3": "space-between",
        "4": "column-space"
      },
      right_answer: 2,
    },
    {
      task_id: 8410402,
      quiz_theme: "Multi-column Layout",
      task_type: "multipleChoice",
      question: "How can you create a balanced multi-column layout where columns adjust their width to fill available space evenly?",
      answer_options: {
        "1": "Using the 'column-count' property with a fixed number of columns",
        "2": `Applying 'column-width' with a specific width for each column`,
        "3": `Utilizing the 'auto' value for 'column-width' property`,
        "4": `Setting 'column-gap' to a percentage value`
      },
      right_answer: 3,
    },
    {
      task_id: 8410403,
      quiz_theme: "Multi-column Layout",
      task_type: "multipleChoice",
      question: "What CSS property allows you to define the appearance and width of the line that separates columns in a multi-column layout?",
      answer_options: {
        "1": "column-width",
        "2": "column-rule",
        "3": "column-span",
        "4": "column-fill"
      },
      right_answer: 2,
    },
    {
      task_id: 8410404,
      quiz_theme: "Multi-column Layout",
      task_type: "enterValue",
      question: "Add properties to the gaps to arrange the elements as shown in the picture.",
      right_answer: { 1: '3', 2: 'column-gap'},
      htmlCode:`<div class="container">\n  <div class="article">\n    <h2>Article Title 1</h2>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet augue vel libero tempor, eu tincidunt velit accumsan.</p>\n    <p>Integer consequat justo in tortor convallis, ut ultrices urna dignissim. Vivamus tincidunt tortor vitae orci dapibus, id facilisis arcu tincidunt.</p>\n  </div>\n  <div class="article">\n    <h2>Article Title 2</h2>\n    <p>Phasellus ut justo nec mauris venenatis tempor ac eget est. 
      Nullam quis urna ac ex fermentum faucibus.</p>\n    <p>Nullam tincidunt metus ut mi posuere, sit amet tincidunt libero vestibulum. Duis bibendum urna nec massa dictum, at feugiat mauris consequat.</p>\n  </div>\n  <div class="article">\n    <h2>Article Title 3</h2>\n    <p>Etiam placerat libero vel ante efficitur, eu vestibulum mauris mattis. Suspendisse potenti. </p>\n    <p>Sed sit amet justo pretium, molestie elit nec, laoreet quam. Pellentesque id ipsum luctus, eleifend arcu id, egestas tortor.</p>\n  </div>\n</div>`,
      cssCode: `.container {\n    column-count:  @cssValue\n    @cssProperty : 25px;\n}\n\n.article {\n    margin-bottom: 20px;\n    break-inside: avoid;\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    background-color: #f9f9f9;\n    overflow: hidden;\n}\n\nh2 {\n    margin-top: 0;\n}\n\np {\n    margin-bottom: 10px;\n}`
    },
    {
      task_id: 8410405,
      quiz_theme: "Multi-column Layout",
      task_type: "enterValue",
      question: "Add properties to the gaps to arrange the elements as shown in the picture.",
      right_answer: { 1: 'column-rule', 2: 'column-span'},
      htmlCode:`<div class="container">\n  <div class="article">\n    <h2>Article Title 1</h2>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet augue vel libero tempor, eu tincidunt velit accumsan.</p>\n    <p>Integer consequat justo in tortor convallis, ut ultrices urna dignissim. Vivamus tincidunt tortor vitae orci dapibus, id facilisis arcu tincidunt.</p>\n  </div>\n  <div class="article">\n    <p>Phasellus ut justo nec mauris venenatis tempor ac eget est. Nullam quis urna ac ex fermentum faucibus.</p>\n    
      <p>Nullam tincidunt metus ut mi posuere, sit amet tincidunt libero vestibulum. Duis bibendum urna nec massa dictum, at feugiat mauris consequat.</p>\n  </div>\n  <div class="article">\n    <p>Etiam placerat libero vel ante efficitur, eu vestibulum mauris mattis. Suspendisse potenti. </p>\n    <p>Sed sit amet justo pretium, molestie elit nec, laoreet quam. Pellentesque id ipsum luctus, eleifend arcu id, egestas tortor.</p>\n  </div>\n</div>`,
      cssCode: `.container {\n    column-count: 3;\n    column-gap: 25px;\n    @cssProperty : 2px solid #ccc;\n}\n\n.article {\n    padding: 10px;\n    border-radius: 5px;\n    background-color: #f9f9f9;\n}\n\n.article h2{\n    background: rgba(255, 0, 0, 0.2);\n    @cssProperty : all;\n}\n\np {\n    margin-bottom: 10px;\n}`
    },
    {
      task_id: 9310501,
      quiz_theme: "Container Queries",
      task_type: "multipleChoice",
      question: "What is the primary difference between media queries and container queries?",
      answer_options: {
        "1": "Media queries focus on user agent or device environment, while container queries focus on elements within the document",
        "2": "Media queries target viewport dimensions, while container queries target box dimensions",
        "3": "Media queries apply to all elements by default, while container queries require specific declaration with container-type property",      },
      right_answer: 1,
    },
    {
      task_id: 9310502,
      quiz_theme: "Container Queries",
      task_type: "multipleChoice",
      question: `What does the container-type property value "inline-size" establish for container queries?`,
      answer_options: {
        "1": "It establishes a query container for container size queries on both the inline and block axis",
        "2": "It establishes a query container for container size queries on the container's own inline axis",
        "3": "It excludes the element from being a query container for any container size queries",
        "4": "It applies layout containment, style containment, and size containment to the principal box"
      },
      right_answer: 2,
    },
    {
      task_id: 9310503,
      quiz_theme: "Container Queries",
      task_type: "multipleChoice",
      question: "What determines the applicability of style declarations within the <stylesheet> block of an @container rule?",
      answer_options: {
        "1": "The number of conditions listed within the <container-condition>",
        "2": "Whether the element's query container matches the specified <container-name>",
        "3": "The presence of nested container queries within the <stylesheet> block",
        "4": "The evaluation of the container query condition for the element's ancestor query containers"
      },
      right_answer: 4,
    },
    {
      task_id: 9310504,
      quiz_theme: "Container Queries",
      task_type: "enterValue",
      question: "Add properties to the gaps to arrange the elements as shown in the picture.",
      right_answer: { 1: 'container-type', 2: '@container'},
      htmlCode:`<div class="card-container resizable">\n  <div class="card">\n    <div class="card-item">First Card</div>\n    <div class="card-item">Second Card</div>\n     <div class="card-item">Third Card</div>\n  </div>\n</div>`,
      cssCode: `.card-container {\n    @cssProperty : inline-size;\n}\n\n.card-item{\n    height: 9rem;\n    width: 100%;\n    background: #00375fff;\n    font-size: 20px;\n    text-align: center;\n}\n\n.card {\n    color: white;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 5px;\n}\n\n    @cssProperty (min-width: 400px){\n  .card-item {\n    width: 30%;\n    background: #99c5e9ff;\n    color: black;\n  }\n}\n\n.resizable{\n    height: 30rem;\n    width: 570px;\n    padding: 5px;\n    min-width: 375px;\n    max-width: 43rem;\n    resize: horizontal;\n    overflow: auto;\n    border: 2px solid gray;\n    border-radius: 5px;\n}`
    },
    {
      task_id: 9310505,
      quiz_theme: "Container Queries",
      task_type: "enterValue",
      question: "Add properties to the gaps to arrange the elements as shown in the picture.",
      right_answer: { 1: 'container', 2: 'grid-template-columns', 3:'font-size'},
      htmlCode:`<div class="article-container resizable">\n  <article>\n    <h3>Article Title</h3>\n    <p>Article content goes here...</p>\n  </article>\n  <article>\n    <h3>Another Article Title</h3>\n    <p>More article content...</p>\n  </article>\n</div>`,
      cssCode: `.article-container {\n    @cssProperty : article / inline-size;\n    padding: 1rem;\n}\n\narticle {\n    background-color: #f5f5f5;\n    padding: 1rem\n    margin-bottom: 1rem;\n}\n\nh3 {\n    font-size: 1.5rem;\n    margin-bottom: 0.5rem;\n}\n\np {\n    line-height: 1.5\n}\n\n@container article (inline-size > 400px) {\n  article {\n    display: grid;\n    @cssProperty : 1fr 1fr;\n    gap: 2rem;\n    @cssProperty : 1.2rem;\n  }\n  h3 {\n    font-size: 2rem;\n  }\n}\n\n.resizable{\n    height: 30rem;\n    width: 570px;\n    padding: 5px;\n    min-width: 375px;\n    max-width: 43rem;\n    resize: horizontal;\n    overflow: auto;\n    border: 2px solid gray;\n    border-radius: 5px;\n}`
    },
  ];
}
module.exports = quiz_tasks;