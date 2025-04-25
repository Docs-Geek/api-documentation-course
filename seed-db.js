const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');

// Load models
const OrderModel = mongoose.model('Order', require('./models/Order').Order);
const IngredientModel = mongoose.model(
  'Ingredient',
  require('./models/Ingredient').Ingredient
);
// const AuthModel = mongoose.model('Auth', require('./models/Auth').Auth);
const UserModel = mongoose.model('User', require('./models/User').User);
const DishModel = mongoose.model('Dish', require('./models/Dish').Dish);
const AuthModel = mongoose.model('Auth', require('./models/Auth').Auth);

const { v4: uuidv4 } = require('uuid');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/pos-db');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

// Ingredient list
const ingredientNames = [
  'Tomato',
  'Basil',
  'Mozzarella Cheese',
  'Garlic',
  'Olive Oil',
  'Parmesan Cheese',
  'Pasta',
  'Ground Beef',
  'Chicken Breast',
  'Mushrooms',
  'Bell Peppers',
  'Onions',
  'Spinach',
  'Eggplant',
  'Zucchini',
  'Balsamic Vinegar',
  'Capers',
  'Prosciutto',
  'Salami',
  'Ricotta Cheese',
  'Saffron',
  'Rosemary',
  'Thyme',
  'Oregano',
  'Chili Flakes',
  'Cream',
  'Butter',
  'Chicken Stock',
  'Beef Broth',
  'White Wine',
  'Red Wine',
  'Seafood Mix',
  'Bread Crumbs',
  'Fennel Seeds',
  'Lemon Juice',
  'Cucumber',
  'Avocado',
  'Dried Tomatoes',
  'Gorgonzola Cheese',
  'Artichokes',
];

const dishNames = [
  'Bruschetta al Pomodoro',
  'Arancini di Riso',
  'Caprese Salad',
  'Prosciutto e Melone',
  'Calamari Fritti',
  'Carpaccio di Manzo',
  'Crostini di Fegato',
  'Spaghetti Carbonara',
  'Lasagna alla Bolognese',
  'Margherita Pizza',
  'Risotto ai Funghi',
  'Osso Buco',
  'Fettuccine Alfredo',
  'Melanzane alla Parmigiana',
  'Penne Arrabbiata',
  'Saltimbocca alla Romana',
  'Gnocchi al Pesto',
  'Tiramisu',
  'Panna Cotta',
  'Cannoli',
  'Zabaglione',
  'Gelato',
  'Cassata Siciliana',
  'Affogato al Caffè',
  'Espresso',
  'Cappuccino',
  'Limoncello',
  'Negroni',
  'Aperol Spritz',
  'Chianti',
  'Prosecco',
];

const dishDescriptions = [
  'Toasted bread topped with a mixture of ripe tomatoes, garlic, basil, and olive oil.',
  'Crispy, golden rice balls stuffed with a cheesy filling and served with marinara sauce.',
  'A fresh salad featuring ripe tomatoes, mozzarella cheese, basil, and a drizzle of balsamic vinegar.',
  'Thin slices of cured ham served with sweet cantaloupe melon.',
  'Fried squid rings served with a side of marinara sauce or lemon wedges.',
  'Thinly sliced raw beef topped with arugula, Parmesan, and a drizzle of olive oil.',
  'Toasted bread slices topped with a savory chicken liver pâté.',
  'Pasta cooked with eggs, cheese, pancetta, and black pepper for a creamy, savory dish.',
  'Layers of pasta, beef ragu, and béchamel sauce baked to perfection.',
  'A classic pizza topped with fresh tomato sauce, mozzarella cheese, and basil leaves.',
  'Creamy risotto made with a variety of wild mushrooms and finished with Parmesan cheese.',
  'Braised veal shanks cooked with white wine, broth, and vegetables, served with gremolata.',
  'Pasta tossed with a rich cream sauce, Parmesan cheese, and butter.',
  'Eggplant slices baked with marinara sauce and melted mozzarella cheese.',
  'Pasta tubes in a spicy tomato sauce with garlic and chili flakes.',
  'Veal scaloppine topped with prosciutto and sage, then cooked in white wine sauce.',
  'Soft potato dumplings tossed with a basil pesto sauce and Parmesan cheese.',
  'A classic Italian dessert made with coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder.',
  'A creamy vanilla custard dessert, often topped with fresh fruit or caramel sauce.',
  'Crispy pastry tubes filled with sweetened ricotta cheese and chocolate chips.',
  'A light, frothy dessert made with egg yolks, sugar, and Marsala wine.',
  'A smooth and creamy frozen dessert available in various flavors.',
  'A Sicilian dessert made with ricotta cheese, candied fruit, and chocolate chips.',
  'Espresso coffee topped with a scoop of vanilla gelato, creating a rich and creamy treat.',
  'Strong, dark coffee served in small, concentrated shots.',
  'A frothy coffee drink made with espresso and steamed milk, often topped with foam.',
  'A sweet, lemon-flavored liqueur often enjoyed as a digestif.',
  'A classic Italian cocktail made with gin, vermouth, and Campari, garnished with an orange twist.',
  'A refreshing Italian cocktail made with Prosecco, Aperol, and soda water.',
  'A robust red wine from Tuscany, known for its rich flavor and complex aroma.',
  'A sparkling white wine from the Veneto region, perfect for toasts and celebrations.',
];

