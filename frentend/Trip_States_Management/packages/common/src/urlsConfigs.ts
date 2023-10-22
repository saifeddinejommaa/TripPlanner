type UrlConfigBody = {
    KEYCLOAK_URL?: string
    KEYCLOAK_CLIENT_ID?: string
    KEYCLOAK_SCOPE?: string
    CORE_BASE_URL?: string
    CONTRACT_BASE_URL?: string
    STORAGE_BASE_URL?: string
    TRANSLATION_STORAGE_BASE_URL?: string
    DEBUG_MODE?: boolean
    NOTIFICATIONS_BASE_URL?: string
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
