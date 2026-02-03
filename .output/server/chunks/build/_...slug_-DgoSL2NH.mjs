import _sfc_main$1 from './ContentRenderer-BJWY95KG.mjs';
import { withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
import { u as useAsyncData, q as queryContent } from './query-DorxOe7R.mjs';
import './ContentRendererMarkdown-D0uW1Fwj.mjs';
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
import 'property-information';
import './node-DPfXEbjB.mjs';
import './preview-C2JMzfyq.mjs';
import 'vue-router';
import 'perfect-debounce';
import '../_/index.mjs';

const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { path } = useRoute();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`content-${path}`, () => queryContent(path).findOne())), __temp = await __temp, __restore(), __temp);
    const isDev = false;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-150323c1>`);
      if (unref(data)) {
        _push(`<article class="${ssrRenderClass([{ "dev-mode": unref(isDev) }, "article"])}" data-v-150323c1><h1 data-v-150323c1>${ssrInterpolate(unref(data).title)}</h1>`);
        _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(data) }, null, _parent));
        _push(`</article>`);
      } else {
        _push(`<article class="article" data-v-150323c1><h1 data-v-150323c1>Not found</h1><p data-v-150323c1>The page you are looking for does not exist.</p></article>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-150323c1"]]);

export { ____slug_ as default };
//# sourceMappingURL=_...slug_-DgoSL2NH.mjs.map
