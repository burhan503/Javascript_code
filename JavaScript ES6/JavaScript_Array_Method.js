// Remove the item from an Array 
let food = ['Pizza','Butter Chicken','Tikka Masala.','Vindaloo'];
console.log(food);
food.push('Dal Bati');
console.log(food);
// 2 Remove Last Element on Array Method is POP
food.pop();
console.table(food);
console.log('All Set');
console.log(food);
//Remove item from Array at index of 0 
food.shift();
console.table(food);
// Add item From Array at index of 0 
food.unshift('Dal Bati');
console.table(food);
console.log('All Set')