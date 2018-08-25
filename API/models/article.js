var mongoose = require('mongoose')



var Schema = mongoose.Schema
var article = new Schema({
    title:
    {
    type:String,
    require:true
    },
    author_face:{
        type:String,
        default:'http://localhost:8000/public/img/noob.png'
    },
    time:{
        type:Date,
        default:Date.now
    },
    content:{
        type:String
    }
})

module.exports = mongoose.model('Article',article)
/*var Json =[
    {
        title:'点绛唇2',
        content:'<p>下片写少女乍见来客的情态。她荡完秋千，正累得不愿动弹，突然花园里闯进来一个陌生人。“见客入来”，她感到惊诧，来不及整理衣装，急忙回避。“袜刬”，指来不及穿鞋子，仅仅穿着袜子走路。“金钗溜”，是说头发松散，金钗下滑坠地，写匆忙惶遽时的表情。词中虽未正面描写这位突然来到的客人是谁，但从词人的反应中可以印证，他定是一位翩翩美少年。“和羞走”三字，把她此时此刻的内心感情和外部动作作了精确的描绘。“和羞”者，含羞也；“走”者，疾走也。然而更妙的是“倚门回首，却把青梅嗅”二句。它以极精湛的笔墨描绘了这位少女怕见又想见、想见又不敢见的微妙心理。最后她只好借“嗅青梅”这一细节掩饰一下自己，以便偷偷地看他几眼。下片以动作写心理</p>'
    },
    {
        title:`点绛唇1`,
        content:`<p>词写少女初次萌动的爱情，真实而生动。上片荡完秋千的精神状态，妙在静中见动。词人不写荡秋千时的欢乐，而是剪取了“蹴罢秋千”以后一刹那间的镜头。此刻全部动作虽已停止，但仍可以想象得出少女在荡秋千时的情景，罗衣轻飏，像燕子一样地在空中飞来飞去，妙在静中见动。“起来慵整纤纤手”，“慵整”二字用得非常恰切，从秋千上下来后，两手有些麻，却又懒得稍微活动一下，写出少女的娇憨。“纤纤手”语出《古诗十九首》：“娥娥红粉妆，纤纤出素手。”借以形容双手的细嫩柔美，同时也点出人物的年纪和身份。“薄汗轻衣透”，她身穿“轻衣”，也就是罗裳初试，由干荡秋千时用力，出了一身薄汗，额上还渗有晶莹的汗珠。这份娇弱美丽的神态恰如在娇嫩柔弱的花枝上缀着一颗颗晶莹的露珠。“露浓花瘦”一语既表明时间是在春天的早晨，地点是在花园也烘托了人物娇美的风貌。整个上片以静写动，以花喻人，生动形象地勾勒出一少女荡完秋千后的神态。</p>`
    }
]

var dd = mongoose.model('Article',article)
for(key in Json){
    new dd({
        title:Json[key].title,
        content:Json[key].content
    }).save()
}*/

