# STLFlix – Teste Técnico

## Contexto

Este projeto é um configurador de modelos 3D desenvolvido com React, React Three Fiber e Tailwind CSS.

O ponto de partida já possui:

- Canvas 3D funcional com **1 modelo** carregando corretamente
- Estrutura de configuração de modelos em `src/config/models.config.js`
- Navbar e layout base em `src/App.jsx`

---

## Tarefa

Você receberá os assets necessários separadamente. Organize-os dentro de `public/` antes de começar:

public/
models/
StlAI_Car.glb ← já existente
StlFlix_Car.glb ← modelo 3D do segundo carro
textures/
StlAI_Car/
StlAiCar_A.png ← textura A do modelo StlAI Car
StlAiCar_B.png ← textura B do modelo StlAI Car
StlAiCar_Alpha.png ← mapa de opacidade do modelo StlAI Car
StlFlix_Car/
StlFlix_Car_A.png ← textura A do modelo StlFlix Car
StlFlix_Car_B.png ← textura B do modelo StlFlix Car
StlFlix_Car_Alpha.png ← mapa de opacidade do modelo StlFlix Car
thumbnails/
StlAiCar.png ← thumbnail do modelo StlAI Car
StlAiCar_A.png ← thumbnail da textura A do modelo StlAI Car
StlAiCar_B.png ← thumbnail da textura B do modelo StlAI Car
StlFlixCar.png ← thumbnail do modelo StlFlix Car
StlFlixCar_A.png ← thumbnail da textura A do modelo StlFlix Car
StlFlixCar_B.png ← thumbnail da textura B do modelo StlFlix Car

---

## O que implementar

### 1. Segundo modelo 3D

Adicione o segundo modelo (`StlFlix_Car`) ao arquivo `src/config/models.config.js`, seguindo o mesmo shape já documentado no arquivo.

### 2. Lógica de estado (Context ou store)

Crie a lógica de estado global para gerenciar:

- Qual modelo está selecionado
- Qual textura está ativa em cada modelo

> **Dica:** quando o usuário selecionar um modelo no painel esquerdo, o painel direito deve atualizar automaticamente para exibir apenas as texturas daquele modelo. A textura ativa deve resetar para o padrão sempre que o modelo mudar.

### 3. Painel esquerdo — Seleção de modelos

Crie um componente de painel na lateral esquerda com:

- Thumbnail de cada modelo
- Troca de modelo ao clicar
- Indicação visual do modelo ativo

### 4. Painel direito — Seleção de texturas

Crie um componente de painel na lateral direita com:

- Thumbnails das texturas do modelo selecionado
- Troca de textura ao clicar
- Indicação visual da textura ativa

### 5. Botão de download (ZIP)

Crie um botão que gera e baixa um arquivo `.zip` contendo:

- O modelo `.glb` do carro selecionado na raiz do `.zip`
- A textura `.png` ativa dentro de uma pasta chamada `textures/`

Estrutura esperada do `.zip`:

StlAI_Car.zip
StlAI_Car.glb
textures/
StlAiCar_A.png

> `jszip` já está instalado como dependência.

### 6. Loading

Crie um componente de loading que:

- Aparece enquanto o modelo 3D está sendo carregado
- É acionado toda vez que o usuário troca de modelo

---

## Como rodar

```bash
npm install
npm run dev
```

---

## Entrega

Para referência, veja o resultado final esperado em termos de funcionalidade:

- https://threejs-test-kohl-chi.vercel.app/

> Sinta-se livre para usar sua criatividade no UI/UX — cores, layout, animações, tipografia. O visual é por sua conta, desde que todas as funcionalidades estejam presentes e a experiência seja intuitiva.

Ao finalizar, envie:

- Link do repositório no GitHub com o código final
- Link do deploy no [Vercel](https://vercel.com) com o resultado visual

---

## Critérios avaliados

- Organização e clareza do código
- Tomada de decisão de arquitetura (onde cada coisa deve estar)
- Componentização
- Fidelidade às tarefas descritas
- Funcionalidade do resultado final

Boa sorte!
