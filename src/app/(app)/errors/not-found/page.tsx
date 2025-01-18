import { ArrowLeftIcon } from "lucide-react";
import { Metadata } from "@/components/metadata";
import { buttonVariants } from "@/components/ui/button";

export default function Page() {
    return (
        <div className="flex flex-col h-[100vh] bg-background justify-center items-center p-6 gap-10">
            <Metadata title="404: This page could not be found" />

            <div className="relative flex justify-center items-center w-full h-96">
                <img
                    alt="error"
                    className="object-contain"
                    src="/assets/error-404.png"
                />
            </div>
            <div className="grid justify-center items-center gap-4">
                <h3 className="text-4xl font-semibold tracking-tight text-center">
                    404: This page could not be found
                </h3>
                <span className="text-center text-muted-foreground">
                    You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation
                </span>
            </div>
            <a href='/' className={buttonVariants({ className: 'w-fit' })}>
                <ArrowLeftIcon />
                Go back to home
            </a>
        </div>
    )
}