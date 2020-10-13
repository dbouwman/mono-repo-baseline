# Monorepo Baseline

Example monorepo that has the following:

- yarn workspaces w/ lerna
- typescript with
  - umd, commonjs and esm output
  - jasmine tests, running in browsers and node
  - eslint for typescript
- typedoc with
  - markdown page support
  - custom handling of external module naming
- [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) tooling, including
  - husky for commit hooks
  - commit message templating
  - commit linting to ensure consistentcy
  - commitizen to make it easy (`yarn c`)
- Use [Semantic Pull Requests](https://github.com/zeke/semantic-pull-requests) to ensure PR has at least one semantic commit
- travis-ci tooling for
  - automated, semantic-releases
  - probot to ensure PR's have at least one semantic commit before allowing merge
