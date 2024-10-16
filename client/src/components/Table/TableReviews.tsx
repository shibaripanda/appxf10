import { Table } from '@mantine/core'
import React from 'react';
import { ModalWindow } from '../ModalWindow/ModalWindow.tsx';
import { dateToLokalFormatForMainTable } from '../../modules/dateToLocalFormat.js'

export function TableReviews(props) {
  
  const activTableCols = props.serviceSettings.userMainTable
  const activTableColsHeader = activTableCols.map(item => item.index)

  const makeRows = (row) => {
    const lookData = (row, item) => {
      if(item === 'date' || item ==='dateOut'){
        return dateToLokalFormatForMainTable(row[item])
      }
      else if(item === 'profit'){
        return row.getTotalProfit()
      }
      else if(item === 'expenses'){
        return row.getTotalExpenses()
      }
      else if(item === 'cost'){
        return row.getTotalCost()
      }
      else if(item === 'masters'){
        return row.getMasters()
      }
      return row[item]
    }
    return activTableColsHeader.map((item, index) => <Table.Td key={index}>{lookData(row, item)}</Table.Td>)
  }

  console.log(props.filteringOrders[0].service)
  console.log(props.filteringOrders[0].getTotalCost())
  console.log(props.filteringOrders[0].getTotalProfit())

  const rows = props.filteringOrders.map((row) => <>{makeRows(row)}</>)
  // console.log(rows)

  return (
    <Table.ScrollContainer minWidth={200}>
      <Table verticalSpacing="xs" striped withRowBorders={false}>
        <Table.Thead>
          <Table.Tr key={'new'}>
            {activTableCols.map((item, index) => <Table.Th key={index}>{item.label}</Table.Th>)}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows.map((row, index) => <ModalWindow orders={props.orders} app={props.app} filteringOrders={props.filteringOrders} setOrders={props.setOrders} getOrders={props.getOrders} serviceSettings={props.serviceSettings} data={props.filteringOrders[index]} key={index} row={row}/>)}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}