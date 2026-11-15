# @webship.co/workspace-designs

The **Designs** workspace of the [Webship Workspace](https://github.com/webship/workspace) dashboard:
the `designs/` folder (type `sites`), its settings file (`core/config/workspace.designs.settings.yml`),
its commands and its docs, as a plugin.

## Use it

```bash
cd ~/workspace
bash core/scripts/plugins.sh --require github:webship/workspace-designs
bash core/scripts/plugins.sh --activate designs --with-needs     # puts `designs` on the workspaces list of settings.yml
bash core/scripts/plugins.sh --install designs      # the folder, its settings file (once), its commands, its docs (once)
```

The settings file and the docs are placed once and never overwritten: they hold what you put there.
`--deactivate` takes the workspace off the list; the folder and its content stay.

## What it needs

The AI items land in the four AI folders, so the manifest needs them (`needs`): `ai-agents`, `ai-skills`, `ai-commands`, `ai-prompts`. `--activate designs` and `--install designs` stop while one is missing and name it; with `--with-needs` they are required, activated and installed first.

## The AI items

The plugin carries its own AI items (`ai/` in the package, the manifest's `ai` block), written for the work this folder is for. `--install` places each one in the workspace folder of its kind, when that folder is an active workspace folder; `--uninstall` removes them, and keeps one that was edited in its folder.

| Item | Kind | Lands in | What it is for |
| --- | --- | --- | --- |
| `designs-penpot-keeper` | Agent | `ai-agents/designs-penpot-keeper.md` | Runs and looks after a self-hosted Penpot instance in `designs/`: build, address, backup, access token, the server for design agents; never recreates an instance unasked |
| `designs-workflow` | Skill | `ai-skills/designs-workflow/` | How work is done in `designs/`: look, build, back up, token and server for AI work; every command with its flags, the `penpot` settings keys |
| `/designs-backup` | Command | `ai-commands/designs-backup.md` | `/designs-backup [instance]`: checks the instance is there and running, backs up its database and assets, says where the backup is |
| `designs-start-penpot` | Prompt | `ai-prompts/designs-start-penpot.md` | A new session that starts a Penpot instance and gets it ready for design work with an AI assistant |

From its folder an item is installed into the AI CLI (Claude Code by default) like any other: the folder's page on the dashboard, or `bash cmd-tools-ai-items.sh <name> --install` in the AI folder (`--to dev/<project>` for one project). A prompt is not installed: the New screen form lists it as the start of a new session. The body of every item is plain Markdown any AI CLI can follow; Claude Code is the default shape (the frontmatter, the launch line of a prompt). Every command, flag, settings key and path an item names is checked by `tests/items.test.ts`; the shape of the items is the one of the reference, [`docs/plugin-items-pattern.md` of the WordPress plugin](https://github.com/webship/workspace-wordpress/blob/1.0.x/docs/plugin-items-pattern.md).

## The commands

| Command |
| --- |
| `cmd-penpot-backup.sh` |
| `cmd-penpot-mcp.sh` |
| `cmd-penpot-project.sh` |
| `cmd-penpot-token.sh` |
| `cmd-tool-backup-design.sh` |
| `cmd-tools-reclaim.sh` |
| `cmd-tools-remove.sh` |

The bash functions these commands call live in the dashboard's `core/scripts/functions`.
