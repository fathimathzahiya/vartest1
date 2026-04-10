function studentdetails(student){
    return student.filter(s=>s.marks>60).map(s=>s.name.toUpperCase());
}
let student=[
    {name:"zahiya",marks:100},
    {name:"diya",marks:90},
    {name:"athila",marks:45}
]
console.log(studentdetails(student));