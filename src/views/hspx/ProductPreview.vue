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
          <a href="#">产品预览</a>
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
        <b-select placeholder="选择状态" rounded>
          <option value="0">存库</option>
          <option value="1">上线</option>
        </b-select>
      </b-field>

      <b-field label="类别">
        <b-select placeholder="选择类别" rounded>
          <option value="flint">Flint</option>
          <option value="silver">Silver</option>
        </b-select>
      </b-field>

      <b-field label="中文内容">
        <mavon-editor
          ref="md_zh"
          v-model="form.zh_content"
          :subfield="false"
          placeholder="请使用 Markdown 编写"
          :toolbars="markdownOption.toolbars"
          @imgAdd="$imgAdd"
          @imgDel="$imgDel"
        />
      </b-field>

      <b-field label="英文内容"> </b-field>
      <div class="buttons btn-box">
        <b-button type="is-danger">取消</b-button>

        <b-button type="is-success">保存</b-button>
      </div>
    </div>
  </section>
</template>

<script>
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
        zh_content: '',
        en_content: ''
      }
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.form-box {
  background-color: #ffffff;
  padding: 40px;
}

.btn-box {
  justify-content: flex-end;
}
</style>
