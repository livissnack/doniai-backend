<template>
  <form action>
    <div class="modal-card" style="width: 800px; height: auto;">
      <header class="modal-card-head">
        <p class="modal-card-title">修改文章</p>
      </header>
      <section class="modal-card-body">
        <b-field label="标题">
          <b-input
            type="text"
            size="is-small"
            v-model="formData.title"
            placeholder="请输入标题"
            required
          ></b-input>
        </b-field>
        <b-field class="file">
          <b-upload v-model="uploadImg" required>
            <a class="button is-primary">
              <b-icon icon="upload"></b-icon>
              <span></span>
            </a>
          </b-upload>
          <span class="file-name" v-if="uploadImg">{{ uploadImg.name }}</span>
        </b-field>
        <b-field label="标签">
          <b-select size="is-small" v-model="formData.tag" placeholder="请选择标签" required>
            <option value="1">Flint1</option>
            <option value="2">Flint2</option>
            <option value="3">Flint3</option>
            <option value="4">Flint4</option>
          </b-select>
        </b-field>
        <b-field label="类别">
          <b-select size="is-small" v-model="formData.type" placeholder="请选择类别" required>
            <option value="1">Flint1</option>
            <option value="2">Flint2</option>
            <option value="3">Flint3</option>
            <option value="4">Flint4</option>
          </b-select>
        </b-field>
        <b-field label="作者">
          <b-input
            type="text"
            size="is-small"
            v-model="formData.username"
            placeholder="请输入作者"
            required
          ></b-input>
        </b-field>
        <b-field label="内容">
          <mavon-editor
            ref=md
            v-model="formData.content"
            :subfield="false"
            placeholder="请使用 Markdown 编写"
            :toolbars="markdownOption.toolbars"
            @imgAdd="$imgAdd"
            @imgDel="$imgDel"
          />
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <b-button size="is-small" type="is-primary" @click="handleSubmit">提交</b-button>
        <b-button size="is-small" type="is-danger" @click="handleCancel">取消</b-button>
      </footer>
    </div>
  </form>
</template>

<script>
import Vue from "vue";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { getBucketConfig, storeArticle } from "../../../services/api";
import aliOss from "ali-oss";

Vue.use(mavonEditor);
export default {
  data() {
    return {
      uploadImg: [],
      formData: {
        title: "",
        image: "",
        tag: null,
        type: null,
        username: "",
        content: ""
      },
      markdownOption: {
        toolbars: {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          strikethrough: true, // 中划线
          mark: true, // 标记
          superscript: false, // 上角标
          subscript: false, // 下角标
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          imagelink: true, // 图片链接
          code: true, // code
          table: true, // 表格
          fullscreen: true, // 全屏编辑
          readmodel: false, // 沉浸式阅读
          htmlcode: true, // 展示html源码
          help: true, // 帮助
          /* 1.3.5 */
          undo: true, // 上一步
          redo: true, // 下一步
          trash: true, // 清空
          save: true, // 保存（触发events中的save事件）
          /* 1.4.2 */
          navigation: false, // 导航目录
          /* 2.1.8 */
          alignleft: true, // 左对齐
          aligncenter: true, // 居中
          alignright: true, // 右对齐
           /* 2.2.1 */
          subfield: false, // 单双栏模式
          preview: false, // 预览
        }
      }
    };
  },
  methods: {
    async handleSubmit() {
      try {
        let ossBucketConfig = await getBucketConfig();
        let client = new aliOss(ossBucketConfig.data);
        let imageObj = this.uploadImg;
        const resultOss = await client.put(
          `uploads/${imageObj.name}`,
          imageObj
        );
        this.formData.image = resultOss.url;
        const resultArticle = await storeArticle(this.formData);
        this.$emit("successArticleModal");
      } catch (response) {
        this.$emit("failureArticleModal");
        this.$toast.open("image upload failure!");
      }
    },
    handleCancel() {
      this.$emit("closeArticleModal");
    },
    async $imgAdd(pos, $file) {
      let ossBucketConfig = await getBucketConfig();
        let client = new aliOss(ossBucketConfig.data);
        let imageObj = $file;
        const resultOss = await client.put(
          `uploads/${imageObj.name}`,
          imageObj
        );
        this.$refs.md.$img2Url(pos, resultOss.url);
    },
    $imgDel() {
      this.$toast.open("image delete success!");
    }
  }
};
</script>

<style lang="less" scoped>
.doniai-editor {
  height: 300px;
}
</style>
