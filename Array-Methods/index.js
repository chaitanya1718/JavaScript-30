const inventors = [
  { name: "albert", last: "einstein", year: "1517",passed:"1600" },
  { name: "thomas", last: "eedisonn", year: "1517",passed:"1600" },
  { name: "newton", last: "isaac", year: "1800",passed:"1900" },
  { name: "arya", last: "bhatta", year: "1200",passed:"1280" },
  { name: "henry", last: "horrid", year: "1117",passed:"1200" },
  { name: "guns", last: "gum", year: "1712",passed:"1800" },
  { name: "albert", last: "einstein", year: "1800",passed:"1874" },
  { name: "rogers", last: "beige", year: "1900" ,passed:"1980"},
];

const people = [
  "chay, g",
  "chandu, s",
  "deepak, u",
  "vinay, b",
  "sumanth, k",
  "ankan, g",
  "rudra, m",
  "rahul, kl",
  "virat, k",
];

// ⚠️filter
// filter users with age in 1500
const filtered1500 = inventors.filter(function (inventor) {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true;
  }
});

// shorthand
const filtered = inventors.filter((inv) => inv.year >= 1500 && inv.year < 1600);

console.log(filtered);


// ⚠️ map
// return array with first and last name of users
const names = inventors.map(function (inv) {
  return inv.name + " " + inv.last;
});
//shorthand
const namesShortHand = inventors.map((inv) => `${inv.name} ${inv.last}`);

console.log(names);
console.log(namesShortHand);

// ⚠️ sort
// sort based on birth year
const ordered = inventors.sort(function (curr, nxt) {
  if (curr.year > nxt.year) return 1;
  else return -1;
});

//shorthand
const orderedShorthand = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.log(orderedShorthand);

console.log(ordered);


// ⚠️reduce
// return no of years all inventors lived
// default
var totalYears=0;
for(let i=0;i<inventors.length;i++){
    let diff=inventors[i].passed-inventors[i].year;
    totalYears+=diff;
}
console.log(totalYears);

// using reduce
const totalYearslived=inventors.reduce((total,inventor)=>{
    return total+(inventor.passed-inventor.year);
},0);

console.log(totalYearslived);


// ⚠️sort by no of years lived
// sort inventors by no of years lived

const oldestAsc=inventors.sort(function(a,b){
    let curr=a.passed-a.year;
    let nxt=b.passed-b.year;
    if(curr>nxt) return 1;
    else return -1;
})

console.log(oldestAsc);

console.log(oldestAsc);
console.log(links);
// ⚠️search and filter based on 'de'

const category=document.querySelector('.mw-category');
const links=Array.from(category.querySelectorAll('a'));

const searchResults=links
                    .map((link)=>(link.textContent))
                    .filter((street)=>(
                        street.includes('de')
                    ));


console.log(searchResults);


