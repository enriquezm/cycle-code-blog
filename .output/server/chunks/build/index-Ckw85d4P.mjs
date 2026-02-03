import { _ as __nuxt_component_0$1 } from './nuxt-link-e9R7JGbz.mjs';
import { withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useAsyncData, q as queryContent } from './query-DorxOe7R.mjs';
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
import 'perfect-debounce';
import '../_/index.mjs';
import './preview-C2JMzfyq.mjs';
import 'vue-router';

const _sfc_main$1 = {
  __name: "ArticleList",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: articles } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "articles",
      () => queryContent("/articles").sort({ date: 1 }).find()
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "cards" }, _attrs))} data-v-1207aa20><!--[-->`);
      ssrRenderList(unref(articles), (article) => {
        _push(`<div class="card" data-v-1207aa20><img${ssrRenderAttr("src", article.image || "/images/shift-bike.png")}${ssrRenderAttr("alt", article.title)} class="card-image" data-v-1207aa20>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: article._path,
          class: "card-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(article.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(article.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArticleList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1207aa20"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ArticleList = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-83c18925><div class="hero" data-v-83c18925><h1 class="hero__title" data-v-83c18925>CYCLE CODE. CYCLE CODE. <span class="hero__title--color" data-v-83c18925>CYCLE CODE.</span> CYCLE CODE. CYCLE CODE. CYCLE CODE.</h1></div><div class="content" data-v-83c18925>`);
  _push(ssrRenderComponent(_component_ArticleList, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-83c18925"]]);

export { index as default };
//# sourceMappingURL=index-Ckw85d4P.mjs.map
