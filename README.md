cd ../frontend-web
pnpm i   # atau npm i / yarn
cp .env.example .env

VITE_API_BASE_URL=http://127.0.0.1:8000/api

pnpm dev  # atau npm run dev
# default: http://localhost:5173
