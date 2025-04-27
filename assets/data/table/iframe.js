/**
 * 表格内容
 *
 * type 标签类型
 * - text 文字
 * - text-br 需要换行的文字
 * - br 换行
 *
 * - note 带红色字体的文字
 * - - content: ['红色文本'， "普通文本"]
 *
 * proto 属性
 * 如 proto: `src="xxx", id="xx", ...`
 */
const _iframe = {
  thead: ["属性", "值", "描述"],
  tbody: [
    { type: "text", content: "align", proto: "" },
    {
      type: "text-br",
      content: [
        "left：向左对齐。",
        "right：向右对齐。",
        "top：在顶部对齐。",
        "middle：居中对齐。",
        "bottom：在底部对齐。",
      ],
    },
    {
      type: "note",
      content: [
        "HTML5 不支持。HTML 4.01 已废弃。",
        "规定如何根据周围的元素来对齐&lt;iframe&gt;（浮动对齐）。",
      ],
    },
    { type: "text", content: "frameborder" },
    {
      type: "text-br",
      content: ["1：默认。开启边框。", "0：关闭边框。"],
    },
    {
      type: "note",
      content: ["HTML5 不支持。", "规定是否显示&lt;iframe&gt;周围的边框。"],
    },
    { type: "text", content: "height" },
    {
      type: "i",
      content: "pixels",
    },
    {
      type: "text",
      content: "规定&lt;iframe&gt;的高度。",
    },
    {
      type: "text",
      content: "longdesc",
    },
    {
      type: "i",
      content: "URL",
    },
    {
      type: "note",
      content: [
        "HTML5 不支持。几乎所有的主流浏览器都不支持 longdesc 属性。",
        "规定一个页面，该页面包含了有关&lt;iframe&gt;的较长描述。<br /> ",
      ],
    },
    {
      type: "text",
      content: "marginheight",
    },
    {
      type: "i",
      content: "pixels",
    },
    {
      type: "note",
      content: [
        "HTML5 不支持。",
        "规定&lt;iframe&gt;内容的顶部和底部的边距。 ",
      ],
    },
  ],
};

const a = {
  type: "text",
  content: "规定&lt;iframe&gt;的高度。",
};
