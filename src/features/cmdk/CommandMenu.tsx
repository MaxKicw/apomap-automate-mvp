import { clsx, Loader } from "@mantine/core";
import { Command } from "cmdk";
import { motion } from "framer-motion";
import type { FunctionComponent } from "react";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { trpc } from "../../utils/trpc";
import { CommandItem } from "./CommandItem";
import type { CommandOption } from "../../types/CommandOption";

export const CommandMenu: FunctionComponent = () => {
  const { t } = useTranslation("common");
  const [value, setValue] = useState<string>();

  const { data: commands, isLoading: loading } =
    trpc.public.getDefaultCommands.useQuery();

  const handleItemClick = (command: CommandOption) => {
    if (command.endpoint) {
      alert("Endpoint Command");
    }
    if (command.function) {
      alert("Command Command");
    }
  };

  return (
    <motion.div
      className="w-[90%] border-white  focus:border-white lg:w-[40%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      whileHover={{ scale: 0.99 }}
    >
      <Command className="shadow-xl">
        <Command.Input
          value={value}
          onValueChange={setValue}
          placeholder={t("command.placeholder") ?? "Loading..."}
          className={clsx(
            commands?.length === 0
              ? "rounded-lg"
              : "rounded-t-lg border-b-[1px] border-b-blue-gray-500 border-opacity-25",
            "w-full border-0 p-6 text-blue-gray-500 focus:border-0 focus:border-primary-500"
          )}
        />
        <Command.List className="rounded-b-lg bg-white py-4  text-blue-gray-500">
          {loading && (
            <Command.Item className="p-1 px-3 hover:opacity-70">
              <div className="flex h-full w-full flex-row items-center justify-between rounded-lg p-1 px-3 hover:bg-gray-100 ">
                <Loader />
              </div>
            </Command.Item>
          )}
          {commands?.map(
            (command) =>
              command && (
                <CommandItem
                  key={command.id}
                  onClick={handleItemClick}
                  command={command}
                />
              )
          )}
        </Command.List>
      </Command>
    </motion.div>
  );
};
