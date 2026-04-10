function array(arr){
    return arr.filter(num=>num>50).map(num=>num*2);
}
console.log(array([34,45,56,67,24]));