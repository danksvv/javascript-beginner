// closures are functions that refer to independent (free) variables. In other words, the function defined in the closure 'remembers' the environment in which it was created.

function countCreate() {
  let count = 0;
  setTimeout(() => {
    count = 100;
  }, 5000);
  return function increase() {
    count++;
    return count;
  };
}

const count1 = countCreate();
