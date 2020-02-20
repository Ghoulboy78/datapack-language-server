import CommandTreeVersion from '../types/CommandTreeVersion'
import Registry from '../types/Registry'

const Registries: {
    [version: string]: Registry | undefined
} = {}

export async function getRegistry(version: CommandTreeVersion) {
    if (!Registries[version]) {
        Registries[version] = await import(`./${version}/Registry.json`)
    }
    return Registries[version] as Registry
}
