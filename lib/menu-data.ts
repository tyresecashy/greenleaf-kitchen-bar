export type MenuItem = {
  name: string
  price: number
  desc?: string
  image?: string | null
  spicy?: boolean
  vegan?: boolean
  chefsPick?: boolean
  mostLoved?: boolean
  premium?: boolean
  signature?: boolean
}

export const featuredDishes = [
  {
    name: 'Rib Rack Platter',
    description: 'Slow-smoked BBQ ribs, glazed and fall-off-the-bone tender',
    note: 'Guest favourite',
    price: 'KES 1,200',
    category: 'Grills',
    badge: 'Most Loved',
    image: '/images/upscaled/greenleaf-rib-rack-platter.webp',
  },
  {
    name: 'Spiced Beef Wet Fry',
    description: 'Crispy beef strips with Kenyan spices, peppers and fresh herbs',
    note: 'Best with cocktails',
    price: 'KES 850',
    category: 'Grills',
    badge: "Chef's Pick",
    image: '/images/upscaled/greenleaf-beef-wet-fry-skillet.webp',
  },
  {
    name: 'The Good Life Platter',
    description: 'Ribs, beef fry, ugali and kachumbari for two',
    note: 'Perfect for sharing',
    price: 'KES 2,200',
    category: 'Grills',
    badge: 'For Sharing',
    image: '/images/upscaled/greenleaf-grilled-meat-closeup.webp',
  },
  {
    name: 'Signature Cocktails',
    description: 'Bright pours, cold glasses, and easy pairings for long GreenLeaf evenings',
    note: 'Great for groups',
    price: 'Happy Hour',
    category: 'Drinks',
    badge: 'Happy Hour Favourite',
    image: '/images/upscaled/greenleaf-cocktail-spicy-meal.webp',
  },
]

