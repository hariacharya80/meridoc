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
exports.generateTypes = void 0;
function generateTypes(fileContents) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        //let's first validate the generated contents
        if (!fileContents.paths) {
            throw new Error('No Endpoints found to generate types for.');
        }
        if (!((_a = fileContents.components) === null || _a === void 0 ? void 0 : _a.schemas)) {
            throw new Error('No Components found to generate types for.');
        }
        const endpoints = [];
        console.log(endpoints);
        for (const key in fileContents.paths) {
            //find method first
            /*
             * interface Endpoint {
            method: string,
            query: Record<string, any>
            params: Record<string, any>
            body: Record<string, any>
          }
             *
             * const endpointInformation: Endpoint = {
              method: '',
              query: {
                name: 'type will be here'
              },
              params: {
                name: 'type will be here'
              },
              body: {
                name: 'type will be here'
              }
            }*/
            //let keep track of methods that have already been pushed
            //const methods = Object.keys(fileContents.paths[key]);
            for (const method of Object.values(fileContents.paths[key])) {
                console.log(method);
                /*
                 if (method !== 'parameters') {
                   endpointInformation.method = method
                   for (const parameter of method) {
                     console.log(parameter)
                   }
                 }
                 */
            }
        }
    });
}
exports.generateTypes = generateTypes;
