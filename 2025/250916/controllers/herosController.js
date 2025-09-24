import { Hero } from "../models/herosModel.js";

async function list(req, res) {
  try {
    const hero = await Hero.findAll();
    return res.status(200).send({ mensagem: hero });
  } catch (error) {
    console.log(error);
    res.status(500).send({ mensagem: "Erro interno" });
  }
}

// listar por id
async function listById(req, res) {
  try {
    const { id } = req.params;
    // buscar dado pela chave primaria (primary key ou pk)
    // const hero = await Hero.findByPk(id)
    // outra forma de buscar pelo primeiro dado do banco de dados (findOne)
    const hero = await Hero.findOne({ where: { id } });
    if (!id || !hero) {
      return res.status(400).send({ mensagem: "ID inválido" });
    }
    // const usuario = await Usuario.findAll({ where: { endereco: endereco }})
    res.status(200).send({ mensagem: hero });
  } catch (error) {
    console.log(error);
    res.status(402).send({ mensagem: "Herói não encontrado" });
  }
}

// criar dados = create
async function create(req, res) {
  try {
    const { nome, poder, vitorias, derrotas } = req.body;
    console.log(req.body);
    if (!nome || !poder || !vitorias || !derrotas) {
      res.status(400).send({ mensagem: "Campos obrigatórios" });
    }
    let cod = 1;
    const heroCreated = await Hero.create({ nome, poder, vitorias, derrotas });
    res.status(201).send({ mensagem: heroCreated });
  } catch (error) {
    console.log("aki");

    console.log(error);
    res.status(400).send({ mensagem: "Erro ao criar herói" });
  }
}

// atualizar dados = update
async function updateById(req, res) {
  try {
    const { nome, poder, vitorias, derrotas } = req.body;
    const { id } = req.params;
    if (!id || !nome || !poder || !vitorias || !derrotas) {
      res.status(400).send({ mensagem: "Campos obrigatórios" });
    }
    const heroUpdated = await Hero.update(
      { nome, poder, vitorias, derrotas },
      { where: { id } }
    );
    res.status(201).send({ mensagem: "Atualizado com sucesso" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ mensagem: "Erro interno" });
  }
}

// deletar por id
async function deleteById(req, res) {
  try {
    const { id } = req.params;
    // DELETE = destroy
    await Hero.destroy({ where: { id: id } });
    res.status(204).send({ mensagem: "Herói excluído com sucesso" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ mensagem: "Erro interno" });
  }
}

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

export { list, listById, create, updateById, deleteById, batalhar };
