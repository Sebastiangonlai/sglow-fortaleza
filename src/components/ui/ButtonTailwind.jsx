const ButtonTailwind = ({ name, uri, onClick, color = "bg-[--color-section-3]", className = "" }) => {
  const baseClasses = `relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-offset-slate-50`;
  const innerClasses = `inline-flex h-full w-full items-center justify-center rounded-full ${color} px-4 py-1 text-sm font-medium text-white/70 backdrop-blur-3xl`;
  const spinBg = `absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-40`;

  if (uri) {
    return (
      <a href={uri} aria-label={`Más información sobre ${name}`} className={`${baseClasses} ${className}`}>
        <span className={spinBg} />
        <span className={innerClasses}>{name}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} aria-label={name} className={`${baseClasses} ${className}`}>
      <span className={spinBg} />
      <span className={innerClasses}>{name}</span>
    </button>
  );
};

export default ButtonTailwind;