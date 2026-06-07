export type CommandContext = {
   clear: () => void;
   exit: () => void;
};

export type CommandHandler = (
   args: string[],
   ctx: CommandContext,
) => React.ReactNode | void;
