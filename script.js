const startDate = moment("2021-12-28");

var updateTime = function() {
    var currentDate = moment();
    var currentDateDay = moment().format('YYYY-MM-DD');
    showCards(currentDateDay);
}

var showCards = function(date) {
    for (var i = 0; i < 12; i++) {
        
        //12-28 i = 0 and element 1
        //12-29 i = 1 and element 2
        //12-30 i = 2 and element 3
        //12-31 i = 3 and element 4
        var position = i+1;

        var startDateAdded = startDate;
        
        console.log(i, date, startDateAdded.date());
        //console.log(date);
        //console.log(startDateAdded);
        //apparently adding i was updating the global variable even when setting localVar = startdate...
        //This is really dumb but probably some sort of pointer / reference to the original value...

        if (startDateAdded.isSameOrBefore(date, 'd')) {
        //if (startDate.add(i, "days").isSameOrBefore(date, "day")) {
            document.getElementById(`card-${position}`).removeAttribute("hidden");
            document.getElementById(`later-message-${position}`).setAttribute("hidden", "");
        }
        startDateAdded = startDateAdded.add(1, 'd');
    }
}

updateTime();
setInterval(updateTime, 1000 * 60);