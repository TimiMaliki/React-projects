const links = [
  {
    id: "Home",
    title: "Home",
    href: "/",
  },
  {
    id: "Muah Meds",
    title: "Muah Meds",
    href: "/signin",
  },
];

const downLinks = [
  {
    id: "Home",
    title: "Home",
    href: "/",
  },
  {
    id: "About Us",
    title: "About Us",
    href: "/about",
  },
  {
    id: " Products",
    title: " Products",
    href: "/products",
  },
  {
    id: "Find Us",
    title: "Find Us",
    href: "/find",
  },
  {
    id: "Contact Us",
    title: "Contact Us",
    href: "/contact",
  },
];

const footerLinks = [
  { name: "ABOUT US", href: "/about" },
  { name: "CONTACT US", href: "/contact" },
  { name: "VERIFICATION", href: "/muha-members" },
  { name: "INFLUENCERS", href: "/influencers" },
  { name: "REWARDS", href: "/rewards" },
  { name: "TERMS OF SERVICE", href: "#" },
  { name: "PRIVACY POLICY", href: "/privacy-policy" },
];

const Explore = ["ALL-IN-ONE", "CARTRIDGES", "PRE-ROLLS", "FLOWER", "GUMMIES", "CONCENTRATES", "BLOG / PRESS"]

