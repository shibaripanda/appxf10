import { Injectable } from '@nestjs/common'


@Injectable()
export class FixService {

    async getFixserviceSettings(){

        const listFastDevice = [
            {label: 'Ноутбуки', link: 'device4', request: 'Ноутбук'},
            {label: 'Телефоны', link: 'device1', request: 'Телефон'},
            {label: 'Планшеты', link: 'device2', request: 'Планшет'},
            {label: 'Картриджи', link: 'device3', request: 'Картридж'},
            {label: 'Reset', link: 'device0', request: ''}
        ] 
        const listOrdersFields = [
    
            {
                index: 'client', 
                label: 'Заказчик',         
                variants: false, 
                freez: true, 
                data: false, 
                maintable: true,
                hide: false  
            },
            {
                index: 'contact', 
                label: 'Телефон',        
                variants: false, 
                freez: true, 
                data: false, 
                maintable: true,
                hide: false  
            },
            {
                index: 'clientAdress', 
                label: 'Адрес Заказчика',
                variants: false, 
                freez: true, 
                data: false, 
                maintable: true,
                hide: false
            },
            {
                index: 'title' , 
                label: 'Устройство',      
                variants: true,  
                freez: true, 
                data: false, 
                maintable: true,
                hide: false 
            },
            {
                index: 'firm', 
                label: 'Бренд',           
                variants: true,  
                freez: true, 
                data: false, 
                maintable: true,
                hide: false  
            },
            {
                index: 'problem', 
                label: 'Неисправность',   
                variants: true,  
                freez: true, 
                data: false,
                maintable: true,
                hide: false  
            },
            {
                index: 'model', 
                label: 'Модель',          
                variants: true,  
                freez: true, 
                data: false, 
                maintable: true,
                hide: false  
            },
            {
                index: 'sn' , 
                label: 'Серийный номер',  
                variants: false, 
                freez: true,
                data: false, 
                maintable: false,
                hide: false 
            },
            {
                index: 'look', 
                label: 'Внешний вид',     
                variants: true,  
                freez: true, 
                data: false, 
                maintable: false,
                hide: false   
            },
            {
                index: 'speed', 
                label: 'Срочность',       
                variants: true,  
                freez: true, 
                data: false, 
                maintable: false,
                hide: false   
            },
            {
                index: 'info', 
                label: 'Заметки',         
                variants: true,  
                freez: true, 
                data: false, 
                maintable: false,
                hide: false  
            },
            {
                index: 'cost', 
                label: 'Стоимость',      
                variants: false, 
                freez: true, 
                data: false,
                maintable: false,
                hide: false   
            },
            {
                index: 'orderId', 
                label: 'ID',      
                variants: false, 
                freez: true, 
                data: false,
                maintable: true,
                hide: false 
            },
            {
                index: 'date', 
                label: 'Дата',      
                variants: false, 
                freez: true, 
                data: false,
                maintable: true,
                hide: false 
            },
            {
                index: 'dateOut', 
                label: 'Дата Выдачи',      
                variants: false, 
                freez: true, 
                data: false,
                maintable: false,
                hide: false 
            },
            {
                index: 'status', 
                label: 'Статус',      
                variants: false, 
                freez: true, 
                data: false,
                maintable: false,
                hide: false 
            },
            {
                index: 'manager', 
                label: 'Мененджер',      
                variants: false, 
                freez: true, 
                data: false,
                maintable: false,
                hide: false 
            },
            {
                index: 'masters', 
                label: 'Мастер',      
                variants: false, 
                freez: true, 
                data: false,
                maintable: false,
                hide: false 
            },
            {
                index: 'createdAt', 
                label: 'createdAt',      
                variants: false, 
                freez: true, 
                data: false,
                maintable: false,
                hide: true 
            },
            {
                index: 'updatedAt', 
                label: 'updatedAt',      
                variants: false, 
                freez: true, 
                data: false,
                maintable: false,
                hide: true 
            },
            {
                index: '__v', 
                label: '__v',      
                variants: false, 
                freez: true, 
                data: false,
                maintable: false,
                hide: true 
            },
            {
                index: '_id', 
                label: '_id',      
                variants: false, 
                freez: true, 
                data: false,
                maintable: false,
                hide: true 
            },
            
    
        ]
        const generalDataList = {
                   client: ['dfdfdf'],
                  contact: ['dfdf'],
            clientAdress : ['rtrtrt'],
                    title: ['bnbnbn'],
                    firm: ['cvcvcbc'],
                  problem: ['qw'],
                    model: ['ete'],
                       sn: ['fg'],
                     look: ['rtyrtrtrt'],
                    speed: ['uiuiui'],
                     info: ['565656'],
                     cost: ['676767']
        }
        const listOfStatuses = [
    
            {
                index: 'new', 
                label: 'New',
                freez: true 
            },
            {
                index: 'process', 
                label: 'In the process',
                freez: true 
            },
            {
                index: 'diagnostics', 
                label: 'Diagnostics',
                freez: true 
            },
            
            {
                index: 'ready', 
                label: 'Ready',
                freez: true 
            },
            {
                index: 'close', 
                label: 'Close',
                freez: true 
            },
            {
                index: 'cancel', 
                label: 'Сancel',
                freez: true 
            },
            {
                index: 'warranty', 
                label: 'Warranty',
                freez: true 
            },    
    
        ]
        
        return (
            {
                listFastDevice: listFastDevice,
                listOrdersFields: listOrdersFields,
                generalDataList: generalDataList,
                listOfStatuses: listOfStatuses
            }
        )

    }

    async getText(){

        return (
            {
                badEmail: 'Некорректный емейл',
                badPassword: 'Некорректный пароль',
                badServiceName: 'Некорректное название сервиса',
                welcom: 'Добро пожаловать!',
                DoNotHaveAServiceYet: 'Еще нет сервиса?',
                CreateService: 'Создать сервис', 
                GetPassword: 'Получить пароль',
                Enter: 'Войти',
                back: 'Назад',
                passwordSentToEmail: 'Пароль выслан на вашу почту',
                NameForNewService: 'Название вашего сервиса',
                CreateNewService: 'Создать новый сервис',
                YourCampanies: 'Ваши компании',
        
                main: 'Главная',
        
                settingsMainTable: 'Настройка полей главной таблицы',
                userNoFind: 'Вы не являетесь владельцем или сотрудником ни в одном из сервисов',
                timePasswordSendToEmail: 'Временный пароль выслан на почту',
                youDontHaveOrders: 'Нет заказов',
                UserSettings: 'Настройки пользователя',
                CampSettings: 'Настройки компании',
                workers: 'Сотрудники'
                
            }
        )

    }

}
