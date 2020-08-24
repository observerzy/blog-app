import axios, { AxiosResponse } from 'axios';
import axiosInstance, { Response, validationRespCode } from './http';

function APIFactory<ReqParams, Resp>(url: string): any {
    let cancel: () => void | null;
    // post请求
    function fetch(
        reqParams: ReqParams
    ): Promise<AxiosResponse<Response<Resp>>> {
        return new Promise(async (res, rej) => {
            try {
                const CancelToken = axios.CancelToken;
                const resp = await axiosInstance.post<Response<Resp>>(
                    url,
                    reqParams,
                    {
                        cancelToken: new CancelToken(function executor(c) {
                            cancel = c;
                        })
                    }
                );
                // 获取错误信息
                const isFail = validationRespCode(resp.data.header);
                if (isFail) {
                    rej({ message: isFail, resp });
                } else {
                    res(resp);
                }
            } catch (error) {
                rej({ message: error.toString(), resp: null });
            }
        });
    }
    // get请求
    // 相对post对reqParams进行处理即可
    return {
        fetch,
        cancel() {
            if (cancel instanceof Function) {
                cancel();
            }
        }
    };
}
export default APIFactory;
