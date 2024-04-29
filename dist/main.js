#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const parseInputFile_1 = require("./parser/parseInputFile");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const program = new commander_1.Command();
        program.option('-f, --file <file>', 'Path of the file to be processed.');
        const parsedResult = program.parse(process.argv);
        if (!parsedResult.opts().file) {
            throw new Error('Please provide a valid file path.');
        }
        console.log(parsedResult.opts());
        const filePath = parsedResult.opts().file;
        const fileContent = yield (0, parseInputFile_1.parseInputFiles)(filePath);
        console.log(fileContent);
    });
}
main().catch((error) => {
    console.error(`unknown error occoured while running the script: ${error}`);
    process.exit(1);
});
