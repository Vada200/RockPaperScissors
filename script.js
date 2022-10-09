const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const pic = document.getElementById('pic');
const subtitle = document.getElementById('subtitle');;
const text = document.getElementById('smth')
const stats = document.getElementById('stats');
var win = 0;
var tie = 0;
var lost = 0;

rock.addEventListener('click', function random() {
    var num = Math.floor(Math.random()*3);
    switch(num) {
    case 0:
        document.getElementById('pic').src="rock.png";
        subtitle.innerHTML="Na még egyszer!";
        tie++;
        stats.innerHTML = "Nyert: "+win+" <br> Döntetlen: "+tie+" <br> Vesztett: "+lost;
        break;
    case 1:
        document.getElementById('pic').src="paper.png";
        subtitle.innerHTML="Vesztettél!";
        lost++;
        stats.innerHTML = "Nyert: "+win+" <br> Döntetlen: "+tie+" <br> Vesztett: "+lost;
        break;
    case 2:
        document.getElementById('pic').src="scissors.png";
        subtitle.innerHTML="Nyertél!";
        win++;
        stats.innerHTML = "Nyert: "+win+" <br> Döntetlen: "+tie+" <br> Vesztett: "+lost;
        break;
    }
});

paper.addEventListener('click', function random() {
    var num = Math.floor(Math.random()*3);
    switch(num) {
    case 0:
        document.getElementById('pic').src="rock.png";
        subtitle.innerHTML="Nyertél!";
        win++;
        stats.innerHTML = "Nyert: "+win+" <br> Döntetlen: "+tie+" <br> Vesztett: "+lost;
        break;
    case 1:
        document.getElementById('pic').src="paper.png";
        subtitle.innerHTML="Na még egyszer!";
        tie++;
        stats.innerHTML = "Nyert: "+win+" <br> Döntetlen: "+tie+" <br> Vesztett: "+lost;
        break;
    case 2:
        document.getElementById('pic').src="scissors.png";
        subtitle.innerHTML="Vesztettél!";
        lost++;
        stats.innerHTML = "Nyert: "+win+" <br> Döntetlen: "+tie+" <br> Vesztett: "+lost;
        break;
    }
});

scissors.addEventListener('click', function random() {
    var num = Math.floor(Math.random()*3);
    switch(num) {
    case 0:
        document.getElementById('pic').src="rock.png";
        subtitle.innerHTML="Vesztettél!";
        lost++;
        stats.innerHTML = "Nyert: "+win+" <br> Döntetlen: "+tie+" <br> Vesztett: "+lost;
        break;
    case 1:
        document.getElementById('pic').src="paper.png";
        subtitle.innerHTML="Nyertél!";
        win++;
        stats.innerHTML = "Nyert: "+win+" <br> Döntetlen: "+tie+" <br> Vesztett: "+lost;
        break;
    case 2:
        document.getElementById('pic').src="scissors.png";
        subtitle.innerHTML="Na még egyszer!";
        tie++;
        stats.innerHTML = "Nyert: "+win+" <br> Döntetlen: "+tie+" <br> Vesztett: "+lost;
        break;
    }
});