<template>
  <div>
    <el-page-header @back="goBack" content="Manage" />
    <manage />
  </div>
</template>

<script>
import manage from '@/components/manage.vue';
export default {
  components: {
    manage
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  },
}
</script>