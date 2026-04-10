function stringmethod(str){
  let cleaned=str.trim();
  let upper=cleaned.toUpperCase();
  let has=upper.includes("JS");
  return{upper,has};
}
console.log(stringmethod("  js is simple"));