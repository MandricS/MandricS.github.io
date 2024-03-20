import Image from "next/image";

export default function Home() {
  return (
    <div className="py-40 items-center">
        {Array.from({length: 10}, (_, index) => (
            <div key={index} className="w-full h-[100px] flex justify-center">Box {index + 1}</div>
        ))}
    </div>
  );
}
