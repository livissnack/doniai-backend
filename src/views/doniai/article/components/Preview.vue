<template>
  <form action>
    <div class="modal-card" style="width: 800px; height: auto;">
      <header class="modal-card-head">
        <p class="modal-card-title">预览文章</p>
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
        <b-field label="图片">
          <figure class="image is-128x128">
            <img :src="formData.image" />
          </figure>
        </b-field>
        <b-field label="标签">
          <b-select
            size="is-small"
            v-model="formData.tag"
            placeholder="请选择标签"
            required
          >
            <option value="1">Flint1</option>
            <option value="2">Flint2</option>
            <option value="3">Flint3</option>
            <option value="4">Flint4</option>
          </b-select>
        </b-field>
        <b-field label="类别">
          <b-select
            size="is-small"
            v-model="formData.type"
            placeholder="请选择类别"
            required
          >
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
        <b-field label="内容"> </b-field>
      </section>
      <footer class="modal-card-foot">
        <b-button size="is-small" type="is-danger" @click="handleCancel"
          >关闭</b-button
        >
      </footer>
    </div>
  </form>
</template>

<script>
import { storeArticle } from '../../../../services/doniai'
import { getBucketConfig } from '../../../../services/common'

export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      formData: {
        title: '',
        image: '',
        tag: null,
        type: null,
        username: '',
        content: ''
      }
    }
  },
  created() {
    this.formData.title = this.article.title
    this.formData.image = this.article.image
    this.formData.tag = null
    this.formData.type = null
    this.formData.username = this.article.user.username
    this.formData.content = this.article.content
    console.log(this.article)
  },
  methods: {
    handleCancel() {
      this.$emit('closeArticleModal')
    }
  }
}
</script>

<style lang="less" scoped>
.doniai-editor {
  height: 300px;
}
</style>
