$(document).ready(function(){
    $('#img1').on('click', bordures);
    $('#img1').on('click', afficheb1);
    $('#img2').on('click', bordure);
    $('.image1').on('click', bordure2);
    $('.image2').on('click', bordure3);
    $('#img2').on('click', afficheb2);
    $('#textarea').keyup(compter);
    $('#textarea2').keyup(compter2);
    function affiche(){
        $('#champ').slideToggle();
    } 
    function afficheb1(){
        $('#affib1').slideToggle();
        $('#affib2').slideUp();
    }
    function afficheb2(){
        $('#affib2').slideToggle();
        $('#affib1').slideUp();
    } 

    function bordures(){
        $('#img1').toggleClass('bleu');
        $('#img2').removeClass('bleu');
    }
    function bordure(){
        $('#img2').toggleClass('bleu');
        $('#img1').removeClass('bleu');
    }
    function bordure2(){
        $('.image1:first').toggleClass('bleu');
        $('.image1').click(function(){
            $('.image1').removeClass('bleu');
            $(this).toggleClass('bleu');
        });

    }
    function bordure3(){
        $('.image2:first').toggleClass('bleu');
        $('.image2').click(function(){
            $('.image2').removeClass('bleu');
            $(this).toggleClass('bleu');
        });

    }

    function compter(){
            
        
        var nombreCaractere = $('#textarea').val().length;
        var nombreCaractere = 123 - nombreCaractere;

        var msg =  nombreCaractere + ' mots';
        $('#compteur').text(msg);

        if (nombreCaractere < 0) { $('#compteur').addClass("rouge").removeClass("blue"); } else { $('#compteur').removeClass("rouge").addClass("blue"); }

    }
    //    y a surment un moyen d'ecrire la function une seule fois 

    function compter2(){
        var nombreCaractere = $('#textarea2').val().length;
        var nombreCaractere = 123 - nombreCaractere;

        var msg =  nombreCaractere + ' mots';
        $('#compteur2').text(msg);

        if (nombreCaractere < 0) { $('#compteur2').addClass("rouge").removeClass("blue"); } else { $('#compteur2').removeClass("rouge").addClass("blue"); }


    }


})