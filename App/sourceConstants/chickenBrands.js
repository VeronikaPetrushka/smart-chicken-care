const chickenBrands = [
    {
        category: 'Egg-Laying',
        items: [
            {
                name: 'Leghorn',
                hook: 'Up to 300 eggs per year, lightweight and active.',
                brandImage: require('../sourceAssets/chickenBrands/Leghorn.png'),
                content: 'Fast, efficient, and highly productive – the Leghorn is the superstar of egg-laying chickens. With its slim body, active nature, and striking white feathers, this breed lays up to 300 eggs per year! Originally from Italy, Leghorns thrive in warm climates and rarely go broody, making them a perfect choice for consistent egg production. If you need a chicken that delivers without fuss, the Leghorn is your go-to!',
                compare: [
                    '📏 Size: Small, 1.5–2 kg',
                    '🥚 Egg Production: Up to 300 eggs/year',
                    '🌡 Climate Tolerance: Prefers warm climates ☀️',
                    '😌 Maintenance Level: Low – independent and active 🚀'
                ],
                best: '💡 Best for: Maximum egg production with minimal care.'
            },
            {
                name: 'Russian White',
                hook: 'Hardy and lays eggs year-round.',
                brandImage: require('../sourceAssets/chickenBrands/RussianWhite.png'),
                content: 'Tough, reliable, and ready to lay eggs in any season, the Russian White is a hardy breed developed in the Soviet Union. This chicken can handle cold climates while maintaining a steady egg production year-round. With its snow-white feathers and strong immunity, it’s a great choice for both backyard farmers and larger operations. If you need a chicken that doesn’t stop laying, Russian White won’t disappoint.',
                compare: [
                    '📏 Size: Medium, 1.8–2.2 kg',
                    '🥚 Egg Production: Consistent year-round',
                    '🌡 Climate Tolerance: Extremely cold-resistant 🏔',
                    '😌 Maintenance Level: Medium – thrives in various conditions 🌍'
                ],
                best: '💡 Best for: Cold climates and steady egg supply.'
            },
            {
                name: 'ISA Brown',
                hook: 'Compact but lays large eggs.',
                brandImage: require('../sourceAssets/chickenBrands/ISABrown.png'),
                content: 'Don’t be fooled by its small size – the ISA Brown lays big eggs! This hybrid breed is known for its high egg yield and friendly nature. It’s easy to manage, making it perfect for beginners. If you want a low-maintenance but highly productive chicken, ISA Brown is the answer.',
                compare: [
                    '📏 Size: Small, 1.5–1.8 kg',
                    '🥚 Egg Production: High – up to 320 eggs/year',
                    '🌡 Climate Tolerance: Adaptable to different conditions 🌿',
                    '😌 Maintenance Level: Low – easy to manage 🏡'
                ],
                best: '💡 Best for: Beginners looking for a friendly, productive chicken.'
            },
            {
                name: 'Lohmann Brown',
                hook: 'Farmer’s favorite, up to 320 eggs per year.',
                brandImage: require('../sourceAssets/chickenBrands/LohmannBrown.png'),
                content: 'Want a breed that gives you up to 320 eggs per year? The Lohmann Brown is one of the most popular layers in the world. These chickens are calm, adaptable, and efficient, making them perfect for farms and backyard coops. If you need a non-stop egg producer with a gentle nature, look no further than the Lohmann Brown!',
                compare: [
                    '📏 Size: Medium, 1.8–2.3 kg',
                    '🥚 Egg Production: Up to 320 eggs/year',
                    '🌡 Climate Tolerance: Adapts well to most environments ☀️❄️',
                    '😌 Maintenance Level: Low – calm and easygoing 🐥'
                ],
                best: '💡 Best for: Reliable and high egg production for farms and backyards.'
            },
        ]
    },
    {
        category: 'Meat',
        items: [
            {
                name: 'Cochin',
                hook: 'Large, fluffy birds weighing up to 5 kg.',
                brandImage: require('../sourceAssets/chickenBrands/Cochin.png'),
                content: 'A walking ball of feathers, the Cochin is not only beautiful but also massive, reaching up to 5 kg (11 lbs). Originally from China, this breed is cold-resistant and has a calm temperament, making it a great backyard companion. Though they’re not the fastest-growing breed, their meat is flavorful and tender. Plus, who wouldn’t want a giant fluffy chicken in their yard?',
                compare: [
                    '📏 Size: Very Large, 4–5 kg',
                    '🥚 Egg Production: Low, 120 eggs/year',
                    '🌡 Climate Tolerance: Cold-resistant ❄️',
                    '😌 Maintenance Level: Medium – needs space and care 🌾'
                ],
                best: '💡 Best for: Meat production and backyard decoration.'
            },
            {
                name: 'Cornish',
                hook: 'The main breed in industrial meat production.',
                brandImage: require('../sourceAssets/chickenBrands/Cornish.png'),
                content: 'The Cornish is the backbone of the modern meat industry. These birds grow fast and heavy, developing strong, muscular bodies in just a few months. With their broad chest and short legs, Cornish chickens produce juicy, high-quality meat. If you’re looking for the ultimate meat bird, this is the breed that fills most supermarket shelves!',
                compare: [
                    '📏 Size: Large, 3.5–4.5 kg',
                    '🥚 Egg Production: Very low, 100 eggs/year',
                    '🌡 Climate Tolerance: Prefers warm conditions ☀️',
                    '😌 Maintenance Level: High – bred for fast growth ⚡'
                ],
                best: '💡 Best for: Fast meat production and commercial farming.'
            },
            {
                name: 'Brahma',
                hook: 'Cold-resistant, weighing up to 4.5 kg.',
                brandImage: require('../sourceAssets/chickenBrands/Brahma.png'),
                content: 'Originally from Asia, the Brahma is a massive breed weighing up to 4.5 kg (10 lbs). Its dense plumage makes it highly resistant to cold, and its gentle personality makes it a favorite among backyard chicken keepers. Brahmas grow slower than Cornish but produce high-quality meat, making them a great option for small farms.',
                compare: [
                    '📏 Size: Large, 4–4.5 kg',
                    '🥚 Egg Production: Medium, 150–180 eggs/year',
                    '🌡 Climate Tolerance: Excellent for cold regions 🏔',
                    '😌 Maintenance Level: Medium – docile and easy to handle 🏡'
                ],
                best: '💡 Best for: Farms in cold areas, both for meat and eggs.'
            },
            {
                name: 'Jersey Giant',
                hook: 'The largest breed, reaching up to 6 kg.',
                brandImage: require('../sourceAssets/chickenBrands/JerseyGiant.png'),
                content: 'If you’re looking for the biggest chicken in the world, meet the Jersey Giant! This breed can reach 6 kg (13 lbs) and was originally bred to replace turkeys. While they take longer to mature, their size and high meat quality make them an impressive addition to any farm. If you want a giant yet friendly chicken, the Jersey Giant is your perfect match.',
                compare: [
                    '📏 Size: The biggest! 5–6 kg',
                    '🥚 Egg Production: Medium, 150–200 eggs/year',
                    '🌡 Climate Tolerance: Hardy, does well in cold 🥶',
                    '😌 Maintenance Level: Medium – requires more food 🥦'
                ],
                best: '💡 Best for: Raising massive chickens with good egg production.'
            },
        ]
    },
    {
        category: 'Ornamental',
        items: [
            {
                name: 'Pavlovskaya',
                hook: 'An ancient Russian breed with a fluffy crest.',
                brandImage: require('../sourceAssets/chickenBrands/Pavlovskaya.png'),
                content: 'One of the oldest Russian breeds, the Pavlovskaya is famous for its unique fluffy crest, feathered legs, and cold resistance. These chickens look like royalty in the coop, with their extravagant plumage and elegant posture. If you want a rare, historical breed that stands out, the Pavlovskaya is a must-have!',
                compare: [
                    '📏 Size: Small, 1.5–2 kg',
                    '🥚 Egg Production: Medium, 150 eggs/year',
                    '🌡 Climate Tolerance: Cold-resistant ❄️',
                    '😌 Maintenance Level: Medium – requires proper care 🎭'
                ],
                best: '💡 Best for: Rare breed collectors and cold regions.'
            },
            {
                name: 'Silkie',
                hook: 'Soft, fluffy, and very friendly.',
                brandImage: require('../sourceAssets/chickenBrands/Silkie.png'),
                content: 'With its silky, fur-like feathers and black skin, the Silkie is one of the most unique chicken breeds in the world. Originally from China, these birds are gentle, friendly, and perfect as pets. Though they don’t lay many eggs, they make up for it with their sweet personality and exotic looks. If you want a fluffy companion rather than a farm bird, the Silkie is the perfect choice.',
                compare: [
                    '📏 Size: Small, 1.2–1.5 kg',
                    '🥚 Egg Production: Low, 100 eggs/year',
                    '🌡 Climate Tolerance: Prefers warm, dry areas ☀️',
                    '😌 Maintenance Level: High – needs extra care 💅'
                ],
                best: '💡 Best for: People looking for a friendly, unique pet.'
            },
            {
                name: 'Phoenix',
                hook: 'A Japanese breed with a tail up to 3 meters long!',
                brandImage: require('../sourceAssets/chickenBrands/Phoenix.png'),
                content: 'Imagine a chicken with a 3-meter-long tail – that’s the Phoenix, a Japanese breed bred for its majestic, flowing plumage. These birds require special care, but their graceful appearance makes them a favorite among poultry enthusiasts. If you want a show-stopping chicken that looks like it belongs in a legend, the Phoenix is for you!',
                compare: [
                    '📏 Size: Medium, 2–2.5 kg',
                    '🥚 Egg Production: Low, 100 eggs/year',
                    '🌡 Climate Tolerance: Requires warm, mild climates 🍃',
                    '😌 Maintenance Level: High – tail care is essential 🦚'
                ],
                best: '💡 Best for: Fancy breed lovers and bird exhibitions.'
            },
            {
                name: 'Padovana',
                hook: 'Known for its spectacular crest instead of a comb.',
                brandImage: require('../sourceAssets/chickenBrands/Padovana.png'),
                content: 'This Italian breed is instantly recognizable by its luxurious feathered crest, which replaces a traditional comb. The Padovana is a true eye-catcher, with a quirky yet elegant look. It’s not just about beauty – these birds are hardy and adaptable, making them great for backyard flocks. If you want a chicken that looks like a fashion icon, the Padovana is the perfect choice!',
                compare: [
                    '📏 Size: Small, 1.5–2 kg',
                    '🥚 Egg Production: Low, 120 eggs/year',
                    '🌡 Climate Tolerance: Moderate, avoids extreme cold 🌡',
                    '😌 Maintenance Level: Medium – needs regular grooming 💇‍♂️'
                ],
                best: '💡 Best for: Those who want a stylish, quirky backyard chicken.'
            },
        ]
    }
];

export default chickenBrands;