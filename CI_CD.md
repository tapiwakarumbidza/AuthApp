# CI/CD Pipeline Documentation

## Overview
This project uses GitHub Actions for CI/CD to:
- Lint and test the code on every push to `main` or `develop`.
- Build Android and iOS releases on pushes to the `main` branch.

## Workflow Files
- `.github/workflows/lint-and-test.yml`: Runs linting and tests.
- `.github/workflows/build.yml`: Builds Android and iOS releases.

## Tools and Triggers
- **Node.js**: Used for running JavaScript-based tools like ESLint and Jest.
- **Gradle**: For building Android APKs.
- **Xcode**: For building iOS apps.

## Extending the Pipeline
1. **Add new jobs**:
   Modify the workflow files to include additional jobs, such as deployment.
2. **Customize triggers**:
   Change the `on` section to trigger builds on PRs or schedule builds using `cron`.

## Managing the Pipeline
- Monitor workflow runs in the GitHub Actions tab.
- Update dependencies regularly to avoid security vulnerabilities.
