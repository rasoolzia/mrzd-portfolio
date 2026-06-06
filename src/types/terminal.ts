export type CommandHandler = (
   args?: string[],
   callback?: () => void,
) => React.ReactNode;
