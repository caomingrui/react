import React, {Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Homes, {Home} from "./page/home";
import reportWebVitals from './reportWebVitals';
import Test from "./test";


import { Home } from './page/home/index'

import { states } from "./utils/publicData";

import {Router, Route, Switch, Redirect} from 'react-router';
import { createHashHistory } from 'history';

import { ParentCont } from './page/index'
import {NotFound} from "./page/404/notFound";
import { Ind } from "./page/collectPlay";

import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import routes, { isState } from "./route";
import "@/utils/tool"
import FrontendAuth from "@/utils/route"

const hashHistory = createHashHistory();

const ParentContMemo = React.memo(ParentCont);

const CmrTest = (props) => {

    const [boolValue, setBoolValue] = useState(false);

    useEffect(() => {
        if(boolValue) {
            console.log("---------------CmrTest开始:----------------")
            setBoolValue(false);
            // getToken();
        }
        setBoolValue(true);
    })

    useEffect(() => {
        console.log("----------CmrTest组件挂载完成之后执行:---------------")
        // getToken();
    },[])

    useEffect(() => {
        if(boolValue){
            console.log("-------------CmrTest组件更新-------------------")
            setBoolValue(false);
            // getToken();
        }
        setBoolValue(true);
    })

    useEffect(() => {
        if(boolValue) {
            console.log("---------------- CmrTest依赖更新 -----------------")
            setBoolValue(false);
            // getToken();
        }
        setBoolValue(true);
    },[routes])

    return (
        <>
            { props.children }
        </>
    )
}

ReactDOM.render(
    <div>
        {/*<Router history={ hashHistory }>*/}
        {/*    <Switch>*/}
        {/*        /!*<Route path="/login/:value" component={ ParentCont }  exact></Route>*!/*/}
        {/*        /!*<Route path="/a" component={ Test }  exact></Route>*!/*/}
        {/*        /!*<Route path="/b" component={ Homes }  exact></Route>*!/*/}
        {/*        /!*<Route path="/home" component={ Home }  ></Route>*!/*/}
        {/*        <Route path="/col" component={ Ind } exact></Route>*/}
        {/*        <Route path="/404" component={ NotFound }  ></Route>*/}
        {/*        <Redirect from="/*" to="/404"/>*/}
        {/*    </Switch>*/}
        {/*</Router>*/}
        <CmrTest>
            <HashRouter>
                <Suspense fallback={<div>123</div>}>
                    <FrontendAuth routerConfig={routes} isState={ isState }></FrontendAuth>
                </Suspense>
            </HashRouter>
        </CmrTest>
    </div>,
    document.getElementById('root')
)

reportWebVitals();
