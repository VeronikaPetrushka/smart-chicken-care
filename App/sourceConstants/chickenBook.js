const chickenBook = [
    {
        category: 'Housing',
        subTitle: 'Everything about coops, setup, and conditions.',
        items: [
            {
                bookImage: require('../sourceAssets/chickenBook/chickenCoop.png'),
                name: 'Chicken Coop',
                hook: 'What is the ideal size for a coop housing 10 chickens? Learn more!',
                content: [
                    {
                        text: '❓ What is the ideal size for a coop housing 10 chickens? Learn more!A well-designed chicken coop is essential for your flock’s health and productivity.'
                    },
                    {
                        text: ' Recommended Coop Sizes ✅ For 10 chickens, you should have at least 40 sq ft of coop space (🐔 4 sq ft per bird) and 100 sq ft of outdoor run space (🌿 10 sq ft per bird).',
                    },
                    {
                        text: '🛠️ Materials for Building',
                        list: [
                            '🪵 Wood (durable but needs treatment against moisture)',
                            '🏗️ Metal (long-lasting but may get hot in summer)',
                            '🏠 Plastic (lightweight and easy to clean)'
                        ]
                    },
                    {
                        text: '✅ Good vs. ❌ Bad Coop Designs ✔️ Good: Proper ventilation 🌬️, predator-proof 🔒, easy access for cleaning 🧹'
                    },
                    {
                        text: '❌ Bad: Overcrowded 🚫, poorly ventilated 😷, weak structure ⚠️🏗️ Step-by-Step Setup',
                        list: [
                            'Choose a dry, elevated location ⛰️',
                            'Build a strong frame with a sloped roof 🏠',
                            'Install nesting boxes and roosting bars 🥚🪵',
                            'Ensure ventilation 🌬️ and secure the door with latches 🔐'
                        ]
                    }
                ]
            },
            {
                bookImage: require('../sourceAssets/chickenBook/RoostingAreas.png'),
                name: 'Nesting & Roosting Areas',
                hook: 'Where should chickens sleep and lay eggs? Essential tips inside.',
                content: [
                    {
                        text: '❓ Where should chickens sleep and lay eggs? Essential tips inside!',
                    },
                    {
                        text: '🛏️ Setting Up Roosting Bars & Nesting Boxes',
                        list: [
                            'Roosting bars: Place 2 feet off the ground with at least 8 inches of space per bird.',
                            'Nesting boxes: 12x12 inches per box, filled with soft bedding like straw 🌾 or pine shavings 🌲.'
                        ]
                    },
                    {
                        text: '⚠️ Common Mistakes & Fixes',
                        list: [
                            '❌ Mistake: Nesting boxes placed too high → ✅ Fix: Keep them lower than roosts 📉.',
                            '❌ Mistake: Overcrowding → ✅ Fix: Provide 1 nesting box per 4 hens 🐔.',
                            '❌ Mistake: Lack of privacy → ✅ Fix: Add curtains or dividers 🏡.'
                        ]
                    }
                ]
            },
            {
                bookImage: require('../sourceAssets/chickenBook/Lighting.png'),
                name: 'Lighting & Ventilation',
                hook: 'How do lighting and airflow affect chicken health? Find out!',
                content: [
                    {
                        text: '❓ How do lighting and airflow affect chicken health? Find out!',
                    },
                    {
                        text: '💡 Lighting for Egg Production',
                    },
                    {
                        text: '🐔 Chickens need 14-16 hours of light daily for optimal laying.',
                    },
                    {
                        text: '✨ Use LED or incandescent bulbs 💡 in winter ❄️',
                    },
                    {
                        text: '🌬️ Ventilation Tips',
                        list: [
                            '☀️ Summer: Large mesh windows 🪟 to increase airflow',
                            '❄️ Winter: Small, elevated vents 🌡️ to prevent moisture buildup.',
                            '📍 Placement: Avoid direct drafts but allow fresh air circulation.'
                        ]
                    }
                ]
            },
            {
                bookImage: require('../sourceAssets/chickenBook/Bedding.png'),
                name: 'Bedding',
                hook: 'Which bedding keeps your coop clean and odor-free? Discover options.',
                content: [
                    {
                        text: '❓ Which bedding keeps your coop clean and odor-free? Discover options!',
                    },
                    {
                        text: '🛏️ Best Bedding Materials',
                        list: [
                            '🌾 Straw: Affordable but requires frequent changes.',
                            '🪵 Wood shavings: Absorbs moisture and controls odor well.',
                            '🏖️ Sand: Easy to clean but needs occasional sifting.'
                        ]
                    },
                    {
                        text: '🔄 Deep Litter Method',
                    },
                    {
                        text: '♻️ A composting system where bedding builds up over time, reducing the need for frequent cleaning 🧹.',
                    },
                ]
            }
        ]
    },
    {
        category: 'Feeding',
        subTitle: 'Types of feed, supplements, and nutrition schedules.',
        items: [
            {
                bookImage: require('../sourceAssets/chickenBook/grain.png'),
                name: 'Grain-Based Feed',
                hook: 'Which grains provide energy and improve egg production? Find out more!',
                content: [
                    {
                        text: '❓ Which grains provide energy and improve egg production? Find out more!',
                        list: [
                            '🌽 Corn: High in energy ⚡ but low in protein',
                            '🌾 Wheat: Balanced nutrition with good digestibility.',
                            '🌿 Barley: Fiber-rich but should be fed with protein sources.'
                        ]
                    }
                ]
            },
            {
                bookImage: require('../sourceAssets/chickenBook/proteinSources.png'),
                name: 'Protein Sources',
                hook: 'How much protein do chickens need? See the best sources!',
                content: [
                    {
                        text: '❓ How much protein do chickens need? See the best sources!',
                        list: [
                            '🐣 Chicks: 18-22% protein.',
                            '🥚 Laying hens: 16-18% protein.',
                            '🍽️ Sources: Mealworms 🪲, fish meal 🐟, soybean 🌱.'
                        ]
                    }
                ]
            },
            {
                bookImage: require('../sourceAssets/chickenBook/vitamins.png'),
                name: 'Vitamins & Supplements',
                hook: 'Essential vitamins to keep chickens healthy. See the full list.',
                content: [
                    {
                        text: '❓ Essential vitamins to keep chickens healthy. See the full list!',
                        list: [
                            '🥬 Vitamin A: Eye health 👀 (found in leafy greens 🥗).',
                            '☀️ Vitamin D: Bone strength 🦴 (sunlight 🌞 or supplements 💊).',
                            '🥚 Calcium: Eggshell quality 🏵️ (crushed oyster shells 🦪).'
                        ]
                    }
                ]
            },
            {
                bookImage: require('../sourceAssets/chickenBook/drinkingSystem.png'),
                name: 'Water & Drinking Systems',
                hook: 'How to keep drinking water clean and fresh? Best tips inside.',
                content: [
                    {
                        text: '❓ How to keep drinking water clean and fresh? Best tips inside!',
                        list: [
                            '🐔 Daily water requirement: 500ml per hen.',
                            '🚰 Best waterers: Nipples (cleaner) vs. cups (easier access).',
                            '🧼 Maintenance: Clean weekly to prevent algae 🦠.'
                        ]
                    }
                ]
            }
        ]
    },
    {
        category: 'Health',
        subTitle: 'Diseases, prevention, and chicken care.',
        items: [
            {
                bookImage: require('../sourceAssets/chickenBook/desease.png'),
                name: 'Common Diseases',
                hook: 'How to recognize if a chicken is sick? Early signs and prevention.',
                content: [
                    {
                        text: '❓ How to recognize if a chicken is sick? Early signs and prevention!',
                        list: [
                            '🤧 Respiratory infections: Sneezing, wheezing 😷',
                            '🦟 Parasites: Feather loss, weight loss ⚖️.',
                            '🧼 Prevention: Quarantine new birds 🚧, keep the coop clean 🧹.'
                        ]
                    }
                ]
            },
            {
                bookImage: require('../sourceAssets/chickenBook/vaccination.png'),
                name: 'Vaccination',
                hook: 'Which vaccines are necessary? Check the full list.',
                content: [
                    {
                        text: '❓ Which vaccines are necessary? Check the full list!',
                        list: [
                            '🐣 Marek’s Disease: Given at hatch 🏥.',
                            '💉 Newcastle Disease: Annual booster 📆.',
                            '🦠 Fowl Pox: If outbreaks occur in your area 🌍'
                        ]
                    }
                ]
            },
            {
                bookImage: require('../sourceAssets/chickenBook/symptomps.png'),
                name: 'Symptoms & Diagnosis',
                hook: 'Does your chicken look unwell? Compare symptoms here.',
                content: [
                    {
                        text: '❓ Does your chicken look unwell? Compare symptoms here!',
                        list: [
                            '😴 Lethargy: Possible vitamin deficiency or illness 💊.',
                            '🔴 Pale combs: Could indicate anemia 🩸 or parasites 🦟.',
                            '💩 Runny droppings: Check diet 🍽️ and hydration 💧.'
                        ]
                    }
                ]
            },
            {
                bookImage: require('../sourceAssets/chickenBook/chickCare.png'),
                name: 'Chick Care',
                hook: 'New chicks? Learn how to raise them properly.',
                content: [
                    {
                        text: '🐣 New chicks? Learn how to raise them properly!',
                        list: [
                            '🌡️ Brooder temp: 95°F for week 1, reduce 5°F weekly.',
                            '🍽️ Feed: Chick starter 🐥 (high protein, balanced nutrition).',
                            '️ Preventing chick mortality: Dry bedding 🌾, proper heat 🔥, clean water 💧'
                        ]
                    }
                ]
            }
        ]
    }
];

export default chickenBook;