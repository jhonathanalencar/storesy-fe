import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
  {
    product_id: '7ddfb3ef-ec05-4f8c-8097-6d460deaf853',
    name: 'HarmonyPod Wireless Earbuds',
    slug: 'harmonypod-wireless-earbuds',
    price: 6999,
    description:
      'Immerse yourself in unparalleled audio bliss with HarmonyPod Wireless Earbuds. These sleek and compact earbuds deliver crystal-clear sound and deep bass, providing an immersive listening experience. With touch controls, a secure fit, and long-lasting battery life, HarmonyPod is the perfect companion for music lovers on the go. Elevate your auditory journey and embrace the harmony of superior sound quality with HarmonyPod Wireless Earbuds.',
    summary:
      'Immerse yourself in unparalleled audio bliss with HarmonyPod Wireless Earbuds. These sleek and compa...',
    categories: ['technology', 'headphones'],
    image_url:
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    is_deal: true,
    discount_percent: 0.3,
    quantity_available: 4,
    created_at: new Date('2023-12-10T10:00:00.000'),
    updated_at: new Date('2023-12-10T10:00:00.000'),
    released_date: new Date('2023-12-13T10:00:00.000'),
  },
  {
    product_id: '6abe914d-31ae-4a77-b2da-c1333402aaa0',
    name: 'EcoFresh Bamboo Toothbrush Set',
    slug: 'ecofresh-bamboo-toothbrush-set',
    price: 1499,
    description:
      'Make your daily routine eco-friendly with the EcoFresh Bamboo Toothbrush Set. Crafted from sustainably sourced bamboo, these toothbrushes offer a stylish and environmentally conscious alternative to traditional plastic brushes. The set includes four brushes with charcoal-infused bristles for a refreshing clean. Upgrade your oral care routine while contributing to a greener planet with the EcoFresh Bamboo Toothbrush Set.',
    summary:
      'Make your daily routine eco-friendly with the EcoFresh Bamboo Toothbrush Set. Crafted from...',
    categories: ['sustainability', 'toothbrush', 'oral care'],
    image_url:
      'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    is_deal: true,
    discount_percent: 0.05,
    quantity_available: 10,
    created_at: new Date('2023-12-10T10:00:00.000'),
    updated_at: new Date('2023-12-10T10:00:00.000'),
    released_date: new Date('2023-12-13T10:00:00.000'),
  },
  {
    product_id: 'cabce1b7-88c9-411d-855d-02ec41c19b3f',
    name: 'GloFit Smart Fitness Tracker',
    slug: 'glofit-smart-fitness-tracker',
    price: 7999,
    description:
      'Revolutionize your fitness journey with the GloFit Smart Fitness Tracker. Packed with advanced features, this sleek wearable is your personal health companion. Track your steps, monitor heart rate, analyze sleep patterns, and receive real-time notifications seamlessly. With a vibrant touch display and water-resistant design, the GloFit ensures you stay connected and motivated throughout your day. Elevate your fitness experience and embrace a healthier, more informed lifestyle with the GloFit Smart Fitness Tracker.',
    summary:
      'Revolutionize your fitness journey with the GloFit Smart Fitness Tracker. Packed with advanced features...',
    categories: ['technology', 'fitness', 'digital watch'],
    image_url:
      'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    is_deal: false,
    discount_percent: 0,
    quantity_available: 12,
    created_at: new Date('2023-12-10T10:00:00.000'),
    updated_at: new Date('2023-12-10T10:00:00.000'),
    released_date: new Date('2023-12-13T10:00:00.000'),
  },
  {
    product_id: '953960a8-a883-42ce-a6ce-2f49f3024cf3',
    name: 'TechPro Plus Wireless Charging Station',
    slug: 'techpro-plus-wireless-charging-station',
    price: 7999,
    description:
      "Unleash the future of charging with the TechPro Plus Wireless Charging Station. This cutting-edge device combines sleek design with high-tech functionality, offering fast and efficient wireless charging for your essential gadgets. With multiple charging pads and universal compatibility, it's a versatile solution for your smartphone, smartwatch, and earbuds. Elevate your charging experience and declutter your space with the TechPro Plus Wireless Charging Station — where innovation meets convenience. Act fast, as only 150 units are available!",
    summary:
      'Unleash the future of charging with the TechPro Plus Wireless Charging Station. This cutting-edge device combines...',
    categories: ['technology', 'charger', 'electronics'],
    image_url:
      'https://images.unsplash.com/photo-1615526675250-dbe5d4302ae0?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    is_deal: false,
    discount_percent: 0,
    quantity_available: 150,
    created_at: new Date('2023-12-10T10:00:00.000'),
    updated_at: new Date('2023-12-10T10:00:00.000'),
    released_date: new Date('2023-12-13T10:00:00.000'),
  },
  {
    product_id: 'a6781dd8-d185-43bb-a323-b6c6c310ae3b',
    name: 'EcoBlend Organic Tea Sampler',
    slug: 'ecoblend-organic-tea-sampler',
    price: 2999,
    description:
      'Savor the finest organic teas with our EcoBlend Organic Tea Sampler. This exquisite set features a curated selection of premium, sustainably sourced teas that promise a journey of flavors. From soothing chamomile to robust black tea, each blend is carefully chosen to elevate your tea-drinking experience. Limited to 300 sets, embrace the art of tea with the EcoBlend Organic Tea Sampler and treat your senses to a symphony of natural and delightful aromas.',
    summary:
      'Savor the finest organic teas with our EcoBlend Organic Tea Sampler. This exquisite set features a curated selection...',
    categories: ['tea', 'organic', 'healthy'],
    image_url:
      'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    is_deal: false,
    discount_percent: 0,
    quantity_available: 300,
    created_at: new Date('2023-12-10T10:00:00.000'),
    updated_at: new Date('2023-12-10T10:00:00.000'),
    released_date: new Date('2023-12-13T10:00:00.000'),
  },
  {
    product_id: '8d3d32e7-f8a6-4623-a8a4-15fce9cdbf41',
    name: 'SereneSound Noise-Canceling Headphones',
    slug: 'serenesound-noise-canceling-headphones',
    price: 12999,
    description:
      'Immerse yourself in a world of tranquility with the SereneSound Noise-Canceling Headphones. Designed for supreme comfort and exceptional sound quality, these headphones transport you to a realm of pure audio bliss. With advanced noise-canceling technology, you can escape the hustle and bustle of the world around you. Limited to just 100 units, the SereneSound headphones redefine your listening experience. Elevate your auditory journey and secure your pair now for a serene escape into music like never before.',
    summary:
      'Immerse yourself in a world of tranquility with the SereneSound Noise-Canceling Headphones. Designed for supreme...',
    categories: ['electronics', 'headphones', 'technology'],
    image_url:
      'https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    is_deal: false,
    discount_percent: 0,
    quantity_available: 100,
    created_at: new Date('2023-12-10T10:00:00.000'),
    updated_at: new Date('2023-12-10T10:00:00.000'),
    released_date: new Date('2023-12-13T10:00:00.000'),
  },
  {
    product_id: 'f2d3c435-dcbe-4901-849a-0c8ce4902391',
    name: 'BioHarmony Plant-Based Protein Powder',
    slug: 'bioharmony-plant-based-protein-powder',
    price: 3999,
    description:
      'Fuel your body with the goodness of BioHarmony Plant-Based Protein Powder. This nutritional powerhouse combines premium plant proteins for a delicious and complete source of essential amino acids. Perfect for post-workout recovery or as a daily supplement, BioHarmony supports your active lifestyle. With only 250 units available, grab your stash of this delectable protein powder and embrace the harmony of nourishing your body naturally.',
    summary:
      'Fuel your body with the goodness of BioHarmony Plant-Based Protein Powder. This nutritional powerhouse combines premium plant proteins...',
    categories: ['healthy', 'protein-shake', 'natural'],
    image_url:
      'https://images.unsplash.com/photo-1622485831129-b820c2891f4e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    is_deal: false,
    discount_percent: 0,
    quantity_available: 50,
    created_at: new Date('2023-12-10T10:00:00.000'),
    updated_at: new Date('2023-12-10T10:00:00.000'),
    released_date: new Date('2023-12-13T10:00:00.000'),
  },
];

async function run() {
  await prisma.cartItem.deleteMany();
  await prisma.product.deleteMany();
  await prisma.cart.deleteMany();

  await prisma.product.createMany({
    data: products,
  });
}

run()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
