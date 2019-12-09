<template>
  <section>
    <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
      <ul>
        <li>
          <a href="#">主页</a>
        </li>
        <li>
          <a href="#">Hspx管理</a>
        </li>
        <li class="is-active">
          <a href="#">新闻编辑</a>
        </li>
      </ul>
    </nav>

    <div class="container form-box">
      <b-field label="中文标题">
        <b-input v-model="form.zh_title"></b-input>
      </b-field>
      <b-field label="中文内容">
        <v-editor-app v-model="form.zh_content"></v-editor-app>
      </b-field>
      <hr />
      <b-field label="阿拉伯语标题">
        <b-input v-model="form.ar_title"></b-input>
      </b-field>
      <b-field label="阿拉伯语内容">
        <v-editor-app v-model="form.ar_content"></v-editor-app>
      </b-field>
      <hr />
      <b-field label="英文标题">
        <b-input v-model="form.en_title"></b-input>
      </b-field>
      <b-field label="英文内容">
        <v-editor-app v-model="form.en_content"></v-editor-app>
      </b-field>
      <hr />
      <b-field label="日语标题">
        <b-input v-model="form.ja_title"></b-input>
      </b-field>
      <b-field label="日语内容">
        <v-editor-app v-model="form.ja_content"></v-editor-app>
      </b-field>
      <hr />
      <b-field label="韩语标题">
        <b-input v-model="form.ko_title"></b-input>
      </b-field>
      <b-field label="韩语内容">
        <v-editor-app v-model="form.ko_content"></v-editor-app>
      </b-field>
      <hr />
      <b-field label="土耳其语标题">
        <b-input v-model="form.tr_title"></b-input>
      </b-field>
      <b-field label="土耳其语内容">
        <v-editor-app v-model="form.tr_title"></v-editor-app>
      </b-field>
      <hr />
      <b-field label="状态">
        <b-select v-model="form.status" rounded>
          <option value="0">草稿</option>
          <option value="1">发布</option>
        </b-select>
      </b-field>

      <b-field label="新闻图片">
        <b-upload v-model="form.image" multiple drag-drop>
          <section class="section">
            <div class="content has-text-centered">
              <p>
                <b-icon icon="upload" size="is-large"></b-icon>
              </p>
              <p>Drop your files here or click to upload</p>
            </div>
          </section>
        </b-upload>
      </b-field>

      <div class="buttons btn-box">
        <b-button type="is-danger">取消</b-button>

        <b-button type="is-success" @click="handleSubmit">保存</b-button>
      </div>
    </div>
  </section>
</template>

<script>
import { showNews, updateNews } from '../../services/hspx'

export default {
  data () {
    return {
      form: {
        zh_title: '',
        zh_content: '',
        ar_title: '',
        ar_content: '',
        en_title: '',
        en_content: '',
        ja_title: '',
        ja_content: '',
        ko_title: '',
        ko_content: '',
        tr_title: '',
        tr_content: '',
        image: null,
        status: 1
      }
    }
  },
  created () {
    this.getNews()
  },
  methods: {
    async getNews () {
      try {
        let id = this.$route.params.id
        const { data } = await showNews(id)
        this.form = { ...data }
        console.log(data)
      } catch ({ response }) {
        this.$buefy.toast.open({
          type: 'is-danger',
          message: 'data loading failure!'
        })
      }
    },
    async handleSubmit () {
      try {
        let id = this.$route.params.id
        const { data } = await updateNews(id, this.form)
        if (data == 1) {
          this.$buefy.toast.open({
            type: 'is-success',
            message: 'data update success!'
          })
        } else {
          throw new Error('data update failure!')
        }
      } catch (response) {
        this.$buefy.toast.open({
          type: 'is-danger',
          message: response.message
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.btn-box {
  justify-content: flex-end;
}
</style>
