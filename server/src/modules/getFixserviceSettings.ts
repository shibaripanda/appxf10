export const getFixserviceSettings = () => {

    const deviceDb = (data) => {
        let res = []
        for(const key1 in data){
            for(const key2 in data[key1]){
                console.log(key1)
                console.log(key2)
                res = res.concat(data[key1][key2])
            }
        }
        console.log(res)
        return res
    }

    const deviceslast15years = {
        "phones": {
            "Apple": [
                "iPhone 3GS", "iPhone 4", "iPhone 4s", "iPhone 5", "iPhone 5c", "iPhone 5s", "iPhone 6", "iPhone 6 Plus", 
                "iPhone 6s", "iPhone 6s Plus", "iPhone SE (1st generation)", "iPhone 7", "iPhone 7 Plus", "iPhone 8", 
                "iPhone 8 Plus", "iPhone X", "iPhone XR", "iPhone XS", "iPhone XS Max", "iPhone 11", "iPhone 11 Pro", 
                "iPhone 11 Pro Max", "iPhone SE (2nd generation)", "iPhone 12", "iPhone 12 mini", "iPhone 12 Pro", 
                "iPhone 12 Pro Max", "iPhone 13", "iPhone 13 mini", "iPhone 13 Pro", "iPhone 13 Pro Max", "iPhone SE (2022)", 
                "iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max"
            ],
            "Samsung": [
                "Galaxy S", "Galaxy S II", "Galaxy S III", "Galaxy S4", "Galaxy S5", "Galaxy S6", "Galaxy S6 Edge", 
                "Galaxy S7", "Galaxy S7 Edge", "Galaxy S8", "Galaxy S8+", "Galaxy S9", "Galaxy S9+", "Galaxy S10", 
                "Galaxy S10+", "Galaxy S20", "Galaxy S20+", "Galaxy S20 Ultra", "Galaxy S21", "Galaxy S21+", "Galaxy S21 Ultra", 
                "Galaxy S22", "Galaxy S22+", "Galaxy S22 Ultra", "Galaxy S23", "Galaxy S23+", "Galaxy S23 Ultra", 
                "Galaxy Note", "Galaxy Note II", "Galaxy Note 3", "Galaxy Note 4", "Galaxy Note 5", "Galaxy Note 7", 
                "Galaxy Note 8", "Galaxy Note 9", "Galaxy Note 10", "Galaxy Note 10+", "Galaxy Note 20", "Galaxy Note 20 Ultra", 
                "Galaxy A50", "Galaxy A51", "Galaxy A52", "Galaxy A53", "Galaxy A54", "Galaxy Z Flip", "Galaxy Z Flip 3", 
                "Galaxy Z Flip 4", "Galaxy Z Flip 5", "Galaxy Z Fold", "Galaxy Z Fold 2", "Galaxy Z Fold 3", "Galaxy Z Fold 4", 
                "Galaxy Z Fold 5"
            ],
            "Google": [
                "Nexus One", "Nexus S", "Galaxy Nexus", "Nexus 4", "Nexus 5", "Nexus 6", "Nexus 5X", "Nexus 6P", "Pixel", 
                "Pixel XL", "Pixel 2", "Pixel 2 XL", "Pixel 3", "Pixel 3 XL", "Pixel 3a", "Pixel 3a XL", "Pixel 4", 
                "Pixel 4 XL", "Pixel 4a", "Pixel 4a (5G)", "Pixel 5", "Pixel 5a", "Pixel 6", "Pixel 6 Pro", "Pixel 6a", 
                "Pixel 7", "Pixel 7 Pro"
            ],
            "Huawei": [
                "Ascend P6", "Ascend P7", "P8", "P9", "P10", "P20", "P20 Pro", "P30", "P30 Pro", "P40", "P40 Pro", 
                "P50", "P50 Pro", "P60 Pro", "Mate 10", "Mate 10 Pro", "Mate 20", "Mate 20 Pro", "Mate 30", "Mate 30 Pro", 
                "Mate 40", "Mate 40 Pro", "Mate 50", "Mate 50 Pro", "Nova 5T", "Nova 7", "Nova 8", "Nova 9", "Nova 10", 
                "Y6", "Y7", "Y9", "Y9 Prime"
            ],
            "Xiaomi": [
                "Mi 1", "Mi 2", "Mi 3", "Mi 4", "Mi 5", "Mi 5s", "Mi 6", "Mi 8", "Mi 8 SE", "Mi 9", "Mi 9 SE", "Mi 10", 
                "Mi 10T", "Mi 11", "Mi 11 Lite", "Mi 11 Ultra", "Mi 12", "Mi 13", "Mi 13 Pro", "Redmi Note 4", 
                "Redmi Note 5", "Redmi Note 6 Pro", "Redmi Note 7", "Redmi Note 8", "Redmi Note 9", "Redmi Note 10", 
                "Redmi Note 11", "Redmi Note 12", "Redmi Note 12 Pro", "Poco F1", "Poco X3", "Poco X3 Pro", "Poco X4", 
                "Poco X5 Pro"
            ],
            "OnePlus": [
                "OnePlus One", "OnePlus 2", "OnePlus X", "OnePlus 3", "OnePlus 3T", "OnePlus 5", "OnePlus 5T", "OnePlus 6", 
                "OnePlus 6T", "OnePlus 7", "OnePlus 7 Pro", "OnePlus 7T", "OnePlus 7T Pro", "OnePlus 8", "OnePlus 8 Pro", 
                "OnePlus 8T", "OnePlus 9", "OnePlus 9 Pro", "OnePlus 10 Pro", "OnePlus 11", "OnePlus Nord", "OnePlus Nord 2", 
                "OnePlus Nord CE", "OnePlus Nord CE 2", "OnePlus Nord N10", "OnePlus Nord N100"
            ],
            "Sony": [
                "Xperia Z", "Xperia Z1", "Xperia Z2", "Xperia Z3", "Xperia Z3 Compact", "Xperia Z5", "Xperia Z5 Premium", 
                "Xperia X", "Xperia X Performance", "Xperia XZ", "Xperia XZ Premium", "Xperia XZ1", "Xperia XZ2", 
                "Xperia XZ3", "Xperia 1", "Xperia 1 II", "Xperia 1 III", "Xperia 1 IV", "Xperia 5", "Xperia 5 II", 
                "Xperia 5 III", "Xperia 5 IV", "Xperia 10", "Xperia 10 II", "Xperia 10 III", "Xperia 10 IV"
            ],
            "LG": [
                "Optimus G", "G2", "G3", "G4", "G5", "G6", "G7 ThinQ", "G8 ThinQ", "V10", "V20", "V30", "V35 ThinQ", 
                "V40 ThinQ", "V50 ThinQ", "V60 ThinQ", "Wing", "Velvet"
            ],
            "Nokia": [
                "Nokia N97", "Nokia N8", "Lumia 800", "Lumia 900", "Lumia 920", "Lumia 1020", "Lumia 1520", "Lumia 930", 
                "Nokia 2", "Nokia 3", "Nokia 5", "Nokia 6", "Nokia 7", "Nokia 8", "Nokia 9 PureView", "Nokia X20", 
                "Nokia G50", "Nokia X30"
            ],
            "Motorola": [
                "Moto X", "Moto G", "Moto G2", "Moto G3", "Moto G4", "Moto G5", "Moto G6", "Moto G7", "Moto G8", 
                "Moto G9", "Moto G Power", "Moto G Stylus", "Moto G Fast", "Moto G Play", "Moto G10", "Moto G20", 
                "Moto G30", "Moto G40", "Moto G60", "Moto Edge", "Moto Edge+", "Moto Edge 20", "Moto Edge 30", 
                "Moto Edge 40 Pro"
            ]
        },
        "laptops": {
            "Apple": [
                "MacBook (2009)", "MacBook Pro 13 (2009)", "MacBook Pro 15 (2009)", "MacBook Pro 17 (2009)", "MacBook Air (2009)", 
                "MacBook Pro 13 (2010)", "MacBook Pro 15 (2010)", "MacBook Pro 17 (2010)", "MacBook Air (2010)", 
                "MacBook Pro 13 (2011)", "MacBook Pro 15 (2011)", "MacBook Pro 17 (2011)", "MacBook Air (2011)", 
                "MacBook Pro 13 Retina (2012)", "MacBook Pro 15 Retina (2012)", "MacBook Air (2012)", 
                "MacBook Pro 13 Retina (2013)", "MacBook Pro 15 Retina (2013)", "MacBook Air (2013)", 
                "MacBook Pro 13 Retina (2014)", "MacBook Pro 15 Retina (2014)", "MacBook Air (2014)", 
                "MacBook (2015)", "MacBook Pro 13 Retina (2015)", "MacBook Pro 15 Retina (2015)", "MacBook Air (2015)", 
                "MacBook (2016)", "MacBook Pro 13 (2016)", "MacBook Pro 15 (2016)", "MacBook Air (2016)", 
                "MacBook (2017)", "MacBook Pro 13 (2017)", "MacBook Pro 15 (2017)", "MacBook Air (2017)", 
                "MacBook Air (2018)", "MacBook Pro 13 (2018)", "MacBook Pro 15 (2018)", "MacBook Air (2019)", 
                "MacBook Pro 13 (2019)", "MacBook Pro 16 (2019)", "MacBook Air (2020)", "MacBook Pro 13 (2020)", 
                "MacBook Pro 16 (2021)", "MacBook Air M1", "MacBook Pro 14 (2021)", "MacBook Pro 16 (2021)", 
                "MacBook Air M2", "MacBook Pro 14 (2023)", "MacBook Pro 16 (2023)"
            ],
            "Dell": [
                "XPS 13 (2009)", "XPS 15 (2009)", "XPS 13 (2010)", "XPS 15 (2010)", "XPS 15z (2011)", "XPS 13 (2012)", 
                "XPS 15 (2012)", "XPS 12 (2013)", "XPS 13 (2013)", "XPS 15 (2013)", "XPS 11 (2013)", "XPS 13 (2014)", 
                "XPS 15 (2014)", "XPS 13 (2015)", "XPS 15 (2015)", "XPS 13 (2016)", "XPS 15 (2016)", "XPS 13 2-in-1 (2017)", 
                "XPS 15 (2017)", "XPS 13 (2018)", "XPS 15 (2018)", "XPS 13 (2019)", "XPS 15 (2019)", "XPS 13 (2020)", 
                "XPS 15 (2020)", "XPS 17 (2020)", "XPS 13 (2021)", "XPS 15 (2021)", "XPS 17 (2021)", "XPS 13 (2022)", 
                "XPS 13 (2023)", "XPS 15 (2023)", "XPS 17 (2023)", "Inspiron 15 (2015)", "Inspiron 15 (2016)", 
                "Inspiron 15 (2017)", "Inspiron 15 (2018)", "Inspiron 15 (2019)", "Inspiron 15 (2020)", "Inspiron 15 (2021)", 
                "Inspiron 15 (2022)", "Inspiron 15 (2023)", "Latitude 7420 (2017)", "Latitude 7420 (2018)", 
                "Latitude 7420 (2019)", "Latitude 7420 (2020)", "Latitude 7420 (2021)", "Latitude 7420 (2022)", 
                "Latitude 7420 (2023)"
            ],
            "HP": [
                "Spectre x360 (2015)", "Spectre x360 (2016)", "Spectre x360 (2017)", "Spectre x360 (2018)", "Spectre x360 (2019)", 
                "Spectre x360 (2020)", "Spectre x360 (2021)", "Spectre x360 (2022)", "Spectre x360 (2023)", "Envy x360 (2015)", 
                "Envy x360 (2016)", "Envy x360 (2017)", "Envy x360 (2018)", "Envy x360 (2019)", "Envy x360 (2020)", 
                "Envy x360 (2021)", "Envy x360 (2022)", "Envy x360 (2023)", "Pavilion 15 (2015)", "Pavilion 15 (2016)", 
                "Pavilion 15 (2017)", "Pavilion 15 (2018)", "Pavilion 15 (2019)", "Pavilion 15 (2020)", "Pavilion 15 (2021)", 
                "Pavilion 15 (2022)", "Pavilion 15 (2023)", "EliteBook 840 (2015)", "EliteBook 840 (2016)", 
                "EliteBook 840 (2017)", "EliteBook 840 (2018)", "EliteBook 840 (2019)", "EliteBook 840 (2020)", 
                "EliteBook 840 (2021)", "EliteBook 840 (2022)", "EliteBook 840 (2023)", "Omen 15 (2015)", "Omen 15 (2016)", 
                "Omen 15 (2017)", "Omen 15 (2018)", "Omen 15 (2019)", "Omen 15 (2020)", "Omen 15 (2021)", "Omen 15 (2022)", 
                "Omen 15 (2023)"
            ],
            "Lenovo": [
                "ThinkPad X1 Carbon (2012)", "ThinkPad X1 Carbon (2013)", "ThinkPad X1 Carbon (2014)", "ThinkPad X1 Carbon (2015)", 
                "ThinkPad X1 Carbon (2016)", "ThinkPad X1 Carbon (2017)", "ThinkPad X1 Carbon (2018)", "ThinkPad X1 Carbon (2019)", 
                "ThinkPad X1 Carbon (2020)", "ThinkPad X1 Carbon (2021)", "ThinkPad X1 Carbon (2022)", "ThinkPad X1 Carbon (2023)", 
                "Yoga 9i (2015)", "Yoga 9i (2016)", "Yoga 9i (2017)", "Yoga 9i (2018)", "Yoga 9i (2019)", "Yoga 9i (2020)", 
                "Yoga 9i (2021)", "Yoga 9i (2022)", "Yoga 9i (2023)", "IdeaPad 5 (2015)", "IdeaPad 5 (2016)", "IdeaPad 5 (2017)", 
                "IdeaPad 5 (2018)", "IdeaPad 5 (2019)", "IdeaPad 5 (2020)", "IdeaPad 5 (2021)", "IdeaPad 5 (2022)", 
                "IdeaPad 5 (2023)", "Legion 5 (2015)", "Legion 5 (2016)", "Legion 5 (2017)", "Legion 5 (2018)", 
                "Legion 5 (2019)", "Legion 5 (2020)", "Legion 5 (2021)", "Legion 5 (2022)", "Legion 5 (2023)", 
                "ThinkBook 14s (2015)", "ThinkBook 14s (2016)", "ThinkBook 14s (2017)", "ThinkBook 14s (2018)", 
                "ThinkBook 14s (2019)", "ThinkBook 14s (2020)", "ThinkBook 14s (2021)", "ThinkBook 14s (2022)", 
                "ThinkBook 14s (2023)"
            ],
            "Asus": [
                "ZenBook 14 (2015)", "ZenBook 14 (2016)", "ZenBook 14 (2017)", "ZenBook 14 (2018)", "ZenBook 14 (2019)", 
                "ZenBook 14 (2020)", "ZenBook 14 (2021)", "ZenBook 14 (2022)", "ZenBook 14 (2023)", "ROG Zephyrus G14 (2015)", 
                "ROG Zephyrus G14 (2016)", "ROG Zephyrus G14 (2017)", "ROG Zephyrus G14 (2018)", "ROG Zephyrus G14 (2019)", 
                "ROG Zephyrus G14 (2020)", "ROG Zephyrus G14 (2021)", "ROG Zephyrus G14 (2022)", "ROG Zephyrus G14 (2023)", 
                "VivoBook S15 (2015)", "VivoBook S15 (2016)", "VivoBook S15 (2017)", "VivoBook S15 (2018)", 
                "VivoBook S15 (2019)", "VivoBook S15 (2020)", "VivoBook S15 (2021)", "VivoBook S15 (2022)", 
                "VivoBook S15 (2023)", "TUF Gaming A15 (2015)", "TUF Gaming A15 (2016)", "TUF Gaming A15 (2017)", 
                "TUF Gaming A15 (2018)", "TUF Gaming A15 (2019)", "TUF Gaming A15 (2020)", "TUF Gaming A15 (2021)", 
                "TUF Gaming A15 (2022)", "TUF Gaming A15 (2023)"
            ],
            "Acer": [
                "Aspire 5 (2015)", "Aspire 5 (2016)", "Aspire 5 (2017)", "Aspire 5 (2018)", "Aspire 5 (2019)", "Aspire 5 (2020)", 
                "Aspire 5 (2021)", "Aspire 5 (2022)", "Aspire 5 (2023)", "Swift 3 (2015)", "Swift 3 (2016)", "Swift 3 (2017)", 
                "Swift 3 (2018)", "Swift 3 (2019)", "Swift 3 (2020)", "Swift 3 (2021)", "Swift 3 (2022)", "Swift 3 (2023)", 
                "Predator Helios 300 (2015)", "Predator Helios 300 (2016)", "Predator Helios 300 (2017)", "Predator Helios 300 (2018)", 
                "Predator Helios 300 (2019)", "Predator Helios 300 (2020)", "Predator Helios 300 (2021)", "Predator Helios 300 (2022)", 
                "Predator Helios 300 (2023)", "Nitro 5 (2015)", "Nitro 5 (2016)", "Nitro 5 (2017)", "Nitro 5 (2018)", 
                "Nitro 5 (2019)", "Nitro 5 (2020)", "Nitro 5 (2021)", "Nitro 5 (2022)", "Nitro 5 (2023)"
            ],
            "Microsoft": [
                "Surface Pro (2013)", "Surface Pro 2 (2013)", "Surface Pro 3 (2014)", "Surface Pro 4 (2015)", "Surface Pro (2017)", 
                "Surface Pro 6 (2018)", "Surface Pro 7 (2019)", "Surface Pro 7+ (2021)", "Surface Pro 8 (2021)", 
                "Surface Pro 9 (2022)", "Surface Laptop (2017)", "Surface Laptop 2 (2018)", "Surface Laptop 3 (2019)", 
                "Surface Laptop 4 (2021)", "Surface Laptop 5 (2022)", "Surface Laptop Studio (2021)", "Surface Book (2015)", 
                "Surface Book 2 (2017)", "Surface Book 3 (2020)"
            ],
            "Razer": [
                "Blade 14 (2015)", "Blade 15 (2016)", "Blade 15 (2017)", "Blade 15 (2018)", "Blade 15 (2019)", "Blade 15 (2020)", 
                "Blade 15 (2021)", "Blade 15 (2022)", "Blade 15 (2023)", "Blade Stealth (2015)", "Blade Stealth 13 (2016)", 
                "Blade Stealth 13 (2017)", "Blade Stealth 13 (2018)", "Blade Stealth 13 (2019)", "Blade Stealth 13 (2020)", 
                "Blade Stealth 13 (2021)", "Blade Stealth 13 (2022)", "Blade Stealth 13 (2023)", "Blade Pro 17 (2015)", 
                "Blade Pro 17 (2016)", "Blade Pro 17 (2017)", "Blade Pro 17 (2018)", "Blade Pro 17 (2019)", 
                "Blade Pro 17 (2020)", "Blade Pro 17 (2021)", "Blade Pro 17 (2022)", "Blade Pro 17 (2023)"
            ],
            "MSI": [
                "GS60 Ghost (2015)", "GS63 Stealth (2016)", "GS65 Stealth (2017)", "GS66 Stealth (2018)", "GS66 Stealth (2019)", 
                "GS66 Stealth (2020)", "GS66 Stealth (2021)", "GS66 Stealth (2022)", "GS66 Stealth (2023)", 
                "GE62 Apache (2015)", "GE72 Apache (2016)", "GE73 Raider (2017)", "GE75 Raider (2018)", 
                "GE76 Raider (2019)", "GE76 Raider (2020)", "GE76 Raider (2021)", "GE76 Raider (2022)", 
                "GE76 Raider (2023)", "Prestige 14 (2015)", "Prestige 14 (2016)", "Prestige 14 (2017)", "Prestige 14 (2018)", 
                "Prestige 14 (2019)", "Prestige 14 (2020)", "Prestige 14 (2021)", "Prestige 14 (2022)", "Prestige 14 (2023)"
            ],
            "Huawei": [
                "MateBook (2016)", "MateBook X (2017)", "MateBook X Pro (2018)", "MateBook 13 (2019)", "MateBook D14 (2020)", 
                "MateBook D15 (2021)", "MateBook 14 (2022)", "MateBook X Pro (2023)", "MateBook 14 (2023)", 
                "MateBook D15 (2023)"
            ]
        }
    }
    const listFastDevice = [
        {label: 'Ноутбуки', request: 'Ноутбук'},
        {label: 'Телефоны', request: 'Телефон'},
        {label: 'Планшеты', request: 'Планшет'},
        {label: 'Мониторы', request: 'Монитор'},
        {label: 'Картриджи', request: 'Картридж'},
        {label: 'ПК', request: 'ПК'},
        {label: 'Колонки', request: 'Колонка'},
        {label: 'ЗУ', request: 'ЗУ'},
        {label: 'Телевизоры', request: 'Телевизор'},
        {label: 'Принтер', request: 'Принтеры'},
        // {label: 'Reset', link: 'device0', request: ''}
    ]
    const listOrdersFields = [

        {
            index: 'name', 
            label: 'Заказчик',         
            variants: false,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 1  
        },
        {
            index: 'clientTel', 
            label: 'Телефон',        
            variants: false,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 2    
        },
        {
            index: 'addres', 
            label: 'Адрес Заказчика',
            variants: false,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 3  
        },
        {
            index: 'title' , 
            label: 'Устройство',      
            variants: true,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 4   
        },
        {
            index: 'firm', 
            label: 'Бренд',           
            variants: true,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 5    
        },
        {
            index: 'problem', 
            label: 'Неисправность',   
            variants: true,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 8    
        },
        {
            index: 'model', 
            label: 'Модель',          
            variants: true,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 6    
        },
        {
            index: 'sn' , 
            label: 'Серийный номер',  
            variants: false,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 7   
        },
        {
            index: 'view', 
            label: 'Внешний вид',     
            variants: true,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 9     
        },
        {
            index: 'speed', 
            label: 'Срочность',       
            variants: true,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 10     
        },
        {
            index: 'info', 
            label: 'Заметки',         
            variants: false,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 13  
        },
        {
            index: 'cost', 
            label: 'Стоимость',      
            variants: false,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 11     
        },
        {
            index: 'complect', 
            label: 'Комплектация',      
            variants: true,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 12    
        },
        {
            index: 'order', 
            label: 'ID',      
            variants: false,
            maintable: true,
            neworder: false,
            card: true,
            block: false 
        },
        {
            index: 'date', 
            label: 'Дата',      
            variants: false,
            maintable: true,
            neworder: false,
            card: true,
            block: false 
        },
        {
            index: 'dateOut', 
            label: 'Дата Выдачи',      
            variants: false,
            maintable: true,
            neworder: false,
            card: true,
            block: false 
        },
        {
            index: 'status', 
            label: 'Статус',      
            variants: false,
            maintable: true,
            neworder: false,
            card: true,
            block: false 
        },
        {
            index: 'manager', 
            label: 'Мененджер',      
            variants: false,
            maintable: true,
            neworder: false,
            card: true,
            block: false 
        },
        {
            index: 'masters', 
            label: 'Мастер',      
            variants: false,
            maintable: true,
            neworder: false,
            card: true,
            block: false 
        },
        {
            index: 'createdAt', 
            label: 'createdAt',      
            variants: false,
            maintable: false,
            neworder: false,
            card: false,
            block: true 
        },
        {
            index: 'updatedAt', 
            label: 'updatedAt',      
            variants: false,
            maintable: false,
            neworder: false,
            card: false,
            block: true 
        },
        {
            index: '__v', 
            label: '__v',      
            variants: false,
            maintable: false,
            neworder: false,
            card: false,
            block: true 
        },
        {
            index: 'campName', 
            label: 'Компания',      
            variants: false,
            maintable: true,
            neworder: false,
            card: true,
            block: true 
        },
        {
            index: 'filial', 
            label: 'Филиал',      
            variants: false,
            maintable: true,
            neworder: false,
            card: true,
            block: true 
        },
        {
            index: '_id', 
            label: '_id',      
            variants: false,
            maintable: false,
            neworder: false,
            card: false,
            block: true 
        },
        {
            index: 'historylist', 
            label: 'История',      
            variants: false,
            maintable: false,
            neworder: false,
            card: true,
            block: true 
        },
        {
            index: 'profit', 
            label: 'Профит',      
            variants: false,
            maintable: true,
            neworder: false,
            card: true,
            block: true 
        },
        {
            index: 'expenses', 
            label: 'Расходы',      
            variants: false,
            maintable: true,
            neworder: false,
            card: true,
            block: true 
        }
        

    ]
    const listOfDataForFastInput = {
                    name: [],
               clientTel: [],
                  addres: [],
                   title: listFastDevice.map(item => item.request),
                    firm: [
                        "Apple",
                        "Samsung",
                        "Dell",
                        "HP",
                        "Lenovo",
                        "Acer",
                        "Asus",
                        "Microsoft",
                        "Google",
                        "Sony",
                        "LG",
                        "Huawei",
                        "Xiaomi",
                        "OnePlus",
                        "Nokia",
                        "Motorola",
                        "Razer",
                        "Alienware",
                        "MSI (Micro-Star International)",
                        "Toshiba",
                        "Panasonic",
                        "Fujitsu",
                        "BlackBerry",
                        "Oppo",
                        "Vivo",
                        "Realme",
                        "ZTE",
                        "Honor",
                        "Philips",
                        "Sharp",
                        "HTC",
                        "Alcatel",
                        "Nubia",
                        "Redmi",
                        "Meizu",
                        "Infinix",
                        "Tecno",
                        "BLU",
                        "Fairphone"
                        ],
                 problem: [
                    "Разбитый экран",
                    "Не заряжается",
                    "Быстро разряжается батарея",
                    "Перегрев",
                    "Не включается",
                    "Синий экран смерти (BSOD)",
                    "Проблемы с подключением Wi-Fi",
                    "Сломанный порт зарядки",
                    "Медленная работа",
                    "Не работают кнопки",
                    "Проблемы со звуком",
                    "Проблемы с камерой",
                    "Программные сбои",
                    "Проблемы с сенсорным экраном",
                    "Не работают USB порты",
                    "Застрявшие или неработающие клавиши на клавиатуре",
                    "Проблемы с материнской платой",
                    "Проблемы с видеокартой",
                    "Проблемы с драйверами",
                    "Повреждения от воды",
                    "Проблемы с жестким диском или SSD",
                    "Проблемы с операционной системой",
                    "Проблемы с экраном (мерцание, битые пиксели)",
                    "Проблемы с Bluetooth",
                    "Проблемы с батареей (вздутие, быстрая разрядка)",
                    "Проблемы с BIOS/UEFI"
                        ],
                   model: deviceDb(deviceslast15years),
                      sn: [],
                    view: ['Потерт', 'Царапины', 'Сколы', 'бу', 'Трещины'],
                   speed: ['Standard', 'Fast'],
                    info: [],
                    cost: [75, 45, 110, 120, 150, 170],
                complect: ['Без комплекта', 'Зарядное устройство', 'Кабель', 'Батарея', 'Зарядное и батарея', 'Запчасть заказчика']
    }
    const listOfStatuses = [
        {
            index: 'warranty', 
            label: 'Гарантия',
            freez: true 
        },
        {
            index: 'new', 
            label: 'Новый',
            freez: true 
        },
        {
            index: 'diagnostics', 
            label: 'Диагностика',
            freez: true 
        },
        {
            index: 'agreement', 
            label: 'Согласование',
            freez: true 
        },
        {
            index: 'process', 
            label: 'В процессе',
            freez: true 
        },
        
        {
            index: 'ready', 
            label: 'Готов',
            freez: true 
        },
        {
            index: 'close', 
            label: 'Закрыть',
            freez: true 
        },
        {
            index: 'cancel', 
            label: 'Отмена',
            freez: true 
        },
        

    ]
    const docprint = {

        namecomp: {label: 'Название сервисного центра', 
        text: 'Название Сервиса'},

        name: {label: 'Название главного документа о приемке в ремонт', 
        text: 'Заказ на оказание услуг'},

        time: {label: 'Время работы исполнителя', 
        text:  'пн-пт: 11:00 - 20:00, сб-вскр: 11:00 - 18:00'},

        varantname: {label: 'Название гарантийного документа', 
        text:  'Акт приёмки-передачи оборудования и выполненных работ'},

        cancelname: {label: 'Название документа о выдаче без ремонта', 
        text:  'Акт приёмки-передачи оборудования'},

        recviz: {label: 'Реквизиты компании (Исполнитель)', 
        text: 'ЧСУП "Ремонт техники", Минск, Одинцова 94, павильон 10'},

        oznak: {label: 'Подтверждение ознакомления', 
        text: 'Заказчик ознакомлен с данным заказ-нарядом и принимает все условия.'},

        canceloznak: {label: 'Согласие о получении без ремонта', 
        text: 'Заказчик не имеет претензий по качеству и срокам оказанных услуг.'},

        soglas: {label: 'Информация о согласовании', 
        text: 'Стоимость согласовывается в течении 10 дней, ОПЛАТА ПРОИЗВОДИТСЯ ТОЛЬКО ПОСЛЕ ОКОНЧАНИЯ РЕМОНТА'},

        filial: {label: 'Название филиала', 
        text: 'Сухарево'},

        telefonnumber: {label: 'Телефоны компании', 
        text: '+375 44 00000000 A1 +375 44 1111111 A1'},

        varanttext: {label: 'Текст гарантии', 
        text: `- Исполнитель берет на себя обязанность на безвозмездное устранение неисправностей связанных с выполнением выше указанных работ в течении гарантийного срока.
        - Гарантийный ремонт выполняется по новому заказу на оказание услуг в стандартные сроки.
        - Если в результате диагностики выясняется, что случай не является гарантийным, то такие работы могут быть произведены на платной основе по согласованию с заказчиком.
        - Гарантийный срок продлевается на время нахождения оборудования в мастерской
        
        Гарантийные обязательства по бесплатному ремонту не распространяется на следующие случаи:
        - Механические повреждения, попадания внутрь жидкости и других посторонних предметов (насекомые и т.п.)
        - Нарушены правила эксплуатации, хранения или транспортировки товара в случае действий покупателя, третьих лиц или обстоятельств непреодолимой силы (пожар, наводнение и т. п.)
        - Отсутствует или испорчен гарантийный талон (гарантийный талон не восстанавливается, ксерокопии или другие копии действительными не считаются).
        - Нарушение маркировки или невозможность считывания серийного номера с изделия, нарушены пломбы, наклейки, стикеры, обнаружены следы их переклеивания, восстановления и т. п.
        - Повреждения, вызванные стихийными бедствиями, пожаром, неблагоприятными бытовыми факторами (например, повышенной влажностью помещения, где использовалось изделие)
        - Есть следы механических, химических, электротехнических повреждений, как самого товара, так и его компонентов, а также в случае присутствия следов перегрева или переохлаждения либо воздействия пыли или насекомых.
        - Нарушена или испорчена комплектность оборудования.
        - Есть следы использования изделия в режимах с нагрузкой, превышающей нормативную. 
        - Присутствует вмешательство в техническую начинку товара, следы самостоятельного ремонта. Ремонт в не уполномоченном сервисном центре, либо произведенный лицами, не имеющими полномочий производить ремонт.
        - Гарантия не распространяется на з/ч предоставленные заказчиком.
        
        Заказчик не имеет претензий по сроку и качеству оказанных услуг.`},

        maintext: {label: 'Главный текст приемки оборудования в ремонт', 
        text: `1. Предварительный срок диагностики и ремонта до 15 рабочих дней (без учета суббот, воскресений и праздников), за исключением п.2 и п.3. В момент сдачи оборудования в ремонт приемщик оговаривает ОРИЕНТИРОВОЧНЫЕ СРОКИ, которые могут измениться ввиду отсутствия или пересортицы з/ч, загруженности мастера и иных обстоятельств, но без согласования с заказчиком не может превышать срока установленного в данном пункте.
        2. При отсутствии деталей, диагностика и (или) ремонт может продлеваться на срок до их получения по согласованию с заказчиком.
        3. При периодически появляющейся неисправности ремонт может продлеваться на неопределенный срок, до полного устранения дефектов по согласованию с заказчиком.
        4. В случае отказа заказчика от дальнейшей диагностики и (или) ремонта по п.2 и п.3 оборудование выдается в течении 5 рабочих дней с момента требования, после оплаты заказчиком расходов понесенных мастерской, если такие имели место и если была согласована платная услуга или были заказаны детали.
        5. После диагностики и (или) ремонта могут оставаться незначительные следы вскрытия и внешнего воздействия.
        6. Ремонт производится только в отношении неисправностей, которые указаны заказчиком при приёмке, за исключением п.7.
        7. Если в результате ремонта возникли неисправности, заведомо не оговоренные, но препятствующие исправлению первоначальных неисправностей и (или) препятствующие полноценной работе оборудования, то данные работы проводятся после согласования с заказчиком. Заказчик и исполнитель обязуются считать такие согласования имеющими силу.
        8. При диагностике и (или) ремонте оборудования в некоторых случаях невозможно вернуть состояние оборудования на момент сдачи в ремонт.
        9. Оборудование, с согласия заказчика принимается без разборки и проверки скрытых неисправностей и повреждений. Заказчик согласен, что все обнаруженные в процессе диагностики и ремонта неисправности возникли до сдачи оборудования в ремонт.
        10. Сервисный центр не несет ответственности за любую информацию (а так же карты памяти и sim карты, оставленные в оборудовании), хранящуюся на оборудовании.
        11. При обнаружении в оборудовании следов воздействия влаги, а также при сильных механических повреждениях, гарантия на произведенный ремонт НЕ РАСПРОСТРАНЯЕТСЯ (п.11.4, СТБ 1303-2007).
        12. Заказчик принимает на себя риск возможной полной или частичной утраты работоспособности оборудования в процессе диагностики и (или) ремонта в случае грубых нарушений пользователем условий эксплуатации, наличия следов коррозии, попадания жидкости либо механических воздействий.
        13. Первичная диагностика производится БЕСПЛАТНО. Стоимость акта диагностики, если таковой необходим заказчику стоит 75 б.р..
        14. Ремонт без согласования стоимости с заказчиком допускается, если его стоимость не превышает предварительно согласованную стоимость, указанную в заказе.
        15. Исполнитель в праве передавать оборудование на ремонт и (или) диагностику третьим организациям или индивидуальным предпринимателям под свою ответственность без согласования с заказчиком.
        16. Согласование с заказчиком может осуществляться любым доступным способом (звонок, переписка в мессенджерах, устное согласование, письменное согласование).`},
    }
    
    return (
        {
            userSettings: {
                userStatusFilter: listOfStatuses.map(item => item.index),
                userDeviceFilter: listFastDevice.map(item => item.request),
                userMainTable: listOrdersFields.filter(item => item.maintable === true) //.map(item => item.index)
            } ,
            documentSettings: {
                documents: docprint
            },
            generalSettings: {
                generalOrderList: listOrdersFields,
                generalDataList: listOfDataForFastInput,
                generalStatusList: listOfStatuses,
                generalDeviceList: listFastDevice,
                generalRoleList: ['user', 'master', 'manager', 'supermanager']
            }
        }
    )
}