import React from 'react';
import saveArticleAPI, {
    Req as TQueryArticleListReq
} from '@/common/service/saveArticle';

export default () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const saveArticle = async (
        params: TQueryArticleListReq,
        callback?: () => void
    ) => {
        setLoading(true);
        try {
            await saveArticleAPI.fetch(params);
            setLoading(false);
            if (callback) callback();
        } catch (error) {
            setLoading(false);
            console.log('error:', error.message);
        }
    };
    return {
        saveArticle,
        loading,
        setLoading
    };
};
