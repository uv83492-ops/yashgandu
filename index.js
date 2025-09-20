let count = 0;
$(".btn").click(function () {
    count++;
    praising(count) ;
    $(".fcount").text("fucked count =" + count);
    btnAnimation();

});

function btnAnimation() {
    $(".btn").addClass("pressed");
    setTimeout(() => {
        $(".btn").removeClass("pressed");

    }, 200);
}

function praising(number){
if(number === 3){
alert("you are really hungry for his bund");
}else if(number === 6){
    alert("aaj to iska khel hi khatam kardo");
}else if(number === 10){
alert("iska haati ka bhosda hai 10 bar mai  bhi satisfy nahi hoga")
}
}



