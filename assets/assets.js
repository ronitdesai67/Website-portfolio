import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

// ---------------------------------------------------------------------------
// Deployed demo URLs. Each case study is its own Vercel project (client +
// API on one domain), so this is the only place the site needs to know about
// them: paste a URL here and that project's card and detail page switch from
// "coming soon" to a live link automatically.
// ---------------------------------------------------------------------------
export const liveUrls = {
    teampulse: '',
    launchstack: '',
    documind: '',
    syncflow: '',
    pulseboard: '',
};

export const workData = [
    {
        slug: 'teampulse',
        title: 'TeamPulse',
        description: 'HR Operations SaaS',
        bgImage: '/work-teampulse.png',
        tagline: 'Role-based HR ops dashboard: attendance, leave approvals, and team analytics.',
        client: 'Northbeam Logistics (case study)',
        problem: "Northbeam's ops team tracked attendance and leave in a shared spreadsheet that broke down past 15 employees — no audit trail on approvals, no role separation, no visibility into attendance trends without manual pivot tables.",
        solution: 'A multi-tenant HR dashboard with server-enforced role-based access (Admin/Manager/Employee), a full leave-request approval workflow that auto-updates leave balances, attendance check-in/out with automatic late detection, and a company-wide analytics dashboard built from real aggregated data.',
        stack: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'React', 'Vite', 'Tailwind CSS', 'Recharts', 'JWT auth', 'Vercel'],
        highlights: [
            'Role checks enforced at the API layer, not just hidden in the UI',
            'Dashboard stats fall back to the most recent working day so the demo never looks empty on weekends',
            'Public demo self-heals on a schedule so visitor changes never pile up',
        ],
        demoLogin: { email: 'priya.nair@northbeam.io', password: 'demo1234', note: 'one-click quick-fill for Admin / Manager / Employee on the login screen' },
        liveUrl: liveUrls.teampulse,
        repoUrl: 'https://github.com/ronitdesai67/teampulse',
    },
    {
        slug: 'launchstack',
        title: 'LaunchStack',
        description: 'SaaS Starter Kit',
        bgImage: '/work-launchstack.png',
        tagline: 'Auth, teams, invites, and billing — the foundation every early-stage SaaS needs first.',
        client: 'Loomstack (case study)',
        problem: 'An early-stage startup needed to stop hand-rolling auth and team management for every new feature and start onboarding paying customers instead of building infrastructure.',
        solution: 'A working SaaS shell with real signup (a visitor can create a brand-new organization end to end), team invites with shareable links, role-based permissions (Owner/Admin/Member) enforced server-side, and a simulated billing ledger with plan upgrades and invoice history — clearly labeled as a demo, with a real Stripe integration point documented for production.',
        stack: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'React', 'Vite', 'Tailwind CSS', 'Recharts', 'JWT auth', 'Vercel'],
        highlights: [
            'Public signup flow is fully functional, not a mockup — try it yourself',
            'Server-side RBAC verified with curl: a Member genuinely gets 403 on billing actions',
            'Billing is honestly labeled as simulated, with the real Stripe integration point documented',
        ],
        demoLogin: { email: 'mara.whitfield@loomstack.io', password: 'demo1234', note: 'one-click quick-fill for Owner / Admin / Member, or sign up as a new org' },
        liveUrl: liveUrls.launchstack,
        repoUrl: 'https://github.com/ronitdesai67/launchstack',
    },
    {
        slug: 'documind',
        title: 'DocuMind',
        description: 'AI Contract Analysis',
        bgImage: '/work-documind.png',
        tagline: 'Upload a contract, ask questions, get answers grounded in the actual clause text.',
        client: 'Redlyne (case study)',
        problem: 'A legal-tech startup wanted an AI contract-review feature as their core product differentiator, without the operating risk of an uncapped public AI demo racking up API costs.',
        solution: 'A hybrid answer pipeline: hand-verified sample Q&A for a library of real sample contracts (fuzzy-matched so rephrased questions still work), a genuine live Claude API integration that activates only if an API key is added, and an extractive fallback that finds the closest matching clause in any custom-uploaded document. Every answer is labeled by source so it never overstates its own authority.',
        stack: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'React', 'Vite', 'Tailwind CSS', 'Vercel', '@anthropic-ai/sdk', 'multer', 'pdf-parse'],
        highlights: [
            'Free to run publicly forever, with a real AI code path ready to switch on',
            'Rate-limited ask endpoint (30 req/IP/hour) protects against cost abuse if a live key is ever added',
            'Every chat answer is tagged — sample, AI-generated, or closest-matching-section — for full transparency',
        ],
        demoLogin: { email: 'demo@documind.io', password: 'demo1234', note: 'one-click quick-fill on the login screen' },
        liveUrl: liveUrls.documind,
        repoUrl: 'https://github.com/ronitdesai67/documind',
    },
    {
        slug: 'syncflow',
        title: 'SyncFlow',
        description: 'Automation Platform',
        bgImage: '/work-syncflow.png',
        tagline: 'A Zapier-style workflow builder with real webhooks, schedules, and an auditable run history.',
        client: 'Fieldstream Logistics (case study)',
        problem: 'An ops-heavy company was manually copy-pasting data between tools and needed a lightweight automation layer — without the security exposure that a "call any URL from our server" feature usually implies.',
        solution: 'A workflow builder with three real trigger types (public webhook, cron schedule, manual run) and safe step types (HTTP request, payload transform, delay, log) — backed by an SSRF-hardened outbound HTTP executor that resolves and validates the destination IP before every call, on every trigger path, with rate limiting and hard timeouts.',
        stack: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'node-cron', 'React', 'Vite', 'Tailwind CSS', 'Vercel'],
        highlights: [
            'SSRF defense verified directly: requests to loopback, link-local/cloud-metadata, and localhost are all blocked with clear run-log errors',
            'A real public webhook URL + ready-to-copy curl command — trigger it yourself and watch the run appear',
            'Cron interval and delay values are clamped server-side, not just validated in the UI',
        ],
        demoLogin: { email: 'ops@fieldstream.io', password: 'demo1234', note: 'one-click quick-fill on the login screen' },
        liveUrl: liveUrls.syncflow,
        repoUrl: 'https://github.com/ronitdesai67/syncflow',
    },
    {
        slug: 'pulseboard',
        title: 'PulseBoard',
        description: 'Product Analytics',
        bgImage: '/work-pulseboard.png',
        tagline: 'A lightweight Mixpanel-style analytics dashboard with a real event-ingestion API.',
        client: 'Driftwell (case study)',
        problem: "A startup wanted to show its own users' usage back to them without paying for a full analytics platform, and needed a real ingestion pipeline to prove the concept.",
        solution: 'A per-project analytics dashboard computed from real stored events — not pre-baked chart data — fed by a public, API-key-authenticated ingestion endpoint. Includes a time-series chart, top-events breakdown, a live "send a test event" panel with a copyable curl command, and CSV export.',
        stack: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'React', 'Vite', 'Tailwind CSS', 'Recharts', 'Vercel', 'express-rate-limit'],
        highlights: [
            'Aggregation queries run against real Event rows per project — switching projects visibly changes every chart',
            'Public ingestion endpoint enforces payload size caps, API-key auth, and per-key + per-IP rate limiting',
            'CSV export and the live test-event panel both hit real endpoints, not sample data',
        ],
        demoLogin: { email: 'dev@driftwell.io', password: 'demo1234', note: 'one-click quick-fill on the login screen' },
        liveUrl: liveUrls.pulseboard,
        repoUrl: 'https://github.com/ronitdesai67/pulseboard',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];