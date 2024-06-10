<template>
  <div v-show="show" class="overlay">


    <div class="dialog">

      <div class="dialog__content">
      
        <p v-if="color=='green'" style="color: rgb(25, 148, 25);" class="dialog__description" v-text="description" ></p>
        <p v-else style="color: red;" class="dialog__description" v-text="description" ></p>
      </div>
      

      <hr/>

      <div class="dialog__footer">
        <button @click="confirm" class="dialog__confirm">j'ai compris</button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
    props: ['show','description','cancel','color', 'confirm'],
    
}
</script>
<style scoped>
font {
  color: black;
  color: rgb(rgb(25, 148, 25), green, blue);
}
</style>