<script setup lang="ts">
import Codeblock from '~/components/Codeblock.vue';
import Note from '~/components/Note.vue';
const example1 = `span {
  display: inline; /* Valor por defecto */
  height: 100px;
  width: 100px;
  margin: 10px;
  padding: 10px;
  border: 1px solid white;
  background-color: red;
}

div {
  display: block; /* Valor por defect */
  height: 100px;
  width: 100px;
  margin: 10px;
  padding: 10px;
  border: 1px solid white;
  background-color: red;
}`;
const example2 = `.content-box {
    box-sizing: content-box; /* Valor por defecto */
    height: 100px;
    width: 100px;
    margin: 10px;
    padding: 10px;
    border: 1px solid white;
    background-color: red;
}
.border-box {
    box-sizing: border-box;
    height: 100px;
    width: 100px;
    margin: 10px;
    padding: 10px;
    border: 1px solid white;
    background-color: red;
}`;
</script>

<template>
    <div>
        <h1>Box</h1>
        <Codeblock :code="example1" />
        <article class="example1">
            <span>Este es un span</span>
            <div>Este es un div</div>
        </article>
        <Note title="Nota">
            Los estilos inline no tienen propiedad de alto ni ancho.
        </Note>
        <Codeblock :code="example2" />
        <article class="example2">
            <div class="content-box">content-box</div>
            <div class="border-box">border-box</div>
        </article>
        <Note title="Nota">
            El box-sizing: border-box hace que el alto y ancho incluyan el padding y el borde.
        </Note>
    </div>
</template>

<style scoped>
.example1>span {
    display: inline;
    height: 100px;
    width: 100px;
    margin: 10px;
    padding: 10px;
    border: 1px solid white;
    background-color: red;
}

.example1>div {
    display: block;
    height: 100px;
    width: 100px;
    margin: 10px;
    padding: 10px;
    border: 1px solid white;
    background-color: red;
}

.example2>.content-box {
    box-sizing: content-box;
    height: 100px;
    width: 100px;
    margin: 10px;
    padding: 10px;
    border: 1px solid white;
    background-color: red;
}

.example2>.border-box {
    box-sizing: border-box;
    height: 100px;
    width: 100px;
    margin: 10px;
    padding: 10px;
    border: 1px solid white;
    background-color: red;
}
</style>