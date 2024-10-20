# Making a new release of jupyterlite-pyodide-kernel

## Automated Releases with `jupyter_releaser`

The recommended way to make a release is to use
[`jupyter_releaser`](https://jupyter-releaser.readthedocs.io/en/latest/get_started/making_release_from_repo.html).

This repository contains the two workflows located under
https://github.com/jupyterlite/pyodide-kernel/actions:

- Step 1: Prep Release
- Step 2: Publish Release

### Specifying a version spec

You can specify the Python version directly as the `version_spec` when using the
releaser workflows. For example:

- `0.1.0b8`
- `0.1.1`
- `1.2.0rc0`
