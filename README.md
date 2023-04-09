# Use Guide

## What is this?

It is trivial and cumbersome to setup a new web project nowadays. Since so many tools and libs out there for achieving different purposes. There is no industry standard for web project setup. Only good patterns and best practices.

## What do we need?

[ ] conventional commit

## Setup Steps

1. Activate hooks

```shell
  npx husky install

  npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```

## References

- [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
