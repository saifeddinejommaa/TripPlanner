type UrlConfigBody = {
    CORE_BASE_URL?: string
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
export type technicalErrorMessageType = {
    statusCode: number
    message: string
}

export const LogRequestResponse = (response: any, urlsConfig: UrlsConfigs) => {
    if (urlsConfig.values?.DEBUG_MODE) {
        console.log('HTTP - response')
        console.log(response)
    }
}

export const LogError = (response: any, urlsConfig: UrlsConfigs) => {
    if (urlsConfig.values?.DEBUG_MODE) {
        console.log('Error - catched')
        console.log(response)
    }
}

export const buildTechnicalErrorMessage = (
    e: any | null | undefined
): technicalErrorMessageType => {
    if (e && !e.response) {
        return { statusCode: -1, message: e.toString() }
    }

    return {
        statusCode: e?.response?.status ?? -1,
        message: e?.toJSON() ? e?.toJSON() : 'error object is null or undefined'
    }
}
