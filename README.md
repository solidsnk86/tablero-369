# 🏆 Tablero de Puntos Deportivo

[![Netlify Status](https://api.netlify.com/api/v1/badges/1021dc72-aed0-4d68-a30b-6c1d1cd21182/deploy-status)](https://app.netlify.com/sites/tablerobap/deploys)

Un tablero deportivo digital moderno y fácil de usar para llevar el marcador de cualquier competencia deportiva. Perfecto para torneos locales, partidos entre amigos, eventos escolares o cualquier actividad que requiera un marcador visual.

## 🎯 ¿Qué hace esta aplicación?

Esta herramienta te permite crear un tablero de puntuación profesional desde cualquier dispositivo con internet. Es como tener un marcador digital en tu bolsillo:

- **📊 Marcador en tiempo real**: Suma y resta puntos fácilmente para dos equipos
- **⏱️ Cronómetro integrado**: Control total del tiempo de juego con botones de play, pausa y reset
- **✏️ Equipos personalizables**: Cambia los nombres de los equipos según la competencia
- **🔄 Reinicio rápido**: Vuelve a cero tanto el marcador como el cronómetro con un solo clic
- **📱 Funciona en cualquier dispositivo**: Computadora, tablet o celular - se adapta automáticamente

## 🚀 Cómo usar

1. **Accede a la aplicación** desde tu navegador web
2. **Personaliza los equipos** haciendo clic en sus nombres para editarlos
3. **Suma puntos** usando los botones + junto a cada equipo
4. **Controla el tiempo** con los botones del cronómetro
5. **Reinicia cuando sea necesario** con el botón de reset

¡Es así de simple! No necesitas descargar nada ni crear cuentas.

## 📋 Características principales

### Para organizadores de eventos
- ✅ Interfaz intuitiva y clara
- ✅ Visible desde lejos gracias a su diseño con números grandes
- ✅ No requiere instalación ni configuración
- ✅ Funciona sin conexión una vez cargado

### Para deportes y competencias
- ✅ Perfecto para básquet, fútbol, tenis de mesa, volleyball y más
- ✅ Cronómetro preciso para controlar tiempos de juego
- ✅ Marcador que se actualiza instantáneamente
- ✅ Botón de emergencia para reiniciar todo rápidamente

---

## 🛠️ Información técnica

### Tecnologías utilizadas
- **Framework**: [Next.js 13](https://nextjs.org/) con App Router
- **Lenguaje**: TypeScript/JavaScript
- **Estilos**: CSS Modules / Tailwind CSS
- **Hosting**: [Netlify](https://www.netlify.com/) con despliegue automático
- **Fuentes**: Google Fonts (Inter) optimizadas con `next/font`

### Requisitos del sistema
- Node.js 16.8 o superior
- npm, yarn, pnpm o bun como gestor de paquetes

### Instalación y desarrollo local

1. **Clona el repositorio**
```bash
git clone [url-del-repositorio]
cd tablero-puntos
npm install
# o
yarn install
# o
pnpm install
# o
bun install
```
Instala las dependencias
```bash
bashnpm install
# o
yarn install
# o
pnpm install
# o
bun install
```
Ejecuta el servidor de desarrollo
```bash
bashnpm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```
Abre la aplicación

Navega a http://localhost:3000 en tu navegador
La página se recarga automáticamente al guardar cambios

Estructura del proyecto

```bash
src/
├── app/                 # App Router de Next.js 13
│   ├── page.tsx        # Página principal
│   └── layout.tsx      # Layout base
├── components/         # Componentes reutilizables
├── styles/            # Archivos de estilos
└── public/           # Archivos estáticos
```
Scripts disponibles

```bash
npm run dev - Servidor de desarrollo
npm run build - Construcción para producción
npm run start - Servidor de producción
npm run lint - Verificación de código
```
Contribuir al proyecto
Las contribuciones son bienvenidas. Por favor:

Haz fork del repositorio
Crea una rama para tu feature (git checkout -b feature/nueva-funcionalidad)
Commit tus cambios (git commit -m 'Añade nueva funcionalidad')
Push a la rama (git push origin feature/nueva-funcionalidad)
Abre un Pull Request

<div align="center">
Desarrollado por @solidsnk86 - 2023
</div>
