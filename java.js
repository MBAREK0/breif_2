let openicon = document.querySelector("#sidebar_icon");
let cart = document.querySelector("#sidbare_phone");
let button_accs = document.querySelector("#button_list_Accessoires");
let list = document.querySelector("#list_Accessoires_js");
function myoppen() {
  cart.classList.toggle("mymbarek");
  openicon.classList.toggle("openicon");

}
function hid_accs() {
    
   list.classList.toggle("hidenn_list");
  
  }