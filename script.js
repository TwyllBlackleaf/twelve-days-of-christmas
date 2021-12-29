const startDate = moment("2021-12-28");

var updateTime = function() {
    var currentDate = moment();
    showCards(currentDate);
}

var showCards = function(date) {
    for (var i = 0; i < 12; i++) {
        

        if (startDate.add(i, "days").isSameOrBefore(date, "day")) {
            document.getElementById(`card-${i + 1}`).removeAttribute("hidden");
            document.getElementById(`later-message-${i + 1}`).setAttribute("hidden", "");
        }
    }
}

updateTime();
setInterval(updateTime, 1000 * 60);