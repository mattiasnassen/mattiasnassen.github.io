/* ==========================================================================
   main.js
   ========================================================================== */
var $j = jQuery.noConflict();
var checkpoint = false
function giveAnswer() {
    var phone = total.text();
    if (phone =="446782878377") {
        checkPoint = true;
    }else{
        checkPoint = false;}
    }

$j(function(){

    var dials = $j(".dials ol li");
    var index;
    var number = $j(".number");
    var total;

    dials.click(function(){

        index = dials.index(this);

        if(index == 9){

            number.append("*");

        }else if(index == 10){

            number.append("0");

        }else if(index == 11){

            number.append("#");

        }else if(index == 12){

            number.empty();

        }else if(index == 13){

            total = number.text();
            total = total.slice(0,-1);
            number.empty().append(total);

        }else if(index == 14){

            //add any call action here
                
                giveAnswer();
                if(checkPoint == false){
                var calling = new Audio('mp3/calling.mp3');
                calling.play();
                var failed = new Audio('mp3/failed.mp3');
                failed.play();
                }else{
                var calling = new Audio('mp3/calling.mp3');
                calling.play();
                var audio = new Audio('mp3/dummy.mp3');
                audio.play();
                }
        }else{ number.append(index+1); }
    });

    $j(document).keydown(function(e){

        switch(e.which){

            case 96:

                number.append("0");
                break;

            case 97:

                number.append("1");
                break;

            case 98:

                number.append("2");
                break;

            case 99:

                number.append("3");
                break;

            case 100:

                number.append("4");
                break;

            case 101:

                number.append("5");
                break;

            case 102:

                number.append("6");
                break;

            case 103:

                number.append("7");
                break;

            case 104:

                number.append("8");
                break;

            case 105:

                number.append("9");
                break;

            case 8:

                total = number.text();
                total = total.slice(0,-1);
                number.empty().append(total);
                break;

            case 27:

                number.empty();
                break;

            case 106:

                number.append("*");
                break;

            case 35:

                number.append("#");
                break;

            case 13:

                $('.pad-action').click();
                break;

            default: return;
        }

        e.preventDefault();
    });
});
