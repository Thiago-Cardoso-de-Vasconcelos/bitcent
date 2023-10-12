import Cabecalho from "./cabecalho";
import Depoimentos from "./Depoimentos";
import Destaque from "./destaque";
import Rodape from "./rodape";
import Vantagens from "./vantagens";
import Pagina from "@/components/template/Pagina";

export default function Landing () {
    return (
        <Pagina externa>
            <Cabecalho/>
            <Destaque/>
            <Vantagens/>
            <Depoimentos/>
            <Rodape/>
        </Pagina>
    )
}