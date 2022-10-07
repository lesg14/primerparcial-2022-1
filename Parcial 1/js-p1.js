function seleccionar_Coctel_1(){
    let botonCoctel1 = document.getElementById('coctel-1')
    botonCoctel1.addEventListener('click', cambiarCoctel) 
}

function cambiarCoctel(){
    let img_pie_foto = document.getElementById('pie-foto')
    spanPieFoto = document.getElementById('pie-foto')

    if(img_pie_foto.checked){
        spanPieFoto.innerHTML = 'Prueba'
    }
    else{
        alert('Seleccione algo')
    }

}