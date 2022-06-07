
function mostrar() {
    let mensaje=document.getElementById('contexto').value;
       alert(mensaje);
    }

/*
    function mostrar(){
    var content_container=document.getElementsByClassName("content-container")[0];

for(let index=0; index<10;index++){
    var aumentar = content_container.cloneNode(true);//devuelve un duplicado del nodo en el que este método fue llamado.
        aumentar.children[0].value = '';
        aumentar.children[0].id = aumentar.children[0].id+=contador;
        aumentar.children[1].id = aumentar.children[1].id+=contador;
        contador++;
        content_container.appendChild(aumentar);
   // document.body.innerHTML=document.body.innerHTML +'<div class="content-container">' + content_container.innerHTML+'</div>';
    
}});

/*
CONBOTON.addEventListener('click', (e)=>{
    window.onload=function(){
    if(!isNaN(parseInt(CONTEXTO.value))){
        mostrar(parseInt(CONTEXTO.value))
    }else{
        alert(CONTEXTO.value);
    }}
});

function mostrar(cantidad){
    let aumentar;
    for(let i = 0; i < cantidad; i++){
        aumentar = CONTENT.cloneNode(true);
        aumentar.children[0].value = '';
        aumentar.children[0].id = aumentar.children[0].id+=contador;
        aumentar.children[1].id = aumentar.children[1].id+=contador;
        contador++;
        CONTAINER.appendChild(aumentar);

    }
}*/
/* 
for (let index = 0; index < 10; index++) {
    console.log("Hola" + index);
    document.querySelector('div.button')
}

window.addEventListener('DOMContentLoaded',function(e){
     var person= new person('SEBAS');
person.printName();
 window.addEventListener('DOMContentLoaded',function(e){
    var input= document.getElementById('input');
    input.addEventListener('change', function(e){
     console.log(e.target.value)
    })
});
/* class person{
    public_constructor(name){
    this.name=name;
        console.log("hola soy una perosn", this.name);
    }
}*/
