<template>
    <main>
        <NH1>All Quotes</NH1>

        <NSpace vertical align="stretch">
            <NCard v-for="quote of data" hoverable style="margin-bottom: 1em">
                <p><q>{{ quote.content }}</q></p>

                <template #action>
                    -
                    <span v-if="quote.character">{{ quote.character.name }}</span>
                    <span v-else>Anonymous</span>

                    <span>, <time :datetime="quote.date.toString()">{{ quote.date.toString() }}</time></span>
                </template>
            </NCard>
        </NSpace>
    </main>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/quotes", {
    query: {},
});
</script>
