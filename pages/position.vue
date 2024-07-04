<script setup lang="ts">
import Codeblock from '~/components/Codeblock.vue';
import Note from '~/components/Note.vue';
const example1 = `.container {
    width: 500px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    border: 1px solid white;
    color: black;
    position: static;
}`;

const example2 = `.container {
    width: 150px;
    height: 50px;
    background-color: red;
    font-size: 15px;
    border: 1px solid white;
    color: black;
    position: absolute;
    right: 0;
    top: 0;
}`;
const example3 = `div {
    background-color: green;
    width: 50px;
    height: 50px;
    font-size: 10px;
    border: 1px solid blue;
    color: black;
    inset: 0;
    margin: auto;
    position: absolute;
}

.container {
    width: 500px;
    height: 100px;
    background-color: red;
    border: 1px solid white;
    position: relative;
}`;

const example4 = `.container {
width: 50px;
    height: 50px;
    background-color: red;
    border: 1px solid white;
    position: fixed;
    bottom: 0;
    right: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}`;

const example5 = `div {
    background-color: green;
    width: 50px;
    height: 50px;
    border: 1px solid blue;
    bottom: 0;
    position: sticky;
    align-self: flex-end;
}

.container {
    width: 200px;
    height: 200px;
    background-color: red;
    border: 1px solid white;
    position: relative;
}`;
</script>

<template>
    <h1>Position</h1>
    <Codeblock :code="example1" />
    <section class="example1 container">
        This is a container with position static
    </section>
    <Codeblock :code="example2" />
    <div class="example2">
        <section class="example2 container">
            This is a container with position absolute
        </section>
    </div>
    <Note title="Nota">
        La posición absoluta permite ubicar un elemento dentro de cualquier lugar en el documento (En este ejemplo
        se ha
        envuelto el componente con otro tipo de posición para que no tape otros elementos).
    </Note>
    <Codeblock :code="example3" />
    <section class="example3 container">
        This is a container with position relative
        <div>div</div>
    </section>
    <Note title="Nota">
        La posición relativa se comporta como un contenedor para los elementos posicionados dentro de él. En el
        ejemplo
        se usa la propieda <code>inset</code> más <code>margin</code>, para centrar el div dentro del contenedor.
    </Note>
    <Codeblock :code="example4" />
    <section class="example4 container">
        <span class="material-symbols-outlined">arrow_downward</span>
    </section>
    <Note title="Nota">
        La posición fija permite ubicar un elemento en una posición fija en la ventana del navegador. En este
        ejemplo
        hemos dejado un cuadrado con una flecha hacia abajo en la esquina inferior derecha.
    </Note>
    <Codeblock :code="example5" />
    <div class="example5">
        <section class="example5 container">
            <div>div</div>
        </section>
        <section class="example5 container">
            <div>div</div>
        </section>
    </div>
    <Note title="Nota">
        La posición pegajosa permite que un elemento se quede fijo en una posición mientras se desplaza el scroll. En el ejemplo si se hace escroll hacia arriba los div verdes subiran hasta que termine el contenedor rojo.
    </Note>
</template>

<style scoped>
.example1.container {
    width: 500px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    border: 1px solid white;
    color: black;
    position: static;
}

.example2 {
    width: 100%;
    height: 100px;
    position: relative;
}

.example2.container {
    width: 150px;
    height: 50px;
    background-color: red;
    font-size: 15px;
    border: 1px solid white;
    color: black;
    position: absolute;
    right: 0;
    top: 0;
}

.example3.container>div {
    background-color: green;
    width: 50px;
    height: 50px;
    font-size: 10px;
    border: 1px solid blue;
    color: black;
    inset: 0;
    margin: auto;
    position: absolute;
}

.example3.container {
    width: 500px;
    height: 100px;
    background-color: red;
    border: 1px solid white;
    position: relative;
}

.example4.container {
    width: 50px;
    height: 50px;
    background-color: red;
    border: 1px solid white;
    position: fixed;
    bottom: 0;
    right: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.example5 {
    display: flex;
}

.example5.container>div {
    background-color: green;
    width: 50px;
    height: 50px;
    border: 1px solid blue;
    bottom: 0;
    position: sticky;
    align-self: flex-end;
}

.example5.container {
    width: 200px;
    height: 200px;
    background-color: red;
    border: 1px solid white;
    position: relative;
}
</style>