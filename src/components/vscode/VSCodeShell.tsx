"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./VSCodeShell.module.css";

type Tab = {
  href: string;
  label: string;
  fileName: string;
};

const tabs: Tab[] = [
  { href: "/", label: "welcome.mdx", fileName: "welcome" },
  { href: "/about", label: "about.mdx", fileName: "about" },
  { href: "/projects", label: "projects.mdx", fileName: "projects" },
  { href: "/features", label: "features.mdx", fileName: "features" },
  { href: "/resume", label: "resume.mdx", fileName: "resume" },
  { href: "/contact", label: "contact.mdx", fileName: "contact" },
];

const features = [
  { href: "/features#soc", label: "SOC / Threat Detection" },
  { href: "/features#automation", label: "Security Automation" },
  { href: "/features#smart-contracts", label: "Smart Contract Security" },
  { href: "/features#cloud", label: "AWS CloudTrail Analysis" },
];

const quickLinks = [
  { href: "https://github.com/Aditya2747", label: "GitHub" },
  { href: "/resume.pdf", label: "Resume PDF" },
  { href: "mailto:aditya.27.khanna@gmail.com", label: "Email" },
];

function normalizePathname(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

export function VSCodeShell({ children }: { children: React.ReactNode }) {
  const pathname = normalizePathname(usePathname());

  return (
    <div className={styles.shell}>
      <div className={styles.titleBar}>
        <div className={styles.titleText}>Portfolio — Visual Studio Code</div>
      </div>

      <div className={styles.workspace}>
        <aside className={styles.activityBar} aria-label="Activity Bar">
          <div className={`${styles.activityIcon} ${styles.activityIconActive}`}>
            ☰
          </div>
          <div className={styles.activityIcon}>🔍</div>
          <div className={styles.activityIcon}>⎇</div>
          <div className={styles.activityIcon}>▶</div>
        </aside>

        <aside className={styles.explorer} aria-label="Explorer">
          <div className={styles.explorerHeader}>Explorer</div>
          <div className={styles.fileList}>
            <div className={styles.sectionHeader}>PORTFOLIO</div>
            <nav className={styles.sectionBody}>
              {tabs.map((t) => {
                const isActive = pathname === t.href;
                return (
                  <Link
                    key={t.href}
                    href={t.href}
                    className={`${styles.fileLink} ${isActive ? styles.fileLinkActive : ""}`}
                  >
                    <span>{t.fileName}</span>
                    <span className={styles.fileExt}>.mdx</span>
                  </Link>
                );
              })}
            </nav>

            <div className={styles.sectionHeader}>FEATURES</div>
            <nav className={styles.sectionBody}>
              {features.map((f) => (
                <Link key={f.href} href={f.href} className={styles.featureLink}>
                  {f.label}
                </Link>
              ))}
            </nav>

            <div className={styles.sectionHeader}>LINKS</div>
            <nav className={styles.sectionBody}>
              {quickLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={styles.quickLink}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {l.label}
                </a>
              ))}
              <div className={styles.quickLinkDisabled}>LinkedIn (add URL)</div>
            </nav>
          </div>
        </aside>

        <main className={styles.editor} aria-label="Editor">
          <div className={styles.tabs} role="tablist" aria-label="Open editors">
            {tabs.map((t) => {
              const isActive = pathname === t.href;
              return (
                <Link
                  key={t.href}
                  href={t.href}
                  className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
                  role="tab"
                  aria-selected={isActive}
                >
                  {t.label}
                </Link>
              );
            })}
          </div>

          <div className={styles.editorPane}>
            <div className={styles.content}>{children}</div>
          </div>
        </main>
      </div>

      <footer className={styles.statusBar} aria-label="Status Bar">
        <div className={styles.statusLeft}>
          <span className={styles.statusPill}>main</span>
          <span className={styles.statusPill}>UTF-8</span>
        </div>
        <div className={styles.statusRight}>
          <span className={styles.statusPill}>Next.js</span>
          <span className={styles.statusPill}>MDX</span>
        </div>
      </footer>
    </div>
  );
}
