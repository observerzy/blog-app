//返参可以有多种情况，此处是json

// enum ContentType {
//     json = "application/json;charset=UTF-8",
//     formData = "multipart/form-data;charset=UTF-8"
// }
interface Header {
    'Content-Type'?: string;
    [propName: string]: any; //索引签名
}
interface Request {
    method: 'POST' | 'GET';
    headers: Header;
    body: any;
}

interface HttpFetch {
    postFetch<R>(url: string, params: FormData): Promise<R>;
}
class HttpRequest implements HttpFetch {
    public postFetch<R>(url: string, params: FormData): Promise<R> {
        let options: Request = {
            method: 'POST',
            headers: {},
            body: params
        };
        url = `/api${url}?app_login_token=${localStorage.getItem(
            'app_login_token'
        )}`;
        return fetch(url, options)
            .then(resp => {
                //服务错误400、500
                if (!resp.ok) {
                    throw new Error('保存失败');
                }
                return resp.json();
            })
            .then(data => {
                //参数错误
                if (data.header.retCode === '1') {
                    throw new Error(data.header.errotMsg || '保存失败');
                }
                return data;
            });
    }
}

export default new HttpRequest();
