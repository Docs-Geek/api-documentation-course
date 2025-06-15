// in src/posts.tsx
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Show,
  SimpleShowLayout,
  NumberField,
  Create,
  NumberInput,
  Edit,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  BooleanInput,
  BooleanField,
  ArrayField,
  ShowProps,
  ReferenceInput,
  DateField,
  SimpleList,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { useMediaQuery, Theme } from "@mui/material";

import { Typography } from "@mui/material";
// displays on record list first page.

const dishFilters = [
  // <TextInput source="q" label="Search" alwaysOn />,
  <TextInput label="Name" source="name" defaultValue="" alwaysOn />,
  <TextInput label="Category" source="category" defaultValue="" alwaysOn />,
  <TextInput label="Station" source="station" defaultValue="" alwaysOn />,
];

export const DishList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  return (
    <List filters={dishFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.category}
          tertiaryText={(record) => record.price}
        />
      ) : (
        <Datagrid
          rowClick="none"
          bulkActionButtons={false}
          isRowSelectable={() => false}
        >
          {/* <TextField source="id" /> */}
          {/* <ReferenceField source="id" reference="dishes" link="show" /> */}
          <ReferenceField
            source="id"
            label="Name"
            reference="dishes"
            link="show"
          />
          {/* <TextField source="description" /> */}
          <TextField source="category" />
          <NumberField source="price" />
          <NumberField source="preparation_time" />
          {/* <TextField source="image_name" /> */}
          <TextField source="station" />
          <DateField source="created_at" showTime />
          {/* <TextField source="updated_at" /> */}
          {/* <DateField source="updated_at" showTime /> */}
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

const IngredientsEditForm = () => (
  <ArrayInput source="ingredients">
    <SimpleFormIterator>
      {/* <TextInput source="ingredient_id" /> */}
      <ReferenceInput
        source="ingredient_id"
        reference="ingredients"
        label="Ingredient Name"
      />
      <BooleanInput source="is_essential" label="Is Essential?" />
    </SimpleFormIterator>
  </ArrayInput>
);

export const DishEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" InputProps={{ disabled: true }} />
      {/* <ReferenceInput source="userId" reference="users" /> */}
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="category" />

      <SelectInput
        source="category"
        choices={[
          { id: "Appetizer", name: "Appetizer" },
          { id: "Main Course", name: "Main Course" },
          { id: "Dessert", name: "Dessert" },
          { id: "Drinks", name: "Drinks" }
        ]}
      />

      <NumberInput source="price" />
      <NumberInput source="preparation_time" />
      <TextInput source="image_name" />
      <SelectInput
        source="station"
        choices={[
          { id: "hot", name: "Hot" },
          { id: "cold", name: "Cold" },
          { id: "beverages", name: "Beverages" },
        ]}
      />
      <IngredientsEditForm />

      {/* <TextInput source="body" multiline rows={5} /> */}
    </SimpleForm>
  </Edit>
);

const IngredientsShowGrid = () => {
  return (
    <ArrayField source="ingredients">
      <Datagrid
        rowClick="none"
        bulkActionButtons={false}
        isRowSelectable={() => false}
      >
        {/* <TextField source="ingredient_id" label="Ingredient ID" /> */}
        <ReferenceField source="ingredient_id" reference="ingredients" />
        <BooleanField source="is_essential" label="Is Essential?" />
      </Datagrid>
    </ArrayField>
  );
};

export const DishShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      {/* <ReferenceField source="id" reference="dishes" link="show" /> */}
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="category" />
      <NumberField source="price" />
      <NumberField source="preparation_time" />
      <TextField source="image_name" />
      <TextField source="station" />
      <TextField source="created_at" />
      <TextField source="updated_at" />
      <IngredientsShowGrid />
    </SimpleShowLayout>
  </Show>
);

export const DishCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <SelectInput
        source="category"
        choices={[
          { id: "Appetizer", name: "Appetizer" },
          { id: "Main Course", name: "Main Course" },
          { id: "Dessert", name: "Dessert" },
          { id: "Drinks", name: "Drinks" }
        ]}
      />
      <NumberInput source="price" />
      <NumberInput source="preparation_time" />
      <TextInput source="image_name" />

      <SelectInput
        source="station"
        choices={[
          { id: "hot", name: "Hot" },
          { id: "cold", name: "Cold" },
          { id: "beverages", name: "Beverages" },
        ]}
      />

      <IngredientsEditForm />
    </SimpleForm>
  </Create>
);

// Doest work for the list:
// const IngredientsField = ({ record }: { record?: any }) => (
//   <div>
//     {record && record.ingredients && record.ingredients.length > 0 ? (
//       record.ingredients.map((ingredient: any) => (
//         <Typography key={ingredient._id} variant="body2">
//           ID: {ingredient.id}, Essential:{" "}
//           {ingredient.is_essential ? "Yes" : "No"}
//         </Typography>
//       ))
//     ) : (
//       <Typography variant="body2">No Ingredients</Typography>
//     )}
//   </div>
// );
