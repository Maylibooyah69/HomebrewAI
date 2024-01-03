"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-factory-title";
exports.ids = ["vendor-chunks/micromark-factory-title"];
exports.modules = {

/***/ "(rsc)/./node_modules/micromark-factory-title/dev/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark-factory-title/dev/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factoryTitle: () => (/* binding */ factoryTitle)\n/* harmony export */ });\n/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-factory-space */ \"(rsc)/./node_modules/micromark-factory-space/dev/index.js\");\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-character */ \"(rsc)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/types.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/constants.js\");\n/**\n * @typedef {import('micromark-util-types').Code} Code\n * @typedef {import('micromark-util-types').Effects} Effects\n * @typedef {import('micromark-util-types').State} State\n * @typedef {import('micromark-util-types').TokenType} TokenType\n */ \n\n\n/**\n * Parse titles.\n *\n * ###### Examples\n *\n * ```markdown\n * \"a\"\n * 'b'\n * (c)\n * \"a\n * b\"\n * 'a\n *     b'\n * (a\\)b)\n * ```\n *\n * @param {Effects} effects\n *   Context.\n * @param {State} ok\n *   State switched to when successful.\n * @param {State} nok\n *   State switched to when unsuccessful.\n * @param {TokenType} type\n *   Type of the whole title (`\"a\"`, `'b'`, `(c)`).\n * @param {TokenType} markerType\n *   Type for the markers (`\"`, `'`, `(`, and `)`).\n * @param {TokenType} stringType\n *   Type for the value (`a`).\n * @returns {State}\n *   Start state.\n */ // eslint-disable-next-line max-params\nfunction factoryTitle(effects, ok, nok, type, markerType, stringType) {\n    /** @type {NonNullable<Code>} */ let marker;\n    return start;\n    /**\n   * Start of title.\n   *\n   * ```markdown\n   * > | \"a\"\n   *     ^\n   * ```\n   *\n   * @type {State}\n   */ function start(code) {\n        if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.quotationMark || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.apostrophe || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis) {\n            effects.enter(type);\n            effects.enter(markerType);\n            effects.consume(code);\n            effects.exit(markerType);\n            marker = code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis ? micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis : code;\n            return begin;\n        }\n        return nok(code);\n    }\n    /**\n   * After opening marker.\n   *\n   * This is also used at the closing marker.\n   *\n   * ```markdown\n   * > | \"a\"\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */ function begin(code) {\n        if (code === marker) {\n            effects.enter(markerType);\n            effects.consume(code);\n            effects.exit(markerType);\n            effects.exit(type);\n            return ok;\n        }\n        effects.enter(stringType);\n        return atBreak(code);\n    }\n    /**\n   * At something, before something else.\n   *\n   * ```markdown\n   * > | \"a\"\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */ function atBreak(code) {\n        if (code === marker) {\n            effects.exit(stringType);\n            return begin(marker);\n        }\n        if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof) {\n            return nok(code);\n        }\n        // Note: blank lines can’t exist in content.\n        if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEnding)(code)) {\n            // To do: use `space_or_tab_eol_with_options`, connect.\n            effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.lineEnding);\n            effects.consume(code);\n            effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.lineEnding);\n            return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__.factorySpace)(effects, atBreak, micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.linePrefix);\n        }\n        effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString, {\n            contentType: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.constants.contentTypeString\n        });\n        return inside(code);\n    }\n    /**\n   *\n   *\n   * @type {State}\n   */ function inside(code) {\n        if (code === marker || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEnding)(code)) {\n            effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString);\n            return atBreak(code);\n        }\n        effects.consume(code);\n        return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash ? escape : inside;\n    }\n    /**\n   * After `\\`, at a special character.\n   *\n   * ```markdown\n   * > | \"a\\*b\"\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */ function escape(code) {\n        if (code === marker || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash) {\n            effects.consume(code);\n            return inside;\n        }\n        return inside(code);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3RvcnktdGl0bGUvZGV2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7OztDQUtDLEdBRW1EO0FBQ087QUFDRTtBQUU3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBOEJDLEdBQ0Qsc0NBQXNDO0FBQy9CLFNBQVNLLGFBQWFDLE9BQU8sRUFBRUMsRUFBRSxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxVQUFVO0lBQ3pFLDhCQUE4QixHQUM5QixJQUFJQztJQUVKLE9BQU9DO0lBRVA7Ozs7Ozs7OztHQVNDLEdBQ0QsU0FBU0EsTUFBTUMsSUFBSTtRQUNqQixJQUNFQSxTQUFTWix3REFBS0EsQ0FBQ2EsYUFBYSxJQUM1QkQsU0FBU1osd0RBQUtBLENBQUNjLFVBQVUsSUFDekJGLFNBQVNaLHdEQUFLQSxDQUFDZSxlQUFlLEVBQzlCO1lBQ0FYLFFBQVFZLEtBQUssQ0FBQ1Q7WUFDZEgsUUFBUVksS0FBSyxDQUFDUjtZQUNkSixRQUFRYSxPQUFPLENBQUNMO1lBQ2hCUixRQUFRYyxJQUFJLENBQUNWO1lBQ2JFLFNBQVNFLFNBQVNaLHdEQUFLQSxDQUFDZSxlQUFlLEdBQUdmLHdEQUFLQSxDQUFDbUIsZ0JBQWdCLEdBQUdQO1lBQ25FLE9BQU9RO1FBQ1Q7UUFFQSxPQUFPZCxJQUFJTTtJQUNiO0lBRUE7Ozs7Ozs7Ozs7O0dBV0MsR0FDRCxTQUFTUSxNQUFNUixJQUFJO1FBQ2pCLElBQUlBLFNBQVNGLFFBQVE7WUFDbkJOLFFBQVFZLEtBQUssQ0FBQ1I7WUFDZEosUUFBUWEsT0FBTyxDQUFDTDtZQUNoQlIsUUFBUWMsSUFBSSxDQUFDVjtZQUNiSixRQUFRYyxJQUFJLENBQUNYO1lBQ2IsT0FBT0Y7UUFDVDtRQUVBRCxRQUFRWSxLQUFLLENBQUNQO1FBQ2QsT0FBT1ksUUFBUVQ7SUFDakI7SUFFQTs7Ozs7Ozs7O0dBU0MsR0FDRCxTQUFTUyxRQUFRVCxJQUFJO1FBQ25CLElBQUlBLFNBQVNGLFFBQVE7WUFDbkJOLFFBQVFjLElBQUksQ0FBQ1Q7WUFDYixPQUFPVyxNQUFNVjtRQUNmO1FBRUEsSUFBSUUsU0FBU1osd0RBQUtBLENBQUNzQixHQUFHLEVBQUU7WUFDdEIsT0FBT2hCLElBQUlNO1FBQ2I7UUFFQSw0Q0FBNEM7UUFDNUMsSUFBSWIsNEVBQWtCQSxDQUFDYSxPQUFPO1lBQzVCLHVEQUF1RDtZQUN2RFIsUUFBUVksS0FBSyxDQUFDZCx3REFBS0EsQ0FBQ3FCLFVBQVU7WUFDOUJuQixRQUFRYSxPQUFPLENBQUNMO1lBQ2hCUixRQUFRYyxJQUFJLENBQUNoQix3REFBS0EsQ0FBQ3FCLFVBQVU7WUFDN0IsT0FBT3pCLHFFQUFZQSxDQUFDTSxTQUFTaUIsU0FBU25CLHdEQUFLQSxDQUFDc0IsVUFBVTtRQUN4RDtRQUVBcEIsUUFBUVksS0FBSyxDQUFDZCx3REFBS0EsQ0FBQ3VCLFdBQVcsRUFBRTtZQUFDQyxhQUFhekIsNERBQVNBLENBQUMwQixpQkFBaUI7UUFBQTtRQUMxRSxPQUFPQyxPQUFPaEI7SUFDaEI7SUFFQTs7OztHQUlDLEdBQ0QsU0FBU2dCLE9BQU9oQixJQUFJO1FBQ2xCLElBQUlBLFNBQVNGLFVBQVVFLFNBQVNaLHdEQUFLQSxDQUFDc0IsR0FBRyxJQUFJdkIsNEVBQWtCQSxDQUFDYSxPQUFPO1lBQ3JFUixRQUFRYyxJQUFJLENBQUNoQix3REFBS0EsQ0FBQ3VCLFdBQVc7WUFDOUIsT0FBT0osUUFBUVQ7UUFDakI7UUFFQVIsUUFBUWEsT0FBTyxDQUFDTDtRQUNoQixPQUFPQSxTQUFTWix3REFBS0EsQ0FBQzZCLFNBQVMsR0FBR0MsU0FBU0Y7SUFDN0M7SUFFQTs7Ozs7Ozs7O0dBU0MsR0FDRCxTQUFTRSxPQUFPbEIsSUFBSTtRQUNsQixJQUFJQSxTQUFTRixVQUFVRSxTQUFTWix3REFBS0EsQ0FBQzZCLFNBQVMsRUFBRTtZQUMvQ3pCLFFBQVFhLE9BQU8sQ0FBQ0w7WUFDaEIsT0FBT2dCO1FBQ1Q7UUFFQSxPQUFPQSxPQUFPaEI7SUFDaEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3NpbXBsZS1uZXh0Ly4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1mYWN0b3J5LXRpdGxlL2Rldi9pbmRleC5qcz8yYTRmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Db2RlfSBDb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkVmZmVjdHN9IEVmZmVjdHNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuU3RhdGV9IFN0YXRlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuVHlwZX0gVG9rZW5UeXBlXG4gKi9cblxuaW1wb3J0IHtmYWN0b3J5U3BhY2V9IGZyb20gJ21pY3JvbWFyay1mYWN0b3J5LXNwYWNlJ1xuaW1wb3J0IHttYXJrZG93bkxpbmVFbmRpbmd9IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3RlcidcbmltcG9ydCB7Y29kZXMsIGNvbnN0YW50cywgdHlwZXN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbCdcblxuLyoqXG4gKiBQYXJzZSB0aXRsZXMuXG4gKlxuICogIyMjIyMjIEV4YW1wbGVzXG4gKlxuICogYGBgbWFya2Rvd25cbiAqIFwiYVwiXG4gKiAnYidcbiAqIChjKVxuICogXCJhXG4gKiBiXCJcbiAqICdhXG4gKiAgICAgYidcbiAqIChhXFwpYilcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7RWZmZWN0c30gZWZmZWN0c1xuICogICBDb250ZXh0LlxuICogQHBhcmFtIHtTdGF0ZX0gb2tcbiAqICAgU3RhdGUgc3dpdGNoZWQgdG8gd2hlbiBzdWNjZXNzZnVsLlxuICogQHBhcmFtIHtTdGF0ZX0gbm9rXG4gKiAgIFN0YXRlIHN3aXRjaGVkIHRvIHdoZW4gdW5zdWNjZXNzZnVsLlxuICogQHBhcmFtIHtUb2tlblR5cGV9IHR5cGVcbiAqICAgVHlwZSBvZiB0aGUgd2hvbGUgdGl0bGUgKGBcImFcImAsIGAnYidgLCBgKGMpYCkuXG4gKiBAcGFyYW0ge1Rva2VuVHlwZX0gbWFya2VyVHlwZVxuICogICBUeXBlIGZvciB0aGUgbWFya2VycyAoYFwiYCwgYCdgLCBgKGAsIGFuZCBgKWApLlxuICogQHBhcmFtIHtUb2tlblR5cGV9IHN0cmluZ1R5cGVcbiAqICAgVHlwZSBmb3IgdGhlIHZhbHVlIChgYWApLlxuICogQHJldHVybnMge1N0YXRlfVxuICogICBTdGFydCBzdGF0ZS5cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcbmV4cG9ydCBmdW5jdGlvbiBmYWN0b3J5VGl0bGUoZWZmZWN0cywgb2ssIG5vaywgdHlwZSwgbWFya2VyVHlwZSwgc3RyaW5nVHlwZSkge1xuICAvKiogQHR5cGUge05vbk51bGxhYmxlPENvZGU+fSAqL1xuICBsZXQgbWFya2VyXG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgLyoqXG4gICAqIFN0YXJ0IG9mIHRpdGxlLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgXCJhXCJcbiAgICogICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBjb2Rlcy5xdW90YXRpb25NYXJrIHx8XG4gICAgICBjb2RlID09PSBjb2Rlcy5hcG9zdHJvcGhlIHx8XG4gICAgICBjb2RlID09PSBjb2Rlcy5sZWZ0UGFyZW50aGVzaXNcbiAgICApIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIodHlwZSlcbiAgICAgIGVmZmVjdHMuZW50ZXIobWFya2VyVHlwZSlcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KG1hcmtlclR5cGUpXG4gICAgICBtYXJrZXIgPSBjb2RlID09PSBjb2Rlcy5sZWZ0UGFyZW50aGVzaXMgPyBjb2Rlcy5yaWdodFBhcmVudGhlc2lzIDogY29kZVxuICAgICAgcmV0dXJuIGJlZ2luXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIG9wZW5pbmcgbWFya2VyLlxuICAgKlxuICAgKiBUaGlzIGlzIGFsc28gdXNlZCBhdCB0aGUgY2xvc2luZyBtYXJrZXIuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBcImFcIlxuICAgKiAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGJlZ2luKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKG1hcmtlclR5cGUpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdChtYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5leGl0KHR5cGUpXG4gICAgICByZXR1cm4gb2tcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKHN0cmluZ1R5cGUpXG4gICAgcmV0dXJuIGF0QnJlYWsoY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBdCBzb21ldGhpbmcsIGJlZm9yZSBzb21ldGhpbmcgZWxzZS5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IFwiYVwiXG4gICAqICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gYXRCcmVhayhjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlcikge1xuICAgICAgZWZmZWN0cy5leGl0KHN0cmluZ1R5cGUpXG4gICAgICByZXR1cm4gYmVnaW4obWFya2VyKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSBjb2Rlcy5lb2YpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICAvLyBOb3RlOiBibGFuayBsaW5lcyBjYW7igJl0IGV4aXN0IGluIGNvbnRlbnQuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgLy8gVG8gZG86IHVzZSBgc3BhY2Vfb3JfdGFiX2VvbF93aXRoX29wdGlvbnNgLCBjb25uZWN0LlxuICAgICAgZWZmZWN0cy5lbnRlcih0eXBlcy5saW5lRW5kaW5nKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQodHlwZXMubGluZUVuZGluZylcbiAgICAgIHJldHVybiBmYWN0b3J5U3BhY2UoZWZmZWN0cywgYXRCcmVhaywgdHlwZXMubGluZVByZWZpeClcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKHR5cGVzLmNodW5rU3RyaW5nLCB7Y29udGVudFR5cGU6IGNvbnN0YW50cy5jb250ZW50VHlwZVN0cmluZ30pXG4gICAgcmV0dXJuIGluc2lkZShjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGluc2lkZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlciB8fCBjb2RlID09PSBjb2Rlcy5lb2YgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQodHlwZXMuY2h1bmtTdHJpbmcpXG4gICAgICByZXR1cm4gYXRCcmVhayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBjb2RlID09PSBjb2Rlcy5iYWNrc2xhc2ggPyBlc2NhcGUgOiBpbnNpZGVcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBgXFxgLCBhdCBhIHNwZWNpYWwgY2hhcmFjdGVyLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgXCJhXFwqYlwiXG4gICAqICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gZXNjYXBlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyIHx8IGNvZGUgPT09IGNvZGVzLmJhY2tzbGFzaCkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gaW5zaWRlXG4gICAgfVxuXG4gICAgcmV0dXJuIGluc2lkZShjb2RlKVxuICB9XG59XG4iXSwibmFtZXMiOlsiZmFjdG9yeVNwYWNlIiwibWFya2Rvd25MaW5lRW5kaW5nIiwiY29kZXMiLCJjb25zdGFudHMiLCJ0eXBlcyIsImZhY3RvcnlUaXRsZSIsImVmZmVjdHMiLCJvayIsIm5vayIsInR5cGUiLCJtYXJrZXJUeXBlIiwic3RyaW5nVHlwZSIsIm1hcmtlciIsInN0YXJ0IiwiY29kZSIsInF1b3RhdGlvbk1hcmsiLCJhcG9zdHJvcGhlIiwibGVmdFBhcmVudGhlc2lzIiwiZW50ZXIiLCJjb25zdW1lIiwiZXhpdCIsInJpZ2h0UGFyZW50aGVzaXMiLCJiZWdpbiIsImF0QnJlYWsiLCJlb2YiLCJsaW5lRW5kaW5nIiwibGluZVByZWZpeCIsImNodW5rU3RyaW5nIiwiY29udGVudFR5cGUiLCJjb250ZW50VHlwZVN0cmluZyIsImluc2lkZSIsImJhY2tzbGFzaCIsImVzY2FwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-factory-title/dev/index.js\n");

/***/ })

};
;