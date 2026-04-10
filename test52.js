function sum(a){
    return a.reduce((acc,curr)=>acc+curr,0);
}
console.log(sum([20,30,10,30,20])>100?"high":"low");
