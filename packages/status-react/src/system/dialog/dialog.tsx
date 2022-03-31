import React, { useState } from 'react'

import * as Primitive from '@radix-ui/react-dialog'

import { CrossIcon } from '~/src/icons/cross-icon'

import { Button } from '../button'
import { Heading } from '../heading'
import { IconButton } from '../icon-button'
import { Separator } from '../separator'
import { Actions, Body, Content, Header, Overlay } from './styles'

import type { ButtonProps } from '../button'

interface DialogTriggerProps {
  children: [React.ReactElement, React.ReactElement]
}

const DialogTrigger = (props: DialogTriggerProps) => {
  const { children } = props

  const [open, setOpen] = useState(false)

  const [trigger, content] = children

  return (
    <Primitive.Root open={open} onOpenChange={setOpen}>
      <Primitive.Trigger asChild>{trigger}</Primitive.Trigger>
      {content}
    </Primitive.Root>
  )
}

interface DialogProps {
  title: React.ReactNode
  children: React.ReactNode
}

const Dialog = (props: DialogProps) => {
  const { title, children } = props

  return (
    <Primitive.Portal>
      <Overlay as={Primitive.Overlay} />
      <Content as={Primitive.Content}>
        <Header>
          <Heading as={Primitive.Title} weight="600" size="17">
            {title}
          </Heading>
          <Primitive.Close asChild>
            <IconButton label="Close">
              <CrossIcon />
            </IconButton>
          </Primitive.Close>
        </Header>
        {children}
      </Content>
    </Primitive.Portal>
  )
}

const Cancel = (props: ButtonProps) => {
  return (
    <Primitive.Close asChild>
      <Button {...props} />
    </Primitive.Close>
  )
}

const Action = (props: ButtonProps) => {
  return <Button {...props} />
}

Dialog.Body = Body
Dialog.Actions = Actions
Dialog.Cancel = Cancel
Dialog.Action = Action
Dialog.Separator = Separator

export { Dialog, DialogTrigger }