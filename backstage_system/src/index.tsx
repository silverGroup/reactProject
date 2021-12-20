/*
 * @Author: your name
 * @Date: 2021-12-10 18:00:57
 * @LastEditTime: 2021-12-16 11:19:17
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /reactProject/backstage_system/src/index.tsx
 */
import React ,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import  './language';
import { Spin } from 'antd';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';
import config from './config'
import AppRouters from './router/router'
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.less';
import './index.less';
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import store from './store'
import { Provider } from 'react-redux'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
            <Suspense fallback={<Spin size="large" className="layout__loading" />}>
                <Router  basename={config.BASENAME}>
                    <ConfigProvider locale={store.getState().lang==='zh'?zhCN:enUS} csp={{ nonce: 'YourNonceCode' }} >
                        <AppRouters/>
                    </ConfigProvider>
                </Router>
            </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
