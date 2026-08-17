<script setup>
import { useData } from 'vitepress'
const { frontmatter, theme } = useData()
</script>

<template>
  <div class="vg-byline" v-if="frontmatter.authors?.length || frontmatter.version">
    <span>
      {{ theme.byline.prefix }}
      <a :href="theme.byline.contributorsLink">{{ theme.byline.community }}</a>
    </span>
    <template v-if="frontmatter.authors?.length">
      <span class="vg-dot">·</span>
      <span class="vg-names">{{ frontmatter.authors.join(', ') }}</span>
    </template>
    <template v-if="frontmatter.version">
      <span class="vg-dot">·</span>
      <span class="vg-chip">{{ theme.byline.checkedAgainst }} {{ frontmatter.version }}</span>
    </template>
  </div>
</template>
