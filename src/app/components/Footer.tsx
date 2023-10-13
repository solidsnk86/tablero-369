'use client'

export default function Footer() {
    const linkedIn = () => {
        const url = 'https://www.linkedin.com/in/gabriel-calcagni/'
        window.open(url)
    }
    const project = [
        {
            name: 'Cancha de bochas Club Dolores BAP · Concarán · San Luis',
            dev: 'Desarrollo de software · ',
            author: 'solidSnk86'
        }
    ]
    return (
       <footer className="footer flex justify-center m-auto absolute bottom-0 flex-col font-semibold text-center text-sm md:text-lg">
        {
            project.map((i) => (
                <>
                <p>{i.name}</p>
                <p>{i.dev}<b className="text-orange-400 cursor-pointer" onClick={linkedIn}>{i.author}</b></p>
                </>
            ))
        }
        </footer>
    )
}