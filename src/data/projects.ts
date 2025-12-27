export interface Project {
    slug: string;
    title: string;
    description: string;
    technologies: string[];
    learnings: {
        title: string;
        content: string;
    }[];
    images: {
        src: string;
        alt: string;
        title: string;
    }[];
    isPremium?: boolean;
}

export const projects: Project[] = [
    {
        slug: "library-store",
        title: "Library Store",
        description: "A full-stack online library store built with Django. The platform includes core features commonly found in modern e-commerce applications, such as user authentication, dynamic shopping cart functionality, and secure online payments.",
        technologies: ["django", "python", "postgresql", "HTML5", "CSS3"],
        learnings: [
            {
                title: "Payment Integration",
                content: "Successfully integrated Stripe's payment gateway to handle secure transactions. This involved managing webhooks for payment confirmation, handling different payment states (success, failure, pending), and ensuring PCI compliance by not storing sensitive card data directly."
            },
            {
                title: "Authentication & Session Management",
                content: "Implemented a robust authentication system that supports both guest and registered users. A key challenge was merging anonymous cart sessions with user accounts upon login, ensuring a seamless shopping experience without data loss."
            },
            {
                title: "Database Design",
                content: "Designed a relational database schema using PostgreSQL to efficiently manage books, categories, user profiles, and order history. Optimized queries to handle complex filtering and searching of the book catalog."
            }
        ],
        images: [
            { src: "/projects/library-store/home.png", alt: "Library Store Home", title: "Home Page" },
            { src: "/projects/library-store/brave_screenshot.png", alt: "Library Store View", title: "Store View" },
            { src: "/projects/library-store/brave_screenshot (1).png", alt: "Library Store Cart", title: "Shopping Cart" },
            { src: "/projects/library-store/brave_screenshot (2).png", alt: "Library Store Checkout", title: "Checkout" }
        ]
    },
    {
        slug: "issue-tracker",
        title: "Issue Tracker",
        description: "An issue tracking platform built using Next.js App Router. The application focuses on mastering the fundamentals of Next.js, including server components, routing strategies, and authentication.",
        technologies: ["next", "react", "tailwindcss", "typeScript"],
        learnings: [
            {
                title: "Next.js App Router Mastery",
                content: "Deepened understanding of the Next.js App Router architecture, specifically the distinction between Server and Client Components. Leveraged Server Components for improved performance and SEO by rendering data-heavy parts of the application on the server."
            },
            {
                title: "Secure Authentication",
                content: "Implemented secure authentication flows using Google OAuth via NextAuth.js (Auth.js). This included managing sessions, protecting private routes, and handling user roles to restrict access to certain features like issue deletion."
            },
            {
                title: "Dynamic Routing & Filtering",
                content: "Built a flexible filtering system using URL search parameters. This allows users to bookmark or share specific views of the issue list (e.g., 'Open bugs assigned to me') without needing complex state management libraries."
            }
        ],
        images: [
            { src: "/projects/issue-tracker/home.png", alt: "Issue Tracker Home", title: "Dashboard" },
            { src: "/projects/issue-tracker/list-issues.png", alt: "Issue List", title: "Issue List" },
            { src: "/projects/issue-tracker/add-new-issue.png", alt: "Add Issue", title: "Create Issue" },
            { src: "/projects/issue-tracker/issue-details.png", alt: "Issue Details", title: "Issue Details" }
        ]
    },
    {
        slug: "realtime-chat",
        title: "Real-Time Chat Application",
        description: "A simple real-time chat application built with Next.js, focused on understanding the core principles of real-time systems. The project emphasizes real-time communication, API integration, and state synchronization.",
        technologies: ["next", "react", "tailwindcss", "typeScript", "redis", "reactquery", "elysiajs", "bun"],
        learnings: [
            {
                title: "Real-time Communication",
                content: "Gained hands-on experience with WebSockets (or similar real-time technologies) to enable instant messaging. Solved challenges related to connection stability, message ordering, and handling user presence (online/offline status)."
            },
            {
                title: "Optimistic UI Updates",
                content: "Implemented optimistic UI updates using TanStack Query. This ensures the chat interface feels incredibly responsive by displaying sent messages immediately before the server confirms receipt, rolling back only if an error occurs."
            },
            {
                title: "State Synchronization",
                content: "Mastered the synchronization of client-side state with the server. Handled edge cases like multiple users typing simultaneously and ensuring all clients receive updates in real-time without manual refreshing."
            }
        ],
        images: [
            { src: "/projects/realtime-chat/room1.png", alt: "Chat Room", title: "Chat Room" },
            { src: "/projects/realtime-chat/chat.png", alt: "Chat Interface", title: "Messaging" },
            { src: "/projects/realtime-chat/two-chat.png", alt: "Multi-user Chat", title: "Real-time Sync" }
        ]
    },
    {
        slug: "clinic-booking-system",
        title: "Clinic Booking System",
        description: "A production-ready, white-label clinic management solution designed to streamline healthcare operations. This premium, multilingual application offers a seamless booking experience for patients and a powerful administrative dashboard for doctors, built with scalability and security in mind.",
        technologies: ["next", "react", "postgresql", "tailwindcss", "better-auth", "neon", "typescript", "shadcn-ui"],
        isPremium: true,
        learnings: [
            {
                title: "Enterprise-Grade Architecture",
                content: "Built on a robust Next.js foundation with a scalable PostgreSQL database. The system is designed to handle high concurrency and large datasets, making it suitable for growing clinics and multi-doctor practices."
            },
            {
                title: "Bank-Level Security & RBAC",
                content: "Features a secure authentication system supporting Email/Password and OAuth (Google, Facebook). Implements strict Role-Based Access Control (RBAC) where only administrators can generate staff accounts, ensuring tight security over sensitive patient data."
            },
            {
                title: "Actionable Business Intelligence",
                content: "Equipped with a comprehensive analytics dashboard that transforms raw appointment data into actionable insights. Doctors can track revenue, patient retention, and peak hours to optimize clinic operations."
            },
            {
                title: "Multilingual Support (i18n)",
                content: "Designed with a scalable internationalization architecture, supporting both Arabic (RTL) and English (LTR) out of the box. The system allows for dynamic addition of new languages without altering core logic."
            },
            {
                title: "Smart Scheduling Engine",
                content: "Implemented complex booking logic that enforces daily limits per doctor and prevents overbooking. The system automatically validates availability and redirects users when slots are full, ensuring efficient schedule management."
            }
        ],
        images: [
            { src: "/projects/clinic-booking-system/clinic-home-en.png", alt: "Clinic Home", title: "Home Page" },
            { src: "/projects/clinic-booking-system/clinic-dashboard-en.png", alt: "Doctor Dashboard", title: "Dashboard" },
            { src: "/projects/clinic-booking-system/clinic-reserve-en.png", alt: "Reservation", title: "Booking" },
            { src: "/projects/clinic-booking-system/clinic-otp-form.png", alt: "OTP Verification", title: "Security" },
            { src: "/projects/clinic-booking-system/clinic-patient-details-en.png", alt: "Patient Details", title: "Patient Records" }
        ]
    }
];
