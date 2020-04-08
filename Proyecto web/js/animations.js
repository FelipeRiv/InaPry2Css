/* ANIMACIONES SECCION DE MIS PROYECTOS */
/* animacion proyectos centro */
$(document).ready(function(){
 
    // hide our element on page load
    $('.boxProyectCenter').css('opacity', 0);
   
    $('.boxProyectCenter').waypoint(function() {
        $('.boxProyectCenter').addClass('bounceInDown animated slower');
        $('.boxProyectCenter').css('opacity', 1);//le decimos que su opacity que en el css esta en 0 que se ponga en 1 para dejarlo mostrado
    }, { offset: '60%' });
   
  });

/* animacion proyectos derecha */
$(document).ready(function(){
 
    // hide our element on page load
    $('.boxProyectRight').css('opacity', 0);
   
    $('.boxProyectRight').waypoint(function() {
        $('.boxProyectRight').addClass('bounceInRight animated slower delay-1s');
        $('.boxProyectRight').css('opacity', 1);//le decimos que su opacity que en el css esta en 0 que se ponga en 1 para dejarlo mostrado
    }, { offset: '60%' });
   
  });

/* animacion proyectos izquierda*/
$(document).ready(function(){
 
    // hide our element on page load
    $('.boxProyectLeft').css('opacity', 0);

    $('.boxProyectLeft').waypoint(function() {
        $('.boxProyectLeft').addClass('bounceInLeft animated slower delay-1s');
        $('.boxProyectLeft').css('opacity', 1);//le decimos que su opacity que en el css esta en 0 que se ponga en 1 para dejarlo mostrado
    }, { offset: '60%' });
   
  });


/* ANIMACIONES SECCION DE MIS PROYECTOS */










/* CODIGOS EXTRA  */

  // jQuery(function($) {
//     $('.boxProyectCenter').waypoint(function() {
//     // $('.boxProyectCenter').css('opacity', 0); //lo ponemos en 0 si en el style no estuviera en 0
//     $('.boxProyectCenter').addClass('bounceInDown animated slower');
//     $('.boxProyectCenter').css('opacity', 1);//se pone en 1 si en el style.css estuviera en 0
//     },
//     {
//     offset: '70%',
//     triggerOnce: true
//     });
    
//     });