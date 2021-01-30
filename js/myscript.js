var app = new Vue({
  el: '#app',
  data: {
    title: "Hello  World",
    subtitle: "my name is,",
    myName: "  Emilio  ",
    tagOpen: "<h1>",
    tagClosed: "</h1>",
    qualification: "Junior Full Stack Developer",
    flipCardContent:[
      {
        title:"Who am I ?",
        paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        animation: "flip_card"
      },
      {
        title:"Curriculum",
        paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        animation: "flip_card"
      },
    ],
    contacts: [
      {
        Link: "https://github.com/Basiglio",
        Logo: "fab fa-github-alt",
      },
      {
        Link: "https://github.com/Basiglio",
        Logo: "fab fa-linkedin-in",
      },
      {
        Link: "https://github.com/Basiglio",
        Logo: "fab fa-github-alt",
      },
    ],
    address: "Via Ranzi, 192",
    telephone: "3497951025",
    mail: "emilio.furnari87@gmail.com",
    foto: "img/foto.jpeg",
  }
})
