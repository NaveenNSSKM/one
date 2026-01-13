
import { SectionHeader } from "@/components/ui/section-header";

export function BuildArticles() {
    return (
        <div className="min-h-screen pt-32 px-6">
            <SectionHeader
                label="ARTICLES"
                title="Insights from the Lab"
                description="Deep dives into technology, strategy, and innovation."
                centered
                size="lg"
            />
            <div className="max-w-6xl mx-auto mt-16 text-center text-muted-foreground">
                Coming soon...
            </div>
        </div>
    );
}

export default BuildArticles;
