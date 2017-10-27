var countDownDate = new Date("Nov 20, 2017 00:00:00").getTime();

var x = setInterval(function() {

    var current = new Date().getTime();

    var range = countDownDate - current;

    var daysTo = Math.floor(range / (1000 * 60 * 60 * 24));
    var hoursTo = Math.floor((range % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesTo = Math.floor((range % (1000 * 60 * 60)) / (1000 * 60));
    var secondsTo = Math.floor((range % (1000 * 60)) / 1000);

    document.getElementById("daysTo").innerHTML = daysTo;
    document.getElementById("hoursTo").innerHTML = hoursTo;
    document.getElementById("minutesTo").innerHTML = minutesTo;
    document.getElementById("secondsTo").innerHTML = secondsTo;

    if (range < 0) {
        clearInterval(x);
        document.getElementById("daysTo").innerHTML = "00";
        document.getElementById("hoursTo").innerHTML = "00";
        document.getElementById("minutesTo").innerHTML = "00";
        document.getElementById("secondsTo").innerHTML = "00";

    }
}, 1000);