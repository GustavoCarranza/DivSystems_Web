(function(){
    const integrantes = [...document.querySelectorAll('.jefes_cuerpo')];
    const derecha = document.querySelector('#derecha');
    const izquierda = document.querySelector('#izquierda');
    let valor;

    derecha.addEventListener('click', ()=>{
        cambiarposicion(1);
    });

    izquierda.addEventListener('click', ()=>{
        cambiarposicion(-1);
    });

    const cambiarposicion = (add)=>{
        const jefesactuales = document.querySelector('.jefes_cuerpo--show').dataset.id;
        valor = Number(jefesactuales);
        valor+= add;

        integrantes[Number(jefesactuales)-1].classList.remove('jefes_cuerpo--show');
        if(valor === integrantes.length + 1 || valor === 0){
            valor = valor === 0 ? integrantes.length : 1;
        }

        integrantes[valor - 1].classList.add('jefes_cuerpo--show');

    }

})();