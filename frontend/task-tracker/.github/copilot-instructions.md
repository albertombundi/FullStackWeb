### Objetivo

Fornecer instruções práticas e direcionadas para agentes de codificação (AI) que vão trabalhar neste front-end Angular (standalone components). Priorize mudanças pequenas e reversíveis: componente standalone, serviço de tarefas, ou pequenas alterações no mock backend.

## Panorama rápido (arquitetura)
- Projeto Angular v20 usando componentes standalone. Entrypoint: `src/main.ts` -> `bootstrapApplication(App, appConfig)`.
- Componentes UI em `src/app/components/` (cada componente tem `.ts`, `.html`, `.css`). Ex.: `tasks`, `task-item`, `header`.
- Serviço HTTP central: `src/app/services/task-service.ts` (usa `HttpClient`). Ponto único de API: `API_URL` em `src/app/app.config.ts`.

## Comandos essenciais
- npm install
- npm run server    # inicializa json-server: `json-server --watch db.json --port 5000` (API: http://localhost:5000/tasks)
- npm start         # ng serve — dev server em http://localhost:4200
- npm test          # executa testes (Karma + Jasmine)

## Convenções e padrões do repositório
- Componentes: sempre standalone. Use `@Component({ standalone: true, imports: [...] })` e mantenha templates/estilos ao lado do `.ts`.
- Naming: arquivos em kebab-case, classes em PascalCase. Ex.: `task-item.ts` -> class `TaskItem`.
- App providers: `src/app/app.config.ts` configura `HttpClientModule` via `importProvidersFrom(HttpClientModule)` e exporta `API_URL`.
- Modelo de dados: `src/app/Task.ts` define `{ id?: number; text: string; day: string; reminder: boolean }` — mantenha campos id/text/day/reminder ao alterar shape.

## Integração e fluxo de dados
- Single source API: `API_URL` (ex.: `http://localhost:5000/tasks`) — importe esse token em serviços.
- `TaskService` é providedIn:'root' e expõe:
  - `getTasks(): Observable<Task[]>` -> GET API_URL
  - `deleteTask(task: Task)` -> DELETE `${API_URL}/${task.id}`
  - `updateTaskReminder(task: Task)` -> PUT `${API_URL}/${task.id}` com JSON
  - `toggleReminder(task: Task)` apenas inverte localmente o boolean; chame `updateTaskReminder` para persistir

## Padrões práticos e armadilhas comuns
- Sempre rode `npm run server` antes de `npm start` para evitar 404/CORS ao acessar `db.json`.
- `mock-tasks.ts` contém exemplos em memória; a aplicação usa `json-server` em dev por padrão.
- Não altere o bootstrap (`src/main.ts`) para módulos sem um motivo de migração completa — componentes e providers dependem do `appConfig` exportado.

## Arquivos para inspeção rápida ao fazer mudanças
- UI/listagem: `src/app/components/tasks/tasks.ts` + `tasks.html`
- Item e eventos: `src/app/components/task-item/*` (toggle, delete)
- HTTP e regras de negócio: `src/app/services/task-service.ts`
- App-wide config: `src/app/app.config.ts` (contém `API_URL` e providers)
- Dados de exemplo: `db.json` e `src/app/mock-tasks.ts`

## Checklist para PRs (AI agents)
- Mantenha PRs pequenos (um componente ou um método de serviço).
- Inclua passos de verificação: `npm run server`, `npm start`, rota(s) testadas, e prints do console se relevante.
- Se alterar shape de `Task`, atualize `src/app/Task.ts`, `db.json`, e adicione/atualize um `*.spec.ts` simples.

---

Se quiser expandir alguma seção (tests, CI, e2e ou migração para módulos), diga qual foco e eu adapto o documento.
