$(function () {
    $('input').focus(function () {
        var id = this.id;
        $("label[for='" + $(this).attr('id') + "']").css({
            "top": "15%",
            "font-size": "12px"
        });
    });

    $('#id_userId').on('keyup', function () {
        validateUsername();
    })

    function validateUsername() {
        var username = $('#id_userId').val();
        if (username.length == '') {
            $('.errorMsg-username').html('Please enter a valid email or phone number.');
            $('.textField').first().css("border-bottom", "1px solid rgb(247, 119, 8)");
        } else if (username.length < 5) {
            $('.errorMsg-username').html('Please enter a valid email or phone number.');
            $('.textField').first().css("border-bottom", "1px solid rgb(247, 119, 8)");
        } else if (username.indexOf("@") < 0) {
            $('.errorMsg-username').html('Please enter a valid email or phone number.');
            $('.textField').first().css("border-bottom", "1px solid rgb(247, 119, 8)");
        } else {
            $('.errorMsg-username').html('');
            $('.textField').first().css("border", "none");
        }
    }

    $('#id_password').on('keyup', function () {
        validatePassword();
    })

    function validatePassword() {
        var pw = $('#id_password').val();
        if (pw.length == '') {
            $('.errorMsg-password').html('Your password must contain between 4 and 60 characters.');
            $('.textField').last().css("border-bottom", "1px solid rgb(247, 119, 8)");
        } else if (pw.length < 5) {
            $('.errorMsg-password').html('Your password must contain between 4 and 60 characters.');
            $('.textField').last().css("border-bottom", "1px solid rgb(247, 119, 8)");
        } else {
            $('.errorMsg-password').html('');
            $('.textField').last().css("border", "none");
        }
    }
})
