'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ngAnimate',
  'ui.bootstrap',
  'myApp.questions',
  'myApp.question',
  'myApp.version',
  'myApp.modal'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/questions');


}]).
service('userDataService', function() {

  this.users = [
    {
      //id: 0,
      name: 'Eva',
      //questions: [],
      //comments: [],
      joined: '2015/07/08',
      photo: "/img/person1.png"
    },
    {
      //id: 2,
      name: 'Andrew',
      //questions: [],
      //comments: [],
      joined: '2015/05/06',
      photo: "/img/person2.png"
    },
    {
      //id: 3,
      name: 'Joseph',
      //questions: [],
      //comments: [],
      joined: '2016/02/05',
      photo: "/img/person3.png"
    }
  ];

  this.questions = [
    {
      author: this.users[0],
      title: 'Will insulin make my patients gain weight?',
      votes: 19,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      comments: [
        {
          author: this.users[1],
          votes: 19,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dololit anim id est laborum."
        },
        {
          author: this.users[2],
          votes: 19,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dololit anim id est laborum."
        },
        {
          author: this.users[0],
          votes: 19,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dololit anim id est laborum."
        },
        {
          author: this.users[1],
          votes: 19,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dololit anim id est laborum."
        },
        {
          author: this.users[1],
          votes: 19,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dololit anim id est laborum."
        },
        {
          author: this.users[2],
          votes: 19,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dololit anim id est laborum."
        }
      ]
    },
    {
      author: this.users[1],
      title: 'Vegan diet in diabetes?',
      votes: 19,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dololit anim id est laborum.",
      comments: [
        {
          author: this.users[1],
          votes: 19,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dololit anim id est laborum."
        },
        {
          author: this.users[1],
          votes: 19,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dololit anim id est laborum."
        },
        {
          author: this.users[1],
          votes: 19,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dololit anim id est laborum."
        },
        {
          author: this.users[1],
          votes: 19,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dololit anim id est laborum."
        }
      ]
    },
    {
      author: this.users[2],
      title: 'Vegan diet to stop diabetes progress',
      votes: 19,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloa aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commoequat. Du dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      comments: [
        {
          author: this.users[1],
          votes: 19,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dololit anim id est laborum."
        },
        {
          author: this.users[1],
          votes: 19,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dololit anim id est laborum."
        },
        {
          author: this.users[1],
          votes: 19,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dololit anim id est laborum."
        },
        {
          author: this.users[1],
          votes: 19,
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dololit anim id est laborum."
        }
      ]
    }
  ];

});


