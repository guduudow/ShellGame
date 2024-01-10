window.onload = gameLogic;

function gameLogic() {
  //needed variables here
  let firstcup = document.getElementById("one");
  let secondcup = document.getElementById("two");
  let thirdcup = document.getElementById("three");
  let ball = document.getElementById("ball");
  let orangeball = Math.ceil(Math.random() * 3); //ball receives a random number either 1, 2 or 3
  let win = document.getElementById("congrats");
  let loss = document.getElementById("sorry");
  let tryAgain = document.getElementById("retry");
  let hide = document.getElementById("overlay");

  //add class shuffle to cups
  let btn = document.getElementById("playgame");
  btn.addEventListener("click", clickEvent);

  //function below adds a class to all cups, shuffles on click
  function clickEvent() {
    btn.style.display = "none";
    ball.style.display = "none";
    firstcup.classList.add("shuffleOne");
    secondcup.classList.add("shuffleTwo");
    thirdcup.classList.add("shuffleThree");
    //using jQuery to remove hover ability
    $("#one").removeClass("see");
    $("#two").removeClass("see");
    $("#three").removeClass("see");
  }

  //event listeners below return ball after animation, depend on which cup ball is under
  firstcup.addEventListener("animationend", () => {
    ball.style.display = "block";
  });

  secondcup.addEventListener("animationend", () => {
    ball.style.display = "block";
  });

  thirdcup.addEventListener("animationend", () => {
    ball.style.display = "block";
  });

  //below determines location of ball, depending on the random number the ball gets
  let left = 0;
  if (orangeball == 1) {
    left = Math.ceil($("#one").position().left) + 182;
  } else if (orangeball == 2) {
    left = Math.ceil($("#two").position().left) + 187;
  } else if (orangeball == 3) {
    left = Math.ceil($("#three").position().left) + 182;
  }

  ball.style.left = left + "px";

  let popUpbtn = document.getElementById("popup");
  let about = document.getElementById("aboutgame");

  //each cup on click will perform the logic below
  firstcup.addEventListener("click", cupOneLogic);
  secondcup.addEventListener("click", cupTwoLogic);
  thirdcup.addEventListener("click", cupThreeLogic);

  function cupOneLogic() {
    //add see class back
    firstcup.classList.add("see");
    secondcup.classList.add("see");
    thirdcup.classList.add("see");
    setTimeout(timeDelay1, 1500);
    function timeDelay1() {
      if (orangeball == 1 && left == 190) {
        btn.style.display = "none";
        aboutgame.style.display = "none";
        hide.style.display = "block";
        popUpbtn.style.display = "block";
        tryAgain.style.display = "block";
        tryAgain.onclick = function () {
          window.location.reload();
        };
        win.innerHTML = `<h1> Congrats! You've won!</h1>`;
      } else {
        btn.style.display = "none";
        aboutgame.style.display = "none";
        hide.style.display = "block";
        popUpbtn.style.display = "block";
        tryAgain.style.display = "block";
        tryAgain.onclick = function () {
          window.location.reload();
        };
        loss.innerHTML = `<h1>Sorry, you lost...</h1>`;
      }
    }
  }

  function cupTwoLogic() {
    secondcup.classList.add("see");
    setTimeout(timeDelay2, 1500);
    function timeDelay2() {
      if (orangeball == 2 && left == 670) {
        btn.style.display = "none";
        aboutgame.style.display = "none";
        hide.style.display = "block";
        popUpbtn.style.display = "block";
        tryAgain.style.display = "block";
        tryAgain.onclick = function () {
          window.location.reload();
        };
        win.innerHTML = `<h1> Congrats! You've won!</h1>`;
      } else {
        btn.style.display = "none";
        aboutgame.style.display = "none";
        hide.style.display = "block";
        popUpbtn.style.display = "block";
        tryAgain.style.display = "block";
        tryAgain.onclick = function () {
          window.location.reload();
        };
        loss.innerHTML = `<h1>Sorry, you lost...</h1>`; //change to innerHTML
      }
    }
  }
  function cupThreeLogic() {
    setTimeout(timeDelay3, 1500);
    thirdcup.classList.add("see");
    function timeDelay3() {
      if (orangeball == 3 && left == 1140) {
        btn.style.display = "none";
        aboutgame.style.display = "none";
        hide.style.display = "block";
        popUpbtn.style.display = "block";
        tryAgain.style.display = "block";
        tryAgain.onclick = function () {
          window.location.reload();
        };
        win.innerHTML = `<h1> Congrats! You've won!</h1>`;
      } else {
        btn.style.display = "none";
        aboutgame.style.display = "none";
        hide.style.display = "block";
        popUpbtn.style.display = "block";
        tryAgain.style.display = "block";
        tryAgain.onclick = function () {
          window.location.reload();
        };
        loss.innerHTML = `<h1>Sorry, you lost...</h1>`; //change to innerHTML
      }
    }
  }
}
