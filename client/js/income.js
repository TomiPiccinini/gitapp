import { getRefs, render } from './render.js';
import movementService from './movement-service.js';

let state = {
    movements: [],
    movement: {},
    hasEdit: true,
};

let refs = getRefs(document.body);

/**
 * Obtiene todos los ultimos movimientos disponibles
 **/
async function getIncomes() {
    return movementService.getIncomes();
}

/**
 * Renderiza los libros
 **/
function renderIncomes(state) {
    render('movement-list.html', state, refs.incomes);
}

/**
 * Inicializa la vista income
 **/
async function init() {
    state.movements = await getIncomes();
    renderIncomes(state);
}

function getMovementData() {
    const formData = new FormData(refs.form.firstElementChild);
    const movement = Object.fromEntries(formData);
    movement.type = "income"
    return movement;
}

function Confirmar() {
    var mensaje = confirm("¿Está seguro que desea eliminar el movimiento?");
    if (mensaje) {
    }
    else {
        state.movement = {};
        render('movement-form.html', state, refs.form);
    }
}

// Event Listeners

/**
 * Agrega un movimiento a edicion
 **/
window.editMovement = function (movement) {
    state.movement = movement;
    render('movement-form.html', state, refs.form);
};

/**
 * Cancela una edicion o creación
 **/
window.onCancel = function () {
    state.movement = {};
    render('movement-form.html', state, refs.form);
};

/**
 * Elimina un movimiento
 **/
window.onRemove = async function () {
    Confirmar();
    const movement = getMovementData();
    await movementService.remove(movement);
    state.movement = {};
    render('movement-form.html', state, refs.form);

    window.location.reload();
};

/**
 * Guarda un movimiento
 **/
window.onSave = async function (e) {
    e.stopPropagation();
    e.preventDefault();
    const movement = getMovementData();

    if (movement.id) {
        await movementService.update(movement);
    } else {
        await movementService.create(movement);
    }

    state.movement = {};
    render('movement-form.html', state, refs.form);
    window.location.reload();
};

init();
