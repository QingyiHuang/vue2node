var mongoose = require('mongoose')


var Schema = mongoose.Schema
var newsSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    detail:{
        type:String,
        required:true
    },
    detailId:{
        type:String,
        required:true,
        default:'5b80bbf6bc2c022dd860a77f'
    }
})
module.exports = mongoose.model('News',newsSchema)
/*var nn = mongoose.model('News',newsSchema)
var json =[{
    title: "火车王又干坏事了",
    detail: "魔兽一直强调团队合作，无论是下副本还是野外做任务，当初第一次玩的时候我和我朋友一晚上才升几级，在之后做任务更是各种扑街被野怪围殴，一路跑尸复活可依然乐此不疲，要是我一个人根本玩不下去。",
    detailId:"5b80bbf6bc2c022dd860a77f"
},{
    title: '最佳打手：妈妈',
    detail:`上榜理由：1、爸爸认怂；2、儿子屈从。经典招数：唾沫横飞，左右开弓，啪啪啪啪！获奖感言：跟我斗？
    点评：输得窝囊发榜人：含恨认输的儿子
    ` ,
    detailId:"5b80bbf6bc2c022dd860a780"
},{
    title: "霍金去了天国",
    detail: "霍金去了天国，天使怜悯道:“非常抱歉霍金先生，您阳寿已尽”\n霍金:“抱歉什么，我高兴还来不及呢？”\n天使:“对您的去世，您还挺满意？”\n霍金:“当然，第一，作为大学教授，高工资，却一分捞不着花，生不如死。第二，说个话都得靠声音合成器，撩妹都很困难。第三，我微博千万的粉丝，王俊凯都来蹭热度，缺不能代言假药广告，不如死了算了！”\n天使:“您那么愿意死，为什么不自杀”\n霍金:“我全身只有特码三个手指头能动，怎么自杀”\n天使:“……”",
    detailId:"5b80bc3a81526c03a49666c8"
}]

for(let key in json){
    new nn({ 
        title:json[key].title,
        detail:json[key].detail,
        detailId:json[key].detailId
    }).save()
}*/



