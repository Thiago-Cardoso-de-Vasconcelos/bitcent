import Cabecalho from "./cabecalho";
import Depoimentos from "./depoimentos";
import Destaque from "./destaque";
import Rodape from "./rodape";
import Vantagens from "./vantagens";
import Pagina from "@/components/template/Pagina";

export default function Landing () {
    return (
        <Pagina>
            <Cabecalho/>
            <Destaque/>
            <Vantagens/>
            <Depoimentos/>
            <Rodape/>
        </Pagina>
    )
}