document.addEventListener('DOMContentLoaded', () => {
    const inputNuevaTarea = document.getElementById('nuevaTarea');
    const botonAgregarTarea = document.getElementById('agregarTarea');
    const listaTareas = document.getElementById('listaTareas');

    botonAgregarTarea.addEventListener('click', agregarNuevaTarea);
    inputNuevaTarea.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            agregarNuevaTarea();
        }
    });

    function agregarNuevaTarea() {
        const textoTarea = inputNuevaTarea.value.trim();
        if (textoTarea !== '') {
            const nuevaTareaLi = document.createElement('li');
            nuevaTareaLi.innerHTML = `<span>${textoTarea}</span><button class="completar">Completar</button>`;
            listaTareas.appendChild(nuevaTareaLi);
            inputNuevaTarea.value = '';

            const botonCompletar = nuevaTareaLi.querySelector('.completar');
            botonCompletar.addEventListener('click', () => {
                nuevaTareaLi.classList.toggle('completada');
            });
        }
    }
});