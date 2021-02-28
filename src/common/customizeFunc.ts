// 获取query参数的值
export const getQueryVariable = (v: string) => {
    let query = decodeURI(window.location.search).substring(1);
    let vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split('=');
        if (pair[0] === v) {
            return pair[1];
        }
    }
    return undefined;
};
