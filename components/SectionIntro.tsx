export default function SectionIntro({ number, label, title, copy }: { number?: string; label: string; title: React.ReactNode; copy?: string }) {
  return (
    <div className="section-intro">
      <div className="section-kicker">{number ? <span>{number}</span> : null}{label}</div>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}
