<template>
<button :disabled="disabled" @click="$emit('click', $event)" class="btn btn-primary btn-block mb-4">
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