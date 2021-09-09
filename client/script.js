//const { response } = require("../server/server");

const randomResultUrl = 'http://localhost:3000/lucky';

const searchResults = [
  {id:1, url:'https://getfutureproof.co.uk/', title:'futureproof', description:'futureproof is a technology training company, launching and developing diverse, high-quality junior talent into your tech teams.'},
  {id:2, url:'https://developer.mozilla.org/en-US/docs/Learn', title:'Learn web development | MDN', description:'20 Aug 2021 — Mozilla developer newsletter: Our newsletter for web developers, which is an excellent resource for all levels of experience. · Learn JavaScript ...'},
  {id:3, url:'https://www.codecademy.com/learn/paths/web-development', title:'Web Development | Codecademy', description:'career PathWeb Development ... Go from no-code to an in-demand junior web developer, at a fraction of the cost of a bootcamp. Start with the front-end by learning ...'},
  {id:4, url:'https://www.w3schools.com/whatis/', title:'Web Development Roadmaps - W3Schools', description:'.STEP 1. Learn the Basics ... Every Web Developer must have a basic understanding of HTML, CSS, and JavaScript. Responsive Web Design is used in all types of ..'
  },
  {id:5, url:'https://www.udemy.com/topic/web-development/', title:'Top Web Development Courses Online - Updated - Udemy', description:'Learn web development from top-rated instructors. Find the best coding and programming courses for your level and needs and take your first steps in ...'},
  {id:6, url:'https://www.coursera.org/learn/web-development', title:'Introduction to Web Development | Coursera', description:'This course is designed to start you on a path toward future studies in web development and . ... Start instantly and learn at your own schedule.'},
  {id:7, url:'https://learntocodewith.me/reviews/best-web-development-courses/', title:'43 Best Web Development Courses Online in 2021 - Learn to ...', description:'9 Jan 2021 — Coursera is an online platform that hosts courses from top universities around the world. They offer individual web development courses as well ...'},
  {id:8, url:'https://www.elegantthemes.com/blog/tips-tricks/learn-web-development-online', title:'10 Great Websites To Help You Learn Web Development Online', description:'1. Team Treehouse · 2. Lynda.com + LinkedIn Learning · 3. Udemy · 4. Codeacademy · 5. MDN Web Docs (free) · 6. The Odin Project (Free) · 7. Coursera · 8. Codewars.'},
  {id:9, url:'https://developers.google.com/web', title:'Web | Google Developers', description:'Tools. Chrome DevTools, Lighthouse, Workbox, and more tools to make your life easier and improve your development artistry. Learn more ...'},
  {id:10, url:'https://en.wikipedia.org/wiki/Web_development', title:'Web development - Wikipedia', description:'Web development is the work involved in developing a Web site for the Internet (World Wide Web) or an intranet (a private network). Web development can ...'}
  ]


const randomResult = {
  id:1,
   url:'https://getfutureproof.co.uk/', 
   title:'futureproof', 
   description:'futureproof is a technology training company, launching and developing diverse, high-quality junior talent into your tech teams.'}



const searchBtn = document.querySelector('#searchBtn')
const feelLuckyBtn = document.querySelector('#feelLuckyBtn')
const mainPage = document.querySelector('#mainPage')
const searchResultPage = document.querySelector('#searchResultPage')



searchBtn.addEventListener('click', e => {
  e.preventDefault()
 //to do:  hide main page
 mainPage.style.display = 'none';
 searchResultPage.style.display = 'block';

  
  // to do : fetch all links
  console.log(searchResults)

  // to do: render search results page



})


//    I'm feeling lucky

feelLuckyBtn.addEventListener('click', e => {
  e.preventDefault()
  fetch(randomResultUrl)
   .then(response => response.json())
   .then(data => window.open(data.url, "_blank"))
  // .then(window.open(response.url, "_blank"))

})


