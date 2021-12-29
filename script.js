const startDate = moment("2021-12-28");
var currentDate = moment();

var updateTime = function() {
    currentDate = moment();

}

var showCards = function() {
    for (var i = 0; i < 12; i++) {
        

        if (startDate.add(i, "days").isSameOrBefore(currentDate, "day")) {
            document.getElementById(`card-${i + 1}`).removeAttribute("hidden");
            document.getElementById(`later-message-${i + 1}`).setAttribute("hidden", "");
        }
    }
}

showCards();