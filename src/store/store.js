import Vuex from "vuex";
import Vue from 'vue';

Vue.use(Vuex)
// const userLogin = {
    
// }
const setLeftBtnAttr=[
    {setTitle:'我的收藏',setImage:'shoucang.png',},
    {setTitle:'阅读设置',setImage:'set.png',},
    {setTitle:'给个好评',setImage:'haoping.png',},
]
const setRightBtnAttr1=[
    {setTitle:'收藏',setImage:'xihuan_g.png',},
    {setTitle:'分享',setImage:'fenxiang.png',},
    {setTitle:'前一天',setImage:'last.png',},
    {setTitle:'随机',setImage:'suiji.png',},
    {setTitle:'后一天',setImage:'next.png',},
    {setTitle:'今日',setImage:'shizhong.png',},
]
const setRightBtnAttrIsToDay1=[
    {setTitle:'收藏',setImage:'xihuan_g.png',},
    {setTitle:'分享',setImage:'fenxiang.png',},
    {setTitle:'前一天',setImage:'last.png',},
    {setTitle:'随机',setImage:'suiji.png',},
]
const setRightBtnAttr2=[
    {setTitle:'收藏',setImage:'xihuan_r.png',},
    {setTitle:'分享',setImage:'fenxiang.png',},
    {setTitle:'前一天',setImage:'last.png',},
    {setTitle:'随机',setImage:'suiji.png',},
    {setTitle:'后一天',setImage:'next.png',},
    {setTitle:'今日',setImage:'shizhong.png',},
]
const setRightBtnAttrIsToDay2=[
    {setTitle:'收藏',setImage:'xihuan_r.png',},
    {setTitle:'分享',setImage:'fenxiang.png',},
    {setTitle:'前一天',setImage:'last.png',},
    {setTitle:'随机',setImage:'suiji.png',},
]
const userCollectionAttr = localStorage.userCollection?JSON.parse(localStorage.userCollection):{userCollectionAttr:[]};

const store = new Vuex.Store({
    state:{
        userToken:'',
        setLeftBtnAttr:setLeftBtnAttr,
        setRightBtnAttr:setRightBtnAttr1,
        setRightBtnAttrIsToDay:setRightBtnAttrIsToDay1,
        userCollectionAttr:userCollectionAttr.userCollectionAttr,
        todayDate:'',
        todayData:{
            data: {
              date: {
                curr: "",//今日日期，yyyyMMdd 格式
                prev: "",//昨日日期，yyyyMMdd 格式
                next: ""//明日日期，yyyyMMdd 格式
              },
              author: "",//作者
              title: "",//标题
              digest: "",
              content: "",
              wc: 0,
            }
          },
          isToday:true,
        // baseurl:baseUrl,
    },
    mutations: {
        //自定义触发mutations里函数的方法，state与store 实例具有相同方法和属性
        //组件使用commit来触发 mutations
        increment (state) {
            state.count++;
        },
        setUserToken(state,data){
            state.userToken = data
        },
        setTodayData(state,data){
            state.todayData = data
        },
        setUserIsToday(state,isToday){
            state.isToday = isToday
        },
        setUserTodayDate(state,todayDate){
            state.todayDate = todayDate
            if (state.userCollectionAttr.indexOf(state.todayData)!=-1){//存在
                state.setRightBtnAttr  = setRightBtnAttr2
                state.setRightBtnAttrIsToDay =setRightBtnAttrIsToDay2
            }else{//不存在
                state.setRightBtnAttr  = setRightBtnAttr1
                state.setRightBtnAttrIsToDay =setRightBtnAttrIsToDay1
            }
            
        },
        pushUserCollection(state){
            state.userCollectionAttr.push(state.todayData)
            let  userCollectionAttrJson = {
                userCollectionAttr:state.userCollectionAttr
            }
            if (state.userCollectionAttr.indexOf(state.todayData)!=-1){//存在
                state.setRightBtnAttr  = setRightBtnAttr2
                state.setRightBtnAttrIsToDay =setRightBtnAttrIsToDay2
            }else{//不存在
                state.setRightBtnAttr  = setRightBtnAttr1
                state.setRightBtnAttrIsToDay =setRightBtnAttrIsToDay1
            }
            localStorage.userCollection = JSON.stringify(userCollectionAttrJson)
        },
        popUserCollection(state,num){
            // arr.splice(2,1)
            state.userCollectionAttr.splice(num,1)
            let  userCollectionAttrJson = {
                userCollectionAttr:state.userCollectionAttr
            }
            if (state.userCollectionAttr.indexOf(state.todayData)!=-1){//存在
                state.setRightBtnAttr  = setRightBtnAttr2
                state.setRightBtnAttrIsToDay =setRightBtnAttrIsToDay2
            }else{//不存在
                state.setRightBtnAttr  = setRightBtnAttr1
                state.setRightBtnAttrIsToDay =setRightBtnAttrIsToDay1
            }
            if (state.userCollectionAttr.length) {
                localStorage.userCollection = JSON.stringify(userCollectionAttrJson)
            }else{
                localStorage.userCollection = ''
            }
            
        }
    },
    actions:{
        //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
        //组件使用dispatch来触发 actions
        hideFooter(context) {  
            context.commit('increment','num');
        }
        // userLogin(context,data){
        //     let userData =  new URLSearchParams()
        //     userData.append('email',data.userEmail)
        //     userData.append('password',data.userPassword)
        //     axios.post(baseUrl+'m=user&a=userLogin',userData).then((response)=>{context.commit('setUserToken',response.data);})
            
        // }
    },
    getters:{
        getStoreCount(state){
            return state.count
        },
        getStoreTodayData(state){
            return state.todayData
        },
        getStoreSetLeftBtnAttr(state){
            return state.setLeftBtnAttr
        },
        getStoreUserTodayDate(state){
            return state.todayDate
        },
        getStoreSetRightBtnAttr(state){
            return state.isToday?state.setRightBtnAttrIsToDay:state.setRightBtnAttr
        },
        getStoreUserCollectionAttr(state){
            return state.userCollectionAttr
        },
    }
    
})
export default store