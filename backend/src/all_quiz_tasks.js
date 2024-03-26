
//answer_options: {a: "", b: "", c: "", d: ""},
function all_quiz_tasks() {
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
      right_answer: ['column', 'space-around'],
      htmlCode: `<div class="flexbox-panel">\n  <div class="flexbox-item">1</div>\n  <div class="flexbox-item">2</div>\n  <div class="flexbox-item">3</div>\n</div>`,
      cssCode: `.flexbox-panel {\n  display: flex;\n  flex-direction:  \n  flex-wrap: nowrap;\n  justify-content:  \n  align-items: center;\n}.flexbox-item {\n  flex: 0 0 auto;\n}`,
    },
    {
      task_id: 7280105,
      quiz_theme: "Flexbox",
      task_type: "enterValue",
      question: "Add properties to the gaps to arrange the elements as shown in the picture.",
      right_answer: ['flex-end', 'gap', 'flex-grow', 'flex-grow', 'flex-grow'],
      htmlCode:
        `<form>
  <label class="name" for="name-field">Name:<input id="name-field" /></label>
  <label class="email" for="email-field">Email:<input id="email-field" type="email" /></label>
  <button>Submit</button>
</form>
`,
      cssCode:
        `form {
  display: flex;
  align-items:  
  flex-wrap: wrap;
  gap:  
}
.name {
        : 1;
  flex-basis: 120px;
}
.email {
        : 2;
  flex-basis: 170px;
}
button {
        : 3;
  flex-basis: 70px;
}`,
    },
    {
      task_id: 390027701,
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
      task_id: 390027702,
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
      task_id: 390027703,
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
      task_id: 390026904,
      quiz_theme: "Grid",
      task_type: "enterValue",
      question: "Add properties to the gaps to arrange the elements as shown in the picture.",
      answer_options: undefined,
      right_answer: { 1: '1fr 3fr 1fr', 2: 'header', 3: 'sidebar', 4: 'main-content', 5: 'footer' },
      htmlCode:
        `<div class="container">
  <header class="header">Header</header>
  <nav class="sidebar">Sidebar</nav>
  <main class="main-content">
    <section class="content">Content</section>
    <aside class="aside">Aside</aside>
  </main>
  <footer class="footer">Footer</footer>
</div>
`,
      cssCode:
        `form {
  display: flex;
  align-items:  
  flex-wrap: wrap;
  gap: 8px;
}
.name {
        : 1;
  flex-basis: 120px;
}
.email {
        : 2;
  flex-basis: 170px;
}
button {
        : 3;
  flex-basis: 70px;
}`,
    },
    {
      task_id: 7,
      quiz_theme: "subgrid",
      task_type: "enterValue",
      question: "Add properties to the gaps to arrange the elements as shown in the picture.",
      answer_options: undefined,
      right_answer: { 1: 'flex-end', 2: 'gap', 3: 'flex-grow', 4: 'flex-grow', 5: 'flex-grow' },
    },
  ];
}
module.exports = all_quiz_tasks;