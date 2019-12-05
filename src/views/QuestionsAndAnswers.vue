<template>
  <div
    id="container-questions-answers"
    class="usa-prose"
  >
    <h1>{{ pageContents.title }} {{ developmentTier }}</h1>
    <p>
      {{ pageContents.introText }}
    </p>

    <ContactUs />

    <hr>

    <div
      v-for="section in pageContents.accordionSections"
      :key="section.sectionTitle"
    >
      <h6 class="section-title">
        {{ section.sectionTitle }}
        <router-link
          v-ga="$ga.commands.trackName.bind(this, 'button-return', 'click', 'user returned to map from questions and answers')"
          to="/"
        >
          <button>
            back to map
          </button>
        </router-link>
      </h6>

      <div class="usa-accordion usa-accordion--bordered">
        <div
          v-for="question in section.questionsAndAnswers"
          :key="question.question"
        >
          <h2 class="usa-accordion__heading">
            <button
              class="usa-accordion__button"
              aria-expanded="true"
              :aria-controls="question.question"
            >
              {{ question.question }}
            </button>
          </h2>
          <div
            :id="question.question"
            class="usa-accordion__content usa-prose"
          >
            <p><span v-html="question.answer" /></p>
          </div>
        </div>
      </div>
    </div>

    <References />
  </div>
</template>

<script>
    import ContactUs from "../components/ContactUs";
    import References from "../components/References";

    import questionsAndAnswers from "../assets/questionsAndAnswers/questionsAndAnswers";


    export default {
        name: "QuestionsAndAnswers",
        components: {
            ContactUs,
            References
        },
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

    .section-title {
      margin: 0.5em 0 0.5em 0;
      font-size: larger;

      button {
        float: right;
        margin: 0 0 10px 0;
        background: #003366;
        color: #ffffff;
        border: none;
        outline: none;
        padding: 2px 10px 5px 10px;
        border-radius: 5px;
        font-size: .9em;
        font-weight: bold;
      }
    }

    hr {
      margin: 1em 0 1em 0;
    }
  }
</style>