<template>
    <div class="read" v-bind:class="{rgb210:isrgb210,rgb105:isrgb105,rgb173:isrgb173,rgb253:isrgb253,isNight:isNight}">
        <div class="readheard" v-bind:class="{ left120: isLeftShow,left0:!isLeftShow}"><span><img src="liebiao.png" alt="" v-on:click = 'isLeftShow=!isLeftShow;isFooterShow=false'></span>{{isTitle}}<span v-on:click = 'isRightShow=!isRightShow;isFooterShow=false'><img src="more.png" alt=""></span></div>
        <div class="readContent" v-on:click = 'contentClick' v-bind:class="{ left120: isLeftShow,left0:!isLeftShow }" >
            <div class="writingsHeard"><span v-bind:class="{ font20: isfontsmall,font22:isfontduring, font26:isfontbig }" >{{title}}</span><span v-bind:class="{ font14: isfontsmall,font16:isfontduring, font18:isfontbig }">{{author}}</span></div>
            <div class="writingsContent" v-bind:class="{ font14: isfontsmall,font16:isfontduring, font18:isfontbig }" v-html="content"></div>
            <div class="writingsFoot" v-html="cw"></div>
        </div>
        <transition name='left'>
            <div class="readSetLeft" v-if="isLeftShow" >
                <ul>
                    <li v-for = "(item , index) in setLeftBtnAttr" v-bind:key='index' v-on:click="leftSetBtnClick(index)" ><span><img :src='item.setImage' alt=""></span>{{item.setTitle}}</li>
                </ul>
            </div>
        </transition>

        <transition name='mask'>
            <div class="mask" v-if="isRightShow" v-on:click = 'isRightShow = !isRightShow'></div>
        </transition>
        <transition name="right">
        <div class="readSetRight" v-if="isRightShow" v-on:click = 'isRightShow = !isRightShow' >
            <ul >
                <li v-for = "(item , index) in setRightBtnAttr"  v-bind:key='index' v-on:click="rihghtSetBtnClick(index)" ><span><img :src="item.setImage" alt=""></span>{{item.setTitle}}</li>
            </ul>
        </div>
        </transition>
        <transition name="footer">
        <div  class="setBottomFooter" v-if='isFooterShow'>
            <div class="fontDiv"><span>字号</span><ul>
                <li v-on:click='isfontsmall=true;isfontduring=false;isfontbig=false' v-bind:class = "{blackWhite:isfontsmall}" class="">小</li>
                <li v-on:click='isfontsmall=false;isfontduring=true;isfontbig=false' v-bind:class = "{blackWhite:isfontduring }">中</li>
                <li v-on:click='isfontsmall=false;isfontduring=false;isfontbig=true' v-bind:class = "{blackWhite:isfontbig }">大</li>
            </ul></div>
            <div class="colorDiv"><span>背景</span><ul>
                <li v-on:click='isrgb253=true;isrgb105=false;isrgb173=false;isrgb210=false;isNight=false' ><span class="rgb253"><img :src="rgb253Src" alt="" ></span></li>
                <li v-on:click='isrgb253=false;isrgb105=true;isrgb173=false;isrgb210=false;isNight=false'><span class="rgb105"><img :src="rgb105Src" alt="" ></span></li>
                <li v-on:click='isrgb253=false;isrgb105=false;isrgb173=true;isrgb210=false;isNight=false'><span class="rgb173"><img :src="rgb173Src" alt="" ></span></li>
                <li v-on:click='isrgb253=false;isrgb105=false;isrgb173=false;isrgb210=true;isNight=false'><span class="rgb210"><img :src="rgb210Src" alt="" ></span></li>
            </ul></div>
            <!-- v-model="value" -->
            <div class="nightDiv"><span>夜间</span><mt-switch class="marginR20" change= 'isNightChanger' v-model="isNight" ></mt-switch></div>
        </div>
        </transition>
    </div>
</template>

