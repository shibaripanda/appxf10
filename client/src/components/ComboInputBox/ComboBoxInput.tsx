import { Combobox, ScrollArea, TextInput, useCombobox } from '@mantine/core';
import React from 'react';

export function ComboBoxInput(props) {
  const combobox = useCombobox();
  const shouldFilterOptions = !props.data.some((item) => item === props.value);
  const filteredOptions = shouldFilterOptions
    ? props.data.filter((item) => item.toLowerCase().includes(props.value[props.index].toLowerCase().trim()))
    : props.data;

  const options = filteredOptions.map((item, index) => (
    <Combobox.Option value={item} key={index}>
      {item}
    </Combobox.Option>
  ))

  
  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        props.setValue({...props.value, [props.index]: optionValue});
        combobox.closeDropdown();
      }}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          label={props.label}
          placeholder={props.placeholder}
          value={props.value[props.index]}
          onChange={(event) => {
            props.setValue({...props.value, [props.index]: event.currentTarget.value});
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
          }}
          onClick={() => combobox.openDropdown()}
          // onFocus={() => combobox.openDropdown()}
          // onBlur={() => combobox.closeDropdown()}
        />
      </Combobox.Target>
      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize type="scroll" mah={350}>
          {options}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}