// n example of a circular queue is the Hot Potato game. In this game, children are organized in a circle,
//  and they pass the hot potato to their neighbor as fast as they can. At a certain point of the
// game, the hot potato stops being passed around the circle of children, and the child that
//  has the hot potato is removed from the circle. This action is repeated until there is only
//  one child left (the winner).
// const Queue = require("./queue");
// function hotPotato(elementList, num) {
//   const queue = new Queue();
//   const eliminatedList = [];
//   const result = {
//     eliminated: [],
//     winner: ""
//   };
//   for (let i = 0; i < elementList.length; i++) {
//     queue.enqueue(elementList[i]);
//   }

//   console.log("queue", queue);
//   while (queue.size() > 1) {
//     for (let i = 0; i < num; i++) {
//       queue.enqueue(queue.dequeue());
//       console.log("queue", i, queue);
//     }
//     eliminatedList.push(queue.dequeue());
//   }
//   return {
//     ...result,
//     eliminated: eliminatedList,
//     winner: queue.dequeue()
//   };
// }

// without using queue

function hotPotato(elementList, num) {
  const eliminatedList = [],
    queueList = [...elementList];
  while (queueList.length > 1) {
    for (let i = 0; i < num; i++) {
      queueList.push(queueList.shift());
    }
    eliminatedList.push(queueList.shift());
  }
  return {
    eliminated: eliminatedList,
    winner: queueList.shift()
  };
}

const names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
const result = hotPotato(names, 7);
console.log("result", result);
result.eliminated.forEach((name) => {
  console.log(`${name} was eliminated from the Hot Potato game.`);
});
console.log(`The winner is: ${result.winner}`);
