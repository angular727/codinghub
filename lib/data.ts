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

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

