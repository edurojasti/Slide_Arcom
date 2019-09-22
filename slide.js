/**
 * @author Rafael rodrigues 
 *  
 *  Slide show Apresentação 
 */

 var intervalo = 5000;

 function slide1(){
    document.getElementById("banner").src = "reportagem.mp4";
    setTimeout("slide2 ()", intervalo);
}
function slide2(){
    document.getElementById("banner").src = "banner2.jpg";
    setTimeout("slide3 ()", intervalo);

}
function slide3(){
    document.getElementById("banner").src = "banner1.jpg";
    setTimeout("slide4 ()", intervalo);

}
function slide4(){
    document.getElementById("banner").src = "banner3.jpg";
    setTimeout("slide1 ()", intervalo);

}

class Aniversariante {
    constructor(foto, nome, dia, mes, setor){
        this.foto = foto
        this.nome = nome
        this.dataNiverDIA = dia
        this.dataNiverMes = mes
        this.setor = setor
    }
}

var pessoa01 = new Aniversariante ('../img_video/felipe_quiroz.jpg', 'Felipe Queiroz', 10 , 11, 'Estoque' )
console.log(pessoa01.nome)


var salvarBD = JSON.stringify(pessoa01)
var recuperaBD = JSON.parse(salvarBD)
console.log(recuperaBD)

// var listaPessoas = [pessoa01, pessoa02, pessoa03]

var lista = document.querySelectorAll('li.itemLista')
var item01 = lista[0]
console.log(item01)
