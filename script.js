// This is to show the cureent day, date, and time
var dateToday = moment().format('dddd, MMM Do YYYY, h:mm:ss a')
$("#currentDay").html(dateToday);

$(document).ready(function() {
    //savebtn listener
    $(".saveBtn").on("click", function (){
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //save local storage
        localStorage.setItem(text, time);

    })

    function timeTracker() {
        var timeNow = moment().hour();

        // timeblock loop
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }


    
}

)