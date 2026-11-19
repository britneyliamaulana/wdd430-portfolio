
import ProjectCard from './ProjectCard';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string | null;
  year_completed: number;
}

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </section>
  );
}
