<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import FooterItem from "@/components/FooterItem.vue";
import LoremIpsum from "vue-lorem-ipsum";

export default defineComponent({
  components: { FooterItem, LoremIpsum, NavBar },
  data() {
    return {
      modal: false,
    };
  },
  methods: {
    log(what: any) {
      console.log(what);
    },
  },
});
</script>

<template>
  <nav-bar />
  <header class="container">
    <hgroup>
      <h1>Homepage</h1>
      <h2>Basic theme examples and usage.</h2>
    </hgroup>
  </header>
  <main class="container">
    <!-- Preview -->
    <section id="preview">
      <h2>Preview</h2>
      <lorem-ipsum add="1p" />
      <form-kit type="form" id="example1" :actions="false" @submit="log">
        <div class="grid">
          <form-kit type="text" name="first_name" placeholder="First name" />
          <form-kit type="email" name="email" placeholder="Email address" />
          <form-kit type="submit" />
        </div>
        <form-kit type="checkbox" name="terms" role="switch" validation="accepted">
          <template #label="context">
            <span :class="context.classes.label"> I accept the <a href="https://picocss.com">privacy policy</a>. </span>
          </template>
        </form-kit>
      </form-kit>
    </section>
    <!-- ./ Preview -->

    <!-- Typography-->
    <section id="typography">
      <h2>Typography</h2>
      <lorem-ipsum add="1p" />

      <!-- Blockquote-->
      <blockquote>
        <lorem-ipsum add="15w" />
        <footer>
          <cite>- <lorem-ipsum add="5w" /></cite>
        </footer>
      </blockquote>

      <!-- Lists-->
      <h3>Lists</h3>
      <ul>
        <li><lorem-ipsum add="5w" /></li>
        <li><lorem-ipsum add="5w" /></li>
        <li><lorem-ipsum add="5w" /></li>
        <li><lorem-ipsum add="5w" /></li>
      </ul>
      <ol>
        <li><lorem-ipsum add="5w" /></li>
        <li><lorem-ipsum add="5w" /></li>
        <li><lorem-ipsum add="5w" /></li>
        <li><lorem-ipsum add="5w" /></li>
      </ol>

      <!-- Inline text elements-->
      <h3>Inline text elements</h3>
      <div class="grid">
        <p><a href="#">Primary link</a></p>
        <p><a href="#" class="secondary">Secondary link</a></p>
        <p><a href="#" class="contrast">Contrast link</a></p>
      </div>
      <div class="grid">
        <p><strong>Bold</strong></p>
        <p><em>Italic</em></p>
        <p><u>Underline</u></p>
      </div>
      <div class="grid">
        <p><del>Deleted</del></p>
        <p><ins>Inserted</ins></p>
        <p><s>Strikethrough</s></p>
      </div>
      <div class="grid">
        <p><small>Small </small></p>
        <p>Text <sub>Sub</sub></p>
        <p>Text <sup>Sup</sup></p>
      </div>
      <div class="grid">
        <p><abbr title="Abbreviation" data-tooltip="Abbreviation">Abbr.</abbr></p>
        <p><kbd>Kbd</kbd></p>
        <p><mark>Highlighted</mark></p>
      </div>

      <!-- Headings-->
      <h3>Heading 3</h3>
      <lorem-ipsum add="1p" />
      <h4>Heading 4</h4>
      <lorem-ipsum add="1p" />
      <h5>Heading 5</h5>
      <lorem-ipsum add="1p" />
      <h6>Heading 6</h6>
      <lorem-ipsum add="1p" />

      <!-- Medias-->
      <figure>
        <img
          src="https://picocss.com/examples/preview/assets/aleksandar-jason-a562ZEFKW8I-unsplash-2000x1000.jpg"
          alt="Minimal landscape"
        />
        <figcaption>
          Image from <a href="https://unsplash.com/photos/a562ZEFKW8I" target="_blank">unsplash.com</a>
        </figcaption>
      </figure>
    </section>
    <!-- ./ Typography-->

    <!-- Buttons-->
    <section id="buttons">
      <h2>Buttons</h2>
      <div class="grid">
        <button>Primary</button>
        <button class="secondary">Secondary</button>
        <button class="contrast">Contrast</button>
      </div>
      <div class="grid">
        <button class="outline">Primary outline</button>
        <button class="outline secondary">Secondary outline</button>
        <button class="outline contrast">Contrast outline</button>
      </div>
    </section>
    <!-- ./ Buttons -->

    <!-- Form elements-->
    <section id="form">
      <form-kit type="form" id="example2" :actions="false" @submit="log">
        <h2>Form elements</h2>
        <form-kit type="search" name="search" label="Search" placeholder="Search" />
        <form-kit
          type="text"
          name="text"
          label="Text"
          placeholder="Text"
          help="Cras fermentum velit vitae auctor aliquet."
          validation="required:trim"
        />
        <form-kit type="email" name="email" label="Email" placeholder="Email" validation="email" />
        <form-kit type="password" name="password" label="Password" placeholder="Password" />
        <form-kit type="url" name="url" label="Url" placeholder="Url" />
        <form-kit type="select" name="select" label="Select" placeholder="Select..." :options="['.']" />
        <form-kit type="textarea" name="textarea" label="Textarea" placeholder="Textarea" rows="5" />
        <form-kit type="range" name="range" label="Range slider" />
        <form-kit type="color" name="color" label="Color" />
        <div class="grid">
          <form-kit type="date" name="date" label="Date" />
          <form-kit type="time" name="time" label="Time" />
          <form-kit type="text" name="disabled" label="Disabled" placeholder="Disabled" disabled />
        </div>
        <div class="grid">
          <form-kit
            type="checkbox"
            name="checkboxes"
            label="Checkboxes"
            :options="[
              { value: 1, label: 'Checkbox 1' },
              { value: 2, label: 'Checkbox 2' },
            ]"
            :sections-schema="{
              options: { $el: null },
              option: { $el: 'label' },
            }"
          />
          <form-kit
            type="radio"
            name="radios"
            label="Radios"
            validation="required"
            :options="[
              { value: 1, label: 'Radio 1' },
              { value: 2, label: 'Radio 2' },
            ]"
            :sections-schema="{
              options: { $el: null },
              option: { $el: 'label' },
            }"
          />
          <form-kit
            type="checkbox"
            name="switches"
            label="Switches"
            :options="[
              { value: 1, label: 'Switch 1', attrs: { role: 'switch' } },
              { value: 2, label: 'Switch 2', attrs: { role: 'switch' } },
            ]"
            :sections-schema="{
              options: { $el: null },
              option: { $el: 'label' },
            }"
          />
        </div>
        <form-kit type="file" name="file" label="File browser" multiple="true" />
        <input type="reset" value="Reset" @click.prevent="$formkit.reset('example2')" />
        <form-kit type="submit" label="Submit" />
      </form-kit>
    </section>
    <!-- ./ Form elements-->

    <!-- Tables -->
    <section id="tables">
      <h2>Tables</h2>
      <figure>
        <table role="grid">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
          </tbody>
        </table>
      </figure>
    </section>
    <!-- ./ Tables -->

    <!-- Modal -->
    <section id="modal">
      <h2>Modal</h2>
      <button class="contrast" @click="modal = !modal">Launch demo modal</button>
    </section>
    <dialog id="modal-example" :open="modal">
      <article>
        <a href="#" aria-label="Close" class="close" @click.prevent="modal = false"></a>
        <h3>Confirm your action!</h3>
        <lorem-ipsum add="1p" />
        <footer>
          <a href="#" role="button" @click.prevent="modal = false" class="secondary">Cancel</a>
          <a href="#" role="button" @click.prevent="modal = false">Confirm</a>
        </footer>
      </article>
    </dialog>
    <!-- ./ Modal -->

    <!-- Accordions -->
    <section id="accordions">
      <h2>Accordions</h2>
      <details>
        <summary>Accordion 1</summary>
        <lorem-ipsum add="1p" />
      </details>
      <details open>
        <summary>Accordion 2</summary>
        <ul>
          <li><lorem-ipsum add="10w" /></li>
          <li><lorem-ipsum add="10w" /></li>
          <li><lorem-ipsum add="10w" /></li>
          <li><lorem-ipsum add="10w" /></li>
        </ul>
      </details>
    </section>
    <!-- ./ Accordions -->

    <!-- Article-->
    <article id="article">
      <h2>Article</h2>
      <lorem-ipsum add="1p" />
      <footer>
        <small><lorem-ipsum add="10w" /></small>
      </footer>
    </article>
    <!-- ./ Article-->

    <!-- Progress -->
    <section id="progress">
      <h2>Progress bar</h2>
      <progress id="progress-1" value="25" max="100"></progress>
      <progress id="progress-2"></progress>
    </section>
    <!-- ./ Progress -->

    <!-- Loading -->
    <section id="loading">
      <h2>Loading</h2>
      <article aria-busy="true"></article>
      <button aria-busy="true">Please wait…</button>
    </section>
    <!-- ./ Loading -->

    <!-- Code -->
    <section id="code">
      <h2>Code</h2>
      <code> { "foo": "bar", "wiz": "bang" } </code>
    </section>
    <!-- ./ Code -->
  </main>
  <footer-item class="container" />
</template>
