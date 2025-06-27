import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const themeColors = [
  { color: 'green', label: 'Green', value: '#277C78' },
  { color: 'yellow', label: 'Yellow', value: '#F2CDAC' },
  { color: 'navy', label: 'Navy', value: '#626070' },
  { color: 'red', label: 'Red', value: '#C94736' },
  { color: 'purple', label: 'Purple', value: '#826CB0' },
  { color: 'turquoise', label: 'Turquoise', value: '#597C7C' },
  { color: 'brown', label: 'Brown', value: '#93674F' },
  { color: 'magenta', label: 'Magenta', value: '#934F6F' },
  { color: 'blue', label: 'Blue', value: '#3F82B2' },
  { color: 'navy-grey', label: 'Navy Grey', value: '#97A0AC' },
  { color: 'army', label: 'Army', value: '#7f9161' },
  { color: 'purple-seconday', label: 'Pink', value: '#AF81BA' },
  { color: 'gold', label: 'Gold', value: '#CAB361' },
  { color: 'orange', label: 'Orange', value: '#BE6C49' },
  { color: 'cyan', label: 'Cyan', value: '#82C9D7' },
];

function ColorSelectItem({ label, value }: { label: string; value: string }) {
  return (
    <SelectItem value={value}>
      <div className="flex items-center gap-2">
        <span
          style={{ backgroundColor: value }}
          className={`h-4 w-4 rounded-full`}
        ></span>
        {label}
      </div>
    </SelectItem>
  );
}

function SelectTheme({
  title,
  value,
  onChange,
  error,
}: {
  title: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) {
  return (
    <div className="mb-5">
      <div className="mb-2 flex items-start gap-1">
        <Label className="text-preset-5-bold text-grey-500 mb-2">{title}</Label>
        <span className="leading-none text-red-500" aria-hidden="true">
          *
        </span>
      </div>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          className={`w-full px-5 py-5 hover:cursor-pointer ${error ? 'border-red-500 ring-1 ring-red-500' : ''}`}
        >
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent className="max-h-72 overflow-auto bg-white">
          <SelectGroup>
            <SelectLabel>Categories</SelectLabel>
            {themeColors.length > 0 &&
              themeColors.map(({ color, label, value }) => (
                <ColorSelectItem key={color} label={label} value={value} />
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectTheme;
