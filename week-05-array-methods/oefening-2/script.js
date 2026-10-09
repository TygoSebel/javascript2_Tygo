const names = ['Anna', 'Bob', 'Charlotte', 'David', 'Emma', 'Frank', 'Grace', 'Henk', 'Isabel', 'Jan', 'Karen', 'Lars'];
 
// Sectie 1: zoek de eerste naam die begint met de ingevoerde letter
//           gebruik find() + startsWith() + toLowerCase().
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid
// Sectie 2: controleer of een ingevoerde naam in de lijst staat (uitkomst is true of false)
//           gebruik includes() + toLowerCase()
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid
const searchFind = document.getElementById("search-find");
const searchOutput = document.getElementById("output-find");
const searchIncludes = document.getElementById("search-includes");
const outputIncludes = document.getElementById("output-includes");
 
searchFind.addEventListener("change", () => {
   let searchInput = searchFind.value.toLowerCase();
 
   let found = names.find(name => name.toLowerCase().startsWith(searchInput));
   searchOutput.textContent = found;
   
   searchFind.value = "";
 
   
 
})
 
let LowerNames = names.map(name => name.toLowerCase());
 
searchIncludes.addEventListener("change", () => {
let LowerInput = searchIncludes.value.toLowerCase()
 
let exists = LowerNames.includes(LowerInput);
 
outputIncludes.textContent = exists;
 
searchInclude.value = "";
 
});