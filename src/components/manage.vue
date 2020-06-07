<template>
  <div id="manage">
    <el-table
      id="table"
      ref="manageTable"
      :data="tableData"
      highlight-current-row
      @current-change="change"
    >
      <el-table-column label="Index" type="index" width="70"></el-table-column>
      <el-table-column label="Mapping String" prop="mapping_str" width="150"></el-table-column>
      <el-table-column label="Url" prop="url" width="200"></el-table-column>
      <el-table-column label="Update time" prop="update_time"></el-table-column>
    </el-table>
    <el-button
      type="primary"
      icon="el-icon-edit"
      @click="updateRecord"
      v-bind:disabled="currentRow === null"
      round
    >Edit</el-button>
    <el-button
      type="danger"
      icon="el-icon-delete"
      @click="deleteRecord"
      v-bind:disabled="currentRow === null"
      round
    >Delete</el-button>
  </div>
</template>

<script>
import {Table, TableColumn} from 'element-ui';
const API = "http://127.0.0.1:8000";
export default {
  components: {'el-table': Table, 'el-table-column': TableColumn},
  data() {
    return {
      tableData: [],
      currentRow: null
    };
  },
  created: async function() {
    await this.loadTableData();
  },
  methods: {
    change(val) {
      this.currentRow = val;
    },
    async loadTableData() {
      this.tableData =
        Object.values((await this.$a.get(`${API}/list`)).data) ?? [];
    },
    async updateRecord() {
      let url = await this.getUrl();
      if (typeof url === "undefined") return;
      let token = await this.getToken();
      if (typeof token === "undefined") return;
      let str = this.currentRow.mapping_str;
      try {
        await this.$a.put(`${API}/${str}?url=${url}&manage_token=${token}`);
      } catch (e) {
        this.err(`Failed editing: ${e}`);
        return;
      }
      this.$message({
        message: "Done",
        type: "success"
      });
      await this.loadTableData()
    },
    async deleteRecord() {
      try {
        await this.$confirm('This will delete the record, do you want to continue?', {
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            type: 'warning'
        })
      } catch(e) { return }
      let token = await this.getToken();
      if (typeof token === "undefined") return;
      let str = this.currentRow.mapping_str;
      try {
        await this.$a.delete(`${API}/${str}?manage_token=${token}`);
      } catch (e) {
        this.err(`Failed deleting: ${e}`);
        return;
      }
      this.$message({
        message: "Done",
        type: "success"
      });
      await this.loadTableData()
    },
    async getUrl() {
      try {
        return (await this.$prompt("Url (With scheme)", {
          confirmButtonText: "Ok",
          cancelButtonText: "Cancel",
          inputPattern: /https?:\/\/.+\..{2,}/,
          inputErrorMessage: "Invalid Url"
        })).value
      } catch (e) {
        this.err(e);
      }
    },
    async getToken() {
      try {
        return (await this.$prompt("Token", {
          confirmButtonText: "Ok",
          cancelButtonText: "Cancel",
          inputValidator: str => str.length === 4,
          inputErrorMessage: "Length should be 4"
        })).value
      } catch (e) {
        this.err(e);
      }
    },
    err(msg) {
      this.$message({ message: msg, type: "warning" });
    }
  }
};
</script>

<style>
#manage {
  padding: 20px 0;
  height: 0px;
  box-sizing: border-box;
}
#table {
  margin-bottom: 20px;
}
</style>