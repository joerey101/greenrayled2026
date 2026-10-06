import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectContent from "@/components/ProjectContent";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.descriptionEn ?? project.description,
    alternates: {
      canonical: `/en/proyectos/${slug}`,
      languages: {
        es: `/proyectos/${slug}`,
        "es-AR": `/proyectos/${slug}`,
        en: `/en/proyectos/${slug}`,
        "x-default": `/proyectos/${slug}`,
      },
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return <ProjectContent project={project} />;
}
