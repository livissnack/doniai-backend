<template>
  <form action>
    <div class="modal-card" style="width: 800px; height: auto;">
      <header class="modal-card-head">
        <p class="modal-card-title">新建文章</p>
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
        <b-button size="is-small" type="is-primary" @click="handleSubmit"
          >提交</b-button
        >
        <b-button size="is-small" type="is-danger" @click="handleCancel"
          >取消</b-button
        >
      </footer>
    </div>
  </form>
</template>

<script>
import { storeArticle } from '../../../../services/doniai'
import { getBucketConfig } from '../../../../services/common'
import aliOss from 'ali-oss'

export default {
  data() {
    return {
      uploadImg: [],
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
  methods: {
    async handleSubmit() {
      try {
        let ossBucketConfig = await getBucketConfig()
        let client = new aliOss(ossBucketConfig.data)
        let imageObj = this.uploadImg
        const resultOss = await client.put(`uploads/${imageObj.name}`, imageObj)
        this.formData.image = resultOss.url
        const resultArticle = await storeArticle(this.formData)
        this.$emit('successArticleModal')
      } catch (response) {
        this.$emit('failureArticleModal')
        this.$toast.open('image upload failure!')
      }
    },
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
