import {
    IconHome,
    IconCirclePlus,
    IconUsersGroup,
    IconUser,
    IconPower,
    IconSettings,
    IconLogout,
    IconSwitchHorizontal,
    IconUserFilled
  } from '@tabler/icons-react';
import { sessionData } from '../modules/sessionData';


export const fixNavBarItems = async () => {

    return {
      top: [
        { icon: IconHome, label: 'Service',         role: ['owner', 'supermanager', 'manager', 'master']},
        { icon: IconCirclePlus, label: 'New Order', role: ['owner', 'supermanager', 'manager'] },
        { icon: IconUser, label: 'Settings',        role: ['owner', 'supermanager', 'manager'] },
        { icon: IconUsersGroup, label: 'Users',     role: ['owner', 'supermanager'] },
        { icon: IconSettings, label: 'SuperAdmin',  role: ['owner', 'supermanager'] },
        { icon: IconUserFilled, label: 'GodAdmin',  role: ['owner'] },
        
      ],
      bottom: [
        { icon: IconSwitchHorizontal, label: 'Change account', onCl: (navigate) => {
          sessionData('close')
          navigate("/")
        }},
        { icon: IconLogout, label: 'Logout', onCl: (navigate) => {
          sessionData('exit')
          navigate("/")
        }},
        { icon: IconPower, label: 'OFF APP', onCl: (navigate) => {
          sessionData('off')
          navigate("/")
        }}
      ]
    }

}