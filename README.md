# E-Catalogue

A modern React application built with Vite, TypeScript, and Tailwind CSS for managing product catalogues.

## 🚀 Features

- React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- React Router for navigation
- Responsive design
- Product management system

## 🛠️ Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd e-catalogue
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🚀 Deployment

This project is configured for automatic deployment to Vercel using GitHub Actions.

### GitHub Actions Setup (Individual Account)

1. **Push your code to GitHub**

2. **Set up Vercel project:**
   - Go to [Vercel](https://vercel.com) and sign in to your individual account
   - Click "New Project" and import your GitHub repository
   - Deploy once manually to get the project configuration

3. **Get Vercel credentials:**
   - **Vercel Token**: Go to Vercel Account Settings → Tokens → Create new token
   - **Project ID**: Found in your Vercel project settings or URL (format: `prj_xxxxxxxxxx`)

4. **Add GitHub Secrets:**
   - Go to your GitHub repository
   - Navigate to Settings → Secrets and variables → Actions
   - Add these secrets:
     - `VERCEL_TOKEN`: Your Vercel API token
     - `VERCEL_PROJECT_ID`: Your Vercel Project ID

### Automatic Deployment

Once set up, the GitHub Actions workflow will automatically:
- Trigger on pushes to `main` or `master` branch
- Install dependencies
- Run linting checks
- Build the application
- Deploy to Vercel

The workflow file is located at `.github/workflows/deploy.yml`.

## 📁 Project Structure

```
e-catalogue/
├── src/
│   ├── components/     # Reusable components
│   ├── context/        # React context providers
│   ├── pages/          # Page components
│   ├── types/          # TypeScript type definitions
│   ├── App.tsx         # Main app component
│   └── main.tsx        # App entry point
├── .github/workflows/  # GitHub Actions workflows
├── dist/               # Build output
└── vercel.json         # Vercel configuration
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
