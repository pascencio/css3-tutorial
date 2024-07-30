<script setup lang="ts">
import Codeblock from '~/components/Codeblock.vue';
import Note from '~/components/Note.vue';
const example1 = `.pulser {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
    position: relative;
    transition-duration: 2s;
}
    
.pulser:hover {
    scale: 2;
    background-color: blue;
    box-shadow: 0 0 10px blue;
}`;

const example2 = `.pulser {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
    position: relative;
    transition-duration: 2s;
    transition-property: background-color, scale;
}

.pulser:hover {
    scale: 2;
    background-color: blue;
    box-shadow: 0 0 10px blue;
}`;

const example3 = `.pulser {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
    position: relative;
    transition-duration: 2s;
    transition-property: background-color, scale;
    transition-timing-function: ease-in-out; // ease, linear, ease-in, ease-out, ease-in-out
}

.pulser:hover {
    scale: 2;
    background-color: blue;
    box-shadow: 0 0 10px blue;
}`;

const example4 = `.pulser {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
    position: relative;
    transition-duration: 2s;
    transition-property: background-color, scale;
    transition-timing-function: steps(5); // steps(1-5)
}

.pulser:hover {
    scale: 2;
    background-color: blue;
    box-shadow: 0 0 10px blue;
}`;


const example5 = `section {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
}

section>.pulser {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
    position: relative;
    transition-duration: 2s;
    transition-timing-function: ease;
    opacity: 0;
}

section:hover>.pulser {
    opacity: 1;
    background-color: blue;
}

section>.pulser:first-child {
    transition-delay: 0ms;
}

section>.pulser:nth-child(2) {
    transition-delay: 300ms;
}

section>.pulser:last-child {
    transition-delay: 600ms;
}`;

const example6 = `.pulser {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
    position: relative;
    transition: background-color 300ms linear,
    scale 500ms ease,
    box-shadow 900ms ease-in-out;
}

.pulser:hover {
    scale: 2;
    background-color: blue;
    box-shadow: 0 0 10px blue;
}`;

const example7 = `.pulser {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
    position: relative;
    transition: all 300ms ease-in-out; // Transición final
}

.pulser:hover {
    scale: 2;
    background-color: blue;
    transition-duration: 2s; // Transición inicial
}
`

</script>
<template>
    <h1>Transition</h1>
    <Codeblock :code="example1" />
    <div class="example1">
        <div class="pulser"></div>
    </div>
    <Note title="Nota">
        <p>La propiedad <code>transition</code> generalmente debe usarse en el elemento que inicia el estado.</p>
    </Note>
    <Codeblock :code="example2" />
    <div class="example2">
        <div class="pulser"></div>
    </div>
    <Note title="Nota">
        <p>La propiedad <code>transition-property</code> se usa para especificar qué propiedades CSS se deben animar.
        </p>
        <p>Las sombras se cambian de inmediato, pero el resto de las propiedades si se transicionan.</p>
    </Note>
    <Codeblock :code="example3" />
    <div class="example3">
        <div class="pulser"></div>
    </div>
    <Note title="Nota">
        <p>La propiedad <code>transition-timing-function</code> se usa para especificar la velocidad de la transición.
        </p>
    </Note>
    <Codeblock :code="example4" />
    <div class="example4">
        <div class="pulser"></div>
    </div>
    <Note title="Nota">
        <p>La función <code>steps</code> se usa para animar en pasos. En este caso divide los 2 segundos en 5 pasos.
        </p>
        <p>Además de <code>steps</code> existe la función <code>cubic-bezier</code>. La forma más fácil de utilizarla es
            con las herramientas de desarrollo de Chrome</p>
        <img src="~/assets/img/transition/cubic-bezier.png" alt="cubic-bezier">
        <p>Otra herramienta útil es esta pagina: <a href="https://easings.co/" target="_blank">https://easings.co/</a>
        </p>
    </Note>
    <Codeblock :code="example5" />
    <div class="example5">
        <section>
            Hover here!
            <div class="pulser"></div>
            <div class="pulser"></div>
            <div class="pulser"></div>
        </section>
    </div>
    <Note title="Nota">
        <p>La propiedad <code>transition-delay</code> se usa para retrasar el inicio de la transición.</p>
    </Note>
    <Codeblock :code="example6" />
    <div class="example6">
        <div class="pulser"></div>
    </div>
    <Note title="Nota">
        <p>La propiedad <code>transition</code> también se puede usar para definir todas las opciones.</p>
    </Note>
    <Codeblock :code="example7" />
    <div class="example7">
        <div class="pulser"></div>
    </div>
    <Note title="Nota">
        <p>Se pueden definir transiciones iniciales y finales como en el código de ejemplo.</p>
    </Note>
</template>
<style scoped>
.example1 {
    height: 200px;
    width: 200px;
    display: grid;
    justify-content: center;
    align-items: center;
}

.example1>.pulser {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
    position: relative;
    transition-duration: 2s;
}

.example1>.pulser:hover {
    scale: 2;
    background-color: blue;
    box-shadow: 0 0 10px blue;
}

.example2 {
    height: 200px;
    width: 200px;
    display: grid;
    justify-content: center;
    align-items: center;
}

.example2>.pulser {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
    position: relative;
    transition-duration: 2s;
    transition-property: background-color, scale;
}

.example2>.pulser:hover {
    scale: 2;
    background-color: blue;
    box-shadow: 0 0 10px blue;
}

.example3 {
    height: 200px;
    width: 200px;
    display: grid;
    justify-content: center;
    align-items: center;
}

.example3>.pulser {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
    position: relative;
    transition-duration: 2s;
    transition-property: background-color, scale;
    transition-timing-function: ease-in-out;
}

.example3>.pulser:hover {
    scale: 2;
    background-color: blue;
    box-shadow: 0 0 10px blue;
}

.example4 {
    height: 200px;
    width: 200px;
    display: grid;
    justify-content: center;
    align-items: center;
}

.example4>.pulser {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
    position: relative;
    transition-duration: 2s;
    transition-property: background-color, scale;
    transition-timing-function: steps(5);
}

.example4>.pulser:hover {
    scale: 2;
    background-color: blue;
    box-shadow: 0 0 10px blue;
}


.example5>section {
    display: flex;
    width: 500px;
    gap: 10px;
    justify-content: center;
    align-items: center;
}

.example5>section>.pulser {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
    position: relative;
    transition-duration: 2s;
    transition-timing-function: ease;
    transition-delay: 500ms;
    opacity: 0;
}

.example5>section:hover>.pulser {
    opacity: 1;
    background-color: blue;
}

.example5>section>.pulser:first-child {
    transition-delay: 0ms;
}

.example5>section>.pulser:nth-child(2) {
    transition-delay: 300ms;
}

.example5>section>.pulser:last-child {
    transition-delay: 600ms;
}

.example6 {
    height: 200px;
    width: 200px;
    display: grid;
    justify-content: center;
    align-items: center;
}

.example6>.pulser {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
    position: relative;
    transition: background-color 300ms linear,
    scale 500ms ease,
    box-shadow 900ms ease-in-out;
}

.example6>.pulser:hover {
    scale: 2;
    background-color: blue;
    box-shadow: 0 0 10px blue;
}

.example7 {
    height: 200px;
    width: 200px;
    display: grid;
    justify-content: center;
    align-items: center;
}

.example7>.pulser {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
    position: relative;
    transition: all 300ms ease-in-out;
}

.example7>.pulser:hover {
    scale: 2;
    background-color: blue;
    transition-duration: 1s;
}

</style>