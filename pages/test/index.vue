<template>
  <div class="container">


      <h1 class="title">
        pages/test/index.vue
      </h1>
      <br><br>
      <div class="flex">

<!-- *** *** async asyncData () *** *** -->

      <div class="col first">

        <h4 class="label">async asyncData()</h4>

        <section class="text">
          <prismic-rich-text :field="home.data.header" /><br><br>
          <prismic-rich-text :field="home.data.text" /><br><br>
        </section>

        <section class="images">

          Multiple image views PICTURE TAG <br><br>

          <picture>
            <source media="(min-width: 769px)" :srcset="home.data.image.desktop.ur">
            <source media="(min-width: 479px)" :srcset="home.data.image.tablet.url">
            <img :src="home.data.image.url" :alt="home.data.image.alt">
          </picture><br><br>

          Multiple image views PRISMIC-IMAGE TAG <br><br>

          <prismic-image :field="home.data.image" /><br><br>

          Singel view PRISMIC-IMAGE TAG <br><br>

          <prismic-image :field="home.data.image_singel" /> <br><br>
        </section>

        <!-- SLICES loop inlined -->

        <section class="slices inlined">
          <br><br>
          <h2>As slice [page inlined]</h2>

          <div v-for="(slice, index) in home.data.body" :key="'slice-' + index">
            <template v-if="slice.slice_type === 'image'">
              <slice-image :sliceRaw="slice"/>
            </template>
          </div>
        </section>

        <!-- SLICES loop as component -->

        <section class="slices component">
          <h2>As slice [components/slices.vue]</h2>
          <site-slices :slicesRaw="home.data.body"/>
        </section>

      </div>

<!-- *** *** computed() *** *** -->

      <div class="col second">

        <h4 class="label">computed: - VUEX</h4>

        <section class="text">
          <prismic-rich-text :field="testHome.header" /><br><br>
          <prismic-rich-text :field="testHome.text" /><br><br>
        </section>

        <section class="images">

          Multiple image views PICTURE TAG <br><br>

          <picture>
            <source media="(min-width: 769px)" :srcset="testHome.image.desktop.ur">
            <source media="(min-width: 479px)" :srcset="testHome.image.tablet.url">
            <img :src="testHome.image.url" :alt="testHome.image.alt">
          </picture><br><br>

          Multiple image views PRISMIC-IMAGE TAG <br><br>

          <prismic-image :field="testHome.image" /><br><br>

          Singel view PRISMIC-IMAGE TAG <br><br>

          <prismic-image :field="testHome.image_singel" /> <br><br>
        </section>

        <!-- SLICES loop inlined -->

        <section class="slices inlined">
          <br><br>
          <h2>As slice [page inlined]</h2>

          <div v-for="(slice, index) in testHome.body" :key="'slice-' + index">
            <template v-if="slice.slice_type === 'image'">
              <slice-image :sliceRaw="slice"/>
            </template>
          </div>
        </section>

        <!-- SLICES loop as component -->

        <section class="slices component">
          <h2>As slice [components/slices.vue]</h2>
          <site-slices :slicesRaw="testHome.body"/>
        </section>

      </div>

<!-- *** *** data() *** *** -->

      <div class="col third">

        <h4 class="label">data() - VUEX</h4>


        <section class="text">
          <prismic-rich-text :field="testGet.header" /><br><br>
          <prismic-rich-text :field="testGet.text" /><br><br>
        </section>

        <section class="images">

          Multiple image views PICTURE TAG <br><br>

          <picture>
            <source media="(min-width: 769px)" :srcset="testGet.image.desktop.ur">
            <source media="(min-width: 479px)" :srcset="testGet.image.tablet.url">
            <img :src="testGet.image.url" :alt="testGet.image.alt">
          </picture><br><br>

          Multiple image views PRISMIC-IMAGE TAG <br><br>

          <prismic-image :field="testGet.image" /><br><br>

          Singel view PRISMIC-IMAGE TAG <br><br>

          <prismic-image :field="testGet.image_singel" /> <br><br>
        </section>

        <!-- SLICES loop inlined -->

        <section class="slices inlined">
          <br><br>
          <h2>As slice [page inlined]</h2>

          <div v-for="(slice, index) in testGet.body" :key="'slice-' + index">
            <template v-if="slice.slice_type === 'image'">
              <slice-image :sliceRaw="slice"/>
            </template>
          </div>
        </section>

        <!-- SLICES loop as component -->

        <section class="slices component">
          <h2>As slice [components/slices.vue]</h2>
          <site-slices :slicesRaw="testGet.body"/>
        </section>

      </div>


    </div>

  </div>

</template>

<script>

import siteSlices   from '~/components/slices.vue'
import sliceImage  from '~/components/slices/image.vue'

import { mapState } from 'vuex'

export default {
  components: {
    siteSlices,
    sliceImage
  },
  data() {
    return {
      testGet: this.$store.getters.getTestHome
    }
  },
  computed: mapState(['testHome']),
  async asyncData ({ $prismic }) {
    console.log('- - - - - - - - - - - - - - -  async asyncData - TESTHOME')
    const home = await $prismic.api.getSingle('testhome')
    // const slices = start.data.body
    return { home }
  }
}
</script>

<style>

img {
  width: 320px;
  height: auto;
}

.flex {
  background: #eee;
  display: flex;
  flex-wrap: wrap;
  border-radius: 6px;
}

.col {
  flex-grow: 1;
  width: 33%;
  padding: 24px 0;
}

.second {
  background: #ddd;
}
.third {
  background: #ccc;
}

.label {
  line-height: 1;
  padding: 8px 12px;
  border-radius: 6px;
  background: #000;
  display: inline-block;
  color: #fff;
  margin: 0 auto 24px;
}

.container {
  margin: 40px auto;
  min-height: 100vh;
  width: 80%;
  min-width: 300px;
  text-align: center;

}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 40px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 24px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
