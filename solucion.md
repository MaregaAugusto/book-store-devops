Para ejecutar un Proyecto React, necesitarás seguir estos pasos:

1. **Node.js y npm:**
   Asegúrate de tener Node.js y npm (Node Package Manager) instalados en tu sistema. Puedes descargar e instalar Node.js desde [el sitio oficial de Node.js](https://nodejs.org/).

Soporte Version Node 16

### Instalar node Binario

Para instalar Node.js 16, puedes seguir estos pasos. 

### 1. **Windows:**
1. Descarga el instalador de Node.js para Windows desde [el sitio oficial de Node.js](https://nodejs.org/).
2. Ejecuta el instalador y sigue las instrucciones del asistente.
3. Durante la instalación, asegúrate de seleccionar la opción que instala también npm (Node Package Manager).
4. Una vez completada la instalación, puedes verificar la versión de Node.js y npm abriendo la línea de comandos y ejecutando los siguientes comandos:

   ```bash
   node -v
   npm -v
   ```

### 2. **macOS:**
1. Abre la terminal.
2. Instala Homebrew si aún no lo tienes instalado:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
3. Después de instalar Homebrew, puedes instalar Node.js 16 ejecutando el siguiente comando:
   ```bash
   brew install node@16
   ```

4. Verifica la instalación ejecutando:
   ```bash
   node -v
   npm -v
   ```

### 3. **Linux (Ubuntu/Debian):**
1. Abre la terminal.
2. Actualiza la lista de paquetes:
   ```bash
   sudo apt update
   ```
3. Instala Node.js y npm:
   ```bash
   sudo apt install nodejs
   sudo apt install npm
   ```

4. Verifica la instalación:
   ```bash
   node -v
   npm -v
   ```

### Uso de gestor NVM
`nvm` (Node Version Manager) es una herramienta muy útil y flexible para gestionar múltiples versiones de Node.js en un mismo sistema. Con `nvm`, puedes cambiar entre versiones de Node.js según tus necesidades y proyectos.

Para instalar Node.js 16 utilizando `nvm`, puedes seguir estos pasos:
### 1. Instalar nvm:
Si aún no tienes `nvm` instalado, puedes hacerlo siguiendo las instrucciones del repositorio oficial en [GitHub - nvm](https://github.com/nvm-sh/nvm#installing-and-updating).
Puedes instalar `nvm` en la terminal utilizando el siguiente comando (pueden variar según tu sistema):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
O con `wget`:
```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

### 2. Cerrar y abrir la terminal:
Después de instalar `nvm`, cierra y vuelve a abrir la terminal o ejecuta el siguiente comando para recargar la configuración de la terminal:

```bash
source ~/.bashrc
```
o
```bash
source ~/.zshrc
```

### 3. Instalar Node.js 16 con nvm:
Una vez que `nvm` esté instalado, puedes usarlo para instalar Node.js 16 ejecutando el siguiente comando:

```bash
nvm install 16
```

### 4. Seleccionar la versión instalada:
Si necesitas cambiar a la versión recién instalada, puedes hacerlo con el siguiente comando:

```bash
nvm use 16
```

### 5. Verificar la instalación:
Puedes verificar que Node.js 16 esté instalado correctamente con:

```bash
node -v
npm -v
```

2. **Instalación de Dependencias:**
   Cambia al directorio del proyecto recién creado:
   ```bash
   cd book-store
   ```
   Luego, instala las dependencias del proyecto ejecutando:
   ```bash
   npm install
   ```
   O, si prefieres usar Yarn:
   ```bash
   yarn install
   ```

4. **Ejecución de Scripts:**
   Una vez que las dependencias están instaladas, puedes ejecutar los scripts definidos en tu archivo `package.json`. Por ejemplo:
   - Iniciar el servidor de desarrollo:
     ```bash
     npm start
     ```
     O con Yarn:
     ```bash
     yarn start
     ```
   - Compilar la aplicación para producción:
     ```bash
     npm run build
     ```
     O con Yarn:
     ```bash
     yarn build
     ```
   - Ejecutar pruebas:

     ```bash
     npm test
     ```
     O con Yarn:
     ```bash
     yarn test
     ```

   - "Eject" (extraer configuración de build):
     ```bash
     npm run eject
     ```
     O con Yarn:
     ```bash
     yarn eject
     ```

### Uso de pm2 en Node

`PM2` (Process Manager 2) es una herramienta que permite administrar y mantener en ejecución aplicaciones Node.js en producción. 

### 1. Instalar PM2:
Puedes instalar PM2 globalmente usando npm:

```bash
npm install -g pm2
```

### 2. Iniciar tu Aplicación con PM2:
Supongamos que tienes una aplicación Node.js llamada `app.js`. Puedes iniciar la aplicación con PM2 usando el siguiente comando:

```bash
pm2 start app.js
```

### 3. Verificar el Estado de tus Procesos:
Puedes ver el estado de tus procesos y obtener información sobre ellos con:

```bash
pm2 list
```

### 4. Monitorear los Logs:
PM2 almacena los logs de tus aplicaciones en un archivo específico. Puedes ver los logs usando:

```bash
pm2 logs
```

### 5. Detener o Reiniciar tu Aplicación:
Para detener tu aplicación, puedes usar:

```bash
pm2 stop app
```
Para reiniciarla:

```bash
pm2 restart app
```

### 6. Configurar PM2 para Iniciar con el Sistema:
Puedes configurar PM2 para que inicie automáticamente tus aplicaciones al arrancar el sistema:

```bash
pm2 startup
```

Sigue las instrucciones impresas en la consola para configurar PM2 como un servicio de inicio.
### 7. Otros Comandos Útiles:

- Para detener todos los procesos:
  ```bash
  pm2 stop all
  ```
- Para eliminar todos los procesos:
  ```bash
  pm2 delete all
  ```

[documentación oficial de PM2](https://pm2.keymetrics.io/docs/usage/quick-start/)