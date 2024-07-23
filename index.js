

// var numberOfButtons = document.querySelectorAll(".drum").length;

// // detecting button press

// for (var i = 0; i < numberOfButtons; i++) {


//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {

//         var buttonInnerHTML = this.innerHTML;

//         makesound(buttonInnerHTML);

//         buttonAnimation(buttonInnerHTML);

//     });


//     //detecting keyboard press

//     document.addEventListener("keypress", function (event) {

//         makesound(event.key);

//         buttonAnimation(event.key);


//     });

//     function makesound(key) {
//         switch (key) {
//             case "w":
//                 var crash = new Audio("sounds/crash.mp3");
//                 crash.play();
//                 break;

//             case "a":
//                 var kick = new Audio("sounds/kick-bass.mp3");
//                 kick.play();
//                 break;

//             case "s":
//                 var snare = new Audio("sounds/snare.mp3");
//                 snare.play();
//                 break;

//             case "d":
//                 var tom1 = new Audio("sounds/tom-1.mp3");
//                 tom1.play();
//                 break;

//             case "j":
//                 var tom2 = new Audio("sounds/tom-2.mp3");
//                 tom2.play();
//                 break;

//             case "k":
//                 var tom3 = new Audio("sounds/tom-3.mp3");
//                 tom3.play();
//                 break;

//             case "l":
//                 var tom4 = new Audio("sounds/tom-4.mp3");
//                 tom4.play();
//                 break;



//             default: console.log(buttonInnerHTML);
//                 break;
//         }
//     }


//     function buttonAnimation(currentKey) {

//         var activeButton = document.querySelector("." + currentKey);

//         activeButton.classList.add("pressed");

//         setTimeout(function () {activeButton.classList.remove("pressed"); } , 100 );
//     }

    
    

// }




for(var numberOfButtons=document.querySelectorAll(".drum").length,i=0;i<numberOfButtons;i++){function e(e){switch(e){case"w":new Audio("sounds/crash.mp3").play();break;case"a":new Audio("sounds/kick-bass.mp3").play();break;case"s":new Audio("sounds/snare.mp3").play();break;case"d":new Audio("sounds/tom-1.mp3").play();break;case"j":new Audio("sounds/tom-2.mp3").play();break;case"k":new Audio("sounds/tom-3.mp3").play();break;case"l":new Audio("sounds/tom-4.mp3").play();break;default:console.log(buttonInnerHTML)}}function s(e){var s=document.querySelector("."+e);s.classList.add("pressed"),setTimeout(function(){s.classList.remove("pressed")},100)}document.querySelectorAll(".drum")[i].addEventListener("click",function(){var n=this.innerHTML;e(n),s(n)}),document.addEventListener("keypress",function(n){e(n.key),s(n.key)})}