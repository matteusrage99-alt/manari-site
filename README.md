# MANARI EXPERIÊNCIAS — Site institucional

Landing page da **MANARI EXPERIÊNCIAS** — turismo de experiências exclusivas e
personalizadas na **Amazônia e em Manaus**.
Assinatura oficial: *"Amazônia sensorial, imersiva e responsável"*.

Construído com **Next.js (App Router) + TypeScript + Tailwind CSS + Lucide**.

---

## Como abrir o site localmente

Pré-requisitos: **Node.js 18+** (testado com Node 24) e **npm**.

```bash
npm install     # apenas na primeira vez
npm run dev     # inicia o servidor de desenvolvimento
```

Abra o endereço mostrado no terminal (ex.: **http://localhost:3000**).

> Se a porta 3000 estiver ocupada por outro projeto, o Next usa a próxima livre
> (ex.: **3001**) e mostra o endereço no terminal. Para fixar: `npm run dev -- -p 3001`.

Produção: `npm run build` e depois `npm start`.

---

## Onde editar o conteúdo

**Tudo** (textos, contatos, links, experiências e imagens) fica em **um único arquivo**:

```
src/data/manari.ts
```

Abra, altere os textos entre aspas e salve — a página recarrega sozinha. Destaques:

- **WhatsApp / telefone:** bloco `contact.whatsapp` (número `5592981270248` e exibição `(92) 98127-0248`).
- **E-mail e Instagram:** bloco `contact`.
- **As 7 experiências:** lista `experiences.items` (título, descrição e imagem de cada uma). Cada botão "Quero saber mais" abre o WhatsApp com o nome exato da experiência na mensagem.
- **Textos das seções:** `caminhos`, `essencia`, `personalizacao`, `galeria`, `idealizadores`, `ctaFinal`, `footer`.

### Trocar imagens

As fotos ficam em `public/images/manari/` (arquivos `.webp`). Para trocar, substitua o
arquivo mantendo o nome, ou aponte um novo caminho em `src/data/manari.ts`.

## Assets da marca

| Asset         | Onde está                        | Observação                                             |
| ------------- | -------------------------------- | ------------------------------------------------------ |
| Logo oficial  | `public/brand/manari-logo.svg`   | Também inline em `src/components/ui/Logo.tsx` (recolorível via `currentColor`). |
| Logo (PNG)    | `public/brand/manari-logo.png`   | Versão rasterizada, se precisar.                       |
| Favicon       | `src/app/icon.svg`               | A logo em verde profundo.                              |
| Foto do hero  | `public/images/manari/amazonia-hero.webp` | Fundo fotográfico da primeira dobra.          |
| Banner        | `public/manari-banner.jpg`       | Usado apenas como imagem de compartilhamento (Open Graph). |
| Fotos         | `public/images/manari/*.webp`    | 8 imagens do material institucional.                   |

### Fotos dos idealizadores

Em `src/data/manari.ts`, cada idealizador tem um campo `photo` (vazio por enquanto).
Ao receber os retratos oficiais, coloque os arquivos em `public/images/manari/` e aponte o
caminho (ex.: `photo: "/images/manari/amanda.webp"`). Enquanto vazio, aparece um monograma
elegante no lugar.

## Estrutura da página (nesta ordem)

Hero → Dois Caminhos → Essência → Portfólio (7 experiências) → Sob Medida →
Cultura e Sensorialidade → Idealizadores → CTA Final → Rodapé.

Componentes em `src/components/sections/`; cabeçalho e rodapé em `src/components/`.

## Identidade visual

- **Paleta oficial:** verde profundo `#243525`, verde musgo `#4B604B`, marfim `#F9F5EA`, areia `#E5D0AC`, terracota `#A05D37`.
- **Tipografia:** Cormorant Garamond (títulos) · Inter (textos). As fontes são auxiliares; nunca substituem o lettering da logo.
- Layout mobile-first, imagens grandes, muito espaço negativo e animações discretas (respeitando `prefers-reduced-motion`).

## Scripts

| Comando         | O que faz                                |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Servidor de desenvolvimento              |
| `npm run build` | Build de produção                        |
| `npm start`     | Serve o build de produção                |
| `npm run lint`  | Verificação de código (ESLint)           |

---

## ⚠️ Pendências antes de publicar

- [ ] **Direitos das imagens:** confirmar autorização de uso comercial na web das fotos
      extraídas do material institucional (`public/images/manari/`) e do banner do hero.
- [ ] **Revisão institucional dos textos** pela MANARI (descrições das experiências, essência, idealizadores).
- [ ] Definir o **domínio final** e configurar `NEXT_PUBLIC_SITE_URL` (usado nas URLs de Open Graph).
- [ ] Deploy **somente com autorização** (não foi feito deploy nem compra de domínio).

O site não inclui pagamentos, reservas automáticas, login nem banco de dados — nesta
fase, a conversão acontece via WhatsApp, conforme o briefing.
