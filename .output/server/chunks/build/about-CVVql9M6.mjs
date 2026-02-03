import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-787cef24><h1 data-v-787cef24>About.</h1><p data-v-787cef24>This started as friends riding bikes. Nothing more than that.</p><p data-v-787cef24>Coffee stops that turned into long conversations. Rides that went nowhere on purpose. An appreciation for how bikes look, how they feel, and the places they take you.</p><p data-v-787cef24>We care about fashion as much as function. Adventure over efficiency. Friendship over metrics.</p><p data-v-787cef24>There&#39;s a place here for going fast \u2014 but most of the time, we&#39;re choosing to slow down. To ride together. To step out of the rush and into something simpler.</p><p data-v-787cef24>This isn&#39;t a team. It&#39;s a rhythm.</p><p data-v-787cef24>If that rhythm sounds familiar, ride with us.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-787cef24"]]);

export { about as default };
//# sourceMappingURL=about-CVVql9M6.mjs.map
