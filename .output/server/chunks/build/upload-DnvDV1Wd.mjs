import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass } from 'vue/server-renderer';
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
  __name: "upload",
  __ssrInlineRender: true,
  setup(__props) {
    const articleName = ref("");
    ref([]);
    const uploading = ref(false);
    const message = ref("");
    const messageType = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "upload-tool" }, _attrs))} data-v-de01dd17><h1 data-v-de01dd17>Article Image Upload</h1><form class="upload-form" data-v-de01dd17><div class="form-group" data-v-de01dd17><label for="articleName" data-v-de01dd17>Article Folder Name:</label><input${ssrRenderAttr("value", unref(articleName))} type="text" id="articleName" placeholder="e.g., january-2026" required data-v-de01dd17></div><div class="form-group" data-v-de01dd17><label for="images" data-v-de01dd17>Select Images:</label><input type="file" id="images" multiple accept="image/*" required data-v-de01dd17></div><button type="submit"${ssrIncludeBooleanAttr(unref(uploading)) ? " disabled" : ""} data-v-de01dd17>${ssrInterpolate(unref(uploading) ? "Uploading..." : "Upload Images")}</button></form>`);
      if (unref(message)) {
        _push(`<div class="${ssrRenderClass([unref(messageType), "message"])}" data-v-de01dd17>${ssrInterpolate(unref(message))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/upload.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const upload = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-de01dd17"]]);

export { upload as default };
//# sourceMappingURL=upload-DnvDV1Wd.mjs.map
