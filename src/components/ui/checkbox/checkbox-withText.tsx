'use client'

import { Checkbox } from './checkbox.tsx'

export function CheckboxWithText() {
  return (
    <div className="items-top self-start items-center flex justify-center space-x-2">
      <Checkbox className="mb-6 bg-gray-50  self-start " id="terms1" />
      <div className="grid gap-1.5 items-center  leading-none">
        <label
          htmlFor="terms1"
          className="  mb-[66px] text-[14px] font-normal leading-[24px] tracking-normal text-center  text-light-900"
        >
          Remember me
        </label>
      </div>
    </div>
  )
}
