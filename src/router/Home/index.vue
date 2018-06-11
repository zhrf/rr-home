<template>
  <div class="home">
      <section class="home-search">
          <div class="home-search-box">
            <input type="text" placeholder="请输入菜名关键词">
          </div>
      </section>

      <section class="home-swipe">
          this is swipe
      </section>
      <section>
          最热门
      </section>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/style/index.less';

    .home {
        .home-search {
            padding-top: 10px;
            .home-search-box {
                height: 30px;
                line-height: 30px;
                padding:0px 16px;
                background: @assist4;
                border-radius: 15px;
                input {
                    .custon-input()
                }
            }
        }
    }
</style>
