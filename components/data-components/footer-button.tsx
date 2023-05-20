export const FooterButton = ({
  className,
  text,
  type,
  ...props
}: {
  className?: string
  text?: string
  type?: string
}) => {
  return (
    <button
      className={`w-min-32 text-sm-paragraph font-bold leading-none rounded-[34px] text-accent-green border-solid border-2 border-accent-green px-6 py-3.5 mb-2.5 ${className}`}
    >
      {text}
    </button>
  )
}
