// export const quizQuestions = [
//     {
//       question: "Which programming language is used to style web pages?",
//       options: ["HTML", "CSS", "JavaScript", "Python"],
//       answer: "CSS",
//     },
//     {
//       question: "What does 'JSX' stand for in React?",
//       options: [
//         "Java Syntax Extension",
//         "JavaScript XML",
//         "JSON Syntax Extension",
//         "Java Source eXtension",
//       ],
//       answer: "JavaScript XML",
//     },
//     {
//       question: "Which data structure uses LIFO (Last In First Out)?",
//       options: ["Queue", "Stack", "Array", "Linked List"],
//       answer: "Stack",
//     },
//     {
//       question:
//         "Which function is used to parse a string to an integer in JavaScript?",
//       options: ["parseInt()", "parse()", "stringToInt()", "Number()"],
//       answer: "parseInt()",
//     },
//     {
//       question: "Which of the following is a Python framework?",
//       options: ["React", "Django", "Laravel", "Spring Boot"],
//       answer: "Django",
//     },
//   ];


export const quizQuestions = [
  {
    question: "Which programming language is used to style web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "CSS",
    type: "text",
    code: "", // no code for regular text questions
  },
  {
    question: "What does the following JavaScript function return?",
    options: ["2", "3", "5", "NaN"],
    answer: "5",
    type: "code",
    code: `function add(a, b) {
  return a + b;
}
add(2, 3);`,
  },
  {
    question: "What is the output of the following code?",
    options: ["1", "2", "3", "undefined"],
    answer: "3",
    type: "code",
    code: `let x = [1,2,3];
console.log(x.length);`,
  },
  {
    question: "Which of the following correctly declares a variable in JavaScript?",
    options: ["var myVar;", "let myVar;", "const myVar;", "All of the above"],
    answer: "All of the above",
    type: "text",
    code: "",
  },
  {
    question: "What is the output of this function?",
    options: ["true", "false", "0", "4"],
    answer: "true",
    type: "code",
    code: `function isEven(n) {
  return n % 2 === 0;
}
isEven(4);`,
  },
];