const dishStations = [
  'cold', // Bruschetta al Pomodoro
  'hot', // Arancini di Riso
  'cold', // Caprese Salad
  'cold', // Prosciutto e Melone
  'hot', // Calamari Fritti
  'cold', // Carpaccio di Manzo
  'cold', // Crostini di Fegato
  'hot', // Spaghetti Carbonara
  'hot', // Lasagna alla Bolognese
  'hot', // Margherita Pizza
  'hot', // Risotto ai Funghi
  'hot', // Osso Buco
  'hot', // Fettuccine Alfredo
  'hot', // Melanzane alla Parmigiana
  'hot', // Penne Arrabbiata
  'hot', // Saltimbocca alla Romana
  'hot', // Gnocchi al Pesto
  'cold', // Tiramisu
  'cold', // Panna Cotta
  'cold', // Cannoli
  'cold', // Zabaglione
  'cold', // Gelato
  'cold', // Cassata Siciliana
  'beverages', // Affogato al Caffè
  'beverages', // Espresso
  'beverages', // Cappuccino
  'beverages', // Limoncello
  'beverages', // Negroni
  'beverages', // Aperol Spritz
  'beverages', // Chianti
  'beverages', // Prosecco
];

const categoryList = [
  'Appetizers', // Bruschetta al Pomodoro
  'Appetizers', // Arancini di Riso
  'Appetizers', // Caprese Salad
  'Appetizers', // Prosciutto e Melone
  'Appetizers', // Calamari Fritti
  'Appetizers', // Carpaccio di Manzo
  'Appetizers', // Crostini di Fegato
  'Main Course', // Spaghetti Carbonara
  'Main Course', // Lasagna alla Bolognese
  'Main Course', // Margherita Pizza
  'Main Course', // Risotto ai Funghi
  'Main Course', // Osso Buco
  'Main Course', // Fettuccine Alfredo
  'Main Course', // Melanzane alla Parmigiana
  'Main Course', // Penne Arrabbiata
  'Main Course', // Saltimbocca alla Romana
  'Main Course', // Gnocchi al Pesto
  'Dessert', // Tiramisu
  'Dessert', // Panna Cotta
  'Dessert', // Cannoli
  'Dessert', // Zabaglione
  'Dessert', // Gelato
  'Dessert', // Cassata Siciliana
  'Dessert', // Affogato al Caffè
  'Drinks', // Espresso
  'Drinks', // Cappuccino
  'Drinks', // Limoncello
  'Drinks', // Negroni
  'Drinks', // Aperol Spritz
  'Drinks', // Chianti
  'Drinks', // Prosecco
];

const orderStatus = [
  'Draft',
  'Received',
  'In Progress',
  'Ready for Assembly',
  'On the Way',
  'Ready for Pickup',
];

