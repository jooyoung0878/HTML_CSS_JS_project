(function(){
    var $content = $('#share-options').detach();

    $('#nav-logo').on('click',function(){
        modal.open({content: $content});
    });
}());