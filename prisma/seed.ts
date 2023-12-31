import { prisma } from '@/server/db/client';

async function main() {
  const user = await prisma.user.upsert({
    where: {
      email: 'owen.vey@gmail.com',
    },
    create: {
      id: 'cl9yq5q120000oeruk621kcpa',
      name: 'Owen Vey',
      email: 'owen.vey@gmail.com',
    },
    update: {},
  });

  await prisma.recipe.upsert({
    where: {
      id: 'cl9ebqhxk00003b600tymydho',
    },
    create: {
      id: 'cl9ebqhxk00003b600tymydho',
      userId: user.id,
      name: 'Tuscan Chicken Skillet',
      description: 'Cheesy chicken and fettuccine',
      servings: 4,
      prepTime: 10,
      cookTime: 30,
      ingredients: {
        createMany: {
          data: [
            { name: 'Kosher salt and freshly ground black pepper' },
            { name: 'Fettuccine', quantity: 12, unit: 'ounce' },
            { name: 'Bacon', quantity: 4, unit: 'slice' },
            {
              name: 'Chicken Tenders',
              quantity: 1,
              unit: 'pound',
              note: 'cut into 1-inch pieces',
            },
            { name: 'Garlic', quantity: 2, unit: 'clove', note: 'minced' },
            { name: 'Plum Tomatoes', quantity: 4, note: 'chopped' },
            { name: 'Heavy Cream', quantity: 1, unit: 'cup' },
            { name: 'Baby Spinach', quantity: 5, unit: 'ounce' },
            { name: 'Grated Parmesan', quantity: 0.75, unit: 'cup' },
            {
              name: 'Fresh Basil',
              quantity: 3,
              unit: 'tablespoon',
              note: 'chopped',
            },
          ],
        },
      },
      directions: [
        'Bring a large pot of salted water to a boil. Cook the fettuccine according to package directions; drain.',
        'Meanwhile, put the bacon in a large, cold skillet, then cook over medium-high heat, stirring occasionally, until crispy, about 8 minutes; transfer to a plate with a slotted spoon',
        'Sprinkle the chicken lightly with salt and pepper and add to the skillet in a single layer. Let cook, undisturbed, until golden brown on the underside, 2 to 3 minutes. Continue to cook, stirring occasionally, until cooked through, about 4 minutes more. Transfer to the plate with the bacon.',
        'Reduce the heat to medium and add the garlic, stirring, until fragrant, about 30 seconds. Add the tomatoes and cream and bring to a simmer, then add the spinach and stir until just wilted. Add the bacon, chicken, fettuccine and Parmesan and toss with tongs until well coated; season to taste with salt and pepper. Sprinkle with basil and serve.',
      ],
      photo:
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
    },
    update: {},
  });

  await prisma.recipe.upsert({
    where: {
      id: 'cla2rhkjz000008me24ba3l4c',
    },
    create: {
      id: 'cla2rhkjz000008me24ba3l4c',
      userId: user.id,
      name: 'Baked Feta Pasta',
      description: 'Easy weeknight pasta dish that’s fuss free and flavorful',
      servings: 3,
      prepTime: 15,
      cookTime: 45,
      ingredients: {
        createMany: {
          data: [
            { name: 'Cherry or grape tomatoes', quantity: 2, unit: 'pint' },
            { name: 'Shallot', quantity: 1, note: 'quartered' },
            { name: 'Garlic', quantity: 3, unit: 'clove', note: 'smashed' },
            { name: 'Extra-virgin olive oil', quantity: 0.5, unit: 'cup', note: 'divided' },
            { name: 'Kosher salt' },
            { name: 'Pinch crushed red pepper flakes' },
            { name: 'Feta', quantity: 1, unit: '(8-oz.) block' },
            { name: 'Fresh Thyme', quantity: 3, unit: 'sprig' },
            { name: 'Pasta', quantity: 10, unit: 'ounce' },
            { name: 'Lemon', quantity: 1, note: 'zested (optional)' },
            { name: 'Fresh basil', note: 'for garnish' },
          ],
        },
      },
      directions: [
        'Preheat oven to 400°. In a large ovenproof skillet or medium baking dish, combine tomatoes, shallot, garlic, and all but 1 tablespoon oil. Season with salt and red pepper flakes and toss to combine',
        'Place feta into center of tomato mixture and drizzle with remaining 1 tablespoon oil. Scatter thyme sprigs over tomatoes. Bake for 40 to 45 minutes, until tomatoes are bursting and feta is golden on top.',
        'Meanwhile, in a large pot of boiling salted water, cook pasta until al dente according to package directions. Reserve ½ cup pasta water before draining.',
        'To skillet with tomatoes and feta, add cooked pasta, reserved pasta water, and lemon zest (if using) and stir until combined. Garnish with basil.',
      ],
      photo:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-210212-feta-pasta-007-ab-1613747029.jpg?crop=0.668xw:1.00xh;0.138xw,0&resize=768:*',
    },
    update: {},
  });

  await prisma.recipe.upsert({
    where: {
      id: 'cla2rkwu9000108mea0n5eamy',
    },
    create: {
      id: 'cla2rkwu9000108mea0n5eamy',
      userId: user.id,
      name: 'Chili Sin Carne',
      description:
        'Spicy, hearty and healthy. A simple chili recipe which substitutes meat with lentils. Can be served with rice or bread.',
      servings: 8,
      prepTime: 15,
      cookTime: 60,
      ingredients: {
        createMany: {
          data: [
            { name: 'Black Beans', quantity: 500, unit: 'gram', note: 'dried' },
            { name: 'Beluga Lentils', quantity: 500, unit: 'gram', note: 'dried' },
            { name: 'Diced Tomatoes', quantity: 4, unit: 'can' },
            { name: 'Corn', quantity: 1, unit: 'can' },
            { name: 'Bell Peppers', quantity: 4 },
            { name: 'Onion', quantity: 1 },
            { name: 'Cloves Garlic', quantity: 2 },
            { name: 'Chili Peppers' },
            { name: 'Tomato Paste', quantity: 5, unit: 'tablespoon' },
            { name: 'Canola Oil', quantity: 3, unit: 'tablespoon' },
            { name: 'Vegetable Broth' },
            { name: 'Salt' },
          ],
        },
      },
      directions: [
        'Put the beans in a large pot and cover them with plenty of water. Soak overnight (or at least 12 hours).',
        'Drain the soaked beans, fill the pot with fresh water and add the beans. Let it simmer.',
        'Bring the lentils to a boil in another pot with enough vegetable broth. Make sure the broth covers the lentils, otherwise add water. Let it simmer.',
        'While the beans and lentils are cooking, chop the bell peppers and onion. Mince the chili peppers and garlic cloves.',
        'Heat the oil in a large pot over medium heat. Add the onion, garlic and chili peppers, sauté until the onion is soft and translucent. Add the bell peppers and stir in the tomate paste. Sauté for 3 to 4 minutes or until the hot peppers soften.',
        'Add the corn and diced tomateos and let it simmer, stirring regularly.',
        'Once the lentils are soft and tender, drain the excess water and add the lentils to the large pot.',
        'Finally, once the beans are soft, add salt. Simmer for a few more minutes, then drain the excess water and add the beans to the large pot as well.',
        'Season with salt and chili powder if needed. Cover and continue to simmer over low heat for 20 minutes, stirring occasionally.',
      ],
      photo: 'https://vero.cooking/chilli.jpg',
    },
    update: {},
  });

  await prisma.recipe.upsert({
    where: {
      id: 'cla2rmjbq000208me2k3mf68b',
    },
    create: {
      id: 'cla2rmjbq000208me2k3mf68b',
      userId: user.id,
      name: 'One Bowl Chocolate Chip Banana Bread',
      link: 'https://tasty.co/recipe/one-bowl-chocolate-chip-banana-bread',
      description: 'This banana chocolate chip bread is super moist and tastes amazing!',
      servings: 6,
      prepTime: 10,
      cookTime: 45,
      ingredients: {
        createMany: {
          data: [
            { name: 'Ripe Bananas', quantity: 3 },
            { name: 'Butter', quantity: 1 / 3, unit: 'cup', note: 'melted' },
            { name: 'Sugar', quantity: 1 / 2, unit: 'cup' },
            { name: 'Egg', quantity: 1, note: 'beaten' },
            { name: 'Vanilla Extract', quantity: 1, unit: 'teaspoon' },
            { name: 'Baking Soda', quantity: 1, unit: 'teaspoon' },
            { name: 'Salt', note: 'to taste' },
            { name: 'All-purpose Flour', quantity: 1.5, unit: 'cup' },
            { name: 'Mini Chocolate Chips', quantity: 1 / 2, unit: 'cup' },
          ],
        },
      },
      directions: [
        'Preheat oven to 350˚F (180˚C).',
        'In a bowl, add the bananas and mash until smooth. Add in the melted butter and stir until well combined.',
        'Add the sugar, egg, vanilla, baking soda, salt, and flour, and stir until the batter is smooth.',
        'Add in the chocolate chips and pour the batter into a greased loaf pan. Top with additional chocolate chips.',
        'Bake for 50 minutes to an hour, or until a toothpick comes out clean.',
        'Cool completely before serving.',
        'Enjoy!',
      ],
      photo:
        'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/55ac7efd43d74a6ead6576b4bfb28d7e/FB_Syphus_BananaBread_v3.jpg?resize=600:*&output-format=auto&output-quality=auto',
    },
    update: {},
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
