export interface MenuItem {
  id: string;
  name: string;
  category: 'chai' | 'coffee-coolers' | 'snacks-pizza' | 'pasta-maggie' | 'burgers-fries' | 'desserts';
  categoryLabel: string;
  description: string;
  image: string;
  tags?: string[];
  highlight?: boolean;
}

export interface LocationItem {
  id: string;
  name: string;
  city: string;
  state: 'Maharashtra' | 'Uttar Pradesh';
  address: string;
  phone: string;
  email: string;
  timing: string;
  mapsUrl: string;
  image?: string;
  isHeadOffice?: boolean;
}

export interface FounderItem {
  name: string;
  role: string;
  title: string;
  image: string;
  bio: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cafe' | 'chai' | 'food' | 'moments';
  image: string;
  span?: string;
}

export interface FranchiseStep {
  stepNumber: string;
  title: string;
  shortDesc: string;
  details: string;
  icon: string;
}

export interface FranchisePillar {
  title: string;
  description: string;
  icon: string;
  points: string[];
}

export const SITE_CONFIG = {
  brandName: "9Teas Cafe",
  legalName: "9Tea's Cafe Pvt. Ltd.",
  tagline: "Back To The 90s",
  slogan: "Hum Udne Ke Liye Bane Hai",
  hashtag: "#humudnekeliyebanehai",
  establishedYear: "2019",
  foundersNames: "Amit Indrabali Yadav & Rupesh Govind Pendhari",
  mentorName: "C.A. Prashant Tripathi (Founder of Elite Education)",
  headOffice: {
    address: "Shop no. 1 & 2 Sundar Bhavan, Navghar Fatak Road, Opp. Navghar Police Station, Bhayander (East), Mumbai - 401105",
    phone: "+91-9967180891",
    altPhone: "+91-8424099219",
    email: "cafe9teas@gmail.com",
    hours: "Mon – Sun: 9:30 AM – 10:30 PM",
  },
  stats: {
    outlets: "08+",
    cities: "03+",
    states: "02+",
    cupsServed: "10,000+",
    community: "50,000+",
  },
  socialLinks: {
    instagram: "https://www.instagram.com/9teas_cafe_?igsh=MzlscGF2MTN0c2V5",
    facebook: "https://www.facebook.com/share/19PcTjPgMf/",
    whatsapp: "https://wa.me/919967180891",
  },
  brochureUrl: "/brochure pdf/9teascafeBrochure.pdf",
  franchiseGoogleScriptUrl: "https://script.google.com/macros/s/AKfycbw8mv8lwsEzHu_M7ix9hxvJrAv05cDfJ6QxdGrS3Gl9KvvA4FS_gERKfjV-f7ejdfCS/exec",
  contactGoogleScriptUrl: "https://script.google.com/macros/s/AKfycbz8I3E9Q02af9ryw6OPxSg00zt-PvRUcRFOUOJ9ApzNENBszFhfWy9KYf7wAJ5cxI1b/exec",
};

