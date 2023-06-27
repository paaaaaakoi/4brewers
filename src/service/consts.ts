import { SortData, Style, TeamData } from './types'

export const SLIDER_DATA: SortData[] = [
    {
        id: 0,
        title: 'Доза [Mango + Passion Fruit]',
        description: 'Густой насыщенный кислый эль. Яркий аромат и вкус манго, и маракуйи. Умеренная кислотность и консистенция смузи.',
        taste: 'Smoothie Sour Ale',
        props: {
            OG: '16',
            ABV: '6%',
            Ph: '3.5',
        },
        image: 'beer-1.png',
        bgTheme: ['rgba(254, 253, 49, 0.3)', 'rgba(253, 60, 35, 0.7)']
    },
    {
        id: 1,
        title: 'Паранойя',
        description: 'Лёгкий эль в бельгийском стиле. Немного эфирный, чуть пряный, с ярким вкусом и ароматом малины.',
        taste: 'Saison',
        props: {
            OG: '12',
            ABV: '5%',
        },
        image: 'beer-2.png',
        bgTheme: ['#EC73D94D', '#DE2B62']
    },
    {
        id: 2,
        title: 'Зависимость',
        description: 'Легкий светлый кислый эль. Насыщенный, сочный томатный вкус, чуть соли, немного базилика и тимьяна, и капелька острого чили.',
        taste: 'Tomato Gose',
        props: {
            OG: '12.5',
            ABV: '5%',
            IBU: '3'
        },
        image: 'beer-3.png',
        bgTheme: ['#FCCB4A4D', '#FB4925']
    },
];

export const TEAM_DATA: TeamData[] = [
    {
        image: 'img.png',
        name: 'Игорь',
        position: 'Сооснователь и CEO'
    },
    {
        image: 'img-1.png',
        name: 'Сергей',
        position: 'Сооснователь и CEO'
    },
    {
        image: 'img-2.png',
        name: 'Артем',
        position: 'Пивовар, QM'
    },
    {
        image: 'img-3.png',
        name: 'Дмитрий',
        position: 'Пивовар, R&D'
    },
    {
        image: 'img-5.png',
        name: 'Кирилл',
        position: 'Пивовар'
    },
    {
        image: 'img-7.png',
        name: 'Михаил',
        position: 'Пивовар, Mead & BA'
    },
    {
        image: 'img-4.png',
        name: 'Дмитрий',
        position: 'Продажи'
    },
    {
        image: 'img-6.png',
        name: 'Ирина',
        position: 'Снабжение и логистика'
    },
    {
        image: 'img-8.png',
        name: 'Марина',
        position: 'Продажи'
    },
    {
        image: 'img-9.png',
        name: 'Сергей',
        position: 'Пивовар'
    },
    {
        image: 'img-12.png',
        name: 'Татьяна',
        position: 'Микробиолог'
    },
    {
        image: 'img-15.png',
        name: 'Татьяна',
        position: 'Продажи'
    },
    {
        image: 'img-10.png',
        name: 'Андрей',
        position: 'Розлив'
    },
    {
        image: 'img-13.png',
        name: 'Арсений',
        position: 'Розлив и сборка заказов'
    },
    {
        image: 'img-16.png',
        name: 'Даниил',
        position: 'Розлив'
    },
    {
        image: 'img-11.png',
        name: 'Дмитрий',
        position: 'Розлив и сборка заказов'
    },
    {
        image: 'img-14.png',
        name: 'Дмитрий',
        position: 'Розлив и сборка заказов'
    },
    {
        image: 'img-17.png',
        name: 'Илья',
        position: 'Розлив и сборка заказов'
    },
    {
        image: 'img-18.png',
        name: 'Мария',
        position: 'PR, маркетинг'
    },
    {
        image: 'img-21.png',
        name: 'Матвей',
        position: 'Розлив и сборка заказов'
    },
    {
        image: 'img-23.png',
        name: 'Михаил',
        position: 'Бухгалтерия'
    },
    {
        image: 'img-19.png',
        name: 'Никита',
        position: 'Розлив и сборка заказов'
    },
    {
        image: 'img-22.png',
        name: 'Сергей',
        position: 'Розлив и сборка заказов'
    },
    {
        image: 'img-24.png',
        name: 'Ярослав',
        position: 'Розлив и сборка заказов'
    },
    {
        image: 'img-20.png',
        name: 'Александра',
        position: 'Бухгалтерия'
    },
];

