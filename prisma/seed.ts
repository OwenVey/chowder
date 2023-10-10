import { db } from '~/prisma/db';

async function main() {
  await db.recipe.upsert({
    where: { id: 'clnga4d0l0000mxloj5msbp01' },
    update: {},
    create: {
      id: 'clnga4d0l0000mxloj5msbp01',
      name: 'Pumpkin Turkey Chili',
      image:
        'https://www.allrecipes.com/thmb/g5TdtWI8HaKBP_pGjWPV4Oll2D4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/270553-pumpkin-turkey-chili-Darcey55-1x1-1-206dbb134bcf4e7e8f903144d7a9497f.jpg',
      description: `This turkey pumpkin chili is absolutely delicious. It's quick and easy, too!`,
      userId: 'user_2W2dixXTiGeaxKQidbmXlZ7fm4V',
      servings: 6,
      prepTime: 10,
      cookTime: 20,
      ingredients: `1 tablespoon vegetable oil

        1 cup chopped onion
        
        ½ cup chopped green bell pepper
        
        ½ cup chopped yellow bell pepper
        
        1 clove garlic, minced
        
        1 pound ground turkey
        
        1 (14.5 ounce) can diced tomatoes
        
        2 cups pumpkin puree
        
        1 ½ tablespoons chili powder or more to taste
        
        ½ teaspoon ground black pepper
        
        1 dash salt
        
        ½ cup shredded Cheddar cheese
        
        ½ cup sour cream`,
      directions: `Heat oil in a large skillet over medium heat. Add onion, green bell pepper, yellow bell pepper, and garlic; cook and stir until tender.

        Stir in turkey and cook until evenly brown; drain.
        
        Mix in tomatoes and pumpkin. Season with chili powder, pepper, and salt. Reduce heat to low, cover, and simmer 15 to 20 minutes. Serve topped with Cheddar cheese and sour cream.`,
    },
  });

  await db.recipe.upsert({
    where: { id: 'clngbeulv0000mxhd1o5dli54' },
    update: {},
    create: {
      id: 'clngbeulv0000mxhd1o5dli54',
      name: 'Baked Ziti',
      image:
        'https://www.allrecipes.com/thmb/VUjF0WqLJFUQKCnOItM7mMlk-LE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4557541-21604073f2774e89b532193821d6cd9c.jpg',
      description: `This baked ziti is always a hit! A lady I worked with brought this in one day, and everyone loved it. Now it is the favorite of all my dinner guests. I have made this also without the meat, and it is well received.`,
      userId: 'user_2W2dixXTiGeaxKQidbmXlZ7fm4V',
      servings: 10,
      prepTime: 15,
      cookTime: 45,
      ingredients: `1 pound dry ziti pasta

      1 onion, chopped
      
      1 pound lean ground beef
      
      2 (26 ounce) jars spaghetti sauce
      
      6 ounces provolone cheese, sliced
      
      1 ½ cups sour cream
      
      6 ounces mozzarella cheese, shredded
      
      2 tablespoons grated Parmesan cheese`,
      directions: `Bring a large pot of lightly salted water to a boil. Add ziti pasta, and cook until al dente, about 8 minutes; drain.

      Meanwhile, brown ground beef and onion in a large skillet over medium heat; stir in spaghetti sauce and simmer for 15 minutes.
      
      Preheat the oven to 350 degrees F (175 degrees C). Butter a 9x13-inch baking dish.
      
      Spread 1/2 of the ziti in the bottom of the prepared dish; top with Provolone cheese, sour cream, 1/2 of the meat sauce, remaining ziti, mozzarella cheese, and remaining meat sauce. Top with grated Parmesan cheese.
      
      Bake in the preheated oven until heated through and cheeses have melted, about 30 minutes.`,
    },
  });

  await db.recipe.upsert({
    where: { id: 'clngbjaxg0001mxhdf5ledb6v' },
    update: {},
    create: {
      id: 'clngbjaxg0001mxhdf5ledb6v',
      name: 'Butternut Squash Soup',
      image:
        'https://www.allrecipes.com/thmb/6MWFchT-TFPy6cnxWRX22XZq0yU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/77981-butternut-squash-soup-ii-DDMFS-4x3-90a6bf5fa88346699bf41d502a029798.jpg',
      description: `This is a thick, rich butternut squash soup with tons of flavor. Something I whipped up off the top of my head, with things I had on hand. Super easy, quick, and a great way to use squash. An instant hit at my house.`,
      userId: 'user_2W2dixXTiGeaxKQidbmXlZ7fm4V',
      servings: 4,
      prepTime: 20,
      cookTime: 45,
      ingredients: `2 tablespoons butter

      1 small onion, chopped
      
      1 stalk celery, chopped
      
      1 medium carrot, chopped
      
      2 medium potatoes, cubed
      
      1 medium butternut squash - peeled, seeded, and cubed
      
      1 (32 fluid ounce) container chicken stock
      
      salt and freshly ground black pepper to taste`,
      directions: `Gather all ingredients.

      Melt butter in a large pot over medium heat, and cook onion, celery, carrot, potatoes, and squash until lightly browned, about 5 minutes. Pour in enough chicken stock to cover vegetables.
      
      Bring to a boil over medium-high heat. Reduce heat to low, cover pot, and simmer until all vegetables are tender, about 40 minutes.
      
      Transfer soup to a blender and process until smooth. Return to the pot and mix in any remaining stock to reach desired consistency. Season with salt and pepper.
      
      Serve hot and enjoy!`,
    },
  });
}
main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
