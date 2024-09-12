// create this pattern
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #


let size = 8;
for (let i = 1; i <= size; i++) {
  let showGrid = '';
  for (let j = 1; j <= size; j++) {
    if ((i + j) % 2 === 0) {
      showGrid += ' ';
    } else {
      showGrid += '#';
    }
  }
  console.log(showGrid);
}