/* eslint-disable no-case-declarations */
/* eslint-disable indent */
class cityWeather{
    constructor(city,state, country, tempF,tempC,condition, windMPH,windKPH){
        this.city = city;
        this.state = state;
        this.country = country;
        this.tempF = tempF;
        this.tempC = tempC;
        this.condition =condition;
        this.windMPH = windMPH;
        this.windKPH = windKPH;
    }
}
export async function getWeather(city){     
    try{
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=298bf6c3b43b4a55875191548230211&q=${city}`,{mode:'cors'});
    const data = await response.json();
    console.log(data)
    const object = new cityWeather(data.location.name,data.location.region,data.location.country,data.current.temp_f,data.current.temp_c,data.current.condition.text,data.current.wind_mph,data.current.wind_kph);
    console.log(object);
    buildWeather(object);
    }catch(err){
        alert('Not a real city');
        
    }
     
  
}
export function buildWeather(object){
   
     const content = document.getElementById('content');
    const wrapper = document.getElementById('divWrap')
    const div = document.createElement('div');
    div.setAttribute('id','card');
   
    for(let i = 0;i<8;i++){
        const container = document.createElement('div');
        const btn = document.createElement('button')
                btn.innerHTML = '<svg id="cardbtn" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="15" cy="15" r="15" fill="#326BFF"/></svg>'
                const butn = document.createElement('button')
                butn.innerHTML = '<svg id="cardbtn2" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="15" cy="15" r="15" fill="#326BFF"/></svg>'
        container.classList.add('label');
        const label = document.createElement('label');
        const p = document.createElement('p');
       
         
        
        
        switch(i){
            case 0:
                const h2 = document.createElement('h2');   
                h2.setAttribute('name','city');
                label.setAttribute('for','city');
                label.innerHTML = 'City: ';
                h2.innerHTML = object.city;
                container.appendChild(label);
                container.appendChild(h2);
               div.appendChild(container);
                break;
            case 1:
                if(object.country == 'United States of America'){
                    const h3 = document.createElement('h3');
                    label.setAttribute('for','state');
                    h3.setAttribute('name','state');
                    label.setAttribute('class','state')
                    h3.innerHTML = object.state;
                    label.innerHTML = 'State:';
                    container.appendChild(label);
                    container.appendChild(h3);
                    div.appendChild(container);
                    break;
                }else break;
            case 2:
                const h4 = document.createElement('h3');
                label.setAttribute('for','country');
                label.setAttribute('class','country')
                h4.setAttribute('name','country');
                h4.innerHTML = object.country;
                label.innerHTML = 'Country:';
                container.appendChild(label);
                container.appendChild(h4);
                div.appendChild(container);
                break;
            case 3:
              
                p.setAttribute('name','F');
                label.setAttribute('for','F');
                label.setAttribute('class','temp')
                btn.setAttribute('id','tempBtn')
                btn.addEventListener('click',()=>{
                    const svg = document.getElementById('cardbtn')
                    if(svg.hasAttribute('class','active')){
                        svg.setAttribute('style','transform:translateX(0vw);')
                        svg.removeAttribute('class','active')
                        p.innerHTML = object.tempF;
                        label.innerHTML = 'F<sup>o</sup>'
                    }else{
                        svg.setAttribute('class','active')
                       svg.setAttribute('style','transform:translateX(2vw);')
                       p.innerHTML = object.tempC;
                       label.innerHTML = 'C<sup>o</sup>'
                    }
                  })
       
                p.innerHTML = object.tempF;
                label.innerHTML = 'F<sup>o</sup>'
                container.appendChild(label);
                container.appendChild(p);
                if(wrapper.childElementCount==0){
                container.appendChild(btn)}
                div.appendChild(container);
                break;
            case 4:
                
                break;
                 
            case 5:
                p.setAttribute('name','condition');
                label.setAttribute('for','condition');
                p.innerHTML = object.condition;
                label.innerHTML = 'Condition:';
                container.appendChild(label);
                container.appendChild(p);
                div.appendChild(container);
                break;
            case 6:
                
                break;
            case 7:
                p.setAttribute('name','mph');
                label.setAttribute('for','mph');
                p.innerHTML = object.windMPH;
                butn.setAttribute('id','windBtn')
              
               butn.addEventListener('click',()=>{
                    const svg2 = document.getElementById('cardbtn2')
                    if(svg2.hasAttribute('class','active')){
                        svg2.setAttribute('style','transform:translateX(0vw);')
                        svg2.removeAttribute('class','active')
                        label.innerHTML = 'Wind MPH'
                        p.innerHTML = object.windMPH
                        
                    }else{
                        svg2.setAttribute('class','active')
                       svg2.setAttribute('style','transform:translateX(2vw);')
                       label.innerHTML = "Wind KPH"
                        p.innerHTML = object.windKPH
                    }
                  })
                  
                label.innerHTML = 'Wind MPH:';
                container.appendChild(label);
                container.appendChild(p);
                if(wrapper.childElementCount==0){
                container.appendChild(butn)}
                div.appendChild(container);
                break;
        }
    }

    wrapper.appendChild(div);
    content.appendChild(wrapper);
}