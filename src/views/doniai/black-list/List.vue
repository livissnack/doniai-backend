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
          <a href="#">黑名单管理</a>
        </li>
      </ul>
    </nav>

    <div class="field table-toobar is-grouped">
      <div class="search-list">
        <b-field class="search-item">
          <b-input
            class="search-item-box"
            placeholder="IP地址"
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
        <router-link class="button is-small is-danger" to="/articles/add">
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

          <b-dropdown-item aria-role="listitem">导出黑名单</b-dropdown-item>
          <b-dropdown-item aria-role="listitem" @click="delAll">批量删除</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>

    <b-tabs>
      <b-tab-item label="黑名单列表">
        <b-table
          :data="data"
          :checked-rows.sync="checkedRows"
          :per-page="pagination.pageSize"
          :current-page.sync="pagination.current"
          :total="pagination.total"
          striped
          narrowed
          paginated
          checkable
          ref="table"
          pagination-size="is-small"
          aria-next-label="Next page"
          aria-previous-label="Previous page"
          aria-page-label="Page"
          aria-current-label="Current page"
        >
          <template slot-scope="props">
            <b-table-column field="id" numeric label="ID" width="40" sortable>{{ props.row.id }}</b-table-column>
            <b-table-column field="ip" label="IP地址" sortable>{{ props.row.ip }}</b-table-column>
            <b-table-column field="status" label="状态" sortable>
              <span class="tag is-success">{{ props.row.status }}</span>
            </b-table-column>
            <b-table-column
              field="release_start_time"
              label="禁用开始时间"
              sortable
            >{{ props.row.release_start_time }}</b-table-column>
            <b-table-column
              field="release_end_time"
              label="禁用结束时间"
              sortable
            >{{ props.row.release_end_time }}</b-table-column>
            <b-table-column field="created_at" label="创建时间" sortable>{{ props.row.created_at }}</b-table-column>
            <b-table-column field="updated_at" label="更新时间" sortable>{{ props.row.updated_at }}</b-table-column>
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
    </b-tabs>
  </section>
</template>

<script>
import { getBlackLists } from "../../../services/doniai";
import List from "../../../utils/minxins";
export default {
  mixins: [List],
  created () {
    this.getBlackListData();
  },
  data () {
    return {
      data: [],
      checkedRows: []
    };
  },
  methods: {
    async getBlackListData () {
      try {
        const { data } = await getBlackLists(this.filters);
        this.data = data.data.data;
        this.pagination.current = data.data.page;
        this.pagination.pageSize = data.data.perPage;
        this.pagination.total = data.data.total;
      } catch ({ response }) {
        this.$toast.open("data loading failure!");
      }
    },
    async delAll () {
      var checkedList = [];
      this.checkedRows.map(value => {
        checkedList.push(value.id);
      });
      this.$toast.open({
        message: `选中${checkedList.toString()}`,
        type: "is-success"
      });
    },
    confirmCustomDelete () {
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