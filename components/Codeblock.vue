<script setup lang="ts">
const props = defineProps({
    code: {
        type: String,
        required: true
    }
})
const linesCount = computed(() => props.code.split('\n').length)
const lines = computed(() => props.code.split('\n'))
</script>
<template>
    <div class="container">
        <ul class="lines">
            <li v-for="line in linesCount" :key="line">{{ line }}</li>
        </ul>
        <ul class="code">
            <li v-for="line in lines" :key="line">
                <pre v-if="line.trim() != ''">{{ line }}</pre>
                <span v-else>&nbsp;</span>
            </li>
        </ul>
    </div>
</template>
<style scoped>
.container {
    margin: 1rem 0;
    padding: 1em;
    display: flex;
    flex-direction: row;
    background-color: #2d4b67;
    overflow: auto;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.lines li {
    padding: 0 1em;
    font-family: "Source Code Pro", monospace;
    color: #a0a0a0;
    background-color: #2d4b67;
    cursor: pointer;
}

.code pre {
    font-family: "Source Code Pro", monospace;
    color: white;
    margin: 0;
    padding: 0;
}
</style>