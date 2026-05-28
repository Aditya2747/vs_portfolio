"use client";

import { useEffect, useState } from "react";

import styles from "./ResumeViewer.module.css";

type Availability = "checking" | "available" | "missing";

async function canLoadPdf(url: string) {
  try {
    const head = await fetch(url, { method: "HEAD" });
    if (head.ok) return true;
    if (head.status !== 405) return false;
  } catch {}

  try {
    const get = await fetch(url, { method: "GET" });
    return get.ok;
  } catch {
    return false;
  }
}

export function ResumeViewer({ pdfPath = "/resume.pdf" }: { pdfPath?: string }) {
  const [availability, setAvailability] = useState<Availability>("checking");

  useEffect(() => {
    let cancelled = false;
    canLoadPdf(pdfPath).then((ok) => {
      if (!cancelled) setAvailability(ok ? "available" : "missing");
    });
    return () => {
      cancelled = true;
    };
  }, [pdfPath]);

  if (availability === "available") {
    return (
      <div className={styles.wrap}>
        <div className={styles.actions}>
          <a
            className={styles.button}
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open resume.pdf
          </a>
        </div>
        <iframe className={styles.frame} title="Resume PDF" src={pdfPath} />
      </div>
    );
  }

  if (availability === "checking") {
    return (
      <div className={styles.wrap}>
        <div className={styles.hint}>Loading resume.pdf…</div>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.actions}>
        <a className={styles.button} href={pdfPath}>
          Resume PDF (missing)
        </a>
      </div>
      <div className={styles.hint}>
        Add a file at <code>public/resume.pdf</code> and redeploy.
      </div>
    </div>
  );
}

