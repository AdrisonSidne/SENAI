import { Batalha,Hero,Viloes } from "../models/batalhaModel.js";


// batalha
async function batalhar(req, res) {
    try {
        // Recebe os IDs do herói e do vilão do corpo da requisição
        const { idHeroi, idVilao } = req.body;
        // Encontra os personagens no banco de dados
        const heroi = await Hero.findByPk(idHeroi);
        const vilao = await Viloes.findByPk(idVilao);
        // Verifica se os personagens foram encontrados
        if (!heroi || !vilao) {
            return res.status(404).send({ mensagem: 'Herói ou Vilão não encontrado.' });
        }
        // Lógica da batalha: o personagem com maior poder vence
        let vencedor;
        let perdedor;
        if (heroi.poder > vilao.poder) {
            vencedor = heroi;
            perdedor = vilao;
        } else if (vilao.poder > heroi.poder) {
            vencedor = vilao;
            perdedor = heroi;
        } else {
            // Em caso de empate, o herói vence por padrão
            vencedor = heroi;
            perdedor = vilao;
        }
        // Atualiza os placares de vitórias e derrotas
        await vencedor.increment('vitorias', { by: 1 });
        await perdedor.increment('derrotas', { by: 1 });
        // Cria um registro na tabela Batalha
        const novaBatalha = await Batalha.create({
            id_heroi: heroi.id,
            id_vilao: vilao.id,
            nome_vencedor: vencedor.nome,
        });
        // Envia uma resposta com o resultado da batalha
        res.status(200).send({
            mensagem: `A batalha terminou! O vencedor é: ${vencedor.nome}`,
            batalha: novaBatalha,
        });

    } catch (err) {
        console.error(err);
        res.status(500).send({ mensagem: 'Erro ao processar a batalha.', details: err.message });
    }
}

module.exports(batalhar)