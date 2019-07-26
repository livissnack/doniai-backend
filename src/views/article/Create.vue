<template>
  <section>
    <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
      <ul>
        <li>
          <a href="#">主页</a>
        </li>
        <li>
          <a href="#">Doniai管理</a>
        </li>
        <li>
          <a href="#">文章管理</a>
        </li>
        <li class="is-active">
          <a href="#">新建文章</a>
        </li>
      </ul>
    </nav>

    <div class="columns">
      <div class="column is-two-thirds add-article-box">
        <b-field label="文章标题:">
          <b-input v-model="title"></b-input>
        </b-field>
        <b-field label="文章标签:">
          <b-taginput v-model="tags" ellipsis icon="label" placeholder="Add a tag"></b-taginput>
        </b-field>
        <b-field label="文章类别:">
          <b-select expanded v-model="selectedOptions">
            <option value="flint">Flint</option>
            <option value="silver">Silver</option>
            <option value="vane">Vane</option>
            <option value="billy">Billy</option>
            <option value="jack">Jack</option>
            <option value="heisenberg">Heisenberg</option>
            <option value="jesse">Jesse</option>
            <option value="saul">Saul</option>
            <option value="mike">Mike</option>
          </b-select>
        </b-field>
        <b-field label="封面图片:">
          <b-upload v-model="dropFiles" multiple drag-drop>
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dropFiles: []
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
};
</script>
<style lang='less' scoped>
.add-article-box {
  margin: 0 auto;
}
</style>