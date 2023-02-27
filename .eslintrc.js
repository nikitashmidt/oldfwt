"use strict";

module.exports = {
  extends: ["./.eslintrc.base.js", "./prettier.js"],
  rules: {
    "prettier/prettier": "off",
  },
  overrides: [
    {
      files: ["{bin,test,scripts}/**/*.js"],
      rules: {
        "no-undef": "error",
        "no-restricted-syntax": [
          "error",
          {
            selector: "SequenceExpression",
            message:
              "The comma operator is confusing and a common mistake. Don’t use it!",
          },
        ],
        "quotes": [
          "error",
          "double",
          { avoidEscape: true, allowTemplateLiterals: false },
        ],
      },
    },
    {
      files: ["*.test.js"],
      env: { jest: true },
    },
  ],
};