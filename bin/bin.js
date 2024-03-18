#!/usr/bin/env node
'use strict'

import process from 'node:process'
import { resolve } from 'node:path'
import fs from 'node:fs'
import AdmZip from 'adm-zip'
// import { exec } from 'node:child_process'

const cwd = process.cwd()
const rootPath = resolve(cwd)
const distPath = resolve(cwd, 'dist')

// 删除dist目录
if (fs.existsSync(distPath))
  fs.rmSync(distPath, { recursive: true })

// 删除dist.zip
if (fs.existsSync(`${rootPath}/dist.zip`)) {
  const zipPath = `${rootPath}/dist.zip`
  fs.rmSync(zipPath, { recursive: true })
}

// 拷贝必要文件到dist目录
fs.mkdirSync(distPath)
fs.mkdirSync(`${distPath}/public`)
const files = ['index.html', 'main.js', 'styles.css']
files.forEach(file => fs.copyFileSync(`${rootPath}/${file}`, `${distPath}/${file}`))

// 拷贝public文件到dist
fs.readdirSync(`${rootPath}/public`).forEach((file) => {
  if (file.trim()) {
    const filePath = `${rootPath}/public/${file}`
    fs.copyFileSync(filePath, `${distPath}/public/${file}`)
  }
})

// 压缩
const zip = new AdmZip()
zip.addLocalFolder(distPath)
zip.writeZip(`${rootPath}/dist.zip`)
