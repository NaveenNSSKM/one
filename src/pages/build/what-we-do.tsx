
import { SectionHeader } from "@/components/ui/section-header";

export function BuildWhatWeDo() {
    return (
        <div className="min-h-screen pt-32 px-6">
            <SectionHeader
                label="WHAT WE DO"
                title="Building the Impossible"
                description="Our capabilities and services for ambitious ventures."
                centered
                size="lg"
            />
            <div className="max-w-6xl mx-auto mt-16 text-center text-muted-foreground">
                Coming soon...
            </div>
        </div>
    );
}

export default BuildWhatWeDo;
