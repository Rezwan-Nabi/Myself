import { profile } from "@/data/profile";

export default function Footer() {
  const { firstName, lastName } = profile.hero;
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-10">
        <p>
          © {new Date().getFullYear()} {firstName} {lastName}
        </p>
        <a href="#top" className="w-fit underline decoration-line underline-offset-4 hover:text-ink hover:decoration-ink">
          Back to top
        </a>
      </div>
    </footer>
  );
}
