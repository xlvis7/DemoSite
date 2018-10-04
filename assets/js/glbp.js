$('#mainLoader').attr('style', '');
var colors = ["fill: rgb(142, 135, 079)", "fill: rgb(195, 164, 121)", "fill: rgb(047, 124, 151)", "fill: rgb(206, 019, 061)", "fill: rgb(233, 127, 165)" ,"fill: rgb(221, 221, 221)"];
var count = 0;

function changeColor() {
    $('#mainLoader').attr('style', colors[count]);
   count > colors.length ? counter = 0 : count = count + 1;
}
var preloadTimer = setInterval(changeColor, 1000);

function main(){
    clearInterval(preloadTimer);
    $('#mainLoader').attr('style', 'opacity: 0; display: none;');
    var counter = $('#mainApp').attr('data-step');

    function changePicture() {
            counter++;
            counter > 11 ? counter = 1 : counter = counter;
            $('#mainApp').attr('data-step', counter);
    }
    
    var timer = setInterval(changePicture, 5000);

    $('.visual-nav-col').click(function(){
        counter = $(this).attr('data-nav');
        $('#mainApp').attr('data-step', counter);
        clearInterval(timer);
        timer = setInterval(changePicture, 5000);
    });
}



window.onload = main;