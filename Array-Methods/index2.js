

const people = [
  {name:'chay',year:2005},
  {name:'rakesh',year:2004},
  {name:'vinay',year:2004},
  {name:'manoj',year:2014},
];

const comments=[
    {text:'love this!',id:523423},
    {text:'super good!',id:823423},
    {text:'you are the best!',id:2039842},
    {text:'ramen is my fav food!',id:123523},
    {text:'nice nice!',id:542328},
]

// some
const isAdultPresent=people.some(function(person){
   const currDate=new Date().getFullYear();
    if(currDate-person.year>=19){
        return true;
    }
});
// some short hand
const isAdult=people.some(person=>((new Date()).getFullYear())-person.year>=19);

console.log(isAdult);
console.log(isAdultPresent);

// every 
const areAllAdults=people.every(function(person){
    const currDate=new Date().getFullYear();
    if(currDate-person.year>=19){
        return true;
    }
});
console.log(areAllAdults);
const areAllAdultsSh=people.every(person=>((new Date()).getFullYear())-person.year>=19);
console.log(areAllAdultsSh);


// find
const comment=comments.find(function(comment){
    if(comment.id===523423){
        return true;
    }
});
console.log(comment);

const commentSh=comments.find(comment=>comment.id===523423);
console.log(commentSh);

// find index
const index=comments.findIndex(function(cmt){
    if(cmt.id===823423){
        return true;
    }
});
const indexSh=comments.findIndex(cmt=>cmt.id===823423);

console.log(index);
console.log(indexSh);

// deleting org arr
comments.splice(index,1);
console.log(comments);

//building copty of array deleting the given element
const newComments=[
    ...comments.slice(0,index),
    ...comments.slice(index+1)
];
console.log(newComments);



