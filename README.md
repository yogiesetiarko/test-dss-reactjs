# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# install node using nvm
# using npm v20.11.0

# Build :
npm run build

# Check on Local after Build :
npm run preview
why we do this ?
- whenever we doing npm run dev, and you find that when your useEffect called twice. We will not find that in this situation, because useEffect will only run twice when 
  you run with npm run dev. (h**ps://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar)