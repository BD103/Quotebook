<template>
    <NEl tag="span">
        <NuxtLink class="n-link">
            <slot />
        </NuxtLink>
    </NEl>
</template>

<style scoped>
.n-link {
    cursor: pointer;
    transition: color .3s var(--cubic-bezier-ease-in-out), text-decoration-color .3s var(--cubic-bezier-ease-in-out);
    text-decoration: solid var(--primary-color);
    color: var(--primary-color);
}

.n-link:hover {
    color: var(--primary-color-hover);
}
</style>
