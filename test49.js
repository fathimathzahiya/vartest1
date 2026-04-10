function str(a){
    return a.toLowerCase().split(" ").filter(word=>word.length>4);
}
console.log(str("Javascript Is A powerful Language"));