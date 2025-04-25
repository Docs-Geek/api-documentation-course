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
// displays on record list first page.

const ingredientFilters = [
  <TextInput label="Name" source="name" defaultValue="" alwaysOn />,
];

export const IngredientList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  return (
    <List filters={ingredientFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.price}
          tertiaryText={(record) => record.in_stock_qty}
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
            reference="ingredients"
            link="show"
          >
            <TextField source="name" />
          </ReferenceField>

          <NumberField source="price" />
          <NumberField source="in_stock_qty" />

          <TextField source="created_at" />
          {/* <TextField source="updated_at" /> */}
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const IngredientEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" InputProps={{ disabled: true }} />
      <TextInput source="name" />
      <NumberInput source="in_stock_qty" />
      <NumberInput source="price" />
    </SimpleForm>
  </Edit>
);

export const IngredientShow = () => (
  <Show>
    <SimpleShowLayout>
      <ReferenceField
        source="id"
        label="Name"
        reference="ingredients"
        link="show"
      >
        <TextField source="name" />
      </ReferenceField>

      <NumberField source="price" />
      <NumberField source="in_stock_qty" />

      <TextField source="created_at" />
      <TextField source="updated_at" />
    </SimpleShowLayout>
  </Show>
);

export const IngredientCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="in_stock_qty" />
      <NumberInput source="price" />
    </SimpleForm>
  </Create>
);
