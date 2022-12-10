import { useEffect, useState } from "react";
import { api } from "../../services/api";

import "./styles.css";

export default function Tabela({ selected }: { selected: string }) {
    const [cargo, setCargo] = useState([]);
    const [categoriaProduto, setCategoriaProduto] = useState([]);
    const [cliente, setCliente] = useState([]);
    const [estoque, setEstoque] = useState([]);
    const [fabricante, setFabricante] = useState([]);
    const [filial, setFilial] = useState([]);
    const [funcionario, setFuncionario] = useState([]);
    const [nota, setNota] = useState([]);
    const [metodoPag, setMetodoPag] = useState([]);
    const [produto, setProduto] = useState([]);
    const [produtoNota, setProdutoNota] = useState([]);
    const [venda, setVenda] = useState([]);

    const getTables = (table: string, setter: any) => {
        api.get("/select", {
            params: {
                table: table,
            },
        }).then((response) => setter(response.data.records));
    };

    useEffect(() => {
        getTables("cargo", setCargo);
        getTables("categoriaproduto", setCategoriaProduto);
        getTables("cliente", setCliente);
        getTables("estoque", setEstoque);
        getTables("fabricante", setFabricante);
        getTables("filial", setFilial);
        getTables("nota", setNota);
        getTables("metodo_pag", setMetodoPag);
        getTables("produto", setProduto);
        getTables("produtonota", setProdutoNota);
        getTables("venda", setVenda);
        getTables("funcionario", setFuncionario);
    }, []);

    const tabelaCargo = () => {
        return (
            <table>
                <tr>
                    <th>Código do Cargo</th>
                    <th>Salário</th>
                    <th>Descrição</th>
                    <th>Permissão de Venda</th>
                </tr>

                {cargo.map((cargo: any) => (
                    <>
                        <tr key={cargo[0]}>
                            <td>{cargo[0]}</td>
                            <td>{cargo[1]}</td>
                            <td>{cargo[2]}</td>
                            <td>{String(cargo[3])}</td>
                        </tr>
                    </>
                ))}
            </table>
        );
    };

    const tabelaCategoriaProduto = () => {
        return (
            <table>
                <tr>
                    <th>Código da Categoria</th>
                    <th>Descrição</th>
                </tr>

                {categoriaProduto.map((categoriaProduto: any) => (
                    <>
                        <tr key={categoriaProduto[0]}>
                            <td>{categoriaProduto[0]}</td>
                            <td>{categoriaProduto[1]}</td>
                        </tr>
                    </>
                ))}
            </table>
        );
    };

    const tabelaCliente = () => {
        return (
            <table>
                <tr>
                    <th>Código Cliente</th>
                    <th>CPF</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                </tr>

                {cliente.map((cliente: any) => (
                    <>
                        <tr key={cliente[0]}>
                            <td>{cliente[0]}</td>
                            <td>{cliente[1]}</td>
                            <td>{cliente[2]}</td>
                            <td>{cliente[3]}</td>
                            <td>{cliente[4]}</td>
                        </tr>
                    </>
                ))}
            </table>
        );
    };

    const tabelaEstoque = () => {
        return (
            <table>
                <tr>
                    <th>Código da Filial</th>
                    <th>Código Produto</th>
                    <th>Quantidade</th>
                </tr>

                {estoque.map((estoque: any) => (
                    <>
                        <tr key={estoque[0]}>
                            <td>{estoque[0]}</td>
                            <td>{estoque[1]}</td>
                            <td>{estoque[2]}</td>
                        </tr>
                    </>
                ))}
            </table>
        );
    };

    const tabelaFabricante = () => {
        return (
            <table>
                <tr>
                    <th>Código do Fabricante</th>
                    <th>Nome</th>
                </tr>

                {fabricante.map((fabricante: any) => (
                    <>
                        <tr key={fabricante[0]}>
                            <td>{fabricante[0]}</td>
                            <td>{fabricante[1]}</td>
                        </tr>
                    </>
                ))}
            </table>
        );
    };

    const tabelaFilial = () => {
        return (
            <table>
                <tr>
                    <th>Código da Filial</th>
                    <th>Nome</th>
                    <th>Cidade</th>
                    <th>Estado</th>
                    <th>CEP</th>
                    <th>Rua</th>
                    <th>Número</th>
                </tr>

                {filial.map((filial: any) => (
                    <>
                        <tr key={filial[0]}>
                            <td>{filial[0]}</td>
                            <td>{filial[1]}</td>
                            <td>{filial[2]}</td>
                            <td>{filial[3]}</td>
                            <td>{filial[4]}</td>
                            <td>{filial[5]}</td>
                            <td>{filial[6]}</td>
                        </tr>
                    </>
                ))}
            </table>
        );
    };

    const tabelaNota = () => {
        return (
            <table>
                <tr>
                    <th>Número da nota</th>
                    <th>Data</th>
                    <th>Número de parcelas</th>
                    <th>Código da filial</th>
                    <th>Código do método de pagamento</th>
                    <th>Código do funcionário</th>
                    <th>Código do cliente</th>
                </tr>

                {nota.map((nota: any) => (
                    <>
                        <tr key={nota[0]}>
                            <td>{nota[0]}</td>
                            <td>{nota[1]}</td>
                            <td>{nota[2]}</td>
                            <td>{nota[3]}</td>
                            <td>{nota[4]}</td>
                            <td>{nota[5]}</td>
                            <td>{nota[6]}</td>
                        </tr>
                    </>
                ))}
            </table>
        );
    };

    const tabelaMetodoPagamento = () => {
        return (
            <table>
                <tr>
                    <th>Código do Método</th>
                    <th>Descrição</th>
                </tr>

                {metodoPag.map((metodoPag: any) => (
                    <>
                        <tr key={metodoPag[0]}>
                            <td>{metodoPag[0]}</td>
                            <td>{metodoPag[1]}</td>
                        </tr>
                    </>
                ))}
            </table>
        );
    };

    const tabelaProduto = () => {
        return (
            <table>
                <tr>
                    <th>Código do Produto</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Código da Categoria</th>
                    <th>Código do Fabricante</th>
                </tr>

                {produto.map((produto: any) => (
                    <>
                        <tr key={produto[0]}>
                            <td>{produto[0]}</td>
                            <td>{produto[1]}</td>
                            <td>{produto[2]}</td>
                            <td>{produto[3]}</td>
                            <td>{produto[4]}</td>
                        </tr>
                    </>
                ))}
            </table>
        );
    };

    const tabelaProdutoNota = () => {
        return (
            <table>
                <tr>
                    <th>Número da nota</th>
                    <th>Código do produto</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>

                {produtoNota.map((produtoNota: any) => (
                    <>
                        <tr key={produtoNota[0]}>
                            <td>{produtoNota[0]}</td>
                            <td>{produtoNota[1]}</td>
                            <td>{produtoNota[2]}</td>
                            <td>{produtoNota[3]}</td>
                        </tr>
                    </>
                ))}
            </table>
        );
    };

    const tabelaVenda = () => {
        return (
            <table>
                <tr>
                    <th>Código da Venda</th>
                    <th>Número da nota</th>
                    <th>Data de vencimento</th>
                    <th>Data de pagamento</th>
                    <th>Multa</th>
                    <th>Valor</th>
                    <th>Desconto</th>
                </tr>

                {venda.map((venda: any) => (
                    <>
                        <tr key={venda[0]}>
                            <td>{venda[0]}</td>
                            <td>{venda[1]}</td>
                            <td>{venda[2]}</td>
                            <td>{venda[3]}</td>
                            <td>{venda[4]}</td>
                            <td>{venda[5]}</td>
                            <td>{venda[6]}</td>
                        </tr>
                    </>
                ))}
            </table>
        );
    };

    const tabelaFuncionario = () => {
        return (
            <table>
                <tr>
                    <th>Código do Funcionário</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Código da filial</th>
                    <th>Código do cargo</th>
                </tr>

                {funcionario.map((funcionario: any) => (
                    <>
                        <tr key={funcionario[0]}>
                            <td>{funcionario[0]}</td>
                            <td>{funcionario[1]}</td>
                            <td>{funcionario[2]}</td>
                            <td>{funcionario[3]}</td>
                            <td>{funcionario[4]}</td>
                        </tr>
                    </>
                ))}
            </table>
        );
    };

    const selectedTable = () => {
        switch (selected) {
            case "cargo":
                return tabelaCargo();

            case "categoriaproduto":
                return tabelaCategoriaProduto();

            case "cliente":
                return tabelaCliente();

            case "estoque":
                return tabelaEstoque();

            case "fabricante":
                return tabelaFabricante();

            case "filial":
                return tabelaFilial();

            case "nota":
                return tabelaNota();

            case "metodo_pag":
                return tabelaMetodoPagamento();

            case "produto":
                return tabelaProduto();

            case "produtonota":
                return tabelaProdutoNota();

            case "venda":
                return tabelaVenda();

            case "funcionario":
                return tabelaFuncionario();

            default:
                return <></>;
        }
    };

    return selectedTable();
}
