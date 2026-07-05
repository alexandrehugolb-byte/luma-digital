# Identidade visual

> Como a marca aparece em tudo que o MazyOS gera.
> As skills de conteúdo, carrossel e post leem esse arquivo antes de criar qualquer visual.
> Edite quando a marca evoluir.

---

## Cores

> Versão final (substitui a fase "verde forte + vermelho vibrante"). Paleta
> monocromática quente — contorno preto + bege — com terracota só como brilho
> pontual. Mais sóbria e premium que as fases anteriores.

- **Fundo principal:** `#EFE7D6` (bege/pedra suave, quente) — base da marca, não é dark-mode first

- **Contorno / texto principal / "Luma":** `#1A1A18` (preto-carvão, não puro `#000`) — cor do farol (só contorno, sem preenchimento) e do wordmark

- **Terracota (luz do farol, único acento de cor):** `#C1543A` — usado só no ponto de luz no topo do farol; nunca em área grande

- **"DIGITAL" (label secundário):** `#8A8072` (taupe/cinza-quente claro) — deliberadamente discreto, não compete com "Luma"

- **Sobre fundo escuro (quando necessário):** contorno em `#F2EDE1`, "DIGITAL" em `#A89C87`, terracota em `#D9714F` (mais clara, senão some no escuro)

- **Regra de proporção:** a marca é essencialmente preto+bege — terracota é tempero, não ingrediente principal. Se um layout tem mais terracota que preto, tem terracota demais.

---

## Tipografia

- **Wordmark "Luma" (só na logo):** Georgia / Palatino Linotype / Book Antiqua (serifada, bold) — dá o ar sofisticado/sério. Uso exclusivo da logo, não usar serifa na UI.

- **Títulos e destaques (site, carrossel, propostas):** Inter (fallback: Segoe UI, Arial, sans-serif)

- **Corpo, subtítulos e botões:** Inter (mesma família, pesos mais leves)

- **Peso do título:** 700 (bold) nos destaques, 400 no texto corrido, letter-spacing largo (6-2px) em tags/labels

---

## Estilo geral

Fundo bege suave como padrão (não é dark-mode first). Ícone: um **farol** de
contorno — só linha, sem preenchimento sólido, corpo "vazado" — símbolo de
visibilidade/presença 24h. Linguagem visual direta e provocativa: perguntas
curtas, contraste "sem site vs. com site", setas (→) indicando próximo passo.
Estética séria e estabelecida — "empresa profissional que você confiaria seu
dinheiro", minimalista e editorial, não "startup de IA", não "artesanal", não
clipart.

---

## Elementos-chave

- Farol: sempre contorno (stroke), nunca preenchido — "pintura" só no ponto de luz (terracota)
- Border-radius dos cards: 16px
- Botões: preenchimento terracota sólido (`#C1543A`) pra CTA principal, outline preto pra secundário
- Sombras/glow: mínimos — a luz do farol é um brilho pequeno e discreto, nunca um halo forte

---

## O que NUNCA fazer

- Não preencher o corpo do farol com cor sólida — só contorno
- Não deixar a luz do farol virar um brilho grande/forte — é um detalhe, não um efeito
- Não deixar "DIGITAL" competir em peso ou tamanho com "Luma"
- Não usar fontes serifadas ou manuscritas na UI (fora da logo) — Inter continua em tudo
- Não voltar pro roxo/dark-mode frio ou pro verde+vermelho vibrante das versões anteriores

---

## Logo

- **Ícone:** farol de contorno (torre afunilada + sala da lanterna em forma de casinha + ponto de luz terracota no topo) — símbolo de visibilidade/presença 24h
- **Composição:** farol à esquerda, "Luma" à direita (serifada bold, preta — protagonista), "DIGITAL" abaixo (sans tracked, taupe claro — discreto)
- **Arquivo editável (SVG, pra usar em HTML/site/carrossel):** `identidade/logo.svg` — usa Georgia + Segoe UI, ambas fontes nativas do Windows, então abre certo em qualquer visualizador (não depende de internet)
- **Arquivos PNG prontos em alta resolução:** `identidade/logo-claro.png` (fundo bege) e `identidade/logo-escuro.png` (fundo escuro) — pra abrir/enviar/imprimir
- **Arquivo só ícone (favicon, watermark pequeno):** `identidade/icone.svg` — traços mais grossos, sem o brilho gradiente, pra sobreviver em 16-24px
- **Foto de perfil Instagram/WhatsApp pronta:** `identidade/foto-perfil-instagram.png` (500x500, fundo bege, só o farol, sem texto)
- **Post de logo pro feed do Instagram:** `identidade/post-logo-instagram.png` (1080x1350, farol + wordmark centralizados + tagline "Sites profissionais para negócios locais." + @lumadigitalbr)
- **Capa do Facebook pronta:** `identidade/capa-facebook.png` (1640x624, logo à esquerda + frase "Sites profissionais e presença no Google para negócios locais" à direita) — atualizada em 2026-07-04 pra tirar a menção a "conteúdo e IA" (não é serviço atual, só roadmap futuro)
- **Capa/banner do WhatsApp Business pronta:** `identidade/capa-whatsapp-business.png` (1024x500, logo + headline + CTA com telefone)
- **Onde usar:** slide final do carrossel (CTA), header de propostas, slides de apresentação, favicon, posts/capas de redes sociais
- **Tamanho sugerido:** largura entre 120-200px nos HTMLs; ícone sozinho a partir de 16px (favicon)

---

## Observações adicionais

Perfil Instagram: [@lumadigitalbr](https://www.instagram.com/lumadigitalbr/) — 721 seguidores, 9 posts. Bio: "🔦 Criamos sites profissionais para negócios locais. Rápido · Bonito · Acessível. 👇 Solicite um orçamento". Categoria: Marketing Agency.

Os 9 posts publicados e o carrossel em `marketing/conteudo/carrossel-site-para-negocio-local-2026-07-04/` ainda estão no padrão antigo (roxo/dark-mode) — servem de referência de estrutura (layouts, ritmo de slide), não mais de cor. Refazer com a paleta atual quando for republicar conteúdo.
