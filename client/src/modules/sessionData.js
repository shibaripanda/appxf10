export const sessionData = (forward, item, data) => {

    if(forward === 'write'){
        if(item === 'currentUser'){
            sessionStorage.setItem(item, data)
        }
        else if(item === 'campId'){
            sessionStorage.setItem(item, data)
        }
        else if(item === 'role'){
            sessionStorage.setItem(item, data)
        }
        else if(item === 'activUsers'){
            if(sessionStorage.getItem(item)){
                const res = (sessionStorage.getItem(item).split('%')).findIndex(item => item.split('#')[0] === data.split('#')[0])
                if(res < 0){
                  sessionStorage.setItem(item, sessionStorage.getItem(item) + '%' + data)
                }
            }
            else{
                sessionStorage.setItem(item, data)
            }
        }
    }
    else if(forward === 'read'){
        if(item === 'activUsers' && sessionStorage.getItem(item)){
            return sessionStorage.getItem(item)?.split('%')
        }
        else if(item === 'currentUser'){
            return sessionStorage.getItem('currentUser')
        }
        else if(item === 'email'){
            return sessionStorage.getItem('currentUser').split('#')[0]
        }
        else if(item === 'name'){
            const res = sessionStorage.getItem('currentUser').split('#')[1]
            if(res === 'noname'){
                return sessionStorage.getItem('currentUser').split('#')[0]
            }
            return res
        }
        else if(item === 'token'){
            return sessionStorage.getItem('currentUser')?.split('#')[2]
        }
        else if(item === 'campId'){
            return sessionStorage.getItem('campId')
        }
        else if(item === 'role'){
            return sessionStorage.getItem('role')
        }
    }
    else if(forward === 'close'){
        sessionStorage.removeItem('currentUser')
        sessionStorage.removeItem('campId')
        sessionStorage.removeItem('role')
    }
    else if(forward === 'exit'){
        sessionStorage.setItem('activUsers', sessionStorage.getItem('activUsers').split('%').filter(item => item !== sessionStorage.getItem(`currentUser`)).join('%'))
        sessionStorage.removeItem(`campId`)
        sessionStorage.removeItem('role')
        sessionStorage.removeItem(`currentUser`)
    }
    else if(forward === 'off'){
        sessionStorage.clear()
    }
    else{
        console.log('нихуя')
    }

}