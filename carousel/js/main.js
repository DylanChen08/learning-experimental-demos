$(".images > img:nth-child(1)").addClass("current");
// console.log($('.images > img:nth-child(1)'))
// console.log($(".images"))
// console.log(00)
$(".images > img:nth-child(2)").addClass("enter");
$(".images > img:nth-child(3)").addClass("enter");
// console.log(1)
let n = 1;
setInterval(() => {
  console.log(2);
  $(`.images > img:nth-child(${x(n)})`)
    .removeClass("current")
    .addClass("leave")
    .one("transitionend", e => {
      console.log("trend");
      $(e.currentTarget)
        .removeClass("leave")
        .addClass("enter");
    });

  $(`.images > img:nth-child(${x(n + 1)})`)
    .removeClass("enter")
    .addClass("current");
  n += 1;
}, 3000);

function x(n) {
  if (n > 3) {
    n = n % 3;
    if (n === 0) {
      n = 3;
    }
  }
  return n;
}
