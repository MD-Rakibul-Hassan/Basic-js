// ***********JSON ************* //
// JavaScript Object Format 
const object = {
      items : [
            {firstItem : "Phone"},
            {sceondItem : "Computer"},
            {thirdItem : "Laptop"},
            {fourthItem : "Keybord"},
      ]
}
console.log(JSON.stringify(object));
// JSON Format 
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
console.log(JSON.parse(text))