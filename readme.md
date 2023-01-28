<div align="center">
    <img alt="mex-logo" width="180" height="auto" src="https://raw.githubusercontent.com/tresdoce/tresdoce-ui/master/.readme-static/logo-mex-red.svg" />
    <h1>Tresdoce UI</h1>
</div>

<div align="center">
    <img src="https://img.shields.io/static/v1.svg?style=flat&label=Node&message=v14.17.0&labelColor=339933&color=757575&logoColor=FFFFFF&logo=Node.js" alt="Node.js"/>
    <img src="https://img.shields.io/static/v1.svg?style=flat&label=Npm&message=v6.14.13&labelColor=CB3837&logoColor=FFFFFF&color=757575&logo=npm" alt="Npm"/>
    <img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="lerna">
    <a href="./license.md">
        <img alt="GitHub license" src="https://img.shields.io/github/license/tresdoce/tresdoce-ui?style=flat">
    </a>
    <a href="https://github.com/tresdoce/tresdoce-ui/actions/workflows/master.yml" target="_blank">
        <img alt="GitHub Workflow Status" src="https://github.com/tresdoce/tresdoce-ui/actions/workflows/master.yml/badge.svg">
    </a>
    <br/> 
</div>
<br>

## Glosario

- [📕 Storybook](https://tresdoce.github.io/tresdoce-ui/)
- [📝 Requerimientos básicos](#basic-requirements)
- [💻 Scripts](#scripts)
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

Crear paquetes

```
yarn plop
```

Modo desarrollo

```
yarn dev
```

Transpilar paquetes

```
yarn build
```

Test paquetes

```
yarn test
```

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
    <a href="mailto:mdelgado@tresdoce.com.ar" target="_blank" alt="Send an email">
        <img src="https://raw.githubusercontent.com/tresdoce/tresdoce-ui/master/.readme-static/logo-mex-red.svg" width="120" alt="Mex" />
    </a><br/>
    <p>Made with ❤</p>
</div>
