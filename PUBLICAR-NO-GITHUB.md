# Publicar o site Money Way no GitHub Pages

Esta pasta é o **site completo e pronto** (Money Way Câmbio). Não precisa recriar nada —
o trabalho é só **colocar no ar** no GitHub Pages e devolver o link.

## Estrutura da pasta

```
deploy/
├── index.html              ← página inicial (home)
├── Money Way - Site.html   ← mesma home (os links internos das subpáginas apontam pra cá)
├── moneyway-site/          ← styles.css, app.js, logos (sym.png, sym-inv.png)
├── subpaginas/             ← 9 páginas internas (cotações, remessas, conta global, etc.)
└── assets/                 ← imagens (fotos, ilustrações, logos)
```

Tudo usa **caminhos relativos**, então funciona em qualquer hospedagem estática sem ajuste.

---

## ▶️ Prompt pronto pra colar no Claude Code (VS Code)

> Abra esta pasta `deploy/` no VS Code e cole o texto abaixo no Claude Code:

```
Esta pasta é um site estático já pronto (HTML/CSS/JS, caminhos relativos, index.html na raiz).
Quero publicá-lo no GitHub Pages. Faça tudo via terminal:

1. Confira se o GitHub CLI está autenticado (gh auth status). Se não estiver, rode: gh auth login
2. Inicialize o git nesta pasta e faça o primeiro commit.
3. Crie um repositório público no meu GitHub chamado "moneyway-site" e dê push da branch main.
4. Ative o GitHub Pages servindo a partir da branch main, pasta raiz (/).
5. Me devolva a URL pública final (algo como https://SEU-USUARIO.github.io/moneyway-site/)
   e confirme que o index.html está sendo servido.
```

---

## 🛠️ Comandos equivalentes (caso prefira rodar você mesmo)

Pré-requisito: ter o **GitHub CLI** instalado (`gh`) e autenticado (`gh auth login`).

```bash
# dentro da pasta deploy/
git init
git add -A
git commit -m "Site Money Way Câmbio"

# cria o repo público e já faz o push
gh repo create moneyway-site --public --source=. --remote=origin --push

# ativa o GitHub Pages (branch main, raiz)
gh api -X POST repos/{owner}/moneyway-site/pages \
  -f "source[branch]=main" -f "source[path]=/"
```

O link sai no formato:

```
https://SEU-USUARIO.github.io/moneyway-site/
```

> Pode levar 1–2 minutos pro Pages ficar no ar na primeira vez. Atualize a página se der 404 logo de cara.

---

## Alternativa ainda mais rápida (sem GitHub) — Netlify Drop

Se quiser um link em ~1 minuto sem terminal:

1. Acesse **https://app.netlify.com/drop**
2. **Arraste a pasta `deploy/` inteira** pra dentro da página.
3. Pronto — sai um link `https://algum-nome.netlify.app` pra mandar pro cliente.

Depois de aprovado, dá pra apontar um domínio próprio (ex.: `moneywaycambio.com`) em qualquer uma das opções.
