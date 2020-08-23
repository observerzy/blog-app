import React from 'react';
import register, { Req as TRgisteReq } from '../../common/service/register';
import { handleRespError } from '../../common/http';
export default () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const toRegister = async (reqParams: TRgisteReq) => {
        try {
            setLoading(true);
            await register.fetch(reqParams);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            handleRespError(error);
        }
    };
    return {
        toRegister,
        loading
    };
};
