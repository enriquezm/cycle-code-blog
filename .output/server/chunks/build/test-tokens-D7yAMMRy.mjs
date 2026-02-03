import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';

const _sfc_main = {
  __name: "test-tokens",
  __ssrInlineRender: true,
  setup(__props) {
    const viewportWidth = ref(0);
    const breakpoint = ref("mobile");
    const tokens = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "test-page" }, _attrs))} data-v-3a95f548><h1 data-v-3a95f548>Responsive Tokens Test</h1><p class="info" data-v-3a95f548>Resize your browser window to see the responsive tokens in action.</p><p class="info" data-v-3a95f548>Mobile: 0-767px, Tablet: 768-1023px, Desktop: 1024px+</p><div class="test-section" data-v-3a95f548><h2 data-v-3a95f548>Typography Hierarchy Test</h2><div class="hero-test" data-v-3a95f548>Hero Title (var(--font-size-hero))</div><div class="h1-test" data-v-3a95f548>H1 Heading (var(--font-size-h1))</div><div class="h2-test" data-v-3a95f548>H2 Heading (var(--font-size-h2))</div><div class="h3-test" data-v-3a95f548>H3 Heading (var(--font-size-h3))</div><div class="body-test" data-v-3a95f548>Body Text (var(--font-size-body))</div><div class="small-test" data-v-3a95f548>Small Text (var(--font-size-small))</div></div><div class="test-section" data-v-3a95f548><h2 data-v-3a95f548>Spacing Tokens Test</h2><div class="spacing-demo" data-v-3a95f548><div class="spacing-box" style="${ssrRenderStyle({ padding: "var(--spacing-xs)" })}" data-v-3a95f548>xs</div><div class="spacing-box" style="${ssrRenderStyle({ padding: "var(--spacing-sm)" })}" data-v-3a95f548>sm</div><div class="spacing-box" style="${ssrRenderStyle({ padding: "var(--spacing-md)" })}" data-v-3a95f548>md</div><div class="spacing-box" style="${ssrRenderStyle({ padding: "var(--spacing-lg)" })}" data-v-3a95f548>lg</div><div class="spacing-box" style="${ssrRenderStyle({ padding: "var(--spacing-xl)" })}" data-v-3a95f548>xl</div><div class="spacing-box" style="${ssrRenderStyle({ padding: "var(--spacing-2xl)" })}" data-v-3a95f548>2xl</div><div class="spacing-box" style="${ssrRenderStyle({ padding: "var(--spacing-3xl)" })}" data-v-3a95f548>3xl</div></div></div><div class="test-section" data-v-3a95f548><h2 data-v-3a95f548>Computed Values</h2><p data-v-3a95f548><strong data-v-3a95f548>Viewport:</strong> ${ssrInterpolate(viewportWidth.value)}px (${ssrInterpolate(breakpoint.value)})</p><ul data-v-3a95f548><!--[-->`);
      ssrRenderList(tokens.value, (token) => {
        _push(`<li data-v-3a95f548><code data-v-3a95f548>${ssrInterpolate(token.name)}</code>: ${ssrInterpolate(token.value)}</li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test-tokens.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const testTokens = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3a95f548"]]);

export { testTokens as default };
//# sourceMappingURL=test-tokens-D7yAMMRy.mjs.map
