module.exports = {
  extends: "stylelint-config-recommended-vue",
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "CssSyntaxError",
        ],
      },
    ],
    "no-descending-specificity": null,
  },
};
