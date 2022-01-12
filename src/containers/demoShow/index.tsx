import React from 'react';
import axios from 'axios';
import { Button } from 'antd';
const DemoShow = () => {
    const [testData, setTestData] = React.useState<Record<string, any>>(null);
    React.useEffect(() => {
        axios.post('http://localhost:9001/api/saveArticle', {
            title: '123',
            content: '123',
            belong: 'node.js'
        });
    }, []);
    return (
        <div>
            {testData?.test}
            <Button
                type="primary"
                onClick={() => {
                    axios
                        .get('http://localhost:9001/api/getArticle')
                        .then(r => {
                            console.log('data:', r.data);
                            setTestData(r.data);
                        });
                }}
            >
                点我
            </Button>
        </div>
    );
};
export default DemoShow;
