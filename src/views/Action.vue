<template>
  <div>
    <div v-if="this.mode === 'verifyEmail'">
      <VerifyMail :code="code" />
    </div>
    <div v-else-if="this.mode === 'resetPassword'">
      <ResetPassword :code="code" />
    </div>
  </div>
</template>

<script>
import ResetPassword from "../components/ResetPassword";
import VerifyMail from "../components/VerifyMail";

export default {
  data() {
    return {
      mode: "",
      code: "",
    };
  },
  created: async function () {
    this.mode = this.$router.currentRoute.query.mode;
    this.code = this.$router.currentRoute.query.oobCode;
  },
  components: {
    ResetPassword,
    VerifyMail,
  },
};
</script>

<style>
</style>