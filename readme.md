<div align="center">
    <img alt="nestjs-logo" width="250" height="auto" src="https://raw.githubusercontent.com/tiimiit-lab/nerdearla-style-react/main/.readme-static/logo-tiimiit.svg" />
    <h1>Tiimiit Lab - Design System </h1>
</div>

<div align="center">
    <img src="https://img.shields.io/static/v1.svg?style=flat&label=Node&message=v14.17.0&labelColor=339933&color=757575&logoColor=FFFFFF&logo=Node.js" alt="Node.js"/>
    <img src="https://img.shields.io/static/v1.svg?style=flat&label=Npm&message=v6.14.13&labelColor=CB3837&logoColor=FFFFFF&color=757575&logo=npm" alt="Npm"/>
    <img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="lerna">
    <a href="./license.md">
        <img alt="GitHub license" src="https://img.shields.io/github/license/tiimiit-lab/nerdearla-style-react?style=flat">
    </a>
    <a href="https://github.com/tiimiit-lab/nerdearla-style-react/actions/workflows/master.yml" target="_blank">
        <img alt="GitHub Workflow Status" src="https://github.com/tiimiit-lab/nerdearla-style-react/actions/workflows/master.yml/badge.svg">
    </a>
    <br/> 
</div>
<br>

## Glosario

- [📕 Storybook](https://tiimiit-lab.github.io/nerdearla-style-react/)
- [📝 Requerimientos básicos](#basic-requirements)
- [💻 Scripts](#scripts)
- [🔀 Workflows](#workflows)
- [📤 Commits](#commits)
- [📜 License MIT](license.md)

---

<a name="basic-requirements"></a>

## 📝 Requerimientos básicos

- Node.js v14.17.0 or higher ([Download](https://nodejs.org/es/download/))
- YARN v1.22.17 or higher
- NPM v6.14.13 or higher
- Lerna

<a name="scripts"></a>

## 💻 Scripts

Instalar Lerna

```
npm i -g lerna
```

Instalar dependencias del monorepo

```
yarn install
```

Transpilar paquetes

```
yarn build
```

Test paquetes

```
yarn test
```

<a name="workflows"></a>

## 🔀 Workflows (GitHub Actions)

Para poder hacer uso de los **workflows** que contiene este repositorio, primero debes generar los **tokens**
correspondientes.

En los siguientes links, vas a encontrar toda la documentación para obtener los **tokens** de cada aplicación, que luego
tendrás que configurarlo en los **secrets** en el repositorio. [Configurar Secret](https://sergiodxa.com/articles/github-actions-npm-publish#configure-the-secret)

#### Secrets

- `GH_TOKEN` [Documentación GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- `NPM_TOKEN` [Documentación NPM](https://snyk.io/blog/github-actions-to-securely-publish-npm-packages/)

<a name="commits"></a>

## 📤 Commits

Para los mensajes de commits se toma como
referencia [`conventional commits`](https://www.conventionalcommits.org/es/v1.0.0/#resumen).

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

- **type:** chore, docs, feat, fix, refactor, test (más comunes)
- **scope:** indica la página, componente, funcionalidad
- **description:** comienza en minúsculas y no debe superar los 72 caracteres.

---

<div align="center">
    <a href="mailto:arqteam@prismamp.com" target="_blank" alt="Send a email">
        <img src="https://raw.githubusercontent.com/tiimiit-lab/nerdearla-style-react/main/.readme-static/iso-tiimiit.svg" width="80" alt="Iso Tiimiit" />
    </a><br/>
    <p>Made with ❤</p>
</div>
