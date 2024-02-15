/* alert ("hello word") */
//console.log ("Console Message")

//$(".menu-area").addClass("active")

$(".menu-area").click(function() {
    /*if  ($(".menu-area").hasClass("active")) {
        $(".menu-area").removeClass("active")
    } else {
        $(".menu-area").addClass("active")
    }*/
    $(".menu-area").toggleClass("active")

})

/*var x=5;

if (x=4) {
    .addClass
} else {
    then do this instead
} */

var studentName = "Emma";
var allStudents = ["Emma","Emily","Fiona","Laura","Helena","Barbara","Jean"]; //array for multiple
console.log(allStudents)
//alert(studentName) 

var i = 0;
while (i<allStudents.length) {
    console.log(allStudents[i])
        i = i + 1; 
}

var k = 0;
while (k < allStudents.length) {
    console.log(allStudents[k])
    $("<div></div>")
    .addClass("student")
    .html(allStudents[k])
    .appendTo("#everything")

    k = k + 1;
}

$(window).on("resize", function() {
    var window = $(window);
    if (win.width > 1280) {
        $("#everything").css("grid-template-columns","repeat(4, 1fr)")

    }
    if (win.width () < 1280){
        $("#everything").css("grid-template-columns","repeat(3, 1fr)")

    }
})

/*while (i<5) 
{
    do this
    i+1;
} */

$(document).scroll(function(){
    $("<div></div")
    .addClass("newBox")
    .appendTo("body")
    .html("Number of students: " + allStudents.length)
})
