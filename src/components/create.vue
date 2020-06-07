<template>
  <div id="create">
    <el-input
      id="text-input"
      v-model="form.url"
      placeholder="https://"
      @keyup.enter.native="create"
    >
      <el-button style="width: 100px;font-size: 20px" slot="append" @click="create">GO</el-button>
    </el-input>
    <div id="record-wrapper">
      <div
        class="records"
        v-for="(item, index) in records"
        v-bind:key="index"
        @click="window.location.replace('/' + item.mapping_str)"
      >
        <el-row :gutter="20">
          <el-col :xs="20" :span="10">
            <a class="daims-url">https://daims.app/{{item.mapping_str}}</a>
          </el-col>
          <el-col :span="11" class="hidden-xs-only">
            <a class="url">{{item.url}}</a>
          </el-col>
          <el-col :span="4">
            <a class="hidden-sm-and-down">Token: </a>
            <a class="token">{{item.manage_token}}</a>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { get, set } from "@/utils/cookie.js";
const API = "https://url.api.miao.dev";
export default {
  data: function() {
    return {
      form: {
        url: "https://"
      },
      records: []
    };
  },
  created: function() {
    this.loadCookie();
  },
  methods: {
    async create() {
      if (!this.validate()) {
        this.$message({ message: "Invalid URL", type: "warning" });
        return;
      }
      let url = this.form.url;
      try {
        var data = (await this.$a.post(`${API}/?url=${url}`)).data;
        if (!data.mapping_str) throw data.Reason
        this.addRecordToCookie(data);
        this.$message({
          message: 'Success',
          type: 'success'
        });

      } catch (e) {
        this.err(`Failed Creating Record: ${e}`);
      }
      this.form.url = "https://"
    },
    validate() {
      return /https?:\/\/.+\..{2,}/.test(this.form.url);
    },
    loadCookie() {
      let cookie = get("str");
      if (!cookie) {
        console.log("Cannot find cookie, creating");
        set("str", []);
        this.records = [];
      } else this.records = cookie;
    },
    addRecordToCookie(obj) {
      let cookie = get("str");
      cookie.push(obj);
      set("str", cookie);
      this.loadCookie();
    },
    jump(str) {
      let url = `https://daims.app/${str}`
      window.location.href = url
    },
    err(msg) {
      this.$message({ message: msg, type: "warning" });
    }
  }
};
</script>

<style>
a {
  text-decoration: None;
}
#create {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#record-wrapper {
  padding: 10px;
  margin-top: 10px;
  width: 100%;
}
.records {
  border-radius: 4px;
  margin-bottom: 10px;
  cursor: pointer;
  background: rgb(255, 255, 255);
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  transition: all 0.2s ease;
}

.records:hover {
  box-shadow: 0 1px 5px rgba(26,26,26,.25)
}

.el-row {
  min-height: 65px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
}

.el-col {
  text-align: left;
}

.daims-url {
  color: #0236b9;
}

.el-input-group{
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

#text-input {
  height: 70px;
  font-size: 30px;

}
</style>