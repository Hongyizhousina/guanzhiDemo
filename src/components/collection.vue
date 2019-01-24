<template>
  <div class="collection">
      <div class="heard"><span v-on:click="backOnClcik" ><img src="back.png" alt=""></span></div>
      <div class="collectionContent">
          <ul>
              <li v-for = "(item , index) in collectionAttr" v-bind:key='index' v-on:click="userCollectionBtnClick(index)"><span>{{item.title}}</span><span>{{item.author}}</span></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: 'collection',
    components: {

    },
    data() {
        return{
        }
    },
    computed:{
        collectionAttr(){
            return this.$store.getters.getStoreUserCollectionAttr?this.$store.getters.getStoreUserCollectionAttr:[]
        },
    },
    methods:{
        userCollectionBtnClick:function () {
            console.log(this.$store.getters.getStoreUserCollectionAttr)
        },
        backOnClcik:function(){
            this.$router.push('Read')
        }
    }

}

</script>
<style scoped>
.collection{
    width: 100%;
    height: 100%;
}
.heard{
    display: flex;
    height: 44px;
    flex-direction: row;
    align-items: center;
    /* background-color: aqua; */
}
.heard>span{
    width: 30px;
    height: 30px;
    margin-left: 10px;
}
.heard>span>img{
    width: 100%;
}
.collectionContent{
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
}
.collectionContent>ul{
    flex: 1;
    margin-left: 10px;
    margin-right: 10px;
    overflow: scroll;
}
.collectionContent>ul>li{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    width: 100%;
    height: 44px;
    align-items: center;
}
.collectionContent>ul>li>span:nth-child(2){
    color: grey;
    font-size: 12px;
}
</style>