const dropdownBtn = document.querySelector(".dropdown_btn");
      const dropdownMenu = document.querySelector(".dropdown_menu");

      const body = document.querySelector("body");

      const header = document.querySelector(".header");
      const about = document.querySelector(".about");
      const programs = document.querySelector(".programs");


      const darkmode = document.getElementById("darkmode");
      const darkmodeImg = document.getElementById("darkmode-img");
      const dropdownimg = document.getElementById("dropdown-img")
      let isMoon = true;
      let menueClose = true;


      darkmode.onclick = function () {

        body.classList.toggle("open");
        header.classList.toggle("open");
        about.classList.toggle("open");
        programs.classList.toggle("open");
        

       if (isMoon) {
          darkmodeImg.src =
            "https://cdn.glitch.global/78e00b3e-a411-4dbc-96f5-907b2b5a2f20/sun.png?v=16984923943805";

        } else {
          darkmodeImg.src =
            "https://cdn.glitch.global/78e00b3e-a411-4dbc-96f5-907b2b5a2f20/moon.png?v=1698436506165";

        }
        isMoon = !isMoon;
      };

      dropdownBtn.onclick = function () {
        dropdownMenu.classList.toggle("open");

        if (menueClose) {
          dropdownimg.src =
            "https://cdn.glitch.global/78e00b3e-a411-4dbc-96f5-907b2b5a2f20/close.png?v=1704497903383";
          dropdownimg.height = "40"
          dropdownimg.width = "40"
        } else {
          dropdownimg.src =
            "https://cdn.glitch.global/78e00b3e-a411-4dbc-96f5-907b2b5a2f20/burger.png?v=1704497902267";
          dropdownimg.height = "40"
          dropdownimg.width = "40"
        }

        menueClose = !menueClose;
      };