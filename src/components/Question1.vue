<template>
  <div id="que1-wrapper">
    <div id="header">
      <i class="fas fa-chevron-left"></i>
      <h3>收款帳戶</h3>
    </div>

    <div id="content">
      <div class="item" v-for="(account, index) in accounts" :key="account">
        <input type="radio" name="ss" />
        <div id="list">
          <h3 id="list-bankname"><span v-if="index == 0" class="badge">默認</span>中國郵政XX支行</h3>
          <p id="list-name">阿狸</p>
          <p id="list-phone">6217 8888 8888 9997 789</p>
        </div>
        <div id="actions">
          <span><i class="fas fa-pencil-alt"></i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Question1',
  props: {
    msg: String
  },
  data: ()=> ({
    accounts: [1,2,3,4]
  }),
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.msg, this.$store.state.count)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#que1-wrapper{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  #header{
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0 1px 1px 2px rgb(247,246,251);
    padding: 10px 0;
    z-index: 1;

    svg{
      margin-left: 20px;
      font-size: 30px;
    }

    h3{
      margin: 0;
      flex: 1;
      font-size: 30px;
    }
  }

  #content{
    flex: 1;
    min-height: 1px;
    overflow: auto;
    background: rgb(247,246,251);

    .item{
      display: flex;
      flex-direction: row;
      align-items: center;
      background: #FFF;

      margin-bottom: 30px;
      padding: 40px 30px;

      #list{
        flex: 1;
        margin-left: 28px;

        h3,p{
          margin: 0;
          text-align: left;
        }

        #list-bankname{
          margin-bottom: 28px;
          font-size: 28px;
          color: rgb(170,170,170);
        }


        #list-name,
        #list-phone{
          font-size: 28px;
          color: rgb(51,51,51);
        }

        #list-name{
          margin-bottom: 10px;
        }

        .badge{
          background: rgb(51,51,51);
          color: rgb(255,255,255);
          font-size: 20px;
          border-radius: 4px;
          width: 64px;
          height: 32px;
          line-height: 32px;
          display: inline-block;
          text-align: center;
          margin-right: 30px;
          vertical-align: middle;
        }
      }

      #actions{
        span svg{
          width: 30px;
          height: 27px;
          color: #6e6eff;
        }
      }

      [type=radio]{
        width: 42px;
        height: 42px;
      }
    }
  }

}

</style>
