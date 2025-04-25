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
} from "react-admin";
// import { ReferenceManyInput } from "react-admin/ra-relationships";
import { Typography } from "@mui/material";
import { useMediaQuery, Theme } from "@mui/material";

const orderFilters = [
  <TextInput label="Name" source="name" defaultValue="" alwaysOn />,
  <TextInput
    label="Table number"
    source="table_number"
    defaultValue=""
    alwaysOn
  />,
  <TextInput label="Status" source="status" defaultValue="" alwaysOn />,
];
export const OrderList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  return (
    <List filters={orderFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.table_number}
          tertiaryText={(record) => record.status}
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
            reference="orders"
            link="show"
          >
            <TextField source="name" />
          </ReferenceField>
          <NumberField source="table_number" />
          <TextField source="status" />
          <NumberField source="priority" />
          <ReferenceArrayField source="dish_ids" reference="dishes" />
          <DateField source="created_at" showTime />
          <DateField source="scheduled_at" showTime />
          {/* <DateField source="updated_at" showTime /> */}
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const OrderEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" InputProps={{ disabled: true }} />
      <TextInput source="name" />
      <NumberInput source="table_number" />

      <SelectInput
        source="status"
        choices={[
          { id: "Draft", name: "Draft" },
          { id: "Received", name: "Received" },
          { id: "In Progress", name: "In Progress" },
          { id: "Ready for Assembly", name: "Ready for Assembly" },
          { id: "On the Way", name: "On the Way" },
          { id: "Ready for Pickup", name: "Ready for Pickup" },
        ]}
      />
      <DateTimeInput source="scheduled_at" />
      <ReferenceArrayInput source="dish_ids" reference="dishes" />
      <TextInput source="special_requests" multiline rows={5} />
    </SimpleForm>
  </Edit>
);

export const OrderShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <NumberField source="table_number" />
      <TextField source="status" />
      <NumberField source="priority" />
      <ReferenceArrayField source="dish_ids" reference="dishes" />
      <TextField source="special_requests" />
      <DateField source="scheduled_at" showTime />
      <DateField source="created_at" showTime />
      <DateField source="updated_at" showTime />
    </SimpleShowLayout>
  </Show>
);

export const OrderCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="table_number" />
      <DateTimeInput source="scheduled_at" />
      <ReferenceArrayInput source="dish_ids" reference="dishes" />
      <TextField source="special_requests" />
    </SimpleForm>
  </Create>
);
