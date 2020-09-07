<script>
export default {
  props: {
    content: {
        type: String,
        default: null
    }
  }
}
</script>


<template>
    <div>
        {{ content }}
    </div>
</template>
