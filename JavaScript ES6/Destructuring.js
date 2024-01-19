//Escape array element 
const arrayOne = ['One','Two','Three'];
const [x, ,y] = arrayOne; 
console.log(x);
console.log(y);

// Assign Remaining Elements to a Single Variable
const newArray = ['one','two','three,','for']
const [xx, ...yy] = newArray;
console.log(xx);
console.log(yy)

// Access using Object 
const newObject = {
    Id_name: 'Burhan',
    info: 'Class',
    number : 'A11609'
}
const {Id_name,...clientAccess } = newObject;
console.log(Id_name);
console.log(clientAccess);
// // Javascript Destructuring  
const myobj = {
    id : 'A11609',
    name : 'Burhan',
    email: 'burhan.com'
}
const {id, name, email} = myobj;
console.log(`THIS IS THE ID ${id} the is the name ${name} this is the email ${email}`);

// // with out Destructuring 
const mynew = {
    name : 'testing Javascript',
    class_name: 'JavaScript Programming',
    track_id : 'Ajj!nnskn1234'
}
let namee1 = mynew.name;
let class_name2 = mynew.class_name;
let track_id_remaning = mynew.track_id;

console.log(namee1);
console.log(class_name2);
console.log(track_id_remaning);

// //if you want to assign different variable names for the object key, you can use:

const object_info = {
    name: 'Hensex',
    class_name: 'Trading',
    your_role : 'Full Stack Developer'
}
const {name:client_info, class_name:name_id ,your_role:profile} = object_info;
console.log(`name of branch ${client_info}`,"/n");
console.log(`name of branch ${name_id}`,"/n");
console.log(`name of branch ${profile}`,"/n");

const Xampp = {
    name: 'Burhan',
    user_id : 'A11609',
    class_room: 'B6XX1'
}
const {name:name1,user_id:user1,class_room:class_info} = Xampp;
console.log(name1);
console.log(user1);
console.log(class_info);
