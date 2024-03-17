#!/usr/bin/env node
'use strict'

import process from 'node:process'
import { resolve } from 'node:path'
import fs from 'node:fs'
import { exec } from 'node:child_process'
// 当前路径

const cwd = process.cwd()
const rootPath = resolve(cwd)
const distPath = resolve(cwd, 'dist')

if (fs.existsSync(distPath))
  fs.rmSync(distPath, { recursive: true })

if (fs.existsSync(`${rootPath}/dist.zip`)) {
  const zipPath = `${rootPath}/dist.zip`
  fs.rmSync(zipPath, { recursive: true })
}

fs.mkdirSync(distPath)
const files = ['index.html', 'main.js', 'styles.css']
files.forEach(file => fs.copyFileSync(`${rootPath}/${file}`, `${distPath}/${file}`))

exec('zip -r dist.zip dist', (error, stdout, stderr) => {
  if (error) {
    console.log(`压缩失败:${error}`)
    process.exit(1)
  }

  if (stderr) {
    console.log(`压缩失败:${stderr}`)
    process.exit(1)
  }

  console.log('process down')
  process.exit()
})
