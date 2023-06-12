import React from 'react'
ProComponentsProComponents

Login form

LoginForm/Page

LoginForm and LoginFormPage are variants of ProForm. They are specially implemented to adapt to common login form layouts. They are suitable for various login scenarios and reduce layout pressure.

Login form

Github

全球最大的代码托管平台

账号密码登录

手机号登录

自动登录

忘记密码



import {

  AlipayCircleOutlined,

  LockOutlined,

  MobileOutlined,

  TaobaoCircleOutlined,

  UserOutlined,

  WeiboCircleOutlined,

} from '@ant-design/icons';

import {

  LoginForm,

  ProConfigProvider,

  ProFormCaptcha,

  ProFormCheckbox,

  ProFormText,

} from '@ant-design/pro-components';

import { message, Space, Tabs } from 'antd';

import type { CSSProperties } from 'react';

import { useState } from 'react';

type LoginType = 'phone' | 'account';


export const Login=React.memo(()=> {
    return <div>

    </div>
})
