"use client";

export default function ServiceDrawer({service, setActive,}: {service: {
    id: string;
    title: string;
    tagline: string;
    accent: string;
    short: string;
    body: string;
    tags: string[];
    details: string[];
  };
  // onClose: () => void;
  setActive: any;
}) {
  return (
    // fix animations
    <div className="mt-3 rounded-2xl overflow-hidden bg-white border animate-in slide-in-from-top-3 w-[100%] col-span-4">
      <div
        className="h-1"
        style={{
          background: service.accent,
        }}
      />

      <div className="p-6">
        <div className="flex justify-between">
          <div>
            <p
              className="uppercase text-xs tracking-widest"
              style={{
                color: service.accent,
              }}
            >
              What's included
            </p>

            <h2 className="text-2xl font-bold">{service.title}</h2>
          </div>

          <button className="z-[5]" onClick={() => setActive(null)}>×</button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <p className="text-gray-600">{service.body}</p>

            <div className="flex gap-2 mt-5 flex-wrap">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs"
                  style={{
                    background: `${service.accent}20`,
                    color: service.accent,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Deliverables
            </p>

            <ul className="mt-3 space-y-2">
              {service.details.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
