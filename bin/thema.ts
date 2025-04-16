#!/usr/bin/env node

import { cac } from 'cac';
import chalk from 'chalk';
import { execSync } from 'node:child_process';
import fs from 'node:fs';

const cli = cac('thema');

const log = console.log;
const green = (t: string) => chalk.greenBright(t);
const red = (t: string) => chalk.redBright(t);
const blue = (t: string) => chalk.cyanBright(t);

function isInstalled(pkg: string): boolean {
  const pkgJson = JSON.parse(fs.readFileSync('../package.json', 'utf8'));
  const deps = { ...pkgJson.dependencies, ...pkgJson.devDependencies };
  return !!deps[pkg];
}

function installPackage(pkg: string) {
  if (isInstalled(pkg)) {
    log(`${green('✔')} ${blue(pkg)} is already installed.`);
  } else {
    log(`${blue('➕ Installing')} ${pkg}...`);
    execSync(`npm install ${pkg}`, { stdio: 'inherit' });
    log(`${green('✔')} Installed ${pkg}`);
  }
}

function uninstallPackage(pkg: string) {
  if (!isInstalled(pkg)) {
    log(`${red('✘')} ${blue(pkg)} is not installed.`);
  } else {
    log(`${blue('➖ Removing')} ${pkg}...`);
    execSync(`npm uninstall ${pkg}`, { stdio: 'inherit' });
    log(`${green('✔')} Removed ${pkg}`);
  }
}

cli
  .command('add <package>', 'Add a ThemaKit module')
  .action(pkg => {
    installPackage(`@themakit/${pkg}`);
  });

cli
  .command('del <package>', 'Remove a ThemaKit module')
  .action(pkg => {
    uninstallPackage(`@themakit/${pkg}`);
  });

cli
  .command('list', 'List available ThemaKit modules')
  .action(() => {
    log(green('\n🧩 Available ThemaKit modules:'));
    log(`- ${blue('core')}`);
    log(`- ${blue('theme')}`);
    log(`- ${blue('layout')}`);
    log(`- ${blue('inputs')}`);
    log(`- ${blue('everything')}`);
    log('\nUse ' + chalk.yellow('npx thema add [name]') + ' to install one.\n');
  });

cli.help();
cli.parse();
