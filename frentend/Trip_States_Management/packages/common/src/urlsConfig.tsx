type UrlConfigBody = {
    CORE_BASE_URL?: string
    DEBUG_MODE?: boolean
}

class UrlsConfigs {
    values: null | UrlConfigBody = null
    setURls(config: UrlConfigBody): void {
        this.values = config
    }

    getURLs(): UrlConfigBody | null {
        return this.values
    }
}

export default UrlsConfigs
