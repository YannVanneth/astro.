interface LogoProps {
  Size?: number;
  className?: string;
}

export const Logo = ({ className = '', Size = 80 }: LogoProps) => (
  <div className={className}>
    <img
      className="logo"
      src="../../public/images/_logo.png"
      alt="Zendo"
      width={Size}
      height={Size}
    />
  </div>
);
