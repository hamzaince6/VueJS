<template>
  <div>
    <h1>{{ titleText }}</h1>
  </div>
</template>

<script>
export default {
  props:['titleText'],
    data() {
        return {
      
        }
    },
}
</script>
//Sadece css bu alanda uygula
<style scoped>
  h1{
    color: burlywood;
    font-size: 32px;
    font-weight: 700;
  }
</style>