let student_details={"name":"surendar",
    "age":22,
    "college":"srm",
    "skills":["html","css","js"],
    "address":{"city":"chennai","state":"tamilnadu"}};
console.log(student_details);
console.log(student_details["name"]); //it will through error if key is not available or match stop execution
console.log(student_details.name); //it wont through error instead it will display null not stop execution
console.log(student_details.skills[0]); //html
console.log(student_details.address.city); //chennai