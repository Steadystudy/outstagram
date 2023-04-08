type Props = {
  text: string;
  onClick: () => void;
};

export default function StyledButton({ text, onClick }: Props) {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
}
