<template>
  <div>
    <el-page-header @back="goBack" content="Manage" />
    <manage />
  </div>
</template>

<script>
import manage from '@/components/manage.vue';
import {PageHeader} from 'element-ui'
export default {
  components: {
    manage,
    'el-page-header': PageHeader
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  },
}
</script>