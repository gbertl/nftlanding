const toggleMenu=()=>{const e=document.querySelector(".nav__toggler"),s=document.querySelector(".nav__menu");e.addEventListener("click",(()=>{e.classList.toggle("nav__toggler--active"),s.classList.toggle("nav__menu--open"),document.body.classList.toggle("no-scroll")})),window.addEventListener("click",(o=>{o.target.closest(".nav__menu")||o.target.closest(".nav__toggler")||(e.classList.remove("nav__toggler--active"),s.classList.remove("nav__menu--open"),document.body.classList.remove("no-scroll"))}))};toggleMenu();const mySwiperConfig={slidesPerView:1,spaceBetween:24,loop:!0,loopedSlides:4,breakpoints:{576:{slidesPerView:2},992:{slidesPerView:3},1024:{slidesPerView:4}}},swiper=new Swiper(".mySwiper",mySwiperConfig),swiper2=new Swiper(".mySwiper2",mySwiperConfig);
//# sourceMappingURL=script.js.map