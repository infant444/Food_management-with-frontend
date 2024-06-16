i = 0;
function navigation() {
    var manu = document.querySelector("#manu");
    var nav = document.querySelector(".navigation");
    manu.classList.toggle('fa-times');
    nav.classList.toggle("active");
}
function ser() {
    var search = document.querySelector("#search");
    var show = document.querySelector(".from-search");
    search.classList.toggle('fa-times');
    show.classList.toggle("active");
}
function filter1() {
    var show = document.querySelector(".filter-div");
    show.classList.toggle("active");
}
function log() {
    var login = document.querySelector("#user");
    var show = document.querySelector(".login");
    login.classList.toggle('fa-times');
    show.classList.toggle("active");
}
function hide() {
    var login = document.querySelector("#eye");
    var x = document.getElementById("pass");
    if (i % 2 == 0) {
        x.setAttribute("type", "text");
        console.log(i);
    }
    else if (i % 2 == 1) {
        x.setAttribute("type", "password");
    }
    i++;
    login.classList.toggle('fa-eye-slash');
}
var swiper = new Swiper(".head", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});
var a= setInterval(function(){right(),right1(),right2(),right3(),right4(),right5(),right6(),right7()}, 10000 );
var j = 0;
function left() {
    var x = ['2.jpg', '5.jpg', '4.jpg', '1.jpg'];
    var a = document.getElementById('dish');
    if (j < x.length) {
        var z = "img/" + x[j];
        console.log(z);
        console.log(x[j]);
        a.src = z;
        j++;
    }
    else {
        j = 0;
    }
}
function right() {
    var x = ['2.jpg', '5.jpg', '4.jpg', '1.jpg'];
    var a = document.getElementById('dish');
    if (j >= 0) {
        var z = "img/" + x[j];
        console.log(z);
        console.log(x[j]);
        a.src = z;
        j--;
    }
    else {
        j = x.length-1;
    }
}
function left1() {
    var x = ['1.jpg', '7.jpg', '8.jpeg', '9.webp'];
    var a = document.getElementById('dish1');
    if (j < x.length) {
        var z = "img/" + x[j];
        console.log(z);
        console.log(x[j]);
        a.src = z;
        j++;
    }
    else {
        j = 0;
    }
}
function right1() {
    var x = ['1.jpg', '7.jpg', '8.jpeg', '9.webp'];
    var a = document.getElementById('dish1');
    if (j >= 0) {
        var z = "img/" + x[j];
        console.log(z);
        console.log(x[j]);
        a.src = z;
        j--;
    }
    else {
        j = x.length-1;
    }
}

