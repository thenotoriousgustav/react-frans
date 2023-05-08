interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function Day({ children, style }: Props) {
  return (
    <div className='wrapper'>
      <p style={style}>{children}</p>
    </div>
  );
}
