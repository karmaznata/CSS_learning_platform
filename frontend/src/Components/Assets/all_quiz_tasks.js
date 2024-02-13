
//answer_options: {a: "", b: "", c: "", d: ""},
const all_quiz_tasks = [
    {
      id: 1,
      quiz_theme: "flexbox",
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
      id: 2,
      quiz_theme: "flexbox",
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
      id: 3,
      quiz_theme: "flexbox",
      task_type: "multipleChoice",
      question: "Which property is used to change the alignment of a specific child along the cross axis in Flexbox?",
      answer_options: {
        "1": "justify-content", 
        "2": "align-items",
        "3": "align-self", 
        "4": "flex-grow"},
      right_answer: 3,
    },
    {
      id: 4,
      quiz_theme: "flexbox",
      task_type: "enterValue",
      question: "Add properties to the gaps to arrange the elements as shown in the picture.",
      answer_options: undefined,
      right_answer: ['column', 'space-around'],
      htmlCode: 
`<div class="flexbox-panel">
  <div class="flexbox-item">1</div>
  <div class="flexbox-item">2</div>
  <div class="flexbox-item">3</div>
</div>`,
      cssCode: 
`.flexbox-panel {
  display: flex;
  flex-direction:  
  flex-wrap: nowrap;
  justify-content:  
  align-items: center;
}
.flexbox-item {
  flex: 0 0 auto;
}`,
    },
    {
      id: 5,
      quiz_theme: "flexbox",
      task_type: "enterValue",
      question: "Add properties to the gaps to arrange the elements as shown in the picture.",
      answer_options: undefined,
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
      id: 6,
      quiz_theme: "grid",
      task_type: "enterValue",
      question: "Add properties to the gaps to arrange the elements as shown in the picture.",
      answer_options: undefined,
      right_answer: {1: 'flex-end', 2: 'gap', 3: 'flex-grow', 4: 'flex-grow', 5:'flex-grow'},
    },
    {
      id: 7,
      quiz_theme: "subgrid",
      task_type: "enterValue",
      question: "Add properties to the gaps to arrange the elements as shown in the picture.",
      answer_options: undefined,
      right_answer: {1: 'flex-end', 2: 'gap', 3: 'flex-grow', 4: 'flex-grow', 5:'flex-grow'},
    },
  ];
  
  export default all_quiz_tasks;
  