const categories = [
  {
    name: "All-In-One",
    description:
      "Unmatched quality meets ultimate ease in Muha Meds’ Gen3 disposable line.",
    image:
      "https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/68fff44336a88b58ceeb71bb_Group-dospo-v3.webp",
    link: "/all",
  },
  {
    name: "Cartridges",
    description:
      "Muha Meds cartridges deliver premium potency and flavor with full-spectrum Melted Diamonds or terpene-rich Distillate.",
    image:
      "https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/68fff1bfb70c9142d74fecb2_carts-v3-group2.webp",
    link: "/cartridges",
  },
  {
    name: "Flower",
    description:
      "Experience high-potency indoor flower, meticulously grown for density and quality.",
    image:
      "https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/68fff52e069179621fedf2e9_flower-v3-group.webp",
    link: "/flower",
  },
  {
    name: "CONCENTRATES",
      description:
      "Potent, pure concentrates created through advanced extraction methods to deliver maximum strength and clarity.",
    image:
      "https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/68fff5622227a30a872a4503_conc-v3-group.webp",
    link: "/concentrates",
  },
  {
    name: "GUMMIES",
    description:
      "Deliciously infused gummies with precise dosing for a balanced, consistent, and enjoyable experience anytime.",
    image:
      "https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/68fff5b1f1d4ebb37b6a7c6c_gummies-v3-group.webp",
    link: "/gummies",
  },
  {
    name: "PRE-ROLLS",
    description:
      "Expertly rolled pre-rolls made from hand-selected flower, offering a smooth, even burn and full-bodied aroma.",
    image:
      "https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee/68fff61556186c9e7df03842_infused-v3-group.webp",
    link: "/infused",
  },
];
  const flavors = [
    {
      name: "Orange Tangie",
      type: "Hybrid",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e33c57cdca16a714d4ccfd_CA-AIO-MD-ORANGETANGIE-2.webp",
      link: "/ca-all-in-one-melted-diamonds/orange-tangie",
    },
    {
      name: "Mango Madness",
      type: "Hybrid",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e33c5fbac9120c0c7ea560_CA-AIO-MD-MANGOMADNESS-2.webp",
      link: "/ca-all-in-one-melted-diamonds/mango-madness",
    },
    {
      name: "Lemon Cherry Gelato",
      type: "Sativa",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e33c67b4ba30cf3174d02a_CA-AIO-MD-LEMONCHERRYGELATO-2.webp",
      link: "/ca-all-in-one-melted-diamonds/lemon-cherry-gelato",
    },
    {
      name: "Grape Gas",
      type: "Indica",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e33c6e239e5efb747f4d7a_CA-AIO-MD-GRAPEGAS-2.webp",
      link: "/ca-all-in-one-melted-diamonds/grape-gas",
    },
    {
      name: "Durban Delight",
      type: "Sativa",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e33c761ab2108b60b5b9fa_CA-AIO-MD-DURBANDELIGHT-2.webp",
      link: "/ca-all-in-one-melted-diamonds/durban-delight",
    },
  ];
 const leftSpecs = [
    {
      title: "Pure Flavor",
      description:
        "Postless design preserves every drop with zero compromise.",
    },
    {
      title: "Custom Ceramics",
      description:
        "Formulated for Muha concentrates, delivering big clouds and bold taste.",
    },
    {
      title: "Sleek & Durable",
      description: "Single-body design built for style and longevity.",
    },
  ];

  const rightSpecs = [
    {
      title: "Smart Control",
      description:
        "Internal chipset sets the perfect temp for smooth hits every time.",
    },
    {
      title: "LED Display",
      description:
        "Minimalist interface designed for ease without distractions.",
    },
    {
      title: "Recharge Anywhere",
      description: "USB-C charging keeps you ready on the go.",
    },
  ];

   const Distileflavors = [
    {
      name: "Strawberry Runts",
      type: "Hybrid",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68d621325eae3ce4cfdc5908_CA-AIO-DIST-STRAWBERRYRUNTZ-2.webp",
      link: "/ca-all-in-one-distillate/strawberry-runts",
    },
    {
      name: "Tahoe OG",
      type: "Indica",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68d62124b560c680ec5ef733_CA-AIO-DIST-TAHOEOG-2.webp",
      link: "/ca-all-in-one-distillate/tahoe-og",
    },
    {
      name: "Magic Melon OG",
      type: "Hybrid",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68d62164b51b7c54bf6b0160_CA-AIO-DIST-MAGICMELONOG-2.webp",
      link: "/ca-all-in-one-distillate/magic-melon-og",
    },
    {
      name: "Sour Watermelon Squirt",
      type: "Sativa",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68d621070e764c60137efcd6_CA-AIO-DIST-WATERMELONSQUIRT-2.webp",
      link: "/ca-all-in-one-distillate/sour-watermelon-squirt",
    },
    {
      name: "Pineapple Express",
      type: "Sativa",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68d620fb54784cc536a1cf92_CA-AIO-DIST-PINEAPPLEEXPRESS-2.webp",
      link: "/ca-all-in-one-distillate/pineapple-express",
    },
    {
      name: "Galactic Diesel",
      type: "Indica",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68d620e4a13168375b7a2536_CA-AIO-DIST-GALACTICDIESEL-2.webp",
      link: "/ca-all-in-one-distillate/galactic-diesel",
    },
    {
      name: "Frozen Pomegranate",
      type: "Sativa",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68d620da5c66e46bccfea3f2_CA-AIO-DIST-FROZENPOMEGRANATE-2.webp",
      link: "/ca-all-in-one-distillate/frozen-pomegranate",
    },
    {
      name: "Bubblegum Burst",
      type: "Indica",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68d620cddbe42077eea15f79_CA-AIO-DIST-BUBBLEGUMBURST-2.webp",
      link: "/ca-all-in-one-distillate/bubblegum-burst",
    },
    {
      name: "Blueberry Cookies",
      type: "Indica",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68d620bfc8d1748a98c15696_CA-AIO-DIST-BLUEBERRYCOOKIES-2.webp",
      link: "/ca-all-in-one-distillate/blueberry-cookies",
    },
    {
      name: "Blue Slushie",
      type: "Hybrid",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68d620b18e62c1c20faee51c_CA-AIO-DIST-BLUESLUSHIE-2.webp",
      link: "/ca-all-in-one-distillate/blue-slushie",
    },
  ]
   const Harshflavors = [
    {
      name: "Tropicana Cherry",
      type: "Sativa",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e341ae9c5173d754434703_CA-AIO-HR-TropicanaCherry-2.webp",
      link: "/ca-aio-hash-rosin/tropicana-cherry",
    },
    {
      name: "Mimosa",
      type: "Sativa",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e341b9831e570c035dec7a_CA-AIO-HR-Mimosa-2.webp",
      link: "/ca-aio-hash-rosin/mimosa",
    },
    {
      name: "Fatso",
      type: "Indica",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e341c352dda65945d8bba6_CA-AIO-HR-Fatso-2.webp",
      link: "/ca-aio-hash-rosin/fatso",
    },
    {
      name: "Garlic Jelly",
      type: "Indica",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e341dba48d7441ae09e25a_CA-AIO-HR-GarlicJelly-2.webp",
      link: "/ca-aio-hash-rosin/garlic-jelly",
    },
    {
      name: "Donnie Burger",
      type: "Hybrid",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e341ea5da29047d6d523de_CA-AIO-HR-DonnieBurger-2.webp",
      link: "/ca-aio-hash-rosin/donnie-burger",
    },
  ];

   const liveflavors = [
    {
      name: "OG Kush",
      type: "Indica",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e3371e446f6d6e98780fc4_CA-AIO-LR-OGKush-2.webp",
      link: "/ca-aio-live-resin/og-kush",
    },
    {
      name: "Lemon Kush Mintz",
      type: "Indica",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e337289caeb5a75144864a_CA-AIO-LR-LemonKushMintz-2.webp",
      link: "/ca-aio-live-resin/lemon-kush-mintz",
    },
    {
      name: "Juice Man",
      type: "Sativa",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e3372fe35ba8004848473d_CA-AIO-LR-JuiceMan-2.webp",
      link: "/ca-aio-live-resin/juice-man",
    },
    {
      name: "Grape Dosi",
      type: "Hybrid",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e33738eef8f07f0bddf087_CA-AIO-LR-DosiGrape-2.webp",
      link: "/ca-aio-live-resin/grape-dosi",
    },
    {
      name: "Golden Papaya",
      type: "Hybrid",
      image:
        "https://cdn.prod.website-files.com/63d576049309ce6fad1c6d9b/68e337416249a02ebde9458c_CA-AIO-LR-GoldenPapaya-2.webp",
      link: "/ca-aio-live-resin/golden-papaya",
    },
  ];


export { links, downLinks, footerLinks , Explore , categories , flavors, leftSpecs ,rightSpecs , Distileflavors ,Harshflavors,liveflavors};
