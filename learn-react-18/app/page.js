import "./globale.css";
import Gallery from "@/app/components/Gallery";
import {Profile} from "@/app/components/Gallery"
import Todos from "@/app/components/Todos";

export default function Home() {
    return (
        <main className="text-center flex flex-col justify-center px-6 h-[100vh]">
            <section className="m-auto text-center text-left">
                <Todos/>
                <Todos/>
                <Todos/>
                <Todos/>
                <Todos/>
            </section>
        </main>
    )
}