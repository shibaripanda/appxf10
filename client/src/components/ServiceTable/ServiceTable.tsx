import React from 'react';
import { Table, Button } from '@mantine/core'


export function ServiceTable(props) {

  const rows = props.data.map((row, index) => {
    if(['ready', 'close', 'cancel', 'warranty'].includes(props.status)){
      return (
        <Table.Tr key={row.service}>
          <Table.Td><div style={{textAlign: 'center'}}>{index + 1}</div></Table.Td>
          <Table.Td>{row.service}</Table.Td>
          <Table.Td>{row.master}</Table.Td>
          <Table.Td><div style={{textAlign: 'right'}}>{row.varant}</div></Table.Td>
          <Table.Td><div style={{textAlign: 'right'}}>{row.price}</div></Table.Td>
        </Table.Tr>
      )
    }

    return (
      <Table.Tr key={row.service}>
        <Table.Td><div style={{textAlign: 'center'}}>{index + 1}</div></Table.Td>
        <Table.Td>{row.service}</Table.Td>
        <Table.Td>{row.master}</Table.Td>
        <Table.Td><div style={{textAlign: 'right'}}>{row.varant}</div></Table.Td>
        <Table.Td><div style={{textAlign: 'right'}}>{row.price}</div></Table.Td>
        <Table.Td>
          <div style={{textAlign: 'center'}}>
              <Button color={'red'} onClick={() => {props.delete(row)}}>Удалить</Button>
          </div>
          </Table.Td>
      </Table.Tr>
    )

  })
  if(['ready', 'close', 'cancel', 'warranty'].includes(props.status)){
    return (
      <Table.ScrollContainer minWidth={800}>
        <Table verticalSpacing="0.3vmax" border={1}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th key={1}></Table.Th>
              <Table.Th key={2}>Услуга</Table.Th>
              <Table.Th key={3}>Мастер</Table.Th>
              <Table.Th key={4}>Гарант(дней)</Table.Th>
              <Table.Th key={5}>Стоимость</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
              {rows}
              {/* <Table.Td colSpan={6}><b>Сумма {props.data.reduce((a, b) => a + b.price, 0)} руб.</b></Table.Td> */}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    )
  }
  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="0.3vmax" border={1}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th key={1}></Table.Th>
            <Table.Th key={2}>Услуга</Table.Th>
            <Table.Th key={3}>Мастер</Table.Th>
            <Table.Th key={4}>Гарант(дней)</Table.Th>
            <Table.Th key={5}>Стоимость</Table.Th>
            <Table.Th key={6}>Состояние</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
            {rows}
            {/* <Table.Td colSpan={6}><b>Сумма {props.data.reduce((a, b) => a + b.price, 0)} руб.</b></Table.Td> */}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  )
}