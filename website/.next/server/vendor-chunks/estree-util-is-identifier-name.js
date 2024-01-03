"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/estree-util-is-identifier-name";
exports.ids = ["vendor-chunks/estree-util-is-identifier-name"];
exports.modules = {

/***/ "(rsc)/./node_modules/estree-util-is-identifier-name/lib/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/estree-util-is-identifier-name/lib/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cont: () => (/* binding */ cont),\n/* harmony export */   name: () => (/* binding */ name),\n/* harmony export */   start: () => (/* binding */ start)\n/* harmony export */ });\n/**\n * @typedef Options\n *   Configuration.\n * @property {boolean | null | undefined} [jsx=false]\n *   Support JSX identifiers (default: `false`).\n */ const startRe = /[$_\\p{ID_Start}]/u;\nconst contRe = /[$_\\u{200C}\\u{200D}\\p{ID_Continue}]/u;\nconst contReJsx = /[-$_\\u{200C}\\u{200D}\\p{ID_Continue}]/u;\nconst nameRe = /^[$_\\p{ID_Start}][$_\\u{200C}\\u{200D}\\p{ID_Continue}]*$/u;\nconst nameReJsx = /^[$_\\p{ID_Start}][-$_\\u{200C}\\u{200D}\\p{ID_Continue}]*$/u;\n/** @type {Options} */ const emptyOptions = {};\n/**\n * Checks if the given code point can start an identifier.\n *\n * @param {number | undefined} code\n *   Code point to check.\n * @returns {boolean}\n *   Whether `code` can start an identifier.\n */ // Note: `undefined` is supported so you can pass the result from `''.codePointAt`.\nfunction start(code) {\n    return code ? startRe.test(String.fromCodePoint(code)) : false;\n}\n/**\n * Checks if the given code point can continue an identifier.\n *\n * @param {number | undefined} code\n *   Code point to check.\n * @param {Options | null | undefined} [options]\n *   Configuration (optional).\n * @returns {boolean}\n *   Whether `code` can continue an identifier.\n */ // Note: `undefined` is supported so you can pass the result from `''.codePointAt`.\nfunction cont(code, options) {\n    const settings = options || emptyOptions;\n    const re = settings.jsx ? contReJsx : contRe;\n    return code ? re.test(String.fromCodePoint(code)) : false;\n}\n/**\n * Checks if the given value is a valid identifier name.\n *\n * @param {string} name\n *   Identifier to check.\n * @param {Options | null | undefined} [options]\n *   Configuration (optional).\n * @returns {boolean}\n *   Whether `name` can be an identifier.\n */ function name(name, options) {\n    const settings = options || emptyOptions;\n    const re = settings.jsx ? nameReJsx : nameRe;\n    return re.test(name);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZXN0cmVlLXV0aWwtaXMtaWRlbnRpZmllci1uYW1lL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Q0FLQyxHQUVELE1BQU1BLFVBQVU7QUFDaEIsTUFBTUMsU0FBUztBQUNmLE1BQU1DLFlBQVk7QUFDbEIsTUFBTUMsU0FBUztBQUNmLE1BQU1DLFlBQVk7QUFFbEIsb0JBQW9CLEdBQ3BCLE1BQU1DLGVBQWUsQ0FBQztBQUV0Qjs7Ozs7OztDQU9DLEdBQ0QsbUZBQW1GO0FBQzVFLFNBQVNDLE1BQU1DLElBQUk7SUFDeEIsT0FBT0EsT0FBT1AsUUFBUVEsSUFBSSxDQUFDQyxPQUFPQyxhQUFhLENBQUNILFNBQVM7QUFDM0Q7QUFFQTs7Ozs7Ozs7O0NBU0MsR0FDRCxtRkFBbUY7QUFDNUUsU0FBU0ksS0FBS0osSUFBSSxFQUFFSyxPQUFPO0lBQ2hDLE1BQU1DLFdBQVdELFdBQVdQO0lBQzVCLE1BQU1TLEtBQUtELFNBQVNFLEdBQUcsR0FBR2IsWUFBWUQ7SUFDdEMsT0FBT00sT0FBT08sR0FBR04sSUFBSSxDQUFDQyxPQUFPQyxhQUFhLENBQUNILFNBQVM7QUFDdEQ7QUFFQTs7Ozs7Ozs7O0NBU0MsR0FDTSxTQUFTUyxLQUFLQSxJQUFJLEVBQUVKLE9BQU87SUFDaEMsTUFBTUMsV0FBV0QsV0FBV1A7SUFDNUIsTUFBTVMsS0FBS0QsU0FBU0UsR0FBRyxHQUFHWCxZQUFZRDtJQUN0QyxPQUFPVyxHQUFHTixJQUFJLENBQUNRO0FBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2ltcGxlLW5leHQvLi9ub2RlX21vZHVsZXMvZXN0cmVlLXV0aWwtaXMtaWRlbnRpZmllci1uYW1lL2xpYi9pbmRleC5qcz80MWIyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYgT3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2pzeD1mYWxzZV1cbiAqICAgU3VwcG9ydCBKU1ggaWRlbnRpZmllcnMgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmNvbnN0IHN0YXJ0UmUgPSAvWyRfXFxwe0lEX1N0YXJ0fV0vdVxuY29uc3QgY29udFJlID0gL1skX1xcdXsyMDBDfVxcdXsyMDBEfVxccHtJRF9Db250aW51ZX1dL3VcbmNvbnN0IGNvbnRSZUpzeCA9IC9bLSRfXFx1ezIwMEN9XFx1ezIwMER9XFxwe0lEX0NvbnRpbnVlfV0vdVxuY29uc3QgbmFtZVJlID0gL15bJF9cXHB7SURfU3RhcnR9XVskX1xcdXsyMDBDfVxcdXsyMDBEfVxccHtJRF9Db250aW51ZX1dKiQvdVxuY29uc3QgbmFtZVJlSnN4ID0gL15bJF9cXHB7SURfU3RhcnR9XVstJF9cXHV7MjAwQ31cXHV7MjAwRH1cXHB7SURfQ29udGludWV9XSokL3VcblxuLyoqIEB0eXBlIHtPcHRpb25zfSAqL1xuY29uc3QgZW1wdHlPcHRpb25zID0ge31cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGNvZGUgcG9pbnQgY2FuIHN0YXJ0IGFuIGlkZW50aWZpZXIuXG4gKlxuICogQHBhcmFtIHtudW1iZXIgfCB1bmRlZmluZWR9IGNvZGVcbiAqICAgQ29kZSBwb2ludCB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIGBjb2RlYCBjYW4gc3RhcnQgYW4gaWRlbnRpZmllci5cbiAqL1xuLy8gTm90ZTogYHVuZGVmaW5lZGAgaXMgc3VwcG9ydGVkIHNvIHlvdSBjYW4gcGFzcyB0aGUgcmVzdWx0IGZyb20gYCcnLmNvZGVQb2ludEF0YC5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gIHJldHVybiBjb2RlID8gc3RhcnRSZS50ZXN0KFN0cmluZy5mcm9tQ29kZVBvaW50KGNvZGUpKSA6IGZhbHNlXG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBjb2RlIHBvaW50IGNhbiBjb250aW51ZSBhbiBpZGVudGlmaWVyLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyIHwgdW5kZWZpbmVkfSBjb2RlXG4gKiAgIENvZGUgcG9pbnQgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09wdGlvbnMgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3B0aW9uc11cbiAqICAgQ29uZmlndXJhdGlvbiAob3B0aW9uYWwpLlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiAgIFdoZXRoZXIgYGNvZGVgIGNhbiBjb250aW51ZSBhbiBpZGVudGlmaWVyLlxuICovXG4vLyBOb3RlOiBgdW5kZWZpbmVkYCBpcyBzdXBwb3J0ZWQgc28geW91IGNhbiBwYXNzIHRoZSByZXN1bHQgZnJvbSBgJycuY29kZVBvaW50QXRgLlxuZXhwb3J0IGZ1bmN0aW9uIGNvbnQoY29kZSwgb3B0aW9ucykge1xuICBjb25zdCBzZXR0aW5ncyA9IG9wdGlvbnMgfHwgZW1wdHlPcHRpb25zXG4gIGNvbnN0IHJlID0gc2V0dGluZ3MuanN4ID8gY29udFJlSnN4IDogY29udFJlXG4gIHJldHVybiBjb2RlID8gcmUudGVzdChTdHJpbmcuZnJvbUNvZGVQb2ludChjb2RlKSkgOiBmYWxzZVxufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSB2YWxpZCBpZGVudGlmaWVyIG5hbWUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqICAgSWRlbnRpZmllciB0byBjaGVjay5cbiAqIEBwYXJhbSB7T3B0aW9ucyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcHRpb25zXVxuICogICBDb25maWd1cmF0aW9uIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciBgbmFtZWAgY2FuIGJlIGFuIGlkZW50aWZpZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuYW1lKG5hbWUsIG9wdGlvbnMpIHtcbiAgY29uc3Qgc2V0dGluZ3MgPSBvcHRpb25zIHx8IGVtcHR5T3B0aW9uc1xuICBjb25zdCByZSA9IHNldHRpbmdzLmpzeCA/IG5hbWVSZUpzeCA6IG5hbWVSZVxuICByZXR1cm4gcmUudGVzdChuYW1lKVxufVxuIl0sIm5hbWVzIjpbInN0YXJ0UmUiLCJjb250UmUiLCJjb250UmVKc3giLCJuYW1lUmUiLCJuYW1lUmVKc3giLCJlbXB0eU9wdGlvbnMiLCJzdGFydCIsImNvZGUiLCJ0ZXN0IiwiU3RyaW5nIiwiZnJvbUNvZGVQb2ludCIsImNvbnQiLCJvcHRpb25zIiwic2V0dGluZ3MiLCJyZSIsImpzeCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/estree-util-is-identifier-name/lib/index.js\n");

/***/ })

};
;