const QUESTIONS = [
  // HTML
  {
    id: 1, topic: "HTML", question: "What does HTML stand for?", options: [
      "Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinking Text Mark Language"
    ], correctAnswer: 0
  },
  {
    id: 2, topic: "HTML", question: "Which tag is used to create a hyperlink in HTML?", options: [
      "a", "link", "href", "hyper"
    ], correctAnswer: 0
  },
  {
    id: 3, topic: "HTML", question: "Which attribute is used to provide an alternate text for an image?", options: [
      "alt", "src", "title", "href"
    ], correctAnswer: 0
  },
  {
    id: 4, topic: "HTML", question: "What is the correct HTML element for inserting a line break?", options: [
      "break", "br", "lb", "line"
    ], correctAnswer: 1
  },
  {
    id: 5, topic: "HTML", question: "Which tag is used to define the largest heading?", options: [
      "heading", "h6", "h1", "head"
    ], correctAnswer: 2
  },
  {
    id: 6, topic: "HTML", question: "Which tag is used to define an HTML document's metadata?", options: [
      "head", "meta", "footer", "header"
    ], correctAnswer: 1
  },
  {
    id: 7, topic: "HTML", question: "Which tag is used to display an unordered list?", options: [
      "ul", "ol", "list", "ulist"
    ], correctAnswer: 0
  },
  {
    id: 8, topic: "HTML", question: "Which tag is used to insert an image in HTML?", options: [
      "image", "img", "src", "photo"
    ], correctAnswer: 1
  },
  {
    id: 9, topic: "HTML", question: "Which attribute specifies the URL of the page the link goes to?", options: [
      "href", "src", "url", "path"
    ], correctAnswer: 0
  },

  // CSS
  {
    id: 10, topic: "CSS", question: "Which property is used to change the background color?", options: [
      "color", "background-color", "bgcolor", "background"
    ], correctAnswer: 1
  },
  {
    id: 11, topic: "CSS", question: "How do you select an element with id 'demo'?", options: [
      ".demo", "#demo", "demo", "*demo"
    ], correctAnswer: 1
  },
  {
    id: 12, topic: "CSS", question: "Which CSS property controls the text size?", options: [
      "font-style", "text-size", "font-size", "text-style"
    ], correctAnswer: 2
  },
  {
    id: 13, topic: "CSS", question: "How do you make each word in a text start with a capital letter?", options: [
      "text-transform: capitalize;", "text-style: capitalize;", "transform: capitalize;", "font-transform: capitalize;"
    ], correctAnswer: 0
  },
  {
    id: 14, topic: "CSS", question: "Which property is used to change the left margin of an element?", options: [
      "padding-left", "margin-left", "indent", "margin"
    ], correctAnswer: 1
  },
  {
    id: 15, topic: "CSS", question: "Which property is used to change the font color?", options: [
      "font-color", "color", "text-color", "background-color"
    ], correctAnswer: 1
  },
  {
    id: 16, topic: "CSS", question: "How do you select all p elements in CSS?", options: [
      "#p", ".p", "p", "all p"
    ], correctAnswer: 2
  },
  {
    id: 17, topic: "CSS", question: "Which property is used to add space inside an element?", options: [
      "margin", "border", "padding", "spacing"
    ], correctAnswer: 2
  },
  {
    id: 18, topic: "CSS", question: "How do you make text bold in CSS?", options: [
      "font-weight: bold;", "font-style: bold;", "font: bold;", "text-style: bold;"
    ], correctAnswer: 0
  },

  // JavaScript
  {
    id: 19, topic: "JavaScript", question: "Which symbol is used for single-line comments in JavaScript?", options: [
      "//", "!--", "#", "/* */"
    ], correctAnswer: 0
  },
  {
    id: 20, topic: "JavaScript", question: "How do you declare a variable in JavaScript?", options: [
      "var myVar;", "variable myVar;", "v myVar;", "myVar = var;"
    ], correctAnswer: 0
  },
  {
    id: 21, topic: "JavaScript", question: "Which method is used to write something in the browser's console?", options: [
      "console.log()", "log.console()", "print()", "console.write()"
    ], correctAnswer: 0
  },
  {
    id: 22, topic: "JavaScript", question: "Which operator is used to assign a value to a variable?", options: [
      "-", "*", "=", "+"
    ], correctAnswer: 2
  },
  {
    id: 23, topic: "JavaScript", question: "How do you call a function named 'myFunction'?", options: [
      "call myFunction()", "myFunction()", "call function myFunction()", "Call.myFunction()"
    ], correctAnswer: 1
  },
  {
    id: 24, topic: "JavaScript", question: "Which method is used to remove the last element of an array?", options: [
      "pop()", "push()", "shift()", "unshift()"
    ], correctAnswer: 0
  },
  {
    id: 25, topic: "JavaScript", question: "What does the '===' operator check for?", options: [
      "Equality with type coercion", "Strict equality", "Type only", "Object comparison"
    ], correctAnswer: 1
  },
  {
    id: 26, topic: "JavaScript", question: "How do you write an array in JavaScript?", options: [
      "[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "array(1, 2, 3)"
    ], correctAnswer: 0
  },
  {
    id: 27, topic: "JavaScript", question: "Which method is used to add a new element to the end of an array?", options: [
      "push()", "add()", "insert()", "append()"
    ], correctAnswer: 0
  }
];

const TOPICS = ["HTML", "CSS", "JavaScript"];
