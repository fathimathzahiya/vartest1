function arraymethod(arr){
    return arr.map(num=>num+10).filter(num=>num>30);
}
console.log(arraymethod([10,20,30,40,50,110]));