import ProjectsSection from './Project';

export const revalidate = 60; // Enable ISR: regenerate page every 60 seconds

const ProjectApi = async () => {
  try {
    const [projectsRes, categoriesRes] = await Promise.all([
      fetch(`${process.env.DOMAIN}/api/projects`),
      fetch(`${process.env.DOMAIN}/api/project-categories`)
    ]);

    if (!projectsRes.ok || !categoriesRes.ok) {
      throw new Error('Failed to fetch data');
    }

    const [projectsData, categoriesData] = await Promise.all([
      projectsRes.json(),
      categoriesRes.json()
    ]);

    return (
      <ProjectsSection
        data={projectsData}
        category={categoriesData}
      />
    );
  } catch (error) {
    console.error('Error fetching project data:', error);
    return <div>Failed to load projects.</div>;
  }
};

export default ProjectApi;
