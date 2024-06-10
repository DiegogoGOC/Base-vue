<template>
  <div v-show="show" class="overlay">


    <div class="dialog">

      <div class="dialog__content">
        <h2 class="dialog__title" v-text="title"></h2>
        <p class="dialog__description" v-text="description"></p>
        <p>realiser le : </p>
        <time datetime="2024-04-22T22:06+14:00" v-text="date"></time>
        <br>
        <a :href="lien" target="_blank"><img src="../img/github.png"  alt="lien github"></a>
      </div>

      <hr/>

      <div class="dialog__footer">
        <button @click="confirm" class="dialog__confirm">X</button>
      </div>

    </div>

  </div>
</template>

<script>
  /*const lien2= "https://github.com/DiegogoGOC/"+ props.title;*/
export default {
    props: ['show', 'title', 'description',   "date",  'lien','lienmaj', 'cancel', 'confirm'],
    
    
}
</script>
<style scoped>
font {
  color: black;
}
img {
  width: 10%;
  height:auto;
  
}
</style>