<script>
import { Switch } from 'mint-ui';
export default {
    name: 'read',
    components: {
        Switch
    },
    data() {
        return {
            isRightShow:false,
            isLeftShow:false,
            isFooterShow:false,
            isfontsmall:false,
            isfontduring:true,
            isfontbig:false,
            isrgb253:true,
            isrgb105:false,
            isrgb173:false,
            isrgb210:false,
            isNight:false,
            scrollTop:0,
        }
    },
    computed:{
        rgb253Src(){
            return this.isrgb253?'select.png':''
        },
        rgb105Src(){
            return this.isrgb105?'select.png':''
        },
        rgb173Src(){
            return this.isrgb173?'select.png':''
        },
        rgb210Src(){
            return this.isrgb210?'select.png':''
        },
        title(){
            return this.$store.getters.getStoreTodayData.title
        },
        content(){
            return this.$store.getters.getStoreTodayData.content
        },
        cw(){
            return '全文完&nbsp&nbsp&nbsp共'+this.$store.getters.getStoreTodayData.wc+'字'
        },
        author(){
            return this.$store.getters.getStoreTodayData.author
        },
        isTitle(){
            return this.scrollTop>60?this.$store.getters.getStoreTodayData.title:''
        },
        setLeftBtnAttr(){
            return this.$store.getters.getStoreSetLeftBtnAttr
        },
        setRightBtnAttr(){
            return this.$store.getters.getStoreSetRightBtnAttr
        }
    },
    methods:{
        rihghtSetBtnClick:function (index) {
            switch (index) {
                case 0://收藏
                    if (this.$store.getters.getStoreUserCollectionAttr.indexOf(this.$store.getters.getStoreTodayData)!=-1) {//存在
                        // console.log(this.$store.getters.getStoreUserCollectionAttr.indexOf(this.$store.getters.getStoreTodayData))
                        this.$store.commit('popUserCollection')
                        console.log(this.$store.getters.getStoreUserCollectionAttr)
                    }else{//不存在
                        this.$store.commit('pushUserCollection')
                    } 
                    break;
                case 1://分享
                    
                    break;
                case 2://前一天
                    this.getLastDayData();
                    // this.$store.commit('setUserIsToday',false);
                    break;
                case 3://随机
                    this.getRandomDayData();
                    // this.$store.commit('setUserIsToday',false);
                    break;
                case 4://后一天
                    this.getNextDayData();
                    // this.$store.commit('setUserIsToday',false);
                    break;
                case 5://今天
                    this.getTodayData();
                    // this.$store.commit('setUserIsToday',true);
                    break;
                default:
                    break;
            }
        },
        leftSetBtnClick:function (index) {
            switch (index) {
                case 0:
                    // alert('我的收藏')
                    this.$router.push('Collection')
                    break;
                case 1:
                    // alert('阅读设置')
                    this.isFooterShow = true;
                    this.isLeftShow = false;
                    break;
                case 2:
                    alert('给个好评')
                    break;
                default:
                    return false;
                    break;
            }
        },
        contentClick:function(){
            if (this.isLeftShow) this.isLeftShow = false;
            if (this.isFooterShow) this.isFooterShow = false;
                return
        },
        // 获取今天的数据
        getTodayData:function(){
             let userData =  new URLSearchParams()
             let that = this
            this.$ajax.get(this.hyzconfig.baseUrl).then((res)=>{
                that.$store.commit('setTodayData',res.data.data)
                that.$store.commit('setUserTodayDate',res.data.data.date.curr)
                this.$store.commit('setUserIsToday',true);
                // console.log(that.$store.getters.getStoreTodayData)
            })
        },
        //获取下一天的数据
        getNextDayData:function(){
            let that = this
            this.$ajax.get(this.hyzconfig.baseUrlWithDate+this.$store.getters.getStoreTodayData.date.next).then((res)=>{
                that.$store.commit('setTodayData',res.data.data)
                if (res.data.data.date.curr==that.$store.getters.getStoreUserTodayDate) return this.$store.commit('setUserIsToday',true);
                this.$store.commit('setUserIsToday',false);
            }).catch(function (res) {
                that.getRandomDayData();
            })
        },
        //获取上一天的数据
        getLastDayData:function () {
            let that = this
            this.$ajax.get(this.hyzconfig.baseUrlWithDate+this.$store.getters.getStoreTodayData.date.prev).then((res)=>{
                that.$store.commit('setTodayData',res.data.data)
                if (res.data.data.date.curr==that.$store.getters.getStoreUserTodayDate) return this.$store.commit('setUserIsToday',true);
                this.$store.commit('setUserIsToday',false);
            }).catch(function (res) {
                // console.log(res);
                that.getRandomDayData();
            })
        },
        //获取随机的数据
        getRandomDayData:function () {
            let that = this
            this.$ajax.get(this.hyzconfig.baseUrlWithRandom).then((res)=>{
                that.$store.commit('setTodayData',res.data.data)
                if (res.data.data.date.curr==that.$store.getters.getStoreUserTodayDate) return this.$store.commit('setUserIsToday',true);
                this.$store.commit('setUserIsToday',false);
            }).catch(function (res) {
                that.getTodayData();
            })
        },
        handleScroll () {
            let readContentElements =  document.getElementsByClassName("readContent")[0]
            let scrollTop = readContentElements.pageYOffset || readContentElements.scrollTop ||readContentElements.scrollTop
            this.scrollTop = scrollTop;
            },
        },
    //VUE初始化完成方法
    mounted:function(){
        if (!this.$store.getters.getStoreTodayData.data.content) {
             this.getTodayData();
        }
        document.getElementsByClassName("readContent")[0].addEventListener('scroll', this.handleScroll)
    }
}

</script>
<style>

.left120{
    transform: translateX(100px);
    transition:all .5s;
}
.left0{
    transform: translateX(0px);
    transition:all .5s;
}
.footer-enter-active, .footer-leave-active {
  transition: all .5s;
  transform: translateY(0px);
}
.footer-enter, .footer-leave-to {
    transform: translateY(200px);
}

