import { Button } from '@/components/ui/button';

export default function HeaderBar() {
    return (
        <div className="lg:px-40 md:px-10 sm:px-5 py-5 fixed top-0 w-full flex justify-between items-center z-10 bg-background/95 border border-bottom border-white/5">
            <div className="flex flex-col">
                <p className="font-black text-3xl text-bold text-green-400">MANDRIC</p>
                <p className="font-black text-xl text-bold -mt-2  text-green-600/50">(Sittaro)</p>
            </div>
            <div className="flex space-x-4">
                <Button variant="link" asChild>
                    <a href="/" className="font-bold">Home</a>
                </Button>
                <Button variant="link" asChild>
                    <a href="/" className="font-bold">About</a>
                </Button>
                <Button variant="link" asChild>
                    <a href="/" className="font-bold">Portfolio</a>
                </Button>
            </div>
        </div>
    );
}