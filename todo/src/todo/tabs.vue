<template>
  <div>
    <!--按钮行  -->
    <span class="left">2 items left</span>
    <span class="tabs">
      <span 
      v-for="state in states" 
      :key="state"
      :class="[state,filter === state? 'actived' : '']"
      @click="toggleFilter(state)"
      >
      {{state}}
      </span>
    </span>
    <span @click="clearAllCompleted">
      Clear completed
    </span>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type:String,
      required:true
    }
  },
  data () {
    return {
      states:[
        "all","active","completed"
      ]
    }
  },
  methods: {
    toggleFilter() {},
    clearAllCompleted() {}
  }
}
</script>

<style>

</style>
