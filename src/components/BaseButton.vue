<template>
<button class="button" :disabled="disabled" @click="$emit('click', $event)">
  <slot>Text</slot>
</button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        disabled: {
          type: Boolean,
          default: true
        }
    }
}
</script>