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

    <QuestionsAnswersAccordion />

    <References />

  </div>
</template>

<script>
    import ContactUs from "../components/ContactUs";
    import References from "../components/References";
    import QuestionsAnswersAccordion from "../components/QuestionsAnswersAccordion";

    import questionsAndAnswers from "../assets/questionsAndAnswers/questionsAndAnswers";


    export default {
        name: "QuestionsAndAnswers",
        components: {
            ContactUs,
            References,
            QuestionsAnswersAccordion
        },
        data() {
            return {
                title: process.env.VUE_APP_TITLE,
                developmentTier: process.env.VUE_APP_TIER,
                feedbackEmailAddress: process.env.VUE_APP_FEEDBACK_EMAIL_ADDRESS,
                pageContents: questionsAndAnswers.pageContents,
                rerender: false
            };
        }
    }
</script>

<style scoped lang="scss">
  #container-questions-answers {
    background: white;
    margin: 0 auto;
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