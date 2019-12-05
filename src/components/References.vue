<template>
  <div id="referencesContainer" class="usa-prose">
    <h2>{{ title }}</h2>
    <div
      v-for="reference in references"
      :key="reference"
    >
      <p class="about-ref">
        {{ reference.reference }}
        <a
            :href="reference.href"
            target="_blank"
        >
          <span v-html="reference.href" />
        </a>
      </p>
    </div>
  </div>
</template>
<script>
  import references from "../assets/references/references";
  import questionsAndAnswers from "../assets/questionsAndAnswers/questionsAndAnswers";

  export default {
      name: "References",
      data() {
          return {
              title: references.referenceSection.title,
              references: references.referenceSection.references
          };
      },
  }
</script>

<style scoped lang="scss">
  #referencesContainer {
    margin-top: 3em;
  }

</style>