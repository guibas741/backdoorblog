$(document).ready(function() {
    menuPositions();
    menuPlayers('top','toplist');
    menuPlayers('jungle','junglelist');
    menuPlayers('mid','midlist');
    menuPlayers('adc','adclist');
    menuPlayers('support','supportlist');
});

function menuPositions() {
    $('#players').click(function() {
        $('.header.submenu').slideToggle('medium');
        return false;
    });
}

function menuPlayers(id, classe) {
    $('#' +id).mouseover(function() {
        $('.'+classe).show('medium');
    }).mouseleave(function() {
        $('.'+classe).hide('medium');
    });
    return false;
}

