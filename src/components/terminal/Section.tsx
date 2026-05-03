type Props = {
   children: React.ReactNode;
};

export default function Section({ children }: Props) {
   return <div className="mt-5">{children}</div>;
}
