export type Product = {
  slug: string;
  t: string;
  tag: string;
  d: string;
  k: string[];
  m: { t: string; d: string }[];
};

export const photo = (slug: string) => `/photos/${slug}.jpg`;

export const services = [
  { t: "Cloud-Based Web Applications", d: "Full-stack web solutions designed to scale with your business.", img: "/photos/webapp.jpg" },
  { t: "Cross-Platform Mobile Apps", d: "Beautiful, responsive mobile applications that work seamlessly across iOS and Android.", img: "/photos/mobile.jpg" },
  { t: "IoT Solutions", d: "Connect and automate your devices with cutting-edge Internet of Things technology.", img: "/photos/iot.jpg" },
  { t: "AI Integration", d: "Harness the power of artificial intelligence to transform your business processes.", img: "/photos/ai.jpg" },
  { t: "Website Development", d: "Professional, modern websites that represent your brand and engage your customers.", img: "/photos/website.jpg" },
  { t: "Business Automation", d: "Streamline your operations and increase efficiency with intelligent automation solutions.", img: "/photos/automation.jpg" },
];

export const products: Product[] = [
  {
    slug: "patient-care-system", t: "Patient Care System", tag: "Healthcare",
    d: "Healthcare management solution for clinics and hospitals: patient records, appointments, billing and reports.",
    k: ["Patients", "Appointments", "Billing"],
    m: [
      { t: "Patient registration", d: "Capture and manage complete patient records in one place." },
      { t: "Doctor scheduling", d: "Appointments and schedules that keep clinics running on time." },
      { t: "Prescriptions", d: "Digital prescriptions and visit history at a glance." },
      { t: "Billing & reports", d: "Invoices, collections and management reports." },
    ],
  },
  {
    slug: "point-of-sale-system", t: "Point-of-Sale System", tag: "Retail & Distribution",
    d: "Multi-tenant POS with inventory management for retail and distribution businesses.",
    k: ["Sales", "Stock", "Customers"],
    m: [
      { t: "Fast checkout", d: "A quick, intuitive sales screen built for busy counters." },
      { t: "Inventory control", d: "Track stock levels across products and locations." },
      { t: "Purchases & suppliers", d: "Manage purchasing and supplier accounts." },
      { t: "Sales reports", d: "Daily, monthly and product-wise performance reports." },
    ],
  },
  {
    slug: "medistore", t: "MediStore", tag: "Pharmacy",
    d: "Medical store software for billing, stock and expiry control.",
    k: ["Medicines", "Expiry", "Suppliers"],
    m: [
      { t: "Medicine billing", d: "Quick, accurate billing for pharmacy counters." },
      { t: "Batch & expiry tracking", d: "Never sell or hold expired stock unnoticed." },
      { t: "Purchase orders", d: "Order from suppliers and track what is due." },
      { t: "Profit reports", d: "Understand margins by product and period." },
    ],
  },
  {
    slug: "restaurant-management", t: "Restaurant Management", tag: "Food & Hospitality",
    d: "Orders, waiters, kitchen and billing in one connected system.",
    k: ["Orders", "Tables", "Kitchen"],
    m: [
      { t: "Table orders", d: "Take and manage orders per table." },
      { t: "Waiter workflow", d: "Waiters send orders straight to the kitchen." },
      { t: "Kitchen display", d: "The kitchen sees every order in real time." },
      { t: "Billing", d: "Fast, accurate bills and daily summaries." },
    ],
  },
  {
    slug: "lab-management-system", t: "Lab Management System", tag: "Laboratories",
    d: "Laboratory operations with sample tracking from collection to report.",
    k: ["Samples", "Tests", "Reports"],
    m: [
      { t: "Sample tracking", d: "Follow every sample from collection to result." },
      { t: "Test results", d: "Enter, verify and approve results." },
      { t: "Report delivery", d: "Professional reports ready to share." },
      { t: "Billing", d: "Invoices and payments tied to each test." },
    ],
  },
  {
    slug: "complaints-management-system", t: "Complaints Management System", tag: "Deployed with CCI Pakistan",
    d: "Track, assign and resolve complaints end to end with full visibility.",
    k: ["Open", "In progress", "Resolved"],
    m: [
      { t: "Complaint intake", d: "Capture complaints through a simple, structured form." },
      { t: "Assignment", d: "Route each case to the right person." },
      { t: "Status tracking", d: "Everyone sees where every case stands." },
      { t: "Analytics", d: "Spot patterns and measure resolution performance." },
    ],
  },
  {
    slug: "university-access-attendance", t: "University Access & Attendance", tag: "Education",
    d: "Access control and attendance management for educational institutions.",
    k: ["Students", "Entries", "Attendance"],
    m: [
      { t: "Access control", d: "Manage who can enter and when." },
      { t: "Attendance", d: "Automatic, reliable attendance records." },
      { t: "Reports", d: "Attendance and access reports for administrators." },
      { t: "Alerts", d: "Keep parents and staff informed." },
    ],
  },
  {
    slug: "grocery-store-website", t: "Grocery Store Website", tag: "E-Commerce",
    d: "A fast online catalogue and ordering experience for grocery retailers.",
    k: ["Products", "Orders", "Customers"],
    m: [
      { t: "Product catalogue", d: "A clean, searchable catalogue of products." },
      { t: "Search & filters", d: "Customers find items quickly." },
      { t: "Online orders", d: "Simple ordering from any device." },
      { t: "Admin panel", d: "Manage products and orders easily." },
    ],
  },
  {
    slug: "custom-website-solutions", t: "Custom Website Solutions", tag: "Digital Presence",
    d: "Tailored, modern websites that represent your brand and engage customers.",
    k: ["Pages", "Speed", "SEO"],
    m: [
      { t: "Brand-led design", d: "A look that reflects your company." },
      { t: "Responsive build", d: "Flawless on phones, tablets and desktops." },
      { t: "SEO ready", d: "Structured to be found on search engines." },
      { t: "Easy updates", d: "Change content without a developer." },
    ],
  },
];

