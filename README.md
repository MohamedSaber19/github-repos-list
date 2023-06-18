# Github Repo List App

This is a simple React app that allows you to search for a Github repository using Github search API, and allow you to bookmark it using browser's storage for later viewing.

## Tech Stack

- React
- Typescript
- TailwindCSS
- PNPM
- Vite

## Getting Started

### Prerequisites

Before you start, make sure you have the following software installed on your machine:

- Node.js (version 14 or above)
- PNPM (version 6 or above)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/MohamedSaber19/github-repos-list.git
   ```

2. Go to the project directory:

    ```bash
    cd github-repos-list
    ```

3. Install dependencies:

   ```bash
    pnpm install
   ```

4. Start the development server:

   ```bash
    pnpm dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

### Other Commands

- `pnpm build` - Build the project for production.
- `pnpm preview` - Preview the production build.
- `pnpm lint` - Run ESLint.

## Folder Structure

```bash
├── public/             # Public assets
├── src/                # Source code
│   ├── components/     # React components
│   ├── services/       # Services
│   ├── types/          # Typescript types
│   ├── App.css         # Global styles
│   ├── App.tsx         # Root component
│   ├── constants.ts    # Constants
│   ├── index.css       # Styles entry point
│   └── main.tsx        # Entry point
├── .eslintrc.js        # ESLint configuration
├── .gitignore.js       # Git ignore
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── pnpm-lock.yaml      # PNPM lock file
├── postcss.config.json # PostCSS configuration
├── README.md           # Readme file
├── tsconfig.json       # Typescript configuration
├── tsconfig.node.json  # Typescript configuration for Node.js
└── vite.config.js      # Vite configuration
```

## License

This project is licensed under the MIT License.
