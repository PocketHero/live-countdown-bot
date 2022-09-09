import { Manager } from "discord-hybrid-sharding";
import { config } from "./config.js";
import { postServerCount } from "./modules/post.js";
import { registerCommands } from "./modules/register.js";

import { clearClusterData } from "./modules/reloadable/sqlite3.js";
import { botstatsCommand } from "./modules/reloadable/commands/botstats.js";
import { countdownCommand } from "./modules/reloadable/commands/countdown.js";
import { deleteCommand } from "./modules/reloadable/commands/delete.js";
import { helpCommand } from "./modules/reloadable/commands/help.js";
import { listCommand } from "./modules/reloadable/commands/list.js";
import { newsitemCommand } from "./modules/reloadable/commands/newsitem.js";
import { reloadCommand } from "./modules/reloadable/commands/reload.js";
import { respawnCommand } from "./modules/reloadable/commands/respawn.js";
import { timerCommand } from "./modules/reloadable/commands/timer.js";
import { timestampCommand } from "./modules/reloadable/commands/timestamp.js";
import { HOURS } from "./modules/reloadable/utils.js";

const commandList = [
  {
    config: "dev",
    guildId: "725326756546084954",
    commands: [
      botstatsCommand,
      countdownCommand,
      deleteCommand,
      helpCommand,
      listCommand,
      newsitemCommand,
      reloadCommand,
      respawnCommand,
      timerCommand,
      timestampCommand,
    ],
  },
  {
    config: "dev",
    commands: [],
  },
  {
    config: "production",
    commands: [
      botstatsCommand,
      countdownCommand,
      deleteCommand,
      helpCommand,
      timerCommand,
      timestampCommand,
    ],
  },
  {
    config: "production",
    guildId: "719541990580289557",
    commands: [newsitemCommand, reloadCommand, respawnCommand],
  },
];

await registerCommands(commandList);

clearClusterData();

const manager = new Manager(`bot.js`, {
  shardsPerClusters: 5,
  mode: "process",
  token: config.token,
  execArgv: ["--experimental-loader=./modules/loader.js"],
});

manager.on("clusterCreate", cluster => console.log(`Launched Cluster ${cluster.id}`));
manager.spawn({ timeout: -1 });

setTimeout(() => postServerCount(getClusterDataSum("guildCount")), 1 * HOURS);
