import FunctionInfo from '../../types/FunctionInfo'
import { Range, TextDocumentContentChangeEvent } from 'vscode-languageserver'
import Config from '../../types/Config'
import { CacheFile } from '../../types/ClientCache'
import { parseString } from './common'
import Line from '../../types/Line'
import { VanillaReportOptions } from '../../types/ParsingContext'

export default async function onDidChangeTextDocument({ info, version, contentChanges, config, cacheFile, reportOptions }: { info: FunctionInfo, version: number | null, contentChanges: TextDocumentContentChangeEvent[], config: Config, cacheFile: CacheFile, reportOptions?: VanillaReportOptions }) {
    // Update `version`.
    info.version = version

    for (const change of contentChanges) {
        const text = change.text
        const range = (change as any).range
        if (range) {
            // Incremental update.

            const { start, end } = range as Range

            // Update `strings`.
            const affectedStrings = (
                info.strings[start.line].slice(0, start.character) +
                text +
                info.strings[end.line].slice(end.character)
            ).split(/\r?\n/)
            info.strings.splice(start.line, end.line - start.line + 1, ...affectedStrings)

            // Update `lines`.
            const affectedLines: Line[] = []
            for (const string of affectedStrings) {
                await parseString(string, affectedLines, config, cacheFile, undefined, reportOptions)
            }
            info.lines.splice(start.line, end.line - start.line + 1, ...affectedLines)
        } else {
            // Full update.

            // Update `lineBreak`.
            /* istanbul ignore next */
            if (text.includes('\r\n')) {
                info.lineBreak = '\r\n'
            } else {
                info.lineBreak = '\n'
            }

            // Update `strings`.
            info.strings = text.split(/\r?\n/)

            // Update `lines`.
            info.lines = []
            for (const string of info.strings) {
                await parseString(string, info.lines, config, cacheFile, undefined, reportOptions)
            }
        }
    }
}
