function string(n){
    if (n>0)
        return 'positive';
    if(n<0)
        return 'negative';
    if(n==0)
        return 'zero';
}
console.log(string(-7));