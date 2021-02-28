import React from 'react';
import style from './index.module.scss';
import showdown from 'showdown';
import { useHistory } from 'react-router-dom';
import { Input, Button, Popconfirm } from 'antd';
import useSaveArticleHook from '@/model/useSaveArticleHook';
import { useComStore } from '@/store';
const Writing: React.SFC = () => {
    const [title, setTitle] = React.useState<string>('');
    const [content, setContent] = React.useState<string>('');
    const [belong, setBelong] = React.useState<string>('');
    const titleRef = React.useRef<HTMLDivElement>(null);
    const contentRef = React.useRef<HTMLDivElement>(null);
    const history = useHistory();
    const useComStoreOperate = useComStore();
    const saveArticleHook = useSaveArticleHook();
    const showArticle = (title: string = '', content: string = '') => {
        let converter = new showdown.Converter();
        titleRef.current.innerHTML = converter.makeHtml(title);
        contentRef.current.innerHTML = converter.makeHtml(content);
    };
    React.useEffect(() => {
        showArticle(title, content);
    }, [title, content]);
    return (
        <div>
            <div className={style.head}>
                <div className={style.headMsg}>创造0和1的世界吧！</div>
                <div className={style.operateArea}>
                    <Input
                        className={style.belongInput}
                        value={belong}
                        onChange={e => {
                            setBelong(e.target.value);
                        }}
                        placeholder={'请输入文章类属'}
                    ></Input>
                    <Popconfirm
                        placement="leftTop"
                        title={'确定保存文章？'}
                        onConfirm={() => {
                            if (!title || !content || !belong) {
                                alert('文章信息不可为空！');
                                return;
                            }
                            saveArticleHook.saveArticle(
                                {
                                    title,
                                    content,
                                    belong,
                                    userId: '',
                                    userName: ''
                                },
                                () => {
                                    useComStoreOperate.dispatch({
                                        type: 'SETCURRENT',
                                        payload: { current: 0 }
                                    });
                                    history.go(-1);
                                }
                            );
                        }}
                        okText="是"
                        cancelText="否"
                    >
                        <Button
                            type="primary"
                            loading={saveArticleHook.loading}
                            className={style.saveBtn}
                        >
                            保存
                        </Button>
                    </Popconfirm>
                    <Button
                        type="default"
                        onClick={() => {
                            history.go(-1);
                        }}
                    >
                        取消
                    </Button>
                </div>
            </div>

            <div className={style.main}>
                <div className={style.write}>
                    <Input.TextArea
                        className={style.titleInput}
                        value={title}
                        onChange={e => {
                            setTitle(e.target.value);
                        }}
                        autoSize={{ minRows: 2, maxRows: 2 }}
                        placeholder={'请输入标题'}
                    ></Input.TextArea>
                    <Input.TextArea
                        value={content}
                        onChange={e => {
                            setContent(e.target.value);
                        }}
                        autoSize={{ minRows: 34, maxRows: 34 }}
                        placeholder={'请输入内容'}
                    ></Input.TextArea>
                </div>
                <div className={style.read}>
                    <div ref={titleRef} className={style.title}></div>
                    <div ref={contentRef} className={style.content}></div>
                </div>
            </div>
        </div>
    );
};

export default Writing;
