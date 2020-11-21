var menu_list = ["CAPRICIOSA", "MARGHERITA", "MOZZARELLA", "NEAPOLITANA", "PEPPERONI", "REGINA"];

//1234567890
function getmenu() {
    var data;
    data = "<ol class= 'menulist'>";
    menu_list.sort();

    for (var i = 0; i < menu_list.length; i++) {

        data = data + '<li>' + menu_list[i] + '</li>';

    }
    data = data + "</ol>";

    document.getElementById("display_menu").innerHTML = data;
}


function add_content() {
    var data;
    var content = document.getElementById("add_item").vlaue;
    menu_list.push(content);
    menu_list.sort();
    data = "<section class='card_menu'>";
    for (var i = 0; i < menu_list.length; i++) {

        data = data + "<div class='card_menu'>" + '<img id = "pizza_img_thing" src="images/pizzaImg.png">' + menu_list[i] + '</li>';

    }
    data = data + '</section>';
    document.getElementById("display_menu").innerHTML = data;
}