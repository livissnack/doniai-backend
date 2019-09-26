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
            class="search-item-box"
            placeholder="作者"
            size="is-small"
            type="search"
            icon="magnify"
          ></b-input>
          <b-input
            class="search-item-box"
            placeholder="文章标题"
            size="is-small"
            type="search"
            icon="magnify"
          ></b-input>
          <b-field class="search-item-box">
            <b-select placeholder="类别" size="is-small" expanded>
              <option value="flint">技术</option>
              <option value="silver">散文</option>
            </b-select>
          </b-field>

          <b-field>
            <b-datepicker size="is-small" placeholder="起始时间" icon="calendar-today" editable></b-datepicker>
            <span>~</span>
            <b-datepicker size="is-small" placeholder="起始时间" icon="calendar-today" editable></b-datepicker>
          </b-field>

          <a class="button search-btn is-small is-info">搜索</a>
        </b-field>
      </div>

      <div class="handle-list">
        <b-button class="button is-small is-danger" @click="isComponentModalActive = true">
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

          <b-dropdown-item aria-role="listitem">导出文章</b-dropdown-item>
          <b-dropdown-item aria-role="listitem" @click="delAll">批量删除</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>

    <!-- :paginated="true"
          :checked-rows.sync="checkedRows"
          :per-page="pagination.pageSize"
          :current-page.sync="pagination.current"
    :total="pagination.total"-->
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
              <span class="tag is-success">{{ props.row.articleTag.value }}</span>
            </b-table-column>
            <b-table-column field="type" label="类别" sortable>
              <span class="tag is-danger">{{ props.row.articleType.value }}</span>
            </b-table-column>
            <b-table-column field="username" label="作者" sortable>{{ props.row.user.username }}</b-table-column>
            <b-table-column field="content" label="内容" sortable>
              <b-tooltip
                :label="props.row.content"
                position="is-left"
              >{{ props.row.content | subZhStr }}</b-tooltip>
            </b-table-column>
            <b-table-column field="handles" label="操作">
              <a class="button search-btn is-small is-warning">
                <span class="icon">
                  <i class="fas fa-edit"></i>
                </span>
                <span>编辑</span>
              </a>
              <a class="button search-btn is-small is-danger" @click="confirmCustomDelete">
                <span class="icon">
                  <i class="fas fa-trash-alt"></i>
                </span>
                <span>删除</span>
              </a>
              <a class="button search-btn is-small is-success">
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
        <a class="pagination-previous" :disabled="paginationPageSum <= pagination.currentPage" @click="handlePreviousPage">
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
          <b-input type="number" min="1" :max="paginationPageSum" v-model="pagination.currentPage" size="is-small"></b-input>
          <span class="font-center">页</span>
        </b-field>
        <ul class="pagination-list">
          <li v-for="n in paginationPageSum" :key="n.index">
            <a class="pagination-link" :class="pagination.currentPage === n ? 'is-current' : ''" :aria-label="'Goto page'+''+n" @click="handleGotoPage(n)">{{ n }}</a>
          </li>
        </ul>
      </nav>
    </b-tabs>
    <b-modal :active.sync="isComponentModalActive" has-modal-card>
      <modal-form
        v-bind="formProps"
        @closeArticleModal="handleCloseModal"
        @successArticleModal="success('文章新建成功')"
        @failureArticleModal="danger('文章新建失败')"
      ></modal-form>
    </b-modal>
  </section>
</template>

<script>
import { getArticles } from "../../services/api";
import List from "../../utils/minxins";
import ModalForm from "./components/Create";
export default {
  mixins: [List],
  components: {
    ModalForm
  },
  created() {
    this.getArticleData();
  },
  computed: {
    paginationPageSum: function() {
      return Math.ceil(this.pagination.total/this.pagination.perPage);
    }
  },
  watch: {
    "pagination.currentPage": function(val) {
      if(val>=1 && val<=this.paginationPageSum) {
        this.getArticleData();
      }
    },
    "pagination.perPage": function(val) {      
      if([10, 20, 50, 100, 500, 1000].includes(parseInt(val))) {
        this.getArticleData();
      }
    }
  },
  data() {
    return {
      data: [],
      checkedRows: [],
      isComponentModalActive: false,
      formProps: {
        title: "",
        image: "",
        tag: 1,
        type: 1,
        username: "",
        content: ""
      },
      defaultSortDirection: "asc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      pagination: {
        currentPage: 1,
        perPage: 10,
        total: 0
      }
    };
  },
  methods: {
    async getArticleData() {
      try {
        const { data } = await getArticles({page: this.pagination.currentPage, pageSize: this.pagination.perPage});
        this.data = data.data.data;
        this.pagination.currentPage = data.data.page;
        this.pagination.perPage = data.data.perPage;
        this.pagination.total = data.data.total;
      } catch ({ response }) {
        this.$toast.open("data loading failure!");
      }
    },
    addArticle() {
      this.$modal.open({
        parent: this,
        component: ModalForm,
        hasModalCard: true,
        customClass: "custom-class custom-class-2"
      });
    },
    handleCloseModal() {
      this.isComponentModalActive = false;
    },
    confirmCustomDelete() {
      this.$dialog.confirm({
        size: "is-small",
        title: "文章删除",
        message: "你确定 <b>删除</b> 这篇文章吗？不妨在考虑一下吧！",
        confirmText: "确定删除",
        cancelText: "取消",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => this.$toast.open("Account deleted!")
      });
    },
    handlePreviousPage() {
      if(this.paginationPageSum >= this.pagination.currentPage+1) {
        this.pagination.currentPage += 1;
      }
    },
    handleNextPage() {
      if(this.pagination.currentPage >= 2) {
        this.pagination.currentPage -= 1;
      }
    },
    handleGotoPage(currentPage) {
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

.font-center{
  line-height: 30px;
}

.mt10 {
  margin-top: 10px;
}

.ml40{
  margin-left: 40px;
}
</style>