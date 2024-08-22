import * as p from '@clack/prompts'

import { bold, cyan, gray, green, italic, Log } from '@kitql/helpers'
import { read, write } from '@kitql/internals'

// Need this trick to be be replaced by the real lib alias here ;)
const libAlias = '$' + 'lib'

const pkgFirstly = JSON.parse(read('./node_modules/firstly/package.json') ?? '{}')
const versionFirstly = pkgFirstly?.peerDependencies?.['remult'] ?? 'latest'

const pkg = JSON.parse(read('./package.json') ?? '{}')
const version = pkg.devDependencies?.['firstly'] ?? pkg.dependencies?.['firstly'] ?? '???'

console.info('')
p.intro(`${green(`⚡️`)} Welcome to firstly world! ${gray(` - v${version}`)}`)

const keys = ['all', 'module-demo', 'dependencies'] as const

type Keys = (typeof keys)[number]
const options: { value: Keys; label: string; hint?: string | undefined }[] = [
  {
    value: 'all',
    label: 'All',
    hint: 'If you are starting a new project, this is for you!',
  },
  {
    value: 'module-demo',
    label: 'module task',
    hint: 'A default module with a task entity and a controller (you can rename the folder and make it yours)',
  },
  {
    value: 'dependencies',
    label: 'dependencies',
    hint: 'Add all dependencies that make sense to use with firstly',
  },
]

const res = (await p.multiselect({
  message: 'You can generate different things here',
  options,
})) as Keys[]

const devDependenciesPrepare: Record<string, string> = {
  '@kitql/eslint-config': '0.3.6',
  '@kitql/helpers': '0.8.9',
  remult: versionFirstly,
  pg: '8.12.0',
  ...pkg.devDependencies,
}

// sort by name
const devDependenciesSorted = Object.keys(devDependenciesPrepare)
  .sort()
  .reduce(
    (acc, key) => {
      acc[key] = devDependenciesPrepare[key]
      return acc
    },
    {} as Record<string, string>,
  )

pkg.devDependencies = devDependenciesSorted
pkg.scripts = {
  ...pkg.scripts,
  '//// ---- BEST PRACTICES ---- ////': '',
  lint: 'kitql-lint',
  format: 'kitql-lint -f',
}
if (res.includes('all') || res.includes('dependencies')) {
  write('./package.json', [JSON.stringify(pkg, null, 2)])
}

