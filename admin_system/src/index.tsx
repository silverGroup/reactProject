import React ,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Spin } from 'antd';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';
import config from './config'
import AppRouters from './router/router'
import { ConfigProvider } from 'antd';
import i18n from './language';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider direction="rtl" csp={{ nonce: 'YourNonceCode' }}>
        <Suspense fallback={<Spin size="large" className="layout__loading" />}>
            <Router  basename={config.BASENAME}>
                <AppRouters/>
            </Router>
        </Suspense>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
