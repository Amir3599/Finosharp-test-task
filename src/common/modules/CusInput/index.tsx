import React from 'react'
import { Checkbox, Label, Radio, Select, TextInput, Textarea } from 'flowbite-react'

type props = {
    ibName: string
    regFunc?: Function
    className?: string
    inputClassName?: string
    type?: 'select' | 'date' | 'text' | 'radio' | 'checkbox' | 'textarea'
    options?: any[]
    setter?: any
    name?: string
    inputType?: string
    value?: any
}

const CusInput = ({ ibName, regFunc, className, type, options, setter, name, inputType, inputClassName, value }: props) => {

    if (type === 'checkbox') {
        return (
            <div className={className}>
                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">{ibName}</label>
                <Checkbox {...regFunc?.()} />
            </div>
        )
    }

    if (type === 'radio') {
        return (
            <fieldset className={className}>
                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">{ibName}</label>
                {options?.map((item) => (
                    <div key={item?.name} className="flex items-center gap-2">
                        <Radio id={item?.name} value={item?.name} name={name} onChange={(e) => setter(e.target.value)} />
                        <Label>{item?.name}</Label>
                    </div>
                ))}
            </fieldset>
        )
    }

    // if (type === 'date') {
    //     return (
    //         <div className={className}>
    //             <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">{ibName}</label>
    //             <DatePicker
    //                 locale='fa'
    //                 direction='rtl'
    //                 inputClass='w-full rounded-lg'
    //                 onChange={(e) => setter(e.value)}
    //             />
    //         </div>
    //     )
    // }

    if (type === 'select') {
        return (
            <div className={className}>
                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">{ibName}</label>
                <Select {...regFunc?.()}>
                    {options?.map((item) => <option key={item.id} value={Number(item.id) ?? 0}>{item?.name}</option>)}
                </Select>
            </div>
        )
    }

    if (type === 'textarea') {
        return (
            <div className={className}>
                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">{ibName}</label>
                <Textarea value={value} onChange={(e) => setter(e.target.value)} className={inputClassName} {...regFunc?.()} rows={1} />
            </div>
        )
    }

    return (
        <div className={className}>
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">{ibName}</label>
            <TextInput type={inputType} {...regFunc?.()} />
        </div>
    )
}

export default CusInput