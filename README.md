# eslint-config-rapid7

This package provides Rapid7's .eslintrc as an extensible shared config.

## Installation

```
$ npm install eslint-config-rapid7 --save-dev
```

## Usage

We export the following configurations:

### eslint-config-rapid7

Config value: `"extends": "rapid7"`

Lints standard JS, from legacy to current spec.

### eslint-config-rapid7/browser

Config value: `"extends": "rapid7/browser"`

Adds browser-specific rules.

### eslint-config-rapid7/node

Config value: `"extends": "rapid7/node"`

Adds node-specific rules.

### eslint-config-rapid7/react

Config value: `"extends": "rapid7/react"`

Adds react-specific rules.

### eslint-config-rapid7/strict

Config value: `"extends": "rapid7/strict"`

Adds stricter rules that are not fixable.

## Combining configurations

To apply multiple configurations, pass an array of configs instead of a string to `extends`:

```javascript
"extends": ["rapid7", "rapid7/browser", "rapid7/react", "rapid7/strict"]
```

See [Rapid7's Javascript styleguide](https://github.com/rapid7/javascript-style-guide) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

We welcome all PRs! We do have a gap specifically in the area of node-specific rules, so please contribute!
