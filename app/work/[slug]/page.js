import { notFound } from 'next/navigation'
import { workData } from '@/assets/assets'
import ProjectView from './ProjectView'

// Every case study is known at build time, so these pages are prerendered as
// static HTML instead of being resolved client-side. That is what lets each
// project carry its own title, description and link preview when someone
// shares the URL directly.
export function generateStaticParams() {
  return workData.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = workData.find((p) => p.slug === slug)

  if (!project) return { title: 'Project not found' }

  const heading = `${project.title} — ${project.description}`

  return {
    title: `${heading} | Ronit Desai`,
    description: project.tagline,
    openGraph: {
      title: heading,
      description: project.tagline,
      images: [{ url: project.bgImage }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: heading,
      description: project.tagline,
      images: [project.bgImage],
    },
  }
}

export default async function ProjectPage({ params }) {
  const { slug } = await params
  const project = workData.find((p) => p.slug === slug)

  if (!project) notFound()

  return <ProjectView project={project} />
}
