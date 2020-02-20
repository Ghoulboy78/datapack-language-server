export default interface VersionManifest {
    latest: {
        release: string,
        snapshot: string
    },
    versions: {
        id: string,
        type: 'snapshot' | 'release',
        url: string
    }[]
}
