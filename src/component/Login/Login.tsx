
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

import React, { useState } from 'react';

type LoginType = 'phone' | 'account';

const iconStyles: CSSProperties = {

  marginInlineStart: '16px',

  color: 'rgba(0, 0, 0, 0.2)',

  fontSize: '24px',

  verticalAlign: 'middle',

  cursor: 'pointer',

};

export const Login=React.memo(()=> {

  const [loginType, setLoginType] = useState<LoginType>('phone');

  return (

    <ProConfigProvider hashed={false}>

      <div style={{ backgroundColor: 'white' }}>

        <LoginForm

          logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"

          title="Github"

          subTitle="социальная сеть"

         

        >

          <Tabs

            centered

            activeKey={loginType}

            onChange={(activeKey) => setLoginType(activeKey as LoginType)}

          >

            <Tabs.TabPane key={'account'} tab={'Вход'} />

            <Tabs.TabPane key={'phone'} tab={'Регистрация'} />

          </Tabs>

          {loginType === 'account' && (

            <>

              <ProFormText

                name="username"

                fieldProps={{

                  size: 'large',

                  prefix: <UserOutlined className={'prefixIcon'} />,

                }}

                placeholder={'логин'}

                rules={[

                  {

                    required: true,

                    message: '!',

                  },

                ]}

              />

              <ProFormText.Password

                name="password"

                fieldProps={{

                  size: 'large',

                  prefix: <LockOutlined className={'prefixIcon'} />,

                }}

                placeholder={'пароль'}

                rules={[

                  {

                    required: true,

                    message: '！',

                  },

                ]}

              />

            </>

          )}

          {loginType === 'phone' && (

            <>

              <ProFormText

                name="username"

                fieldProps={{

                  size: 'large',

                  prefix: <UserOutlined className={'prefixIcon'} />,

                }}

                placeholder={'логин'}

                rules={[

                  {

                    required: true,

                    message: '!',

                  },

                ]}

              />

              <ProFormText.Password

                name="password"

                fieldProps={{

                  size: 'large',

                  prefix: <LockOutlined className={'prefixIcon'} />,

                }}

                placeholder={'пароль'}

                rules={[

                  {

                    required: true,

                    message: '！',

                  },

                ]}

              />
            </>

          )}

          <div

            style={{

              marginBlockEnd: 24,

            }}

          >

            <ProFormCheckbox noStyle name="autoLogin">

              авторизация

            </ProFormCheckbox>

            <a

              style={{

                float: 'right',

              }}

            >

              забыли пароли

            </a>

          </div>

        </LoginForm>

      </div>

    </ProConfigProvider>

  );

})
