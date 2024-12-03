import axios, { AxiosRequestConfig } from 'axios'

interface apiRequestType {
    url?: string
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
    timeout?: number
    headers?: object
    data?: object
    params?: object
    path?: string
    apiVersion?: string
    token?: string | undefined
}

export const apiRequest = async ({ method, timeout, headers, data, params, path, apiVersion, url }: apiRequestType) => {
    const defaultParams = {}
    const mergedParams = { ...defaultParams, ...params }

    const config: AxiosRequestConfig = {
        method,
        url: `${url}`,
        timeout: 5000,
        params: mergedParams,
    }

    if (headers) {
        config.headers = { ...config.headers, ...headers }
    }

    if (data) {
        config.data = data
    }

    if (timeout) {
        config.timeout = timeout
    }

    return axios(config)
        .then((res) => res)
        .catch((err) => {
            console.info('[ERROR] Api Request: ', err)
            throw err
        })
}
