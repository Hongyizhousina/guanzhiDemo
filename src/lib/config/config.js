import { Toast } from 'mint-ui';
const config = {
    hyzAlert:(mes)=>{
        Toast({
            message: mes,
            duration: 1000
        })
    },
    // baseUrl:'http://47.99.207.161/index.php?',?dev=1
    //今天一文
    baseUrl:'https://interface.meiriyiwen.com/article/today?dev=1',
    // ?dev=1&date=
    //特定某天一文
    baseUrlWithDate:'https://interface.meiriyiwen.com/article/day?dev=1&date=',
    // ?dev=1
    //随机一文
    baseUrlWithRandom:'https://interface.meiriyiwen.com/article/random?dev=1',
}
export default config