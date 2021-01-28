var navi = document.getElementById("navi-menu");
var button = document.getElementById("menu-icon"); 
var header = document.getElementById("page-header");

    button.onclick = function(){
            if(navi.className == "navi-menu-open" && header.className == "page-header-active"){
                header.classList.add("page-header");
                header.classList.remove("page-header-active");
                navi.classList.add("navi-menu");
                navi.classList.remove("navi-menu-open");
            } else{
                header.classList.add("page-header-active");
                header.classList.remove("page-header");
                navi.classList.remove("navi-menu");
                navi.classList.add("navi-menu-open");
                
            }
  };
