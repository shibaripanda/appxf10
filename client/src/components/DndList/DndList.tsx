import cx from 'clsx';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import classes from './DndList.module.css';
import React, { useState } from 'react';
import { GridForItems } from '../GridForItems/GridForItems.tsx';
import { CheckBox1 } from '../CheckBox1/CheckBox1.tsx'

export function DndList(props) {

  const [state, setState] = useState(props.serviceSettings.userMainTable)
  const [dataChecks] = useState(props.data.sort((a,b) => a.index - b.index))

  const items = state.map((item: any, index: number) => (
    <Draggable key={item.index} index={index} draggableId={item.label}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className={classes.text}>
            {item.label}
          </div>
        </div>
      )}
    </Draggable>
  ))

  async function swap(arr, a, b) {
    console.log(arr)
    arr[a] = arr.splice(b, 1, arr[a])[0]
    console.log(arr)
  }

  return (
    <div>
      <div>
        <DragDropContext
          onDragEnd={async ({ destination, source }) => {
            await swap(state, source.index, destination?.index || 0)
            props.serviceSettings.userMainTable = state
            console.log(state.map(item => item.index))
            props.setServiceSettings(props.serviceSettings)
            props.app.updateUserSettings({item: 'userMainTable', newData: props.serviceSettings.userMainTable})
            setState([...state])
          }}
        >
          <Droppable droppableId="dnd-list"  direction="horizontal">
            {(provided) => (
              <div className={classes.horizont} {...provided.droppableProps} ref={provided.innerRef}>
              {items}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div className={classes.check}>
      <GridForItems data={
        dataChecks.map((item, index) => <CheckBox1 app={props.app} setState={setState} key={index} item={item} serviceSettings={props.serviceSettings} setServiceSettings={props.setServiceSettings}/>)
        } count={4}/>
      </div>
    </div>
  )
}