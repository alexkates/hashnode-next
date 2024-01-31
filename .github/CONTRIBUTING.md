# Contributing to hashnode-next

Thank you for considering contributing to hashnode-next. Your contributions are highly valued and appreciated.

## The basics

- Before submitting a new issue or PR, check if it already exists in [issues](https://github.com/alexkates/hashnode-next/issues) or [PRs](https://github.com/alexkates/hashnode-next/pulls).
- If there isn't an issue please _create one_ before any development begins
- If you're working on an issue, please _comment_ on it so that others know you're working on it

## Developing

The development branch is `main`. This is the branch that all pull
requests should be made against.

To develop locally:

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your
   own GitHub account and then
   [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device.
2. Create a new branch:

   ```sh
   git switch -c MY_BRANCH_NAME
   ```

## Installing

hashnode-next uses [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md) and [PNPM](https://pnpm.io/) for package management.

To set the correct version of PNPM, run `nvm use` from the root. There is a `.nvmrc` file that controls the correct node version.

## Installing dependencies

```bash
pnpm install
```

## Hashnode GQL codegen

If you need to add or update the Hashnode GQL schema, run the following command to generate types and gql documents.

```bash
pnpm codegen
```

## Building

```bash
pnpm build
```

## Linting

```sh
pnpm format
pnpm lint
```

If you get errors, be sure to fix them before committing.

## Making a Pull Request

- Be sure to [check the "Allow edits from maintainers" option](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork) while creating your PR.
- If your PR refers to or fixes an issue, be sure to add `refs #XXX` or `fixes #XXX` to the PR description. Replacing `XXX` with the respective issue number. See more about [Linking a pull request to an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue).
- Be sure to fill the PR Template accordingly.
