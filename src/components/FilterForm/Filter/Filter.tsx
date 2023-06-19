import { Button } from "@/components";

interface FilterProps {
  label: string;
  checked: boolean;
  className?: string;
  setFilter: (checked: boolean) => void;
}

function Filter({ setFilter, label, checked, className }: FilterProps) {
  return (
    <label>
      <Button
        className={className}
        label={label}
        type="checkbox"
        isActive={checked}
        onChange={(e) => setFilter(e.target.checked)}
      />
    </label>
  );
}

export default Filter;
