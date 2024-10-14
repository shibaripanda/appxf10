import React from "react"
import { sessionData } from "../../modules/sessionData.js"
import { ServiceTableDocument } from "../ServiceTable/ServiceTableDocument.tsx"
// import rubles from '('rubles').rubles'
// var rubles = require('rubles').rubles


export const PrintVarCancel = React.forwardRef((props, ref) => {
    
    const camp = {}
    camp.docprint =  props.props.settings.documents
    const post = props.props.data

    // const serviceList = () => {
    //     if(post.service.length) return (
    //             <div style={{width: '775px', marginTop: '1vmax'}}><ServiceTableDocument data={post.service}/></div>
    //         )
    // }

    const fontSizeSet = (len) => {
       if(len && len < 4) return 2
       else return 1
    }

    const textFromDB = (text) => {
        if(typeof camp.docprint[text] !== 'undefined'){
            return camp.docprint[text].text
        }
        return  <font color="red"> = !!! не настроено !!! = </font> 

    }


    return (
        <div ref={ref} className="App">

        <table border="0" cellSpacing="0" cellPadding="0" width='775px' className="table">
            <tbody>
                <tr>
                    <td align="left"><b><font size="2">{textFromDB('namecomp')}</font></b></td>  
                </tr>
                <tr>
                    <td align="center"><b><font size="3">{textFromDB('cancelname')} № {post.order} от {new Date(Date.now()).toLocaleString().split(',')[0]}</font></b></td>
                </tr>
            </tbody>
        </table>
        
        <table border="1" cellSpacing="0" cellPadding="0" width='775px' className="table">
            <tbody>
            <tr>
                <td colSpan="8" rowSpan="2" align="center"><b>&nbsp;Заказчик принимает, а исполнитель передает нижеуказанное оборудование</b></td>
                <td colSpan="1" rowSpan="14" className='vertical'><span><h1>&nbsp;{post.order}</h1></span></td>
            </tr>
            <tr>
                
            </tr>
            <tr>
                <td colSpan="2">&nbsp;Заказ №</td>
                <td align="center">&nbsp;{post.order}</td>
                <td colSpan='2' align="center">&nbsp;{new Date(post.date).toLocaleString()}</td>
                <td align="center">&nbsp;Сотрудник СЦ:</td>
                <td colSpan='2' align="center">&nbsp;{sessionData('read', 'name')}</td>
            </tr>
            <tr>
                <td colSpan="2">&nbsp;Заказчик:</td>
                <td colSpan="6">&nbsp;{post.name}, {post.addres}, {post.clientTel}</td>
            </tr>    
            <tr>
                <td colSpan="2">&nbsp;Оборудование:</td>
                <td colSpan="2">&nbsp;{post.title}</td>
                <td colSpan="2">&nbsp;{post.firm} {post.model}</td>
                <td colSpan="2">&nbsp;s/n: {post.sn}</td>
            </tr>
            {/* <tr>
                <td colSpan="2">&nbsp;Серийный номер:</td>
                <td colSpan="6">&nbsp;{post.sn}</td>
            </tr>  */}
            <tr>
                <td colSpan="2">&nbsp;Внешний вид:</td>
                <td colSpan="6">&nbsp;{post.view}</td>
            </tr>
            <tr>
                <td colSpan="2">&nbsp;Комплектация:</td>
                <td colSpan="6">&nbsp;{post.complect}</td>
            </tr>
            <tr>
                <td colSpan="2">&nbsp;Первоначальная неисправность:</td>
                <td colSpan="6">&nbsp;{post.problem}</td>
            </tr>
            {/* <tr>
                <td colSpan={2}>&nbsp;Телефоны для справок:</td>
                <td colSpan={6}>&nbsp;{camp.docprint.telefonnumber.text}</td>
                
            </tr> */}
            <tr>
                <td colSpan={2}>&nbsp;Исполнитель:</td>
                <td colSpan={6}>&nbsp;{textFromDB('recviz')}</td>
            </tr>
            <tr>
                <td colSpan={2}>&nbsp;Время работы и контакты:</td>
                <td colSpan={6}>&nbsp;{textFromDB('time')},&nbsp;{textFromDB('telefonnumber')}</td>
            </tr>
            </tbody>
        </table>

        {/* {serviceList()} */}

        <table border="0" cellSpacing="0" cellPadding="0" width='775px' className="table">
            <tbody>
            {/* <tr>
                <td align="center" colSpan={5}><b><font size="3">Правила и условия гарантийного обслуживания</font></b></td>
            </tr>
            <tr>
                <td className="border" colSpan={5}>
                <font size={fontSizeSet(post.service.length)}>
                <div className="perenos">{textFromDB('varanttext')}</div>
                </font>
                </td>
            </tr> */}
            <tr>
                <td colSpan={5}>&nbsp;</td>
            </tr>
            <tr>
                <td colSpan={5}><font size="3"><b>&nbsp;{textFromDB('canceloznak')}</b></font></td>
            </tr>
            {/* <tr>
                <td colSpan={5}>&nbsp;</td>
            </tr> */}
            <tr>
                <td align="left" colSpan={2} width={'50%'}><font size="3">Заказчик:</font></td>
                {/* <td align="right">&nbsp;</td> */}
                <td align="left" colSpan={2} width={'50%'}><font size="3">Сотрудник СЦ:</font></td>
            </tr>
            <tr>
                <td align="center" colSpan={2}>&nbsp;</td>
                <td align="right">&nbsp;</td>
                <td align="center" colSpan={2}>&nbsp;</td>
            </tr>
            <tr>
                <td align="left" width={'10%'}><font size="3">Подпись:</font></td>
                <td align="right" width={'35%'}><font size="3">{post.name}</font></td>
                <td align="right" width={'10%'}>&nbsp;</td>
                <td align="left" width={'10%'}><font size="3">Подпись:</font></td>
                <td align="right" width={'35%'}><font size="3">{sessionData('read', 'name')}</font></td>
            </tr>
            <tr>
                <td align="center" colSpan={2}><div className="create-line"></div></td>
                <td align="right">&nbsp;</td>
                <td align="center" colSpan={2}><div className="create-line"></div></td>
            </tr>
            </tbody>
        </table>

        </div>
    )
})