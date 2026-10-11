// Project stories: facts, challenge, approach, deliverables and outcome (written from the real projects)
export type CaseStudy = {
  slug: string;
  sector: string;
  client: string;
  type: string;
  summary: string;
  brief: string;
  challenge: string[];
  approach: string;
  built: string[];
  outcome: string;
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "point-of-sale-system",
    sector: "Retail & Distribution",
    client: "Retail shops and distributors",
    type: "Multi-tenant web platform",
    summary: "One platform for selling, buying, stock and profit that keeps working offline.",
    brief: "Shops and distributors needed one system to sell, buy, track stock and see profit, and it had to keep working when the internet drops. Several businesses also needed to share one platform without seeing each other's data.",
    challenge: [
      "Sales, stock and purchases were tracked in different places",
      "Counters had to keep selling when the internet dropped",
      "Several businesses needed to share one platform with private data",
    ],
    approach: "We designed a multi-tenant platform where each business has its own data and users, and built the cashier screen to save sales on the device and sync them automatically when the connection returns.",
    built: [
      "A multi-tenant platform with a separate super-admin area for the businesses",
      "A cashier screen that works offline and syncs automatically",
      "Stock across locations, purchases, returns and customer ledgers",
      "Reports that export to Excel, CSV and PDF",
    ],
    outcome: "Each business runs on its own private data, counters keep selling without internet, and owners read sales, stock and profit from the same numbers.",
    stack: ["Angular", "Node.js", "MongoDB"],
  },
  {
    slug: "complaints-management-system",
    sector: "Public service",
    client: "CCI Pakistan",
    type: "Multi-team web application",
    summary: "Complaint intake, assignment and resolution across head office, distributors and technicians.",
    brief: "CCI Pakistan received complaints from many places, and several teams (head office, distributors, vendors and technicians) all had to work on the same cases without losing track of them.",
    challenge: [
      "Complaints arrived from many places",
      "Several teams needed their own view of the same cases",
      "Managers could not easily see where cases were stuck",
    ],
    approach: "We gave each team its own login and screens, added bulk upload from Excel, and moved every complaint through clear stages from received to resolved.",
    built: [
      "Separate accounts and screens for each team",
      "Bulk upload of complaints from Excel",
      "Approval, assignment and resolve forms for technicians",
      "Distributor feedback, technician summaries, dashboards and exports",
    ],
    outcome: "Every complaint has an owner and a clear status, so managers can see where cases are stuck and export the data they need for reporting.",
    stack: [],
  },
  {
    slug: "patient-care-system",
    sector: "Healthcare",
    client: "Clinics and hospitals",
    type: "Clinic management system",
    summary: "From reception and vital signs to the doctor, the lab and billing, in one connected system.",
    brief: "Clinics wanted to replace paper files and appointment books with one connected system that runs from the reception desk to the doctor and the laboratory.",
    challenge: [
      "Paper files and appointment books slowed down reception",
      "Patient history was hard to find at the doctor's desk",
      "The lab and billing were handled separately",
    ],
    approach: "We followed the patient's journey from reception to vital signs, the visit, the lab and billing, and joined every step in one system.",
    built: [
      "Reception with patient history and vital signs",
      "Visits with diagnosis templates and treatments",
      "Online appointments and a queue display for waiting patients",
      "Lab tests, reports and invoices, plus income and expenses",
    ],
    outcome: "Shorter waits at the front desk, a full patient history in one place, and lab results and billing handled in the same system.",
    stack: ["Angular", "Node.js", "MongoDB"],
  },
  {
    slug: "restaurant-management",
    sector: "Food & Hospitality",
    client: "Restaurants and cafés",
    type: "Restaurant operations system",
    summary: "Orders flow from the waiter to the kitchen to the cashier in real time, with no paper.",
    brief: "Restaurants needed orders to reach the kitchen without paper slips, and bills to be ready the moment guests ask for them.",
    challenge: [
      "Handwritten orders were misread",
      "The kitchen was not told about changes to an order",
      "Bills and ingredient stock were slow to track",
    ],
    approach: "We connected the waiter, the kitchen and the cashier in real time, and added menu, ingredient stock and purchasing behind them.",
    built: [
      "Table orders and separate waiter logins",
      "A kitchen display that shows orders in real time",
      "POS billing with order discounts and payments",
      "Menu, ingredient inventory, purchasing, staff, and more than one restaurant per platform",
    ],
    outcome: "Fewer order mistakes, a kitchen that is always in sync with the dining room, and an owner who can see sales and stock without counting slips.",
    stack: ["Angular", "Node.js", "MongoDB"],
  },
  {
    slug: "medistore",
    sector: "Pharmacy",
    client: "Pharmacies and medical stores",
    type: "Pharmacy management system",
    summary: "Batch and expiry tracking, fast billing and clear profit for medical stores.",
    brief: "Pharmacies carry thousands of items with different batches and expiry dates. They needed to avoid selling or holding expired stock, and to know their profit.",
    challenge: [
      "Batches and expiry dates were tracked by hand",
      "Expired stock is a direct loss",
      "Profit by product was hard to see",
    ],
    approach: "We tied every sale and purchase to a batch, so expiry and stock are always visible, and added ledgers and reports on top.",
    built: [
      "Stock shown batch by batch, with an expiry report",
      "Fast counter billing and cash sales",
      "Purchases, purchase returns, low-stock report and stock valuation",
      "Customer and supplier ledgers, profit and loss reports",
    ],
    outcome: "Expiring stock is visible before it becomes a loss, fast-moving items are less likely to run out, and profit is clear by period.",
    stack: ["Angular", "Node.js", "MongoDB"],
  },
  {
    slug: "grocery-store-website",
    sector: "E-Commerce",
    client: "A grocery retailer",
    type: "Online store with admin dashboard",
    summary: "An always-open storefront, with an owner dashboard to manage products and orders alone.",
    brief: "A grocery retailer wanted customers to order online, and the owner to manage products and orders without needing a developer.",
    challenge: [
      "Customers who prefer ordering online were being lost",
      "Taking orders by phone was slow",
      "Updating products needed a developer",
    ],
    approach: "We built a fast storefront for customers and an admin dashboard so the owner manages products and orders alone.",
    built: [
      "A catalogue with categories and a page for every product",
      "A cart and checkout with address, phone and payment method",
      "Customer accounts with order history",
      "An admin dashboard with CSV product upload and an order workflow from pending to complete",
    ],
    outcome: "An always-open storefront that brings in orders, and a store owner who can keep products and orders up to date alone.",
    stack: ["Angular", "Node.js", "MongoDB"],
  },
  {
    slug: "university-access-attendance",
    sector: "Education",
    client: "An educational institution",
    type: "Access control platform",
    summary: "Central control of campus access devices, student records and entry logs.",
    brief: "An educational institution needed to control who can enter which part of the campus, and to keep a reliable record of every entry.",
    challenge: [
      "Gate registers were slow and easy to get wrong",
      "It was hard to know who may enter which site",
      "There was no central record of entries",
    ],
    approach: "Access devices report to one central server that holds the records, controls site access and logs every entry.",
    built: [
      "A server that monitors access devices (online, offline or asleep)",
      "Student records with import and export",
      "Bulk add and remove of site access",
      "Access logs, statistics and a secure administrator login",
    ],
    outcome: "Controlled campus access, a trustworthy log of entries and far less paperwork for the staff at the gate.",
    stack: ["Node.js", "Express", "SQLite"],
  },
  {
    slug: "lab-management-system",
    sector: "Laboratories",
    client: "Diagnostic laboratories",
    type: "Laboratory management system",
    summary: "Patients, samples, reports, invoices and balances in one place.",
    brief: "A laboratory wanted to move from paper registers to one system for patients, samples, reports and invoices, so nothing is lost and every report is easy to print.",
    challenge: [
      "Paper registers made samples easy to lose",
      "Reports took time to prepare and print",
      "Patient dues were easy to forget",
    ],
    approach: "We recorded each patient, test, sample and report in one place, with invoices and balances linked to the same record.",
    built: [
      "Patient records with balances and quick add",
      "A test catalogue with sample information",
      "Report entry, report list and printable reports",
      "Invoices, an admin dashboard and staff accounts",
    ],
    outcome: "Every patient, sample and report is easy to find, invoices match the tests taken, and patient dues are never forgotten.",
    stack: ["Angular", "Node.js", "MongoDB"],
  },
  {
    slug: "custom-website-solutions",
    sector: "Digital Presence",
    client: "Businesses and organizations",
    type: "Custom business website",
    summary: "Brand-led, fast and mobile-friendly websites that bring in enquiries.",
    brief: "Businesses wanted a website that looks like their brand, loads quickly on a phone, and brings in real enquiries, instead of a generic template that makes them look smaller than they are.",
    challenge: [
      "Outdated or template-based websites that did not reflect the brand",
      "Pages that were slow or hard to use on a phone",
      "No simple way for customers to send an enquiry",
    ],
    approach: "We designed each site around the brand and its goals, built it responsive and fast, and connected contact forms straight to the owner's inbox or WhatsApp.",
    built: [
      "A brand-led design with clear navigation",
      "A responsive build that works on phones, tablets and desktops",
      "A search-friendly structure and fast loading",
      "Contact and lead forms, with content that is easy to update",
    ],
    outcome: "A credible online presence that works on every device, brings in enquiries, and is simple to keep up to date.",
    stack: ["Responsive design", "SEO-ready"],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
