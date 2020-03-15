import React from 'react';
import { message, notification } from 'antd';

// 这里用到泛型来灵活化state和props的interface
export class ComponentExt<P = {}, S = {}> extends React.Component<P, S> {
  $message = message;
  $notification = notification;
}

// todo:无状态组件做类似效果或者其它实现方式
