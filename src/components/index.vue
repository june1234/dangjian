<template>
	<div class="index">
		<div class="carousel">
			<el-row :gutter="40">
				 <el-col :span="24">
				 	<div class="grid-content bg-purple" > 
				 		<img src="../assets/xi.jpg" alt="" />
			 			<a href="javascript:;">
						 	<span>习近平：</span>
					 		<span>在全国组织工作会议上的讲话</span>
			 			</a>
				 	</div>
				 </el-col>
			</el-row>
		</div>
		<div class="part">
			<el-row :gutter="20">
			  <el-col :span="6">
			  	<div class="grid-content bg-purple">
				 		<img src="../assets/dang2.png" alt=""/>
			 			<a href="javascript:;">
					 		<p>牢牢把握宣传思想工作的中心环节</p>
					 		<span>王云长</span>
			 			</a>
			  	</div>
			  </el-col>
			  <el-col :span="6">
			  	<div class="grid-content bg-purple">
				 		<img src="../assets/dang2.png" alt=""/>
			 			<a href="javascript:;">
					 		<p>加强内容建设 涵养良好网络舆论生态</p>
					 		<span>孟威</span>
			 			</a>
			  	</div>
			  </el-col>
			  <el-col :span="6">
			  	<div class="grid-content bg-purple">
				 		<img src="../assets/dang2.png" alt=""/>
			 			<a href="javascript:;">
					 		<p>深刻理解加强党对全面依法治国的集中统一领导</p>
					 		<span>徐立</span>
			 			</a>
			  	</div>
			  </el-col>
			  <el-col :span="6">
			  	<div class="grid-content bg-purple">
				 		<img src="../assets/dang2.png" alt=""/>
			 			<a href="javascript:;">
					 		<p>以坚定的理想信念筑牢精神之基</p>
					 		<span>田鹏颖</span>
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
			  			<li>
			  				<a href="javascript:;" >
			  					<span>加强党对全面依法治国的集中统一领导</span>
			  					<span>徐立</span>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<span>以坚定的理想信念筑牢精神之基</span>
			  					<span>田鹏颖</span>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<span>全媒体时代主流意识形态的传播策略</span>
			  					<span>毕耕</span>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<span>新时代改革开放大旗只会更鲜亮</span>
			  					<span>杨凤城</span>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<span>彰显对马克思主义的原创性贡献</span>
			  					<span>郭广银</span>
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
			  			<li>
			  				<a href="javascript:;" >
			  					<span>加强党对全面依法治国的集中统一领导</span>
			  					<span>徐立</span>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<span>以坚定的理想信念筑牢精神之基</span>
			  					<span>田鹏颖</span>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<span>全媒体时代主流意识形态的传播策略</span>
			  					<span>毕耕</span>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<span>新时代改革开放大旗只会更鲜亮</span>
			  					<span>杨凤城</span>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<span>彰显对马克思主义的原创性贡献</span>
			  					<span>郭广银</span>
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
			  			<li>
			  				<a href="javascript:;" >
			  					<span>加强党对全面依法治国的集中统一领导</span>
			  					<span>徐立</span>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<span>以坚定的理想信念筑牢精神之基</span>
			  					<span>田鹏颖</span>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<span>全媒体时代主流意识形态的传播策略</span>
			  					<span>毕耕</span>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<span>新时代改革开放大旗只会更鲜亮</span>
			  					<span>杨凤城</span>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<span>彰显对马克思主义的原创性贡献</span>
			  					<span>郭广银</span>
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
			  			<li>
			  				<a href="javascript:;" >
			  					<span>加强党对全面依法治国的集中统一领导</span>
			  					<span>徐立</span>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<span>以坚定的理想信念筑牢精神之基</span>
			  					<span>田鹏颖</span>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<span>全媒体时代主流意识形态的传播策略</span>
			  					<span>毕耕</span>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<span>新时代改革开放大旗只会更鲜亮</span>
			  					<span>杨凤城</span>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<span>彰显对马克思主义的原创性贡献</span>
			  					<span>郭广银</span>
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
			  			<li>
			  				<a href="javascript:;" >
			  					<span>加强党对全面依法治国的集中统一领导</span>
			  					<span>徐立</span>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<span>以坚定的理想信念筑牢精神之基</span>
			  					<span>田鹏颖</span>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<span>全媒体时代主流意识形态的传播策略</span>
			  					<span>毕耕</span>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<span>新时代改革开放大旗只会更鲜亮</span>
			  					<span>杨凤城</span>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<span>彰显对马克思主义的原创性贡献</span>
			  					<span>郭广银</span>
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
			  			<li>
			  				<a href="javascript:;">
			  					<span>标题标题标题标题标题</span>
			  					<span>作者</span>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<span>标题标题标题标题标题</span>
			  					<span>作者</span>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<span>标题标题标题标题标题</span>
			  					<span>作者</span>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<span>标题标题标题标题标题</span>
			  					<span>作者</span>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<span>标题标题标题标题标题</span>
			  					<span>作者</span>
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
export default {
	data(){
     return {
     
     } 
	},
	methods:{
		link(val){
            this.$router.push(val)
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
