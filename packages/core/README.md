<div align="center">
    <img alt="nestjs-logo" width="250" height="auto" src="https://raw.githubusercontent.com/tiimiit-lab/nerdearla-style-react/main/.readme-static/logo-tiimiit.svg" />
    <h1>Tiimiit Lab - Core </h1>
</div>

<div align="center">
    <img src="https://img.shields.io/static/v1.svg?style=flat&label=Node&message=v14.17.0&labelColor=339933&color=757575&logoColor=FFFFFF&logo=Node.js" alt="Node.js"/>
    <img src="https://img.shields.io/static/v1.svg?style=flat&label=Npm&message=v6.14.13&labelColor=CB3837&logoColor=FFFFFF&color=757575&logo=npm" alt="Npm"/>
    <a href="./license.md">
        <img alt="GitHub license" src="https://img.shields.io/github/license/tiimiit-lab/nerdearla-style-react?style=flat">
    </a>
    <img alt="Release" src="https://img.shields.io/npm/v/@nerdearla-style-react/core.svg">
    <br/> 
</div>
<br>

## Glosario

- [📝 Requerimientos básicos](#basic-requirements)
- [🛠️ Instalar dependencia](#install-dependencies)
- [👨‍💻 Uso](#use)
- [📄 Changelog](./CHANGELOG.md)
- [📜 License MIT](../../license.md)

---

<a name="basic-requirements"></a>

## 📝 Requerimientos básicos

- Node.js v14.17.0 or higher ([Download](https://nodejs.org/es/download/))
- YARN v1.22.17 or higher
- NPM v6.14.13 or higher

<a name="install-dependencies"></a>

## 🛠️ Instalar dependencia

```
npm install -S @nerdearla-style-react/core
```

```
yarn add @nerdearla-style-react/core
```

<a name="use"></a>

## 👨‍💻 Uso

### Provider

Se requiere instnaciar el provider en el componente de mayor jerarquia para impactar a los componentes hijos.

```typescript
import { Provider } from '@nerdearla-style-react/core';

function App() {
  return (
    <Provider variant={'theme-a'}>
      <Components />
    </Provider>
  );
}

export default App;
```

Ejemplo para importar un componente y usarlo en la app.

```typescript
import { Button } from '@nerdearla-style-react/core';

function Component() {
  return <Button>Example</Button>;
}

export default Component;
```

## 📄 Changelog

Todos los cambios notables de este paquete se documentarán en el archivo [Changelog](./CHANGELOG.md).

---

<div align="center">
    <a href="mailto:arqteam@prismamp.com" target="_blank" alt="Send a email">
        <img src="https://raw.githubusercontent.com/tiimiit-lab/nerdearla-style-react/main/.readme-static/iso-tiimiit.svg" width="80" alt="Iso Tiimiit" />
    </a><br/>
    <p>Made with ❤</p>
</div>
