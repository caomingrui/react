import React, { useState, useEffect, useReducer, useContext } from 'react';

// 生命周期状态
export const useText1 = () => {
    const [state, setState] = useState(false);
    const changeDtate = (boo) => {
        setState(boo);
    }

    return {
        state,
        setState,
        changeDtate
    }
}
