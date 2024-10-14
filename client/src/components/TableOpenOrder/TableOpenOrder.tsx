import React from "react"

export const TableOpenOrder = (props: any) => {

    const table = () => {
        let rows = [<tr key={1000}><td width={'30%'} align="center"></td><td width={'70%'} align="center"></td></tr>]
        for(let i of props.order){
            rows.push(
                <tr key={props.order.indexOf(i)}><td align='left'><b>&nbsp;{i.title}:</b></td><td>&nbsp;{i.text}</td></tr>
            )
            rows.push(
                <tr key={props.order.indexOf(i) + 0.1}><td colSpan={3}><hr style={{width: '100%'}}></hr></td></tr>
            )
        }
        return <table cellSpacing="0" cellPadding="0" width='100%'>
                <tbody>
                    {rows}
                </tbody>
                </table>
    }


    return (
        <div>
            {table()}
        </div>
    )
}