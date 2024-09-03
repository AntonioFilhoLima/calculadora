const express = require('express');
const app = express();
const porta = 3000;

app.listen(porta, () => {
    console.log(`Porta ${porta}`);
});

app.get('/calculadora', (req, res) => {
    const operacao = req.query.operacao;
    const n1 = req.query.n1;
    const n2 = req.query.n2;
    let valor;

    if (operacao && n1 && n2) {
        const num1 = parseFloat(n1);
        const num2 = parseFloat(n2);

        switch (operacao) {
            case 'soma':
                valor = num1 + num2;
                break;
            case 'subtracao':
                valor = num1 - num2;
                break;
            case 'multiplicacao':
                valor = num1 * num2;
                break;
            case 'divisao':
                valor = num1 / num2;
                break;
            default:
                let mensagem = 'Use soma, subtração, multiplicação ou divisão.';
                return res.status(400).json({ error: true, mensagem: mensagem });
        }
    } else {
        return res.status(400).json({ error: 'Operacao, n1 e n2 são obrigatórios.' });
    }

    res.status(200).json({ valor });
});
