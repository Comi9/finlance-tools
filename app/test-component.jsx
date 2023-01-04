'use client'

import { useState } from 'react'
import {
  createStyles,
  Flex,
  Space,
  Select,
  TextInput,
  Slider,
  Container
} from '@mantine/core'

const useStyles = createStyles(theme => ({
  root: {
    position: 'relative'
  },

  input: {
    height: 'auto',
    paddingTop: 18
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1
  }
}))

export function Test() {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles()
  const [value, setValue] = useState(40)
  return (
    <Flex
      mih={50}
      gap="md"
      justify="center"
      align="center"
      direction="column"
      wrap="wrap">
      <div>
        <Flex justify="center">finlance.tools</Flex>

        <Space h="md" />

        <TextInput
          label="Shipping address"
          placeholder="15329 Huston 21st"
          classNames={classes}
        />

        <Select
          style={{ marginTop: 20, zIndex: 2 }}
          data={['React', 'Angular', 'Svelte', 'Vue']}
          placeholder="Pick one"
          label="Libs"
          classNames={classes}
        />
      </div>

      <Space h="md" />

      <Container style={{ width: '300px' }}>
        <Slider
          defaultValue={10}
          onChange={setValue}
          marks={[
            { value: 20, label: '20%' },
            { value: 50, label: '50%' },
            { value: 80, label: '80%' }
          ]}
        />
        {value}
      </Container>
    </Flex>
  )
}
