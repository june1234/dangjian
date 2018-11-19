<template>
	<div class="index">
		<h4 class="title">首页编辑</h4>
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
			  <el-form-item label="板块">
				<el-select v-model="formInline.plate" placeholder="请选择板块">
			      <el-option
			       v-for="item in options"
			  	    :key="item.value"
			  	    :label="item.label"
			  	    :value="item.value">
			  	  </el-option>
			  	</el-select>
			  </el-form-item>
			  <el-form-item label="时间">
			    <el-date-picker
			      v-model="formInline.startTime"
			      type="date"
			      placeholder="选择开始时间">
			    </el-date-picker>
			    <el-date-picker
			      v-model="formInline.endTime"
			      type="date"
			      placeholder="选择结束日期">
			    </el-date-picker>
			  </el-form-item>
			  <el-form-item label="作者">
			    <el-input v-model="formInline.userName" placeholder="请输入作者"></el-input>
			  </el-form-item>
		</el-form>
		<div class="btn">
			<el-button type="primary">查询</el-button>
			<el-button type="primary" @click="dialogFormVisible = true">添加</el-button>
		</div>
		<el-table
		    :data="tableData"
		    border
		    style="width: 100%">
		    <el-table-column
		      prop="title"
		      label="文章标题"
		      min-width="20%">
		    </el-table-column>
		    <el-table-column
		      prop="userName"
		      label="作者"
		      min-width="20%">
		    </el-table-column>
		    <el-table-column
		      prop="date"
		      label="时间"
		      min-width="20%">
		    </el-table-column>
		    <el-table-column
		      prop="plate"
		      label="所在板块"
		      min-width="20%">
		    </el-table-column>
		    <el-table-column
		      prop="show"
		      label="是否在首页显示"
		      min-width="20%">
		    </el-table-column>
		    <el-table-column
			      fixed="right"
			      label="操作"
			      min-width="20%">
			      <template slot-scope="scope">
			      	<el-button type="text" size="small" @click="dialogFormVisible = true">修改</el-button>
			        <el-button  type="text" size="small">删除</el-button>
			      </template>
			</el-table-column>
		</el-table>
		<el-pagination
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page="currentPage"
	      :page-sizes="[100, 200, 300, 400]"
	      :page-size="100"
	      layout="total, sizes, prev, pager, next, jumper"
	      :total="400">
	    </el-pagination>
        
		<el-dialog :visible.sync="dialogFormVisible">
		  <el-form :model="form">
		    <el-form-item label="板块" :label-width="formLabelWidth">
				<el-select v-model="form.region" placeholder="请选择板块">
			      <el-option
			       v-for="item in options"
			  	    :key="item.value"
			  	    :label="item.label"
			  	    :value="item.value">
			  	  </el-option>
			  	</el-select>
		    </el-form-item>
		    <el-form-item label="标题" :label-width="formLabelWidth">
		      <el-input v-model="form.title" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="作者" :label-width="formLabelWidth">
		      <el-input v-model="form.name" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="时间" :label-width="formLabelWidth">
				<el-date-picker
			      v-model="form.data"
			      type="date"
			      placeholder="选择日期">
			    </el-date-picker>
			</el-form-item>
		    <el-form-item label="图片上传" :label-width="formLabelWidth">
				<el-upload
				  class="upload-demo"
				  action=""
				  :on-preview="handlePreview"
				  :on-remove="handleRemove"
				  :file-list="fileList2"
				  show-file-list
				  list-type="picture">
				  <el-button size="small" type="primary">点击上传</el-button>
				  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload>
			</el-form-item>
		    <el-form-item label="文章上传" :label-width="formLabelWidth">
			    <el-upload
				  class="upload-demo"
				  action="https://jsonplaceholder.typicode.com/posts/"
				  :on-change="handleChange"
				  :file-list="fileList3"
				  show-file-list
				  accept="pdf">
					  <el-button size="small" type="primary">点击上传</el-button>
					  <div slot="tip" class="el-upload__tip">只能上传pdf文件，且不超过500kb</div>
				</el-upload>
		    </el-form-item>	
		    <el-form-item label="是否在首页显示" :label-width="formLabelWidth">
				<el-switch
				  v-model="form.show"
				  active-text="显示"
				  inactive-text="不显示">
				</el-switch>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
		  </div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data(){
         return {
            options: [
               {
		          value: '选项1',
		          label: '大图区'
		        }, {
		          value: '选项2',
		          label: '小图区'
		        }
		    ],
	        formInline:{
				plate:'',
				startTime:'',
				endTime:'',
				userName:''
	        },
	        currentPage:1,
	        tableData: [
	            {
		          title: '牢牢把握宣传思想工作的中心环节',
		          userName: '王云长',
		          date: '2018-1-31',
		          plate:'小图区',
		          show:'显示'
		        }, {
		          title: '加强内容建设 涵养良好网络舆论生态',
		          userName: '孟威',
		          date: '2018-1-31',
				  plate:'小图区',
		          show:'显示'
		        }, {
		          title: '深刻理解加强党对全面依法治国的集中统一领导',
		          userName: '徐立',
		          date: '2018-1-31',
		          plate:'小图区',
		          show:'显示'
		        }, {
		          title: '以坚定的理想信念筑牢精神之基',
		          userName: '田鹏颖',
		          date: '2018-1-31',
		          plate:'小图区',
		          show:'显示'
		        }
		    ],
	        dialogFormVisible: false,
	        form: {
	          name: '',
	          region: '',
	          date1: '',
	          date2: '',
	          delivery: false,
	          type: [],
	          resource: '',
	          desc: '',
	          show:''
	        },
            formLabelWidth: '120px',
	        fileList2: [
		        {
		        	name: 'food.jpeg', 
			        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
		        }, {
			        	name: 'food2.jpeg', 
			        	url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
		         }
	        ],
	        fileList3:[
		        {
		          name: 'food.jpeg',
		          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
		        }, {
		          name: 'food2.jpeg',
		          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
		        }
	        ]
         } 
		},
		methods: {
	      handleSizeChange(val) {
	        console.log(`每页 ${val} 条`);
	      },
	      handleCurrentChange(val) {
	        console.log(`当前页: ${val}`);
	      },
	      handleRemove(file, fileList) {
	        console.log(file, fileList)
	      },
	      handlePreview(file) {
	        console.log(file)
	      },
	      handleChange(file, fileList) {
	        this.fileList3 = fileList.slice(-3);
	      }
	    }
	}
</script>

<style scoped lang="less">
.index{
    	background-color:#fff;
    	padding:20px;
    	.title{
	        color:#6c7996;
	        font-size:30px;
	        line-height:60px;
	        padding-left:20px;
    	}
    	.el-form{
    		margin-top:20px;
    		.el-input,.el-select,.el-date-picker{
    			width: 200px;
    		}
    		.el-form-item{
    			.el-form-item__label{
    				font-size:16px;
    				color:#6c7996;
    			}
    		}
    	}
    	.btn{
           margin-bottom:20px;
           float:right;
           .el-button{
           	margin-right:20px;
           }
    	}
    	.el-pagination{
    		margin:20px;
    	}
}
</style>
