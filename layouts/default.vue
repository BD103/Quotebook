<template>
    <NaiveNavbar :routes="routes">
        <template #start>
            <NaiveIcon name="ph:quotes-duotone" :size="42" />
        </template>

        <template #end>
            <NaiveColorModeSwitch />

            <NuxtLink to="https://github.com/BD103/Quotebook" style="height: 20px; color: unset">
                <NaiveIcon name="ph:github-logo-duotone" />
            </NuxtLink>
        </template>
    </NaiveNavbar>

    <Page>
        <slot />
    </Page>
</template>

<script setup lang="ts">
import type { NavbarRoute } from "@bg-dev/nuxt-naiveui";

const routes: NavbarRoute[] = [
    {
        label: "Quotebook",
        icon: "ph:books-duotone",
        path: "/",
    },
    {
        label: "All Quotes",
        icon: "ph:list-bullets-duotone",
        path: "/quotes",
    },
    {
        label: "Submit",
        icon: "ph:pen-nib-duotone",
        path: "/submit",
    },
];
</script>
