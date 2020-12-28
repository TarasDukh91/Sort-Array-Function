const arr = ["Taras", "Home", "BDSL", "Bachata", "Halia", 1234, 643, 89, 234, true, false, undefined]

let newObj = {};

let arrStrings = [];

function sort(){
   
    let obj = {
        string: [],
        number: [],
        boolean: [],
        undefined: []
    };
    for(let i = 0; i <= arr.length; i++) {
       
        switch (true) {
            case (typeof arr[i] === "string"): obj.string.push(arr[i]) 
            break;
            case (typeof arr[i] === "number"): obj.number.push(arr[i])
            break;
            case (typeof arr[i] === "boolean"): obj.boolean.push(arr[i])
            break;
            case(typeof arr[i] === "undefined"): obj.undefined.push(arr[i])
            break; 
        }
    }
    return obj;
}
newObj = sort();
console.log(newObj);