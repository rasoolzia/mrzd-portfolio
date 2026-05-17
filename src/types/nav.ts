export type NavAction = 'terminal' | 'contact';

type BaseItem = {
   symbol: string;
   color: string;
   label: string;
};

export type LinkItem =
   | (BaseItem & {
        href: string;
        external?: boolean;
        action?: never;
     })
   | (BaseItem & {
        action: NavAction;
        href?: never;
        external?: never;
     });
