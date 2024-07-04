<script setup lang="ts">
import Codeblock from '@/components/Codeblock.vue'
const example1 = `p ~ span {
    color: red;
}`

const example2 = `p + span {
    color: red;
}`

const example3 = `a:hover {
    color: red;
}
a:active {
    color: blue;
}`

const example4 = `li:first-child {
    color: red;
}
li:nth-child(2) {
    color: blue;
}
li:last-child {
    color: green;
}`
</script>
<template>
    <h1>Selectors</h1>
    <Codeblock :code="example1" />
    <article class="example1">
        <p>Este es un párrafo</p>
        <span>Este es un span</span><br>
        <span>Este es otro span</span>
    </article>
    <Codeblock :code="example2" />
    <article class="example2">
        <p>Este es un párrafo</p>
        <span>Este es un span</span><br>
        <span>Este es otro span</span>
    </article>
    <Codeblock :code="example3" />
    <article class="example3">
        <a href="#">Este es un link</a>
    </article>
    <Codeblock :code="example4" />
    <article class="example4">
        <ul>
            <li>Este es un item de lista</li>
            <li>Este es otro item de lista</li>
            <li>Este es otro item de lista</li>
        </ul>
    </article>
</template>

<style scoped>
.example1>p~span {
    color: red;
}

.example2>p+span {
    color: red;
}

.example3>a:hover {
    color: red;
}

.example3>a:active {
    color: blue;
}

.example4>*>li:first-child {
    color: red;
}

.example4>*>li:nth-child(2) {
    color: blue;
}

.example4>*>li:last-child {
    color: green;
}
</style>