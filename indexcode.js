function startMove() {
    //debugging log 
    console.log("startMove() started");
    //prevents start button usage
    document.getElementById("startButton").disabled = true;
    //enables stop button usage
    document.getElementById("stopButton").disabled = false;
    //starts marquee that is moving image
    document.getElementById("myMarquee").start();

}

function stopMove() {
    //debugging log 
    console.log("stopMove() started");
    //prevents stop button usage
    document.getElementById("stopButton").disabled = true;
    //enables start button usage
    document.getElementById("startButton").disabled = false;
    //stops marquee from moving image
    document.getElementById("myMarquee").stop();

}