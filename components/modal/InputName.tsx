'use client';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

function InputName({
  title,
  value,
  onChange,
  maxLength = 30,
  error,
}: {
  title: string;
  value: string;
  maxLength: number;
  error?: string;
  onChange: (value: string) => void;
}) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    // Limiter la saisie à maxLength caractères
    if (newValue.length <= maxLength) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex flex-col">
      <Label className="text-preset-5-bold text-grey-500 mb-2" htmlFor="name">
        {title}
        <span className="text-red-500">*</span>
      </Label>
      <Input
        className={`no-spinner items-center px-4 py-2.25 ${error ? 'border-red-500 ring-1 ring-red-500' : ''}`}
        type="string"
        id="name"
        placeholder="e.g. Rainy Days"
        value={value}
        onChange={handleInputChange}
        maxLength={maxLength}
      ></Input>
      <p className="mt-1 self-end text-sm text-gray-500">
        {value.length} of {maxLength} characters used
      </p>
    </div>
  );
}

export default InputName;
