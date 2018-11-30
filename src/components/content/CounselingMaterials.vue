<template>
  <div class="counselingMaterials">
    <p>
      <span>辅导资料</span>
    </p>
    <ul>
      <li
        v-for="(item,index) in content"
        :key="index"
        @click="detailed(item.moduleName,item.id)"
      >
        <a href="javascript:;">
          <span>{{item.artitleAuthor}}：</span>
          <span>{{item.articleTitle}}</span>
          <span>{{item.artitleTime}}</span>
        </a>
      </li>
    </ul>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="parms.pageNum"
      :page-size="parms.pageSize"
      layout="total, prev, pager, next"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { content } from "@/api/qian/content";
import { dateFtt } from "@/api/common";
export default {
  data() {
    return {
      parms: {
        moduleName: "辅导资料",
        pageSize: 20,
        pageNum: 1
      },
      total: 0,
      content: []
    };
  },
  created() {
    this.losting();
  },
  methods: {
    losting() {
      content(this.parms).then(res => {
        this.total = res.data.total;
        this.content = res.data.list;
        for (const i in this.content) {
          this.content[i].artitleTime = dateFtt(this.content[i].artitleTime);
        }
      });
    },
    handleSizeChange(val) {
      this.parms.pageSize = val;
      this.losting();
    },
    handleCurrentChange(val) {
      this.parms.pageNum = val;
      this.losting();
    },
    detailed(val, id) {
      const moduleName = encodeURI(val);
      console.log(moduleName);
      this.$router.push({
        path: "/PDF",
        query: { id: id, moduleName: moduleName }
      });
    }
  }
};
</script>

<style scoped lang="less">
.counselingMaterials {
  p {
    padding-left: 10px;
    width: 100%;
    border-bottom: 2px solid #888;
    position: relative;
    height: 32px;
    span {
      border-bottom: 2px solid #de2810;
      color: #de2810;
      font-size: 20px;
      line-height: 30px;
      float: left;
      font-weight: 400;
    }
  }
  ul {
    padding: 10px;
    li {
      line-height: 30px;
      a {
        color: #304356;
        font-size: 20px;
        span:last-child {
          float: right;
          padding-right: 10px;
        }
      }
      a:hover {
        color: #de2810;
      }
    }
    li:nth-child(5),
    li:nth-child(10),
    li:nth-child(15) {
      margin-bottom: 20px;
    }
  }
}
</style>
