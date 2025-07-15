import axios from "axios";
import ProjectsSection from "@/app/project/ProjectRoute";

export const revalidate = 60;

const ProjectApi = async () => {
    try {
        const [projectsRes, categoriesRes] = await Promise.all([
            axios.get(`${process.env.DOMAIN}/api/projects`),
            axios.get(`${process.env.DOMAIN}/api/project-categories`),
        ]);

        const data = projectsRes.data;
        const category = categoriesRes.data;

        return <ProjectsSection data={data} category={category} />;
    } catch (error) {
        console.error("Error fetching project data:", error);
        return <div>Failed to load projects.</div>;
    }
};

export default ProjectApi;


