const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

console.log('Testing Git -how it works');
console.log('testing again');
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
