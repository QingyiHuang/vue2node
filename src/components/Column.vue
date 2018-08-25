<template>
	<div class="content mt40">
	    <div class="newsList">
	    	<ul>
	            <li v-for="(els,index) in dataArray" :key="index">
	            	<a href="http://www.bilibili.com">
	                    <h2>{{els.tittle}}</h2>
	                    <p>{{els.detail}}</p>
	                </a>
	            </li>
	        </ul>
	    </div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				dataArray:[]
			}
		},
		methods:{
			findUsers:function(){
				var that = this
				this.$http.get('http://localhost:8000/news_api').then(function(res){
					that.dataArray = res.data
				}).catch(function(err){
					console.log(err)
				})
			}
		},
		mounted() {
			this.findUsers()
		},
	}
</script>
<style scoped>
	.mt40{
		margin-top:40px;
	}
</style>