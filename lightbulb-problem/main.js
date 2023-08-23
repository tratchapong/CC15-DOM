{/* problem : count : state of lightbulb change
input : array of sequence on-switch : [1,2,3,4,5] or amount of lightbulb
output : lightbulb change ??? times
condition : 1 before 2 before 3 ... */}

// input : [1,2,3,4,5]
// output : 5

// input : [5,4,3,2,1]
// output : 1

// let input = [3,4,5,1,2]
// output : 2

// let input =  [4,3,5,1,2]
// output : 2

// let input =  [4,2,1,5,3]
// output : 2

let input = [1, 2, 5, 4, 3, 7, 6];

let sw = [...input].fill(0);
let lb = [...sw];
let counter = 0;

for (let el of input) {
  sw[el - 1] = 1;
  let prv_lb = [...lb];
  for (let [i, sw_el] of sw.entries()) {
    if (sw_el === 0) {
      break;
    }
    lb[i] = sw_el;
  }
  for (let [i, lb_el] of lb.entries()) {
    if (lb_el !== prv_lb[i]) {
      counter += 1;
      break;
    }
  }
  console.log('switch :', sw);
  console.log('light :', lb);
  console.log('counter :', counter);
}
