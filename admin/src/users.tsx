// in src/posts.tsx
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  NumberField,
  Create,
  NumberInput,
  Edit,
  DateField,
  DateInput,
  DateTime,
  DateTimeField,
  DateTimeInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  BooleanInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SaveButton,
  Toolbar,
  SimpleList,
  ReferenceArrayField,
  Show,
  SimpleShowLayout,
  EmailField,
} from "react-admin";
// import { ReferenceManyInput } from "react-admin/ra-relationships";
import { Typography } from "@mui/material";
import { useMediaQuery, Theme } from "@mui/material";

// displays on record list first page.

const userFilters = [
  <TextInput label="Name" source="name" defaultValue="" alwaysOn />,
  <TextInput label="User name" source="user_name" defaultValue="" alwaysOn />,

  <TextInput label="Role" source="role" defaultValue="" alwaysOn />,
  // <ReferenceInput source="title" label="Title" reference="users" />,
];

export const UserList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  return (
    <List filters={userFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.user_name}
          secondaryText={(record) => record.email}
          tertiaryText={(record) => record.role}
        />
      ) : (
        <Datagrid
          rowClick="none"
          bulkActionButtons={false}
          isRowSelectable={() => false}
        >
          <ReferenceField
            source="id"
            label="Name"
            reference="users"
            link="show"
          >
            <TextField source="name" />
          </ReferenceField>

          {/* <TextField source="id" /> */}
          {/* <ReferenceField source="id" reference="dishes" link="show" /> */}
          <TextField source="user_name" />
          <EmailField source="email" />
          {/* <TextField source="password" /> */}
          <TextField source="role" />
          <DateField source="created_at" showTime />
          {/* <DateField source="updated_at" showTime /> */}
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" InputProps={{ disabled: true }} />
      {/* <ReferenceInput source="userId" reference="users" /> */}

      <TextInput source="name" />

      <TextInput source="user_name" />
      <TextInput source="email" />
      <TextInput source="password" />
      <TextInput source="role" />
      {/* <TextInput source="body" multiline rows={5} /> */}
    </SimpleForm>
  </Edit>
);

export const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="user_name" />
      <EmailField source="email" />
      {/* <TextField source="password" /> */}
      <TextField source="role" />
      <DateField source="created_at" showTime />
      {/* <DateField source="updated_at" showTime /> */}
      <EditButton />
    </SimpleShowLayout>
  </Show>
);

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      {/* <ReferenceInput source="userId" reference="users" /> */}
      <TextInput source="name" />
      <TextInput source="user_name" />
      <TextInput source="email" />
      <TextInput source="password" />
      <TextInput source="role" />
      {/* <TextInput source="body" multiline rows={5} /> */}
    </SimpleForm>
  </Create>
);
