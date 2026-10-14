# 💊 FarmaMatch | Jogo da Memória Farmacêutico

> 🌐 **Jogue online agora:** [https://spiritstonesrafa-ux.github.io/farmamatch/](https://spiritstonesrafa-ux.github.io/farmamatch/)

Um jogo da memória estático, moderno, acessível e 100% responsivo, desenvolvido com foco na temática de **Farmácia, Saúde e Bioquímica**.

Pronto para deploy instantâneo no **GitHub Pages**, sem a necessidade de build, bundlers ou servidores backend.

---

## ✨ Destaques Visuais & UI/UX

- **Paleta Temática Harmoniosa:** Tons clínicos modernos (#f8fafc, #f1f5f9), Verde Menta Farmacêutico (#10b981), Azul Clínico (#0284c7) e toques de Coral Médico (#f43f5e).
- **Cartões 3D Realistas:** Animação de rotação com perspectiva realista (`rotateY(180deg)`), verso com emblema de cruz médica e frente em alta definição.
- **Feedback Visual Dinâmico:**
  - **Acerto:** Pulso suave esmeralda com selo de verificação (`✓`).
  - **Erro:** Tremor sutil em tom coral (`shake`) com retorno automático.
- **Áudio Nativo (Web Audio API):** Síntese sonora procedural de alta qualidade para virar carta, acerto, erro e vitória (sem depender de arquivos `.mp3` externos que possam quebrar).
- **Efeito Festivo de Vitória:** Animação de confetes coloridos utilizando `canvas-confetti`.
- **Sistema de Recordes Persistente:** Armazenamento no `LocalStorage` do melhor tempo e menor número de movimentos para cada dificuldade.

---

## 🩺 Itens Farmacêuticos & Médicos

O jogo conta com 12 ilustrações vetoriais (SVG) independentes e nítidas em qualquer resolução:

1. **Cápsula / Comprimido** (Bicolor com acabamento brilhante)
2. **Frasco de Xarope / Solução** (Com medidor lateral e cruz médica)
3. **Seringa** (Graduada com nível de medicação)
4. **Estetoscópio** (Design clínico em arco)
5. **Kit de Primeiros Socorros** (Maleta de emergência)
6. **Tubo de Pomada** (Bisnaga dermatológica)
7. **Termômetro Digital** (Display LCD e sensor clínico)
8. **Almofariz e Pilão** (O clássico macerador farmacêutico com folha medicinal)
9. **Conta-gotas** (Pipeta com bulbo e gota suspensa)
10. **Molécula** (Estrutura bioquímica aromática)
11. **Balança de Precisão** (Balança analítica de bancada)
12. **Curativo / Band-Aid** (Adesivo perfurado flexível)

---

## 🎯 Níveis de Dificuldade

| Nível | Grid | Cartas | Pares |
|---|---|---|---|
| **Fácil** | 4x3 / 3x4 | 12 | 6 pares |
| **Médio (Padrão)** | 4x4 | 16 | 8 pares |
| **Difícil** | 6x4 / 4x6 | 24 | 12 pares |

---

## 📁 Estrutura dos Arquivos

```text
├── index.html       # Estrutura HTML5 semântica e acessível (ARIA)
├── style.css        # Design tokens, layout responsivo e animações 3D
├── script.js        # Lógica do jogo, Web Audio API e LocalStorage
└── README.md        # Documentação e guia de publicação
```

---

## 🚀 Como Publicar no GitHub Pages (Passo a Passo)

### Método 1: Pela Interface Web do GitHub

1. Acesse [github.com](https://github.com) e crie um novo repositório (ex: `jogo-da-memoria-farmacia`).
2. Marque o repositório como **Public**.
3. Na página inicial do repositório, clique em **Add file** > **Upload files**.
4. Arraste os arquivos `index.html`, `style.css` e `script.js` para o repositório e confirme em **Commit changes**.
5. No menu superior do repositório, vá em **Settings** (Configurações).
6. No menu lateral esquerdo, clique em **Pages**.
7. Na seção **Branch**, selecione `main` (ou `master`) e pasta `/ (root)`.
8. Clique em **Save**.
9. Em 1 a 2 minutos, o GitHub exibirá o link público do jogo (ex: `https://seu-usuario.github.io/jogo-da-memoria-farmacia/`).

---

### Método 2: Pelo Terminal (Git CLI)

```bash
# 1. Inicialize o repositório local
git init

# 2. Adicione todos os arquivos
git add .

# 3. Crie o primeiro commit
git commit -m "feat: FarmaMatch - Jogo da Memoria Farmaceutico"

# 4. Conecte ao seu repositório remoto no GitHub
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

# 5. Envie para o GitHub
git push -u origin main
```

Depois disso, basta ir em **Settings** > **Pages** no GitHub e habilitar a branch `main`.

---

## 💻 Como Rodar Localmente

Basta abrir o arquivo `index.html` em qualquer navegador moderno (duplo clique ou arrastando o arquivo para o Chrome, Edge, Firefox ou Safari).

Ou, se preferir usar um servidor local:
```bash
# Usando Python:
python -m http.server 3000

# Usando Node.js:
npx serve .
```
E acesse `http://localhost:3000`.

---

## 👤 Autor & Direitos Autorais

Desenvolvido por **Rafael Alves** ([@spiritstonesrafa-ux](https://github.com/spiritstonesrafa-ux)).  
© 2026 **Rafael Alves**. Todos os direitos reservados.

