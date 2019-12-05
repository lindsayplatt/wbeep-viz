<template>
  <div
    id="container-contact-us"
    class="usa-prose"
  >
    <p>
      Contact Us:
      <a
        v-ga="$ga.commands.trackName.bind(this, 'feedback email-answer page', 'click', 'user selected feedback email link on answers page')"
        :href="'mailto:' + feedbackEmailAddress"
      >
        {{ feedbackEmailAddress }}
      </a>
    </p>
  </div>
</template>
<script>


    export default {
        name: "ContactUs",
        data() {
            return {
                feedbackEmailAddress: process.env.VUE_APP_FEEDBACK_EMAIL_ADDRESS
            };
        },
    }
</script>

<style scoped lang="scss">

</style>