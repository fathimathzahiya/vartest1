function Number(arr){
    let e= arr.filter(num=>num%2===0) ;
    let m=Math.max(...e);
    return{e,m};
}
console.log(Number([23,34,45,56,67]));