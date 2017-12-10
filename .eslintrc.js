module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4,
            { "SwitchCase": 1 }
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "comma-spacing": [
            "error",
            {
            "after": true
            }
        ],
        "block-spacing": [
            "error",
            "never"
        ],
        "brace-style": [
            "error",
            "1tbs"
        ],
        "keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "key-spacing": [
            "error",
            {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "object-curly-spacing": [
            "error",
            "never"
        ],
        "space-before-function-paren": [
            "error",
            "always"
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "space-before-blocks": [
            "error",
            "always"
        ],
        "no-console": "off",
        "no-unreachable": "off",
        "no-use-before-define": ["error", { "functions": false, "classes": true }],
        "no-control-regex": "off"
    },
    "globals": {
        "cc": true
    }
};