export const FOUNDERS: FounderItem[] = [
  {
    name: "Amit Indrabali Yadav",
    role: "Founder & Chief Executive Officer",
    title: "Founder / CEO",
    image: "/images/amitceo.png",
    bio: "Co-founded 9Teas Cafe in 2019 with a vision to redefine Indian youth cafe culture through authentic kulhad chai, 90s nostalgia, and an accessible hangout destination."
  },
  {
    name: "Rupesh Govind Pendhari",
    role: "Founder & Chief Financial Officer",
    title: "Founder / CFO",
    image: "/images/rupesh-removebg-preview.png",
    bio: "Driving the financial strategy, franchise operations, and scalable supply chain that powers 9Teas Cafe's rapid multi-city presence and profitable partner models."
  },
  {
    name: "Swati Suresh Mishra",
    role: "Chief Operating Officer",
    title: "COO",
    image: "/images/swati-removebg-preview.png",
    bio: "Spearheading daily cafe operations, quality standards, staff excellence, and consistent customer hospitality across all existing and upcoming outlets."
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "chai-adrak",
    name: "Desi Adrak Chai",
    category: "chai",
    categoryLabel: "Artisanal Chai",
    description: "Fresh crushed ginger infused slow-brewed tea, served hot in authentic clay kulhad for the true nostalgic aroma.",
    image: "/images/adrak.jpg",
    tags: ["Signature", "Kulhad", "Fresh Ginger"],
    highlight: true,
  },
  {
    id: "chai-masala",
    name: "Royal Masala Chai",
    category: "chai",
    categoryLabel: "Artisanal Chai",
    description: "Signature blend of 9 hand-ground whole spices simmered with premium Assam tea leaves and wholesome milk.",
    image: "/images/masala.jpg",
    tags: ["Best Seller", "9-Spices"],
    highlight: true,
  },
  {
    id: "chai-elaichi",
    name: "Cardamom Elaichi Chai",
    category: "chai",
    categoryLabel: "Artisanal Chai",
    description: "Fragrant green cardamom pods gently simmered to perfection, delivering a refreshing royal aroma in every sip.",
    image: "/images/tea.jpg",
    tags: ["Aromatic", "All-Time Favorite"],
    highlight: true,
  },
  {
    id: "chai-chocolate",
    name: "Special Chocolate Chai",
    category: "chai",
    categoryLabel: "Artisanal Chai",
    description: "Rich cocoa warmth fused seamlessly with spiced kadak tea — a delightful treat for chocolate and tea lovers alike.",
    image: "/images/chocolate.jpg",
    tags: ["Fusion Special"],
    highlight: false,
  },
  {
    id: "chai-lemon",
    name: "Fresh Lemon Tea",
    category: "chai",
    categoryLabel: "Artisanal Chai",
    description: "Zesty freshly squeezed lemon infused with light tea liquor and pure natural sweetness for an instant energy boost.",
    image: "/images/lemon.jpg",
    tags: ["Refreshing", "Citrus"],
    highlight: false,
  },
  {
    id: "chai-green",
    name: "Organic Green Tea",
    category: "chai",
    categoryLabel: "Artisanal Chai",
    description: "Whole leaf antioxidant-rich green tea gently steeped for a clean, delicate, and calming wellness moment.",
    image: "/images/greenTea.jpg",
    tags: ["Healthy", "Detox"],
    highlight: false,
  },
  {
    id: "chai-green-apple",
    name: "Green Apple Tea",
    category: "chai",
    categoryLabel: "Artisanal Chai",
    description: "Crisp green apple notes paired with premium steeped tea, offering a sweet-tart refreshing twist.",
    image: "/images/lemontea.jpg",
    tags: ["Fruity Infusion"],
    highlight: false,
  },
  {
    id: "chai-black",
    name: "Kadak Black Tea",
    category: "chai",
    categoryLabel: "Artisanal Chai",
    description: "Strong, unadulterated robust tea brew for purists who love a bold, invigorating caffeine kick.",
    image: "/images/balcktea.webp",
    tags: ["Bold & Kadak"],
    highlight: false,
  },
  {
    id: "bev-coldcoffee",
    name: "Creamy Cold Coffee",
    category: "coffee-coolers",
    categoryLabel: "Coffee & Coolers",
    description: "Velvety thick blended coffee topped with chocolate drizzle and served ice-cold for the ultimate cafe vibe.",
    image: "/images/coldcoffie.png",
    tags: ["Cafe Classic", "Ice Cold"],
    highlight: true,
  },
  {
    id: "bev-hotcoffee",
    name: "Classic Hot Coffee",
    category: "coffee-coolers",
    categoryLabel: "Coffee & Coolers",
    description: "Freshly frothed rich roasted espresso with steamed milk and a delicate crema layer on top.",
    image: "/images/coffie.png",
    tags: ["Roasted Blend"],
    highlight: false,
  },
  {
    id: "bev-greenmojito",
    name: "Mint Green Mojito",
    category: "coffee-coolers",
    categoryLabel: "Coffee & Coolers",
    description: "Sparkling soda with muddled fresh mint leaves, zesty lemon, and crisp cooling flavors.",
    image: "/images/GreenMojitopreview.png",
    tags: ["Thirst Quencher", "Sparkling"],
    highlight: true,
  },
  {
    id: "bev-coolberg",
    name: "Coolberg Malt Beverage",
    category: "coffee-coolers",
    categoryLabel: "Coffee & Coolers",
    description: "Non-alcoholic premium craft malt beverage with refreshing fizzy goodness.",
    image: "/images/Coolberg.png",
    tags: ["Zero Alcohol", "Craft Malt"],
    highlight: false,
  },
  {
    id: "food-pizza",
    name: "9Teas Special Pizza",
    category: "snacks-pizza",
    categoryLabel: "Pizzas & Savories",
    description: "Stone-baked crispy crust loaded with mozzarella cheese, diced vegetables, and signature herbs.",
    image: "/images/9teaspizza.png",
    tags: ["Cheesy", "Chef's Special"],
    highlight: true,
  },
  {
    id: "food-margherita",
    name: "Classic Margherita Pizza",
    category: "snacks-pizza",
    categoryLabel: "Pizzas & Savories",
    description: "Golden molten mozzarella layered over tangy Italian tomato basil sauce with a crispy rim.",
    image: "/images/margita.png",
    tags: ["Italian Classic"],
    highlight: false,
  },
  {
    id: "food-garlicbread",
    name: "Cheesy Garlic Bread",
    category: "snacks-pizza",
    categoryLabel: "Pizzas & Savories",
    description: "Toasted baguette slices infused with herb garlic butter and generously baked under golden cheese.",
    image: "/images/GarlicBread.png",
    tags: ["Crunchy & Cheesy"],
    highlight: true,
  },
  {
    id: "food-sandwich",
    name: "Grilled Club Sandwich",
    category: "snacks-pizza",
    categoryLabel: "Pizzas & Savories",
    description: "Triple-decker toasted bread packed with fresh garden vegetables, spiced cheese blend, and green chutney.",
    image: "/images/sandwich.png",
    tags: ["Street Style Special"],
    highlight: false,
  },
  {
    id: "food-role",
    name: "9Teas Crispy Roll",
    category: "snacks-pizza",
    categoryLabel: "Pizzas & Savories",
    description: "Flaky paratha wrap filled with seasoned fillings, crunchy onions, and tangy signature sauces.",
    image: "/images/role.png",
    tags: ["Grab & Go"],
    highlight: false,
  },
  {
    id: "food-whitepasta",
    name: "Creamy White Sauce Pasta",
    category: "pasta-maggie",
    categoryLabel: "Pastas & Maggi",
    description: "Penne pasta tossed in rich velvety béchamel sauce with sweet corn, capsicum, and aromatic herbs.",
    image: "/images/white-pasta.png",
    tags: ["Creamy Delight"],
    highlight: true,
  },
  {
    id: "food-indianpasta",
    name: "Desi Masala Pasta",
    category: "pasta-maggie",
    categoryLabel: "Pastas & Maggi",
    description: "Indian spice-infused penne tossed with onions, bell peppers, green chillies, and chatpata seasoning.",
    image: "/images/indianstylepasta.jpeg",
    tags: ["Desi Fusion"],
    highlight: false,
  },
  {
    id: "food-maggie",
    name: "9Teas Special Masala Maggi",
    category: "pasta-maggie",
    categoryLabel: "Pastas & Maggi",
    description: "The quintessential 90s comfort bowl cooked with extra veggies, secret butter masala, and steaming hot love.",
    image: "/images/9teasmaggie.png",
    tags: ["90s Nostalgia", "Top Favorite"],
    highlight: true,
  },
  {
    id: "food-burger",
    name: "9Teas Signature Burger",
    category: "burgers-fries",
    categoryLabel: "Burgers & Fries",
    description: "Golden crisp vegetable patty stacked with crisp lettuce, sliced tomatoes, creamy mayo, and toasted buns.",
    image: "/images/9teasBurger.png",
    tags: ["Crowd Pleaser"],
    highlight: true,
  },
  {
    id: "food-fries",
    name: "Crispy Peri-Peri Fries",
    category: "burgers-fries",
    categoryLabel: "Burgers & Fries",
    description: "Deep-fried golden potato wedges seasoned with spicy zesty peri-peri masala seasoning.",
    image: "/images/fries9teas.png",
    tags: ["Crunchy Snack"],
    highlight: true,
  },
  {
    id: "food-momos",
    name: "Steamed & Fried Momos",
    category: "burgers-fries",
    categoryLabel: "Burgers & Fries",
    description: "Thin-crust savory dumplings packed with seasoned veggie fillings, served with fiery red chilli garlic dip.",
    image: "/images/momos.png",
    tags: ["Hot & Spicy"],
    highlight: false,
  },
  {
    id: "food-brownie",
    name: "Sizzling Chocolate Brownie",
    category: "desserts",
    categoryLabel: "Desserts & Bakes",
    description: "Fudge-dense warm chocolate brownie topped with chocolate sauce for the sweetest ending to your cafe visit.",
    image: "/images/brownie.jpg",
    tags: ["Sweet Tooth Special"],
    highlight: true,
  },
];

