// Deeper product information: workflow, module breakdown, FAQ, and stack/demo where known.
export type Extra = {
  workflow: { t: string; d: string }[];
  modules: { t: string; blurb?: string; points: string[] }[];
  faq: { q: string; a: string }[];
  stack?: string[];
  demo?: string;
};

const generalFaq = (name: string): { q: string; a: string }[] => [
  { q: "Does it work online?", a: `Yes. ${name} is cloud-based, so you can use it from any device with a browser, in the office or away from it.` },
  { q: "Can it be customised for my business?", a: "Yes. We can adapt workflows, fields and reports to match the way your business actually works." },
  { q: "Can I see it before deciding?", a: "Yes. Request a demo and we will walk you through the system using your own scenarios." },
  { q: "Is support included?", a: "Yes. CodingHub provides ongoing support and updates after your system goes live." },
];

export const extras: Record<string, Extra> = {
  "point-of-sale-system": {
    workflow: [
      { t: "Set up the business", d: "Add products, categories, brands, units, locations, customers and user accounts." },
      { t: "Sell at the counter", d: "Scan or search, apply discounts and tax, choose how the customer pays and print the receipt." },
      { t: "Buy, receive and return", d: "Raise purchase orders, receive stock, and handle purchase and sale returns." },
      { t: "Review and export", d: "Check sales, stock and profit, and export reports to Excel, CSV or PDF." },
    ],
    modules: [
      {
        t: "Selling at the counter",
        blurb: "Everything the cashier needs to make a sale quickly and correctly.",
        points: [
          "Scan a barcode or search by name or SKU",
          "Walk-in and wholesale prices",
          "Discount on each item, plus an extra discount on the bill",
          "Tax added automatically",
          "Choose how the customer pays (cash, bank or other payment account)",
          "Credit sales: the unpaid balance goes to the customer's account",
          "Print receipts and invoices in English or Urdu",
          "Quotations before the sale",
          "Online orders and pre-orders",
        ],
      },
      {
        t: "Products & stock",
        blurb: "Know what you have, where it is and what is running out.",
        points: [
          "Products with brands, categories and units",
          "Barcode labels for products",
          "Stock in every location and bin location",
          "History of every stock movement",
          "Stock adjustments with a record of why",
          "Low-stock and out-of-stock lists",
          "Inventory valuation",
          "Alerts when stock counts disagree",
          "Product price manager",
        ],
      },
      {
        t: "Buying from suppliers",
        blurb: "Order, receive and pay for stock without losing track.",
        points: [
          "Purchase orders",
          "Purchase invoices with photos attached",
          "Receive stock straight into inventory",
          "Purchase returns to suppliers",
          "Supplier accounts and ledgers",
          "Vendor records",
        ],
      },
      {
        t: "Customers & credit",
        blurb: "Keep every customer's details, rates and balance in one place.",
        points: [
          "Customer records and customer types",
          "Special rates for selected customers",
          "Credit (khata) balances",
          "Customer ledger and statements",
          "Invoice history for each customer",
          "Sale returns",
          "Salesman records and salesman ledgers",
        ],
      },
      {
        t: "Money & accounts",
        blurb: "See where the money comes from and where it goes.",
        points: [
          "Expenses with expense categories",
          "Bank and payment accounts",
          "Transactions and a general ledger",
          "Daily cash flow",
          "Total receivable (owed to you) and payable (you owe)",
        ],
      },
      {
        t: "Shipping & parcels",
        blurb: "Pack and send online orders with the right paperwork.",
        points: [
          "Parcel labels",
          "Address slips",
          "Shipping records and receipts",
          "Online order tracking",
        ],
      },
      {
        t: "Reports",
        blurb: "Clear reports for any day, product or customer, ready to print or export.",
        points: [
          "Sales reports: today, by period and day by day",
          "Purchase reports",
          "Product sales history and product profit",
          "Profit and loss",
          "Stock and daily stock reports",
          "Aging report for unpaid balances",
          "Customer and supplier ledgers",
          "Charts and a sales calendar",
          "Export to Excel, CSV and PDF",
        ],
      },
      {
        t: "Dashboard",
        blurb: "A quick picture of the business the moment you log in.",
        points: [
          "Today's and this week's sales",
          "Number of low-stock items",
          "Receivable and payable totals",
          "Sales chart for the last 7 days",
          "Recent sales",
          "Overall business counts",
        ],
      },
      {
        t: "Team, security & system",
        blurb: "Control who can do what, and keep working whatever happens.",
        points: [
          "Users and roles",
          "Employee records, daily attendance and tasks",
          "Activity history of who did what",
          "Many businesses on one platform, each with its own data",
          "Super-admin area to manage the businesses",
          "Works without internet and syncs automatically",
          "Settings and profile",
        ],
      },
    ],
    faq: [
      { q: "What does multi-tenant mean?", a: "Several separate businesses can use the same platform, each with its own private data, products, users and settings." },
      { q: "Does it work without internet?", a: "Yes. The cashier screen keeps working offline. Sales are saved on the device and sync automatically when the connection returns." },
      { q: "Can I export my reports?", a: "Yes. Reports can be exported to Excel, CSV and PDF." },
      ...generalFaq("The Point-of-Sale System").slice(1),
    ],
    stack: ["Angular", "Offline-ready", "Multi-tenant"],
    demo: "https://demo-pos-frountend.vercel.app",
  },
  "patient-care-system": {
    workflow: [
      { t: "Register the patient", d: "Reception adds the patient and records vital signs." },
      { t: "See the doctor", d: "The doctor records the visit, the diagnosis and the treatment." },
      { t: "Lab tests if needed", d: "Tests are done, reports are entered and lab invoices are issued." },
      { t: "Invoice and follow up", d: "The patient is billed, and the full history is saved for next time." },
    ],
    modules: [
      {
        t: "Reception & patients",
        blurb: "The front desk: register patients and prepare them for the doctor.",
        points: ["Register new patients", "Search patients and view history", "Record vital signs", "Pending patients and patients waiting for tests", "Notes and suggestions for the doctor", "Assign patients to the doctor's clinic"],
      },
      {
        t: "Visits, diagnosis & treatment",
        blurb: "Everything the doctor records during and after a visit.",
        points: ["Add and review visits", "Diagnosis types and reusable templates", "Treatment types and treatments", "Complete visit history for each patient"],
      },
      {
        t: "Appointments & queue",
        blurb: "Keep the waiting room orderly.",
        points: ["Online appointment requests", "Remarks on each appointment", "Queue display for waiting patients", "Queue shown doctor by doctor"],
      },
      {
        t: "Laboratory",
        blurb: "Tests, reports and lab billing inside the same system.",
        points: ["Manage the list of lab tests", "Add lab reports", "Lab invoices", "Lab history", "Today's completed tests"],
      },
      {
        t: "Billing & accounts",
        blurb: "Know what you have billed and how money moves.",
        points: ["Patient invoices", "List of services and prices", "Income records", "Expenses", "Transactions"],
      },
      {
        t: "Documents & settings",
        blurb: "Printable documents and the system's setup.",
        points: ["Printable PDF documents", "Users and roles", "Profile and sign-in", "Manage vitals, tests and treatment lists"],
      },
    ],
    faq: [
      { q: "Can doctors reuse diagnosis text?", a: "Yes. Diagnosis templates and diagnosis types can be set up once and reused in every visit." },
      { q: "Does it include a laboratory?", a: "Yes. The lab has its own tests, reports, invoices and history inside the same system." },
      ...generalFaq("Patient Care System").slice(1),
    ],
    stack: ["Angular", "Node.js", "MongoDB"],
  },
  medistore: {
    workflow: [
      { t: "Add medicines & suppliers", d: "Build your medicine catalogue, customers and supplier list once." },
      { t: "Receive stock by batch", d: "Record each purchase with batch numbers and expiry dates." },
      { t: "Sell at the counter", d: "Bill quickly and accurately, with stock reduced automatically." },
      { t: "Track expiry and profit", d: "See near-expiry stock, low stock and the profit earned." },
    ],
    modules: [
      { t: "Billing & sales", points: ["Fast medicine search", "Itemised bills and discounts", "Payments and cash sales", "Sales history and returns"] },
      { t: "Stock & batches", points: ["Stock batch by batch", "Expiry dates and expiry report", "Low-stock report", "Stock adjustments and valuation"] },
      { t: "Purchasing", points: ["Purchases from suppliers", "Purchase returns", "Supplier ledger", "Purchase history"] },
      { t: "Customers & reports", points: ["Customer ledger", "Sales and purchase reports", "Profit and loss, product-wise sales", "Printable reports"] },
    ],
    faq: [
      { q: "How does it help avoid expired stock?", a: "Every purchase is recorded with its batch and expiry date, and the expiry report shows items that are close to expiring before they become a loss." },
      { q: "Does it track what customers and suppliers owe?", a: "Yes. There are separate ledgers for customers and suppliers, with the full history of bills and payments." },
      ...generalFaq("MediStore").slice(1),
    ],
    stack: ["Angular", "Node.js", "MongoDB"],
  },
  "restaurant-management": {
    workflow: [
      { t: "Seat guests, take the order", d: "Open an order for the table and add items from the menu." },
      { t: "Send to the kitchen", d: "The order appears on the kitchen display instantly, with no paper slips." },
      { t: "Prepare and serve", d: "The kitchen marks dishes ready and the waiter serves them." },
      { t: "Bill and close", d: "Apply any discount, take payment and close the table." },
    ],
    modules: [
      { t: "Dining room", points: ["Tables and open orders", "Add items to running orders", "Order status per table", "Waiter logins"] },
      { t: "Kitchen", points: ["Live order queue", "Item details and notes", "Mark dishes ready", "No paper slips"] },
      { t: "POS & payments", points: ["Table bills and totals", "Order discounts", "Payments", "Daily cash summary"] },
      { t: "Menu & back office", points: ["Categories, dishes and prices", "Ingredient inventory", "Purchasing and suppliers", "Staff and roles"] },
      { t: "Reports", points: ["Sales reports", "Daily summaries", "Best-selling items", "Stock reports"] },
      { t: "Multi-restaurant", points: ["Register a restaurant", "Select the restaurant to work in", "Separate data per restaurant", "One platform for all"] },
    ],
    faq: [
      { q: "Do waiters need special devices?", a: "No. Orders can be taken from a phone or tablet with a browser." },
      { q: "Can it run more than one restaurant?", a: "Yes. Each restaurant has its own data, and you choose which one to work in after you log in." },
      ...generalFaq("Restaurant Management").slice(1),
    ],
    stack: ["Angular", "Node.js", "MongoDB"],
  },
  "lab-management-system": {
    workflow: [
      { t: "Register the patient", d: "Add the patient and choose the tests requested." },
      { t: "Record the sample", d: "Enter the sample details so it can be followed." },
      { t: "Enter the report", d: "Results are entered and the report is saved." },
      { t: "Invoice and balance", d: "Print the invoice and update the patient's balance." },
    ],
    modules: [
      {
        t: "Patients",
        blurb: "One record for every patient the lab sees.",
        points: ["Add a patient", "Patient list and search", "Patient details", "Quick add from a pop-up", "Update the patient's balance"],
      },
      {
        t: "Tests & samples",
        blurb: "Your list of tests and the samples that go with them.",
        points: ["Add and manage tests", "Test list and test details", "Sample information", "Add a test to a patient"],
      },
      {
        t: "Reports",
        blurb: "Enter, find and print reports.",
        points: ["Add a report", "Report list", "Results for each test", "Printable reports"],
      },
      {
        t: "Invoices & balances",
        blurb: "Billing that matches the tests.",
        points: ["Invoices for each patient", "Payments and balance updates", "Dues always visible"],
      },
      {
        t: "Administration",
        blurb: "Control who uses the system.",
        points: ["Admin dashboard", "User accounts", "Secure login", "Help and support"],
      },
    ],
    faq: [
      { q: "Can I see a patient's previous tests?", a: "Yes. Open the patient's details to see their record and the tests and reports linked to them." },
      { q: "Does it track what a patient still owes?", a: "Yes. Each patient has a balance that is updated whenever a payment is received." },
      ...generalFaq("Lab Management System").slice(1),
    ],
    stack: ["Angular", "Node.js", "MongoDB"],
  },
  "complaints-management-system": {
    workflow: [
      { t: "Receive the complaint", d: "Complaints arrive one by one or in bulk from an Excel file." },
      { t: "Check and approve", d: "Each complaint is matched against records and approved or rejected." },
      { t: "Assign and resolve", d: "A vendor or technician handles it and fills in the resolve form." },
      { t: "Review and report", d: "Managers review history, feedback and reports." },
    ],
    modules: [
      {
        t: "Receiving & approval",
        blurb: "Where every complaint starts.",
        points: ["Received complaints", "Matched complaints", "Not-approved complaints", "Master data", "Upload complaints from Excel", "Direct complaints"],
      },
      {
        t: "Handling & resolution",
        blurb: "Getting each complaint solved and recorded.",
        points: ["Assign to vendors and technicians", "Resolve form for the finished job", "Recent and recently resolved complaints", "Complete complaint history"],
      },
      {
        t: "Distributors & feedback",
        blurb: "Hear back from the people on the ground.",
        points: ["Distributor accounts and list", "Pending feedback", "Feedback history"],
      },
      {
        t: "Vendors & technicians",
        blurb: "Manage the people who do the work.",
        points: ["Vendor accounts", "Technician summary", "Summary lists", "Change password"],
      },
      {
        t: "Materials",
        blurb: "Keep parts and prices consistent.",
        points: ["Material codes", "Material rates"],
      },
      {
        t: "Reports & administration",
        blurb: "See the bigger picture and control access.",
        points: ["Dashboards for each team", "Export complaint data", "Advanced filters and search", "User accounts and roles", "Profile and sign-in"],
      },
    ],
    faq: [
      { q: "Who is using it today?", a: "The system has been deployed with CCI Pakistan for real, day-to-day complaint handling." },
      { q: "Can many complaints be added at once?", a: "Yes. Complaints can be uploaded from an Excel file instead of being typed one by one." },
      ...generalFaq("Complaints Management System").slice(1),
    ],
  },
  "university-access-attendance": {
    workflow: [
      { t: "Add people and sites", d: "Load student records and set up the campus sites." },
      { t: "Set who can enter where", d: "Give or remove site access, one person or many at a time." },
      { t: "Devices record entries", d: "Access devices report to the system and every entry is logged." },
      { t: "Review logs and statistics", d: "Administrators check the logs and the dashboard numbers." },
    ],
    modules: [
      {
        t: "Devices",
        blurb: "Keep an eye on the access devices around the campus.",
        points: ["List of all devices", "Online, offline and sleeping status", "Change a device's settings", "Remove a device"],
      },
      {
        t: "People & records",
        blurb: "One central record of students and staff.",
        points: ["Add, edit and delete records", "Look up an individual student record", "Import records from a file", "Export records to CSV"],
      },
      {
        t: "Site access",
        blurb: "Decide who may enter which site.",
        points: ["List of sites", "Add access for many people at once", "Remove access for many people at once"],
      },
      {
        t: "Logs & statistics",
        blurb: "A clear record of what happened.",
        points: ["Access logs", "Device statistics", "People statistics"],
      },
      {
        t: "Administration",
        blurb: "Only the right people can change things.",
        points: ["Secure administrator login", "Client management", "Dashboard"],
      },
    ],
    faq: [
      { q: "Can access be changed for many people at once?", a: "Yes. Site access can be added or removed in bulk, so you do not have to edit people one by one." },
      { q: "Can I import my existing records?", a: "Yes. Records can be imported from a file and exported to a spreadsheet at any time." },
      ...generalFaq("University Access & Attendance").slice(1),
    ],
    stack: ["Node.js", "Express", "SQLite"],
  },
  "grocery-store-website": {
    workflow: [
      { t: "Customers browse", d: "A clean catalogue organised by category, with a page for every product." },
      { t: "They add to the cart", d: "Items go into the cart, with totals updated as they shop." },
      { t: "They check out", d: "They enter their address, phone, email, notes and choose a payment method." },
      { t: "The store fulfils the order", d: "The owner moves the order from pending to shipped to complete." },
    ],
    modules: [
      { t: "Storefront", points: ["Product catalogue and categories", "Full products page", "Product detail pages", "Mobile-friendly design"] },
      { t: "Checkout & orders", points: ["Cart and checkout", "Address, phone and notes", "Payment method choice", "Order confirmation"] },
      { t: "Customer account", points: ["Sign up and log in", "Order history", "Order details", "Contact the store"] },
      { t: "Admin dashboard", points: ["Add and edit products", "Manage categories", "Orders: pending, shipped, complete", "Messages and bulk CSV upload"] },
    ],
    faq: [
      { q: "Can the store update products itself?", a: "Yes. The admin dashboard lets the owner add and edit products and categories, and upload many products from a CSV file." },
      { q: "How are orders handled?", a: "Each order appears in the dashboard and moves through pending, shipped and complete. Cancelled orders are kept separately." },
      ...generalFaq("The Grocery Store Website").slice(1),
    ],
    stack: ["Angular", "Node.js", "MongoDB"],
  },
  "custom-website-solutions": {
    workflow: [
      { t: "Discover", d: "We learn about your business, audience and goals." },
      { t: "Design", d: "We design pages and a look that fit your brand." },
      { t: "Build", d: "We develop a fast, responsive, search-friendly website." },
      { t: "Launch & support", d: "We publish the site and keep supporting it." },
    ],
    modules: [
      { t: "Design", points: ["Brand-led look and feel", "Layout and typography", "Consistent style", "Clear navigation"] },
      { t: "Build", points: ["Responsive on all devices", "Fast loading", "Clean, search-friendly structure", "Secure hosting"] },
      { t: "Content", points: ["Easy content updates", "Images and pages", "Contact and lead forms", "Enquiries to your inbox"] },
      { t: "Launch & support", points: ["Go-live support", "Ongoing updates", "Fixes and improvements", "Help when you need it"] },
    ],
    faq: [
      { q: "Will it work on mobile?", a: "Yes. Every website is built responsive, so it looks right on phones, tablets and desktops." },
      ...generalFaq("Your website"),
    ],
  },
};

export const getExtra = (slug: string) => extras[slug];
