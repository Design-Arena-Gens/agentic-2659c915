import { transcriptParagraphs } from '../data/transcript';

const title = 'Machiavelli’s Secret — Narrative Transcript';
const description =
  'A paragraph-style rendering of the video “Machiavelli’s Secret — When You Stop Chasing, They Start Kneeling.”';

export default function Page() {
  return (
    <main className="page">
      <header className="page__header">
        <h1>{title}</h1>
        <p>{description}</p>
        <p className="page__source">
          Source video:{' '}
          <a href="https://youtu.be/_QItQo_TzQo" target="_blank" rel="noreferrer">
            https://youtu.be/_QItQo_TzQo
          </a>
        </p>
      </header>

      <section className="page__transcript">
        {transcriptParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
    </main>
  );
}
