/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

// test mainPage elements exist

 test('navbar exists', ()=>{
     let navigation = document.querySelector('.navbar')
    expect(navigation).toBeTruthy();
})    
  test('Google logo exists', ()=>{
    let googleLogo = document.querySelector('#googleLogo');
    expect(googleLogo).toBeTruthy()
  })
  test('search input field  exists and has a placeholder', ()=>{
      let searchInput = document.querySelector('#searchInput')
   expect(searchInput).toBeTruthy();
   expect(searchInput.getAttribute('placeholder')).toContain('Search')
 })


 test('search button exists', ()=>{
    let searchBtn = document.querySelector('#searchBtn')
   expect(searchBtn).toBeTruthy();
   expect(searchBtn.textContent).toContain('Search')

 })

 test(' Feel Lucky button exists', ()=>{
    let feelLuckyBtn = document.querySelector('#feelLuckyBtn')
   expect(feelLuckyBtn).toBeTruthy();
   expect(feelLuckyBtn.textContent).toContain('I feel lucky!')
 })

})
