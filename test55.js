function uj(n){
    return n.map(name=>name.toUpperCase()).join(",");
}
console.log(uj(["apple", "banana", "mango"]));