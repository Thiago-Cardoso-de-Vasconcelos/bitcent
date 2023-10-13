import useFormulario from "@/data/hooks/useFormulario";
import MiniFormulario from "../MiniFormulario";
import Usuario from "@/logic/core/usuario/Usuario";
import usuario from "@/data/constansts/usuarioFalso";
import { TextInput } from "@mantine/core";
import Texto from "@/logic/utils/Texto";
import Cpf from "@/logic/utils/Cpf";
import Telefone from "@/logic/utils/Telefone";

export default function Formularios() {
  const { dados, alterarAtributo } = useFormulario<Usuario>(usuario);

  return (
    <div className=" flex flex-col gap-5">
      <MiniFormulario
        titulo="Seu Nome"
        descricao="Como você gostatia de ser chamado?"
        msgRodape="O nome deve possuir entre 3 e 80 caracteres, mais que isso já é um texto!"
        podeSalvar={Texto.tamanho(dados.nome, 3, 80)}
        salvar={() => {}}
      >
        <TextInput value={dados.nome} onChange={alterarAtributo("nome")} />
      </MiniFormulario>
      <MiniFormulario
        titulo="CPF"
        descricao="Seu CPF é ussado internamente pelo sistema."
        msgRodape="Pode relaxar, daqui ele não sai!"
        podeSalvar={Texto.tamanho(dados.cpf ?? '', 11, 14)}
        salvar={() => {}}
      >
        <TextInput value={Cpf.formatar(dados.cpf ?? '')} onChange={alterarAtributo("cpf", Cpf.desformatar)} />
      </MiniFormulario>
      <MiniFormulario
        titulo="Telefone"
        descricao="Usado para notificações importantes sobre a seu conta."
        msgRodape="Se receber ligação a cobrar, não foi a gente!"
        podeSalvar={Texto.tamanho(dados.telefone ?? '', 10, 13)}
        salvar={() => {}}
      >
        <TextInput value={Telefone.formatar(dados.telefone ?? '')} onChange={alterarAtributo("telefone", Telefone.desformatar)} />
      </MiniFormulario>
    </div>
  );
}
