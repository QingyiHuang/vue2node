var mongoose =require('mongoose')


var Schema =mongoose.Schema
//new mongoose.Schema
var followSchema = new Schema({
    title:{
        type:String,
        require:true,
    },
    detail:{
        type:String,
        require:true
    }
})
module.exports = mongoose.model('follow',followSchema)
/*/var add =  mongoose.model('follow',followSchema)
var Json =[
    {
        title:'connect()',
        detail:'connect() 返回一个状态待定（pending）的连接， 接着我们加上成功提醒和失败'
    },
    {
        title:`北京爱情故事`,
        detail:`北京爱情故事 真的没想到自己会看这样的片子,我一向拒绝爱情故事的拉拉扯扯,很久很久以前看过东京爱情故事,东京爱情故事感觉比较真实,北京爱情...`
    }
]


for(key in Json){
    new add({
        title:Json[key].title,
        detail:Json[key].detail
    }).save()
}*/