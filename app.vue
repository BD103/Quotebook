<template>
    <NaiveConfig>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </NaiveConfig>
</template>

<script setup lang="ts">
useHead({
    titleTemplate: (pageName) => pageName ? `${pageName} - Quotebook` : "Quotebook",
})
</script>
