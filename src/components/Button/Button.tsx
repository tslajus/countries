import styles from "./Button.module.scss";

type ButtonProps = {
  type?: ButtonType;
  label: string;
  isActive?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Button({
  type = "button",
  label,
  isActive,
  disabled = false,
  onClick,
  onChange,
  className,
}: ButtonProps) {
  if (type === "button") {
    return (
      <button
        className={`${styles.button} ${className}`}
        data-active={isActive}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }

  return (
    <label
      className={`${styles.button} ${className}`}
      role={type}
      data-active={isActive}
      tabIndex={0}
      onClick={onClick}
    >
      <input
        className={styles.hidden}
        type={type}
        checked={isActive}
        onChange={onChange}
      />
      {label}
    </label>
  );
}

export default Button;
