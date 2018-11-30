<template>
  <div class="content">
    <h4 class="title">板块编辑</h4>
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
    >
      <el-form-item label="板块">
        <el-select
          v-model="formInline.moduleId"
          placeholder="请选择板块"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间">
        <el-date-picker
          v-model="formInline.artitleTime"
          type="date"
          placeholder="选择开始时间"
        >
        </el-date-picker>
        <el-date-picker
          v-model="formInline.endTime"
          type="date"
          placeholder="选择结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="作者">
        <el-input
          v-model="formInline.artitleAuthor"
          placeholder="请输入作者"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="btn">
      <el-button
        type="primary"
        @click="losting()"
      >查询</el-button>
      <el-button
        type="primary"
        @click="dialogFormVisible = true"
      >添加</el-button>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="articleTitle"
        label="文章标题"
        min-width="20%"
      >
      </el-table-column>
      <el-table-column
        prop="artitleAuthor"
        label="作者"
        min-width="20%"
      >
      </el-table-column>
      <el-table-column
        prop="artitleTime"
        label="时间"
        min-width="20%"
      >
      </el-table-column>
      <el-table-column
        prop="moduleName"
        label="所在板块"
        min-width="20%"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="20%"
      >
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="modify(scope.row)"
          >修改</el-button>
          <el-button
            type="text"
            size="small"
            @click="deleted(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="formInline.pageNum"
      :page-sizes="[5,10, 15, 20]"
      :page-size="formInline.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
    <el-dialog :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item
          label="板块"
          :label-width="formLabelWidth"
        >
          <el-select
            v-model="form.moduleId"
            placeholder="请选择板块"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="标题"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.articleTitle"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="作者"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.artitleAuthor"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="时间"
          :label-width="formLabelWidth"
        >
          <el-date-picker
            v-model="form.artitleTime"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item
          label="文章上传"
          :label-width="formLabelWidth"
        >
          <el-upload
            class="upload-demo"
            action=""
            :on-change="handleChange"
            :file-list="fileList3"
            :limit="1"
            show-file-list
            accept="pdf"
            :auto-upload="false"
          >
            <el-button
              size="small"
              type="primary"
            >点击上传</el-button>
            <div
              slot="tip"
              class="el-upload__tip"
            >只能上传pdf文件，且不超过2M</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="Verify()"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { findByPage, add, update, deleteId } from "@/api/background/content";
import { dateFtt } from "@/api/common";
export default {
  data() {
    return {
      options: [
        {
          value: 1,
          label: "主席讲话"
        },
        {
          value: 2,
          label: "专题教育"
        },
        {
          value: 3,
          label: "学习文件"
        },
        {
          value: 4,
          label: "政策法规"
        },
        {
          value: 5,
          label: "辅导资料"
        },
        {
          value: 6,
          label: "互动平台"
        }
      ],
      formInline: {
        moduleId: "",
        artitleTime: "",
        endTime: "",
        artitleAuthor: "",
        pageSize: 5,
        pageNum: 1
      },
      total: 0,
      tableData: [],
      dialogFormVisible: false,
      form: {
        articleTitle: "",
        artitleAuthor: "",
        artitleTime: "",
        moduleId: 1,
        pdfUrl:[]
      },
      formLabelWidth: "120px",
      fileList3: []
    };
  },
  created() {
    this.losting();
  },
  methods: {
    losting() {
      findByPage(this.formInline).then(res => {
        this.total = res.data.total;
        this.tableData = res.data.list;
        console.log(res)
        for (const i in this.tableData) {
          this.tableData[i].artitleTime = dateFtt(
            this.tableData[i].artitleTime
          );
        }
      });
    },
    deleted(row) {
      deleteId(row.id).then(res => {
        this.losting();
      });
    },
    add() {
      console.log(this.form)
      this.form.artitleTime=dateFtt(this.form.artitleTime)
      const formData=new FormData()
      formData.append("articleTitle",this.form.articleTitle)
      formData.append("artitleAuthor",this.form.artitleAuthor)
      formData.append("artitleTime",this.form.artitleTime)
      formData.append("moduleId",this.form.moduleId)
      formData.append("pdfUrl",this.form.pdfUrl)
      add(formData).then(res=>{
        console.log(res)
        this.losting()
      })
    },
    update() {
        this.form.artitleTime=dateFtt(this.form.artitleTime)
        const formData=new FormData()
        formData.append("id",this.form.id)
        formData.append("articleTitle",this.form.articleTitle)
        formData.append("artitleAuthor",this.form.artitleAuthor)
        formData.append("artitleTime",this.form.artitleTime)
        formData.append("moduleId",this.form.moduleId)
        formData.append("pdfUrl",this.form.pdfUrl)
       update(formData).then(res=>{
         console.log(res)
         this.losting()
         this.form
        this.form.articleTitle= "",
        this.form.artitleAuthor= "",
        this.form.artitleTime="",
        this.form.moduleId=1,
        this.form.pdfUrl=[]
       })
    },
    Verify() {
      this.dialogFormVisible = false;
      console.log(this.form);
      if (this.form.id) {
        this.update();
      } else {
        this.add();
      }
    },
    modify(row){
      this.dialogFormVisible = true
      this.form=row
    },
    handleChange(file, fileList) {
     const isLt2M = file.size / 1024 / 1024 < 2;
      this.fileList3=fileList
      console.log(file)
      this.form.pdfUrl=file.raw
      return  !isLt2M;
    },
    handleSizeChange(val) {
      this.formInline.pageSize = val;
      this.losting();
    },
    handleCurrentChange(val) {
      this.formInline.pageNum = val;
      this.losting();
    }
  }
};
</script>

<style scoped lang="less">
.content {
  background-color: #fff;
  padding: 20px;
  .title {
    color: #6c7996;
    font-size: 30px;
    line-height: 60px;
    padding-left: 20px;
  }
  .el-form {
    margin-top: 20px;
    .el-input,
    .el-select,
    .el-date-picker {
      width: 200px;
    }
    .el-form-item {
      .el-form-item__label {
        font-size: 16px;
        color: #6c7996;
      }
    }
  }
  .btn {
    margin-bottom: 20px;
    float: right;
    .el-button {
      margin-right: 20px;
    }
  }
  .el-pagination {
    margin: 20px;
  }
}
</style>
