<template>
  <form action>
    <div class="modal-card" style="width: 800px; height: auto;">
      <header class="modal-card-head">
        <p class="modal-card-title">新建文字</p>
      </header>
      <section class="modal-card-body">
        <b-field label="标题">
          <b-input type="text" size="is-small" :value="title" placeholder="请输入标题" required></b-input>
        </b-field>
        <b-field label="封面图片">
          <b-input type="file" size="is-small" :value="image" placeholder="请选择封面图片" required></b-input>
        </b-field>
        <b-field label="标签">
          <b-select size="is-small" :value="tag" placeholder="请选择标签" required>
            <option value="1">Flint1</option>
            <option value="2">Flint2</option>
            <option value="3">Flint3</option>
            <option value="4">Flint4</option>
          </b-select>
        </b-field>
        <b-field label="类别">
          <b-select size="is-small" :value="type" placeholder="请选择类别" required>
            <option value="1">Flint1</option>
            <option value="2">Flint2</option>
            <option value="3">Flint3</option>
            <option value="4">Flint4</option>
          </b-select>
        </b-field>
        <b-field label="作者">
          <b-input type="text" size="is-small" :value="username" placeholder="请输入作者" required></b-input>
        </b-field>
        <b-field label="内容">
          <!-- Or manually control the data synchronization（或手动控制数据流） -->
          <quill-editor :content="content" :options="editorOption" @change="onEditorChange($event)"></quill-editor>
          <!-- <b-input type="textarea" size="is-small" :value="username" placeholder="请输入内容" required></b-input> -->
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
export default {
  data() {
    return {
      content: "<p>example content</p>",
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
  props: {
    title: {
      type: String,
      default: "1112"
    },
    image: {
      type: String,
      default: "rise"
    },
    tag: {
      type: Number,
      default: null
    },
    type: {
      type: Number,
      default: null
    },
    username: {
      type: String,
      default: "1321"
    }
    // content: {
    //   type: String,
    //   default: "321"
    // }
  },
  mounted() {
    console.log("this is current quill instance object", this.editor);
  },
  methods: {
    handleSubmit() {
      console.log("adasda");
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