export const OUTLETS: LocationItem[] = [
  {
    id: "bhayander-east",
    name: "9Teas Cafe — Bhayander East (Flagship)",
    city: "Mira-Bhayander / Thane",
    state: "Maharashtra",
    address: "Shop no. 1 & 2 Sundar Bhavan, Navghar Fatak Road, Opp. Navghar Police Station, Bhayander (East), Mumbai - 401105",
    phone: "+91-8424099219",
    email: "cafe9teas@gmail.com",
    timing: "Mon – Sun: 9:30 AM – 10:30 PM",
    mapsUrl: "https://maps.google.com/?q=9+Teas+Cafe+Bhayander+East",
    image: "/images/welcome.jpg",
    isHeadOffice: true,
  },
  {
    id: "nallasopara-east",
    name: "9Teas Cafe — Nallasopara East",
    city: "Nallasopara / Palghar",
    state: "Maharashtra",
    address: "Akansha Commercial Complex, Near Railway Station, Nallasopara (East), Maharashtra - 401209",
    phone: "+91-7304064166",
    email: "cafe9teasnsp@gmail.com",
    timing: "Mon – Sun: 9:30 AM – 10:30 PM",
    mapsUrl: "https://maps.google.com/?q=9+Teas+Cafe+Nallasopara+East",
    image: "/images/cafe1.jpeg",
  },
  {
    id: "virar-west",
    name: "9Teas Cafe — Virar West",
    city: "Virar / Palghar",
    state: "Maharashtra",
    address: "Paradise Park, Near Station Road, Virar (West), Palghar, Maharashtra - 401303",
    phone: "+91-9503021805",
    email: "cafe9teasvirar@gmail.com",
    timing: "Mon – Sun: 9:30 AM – 10:30 PM",
    mapsUrl: "https://maps.google.com/?q=9+Teas+Cafe+Virar+West",
    image: "/images/cafe2.jpeg",
  },
  {
    id: "vasai-east",
    name: "9Teas Cafe — Vasai East",
    city: "Vasai / Palghar",
    state: "Maharashtra",
    address: "Evershine City, Main Broadway Avenue, Vasai (East), Maharashtra - 401208",
    phone: "+91-9503021805",
    email: "cafe9teasvirar@gmail.com",
    timing: "Mon – Sun: 9:30 AM – 10:30 PM",
    mapsUrl: "https://maps.google.com/?q=9+Teas+Cafe+Vasai+East",
    image: "/images/cafe3.jpeg",
  },
  {
    id: "vasai-west",
    name: "9Teas Cafe — Vasai West",
    city: "Vasai / Palghar",
    state: "Maharashtra",
    address: "Anand Nagar Commercial Area, Behind Station Road, Vasai (West), Maharashtra - 401202",
    phone: "+91-9503021805",
    email: "cafe9teasvirar@gmail.com",
    timing: "Mon – Sun: 9:30 AM – 10:30 PM",
    mapsUrl: "https://maps.google.com/?q=9+Teas+Cafe+Vasai+West",
    image: "/images/cafe4.jpeg",
  },
  {
    id: "prayagraj-tagore-town",
    name: "9Teas Cafe — Prayagraj Tagore Town",
    city: "Prayagraj",
    state: "Uttar Pradesh",
    address: "Tagore Town Market Road, Near Colonelganj, Prayagraj, Uttar Pradesh - 211002",
    phone: "+91-9503021805",
    email: "cafe9teasvirar@gmail.com",
    timing: "Mon – Sun: 9:30 AM – 10:30 PM",
    mapsUrl: "https://maps.google.com/?q=9+Teas+Cafe+Prayagraj+Tagore+Town",
    image: "/images/cafe5.jpeg",
  },
  {
    id: "prayagraj-anand-bhavan",
    name: "9Teas Cafe — Prayagraj Anand Bhavan",
    city: "Prayagraj",
    state: "Uttar Pradesh",
    address: "Opposite Anand Bhavan Heritage Area, Prayagraj, Uttar Pradesh - 211002",
    phone: "+91-9503021805",
    email: "cafe9teasvirar@gmail.com",
    timing: "Mon – Sun: 9:30 AM – 10:30 PM",
    mapsUrl: "https://maps.google.com/?q=9+Teas+Cafe+Prayagraj+Anand+Bhavan",
    image: "/images/cafe6.jpeg",
  },
];

