<template>
    <main>
        <NSpace vertical>
            <NSpace justify="center"><NGradientText class="title">Quotebook</NGradientText></NSpace>

            <div style="text-align: center">
                <NText italic depth="2">
                    An app by <NLink to="https://github.com/BD103">BD103</NLink>
                </NText>
            </div>
        </NSpace>
    </main>
</template>

<style scoped>
.title {
    font-size: 10em;
    font-weight: bold;
    text-decoration: underline solid var(--color-orange-0);
    transition: all 0.2s ease;
    cursor: default;
    user-select: none;
}

.title:hover {
    color: var(--color-orange-0);
    text-decoration-color: var(--color-cyan-0);
}
</style>
