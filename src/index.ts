/**
 * The Designs workspace for Webship Workspace: the `designs/` folder as a plugin.
 *
 * What the package carries is placed by the installer from the manifest (the folder's settings file,
 * its commands, its docs and its AI items, each in the folder of its kind) and listed by --activate; the dashboard draws the workspace from the
 * settings file like any other. Nothing to register at run time yet: this is where the folder's own
 * rail buttons, row menus or assistant context would go.
 */

import type { PluginApi } from '@webship.co/workspace-plugin-api';

export const WORKSPACE_KEY = 'designs';

/** The AI items the installer places, each in the workspace folder of its kind (ai/ in this package). */
export const AGENTS = ['designs-penpot-keeper'];
export const SKILLS = ['designs-workflow'];
export const AI_COMMANDS = ['designs-backup'];
export const PROMPTS = ['designs-start-penpot'];

export function register(api: PluginApi): void {
  api.addAssistantContext(() => `The designs/ workspace is the Designs workspace (a plugin, @webship.co/workspace-designs); its commands are the cmd-*.sh scripts in that folder. It comes with AI items for work in this folder: the agent \`designs-penpot-keeper\` (ai-agents/), the skill \`designs-workflow\` (ai-skills/), the command \`/designs-backup\` (ai-commands/) and the prompt \`designs-start-penpot\` (ai-prompts/).`);
}
