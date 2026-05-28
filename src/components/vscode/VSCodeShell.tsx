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
  { href: "/resume", label: "resume.mdx", fileName: "resume" },
  { href: "/contact", label: "contact.mdx", fileName: "contact" },
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
          <nav className={styles.fileList}>
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

