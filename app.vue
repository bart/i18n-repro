<script setup lang="ts">
const handleFetch = async () => {
  await $fetch("/api/translate");
}
</script>

<template>
  <div>
    <button @click="handleFetch">Click to fetch</button>
  </div>
</template>
