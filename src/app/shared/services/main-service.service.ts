import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class MainServiceService {
  projectsObject = [
    {
      id: 1,
      name: 'Potfolio',
      description: 'The project, and at the same time my portfolio page. Created the longest and most often improved.',
      technologiesUsed: ['HTML5', 'CSS3', 'JavaScript', 'JQuery', 'Node.js + npm', 'Gulp', 'Photoshop', 'RWD', 'Flex', 'BEM'],
      linkToGitCodeProject: 'https://github.com/gitprzemek/portfolio',
      linkToGitDemo: 'https://gitprzemek.github.io/portfolio/',
      image: '../../assets/images/projectsImages/mockup.png'
    },
    {
      id: 2,
      name: 'U duzego kowboja',
      description: 'Commercial project commissioned by a local restaurant.',
      technologiesUsed: ['HTML5', 'CSS3', 'JavaScript', 'JQuery', 'Photoshop', 'RWD', 'Flex', 'BEM'],
      linkToGitCodeProject: 'https://github.com/gitprzemek/u_duzego_kowboja',
      linkToGitDemo: 'http://uduzegokowboja.pl/',
      image: '../../assets/images/projectsImages/cowboy_logo.png'
    },
    {
      id: 3,
      name: 'Potfolio3',
      description: 'The project, and at the same time my portfolio page. Created the longest and most often improved.',
      technologiesUsed: ['HTML5', 'CSS3', 'JavaScript', 'JQuery', 'Node.js + npm', 'Gulp', 'Photoshop', 'RWD', 'Flex', 'BEM',
        'plugin animate.css', 'plugin waypoint.js', 'plugin vticker.js'],
      linkToGitCodeProject: 'https://github.com/gitprzemek/portfolio',
      linkToGitDemo: 'https://gitprzemek.github.io/portfolio/',
      image: '../../assets/images/projectsImages/mockup.png'
    },
    {
      id: 4,
      name: 'My movie library',
      description: 'An application containing movie lists based on the TMDB API, and on my own project made in Adobe XD.',
      technologiesUsed: ['HTML5', 'CSS3', 'JavaScript', 'JQuery', 'Node.js + npm', 'Gulp',
        'Photoshop | Adobe XD', 'RWD', 'SVG', 'Flex', 'BEM', 'Gulp | Babel'],
      linkToGitCodeProject: 'https://github.com/gitprzemek/movie-library',
      linkToGitDemo: 'https://gitprzemek.github.io/movie-library/index.html',
      image: '../../assets/images/projectsImages/mockup-movie-library.png'
    },
    {
      id: 5,
      name: 'Avengers vs Thanos',
      description: 'Memory card game, inspired by the theme of the movie Avengers: Infinity War.',
      technologiesUsed: ['HTML5', 'CSS3', 'JavaScript', 'JQuery', 'Photoshop', 'RWD', 'Flex'],
      linkToGitCodeProject: 'https://github.com/gitprzemek/avengers-memory-card',
      linkToGitDemo: 'https://gitprzemek.github.io/avengers-memory-card/',
      image: '../../assets/images/projectsImages/thanos111.png'
    },
    {
      id: 6,
      name: 'Warcraft clock',
      description: 'Disc clock in the style of World of Warcraft game.',
      technologiesUsed: ['HTML5', 'CSS3', 'JavaScript', 'JQuery', 'Photoshop', 'RWD', 'Flex'],
      linkToGitCodeProject: 'https://github.com/gitprzemek/wow-horde-clock',
      linkToGitDemo: 'https://gitprzemek.github.io/wow-horde-clock/',
      image: '../../assets/images/projectsImages/warcraftClock2.jpg'
    },
  ];

  constructor() { }
}
