module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node":true,
        "commonjs":true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "warn",
            2
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console" : "off",
        "no-unexpected-multiline": "off"
    }
};