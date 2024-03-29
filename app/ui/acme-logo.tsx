import { CalculatorIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

// Component for logo
export default function Logo() {
  return (<div className={`${lusitana.className} flex flex-row items-center leading-none text-white h-0 w-64`}    >
    <CalculatorIcon className="h-12 w-12 rotate-[15deg]" />
    <p className="text-[24px] w-48">GPA Calculator </p>
  </div>
  );
}
