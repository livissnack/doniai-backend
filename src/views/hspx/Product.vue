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
          <a href="#">产品管理</a>
        </li>
      </ul>
    </nav>

    <div class="field table-toobar is-grouped">
      <div class="search-list">
        <b-field class="search-item">
          <b-input
            class="search-item-box"
            placeholder="产品名称"
            size="is-small"
            type="search"
            icon="magnify"
          ></b-input>
          <b-field class="search-item-box">
            <b-select placeholder="状态" size="is-small" expanded>
              <option value="flint">放行</option>
              <option value="silver">禁用</option>
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
        <router-link class="button is-small is-danger" to="/hspx/product/add">
          <span class="icon">
            <i class="fas fa-plus"></i>
          </span>
          <span>新增</span>
        </router-link>
        <b-dropdown aria-role="list" position="is-bottom-left">
          <button class="button is-small is-primary" slot="trigger">
            <span>操作</span>
            <b-icon icon="menu-down"></b-icon>
          </button>

          <b-dropdown-item aria-role="listitem">导出产品</b-dropdown-item>
          <b-dropdown-item aria-role="listitem" @click="delAll">批量删除</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>

    <b-tabs>
      <b-tab-item label="产品列表">
        <b-table
          :data="data"
          default-sort-direction="asc"
          sort-icon="arrow-up"
          sort-icon-size="is-small"
          :checked-rows.sync="checkedRows"
          checkable
          default-sort="id"
          aria-next-label="Next page"
          aria-previous-label="Previous page"
          aria-page-label="Page"
          aria-current-label="Current page"
        >
          <template slot-scope="props">
            <b-table-column field="id" numeric label="ID" width="40" sortable>{{ props.row.id }}</b-table-column>
            <b-table-column field="name" label="名称" sortable>{{ props.row.name }}</b-table-column>
            <b-table-column field="status" label="状态" sortable>
              <span class="tag is-success">{{ props.row.status === 1 ? '上线' : '存库' }}</span>
            </b-table-column>
            <b-table-column field="length" label="长度" sortable>{{ props.row.length }}</b-table-column>
            <b-table-column field="width" label="宽度" sortable>{{ props.row.width }}</b-table-column>
            <b-table-column field="thickness" label="厚度" sortable>{{ props.row.thickness }}</b-table-column>
            <b-table-column field="instock" label="库存" sortable>{{ props.row.instock }}</b-table-column>
            <b-table-column
              field="productType"
              label="类别"
              sortable
            >{{ props.row.productType.zh_value }}</b-table-column>

            <b-table-column field="created_at" label="创建时间" sortable>{{ props.row.created_at }}</b-table-column>
            <b-table-column field="updated_at" label="更新时间" sortable>{{ props.row.updated_at }}</b-table-column>
            <b-table-column field="handles" label="操作">
              <a class="button search-btn is-small is-warning" @click="handleEdit(props.row.id)">
                <span class="icon">
                  <i class="fas fa-edit"></i>
                </span>
                <span>编辑</span>
              </a>
              <a class="button search-btn is-small is-danger" @click="handleDelete(props.row.id)">
                <span class="icon">
                  <i class="fas fa-trash-alt"></i>
                </span>
                <span>删除</span>
              </a>
              <a class="button search-btn is-small is-success" @click="handlePreview(props.row.id)">
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
  </section>
</template>

<script>
import { getProducts, destroyProduct } from "@/services/hspx";
import List from "@/utils/minxins";
export default {
  mixins: [List],
  computed: {
    paginationPageSum: function () {
      return Math.ceil(this.pagination.total / this.pagination.perPage);
    }
  },
  watch: {
    "pagination.currentPage": function (val) {
      if (val >= 1 && val <= this.paginationPageSum) {
        this.getProducts();
      }
    },
    "pagination.perPage": function (val) {
      if ([10, 20, 50, 100, 500, 1000].includes(parseInt(val))) {
        this.pagination.currentPage = this.paginationPageSum;
        this.getProducts();
      }
    }
  },
  created () {
    this.getProducts();
  },
  data () {
    return {
      data: [],
      checkedRows: []
    };
  },
  methods: {
    async getProducts () {
      try {
        const { data } = await getProducts({ page: this.pagination.currentPage, perPage: this.pagination.perPage });
        this.data = data.data;
        this.pagination.currentPage = data.page;
        this.pagination.perPage = data.perPage;
        this.pagination.total = data.total;
      } catch ({ response }) {
        this.$buefy.toast.open({ type: 'is-danger', message: "data loading failure!" })
      }
    },
    async delAll () {
      var checkedList = [];
      this.checkedRows.map(value => {
        checkedList.push(value.id);
      });
      this.$buefy.toast.open({
        message: `选中${checkedList.toString()}`,
        type: "is-success"
      });
    },
    handleDelete (id) {
      this.$buefy.dialog.confirm({
        size: "is-small",
        title: "产品删除",
        message: "你确定 <b>删除</b> 这个产品吗？不妨在考虑一下吧！",
        confirmText: "确定删除",
        cancelText: "取消",
        type: "is-danger",
        hasIcon: true,
        onConfirm: async () => {
          try {
            const { data } = await destroyProduct(id);
            if (data) {
              this.$buefy.toast.open({ type: 'is-success', message: "product delete success!" })
            } else {
              throw new Error('product data delete failure!')
            }
          } catch (response) {
            this.$buefy.toast.open({ type: 'is-danger', message: response.message })
          }
        }
      });
    },
    handleEdit (id) {
      this.$router.push({ name: "pxProductEdit", params: { id: id } });
    },
    handlePreview (id) {
      this.$router.push({ name: "pxProductPreview", params: { id: id } });
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
</style>
