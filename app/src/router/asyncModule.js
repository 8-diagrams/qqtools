/* 异步加载模块 */
import React, { Component } from 'react';
import Bundle from './Bundle';
import SwitchLoading from '../assembly/SwitchLoading/index';

/**
 * 异步加载、注入模块和reducer
 * @param { Function } module: 需要异步注入的模块
 */
function asyncModule(module: Function): Function{
  return (): Object=>(
    <Bundle load={ module }>
      { (Module: Object): Object => Module ? <Module /> : <SwitchLoading /> }
    </Bundle>
  );
}

export default asyncModule;