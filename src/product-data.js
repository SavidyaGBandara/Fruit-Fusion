const products = {
    cocktails: [
        {
            name: "Blue Lagoon Cocktail",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.1100.00",
            tag_line: "Introducing the Blue Lagoon Cocktail: A Dive into Azure Delight",
            desc: "The Blue Lagoon Cocktail is a masterpiece of simplicity and flavor, a drink that not only tantalizes the taste buds but also captivates the eyes with its striking azure hue. It's a beacon of refreshment, summoning images of clear tropical waters, sunny skies, and the carefree spirit of summer. Join us as we embark on a journey into the world of this visually stunning and deliciously invigorating cocktail.",
            ingredients: `  1 1/2 bounces (45 ml) vodka
                            1/2 bounce (15 ml) blue curaçao liqueur
                            4 bounces (120 ml) lemonade
                            Ice
                            Lemon slice or maraschino cherry for garnish (optional)`,
        },
        {
            name: "Mai Tai Cocktail",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.3500.00",
            tag_line: "Introducing the Mai Tai Cocktail: A Taste of Exotic Paradise",
            desc: "The Mai Tai is more than just a drink; it's a passport to the lush, exotic landscapes of the South Pacific. This classic cocktail embodies the spirit of tiki culture, transporting you to faraway shores, swaying palm trees, and the gentle lull of ocean waves. we invite you to embark on a journey into the world of the Mai Tai, a drink renowned for its tropical allure and captivating blend of flavors.",
            ingredients: `  2 oz (60 ml) dark rum
                            1 oz (30 ml) white rum
                            3/4 oz (22 ml) lime juice
                            1/2 oz (15 ml) orange liqueur (such as triple sec or Curaçao)
                            1/2 oz (15 ml) orgeat syrup (almond syrup)
                            1/2 oz (15 ml) simple syrup
                            Ice
                            Fresh mint sprig, lime wheel, and maraschino cherry for garnish`,
        },
        {
            name: "Margarita Cocktail",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.3200.00",
            tag_line: "Introducing the Margarita Cocktail: A Zesty and Timeless Classic",
            desc: "The Margarita is more than just a drink; it's a vibrant and spirited celebration of flavors that dance on the palate. This iconic cocktail is synonymous with lively gatherings, warm summer evenings, and the zest of Mexican culture. we invite you to explore the world of the Margarita, a refreshing elixir that continues to captivate with its citrusy allure and the joy it brings to those who savor it.",
            ingredients: `  2 oz (60 ml) tequila
                            1 oz (30 ml) orange liqueur (such as triple sec or Curaçao)
                            1 oz (30 ml) freshly squeezed lime juice
                            Salt (for rimming the glass)
                            Ice
                            Lime wheel or wedge for garnish`,
        },
        {
            name: "Mojito Cocktail",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.2650.00",
            tag_line: "Introducing the Mojito Cocktail: A Refreshing Cuban Classic",
            desc: "The Mojito, a timeless and iconic cocktail, carries with it the spirit of Cuba, evoking images of warm, tropical breezes and lively conversations in the heart of Havana. This zesty and refreshing concoction is a testament to the art of mixology, known and beloved worldwide for its invigorating blend of flavors. Mojito has a rich history and an enduring status as a beloved cocktail choice.",
            ingredients: `  2 oz (60 ml) white rum
                            1 oz (30 ml) fresh lime juice
                            2 teaspoons white sugar (adjust to taste)
                            6-8 fresh mint leaves
                            Soda water (club soda)
                            Ice cubes
                            Lime wheel and sprig of fresh mint for garnish`,
        },
        {
            name: "Piña Colada Cocktail",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.2300.00",
            tag_line: "Introducing the Piña Colada: A Taste of the Tropics",
            desc: "The Piña Colada is more than just a cocktail; it's a sensory voyage to the sun-soaked beaches of the Caribbean, where swaying palm trees and gentle ocean breezes set the stage for pure relaxation. This iconic drink, with its lush and creamy blend of pineapple and coconut, has captured the essence of tropical paradise and become a symbol of escapism. ",
            ingredients: `  2 oz (60 ml) white rum
                            3 oz (90 ml) pineapple juice
                            1 oz (30 ml) coconut cream
                            1 cup of ice
                            Pineapple slice and maraschino cherry for garnish`,
        },
    ],

    //JUICES//

    juices: [
        {
            name: "Apple Juice",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.1100.00",
            tag_line: "Introducing Apple Juice: A Glass of Orchard-Fresh Bliss",
            desc: "Apple juice is more than just a beverage; it's a refreshing journey into the heart of orchards and the pure, unadulterated essence of apples. This beloved and timeless drink has been a staple in homes and lunchboxes, offering a crisp and invigorating taste that's adored by young and old alike",
            ingredients: "Apple juice is typically produced by crushing apples to extract their juice.",
        },
        {
            name: "Blueberry Juice",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.1100.00",
            tag_line: "Introducing Blueberry Juice: A Burst of Berry Goodness",
            desc: "Blueberry juice is more than just a drink; it's a vibrant explosion of flavor and a celebration of one of nature's most beloved superfoods. This delightful beverage is known for its rich, fruity taste and the many health benefits it offers.",
            ingredients:
                "Blueberry juice is typically made by crushing or pressing fresh blueberries to extract their juice.",
        },
        {
            name: "Lime Juice",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.1100.00",
            tag_line: "Introducing Lime Juice: A Zesty Burst of Citrus Freshness",
            desc: "Lime juice is more than just a pantry staple; it's a burst of citrusy freshness that invigorates our senses and elevates the flavors of countless culinary creations. This tangy elixir is celebrated for its ability to add zing and vibrancy to a wide array of dishes, making it a kitchen essential for both professional chefs and home cooks.",
            ingredients:
                "Lime juice is typically produced by cutting and squeezing fresh limes to extract their juice.",
        },
        {
            name: "Orange Juice",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.1100.00",
            tag_line: "Introducing Orange Juice: A Ray of Sunshine in a Glass",
            desc: "Orange juice is more than just a beverage; it's a burst of sunshine and citrusy delight that brightens up our mornings and refreshes our senses. This iconic drink, made from the liquid extracted from freshly squeezed oranges, is beloved for its sweet, tangy, and invigorating flavor",
            ingredients:
                "Orange juice is typically made by pressing or squeezing fresh oranges to extract their juice.",
        },
        {
            name: "Pineapple Juice",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.1100.00",
            tag_line: "Introducing Pineapple Juice: A Taste of Tropical Paradise",
            desc: "Pineapple juice is more than just a drink; it's a sip of tropical sunshine and a journey to exotic destinations. This refreshing elixir is made from the liquid extracted from the sweet and tangy fruit of the pineapple. Known for its delightful flavor and associations with tropical getaways, pineapple juice is a beloved beverage that evokes a sense of vacation in every glass",
            ingredients: "Pineapple juice is typically made by extracting the juice from fresh pineapple fruit. ",
        },
        {
            name: "Watermelon Juice",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.1100.00",
            tag_line: "Introducing Watermelon Juice: A Sip of Summer's Delight",
            desc: "Watermelon juice is more than just a drink; it's a cool and refreshing taste of summer encapsulated in a glass. This hydrating elixir is created by blending or juicing the sweet and juicy flesh of ripe watermelons. It is celebrated for its invigorating, thirst-quenching nature, making it a beloved companion during hot and sunny days.",
            ingredients:
                "Watermelon juice is typically made by pureeing or blending fresh watermelon flesh to extract the juice.",
        },
    ],

    //SMOOTHIES//

    smoothies: [
        {
            name: "Avocado and Banana Smoothie",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.1100.00",
            tag_line: "Introducing the Creamy Delight of Avocado and Banana Smoothie",
            desc: "The avocado and banana smoothie is not just a drink; it's a creamy and nutritious masterpiece that tantalizes the taste buds while offering a burst of health benefits. This delightful concoction combines the rich and nutty essence of avocados with the natural sweetness of ripe bananas. It's a popular choice for those seeking a tasty and nourishing snack or breakfast option.",
            ingredients: `  1 ripe avocado, peeled and pitted
                            2 ripe bananas
                            1 cup of milk (you can use dairy milk or a dairy-free alternative like almond milk or soy milk for a vegan version)
                            1/2 cup of plain Greek yogurt (optional, for added creaminess)
                            1 to 2 tablespoons of honey or maple syrup (for sweetness, adjust to your preference)
                            1/2 teaspoon of vanilla extract (optional, for added flavor)
                            Ice cubes (optional, for a colder and thicker smoothie)`,
        },
        {
            name: "Mango Pineapple Smoothie",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.1100.00",
            tag_line: "Introducing the Tropical Bliss of Mango Pineapple Smoothie",
            desc: "The mango pineapple smoothie is more than just a beverage; it's a sip of paradise that transports your taste buds to a tropical wonderland. This refreshing concoction marries the succulent sweetness of ripe mangoes with the zesty tang of pineapples, creating a symphony of tropical flavors. It's not only a delectable treat but also a nutritious option for a quick breakfast, a post-workout refreshment, or a delightful snack.",
            ingredients: `  1 cup of ripe mango chunks (fresh or frozen)
                            1 cup of pineapple chunks (fresh or frozen)
                            1/2 cup of plain Greek yogurt (optional, for added creaminess)
                            1/2 cup of coconut milk, almond milk, or any milk of your choice
                            1 to 2 tablespoons of honey or maple syrup (for sweetness, adjust to your preference)
                            Ice cubes (optional, for a colder and thicker smoothie)
                            Fresh mint leaves for garnish (optional)`,
        },
        {
            name: "Minty Watermelon Smoothie",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.1100.00",
            tag_line: "Introducing the Cool Refreshment of a Minty Watermelon Smoothie",
            desc: "The minty watermelon smoothie is not just a drink; it's a refreshing oasis in a glass that combines the sweet and hydrating nature of watermelon with the cool, invigorating essence of fresh mint. This smoothie is a delightful and revitalizing choice, offering a burst of natural flavor and the refreshing properties of mint",
            ingredients: `  2 cups of fresh watermelon chunks (seedless)
                            1/4 cup of fresh mint leaves
                            1 cup of plain Greek yogurt or coconut yogurt for a dairy-free option
                            1-2 tablespoons of honey or maple syrup (for sweetness, adjust to your preference)
                            Juice of 1 lime (optional, for added zing)
                            Ice cubes (optional, for a colder and thicker smoothie)`,
        },
        {
            name: "Strawberry Banana Smoothie",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.1100.00",
            tag_line: "Introducing the Classic Delight of a Strawberry Banana Smoothie",
            desc: "The strawberry banana smoothie is not just a beverage; it's a timeless and delightful fusion of flavors that combines the sweet and tangy allure of ripe strawberries with the natural creaminess of bananas. This smoothie is a beloved choice for a quick breakfast, a satisfying snack, or a post-workout refreshment.",
            ingredients: `  1 cup of ripe strawberries (fresh or frozen)
                            2 ripe bananas
                            1 cup of plain yogurt (you can use Greek yogurt for added creaminess)
                            1/2 cup of milk (dairy or dairy-free alternatives like almond or soy milk)
                            1 to 2 tablespoons of honey or maple syrup (for sweetness, adjust to your preference)
                            Ice cubes (optional, for a colder and thicker smoothie)`,
        },
        {
            name: "Tropical Mango Passion Smoothie",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.1100.00",
            tag_line: "Introducing the Exotic Sensation of a Tropical Mango Passion Smoothie",
            desc: "The tropical mango passion smoothie is a sip of the exotic, a taste of the tropics, and a celebration of vibrant flavors. This luscious concoction unites the sweet and tropical allure of mango with the zesty tang of passion fruit. It's a refreshing and invigorating choice, perfect for starting your day with a burst of sunshine, replenishing your energy post-workout, or indulging in a tropical escape anytime.",
            ingredients: `  1 cup of ripe mango chunks (fresh or frozen)
                            Pulp of 2 ripe passion fruits (also known as maracuja)
                            1/2 cup of plain Greek yogurt (optional, for added creaminess)
                            1/2 cup of coconut milk or any milk of your choice
                            1 to 2 tablespoons of honey or maple syrup (for sweetness, adjust to your preference)
                            Ice cubes (optional, for a colder and thicker smoothie)
                            Fresh mint leaves for garnish (optional) `,
        },
    ],

    //TEA//

    tea: [
        {
            name: "Blueberry Tea",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.1100.00",
            tag_line: "Introducing the Delight of Blueberry Tea: A Sip of Berry Bliss",
            desc: "Blueberry tea is a journey through the luscious world of ripe, succulent blueberries. This aromatic infusion is created from the dried leaves or fruits of the blueberry plant, and it's known for its sweet and slightly tart flavor profile. Whether you're in search of a refreshing beverage, a potential boost of antioxidants, or simply a delightful cup to savor, blueberry tea offers a sensory experience that's both soothing and tantalizing",
            ingredients:
                "Blueberry tea can be made from either fresh or dried blueberries, or from the dried leaves of the blueberry",
        },
        {
            name: "Lemon Ginger Tea",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.1100.00",
            tag_line: "Introducing the Zesty Warmth of Lemon Ginger Tea: A Sip of Comfort and Wellness",
            desc: "Lemon ginger tea is not just a beverage; it's a soothing infusion that combines the zest of lemon with the warmth of ginger, offering a delightful balance of flavors and potential health benefits. This aromatic and invigorating brew is created by steeping fresh ginger root or dried ginger slices alongside the vibrant essence of lemon. It's cherished for its ability to comfort the senses and provide a potential boost to well-being.",
            ingredients:
                "Lemon ginger tea is made by steeping fresh ginger root or dried ginger slices along with lemon juice or lemon slices in hot water.",
        },
        {
            name: "Peach Tea",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.1100.00",
            tag_line: "Introducing the Sweet Symphony of Peach Tea: A Sip of Summer All Year Round",
            desc: "Peach tea is a captivating infusion that marries the natural sweetness of ripe peaches with the comforting embrace of tea. This delightful and fruity blend captures the essence of summer, making it a favorite choice for tea enthusiasts looking to savor the taste of sunshine.",
            ingredients: "It is flavored with natural peach flavor, peach juice, or peach puree.",
        },
        {
            name: "Strawberry Black Tea",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.1100.00",
            tag_line: "Introducing the Harmony of Strawberry Black Tea: Where Bold Meets Sweet",
            desc: "Strawberry black tea is a harmonious fusion of the bold and robust character of black tea with the sweet and fruity essence of ripe strawberries. This unique blend offers a rich and aromatic tea-drinking experience that is cherished by tea enthusiasts.",
            ingredients:
                "Strawberry black tea typically uses black tea leaves as the tea base, which can vary in type (e.g., Assam, Darjeeling, Ceylon). Dried or dehydrated strawberries are added to the blend to impart the fruity flavor.",
        },
    ],

    //MILKSHAKES//

    milkshakes: [
        {
            name: "Banana Milkshake",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.1100.00",
            tag_line: "Introducing the Creamy Delight of a Banana Milkshake: A Classic and Wholesome Treat",
            desc: "A banana milkshake is a timeless and indulgent creation that brings together the natural sweetness and creaminess of ripe bananas with the comfort of milk. This classic treat is celebrated for its delicious simplicity, making it a favorite choice for people of all ages. we invite you to explore the world of the banana milkshake and discover why it's cherished for its rich flavor, creamy texture, and the wholesome nourishment it offers.",
            ingredients: `  2 ripe bananas (peeled and sliced)
                            1 cup of milk (dairy or dairy-free alternatives like almond or soy milk)
                            1 to 2 tablespoons of honey, sugar, or maple syrup (for sweetness, adjust to your preference)
                            1/2 cup of plain yogurt (optional, for added creaminess)
                            1/2 teaspoon of vanilla extract (optional, for enhanced flavor)
                            Ice cubes (optional, for a colder and thicker milkshake)`,
        },
        {
            name: "Blueberry Milkshake",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.1100.00",
            tag_line: "Introducing the Berry Bliss of a Blueberry Milkshake: A Creamy Delight for Your Senses",
            desc: "A blueberry milkshake is a delectable fusion of the vibrant and slightly tart flavor of blueberries with the luscious creaminess of milk and ice cream. This indulgent treat is a celebration of freshness, a sweet symphony of flavors, and a delightful escape into the world of blueberries.",
            ingredients: `  1 cup of fresh or frozen blueberries
                            2 scoops of vanilla ice cream
                            1 cup of milk (dairy or dairy-free alternatives like almond or soy milk)
                            1 to 2 tablespoons of honey, sugar, or maple syrup (for sweetness, adjust to your preference)
                            1/2 teaspoon of vanilla extract (optional, for enhanced flavor)
                            Ice cubes (optional, for a colder and thicker milkshake)`,
        },
        {
            name: "Mango Milkshake",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.1100.00",
            tag_line: "Introducing the Tropical Delight of a Mango Milkshake: Sip the Sunshine",
            desc: "A mango milkshake is a tropical journey that brings the lush and sun-kissed flavors of ripe mangoes into a creamy, indulgent embrace of milk and ice cream. This delightful and refreshing treat is a tribute to the vibrant sweetness of mangoes, transporting you to the exotic world of tropical paradise.It is cherished for its sunny taste, creamy texture, and the sheer joy it brings to every sip.",
            ingredients: `  2 ripe and peeled mangoes (you can use fresh or frozen mango chunks)
                            2 cups of cold milk (dairy or dairy-free alternatives like almond or coconut milk)
                            2 to 3 scoops of vanilla ice cream
                            2 to 3 tablespoons of sugar, honey, or condensed milk (for sweetness, adjust to your preference)
                            Ice cubes (optional, for a colder and thicker milkshake)
                            A pinch of ground cardamom or a dash of vanilla extract (optional, for enhanced flavor)`,
        },
        {
            name: "Pineapple Milkshake",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.1100.00",
            tag_line:
                "Introducing the Exotic Refreshment of a Pineapple Milkshake: A Taste of the Tropics in Every Sip",
            desc: "A pineapple milkshake is not just a beverage; it's a journey to the tropics, a celebration of the refreshing and tangy flavor of ripe pineapples, and a creamy indulgence that transports you to a paradise of flavors. This exotic and sweet treat is a delightful escape, bringing the sunshine and warmth of tropical destinations to your taste buds.",
            ingredients: `  2 cups of fresh or canned pineapple chunks (you can also use frozen pineapple chunks)
                            2 cups of cold milk (dairy or dairy-free alternatives like coconut or almond milk)
                            2 to 3 scoops of vanilla ice cream
                            2 to 3 tablespoons of sugar or honey (for sweetness, adjust to your preference)
                            Ice cubes (optional, for a colder and thicker milkshake)`,
        },
        {
            name: "Strawberry Milkshake",
            pics: ["main.png", "1.png", "2.png", "3.png"],
            price: "Rs.1100.00",
            tag_line: "Introducing the Luscious Sweetness of a Strawberry Milkshake: A Classic Treat for All Ages",
            desc: "A strawberry milkshake is a classic and timeless indulgence that marries the sweet and vibrant flavor of ripe strawberries with the creamy richness of milk and ice cream. This beloved treat is cherished by people of all ages for its delicious simplicity and the joy it brings with every sip. ",
            ingredients: `  2 cups of fresh or frozen strawberries (hulled and washed)
                            2 cups of cold milk (dairy or dairy-free alternatives like almond or soy milk)
                            2 to 3 scoops of vanilla ice cream
                            2 to 3 tablespoons of sugar or honey (for sweetness, adjust to your preference)
                            Ice cubes (optional, for a colder and thicker milkshake)`,
        },
    ],
};
