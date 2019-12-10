<template>
  <div>
    <div
        v-for="section in pageContents.accordionSections"
        :key="section.sectionTitle"
    >
      <h6 class="section-title">
        {{ section.sectionTitle }}
        <router-link
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
  </div>
</template>

<script>
    import questionsAndAnswers from "../assets/questionsAndAnswers/questionsAndAnswers";

    export default {
        name: "QuestionsAndAnswersAccordion",
        data() {
            return {
                pageContents: questionsAndAnswers.pageContents
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