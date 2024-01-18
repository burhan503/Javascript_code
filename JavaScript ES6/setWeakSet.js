/*
Yahan ek chota sa example dede ge ke set or weakSet & Map or WeakMap ka meaning kya hota hain;
*/

const weakset = new Set();
console.log(weakset);
// adding set woth WeakSet 
const newSet = new Set([1 ,'Burhan']);
console.log(newSet);
// checking duplicate value 
const remove = new Set([1,1,1,2,3,2,55,2,1,10]);
console.log(remove);
console.log(remove.values()); // getting values 

// Perform Multipule task on SetWeak 

const new_Set = new Set([1,2,3]);
new_Set.add(4);
console.table(new_Set); // Add Element on array 
new_Set.delete(1);
console.log(new_Set);
console.log(new_Set.has(1)); // isme 1 delete ho chuka return false 
new_Set.clear();
console.log(new_Set);
