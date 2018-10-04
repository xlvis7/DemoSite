function main(){
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