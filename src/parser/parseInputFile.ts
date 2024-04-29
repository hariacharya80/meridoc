import SwaggerParser from '@apidevtools/swagger-parser'
export async function parseInputFiles(filePath: string) {
    try {
        const parsedFile = await SwaggerParser.parse(filePath)
        return parsedFile
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}
