// javascript

$(function(){
    $("#cr-object-card").load("../../publico/template/templatePadrao.html");
});

function firtsName(e){
    var input = e.target;
    var inputValue = input.value;

    funNameValue = document.getElementsByClassName('cr-name-person')[0];

    funNameValue.innerHTML = inputValue;
}

function showArea(e){
    var radio = e.target;
    var radioValue = radio.value;

    if(radioValue == 0){

        var select = document.getElementById("cr-frame-area");

        $(select).removeClass("cr-invisible");
    }
    if(radioValue == 1){
        var select = document.getElementById("cr-frame-area");
        $(select).addClass("cr-invisible");

        var area = document.getElementsByClassName("cr-name-profession")[0];

        area.innerHTML = 'Prestador de Serviços';
    }
}

function selectArea(){
    var select = document.getElementById('cr-area');

    var areaSelect = select.childNodes[1].childNodes[3];

     var area = document.getElementsByClassName("cr-name-profession")[0];

    area.innerHTML = areaSelect.value;
}

function email(e){
    var input = e.target;
    var inputValue = input.value;

    funNameValue = document.getElementsByClassName('cr-email-company')[0];

    funNameValue.innerHTML = inputValue;
}

function site(e){
    var input = e.target;
    var inputValue = input.value;

    funNameValue = document.getElementsByClassName('cr-site-company')[0];

    funNameValue.innerHTML = inputValue;
}

function imgLogo() {
    var input = document.getElementById("logo");

    var bin = input.files[0];

    var logo = document.getElementById("cr-image-logo");

    logo.src = window.URL.createObjectURL(bin);
}


function imgPhoto() {
    var input = document.getElementById("photo");

    var bin = input.files[0];

    var logo = document.getElementById("cr-image-photo");

    logo.src = window.URL.createObjectURL(bin);
}

function primaryColor(){
    var primaryColor = document.getElementById("primary_color").value;

    var primary = document.getElementsByClassName("cr-background-primary");
    var i;
    for (i = 0; i < primary.length; i++) {
        primary[i].style.background = primaryColor;
    }
}

function secondaryColor(){
    var secondaryColor = document.getElementById("secondary_color").value;

    var secondary = document.getElementsByClassName("cr-background-secondary");
    var i;
    for (i = 0; i < secondary.length; i++) {
        secondary[i].style.background = secondaryColor;
    }
}

function textColor(){
    var textColor = document.getElementById("text_color").value;

    var color = document.getElementsByClassName("cr-text-color");
    var i;
    for (i = 0; i < color.length; i++) {
        color[i].style.color = textColor;
    }
}

function imagemCracha(){
    try{
        var element = document.getElementById("cr-cracha");

        html2canvas(element).then(function(canvas) {
            element.appendChild(canvas);
        });
    
        setTimeout(function(){ 
            var cracha = document.querySelector("canvas");
    
            cracha.style.display= 'none';
    
            var imgSrc    = cracha.toDataURL("image/png");
            //document.write('<img src="'+img+'"/>');
            var img = document.createElement("a");
            img.href = imgSrc;
    
            img.download = 'cracha';
            console.log(imgSrc);
            img.click();
        }, 500);

        swal({
            title: "Sucesso!",
            text: "Crachá gerado com sucesso!",
            icon: "success",
            button: "Voltar",
          });
    }
    catch(e){
        swal({
            title: "Ooops!",
            text: "Algo deu errado... se lascou!",
            icon: "error",
            button: "Voltar",
          });
    }
}

function limpar(){
    $('form').each(function(){
        this.reset();
    });
}

$(document).ready(function(){
    // materialize
    $('select').formSelect();
    //Chamada função
    $('#name').keyup(firtsName);
    $('#cr-area').change(selectArea);
    $('.cr-area-input').click(showArea);
    $('#email').keyup(email);
    $('#site').keyup(site);
    $('#logo').change(imgLogo);
    $('#photo').change(imgPhoto);
    $('#primary_color').change(primaryColor);
    $('#secondary_color').change(secondaryColor);
    $('#text_color').change(textColor);
    $('#cr-gerar').click(imagemCracha);
    $('#cr-limpar').click(limpar);
});