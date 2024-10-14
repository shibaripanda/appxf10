export const getRole = (roles) => {
    if(roles.includes('owner')) return 'owner'
    else if(roles.includes('supermanager'))  return 'supermanager'
    else if(roles.includes('manager'))  return 'manager'
    else if(roles.includes('master'))  return 'master'
    else return 'user'
}