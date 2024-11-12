interface LengData {
    rutext: string
    index: string
    info_data: string
}

export const textArray: LengData[] = [
    {rutext: 'Привет', index: 'hello', info_data: 'приветствие'},
    {rutext: 'Добро пожаловать', index: 'welcom', info_data: 'добро пожаловать'},
    {rutext: 'Создать сервис', index: 'createservice', info_data: 'создать сервис'},
    {rutext: 'Еще нет сервиса?', index: 'DoNotHaveAServiceYet', info_data: 'еще нет сервиса'},
    {rutext: 'Получить пароль', index: 'GetPassword', info_data: 'получить пароль'},
    {rutext: 'Некорректный', index: 'errorInputEmail', info_data: 'некоректный'}, 
    {rutext: 'Пароль выслан на вашу почту', index: 'emailToEmail', info_data: 'пароль отправлен на почту'},
    {rutext: 'Назад', index: 'back', info_data: 'назад'},
    {rutext: 'Вход', index: 'enter', info_data: 'вход'},
    {rutext: 'Сервисы', index: 'services', info_data: 'сервисы'},
    {rutext: 'Настройки сервиса', index: 'CampSettings', info_data: 'настройки сервиса'},
    {rutext: 'Сотрудники', index: 'workers', info_data: 'сотрудники'},
    {rutext: 'Нет заказов', index: 'youDontHaveOrders', info_data: 'нет заказов'},
    {rutext: 'Настройка главного экрана', index: 'settingsMainTable', info_data: 'настройка главного экрана'},
    {rutext: 'Настройка пользователя', index: 'UserSettings', info_data: 'настройка пользователя'},
]

interface LengDataStart {
    title: string
    index: string
    info: string
}

export const lengs: LengDataStart[] = [
    {title: 'Русский', index: 'ru', info: 'русский'},
    {title: 'English', index: 'en', info: 'английский'},
    {title: 'Español', index: 'es', info: 'испанский'},
    {title: 'Français', index: 'fr', info: 'французский'},
    {title: 'Português', index: 'pt', info: 'португальский'},
    {title: 'Deutsch', index: 'de', info: 'немецкий'},
    {title: '中文', index: 'zh', info: 'китайский'},
    {title: 'Italiano', index: 'it', info: 'итальянский'},
    {title: '日本語', index: 'ja', info: 'японский'},
    {title: '한국어', index: 'ko', info: 'корейский'},
    {title: 'العربية', index: 'ar', info: 'арабский'},
    {title: 'हिन्दी', index: 'hi', info: 'хинди'},
    {title: 'עברית', index: 'he', info: 'иврит'},
    {title: 'Türkçe', index: 'tr', info: 'турецкий'},
    {title: 'Tiếng Việt', index: 'vi', info: 'вьетнамский'},
    {title: 'Nederlands', index: 'nl', info: 'голландский'},
    {title: 'Polski', index: 'pl', info: 'польский'},
    {title: 'Bahasa Indonesia', index: 'id', info: 'индонезийский'},
    {title: 'Svenska', index: 'sv', info: 'шведский'},
    {title: 'Čeština', index: 'cs', info: 'чешский'},
    {title: 'Українська', index: 'uk', info: 'украинский'},
    {title: 'Magyar', index: 'hu', info: 'венгерский'},
    {title: 'ไทย', index: 'th', info: 'тайский'},
    {title: 'Ελληνικά', index: 'el', info: 'греческий'},
    {title: 'Dansk', index: 'da', info: 'датский'},
    {title: 'Suomi', index: 'fi', info: 'финский'},
    {title: 'Română', index: 'ro', info: 'румынский'},
    {title: 'Slovenčina', index: 'sk', info: 'словацкий'},
    {title: 'Беларуская', index: 'be', info: 'белорусский'}
]