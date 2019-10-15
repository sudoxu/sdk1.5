
let friutes = ["orange","apple","bana"];
for(let f of friutes){
    console.log(f);
}
for(let [index,obj] of friutes){
    console.log(index);
    console.log(obj);
}

console.log(Array.from("lidepeng"));

function test(...test){
    console.log(Array.from(test))
}
test(1,2,3,4)

const invertory=[
    {name:"apple",quantity:2},
    {name:"bananas",quantity:3},
    {name:"cherries",quantity:4},
];

const apple = invertory.find(friute=>{
    if (friute.name=="apple"){
        return true;
    }
    return false;
})
console.log(apple);

const appleindex = invertory.findIndex(friute => friute.name === "cherries");
console.log(appleindex);

let some = invertory.some(ele=>{
    console.log(ele);
    if (ele.quantity>3){
        return true;
    }
    return false;
})
console.log(some);

let every = invertory.every(ele=>{
    console.log(ele);
    if (ele.quantity>3){
        return true;
    }
    return false;
})
console.log(every);


