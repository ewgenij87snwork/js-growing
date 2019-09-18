<template>
  <div>
    <navigate></navigate>
    <nuxt/>
  </div>
</template>
<script>
  export default {
    components: {
      'navigate': () => import('@/components/navigate')
    }
  }
</script>
<style lang="sass">

</style>

