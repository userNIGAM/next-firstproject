import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full max-w-6xl mx-auto mt-8">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-purple-100/50 p-6 md:p-8 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Brand and tagline */}
          <div className="space-y-1">
            <Link href="/" className="text-xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-purple-800">
              DevStore
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              Your marketplace for developer resources.
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-500">
            <Link href="/about" className="hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-purple-600 transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-purple-600 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-purple-600 transition-colors">
              Terms
            </Link>
          </div>

          {/* Social media icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-purple-100/60 flex items-center justify-center text-purple-600 hover:bg-purple-200 hover:text-purple-700 transition-all duration-200"
              aria-label="Twitter"
            >
              <i className="fa-brands fa-twitter text-sm" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-purple-100/60 flex items-center justify-center text-purple-600 hover:bg-purple-200 hover:text-purple-700 transition-all duration-200"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github text-sm" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-purple-100/60 flex items-center justify-center text-purple-600 hover:bg-purple-200 hover:text-purple-700 transition-all duration-200"
              aria-label="YouTube"
            >
              <i className="fa-brands fa-youtube text-sm" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-purple-100/60 flex items-center justify-center text-purple-600 hover:bg-purple-200 hover:text-purple-700 transition-all duration-200"
              aria-label="Discord"
            >
              <i className="fa-brands fa-discord text-sm" />
            </a>
          </div>
        </div>

        {/* Divider and copyright */}
        <div className="mt-6 pt-4 border-t border-purple-100/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <i className="fa-regular fa-copyright" />
            {currentYear} DevStore. All rights reserved.
          </span>
          <span className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Operational</span>
            </span>
            <span>
              <i className="fa-regular fa-heart text-purple-400 mr-1" />
              Made with love
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}