export const menuData: Record<string, MenuItem[]> = {
  starters: [
    { name: 'Chicken Wings', price: 750, desc: 'Crispy wings in house BBQ or buffalo sauce', spicy: true, image: '/images/upscaled/greenleaf-grilled-meat-closeup.webp' },
    { name: 'Avocado Salad', price: 450, desc: 'Fresh avo with cherry tomatoes and lemon dressing', vegan: true, image: '/images/upscaled/greenleaf-dinner-happy-hour-menu.webp' },
    { name: 'Calamari', price: 650, desc: 'Golden fried squid rings with tartare sauce', image: '/images/upscaled/greenleaf-cocktail-spicy-meal.webp' },
    { name: 'Soup of the Day', price: 350, desc: "Chef's daily selection. Ask your server.", image: '/images/upscaled/greenleaf-dinner-happy-hour-menu.webp' },
  ],
  mains: [
    { name: 'Coconut Fish & Ugali', price: 650, desc: 'Freshly caught fish in coconut sauce', chefsPick: true, image: '/images/upscaled/greenleaf-cocktail-spicy-meal.webp' },
    { name: 'Wet Fry Fish & Ugali', price: 600, desc: 'Wet fry fish with ugali and greens', image: '/images/upscaled/greenleaf-cocktail-spicy-meal.webp' },
    { name: 'Beef Stew & Rice', price: 550, desc: 'Slow-cooked beef with fluffy pilau rice, kachumbari and a Coke', image: '/images/upscaled/greenleaf-singleton-cocktail-meal.webp' },
    { name: 'Ugali & Chicken', price: 600, desc: 'Tender chicken stew with ugali dome, tomatoes and hibiscus juice', image: '/images/upscaled/greenleaf-cocktail-spicy-meal.webp' },
    { name: 'Chicken Curry & Chapati', price: 600, desc: 'Kenyan-style chicken curry, rich and aromatic', image: '/images/upscaled/greenleaf-cocktail-spicy-meal.webp' },
    { name: 'Beef Burger', price: 800, desc: 'Double patty, cheese, lettuce, tomato, house sauce', image: '/images/upscaled/greenleaf-grilled-meat-closeup.webp' },
    { name: 'Veggie Burger', price: 700, desc: 'Black bean patty with avocado and sprouts', vegan: true, image: '/images/upscaled/greenleaf-dinner-happy-hour-menu.webp' },
  ],
  grills: [
    { name: 'GreenLeaf Signature Ribs', price: 1200, desc: 'Slow-smoked BBQ ribs, glazed and fall-off-the-bone tender', mostLoved: true, image: '/images/upscaled/greenleaf-rib-rack-platter.webp' },
    { name: 'GreenLeaf Ribs (Full Rack)', price: 2200, desc: 'Full rack BBQ pork ribs, slow-smoked', mostLoved: true, image: '/images/upscaled/greenleaf-rib-rack-platter.webp' },
    { name: 'GreenLeaf Ribs (Half Rack)', price: 1200, desc: 'Half rack BBQ pork ribs', mostLoved: true, image: '/images/upscaled/greenleaf-rib-rack-platter.webp' },
    { name: 'Nyama Choma (500g)', price: 1000, desc: 'Traditional Kenyan roast meat, served with kachumbari', image: '/images/upscaled/greenleaf-grilled-meat-closeup.webp' },
    { name: 'Spiced Beef Fry', price: 850, desc: 'Crispy beef strips with Kenyan spices, peppers and fresh herbs', chefsPick: true, image: '/images/upscaled/greenleaf-beef-wet-fry-skillet.webp' },
    { name: 'Mixed Grill Platter', price: 2800, desc: 'Ribs, chicken, beef, sausage for 2 people', image: '/images/upscaled/greenleaf-grilled-meat-closeup.webp' },
  ],
  seafood: [
    { name: 'Grilled Tilapia (Whole)', price: 950, desc: 'Whole tilapia, grilled with herbs and lemon', image: '/images/upscaled/greenleaf-cocktail-spicy-meal.webp' },
    { name: 'Fried Tilapia & Chips', price: 850, desc: 'Golden fried tilapia with crispy chips', image: '/images/upscaled/greenleaf-cocktail-spicy-meal.webp' },
    { name: 'Prawn Skewers', price: 1100, desc: 'Juicy prawns grilled on charcoal skewers', image: '/images/upscaled/greenleaf-cocktail-spicy-meal.webp' },
    { name: 'Coconut Prawn Curry', price: 1200, desc: 'Prawns in rich coconut and tomato base', image: '/images/upscaled/greenleaf-cocktail-spicy-meal.webp' },
  ],
  vegetarian: [
    { name: 'Avocado Salad', price: 450, desc: 'Fresh avo with cherry tomatoes and lemon dressing', vegan: true, image: '/images/upscaled/greenleaf-dinner-happy-hour-menu.webp' },
    { name: 'Veggie Burger', price: 700, desc: 'Black bean patty with avocado and sprouts', vegan: true, image: '/images/upscaled/greenleaf-dinner-happy-hour-menu.webp' },
  ],
  cocktails: [
    { name: 'Greenleaf Margarita', price: 650, desc: 'Tequila, triple sec, lime, house green herb mix', signature: true, image: '/images/upscaled/greenleaf-drinks-menu-card.webp' },
    { name: 'Spicy Margarita', price: 650, desc: 'Tequila, chilli, citrus, tajin rim', spicy: true, image: '/images/upscaled/greenleaf-drinks-menu-card.webp' },
    { name: 'Bold & Boozy Margarita', price: 700, desc: 'Double shot tequila margarita, no holding back', image: '/images/upscaled/greenleaf-drinks-menu-card.webp' },
    { name: 'The Dawa Flower', price: 600, desc: 'Classic Kenyan dawa with honey, lime, and vodka', signature: true, image: '/images/upscaled/greenleaf-drinks-menu-card.webp' },
    { name: 'Woodsman', price: 650, desc: 'Bourbon, maple, bitters, smoked orange peel', image: '/images/upscaled/greenleaf-drinks-menu-card.webp' },
    { name: 'Gin Basil Smash', price: 600, desc: 'Fresh basil, gin, lemon, simple syrup', image: '/images/upscaled/greenleaf-drinks-menu-card.webp' },
    { name: 'Mojito', price: 580, desc: 'Rum, fresh mint, lime, soda', image: '/images/upscaled/greenleaf-drinks-menu-card.webp' },
  ],
  mocktails: [
    { name: 'Passion Twist', price: 350, desc: 'Fresh passion, ginger, mint, soda', image: '/images/upscaled/greenleaf-drinks-menu-card.webp' },
    { name: 'Watermelon Cooler', price: 320, desc: 'Blended watermelon, lime, basil', image: '/images/upscaled/greenleaf-drinks-menu-card.webp' },
    { name: 'Virgin Dawa', price: 300, desc: 'Honey, lime, ginger beer, zero alcohol', image: '/images/upscaled/greenleaf-drinks-menu-card.webp' },
  ],
  beerAndWine: [
    { name: 'Tusker Lager (500ml)', price: 250, image: '/images/upscaled/greenleaf-drinks-menu-card.webp' },
    { name: 'Guinness (500ml)', price: 280, image: '/images/upscaled/greenleaf-drinks-menu-card.webp' },
    { name: 'Heineken (330ml)', price: 300, image: '/images/upscaled/greenleaf-drinks-menu-card.webp' },
    { name: 'House Red Wine (glass)', price: 450, image: '/images/upscaled/greenleaf-drinks-menu-card.webp' },
    { name: 'House White Wine (glass)', price: 450, image: '/images/upscaled/greenleaf-drinks-menu-card.webp' },
    { name: 'House Wine (bottle)', price: 2200, image: '/images/upscaled/greenleaf-drinks-menu-card.webp' },
  ],
  spirits: [
    { name: 'Singleton 15yr (dram)', price: 800, premium: true, image: '/images/upscaled/greenleaf-drinks-menu-card.webp' },
    { name: 'Johnnie Walker Black (dram)', price: 600, image: '/images/upscaled/greenleaf-drinks-menu-card.webp' },
    { name: 'Jameson Irish Whiskey (dram)', price: 500, image: '/images/upscaled/greenleaf-drinks-menu-card.webp' },
    { name: 'Smirnoff Vodka (shot)', price: 300, image: '/images/upscaled/greenleaf-drinks-menu-card.webp' },
    { name: "Gilbey's Gin (shot)", price: 300, image: '/images/upscaled/greenleaf-drinks-menu-card.webp' },
  ],
  desserts: [
    { name: 'Chocolate Lava Cake', price: 450, desc: 'Warm chocolate cake, melting centre, vanilla ice cream', image: '/images/upscaled/greenleaf-dinner-happy-hour-menu.webp' },
    { name: 'Fruit Salad', price: 300, desc: 'Seasonal tropical fruits', vegan: true, image: '/images/upscaled/greenleaf-dinner-happy-hour-menu.webp' },
    { name: 'Ice Cream (2 scoops)', price: 280, desc: 'Chocolate, vanilla, or strawberry', image: '/images/upscaled/greenleaf-dinner-happy-hour-menu.webp' },
  ],
}

export const categories = [
  'All',
  'Starters',
  'Mains',
  'Grills & BBQ',
  'Seafood',
  'Vegetarian',
  'Cocktails',
  'Mocktails',
  'Beer & Wine',
  'Whisky & Spirits',
  'Desserts',
]
