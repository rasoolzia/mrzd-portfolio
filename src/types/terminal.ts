export type CommandContext = {
   clear: () => void;
   exit: () => void;
   print: (output: React.ReactNode) => void;
};

export type Command = {
   name: string;
   description?: string;
   usage?: string;
   aliases?: string[];
   execute: (ctx: CommandContext, args: string[]) => void;
};

export type CommandRegistry = Map<string, Command>;
