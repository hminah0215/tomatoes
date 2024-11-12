type ActivityContestDescriptionProps = {
  description: string;
};

export default function ActivityContestDescription({
  description,
}: ActivityContestDescriptionProps) {
  return (
    <section className="px-5">
      {description.split('\n').map((line, index) => (
        <div key={index}>
          <span className="block">{line}</span>
          <br />
        </div>
      ))}
    </section>
  );
}