export const GALLERY_PHOTOS: GalleryItem[] = [
  { id: "g1", title: "Authentic Kulhad Chai Moments", category: "chai", image: "/images/welcome.jpg", span: "col-span-2 row-span-2" },
  { id: "g2", title: "Modern Cafe Interior Vibe", category: "cafe", image: "/images/gallerySetting.jpeg" },
  { id: "g3", title: "Youth Hangout & Live Sessions", category: "moments", image: "/images/cafe1.jpeg" },
  { id: "g4", title: "Fresh Hand-Brewed Adrak Chai", category: "chai", image: "/images/adrak.jpg" },
  { id: "g5", title: "Artisan Woodfired 9Teas Pizza", category: "food", image: "/images/9teaspizza.png" },
  { id: "g6", title: "Cozy Friends Seating Corner", category: "cafe", image: "/images/cafe2.jpeg" },
  { id: "g7", title: "Creamy White Sauce Pasta", category: "food", image: "/images/white-pasta.png" },
  { id: "g8", title: "9Teas Celebrating Week Festive Event", category: "moments", image: "/images/9week.jpg", span: "col-span-2" },
  { id: "g9", title: "Chilled Refreshing Mojito", category: "chai", image: "/images/GreenMojitopreview.png" },
  { id: "g10", title: "Signature Gourmet Burger", category: "food", image: "/images/9teasBurger.png" },
  { id: "g11", title: "Warm Evening Ambiance", category: "cafe", image: "/images/cafe4.jpeg" },
  { id: "g12", title: "Sizzling Chocolate Brownie Dessert", category: "food", image: "/images/brownie.jpg" },
  { id: "g13", title: "Store Frontage & Outdoor Terrace", category: "cafe", image: "/images/cafe9.jpeg" },
  { id: "g14", title: "Hot Spiced Masala Kulhad Chai", category: "chai", image: "/images/masala.jpg" },
];

