import React from 'react';
import { Table } from '@mantine/core'
var rubles = require('rubles').rubles


export function ServiceTableDocument(props) {

  const sizeFont = '1.2vmax'

  const rows = props.data.map((row, index) => {

    return (
      <Table.Tr key={row.service}>
        <Table.Td><div style={{textAlign: 'center', fontSize: sizeFont}}>{index + 1}</div></Table.Td>
        <Table.Td><div style={{fontSize: sizeFont}}>{row.service}</div></Table.Td>
        <Table.Td><div style={{textAlign: 'right', fontSize: sizeFont}}>{row.varant} дней</div></Table.Td>
        <Table.Td><div style={{textAlign: 'right', fontSize: sizeFont}}>{row.price} руб.</div></Table.Td>
      </Table.Tr>
    )

  })

  const countMoney = props.data.reduce((a, b) => a + b.price, 0)

  return (
    <Table.ScrollContainer minWidth={775}>
      <Table verticalSpacing="0.01vmax" border={1}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th key={1} style={{textAlign: 'center', fontSize: sizeFont}}></Table.Th>
            <Table.Th key={2} style={{fontSize: sizeFont}}>Услуга</Table.Th>
            <Table.Th key={4} style={{textAlign: 'center', fontSize: sizeFont}}>Гарант(дней)</Table.Th>
            <Table.Th key={5} style={{textAlign: 'center', fontSize: sizeFont}}>Стоимость</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
            {rows}
            <Table.Tr key={55}>
              <Table.Td colSpan={1} style={{textAlign: 'center', fontSize: sizeFont}}>
                <b> Сумма: </b>
              </Table.Td>
              <Table.Td colSpan={2} style={{textAlign: 'center', fontSize: sizeFont}}>
                <b>{rubles(countMoney)[0].toUpperCase() + rubles(countMoney).substring(1, rubles(countMoney).length - 10)}</b>
              </Table.Td>
              <Table.Td colSpan={1} style={{textAlign: 'right', fontSize: sizeFont}}>
                <b> {countMoney} руб.</b>
              </Table.Td>
            </Table.Tr>
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  )
}