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
        <li class="is-active">
          <a href="#">文章管理</a>
        </li>
      </ul>
    </nav>

    <div class="field table-toobar is-grouped">
      <div class="search-list">
        <b-field class="search-item">
          <b-input
            v-model="filter.username"
            class="search-item-box"
            placeholder="作者"
            size="is-small"
            type="search"
            icon="magnify"
          ></b-input>
          <b-input
            v-model="filter.title"
            class="search-item-box"
            placeholder="文章标题"
            size="is-small"
            type="search"
            icon="magnify"
          ></b-input>
          <b-field class="search-item-box">
            <b-select placeholder="类别" v-model="filter.article_type" size="is-small" expanded>
              <option
                v-for="article_type_content in article_types"
                :value="article_type_content.value"
                :key="article_type_content.id"
              >{{ article_type_content.value }}</option>
              <option value="silver">散文</option>
            </b-select>
          </b-field>

          <b-field>
            <b-datepicker
              size="is-small"
              v-model="filter.time_between.start_time"
              placeholder="起始时间"
              icon="calendar-today"
              editable
            ></b-datepicker>
            <span>~</span>
            <b-datepicker
              size="is-small"
              v-model="filter.time_between.end_time"
              placeholder="起始时间"
              icon="calendar-today"
              editable
            ></b-datepicker>
          </b-field>

          <a class="button search-btn is-small is-info" @click="handleSearch">搜索</a>
        </b-field>
      </div>

      <div class="handle-list">
        <b-button class="button is-small is-danger" @click="isComponentModalCreateActive = true">
          <span class="icon">
            <i class="fas fa-plus"></i>
          </span>
          <span>新增</span>
        </b-button>
        <b-dropdown aria-role="list" position="is-bottom-left">
          <button class="button is-small is-primary" slot="trigger">
            <span>操作</span>
            <b-icon icon="menu-down"></b-icon>
          </button>

          <b-dropdown-item aria-role="listitem" @click="handleExport">导出文章</b-dropdown-item>
          <b-dropdown-item aria-role="listitem" @click="delAll">批量删除</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>

    <b-tabs>
      <b-tab-item label="文章列表">
        <b-table
          :data="data"
          :default-sort-direction="defaultSortDirection"
          :sort-icon="sortIcon"
          :sort-icon-size="sortIconSize"
          :checked-rows.sync="checkedRows"
          checkable
          default-sort="user.first_name"
          aria-next-label="Next page"
          aria-previous-label="Previous page"
          aria-page-label="Page"
          aria-current-label="Current page"
        >
          <template slot-scope="props">
            <b-table-column field="id" label="ID" width="40" sortable numeric>{{ props.row.id }}</b-table-column>

            <b-table-column field="title" label="标题" sortable>
              <b-tooltip
                :label="props.row.title"
                position="is-right"
              >{{ props.row.title | subZhStr }}</b-tooltip>
            </b-table-column>

            <b-table-column field="image" label="封面图片" sortable>
              <figure class="image is-32x32">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
            </b-table-column>
            <b-table-column field="tag" label="标签" sortable>
              <span
                class="ml10 tag is-success"
                v-for="item in props.row.articleTag"
                :key="item.index"
              >{{ item.value }}</span>
            </b-table-column>
            <b-table-column field="type" label="类别" sortable>
              <span
                class="ml10 tag is-danger"
                v-for="item in props.row.articleType"
                :key="item.index"
              >{{ item.value }}</span>
            </b-table-column>
            <b-table-column field="username" label="作者" sortable>{{ props.row.user.username }}</b-table-column>
            <b-table-column field="content" label="内容" sortable>
              <b-tooltip
                :label="props.row.content"
                position="is-left"
              >{{ props.row.content | subZhStr }}</b-tooltip>
            </b-table-column>
            <b-table-column field="handles" label="操作">
              <a
                class="button search-btn is-small is-warning"
                @click="isComponentModalEditActive = true"
              >
                <span class="icon">
                  <i class="fas fa-edit"></i>
                </span>
                <span>编辑</span>
              </a>
              <a class="button search-btn is-small is-danger" @click="del(props.row)">
                <span class="icon">
                  <i class="fas fa-trash-alt"></i>
                </span>
                <span>删除</span>
              </a>
              <a class="button search-btn is-small is-success" @click="preview(props.row)">
                <span class="icon">
                  <i class="fas fa-eye"></i>
                </span>
                <span>预览</span>
              </a>
            </b-table-column>
          </template>
          <template slot="bottom-left">
            <b>选中</b>
            : {{ checkedRows.length }}
          </template>
        </b-table>
      </b-tab-item>
      <nav class="pagination is-rounded is-small" role="navigation" aria-label="pagination">
        <a
          class="pagination-previous"
          :disabled="paginationPageSum <= pagination.currentPage"
          @click="handlePreviousPage"
        >
          <span class="icon">
            <i class="fas fa-chevron-left"></i>
          </span>
        </a>
        <a class="pagination-next" :disabled="pagination.currentPage <= 1" @click="handleNextPage">
          <span class="icon">
            <i class="fas fa-chevron-right"></i>
          </span>
        </a>
        <b-field grouped group-multiline custom-class="is-small" class="mt10">
          <b-select v-model="pagination.perPage" size="is-small">
            <option value="10">10条/页</option>
            <option value="20">20条/页</option>
            <option value="50">50条/页</option>
            <option value="100">100条/页</option>
            <option value="500">500条/页</option>
            <option value="1000">1000条/页</option>
          </b-select>
          <span class="font-center">共{{ pagination.total }}条</span>
        </b-field>
        <b-field grouped group-multiline custom-class="is-small" class="mt10 ml40">
          <span class="font-center">前往</span>
          <b-input
            type="number"
            min="1"
            :max="paginationPageSum"
            v-model="pagination.currentPage"
            size="is-small"
          ></b-input>
          <span class="font-center">页</span>
        </b-field>
        <ul class="pagination-list">
          <li v-for="n in paginationPageSum" :key="n.index">
            <a
              class="pagination-link"
              :class="pagination.currentPage === n ? 'is-current' : ''"
              :aria-label="'Goto page'+''+n"
              @click="handleGotoPage(n)"
            >{{ n }}</a>
          </li>
        </ul>
      </nav>
    </b-tabs>
    <b-modal :active.sync="isComponentModalCreateActive" has-modal-card>
      <modal-create-form
        @closeArticleModal="handleCloseModal('create')"
        @successArticleModal="success('文章新建成功')"
        @failureArticleModal="danger('文章新建失败')"
      ></modal-create-form>
    </b-modal>

    <b-modal :active.sync="isComponentModalEditActive" has-modal-card>
      <modal-edit-form
        @closeArticleModal="handleCloseModal('edit')"
        @successArticleModal="success('文章修改成功')"
        @failureArticleModal="danger('文章修改失败')"
      ></modal-edit-form>
    </b-modal>

    <b-modal :active.sync="isComponentModalPreviewActive" has-modal-card>
      <modal-preview-form
        :article="selectedArticle"
        @closeArticleModal="handleCloseModal('preview')"
        @successArticleModal="success('文章新建成功')"
        @failureArticleModal="danger('文章新建失败')"
      ></modal-preview-form>
    </b-modal>
  </section>
