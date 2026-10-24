/* ДОДАВАЙ ТОВАРИ ТІЛЬКИ В ЦЬОМУ ФАЙЛІ. Фото зберігай у папці assets. */
const INSTAGRAM_USERNAME = "leo_gold"; // без символу @
const products = [{
        id: "leo-warm",
        name: "LEO Warm",
        category: "Костюм",
        price: 2190,
        seasons: ["осінь", "зима"],
        description: "Теплий костюм вільного крою для прохолодних днів. Комфортна посадка та лаконічний силует на кожен день.",
        material: "Тринитка з начосом",
        madeIn: "Україна",
        care: "Прання при 30°C, навиворіт",
        sizes: ["XS-S", "S-M", "M-L", "L-XL", "XL-2XL", "2XL-3XL", "Індивідуальне виробництво"],
        colors: [{
                name: "Шоколадний",
                hex: "#54382d",
                photos: ["image/LWbrowm1.webp", "image/LWbrowm2.webp", "image/LWbrowm3.webp"]
            },
            {
                name: "Чорний",
                hex: "#222222",
                photos: ["image/LWblack1.webp", "image/LWblack2.webp", "image/LWblack3.webp"]
            },
            {
                name: "Пісочний",
                hex: "#d3c2a9",
                photos: ["image/LWpis1.webp", "image/LWpis2.webp", "image/LWpis3.webp",]
            },
            {
                name: "Темно-зелений",
                hex: "#354a3d",
                photos: ["image/LWgreen2.webp", "image/LWgreen3.webp", "image/LWgreen1.webp"]
            }
        ]
    },
    {
        id: "leo-vel",
        name: "LEO VEL",
        category: "Худі",
        price: 1390,
        seasons: ["весна", "осінь"],
        description: "Базове худі в oversize стилі. Легко поєднується з повсякденним гардеробом.",
        material: "Велюрова тканина",
        madeIn: "Україна",
        care: "Прання при 30°C, навиворіт",
        sizes: ["XS", "S", "M", "L", "XL", "2XL"],
        colors: [{
                name: "Мокко",
                hex: "#9b7966",
                photos: ["assets/placeholder-mocha.svg", "assets/placeholder-chocolate.svg"]
            },
            {
                name: "Чорний",
                hex: "#222222",
                photos: ["assets/placeholder-black.svg"]
            },
            {
                name: "Рожевий",
                hex: "#d7a7ad",
                photos: ["assets/placeholder-pink.svg"]
            }
        ]
    },
    {
        id: "ignis",
        name: "IGNIS",
        category: "Костюм",
        price: 1890,
        seasons: ["осінь", "зима"],
        description: "Зручна модель для комфортних образів у прохолодну погоду.",
        material: "Фліс",
        madeIn: "Україна",
        care: "Прання при 30°C, навиворіт",
        sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
        colors: [{
            name: "Графіт",
            hex: "#55565a",
            photos: ["assets/placeholder-graphite.svg"]
        }, {
            name: "Чорний",
            hex: "#222222",
            photos: ["assets/placeholder-black.svg"]
        }]
    },
    {
        id: "seamless-hoodie",
        name: "Seamless Hoodie",
        category: "Худі",
        price: 1590,
        seasons: ["весна", "літо", "осінь"],
        description: "Лаконічне худі для щоденного гардероба.",
        material: "Трикотаж",
        madeIn: "Україна",
        care: "Прання при 30°C, навиворіт",
        sizes: ["XS", "S", "M", "L", "XL", "2XL"],
        colors: [{
            name: "Бежевий",
            hex: "#d3c2a9",
            photos: ["assets/placeholder-beige.svg"]
        }, {
            name: "Чорний",
            hex: "#222222",
            photos: ["assets/placeholder-black.svg"]
        }]
    }
];