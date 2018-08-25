<template>
	<div class="banner">
        <ul class="clearfix">
            <li><img src="../assets/images/img_1.jpg" alt=""/>
            	<div class="text-box">
                	<h2>他说花莲市有一头大象</h2>
                    <p>它总是坐在那一动不动，很多人围观</p>
                </div>
            </li>
            <li><img src="../assets/images/img_2.jpg" alt=""/>
            	<div class="text-box">
                	<h2>大象为何席地而坐</h2>
                    <p>我走近了，我想笑，但是我更想抱着他</p>
                </div>
            </li>
            <li><img src="../assets/images/img_3.jpg" alt=""/>
            	<div class="text-box">
                	<h2>它断了条退</h2>
                    <p>它用鼻子勾住我，然后用力一拉，一脚踩在我胸口上</p>
                </div>
            </li>
            <li><img src="../assets/images/img_4.jpg" alt=""/>
            	<div class="text-box">
                	<h2>他说花莲市有一头大象</h2>
                    <p>它总是坐在那一动不动，很多人围观</p>
                </div>
            </li>
        </ul>
        <ol>
            <li class="active"></li>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </div>
</template>
<script>
	export default {
		mounted(){
			this.fnSlider();
		},
		watch:{
			// '$route':function(){
			// 	alert(1);
			// }
		},
		methods:{
			fnSlider(){
				$(function (){
					var mySwipe=new Swipe($('.banner')[0],{
						auto:2000,
						continuous:true,
						stopPropation:true,
						callback:function (index,element){
							$('.banner ol li').removeClass('active');
							$('.banner ol li').eq(index).addClass('active');
						}
					});
				});
			}
		}
	}
</script>