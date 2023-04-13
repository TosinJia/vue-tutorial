$(function(){
    $('li').even().css('background-color', 'blue');
    $( "li:odd" ).css( "background-color", function(){
        return 'orange';
    } );
});