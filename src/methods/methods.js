/*
一些公用的方法
*/
export const setSessionStorage= (name,data) =>{           //设置sessionsStorage数据
    if(!data) return
    window.sessionStorage.setItem(name,JSON.stringify(data))

}

export const getSessionStorage = data =>{               //获取sessionsStorage数据
    if(!data) return
    return JSON.parse(window.sessionStorage.getItem(data))
}

export const setStorage = (name,data) =>{           //设置localStorage数据
    if(!data) return
    window.localStorage.setItem(name,JSON.stringify(data))

}

export const getStorage = data =>{               //获取localStorage数据
    if(!data) return
    return JSON.parse(window.localStorage.getItem(data))
}