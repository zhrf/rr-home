<template>
  <div class="footer">
      <div class="footer-item"><img src="./menu1.png" alt=""></div>
      <div class="footer-item"><img src="./menu2.png" alt=""></div>
      <div class="footer-item"><img src="./menu1.png" alt=""></div>
      <div class="footer-item"><img src="./menu1.png" alt=""></div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="less">
    .footer {
        // width: 100%;
        height: 50px;
        display: flex;
        .footer-item {
            flex:1;
            height: 100%;
            background: #fff;
            position: relative;
            img {
                width: 40%;
                margin: auto;
                display: block;
                position: absolute;
                top:0;
                bottom:0;
                left:0;
                right:0;
            }
            // border:1px solid #000;
        }
    }
</style>
