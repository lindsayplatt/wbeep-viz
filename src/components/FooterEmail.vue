<template>
  <div id="footerEmailContainer">
    <p>
      Have feedback? Let us know by sending an email to
      <a
        v-ga="$ga.commands.trackName.bind(this, 'feedback email-prefooter', 'click', 'user selected feedback prefooter email link')"
        :href="'mailto:' + feedbackEmailAddress"
      >gs-w_onhm@usgs.gov</a>
    </p>
  </div>
</template>
<script>
export default {
    name: "FooterEmail",
    data() {
        return {
            feedbackEmailAddress: process.env.VUE_APP_FEEDBACK_EMAIL_ADDRESS
        };
    },
}
</script>

<style scoped lang="scss">
    #footerEmailContainer{
        padding: 2px 10px;
        text-align: center;

        p{
            margin: 0;
            font-size: .8em;
        }

        a{
            color: #003366;
            text-decoration: none;
            font-weight: bold; 
            white-space: nowrap;
        }
    }
</style>
