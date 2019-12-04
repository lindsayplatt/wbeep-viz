<template>
  <div
    id="container-questions-answers"
    class="usa-prose"
  >
    <h1>{{ pageContents.title }} {{ developmentTier }}</h1>
    <p>
      {{ pageContents.introText }}
    </p>
    <p>
      Contact Us:
      <a
        v-ga="$ga.commands.trackName.bind(this, 'feedback email-answer page', 'click', 'user selected feedback email link on answers page')"
        :href="'mailto:' + feedbackEmailAddress"
      >
        {{ feedbackEmailAddress }}
      </a>
    </p>

    <h3>{{ pageContents.subtitle }}</h3>
    <hr>









    <h6>Bordered</h6>

    <div class="usa-accordion usa-accordion--bordered">
      <div
        v-for="question in pageContents.questions"
        :key="question"
      >
        <!-- Use the accurate heading level to maintain the document outline -->
        <h2 class="usa-accordion__heading">
          <button
            class="usa-accordion__button"
            aria-expanded="true"
            aria-controls="b-a1"
          >
            First Amendment
          </button>
        </h2>
        <div
          id="b-a1"
          class="usa-accordion__content usa-prose"
        >
          <p>Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import questionsAndAnswers from "../assets/questionsAndAnswers/questionsAndAnswers";

    export default {
        name: "QuestionsAndAnswers",
        props: {
            title: {
                type: String,
                default: process.env.VUE_APP_TITLE
            },
            developmentTier: {
                type: String,
                default: process.env.VUE_APP_TIER
            }
        },
        data() {
            return {
                feedbackEmailAddress: process.env.VUE_APP_FEEDBACK_EMAIL_ADDRESS,
                pageContents: questionsAndAnswers.pageContents
            };
        },
        methods: {
            runGoogleAnalytics(eventName, action, label) {
                this.$ga.event(eventName, action, label)
            }
        }
    }
</script>

<style scoped lang="scss">
  #container-questions-answers {
    background: white;
    margin: 0em auto;
    padding: 3em 2em 2em 2em;
    width: 85%;
    max-width: 50em;

    hr {
      margin-top: 5px;
    }



    .usa-button--inverse {
      float: right;
    }
  }
</style>