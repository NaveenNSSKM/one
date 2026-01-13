
import { SectionHeader } from "@/components/ui/section-header";

export function BuildWhoWeAre() {
    return (
        <div className="min-h-screen pt-32 px-6">
            <SectionHeader
                label="WHO WE ARE"
                title="The Team Behind the Tech"
                description="Meet the engineers, designers, and strategists at Intelous Labs."
                centered
                size="lg"
            />
            <div className="max-w-6xl mx-auto mt-16 text-center text-muted-foreground">
                Coming soon...
            </div>
        </div>
    );
}

export default BuildWhoWeAre;
