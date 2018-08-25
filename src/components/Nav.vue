<template>
	<div class="nav">
		<ul>
	    	<router-link to="/home" tag="li" active-class="active">
	    		<a href="javascript:;">首页</a>
	    	</router-link>
	    	<router-link to="/follow" tag="li" active-class="active">
	    		<a href="javascript:;">搞笑</a>
	    	</router-link>
	    	<router-link to="/column" tag="li" active-class="active">
	    		<a href="javascript:;">其他</a>
	    	</router-link>
	    </ul>
	</div>
</template>
<script>
	export default{
		//name:'nav'
	}
</script>