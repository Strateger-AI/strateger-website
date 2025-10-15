import { TERMS_AND_CONDITIONS } from "@/data/terms&condition/terms&condition.data";

const TermsAndConditionsComponent = () => {
  const { title, intro, sections } = TERMS_AND_CONDITIONS;

  return (
    <section className="mt-30 px-4 py-16 md:px-12 lg:px-24 xl:px-36">
      <div className="mx-auto max-w-5xl space-y-10 text-neutral-800">
        {/* Heading */}
        <h1 className="text-primary text-3xl font-extrabold md:text-4xl">
          {title}
        </h1>

        {/* Intro */}
        <p className="text-lg leading-relaxed whitespace-pre-line text-gray-700">
          {intro}
        </p>

        {/* Sections */}
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <h2 className="text-2xl font-bold text-black">{section.title}</h2>
            <p className="whitespace-pre-line text-gray-700">
              {section.content}
            </p>

            {section.subpoints && (
              <ul className="mt-4 list-disc space-y-3 pl-5 text-gray-700">
                {section.subpoints.map((sub, subIdx) => (
                  <li key={subIdx}>
                    {sub.title && (
                      <strong className="block">{sub.title}</strong>
                    )}
                    <span className="block">{sub.content}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TermsAndConditionsComponent;
