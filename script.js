var sign = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "leo", "Virgo","Libra","Scorpio","Sagittarius", "Capricorn","That is not a correct date :D"];
var message=["Remember the happiness derived from celebrating another’s success is a special kind of joy", "Remember your hard-won treasure is a testament to your own success",
"If you are struggling in life, open your hearts and find your wild", "Remember self acceptance is your gift","Remember all for one and one for all makes everyone shine better " ,
"remember helping others is a way of helping out selves", "remember being original is worth more than being a duplicate", "a wise man once said be fearless in the pursuit of what sets your sould on fire",
    "George Dorsey - The more you use your brain the more brain you will have to use", "Emerson - common sense is a genius dressed in walking clothes", "when your head space changes the world around you looks different",
"The past can provide you with a clue for the future", "That is not a correct date :D"];
var images= ["image/aquarius.jpg","image/pisces.jpg","image/Aries.jpg","image/taurus.jpg","image/gemini.jpg","image/cancer.jpg","image/leo.jpg","image/virgo.jpg","image/libra.jpg","image/scorpio.jpg","image/sagittarius.jpg","image/capricorn.jpg","image/wrong.jpg"];

function horoscope(){
    var userDay= document.getElementById('day').value;
    var userMonth = document.getElementById('month').value;
    var userName = document.getElementById('username').value;
    var signNumber = getHoroscope(userMonth, userDay);
    var image = images[signNumber];
    var Messages = message[signNumber];
    var horoSign = sign[signNumber];
    var birthday = getbirthday(userMonth,userDay);
    if(userName == ""){
        document.getElementById('horoscope').innerHTML= userName + "I still need your name :D";
        return;
    }
    if(signNumber == 12 ){
        document.getElementById('horoscope').innerHTML=  "oh no " + userName + " that is not a correct date!";
        document.getElementById('image').src = image;
        return;
    }
        document.getElementById('horoscope').innerHTML = birthday + " " + userName + "  " + "you are a " + horoSign + ", " + Messages + ".";
        document.getElementById('image').src = image;
}

function getHoroscope(userMonth,userDay){
    if(userMonth == 0){
        if(userDay <= 19){
            return 11;
        }
        if(userDay >= 20){
            return 0;
        }
    }
    if(userMonth == 1){
        if((userDay >= 19) && (userDay <= 28)){
         return 1;
        }
        if(userDay <= 18 ){
            return  0;
        }
        if(userDay > 28 ){
            return 12;
        }
    }
    if(userMonth == 2){
        if(userDay <= 20 ){
          return 1;
        }
        if(userDay >= 21){
            return 2;
        }
    }
    if(userMonth == 3){
        if(userDay <= 19){
            return 2;
        }
        if((userDay >= 20) && (userDay <= 30)){
            return 3;
        }
        if(userDay > 30 ){
            return 12;
        }
    }
    if(userMonth == 4){
        if(userDay <= 20){
            return 3;
        }
        if(userDay >= 21){
            return 4;
        }
    }
    if(userMonth == 5){
        if(userDay <= 20){
            return 4;
        }
        if((userDay >= 21) && (userDay <= 30)){
            return 5;
        }
        if(userDay > 30){
            return 12;
        }

    }
    if(userMonth == 6){
        if(userDay <= 22 ){
            return 5
        }
        if(userDay >= 23){
            return 6
        }
    }
    if(userMonth == 7){
        if(userDay <= 22){
            return 6;
        }
        if(userDay >= 23){
            return 7
        }
    }
    if(userMonth == 8){
        if(userDay <= 22){
            return 7;
        }
        if((userDay >= 23) && (userDay <= 30)){
            return 8;
        }
        if(userDay > 30){
            return 12;
        }
    }
    if(userMonth == 9){
        if(userDay <= 22){
            return 8;
        }
        if(userDay >= 23){
            return 9;
        }
    }
    if(userMonth == 10){
        if(userDay <= 21){
            return 9;
        }
        if((userDay >= 22) && (userDay <= 30)){
            return 10;
        }
        if(userDay > 30){
            return 12
        }
    }
    if(userMonth == 11){
        if(userDay <= 21){
            return 10;
        }
        if(userDay >= 21){
            return 11;
        }
    }
}

function getbirthday(userMonth,userDay) {
    var birthday = "";
    var currentDay = new Date();
    var currentDate = currentDay.getDate();
    var currentMonth = currentDay.getMonth();
    if((userMonth == currentMonth) && (userDay == currentDate)){
        birthday = "Have a great birthday!";
    }
    return birthday;
}