export const FRANCHISE_STEPS: FranchiseStep[] = [
  {
    stepNumber: "01",
    title: "Token Amount Deposition",
    shortDesc: "Initial franchise reservation",
    details: "Deposition of the confirmed token amount for exclusive city/territory franchise booking and priority slot assignment.",
    icon: "Wallet"
  },
  {
    stepNumber: "02",
    title: "R&D Team Location Visit",
    shortDesc: "Site survey & footfall validation",
    details: "Comprehensive on-ground evaluation by 9Teas R&D team for market potential, pedestrian footfall, and retail shop finalization.",
    icon: "MapPin"
  },
  {
    stepNumber: "03",
    title: "Layout Approval & Design",
    shortDesc: "Standardized architectural planning",
    details: "Customized 2D/3D floor layout approval, counter workflow schematics, and standardized 90s aesthetic theme planning.",
    icon: "LayoutDashboard"
  },
  {
    stepNumber: "04",
    title: "Interior & Furniture Setup",
    shortDesc: "Turnkey branding fit-out",
    details: "High-standard fabrication of furniture, electricals, POS counter, branded neon lighting, and signature kulhad displays.",
    icon: "Store"
  },
  {
    stepNumber: "05",
    title: "Staff Hiring & Training",
    shortDesc: "Complete operational enablement",
    details: "Rigorous chef and barista training, recipe standardization, billing POS setup, customer service SOPs, and raw material sourcing.",
    icon: "GraduationCap"
  },
  {
    stepNumber: "06",
    title: "Agreement & Store Launch",
    shortDesc: "Grand opening & marketing kickoff",
    details: "Formal signing of franchise agreement, localized social media blitz, launch campaigns, and inaugural store celebration.",
    icon: "Rocket"
  }
];

