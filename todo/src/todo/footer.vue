<template>
  <div>
    <span id="foot">
      Written by {{author}}
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      author:"Johnny"
    }
  }
}
</script>

<style lang="stylus" scoped>
#foot
  color black
</style>