export type Detail = {
  overview: string[];
  features: { t: string; d: string }[];
  audience: string[];
  benefits: string[];
  challenge: string;
  solution: string;
  outcome: string;
};

// Long-form product information shown on each product page
export const details: Record<string, Detail> = {
  "patient-care-system": {
    overview: [
      "Patient Care System is a clinic and hospital management platform. Reception registers patients and records vital signs, doctors record visits, diagnoses and treatments, the laboratory handles tests and reports, and the accounts side tracks invoices, income and expenses, all in one system.",
      "It also supports online appointments and a queue display for waiting patients, so the clinic runs smoothly from the front desk to the doctor's room.",
    ],
    features: [
      { t: "Reception & patient records", d: "Register patients once, search them quickly and see their full history whenever they return." },
      { t: "Vital signs", d: "Record and review vital signs at reception so the doctor starts the visit with the numbers in front of them." },
      { t: "Visits, diagnosis & treatment", d: "Record each visit with the diagnosis and treatment, using ready-made diagnosis templates and treatment lists." },
      { t: "Online appointments", d: "Receive appointment requests online and manage them with remarks from the clinic." },
      { t: "Queue display", d: "Show waiting patients on a queue screen, doctor by doctor, so the waiting room stays orderly." },
      { t: "Laboratory", d: "Manage lab tests, enter reports, issue lab invoices and look back at lab history." },
      { t: "Invoices & billing", d: "Create patient invoices from your list of services and track every payment." },
      { t: "Income & expenses", d: "Record income, expenses and transactions so the clinic's money is always clear." },
      { t: "Users & roles", d: "Give receptionists, doctors and lab staff their own logins and the access their job needs." },
    ],
    audience: ["Private clinics", "Hospitals", "Specialist practices", "Medical centres"],
    benefits: ["Shorter waiting times", "Complete history for every patient", "Lab results in the same system", "Clear income and expenses"],
    challenge: "Clinics often rely on paper files, separate appointment books and manual billing. Records get lost, queues grow and it is hard to see how the practice is really performing.",
    solution: "Patient Care System connects reception, doctors, the lab and accounts in one platform, with role-based access so each person sees only what they need.",
    outcome: "Quicker visits, accurate records and clear money reports, with ongoing support and updates from the CodingHub team.",
  },
  "point-of-sale-system": {
    overview: [
      "The Point-of-Sale System is a multi-tenant platform for retail and distribution businesses. It covers the whole cycle in one place: selling at the counter, buying from suppliers, tracking stock across locations, taking payments and understanding profit.",
      "Each business has its own private data, users and settings, while a separate super-admin area manages the businesses on the platform. The cashier screen keeps working even when the internet drops, and syncs automatically when it comes back.",
    ],
    features: [
      { t: "Fast cashier screen", d: "Scan a barcode or search by name or SKU, add items, apply discounts and finish the sale in a few taps." },
      { t: "Pricing, discounts & tax", d: "Walk-in and wholesale pricing, per-item and extra discounts, and tax, all calculated automatically." },
      { t: "Customers & ledgers", d: "Customer credit (khata) balances, party statements and ledgers, salesman ledgers and customer-specific rates." },
      { t: "Inventory & locations", d: "Stock per product across locations, with low-stock and out-of-stock views, inventory valuation, stock adjustments and movements." },
      { t: "Purchases & returns", d: "Purchase orders, purchase returns and sale returns, with stock adjusting automatically." },
      { t: "Reports & exports", d: "Sales, purchase, product, inventory, customer, expense, payment and profit reports, exportable to Excel, CSV and PDF." },
      { t: "Works offline", d: "Keep selling without internet. Sales are saved on the device and sync automatically when you are back online." },
      { t: "Quotations & labels", d: "Create quotations for customers and print invoices, parcel labels and address slips." },
      { t: "Expenses & cash flow", d: "Record expenses and payment accounts, and follow daily cash flow to see where money moves." },
      { t: "Dashboard & analytics", d: "See today's and this week's sales, low-stock items, what you are owed and what you owe, and a 7-day sales chart." },
      { t: "Staff, attendance & tasks", d: "Keep employee records, mark daily attendance and assign and track tasks for the team." },
      { t: "Activity history", d: "A history log of who did what, so changes and sales are always traceable." },
    ],
    audience: ["Retail shops", "Wholesalers & distributors", "Multi-branch businesses", "Online sellers who ship parcels"],
    benefits: ["Keeps selling when the internet is down", "Accurate stock across locations", "Clear profit and cash flow", "One platform for many businesses"],
    challenge: "Shops and distributors often track sales in one place, stock in another and purchases in a notebook. Numbers disagree, credit balances get lost and profit is hard to measure.",
    solution: "One system records every sale, purchase, return and payment, so inventory, customer balances and profit are always calculated from the same data.",
    outcome: "Faster counters, fewer stock surprises and reports you can trust, hosted securely in the cloud.",
  },
  medistore: {
    overview: [
      "MediStore is software built for pharmacies and medical stores. It handles billing at the counter, keeps every medicine batch and expiry date under control, and shows exactly how much profit each product and each month brings.",
      "Pharmacies carry thousands of items with different batches and expiry dates. MediStore keeps all of it organised, with customer and supplier ledgers and a full set of reports, so nothing expired is sold and nothing runs out unnoticed.",
    ],
    features: [
      { t: "Medicine billing", d: "Create accurate bills quickly at the counter, take payment and keep the full sales history." },
      { t: "Batch & expiry tracking", d: "See stock batch by batch with expiry dates, and run an expiry report for items close to expiring." },
      { t: "Stock control", d: "Low-stock report, stock adjustments and stock valuation, so you always know what is on the shelf." },
      { t: "Purchases & returns", d: "Record purchases, receive stock and handle purchase returns with suppliers." },
      { t: "Customer & supplier ledgers", d: "Track what customers owe you and what you owe suppliers, with a ledger for each." },
      { t: "Profit & loss reports", d: "Sales, purchase, product-wise sales, cash sales and profit and loss reports, printable on demand." },
    ],
    audience: ["Pharmacies", "Medical stores", "Drug distributors", "Hospital pharmacies"],
    benefits: ["No expired stock sold", "Fewer stock-outs", "Faster counter billing", "Clear profit by period"],
    challenge: "Pharmacies struggle to track batches and expiry dates by hand. Expired stock is a direct loss, and running out of fast-moving medicines costs sales.",
    solution: "MediStore ties every sale and purchase to a batch, so expiry and stock are always visible, and billing, ledgers and reports stay accurate.",
    outcome: "Less waste, steadier availability and a clear picture of profit, with support and updates from CodingHub.",
  },
  "restaurant-management": {
    overview: [
      "Restaurant Management connects the dining room, the kitchen, the cashier and the back office in one system. Orders are taken per table, sent straight to the kitchen, and turned into a bill without anyone rewriting a thing.",
      "It also covers menu, ingredient stock, purchasing, suppliers, staff and reports, and it can serve more than one restaurant from the same platform.",
    ],
    features: [
      { t: "Tables & orders", d: "Manage tables, take orders per table, add items to running orders and follow each order's status." },
      { t: "Waiter workflow", d: "Waiters take orders from their own login and send them straight to the kitchen." },
      { t: "Kitchen display", d: "The kitchen sees every order in real time and marks dishes as ready." },
      { t: "POS billing & discounts", d: "Fast, accurate bills with order discounts, payments and daily summaries." },
      { t: "Menu management", d: "Organise dishes into categories with prices and update the menu whenever needed." },
      { t: "Inventory & purchasing", d: "Track ingredient stock, record purchases and manage suppliers." },
      { t: "Staff & roles", d: "Add staff and give waiters, cashiers and the kitchen the access they need." },
      { t: "Reports", d: "Sales and performance reports so owners always know how the day and month went." },
      { t: "Multiple restaurants", d: "Run more than one restaurant on the same platform, each with its own data." },
    ],
    audience: ["Restaurants", "Cafés", "Fast-food outlets", "Food courts"],
    benefits: ["Fewer order mistakes", "Faster table turnaround", "Kitchen always in sync", "Clear sales and stock"],
    challenge: "Handwritten orders get misread, the kitchen is not told about changes, and bills and ingredient stock are slow to track at the busiest moments.",
    solution: "Orders flow from the waiter to the kitchen to the cashier in one connected system, in real time and without paper, with stock and reports behind it.",
    outcome: "Smoother service, happier guests and an owner who can see sales and stock without counting slips.",
  },
  "lab-management-system": {
    overview: [
      "Lab Management System runs the daily work of a diagnostic laboratory. Staff register patients, set up the list of tests, record sample information, enter reports and print invoices, while balances and payments are tracked for every patient.",
      "It replaces paper registers, so every patient, sample and report is easy to find and easy to print.",
    ],
    features: [
      { t: "Patient registration", d: "Add patients quickly, see the full list and open a patient's details and previous tests." },
      { t: "Test catalogue", d: "Create and manage the tests your lab offers, with details for each test." },
      { t: "Sample information", d: "Record sample details so every sample can be followed to its result." },
      { t: "Report entry", d: "Enter test results into a report, review them and keep a list of all reports." },
      { t: "Invoices", d: "Print clear invoices for the tests a patient has taken." },
      { t: "Patient balances", d: "Update a patient's balance as payments are received, so dues are never forgotten." },
      { t: "Dashboard & users", d: "An admin dashboard for the lab, with separate user accounts for staff." },
      { t: "Help & support", d: "A built-in help and support section for the people using the system." },
    ],
    audience: ["Diagnostic laboratories", "Collection centres", "Hospital laboratories", "Pathology labs"],
    benefits: ["Fewer sample mix-ups", "Faster report turnaround", "Clear patient dues", "Everything easy to find and print"],
    challenge: "Labs handle many samples at once. Paper registers make it easy to lose track of a sample, delay a report or forget a patient's balance.",
    solution: "Each patient, test, sample and report is recorded in one place, with invoices and balances connected to the same record.",
    outcome: "Reliable, traceable lab work and reports that patients and doctors can trust.",
  },
  "complaints-management-system": {
    overview: [
      "Complaints Management System lets an organization receive, check, assign and resolve complaints from start to finish. Different teams and roles, such as head office, distributors, vendors and technicians, each log in to their own screens. It was deployed with CCI Pakistan for real, day-to-day use.",
      "Every complaint moves through clear stages, from received and matched to approved, assigned and resolved, so nothing is forgotten and managers can see where cases are stuck.",
    ],
    features: [
      { t: "Receiving & checking", d: "See received complaints, check whether they match records, and approve or reject them." },
      { t: "Bulk upload from Excel", d: "Upload many complaints at once from an Excel file instead of typing them one by one." },
      { t: "Assignment & resolution", d: "Assign complaints to vendors and technicians, who fill in a resolve form when the job is done." },
      { t: "Status & history", d: "Follow recent and resolved complaints, and look back at the full history of any case." },
      { t: "Distributor feedback", d: "Collect feedback from distributors, with pending and completed feedback lists." },
      { t: "Reports & exports", d: "Dashboards and reports for each team, with complaint data you can export." },
      { t: "Material codes & rates", d: "Keep a list of material codes and their rates for use when jobs are resolved." },
      { t: "Technician summaries", d: "See a summary of each technician's work, so performance is clear." },
      { t: "User accounts & roles", d: "Separate accounts for each team, with the access that role needs." },
    ],
    audience: ["Organizations", "Customer-service teams", "Distributors & vendors", "Help desks"],
    benefits: ["Nothing falls through the cracks", "Clear ownership of every complaint", "Faster resolution", "Easy reporting and exports"],
    challenge: "Complaints arriving from many places are hard to track. Cases stall without an owner, and there is no clear view of how teams are performing.",
    solution: "A single system captures every complaint, moves it through approval and assignment, and records the resolution, with a separate view for each team.",
    outcome: "Complete visibility, accountable handling and data to improve how issues are resolved. Deployed with CCI Pakistan.",
  },
  "university-access-attendance": {
    overview: [
      "University Access & Attendance controls who can enter campus sites using access devices, and keeps a record of every entry. A web dashboard shows which devices are online, manages student records and lets administrators decide which sites each person can enter.",
      "It replaces manual gate registers with a central system that logs access automatically and gives clear statistics.",
    ],
    features: [
      { t: "Device monitoring", d: "See all access devices at a glance: how many are online, offline or asleep." },
      { t: "Device settings", d: "Change a device's settings remotely, or remove a device that is no longer used." },
      { t: "Student records", d: "Keep a central record of students and staff, and look up an individual record when needed." },
      { t: "Site access control", d: "Choose which sites each person may enter, and add or remove access for many people at once." },
      { t: "Import & export", d: "Bring in many records from a file, and export your records to a spreadsheet." },
      { t: "Access logs", d: "A log of entries, so you can see who accessed which site and when." },
      { t: "Statistics", d: "Summary numbers for devices and people, shown on the dashboard." },
      { t: "Secure admin login", d: "Only signed-in administrators can change settings or records." },
    ],
    audience: ["Universities", "Colleges", "Schools", "Training institutes"],
    benefits: ["Controlled campus access", "A log of every entry", "Easy bulk changes", "Less manual paperwork"],
    challenge: "Manual gate registers are slow and easy to get wrong, and it is hard to know who has access to which part of the campus.",
    solution: "Access devices report to one central system, which holds the records, controls site access and logs every entry.",
    outcome: "Safer campuses, trustworthy access records and far less paperwork for staff.",
  },
  "grocery-store-website": {
    overview: [
      "Grocery Store Website is an online storefront for a grocery retailer. Customers browse products by category, search, add items to a cart and place an order with their address, phone number and payment method.",
      "Behind it, an admin dashboard lets the store manage products, categories, customers' orders and messages, and move each order from pending to shipped to complete.",
    ],
    features: [
      { t: "Catalogue & search", d: "A clean catalogue with categories, a full products page and a detail page for every product." },
      { t: "Cart & checkout", d: "A simple cart and checkout that collects the delivery address, phone, email, order notes and payment method." },
      { t: "Customer accounts", d: "Customers sign up, log in and see their order history and the details of each order." },
      { t: "Admin dashboard", d: "Add and edit products and categories, and read the messages customers send." },
      { t: "Order management", d: "See new orders and move them through pending, shipped and complete, with cancelled orders kept separately." },
      { t: "Bulk product upload", d: "Load many products at once from a CSV file instead of adding them one by one." },
    ],
    audience: ["Grocery stores", "Supermarkets", "Small retailers", "Local delivery shops"],
    benefits: ["New online sales channel", "Easy for the owner to update", "Mobile-friendly", "Open for orders around the clock"],
    challenge: "Local stores lose customers who prefer to order online, and updating prices or taking orders over the phone is slow and error-prone.",
    solution: "A fast online store where customers place orders themselves, and a dashboard where the owner manages products and orders without a developer.",
    outcome: "An always-open storefront that brings in orders and is easy to keep up to date.",
  },
  "custom-website-solutions": {
    overview: [
      "Custom Website Solutions delivers tailored, modern websites that represent your brand and engage your customers. Each site is designed around your business, not a generic template.",
      "The result is a fast, professional website that looks right on every device and is easy for you to keep up to date.",
    ],
    features: [
      { t: "Brand-led design", d: "A look and feel that reflects your company, from layout and colour to typography." },
      { t: "Responsive build", d: "Works flawlessly on phones, tablets and desktops." },
      { t: "SEO-ready structure", d: "Clean structure and fast loading so search engines can find and understand your site." },
      { t: "Easy content updates", d: "Change text, images and pages yourself, without a developer." },
      { t: "Contact & lead forms", d: "Forms that send enquiries straight to your inbox." },
      { t: "Performance & security", d: "Fast loading, secure hosting and ongoing support from our team." },
    ],
    audience: ["Businesses", "Startups", "Professionals & consultants", "Organizations"],
    benefits: ["Professional first impression", "Mobile-friendly", "Easy to maintain", "Built to be found"],
    challenge: "An outdated or template-based website makes a business look smaller than it is and does not bring in enquiries.",
    solution: "A custom-designed, fast and responsive website built around your brand and your goals.",
    outcome: "A credible online presence that works on every device and is simple to manage.",
  },
};

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getDetail = (slug: string) => details[slug];