export const SORTS_DATA: SortData[] = [
    {
        id: 0,
        title: 'Body Positive',
        taste: 'Smoothie Sour Ale',
        props: {
            OG: '16',
            ABV: '6.5%',
        },
        style: 'sour',
        image: 'beer-0.png',
        description: 'Насыщенный светлый эль. Умеренно кислый, довольно сладкий, с ярким вкусом и ароматом печенья и бананов, а также тонкой нотой ванили'
    },
    {
        id: 1,
        title: 'Darknet',
        taste: 'Smoothie Stout',
        props: {
            OG: '19.3',
            ABV: '6.9%',
        },
        style: 'dark',
        image: 'beer-1.png',
        description: 'Tёмный насыщенный эль. Умеренно сладкий, жареный солодовый вкус с тонами шоколада дополняет яркий аромат и вкус кокоса. И всё это в густой тягучей банановой текстуре смузи.'
    },
    {
        id: 2,
        title: 'Ether Passion fruit',
        taste: 'Sour IPA',
        props: {
            OG: '16',
            ABV: '6.5%',
            IBU: '40',
        },
        style: 'sour',
        image: 'beer-2.png',
        description: 'Насыщенный светлый эль. Умеренно кислый, освежающий, с поддерживающей баланс горечью IPA и ярким ароматом маракуйи и тропических фруктов.'
    },
    {
        id: 3,
        title: 'Giraffe Milk',
        taste: 'Sour Ale',
        props: {
            OG: '16',
            ABV: '6.5%',
        },
        style: 'sour',
        image: 'beer-3.png',
        description: 'Насыщенный светлый эль. Умеренно кислый, в меру сладкий, со вкусом и ароматом фруктовых драже Skittles.'
    },
    {
        id: 4,
        title: 'Pale Blue Dot',
        taste: 'Double IPA',
        props: {
            OG: '19.5',
            ABV: '8%',
            IBU: '101',
        },
        style: 'hoppy',
        image: 'beer-4.png',
        description: 'Двойной индийский пэйл эль. Сильный и сложный цитрусово-хвойный вкус хмеля. Средний чистый солодовый вкус дополняет высокую хмелевую горечь, создавая отличный баланс.'
    },
    {
        id: 5,
        title: 'Reverse - Helles',
        taste: 'Helles',
        props: {
            OG: '11',
            ABV: '4.5%',
        },
        style: 'light',
        image: 'beer-5.png',
        description: 'Солодовый лагер в немецком стиле. Мягкий, умеренно сладкий, с легкой горчинкой и пряными, цветочными и травяными нотками во вкусе и аромате.'
    },
    {
        id: 6,
        title: 'Reverse - Oatmeal Stout',
        taste: 'Stout',
        props: {
            OG: '15',
            ABV: '5.5%',
        },
        style: 'dark',
        image: 'beer-6.png',
        description: 'Тёмный плотный эль с насыщенным вкусом поджаренного зерна, кофейным характером и легкой сливочностью овсяного солода.'
    },
    {
        id: 7,
        title: 'Reverse - Pils',
        taste: 'Lager',
        props: {
            OG: '12',
            ABV: '4.5%',
        },
        style: 'light',
        image: 'beer-7.png',
        description: 'Легкий светлый лагер в немецком стиле. Освежающий, с богатым солодовым характером, легкими медовыми и крекерными нотами и отчетливой хмелевой горечью.'
    },
    {
        id: 8,
        title: 'Santa Muerte',
        taste: 'Coffee Stout',
        props: {
            OG: '16',
            ABV: '6.5%',
            IBU: '35'
        },
        style: 'dark',
        image: 'beer-8.png',
        description: 'Кофейный стаут – темный эль, сухой, насыщенный, с ярким вкусом и ароматом кофе и прожаренного солода.'
    },
    {
        id: 9,
        title: 'Santa Muerte Pasteleria',
        taste: 'Pastry Coffee Stout',
        props: {
            OG: '17.5',
            ABV: '6.5%',
        },
        style: 'dark',
        image: 'beer-9.png',
        description: 'Тёмный эль, умеренно сладкий, насыщенный, с ярким вкусом и ароматом кофе и прожаренного солода, а также лёгкой нотой ванили.'
    },
    {
        id: 10,
        title: 'Большой брат',
        taste: 'Double IPA',
        props: {
            OG: '19.5',
            ABV: '8%',
            IBU: '101'
        },
        style: 'hoppy',
        image: 'beer-10.png',
        description: 'Двойной индийский пэйл эль. Сильный и сложный цитрусово-хвойный вкус хмеля. Средний чистый солодовый вкус дополняет высокую хмелевую горечь, создавая отличный баланс. Длительная, остающаяся горечь в послевкусии.'
    },
    {
        id: 11,
        title: 'Вброс [Citra]',
        taste: 'American Pale Ale',
        props: {
            OG: '15',
            ABV: '6.5%',
            IBU: '45'
        },
        style: 'hoppy',
        image: 'beer-11.png',
        description: 'Cветлый полнотелый эль с явной, но не навязчивой горечью и цитрусово-хвойным ароматом американских хмелей.'
    },
    {
        id: 12,
        title: 'Вброс [Talus]',
        taste: 'American Pale Ale',
        props: {
            OG: '13',
            ABV: '5.5%',
        },
        style: 'hoppy',
        image: 'beer-12.png',
        description: 'Cветлый полнотелый эль с явной, но не навязчивой горечью и цитрусово-хвойным ароматом американских хмелей.'
    },
    {
        id: 13,
        title: 'Вброс [Triumph]',
        taste: 'American Pale Ale',
        props: {
            OG: '13',
            ABV: '5.5%',
        },
        style: 'hoppy',
        image: 'beer-13.png',
        description: 'Cветлый полнотелый эль с явной, но не навязчивой горечью и цитрусово-хвойным ароматом американских хмелей.'
    },
    {
        id: 14,
        title: 'Вброс [Vic Secret + Mosaic]',
        taste: 'American Pale Ale',
        props: {
            OG: '13',
            ABV: '5.5%',
        },
        style: 'hoppy',
        image: 'beer-14.png',
        description: 'Cветлый полнотелый эль с явной, но не навязчивой горечью и цитрусово-хвойным ароматом американских хмелей.'
    },
    {
        id: 15,
        title: 'Вторая личность',
        taste: 'Coconut Porter',
        props: {
            OG: '18.8',
            ABV: '6.9%',
            IBU: '20'
        },
        style: 'dark',
        image: 'beer-15.png',
        description: 'Насыщенный темный крепкий эль. Жарено-жженая плотная карамельно-солодовая портерная основа дополняется вкусом слегка обжаренной кокосовой стружки.'
    },
    {
        id: 16,
        title: 'Доза [Banana + Strawberry]',
        taste: 'Smoothie Sour Ale',
        props: {
            OG: '16',
            ABV: '6%',
            Ph: '3.5'
        },
        style: 'sour',
        image: 'beer-16.png',
        description: 'Густой насыщенный кислый эль. Яркий аромат и вкус банана и клубники, умеренная кислотность и консистенция смузи.'
    },
    {
        id: 17,
        title: 'Доза [Black currant + Strawberry + Cranberry + Raspberry + Cherry + Cowberry]',
        taste: 'Smoothie Sour Ale',
        props: {
            OG: '18',
            ABV: '6.9%',
            Ph: '3.5'
        },
        style: 'sour',
        image: 'beer-17.png',
        description: 'Густой насыщенный кислый эль. Яркий ягодный аромат и вкус. Умеренная кислотность и консистенция смузи.'
    },
    {
        id: 18,
        title: 'Доза [Mango + Passion Fruit]',
        taste: 'Smoothie Sour Ale',
        props: {
            OG: '16',
            ABV: '6%',
            Ph: '3.5'
        },
        style: 'sour',
        image: 'beer-18.png',
        description: 'Густой насыщенный кислый эль. Яркий аромат и вкус манго, и маракуйи. Умеренная кислотность и консистенция смузи.'
    },
    {
        id: 19,
        title: 'Доза [Mango + Pineapple + Grapefruit]',
        taste: 'Smoothie Sour Ale',
        props: {
            OG: '16',
            ABV: '6%',
        },
        style: 'sour',
        image: 'beer-19.png',
        description: 'Густой насыщенный кислый эль. Яркий аромат и вкус манго, ананаса и грейпфрута, умеренная кислотность и консистенция смузи.'
    },


    {
        id: 20,
        title: 'Доза [Orange Pulp + Mango + Pineapple]',
        taste: 'Smoothie Sour Ale',
        props: {
            OG: '16',
            ABV: '6%',
            Ph: '3.5'
        },
        style: 'sour',
        image: 'beer-20.png',
        description: 'Густой насыщенный кислый эль. Яркий аромат и вкус манго: цитрусов и ананаса, умеренная кислотность и консистенция смузи.'
    },
    {
        id: 21,
        title: 'Зависимость',
        taste: 'Tomato Gose',
        props: {
            OG: '12.5',
            ABV: '5%',
            IBU: '3'
        },
        style: 'sour',
        image: 'beer-21.png',
        description: 'Лёгкий светлый кислый эль. Насыщенный, сочный томатный вкус, чуть соли, немного базилика и кориандра, и капелька пряной паприки.'
    },
    {
        id: 22,
        title: 'Зависимость [Curry]',
        taste: 'Tomato Gose',
        props: {
            OG: '18',
            ABV: '6.9%',
            IBU: '3'
        },
        style: 'sour',
        image: 'beer-22.png',
        description: 'Легкий светлый кислый эль. Насыщенный, сочный томатный вкус, копченый солод, чуть соли и острая смесь карри с зеленым перцем чили.'
    },
    {
        id: 23,
        title: 'Зависимость [Болгарский перец]',
        taste: 'Tomato Gose',
        props: {
            OG: '13',
            ABV: '5%',
            IBU: '3'
        },
        style: 'sour',
        image: 'beer-23.png',
        description: 'Насыщенный светлый кислый эль. Сочный томатный вкус, чуть соли, яркий аромат свежего болгарского перца и лёгкая острота красного перца чили.'
    },
    {
        id: 24,
        title: 'Зависимость [Кинза]',
        taste: 'Tomato Gose',
        props: {
            OG: '13',
            ABV: '4.5%',
            IBU: '3'
        },
        style: 'sour',
        image: 'beer-24.png',
        description: 'Насыщенный светлый кислый эль. Сочный томатный вкус, чуть соли и яркий аромат свежей кинзы.'
    },
    {
        id: 25,
        title: 'Зависимость [Красный Базилик]',
        taste: 'Tomato Gose',
        props: {
            OG: '13',
            ABV: '4.5%',
            IBU: '3'
        },
        style: 'sour',
        image: 'beer-25.png',
        description: 'Насыщенный светлый кислый эль. Сочный томатный вкус, чуть соли и яркий аромат свежего базилика.'
    },
    {
        id: 26,
        title: 'Зависимость Укропная',
        taste: 'Tomato Gose',
        props: {
            OG: '13',
            ABV: '4.5%',
            IBU: '3'
        },
        style: 'sour',
        image: 'beer-26.png',
        description: 'Насыщенный светлый кислый эль. Сочный томатный вкус, чуть соли и яркий аромат свежего укропа.'
    },
    {
        id: 27,
        title: 'ЗОЖ',
        taste: 'Vegetable Gose',
        props: {
            OG: '16',
            ABV: '6%',
            IBU: '3'
        },
        style: 'sour',
        image: 'beer-27.png',
        description: 'Насыщенный светлый кисло-соленый эль со вкусом и ароматом огурцов, сельдерея, кинзы и легкой нотой чили.'
    },

    {
        id: 28,
        title: 'Искажение',
        taste: 'Sour Ale',
        props: {
            OG: '18',
            ABV: '6.9%',
        },
        style: 'sour',
        image: 'beer-28.png',
        description: 'Густой насыщенный кислый эль. Яркий аромат и вкус банана, кокоса и шоколада, умеренная кислотность и консистенция смузи.'
    },
    {
        id: 29,
        title: 'Иштар',
        taste: 'Sour Ale',
        props: {
            OG: '13.2',
            ABV: '5%',
        },
        style: 'sour',
        image: 'beer-29.png',
        description: 'Насыщенный кислый эль со вкусом спелого граната и оттенками свежей мяты.'
    },
    {
        id: 30,
        title: 'Копоть Черной Пантеры',
        taste: 'Smoked Porter',
        props: {
            OG: '17.5',
            ABV: '6.5%',
            IBU: '31'
        },
        style: 'dark',
        image: 'beer-30.png',
        description: 'Темный насыщенный эль. Мягкий, со вкусом жаренного солода и с нотками дыма.'
    },
    {
        id: 31,
        title: 'Магия [Black currant, Date syrup, Mint]',
        taste: 'Sour Ale',
        props: {
            OG: '18',
            ABV: '6%',
        },
        style: 'sour',
        image: 'beer-31.png',
        description: 'Насыщенный светлый эль. Достаточно кислый, умеренно сладкий, с ярким вкусом и ароматом чёрной смородины и мяты.'
    },
    {
        id: 32,
        title: 'Магия [Cherry, Black currant, Chocolate, Date syrup]',
        taste: 'Sour Ale',
        props: {
            OG: '19',
            ABV: '6.9%',
        },
        style: 'sour',
        image: 'beer-32.png',
        description: 'Насыщенный светлый эль. Достаточно кислый, умеренно сладкий, с ярким вкусом и ароматом шоколада, чёрной смородины и вишни.'
    },
    {
        id: 33,
        title: 'Не Кричи На Кимчи',
        taste: 'Tomato Gose',
        props: {
            OG: '12.5',
            ABV: '5%',
            IBU: '3'
        },
        style: 'sour',
        image: 'beer-33.png',
        description: 'Насыщенный светлый кислый эль. Сочный томатный вкус, чуть соли и яркий пряно-жгучий аромат кимчи.'
    },
    {
        id: 34,
        title: 'Острая зависимость',
        taste: 'Tomato Gose',
        props: {
            OG: '18',
            ABV: '6.9%',
            IBU: '3'
        },
        style: 'sour',
        image: 'beer-34.png',
        description: 'Насыщенный светлый кислый эль. Сочный томатный вкус, копчёный солод, чуть соли, немного базилика, кориандр, копчёная паприка и острый перец чили.'
    },
    {
        id: 35,
        title: 'Похищение Человеков Инопланетянами',
        taste: 'White IPA',
        props: {
            OG: '17',
            ABV: '7.5%',
            IBU: '67'
        },
        style: 'hoppy',
        image: 'beer-35.png',
        description: 'Белый IPA — светлый эль. Яркий цитрусовый аромат и мягкий пшеничный вкус, балансирующий хмелевую горечь, делают этот сорт насыщенным, но при этом очень питким.'
    },
    {
        id: 36,
        title: 'Страна лентяев 2022 BA blend',
        taste: 'Braggot',
        props: {
            OG: '29',
            ABV: '14.5%',
        },
        style: 'extreme',
        image: 'beer-36.png',
        description: 'Светлый, крепкий и очень насыщенный напиток, полученный путем сбраживания мёда и солодового сусла. Во вкусе и аромате мёд, карамель, сухофрукты, солод, фруктовые эфиры, древесные танины, согревающий алкоголь. Купаж сортов, выдержанных в бочках.'
    },
    {
        id: 37,
        title: 'Унесенные Витом',
        taste: 'Witbier',
        props: {
            OG: '12',
            ABV: '4.3%',
            IBU: '11'
        },
        style: 'light',
        image: 'beer-37.png',
        description: 'Светлое пшеничное пиво в бельгийском стиле. Легкое, освежающее, сухое, с нотками апельсина и кориандра во вкусе и аромате.'
    },
    {
        id: 38,
        title: 'Эго',
        taste: 'Pastry Stout',
        props: {
            OG: '26',
            ABV: '6.9%',
        },
        style: 'dark',
        image: 'beer-38.png',
        description: 'Насыщенный темный крепкий эль. Достаточно сладкий, со вкусом и ароматом кокоса, шоколада и кофе.'
    },
    
]

export const STYLES_LIST: Style[] = ['sour', 'hoppy', 'light', 'dark', 'extreme']