export const FRANCHISE_PILLARS: FranchisePillar[] = [
  {
    title: "Target Youth & Family Demographic",
    description: "A high-frequency repeat destination loved by college students, young professionals, office-goers, and tea enthusiasts.",
    icon: "Target",
    points: [
      "Everyday affordable price points",
      "Smoke-free, hygienic & aesthetic cafe vibe",
      "Vibrant environment for study & work"
    ]
  },
  {
    title: "Rapidly Expanding Multi-City Brand",
    description: "8+ established outlets across 3+ key cities in Maharashtra and Uttar Pradesh with strong community recognition.",
    icon: "TrendingUp",
    points: [
      "Proven business model tested across diverse markets",
      "Celebrated monthly '9Teas Week' driving sales",
      "Strong social media resonance & word-of-mouth"
    ]
  },
  {
    title: "End-to-End Operational Guidance",
    description: "Direct mentorship from brand founders and headquarters for smooth turnkey execution and sustainable margins.",
    icon: "ShieldCheck",
    points: [
      "Centralized recipe consistency & spice formulas",
      "Low inventory wastage & fast preparation time",
      "Comprehensive staff training and ongoing audits"
    ]
  },
  {
    title: "Scalable Turnkey Investment Models",
    description: "Tailored investment tiers designed for agile launch, high capital efficiency, and optimized unit economics.",
    icon: "Briefcase",
    points: [
      "Flexible models: 7 Lakh & 12 Lakh investment tiers",
      "Comprehensive setup support from day one",
      "Transparent partnership terms without hidden friction"
    ]
  }
];

export const BRAND_MILESTONES = [
  {
    year: "2019",
    title: "The Genesis at Bhayander East",
    description: "Young entrepreneurs Amit Yadav & Rupesh Pendhari launch the first 9Teas Cafe in Bhayander East, Mumbai, guided by mentor C.A. Prashant Tripathi with a passion for authentic tea & 90s nostalgia.",
    image: "/images/welcome.jpg"
  },
  {
    year: "2020-2021",
    title: "The Twin-City Phenomenon",
    description: "Expanding into Nallasopara & Vasai with an evolving menu of artisanal chai, Italian savories, and youth-first vibes, sparking the iconic #humudnekeliyebanehai movement.",
    image: "/images/cafe1.jpeg"
  },
  {
    year: "2022-2023",
    title: "Introducing '9Teas Week' & Community Rituals",
    description: "Monthly celebrations, live acoustic sessions, campus offers, and creative combos make 9Teas the most vibrant hangout spot across the suburban railway corridor.",
    image: "/images/9week.jpg"
  },
  {
    year: "2024-Present",
    title: "Multi-State Expansion to Prayagraj & Beyond",
    description: "Scaling to 8+ outlets across Maharashtra and Uttar Pradesh with standardized operations, scalable franchise models, and a nationally ambitious vision.",
    image: "/images/branches-outlate.jpeg"
  }
];

export const FAQS = [
  {
    question: "What makes 9Teas Cafe unique compared to regular chai points?",
    answer: "9Teas Cafe blends authentic Indian tea culture served in hygienic clay kulhads with a vibrant 90s nostalgic lifestyle aesthetic, comprehensive multi-cuisine cafe menu (pizzas, pastas, burgers, coolers), smoke-free family environment, and affordable everyday pricing."
  },
  {
    question: "What are the investment tiers available for a 9Teas Cafe franchise?",
    answer: "As listed on our official franchise application, we provide flexible investment tiers starting from 7 Lakh and 12 Lakh models depending on outlet format, carpet area, kitchen configuration, and seating capacity."
  },
  {
    question: "What support does 9Teas Cafe provide to new franchise partners?",
    answer: "We provide comprehensive 360-degree support including R&D location feasibility study, 2D/3D store layout & interior specifications, raw material sourcing, staff hiring assistance, complete barista & culinary recipe training, billing POS setup, and marketing kickoff campaigns."
  },
  {
    question: "Where are 9Teas Cafe outlets currently operating?",
    answer: "We currently operate 8+ outlets across 3+ cities in Maharashtra (Bhayander East, Nallasopara East, Virar West, Vasai East, Vasai West) and Uttar Pradesh (Tagore Town & Anand Bhavan in Prayagraj), with new outlets actively in pipeline."
  },
  {
    question: "What is 'Celebrating 9Teas Week'?",
    answer: "During every last week of each month, all 9Teas Cafe outlets host 'Celebrating 9Teas Week' featuring live community events, festive combo offers, customer contests, and special menu specials that drive high customer footfall and brand excitement."
  },
  {
    question: "How do I download the official 9Teas Cafe franchise brochure?",
    answer: "You can download the official high-resolution franchise brochure directly through the 'Download Brochure' button on our Franchise page or submit the online enquiry form for a callback from our expansion team."
  }
];
