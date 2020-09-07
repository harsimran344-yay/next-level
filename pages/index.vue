<script>
import { ContentMixin } from '~/mixins/content'

import ImageComponent from '~/components/Image.vue'
import TextComponent from '~/components/Text.vue'

export default {
  mixins: [ContentMixin],
  components: {
    ImageComponent,
    TextComponent
  }
}
</script>

<template>
  <div class="p-2">
    <ImageComponent />
    <TextComponent :content="content.description" />
  </div>
</template>
