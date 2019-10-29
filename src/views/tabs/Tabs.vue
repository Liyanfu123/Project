<!--标签页-->
<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane :label="unreadMessage" name="first">
<!--        未读消息-->
        <div class="und" v-for="(item,index) in und" :key="index">
          {{item.text}}
          <div>{{item.time}} <div style="margin: 0 20px 0 0;display: inline-block"></div><el-button @click="ReadMessage(index)">标为已读</el-button></div>
        </div>
        <div style="margin-top: 20px">
          <el-button type="primary"  @click="whole(index)">全部标为已读</el-button>
        </div>
      </el-tab-pane>
<!--      已读消息-->
      <el-tab-pane :label="readMessage" name="second">
        <div class="und" v-for="(item,index) in read" :key="index">
          {{item.text}}
          <div>{{item.time}} <div style="margin: 0 20px 0 0;display: inline-block"></div><el-button @click="del(index)">删除</el-button></div>
        </div>
        <div style="margin-top: 20px">
          <el-button type="danger" @click="WholeDel(index)">全部删除</el-button>
        </div>
      </el-tab-pane>
<!--      回收站-->
      <el-tab-pane :label="recycleBin" name="third">
        <div class="und" v-for="(item,index) in RecycleBin" :key="index">
          {{item.text}}
          <div>{{item.time}} <div style="margin: 0 20px 0 0;display: inline-block"></div><el-button type="warning" @click="reduction(index)">还原</el-button></div>
        </div>
        <div style="margin-top: 20px">
          <el-button type="info" @click="EmptyTrash(index)">清空回收站</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  components: {},
  props: {},
  data() {
    return {
      activeName:'first',
      und:[
        {
          text:"【 系统通知 】这是条消息1",
          time:"2019.10.26  21:34:19"
        },
        {
          text: "【 系统通知 】这是条消息2",
          time:"2019.10.25  03:12:33"
        }
      ],
      read:[], //已读信息的数组
      RecycleBin:[
        {
          text:"【赋新科技】你的证券已过期",
          time:"2019.03.12  01:19:09"
        }
      ]
    };
  },
  methods: {
    //标为已读
    ReadMessage(index){
      this.read.push(this.und[index]);
      this.und.splice(index,1)
    },
    //全部标为已读
    whole(index){
      this.read.push(...this.und)
      this.und.splice(index)
    },
    //删除
    del(index){
      this.RecycleBin.push(this.read[index]);
      this.read.splice(index,1)
    },
    //全部删除
    WholeDel(index){
      this.RecycleBin.push(...this.read)
      this.read.splice(index)
    },
    //回收站 还原
    reduction(index){
      this.read.push(this.RecycleBin[index]);
      this.RecycleBin.splice(index,1)
    },
    //清空回收站
    EmptyTrash(index){
      this.RecycleBin.splice(index)
    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {
    unreadMessage(){
      return  `未读消息(${this.und.length})`
    },
    readMessage(){
      return  `已读消息(${this.read.length})`
    },
    recycleBin(){
      return  `回收站(${this.RecycleBin.length})`
    }
  },
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.und {
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}
</style>
