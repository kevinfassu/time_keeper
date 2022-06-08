// This is to show the cureent day, date, and time
var dateToday = moment().format('dddd, MMM Do YYYY, h:mm:ss a')
$("#currentDay").html(dateToday);

$(document).ready(function())