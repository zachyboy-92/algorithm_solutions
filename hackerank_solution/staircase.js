function staircase(int) {
  let stair = "#";
  for (let i = 1; i <= int; i++) {
    console.log(stair.repeat(i).padStart(int));
  }
}
console.log(staircase(6));
