<template>
    <main>
        <NH1>Submit</NH1>

        <NForm ref="formRef" :model="model" :rules="rules" @submit.prevent="() => onSubmit(handleSubmit)">
            <NFormItem label="Quote" path="quote">
                <NInput v-model:value="model.quote" maxlength="500" show-count clearable />
            </NFormItem>

            <NFormItem label="Character" path="character">
                <NSelect
                    v-model:value="model.character"
                    :options="members?.map(x => ({ label: x.name, value: x.id }))"
                    :loading="membersPending"
                    filterable
                    clearable
                />
            </NFormItem>

            <NButton attr-type="submit" :loading="pending" :disabled="pending || !edited">Submit</NButton>
        </NForm>
    </main>
</template>

<script setup lang="ts">
const model = ref<{
    quote?: string,
    character?: string,
}>({});

const { formRef, rules, pending, onSubmit, edited } = useNaiveForm(model);

const { data: members, pending: membersPending } = await useLazyFetch("/api/characters");

rules.value = {
    quote: [
        {
            required: true,
            message: "A quote is required.",
        },
        {
            message: "The quote cannot be larger than 500 characters.",
            validator: () => (model.value.quote?.length ?? 0) <= 500,
        },
    ],
    character: [],
};

async function handleSubmit() {
    await $fetch("/api/quote/new", {
        method: "post",
        body: { content: model.value.quote, character: model.value.character },
    });

    await navigateTo("/quotes");
}
</script>
