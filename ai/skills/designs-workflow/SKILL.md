---
name: designs-workflow
description: How work is done in the `designs/` folder of the Webship Workspace — how a self-hosted Penpot instance is built, backed up and removed, how an access token is created, how the instance's server for design agents is started and registered, with the flags of each command and the settings keys of the folder (the `penpot` block). Use when asked to "start Penpot", "back up the designs", "create a Penpot token", "which version of Penpot runs here", or when a command of `designs/` is about to be run.
argument-hint: '[what you are about to do in designs]'
---

# designs-workflow

`~/workspace/designs` is the Designs folder of a Webship Workspace (container-based, DDEV by default).
Designs are design instances, sources and exports: a self-hosted Penpot instance run as a container project, and the design files and exports kept beside it. It comes with the Designs plugin (`@webship.co/workspace-designs`), which places the commands below in the folder. Every command finds the workspace from its own path; run it from the folder, and read `bash <command> --help` before quoting a flag.

## The order of work

1. **Look at what runs**: `ls -d ~/workspace/designs/*/`, and `ddev list`.
2. **Build** an instance when there is none: `bash cmd-penpot-project.sh`. It answers at
   `https://penpot.ddev.site`.
3. **Back it up** before a change: `bash cmd-penpot-backup.sh`.
4. **For AI work**: `bash cmd-penpot-token.sh` for a tool that takes an access token,
   `bash cmd-penpot-mcp.sh --mcp-action start` and `--mcp-action register` for a design agent.
5. **Never `--force`** an instance that holds designs.

## Builders

| Builder | Builds | Flags |
| --- | --- | --- |
| `cmd-penpot-project.sh` | A self-hosted Penpot instance, as a container project; with no name, the one `penpot.project` names | `--email` `--flags` `--force` `--fullname` `--launch` `--mail-port` `--no-register` `--password` `--penpot-version` `--public-uri` `--secret-key` |

## Commands

| Command | What it does | Flags |
| --- | --- | --- |
| `cmd-penpot-backup.sh` | The database and the assets of a Penpot instance: `[instance]` | none |
| `cmd-penpot-mcp.sh` | The instance's server for design agents: `--mcp-action` is `status` (the default), `start`, `stop` or `register` (with the AI CLI of this machine) | `--mcp-action` |
| `cmd-penpot-token.sh` | Creates an access token on an instance and prints it once: `[instance]` | `--email` `--password` `--token-name` |
| `cmd-tool-backup-design.sh` | One design file or folder as an archive, into `backups/designs/`: `<name>` | none |
| `cmd-tools-reclaim.sh` | Disk held by projects whose folder is gone: a dry run unless `--apply` | `--apply` `--keep-days` `--list-protected` `--only` |
| `cmd-tools-remove.sh` | Containers, volumes and folder together; refuses work that is on no remote unless `--force` | `--force` `--orphans` |

## Settings

| Key | File | What it says |
| --- | --- | --- |
| `doc.name` | `core/config/workspace.designs.settings.yml` | The folder under the workspace root: `designs` |
| `type` | `core/config/workspace.designs.settings.yml` | `sites`: the rows of the page are built sites, with the Build, Tests, Checks, Users, Backup and Remove actions |
| `penpot.project` | `core/config/workspace.designs.settings.yml` | The name of the instance the commands take when none is given: `penpot` |
| `penpot.version`, `penpot.flags`, `penpot.public_uri`, `penpot.mail_port` | `core/config/workspace.designs.settings.yml` | The Penpot release, its feature flags (plugins and access tokens on), the address it works on and the port of its mail catcher |
| `penpot.account.fullname`, `penpot.account.email` | `core/config/workspace.designs.settings.yml` | The first account; empty takes the workspace account |
| `penpot.mcp.package`, `penpot.mcp.port` | `core/config/workspace.designs.settings.yml` | The package and the port of the server for design agents |
| `presentation.kind`, `presentation.also_files` | `core/config/workspace.designs.settings.yml` | The page shows projects, and files beside them |
| `assistant.name`, `assistant.placeholder` | `core/config/workspace.designs.settings.yml` | What the assistant is called on this page; `default` takes the workspace's |
| `workspaces` | `core/config/settings.yml` | The active folders; `designs` is on it once the plugin is activated |

## Rules

- **`--force` deletes the designs.** It recreates the instance and removes its volumes: never add
  it unasked, and back the instance up first (`bash cmd-penpot-backup.sh`).
- **Never print a password, a secret key or an access token** in a report, and never write one
  into a file of the folder. The token command prints the token once: hand it over, do not keep it.
- **Back up before a change** to an instance; `bash cmd-tools-remove.sh` only when asked.
- **Containers only** (DDEV by default): the design platform runs in its own container project;
  nothing of it is installed on the host.
- **One instance is enough** for most work: look at what is running before building another.

The Designs plugin places these beside this one, each in the workspace folder of its kind: the agent `designs-penpot-keeper` (`ai-agents/`), the command `/designs-backup` (`ai-commands/`) and the prompt `designs-start-penpot` (`ai-prompts/`).
