import axios from "axios";
import Footer from "@/components/footer/Footer";

const FooterApi = async () => {
    try {
        const [res1] = await Promise.all([
            axios.get("https://malangcode.pythonanywhere.com/api/social-links")
        ]);

        const data = res1.data;

        return <Footer socialLins={data} />;
    } catch (error) {
        console.error("Error fetching project data:", error);
        return <div>Failed to load projects.</div>;
    }
};

export default FooterApi;


