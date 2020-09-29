window.onload = function () {
  document.querySelector("#startbtn").addEventListener("click", starttime);
  document.querySelector("#stopbtn").addEventListener("click", stoptime);
  document.querySelector("#resetbtn").addEventListener("click", resettime);

  var d = new Date();

  var flag = false;
  var seconds = 0;
  var minutes = 0;
  var mili_seconds = 0;
  var tInterval;
  function starttime() {
    console.log("starting time");
    flag = true;
    tInterval = setInterval(printing, 10);
  }

  function printing() {
    console.log("hello");
    if (flag) {
      mili_seconds++;
      if (mili_seconds / 100 === 1) {
        mili_seconds = 0;
        seconds++;
      }
      if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
      }
      if (mili_seconds <= 9) {
        display_mili_seconds = "0" + mili_seconds;
      } else {
        display_mili_seconds = mili_seconds;
      }
      if (seconds <= 9) {
        display_seconds = "0" + seconds;
      } else {
        display_seconds = seconds;
      }
      if (minutes <= 9) {
        display_minutes = "0" + minutes;
      } else {
        display_minutes = minutes;
      }
      document.getElementById("time").innerHTML =
        display_minutes +
        " : " +
        display_seconds +
        " : " +
        display_mili_seconds;
    }
  }

  function stoptime() {
    console.log("stop time");

    flag = false;
    clearInterval(tInterval);
  }
  function resettime() {
    console.log("reset time");

    flag = false;
    clearInterval(tInterval);
    seconds = 0;
    minutes = 0;
    mili_seconds = 0;
    document.getElementById("time").innerHTML = "00 : 00 : 00";
  }
  setInterval(current, 1000);
  function current() {
    var curr_time = document.getElementById("curr_time");
    var today = new Date();
    var curr_hour = today.getHours();
    var curr_minute = today.getMinutes();
    var curr_second = today.getSeconds();
    var display_hour;
    var display_minute;
    var display_second;
    if (curr_hour <= 9) {
      display_hour = "0" + curr_hour;
    } else {
      display_hour = curr_hour;
    }
    if (curr_minute <= 9) {
      display_minute = "0" + curr_minute;
    } else {
      display_minute = curr_minute;
    }
    if (curr_second <= 9) {
      display_second = "0" + curr_second;
    } else {
      display_second = curr_second;
    }
    curr_time.innerHTML =
      display_hour + " : " + display_minute + " : " + display_second;
  }
};
