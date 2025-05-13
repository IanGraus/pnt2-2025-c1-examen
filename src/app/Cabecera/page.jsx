import Link from "next/link"

function Cabecera (props){


    return(
        <header>
            <div>
            <img src="/ortLogo.png" alt="Logo"/>     
            </div>
            <div>
                <Link href={`/peliculas`}>
                <h1 >Peliculas </h1>
                </Link>
            </div>

        </header>
    )
}
export default Cabecera;