.left-enter-active, .left-leave-active {
  transition: all .5s;
  transform: translateX(0px);
}
.left-enter, .left-leave-to {
    transform: translateX(-100px);
}

.mask-enter-active, .mask-leave-active {
  transition: all .5s;
}
.mask-enter, .mask-leave-to {
    opacity: 0;
}
.right-enter-active, .right-leave-active {
  transition: all .5s;
  transform: translateX(0px);
}
.right-enter, .right-leave-to {
    opacity: 0;
    transform: translateX(60px);
}
.read{
    height: 100vh;
    width: 100vw;
}
.mask{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(66, 66, 66, 0.5)
}
.readheard{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 44px;
    /* background-color:whitesmoke; */
    display: flex;
    flex-direction: row;
    font-size: 14px;
    justify-content: space-between;
    align-items: center;
}
.readheard>span:nth-child(1){
    height: 25px;
    width: 25px;
    margin-left: 10px;
}
.readheard>span:nth-child(2){
    height: 25px;
    width: 25px;
    margin-right: 10px;
    
}
.readheard>span>img{
    width: 100%;
}
.readContent{
    position: fixed;
    top: 44px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    overflow: scroll;
    padding-left: 10px;
    padding-right: 10px;
    /* background-color: whitesmoke; */
}
.writingsHeard{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 64px;
    /* background-color:whitesmoke; */
}
.readContent::-webkit-scrollbar {
    display: none;
}
.writingsHeard>span{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-content: center;
}
.writingsHeard>span:nth-child(1){
    /* font-size: 25px; */
    height: 40px;
    border-bottom: 1px solid gainsboro;
}
.writingsHeard>span:nth-child(2){
    /* height: 24px; */
    justify-self: flex-end;
}
.writingsContent{
    border-bottom: 1px solid gainsboro;
    padding-bottom: 20px;
}
.writingsContent>p{
    /* text-align: */
    text-indent:2em; padding:0px; margin:0px; 
    text-align: left;
}
.writingsFoot{
    padding-bottom: 10px;
    padding-top: 10px;
}
.readSetRight{
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    width: 60px;
    background-color: rgba(66, 66, 66);
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
.readSetRight>ul{
    margin-top: 64px;
    width: 60px;
    height: 100%;
    background-color: rgba(66, 66, 66);
    display: flex;
    flex-direction: column;

}
.readSetRight>ul>li{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
}
.readSetRight>ul>li>span{
    width: 24px;
    height: 24px;
}
.readSetRight>ul>li>span>img{
   width: 100%;
}
.readSetLeft{
    position: fixed;
    display: flex;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    background-color: black;
    flex-direction: column;
}
.readSetLeft>ul{
    margin-top: 64px;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;

}
.readSetLeft>ul>li{
    margin-top: 20px;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    color: gray;
}
.readSetLeft>ul>li>span{
    width: 12px;
    height: 12px;
    margin-right: 10px;
    margin-bottom: 5px;
}
.readSetLeft>ul>li>span>img{
   width: 100%;
}
.setBottomFooter{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 200px;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.setBottomFooter>div{
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.fontDiv>ul{
    display: flex;
    flex-direction: row;
    width: 50%;
    justify-content: space-between;
    margin-right: 5px;
    border: 1px solid black;
    border-radius: 3px;
}
.setBottomFooter>div>span{
    margin-left: 10px;
    color: grey;
}
.fontDiv>ul>li{
    flex: 1;
}
.fontDiv>ul>li:nth-child(2){
    border-left: 1px solid black;
    border-right: 1px solid black;
}
.blackWhite{
    background-color: black;
    color: white;
}
.colorDiv>ul{
    display: flex;
    flex-direction: row;
    width: 70%;
    justify-content: space-around;
    margin-right: 5px;
    /* border: 1px solid black; */
    border-radius: 3px;
}
.colorDiv>ul>li{
    flex: 1;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.colorDiv>ul>li>span{
    width: 20px;
    height: 20px;
    border: 1px solid grey;
    border-radius: 10px;
}
.colorDiv>ul>li>span>img{
    width: 20px;
    height: 20px;
    border-radius: 10px;
}
.rgb210{
    background-color: rgb(210, 164, 190) 
}
.rgb105{
    background-color:rgb(105, 214, 188) 
}
.rgb253{
    background-color: rgb(253, 246, 277) 
}
.rgb173{
background-color: rgb(173, 138, 79);
}
.marginR20{
margin-right: 40px;
}
.font22{
    font-size: 22px
}
.font26{
    font-size: 26px
}
.font20{
    font-size: 20px
}
.font14{
    font-size: 14px
}
.font16{
    font-size: 16px
}
.font18{
    font-size: 18px
}
.isNight{
    background-color: black;
    color: rgb(148, 162, 162);
}
</style>