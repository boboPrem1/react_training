export default function Todos() {
    return (
        <div className="w-1/4 py-3 px-4 inline-flex flex-row-reverse flex-wrap justify-between bg-white/25 rounded-xl m-3">
            <div>
                <h1 className="mt-1 text-[0.9rem] text-white">Juvanio Amouzougan's todos</h1>
                <ul className="text-xs ml-3 list-none hover:ml-6 hover:list-disc transition-all">
                    <li>Invent new traffic lights</li>
                    <li>Rehearse a movie scene</li>
                    <li>Improve the spectrum technology</li>
                </ul>
            </div>
            <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Juvanio Amouzougan" className="rounded-xl"/>
        </div>
    )
}
