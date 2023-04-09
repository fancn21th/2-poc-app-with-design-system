# Use Guide

## What is this?

It is trivial and cumbersome to setup a new web project nowadays. Since so many tools and libs out there for achieving different purposes. There is no industry standard for web project setup. Only good patterns and best practices.

## What do we need?

- [x] conventional commit
- [x] lerna
- [ ] `utils` library in typescript
- [ ] `storybook` intro to `design-system`
- [ ] `admin` project in react with ts

## Setup Steps

1. Activate hooks

```shell
  npx husky install

  npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```

## Commands

1. Show Deps

```shell
  npx nx graph
```

## References

- [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
