
# Instalação e Tratamento de Erros

Este guia descreve como instalar o projeto **React + TypeScript + Vite** e resolver possíveis erros durante o processo.

## Instalação

### 1. Clonar o repositório

Primeiro, clone o repositório para o seu diretório local:

```bash
git clone <URL-do-repositório>
```

### 2. Navegar até o diretório do projeto

Entre no diretório do projeto clonado:

```bash
cd <nome-do-repositório>
```

### 3. Instalar as dependências

Após acessar a pasta do projeto, instale as dependências do projeto usando **npm** ou **yarn**:

Com **npm**:

```bash
npm install
```

Ou com **yarn**:

```bash
yarn install
```

### 4. Rodar o projeto localmente

Agora, você pode iniciar o servidor de desenvolvimento:

Com **npm**:

```bash
npm run dev
```

Ou com **yarn**:

```bash
yarn dev
```

Isso iniciará o aplicativo, e você poderá acessá-lo localmente em:

```
http://localhost:3000
```

---

## Tratamento de Erros

### Erro 1: `ERR_MODULE_NOT_FOUND`

Se você encontrar o erro `ERR_MODULE_NOT_FOUND`, tente as seguintes soluções:

1. Verifique se as dependências foram instaladas corretamente. Execute novamente `npm install` ou `yarn install`.
2. Se o erro persistir, tente reinstalar todas as dependências:

Com **npm**:

```bash
rm -rf node_modules
npm install
```

Ou com **yarn**:

```bash
rm -rf node_modules
yarn install
```

### Erro 2: `Error: Cannot find module 'react'`

Esse erro ocorre quando o **React** não está instalado corretamente. Para resolver:

1. Verifique no `package.json` se o React está listado.
2. Instale o React manualmente:

Com **npm**:

```bash
npm install react react-dom
```

Ou com **yarn**:

```bash
yarn add react react-dom
```

### Erro 3: Problema com a versão do Node.js

Se aparecer erro relacionado à versão do **Node.js**, confira a versão instalada:

```bash
node -v
```

Se for uma versão muito antiga, atualize para a versão LTS mais recente disponível [aqui](https://nodejs.org/).

---

## Dúvidas

Se encontrar outros erros ou dificuldades, consulte:

- [Documentação do Vite](https://vitejs.dev/)
- [Documentação do React](https://reactjs.org/docs/getting-started.html)