const obj = {
  './.eslintrc.cjs': [
    `module.exports = {
    extends: ['@kitql'],
    rules: {
      // Your overrides here
    }
  }
  `,
  ],
  './.prettierignore': [
    `node_modules/
dist/
build
.vs
.vscode
.bob/
.next/
.idea/
.svelte-kit/
.husky/_/
.changeset/
.DS_Store
coverage/
package.json
pnpm-lock.yaml
README.md

db/
src/lib/ROUTES.ts
  `,
  ],
  './.prettierrc.cjs': [
    `const {
    //plugins,
    ...prettierConfig
  } = require('@kitql/eslint-config/.prettierrc.cjs')
  
  module.exports = {
    ...prettierConfig,
    // Your overrides here
  }`,
  ],
  '.env.example': [
    `# Enable some roles
# FF_ADMIN = 'JYC'
# FF_AUTH_ADMIN = ''

# Enable GitHub login
GITHUB_CLIENT_ID = ''
GITHUB_CLIENT_SECRET = ''
`,
  ],
  './src/lib/firstly/index.ts': [
    `import { firstly } from 'firstly/api'
import { auth } from 'firstly/auth'
import { Log } from '@kitql/helpers'

import { task } from './modules/task'

//----------------------------------------
// To switch to postgres (1/2)
//----------------------------------------
// import { createPostgresConnection } from 'remult/postgres'
// import { DATABASE_URL } from '$env/static/private'

//----------------------------------------
// To enable OAuth via Github (1/2)
//----------------------------------------
// import { github } from 'firstly/auth/providers'

/**
 * Your roles, use them in your app !
 */
export const Role = {
  ADMIN: 'admin',
  SUPER_ADMIN: 'super_admin',
}

/**
 * Your logs with a nice prefix, use \`log.info("Hello")\` / \`log.success("Yeah")\` / \`log.error("Ho nooo!")\` and see !
 */
export const log = new Log('${pkg.name}')

export const api = firstly({
  //----------------------------------------
  // To switch to postgres (2/2)
  //----------------------------------------
  // dataProvider: await createPostgresConnection({
  //  connectionString: DATABASE_URL,
  // }),

  modules: [
    //----------------------------------------
    // Core Module: auth
    //----------------------------------------
    auth({
      providers: {
        demo: [
          { name: 'Ermin' },
          { name: 'JYC', roles: [Role.ADMIN] },
          { name: 'Noam', roles: [Role.SUPER_ADMIN] },
        ],

        // password: {},

        // otp: {},

        oAuths: [
          //----------------------------------------
          // To enable OAuth via Github (2/2)
          // Instructions by hovering the method \`github\`
          //----------------------------------------
          // github()
        ],
      },
    }),

    //----------------------------------------
    // example of a userland module
    //----------------------------------------
    task({ specialInfo: 'hello from userland' }),

    //----------------------------------------
    // example of a userland inline module
    //----------------------------------------
    {
      name: 'app',
      entities: [],
      controllers: [],
      initApi: async () => {
        log.success('App is ready! 🚀')
      },
    },
  ],
})
`,
  ],
  './src/hooks.server.ts': [
    `import { sequence } from '@sveltejs/kit/hooks'

import { firstly } from 'firstly/handle'

import { api } from '${libAlias}/firstly'

export const handle = sequence(firstly(api))
`,
  ],
  './src/routes/api/[...remult]/+server.ts': [
    `import { api } from '${libAlias}/firstly'

export const GET = api.server.GET
export const POST = api.server.POST
export const PUT = api.server.PUT
export const DELETE = api.server.DELETE
`,
  ],
  './src/routes/+page.svelte': [`Home 👋`, ``],
  './src/routes/+layout.server.ts': [
    `import { remult } from 'remult'

import type { LayoutServerLoad } from './$types'

export const load = (async () => {
  return { user: remult.user }
}) satisfies LayoutServerLoad	
`,
  ],
  './src/routes/+layout.svelte': [
    `<script lang="ts">
  import { remult } from 'remult'
  import { isError } from 'firstly'
  import { Auth } from 'firstly/auth/client'

  import { invalidateAll } from '$app/navigation'

  import { route } from '${libAlias}/ROUTES'

  import type { LayoutData } from './$types'

  const login = async (identif: string) => {
    try {
      await Auth.signInDemo(identif)
      invalidateAll()
    } catch (error) {
      if (isError(error)) {
        alert(error.message)
      }
    }
  }

  const logout = async () => {
    try {
      await Auth.signOut()
      invalidateAll()
    } catch (error) {
      if (isError(error)) {
        alert(error.message)
      }
    }
  }

  export let data: LayoutData
  $: remult.user = data.user
</script>

<svelte:head>
  <title>${pkg.name}</title>
  <link
    rel="icon"
    href="https://raw.githubusercontent.com/jycouet/firstly/main/assets/firstly.png"
  />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css" />
</svelte:head>

<h1>${pkg.name}</h1>

{#if remult.authenticated()}
  <button style="float:right;" on:click={logout}>Logout</button>
  <span>{remult.user?.name} ({remult.user?.roles})<br /><br /></span>
{:else}
  <button on:click={() => login('Ermin')}>Login as Ermin</button>
  <button on:click={() => login('JYC')}>Login as JYC</button>
  <button on:click={() => login('Noam')}>Login as Noam</button>
  <a href="/ff/auth/sign-in">Have a look also this integrated Auth UI !</a>
{/if}

<hr />

<slot />

<hr />

<a href={route('github', { owner: 'jycouet', repo: 'firstly' })} target="_blank">
  ⭐️ firstly
</a>
|
<a href={route('github', { owner: 'remult', repo: 'remult' })} target="_blank">⭐️ remult</a>
`,
  ],
  './tsconfig.json': [
    `{
  "extends": "./.svelte-kit/tsconfig.json",
  "compilerOptions": {
    "experimentalDecorators": true,
    "allowJs": true,
    "checkJs": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "strict": true,
    "moduleResolution": "bundler"
  }
  // Path aliases are handled by https://kit.svelte.dev/docs/configuration#alias
  //
  // If you want to overwrite includes/excludes, make sure to copy over the relevant includes/excludes
  // from the referenced tsconfig.json - TypeScript does not merge them in
}
`,
  ],
  './vite.config.ts': [
    `import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

import { firstly } from 'firstly/vite'

import type { KIT_ROUTES } from '${libAlias}/ROUTES'

export default defineConfig({
  plugins: [
    firstly<KIT_ROUTES>({
      kitRoutes: {
        LINKS: { github: 'https://github.com/[owner]/[repo]' },
      }
    }),
    sveltekit(),
  ],
})
`,
  ],
  './src/lib/firstly/modules/task/index.ts': [
    `import type { Module } from 'firstly/api'

import { log } from '${libAlias}/firstly'

import { Task } from './Task'
import { TaskController } from './TaskController'

export const task: (o: { specialInfo: string }) => Module = ({ specialInfo }) => {
  return {
    name: 'task',
    entities: [Task],
    controllers: [TaskController],
    initApi: async () => {
      log.success(\`Task module is ready! 🚀 (specialInfo: \${specialInfo})\`)
    },
  }
}`,
  ],
  './src/lib/firstly/modules/task/Task.ts': [
    `import { Entity, Field, Fields, ValueListFieldType } from 'remult'
import { BaseEnum, LibIcon_Add, LibIcon_Delete, type BaseEnumOptions } from 'firstly'

@Entity('task', {
  allowApiCrud: true,
})
export class Task {
  @Fields.cuid()
  id!: string

  @Fields.createdAt()
  createdAt?: Date

  @Fields.string<Task>({
    validate: (task) => {
      if (task.title.length < 3) throw 'The title must be at least 3 characters long'
    },
  })
  title: string = ''

  @Fields.boolean()
  completed: boolean = false

  @Field(() => TypeOfTaskEnum, { inputType: 'selectEnum' })
  typeOfTask = TypeOfTaskEnum.EASY
}

@ValueListFieldType()
export class TypeOfTaskEnum extends BaseEnum {
  static EASY = new TypeOfTaskEnum('EASY', {
    caption: 'Easy',
    icon: { data: LibIcon_Add },
  })
  static HARD = new TypeOfTaskEnum('HARD', {
    caption: 'Hard',
    icon: { data: LibIcon_Delete },
  })
  constructor(id: string, o?: BaseEnumOptions<TypeOfTaskEnum>) {
    super(id, o)
  }
}    
`,
  ],
  './src/lib/firstly/modules/task/TaskController.ts': [
    `import { BackendMethod } from 'remult'

import { log } from '${libAlias}/firstly'

/**
 * await TaskController.sayHiFromTask("JYC")
 */
export class TaskController {
  @BackendMethod({ allowed: true })
  static async sayHiFromTask(name: string) {
    log.info(\`hello \${name} 👋\`)
  }
}
`,
  ],
}

for (const [path, content] of Object.entries(obj)) {
  if (res.includes('all')) {
    write(path, content)
  } else {
    if (res.includes('module-demo')) {
      if (path.startsWith('./src/lib/firstly/modules/task')) {
        write(path, content)
      }
    }
  }
}

p.outro(`🎉 Everything is ok, happy coding!`)

new Log('').info(
  gray(
    italic(
      `${bold('❔ More help')} ` +
        `at ${cyan('https://github.com/jycouet/firstly')} ` +
        `(📄 Docs, ⭐ Github, 📣 Discord, ...)\n`,
    ),
  ),
)
