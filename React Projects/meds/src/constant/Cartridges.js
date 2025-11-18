import { v4 as uuidv4 } from "uuid";

const cartridgeData = {
  meltedDiamonds: [
    {
      id: uuidv4(),
      name: "Gelato",
      category: "cartridge",
      type: "HHC",
      strain: "indica",
      size: "1 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2024/12/65851df5a824e13cb9cf086d_6570f85dd74d3220bab38ca4_HHCCART-GELATO-300x300.webp",
      link: "https://muhacbd.com/product/gelato-hhc-cartridge/",
      inStock: true,
      price: "$18.00"
    },
    {
      id: uuidv4(),
      "name": "God's Gift",
      category: "cartridge",
      type: "HHC",
      strain: "indica",
      size: "1 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2024/12/65851df536946e20a936babe_6570f90fb1022ddbf84736dc_HHCCART-GODS-GIFT-300x300.webp",
      link: "https://muhacbd.com/product/gods-gift-hhc-cartridge/",
      inStock: true,
      price: "$18.00"
    },
    {
      id: uuidv4(),
      "name": "King Louis XII",
      category: "cartridge",
      type: "HHC",
      strain: "indica",
      size: "1 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2024/12/65851df5229f5a06840735e4_6570f9233f10a2bb103001ee_HHCCART-KING-LOUIS-300x300.webp",
      link: "https://muhacbd.com/product/king-louis-xii-hhc-cartridge/",
      inStock: true,
      price: "$18.00"
    },
    {
      id: uuidv4(),
      name: "Cherry Berry",
      category: "cartridge",
      type: "HHC",
      strain: "hybrid",
      size: "1 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2024/12/65851df5f6019c3104ba8fca_6570f85232d869bf786dd028_HHCCART-CHERRY-BERRY-300x300.webp",
      link: "https://muhacbd.com/product/cherry-berry-hhc-cartridge/",
      inStock: true,
      price: "$18.00"
    },
    {
      id: uuidv4(),
      name: "Agent Orange",
      category: "cartridge",
      type: "HHC",
      strain: "sativa",
      size: "1 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2024/12/65851df554fadec6c4668fdd_6570f848c79e4ffa91684c81_HHCCART-AGENT-ORANGE-300x300.webp",
      link: "https://muhacbd.com/product/agent-orange-hhc-cartridge/",
      inStock: true,
      price: "$18.00"
    },
    {
      id: uuidv4(),
      name: "Green Crack",
      category: "cartridge",
      type: "HHC",
      strain: "sativa",
      size: "1 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2024/12/65851df58e7bc8192ad3c081_6570f9195144c6dc8d2d0ce1_HHCCART-GREEN-CRACK-300x300.webp",
      link: "https://muhacbd.com/product/green-crack-hhc-cartridge/",
      inStock: true,
      price: "$18.00"
    },
    {
      id: uuidv4(),
      name: "Maui Waui",
      category: "cartridge",
      type: "HHC",
      strain: "sativa",
      size: "1 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2024/12/65851df6229f5a0684073631_6570f92d664c403b484c82a3_HHCCART-MAUI-WAUII-300x300.webp",
      link: "https://muhacbd.com/product/maui-waui-hhc-cartridge/",
      inStock: true,
      price: "$18.00"
    },
    {
      id: uuidv4(),
      name: "Pineapple Express",
      category: "cartridge",
      type: "HHC",
      strain: "hybrid",
      size: "1000MG Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2024/12/65851df6f4acae46f506b8e8_6570f940692c0615fd6214ae_HHCCART-PINEAPPLE-EXPRESS-300x300.webp",
      link: "https://muhacbd.com/product/pineapple-express-hhc-cartridge/",
      inStock: true,
      price: "$18.00"
    },
    {
      id: uuidv4(),
      name: "Northern Lights",
      category: "cartridge",
      type: "HHC",
      strain: "hybrid",
      size: "1 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2024/12/65851df6b9bbaa96a16eefc1_6570f9380711f2f55ada085d_HHCCART-NORTHERN-LIGHTS-300x300.webp",
      link: "https://muhacbd.com/product/northern-lights-hhc-cartridge/",
      inStock: true,
      price: "$18.00"
    },
    {
      id: uuidv4(),
      name: "Trainwreck",
      category: "cartridge",
      type: "HHC",
      strain: "sativa",
      size: "1 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2024/12/65851df645bf93a3678067f5_6570f948f2a1d793893a5740_HHCCART-TRAINWRECK-300x300.webp",
      link: "https://muhacbd.com/product/trainwreck-hhc-cartridge/",
      inStock: true,
      price: "$18.00"
    },
    {
      id: uuidv4(),
      name: "Watermelon Gelato",
      category: "cartridge",
      type: "THC-A",
      strain: "indica",
      size: "2 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2024/12/MM-CBD-THC-A-WatermelonGelato-300x300.webp",
      link: "https://muhacbd.com/product/watermelon-gelato/",
      inStock: true,
      price: "$25.00"
    },
    {
      id: uuidv4(),
      name: "Strawberry Shortcake",
      category: "cartridge",
      type: "THC-A",
      strain: "indica",
      size: "2 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2024/12/MM-CBD-THC-A-StrawberryShortcake-300x300.webp",
      link: "https://muhacbd.com/product/strawberry-shortcake/",
      inStock: true,
      price: "$25.00"
    },
    {
      id: uuidv4(),
      name: "Purple Punch",
      category: "cartridge",
      type: "THC-A",
      strain: "sativa",
      size: "2 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2024/12/MM-CBD-THC-A-PurplePunch-300x300.webp",
      link: "https://muhacbd.com/product/purple-punch/",
      inStock: true,
      price: "$25.00"
    },
    {
      id: uuidv4(),
      name: "Pineapple Runtz",
      category: "cartridge",
      type: "THC-A",
      strain: "sativa",
      size: "2 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2024/12/MM-CBD-THC-A-PineappleRuntz-300x300.webp",
      link: "https://muhacbd.com/product/pineapple-runtz/",
      inStock: true,
      price: "$25.00"
    },
    {
      id: uuidv4(),
      name: "Paradise Punch",
      category: "cartridge",
      type: "THC-A",
      strain: "indica",
      size: "2 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2024/12/MM-CBD-THC-A-ParadisePunch-300x300.webp",
      link: "https://muhacbd.com/product/paradise-punch/",
      inStock: true,
      price: "$25.00"
    },
    {
      id: uuidv4(),
      name: "Candy Apple",
      category: "cartridge",
      type: "THC-A",
      strain: "hybrid",
      size: "2 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2024/12/MM-CBD-THC-A-CandyApple-300x300.webp",
      link: "https://muhacbd.com/product/candy-apple/",
      inStock: true,
      price: "$25.00"
    },
    {
      id: uuidv4(),
      name: "Mango Madness",
      category: "cartridge",
      type: "THC-A",
      strain: "hybrid",
      size: "2 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2025/03/MM-CBD-THC-A-MangoMadness-1-300x300.webp",
      link: "https://muhacbd.com/product/mango-madness-thc-a-cartridge/",
      inStock: true,
      price: "$25.00"
    },
    {
      id: uuidv4(),
      name: "Bubble Gum Burst",
      category: "cartridge",
      type: "THC-A",
      strain: "indica",
      size: "2 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2025/03/MM-CBD-THC-A-BubbleGum-1-300x300.webp",
      link: "https://muhacbd.com/product/bubble-gum-burst-thc-a-cartridge/",
      inStock: true,
      price: "$25.00"
    },
    {
      id: uuidv4(),
      name: "Lemon Cherry Gelato",
      category: "cartridge",
      type: "THC-A",
      strain: "sativa",
      size: "2 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2025/03/MM-CBD-THC-A-LemonCherry-1-300x300.webp",
      link: "https://muhacbd.com/product/lemon-cherry-gelato-thc-a-cartridge/",
      inStock: true,
      price: "$25.00"
    },
    {
      id: uuidv4(),
      name: "Blue Slushie",
      category: "cartridge",
      type: "THC-A",
      strain: "hybrid",
      size: "2 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2024/12/MM-CBD-THC-A-BlueSlushie-V1-300x300.webp",
      link: "https://muhacbd.com/product/gelato-thca-cartridge/",
      inStock: true,
      price: "$25.00"
    },
    {
      id: uuidv4(),
      name: "Green Crack",
      category: "cartridge",
      type: "Delta 10",
      strain: "sativa",
      size: "1 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2025/03/MM-D10-Cart-GreenCrack-300x300.webp",
      link: "https://muhacbd.com/product/green-crack-d10-cartridge/",
      inStock: true,
      price: "$18.00"
    },
    {
      id: uuidv4(),
      name: "God's Gift",
      category: "cartridge",
      type: "Delta 10",
      strain: "indica",
      size: "1 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2025/03/MM-D10-Cart-GodsGift-s-300x300.webp",
      link: "https://muhacbd.com/product/gods-gift-d10-cartridge/",
      inStock: true,
      price: "$18.00"
    },
    {
      id: uuidv4(),
      name: "Gelato",
      category: "cartridge",
      type: "Delta 10",
      strain: "indica",
      size: "1 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2025/03/MM-D10-Cart-Gelato-300x300.webp",
      link: "https://muhacbd.com/product/gelato-d10-cartridge/",
      inStock: true,
      price: "$18.00"
    },
    {
      id: uuidv4(),
      name: "Cherry Berry",
      category: "cartridge",
      type: "Delta 10",
      strain: "hybrid",
      size: "1 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2025/03/MM-D10-Cart-CherryBerry-300x300.webp",
      link: "https://muhacbd.com/product/cherry-berry-d10-cartridge/",
      inStock: true,
      price: "$18.00"
    },
    {
      id: uuidv4(),
      name: "Trainwreck",
      category: "cartridge",
      type: "Delta 10",
      strain: "sativa",
      size: "1 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2025/03/MM-D10-Cart-Trainwreck-300x300.webp",
      link: "https://muhacbd.com/product/trainwreck-d10-cartridge/",
      inStock: true,
      price: "$18.00"
    },
    {
      id: uuidv4(),
      name: "Pineapple Express",
      category: "cartridge",
      type: "Delta 10",
      strain: "hybrid",
      size: "1 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2025/03/MM-D10-Cart-PineappleExpress-300x300.png",
      link: "https://muhacbd.com/product/pineapple-express-d10-cartridge/",
      inStock: true,
      price: "$18.00"
    },
    {
      id: uuidv4(),
      name: "Northern Lights",
      category: "cartridge",
      type: "Delta 10",
      strain: "hybrid",
      size: "1 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2025/03/MM-D10-Cart-NorthernLights-300x300.png",
      link: "https://muhacbd.com/product/northern-lights-d10-cartridge/",
      inStock: true,
      price: "$18.00"
    },
    {
      id: uuidv4(),
      name: "Maui Wauii",
      category: "cartridge",
      type: "Delta 10",
      strain: "indica",
      size: "1 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2025/03/MM-D10-Cart-MauiWauii-300x300.png",
      link: "https://muhacbd.com/product/maui-wauii-d10-cartridge/",
      inStock: true,
      price: "$18.00"
    },
    {
      id: uuidv4(),
      name: "King Louis XII",
      category: "cartridge",
      type: "Delta 10",
      strain: "indica",
      size: "1 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2025/03/MM-D10-Cart-KingLouis-300x300.webp",
      link: "https://muhacbd.com/product/king-louis-xii-d10-cartridge/",
      inStock: true,
      price: "$18.00"
    },
    {
      id: uuidv4(),
      name: "Agent Orange",
      category: "cartridge",
      type: "Delta 10",
      strain: "sativa",
      size: "1 Gram Cartridge",
      image: "https://muhacbd.com/wp-content/uploads/2025/03/MM-D10-Cart-AgentOrange-300x300.webp",
      link: "https://muhacbd.com/product/agent-orange-d10-cartridge/",
      inStock: true,
      price: "$18.00"
    }
  ],
  distillate: [
    {
      id: uuidv4(),
      name: "Strawberry Kiwi Krush",
      type: "Hybrid",
      image: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e344deb502aab360ba83d0_CA-CARTS-DIST-STRAWBERRYKIWIKUSH-2.webp",
      link: "/ca-cartridges-distillate/strawberry-kiwi-krush",
      price: "$30.00"
    },
    {
      id: uuidv4(),
      name: "Purple Passion Punch",
      type: "Indica",
      image: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e344e6cae5fd79c5249201_CA-CARTS-DIST-PURPLEPASSIONPUNCH-2.webp",
      link: "/ca-cartridges-distillate/purple-passion-punch",
      price: "$30.00"
    },
    {
      id: uuidv4(),
      name: "Pineapple Paradise",
      type: "Hybrid",
      image: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e344efad4b483249954676_CA-CARTS-DIST-PINEAPPLEPARADISE-2.webp",
      link: "/ca-cartridges-distillate/pineapple-paradise",
      price: "$30.00"
    },
    {
      id: uuidv4(),
      name: "Green Crack",
      type: "Sativa",
      image: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e344f8a63c2df9d77ca313_CA-CARTS-DIST-GREENCRACK-2.webp",
      link: "/ca-cartridges-distillate/green-crack",
      price: "$30.00"
    },
    {
      id: uuidv4(),
      name: "God Father OG",
      type: "Sativa",
      image: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e345019767e85c288f0fa1_CA-CARTS-DIST-GODFATHER-2.webp",
      link: "/ca-cartridges-distillate/god-father-og",
      price: "$30.00"
    },
    {
      id: uuidv4(),
      name: "Cherry Grapefruit",
      type: "Sativa",
      image: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e34509b558e557494be011_CA-CARTS-DIST-GRAPEFRUIT-2.webp",
      link: "/ca-cartridges-distillate/cherry-grapefruit",
      price: "$30.00"
    },
    {
      id: uuidv4(),
      name: "Bubblegum Burst",
      type: "Indica",
      image: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e34511b43b7ba54142bbcf_CA-CARTS-DIST-BUBBLEGUMBURST-2.webp",
      link: "/ca-cartridges-distillate/bubblegum-burst",
      price: "$30.00"
    },
    {
      id: uuidv4(),
      name: "Blue Slushie",
      type: "Hybrid",
      image: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e34519a0248cabd8f56668_CA-CARTS-DIST-BLUESLUSHIE-2.webp",
      link: "/ca-cartridges-distillate/blue-slushie",
      price: "$30.00"
    },
    {
      id: uuidv4(),
      name: "Banana Cream Cake",
      type: "Indica",
      image: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e34521bb0a9c959c9329a6_CA-CARTS-DIST-BANANACREAMCAKE-2.webp",
      link: "/ca-cartridges-distillate/banana-cream-cake",
      price: "$30.00"
    },
    {
      id: uuidv4(),
      name: "Bahama Berry",
      type: "Sativa",
      image: "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e345298972c00821d503d4_CA-CARTS-DIST-BAHAMABERRY-2.webp",
      link: "/ca-cartridges-distillate/bahama-berry",
      price: "$30.00"
    },
  ],
};

export default cartridgeData;

