<template>
	<div class="index">
		<div class="carousel">
			<el-row :gutter="40">
				 <el-col :span="24">
				 	<div class="grid-content bg-purple" > 
				 		<img src="../assets/xi.jpg" alt="" />
			 			<a href="javascript:;" @click="detailed(max.moduleName,max.id)">
						 	<span>{{max.artitleAuthor}}：</span>
					 		<span>{{max.articleTitle}}</span>
			 			</a>
				 	</div>
				 </el-col>
			</el-row>
		</div>
		<div class="part">
			<el-row :gutter="20">
			  <el-col :span="6" v-for="(item,index) in min" :key="index">
			  	<div class="grid-content bg-purple">
				 		<img src="../assets/dang2.png" alt=""/>
			 			<a href="javascript:;" @click="detailed(item.moduleName,item.id)">
					 		<p>{{item.articleTitle}}</p>
					 		<span>{{item.artitleAuthor}}</span>
			 			</a>
			  	</div>
			  </el-col>
			</el-row>
		</div>
		<div class="List">
	        <el-row :gutter="20">
			  <el-col :span="8">
			  	<div class="grid-content bg-purple">
			  		<p >
			  			<span>主席讲话</span>
			  			<a @click="link('/content/speech')">
				  			更多<i class="el-icon-arrow-right"></i>
			  			</a>
			  		</p>
			  		<ul>
			  			<li v-for="(item,index) in content.speech" :key="index" @click="detailed(item.moduleName,item.id)">
			  				<a href="javascript:;" >
			  					<span>{{item.articleTitle}}</span>
			  					<span>{{item.artitleAuthor}}</span>
			  				</a>
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			  <el-col :span="8">
			  	<div class="grid-content bg-purple">
			  		<p>
			  			<span>专题教育</span>
			  			<a @click="link('/specialEducation')">
				  			更多<i class="el-icon-arrow-right"></i>
			  			</a>
			  		</p>
			  		<ul>
			  			<li v-for="(item,index) in content.specialEducation" :key="index" @click="detailed(item.moduleName,item.id)">
			  				<a href="javascript:;" >
			  					<span>{{item.articleTitle}}</span>
			  					<span>{{item.artitleAuthor}}</span>
			  				</a>
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			  <el-col :span="8">
			  	<div class="grid-content bg-purple">
			  		<p>
				  		<span>学习文件</span>
			  			<a @click="link('/learningDocuments')">
				  			更多<i class="el-icon-arrow-right"></i>
			  			</a>
			  		</p>
			  		<ul>
			  			<li v-for="(item,index) in content.learningDocuments" :key="index" @click="detailed(item.moduleName,item.id)">
			  				<a href="javascript:;" >
			  					<span>{{item.articleTitle}}</span>
			  					<span>{{item.artitleAuthor}}</span>
			  				</a>
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			</el-row>
		</div>
		<div class="List">
	        <el-row :gutter="20">
			  <el-col :span="8">
			  	<div class="grid-content bg-purple">
			  		<p>
			  			<span>政策法规</span>
			  			<a @click="link('/policies')">
				  			更多<i class="el-icon-arrow-right"></i>
			  			</a>
			  		</p>
			  		<ul>
			  			<li v-for="(item,index) in content.policies" :key="index" @click="detailed(item.moduleName,item.id)">
			  				<a href="javascript:;" >
			  					<span>{{item.articleTitle}}</span>
			  					<span>{{item.artitleAuthor}}</span>
			  				</a>
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			  <el-col :span="8">
			  	<div class="grid-content bg-purple">
			  		<p >
			  			<span>辅导资料</span>
			  			<a @click="link('/counselingMaterials')">
			  				更多<i class="el-icon-arrow-right"></i>
			  			</a>
			  		</p>
			  		<ul>
			  			<li v-for="(item,index) in content.counselingMaterials" :key="index" @click="detailed(item.moduleName,item.id)">
			  				<a href="javascript:;" >
			  					<span>{{item.articleTitle}}</span>
			  					<span>{{item.artitleAuthor}}</span>
			  				</a>
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			  <el-col :span="8">
			  	<div class="grid-content bg-purple">
			  		<p>
				  		<span>互动平台</span>
				  		<a @click="link('/interactivePlatform')">
				  			更多<i class="el-icon-arrow-right"></i>
				  		</a>
			  		</p>
			  		<ul>
			  			<li v-for="(item,index) in content.interactivePlatform" :key="index" @click="detailed(item.moduleName,item.id)">
			  				<a href="javascript:;" >
			  					<span>{{item.articleTitle}}</span>
			  					<span>{{item.artitleAuthor}}</span>
			  				</a>
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
import {find,findMould} from '@/api/qian/index'
export default {
	data(){
     return {
		 max:{},
		 min:[],
		 content:{},
		 Detailed:{

		 }
     } 
	},
	created(){
       this.listing()
	},
	methods:{
		link(val){
            this.$router.push(val)
		},
		listing(){
			find().then(res=>{
				this.max=res.data.max[0]
				this.min=res.data.min
			})
			findMould().then(res=>{
				this.content=res.data
				console.log(this.content)
			})
		},
        detailed(val,id){
			const moduleName=encodeURI(val)
			console.log(moduleName)
			this.$router.push({
				path:'/PDF',
				query:{id:id,moduleName:moduleName}
			})
		}
	}
}
</script>

<style scoped lang="less">
  .index{
  	 .carousel{
  	 		padding-top:20px;
	  	 	.grid-content{
	  	 		width:100%;
			 	height: 660px;
			 	background-color:#fff;
			 	position:relative;
			 	img{
			 		width:90%;
			 		height:500px;
			 		position: absolute;
			 		left:50%;
			 		margin-left:-432px;
			 		top:20px;
			 		box-shadow:0 50px 80px -40px #304356;

			 	}
			 	a{
			 	 width: 100%;
		 		 color:#304356;
		 		 font-size:30px;
		 		 line-height:80px;
		 		 position: absolute;
		 		 bottom:0;
		 		 left:0; 
		 		 text-align:center;
		 		 span:first-child{
		 		 	font-size:32px;
		 		 }
			 	}
	  	 	}
  	 }
     .part{
	        padding:20px 0;
	        .grid-content{
	        	width:100%;
			  	height: 340px;
			  	position:relative;
			  	background-color:#fff;
			  	img{
			  		width:90%;
			 		height: 200px;
			 		position:absolute;
			 		left:50%;
			 		margin-left:-101px;
			 		top:10px;
			 		box-shadow:0 30px 60px -40px #304356;
			  	}
			  	a{
			  		color:#304356;
			  		font-size:16px;
			  		line-height:30px;
			  		position: absolute;
			  		bottom:0;
			  		left:0; 
			  		padding-left:10px;
			  		padding-top:20px;
			  		span{
			  			font-size:14px;
			  		}
			  	}
	        }
     }
     .List{
	     	padding-bottom:20px;
	     	.grid-content{
	     		p{
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
	                a{
	                	float:right;
	                	color:#888;
	                }
	     		}
	     		ul{
	     			padding-left:10px;
	     			li{
	     				line-height:40px;
	     				a{
	     				 color:#304356;
	     				 span:last-child{
	     				 	float:right;
	     				 	padding-right:5px;
	     				 }
	     				}
	     				a:hover{
	     					color:#de2810;
	     				}
	     				
	     			}
	     		}
	     	}
     }
  }
</style>