let ingredientIds = [];
let dishIds = [];

// Helper function to get random elements from an array
function getRandomElements(arr, num) {
  const shuffled = arr.slice(0);
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, num);
}

const getDishIds = async () => {
  try {
    // Query the database to retrieve all ingredients
    const dishes = await DishModel.find({}, '_id').exec();

    // Extract IDs into an array
    dishIds = dishes.map((dish) => dish._id);
  } catch (error) {
    console.error('Error retrieving dish IDs:', error);
  }
};

// Function to generate random data for ingredients
const generateIngredients = async () => {
  try {
    await connectDB();
    await IngredientModel.deleteMany({});
    const ingredients = Array.from({ length: 50 }, () => {
      const randomIngredient = faker.helpers.arrayElement(ingredientNames);
      return new IngredientModel({
        name: randomIngredient,
        in_stock_qty: faker.number.int({ min: 1, max: 100 }),
        price: faker.helpers.arrayElement([
          199, 299, 399, 499, 599, 699, 799, 899, 999, 1999, 2999, 3999, 4999,
          5999, 6999, 7999, 8999, 9999,
        ]),
        created_at: faker.date.past(),
        updated_at: faker.date.recent(),
      });
    });

    await IngredientModel.insertMany(ingredients);
    console.log('Ingredients seeded successfully');
  } catch (error) {
    console.error('Error seeding the database:', error);
  }
};

// Function to get ingredient IDs
const getIngredientIds = async () => {
  try {
    // Query the database to retrieve all ingredients
    const ingredients = await IngredientModel.find({}, '_id').exec();

    // Extract IDs into an array
    ingredientIds = ingredients.map((ingredient) => ingredient._id);

    // Log the IDs
  } catch (error) {
    console.error('Error retrieving ingredient IDs:', error);
  }
};

// const getRandomElements = (arr, num) => {
//   const shuffled = arr.sort(() => 0.5 - Math.random());
//   return shuffled.slice(0, num);
// };
const generateDishes = async () => {
  try {
    // Ensure the database is connected
    await connectDB();

    await DishModel.deleteMany({});
    // Fetch ingredient IDs from the database
    const ingredientDocuments = await IngredientModel.find({}, '_id').exec();
    const ingredientIds = ingredientDocuments.map((doc) => doc._id.toString());

    // Verify that ingredientIds is populated
    // console.log('Ingredient IDs:', ingredientIds);

    // Define the categories array

    const dishes = dishNames.map((name, index) => {
      const dishDescription = dishDescriptions[index];
      const dishStation = dishStations[index];
      const category = categoryList[index]; // Use the correct category

      // Select random ingredients
      const randomIngredients = getRandomElements(
        ingredientIds,
        faker.number.int({ min: 2, max: 6 })
      );

      // Verify randomIngredients
      // console.log('Random Ingredients for', name, ':', randomIngredients);

      // Create ingredients array with only ingredient IDs as strings
      const ingredients = randomIngredients.map((id) => ({
        ingredient_id: id,
        is_essential: faker.datatype.boolean(),
      }));

      // Generate image name without file extension
      const imageName = `${name.replace(/\s+/g, '_').toLowerCase()}`;

      return {
        name,
        description: dishDescription,
        price: faker.helpers.arrayElement([
          199, 299, 399, 499, 599, 699, 799, 899, 999, 1999, 2999, 3999, 4999,
          5999, 6999, 7999, 8999, 9999,
        ]),
        category,
        preparation_time: faker.helpers.arrayElement([
          5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60,
        ]),
        image_name: imageName,
        station: dishStation,
        ingredients,
        created_at: faker.date.past(),
        updated_at: faker.date.recent(),
      };
    });

    await DishModel.insertMany(dishes);
    console.log('Dishes seeded successfully');
  } catch (error) {
    console.error('Error seeding the database:', error);
  }
};

