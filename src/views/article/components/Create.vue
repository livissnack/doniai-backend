<template>
  <form action>
    <div class="modal-card" style="width: 800px; height: auto;">
      <header class="modal-card-head">
        <p class="modal-card-title">新建文字</p>
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
          <quill-editor
            v-model="formData.content"
            :options="editorOption"
            @change="onEditorChange($event)"
          ></quill-editor>
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
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
// you can also register quill modules in the component
import { quillEditor } from "vue-quill-editor";
import { getBucketConfig, storeArticle } from "../../../services/api";
import aliOss from "ali-oss";
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
      editorOption: {
        placeholder: "请输入文章内容",
        theme: "snow",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote", "code-block"],

            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }], // superscript/subscript
            [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
            [{ direction: "rtl" }], // text direction

            [{ size: ["small", false, "large", "huge"] }], // custom dropdown
            [{ header: [1, 2, 3, 4, 5, 6, false] }],

            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ font: [] }],
            [{ align: [] }],

            ["clean"] // remove formatting button
          ]
        }
      }
    };
  },
  components: {
    quillEditor
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
        console.log(this.formData);
        const resultArticle = await storeArticle(this.formData);
      } catch (response) {
        console.log(response);
      }
    },
    handleCancel() {
      this.$emit("closeArticleModal");
    },
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    }
  }
};
</script>