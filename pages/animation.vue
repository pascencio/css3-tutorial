<script lang="ts" setup>
import Codeblock from '~/components/Codeblock.vue';
import Note from '~/components/Note.vue';
const extample1 = `circle {
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 50%;
    animation: move;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}


@keyframes move {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(200px);
    }
}`;

const example2 = `.circle {
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 50%;
    top: 100px;
    left: 100px;
    position: relative;
}

.circle::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: blue;
    border-radius: 50%;
    z-index: -1;
    animation: pulse;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite
}

@keyframes pulse {
    0% {
        opacity: 0;
    }

    50% {
        scale: 2;
        opacity: 0.4;
    }

    100% {
        opacity: 0;
    }
}`;

const example3 = `.circle {
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 50%;
    top: 0px;
    left: 0px;
    animation: move;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

@keyframes move {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(200px);
    }
}`;

const example4 = `.circle {
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 50%;
    animation: move;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    &:hover {
        animation-play-state: paused;
        cursor: progress;
    }
}

@keyframes move {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(200px);
    }
}`;

const example5 = `.circle {
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 50%;
    animation: move;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
}

@keyframes move {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(200px);
    }
}`;

const example6 = `circle {
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 50%;
    animation:
        shrink 1s steps(60) infinite alternate,
        move 1s linear 2s infinite alternate;
}


@keyframes shrink {
    from {
        scale: 1;
    }

    to {
        scale: 0.5;
    }
}

@keyframes move {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(435px);
    }
}`;

</script>
<template>
    <div>
        <h1>Animation</h1>
    </div>
    <Codeblock :code="extample1" />
    <div class="example1">
        <div class="circle">

        </div>
    </div>
    <Note title="Nota">
        <p>En este ejemplo vemos como se anima un elemento css usando <code>@keyframes</code></p>
        <p>Usando <code>from</code> se indica el estado inicial y <code>to</code> para el estado final</p>
        <p>Es importante notar que para que el elemento se anime se debe especificar en la clase con la propiedad
            <code>animation</code>
        </p>
        <p>Las functiones <code>translateX</code> y <code>translateY</code> sirven para mover un elemento en el eje
            <strong>x</strong> e <strong>y</strong> respectivamente.
        </p>
    </Note>
    <Codeblock :code="example2" />
    <div class="example2">
        <div class="circle">

        </div>
    </div>
    <Note title="Nota">
        <p>Aquí vemos un ejemplo de animación de un circulo con un efecto de pulso.</p>
        <p>Para lograr este efecto se usa la pseudo clase <code>::after</code> para crear un circulo con el mismo tamaño
            que el circulo principal</p>
        <p>La propiedad <code>animation-timing-function</code> permite definiri el comportamiento de la animación,
            mientras que <code>animation-iteration-count</code> indica cuantas veces iterará esta</p>
        <p>Se usa la propiedad <code>animation-delay</code> para que la animación comience después de un tiempo
            determinado</p>
    </Note>
    <Codeblock :code="example3" />
    <div class="example3">
        <div class="circle">

        </div>
    </div>
    <Note title="Nota">
        <p>En este ejemplo agregamos la propiedad <code>animation-direction</code> con el valor <code>alternate</code>
            para que el movimiento del circulo haga que vaya y vuelva</p>
        <p>Tambien se puede utilizar el valor <code>reverse</code> o combinarlo con <code>alternate-reverse</code></p>
    </Note>
    <Codeblock :code="example4" />
    <div class="example4">
        <div class="circle">

        </div>
    </div>
    <Note title="Nota">
        <p>En este ejemplo se agrega la propiedad <code>animation-play-state</code> con el valor <code>paused</code>
            para
            que la animación se detenga cuando el circulo es seleccionado</p>
        <p>Además se cambia el cursor del mouse a <code>progress</code> para indicar que el circulo es interactivo</p>
    </Note>
    <Codeblock :code="example5" />
    <div class="example5">
        <div class="circle">

        </div>
    </div>
    <Note title="Nota">
        <p>En este ejemplo se agrega la propiedad <code>animation-fill-mode</code> con el valor <code>forwards</code>
            para que el circulo se quede en la posición final de la animación</p>
        <p>También podemos utilizar el valor <code>both</code> para que tome el estado inicial y final</p>
    </Note>
    <Codeblock :code="example6" />
    <div class="example6">
        <div class="circle">

        </div>
    </div>
    <Note title="Nota">
        <p>En este ejemplo se combinan dos animaciones en un solo elemento</p>
        <p>Para lograr esto se separan las animaciones con una coma <code>,</code> y se especifica el tiempo de
            duración, el tiempo de inicio y el comportamiento de la animación</p>
    </Note>

</template>
<style scoped>
.example1 {
    width: 300px;
    height: 300px;
    background-color: red;
}

.example1 .circle {
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 50%;
    animation: example1_move;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}


@keyframes example1_move {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(200px);
    }
}

.example2 {
    width: 300px;
    height: 300px;
}

.example2 .circle {
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 50%;
    top: 100px;
    left: 100px;
    position: relative;
}

.example2 .circle::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: blue;
    border-radius: 50%;
    z-index: -1;
    animation: example2_pulse;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite
}

@keyframes example2_pulse {
    0% {
        opacity: 0;
    }

    50% {
        scale: 2;
        opacity: 0.4;
    }

    100% {
        opacity: 0;
    }
}

.example3 {
    width: 300px;
    height: 300px;
    background-color: red
}

.example3 .circle {
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 50%;
    top: 0px;
    left: 0px;
    animation: example3_move;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

@keyframes example3_move {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(200px);
    }
}

.example4 {
    width: 300px;
    height: 300px;
    background-color: red;
}

.example4 .circle {
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 50%;
    animation: example4_move;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    &:hover {
        animation-play-state: paused;
        cursor: progress;
    }
}

@keyframes example4_move {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(200px);
    }
}

.example5 {
    width: 300px;
    height: 300px;
    background-color: red;
}

.example5 .circle {
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 50%;
    animation: example5_move;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
}

@keyframes example5_move {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(200px);
    }
}

.example6 {
    width: 300px;
    height: 300px;
    background-color: red;
}

.example6 .circle {
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 50%;
    animation:
        example6_shrink 1s steps(60) infinite alternate,
        example6_move 1s linear 2s infinite alternate;
}


@keyframes example6_shrink {
    from {
        scale: 1;
    }

    to {
        scale: 0.5;
    }
}

@keyframes example6_move {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(435px);
    }
}
</style>