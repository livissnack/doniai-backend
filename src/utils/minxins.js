export default {
  data() {
    const pageSize = parseInt(localStorage.getItem("pageSize")) || 20;
    // 表格内容最大高度 = 浏览器可视高度 - 头部导航高度(60) - 内容上下边距(40) - 面包屑高度(33) - 搜索高度(58) - 表头高度(40) - 分页高度(28)
    const tableHeight = document.documentElement.clientHeight - 259;
    return {
      filters: {
        pageSize,
        page: 1
      },
      pagination: {
        current: 1,
        pageSize,
        total: 0
      },
      loading: false,
      tableHeight
    };
  },
  filters: {
    subZhStr(value) {
      const n = 10;
      const r = "/[^\x00-\xff]/g";
      if (value.replace(r, "mm").length <= n) {
        return value;
      }
      const m = Math.floor(n / 2);
      for (let i = m; i < value.length; i++) {
        if (value.substr(0, i).replace(r, "mm").length >= n) {
          return value.substr(0, i) + "...";
        }
      }
      return value;
    }
  },
  methods: {
    handlerCurrentChange(page) {
      this.filters.page = page;
      this.pagination.current = page;
      this.pushHistory();
    },
    handlerSizeChange(size) {
      this.filters.pageSize = size;
      this.pagination.pageSize = size;
      localStorage.setItem("pageSize", size);
      this.pushHistory();
    },
    search() {
      this.filters.page = 1;
      this.pushHistory();
    },
    pushHistory() {
      this.$router.push({ name: this.$route.name, query: this.filters });
    }
  }
};
