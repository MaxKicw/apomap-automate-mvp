import type { CommandOption } from "../types/CommandOption";
import type { Store } from "../types/Store";

export const useCommands = (store: Store) => {
  const commands = {
    openSignUpDialog: () => {
      alert("Open signidddn");
    },
    increase: () => {
      store.increase(1);
    },
    decrease: () => {
      store.decrease(1);
    },
  } as Record<string, () => void>;
  const callEndpoint = (command: CommandOption) => {
    alert("Call endpoint");
  };
  const handleClick = (command: CommandOption) => {
    if (command.endpoint) {
      callEndpoint(command);
    }
    if (command.function) {
      commands[command.function]?.();
    }
  };
  return { handleClick };
};
