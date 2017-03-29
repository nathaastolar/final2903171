//window.addEventListener('load',function(){
//  var registrar = document.getElementById('registrar');
//registrar.addEventListener('click',function(){
//  var nombre = document.getElementById('nombre');
//  var apellido = document.getElementById('apellido');
//  var correo = document.getElementById('correo');
//  var contraseña = document.getElementById('contraseña');
//})
//})
//  window.location ="index.html";
//
window.onload=function(){
	document.getElementById("formulario").onsubmit=function(e){
		e.preventDefault();
	}
  function datos(nombre,apellido,correo,contraseña){
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.contraseña = contraseña;
  };
    var datos = [];

document.getElementById("registrar").addEventListener("click",function()){
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var correo = document.getElementById("correo").value;
  var contraseña = document.getElementById("contraseña").value;

    if(name == 0 || apellido == 0 || correo == 0 || contraseña == 0){
      alert("Este campo debe ser llenado");
    };
    else if(name != name.match(/^[a-zA-Z]*$/) || apellido != name.match(/^[a-zA-Z]*$/) ){
      alert("Este campo solo admite letras")b
    };
    if(correo != correo.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/)){
      alert("Este campo debe ser llenado correctamente!")
    }
    window.location = "datos.html";
    }

document.getElementById("contenedor").addEventListener("click",function()){
  function print(){
    imprimir.innerHTML = "Nombre: " +  nombre.value + "Apellido: " + apellido.value + "Correo: " + correo.value  + "Contraseña:"  + contraseña.value;
}
}
