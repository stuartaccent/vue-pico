<script lang="ts">
import { defineComponent } from "vue";
import { themeService } from "@/services/theme";

export default defineComponent({
  computed: {
    current_style: {
      get() {
        return themeService.state.style;
      },
      set(value) {
        themeService.switch(value);
      },
    },
  },
  watch: {
    current_style(newValue) {
      if (newValue) {
        document.documentElement.dataset.theme = newValue;
      } else {
        delete document.documentElement.dataset.theme;
      }
    },
  },
});
</script>

<template>
  <nav class="container-fluid">
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
    </ul>
    <ul>
      <li><strong>Pico.css</strong></li>
    </ul>
    <ul>
      <li>
        <details role="list" dir="rtl">
          <summary aria-haspopup="listbox" role="link">Theme</summary>
          <ul role="listbox">
            <li><a @click="current_style = ''">Auto</a></li>
            <li><a @click="current_style = 'light'">Light</a></li>
            <li><a @click="current_style = 'dark'">Dark</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </nav>
</template>
