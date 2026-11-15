# Designs

Design instances, sources and exports.

Part of the **Webship Workspace** (`~/workspace`), a container-based harness (DDEV by default). The rules in the root
`CLAUDE.md` apply here too; what follows is what is specific to this folder.

## The rule that matters here

Everything goes through DDEV. Never a host `composer`, `drush` or `mysql`:

```bash
ddev composer require drupal/something
ddev drush cr
ddev export-db --file=…        # not mysqldump
ddev delete -y -O              # not a dropped database
```

`ddev start` takes `-y`; **`ddev stop` does not**. Never write a `$databases` block into
`settings.php` — DDEV's `settings.ddev.php` owns the connection.

## Commands here

```bash
bash cmd-tools-graphify.sh                            # Map a project in this workspace into a queryable knowledge graph with
bash cmd-tools-obsidian.sh                             # Turn a project graph into an Obsidian vault
bash cmd-tools-ragify.sh                              # Index a project in this workspace into the Milvus vector database
```

Every one locates the workspace from its own path, so there is nothing to export and nothing to
install. `--help` on any of them lists its arguments.

## AI items for this folder

The plugin of this folder (`@webship.co/workspace-designs`) places its own AI items in the AI folders of the
workspace, when they are active:

- `designs-penpot-keeper` (`ai-agents/`): Runs and looks after a self-hosted Penpot instance in `designs/`: build, address, backup, access token, the server for design agents; never recreates an instance unasked
- `designs-workflow` (`ai-skills/`): How work is done in `designs/`: look, build, back up, token and server for AI work; every command with its flags, the `penpot` settings keys
- `/designs-backup` (`ai-commands/`): `/designs-backup [instance]`: checks the instance is there and running, backs up its database and assets, says where the backup is
- `designs-start-penpot` (`ai-prompts/`): A new session that starts a Penpot instance and gets it ready for design work with an AI assistant
