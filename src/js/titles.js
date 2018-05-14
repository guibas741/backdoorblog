$(document).ready(function() {
    subMenu();
});


function subMenuId(id) {
    $(id).click(function() {
        $(id + ' ul').slideToggle('medium')
    });
}

function subMenu() {
    subMenuId('#year2013');
    subMenuId('#year2014');
    subMenuId('#year2015');
    subMenuId('#year2016');
    subMenuId('#year2017');
    subMenuId('#year2018');
}