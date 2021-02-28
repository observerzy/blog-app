import axios, { AxiosResponse } from 'axios';
import { message } from 'antd';
type THeader = {
    retCode: string;
    errorNum: string;
    errorMsg: string;
};
export interface Response<P> {
    header: THeader;
    body: P;
}
export interface AxiosRespWithWebAPI<T> extends AxiosResponse<Response<T>> {}

// const token = "test_token"
const RESPONSE_SUCCESS_CODE = '0';
const RESPONSE_ERRORNUM = '';
const UNKONW_ERROR = '未知错误';
const STATUS_MESSAGE: { [key: string]: string } = {
    404: '服务器错误'
    // exact
};
const instance = axios.create({
    baseURL: 'http://127.0.0.1:9001/api',
    timeout: 1000 * 20
});

instance.defaults.headers.post['Content-Type'] =
    'application/json;charset=utf-8';

// 请求拦截
instance.interceptors.request.use(
    config => {
        // config.url = config.url ? `${config.url}?login_token=${token}` : config.url
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截
instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        let message = '';
        try {
            const status = error.response.status;
            if (status === 401) {
                message = '登录超时，请重新登陆';
            } else if (status >= 500 && status < 600) {
                message = '系统异常，请稍后重试';
            } else if (status >= 400 && status < 600) {
                message = STATUS_MESSAGE[status] || UNKONW_ERROR;
            } else if (status >= 300 && status < 400) {
                message = '服务器已重定向';
            }
        } catch (error) {
            // ignore
        }
        return Promise.reject(message);
    }
);

export default instance;

// 用于APIFactory中promise的reject返回错误信息
export function validationRespCode(res: THeader) {
    if (res.retCode !== RESPONSE_SUCCESS_CODE) {
        return '请求失败';
    }
    if (res.errorNum !== RESPONSE_ERRORNUM) {
        return res.errorMsg || '注册失败';
    }
}

// try/catch中使用，用于处理错误提示形式
export function handleRespError(e: any) {
    const content =
        typeof e === 'string' ? e : e.message ? e.message : UNKONW_ERROR;
    message.error(content);
}
