document.addEventListener('DOMContentLoaded', () => {

    // --- Language Dictionary ---
    const translations = {
        en: {
            login: "Login",
            navHome: "Home",
            navProducts: "Products",
            navAbout: "About Us",
            aboutDesc: "We are a specialized platform marketing the finest pottery pieces for antiques, kitchen, and decor. We strive to offer a unique collection of pottery that meets all your needs, reflecting the fragrance of heritage with a modern touch.",
            navContact: "Contact Us",
            navAdmin: "Dashboard",
            navAccount: "My Account",
            navTrack: "Track Order",
            heroTitle: "BAYT AL-FAKHAR",
            heroSubtitle: "• HERITAGE & MODERNITY •",
            heroTagline: "ONLINE POTTERY MARKET",
            shopNow: "Shop Now",
            adminTitle: "Admin & Inventory Dashboard",
            statRevenue: "Total Revenue",
            statOrders: "Completed Orders",
            statCustomers: "Registered Customers",
            adminCustomers: "Customers Log",
            colName: "Name",
            colEmail: "Email",
            colPoints: "Points",
            colJoinDate: "Join Date",
            adminOrders: "New Customer Orders",
            colOrderNum: "Order No.",
            colCustomerData: "Customer Data",
            colProducts: "Requested Products",
            colRemainingStock: "Remaining Stock",
            colTotal: "Total",
            colDate: "Date",
            myAccountTitle: "Account Management",
            tabDetails: "My Details",
            tabOrders: "My Orders",
            tabPoints: "Loyalty Points",
            labelName: "Full Name:",
            labelEmail: "Email:",
            labelPhone: "Phone Number:",
            saveChanges: "Save Changes",
            yourPoints: "Your Points Balance:",
            pointsWord: "Points",
            pointsDesc: "Get 1 point for every 10 EGP you spend in our store.<br>Share a photo of your special dish in our products and get <strong>20 extra points</strong>!",
            sharePhotoBtn: "📸 Share a dish photo and win 20 points",
            authTitle: "Sign In",
            loginCustomer: "Customer Login",
            loginCustomerBtn: "Login / Register",
            searchPlaceholder: "Search for a product...",
            leaveEmptyPass: "Leave empty if you don't want to change",
            writeComment: "Write a comment on the photo...",
            adminUser: "Username (Admin)",
            password: "Password",
            f_items_pl: "Number of pieces requested (e.g. 100)",
            f_avgPrice_pl: "Average estimated price per piece (EGP) - Optional",
            trackOrder_pl: "Enter order number (e.g. #123456)",
            email: "Email",
            fullName: "Full Name",
            phoneOpt: "Phone Number (Optional)",
            phone: "Phone Number",
            name: "Name",
            yourOpinion: "Your opinion on the products...",
            fullAddress: "Detailed Address",
            emailOpt: "Email (Optional)",
            prodName: "Product Name",
            priceEgp: "Price (EGP)",
            availQty: "Available Quantity",
            exactDesc: "Exact Product Description",
            adminHamburgerText: "Admin",
            customerHamburgerText: "My Account",
            customerMenuTitle: "Customer Menu",
            manageAccountBtn: "Manage Account",
            trackOrderBtn: "Track Order",
            logoutBtnText: "Logout",
            adminTabOverview: "Overview",
            adminTabUsers: "Customers",
            adminTabOrders: "Orders",
            adminTabInventory: "Inventory",
            adminTabSettings: "Settings",
            inventoryTitle: "Product Inventory",
            addProductBtn: "+ Add New Product",
            invImg: "Image",
            invName: "Product Name",
            invPrice: "Price",
            invRemaining: "Remaining",
            invSold: "Sold",
            invActions: "Actions",
            paySettingsTitle: "Payment Settings",
            setVodafone: "Vodafone Cash No:",
            setInstapay: "InstaPay Address:",
            setBank: "Bank Account No:",
            saveSettingsBtn: "Save Settings",
            productsTitle: "Featured Products",
            productsSubtitle: "Browse our latest pottery pieces crafted with love and care",
            catAll: "All",
            catTagine: "Tagines",
            catPlates: "Plates",
            catDecor: "Decor",
            feasibilityBtn: "Feasibility Study for Restaurants",
            packTitle: "Safe Heritage Packaging",
            packDesc: "We use straw and natural materials to protect products and give them a distinctive heritage character.",
            b2bTitle: "Special Wholesale & Restaurant Prices",
            b2bDesc: "We offer discounts up to 20% when ordering quantities for restaurants and hotels.",
            deliveryTitle: "Safe & Fast Delivery",
            deliveryDesc: "Shipping to all governorates with a 100% safe delivery guarantee.",
            mapTitle: "Pottery Crafting Map",
            mapSubtitle: "Discover the most famous Egyptian villages specialized in heritage pottery making.",
            mapInstruction: "Click on any red dot on the map for more details.",
            mapFustatBtn: "Fustat (Cairo)",
            mapFayoumBtn: "Tunis (Fayoum)",
            mapQenaBtn: "Qena (Upper Egypt)",
            reviewsTitle: "Customer Reviews",
            addReviewBtn: "Add Review",
            reqDeliveryBtn: "Request Delivery"
        },
        ar: {
            login: "تسجيل الدخول",
            navHome: "الرئيسية",
            navProducts: "المنتجات",
            navAbout: "من نحن",
            aboutDesc: "نحن منصة متخصصة في تسويق أرقى قطع الفخار الخاصة بالتحف والمطبخ والديكور وحاجات مشابهة لهذا الوصف. نسعى لتقديم تشكيلة مميزة من الفخاريات التي تلبي كافة احتياجاتك، وتعكس عبق التراث بلمسة عصرية.",
            navContact: "تواصل معنا",
            navAdmin: "لوحة التحكم",
            navAccount: "حسابي",
            navTrack: "تتبع طلبك",
            heroTitle: "بَيْتُ الفَخَّار",
            heroSubtitle: "• تُراثٌ وَعَصْرِيَّة •",
            heroTagline: "ONLINE POTTERY MARKET",
            shopNow: "تسوق الآن",
            adminTitle: "لوحة تحكم الإدارة والمخزون",
            statRevenue: "إجمالي المبيعات",
            statOrders: "الطلبات المنجزة",
            statCustomers: "العملاء المسجلين",
            adminCustomers: "سجل العملاء",
            colName: "الاسم",
            colEmail: "البريد الإلكتروني",
            colPoints: "النقاط",
            colJoinDate: "تاريخ التسجيل",
            adminOrders: "طلبات العملاء الجديدة",
            colOrderNum: "رقم الطلب",
            colCustomerData: "بيانات العميل",
            colProducts: "المنتجات المطلوبة",
            colRemainingStock: "المتبقي بالمخزن",
            colTotal: "الإجمالي",
            colDate: "التاريخ",
            myAccountTitle: "إدارة الحساب",
            tabDetails: "بياناتي",
            tabOrders: "طلباتي",
            tabPoints: "نقاط الولاء",
            labelName: "الاسم الكامل:",
            labelEmail: "البريد الإلكتروني:",
            labelPhone: "رقم الهاتف:",
            saveChanges: "حفظ التعديلات",
            yourPoints: "رصيد نقاطك:",
            pointsWord: "نقطة",
            pointsDesc: "احصل على نقطة واحدة لكل 10 جنيهات تنفقها في متجرنا.<br>شاركنا صورة لأكلتك المميزة في منتجاتنا واحصل على <strong>20 نقطة</strong> إضافية!",
            sharePhotoBtn: "📸 شارك صورة لطبقك واربح 20 نقطة",
            authTitle: "تسجيل الدخول",
            loginCustomer: "دخول كعميل",
            loginCustomerBtn: "دخول / تسجيل جديد",
            searchPlaceholder: "ابحث عن منتج...",
            leaveEmptyPass: "اتركه فارغاً إذا لم ترغب بتغييره",
            writeComment: "اكتب تعليقاً على الصورة...",
            adminUser: "اسم المستخدم (Admin)",
            password: "كلمة المرور",
            f_items_pl: "عدد القطع المطلوبة (مثال: 100)",
            f_avgPrice_pl: "متوسط سعر القطعة التقديري (ج.م) - اختياري",
            trackOrder_pl: "أدخل رقم الطلب (مثال: #123456)",
            email: "البريد الإلكتروني",
            fullName: "الاسم الكامل",
            phoneOpt: "رقم الهاتف (اختياري)",
            phone: "رقم الهاتف",
            name: "الاسم",
            yourOpinion: "رأيك في المنتجات...",
            fullAddress: "العنوان بالتفصيل",
            emailOpt: "البريد الإلكتروني (اختياري)",
            prodName: "اسم المنتج",
            priceEgp: "السعر (ج.م)",
            availQty: "الكمية المتاحة",
            exactDesc: "الوصف الدقيق للمنتج",
            adminHamburgerText: "الإدارة",
            customerHamburgerText: "حسابي",
            customerMenuTitle: "قائمة العميل",
            manageAccountBtn: "إدارة الحساب",
            trackOrderBtn: "تتبع طلبك",
            logoutBtnText: "تسجيل الخروج",
            adminTabOverview: "نظرة عامة",
            adminTabUsers: "العملاء",
            adminTabOrders: "الطلبات",
            adminTabInventory: "المخزون",
            adminTabSettings: "الإعدادات",
            inventoryTitle: "مخزون المنتجات",
            addProductBtn: "+ إضافة منتج جديد",
            invImg: "صورة",
            invName: "اسم المنتج",
            invPrice: "السعر",
            invRemaining: "المتبقي",
            invSold: "المباع",
            invActions: "إجراءات",
            paySettingsTitle: "إعدادات الدفع",
            setVodafone: "رقم فودافون كاش:",
            setInstapay: "عنوان إنستا باي:",
            setBank: "رقم الحساب البنكي:",
            saveSettingsBtn: "حفظ الإعدادات",
            productsTitle: "منتجاتنا المميزة",
            productsSubtitle: "تصفح أحدث القطع الفخارية المصنوعة بحب وعناية",
            catAll: "الكل",
            catTagine: "طواجن",
            catPlates: "أطباق",
            catDecor: "ديكور",
            feasibilityBtn: "دراسة جدوى للمطاعم",
            packTitle: "تغليف تراثي آمن",
            packDesc: "نستخدم القش والمواد الطبيعية لحماية المنتجات وإعطائها طابعاً تراثياً مميزاً.",
            b2bTitle: "أسعار خاصة للجملة والمطاعم",
            b2bDesc: "نوفر خصومات تصل إلى 20% عند طلب كميات للمطاعم والفنادق.",
            deliveryTitle: "توصيل آمن وسريع",
            deliveryDesc: "شحن لكافة محافظات الجمهورية مع ضمان استلام المنتج سليماً 100%.",
            mapTitle: "خريطة صناعة الفخار",
            mapSubtitle: "تعرف على أشهر القرى المصرية المتخصصة في صناعة الفخار التراثي.",
            mapInstruction: "انقر على أي نقطة حمراء على الخريطة لتفاصيل أكثر.",
            mapFustatBtn: "الفسطاط (القاهرة)",
            mapFayoumBtn: "تونس (الفيوم)",
            mapQenaBtn: "قنا (الصعيد)",
            reviewsTitle: "آراء عملائنا",
            addReviewBtn: "إضافة تقييم",
            reqDeliveryBtn: "طلب توصيل"
        }
    };

    let currentLang = localStorage.getItem('siteLang') || 'ar';
    const langToggleBtn = document.getElementById('langToggleBtn');

    const textTranslations = {
        'بوابة الإدارة': 'Admin Portal',
        'سلة المشتريات': 'Shopping Cart',
        'السلة فارغة حالياً': 'Cart is empty currently',
        'المحافظة (لتحديد مصاريف الشحن):': 'Governorate (for shipping costs):',
        'القاهرة والجيزة (50 ج.م)': 'Cairo & Giza (50 EGP)',
        'الإسكندرية ووجه بحري (70 ج.م)': 'Alexandria & North Coast (70 EGP)',
        'محافظات الصعيد (100 ج.م)': 'Upper Egypt (100 EGP)',
        'الإجمالي:': 'Total:',
        'إتمام الدفع': 'Checkout',
        'كلمة المرور الجديدة (اختياري):': 'New Password (Optional):',
        'رفع الصورة وكسب 20 نقطة': 'Upload Photo & Win 20 Points',
        'شارك صورتك': 'Share Your Photo',
        'شهادة أصالة وجودة': 'Certificate of Authenticity',
        'للسيد/ة:': 'To Mr/Ms:',
        'التاريخ:': 'Date:',
        'التوقيع:': 'Signature:',
        'طباعة الشهادة': 'Print Certificate',
        'إيصال دفع إلكتروني': 'Electronic Receipt',
        'رقم الطلب:': 'Order No:',
        'العميل:': 'Customer:',
        'طريقة الدفع:': 'Payment Method:',
        'رسوم الشحن:': 'Shipping Fees:',
        'شكراً لتسوقكم معنا!': 'Thank you for shopping with us!',
        'طباعة الإيصال': 'Print Receipt',
        'عرض شهادة الأصالة': 'View Certificate',
        'دخول الإدارة': 'Admin Login',
        'دخول': 'Login',
        'دراسة جدوى مبسطة': 'Simplified Feasibility Study',
        'أدخل عدد القطع المطلوبة لمطعمك (طواجن وأطباق) لترى التوفير المتوقع.': 'Enter required pieces to see savings.',
        'احسب التكلفة': 'Calculate Cost',
        'التكلفة الإجمالية المعتادة:': 'Normal Total Cost:',
        'التكلفة بعد خصم الجملة (20%):': 'Cost after discount (20%):',
        'الوفر المتوقع:': 'Expected Savings:',
        'فوائد إضافية:': 'Additional Benefits:',
        'عمر افتراضي أطول بسبب متانة الفخار المعالج للحرارة.': 'Longer lifespan due to heat-treated pottery durability.',
        'توفير في غاز التدفئة لاحتفاظ الفخار بالحرارة لمدة تزيد عن 45 دقيقة.': 'Savings in heating gas; pottery retains heat >45 mins.',
        'تجربة بصرية تراثية ترفع من قيمة أطباقك المادية (Premium Pricing).': 'Heritage visual experience elevates dish value.',
        'تغليف آمن وصديق للبيئة': 'Safe & Eco-friendly Packaging',
        'نحرص على وصول قطع الفخار إليكم بأمان تام. نستخدم مواد تغليف صديقة للبيئة مثل الورق المقوى والقش لحمايتها من الصدمات، ونزينها بنقوش تراثية تعكس أصالة منتجاتنا.': 'We ensure pottery reaches you safely using eco-friendly materials.',
        'تتبع رحلة طلبك': 'Track Your Order',
        'تتبع الآن': 'Track Now',
        'مرحلة التشكيل': 'Shaping Stage',
        'يتم تشكيل القطعة يدوياً على عجلة الفخار بعناية فائقة.': 'Piece is carefully hand-shaped on the pottery wheel.',
        'مرحلة التجفيف': 'Drying Stage',
        'تجفف القطعة في الهواء الطلق بشكل طبيعي لضمان قوتها.': 'Piece is naturally air-dried to ensure strength.',
        'الحرق في الفرن': 'Kiln Firing',
        'يتم حرق القطعة في أفران مخصصة لاكتساب الصلابة.': 'Piece is fired in special kilns to gain hardness.',
        'التغليف التراثي': 'Heritage Packaging',
        'يتم تغليف القطعة بأمان باستخدام القش والمواد الصديقة للبيئة.': 'Piece is safely packed using eco-friendly materials.',
        'قيد التوصيل': 'Out for Delivery',
        'الطلب مع مندوب الشحن في الطريق إليك.': 'Order is with the courier on the way to you.',
        'رقم الطلب غير صحيح أو غير موجود.': 'Order number is incorrect or not found.',
        'حساب جديد': 'New Account',
        'إنشاء حساب جديد': 'Create New Account',
        'تسجيل الخروج': 'Logout',
        'إضافة تقييم': 'Add Review',
        'إرسال التقييم': 'Submit Review',
        'بيانات التوصيل والدفع': 'Delivery & Payment Details',
        'اختر طريقة الدفع': 'Choose Payment Method',
        'الدفع عند الاستلام': 'Cash on Delivery',
        'بطاقة ائتمان': 'Credit Card',
        'إنستا باي (InstaPay)': 'InstaPay',
        'فودافون كاش': 'Vodafone Cash',
        'تحويل بنكي': 'Bank Transfer',
        'أرفق صورة إيصال التحويل:': 'Attach Transfer Receipt:',
        'تأكيد الطلب الآن': 'Confirm Order Now',
        'وصف المنتج:': 'Product Description:',
        'أضف إلى السلة': 'Add to Cart',
        'إضافة منتج جديد': 'Add New Product',
        'طواجن': 'Tagines',
        'أطباق ومج': 'Plates & Mugs',
        'ديكور وتحف': 'Decor & Antiques',
        'الكل': 'All',
        'صورة المنتج (اختياري - سيتم استخدام صورة افتراضية إن لم يتم الرفع):': 'Product Image (Optional):',
        'حفظ المنتج': 'Save Product',
        'صورة إيصال الدفع': 'Payment Receipt Image',
        '✅ تأكيد الدفع': '✅ Approve Payment',
        'طقم أطباق ريفي مزخرف': 'Rustic Decorated Plate Set',
        'طقم أطباق عشاء فاخر بتصميم ريفي جذاب، يتميز بنقوش نباتية ذات ألوان ترابية هادئة (الأخضر والبني). يضفي لمسة من الدفء والجمال على مائدة الطعام.': 'Luxurious dinner plate set with an attractive rustic design, featuring calm earthy floral patterns. Adds a touch of warmth and beauty to the dining table.',
        'طواجن ملونة بغطاء': 'Colorful Tagines with Lid',
        'مجموعة من الطواجن الفخارية الملونة بألوان مبهجة (الأزرق، الأصفر، الأخضر) ومزينة بزخارف يدوية رائعة. تأتي بغطاء محكم للحفاظ على حرارة الطعام، وتعتبر إضافة مبهجة لأي مطبخ.': 'A set of colorful pottery tagines decorated with beautiful handmade patterns. Comes with a tight lid to keep food warm, a joyful addition to any kitchen.',
        'فازات ديكور أندلسية': 'Andalusian Decor Vases',
        'فازات فخارية طويلة مزخرفة بنقوش هندسية ونباتية معقدة مستوحاة من الفن الأندلسي العريق. تعتبر تحفة فنية تخطف الأنظار وتناسب أرقى ديكورات المنزل.': 'Tall pottery vases decorated with complex geometric and floral patterns inspired by ancient Andalusian art. An eye-catching masterpiece for home decor.',
        'أكواب فخارية ملونة': 'Colorful Pottery Mugs',
        'مجموعة من الأكواب (المجات) الفخارية ذات الطلاء الزجاجي اللامع بألوان صلبة ومتنوعة. تصميمها العملي بلمسات التقطير يمنحها طابعاً عفوياً وجميلاً لتقديم المشروبات.': 'A set of glazed pottery mugs in solid diverse colors. Practical design with drip touches gives it a spontaneous and beautiful character for serving drinks.',
        'أواني طهي ريفية داكنة': 'Dark Rustic Cookware',
        'تشكيلة من أواني الطهي الفخارية التقليدية غير المطلية باللون البني الداكن. تشمل أبريقات وطواجن عميقة مزينة بنقوش محفورة يدوياً، مثالية لمحبي الطهي التراثي الأصيل.': 'A collection of traditional unglazed dark brown pottery cookware. Includes jugs and deep tagines decorated with hand-carved patterns, ideal for authentic traditional cooking.',
        'مج قهوة بنقشة الفراشة': 'Butterfly Pattern Coffee Mug',
        'مج قهوة فخاري رائع مطلي بطبقة لامعة ومزين برسمة فراشة برتقالية زاهية مرسومة يدوياً. يتميز بتصميمه المميز ليكون كوبك المفضل للاستمتاع بقهوتك اليومية.': 'A wonderful glazed pottery coffee mug decorated with a bright orange hand-drawn butterfly. Features a unique design to be your favorite cup for daily coffee.',
        'تحف ومزهريات مزخرفة': 'Decorated Antiques & Vases',
        'مجموعة من المزهريات والتحف الفخارية الفاخرة المطلية بألوان زاهية ولامعة (كالتركواز والأزرق)، والمزينة بنقوش دقيقة لتكون قطعة فنية لا مثيل لها.': 'A collection of luxurious pottery vases and antiques painted in bright glossy colors (like turquoise and blue), and decorated with fine patterns to be an unparalleled artwork.',
        'أطباق حائط مزخرفة': 'Decorated Wall Plates',
        'أطباق فخارية مزخرفة بالكامل برسومات وزخارف يدوية مذهلة متعددة الألوان. مصممة لتُعلق على الحائط كتحف فنية أو لتوضع كزينة مركزية تضفي فخامة على المكان.': 'Fully decorated pottery plates with stunning multi-color hand drawings and patterns. Designed to be hung on the wall as art pieces or placed as a centerpiece.',
        'جرات فخار طبيعي (قلل)': 'Natural Pottery Jugs (Qullas)',
        'مجموعة من الجرات والأباريق الفخارية المصنوعة من الطين الطبيعي النقي بدون طلاء. مثالية لحفظ وتبريد الماء بطريقة صحية وطبيعية، وتتميز بتصميم تراثي أصيل.': 'A set of pottery jugs and pitchers made of pure natural clay without glaze. Ideal for storing and cooling water in a healthy natural way, with an authentic heritage design.',
        'طواجن طهي تقليدية': 'Traditional Cooking Tagines',
        'طواجن فخارية متينة للطبخ تأتي مع أغطية ومزينة بنقوش بسيطة من الأزهار البيضاء. مصنوعة لتحمل حرارة الفرن العالية ولتعطي الأكل نكهة الفخار الأصلية التي لا تقاوم.': 'Durable pottery cooking tagines with lids, decorated with simple white floral patterns. Made to withstand high oven heat and give food the irresistible original pottery flavor.',
        'عذراً، هذه كل الكمية المتاحة في المخزن حالياً.': 'Sorry, this is all the available stock.',
        'نفدت الكمية': 'Out of Stock',
        'عرض التفاصيل': 'View Details',
        'تعديل المنتج': 'Edit Product',
        'لا توجد منتجات تطابق بحثك.': 'No products match your search.',
        'ج.م': 'EGP',
        'قطعة': 'pcs',
        'فخار قرية تونس (الفيوم)': 'Tunis Village Pottery (Fayoum)',
        'يتميز فخار الفيوم بألوانه الزاهية والمبهجة ورسوماته العفوية التي تعكس طبيعة الريف المصري الجميلة من طيور ونخيل.': 'Fayoum pottery is characterized by its bright and cheerful colors and spontaneous drawings that reflect the beautiful Egyptian countryside nature of birds and palm trees.',
        'الفخار المزجج (الفسطاط)': 'Glazed Pottery (Fustat)',
        'فخار الفسطاط يشتهر بطبقته الزجاجية اللامعة (التزجيج) وألوانه العميقة مثل الأزرق الفيروزي، ويتميز بنقوشه الإسلامية والهندسية الدقيقة.': 'Fustat pottery is famous for its shiny glass layer (glazing) and deep colors like turquoise blue, and features precise Islamic and geometric patterns.',
        'الفخار التقليدي الأصيل (قنا)': 'Authentic Traditional Pottery (Qena)',
        'الفخار القنائي هو الأقدم والأكثر أصالة، يتميز باللون الطبيعي للطين وعدم طلائه بالزجاج، مما يجعله مثالياً لتبريد المياه (مثل القلل والأزيار) بفضل مسامه الدقيقة.': 'Qena pottery is the oldest and most authentic, characterized by the natural color of clay and lack of glass coating, making it ideal for cooling water (like Qullas and Zirs) thanks to its fine pores.'
    };
    
    const reverseTextTranslations = Object.fromEntries(Object.entries(textTranslations).map(([k, v]) => [v, k]));

    let isTranslating = false; // Prevent recursive calls

    function applyLanguage(lang) {
        if(isTranslating) return;
        isTranslating = true;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        if(lang === 'en') {
            document.body.classList.add('en');
            if(langToggleBtn) langToggleBtn.innerText = 'AR';
        } else {
            document.body.classList.remove('en');
            if(langToggleBtn) langToggleBtn.innerText = 'EN';
        }

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if(translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
        
        // Auto translate placeholders without data-i18n-placeholder
        document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
            const pText = el.placeholder.trim();
            if(lang === 'en' && textTranslations[pText]) {
                el.placeholder = textTranslations[pText];
            } else if(lang === 'ar' && reverseTextTranslations[pText]) {
                el.placeholder = reverseTextTranslations[pText];
            }
        });

        // Translate text nodes dynamically
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
        let node;
        while(node = walker.nextNode()) {
            const txt = node.nodeValue.trim();
            if(!txt) continue;
            
            // Special handling for dynamic formats like "المتبقي: X قطعة"
            if(lang === 'en') {
                if(txt.startsWith('المتبقي: ') && txt.endsWith(' قطعة')) {
                    node.nodeValue = node.nodeValue.replace('المتبقي: ', 'Remaining: ').replace(' قطعة', ' pcs');
                } else if(textTranslations[txt]) {
                    node.nodeValue = node.nodeValue.replace(txt, textTranslations[txt]);
                }
            } else {
                if(txt.startsWith('Remaining: ') && txt.endsWith(' pcs')) {
                    node.nodeValue = node.nodeValue.replace('Remaining: ', 'المتبقي: ').replace(' pcs', ' قطعة');
                } else if(reverseTextTranslations[txt]) {
                    node.nodeValue = node.nodeValue.replace(txt, reverseTextTranslations[txt]);
                }
            }
        }
        
        isTranslating = false;
    }

    if(langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            localStorage.setItem('siteLang', currentLang);
            applyLanguage(currentLang);
        });
    }
    applyLanguage(currentLang);

    // --- Image Compression Helper ---
    function compressImage(file, maxWidth, maxHeight, quality, callback) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = new Image();
            img.onload = function() {
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > maxWidth) {
                        height = Math.round(height *= maxWidth / width);
                        width = maxWidth;
                    }
                } else {
                    if (height > maxHeight) {
                        width = Math.round(width *= maxHeight / height);
                        height = maxHeight;
                    }
                }

                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                
                // Compress to JPEG
                const dataUrl = canvas.toDataURL('image/jpeg', quality);
                callback(dataUrl);
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }

    // --- Global State Management ---
    const defaultProducts = [
        { id: 1, name: "طقم أطباق ريفي مزخرف", category: "أطباق", desc: "طقم أطباق عشاء فاخر بتصميم ريفي جذاب، يتميز بنقوش نباتية ذات ألوان ترابية هادئة (الأخضر والبني). يضفي لمسة من الدفء والجمال على مائدة الطعام.", price: 550, img: "img10.jpg", stock: 15, sold: 0 },
        { id: 2, name: "طواجن ملونة بغطاء", category: "طواجن", desc: "مجموعة من الطواجن الفخارية الملونة بألوان مبهجة (الأزرق، الأصفر، الأخضر) ومزينة بزخارف يدوية رائعة. تأتي بغطاء محكم للحفاظ على حرارة الطعام، وتعتبر إضافة مبهجة لأي مطبخ.", price: 450, img: "img11.jpg", stock: 10, sold: 2 },
        { id: 3, name: "فازات ديكور أندلسية", category: "ديكور", desc: "فازات فخارية طويلة مزخرفة بنقوش هندسية ونباتية معقدة مستوحاة من الفن الأندلسي العريق. تعتبر تحفة فنية تخطف الأنظار وتناسب أرقى ديكورات المنزل.", price: 380, img: "img12.jpg", stock: 8, sold: 5 },
        { id: 4, name: "أكواب فخارية ملونة", category: "أطباق", desc: "مجموعة من الأكواب (المجات) الفخارية ذات الطلاء الزجاجي اللامع بألوان صلبة ومتنوعة. تصميمها العملي بلمسات التقطير يمنحها طابعاً عفوياً وجميلاً لتقديم المشروبات.", price: 150, img: "img13.jpg", stock: 25, sold: 10 },
        { id: 5, name: "أواني طهي ريفية داكنة", category: "طواجن", desc: "تشكيلة من أواني الطهي الفخارية التقليدية غير المطلية باللون البني الداكن. تشمل أبريقات وطواجن عميقة مزينة بنقوش محفورة يدوياً، مثالية لمحبي الطهي التراثي الأصيل.", price: 650, img: "img14.jpg", stock: 8, sold: 4 },
        { id: 6, name: "مج قهوة بنقشة الفراشة", category: "أطباق", desc: "مج قهوة فخاري رائع مطلي بطبقة لامعة ومزين برسمة فراشة برتقالية زاهية مرسومة يدوياً. يتميز بتصميمه المميز ليكون كوبك المفضل للاستمتاع بقهوتك اليومية.", price: 220, img: "img15.jpg", stock: 12, sold: 3 },
        { id: 7, name: "تحف ومزهريات مزخرفة", category: "ديكور", desc: "مجموعة من المزهريات والتحف الفخارية الفاخرة المطلية بألوان زاهية ولامعة (كالتركواز والأزرق)، والمزينة بنقوش دقيقة لتكون قطعة فنية لا مثيل لها.", price: 420, img: "img16.jpg", stock: 7, sold: 4 },
        { id: 8, name: "أطباق حائط مزخرفة", category: "ديكور", desc: "أطباق فخارية مزخرفة بالكامل برسومات وزخارف يدوية مذهلة متعددة الألوان. مصممة لتُعلق على الحائط كتحف فنية أو لتوضع كزينة مركزية تضفي فخامة على المكان.", price: 580, img: "img17.jpg", stock: 6, sold: 2 },
        { id: 9, name: "جرات فخار طبيعي (قلل)", category: "ديكور", desc: "مجموعة من الجرات والأباريق الفخارية المصنوعة من الطين الطبيعي النقي بدون طلاء. مثالية لحفظ وتبريد الماء بطريقة صحية وطبيعية، وتتميز بتصميم تراثي أصيل.", price: 180, img: "img18.jpg", stock: 20, sold: 15 },
        { id: 10, name: "طواجن طهي تقليدية", category: "طواجن", desc: "طواجن فخارية متينة للطبخ تأتي مع أغطية ومزينة بنقوش بسيطة من الأزهار البيضاء. مصنوعة لتحمل حرارة الفرن العالية ولتعطي الأكل نكهة الفخار الأصلية التي لا تقاوم.", price: 350, img: "img19.jpg", stock: 10, sold: 5 }
    ];

    // Force update local storage for this version to apply new data structure
    if (!localStorage.getItem('products_v4')) {
        localStorage.setItem('products', JSON.stringify(defaultProducts));
        localStorage.setItem('products_v4', 'true');
    }
    let products = JSON.parse(localStorage.getItem('products')) || defaultProducts;

    if (!localStorage.getItem('currentUser')) {
        localStorage.setItem('currentUser', 'guest');
    }
    let currentUser = localStorage.getItem('currentUser');
    
    // Use localStorage for Admin security to prevent frequent logouts
    let isAdmin = localStorage.getItem('isAdmin') === 'true';
    
    // Global Users Management
    let globalUsers = JSON.parse(localStorage.getItem('globalUsers')) || [];

    // Points System Migration & Current Session
    let customerData = JSON.parse(localStorage.getItem('customerData')) || { points: 0, phone: '' };
    if(typeof customerData.points === 'undefined') customerData.points = 0;

    // Payment Settings
    let paymentSettings = JSON.parse(localStorage.getItem('paymentSettings')) || {
        vodafone: '01012345678',
        instapay: 'bayt_alfakhar@instapay',
        bank: '1234 5678 9012 3456'
    };
    
    // Function to save or update global user
    function saveOrUpdateGlobalUser(email, name, phone = '', points = 0, password = '') {
        if(!email) return;
        const existingUserIndex = globalUsers.findIndex(u => u.email === email);
        if(existingUserIndex >= 0) {
            globalUsers[existingUserIndex].name = name || globalUsers[existingUserIndex].name;
            globalUsers[existingUserIndex].phone = phone || globalUsers[existingUserIndex].phone;
            globalUsers[existingUserIndex].points = points !== null ? points : globalUsers[existingUserIndex].points;
            if(password) globalUsers[existingUserIndex].password = password;
        } else {
            globalUsers.push({
                email: email,
                name: name,
                phone: phone,
                points: points,
                password: password,
                joinDate: new Date().toLocaleDateString('ar-EG')
            });
        }
        localStorage.setItem('globalUsers', JSON.stringify(globalUsers));
    }



    // --- Render Products ---
    const productsContainer = document.getElementById('productsContainer');
    const adminTableBody = document.getElementById('adminTableBody');

    // --- Search & Categories ---
    let currentCategory = 'all';
    let searchQuery = '';

    const searchInput = document.getElementById('searchInput');
    const categoryButtons = document.querySelectorAll('.category-btn');

    searchInput?.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderProducts();
    });

    categoryButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.getAttribute('data-category');
            renderProducts();
        });
    });

    // --- Lightbox ---
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');

    function openLightbox(src) {
        if(lightboxImg && lightboxModal) {
            lightboxImg.src = src;
            lightboxModal.classList.add('active');
        }
    }

    function renderProducts() {
        if(!productsContainer) return;
        productsContainer.innerHTML = '';
        
        // Filter products
        let filteredProducts = products.filter(p => {
            const matchesCategory = currentCategory === 'all' || p.category === currentCategory;
            const matchesSearch = p.name.toLowerCase().includes(searchQuery) || p.desc.toLowerCase().includes(searchQuery);
            return matchesCategory && matchesSearch;
        });

        if (filteredProducts.length === 0) {
            productsContainer.innerHTML = '<p style="text-align:center; grid-column: 1 / -1; font-family: var(--font-ar); color: var(--text-secondary); font-size: 1.2rem;">لا توجد منتجات تطابق بحثك.</p>';
        }

        filteredProducts.forEach(p => {
            const outOfStock = p.stock <= 0;
            const card = document.createElement('div');
            card.className = 'glass-card product-card';
            card.innerHTML = `
                <div class="product-image">
                    <img src="${p.img}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover; ${outOfStock ? 'filter: grayscale(1);' : ''}">
                </div>
                <div class="product-info">
                    <h3>${p.name}</h3>
                    <p style="font-family: var(--font-ar); color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 0.5rem; line-height: 1.4;">${p.desc}</p>
                    <div class="stock-info">${outOfStock ? 'نفدت الكمية' : `المتبقي: ${p.stock} قطعة`}</div>
                    <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                        <p class="price" style="margin:0;">${p.price} ج.م</p>
                        <button class="btn-icon add-to-cart-btn" data-id="${p.id}" ${outOfStock ? 'disabled style="background:#ccc; cursor:not-allowed;"' : ''}>+</button>
                    </div>
                    <button class="btn-primary view-details-btn" style="width:100%; margin-top:10px; padding: 0.5rem; font-size: 1rem;" data-id="${p.id}">عرض التفاصيل</button>
                    ${isAdmin ? `<button class="btn-sm btn-edit" style="width:100%; margin-top:10px;" onclick="openAdminProductModal(${p.id})">تعديل المنتج</button>` : ''}
                </div>
            `;
            productsContainer.appendChild(card);

            // Add lightbox event
            const imgEl = card.querySelector('img');
            imgEl.addEventListener('click', () => openLightbox(p.img));
        });

        // Call applyLanguage lightly just for text nodes of newly rendered elements
        applyLanguage(currentLang);

        // Re-attach Add to Cart events
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                if(btn.disabled) return;
                const id = parseInt(btn.getAttribute('data-id'));
                const product = products.find(p => p.id === id);
                if(product) {
                    const existing = cart.find(c => c.id === product.id);
                    if(existing) {
                        if(existing.quantity < product.stock) existing.quantity += 1;
                        else {
                            alert('عذراً، هذه كل الكمية المتاحة في المخزن حالياً.');
                            return;
                        }
                    }
                    else cart.push({ id: product.id, title: product.name, price: product.price, quantity: 1 });
                    updateCart();
                    btn.innerHTML = '✓';
                    btn.style.background = '#4CAF50';
                    setTimeout(() => { btn.innerHTML = '+'; btn.style.background = ''; }, 1000);
                }
            });
        });

        // View Details events
        document.querySelectorAll('.view-details-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(btn.getAttribute('data-id'));
                const product = products.find(p => p.id === id);
                if(product) {
                    const existingCartItem = cart.find(c => c.id === product.id);
                    const currentCartQty = existingCartItem ? existingCartItem.quantity : 0;
                    const availableStock = product.stock - currentCartQty;

                    document.getElementById('detailImg').src = product.img;
                    document.getElementById('detailName').innerText = product.name;
                    document.getElementById('detailPrice').innerText = product.price + ' ج.م';
                    document.getElementById('detailDesc').innerText = product.desc;
                    document.getElementById('detailStock').innerText = availableStock <= 0 ? 'نفدت الكمية' : `المتبقي: ${availableStock} قطعة`;
                    
                    const addToCartBtn = document.getElementById('detailAddToCart');
                    const detailQty = document.getElementById('detailQty');
                    let currentQty = 1;
                    detailQty.innerText = currentQty;

                    if(availableStock <= 0) {
                        addToCartBtn.disabled = true;
                        addToCartBtn.style.background = '#ccc';
                        addToCartBtn.style.cursor = 'not-allowed';
                        addToCartBtn.innerHTML = 'نفدت الكمية';
                    } else {
                        addToCartBtn.disabled = false;
                        addToCartBtn.style.background = '';
                        addToCartBtn.style.cursor = 'pointer';
                        addToCartBtn.innerHTML = 'أضف إلى السلة';

                        document.getElementById('detailQtyPlus').onclick = () => {
                            const latestCartQty = cart.find(c => c.id === product.id)?.quantity || 0;
                            const currentAvailable = product.stock - latestCartQty;
                            if(currentQty < currentAvailable) detailQty.innerText = ++currentQty;
                        };
                        document.getElementById('detailQtyMinus').onclick = () => {
                            if(currentQty > 1) detailQty.innerText = --currentQty;
                        };

                        addToCartBtn.onclick = () => {
                            const existing = cart.find(c => c.id === product.id);
                            if(existing) {
                                if(existing.quantity + currentQty <= product.stock) existing.quantity += currentQty;
                                else existing.quantity = product.stock;
                            }
                            else cart.push({ id: product.id, title: product.name, price: product.price, quantity: currentQty });
                            
                            updateCart();
                            
                            const newCartQty = cart.find(c => c.id === product.id).quantity;
                            const newAvailable = product.stock - newCartQty;
                            document.getElementById('detailStock').innerText = newAvailable <= 0 ? 'نفدت الكمية' : `المتبقي: ${newAvailable} قطعة`;
                            
                            currentQty = 1;
                            detailQty.innerText = currentQty;
                            
                            if(newAvailable <= 0) {
                                addToCartBtn.disabled = true;
                                addToCartBtn.style.background = '#ccc';
                                addToCartBtn.style.cursor = 'not-allowed';
                                addToCartBtn.innerHTML = 'نفدت الكمية';
                            } else {
                                addToCartBtn.innerHTML = 'تمت الإضافة ✓';
                                addToCartBtn.style.background = '#4CAF50';
                                setTimeout(() => { 
                                    addToCartBtn.innerHTML = 'أضف إلى السلة'; 
                                    addToCartBtn.style.background = ''; 
                                }, 1000);
                            }
                        };
                    }
                    document.getElementById('productDetailsModal').classList.add('active');
                }
            });
        });
        
        // Trigger animations
        setTimeout(observeCards, 50);
    }

    function renderAdminDashboard() {
        const adminDashboardOverlay = document.getElementById('adminDashboardOverlay');
        if(!adminDashboardOverlay) return;
        
        if(isAdmin) {
            adminDashboardOverlay.style.display = ''; // ensure no inline style prevents it from showing
            // Populate Settings Form
            const setVodafone = document.getElementById('settingVodafone');
            const setInstapay = document.getElementById('settingInstapay');
            const setBank = document.getElementById('settingBank');
            if(setVodafone) setVodafone.value = paymentSettings.vodafone;
            if(setInstapay) setInstapay.value = paymentSettings.instapay;
            if(setBank) setBank.value = paymentSettings.bank;
            
            // Render Products
            adminTableBody.innerHTML = '';
            products.forEach(p => {
                adminTableBody.innerHTML += `
                    <tr>
                        <td><img src="${p.img}" alt="${p.name}"></td>
                        <td>${p.name}</td>
                        <td>${p.price} ج.م</td>
                        <td style="font-weight:bold; color: ${p.stock <= 2 ? '#d9534f' : 'inherit'}">${p.stock}</td>
                        <td>${p.sold}</td>
                        <td>
                            <button class="btn-sm btn-edit" onclick="openAdminProductModal(${p.id})">تعديل</button>
                            <button class="btn-sm" style="background:#d9534f; margin-top:5px;" onclick="deleteProduct(${p.id})">حذف</button>
                        </td>
                    </tr>
                `;
            });

            // Render Orders & Stats
            const adminOrdersBody = document.getElementById('adminOrdersBody');
            let orders = JSON.parse(localStorage.getItem('orders')) || [];
            let totalRevenue = 0;
            let totalOrders = orders.length;

            if(adminOrdersBody) {
                adminOrdersBody.innerHTML = '';
                if(orders.length === 0) {
                    adminOrdersBody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 2rem;">لا توجد طلبات حالياً</td></tr>';
                } else {
                    orders.slice().reverse().forEach(order => {
                        totalRevenue += parseInt(order.total) || 0;
                        let itemsHtml = order.items.map(item => `<div style="margin-bottom: 5px; font-family: var(--font-ar);">${item.quantity}x ${item.title}</div>`).join('');
                        let stockHtml = order.items.map(item => {
                            const p = products.find(x => x.id === item.id);
                            return `<div style="margin-bottom: 5px; font-family: var(--font-ar); color: ${p && p.stock <= 2 ? '#d9534f' : 'inherit'}">${p ? p.stock : '?'} قطعة</div>`;
                        }).join('');

                        let statusHtml = '';
                        if(order.status === 'pending') {
                            statusHtml = `<span style="display:inline-block; padding: 0.2rem 0.5rem; background:#ff9800; color:white; border-radius:4px; font-size:0.8rem; margin-top:0.5rem;">قيد مراجعة الدفع</span><br>
                                          <button class="btn-sm" style="background:#2196F3; margin-top:5px;" onclick="viewScreenshot('${order.id}')">عرض الإيصال</button>`;
                        } else {
                            statusHtml = `<span style="display:inline-block; padding: 0.2rem 0.5rem; background:#4CAF50; color:white; border-radius:4px; font-size:0.8rem; margin-top:0.5rem;">تم التأكيد</span>`;
                        }

                        adminOrdersBody.innerHTML += `
                            <tr>
                                <td style="font-family: monospace; font-size: 1.1rem;">#${order.id.toString().slice(-6)}<br>${statusHtml}</td>
                                <td style="text-align: right; line-height: 1.6; font-family: var(--font-ar);">
                                    <strong>${order.name}</strong><br>
                                    <span style="font-size: 0.85rem; color: var(--text-secondary);">${order.email}</span><br>
                                    <span style="font-size: 0.85rem; color: var(--text-secondary);">${order.phone}</span>
                                </td>
                                <td style="text-align: right;">${itemsHtml}</td>
                                <td style="text-align: right; font-weight: bold;">${stockHtml}</td>
                                <td style="font-family: var(--font-en); font-weight: bold; font-size: 1.1rem;">${order.total} ج.م</td>
                                <td style="font-size: 0.9rem; font-family: var(--font-ar); color: var(--text-secondary);">${order.date}</td>
                            </tr>
                        `;
                    });
                }
            }

            // Render Stats
            const revenueEl = document.getElementById('adminTotalRevenue');
            if(revenueEl) revenueEl.innerText = totalRevenue;
            const ordersEl = document.getElementById('adminTotalOrders');
            if(ordersEl) ordersEl.innerText = totalOrders;
            const customersEl = document.getElementById('adminTotalCustomers');
            if(customersEl) customersEl.innerText = globalUsers.length;

            // Render Users Table
            const adminUsersBody = document.getElementById('adminUsersBody');
            if(adminUsersBody) {
                adminUsersBody.innerHTML = '';
                if(globalUsers.length === 0) {
                    adminUsersBody.innerHTML = '<tr><td colspan="4" style="text-align: center; padding: 2rem;">لا يوجد عملاء مسجلين</td></tr>';
                } else {
                    globalUsers.slice().reverse().forEach(u => {
                        adminUsersBody.innerHTML += `
                            <tr>
                                <td style="font-family: var(--font-ar); font-weight: bold;">${u.name}</td>
                                <td style="font-family: var(--font-en);">${u.email}</td>
                                <td style="font-family: var(--font-en); font-weight: bold; color: #e6b800;">${u.points}</td>
                                <td style="font-family: var(--font-ar); color: var(--text-secondary);">${u.joinDate}</td>
                            </tr>
                        `;
                    });
                }
            }
            
            applyLanguage(currentLang);
        } else {
            adminDashboardOverlay.classList.remove('active');
        }
    }

    // Global Actions for Admin
    window.deleteProduct = function(id) {
        if(confirm(currentLang === 'ar' ? 'هل أنت متأكد من حذف هذا المنتج؟' : 'Are you sure you want to delete this product?')) {
            products = products.filter(p => p.id !== id);
            localStorage.setItem('products', JSON.stringify(products));
            renderProducts();
            renderAdminDashboard();
        }
    };

    window.viewScreenshot = function(orderId) {
        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        const order = orders.find(o => o.id.toString() === orderId.toString());
        if(order && order.screenshot) {
            document.getElementById('screenshotDisplay').src = order.screenshot;
            const approveBtn = document.getElementById('approvePaymentBtn');
            if(order.status === 'pending') {
                approveBtn.style.display = 'block';
                approveBtn.onclick = () => {
                    order.status = 'approved';
                    localStorage.setItem('orders', JSON.stringify(orders));
                    document.getElementById('screenshotModal').classList.remove('active');
                    renderAdminDashboard();
                    
                    if(currentUser === 'customer' && customerData.email === order.email) {
                        alert(currentLang === 'ar' ? 'رسالة للنظام: تم تأكيد الدفع بنجاح! جاري عرض الإيصال للعميل...' : 'Payment approved! Showing receipt...');
                        showElectronicReceiptAndCert(order.id, order.name, order.paymentMethod, order.total, order.items);
                    } else {
                        alert(currentLang === 'ar' ? 'تم تأكيد الدفع بنجاح!' : 'Payment approved!');
                    }
                };
            } else {
                approveBtn.style.display = 'none';
            }
            document.getElementById('screenshotModal').classList.add('active');
        } else {
            alert(currentLang === 'ar' ? 'لا يوجد صورة إيصال لهذا الطلب.' : 'No screenshot available.');
        }
    };

    // Admin Product Modal Logic
    const adminProductModal = document.getElementById('adminProductModal');
    const adminProductForm = document.getElementById('adminProductForm');

    window.openAdminProductModal = function(id = null) {
        if(id) {
            const p = products.find(x => x.id === id);
            if(!p) return;
            document.getElementById('adminProductModalTitle').innerText = 'تعديل المنتج';
            document.getElementById('adminProductId').value = p.id;
            document.getElementById('adminProductName').value = p.name;
            document.getElementById('adminProductPrice').value = p.price;
            document.getElementById('adminProductStock').value = p.stock;
            document.getElementById('adminProductCategory').value = p.category;
            document.getElementById('adminProductDesc').value = p.desc;
        } else {
            document.getElementById('adminProductModalTitle').innerText = 'إضافة منتج جديد';
            adminProductForm?.reset();
            document.getElementById('adminProductId').value = '';
        }
        adminProductModal?.classList.add('active');
    };

    adminProductForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = document.getElementById('adminProductId').value;
        const name = document.getElementById('adminProductName').value;
        const price = parseInt(document.getElementById('adminProductPrice').value);
        const stock = parseInt(document.getElementById('adminProductStock').value);
        const category = document.getElementById('adminProductCategory').value;
        const desc = document.getElementById('adminProductDesc').value;
        const imageFile = document.getElementById('adminProductImage')?.files[0];

        const saveProduct = (imgDataUrl) => {
            if(id) {
                // Edit
                const p = products.find(x => x.id === parseInt(id));
                if(p) {
                    p.name = name;
                    p.price = price;
                    p.stock = stock;
                    p.category = category;
                    p.desc = desc;
                    if(imgDataUrl) p.img = imgDataUrl;
                }
            } else {
                // Add
                products.push({
                    id: Date.now(),
                    name: name,
                    desc: desc,
                    category: category,
                    price: price,
                    img: imgDataUrl || "img10.jpg",
                    stock: stock,
                    sold: 0
                });
            }
            
            localStorage.setItem('products', JSON.stringify(products));
            renderProducts();
            renderAdminDashboard();
            adminProductModal.classList.remove('active');
            alert(currentLang === 'ar' ? 'تم حفظ المنتج بنجاح' : 'Product saved successfully');
        };

        if(imageFile) {
            compressImage(imageFile, 800, 800, 0.7, saveProduct);
        } else {
            saveProduct(null);
        }
    });

    document.getElementById('addBtnAdmin')?.addEventListener('click', () => {
        openAdminProductModal();
    });

    // --- Modals Logic ---
    const unifiedLoginBtn = document.getElementById('unifiedLoginBtn');
    const authSelectionModal = document.getElementById('authSelectionModal');

    function updateAuthUI() {
        const logoutBtn = document.getElementById('logoutBtnModal');
        if(logoutBtn) {
            if(currentUser !== 'guest' || isAdmin) {
                logoutBtn.style.display = 'block';
            } else {
                logoutBtn.style.display = 'none';
            }
        }
        
        if(unifiedLoginBtn) {
            if(currentUser !== 'guest') {
                const name = customerData.name || 'عميل';
                unifiedLoginBtn.innerText = currentLang === 'ar' ? `مرحباً، ${name.split(' ')[0]}` : `Welcome, ${name.split(' ')[0]}`;
                unifiedLoginBtn.style.background = 'var(--text-primary)';
                unifiedLoginBtn.style.color = '#fff';
            } else if (isAdmin) {
                unifiedLoginBtn.innerText = currentLang === 'ar' ? `مرحباً، الإدارة` : `Welcome, Admin`;
                unifiedLoginBtn.style.background = 'var(--text-primary)';
                unifiedLoginBtn.style.color = '#fff';
            } else {
                unifiedLoginBtn.innerText = translations[currentLang].login;
                unifiedLoginBtn.style.background = 'transparent';
                unifiedLoginBtn.style.color = 'var(--text-primary)';
            }
        }

        const navAdmin = document.getElementById('navAdmin');
        if(navAdmin) navAdmin.style.display = 'none'; // Replaced by Hamburger
        
        const adminHamburger = document.getElementById('adminHamburger');
        if(adminHamburger) {
            adminHamburger.style.display = isAdmin ? 'block' : 'none';
            adminHamburger.innerText = '☰ الإدارة';
        }

        const customerOnlyElements = document.querySelectorAll('.customer-only');
        customerOnlyElements.forEach(el => {
            if(isAdmin) {
                el.style.display = 'none';
            } else {
                if(el.id === 'customerHamburger') {
                    el.style.display = currentUser === 'customer' ? 'block' : 'none';
                } else if(el.id === 'openCartBtn') {
                    el.style.display = 'inline-block';
                } else {
                    el.style.display = 'block';
                }
            }
        });
    }

    // Update Profile points display
    function updatePointsDisplay() {
        const display = document.getElementById('userPointsDisplay');
        if(display) {
            customerData = JSON.parse(localStorage.getItem('customerData')) || { points: 0 };
            display.innerText = customerData.points || 0;
        }
    }

    // Initial Renders
    updateAuthUI();
    renderProducts();
    renderAdminDashboard();
    
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.modal-overlay').classList.remove('active');
        });
    });

    // Menus Logic
    document.getElementById('adminHamburger')?.addEventListener('click', () => {
        document.getElementById('adminDashboardOverlay')?.classList.add('active');
    });

    document.getElementById('customerHamburger')?.addEventListener('click', () => {
        document.getElementById('customerMenuModal')?.classList.add('active');
    });

    // Auth Tabs Logic
    const authTabsBtns = document.querySelectorAll('.auth-tab-btn');
    const authTabContents = document.querySelectorAll('.auth-tab-content');
    
    authTabsBtns.forEach(tab => {
        tab.addEventListener('click', () => {
            authTabsBtns.forEach(t => t.classList.remove('active'));
            authTabContents.forEach(c => c.style.display = 'none');
            
            tab.classList.add('active');
            const targetId = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(targetId);
            if(targetContent) {
                targetContent.style.display = 'block';
            }
        });
    });
    unifiedLoginBtn?.addEventListener('click', () => {
        authSelectionModal.classList.add('active');
        
        // Populate Datalist
        const datalist = document.getElementById('savedEmails');
        if(datalist) {
            datalist.innerHTML = '';
            globalUsers.forEach(u => {
                const option = document.createElement('option');
                option.value = u.email;
                datalist.appendChild(option);
            });
        }
        
        if(customerData && customerData.email && currentUser === 'guest') {
            document.getElementById('loginEmail').value = customerData.email || '';
            document.getElementById('regEmail').value = customerData.email || '';
            document.getElementById('regName').value = customerData.name || '';
        }
    });

    document.getElementById('loginEmail')?.addEventListener('input', (e) => {
        // Just checking email for login, no name needed
    });

    document.getElementById('logoutBtnModal')?.addEventListener('click', () => {
        localStorage.setItem('currentUser', 'guest');
        currentUser = 'guest';
        updateAuthUI();
        renderProducts();
        authSelectionModal.classList.remove('active');
        alert(currentLang === 'ar' ? 'تم تسجيل خروج العميل بنجاح' : 'Customer logged out successfully');
    });

    document.getElementById('adminLogoutBtn')?.addEventListener('click', () => {
        localStorage.removeItem('isAdmin');
        isAdmin = false;
        updateAuthUI();
        renderProducts();
        document.getElementById('adminDashboardOverlay')?.classList.remove('active');
        alert(currentLang === 'ar' ? 'تم تسجيل خروج الإدارة بنجاح' : 'Admin logged out successfully');
    });

    document.getElementById('customerLoginForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const passInput = e.target.querySelector('input[type="password"]');
        const password = passInput ? passInput.value : '';

        const existingUser = globalUsers.find(u => u.email === email);
        if(!existingUser) {
            alert(currentLang === 'ar' ? 'هذا البريد الإلكتروني غير مسجل. يرجى إنشاء حساب جديد.' : 'Email not registered. Please create an account.');
            return;
        }
        if(existingUser.password && existingUser.password !== password) {
            alert(currentLang === 'ar' ? 'كلمة المرور غير صحيحة.' : 'Incorrect password.');
            return;
        }

        localStorage.setItem('currentUser', 'customer');
        currentUser = 'customer';
        customerData = { name: existingUser.name, email: existingUser.email, points: existingUser.points, phone: existingUser.phone };
        localStorage.setItem('customerData', JSON.stringify(customerData));
        alert(currentLang === 'ar' ? 'تم تسجيل الدخول بنجاح!' : 'Logged in successfully!');
        authSelectionModal.classList.remove('active');
        if(passInput) passInput.value = '';
        updateAuthUI();
        updatePointsDisplay();
        renderAdminDashboard();
        renderProducts();
    });

    document.getElementById('customerRegisterForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const phone = document.getElementById('regPhone').value;
        const passInput = e.target.querySelector('input[type="password"]');
        const password = passInput ? passInput.value : '';

        const existingUser = globalUsers.find(u => u.email === email);
        if(existingUser) {
            alert(currentLang === 'ar' ? 'هذا البريد الإلكتروني مسجل بالفعل. يرجى تسجيل الدخول.' : 'Email already registered. Please login.');
            return;
        }
        localStorage.setItem('currentUser', 'customer');
        currentUser = 'customer';
        customerData = { name: name, email: email, points: 0, phone: phone };
        localStorage.setItem('customerData', JSON.stringify(customerData));
        saveOrUpdateGlobalUser(email, name, phone, 0, password);
        alert(currentLang === 'ar' ? 'تم إنشاء الحساب بنجاح!' : 'Account created successfully!');
        authSelectionModal.classList.remove('active');
        if(passInput) passInput.value = '';
        updateAuthUI();
        updatePointsDisplay();
        renderAdminDashboard();
        renderProducts();
    });

    document.getElementById('adminForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        localStorage.setItem('isAdmin', 'true');
        isAdmin = true;
        alert('تم تسجيل دخول الإدارة بنجاح!');
        document.getElementById('adminLoginModal')?.classList.remove('active');
        updateAuthUI();
        renderAdminDashboard();
        renderProducts();
    });

    document.getElementById('openAdminLoginBtn')?.addEventListener('click', () => {
        if(isAdmin) {
            document.getElementById('adminDashboardOverlay')?.classList.add('active');
        } else {
            document.getElementById('adminLoginModal')?.classList.add('active');
        }
    });

    document.getElementById('openCertFromReceiptBtn')?.addEventListener('click', () => {
        document.getElementById('receiptModal')?.classList.remove('active');
        setTimeout(() => {
            document.getElementById('certificateModal')?.classList.add('active');
        }, 100);
    });


    // --- Shopping Cart & Checkout ---
    let cart = [];
    const cartCount = document.getElementById('cartCount');
    const totalPriceEl = document.getElementById('totalPrice');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartOverlay = document.getElementById('cartOverlay');

    function toggleCart() {
        cartDrawer.classList.toggle('open');
        cartOverlay.classList.toggle('show');
    }
    document.getElementById('cartBtn')?.addEventListener('click', toggleCart);
    document.getElementById('closeCart')?.addEventListener('click', toggleCart);
    cartOverlay?.addEventListener('click', toggleCart);

    function updateCart() {
        let totalItems = 0;
        cart.forEach(item => totalItems += item.quantity);
        cartCount.innerText = totalItems;
        
        if(cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align:center; margin-top:2rem; color:var(--text-secondary);">السلة فارغة حالياً</p>';
            totalPriceEl.innerText = '0';
            return;
        }

        cartItemsContainer.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
            total += item.price * item.quantity;
            cartItemsContainer.innerHTML += `
                <div class="cart-item">
                    <div style="flex: 1;">
                        <h4 style="margin-bottom: 0.5rem;">${item.title}</h4>
                        <span class="item-price">${item.price} ج.م</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <div class="qty-controls" style="padding: 0.2rem; border-radius: 6px;">
                            <button class="qty-btn" onclick="updateCartItemQty(${index}, -1)" style="padding: 0.2rem 0.5rem; font-size: 1rem;">-</button>
                            <span style="font-family: var(--font-en); font-weight: bold; width: 25px; text-align: center;">${item.quantity}</span>
                            <button class="qty-btn" onclick="updateCartItemQty(${index}, 1)" style="padding: 0.2rem 0.5rem; font-size: 1rem;">+</button>
                        </div>
                        <button class="remove-item-btn" onclick="removeCartItem(${index})" style="background: none; border: none; color: #d9534f; font-size: 1.5rem; cursor: pointer; line-height: 1;">&times;</button>
                    </div>
                </div>
            `;
        });
        
        // Dynamic Delivery Fee
        const shippingRegionSelect = document.getElementById('shippingRegion');
        const deliveryFee = parseInt(shippingRegionSelect ? shippingRegionSelect.value : 50);
        total += deliveryFee;
        
        cartItemsContainer.innerHTML += `
            <div class="cart-item" style="border-top: 1px dashed rgba(0,0,0,0.2);">
                <h4 style="color: var(--text-secondary);">رسوم التوصيل</h4>
                <span class="item-price">${deliveryFee} ج.م</span>
            </div>
        `;
        totalPriceEl.innerText = total;
        applyLanguage(currentLang);
    }

    window.updateCartItemQty = function(index, change) {
        if (cart[index]) {
            const product = products.find(p => p.id === cart[index].id);
            if(change > 0 && product && cart[index].quantity >= product.stock) {
                alert('عذراً، هذه كل الكمية المتاحة في المخزن حالياً.');
                return;
            }
            cart[index].quantity += change;
            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
            updateCart();
        }
    };

    window.removeCartItem = function(index) {
        cart.splice(index, 1);
        updateCart();
    };

    document.getElementById('checkoutBtn')?.addEventListener('click', () => {
        if(cart.length === 0) {
            alert(currentLang === 'ar' ? 'السلة فارغة!' : 'Cart is empty!');
            return;
        }
        document.getElementById('checkoutModal').classList.add('active');
        // Auto-fill
        if(currentUser === 'customer') {
            document.getElementById('checkoutName').value = customerData.name || '';
            document.getElementById('checkoutPhone').value = customerData.phone || '';
        }
    });

    document.getElementById('requestDeliveryBtn')?.addEventListener('click', () => {
        if(cart.length === 0) {
            alert(currentLang === 'ar' ? 'السلة فارغة! برجاء إضافة منتجات أولاً.' : 'Cart is empty! Please add products first.');
            if(!cartDrawer.classList.contains('open')) toggleCart();
            return;
        }
        document.getElementById('checkoutModal').classList.add('active');
        if(currentUser === 'customer') {
            document.getElementById('checkoutName').value = customerData.name || '';
            document.getElementById('checkoutPhone').value = customerData.phone || '';
        }
    });

    const checkoutPayment = document.getElementById('checkoutPayment');
    const paymentScreenshotContainer = document.getElementById('paymentScreenshotContainer');
    const paymentScreenshotInput = document.getElementById('paymentScreenshot');
    const paymentInstructions = document.getElementById('paymentInstructions');
    const paymentInstText = document.getElementById('paymentInstText');

    checkoutPayment?.addEventListener('change', (e) => {
        const val = e.target.value;
        if(val === 'instapay' || val === 'vodafone' || val === 'bank') {
            if(paymentScreenshotContainer) paymentScreenshotContainer.style.display = 'block';
            if(paymentScreenshotInput) paymentScreenshotInput.required = true;
            if(paymentInstructions) paymentInstructions.style.display = 'block';
            
            if(val === 'vodafone') {
                paymentInstText.innerHTML = `رقم فودافون كاش: <span style="font-family: monospace; font-size: 1.2rem; color: #e60000; direction: ltr; display: inline-block;">${paymentSettings.vodafone}</span><br><span style="font-size: 0.9rem; font-weight: normal;">يرجى تحويل المبلغ ثم إرفاق صورة الإيصال أو رسالة التأكيد.</span>`;
            } else if(val === 'instapay') {
                paymentInstText.innerHTML = `عنوان إنستا باي: <span style="font-family: monospace; font-size: 1.2rem; color: #8a2be2; direction: ltr; display: inline-block;">${paymentSettings.instapay}</span><br><span style="font-size: 0.9rem; font-weight: normal;">يرجى تحويل المبلغ ثم إرفاق صورة الإيصال.</span>`;
            } else if(val === 'bank') {
                paymentInstText.innerHTML = `رقم الحساب البنكي: <span style="font-family: monospace; font-size: 1.2rem; color: #008000; direction: ltr; display: inline-block;">${paymentSettings.bank}</span><br>الاسم: بيت الفخار<br><span style="font-size: 0.9rem; font-weight: normal;">يرجى تحويل المبلغ ثم إرفاق صورة الإيصال البنكي.</span>`;
            }
        } else {
            if(paymentScreenshotContainer) paymentScreenshotContainer.style.display = 'none';
            if(paymentScreenshotInput) paymentScreenshotInput.required = false;
            if(paymentInstructions) paymentInstructions.style.display = 'none';
        }
    });

    document.getElementById('checkoutForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const finalItems = [...cart];

        // Deduct Stock & Increment Sold
        finalItems.forEach(item => {
            const p = products.find(x => x.id === item.id);
            if(p && p.stock >= item.quantity) {
                p.stock -= item.quantity;
                p.sold += item.quantity;
            }
        });
        localStorage.setItem('products', JSON.stringify(products));

        // Save Order
        const paymentMethod = document.getElementById('checkoutPayment').value;
        const checkoutName = document.getElementById('checkoutName').value;
        const checkoutPhone = document.getElementById('checkoutPhone').value;
        const finalTotal = parseInt(totalPriceEl.innerText);
        const orderId = Date.now();

        const finalizeOrder = (screenshotDataUrl) => {
            const isElectronic = (paymentMethod === 'instapay' || paymentMethod === 'vodafone' || paymentMethod === 'bank');
            const status = isElectronic ? 'pending' : 'approved'; // Manual payment requires approval
            
            const order = {
                id: orderId,
                name: checkoutName,
                email: customerData.email || 'غير مسجل',
                phone: checkoutPhone,
                items: finalItems, // Array of {id, title, price, quantity}
                total: finalTotal,
                date: new Date().toLocaleString('ar-EG'),
                paymentMethod: paymentMethod,
                status: status,
                screenshot: screenshotDataUrl
            };
            let orders = JSON.parse(localStorage.getItem('orders')) || [];
            orders.push(order);
            localStorage.setItem('orders', JSON.stringify(orders));
            
            // Add Loyalty Points
            if(currentUser === 'customer') {
                customerData.phone = checkoutPhone;
                const pointsEarned = Math.floor(finalTotal / 10);
                customerData.points += pointsEarned;
                localStorage.setItem('customerData', JSON.stringify(customerData));
                saveOrUpdateGlobalUser(customerData.email, customerData.name, checkoutPhone, customerData.points);
                updatePointsDisplay();
            }

            if(status === 'pending') {
                alert(currentLang === 'ar' ? 'تم استلام طلبك وجاري مراجعة إيصال التحويل. ستصلك رسالة التأكيد قريباً.' : 'Order received! Pending payment verification.');
            } else {
                alert(currentLang === 'ar' ? 'تم تأكيد طلبك بنجاح! شكراً لتسوقك من بيت الفخار.' : 'Order confirmed successfully! Thank you for shopping with us.');
                if(paymentMethod === 'card') {
                    showElectronicReceiptAndCert(orderId, checkoutName, paymentMethod, finalTotal, finalItems);
                }
            }

            cart = [];
            updateCart();
            toggleCart();
            document.getElementById('checkoutModal').classList.remove('active');
            e.target.reset();
            if(paymentScreenshotContainer) paymentScreenshotContainer.style.display = 'none';
            
            renderProducts();
            renderAdminDashboard();
        };

        const imageFile = paymentScreenshotInput?.files[0];
        if(imageFile && paymentScreenshotContainer && paymentScreenshotContainer.style.display !== 'none') {
            compressImage(imageFile, 800, 800, 0.7, finalizeOrder);
        } else {
            finalizeOrder(null);
        }
    });

    window.showElectronicReceiptAndCert = function(orderId, name, method, total, items) {
        const electronicMethods = {
            'card': 'بطاقة ائتمان',
            'instapay': 'إنستا باي (InstaPay)',
            'vodafone': 'فودافون كاش'
        };
        // Populate Receipt
        const receiptOrderIdEl = document.getElementById('receiptOrderId');
        if(receiptOrderIdEl) receiptOrderIdEl.innerText = '#' + orderId.toString().slice(-6);
        document.getElementById('receiptDate').innerText = new Date().toLocaleDateString('ar-EG');
        document.getElementById('receiptName').innerText = name;
        document.getElementById('receiptMethod').innerText = electronicMethods[method] || method;
        
        const shippingRegionSelect = document.getElementById('shippingRegion');
        const deliveryFee = parseInt(shippingRegionSelect ? shippingRegionSelect.value : 50);
        document.getElementById('receiptShipping').innerText = deliveryFee;
        document.getElementById('receiptTotal').innerText = total;
        
        let itemsHtml = '';
        Object.values(items).forEach(item => {
            itemsHtml += `<div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span>${item.quantity}x ${item.title}</span>
                            <span style="font-family: monospace;">${item.price * item.quantity} ج.م</span>
                          </div>`;
        });
        document.getElementById('receiptItems').innerHTML = itemsHtml;
        
        // Populate Certificate
        document.getElementById('certOrderId').innerText = '#' + orderId.toString().slice(-6);
        document.getElementById('certCustomerName').innerText = name;
        document.getElementById('certDate').innerText = new Date().toLocaleDateString('ar-EG');
        
        setTimeout(() => {
            const rModal = document.getElementById('receiptModal');
            if(rModal) rModal.classList.add('active');
        }, 500);
    };

    // --- Loyalty, Profile & Photo Share Logic ---
    const profileModal = document.getElementById('profileModal');
    
    // Run on initial load and after auth changes
    const originalUpdateAuthUI = updateAuthUI;
    updateAuthUI = function() {
        originalUpdateAuthUI();
    };

    document.getElementById('menuOpenProfileBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('customerMenuModal')?.classList.remove('active');
        updatePointsDisplay();
        
        // Populate Details
        if(currentUser === 'customer') {
            document.getElementById('profName').value = customerData.name || '';
            document.getElementById('profEmail').value = customerData.email || '';
            document.getElementById('profPhone').value = customerData.phone || '';
            
            // Populate Orders
            const userOrdersList = document.getElementById('userOrdersList');
            if(userOrdersList) {
                userOrdersList.innerHTML = '';
                let allOrders = JSON.parse(localStorage.getItem('orders')) || [];
                let myOrders = allOrders.filter(o => o.email === customerData.email);
                
                if(myOrders.length === 0) {
                    userOrdersList.innerHTML = `<p style="text-align:center; color:var(--text-secondary);">${currentLang === 'ar' ? 'لا توجد طلبات سابقة.' : 'No previous orders.'}</p>`;
                } else {
                    myOrders.slice().reverse().forEach(o => {
                        let isConfirmed = (o.status !== 'pending');
                        let itemsStr = o.items.map(i => {
                            let rateBtn = isConfirmed ? `<span style="font-size:0.85rem; color:#e6b800; cursor:pointer; display:inline-block; margin-right:10px; padding: 2px 5px; border: 1px solid #e6b800; border-radius: 4px; background: rgba(230, 184, 0, 0.1);" onclick="openReviewModal('${i.title.replace(/'/g, "\\'")}')">★ قيم المنتج</span>` : '';
                            return `<div style="margin-bottom: 5px; direction: ${currentLang==='ar'?'rtl':'ltr'};">${i.quantity}x ${i.title} ${rateBtn}</div>`;
                        }).join('');
                        
                        let statusStr = '';
                        let actionsHtml = '';
                        if(!isConfirmed) {
                            statusStr = currentLang === 'ar' ? 'قيد المراجعة' : 'Pending';
                        } else {
                            statusStr = currentLang === 'ar' ? 'مؤكد' : 'Confirmed';
                            if(o.paymentMethod !== 'cash') {
                                actionsHtml = `<button class="btn-sm" style="background:#4CAF50; width:100%; margin-top:10px;" onclick="showElectronicReceiptAndCert(${o.id}, '${o.name}', '${o.paymentMethod}', ${o.total}, ${JSON.stringify(o.items).replace(/"/g, '&quot;')})">${currentLang === 'ar' ? 'عرض الإيصال والشهادة' : 'View Receipt & Certificate'}</button>`;
                            }
                        }

                        userOrdersList.innerHTML += `
                            <div style="border: 1px solid var(--glass-border); padding: 1rem; border-radius: 8px; background: rgba(255,255,255,0.4); text-align: right;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; flex-direction: ${currentLang==='ar'?'row':'row-reverse'};">
                                    <strong style="font-family: monospace; color: var(--text-primary);">#${o.id.toString().slice(-6)}</strong>
                                    <span style="color: ${o.status==='pending' ? '#ff9800' : '#4CAF50'}; font-weight:bold;">${statusStr}</span>
                                </div>
                                <span style="color: var(--text-secondary); font-size: 0.9rem; display:block; margin-bottom: 0.5rem;">${o.date}</span>
                                <div style="font-family: var(--font-ar); margin-bottom: 0.5rem; font-size: 0.9rem; color: var(--text-secondary);">${itemsStr}</div>
                                <div style="font-weight: bold; font-family: var(--font-en); color: var(--text-primary); direction: ltr;">${o.total} EGP</div>
                                ${actionsHtml}
                            </div>
                        `;
                    });
                }
            }
        }

        profileModal.classList.add('active');
    });

    // Account Tabs Logic
    const accountTabs = document.querySelectorAll('.account-tab-btn');
    const accountContents = document.querySelectorAll('.account-tab-content');
    
    accountTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            accountTabs.forEach(t => t.classList.remove('active'));
            accountContents.forEach(c => c.style.display = 'none');
            
            tab.classList.add('active');
            document.getElementById(tab.getAttribute('data-tab')).style.display = 'block';
        });
    });

    // Update Profile Logic
    document.getElementById('updateProfileForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        if(currentUser === 'customer') {
            const newName = document.getElementById('profName').value;
            const newEmail = document.getElementById('profEmail').value;
            const newPhone = document.getElementById('profPhone').value;
            const newPassword = document.getElementById('profPassword') ? document.getElementById('profPassword').value : '';
            
            customerData.name = newName;
            customerData.email = newEmail;
            customerData.phone = newPhone;
            
            localStorage.setItem('customerData', JSON.stringify(customerData));
            saveOrUpdateGlobalUser(newEmail, newName, newPhone, customerData.points, newPassword);
            
            alert(currentLang === 'ar' ? 'تم تحديث بياناتك بنجاح!' : 'Profile updated successfully!');
            if(document.getElementById('profPassword')) document.getElementById('profPassword').value = '';
            
            updateAuthUI();
            renderAdminDashboard();
        }
    });

    const openSharePhotoBtn = document.getElementById('openSharePhotoBtn');
    const sharePhotoModal = document.getElementById('sharePhotoModal');
    
    openSharePhotoBtn?.addEventListener('click', () => {
        profileModal.classList.remove('active');
        sharePhotoModal.classList.add('active');
    });

    document.getElementById('sharePhotoForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add 20 points
        if(currentUser === 'customer') {
            customerData.points += 20;
            localStorage.setItem('customerData', JSON.stringify(customerData));
            updatePointsDisplay();
            alert('تم رفع الصورة بنجاح! تم إضافة ٢٠ نقطة إلى رصيدك. شكراً لمشاركتك معنا.');
        }
        sharePhotoModal.classList.remove('active');
        e.target.reset();
    });

    // --- Feasibility Study Logic ---
    const openFeasibilityBtn = document.getElementById('openFeasibilityBtn');
    const feasibilityModal = document.getElementById('feasibilityModal');
    const feasibilityForm = document.getElementById('feasibilityForm');
    const feasibilityResult = document.getElementById('feasibilityResult');

    openFeasibilityBtn?.addEventListener('click', () => {
        feasibilityModal.classList.add('active');
        feasibilityResult.style.display = 'none';
        feasibilityForm.reset();
    });

    feasibilityForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const items = parseInt(document.getElementById('f_items').value);
        const avgPrice = parseInt(document.getElementById('f_avgPrice').value);
        
        const total = items * avgPrice;
        const discounted = total * 0.8; // 20% discount
        const savings = total - discounted;

        document.getElementById('f_total').innerText = total;
        document.getElementById('f_discounted').innerText = discounted;
        document.getElementById('f_savings').innerText = savings;
        
        feasibilityResult.style.display = 'block';
    });

    // --- Order Tracking Logic ---
    const trackingModal = document.getElementById('trackingModal');
    const trackingForm = document.getElementById('trackingForm');
    const trackingTimeline = document.getElementById('trackingTimeline');
    const trackingError = document.getElementById('trackingError');

    document.getElementById('menuOpenTrackingBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('customerMenuModal')?.classList.remove('active');
        trackingModal.classList.add('active');
        trackingTimeline.style.display = 'none';
        trackingError.style.display = 'none';
        trackingForm.reset();
    });

    trackingForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputId = document.getElementById('trackOrderId').value.replace('#', '').trim();
        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        
        // Find order by ID
        const order = orders.find(o => o.id.toString() === inputId || o.id.toString().slice(-6) === inputId);
        
        if(order) {
            trackingError.style.display = 'none';
            trackingTimeline.style.display = 'block';
            
            // Randomize state based on order ID for demo purposes
            const steps = document.querySelectorAll('.timeline-step');
            steps.forEach(s => { s.classList.remove('active'); s.classList.remove('current'); });
            
            const randomStage = parseInt(order.id.toString().slice(-1)) % 5; // 0 to 4
            
            steps.forEach((step, index) => {
                if(index < randomStage) {
                    step.classList.add('active');
                } else if(index === randomStage) {
                    step.classList.add('current');
                }
            });
            
        } else {
            trackingTimeline.style.display = 'none';
            trackingError.style.display = 'block';
        }
    });

    // --- Dynamic Shipping Cost Event ---
    document.getElementById('shippingRegion')?.addEventListener('change', () => {
        if(cart.length > 0) {
            updateCart();
        }
    });

    // --- Lightbox triggers for newly added images ---
    // Event delegation for lightbox triggers (works for dynamic elements too)
    document.body.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox-trigger')) {
            openLightbox(e.target.src);
        }
    });

    // --- Reviews Logic ---
    document.getElementById('addReviewBtn')?.addEventListener('click', () => {
        document.getElementById('reviewModal').classList.add('active');
    });

    window.openReviewModal = function(productName) {
        document.getElementById('reviewModal').classList.add('active');
        const textEl = document.getElementById('reviewText');
        if(textEl) {
            textEl.value = `رأيي في منتج (${productName}):\n`;
            textEl.focus();
        }
        if(currentUser === 'customer' && customerData) {
            const nameEl = document.getElementById('reviewerName');
            if(nameEl && !nameEl.value) nameEl.value = customerData.name || '';
        }
    };

    const stars = document.querySelectorAll('#starRating span');
    let currentRating = 5;
    
    // Set default stars to yellow
    stars.forEach(s => s.style.color = '#e6b800');

    stars.forEach(star => {
        star.addEventListener('click', (e) => {
            currentRating = parseInt(e.target.getAttribute('data-value'));
            document.getElementById('reviewStars').value = currentRating;
            stars.forEach(s => {
                if(parseInt(s.getAttribute('data-value')) <= currentRating) s.style.color = '#e6b800';
                else s.style.color = '#ccc';
            });
        });
    });

    document.getElementById('reviewForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('reviewerName').value;
        const text = document.getElementById('reviewText').value;
        
        const reviewsGrid = document.querySelector('.reviews-grid');
        const newReview = document.createElement('div');
        newReview.className = 'glass-card review-card';
        newReview.innerHTML = `
            <div class="stars" style="color: #e6b800;">${'★'.repeat(currentRating)}${'☆'.repeat(5-currentRating)}</div>
            <p class="review-text">"${text}"</p>
            <h4 class="reviewer-name">- ${name}</h4>
        `;
        reviewsGrid.prepend(newReview);
        
        alert('تم إضافة تقييمك بنجاح! شكراً لك.');
        document.getElementById('reviewModal').classList.remove('active');
        e.target.reset();
        currentRating = 5;
        stars.forEach(s => s.style.color = '#e6b800');
    });

    // --- Interactive Map & Packaging Logic ---
    const packagingBtn = document.getElementById('packagingBtn');
    const packagingModal = document.getElementById('packagingModal');

    packagingBtn?.addEventListener('click', () => {
        packagingModal.classList.add('active');
    });

    const regionData = {
        fayoum: {
            title: "فخار قرية تونس (الفيوم)",
            desc: "يتميز فخار الفيوم بألوانه الزاهية والمبهجة ورسوماته العفوية التي تعكس طبيعة الريف المصري الجميلة من طيور ونخيل.",
            img: "fayoum.png"
        },
        fustat: {
            title: "الفخار المزجج (الفسطاط)",
            desc: "فخار الفسطاط يشتهر بطبقته الزجاجية اللامعة (التزجيج) وألوانه العميقة مثل الأزرق الفيروزي، ويتميز بنقوشه الإسلامية والهندسية الدقيقة.",
            img: "fustat.png"
        },
        qena: {
            title: "الفخار التقليدي الأصيل (قنا)",
            desc: "الفخار القنائي هو الأقدم والأكثر أصالة، يتميز باللون الطبيعي للطين وعدم طلائه بالزجاج، مما يجعله مثالياً لتبريد المياه (مثل القلل والأزيار) بفضل مسامه الدقيقة.",
            img: "qena.png"
        }
    };

    const mapBtns = document.querySelectorAll('.map-btn');
    const regionImg = document.getElementById('regionImg');
    const regionTitle = document.getElementById('regionTitle');
    const regionDesc = document.getElementById('regionDesc');
    const regionDisplay = document.getElementById('regionDisplay');

    mapBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class
            mapBtns.forEach(b => b.classList.remove('active'));
            // Add active class
            e.target.classList.add('active');

            const region = e.target.getAttribute('data-region');
            const data = regionData[region];

            // Animate transition
            regionDisplay.style.opacity = '0';
            
            setTimeout(() => {
                regionImg.src = data.img;
                regionTitle.innerText = data.title;
                regionDesc.innerText = data.desc;
                regionDisplay.style.opacity = '1';
                applyLanguage(currentLang);
            }, 300);
        });
    });

    // --- Parallax & Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // We must observe dynamically created cards via a MutationObserver or just observe them after rendering
    function observeCards() {
        document.querySelectorAll('.product-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }
    // Call this once after initial render
    setTimeout(observeCards, 100);

    const orbs = document.querySelectorAll('.bg-orb');
    document.addEventListener('mousemove', (e) => {
        const xOffset1 = (window.innerWidth / 2 - e.pageX) / 40;
        const yOffset1 = (window.innerHeight / 2 - e.pageY) / 40;
        const xOffset2 = (window.innerWidth / 2 - e.pageX) / 60;
        const yOffset2 = (window.innerHeight / 2 - e.pageY) / 60;
        const xOffset3 = (window.innerWidth / 2 - e.pageX) / 80;
        const yOffset3 = (window.innerHeight / 2 - e.pageY) / 80;

        if(orbs[0]) orbs[0].style.transform = `translate(${xOffset1}px, ${yOffset1}px)`;
        if(orbs[1]) orbs[1].style.transform = `translate(${xOffset2}px, ${yOffset2}px)`;
        if(orbs[2]) orbs[2].style.transform = `translate(${xOffset3}px, ${yOffset3}px)`;
    });

    // --- Admin Dashboard Tabs Logic ---
    const adminTabs = document.querySelectorAll('.admin-tab-btn');
    const adminTabContents = document.querySelectorAll('.admin-tab-content');
    
    adminTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            adminTabs.forEach(t => t.classList.remove('active'));
            adminTabContents.forEach(c => c.style.display = 'none');
            
            tab.classList.add('active');
            document.getElementById(tab.getAttribute('data-tab')).style.display = 'block';
        });
    });


    document.getElementById('paymentSettingsForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        paymentSettings.vodafone = document.getElementById('settingVodafone').value;
        paymentSettings.instapay = document.getElementById('settingInstapay').value;
        paymentSettings.bank = document.getElementById('settingBank').value;
        localStorage.setItem('paymentSettings', JSON.stringify(paymentSettings));
        alert('تم حفظ إعدادات الدفع بنجاح!');
    });

    document.getElementById('adminLogoutBtn')?.addEventListener('click', () => {
        localStorage.removeItem('isAdmin');
        isAdmin = false;
        renderAdminDashboard();
        alert('تم تسجيل خروج الإدارة بنجاح!');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});
