import eslintJS from "@eslint/js";
import stylisticJS from "@stylistic/eslint-plugin-js";
import stylisticTS from "@stylistic/eslint-plugin-ts";
import eslintTS from "typescript-eslint";

const linesAroundCommentRuleOptions = {
  beforeBlockComment: true,
  afterBlockComment: true,
  beforeLineComment: true,
  afterLineComment: true,
  allowObjectStart: true,
  allowBlockStart: true,
  allowArrayStart: true,
  allowClassStart: true
};

/** @type {import("eslint").Linter.Config[]} */

export default [
  eslintJS.configs.recommended,
  {
    plugins: {
      "@stylistic/js": stylisticJS
    },
    rules: {
      "array-callback-return": "error",
      "no-console": "error",
      "no-constructor-return": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "error",
      "no-unreachable-loop": "error",
      "require-atomic-updates": "error",
      "block-scoped-var": "error",
      "default-case": "error",
      "default-param-last": "error",
      "dot-notation": "error",
      "eqeqeq": "error",
      "func-name-matching": "error",
      "func-names": "error",
      "func-style": [
        "error",
        "declaration",
        {
          allowArrowFunctions: true
        }
      ],
      "grouped-accessor-pairs": "error",
      "id-length": "error",
      "logical-assignment-operators": "error",
      "no-array-constructor": "error",
      "no-bitwise": "error",
      "no-caller": "error",
      "no-div-regex": "error",
      "no-else-return": "error",
      "no-eval": "error",
      "no-extra-bind": "error",
      "no-extra-label": "error",
      "no-implicit-coercion": "error",
      "no-implied-eval": "error",
      "no-inline-comments": "warn",
      "no-invalid-this": "error",
      "no-label-var": "error",
      "no-labels": "error",
      "no-lone-blocks": "error",
      "no-lonely-if": "error",
      "no-loop-func": "error",
      "no-multi-assign": "error",
      "no-multi-str": "error",
      "no-negated-condition": "error",
      "no-nested-ternary": "error",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-object-constructor": "error",
      "no-octal-escape": "error",
      "no-plusplus": "error",
      "no-return-assign": "error",
      "no-sequences": "error",
      "no-shadow": "error",
      "no-throw-literal": "error",
      "no-undef-init": "error",
      "no-undefined": "error",
      "no-unneeded-ternary": "error",
      "no-unused-expressions": "error",
      "no-useless-call": "error",
      "no-useless-computed-key": "error",
      "no-useless-concat": "error",
      "no-useless-constructor": "error",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "no-var": "error",
      "no-void": "error",
      "object-shorthand": "error",
      "operator-assignment": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-destructuring": [
        "error",
        {
          object: true
        }
      ],
      "prefer-exponentiation-operator": "error",
      "prefer-named-capture-group": "error",
      "prefer-numeric-literals": "error",
      "prefer-object-has-own": "error",
      "prefer-object-spread": "error",
      "prefer-promise-reject-errors": "error",
      "prefer-regex-literals": "error",
      "prefer-rest-params": "error",
      "prefer-template": "error",
      "radix": "error",
      "require-await": "error",
      "symbol-description": "error",
      "yoda": "error",
      "@stylistic/js/padding-line-between-statements": [
        "warn",
        {
          blankLine: "always",
          prev: "*",
          next: "*"
        },
        {
          blankLine: "never",
          prev: "import",
          next: "import"
        }
      ],
      "@stylistic/js/line-comment-position": "warn",
      "@stylistic/js/lines-around-comment": [
        "warn",
        linesAroundCommentRuleOptions
      ],
      "@stylistic/js/spaced-comment": "warn"
    }
  },
  {
    files: ["**/*.{ts,cts,mts,tsx}"],
    plugins: {
      "@typescript-eslint": eslintTS.plugin,
      "@stylistic/ts": stylisticTS
    },
    languageOptions: {
      parser: eslintTS.parser,
      parserOptions: {
        projectService: true
      }
    },
    rules: {
      "no-undef": "off",
      "@typescript-eslint/adjacent-overload-signatures": "error",
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "minimumDescriptionLength": 10,
          "ts-check": "allow-with-description",
          "ts-expect-error": "allow-with-description",
          "ts-ignore": "allow-with-description",
          "ts-nocheck": "allow-with-description"
        }
      ],
      "@typescript-eslint/class-literal-property-style": "error",
      "@typescript-eslint/consistent-generic-constructors": "error",
      "@typescript-eslint/consistent-indexed-object-style": "error",
      "@typescript-eslint/consistent-type-assertions": "error",
      "@typescript-eslint/consistent-type-definitions": "error",
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/default-param-last": "error",
      "default-param-last": "off",
      "@typescript-eslint/dot-notation": "error",
      "dot-notation": "off",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-member-accessibility": "error",
      "@typescript-eslint/member-ordering": "error",
      "@typescript-eslint/method-signature-style": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: [
            "variable",
            "parameter",
            "parameterProperty",
            "classProperty",
            "classMethod",
            "classicAccessor",
            "autoAccessor",
            "function"
          ],
          format: ["camelCase"]
        },
        {
          selector: "variable",
          types: ["boolean"],
          format: ["camelCase"],
          custom: {
            regex: "^(are|is|has|should|can|does|did|was|will|would)[A-Z]",
            match: true
          }
        },
        {
          selector: "variable",
          modifiers: ["const"],
          format: ["camelCase", "PascalCase", "UPPER_CASE"]
        },
        {
          selector: "variable",
          modifiers: ["const"],
          types: ["string", "number"],
          format: ["UPPER_CASE"]
        },
        {
          selector: [
            "classProperty",
            "classMethod",
            "classicAccessor",
            "autoAccessor"
          ],
          modifiers: ["private"],
          leadingUnderscore: "require",
          format: ["camelCase"]
        },
        {
          selector: "import",
          modifiers: ["default"],
          format: ["camelCase", "PascalCase"]
        },
        {
          selector: ["enum", "class", "interface", "typeAlias"],
          format: ["PascalCase"]
        },
        {
          selector: "enumMember",
          format: ["UPPER_CASE"]
        }
      ],
      "@typescript-eslint/no-array-constructor": "error",
      "no-array-constructor": "off",
      "@typescript-eslint/no-array-delete": "error",
      "@typescript-eslint/no-base-to-string": "error",
      "@typescript-eslint/no-confusing-non-null-assertion": "error",
      "@typescript-eslint/no-confusing-void-expression": "error",
      "@typescript-eslint/no-deprecated": "error",
      "@typescript-eslint/no-duplicate-enum-values": "error",
      "@typescript-eslint/no-duplicate-type-constituents": "error",
      "@typescript-eslint/no-dynamic-delete": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-extra-non-null-assertion": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-for-in-array": "error",
      "@typescript-eslint/no-implied-eval": "error",
      "no-implied-eval": "off",
      "@typescript-eslint/no-inferrable-types": "error",
      "@typescript-eslint/no-invalid-void-type": "error",
      "@typescript-eslint/no-loop-func": "error",
      "no-loop-func": "off",
      "@typescript-eslint/no-meaningless-void-operator": "error",
      "@typescript-eslint/no-misused-new": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/no-mixed-enums": "error",
      "@typescript-eslint/no-namespace": "error",
      "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-redundant-type-constituents": "error",
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/no-shadow": "error",
      "no-shadow": "off",
      "@typescript-eslint/no-this-alias": "error",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/no-unnecessary-parameter-property-assignment":
        "error",
      "@typescript-eslint/no-unnecessary-qualifier": "error",
      "@typescript-eslint/no-unnecessary-template-expression": "error",
      "@typescript-eslint/no-unnecessary-type-arguments": "error",
      "@typescript-eslint/no-unnecessary-type-constraint": "error",
      "@typescript-eslint/no-unnecessary-type-parameters": "error",
      "@typescript-eslint/no-unsafe-argument": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-declaration-merging": "error",
      "@typescript-eslint/no-unsafe-enum-comparison": "error",
      "@typescript-eslint/no-unsafe-function-type": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/no-unsafe-unary-minus": "error",
      "@typescript-eslint/no-unused-expressions": "error",
      "no-unused-expressions": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-useless-constructor": "error",
      "no-useless-constructor": "off",
      "@typescript-eslint/no-useless-empty-export": "error",
      "@typescript-eslint/no-wrapper-object-types": "error",
      "@typescript-eslint/only-throw-error": "error",
      "no-throw-literal": "off",
      "@typescript-eslint/parameter-properties": "error",
      "@typescript-eslint/prefer-as-const": "error",
      "@typescript-eslint/prefer-enum-initializers": "error",
      "@typescript-eslint/prefer-find": "error",
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/prefer-function-type": "error",
      "@typescript-eslint/prefer-includes": "error",
      "@typescript-eslint/prefer-literal-enum-member": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/prefer-promise-reject-errors": "error",
      "prefer-promise-reject-errors": "off",
      "@typescript-eslint/prefer-reduce-type-parameter": "error",
      "@typescript-eslint/prefer-regexp-exec": "error",
      "@typescript-eslint/prefer-return-this-type": "error",
      "@typescript-eslint/prefer-string-starts-ends-with": "error",
      "@typescript-eslint/promise-function-async": "error",
      "@typescript-eslint/require-array-sort-compare": "error",
      "@typescript-eslint/require-await": "error",
      "require-await": "off",
      "@typescript-eslint/restrict-plus-operands": "error",
      "@typescript-eslint/restrict-template-expressions": "error",
      "@typescript-eslint/return-await": "error",
      "no-return-await": "off",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/triple-slash-reference": [
        "error",
        {
          path: "always"
        }
      ],
      "@typescript-eslint/unbound-method": "error",
      "@typescript-eslint/unified-signatures": "error",
      "@typescript-eslint/use-unknown-in-catch-callback-variable": "error",
      "@stylistic/ts/lines-around-comment": [
        "warn",
        {
          ...linesAroundCommentRuleOptions,
          allowEnumEnd: false,
          allowEnumStart: true,
          allowInterfaceEnd: false,
          allowInterfaceStart: true,
          allowModuleEnd: false,
          allowModuleStart: true,
          allowTypeEnd: false,
          allowTypeStart: true
        }
      ],
      "@stylistic/js/lines-around-comment": "off"
    }
  }
];
