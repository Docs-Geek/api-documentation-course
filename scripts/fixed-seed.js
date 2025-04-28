const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');

// Load models
const OrderModel = mongoose.model('Order', require('../models/Order').Order);
const IngredientModel = mongoose.model('Ingredient', require('../models/Ingredient').Ingredient);
const UserModel = mongoose.model('User', require('../models/User').User);
const DishModel = mongoose.model('Dish', require('../models/Dish').Dish);
const AuthModel = mongoose.model('Auth', require('../models/Auth').Auth);

const { v4: uuidv4 } = require('uuid');

// Ingredient list
const ingredientNames = [
  'Tomato', 'Basil', 'Mozzarella Cheese', 'Garlic', 'Olive Oil',
  'Parmesan Cheese', 'Pasta', 'Ground Beef', 'Chicken Breast', 'Mushrooms',
  'Bell Peppers', 'Onions', 'Spinach', 'Eggplant', 'Zucchini',
  'Balsamic Vinegar', 'Capers', 'Prosciutto', 'Salami', 'Ricotta Cheese'
];

const dishNames = [
  'Bruschetta al Pomodoro', 'Arancini di Riso', 'Caprese Salad',
  'Prosciutto e Melone', 'Calamari Fritti', 'Carpaccio di Manzo',
  'Crostini di Fegato', 'Spaghetti Carbonara', 'Lasagna alla Bolognese',
  'Margherita Pizza'
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
  'A classic pizza topped with fresh tomato sauce, mozzarella cheese, and basil leaves.'
];

const dishStations = ['cold', 'hot', 'cold', 'cold', 'hot', 'cold', 'cold', 'hot', 'hot', 'hot'];
const categoryList = ['Appetizers', 'Appetizers', 'Appetizers', 'Appetizers', 'Appetizers', 'Appetizers', 'Appetizers', 'Main Course', 'Main Course', 'Main Course'];
const orderStatus = ['Draft', 'Received', 'In Progress', 'Ready for Assembly', 'On the Way', 'Ready for Pickup'];

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

async function seedDatabase() {
  try {
    // Connect to MongoDB using the same connection string as in index.js
    const dbUrl = 'mongodb://localhost:27018/pos-db';
    console.log('Connecting to MongoDB at:', dbUrl);
    
    await mongoose.connect(dbUrl);
    console.log('Connected to MongoDB, beginning data seeding...');
    
    // Clear existing data
    await Promise.all([
      IngredientModel.deleteMany({}),
      DishModel.deleteMany({}),
      OrderModel.deleteMany({}),
      UserModel.deleteMany({}),
      AuthModel.deleteMany({})
    ]);
    console.log('Cleared existing data');

    // Generate ingredients
    const ingredients = Array.from({ length: 20 }, () => ({
      name: faker.helpers.arrayElement(ingredientNames),
      in_stock_qty: faker.number.int({ min: 1, max: 100 }),
      price: faker.helpers.arrayElement([199, 299, 399, 499, 599, 699, 799, 899, 999]),
      created_at: faker.date.past(),
      updated_at: faker.date.recent()
    }));
    
    const createdIngredients = await IngredientModel.insertMany(ingredients);
    ingredientIds = createdIngredients.map(ing => ing._id);
    console.log(`Created ${ingredientIds.length} ingredients`);

    // Generate dishes
    const dishes = dishNames.map((name, index) => {
      const randomIngredients = getRandomElements(ingredientIds, faker.number.int({ min: 2, max: 5 }));
      const ingredients = randomIngredients.map(id => ({
        ingredient_id: id,
        is_essential: faker.datatype.boolean()
      }));

      return {
        name,
        description: dishDescriptions[index] || 'A delicious Italian dish',
        price: faker.helpers.arrayElement([999, 1299, 1499, 1699, 1999]),
        category: categoryList[index] || 'Main Course',
        preparation_time: faker.helpers.arrayElement([15, 20, 25, 30, 35, 40]),
        image_name: name.toLowerCase().replace(/\s+/g, '_'),
        station: dishStations[index] || 'hot',
        ingredients,
        created_at: faker.date.past(),
        updated_at: faker.date.recent()
      };
    });
    
    const createdDishes = await DishModel.insertMany(dishes);
    dishIds = createdDishes.map(dish => dish._id);
    console.log(`Created ${dishIds.length} dishes`);

    // Generate orders
    const orders = Array.from({ length: 15 }, () => {
      const randomDishes = getRandomElements(dishIds, faker.number.int({ min: 1, max: 4 }));
      return {
        name: faker.person.firstName(),
        table_number: faker.datatype.boolean() ? faker.number.int({ min: 1, max: 20 }) : null,
        status: faker.helpers.arrayElement(orderStatus),
        priority: faker.number.int({ min: 1, max: 5 }),
        dish_ids: randomDishes,
        special_requests: faker.datatype.boolean() ? faker.lorem.sentence() : null,
        scheduled_at: faker.datatype.boolean() ? faker.date.future() : null,
        created_at: faker.date.past(),
        updated_at: faker.date.recent()
      };
    });
    
    await OrderModel.insertMany(orders);
    console.log(`Created ${orders.length} orders`);

    // Generate users with predefined credentials
    const users = [
      {
        user_name: 'manager',
        password: 'Password123!',
        email: 'manager@example.com',
        role: 'manager',
        created_at: faker.date.past(),
        updated_at: faker.date.recent()
      },
      {
        user_name: 'chef',
        password: 'Password123!',
        email: 'chef@example.com',
        role: 'chef',
        created_at: faker.date.past(),
        updated_at: faker.date.recent()
      },
      {
        user_name: 'patron',
        password: 'Password123!',
        email: 'patron@example.com',
        role: 'patron',
        created_at: faker.date.past(),
        updated_at: faker.date.recent()
      }
    ];
    
    await UserModel.insertMany(users);
    console.log(`Created ${users.length} users`);

    // Create a permanent auth token
    const auth = new AuthModel({
      created_at: new Date(),
      updated_at: new Date(),
      access_token: 'a1732455-42cf-4d24-a956-84adc847c0ca',
      expires_at: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year in the future
      refresh_token: '68506407-e3de-4e4f-9051-f187adc99390',
      token_type: 'Bearer',
      user_name: 'manager'
    });
    
    await auth.save();
    console.log('Created permanent auth token');

    console.log('Database seeded successfully!');
    return true;
  } catch (error) {
    console.error('Error seeding database:', error);
    return false;
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
}

// Execute the seeding function
seedDatabase()
  .then(success => {
    if (success) {
      console.log('✅ Database seeding completed successfully');
      process.exit(0);
    } else {
      console.log('❌ Database seeding failed');
      process.exit(1);
    }
  })
  .catch(err => {
    console.error('Fatal error during seeding:', err);
    process.exit(1);
  });
