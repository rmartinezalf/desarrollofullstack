$(function(){

   //Cambiar opciones de menú

  $("#home a:contains('Inicio')").parent().addClass('active');
  $("#eventos a:contains('Eventos')").parent().addClass('active');
  $("#tienda a:contains('Tienda')").parent().addClass('active');
  $("#registro a:contains('Registro')").parent().addClass('active');
  $("#contacto a:contains('Contacto')").parent().addClass('active');
  //Desplegar menus automaticamente

  $('ul.nav li.dropdown').hover(
      function(){
          //función despliegue
          $('.dropdown-menu', this).fadeIn();
      },
      function(){
          //función de contracción
          $('.dropdown-menu',this ).fadeOut('fast');
      }
    );
});