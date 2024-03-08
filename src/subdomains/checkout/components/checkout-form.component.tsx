'use client';

import { SelectInput } from '@shared/modules/components/select.component';

const monthOptions = Array.from({ length: 12 }).map((_, index) => {
  return { value: index + 1, label: index + 1 };
});
const yearOptions = Array.from({ length: 21 }).map((_, index) => {
  const year = new Date().getFullYear();
  return { value: year + index, label: year + index };
});

export function CheckoutForm() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
        <label
          htmlFor="cardNumber"
          className="flex w-28 items-center text-sm font-semibold text-zinc-200 sm:justify-end"
        >
          Card number
        </label>
        <input
          type="tel"
          id="cardNumber"
          autoComplete="off"
          name="cardNumber"
          spellCheck="false"
          inputMode="numeric"
          pattern="[0-9\s]{13,19}"
          maxLength={19}
          required
          className="h-8 w-48 rounded border border-zinc-700 bg-zinc-950 px-2 text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-storesy-gray-900"
        />
      </div>
      <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
        <label
          htmlFor="nameOnCard"
          className="flex w-28 items-center text-sm font-semibold text-zinc-200 sm:justify-end"
        >
          Name on card
        </label>
        <input
          type="text"
          id="nameOnCard"
          maxLength={50}
          autoComplete="off"
          name="nameOnCard"
          spellCheck="false"
          required
          className="h-8 w-48 rounded border border-zinc-700 bg-zinc-950 px-2 text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-storesy-gray-900"
        />
      </div>
      <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
        <label
          id="expirationDateMonthLabel"
          htmlFor="expirationDateMonth"
          className="flex w-28 items-center text-sm font-semibold text-zinc-200 sm:justify-end"
        >
          Expiration date
        </label>
        <div className="flex gap-2">
          <SelectInput
            instanceId="select-date-month"
            inputId="expirationDateMonth"
            aria-labelledby="expirationDateMonthLabel"
            name="expirationDateMonth"
            options={monthOptions}
            defaultValue={monthOptions[0]}
            className="w-20"
          />
          <SelectInput
            instanceId="select-date-year"
            inputId="expirationDateYear"
            name="expirationDateYear"
            options={yearOptions}
            defaultValue={yearOptions[0]}
            className="w-28"
          />
        </div>
      </div>
      <div className="flex sm:gap-3">
        <label
          htmlFor="securityCode"
          className="flex w-28 items-center text-sm font-semibold text-zinc-200 sm:justify-end"
        >
          <p className="flex flex-col items-end">
            Security code <span>(CVV/CVC)</span>
          </p>
        </label>
        <input
          type="password"
          id="securityCode"
          maxLength={4}
          autoComplete="off"
          name="securityCode"
          spellCheck="false"
          pattern="[0-9]{4}"
          required
          className="h-8 w-20 rounded border border-zinc-700 bg-zinc-950 px-2 text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-storesy-gray-900"
        />
      </div>
    </div>
  );
}
