<script setup lang="ts">
import { getCurrentInstance } from 'vue';
import { useBlazor } from './useBlazor';

interface Props {
    title?: string;
    incrementAmount?: number;
    customObject?: any;
    customCallback?: (_: any) => void;
}

const props = defineProps<Props>();
const instance = getCurrentInstance();

const BlazorCounter = useBlazor(instance, 'counter', props)

</script>

<template>
    <BlazorCounter />
</template>
