import React from 'react';
import style from './index.module.scss';
import { RouteComponentProps } from 'react-router-dom';
import { Checkbox, Tabs, Form, Row, Col, Select, Input } from 'antd';
import { FormComponentProps } from 'antd/es/form';
const { TabPane } = Tabs;
const { Option } = Select;
type TProps = FormComponentProps<{}> & RouteComponentProps;
const Demo: React.SFC<TProps> = props => {
    const { getFieldDecorator } = props.form;
    const [checkedValues, setCheckedValues] = React.useState<string[]>([]);
    const [showMark, setShowMark] = React.useState<boolean>(false);
    const [showMarkMsg, setShowMarkMsg] = React.useState<boolean>(false);

    const optionsWithDisabled = [
        { label: '联系人信息', value: '1', disabled: true },
        { label: '经办人信息', value: '2' },
        { label: '代理人信息', value: '3' }
    ];
    const onChange = (checkedValues: any) => {
        setCheckedValues(checkedValues);
    };
    const callback = (key: string) => {
        console.log(key);
    };
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    return (
        <div className={style.bgcFill}>
            <div className={style.upContent}>
                <div className={style.mainTitle}>
                    客户联系人及经办人、代理商信息
                </div>
                <div>
                    <Checkbox.Group
                        options={optionsWithDisabled}
                        defaultValue={['1']}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="联系人信息" key="1">
                            <Form>
                                <Row>
                                    <Col span={6}>
                                        <Form.Item>
                                            <div className={style.titleInput}>
                                                <span className={style.redIcon}>
                                                    *
                                                </span>
                                                <span>联系人：</span>
                                            </div>
                                            {getFieldDecorator('a', {
                                                rules: []
                                            })(
                                                <Input
                                                    className={style.input}
                                                />
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item>
                                            <div className={style.titleInput}>
                                                <span className={style.redIcon}>
                                                    *
                                                </span>
                                                <span>联系人电话：</span>
                                            </div>
                                            {getFieldDecorator('s', {
                                                rules: [
                                                    {
                                                        pattern: new RegExp(
                                                            /^[1]([3-9])[0-9]{9}$/
                                                        ),
                                                        message:
                                                            '手机号格式不对'
                                                    }
                                                ]
                                            })(
                                                <Input
                                                    maxLength={11}
                                                    className={style.input}
                                                />
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item>
                                            <div className={style.titleInput}>
                                                <span className={style.redIcon}>
                                                    *
                                                </span>
                                                <span>联系人邮箱：</span>
                                            </div>
                                            {getFieldDecorator('d', {
                                                rules: [
                                                    {
                                                        pattern: new RegExp(
                                                            /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
                                                        ),
                                                        message:
                                                            '邮箱地址格式不对'
                                                    }
                                                ]
                                            })(
                                                <Input
                                                    className={style.input}
                                                />
                                            )}
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                            <div
                                className={style.show}
                                onClick={() => {
                                    setShowMark(!showMark);
                                }}
                            >
                                {!showMark ? (
                                    <div className={style.showbox}>
                                        <span>展开</span>
                                        <div className={style.spreadout}></div>
                                    </div>
                                ) : (
                                    <div className={style.showbox}>
                                        <span>收起</span>
                                        <span className={style.cutout}></span>
                                    </div>
                                )}
                            </div>
                            {showMark ? (
                                <div>
                                    <Form>
                                        <Row>
                                            <Col span={6}>
                                                <Form.Item>
                                                    <div
                                                        className={
                                                            style.titleInput
                                                        }
                                                    >
                                                        <span>
                                                            联系人地址：
                                                        </span>
                                                    </div>
                                                    {getFieldDecorator('f', {
                                                        rules: []
                                                    })(
                                                        <Input
                                                            className={
                                                                style.input
                                                            }
                                                        />
                                                    )}
                                                </Form.Item>
                                            </Col>
                                            <Col span={6}>
                                                <Form.Item>
                                                    <div
                                                        className={
                                                            style.titleInput
                                                        }
                                                    >
                                                        <span>
                                                            联系人证件类型：
                                                        </span>
                                                    </div>
                                                    <Select
                                                        style={{
                                                            width: '80%'
                                                        }}
                                                        placeholder="请选择"
                                                        onChange={handleChange}
                                                    >
                                                        <Option value="1">
                                                            1
                                                        </Option>
                                                        <Option value="2">
                                                            2
                                                        </Option>
                                                        <Option value="3">
                                                            3
                                                        </Option>
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                            <Col span={6}>
                                                <Form.Item>
                                                    <div
                                                        className={
                                                            style.titleInput
                                                        }
                                                    >
                                                        <span>
                                                            联系人证件号码：
                                                        </span>
                                                    </div>
                                                    {getFieldDecorator('h', {
                                                        rules: []
                                                    })(
                                                        <Input
                                                            className={
                                                                style.input
                                                            }
                                                        />
                                                    )}
                                                </Form.Item>
                                            </Col>
                                            <Col span={6}>
                                                <Form.Item>
                                                    <div
                                                        className={
                                                            style.titleInput
                                                        }
                                                    >
                                                        <span
                                                            className={
                                                                style.redIcon
                                                            }
                                                        >
                                                            *
                                                        </span>
                                                        <span>
                                                            联系人固定电话：
                                                        </span>
                                                    </div>
                                                    {getFieldDecorator('j', {
                                                        rules: []
                                                    })(
                                                        <Input
                                                            className={
                                                                style.input
                                                            }
                                                        />
                                                    )}
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={6}>
                                                <Form.Item>
                                                    <div
                                                        className={
                                                            style.titleInput
                                                        }
                                                    >
                                                        <span>
                                                            联系人传真号码：
                                                        </span>
                                                    </div>
                                                    {getFieldDecorator('k', {
                                                        rules: []
                                                    })(
                                                        <Input
                                                            className={
                                                                style.input
                                                            }
                                                        />
                                                    )}
                                                </Form.Item>
                                            </Col>
                                            <Col span={6}>
                                                <Form.Item>
                                                    <div
                                                        className={
                                                            style.titleInput
                                                        }
                                                    >
                                                        <span>
                                                            联系人邮编：
                                                        </span>
                                                    </div>
                                                    {getFieldDecorator('l', {
                                                        rules: []
                                                    })(
                                                        <Input
                                                            className={
                                                                style.input
                                                            }
                                                        />
                                                    )}
                                                </Form.Item>
                                            </Col>
                                            <Col span={6}>
                                                <Form.Item>
                                                    <div
                                                        className={
                                                            style.titleInput
                                                        }
                                                    >
                                                        <span>
                                                            联系人备注：
                                                        </span>
                                                    </div>
                                                    {getFieldDecorator('z', {
                                                        rules: []
                                                    })(
                                                        <Input
                                                            className={
                                                                style.input
                                                            }
                                                        />
                                                    )}
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            ) : null}
                        </TabPane>
                        {checkedValues.includes('2') ? (
                            <TabPane tab="经办人信息" key="2">
                                <Form>
                                    <Row>
                                        <Col span={6}>
                                            <Form.Item>
                                                <div
                                                    className={style.titleInput}
                                                >
                                                    <span
                                                        className={
                                                            style.redIcon
                                                        }
                                                    >
                                                        *
                                                    </span>
                                                    <span>经办人名称：</span>
                                                </div>
                                                {getFieldDecorator('a', {
                                                    rules: []
                                                })(
                                                    <Input
                                                        className={style.input}
                                                    />
                                                )}
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Form>
                                <div
                                    className={style.show}
                                    onClick={() => {
                                        setShowMarkMsg(!showMarkMsg);
                                    }}
                                >
                                    {!showMarkMsg ? (
                                        <div className={style.showbox}>
                                            <span>展开</span>
                                            <div
                                                className={style.spreadout}
                                            ></div>
                                        </div>
                                    ) : (
                                        <div className={style.showbox}>
                                            <span>收起</span>
                                            <span
                                                className={style.cutout}
                                            ></span>
                                        </div>
                                    )}
                                </div>
                            </TabPane>
                        ) : null}
                        {checkedValues.includes('3') ? (
                            <TabPane tab="代理人信息" key="3">
                                代理人信息
                            </TabPane>
                        ) : null}
                    </Tabs>
                </div>
            </div>
            <div className={style.downContent}>
                <div className={style.mainTitle}>发展人信息</div>
                <div>
                    <Form>
                        <Row>
                            <Col className={style.colStyle} span={8}>
                                <Form.Item>
                                    <div className={style.titleInput}>
                                        <span className={style.redIcon}>*</span>
                                        <span>发展人渠道名称：</span>
                                    </div>
                                    {getFieldDecorator('search', {
                                        rules: []
                                    })(
                                        <Input.Search
                                            style={{ width: '80%' }}
                                            enterButton="选择"
                                            onSearch={value =>
                                                console.log(value)
                                            }
                                        />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col className={style.colStyle} span={8}>
                                <Form.Item>
                                    <div className={style.titleInput}>
                                        <span className={style.redIcon}>*</span>
                                        <span>发展人名称：</span>
                                    </div>
                                    {getFieldDecorator('w', {
                                        rules: []
                                    })(
                                        <Input
                                            className={style.input}
                                            disabled
                                        />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col className={style.colStyle} span={8}>
                                <Form.Item>
                                    <div className={style.titleInput}>
                                        <span className={style.redIcon}>*</span>
                                        <span>发展渠道id：</span>
                                    </div>
                                    {getFieldDecorator('e', {
                                        rules: []
                                    })(
                                        <Input
                                            className={style.input}
                                            disabled
                                        />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col className={style.colStyle} span={8}>
                                <Form.Item>
                                    <div className={style.titleInput}>
                                        <span className={style.redIcon}>*</span>
                                        <span>发展员工id：</span>
                                    </div>
                                    {getFieldDecorator('r', {
                                        rules: []
                                    })(
                                        <Input
                                            className={style.input}
                                            disabled
                                        />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col className={style.colStyle} span={8}>
                                <Form.Item>
                                    <div className={style.titleInput}>
                                        <span className={style.redIcon}>*</span>
                                        <span>发展人联系方式：</span>
                                    </div>
                                    {getFieldDecorator('t', {
                                        rules: [
                                            {
                                                pattern: new RegExp(
                                                    /^[1]([3-9])[0-9]{9}$/
                                                ),
                                                message: '手机号格式不对'
                                            }
                                        ]
                                    })(
                                        <Input
                                            maxLength={11}
                                            className={style.input}
                                        />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col className={style.colStyle} span={8}>
                                <Form.Item>
                                    <div className={style.titleInput}>
                                        <span className={style.redIcon}>*</span>
                                        <span>是否发送短信：</span>
                                    </div>
                                    <Select
                                        defaultValue="2"
                                        style={{
                                            width: '80%'
                                        }}
                                        placeholder="请选择"
                                        onChange={handleChange}
                                    >
                                        <Option value="1">是</Option>
                                        <Option value="2">否</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    );
};
const InterviewDemo = Form.create<TProps>()(Demo);
export default InterviewDemo;
