import fsExtra from "fs-extra";

import { task } from "../internal/core/config/config-env";
import { internalTask } from "@internal/core/config/config-env";
import { TASK_CLEAN } from "./task-names";

export default function () : void {
  task(
    TASK_CLEAN,
    "Clears the cache and deletes all artifacts",
    async (_, { config }) => {
      console.log(internalTask)
      if (!config.paths) {
        return
      }
      await fsExtra.remove(config.paths.cache);
      await fsExtra.remove(config.paths.artifacts);
    }
  );
}
