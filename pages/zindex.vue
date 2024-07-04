<script setup lang="ts">
import Codeblock from '~/components/Codeblock.vue';
import Note from '~/components/Note.vue';
const example1 = `div {
    width: 100px;
    height: 100px;
    background-color: rgb(0, 255, 85);
    font-size: 48px;
    border: 1px solid white;
    color: black;
    position: fixed;
}

.container {
    width: 200px;
    height: 300px;
    background-color: red;
    font-size: 20px;
    border: 1px solid white;
    color: black;
    position: relative;
}`;

const example2 = `div {
    width: 100px;
    height: 100px;
    background-color: rgb(0, 255, 85);
    font-size: 48px;
    border: 1px solid white;
    color: black;
    position: fixed;
    z-index: 1;
}

.container {
    width: 200px;
    height: 300px;
    background-color: red;
    font-size: 20px;
    border: 1px solid white;
    color: black;
    position: relative;
}`;
</script>

<template>
    <h1>z-index</h1>
    <div class="row">
        <div>
            <section class="example1 container">
                <div>1</div>
            </section>
            <section class="example1 container">
            </section>
        </div>
        <div>
            <section class="example2 container">
                <div>2</div>
            </section>
            <section class="example2 container">
            </section>
        </div>
    </div>
    <div>
        <Codeblock :code="example1" />
        <Codeblock :code="example2" />
        <Note title="Nota">
            <p>
                En el caso que vemos, el div verde con el número 1, pasa detrás del segundo div rojo, esto se debe a
                que el div verde está en un
                contexto de apilamiento.
            </p>
            <p>
                Si agregamos la propiedad <code>z-index</code> al div verde con el número 2, este se mostrará por
                encima de los div's rojo.
            </p>
            <p>
                Para que la propiedad <code>z-index</code> funcione correctamente, se debe generar un contexto de
                apilamiento.
            </p>
            <p>
                Para saber que son los contextos de apilamiento y cuando ocurren, revisa el siguiente material: <a
                    target="_blank"
                    href="https://developer.mozilla.org/es/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context">Contextos
                    de apilamiento</a>
            </p>
        </Note>
    </div>
</template>


<style scoped>
.row {
    display: flex;
    flex-direction: row;
    justify-content: right;
}

.example1.container>div {
    width: 100px;
    height: 100px;
    background-color: rgb(0, 255, 85);
    font-size: 48px;
    border: 1px solid white;
    color: black;
    position: fixed;
}

.example1.container {
    width: 150px;
    height: 300px;
    background-color: red;
    font-size: 20px;
    border: 1px solid white;
    color: black;
    position: relative;
}

.example2.container>div {
    width: 100px;
    height: 100px;
    background-color: rgb(0, 255, 85);
    font-size: 48px;
    border: 1px solid white;
    color: black;
    position: fixed;
    z-index: 1;
}

.example2.container {
    width: 150px;
    height: 300px;
    background-color: red;
    font-size: 20px;
    border: 1px solid white;
    color: black;
    position: relative;
}
</style>