const generateOrders = async () => {
  try {
    await connectDB();

    await OrderModel.deleteMany({});

    const dishDocuments = await DishModel.find({}, '_id').exec();
    const dishIds = dishDocuments.map((doc) => doc._id.toString());

    const orders = Array.from({ length: 50 }, () => {
      const randomDishes = getRandomElements(
        dishIds,
        faker.number.int({ min: 2, max: 6 })
      );

      const randomOrderStatus = faker.helpers.arrayElement(orderStatus);

      // Randomly set scheduled_at to either a future date or null
      const scheduledAt = faker.datatype.boolean()
        ? faker.date.future().toISOString()
        : null;

      const tableNumber = faker.datatype.boolean()
        ? faker.number.int({ min: 1, max: 30 })
        : null;

      const specialRequests = faker.datatype.boolean()
        ? faker.lorem.sentence()
        : null;

      return new OrderModel({
        name: faker.person.firstName(),
        table_number: tableNumber,
        status: randomOrderStatus,
        priority: faker.number.int({ min: 1, max: 5 }),
        dish_ids: randomDishes,
        special_requests: specialRequests, // Generates a random sentence for special requests
        scheduled_at: scheduledAt, // Can be null or a future date
        created_at: faker.date.past(),
        updated_at: faker.date.recent(),
      });
    });

    await OrderModel.insertMany(orders);
    console.log('Orders seeded successfully');
  } catch (error) {
    console.error('Error seeding the database:', error);
  }
};
const generateAuth = async () => {
  try {
    await connectDB();
    const auth = new AuthModel({
      created_at: faker.date.past(),
      updated_at: faker.date.recent(),
      access_token: 'a1732455-42cf-4d24-a956-84adc847c0ca',
      expires_at: '2034-09-18T09:54:52.897Z',
      refresh_token: '68506407-e3de-4e4f-9051-f187adc99390',
      token_type: 'Bearer',
      user_name: 'SysAdminJoe$404',
    });

    // Save the AuthModel instance to the database
    await auth.save();

    return auth;
  } catch (error) {
    console.error('Could not create long-lasting Auth:', error);
  }
};

const userNames = [
  'apiuser01',
  'devuser02',
  'techguru03',
  'coderjane04',
  'devmaster05',
  'apiexpert06',
  'backendpro07',
  'frontenddev08',
  'fullstackninja09',
  'sysadminjoe10',
];

const passwords = [
  'Passw0rd123!',
  'SecureP@ss456',
  'Tech1234Guru!',
  'CoderJane$2023',
  'DevMaster@789',
  'ApiExpert#101',
  'BackendPro!202',
  'Frontend@Dev303',
  'FullstackN1nja!',
  'SysAdminJoe$404',
];

const emails = [
  'api.user01@example.com',
  'dev.user02@example.com',
  'tech.guru03@example.com',
  'coder.jane04@example.com',
  'dev.master05@example.com',
  'api.expert06@example.com',
  'backend.pro07@example.com',
  'frontend.dev08@example.com',
  'fullstack.ninja09@example.com',
  'sysadmin.joe10@example.com',
];

const roles = ['patron', 'expeditor', 'chef', 'manager'];

const generateUsers = async () => {
  try {
    await connectDB();

    await UserModel.deleteMany({});

    // Create users using the data from the arrays
    const users = userNames.map((userName, index) => {
      // Choose a random role for each user
      const randomRole = faker.helpers.arrayElement(roles);

      return new UserModel({
        name: faker.person.fullName(),
        user_name: userName,
        password: passwords[index],
        email: emails[index],
        role: randomRole,
        created_at: faker.date.past(),
        updated_at: faker.date.recent(),
      });
    });

    // Insert the generated users into the database
    await UserModel.insertMany(users);
    console.log('Users seeded successfully');
  } catch (error) {
    console.error('Error seeding the database:', error);
  }
};

const main = async () => {
  try {
    await connectDB();
    await mongoose.connection.db.dropDatabase();
    await generateIngredients();
    await generateDishes();
    await generateOrders();
    await generateUsers();
    await generateAuth();
  } catch (error) {
    console.error('Error during operations:', error);
  } finally {
    // Close the connection
    await mongoose.connection.close();
  }
};

// Run the main function
main();
