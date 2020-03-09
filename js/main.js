$(document).ready(function(){

     /************************* LOGICA BOTON SUBIR *************************/
    $('.up').hide();

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.up').fadeIn('1000');
        } else {
            $('.up').fadeOut('1000');
        }
    });

    $('.up').click(function(){
        $('body, html').animate({
            scrollTop: 0
        }, 500);
    });
     /************************* END LOGICA BOTON SUBIR *************************/

    /************************* LOGICA ENLACE ACTIVO *************************/

    $("#navegacion li a").each(function() {
        if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
            $(this).parent().addClass('enlace-activo');
        }
    });

    /************************* FIN LOGICA ENLACE ACTIVO *************************/

    /************************* LOGICA ANIMATION *************************/

    /************************* END LOGICA ANIMATION *************************/

    /************************* LOGICA POST *************************/
    
        var posts = [
            {
                title: "Prueba de título 1",
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec elementum dui, nec egestas erat. Integer pharetra lorem in quam tempor, id tempus massa dictum. Pellentesque id risus malesuada, faucibus mauris eu, suscipit eros. In eu diam vel tellus dapibus aliquet. Duis vehicula erat sit amet risus vulputate, sit amet tempor eros tempus. Aliquam imperdiet magna lectus, sit amet rutrum enim faucibus in. Nulla sodales elit erat, ut dictum mi cursus vitae. Nam porttitor mattis est vitae placerat. In id eleifend lorem."
            },
            {
                title: "Prueba de título 2",
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec elementum dui, nec egestas erat. Integer pharetra lorem in quam tempor, id tempus massa dictum. Pellentesque id risus malesuada, faucibus mauris eu, suscipit eros. In eu diam vel tellus dapibus aliquet. Duis vehicula erat sit amet risus vulputate, sit amet tempor eros tempus. Aliquam imperdiet magna lectus, sit amet rutrum enim faucibus in. Nulla sodales elit erat, ut dictum mi cursus vitae. Nam porttitor mattis est vitae placerat. In id eleifend lorem."
            },
        ];
        
        // Creacion de bucle que recorra los posts. Recibe dos valores, el item y el indice. Usamos plantillas de JS y le contatenamos con ${} a cada item la propiedad
        posts.forEach((item, index) => {
            var post = `
            <div>
                <h2>${item.title}</h2>
                <h4>${item.date}</h4>
                    <p>
                        ${item.content}
                    </p>
                    <p>
                    ${item.content}
                    </p>
                <a href="#" class="btn btn-info" id="btn-leer">Leer más</a>
            </div>
            `;
            
            // Incrustamos esos post en el div donde están contenidos del html
            $('#posts').append(post);
        });
    
    /************************* END LOGICA POST *************************/
});