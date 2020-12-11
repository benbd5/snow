createSnowFlake();

setInterval(createSnowFlake, 50);

function createSnowFlake() {
  const snowFlake = document.createElement("i");
  snowFlake.classList.add("fas");
  snowFlake.classList.add("fa-snowflake");
  snowFlake.style.left = Math.random() * window.innerWidth + "px";
  snowFlake.style.animationDuration = Math.random() * 4 + 2 + "s"; // bteween 2 - 5 seconds
  snowFlake.style.opacity = Math.random();
  snowFlake.style.fontSize = Math.random() * 10 + 10 + "px"; // font-size between 10 - 20px

  document.body.appendChild(snowFlake);

  setTimeout(() => {
    snowFlake.remove();
  }, 6000);
}
