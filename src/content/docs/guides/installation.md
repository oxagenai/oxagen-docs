---
title: Installation
description: Step-by-step instructions for installing and configuring Oxagen.
---

This guide covers how to install Oxagen across different environments and platforms.

## System Requirements

| Requirement | Minimum          |
| ----------- | ---------------- |
| Node.js     | 18.x or later    |
| npm         | 9.x or later     |
| OS          | macOS, Linux, Windows |

## Install via npm

The recommended way to install Oxagen is through npm:

```bash
npm install -g oxagen
```

Verify your installation:

```bash
oxagen --version
```

## Install via Yarn

```bash
yarn global add oxagen
```

## Install via pnpm

```bash
pnpm add -g oxagen
```

## Configuration

After installation, create a configuration file in your project root:

```bash
oxagen init
```

This creates an `oxagen.config.json` file with sensible defaults:

```json
{
  "version": "1.0",
  "environment": "development",
  "output": "./dist"
}
```

## Updating

To update Oxagen to the latest version:

```bash
npm update -g oxagen
```

## Uninstalling

```bash
npm uninstall -g oxagen
```

## Troubleshooting

### Permission Errors

If you encounter permission errors on macOS or Linux, try:

```bash
sudo npm install -g oxagen
```

Or better yet, configure npm to use a different directory for global installs:

```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
```

Then add `~/.npm-global/bin` to your `PATH`.

### Node.js Version Issues

Use a version manager like [nvm](https://github.com/nvm-sh/nvm) to install and switch between Node.js versions:

```bash
nvm install 18
nvm use 18
```
