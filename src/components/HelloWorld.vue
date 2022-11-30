<template>
  <h1>{{appTitle}}</h1>
  <h4>{{ counterData.title }}:</h4>
  <div>
    <button @click="decreaseCounter" class="btn">-</button>
    <span class="card">{{ counterData.count }}</span>
    <button @click="increaseCounter" class="btn">+</button>
  </div>
  <p>this counter is: {{oddOrEven}}</p>

  <div class="edit">
    <h4>Edit counter title:</h4>
    <input v-model="counterData.title" type="text">
  </div>


</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
const appTitle = 'My Amazing Counter App'
const counterData = reactive({
  count: 0,
  title: 'My Counter Reactive'
})
const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) return 'even'
  return 'odd'
})
function increaseCounter() {
  counterData.count++
}
function decreaseCounter() {
  counterData.count--
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}

.edit {
  margin-top: 60px;
}
</style>
