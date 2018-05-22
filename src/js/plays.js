$(document).ready(function() {
    $('#search').on('keyup',function() {
        console.log($('#search').val());
        $('.resultSearch').html($('#search').val());
    });
});