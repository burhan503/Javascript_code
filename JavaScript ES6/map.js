// access object element's 
const map1 = new Map();
map1.set('info',{name:'Burhan', age: 27});
console.log(map1.get('info'));
// check if element is exist 
console.log(map1.has('info'))
// Remove Element from Object 
const mapcheck = map1.delete('address');
if(mapcheck === false){
    console.log("address not found")
}else{
    console.log('then delete the element');
    map1.date('info');
}
console.log(map1);
//clear element with object with key & values 
map1.clear('info');
console.log(map1);
// You can get the number of elements in a Map using the size property.
console.log(map1.size); // abhi iske upper hi delete kiya hain 
// You can iterate through the Map elements using the for...of loop or forEach() method.
const AccessMap = new Map();
AccessMap.set('name','Burhan');
AccessMap.set('Age','18');
for(let [key ,value] of AccessMap ){
    console.log(key + '- ' + value);
}
// Same Access to the forEach 
AccessMap.forEach(function(value, key) {
    console.log(key + '- ' + value)
  });
// Access on values 
for(let values of AccessMap.values()){
    console.log(values)
}