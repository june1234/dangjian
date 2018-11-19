<template>
	<div class="policies">
		<p>
	  	  <span>政策法规</span>
  		</p>
		<ul>
			<li>
				<a href="javascript:;">
					<span>作者：</span>
					<span>标题标题</span>
					<span>时间</span>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<span>作者：</span>
					<span>标题标题</span>
					<span>时间</span>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<span>作者：</span>
					<span>标题标题</span>
					<span>时间</span>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<span>作者：</span>
					<span>标题标题</span>
					<span>时间</span>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<span>作者：</span>
					<span>标题标题</span>
					<span>时间</span>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<span>作者：</span>
					<span>标题标题</span>
					<span>时间</span>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<span>作者：</span>
					<span>标题标题</span>
					<span>时间</span>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<span>作者：</span>
					<span>标题标题</span>
					<span>时间</span>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<span>作者：</span>
					<span>标题标题</span>
					<span>时间</span>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<span>作者：</span>
					<span>标题标题</span>
					<span>时间</span>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<span>作者：</span>
					<span>标题标题</span>
					<span>时间</span>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<span>作者：</span>
					<span>标题标题</span>
					<span>时间</span>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<span>作者：</span>
					<span>标题标题</span>
					<span>时间</span>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<span>作者：</span>
					<span>标题标题</span>
					<span>时间</span>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<span>作者：</span>
					<span>标题标题</span>
					<span>时间</span>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<span>作者：</span>
					<span>标题标题</span>
					<span>时间</span>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<span>作者：</span>
					<span>标题标题</span>
					<span>时间</span>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<span>作者：</span>
					<span>标题标题</span>
					<span>时间</span>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<span>作者：</span>
					<span>标题标题</span>
					<span>时间</span>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<span>作者：</span>
					<span>标题标题</span>
					<span>时间</span>
				</a>
			</li>
		</ul>
		<el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page.sync="currentPage"
		      :page-size="100"
		      layout="total, prev, pager, next"
		      :total="1000">
		</el-pagination>			
	</div>
</template>

<script>
	export default {
		data(){	
         return {
         	currentPage:1
         } 
		},
		methods: {
			handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
		    },
		    handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		    }
	    }
	}
</script>

<style scoped lang="less">
 .policies{
 	 	p{  
 			padding-left:20px;
			width: 100%;
			border-bottom: 2px solid #888;
			position: relative;
			height: 32px;
	        span{
	        	border-bottom: 2px solid #de2810;
	        	color: #de2810;
	        	font-size: 20px;
	        	line-height: 30px;
	        	float: left;
	        	font-weight:400;
	        }
		}
		ul{
 			padding:10px;
 			li{
 				line-height:30px;
 				a{
 				 color:#304356;
 				 font-size:20px;
 				 span:last-child{
 				 	float:right;
 				 	padding-right:10px;
 				 }
 				}
 				a:hover{
 					color:#de2810;
 				} 				
 			}
 			li:nth-child(5),
 			li:nth-child(10),
 			li:nth-child(15){
               margin-bottom:20px;
 			}
 		}
 }
</style>