function left2() {
    var x = ['11.jpg', '12.jpg', '13.jpg', '14.jpg'];
    var a = document.getElementById('dish2');
    if (j < x.length) {
        var z = "img/" + x[j];
        console.log(z);
        console.log(x[j]);
        a.src = z;
        j++;
    }
    else {
        j = 0;
    }
}
function right2() {
    var x = ['11.jpg', '12.jpg', '13.jpg', '14.jpg'];
    var a = document.getElementById('dish2');
    if (j >= 0) {
        var z = "img/" + x[j];
        console.log(z);
        console.log(x[j]);
        a.src = z;
        j--;
    }
    else {
        j = x.length-1;
    }
}
function left3() {
    var x = ['18.jpg', '17.jpg', '16.jpg', '15.jpg'];
    var a = document.getElementById('dish3');
    if (j < x.length) {
        var z = "img/" + x[j];
        console.log(z);
        console.log(x[j]);
        a.src = z;
        j++;
    }
    else {
        j = 0;
    }
}
function right3() {
    var x = ['18.jpg', '17.jpg', '16.jpg', '15.jpg'];
    var a = document.getElementById('dish3');
    if (j >= 0) {
        var z = "img/" + x[j];
        console.log(z);
        console.log(x[j]);
        a.src = z;
        j--;
    }
    else {
        j = x.length-1;
    }
}
function left4() {
    var x = ['22.jpg', '21.jpg', '20.jpg', '19.jpg'];
    var a = document.getElementById('dish4');
    if (j < x.length) {
        var z = "img/" + x[j];
        console.log(z);
        console.log(x[j]);
        a.src = z;
        j++;
    }
    else {
        j = 0;
    }
}
function right4() {
    var x = ['22.jpg', '21.jpg', '20.jpg', '19.jpg'];
    var a = document.getElementById('dish4');
    if (j >= 0) {
        var z = "img/" + x[j];
        console.log(z);
        console.log(x[j]);
        a.src = z;
        j--;
    }
    else {
        j = x.length-1;
    }
}
function left5() {
    var x = ['26.jpg', '25.jpg', '24.jpg', '23.jpg'];
    var a = document.getElementById('dish5');
    if (j < x.length) {
        var z = "img/" + x[j];
        console.log(z);
        console.log(x[j]);
        a.src = z;
        j++;
    }
    else {
        j = 0;
    }
}
function right5() {
    var x = ['26.jpg', '25.jpg', '24.jpg', '23.jpg'];
    var a = document.getElementById('dish5');
    if (j >= 0) {
        var z = "img/" + x[j];
        console.log(z);
        console.log(x[j]);
        a.src = z;
        j--;
    }
    else {
        j = x.length-1;
    }
}
function left6() {
    var x = ['30.jpg', '29.jpg', '28.jpg', '27.jpg'];
    var a = document.getElementById('dish6');
    if (j < x.length) {
        var z = "img/" + x[j];
        console.log(z);
        console.log(x[j]);
        a.src = z;
        j++;
    }
    else {
        j = 0;
    }
}
function right6() {
    var x = ['30.jpg', '29.jpg', '28.jpg', '27.jpg'];
    var a = document.getElementById('dish6');
    if (j >= 0) {
        var z = "img/" + x[j];
        console.log(z);
        console.log(x[j]);
        a.src = z;
        j--;
    }
    else {
        j = x.length-1;
    }
}
function left7() {
    var x = ['34.jpg', '33.jpg', '32.jpg', '31.jpg'];
    var a = document.getElementById('dish7');
    if (j < x.length) {
        var z = "img/" + x[j];
        console.log(z);
        console.log(x[j]);
        a.src = z;
        j++;
    }
    else {
        j = 0;
    }
}
function right7() {
    var x = ['34.jpg', '33.jpg', '32.jpg', '31.jpg'];
    var a = document.getElementById('dish7');
    if (j >= 0) {
        var z = "img/" + x[j];
        console.log(z);
        console.log(x[j]);
        a.src = z;
        j--;
    }
    else {
        j = x.length-1;
    }
}



$(document).ready(function(){
    $(".heart").click(function(){
        $(this).toggleClass("blink");
        $(this).toggleClass("heart");
    });
});

var i=0;
function change(){
    var show = document.querySelector(".bd");
    show.classList.toggle("all");
    if(i%2==0)
    {
        document.getElementById('x').setAttribute('value','Sofia Font');
    }
    else{
        document.getElementById('x').setAttribute('value','normal Font');
    }
    i++;
}
function blink()
{
    var show = document.querySelector(".heart");
    show.classList.toggle("blink");
}



var swiper = new Swiper(".veg-food", {
    slidesPerView: 8,
    spaceBetween: 4,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        375: {
            slidesPerView: 1,
            spaceBetween: 2,
          },
        425: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
      640: {
        slidesPerView: 2,
        spaceBetween: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 4,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 5,
      },
    },
  });
// const arrows = document.querySelectorAll(".turn");
// const container = document.querySelectorAll(".veg-food");

function v(){
    document.getElementById("non-veg").style.display="none";
    document.getElementById("veg").style.display="contents";
    document.getElementById("veg").style.background="linear-gradient(-160deg,#1d1e30,rgb(0, 247, 136),rgb(255, 79, 79))";
}
function nv(){
    document.getElementById("non-veg").style.display="contents";
    document.getElementById("veg").style.display="none";
    document.getElementById("non-veg").style.background="linear-gradient(-160deg,#1d1e30,rgb(255, 79, 79),rgb(0, 247, 136))";
}

function b()
{
    document.getElementById("veg").style.display="contents";
    document.getElementById("non-veg").style.display="contents";
    document.getElementById("veg").style.background="linear-gradient(-160deg,#1d1e30,rgb(0, 247, 136),rgb(255, 79, 79))";
}



function suc()
{
    alert("Order Successfully");
}






















// var swiper = new Swiper(".veg-food", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows: false
//     },
//     pagination: {
//       el: ".swiper-pagination"
//     }
//   });
    // $(document).ready(function(){
    //     $("#search-food").on("keyup" , function(){
    //         var value=$(this).val().toLowerCase();
    //         $("#hotal .box-container").filter(function(){
    //             $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    //         });
    //     });
    // });
