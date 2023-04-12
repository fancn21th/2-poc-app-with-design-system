# Use Guide

## What is this?

It is trivial and cumbersome to setup a new web project nowadays. Since so many tools and libs out there for achieving different purposes. There is no industry standard for web project setup. Only good patterns and best practices.

## How to start

1. Install dependencies

```shell
  yarn
```

2. Activate hooks

3. Start with `dev` command

```shell
  yarn dev
```

## What do we need?

- [x] conventional commit
- [x] lerna
- [x] `utils` library in typescript
- [x] `storybook` intro to `design-system`
- [x] `admin` project in react with ts
- [ ] `button` added in `design-system`
- [ ] `button` consumed in `admin`

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

2. Add Internal dependency

[lerna add command](https://github.com/lerna/lerna/tree/main/libs/commands/add)

```shell
  lerna add @wh/shared --scope '@wh/design-system'
```

## References

- [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
