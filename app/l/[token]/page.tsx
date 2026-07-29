import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    token: string;
  }>;
};

type Letter = {
  title: string;
  content: string;
  recipientName: string | null;
  senderName: string | null;
  createdAt: string;
};

type LetterResponse = {
  letter?: Letter;
  error?: string;
};

const SUPABASE_FUNCTION_URL =
  "https://cpistifrzgzijryslmto.supabase.co/functions/v1/get-letter";

function formatDate(value: string): string {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

async function getLetter(token: string): Promise<Letter | null> {
  const response = await fetch(
    `${SUPABASE_FUNCTION_URL}?token=${encodeURIComponent(token)}`,
    {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    },
  );

  if (response.status === 404 || response.status === 400) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Failed to load letter: ${response.status}`);
  }

  const result = (await response.json()) as LetterResponse;

  return result.letter ?? null;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { token } = await params;

  try {
    const letter = await getLetter(token);

    return {
      title: letter?.title
        ? `${letter.title} | Forever Alive`
        : "A Letter for You | Forever Alive",
      description: "A private letter delivered through Forever Alive.",
      robots: {
        index: false,
        follow: false,
        nocache: true,
      },
    };
  } catch {
    return {
      title: "A Letter for You | Forever Alive",
      robots: {
        index: false,
        follow: false,
        nocache: true,
      },
    };
  }
}

export default async function LetterPage({ params }: PageProps) {
  const { token } = await params;

  if (!/^[a-f0-9]{64}$/i.test(token)) {
    notFound();
  }

  const letter = await getLetter(token);

  if (!letter) {
    notFound();
  }

  const recipientName = letter.recipientName?.trim();
  const senderName = letter.senderName?.trim();
  const createdDate = formatDate(letter.createdAt);

  return (
    <main className="letter-page">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <article className="letter-shell">
        <header className="brand-header">
          <a className="brand" href="/" aria-label="Forever Alive home">
            <span className="brand-mark" aria-hidden="true">
              ∞
            </span>

            <span>Forever Alive</span>
          </a>
        </header>

        <section className="letter-card">
          <div className="letter-label">A LETTER FOR YOU</div>

          {recipientName && (
            <p className="recipient">Dear {recipientName},</p>
          )}

          <h1>{letter.title}</h1>

          <div className="divider">
            <span />
          </div>

          <div className="letter-content">
            {letter.content.split(/\r?\n/).map((paragraph, index) =>
              paragraph.trim() ? (
                <p key={index}>{paragraph}</p>
              ) : (
                <div
                  key={index}
                  className="paragraph-space"
                  aria-hidden="true"
                />
              ),
            )}
          </div>

          <footer className="letter-footer">
            {senderName && (
              <div>
                <span className="footer-label">With love,</span>
                <strong>{senderName}</strong>
              </div>
            )}

            {createdDate && (
              <time dateTime={letter.createdAt}>{createdDate}</time>
            )}
          </footer>
        </section>

        <p className="privacy-note">
          This private letter is available only through its secure link.
        </p>
      </article>
    </main>
  );
}