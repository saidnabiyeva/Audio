window.addEventListener("keypress", (e) => {
  switch (e.code) {
    case "KeyB":
        playB(); 
        break;
    case "KeyC":
        playC(); 
        break;
    case "KeyD":
        playD(); 
        break;
    case "KeyE":
        playE(); 
        break;
    case "KeyF":
        playF(); 
        break;            
  }
});

let playB = () => new Audio("audio/B.mp3").play();
let playC = () => new Audio("audio/C.mp3").play();
let playD = () => new Audio("audio/D.mp3").play();
let playE = () => new Audio("audio/E.mp3").play();
let playF = () => new Audio("audio/F.mp3").play();