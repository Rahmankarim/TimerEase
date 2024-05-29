let timerInterval;
document.addEventListener("DOMContentLoaded", function () {
  setInterval(Timer, 1000);

  function Timer() {
    var time = new Date();
    let Displaytime =
      time.getHours().toString().padStart(2, "0") +
      "  :  " +
      time.getMinutes().toString().padStart(2, "0");
    let Sec = time.getSeconds();

    document.getElementById("Timer").innerHTML = Displaytime;
    document.getElementById("Sec").innerHTML = "(  " + Sec + "  )";
  }

  setInterval(colorchange, 1000);

  function colorchange() {
    let myArr = [
      "#00C2D1",
      "#059862",
      "#B4CDEC",
      "#97D8C4",
      "#3EF3FA",
      "#78CAD2",
      "#A1D2CE",
      "#9F86C0",
      "#F07167",
      "#4A6487",
      "#99C1B9",
      "#AF68C9",
      "#4AA0B6",
      "#FF86C9",
      "B6D5D7",
      "#6A994E",
      "#EE964B",
    ];

    let min = 0;
    let max = myArr.length - 1;
    let randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    // let randomIndex1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let randomIndex2 = Math.floor(Math.random() * (max - min + 1)) + min;

    let color = myArr[randomIndex];
    // let color1 = myArr[randomIndex1];
    let color2 = myArr[randomIndex2];
    if (color != color2) {
      document.getElementById("Timer").style.color = color;
      //   document.getElementById("body").style.backgroundColor = color1;
      document.getElementById("Sec").style.color = color2;
    }
  }

  setInterval(countryTiming, 1000);

  function countryTiming() {
    let now = new Date();
    let options = { timeZone: "America/New_York" };
    let timeInET = now.toLocaleString("en-US", options);
    document.getElementById("countryAndTime").innerHTML = timeInET;

    let options1 = { timeZone: "Asia/Riyadh" };
    let timeInET1 = now.toLocaleString("en-US", options1);
    document.getElementById("countryAndTime1").innerHTML = timeInET1;

    let options2 = { timeZone: "Australia/Sydney" };
    let timeInET2 = now.toLocaleString("en-US", options2);
    document.getElementById("countryAndTime2").innerHTML = timeInET2;
  }
  //-----------------------------------------------------------------------------------

  let start;
  document.getElementById("start-btn").addEventListener("click", stopwatchfun);
  let milisec = 0;
  let Sec = 0;
  let Min = 0;
  let Hours = 0;
  let Day = 0;
  function stopwatchfun() {
    start = setInterval(updateStopWatch, 10);
  }
  function updateStopWatch() {
    milisec++;

    if (milisec === 100) {
      milisec = 0;
      Sec++;
    }
    if (Sec === 60) {
      Sec = 0;
      Min++;
    }
    if (Min === 60) {
      Min = 0;
      Hours++;
    }
    if (Hours === 24) {
      Hours = 0;
      Day++;
    }
    document.getElementById("milisec").textContent =
      " : " + milisec.toString().padStart(2, "0");
    document.getElementById("seconds").textContent =
      " : " + Sec.toString().padStart(2, "0");
    document.getElementById("minutes").textContent =
      " : " + Min.toString().padStart(2, "0");
    document.getElementById("hours").textContent =
      " : " + Hours.toString().padStart(2, "0");
    document.getElementById("days").textContent = Day.toString().padStart(
      2,
      "0"
    );
    document.getElementById("start-btn").disabled = true;
    document.getElementById("pause-btn").removeAttribute("disabled");
    document.getElementById("Reset-btn").removeAttribute("disabled");
  }
  //--------------------------------------Pause-------------------------------

  document
    .getElementById("pause-btn")
    .addEventListener("click", stopwatchPausefun);

  function stopwatchPausefun() {
    clearInterval(start);
    document.getElementById("start-btn").disabled = false;
    document.getElementById("pause-btn").disabled = true;
    document.getElementById("Reset-btn").disabled = false;
  }

  //---------------------------------------Reset----------------------------------

  document
    .getElementById("Reset-btn")
    .addEventListener("click", stopwatchResetfun);

  function stopwatchResetfun() {
    clearInterval(start);
    milisec = 0;
    Sec = 0;
    Min = 0;
    Hours = 0;
    Day = 0;
    document.getElementById("milisec").textContent = " : 00";
    document.getElementById("seconds").textContent = " : 00";
    document.getElementById("minutes").textContent = " : 00";
    document.getElementById("hours").textContent = " : 00";
    document.getElementById("days").textContent = "00";
    document.getElementById("start-btn").disabled = false;
    document.getElementById("pause-btn").disabled = true;
    document.getElementById("Reset-btn").disabled = true;
  }

  //-------------------------------------Timer-------------------------------
  document.addEventListener("change", getHours);
  function getHours() {
    let hourstiming = document.getElementById("hoursTimer").value;
    document.getElementById("start-btn-Timer").disabled = false;
    document.getElementById("Reset-btn-Timer").disabled = false;

    if (hourstiming >= 0) {
      document.getElementById("hoursTimerH2").textContent = hourstiming;
      document.getElementById("hoursTimerH2").style.color = "#d2691e";
    }
  }

  document.addEventListener("change", getminutes);
  function getminutes() {
    let minutestiming = document.getElementById("minutesTimer").value;
    document.getElementById("start-btn-Timer").disabled = false;
    document.getElementById("Reset-btn-Timer").disabled = false;

    if (minutestiming >= 0) {
      document.getElementById("MinutesTimerH2").textContent = minutestiming;
      document.getElementById("MinutesTimerH2").style.color = "#d2691e";
    }
  }

  document.addEventListener("change", getSeconds);
  function getSeconds() {
    let secondstiming = document.getElementById("secondsTimer").value;
    document.getElementById("start-btn-Timer").disabled = false;

    if (secondstiming >= 0) {
      document.getElementById("SecndsTimerH2").textContent = secondstiming;
      document.getElementById("SecndsTimerH2").style.color = "#d2691e";
    }
  }
  //-------------------------Reset-btn-timer------------------
  document
    .getElementById("Reset-btn-Timer")
    .addEventListener("click", stopwatchResetbtnfun);

  function stopwatchResetbtnfun() {
    document.getElementById("Reset-btn-Timer").disabled = true;

    seconds = 0;
    minutestiming = 0;
    hourstiming = 0;

    document.getElementById("hoursTimerH2").textContent = " 00";
    document.getElementById("MinutesTimerH2").textContent = " 00";
    document.getElementById("SecndsTimerH2").textContent = " 00";

    document.getElementById("start-btn-Timer").disabled = false;
    document.getElementById("pause-btn-Timer").disabled = true;
    document.getElementById("Reset-btn-Timer").disabled = true;
  }
  //----------------------------------Pause-btn-timer
  document
    .getElementById("pause-btn-Timer")
    .addEventListener("click", stopwatchPausebtnfun);

  function stopwatchPausebtnfun() {
    document.getElementById("Reset-btn-Timer").disabled = false;
    document.getElementById("pause-btn-Timer").disabled = true;
    document.getElementById("start-btn-Timer").disabled = false;
    clearInterval(timerInterval);
  }
  //---------------------------------Start-btn-timer
  document
    .getElementById("start-btn-Timer")
    .addEventListener("click", stopwatchStartbtnfun);

  function stopwatchStartbtnfun() {
    document.getElementById("start-btn-Timer").disabled = true;
    document.getElementById("pause-btn-Timer").disabled = false;
    document.getElementById("Reset-btn-Timer").disabled = true;

    let H = parseInt(document.getElementById("hoursTimer").value);
    let M = parseInt(document.getElementById("minutesTimer").value);
    let S = parseInt(document.getElementById("secondsTimer").value);
    if (isNaN(H) || isNaN(M) || isNaN(S)) {
      alert("Please enter valid numbers for hours, minutes, and seconds.");
      return;
    }
    timerInterval = setInterval(() => {
      if (H <= 0 && M <= 0 && S <= 0) {
        clearInterval(timerInterval);
        playSound();
        function playSound() {
          var audio = document.getElementById("timerSound");
          audio.play();
        }
        document.getElementById("start-btn-Timer").disabled = true;
        document.getElementById("pause-btn-Timer").disabled = true;
        document.getElementById("Reset-btn-Timer").disabled = true;
        return;
      }
      if (S === 0) {
        if (M === 0) {
          if (H !== 0) {
            H--;
            M = 59;
          }
        } else {
          M--;
        }
        S = 59;
      } else {
        S--;
      }
      document.getElementById("hoursTimerH2").textContent =
        H.toString().padStart(2, "0");
      document.getElementById("MinutesTimerH2").textContent =
        M.toString().padStart(2, "0");
      document.getElementById("SecndsTimerH2").textContent =
        S.toString().padStart(2, "0");
    }, 1000);
  }
});
