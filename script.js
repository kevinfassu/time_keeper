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
}

)