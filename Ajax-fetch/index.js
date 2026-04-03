
const api="https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

console.log("");
const cities=[];

async function fetchCities(){
    await fetch(api).then(res=>res.json()).then(data=>{
        cities.push(...data);
        console.log(cities);
    
    });
}
console.log(cities);

const searchBox=document.querySelector(".search");
const suggestions=document.querySelector(".suggestions");

async function returnMatches(searchWord,cities){
   await fetchCities();
    const filtered= cities.filter(place=>{
        // console.log(place.city);
        const regex=new RegExp(searchWord,'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
    return filtered;

}

// async function main(){
//     const res = await returnMatches('new', cities);
//     console.log(res);
// }
// main();

async function displayResults(){
    this.value=this.value.trim();
    if(this.value==""){
        suggestions.innerHTML="";
        return;
    }
    const results=await returnMatches(this.value,cities);
    const html=results.map((place)=>{
        const hlRegex=new RegExp(this.value,'gi');
        const hlCity=place.city.replace(hlRegex,`<span class="highlight">${this.value}</span>`);
        const hlState=place.state.replace(hlRegex,`<span class="highlight">${this.value}</span>`);
        return `
        <li>
        <div class="place-details">
        <span class="">${hlCity}, ${hlState}</span>
        <span class="population">${place.population}</span>
        </div>
        </li>
        `;
    }).join('');
    suggestions.innerHTML=html;

}

searchBox.addEventListener('keyup',displayResults);

// focusing txt box
window.onload=function(){
    searchBox.focus();
}

