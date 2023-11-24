import './style.scss';
import RandomCity from './random';
import { getWeather } from './retrieve';
let count = 0
let vw =32
const title = document.getElementById('title')
const cardBtns = document.getElementById('cardButtons')
const leftArrow = document.getElementById('leftArrow')
const rightArrow = document.getElementById('rightArrow')
const content = document.getElementById('content');   
const enter = document.getElementById('enter');
const search = document.getElementById('search');
const randomBtn = document.getElementById('random')
randomBtn.addEventListener('click',()=>{
  const divWrap = document.getElementById('divWrap')
  clearInterval(interval)
  let count = divWrap.childElementCount
  console.log(count)
  if(divWrap.childElementCount >=1){
    divWrap.remove()
    const div = document.createElement('div')
    div.setAttribute('id', 'divWrap')
    content.appendChild(div)
    leftArrow.style.visibility = 'hidden'
    rightArrow.style.visibility = 'hidden'
    cardBtns.style.visibility = 'hidden'
  }  
   getWeather(RandomCity());
})
getWeather(RandomCity())
getWeather(RandomCity())
getWeather(RandomCity())
getWeather(RandomCity())
getWeather(RandomCity())
search.addEventListener('keypress',(e)=>{
  if(e.key === 'Enter'){
    e.preventDefault()
    enter.click()
  }
})

 enter.addEventListener('click',(e)=>{
  
  const divWrap = document.getElementById('divWrap')
  clearInterval(interval)
  let count = divWrap.childElementCount
  console.log(count)
  if(divWrap.childElementCount >=1){
    divWrap.remove()
    const div = document.createElement('div')
    div.setAttribute('id', 'divWrap')
    content.appendChild(div)
    leftArrow.style.visibility = 'hidden'
    rightArrow.style.visibility = 'hidden'
    cardBtns.style.visibility = 'hidden'
  }  
   getWeather(search.value);
    search.value = ''

 });
 
 leftArrow.addEventListener('click', ()=>{
  vw = 31
  const divWrap = document.getElementById('divWrap')
   if(count == 0){
    vw = vw*count
    divWrap.style.transform = `translateX(${vw}vw)` 
   }else{
    count++
    vw = count*vw
    console.log(vw)
    divWrap.style.transform = `translateX(${vw}vw)` 
   }
   clearInterval(interval)
  interval = setInterval(()=>{
    const divWrap = document.getElementById('divWrap')
      let vw = 31
      if(count == -4){ count = 0
        vw = vw*count
        divWrap.style.transform = `translateX(${vw}vw)` 
      }
      else {count--
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` }
      const enter = document.getElementById('enter');
       
   },5000)
 })
 rightArrow.addEventListener('click',()=>{
  vw = 31
  const divWrap = document.getElementById('divWrap')
  if(count == -4){
    count = 0
    vw = vw * count
    divWrap.style.transform = `translateX(${vw}vw)` 
  }else{
    count--
  vw = vw * count
  console.log(vw)
  divWrap.style.transform = `translateX(${vw}vw)` 
  }
  clearInterval(interval)
  interval = setInterval(()=>{
    const divWrap = document.getElementById('divWrap')
      let vw = 31
      if(count == -4){ count = 0
        vw = vw*count
        divWrap.style.transform = `translateX(${vw}vw)` 
      }
      else {count--
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` }
      const enter = document.getElementById('enter');
       
   },5000)
 })
 const card1 = document.querySelector('.card1')
 const card2 = document.querySelector('.card2')
 const card3 = document.querySelector('.card3')
 const card4 = document.querySelector('.card4')
 const card5 = document.querySelector('.card5')
 card1.addEventListener('click', ()=>{
  const divWrap = document.getElementById('divWrap')
  divWrap.style.transform = 'translateX(0vw)'
  clearInterval(interval)
  interval = setInterval(()=>{
    const divWrap = document.getElementById('divWrap')
      let vw = 31
      if(count == -4){ count = 0
        vw = vw*count
        divWrap.style.transform = `translateX(${vw}vw)` 
      }
      else {count--
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` }
      const enter = document.getElementById('enter');
       
   },5000)
   count = 0
 })
 card2.addEventListener('click', ()=>{
  const divWrap = document.getElementById('divWrap')
  divWrap.style.transform = 'translateX(-31vw)'
  clearInterval(interval)
  interval = setInterval(()=>{
    const divWrap = document.getElementById('divWrap')
      let vw = 31
      if(count == -4){ count = 0
        vw = vw*count
        divWrap.style.transform = `translateX(${vw}vw)` 
      }
      else {count--
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` }
      const enter = document.getElementById('enter');
       
   },5000)
   count = -1
 })
 card3.addEventListener('click', ()=>{
  const divWrap = document.getElementById('divWrap')
  divWrap.style.transform = 'translateX(-62vw)'
  clearInterval(interval)
  interval = setInterval(()=>{
    const divWrap = document.getElementById('divWrap')
      let vw = 31
      if(count == -4){ count = 0
        vw = vw*count
        divWrap.style.transform = `translateX(${vw}vw)` 
      }
      else {count--
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` }
      const enter = document.getElementById('enter');
       
   },5000)
   count = -2
 })
 card4.addEventListener('click', ()=>{
  const divWrap = document.getElementById('divWrap')
  divWrap.style.transform = 'translateX(-92vw)'
  clearInterval(interval)
  interval = setInterval(()=>{
    const divWrap = document.getElementById('divWrap')
      let vw = 31
      if(count == -4){ count = 0
        vw = vw*count
        divWrap.style.transform = `translateX(${vw}vw)` 
      }
      else {count--
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` }
      const enter = document.getElementById('enter');
       
   },5000)
   count = -3
 })
 card5.addEventListener('click', ()=>{
  const divWrap = document.getElementById('divWrap')
  divWrap.style.transform = 'translateX(-123vw)'
  clearInterval(interval)
  interval = setInterval(()=>{
    const divWrap = document.getElementById('divWrap')
      let vw = 31
      if(count == -4){ count = 0
        vw = vw*count
        divWrap.style.transform = `translateX(${vw}vw)` 
      }
      else {count--
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` }
      const enter = document.getElementById('enter');
       
   },5000)
   count = -4
 })
 var interval = setInterval(()=>{
  const divWrap = document.getElementById('divWrap')
    let vw = 31
    if(count == -4){ count = 0
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` 
    }
    else {count--
    vw = vw*count
    divWrap.style.transform = `translateX(${vw}vw)` }
    const enter = document.getElementById('enter');
     
 },5000)
 
 title.addEventListener('click',()=>{
   clearInterval(interval)
    divWrap.remove()
    const div = document.createElement('div')
    div.setAttribute('id', 'divWrap')
    content.appendChild(div)
  leftArrow.style.visibility = 'visible'
  rightArrow.style.visibility = 'visible'
  cardBtns.style.visibility = 'visible'
  getWeather(RandomCity())
getWeather(RandomCity())
getWeather(RandomCity())
getWeather(RandomCity())
getWeather(RandomCity())
interval = setInterval(()=>{
  const divWrap = document.getElementById('divWrap')
    let vw = 31
    if(count == -4){ count = 0
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` 
    }
    else {count--
    vw = vw*count
    divWrap.style.transform = `translateX(${vw}vw)` }
    const enter = document.getElementById('enter');
     
 },5000)
 }
)
 
 
