# eslint-config-rapid7

This package provides Rapid7's .eslintrc as an extensible shared config.

## Installation

```
$ npm install eslint-config-rapid7 --save-dev
```

If you are using npm v2.x.x, you will need to also install eslint and the plugins that are peer dependencies:

```
$ npm install eslint eslint-plugin-import eslint-plugin-react --save-dev
```

## Usage

We export five ESLint configurations:

### eslint-config-rapid7

Config value: `"extends": "rapid7"`

Lints ES6+ and React

### eslint-config-rapid7/base

Config value: `"extends": "rapid7/base"`

Lints ES6+ but does not lint React.

### eslint-config-rapid7/legacy

Config value: `"extends": "rapid7/legacy"`

Lints ES5 and below.

### eslint-config-rapid7/browser

Config value: `"extends": "rapid7/browser"`

Lints all that the default setting does, and adds browser-specific rules.

### eslint-config-rapid7/node

Config value: `"extends": "rapid7/node"`

Lints all that the default setting does, and adds node-specific rules.

See [Rapid7's Javascript styleguide](https://github.com/rapid7/javascript-style-guide) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

We welcome all PRs! We do have a gap specifically in the area of node-specific rules, so please contribute!
