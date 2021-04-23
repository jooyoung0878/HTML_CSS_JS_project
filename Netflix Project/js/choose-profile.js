$(function () {
    $('.profile-link').on('mouseover', function () {
        removecss();
        $(this).find('img').css('border', '1px solid grey');
        $(this).find('span').css('color', 'white');
    });

    $('.profile-link').on('mouseout', function () {
        removecss();
    });

    function removecss() {
        $('.profile-link img').css('border', '');
        $('.profile-link span').css('color', 'grey');
    }
})

