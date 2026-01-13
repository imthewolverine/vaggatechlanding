"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavLink = {
	label: string;
	href: string;
	submenu?: Array<{ label: string; href: string }>;
};

const navLinks: NavLink[] = [
	{ label: "Нүүр", href: "/home" },
	{ label: "Бидний тухай", href: "/persentations/about" },
	{
		label: "Үйлчилгээ",
		href: "/persentations/services",
		submenu: [
			{ label: "Consulting", href: "/persentations/services" },
			{ label: "Contact", href: "/persentations/contact" },
		],
	},
	
	{ label: "Холбоо барих", href: "/persentations/contact" },
];

function ChevronDown({ className = "w-3 h-3" }: { className?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className={className}
		>
			<path d="M6.23 8.97a.75.75 0 0 1 1.06-.02L12 13.5l4.71-4.55a.75.75 0 1 1 1.04 1.08l-5.23 5.06a.75.75 0 0 1-1.04 0L6.25 10.03a.75.75 0 0 1-.02-1.06Z" />
		</svg>
	);
}

function Logo() {
	return (
		<div className="flex items-center gap-2">
			<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-linear-to-br from-cyan-400 to-emerald-500">
				<svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
					<rect x="3" y="5" width="18" height="4" rx="2" fill="white" opacity="0.85" />
					<rect x="3" y="11" width="14" height="4" rx="2" fill="white" opacity="0.7" />
					<rect x="3" y="17" width="10" height="4" rx="2" fill="white" opacity="0.55" />
				</svg>
			</span>
			<span className="text-lg font-semibold text-white">VAGGA TECH</span>
		</div>
	);
}

function NavPill({ link }: { link: NavLink }) {
	const pathname = usePathname();
	const isActive = pathname === link.href || (link.href === "/home" && pathname === "/");
	const [open, setOpen] = useState(false);

	return (
		<div
			className="group relative"
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			<Link
				href={link.href === "#" && link.submenu ? link.submenu[0].href : link.href}
				className="flex items-center gap-2 rounded-full bg-[#161a2a] px-5 py-2 text-sm text-white/90 shadow-sm shadow-black/40 ring-1 ring-white/5 hover:text-white hover:bg-[#1b2135] transition-colors"
			>
				<span>{link.label}</span>
				{link.submenu ? (
					<span className="text-white/60 group-hover:text-white/80">
						<ChevronDown />
					</span>
				) : null}
			</Link>
			{isActive ? (
				<span className="absolute left-1/2 -translate-x-1/2 top-11 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
			) : null}

			{link.submenu ? (
				<div
					className={`pointer-events-none absolute left-1/2 z-20 mt-2 w-44 -translate-x-1/2 rounded-xl border border-white/10 bg-[#0f1322]/95 p-2 backdrop-blur-sm shadow-xl shadow-black/40 transition-all ${
						open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
					}`}
				>
					<ul className="pointer-events-auto space-y-1">
						{link.submenu.map((s) => (
							<li key={s.label}>
								<Link
									href={s.href}
									className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
								>
									{s.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			) : null}
		</div>
	);
}

export default function Header() {
	return (
		<header className="sticky top-0 right-0 left-0  z-50 bg-[#070b16]/80 backdrop-blur border-b border-white/5">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
				<Logo />

				<nav className="hidden md:flex items-center gap-3">
					{navLinks.map((link) => (
						<NavPill key={link.label} link={link} />
					))}
				</nav>

				<div className="flex items-center gap-3">
					<Link
						href="/auth/register"
						className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-emerald-500/30 hover:bg-emerald-300"
					>
						JOIN NOW
					</Link>
				</div>
			</div>
		</header>
	);
}

