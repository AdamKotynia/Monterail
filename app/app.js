'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.questions',
  'myApp.view2',
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
      photo: "/Monterail/app/img/person1.png"
    },
    {
      //id: 2,
      name: 'Andrew',
      //questions: [],
      //comments: [],
      joined: '2015/05/06',
      photo: "/Monterail/app/img/person2.png"
    },
    {
      //id: 3,
      name: 'Joseph',
      //questions: [],
      //comments: [],
      joined: '2016/02/05',
      photo: "/Monterail/app/img/person3.png"
    }
  ];

  this.questions = [
    {
      author: this.users[0].name,
      photo: this.users[0].photo,
      title: 'Will insulin make my patients gain weight?',
      comments: [
        {
          author: this.users[1].name,
          photo: this.users[1].photo
        },
        {
          author: this.users[1].name,
          photo: this.users[1].photo
        },
        {
          author: this.users[1].name,
          photo: this.users[1].photo
        },
        {
          author: this.users[1].name,
          photo: this.users[1].photo
        }
      ]
    },
    {
      author: this.users[1].name,
      photo: this.users[1].photo,
      title: 'Vegan diet in diabetes?',
      comments: [
        {
          author: this.users[1].name,
          photo: this.users[1].photo
        },
        {
          author: this.users[1].name,
          photo: this.users[1].photo
        },
        {
          author: this.users[1].name,
          photo: this.users[1].photo
        },
        {
          author: this.users[1].name,
          photo: this.users[1].photo
        }
      ]
    },
    {
      author: this.users[2].name,
      photo: this.users[2].photo,
      title: 'Vegan diet to stop diabetes progress',
      comments: [
        {
          author: this.users[1].name,
          photo: this.users[1].photo
        },
        {
          author: this.users[1].name,
          photo: this.users[1].photo
        },
        {
          author: this.users[1].name,
          photo: this.users[1].photo
        },
        {
          author: this.users[1].name,
          photo: this.users[1].photo
        }
      ]
    }
  ];

});


