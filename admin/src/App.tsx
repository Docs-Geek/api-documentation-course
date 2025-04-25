import {
  Admin,
  Resource,
  ListGuesser,
  ShowGuesser,
  EditGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { OrderList, OrderEdit, OrderShow, OrderCreate } from "./orders";
import { DishList, DishShow, DishEdit, DishCreate } from "./dishes";
import {
  IngredientList,
  IngredientEdit,
  IngredientCreate,
} from "./ingredients";
import { UserList, UserEdit, UserShow, UserCreate } from "./users";
// import { PostList, PostEdit, PostCreate } from "./posts";
// import PostIcon from "@mui/icons-material/Book";
// import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from "./Dashboard";
import { authProvider } from "./authProvider";

export const App = () => (
  <Admin
    authProvider={authProvider}
    layout={Layout}
    dataProvider={dataProvider}
    dashboard={Dashboard}
  >
    <Resource
      name="orders"
      list={OrderList}
      edit={OrderEdit}
      create={OrderCreate}
      show={OrderShow}
    />
    <Resource
      name="dishes"
      list={DishList}
      edit={DishEdit}
      create={DishCreate}
      show={DishShow}
    />
    <Resource
      name="ingredients"
      list={IngredientList}
      edit={IngredientEdit}
      create={IngredientCreate}
      show={ShowGuesser}
    />
    <Resource
      name="users"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
      show={UserShow}
    />
  </Admin>
);
