import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Globe, Github } from "lucide-react";
import { fallbackCV } from "@/constants";
import type { Props } from "@/type";

export default function CVPreview({ cv }: Props) {
  const data = cv ?? fallbackCV;
  const isFallback = !cv;

  return (
    <Card className="w-full h-full shadow-xl border-muted/40">
      <div className="h-[650px] overflow-y-auto">
        <CardContent className="p-8 space-y-8">
          {/* {isFallback && (
            <div className="text-xs text-muted-foreground bg-muted/40 px-3 py-2 rounded-md">
              This is a preview template. Add your CV information to personalize
              it.
            </div>
          )} */}

          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {data.fullName}
            </h1>
            <p className="text-primary font-medium">{data.title}</p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-3">
              {data.location && (
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> {data.location}
                </span>
              )}
              {data.email && (
                <span className="flex items-center gap-1">
                  <Mail size={14} /> {data.email}
                </span>
              )}
              {data.website && (
                <span className="flex items-center gap-1">
                  <Globe size={14} /> {data.website}
                </span>
              )}
              {data.github && (
                <span className="flex items-center gap-1">
                  <Github size={14} /> {data.github}
                </span>
              )}
            </div>
          </div>

          <Section title="Experience">
            {data.experience.map((exp, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">{exp.role}</h3>
                  <Badge variant="outline">{exp.period}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
                <ul className="list-disc ml-5 text-sm space-y-1">
                  {exp.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>

          <Section title="Education">
            {data.education.map((ed, i) => (
              <div key={i}>
                <h3 className="font-semibold">{ed.degree}</h3>
                <p className="text-sm text-muted-foreground">
                  {ed.school} • {ed.year}
                </p>
              </div>
            ))}
          </Section>

          <Section title="Skills">
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, i) => (
                <Badge key={i} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </Section>

          <Section title="Languages">
            <div className="space-y-1 text-sm">
              {data.languages.map((lang, i) => (
                <div key={i} className="flex justify-between">
                  <span>{lang.name}</span>
                  <span className="text-muted-foreground">{lang.level}</span>
                </div>
              ))}
            </div>
          </Section>
        </CardContent>
      </div>
    </Card>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold border-b pb-1">{title}</h2>
      {children}
    </section>
  );
}
