<template>
  <div class="list">
    <div class="l-top">
      <div @click="whole">
        <img src="../../icons/jt.svg" alt="jt" />
      </div>
      <div>Todo List</div>
    </div>
    <div class="toli">
      <div v-if="list.length < 1">暂无数据</div>
      <div v-for="(item, index) in arr" :key="index" class="l-contant">
        <span class="gou" @click="gou(item)"
        ><img src="../../icons/gou.svg" alt="gou" v-if="item.checked" />
        </span>
        <span>{{ item.name }}</span>
        <img
            src="../../icons/cha.svg"
            alt="cha"
            class="cha"
            @click="del(index)"
        />
      </div>
    </div>

    <div class="footer">
      <div>
        <span>{{ notdo.length }}</span>
        items left
      </div>
      <div @click="all">All</div>
      <div @click="active">Active</div>
      <div @click="complete">Completed</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TodoList",
    components: {},
    props: {},
    data() {
      return {
        list: [],

        //设置一个值来装未勾选的值
        notdo: [],

        //设置一个值来装勾选的值
        dose: [],

        //定义一个新数组来装数组名
        arr: [],

        //定义一个值来装初始值
        check: false
      };
    },
    methods: {
      //点击全部的
      all() {
        this.arr = this.list;
      },
      //点击控制勾的出现与消失
      gou(item) {
        item.checked = !item.checked;
        this.notdo = this.list.filter(value => value.checked === false);
      },
      //删除
      del(item, index) {
        this.list.splice(index, 1);
        // this.new = this.list;
      },

      //点击All的时候返回全部数组
      whole() {
        this.check = !this.check;
        this.list.map(item => {
          item.checked = this.check;
        });
      },
      //点击active的时候返回全部数组
      active() {
        this.arr = this.notdo;
        this.notdo = this.list.filter(value => value.checked === false);
        this.dose = this.list.filter(value => value.checked === true);
      },
      //点击complete的时候返回全部数组
      complete() {
        this.arr = this.dose;
        this.notdo = this.list.filter(value => value.checked === false);
        this.dose = this.list.filter(value => value.checked === true);
      },
      getList() {
        this.$axios
            .req("api/todoList")
            .then(res => {
              this.list = res.data;
              this.arr = this.list;
              this.notdo = this.list.filter(value => value.checked === false);
              this.dose = this.list.filter(value => value.checked === true);
            })
            .catch(err => {
              console.log(err);
            });
      }
    },
    mounted() {
      this.getList();
    },
    created() {},
    filters: {},
    computed: {},
    watch: {},
    directives: {}
  };
</script>

<style scoped lang="scss">
  .list {
    background: white;
    width: 100%;

    .l-top {
      margin: 20px 10px;
      display: flex;
      justify-content: space-between;
    }

    .toli {
      border-top: 1px solid #cccccc;
      border-bottom: 1px solid #cccccc;
      margin: 30px 10px;
      .l-contant {
        display: flex;
        justify-content: space-between;
        margin: 30px 0;

        &:hover {
          .cha {
            display: block;
          }
        }

        .cha {
          display: none;
        }

        .gou {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid #afc53a;
          position: relative;
          img {
            position: absolute;
            top: 2px;
            left: 2px;
          }
        }
      }
    }

    .footer {
      display: flex;
      justify-content: space-around;
      color: #303133;
      font-size: 12px;
    }
  }
</style>
