"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Home,
  Film,
  Tv,
  Compass,
  TrendingUp,
  Bookmark,
  Shield,
  Settings,
  User,
  LogIn,
} from "lucide-react";
import { ROUTES } from "@/app/routers/router";

type User = {
  id: string;
};

const menu = [
  { label: "Home", path: ROUTES.HOME, icon: Home },
  { label: "Cartoons", path: ROUTES.CARTOONS, icon: Film },
  { label: "Cartoon Series", path: ROUTES.CARTOON_SERIES, icon: Tv },
  { label: "Movies", path: ROUTES.MOVIES, icon: Film },
  { label: "Browser", path: ROUTES.BROWSER, icon: Compass },
  { label: "Trending", path: ROUTES.TRENDING, icon: TrendingUp },
  { label: "Saved", path: ROUTES.SAVED, icon: Bookmark },
  { label: "Privacy Policy", path: ROUTES.PRIVACY, icon: Shield },
];

export default function SideNavbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  /* 🔐 Check login status */
  useEffect(() => {
    const storedUser = localStorage.getItem("auth_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      {/* 🔹 Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 text-white lg:hidden"
      >
        <Menu size={28} />
      </button>

      {/* 🔹 Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-72
          p-8
          flex flex-col justify-between
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0

          /* 🎨 Gradient Background */
          bg-linear-to-r
          from-black/90
          via-black/80
          to-black/60
          backdrop-blur-xl
          border-r border-white/10
        `}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-white lg:hidden"
        >
          <X size={26} />
        </button>
        <div>
          <Link href={""}>
            <h1 className="text-red-600 text-3xl font-extrabold mb-10">
              Morror
            </h1>
          </Link>
          <nav className="flex flex-col gap-4">
            {menu.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className="
                    flex items-center gap-3
                    text-white/80
                    hover:text-red-500
                    transition font-medium
                  "
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex flex-col gap-4 text-sm">
          <Link
            href={ROUTES.SETTINGS}
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 text-white/70 hover:text-red-500"
          >
            <Settings size={18} />
            Settings
          </Link>

          {user ? (
            <Link
              href={ROUTES.PROFILE(user.id)}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 text-white/70 hover:text-red-500"
            >
              <User size={18} />
              My Profile
            </Link>
          ) : (
            <Link
              href="/signin"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 text-white/70 hover:text-red-500"
            >
              <LogIn size={18} />
              Sign In
            </Link>
          )}
        </div>
      </aside>
    </>
  );
}
