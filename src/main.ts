#!/usr/bin/env node
import { Command } from 'commander'
import { parseInputFiles } from './parser/parseInputFile'
import { generateTypes } from './generator/generateTypes'
async function main() {
  const program = new Command()
  program.option('-f, --file <file>', 'Path of the file to be processed.')
  const parsedResult = program.parse(process.argv)
  if (!parsedResult.opts().file) {
    console.log(parsedResult.opts())
    throw new Error('Please provide a valid file path.')
  }

  const filePath = parsedResult.opts().file as string
  const fileContent = await parseInputFiles(filePath)
  await generateTypes(fileContent)
  return true
}

main().catch((error) => {
  console.error('Unexcepted error:')
  console.error(error)
  process.exit(1)
})