</template>

<script>
import { getArticles, destroyArticle, batchDeleteArticle, getArticleTypes } from "../../../services/doniai";
import List from "../../../utils/minxins";
import ModalCreateForm from "./components/Create";
import ModalEditForm from "./components/Edit";
import ModalPreviewForm from "./components/Preview";
export default {
  mixins: [List],
  components: {
    ModalCreateForm,
    ModalEditForm,
    ModalPreviewForm
  },
  created () {
    this.getArticleData();
    this.getArticleType();
  },
  computed: {
    paginationPageSum: function () {
      return Math.ceil(this.pagination.total / this.pagination.perPage);
    }
  },
  watch: {
    "pagination.currentPage": function (val) {
      if (val >= 1 && val <= this.paginationPageSum) {
        this.getArticleData();
      }
    },
    "pagination.perPage": function (val) {
      if ([10, 20, 50, 100, 500, 1000].includes(parseInt(val))) {
        this.pagination.currentPage = this.paginationPageSum;
        this.getArticleData();
      }
    }
  },
  data () {
    return {
      filter: {
        username: null,
        title: null,
        article_type: null,
        time_between: {
          start_time: new Date(),
          end_time: new Date()
        }
      },
      data: [],
      article_types: [],
      checkedRows: [],
      isComponentModalCreateActive: false,
      isComponentModalEditActive: false,
      isComponentModalPreviewActive: false,
      defaultSortDirection: "asc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      pagination: {
        currentPage: 1,
        perPage: 10,
        total: 0
      },
      selectedArticle: null
    };
  },
  methods: {
    async getArticleData () {
      try {
        const { data } = await getArticles({ page: this.pagination.currentPage, pageSize: this.pagination.perPage });
        this.data = data.data.data;
        this.pagination.currentPage = data.data.page;
        this.pagination.perPage = data.data.perPage;
        this.pagination.total = data.data.total;
      } catch ({ response }) {
        this.$buefy.toast.open({ type: 'is-danger', message: "文章数据加载失败" })
      }
    },
    async getArticleType () {
      try {
        const { data } = await getArticleTypes();
        this.article_types = data;
      } catch ({ response }) {
        this.$buefy.toast.open({ type: 'is-danger', message: "文章所有分类数据加载失败" })
      }
    },
    async handleSearch () {
      console.log(this.filter)
    },
    handleCloseModal (type) {
      if (!['create', 'edit', 'preview'].includes(type)) {
        this.$toast.open("selected type error!");
      }
      if (type === 'create') {
        this.isComponentModalCreateActive = false;
      }
      if (type === 'edit') {
        this.isComponentModalEditActive = false;
      }
      if (type === 'preview') {
        this.isComponentModalPreviewActive = false;
      }
    },
    del (article) {
      this.$buefy.dialog.confirm({
        size: "is-small",
        title: "文章删除",
        message: "你确定 <b>删除</b> 这篇文章吗？不妨在考虑一下吧！",
        confirmText: "确定删除",
        cancelText: "取消",
        type: "is-danger",
        hasIcon: true,
        onConfirm: async () => {
          const { data } = await destroyArticle(article.id)
          if (data.status === 'success') {
            await this.getArticleData();
            this.$buefy.toast.open({ type: 'is-success', message: "文章删除成功" })
          } else {
            this.$buefy.toast.open({ type: 'is-danger', message: "文章删除失败" })
          }
        }
      });
    },
    preview (article) {
      this.isComponentModalPreviewActive = true
      this.selectedArticle = article
    },
    async delAll () {
      try {
        const ids = this.checkedRows.map(item => item.id)
        const { data } = await batchDeleteArticle(ids);
        if (data.status === 'success') {
          await this.getArticleData();
          this.$buefy.toast.open({ type: 'is-success', message: "文章删除成功" })
        } else {
          this.$buefy.toast.open({ type: 'is-danger', message: "文章删除失败" })
        }
      } catch ({ response }) {
        this.$buefy.toast.open({ type: 'is-danger', message: "文章批量删除异常" })
      }
    },
    handleExport () {
      console.log('export excel data')
    },
    handlePreviousPage () {
      if (this.paginationPageSum >= this.pagination.currentPage + 1) {
        this.pagination.currentPage += 1;
      }
    },
    handleNextPage () {
      if (this.pagination.currentPage >= 2) {
        this.pagination.currentPage -= 1;
      }
    },
    handleGotoPage (currentPage) {
      this.pagination.currentPage = currentPage;
    }
  }
};
</script>
<style lang="less" scoped>
.breadcrumb {
  margin-left: 10px;
}

.table-toobar {
  display: flex;
  justify-content: space-between;
}

.search-list {
  .search-item {
    display: flex;
    justify-content: flex-start;

    .search-item-box {
      margin-left: 10px;
    }
  }
}

.search-btn {
  margin-left: 10px;
}

.handle-list {
  margin-right: 10px;

  a {
    margin-right: 10px;
  }
}

.font-center {
  line-height: 30px;
}

.mt10 {
  margin-top: 10px;
}

.ml40 {
  margin-left: 40px;
}

.ml10 {
  margin-left: 10px;
}
</style>