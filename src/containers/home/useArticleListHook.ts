import React from 'react';
import queryArticleList, {
    Resp as TQueryArticleListResp
} from '@/common/service/queryArticleList';
import { AxiosRespWithWebAPI } from '../../common/http';

export default () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [articleList, setArticleList] = React.useState<TQueryArticleListResp>(
        []
    );

    const getArticleList = async () => {
        try {
            const res: AxiosRespWithWebAPI<TQueryArticleListResp> = await queryArticleList.fetch(
                {}
            );
            setArticleList(res.data.body);
        } catch (error) {
            console.log('error:', error.message);
        }
    };
    return {
        getArticleList,
        loading,
        setLoading,
        articleList
    };
};
