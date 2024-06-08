module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
    ],
    parserOptions: {
      parser: '@babel/eslint-parser',
      requireConfigFile: false,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      // 추가적인 규칙을 여기에 작성할 수 있습니다.
    },
  };
  