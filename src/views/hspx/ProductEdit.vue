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
          <a href="#">产品编辑</a>
        </li>
      </ul>
    </nav>

    <div class="container form-box">
      <b-field label="名称">
        <b-input v-model="form.name"></b-input>
      </b-field>

      <b-field label="长度">
        <b-input v-model="form.length"></b-input>
      </b-field>

      <b-field label="宽度">
        <b-input v-model="form.width"></b-input>
      </b-field>

      <b-field label="厚度">
        <b-input v-model="form.thickness"></b-input>
      </b-field>

      <b-field label="库存量">
        <b-numberinput min="0" v-model="form.instock"></b-numberinput>
      </b-field>

      <b-field label="状态">
        <b-select v-model="form.status" rounded>
          <option value="0">存库</option>
          <option value="1">上线</option>
        </b-select>
      </b-field>

      <b-field label="类别">
        <b-select v-model="form.product_type_id" rounded>
          <option value="0">Flint</option>
          <option value="1">Silver</option>
        </b-select>
      </b-field>

      <b-field label="中文内容">
        <v-editor-app v-model="form.content"></v-editor-app>
      </b-field>

      <b-field label="英文内容">
        <v-editor-app v-model="form.en_content"></v-editor-app>
      </b-field>
      <div class="buttons btn-box">
        <b-button type="is-danger">取消</b-button>

        <b-button type="is-success" @click="handleSubmit">保存</b-button>
      </div>
    </div>
  </section>
</template>

<script>
import { showProduct } from '../../services/hspx'

export default {
  data() {
    return {
      form: {
        name: '',
        length: null,
        width: null,
        thickness: null,
        instock: 0,
        product_type_id: 1,
        status: 1,
        content: '',
        en_content: ''
      }
    }
  },
  created() {
    this.getProduct()
  },
  methods: {
    async getProduct() {
      try {
        let id = this.$route.params.id
        const { data } = await showProduct(id)
        const res = data[0]
        this.form.name = res.name
        this.form.length = res.length
        this.form.width = res.width
        this.form.thickness = res.thickness
        this.form.instock = res.instock
        this.form.product_type_id = res.product_type_id
        this.form.status = res.status
        this.form.content = res.content
        this.form.en_content = res.en_content
        console.log(this.form, res.en_content)
      } catch ({ response }) {
        this.$buefy.toast.open({
          type: 'is-danger',
          message: 'data loading failure!'
        })
      }
    },
    handleSubmit() {
      console.log(this.form)
    },
    async $imgAdd(pos, $file) {
      let ossBucketConfig = await getBucketConfig()
      let client = new aliOss(ossBucketConfig.data)
      let imageObj = $file
      const resultOss = await client.put(`uploads/${imageObj.name}`, imageObj)
      this.$refs.md.$img2Url(pos, resultOss.url)
    },
    $imgDel() {
      this.$toast.open('image delete success!')
    }
  }
}
</script>

<style lang="less" scoped>
.form-box {
  padding: 40px;
}

.btn-box {
  justify-content: flex-end;
}
</style>
