// variable keywords -> before es6 var & es6 let, const

// variable types primitive | refference

// primitive type
let my_name = "nino"; // <- string type
let my_age = 23; // <- number
let bool = true; // <- boolean true | false
let undef; // <- undefined
let nul = null; // <- null

const arr = [1, 2, 3];

// function
function isActive() {
  if (this.status === true) {
    return "user is active";
  } else {
    return "user is NOT active";
  }
}

// refference type
let obj = {
  myname: "luka",
  myage: 21,
  status: true,
  isActive: isActive,
};

let res = obj.isActive();

document.write(res);
