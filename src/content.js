// All site copy lives here so you can edit text without touching layout code.

export const brand = {
  name: 'StoneTech Nexora',
  tagline: 'Solid systems. Explosive growth.',
  email: 'hello@stonetechnexora.com', // TODO: replace with your real address
  phone: '(000) 000-0000', // TODO: replace
  location: 'Headquartered in [Your City]. Serving clients nationwide.', // TODO
  linkedin: '#', // TODO: your LinkedIn URL
}

// Where the booking form sends its data. Leave empty to run in demo mode
// (the form shows the success message without sending anything).
// Works out of the box with Formspree: paste your https://formspree.io/f/xxxx URL.
export const FORM_ENDPOINT = ''

export const nav = [
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Why us', href: '#why' },
]

export const hero = {
  title: 'Outgrown your systems? Let’s map what comes next.',
  body: 'Book a free 45-minute roadmap call. We’ll look at the tools you run today, find where work gets stuck, and show you the clearest path to one connected platform.',
  points: ['Free, no obligation', 'Led by a senior ERP consultant', 'You keep the roadmap'],
}

// The three phases of the Nexora Path framework. Each has its own color.
export const phases = [
  {
    key: 'ground',
    name: 'Ground',
    color: 'var(--teal)',
    headline: 'Stop the leaks',
    body: 'Fix the foundations: clean data, reliable finances and fewer spreadsheets holding the business together.',
    signs: ['Month-end close drags on for weeks', 'Reports from two systems never match', 'Key know-how lives in one person’s head'],
  },
  {
    key: 'connect',
    name: 'Connect',
    color: 'var(--pink)',
    headline: 'Join it all up',
    body: 'Bring finance, inventory, sales and operations into one ERP so every team works from the same numbers.',
    signs: ['Orders get re-typed between departments', 'Inventory counts are a best guess', 'Nobody trusts the dashboard'],
  },
  {
    key: 'launch',
    name: 'Launch',
    color: 'var(--gold)',
    headline: 'Scale without the drag',
    body: 'Automate, integrate and report in real time, so you can add revenue, sites and people without adding overhead.',
    signs: ['Growth is limited by process, not demand', 'Every new location means new headcount', 'You’re ready to automate, not patch'],
  },
]

export const steps = [
  {
    title: 'Pick a time',
    body: 'Choose a slot that suits you. The call is free and there is no sales pitch.',
  },
  {
    title: 'Tell us about your business',
    body: 'A few short questions about your systems and pain points, so the call is about you from minute one.',
  },
  {
    title: 'Leave with your roadmap',
    body: 'Find out which phase you’re in, what to tackle next, and one quick win you can act on this month.',
  },
]

export const takeaways = [
  { title: 'A system scan', body: 'We review your current tools and spot silos, duplicate entry and adoption gaps.' },
  { title: 'Your phase on the Nexora Path', body: 'A clear read on whether to ground, connect or launch next.' },
  { title: 'One practical next step', body: 'Something useful you can do straight away, whether or not you work with us.' },
]

export const services = [
  { title: 'ERP implementation', body: 'Plan, configure and go live on a cloud ERP sized to how you actually work.' },
  { title: 'ERP migration', body: 'Move off ageing or end-of-life systems, such as Dynamics GP, without losing history.' },
  { title: 'Integrations', body: 'Connect your ERP to eCommerce, CRM, payroll, shipping and the rest of your stack.' },
  { title: 'Cloud hosting', body: 'Secure, managed hosting so your team can work from anywhere.' },
  { title: 'Custom development', body: 'Add-ons, workflows and reports built for the gaps standard software leaves.' },
  { title: 'Support and managed services', body: 'A help desk and consultants who already know your setup, after go-live.' },
]

// TODO: list only platforms you are an authorised partner for.
export const platforms = ['Acumatica', 'Microsoft Dynamics 365', 'ServiceNow']

export const industries = [
  { name: 'Manufacturing', body: 'Bills of materials, production scheduling and quality tracking in one place.' },
  { name: 'Distribution', body: 'Real-time inventory, warehouse flows and faster order-to-cash.' },
  { name: 'Construction', body: 'Job costing, project billing and field-to-office visibility.' },
  { name: 'Retail and eCommerce', body: 'Online and in-store orders, stock and finance kept in sync.' },
  { name: 'Professional services', body: 'Time, projects and billing that tie straight into the books.' },
  { name: 'Financial management', body: 'Faster closes, cleaner audits and multi-entity reporting.' },
]

export const reasons = [
  {
    title: 'Advice before software',
    body: 'We start with how your business runs, then recommend what fits, even when that means buying less.',
  },
  {
    title: 'On-site and hands-on',
    body: 'Our consultants walk your floor, sit with your teams and fix processes, not just settings.',
  },
  {
    title: 'A path that’s been walked',
    body: 'The same three phases every time, adapted to your business, so nothing is left to guesswork.',
  },
]

// TODO: replace with real client logos (image paths) once you have permission.
export const clientLogos = ['Client logo', 'Client logo', 'Client logo', 'Client logo', 'Client logo', 'Client logo']

// TODO: replace with real client quotes. Set placeholder: false once real.
export const testimonials = [
  {
    placeholder: true,
    quote: 'Add a short quote from a client about the result you delivered: time saved, revenue grown, close shortened.',
    name: 'Client name',
    role: 'Job title, Company',
  },
  {
    placeholder: true,
    quote: 'A second quote works best when it highlights a different strength, such as your on-site, hands-on approach.',
    name: 'Client name',
    role: 'Job title, Company',
  },
]
