<script setup lang="ts">
defineProps({
    icon: {
        type: String,
        default: 'check_box'
    },
    title: {
        type: String,
        required: true
    }
})
</script>
<template>
    <div class="container">
        <h2><span class="material-symbols-outlined">{{ icon }}</span>{{ title }}</h2>
        <p>
            <slot></slot>
        </p>
    </div>
</template>
<style scoped>
.container {
    margin: 1rem 0;
    border: 0.2rem solid #524601;
    background-color: #f8da32;
    color:#6f5f04;
    padding: 1rem;
    border-radius: 0.5rem;
}

h2 {
    padding: 0px;
    margin: 0px;
}

p {
    padding: 0px;
    margin: 0px;
}
</style>
