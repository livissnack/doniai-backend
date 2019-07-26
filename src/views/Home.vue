<template>
    <div class="home">
        <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
            <h1 class="breadcrumb-title">Doniai仪表盘</h1>
            <ul>
                <li><a href="#">主页</a></li>
                <li class="is-active"><a href="#">仪表盘</a></li>
            </ul>
        </nav>
        <!-- 卡片展示 -->
        <div class="columns">
            <div class="column">
                <AnnouncementCard cardTitle="日营业额" cardType="rise" cardColor="success" cardNumber="80"
                                  cardNumberSymbol="$"
                                  cardRemark="日收入" cardPercent="80"/>
            </div>
            <div class="column">
                <AnnouncementCard cardTitle="周营业额" cardType="fail" cardColor="info" cardNumber="30" cardNumberSymbol="$"
                                  cardRemark="周收入" cardPercent="30"/>
            </div>
            <div class="column">
                <AnnouncementCard cardTitle="日访问量" cardType="rise" cardColor="warning" cardNumber="15" cardRemark="日访问"
                                  cardPercent="15"/>
            </div>
            <div class="column">
                <AnnouncementCard cardTitle="周访问量" cardType="fail" cardColor="danger" cardNumber="15" cardRemark="周访问"
                                  cardPercent="15"/>
            </div>
        </div>

        <!-- 排行榜展示 -->
        <div class="columns">
            <div class="column">
                <div class="table-title text-danger">
                    <span>活跃排行榜</span>
                </div>
                <b-table :data="data" :columns="columns"></b-table>
            </div>
            <div class="column">
                <div class="table-title text-success">
                    <span>收入统计榜</span>
                </div>
                <b-table :data="data" :columns="columns"></b-table>
            </div>
        </div>

        <div class="columns">
            <div class="column">
                <div class="table-title text-danger">
                    <span>活跃排行榜</span>
                </div>
                <b-table :data="data" :columns="columns"></b-table>
            </div>
        </div>

        <div class="columns">
            <div class="column">
                <IncomeLine chartTitle="收入排行榜"/>
            </div>
            <div class="column">
                <PieSimple chartTitle="堆叠区域图"/>
            </div>
        </div>

        <div class="columns">
            <div class="column">
                <AreaStackLine chartTitle="收入排行榜"/>
            </div>
        </div>

        <div class="columns">
            <div class="column">
                <Footer/>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Footer from '@/components/Footer.vue'
    import PieSimple from '@/components/charts/PieSimple.vue'
    import IncomeLine from '@/components/charts/IncomeLine.vue'
    import AreaStackLine from '@/components/charts/AreaStackLine.vue'
    import AnnouncementCard from '@/components/AnnouncementCard.vue'

    export default {
        name: 'home',
        data() {
            return {
                selected: true,
                data: [{
                    'id': 1,
                    'first_name': 'Jesse',
                    'last_name': 'Simmons',
                    'date': '2016-10-15 13:43:27',
                    'gender': 'Male'
                },
                    {
                        'id': 2,
                        'first_name': 'John',
                        'last_name': 'Jacobs',
                        'date': '2016-12-15 06:00:53',
                        'gender': 'Male'
                    },
                    {
                        'id': 3,
                        'first_name': 'Tina',
                        'last_name': 'Gilbert',
                        'date': '2016-04-26 06:26:28',
                        'gender': 'Female'
                    },
                    {
                        'id': 4,
                        'first_name': 'Clarence',
                        'last_name': 'Flores',
                        'date': '2016-04-10 10:28:46',
                        'gender': 'Male'
                    },
                    {
                        'id': 5,
                        'first_name': 'Anne',
                        'last_name': 'Lee',
                        'date': '2016-12-06 14:38:38',
                        'gender': 'Female'
                    }
                ],
                columns: [{
                    field: 'id',
                    label: 'ID',
                    width: '40',
                    numeric: true
                },
                    {
                        field: 'first_name',
                        label: '用户名',
                    },
                    {
                        field: 'last_name',
                        label: 'Last Name',
                    },
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true
                    },
                    {
                        field: 'gender',
                        label: 'Gender',
                    }
                ]
            }
        },
        components: {
            Footer,
            PieSimple,
            IncomeLine,
            AreaStackLine,
            AnnouncementCard,
        },
    }
</script>

<style lang="less" scoped>
    .home {
        padding: 10px 20px;
    }

    .breadcrumb-title {
        text-align: left;
        font-size: 26px;
    }

    .card {
        border: 0;
        border-radius: .25rem;
    }

    .card-title {
        text-align: left;
        line-height: 22px;
        font-size: 18px;
        color: #2c2b2e;
        font-weight: 400;
    }

    .text-muted {
        color: #90a4ae;
    }

    .table-title {
        font-size: 20px;
        padding: 10px 0;
    }
</style>
