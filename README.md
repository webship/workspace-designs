# @webship/workspace-designs

The **Designs** workspace of the [Webship Workspace](https://github.com/webship/workspace) dashboard:
the `designs/` folder (type `sites`), its settings file (`core/config/workspace.designs.settings.yml`),
its commands and its docs, as a plugin.

## Use it

```bash
cd ~/workspace
bash core/scripts/plugins.sh --require github:webship/workspace-designs
bash core/scripts/plugins.sh --activate designs     # puts `designs` on the workspaces list of settings.yml
bash core/scripts/plugins.sh --install designs      # the folder, its settings file (once), its commands, its docs (once)
```

The settings file and the docs are placed once and never overwritten: they hold what you put there.
`--deactivate` takes the workspace off the list; the folder and its content stay.

## The commands

| Command |
| --- |
| `cmd-penpot-backup.sh` |
| `cmd-penpot-mcp.sh` |
| `cmd-penpot-project.sh` |
| `cmd-penpot-token.sh` |
| `cmd-tool-backup-design.sh` |
| `cmd-tools-graphify.sh` |
| `cmd-tools-obsidian.sh` |
| `cmd-tools-ragify.sh` |
| `cmd-tools-reclaim.sh` |
| `cmd-tools-remove.sh` |

The bash functions these commands call live in the dashboard's `core/scripts/functions`.
