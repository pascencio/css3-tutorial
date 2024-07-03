<script setup lang="ts">
import Codeblock from '~/components/Codeblock.vue';
import Note from '~/components/Note.vue';
const example1 = `.container {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 48px;
    border: 1px solid white;
    color: black;
    overflow: visible; /*Valor por defecto*/
}`;
const example2 = `.container {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 48px;
    border: 1px solid white;
    color: black;
    overflow: hidden; /*Ocultar el contenido que se sale del contenedor*/
}`
const example3 = `.container {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 48px;
    border: 1px solid white;
    color: black;
    overflow: auto; /*Mostrar barras de desplazamiento de forma automátic (mejor alternativa que scroll)*/
}`
</script>
<template>
    <div>
        <h1>Desbordamiento</h1>
        <Codeblock :code="example1" />
        <section class="example1 container">
            CCS IS AWESOME
        </section>
        <Note title="Nota">
            El valor por defecto de la propiedad <code>overflow</code> es <code>visible</code>.
            Si el contenido es más grande que el contenedor, se mostrará fuera de él.
        </Note>
        <Codeblock :code="example2" />
        <section class="example2 container">
            CCS IS AWESOME
        </section>
        <Codeblock :code="example3" />
        <section class="example3 container">
            CCS IS AWESOME
        </section>
    </div>
</template>

<style scoped>
.example1 {
    margin: 0 0 100px 0;
}

.example1.container {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 48px;
    border: 1px solid white;
    color: black;
    overflow: visible;
}

.example2.container {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 48px;
    border: 1px solid white;
    color: black;
    overflow: hidden;
}

.example3.container {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 48px;
    border: 1px solid white;
    color: black;
    overflow: auto;
}
</style>