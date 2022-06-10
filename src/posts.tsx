import * as React from 'react'
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  useRecordContext,
} from 'react-admin'
import { useMediaQuery } from '@mui/material'
const PostTitle = () => {
  const record = useRecordContext()
  return <span>Post {record ? `"${record.title}"` : ''}</span>
}

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users">
    <SelectInput optionText="name" />
  </ReferenceInput>,
]

export const PostList = () => {
  const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down('sm'))
  return (
    <List filters={postFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.title}
          secondaryText={(record) => (
            <ReferenceField label="User" source="userId" reference="users">
              <TextField source="name" />
            </ReferenceField>
          )}
        />
      ) : (
        <Datagrid>
          <TextField source="id" />
          <ReferenceField label="User" source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <TextField source="body" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  )
}

export const PostEdit = () => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
)

export const PostCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
)
