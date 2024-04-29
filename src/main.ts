#!/usr/bin/env node
import { Command } from 'commander'
import { parseInputFiles } from './parser/parseInputFile'
async function main() {
  const program = new Command()
  program.option('-f, --file <file>', 'Path of the file to be processed.')
  const parsedResult = program.parse(process.argv)
  if (!parsedResult.opts().file) {
    throw new Error('Please provide a valid file path.');
  }
  console.log(parsedResult.opts())
  const filePath = parsedResult.opts().file as string
  const fileContent = await parseInputFiles(filePath)
  console.log(fileContent)
}

main().catch((error) => {
  console.error(`unknown error occoured while running the script: ${error}`)
  process.exit(1)
})
