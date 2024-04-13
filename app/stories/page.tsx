import Image from "next/image";
import { Review} from "@/components";
import { reviews } from "@/constants";

export default function Home() {
  return (
    <main className="relative flex text-lg text-white font-playfair flex-col items-center">
        <section className="relatvie container title-text flex flex-col justify-center
         items-center py-16 gap-16 mt-5">
            <div className=" relative w-full py-2">
                <h1 className="title-text text-center text-white">Success Stories</h1>
            </div>

            <div className="relative max-lg:flex hidden w-full h-[35vh]">
                <Image src="/images/min.jpg" alt="min" fill className="object-cover w-full h-full" />
            </div>

            {reviews.map((item)=>(
                <Review name={item.name} text={item.text} href={item.image}/>
            ))}

        </section>
    </main>
  );
}
